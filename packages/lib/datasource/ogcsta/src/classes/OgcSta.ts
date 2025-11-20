/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import {
  BoxedDatastream,
  BoxedLocation,
  BoxedThing,
  IOGCSTAConfigartion,
  IOGCSTAData,
  IOGCSTAHistoryConfig,
} from '../interfaces/OgcStaConfiguration'
import {
  Configuration,
  Datastream,
  DatastreamsApi,
  Observation,
  ObservationsApi,
  ResponseError,
  ThingsApi,
} from '../client'
import { inject, injectable } from 'inversify'
import {
  ConnectionRepository,
  type IConnection,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  type VariableRepository,
  identifier as variableIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { type IRequestParams } from 'org.eclipse.daanse.board.app.lib.connection.base'
import { transformFromThingLocationDastreamToLocationThingDatastream } from '../util/transformThings'
import { FILTER, FILTERRESET, NOACTION, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL } from '../interfaces/Constances'
import { OgcStaStoreI } from '../interface/OgcStaI'
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  LoggerFactory,
  identifier as loggerIdentifier,
  type ILogger
} from 'org.eclipse.daanse.board.app.lib.logger'

@injectable()
export class OgcStaStore extends BaseDatasource implements OgcStaStoreI {
  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  @inject(variableIdentifier)
  private variableRepository!: VariableRepository

  @inject(loggerIdentifier)
  private loggerFactory!: LoggerFactory

  // Create loggers
  private logMqtt!: ILogger
  private logData!: ILogger
  private logHistory!: ILogger
  private logCore!: ILogger

  private configuration!: IOGCSTAConfigartion;
  connection: string = ''
  private mqttConnection: any = null
  private subscribedDatastreams: Map<string, string> = new Map() // datastreamId -> topic
  private subscribedLocations: Map<string, string> = new Map() // locationId -> topic
  private initialLoadDone: boolean = false
  private mqttUpdateTimer: any | null = null
  private hasPendingMqttUpdates: boolean = false
  requestFlag: { key: string; params: any } = {
    key: FILTERRESET,
    params: undefined,
  }
  baseConfigration: Configuration | undefined
  resultMap: IOGCSTAData = {
    things: [],
    datastreams: [],
    observations: [],
    locations: [],
  }

  private debounceTimer: any | null = null;
  private filterDebounceTimer: any | null = null;
  private lastFilterType: string | null = null;
  private lastObservationsParams: any = null;
  private watchedVariables: Set<string> = new Set();

  init(configuration: IOGCSTAConfigartion): void {
    super.init(configuration)

    // Initialize loggers from factory
    this.logMqtt = this.loggerFactory.createLogger('daanse:ogcsta:mqtt')
    this.logData = this.loggerFactory.createLogger('daanse:ogcsta:data')
    this.logHistory = this.loggerFactory.createLogger('daanse:ogcsta:history')
    this.logCore = this.loggerFactory.createLogger('daanse:ogcsta:core')

    // Check if this is a re-initialization (config change)
    const isReInit = this.configuration !== undefined

    // If re-initializing, clean up old MQTT subscriptions first
    if (isReInit && this.mqttConnection) {
      this.logMqtt('Configuration changed, cleaning up old MQTT subscriptions')
      this.unsubscribeAll()
      this.initialLoadDone = false
    }

    this.configuration = configuration;
    if (!configuration.connection) throw new Error('Connetion must be set')
    this.connection = configuration.connection
    this.requestFlag = { key: FILTERRESET, params: undefined }

    // Setup MQTT Connection if configured
    if (configuration.mqttConnection && this.connectionRepository) {
      try {
        this.mqttConnection = this.connectionRepository.getConnection(configuration.mqttConnection)
        this.setupMQTTMessageHandler()
        this.logMqtt('MQTT Connection established:', configuration.mqttConnection)
      } catch (e) {
        console.error('OGCSTA: Could not establish MQTT connection:', e)
        this.mqttConnection = null
      }
    } else if (isReInit && this.mqttConnection) {
      // MQTT connection was removed from config
      this.logMqtt('MQTT Connection removed from configuration')
      this.mqttConnection = null
    }

    this.setupVariableWatchers();
  }

  callEvent(event: string, params: any): void {
    if (event == FILTER) {
      // Determine filter type based on params
      const filterType = Object.keys(params)[0] // 'observations', 'historicalLocations', etc.

      // Save observations params for later use in onVariableChanged
      if (filterType === 'observations' && params.observations) {
        this.lastObservationsParams = params.observations;
      }

      // Only debounce if it's the same filter type as the last call
      if (this.filterDebounceTimer && filterType === this.lastFilterType) {
        clearTimeout(this.filterDebounceTimer);
      } else if (this.filterDebounceTimer) {
        // Different filter type - execute the pending debounced call immediately
        clearTimeout(this.filterDebounceTimer);
        this.filterDebounceTimer = null;
        this.notify();
      }

      this.requestFlag = { key: FILTER, params: params }
      this.lastFilterType = filterType

      // Set new debounce timer for 300ms
      this.filterDebounceTimer = setTimeout(() => {
        this.notify();
        this.filterDebounceTimer = null;
      }, 300);
    } else if (event == UPDATE_MQTT_SUBSCRIPTIONS) {
      // Update MQTT subscriptions only (no data fetch, no notify)
      // Only works in MQTT mode - ignored otherwise
      if (this.mqttConnection) {
        this.logCore('Updating MQTT subscriptions:', params?.observations?.length || 0, 'observations')
        this.subscribeToDatastreams(params?.observations || [])
        this.subscribeToLocations()
      }
    } else if (event == MQTT_UNSUBSCRIBE_ALL) {
      // Unsubscribe from all MQTT topics
      // Only works in MQTT mode - ignored otherwise
      if (this.mqttConnection) {
        this.logCore('Unsubscribing from all MQTT topics')
        this.unsubscribeAll()
      }
    } else {
      this.requestFlag = { key: FILTERRESET, params: params }
      // FILTERRESET is immediate
      this.notify()
    }
  }

