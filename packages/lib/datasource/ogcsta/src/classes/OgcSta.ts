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
import { FILTER, FILTERRESET } from '../interfaces/Constances'
import { OgcStaStoreI } from '../interface/OgcStaI'
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'

@injectable()
export class OgcStaStore extends BaseDatasource implements OgcStaStoreI {
  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  @inject(variableIdentifier)
  private variableRepository!: VariableRepository

  private configuration!: IOGCSTAConfigartion;
  connection: string = ''
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
  private watchedVariables: Set<string> = new Set();

  init(configuration: IOGCSTAConfigartion): void {
    super.init(configuration)
    this.configuration = configuration;
    if (!configuration.connection) throw new Error('Connetion must be set')
    this.connection = configuration.connection
    this.requestFlag = { key: FILTERRESET, params: undefined }
    this.setupVariableWatchers();
  }

  callEvent(event: string, params: any): void {
    if (event == FILTER) {
      this.requestFlag = { key: FILTER, params: params }
      // await this.getData<OGCSTAData>(OGCSTAData);
    } else {
      this.requestFlag = { key: FILTERRESET, params: params }
    }
    //this.getData<string>('OGCSTAData');
    this.notify()
  }

  destroy(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    console.log('OGCSTA Store destroyed')
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

    // Only clear cache if explicitly requested via options or if no data exists yet
    const shouldReload = options?.reload ||
                        this.requestFlag.key == FILTERRESET ||
                        (!this.resultMap.things || this.resultMap.things.length === 0)

    if (shouldReload) {
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
        console.log('🔍 Processing observations for datastreams:', observationsParam?.length || 0)
        console.log('🔍 Available observations in resultMap:', this.resultMap.observations?.length || 0)
        for (const d of observationsParam ?? []) {
          console.log('🔍 Looking for observations for datastream:', d.iotId)
          const ind = this.resultMap.observations?.findIndex(
            o => o.ds_source == d.iotId,
          )
          console.log('🔍 Found observation at index:', ind)
          const ds = this.resultMap.datastreams?.find(s => s.iotId == d.iotId)
          if (ds) {
            if (ind != undefined && ind != -1) {
              // Use slice instead of splice to preserve the observation in resultMap
              ds.observations = this.resultMap.observations?.slice(ind, ind + 1) as Observation[]
              console.log('✅ Assigned observation to datastream:', ds.name)
            } else {
              // No observations found - clear the observations array
              ds.observations = []
              console.log('⚠️ No observations found for datastream, cleared observations:', ds.name)
            }
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
      return this.resultMap as T
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
        console.log(e)
      }
      try {
        const dss = (
          await new ThingsApi(
            this.baseConfigration,
          ).v11ThingsEntityIdDatastreamsGet({ entityId: thing.iotId! })
        ).value as BoxedDatastream[]
        thing.datastreams = dss
      } catch (e) {
        console.log(e)
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
        for (const id of this.requestFlag.params.things!.ids) {
          listOfPromesis.push(
            (async () => {
              const thing = await new ThingsApi(
                this.baseConfigration,
              ).v11ThingsEntityIdGet({ entityId: id,$expand: 'Datastreams,Locations' })
              return { things: [thing as BoxedThing] }
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

    console.log(`📍 Fetching historical locations for ${thingIds.size} things at time: ${timeEnd}`);

    // Get connection for direct fetch
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection;

    // Fetch historical location for each thing
    for (const thingId of thingIds) {
      try {
        const url = `/v1.1/Things(${thingId})/HistoricalLocations?$filter=time le ${timeEnd}&$orderby=time desc&$top=1&$expand=Locations`;

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
            console.log(`📍 Found historical location for thing ${thingId}:`, locations[0]);

            // Find all datastreams for this thing and update their locations
            for (const datastream of this.resultMap.datastreams || []) {
              if (datastream.thing?.iotId === thingId) {
                // Replace current location with historical location
                if (datastream.thing.locations) {
                  datastream.thing.locations = locations;
                  console.log(`📍 Updated datastream ${datastream.iotId} with historical location`);
                }
              }
            }

            // Also update in things array
            const thing = this.resultMap.things?.find(t => t.iotId === thingId);
            if (thing && thing.locations) {
              thing.locations = locations;
              console.log(`📍 Updated thing ${thingId} with historical location`);
            }
          }
        } else {
          console.log(`📍 No historical location found for thing ${thingId} at time ${timeEnd}`);
        }
      } catch (error) {
        console.error(`❌ Error fetching historical location for thing ${thingId}:`, error);
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
        // Refetch observations with new variable values
        /*this.resultMap = {
          things: [],
          datastreams: [],
          observations: [],
          locations: [],
        };*/

        await this.getData('OGCSTAData');

        // Fetch historical locations for the new time range
        await this.fetchHistoricalLocations();

        this.notify();
      } catch (error) {
        console.error('Error refetching observations after variable change:', error);
      }
    }, 100);
  }
}