  destroy(): void {
    this.logCore('Store destroy() called')

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.filterDebounceTimer) {
      clearTimeout(this.filterDebounceTimer);
      this.filterDebounceTimer = null;
    }
    if (this.mqttUpdateTimer) {
      clearTimeout(this.mqttUpdateTimer);
      this.mqttUpdateTimer = null;
    }

    // Cleanup MQTT subscriptions - check if connection is still active
    if (this.mqttConnection) {
      this.logCore(`Cleaning up MQTT subscriptions on destroy (${this.subscribedDatastreams.size} datastreams, ${this.subscribedLocations.size} locations)`)
      // Check if the MQTT client is still connected before unsubscribing
      const client = (this.mqttConnection as any).client
      if (client && client.connected) {
        this.unsubscribeAll()
      } else {
        this.logCore('Client not connected, just clearing maps')
        // Just clear the maps without trying to unsubscribe
        this.subscribedDatastreams.clear()
        this.subscribedLocations.clear()
      }
      this.mqttConnection = null
    }

    this.logCore('Store destroyed')
  }

  async getData<T>(type: string, options?: any): Promise<T> {
    if (!this.connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    this.baseConfigration = new Configuration({
      basePath: '',
      fetchApi: (a, b) => {
        //@ts-ignore
        return connection.fetch({ url: a } as IRequestParams, b) as Promise<any>
      },
    })

    // Check if this is an isolated request (don't modify cache)
    const isIsolatedRequest = options?.isolatedRequest === true

    // Only clear cache if explicitly requested via options or if no data exists yet
    const shouldReload = options?.reload ||
                        this.requestFlag.key == FILTERRESET ||
                        (!this.resultMap.things || this.resultMap.things.length === 0)

    if (shouldReload && !isIsolatedRequest) {
      // Clear previous results only when explicitly reloading
      this.resultMap = {
        things: [],
        datastreams: [],
        observations: [],
        locations: [],
      }
    }

    const listOfPromesis: Promise<IOGCSTAData>[] = []

    // If options contains filter parameters, temporarily set requestFlag
    if (options?.filter) {

      const originalRequestFlag = this.requestFlag
      this.requestFlag = { key: FILTER, params: options.filter }
      this.getPartitionalData(listOfPromesis)
      this.requestFlag = originalRequestFlag
    } else if (this.requestFlag.key == FILTER) {
      this.getPartitionalData(listOfPromesis)
    } else if (shouldReload) {
      // Only fetch all data if we're reloading
      this.getAllData(listOfPromesis)
    }

    // Only fetch new data if there are promises to execute
    if (listOfPromesis.length > 0) {
      const results: IOGCSTAData[] = await Promise.all(listOfPromesis)

      // If isolated request, return data without modifying cache
      if (isIsolatedRequest) {
        const isolatedData: IOGCSTAData = {
          things: [],
          datastreams: [],
          observations: [],
          locations: [],
        }

        for (const result of results) {
          if (result.datastreams) {
            isolatedData.datastreams = isolatedData.datastreams?.concat(result.datastreams)
          }
          if (result.things) {
            isolatedData.things = isolatedData.things?.concat(result.things)
          }
          if (result.observations) {
            isolatedData.observations = isolatedData.observations?.concat(result.observations as Observation[])
          }
          if (result.locations) {
            isolatedData.locations = isolatedData.locations?.concat(result.locations)
          }
        }

        // Return isolated data without modifying cache
        if (type == 'OGCSTAData') {
          return {
            things: isolatedData.things ? isolatedData.things.map(t => ({ ...t })) : [],
            datastreams: isolatedData.datastreams ? [...isolatedData.datastreams] : [],
            observations: isolatedData.observations ? [...isolatedData.observations] : [],
            locations: isolatedData.locations ? isolatedData.locations.map(loc => ({ ...loc })) : []
          } as T
        }
        return isolatedData as T
      }

      // Normal request: add to cache
      for (const result of results) {
        if (result.datastreams) {
          this.resultMap.datastreams = this.resultMap.datastreams?.concat(result.datastreams)
        }
        if (result.things) {
          this.resultMap.things = this.resultMap.things?.concat(result.things)
        }
        if (result.observations) {
          this.resultMap.observations = this.resultMap.observations?.concat(result.observations as Observation[])
        }
        if (result.locations) {
          this.resultMap.locations = this.resultMap.locations?.concat(result.locations)
        }
      }

      // Process observations for filtered data
      if (options?.filter || this.requestFlag.key == FILTER) {
        const observationsParam = options?.filter?.observations || this.requestFlag.params?.observations
        this.logData('🔍 Processing observations for datastreams:', observationsParam?.length || 0)
        this.logData('🔍 Available observations in resultMap:', this.resultMap.observations?.length || 0)
        for (const d of observationsParam ?? []) {
          this.logData('🔍 Looking for observations for datastream:', d.iotId)
          const ds = this.resultMap.datastreams?.find(s => s.iotId == d.iotId)
          if (ds) {
            // Get ALL observations for this datastream, not just the first one
            const datastreamObservations = this.resultMap.observations?.filter(
              o => o.ds_source == d.iotId
            ) || []

            ds.observations = datastreamObservations as Observation[]
            this.logData(`✅ Assigned ${datastreamObservations.length} observations to datastream: ${ds.name}`)
          }
        }
      }

      // Clear processed observations
      for (const d of this.requestFlag.params?.observations ?? []) {
        this.resultMap.observations = this.resultMap.observations?.filter(
          o => o.ds_source !== d.iotId
        ) || []
      }
    }

    if (type == 'OGCSTAData') {
      // Create a deep copy of things and locations to trigger Vue reactivity when locations are updated in-place
      // We need to copy the objects themselves, not just the arrays, because locations are mutated
      return {
        things: this.resultMap.things ? this.resultMap.things.map(t => ({ ...t })) : [],
        datastreams: this.resultMap.datastreams ? [...this.resultMap.datastreams] : [],
        observations: this.resultMap.observations ? [...this.resultMap.observations] : [],
        locations: this.resultMap.locations ? this.resultMap.locations.map(loc => ({ ...loc })) : []
      } as T
    }
    return this.resultMap as T
  }

  getOriginalData(): any {
    //throw new Error('not implemented');
  }

  static validateConfiguration(configuration: IOGCSTAConfigartion) {
    return !!configuration?.connection
  }

  getAllData(listOfPromesis: Promise<IOGCSTAData>[]) {
    listOfPromesis.push(
      (async () => {
        try {
          const things = (
            await new ThingsApi(this.baseConfigration).v11ThingsGet({
              $expand: 'Datastreams,Locations',
            })
          ).value!
          return transformFromThingLocationDastreamToLocationThingDatastream(
            things as BoxedThing[],
          )
        } catch (e) {
          if ((e as ResponseError).response.status == 501) {
            // Expand not implemented --> Fallback
            return await this.fallBackSingleRequests()
          } else {
            throw e
          }
        }
      })(),
    )
  }

  async fallBackSingleRequests() {
    const things = (await new ThingsApi(this.baseConfigration).v11ThingsGet())
      .value! as BoxedThing[]
    for (const thing of things) {
      if (!thing.locations) {
        thing.locations = []
      }
      if (!thing.datastreams) {
        thing.datastreams = []
      }
      try {
        if (thing.iotId) {
          const locs = (
            await new ThingsApi(
              this.baseConfigration,
            ).v11ThingsEntityIdLocationsGet({ entityId: thing.iotId })
          ).value as BoxedLocation[]
          thing.locations = locs
        }
      } catch (e) {
        this.logCore('Error:', e)
      }
      try {
        const dss = (
          await new ThingsApi(
            this.baseConfigration,
          ).v11ThingsEntityIdDatastreamsGet({ entityId: thing.iotId! })
        ).value as BoxedDatastream[]
        thing.datastreams = dss
      } catch (e) {
        this.logCore('Error:', e)
      }
    }
    const locations =
      transformFromThingLocationDastreamToLocationThingDatastream(things)
    return locations
  }

  getPartitionalData(listOfPromesis: Promise<IOGCSTAData>[]) {
    this.getThings(listOfPromesis)
    this.getDataStreams(listOfPromesis)
    this.getObservations(listOfPromesis)
    this.getHistoricalLocations(listOfPromesis)
  }

  private resolveTimeValue(timeValue?: string, variableName?: string): string | undefined {
    if (variableName && this.variableRepository) {
      const variable = this.variableRepository.getVariable(variableName);
      if (variable && variable.value) {
        return variable.value;
      }
    }
    return timeValue;
  }

  private buildHistoryFilter(historyConfig?: IOGCSTAHistoryConfig): string {
    if (!historyConfig?.enabled) return '';

    const filterParts: string[] = [];

    // Phenomenon time filters
    const phenomenonStart = this.resolveTimeValue(
      historyConfig.phenomenonTime?.start,
      historyConfig.phenomenonTime?.startVariable
    );
    const phenomenonEnd = this.resolveTimeValue(
      historyConfig.phenomenonTime?.end,
      historyConfig.phenomenonTime?.endVariable
    );

    if (phenomenonStart) {
      filterParts.push(`phenomenonTime gt ${phenomenonStart}`);
    }
    if (phenomenonEnd) {
      filterParts.push(`phenomenonTime lt ${phenomenonEnd}`);
    }

    // Result time filters
    const resultStart = this.resolveTimeValue(
      historyConfig.resultTime?.start,
      historyConfig.resultTime?.startVariable
    );
    const resultEnd = this.resolveTimeValue(
      historyConfig.resultTime?.end,
      historyConfig.resultTime?.endVariable
    );

    if (resultStart) {
      filterParts.push(`resultTime gt ${resultStart}`);
    }
    if (resultEnd) {
      filterParts.push(`resultTime lt ${resultEnd}`);
    }

    // Generic time range (uses phenomenonTime by default)
    const rangeStart = this.resolveTimeValue(
      historyConfig.timeRange?.start,
      historyConfig.timeRange?.startVariable
    );
    const rangeEnd = this.resolveTimeValue(
      historyConfig.timeRange?.end,
      historyConfig.timeRange?.endVariable
    );

    if (rangeStart) {
      filterParts.push(`phenomenonTime gt ${rangeStart}`);
    }
    if (rangeEnd) {
      filterParts.push(`phenomenonTime lt ${rangeEnd}`);
    }

    return filterParts.join(' and ');
  }

  private getHistoryQueryParams(historyConfig?: IOGCSTAHistoryConfig) {
    const params: any = {};

    if (historyConfig?.enabled) {
      const filter = this.buildHistoryFilter(historyConfig);
      if (filter) {
        params.$filter = filter;
      }

      if (historyConfig.orderBy) {
        params.$orderby = historyConfig.orderBy;
      }

      if (historyConfig.limit) {
        params.$top = historyConfig.limit;
      }
    }

    return params;
  }

  async getHistoricalObservations(datastreamId: string, historyConfig?: IOGCSTAHistoryConfig): Promise<Observation[]> {
    if (!this.baseConfigration) {
      throw new Error('Base configuration not initialized');
    }

    const queryParams = this.getHistoryQueryParams(historyConfig);

    const data = await new DatastreamsApi(this.baseConfigration)
      .v11DatastreamsEntityIdObservationsGet({
        entityId: datastreamId,
        ...queryParams
      });

    return data.value || [];
  }

  getObservations(listOfPromesis: Promise<IOGCSTAData>[]) {
    const historyConfig = (this.configuration as IOGCSTAConfigartion)?.history;

    if (this.requestFlag.params && 'observations' in this.requestFlag.params) {
      if ('all' in this.requestFlag.params.observations!) {
        listOfPromesis.push(
          (async () => {
            const queryParams = this.getHistoryQueryParams(historyConfig);
            const data = (
              await new ObservationsApi(
                this.baseConfigration,
              ).v11ObservationsGet(queryParams)
            ).value
            return { observations: data }
          })(),
        )
      } else {
        // Check if we should use MQTT for realtime updates
        const useMQTT = this.mqttConnection && !historyConfig?.enabled

        if (useMQTT) {
          // MQTT Mode: Initial HTTP load, then subscribe to MQTT
          if (!this.initialLoadDone) {
            // Initial load via HTTP
            this.logMqtt('Initial load via HTTP, then switching to MQTT')
            for (const ds of this.requestFlag.params.observations) {
              listOfPromesis.push(
                (async () => {
                  const baseParams: any = {
                    entityId: (ds as Datastream).iotId + '',
                    $orderby: 'phenomenonTime desc',
                    $top: 1,
                  };

                  const data = (
                    await new DatastreamsApi(
                      this.baseConfigration,
                    ).v11DatastreamsEntityIdObservationsGet(baseParams)
                  ).value as (Observation & { ds_source?: string })[]

                  if (data && data.length > 0) {
                    data.forEach(obs => {
                      obs['ds_source'] = (ds as Datastream).iotId + '';
                    });
                  }
                  return { observations: data }
                })(),
              )
            }

            // Mark initial load as done and subscribe to MQTT
            this.initialLoadDone = true
            setTimeout(() => {
              this.subscribeToDatastreams(this.requestFlag.params.observations)
              this.subscribeToLocations()
            }, 100) // Small delay to let initial data load complete
          } else {
            // Already have initial data and MQTT subscriptions
            // Just update subscriptions if datastreams changed
            this.subscribeToDatastreams(this.requestFlag.params.observations)
            this.subscribeToLocations()
          }
        } else {
          // HTTP Mode (no MQTT or history mode enabled)
          for (const ds of this.requestFlag.params.observations) {
            listOfPromesis.push(
              (async () => {
                const queryParams = this.getHistoryQueryParams(historyConfig);
                const baseParams: any = {
                  entityId: (ds as Datastream).iotId + '',
                  $orderby: 'phenomenonTime desc',
                };

                if (!historyConfig?.enabled) {
                  baseParams.$top = 1;
                }

                const data = (
                  await new DatastreamsApi(
                    this.baseConfigration,
                  ).v11DatastreamsEntityIdObservationsGet({
                    ...baseParams,
                    ...queryParams
                  })
                ).value as (Observation & { ds_source?: string })[]

                if (data && data.length > 0) {
                  data.forEach(obs => {
                    obs['ds_source'] = (ds as Datastream).iotId + '';
                  });
                }
                return { observations: data }
              })(),
            )
          }
        }
      }
    } else if (this.mqttConnection && !historyConfig?.enabled) {
      // No observations requested, but MQTT is active - cleanup subscriptions
      this.logMqtt('No observations requested, cleaning up subscriptions')
      this.subscribeToDatastreams([])
      this.subscribeToLocations()
    }
  }

  getDataStreams(listOfPromesis: Promise<IOGCSTAData>[]) {
    if (this.requestFlag.params && 'datastreams' in this.requestFlag.params) {
      if ('all' in this.requestFlag.params.datastreams!) {
        listOfPromesis.push(
          (async () => {
            const data = (
              await new DatastreamsApi(
                this.baseConfigration,
              ).v11DatastreamsGet()
            ).value! as BoxedDatastream[]
            return { datastreams: data }
          })(),
        )
      } else if ('ids' in this.requestFlag.params.datastreams!) {
        for (const id of this.requestFlag.params.datastreams!.ids!) {
          listOfPromesis.push(
            (async () => {
              const data = (
                await new DatastreamsApi(
                  this.baseConfigration,
                ).v11DatastreamsEntityIdObservationsGet({
                  entityId: id,
                  $top: 1,
                })
              ).value!
              return { observations: data }
            })(),
          )
        }
      }
    }
  }

  getThings(listOfPromesis: Promise<IOGCSTAData>[]) {
    if (this.requestFlag.params && 'things' in this.requestFlag.params) {
      if ('all' in this.requestFlag.params.things!) {
        const includeDatastreams = this.requestFlag.params.things!.all?.includeDatastreams
        const includeLocations = this.requestFlag.params.things!.all?.includeLocations

        let expand = []
        if (includeDatastreams) expand.push('Datastreams')
        if (includeLocations) expand.push('Locations')

        listOfPromesis.push(
          (async () => {
            try {
              const expandParam = expand.length > 0 ? expand.join(',') : undefined
              const data = (
                await new ThingsApi(this.baseConfigration).v11ThingsGet({
                  $expand: expandParam
                })
              ).value! as BoxedThing[]

              if (expand.length > 0) {
                // When using expand, transform to match BoxedThing format
                return transformFromThingLocationDastreamToLocationThingDatastream(data)
              } else {
                // Without expand, return as simple things
                return { things: data }
              }
            } catch (e) {
              if ((e as ResponseError).response.status == 501) {
                // Expand not implemented --> Fallback to individual requests
                if (expand.includes('Datastreams') || expand.includes('Locations')) {
                  return await this.fallBackSingleRequests()
                } else {
                  // Simple fallback without expand
                  const data = (await new ThingsApi(this.baseConfigration).v11ThingsGet()).value! as BoxedThing[]
                  return { things: data }
                }
              } else {
                throw e
              }
            }
          })(),
        )
      } else if ('ids' in this.requestFlag.params.things!) {
        this.logData('🔍 OgcSta: Loading things by IDs:', this.requestFlag.params.things!.ids)
        const includeDatastreams = this.requestFlag.params.things!.includeDatastreams
        const includeLocations = this.requestFlag.params.things!.includeLocations

        let expand = []
        if (includeDatastreams) expand.push('Datastreams')
        if (includeLocations) expand.push('Locations')

        this.logData('🔍 OgcSta: Expand params:', expand)

        for (const id of this.requestFlag.params.things!.ids) {
          listOfPromesis.push(
            (async () => {
              const expandParam = expand.length > 0 ? expand.join(',') : undefined
              this.logData(`🔍 OgcSta: Fetching thing ${id} with expand: ${expandParam}`)
              const thing = await new ThingsApi(
                this.baseConfigration,
              ).v11ThingsEntityIdGet({ entityId: id, $expand: expandParam })

              if (expand.length > 0) {
                // When using expand, transform to match BoxedThing format
                return transformFromThingLocationDastreamToLocationThingDatastream([thing as BoxedThing])
              } else {
                // Without expand, return as simple thing
                return { things: [thing as BoxedThing] }
              }
            })(),
          )
        }
      }
    }
  }

  private collectVariableNames(): string[] {
    const variables: string[] = [];
    const historyConfig = this.configuration?.history;

    if (historyConfig?.enabled) {
      if (historyConfig.timeRange?.startVariable) variables.push(historyConfig.timeRange.startVariable);
      if (historyConfig.timeRange?.endVariable) variables.push(historyConfig.timeRange.endVariable);
      if (historyConfig.phenomenonTime?.startVariable) variables.push(historyConfig.phenomenonTime.startVariable);
      if (historyConfig.phenomenonTime?.endVariable) variables.push(historyConfig.phenomenonTime.endVariable);
      if (historyConfig.resultTime?.startVariable) variables.push(historyConfig.resultTime.startVariable);
      if (historyConfig.resultTime?.endVariable) variables.push(historyConfig.resultTime.endVariable);
    }

    return variables;
  }

  private setupVariableWatchers(): void {
    if (!this.variableRepository) return;

    const variableNames = this.collectVariableNames();

    for (const variableName of variableNames) {
      if (!this.watchedVariables.has(variableName)) {
        const variable = this.variableRepository.getVariable(variableName);
        if (variable) {
          variable.subscribe(()=>{
            this.onVariableChanged();
          })

          // Setup polling-based watcher since we don't have reactive variables
          this.watchedVariables.add(variableName);
        }
      }
    }
  }

  private async fetchHistoricalLocations(): Promise<void> {
    const historyConfig = this.configuration?.history;
    if (!historyConfig?.enabled) return;

    // Get time range from variables or config
    const timeStart = this.resolveTimeValue(
      historyConfig.timeRange?.start,
      historyConfig.timeRange?.startVariable
    ) || this.resolveTimeValue(
      historyConfig.phenomenonTime?.start,
      historyConfig.phenomenonTime?.startVariable
    );

    const timeEnd = this.resolveTimeValue(
      historyConfig.timeRange?.end,
      historyConfig.timeRange?.endVariable
    ) || this.resolveTimeValue(
      historyConfig.phenomenonTime?.end,
      historyConfig.phenomenonTime?.endVariable
    );

    if (!timeEnd) return;

    // Fetch historical locations for all things with datastreams in requestFlag.params
    const datastreams = this.requestFlag.params?.observations || [];
    const thingIds = new Set<string>();

    // Collect unique thing IDs from datastreams
    for (const ds of datastreams) {
      const datastream = this.resultMap.datastreams?.find(d => d.iotId === ds.iotId);
      if (datastream?.thing?.iotId) {
        thingIds.add(datastream.thing.iotId);
      }
    }

    if (thingIds.size === 0) return;

    this.logHistory(`📍 Fetching historical locations for ${thingIds.size} things at time range: ${timeStart || 'none'} to ${timeEnd}`);

    // Get connection for direct fetch
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection;

    // Fetch historical location for each thing
    for (const thingId of thingIds) {
      try {
        // Build time filter with both start and end
        let timeFilter = `time le ${timeEnd}`;
        if (timeStart) {
          timeFilter = `time ge ${timeStart} and ${timeFilter}`;
        }

        const url = `/v1.1/Things(${thingId})/HistoricalLocations?$filter=${timeFilter}&$orderby=time desc&$top=1&$expand=Locations`;

        // Use connection fetch directly
        const response = await connection.fetch({ url } as IRequestParams, {
          method: 'GET',
        });

        const data = await response.json();
        const historicalLocations = data.value;

        if (historicalLocations && historicalLocations.length > 0) {
          const historicalLocation = historicalLocations[0];
          const locations = historicalLocation.Locations;

          if (locations && locations.length > 0) {
            this.logHistory(`📍 Found historical location for thing ${thingId}:`, locations[0]);

            // Find the thing first to show before/after
            const thing = this.resultMap.things?.find(t => t.iotId === thingId);
            if (thing) {
              this.logHistory(`🔵 BEFORE UPDATE - Thing ${thingId} current location:`, JSON.stringify(thing.locations));
            }

            // Find all datastreams for this thing and update their locations
            for (const datastream of this.resultMap.datastreams || []) {
              if (datastream.thing?.iotId === thingId) {
                // Replace current location with historical location
                if (datastream.thing.locations) {
                  datastream.thing.locations = locations;
                  this.logHistory(`📍 Updated datastream ${datastream.iotId} with historical location`);
                }
              }
            }

            // Also update in things array
            if (thing && thing.locations) {
              thing.locations = locations;
              this.logHistory(`🟢 AFTER UPDATE - Thing ${thingId} new location:`, JSON.stringify(thing.locations));
            }

            // Add location back to locations array if it was removed
            for (const location of locations) {
              const existingLocation = this.resultMap.locations?.find(loc => loc.iotId === location.iotId);

              if (existingLocation) {
                // Update existing location and add thing if not present
                existingLocation.location = location.location;
                existingLocation.encodingType = location.encodingType;
                if (location.name) existingLocation.name = location.name;
                if (location.description) existingLocation.description = location.description;

                if (!existingLocation.things) {
                  existingLocation.things = [];
                }

                if (thing && !existingLocation.things.find(t => t.iotId === thingId)) {
                  existingLocation.things.push(thing);
                  this.logHistory(`📍 Added thing ${thingId} back to location ${location.iotId}`);
                }
              } else if (thing) {
                // Location doesn't exist, create it and add thing
                const newLocation = { ...location, things: [thing] };
                this.resultMap.locations?.push(newLocation);
                this.logHistory(`📍 Created new location ${location.iotId} with thing ${thingId}`);
              }
            }
          }
        } else {
          this.logHistory(`📍 No historical location found for thing ${thingId} at time ${timeEnd}`);

          // Find the thing first
          const thing = this.resultMap.things?.find(t => t.iotId === thingId);

          // Clear location when no historical location exists at this time
          for (const datastream of this.resultMap.datastreams || []) {
            if (datastream.thing && datastream.thing.iotId === thingId) {
              datastream.thing.locations = [];
              this.logHistory(`📍 Cleared location for datastream ${datastream.iotId}`);
            }
          }

          // Also clear in things array
          if (thing && thing.locations) {
            thing.locations = [];
            this.logHistory(`🟢 Cleared location for Thing ${thingId}`);
          }

          // Remove this thing from all locations' things arrays
          for (const location of this.resultMap.locations || []) {
            if (location.things) {
              const thingIndex = location.things.findIndex(t => t.iotId === thingId);
              if (thingIndex !== -1) {
                location.things.splice(thingIndex, 1);
                this.logHistory(`📍 Removed thing ${thingId} from location ${location.iotId}`);
              }
            }
          }

          // Remove locations that no longer have any things
          this.resultMap.locations = this.resultMap.locations?.filter(loc =>
            loc.things && loc.things.length > 0
          ) || [];
        }
      } catch (error) {
        this.logHistory(`❌ Error fetching historical location for thing ${thingId}:`, error);
      }
    }
  }

  getHistoricalLocations(listOfPromesis: Promise<IOGCSTAData>[]) {
    const historyConfig = (this.configuration as IOGCSTAConfigartion)?.history;

    if (this.requestFlag.params && 'historicalLocations' in this.requestFlag.params) {
      const things = this.requestFlag.params.historicalLocations;

      for (const thing of things) {
        listOfPromesis.push(
          (async () => {
            const thingId = thing.iotId || thing['@iot.id'];

            // Get time filter from history config
            const timeStart = this.resolveTimeValue(
              historyConfig?.timeRange?.start,
              historyConfig?.timeRange?.startVariable
            ) || this.resolveTimeValue(
              historyConfig?.phenomenonTime?.start,
              historyConfig?.phenomenonTime?.startVariable
            );

            const timeEnd = this.resolveTimeValue(
              historyConfig?.timeRange?.end,
              historyConfig?.timeRange?.endVariable
            ) || this.resolveTimeValue(
              historyConfig?.phenomenonTime?.end,
              historyConfig?.phenomenonTime?.endVariable
            );

            if (!timeEnd || !thingId) {
              return {};
            }

            try {
              const connection = this.connectionRepository.getConnection(
                this.connection,
              ) as IConnection;

              // Build time filter with both start and end
              let timeFilter = `time le ${timeEnd}`;
              if (timeStart) {
                timeFilter = `time ge ${timeStart} and ${timeFilter}`;
              }

              const url = `/v1.1/Things(${thingId})/HistoricalLocations?$filter=${timeFilter}&$orderby=time desc&$top=1&$expand=Locations`;

              const response = await connection.fetch({ url } as IRequestParams, {
                method: 'GET',
              });

              const data = await response.json();
              const historicalLocations = data.value;

              if (historicalLocations && historicalLocations.length > 0) {
                const historicalLocation = historicalLocations[0];
                const locations = historicalLocation.Locations;

                if (locations && locations.length > 0) {
                  // Only use the first location
                  const location = locations[0];
                  this.logHistory(`📍 Found historical location for thing ${thingId}:`, location);

                  // Update the thing's location in resultMap - set only one location
                  const thingInMap = this.resultMap.things?.find(t => t.iotId === thingId);
                  if (thingInMap) {
                    thingInMap.locations = [location];
                  }

                  // Update all datastreams for this thing - set only one location
                  for (const datastream of this.resultMap.datastreams || []) {
                    if (datastream.thing?.iotId === thingId) {
                      if (datastream.thing) {
                        datastream.thing.locations = [location];
                      }
                    }
                  }

                  // Update location coordinates in the locations array (in-place to keep thing references)
                  const existingLocation = this.resultMap.locations?.find(
                    loc => loc.things?.some(t => t.iotId === thingId)
                  );

                  if (existingLocation) {
                    // Update coordinates in-place
                    existingLocation.location = location.location;
                    existingLocation.encodingType = location.encodingType;
                    if (location.name) existingLocation.name = location.name;
                    if (location.description) existingLocation.description = location.description;
                  }
                }
              } else {
                this.logHistory(`📍 No historical location found for thing ${thingId} at time ${timeEnd}`);
              }
            } catch (error) {
              this.logHistory(`❌ Error fetching historical location for thing ${thingId}:`, error);
            }

            return {};
          })(),
        );
      }
    }
  }

  private onVariableChanged(): void {
    // Clear existing debounce timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    // Set new debounce timer for 100ms
    this.debounceTimer = setTimeout(async () => {
      try {
        // Refetch observations with new variable values using the last observations params
        if (this.lastObservationsParams) {
          // Set the requestFlag to re-fetch observations with updated time variables
          this.requestFlag = { key: FILTER, params: { observations: this.lastObservationsParams } };

          await this.getData('OGCSTAData');

          // Fetch historical locations for the new time range
          await this.fetchHistoricalLocations();

          // Reset requestFlag to NOACTION - return current data without new requests
          this.requestFlag = { key: NOACTION, params: undefined };

          this.notify();
        }
      } catch (error) {
        this.logCore('Error refetching observations after variable change:', error);
      }
    }, 100);
  }

  // ==================== MQTT Methods ====================

  private setupMQTTMessageHandler(): void {
    if (!this.mqttConnection) return;

    // Check if connection has subscribe capability (TwoWayConnection)
    if (typeof (this.mqttConnection as any).subscribe === 'function') {
      this.logMqtt('Setting up message handler');
      // TwoWayConnection calls subscribers with (event, data, topic) - see TwoWayConnection line 64-67
      (this.mqttConnection as any).subscribe((event: string, data: any, topic?: string) => {
        if (event === 'message' && topic) {
          this.logMqtt('Raw message received - topic:', topic, 'data:', data);
          this.onMQTTMessage(data, topic);
        }
      });
    } else {
      this.logMqtt(' Connection does not have subscribe method');
    }
  }

  private onMQTTMessage(message: string, topic: string): void {
    try {
      // Ignore non-entity messages (like "connect", "disconnect", etc.)
      if (typeof message === 'string' && !message.startsWith('{')) {
        return
      }

      // Parse message if it's a string, otherwise use it directly
      const data = typeof message === 'string' ? JSON.parse(message) : message

      // Validate that this is an entity object
      if (!data || typeof data !== 'object') {
        return
      }

      // Validate that message has @iot.id (SensorThings API requirement)
      if (!data['@iot.id']) {
        this.logMqtt(' Invalid message (missing @iot.id)', message)
        return
      }

      // Check if this is an Observation update
      const observationMatch = topic.match(/Observations\(([^)]+)\)/)
      if (observationMatch) {
        this.handleObservationUpdate(observationMatch[1], data)
        return
      }

      // Check if this is a Location update
      const locationMatch = topic.match(/Locations\(([^)]+)\)/)
      if (locationMatch) {
        this.handleLocationUpdate(locationMatch[1], data)
        return
      }

      this.logMqtt(' Unknown topic format:', topic)
    } catch (e) {
      this.logMqtt(' Error parsing message:', e, message)
    }
  }

  private handleObservationUpdate(datastreamId: string, observation: any): void {
    this.logMqtt(`Received observation for datastream ${datastreamId}:`, observation)

    // Find the datastream in resultMap
    const datastream = this.resultMap.datastreams?.find(ds => ds.iotId === datastreamId)
    if (datastream) {
      // Update observations - replace with newest observation
      datastream.observations = [observation]
      this.logMqtt(`Updated datastream ${datastreamId} observations`)

      // Trigger debounced UI update
      this.triggerDebouncedUpdate()
    } else {
      this.logMqtt(`Datastream ${datastreamId} not found in resultMap. Available datastreams:`,
        this.resultMap.datastreams?.map(ds => ds.iotId).slice(0, 10))
    }
  }

  private handleLocationUpdate(locationId: string, location: any): void {
    this.logMqtt(`Received location update for ${locationId}:`, location)

    // Find the location in resultMap
    const existingLocation = this.resultMap.locations?.find(loc => loc.iotId === locationId)
    if (existingLocation) {
      // Update location coordinates in-place
      existingLocation.location = location.location
      existingLocation.encodingType = location.encodingType
      if (location.name) existingLocation.name = location.name
      if (location.description) existingLocation.description = location.description
      this.logMqtt(`Updated location ${locationId}`)

      // Also update in all things that reference this location
      for (const thing of this.resultMap.things || []) {
        const thingLocation = thing.locations?.find(loc => loc.iotId === locationId)
        if (thingLocation) {
          thingLocation.location = location.location
          thingLocation.encodingType = location.encodingType
          if (location.name) thingLocation.name = location.name
          if (location.description) thingLocation.description = location.description
        }
      }

      // Also update in datastreams
      for (const datastream of this.resultMap.datastreams || []) {
        const datastreamLocation = datastream.thing?.locations?.find(loc => loc.iotId === locationId)
        if (datastreamLocation) {
          datastreamLocation.location = location.location
          datastreamLocation.encodingType = location.encodingType
          if (location.name) datastreamLocation.name = location.name
          if (location.description) datastreamLocation.description = location.description
        }
      }

      // Trigger debounced UI update
      this.triggerDebouncedUpdate()
    } else {
      console.warn(`OGCSTA MQTT: Location ${locationId} not found in resultMap`)
    }
  }

  private triggerDebouncedUpdate(): void {
    // Mark that we have pending updates
    this.hasPendingMqttUpdates = true

    // Debounce notify calls - only notify once per 100ms even with many MQTT messages
    if (this.mqttUpdateTimer) {
      clearTimeout(this.mqttUpdateTimer)
    }
    this.mqttUpdateTimer = setTimeout(() => {
      if (this.hasPendingMqttUpdates) {
        this.notify()
        this.hasPendingMqttUpdates = false
      }
      this.mqttUpdateTimer = null
    }, 100)
  }

  private subscribeToDatastreams(datastreams: Datastream[]): void {
    if (!this.mqttConnection) return

    // Check if MQTT client is connected before attempting subscriptions
    const client = (this.mqttConnection as any).client
    if (!client || !client.connected) {
      this.logMqtt('Client not connected, skipping subscription update')
      return
    }

    // Build set of requested datastream IDs (can be empty if no datastreams in view)
    const requestedIds = new Set<string>()
    if (datastreams && datastreams.length > 0) {
      for (const ds of datastreams) {
        const datastreamId = ds.iotId || (ds as any)['@iot.id']
        if (datastreamId) {
          requestedIds.add(datastreamId)
        }
      }
    }

    // Check if subscriptions have changed
    const currentIds = new Set(this.subscribedDatastreams.keys())
    const hasChanges = requestedIds.size !== currentIds.size ||
      Array.from(requestedIds).some(id => !currentIds.has(id))

    if (!hasChanges) {
      // No changes, skip re-subscription
      return
    }

    this.logMqtt(`Updating subscriptions - current: ${currentIds.size}, requested: ${requestedIds.size}`)

    // Find topics to remove (in current but not in requested)
    const toRemove = Array.from(currentIds).filter(id => !requestedIds.has(id))

    // Find topics to add (in requested but not in current)
    const toAdd = Array.from(requestedIds).filter(id => !currentIds.has(id))

    // Unsubscribe from removed topics
    if (toRemove.length > 0) {
      this.logMqtt(`Unsubscribing from ${toRemove.length} topics:`, toRemove.slice(0, 5))
      for (const datastreamId of toRemove) {
        const storeKey = `${this.connection}_${datastreamId}`
        if (typeof (this.mqttConnection as any).disconnectStore === 'function') {
          (this.mqttConnection as any).disconnectStore(storeKey)
        }
        this.subscribedDatastreams.delete(datastreamId)
      }
    }

    // Subscribe to new topics
    if (toAdd.length > 0) {
      this.logMqtt(`Subscribing to ${toAdd.length} new topics`)
      for (const ds of datastreams) {
        const datastreamId = ds.iotId || (ds as any)['@iot.id']
        if (!datastreamId || !toAdd.includes(datastreamId)) continue

        // Build topic according to OGC SensorThings API MQTT spec v1.1
        const topic = `v1.1/Observations(${datastreamId})`

        // Subscribe via MQTT Connection
        // Use unique store key for each topic to avoid overwriting
        const storeKey = `${this.connection}_${datastreamId}`
        if (typeof (this.mqttConnection as any).connectStore === 'function') {
          (this.mqttConnection as any).connectStore(storeKey, topic)
          this.subscribedDatastreams.set(datastreamId, topic)
          this.logMqtt(`Subscribed to ${topic}`)
        }
      }
    }
  }

  private subscribeToLocations(): void {
    if (!this.mqttConnection) return

    // Check if MQTT client is connected before attempting subscriptions
    const client = (this.mqttConnection as any).client
    if (!client || !client.connected) {
      this.logMqtt('Client not connected, skipping location subscription update')
      return
    }

    // Collect all unique location IDs from resultMap (can be empty if no locations in view)
    const locationIds = new Set<string>()
    for (const location of this.resultMap.locations || []) {
      if (location.iotId) {
        locationIds.add(location.iotId)
      }
    }

    // Check if subscriptions have changed
    const currentLocationIds = new Set(this.subscribedLocations.keys())
    const hasChanges = locationIds.size !== currentLocationIds.size ||
      Array.from(locationIds).some(id => !currentLocationIds.has(id))

    if (!hasChanges) {
      return
    }

    this.logMqtt(`Updating location subscriptions - current: ${currentLocationIds.size}, requested: ${locationIds.size}`)

    // Unsubscribe from old locations
    for (const locationId of currentLocationIds) {
      if (!locationIds.has(locationId)) {
        const storeKey = `${this.connection}_loc_${locationId}`
        if (typeof (this.mqttConnection as any).disconnectStore === 'function') {
          (this.mqttConnection as any).disconnectStore(storeKey)
          this.logMqtt(`Unsubscribed from v1.1/Locations(${locationId})`)
        }
      }
    }
    this.subscribedLocations.clear()

    // Subscribe to all locations (only if there are any)
    if (locationIds.size > 0) {
      this.logMqtt(`Subscribing to ${locationIds.size} location topics`)
      for (const locationId of locationIds) {
        const topic = `v1.1/Locations(${locationId})`
        const storeKey = `${this.connection}_loc_${locationId}`

        if (typeof (this.mqttConnection as any).connectStore === 'function') {
          (this.mqttConnection as any).connectStore(storeKey, topic)
          this.subscribedLocations.set(locationId, topic)
          this.logMqtt(`Subscribed to ${topic}`)
        }
      }
    }
  }

  private unsubscribeAll(): void {
    if (!this.mqttConnection) return

    this.logMqtt(`Unsubscribing from ${this.subscribedDatastreams.size} datastreams and ${this.subscribedLocations.size} locations`)

    // Unsubscribe from all datastream topics
    if (typeof (this.mqttConnection as any).disconnectStore === 'function') {
      for (const datastreamId of this.subscribedDatastreams.keys()) {
        const storeKey = `${this.connection}_${datastreamId}`
        ;(this.mqttConnection as any).disconnectStore(storeKey)
      }

      // Unsubscribe from all location topics
      for (const locationId of this.subscribedLocations.keys()) {
        const storeKey = `${this.connection}_loc_${locationId}`
        ;(this.mqttConnection as any).disconnectStore(storeKey)
      }
    }

    this.subscribedDatastreams.clear()
    this.subscribedLocations.clear()
  }
}
