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

  async getData<T>(type: string): Promise<T> {
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

    /*if(type = OGCSTAData){

    }*/
    const listOfPromesis: Promise<IOGCSTAData>[] = []

    if (this.requestFlag.key == FILTER) {
      this.getPartitionalData(listOfPromesis)
    } else {
      this.getAllData(listOfPromesis)
    }
    const results: IOGCSTAData[] = await Promise.all(listOfPromesis)

    for (const result of results) {
      this.resultMap.datastreams = this.resultMap.datastreams?.concat(
        result.datastreams ?? [],
      )
      this.resultMap.things = this.resultMap.things?.concat(result.things ?? [])
      this.resultMap.observations = this.resultMap.observations?.concat(
        (result.observations as Observation[]) ?? [],
      )
      //if(result.observations)this.resultMap.observations = result.observations;
      this.resultMap.locations = this.resultMap.locations?.concat(
        result.locations ?? [],
      )
    }

    if (this.requestFlag.key == FILTER) {
      for (const d of this.requestFlag.params.observations ?? []) {
        console.log(d.iotId)
        const newObservations = this.resultMap.observations?.filter(
          o => o.ds_source == d.iotId,
        ) || []
        
        if (newObservations.length > 0) {
          const ds = this.resultMap.datastreams?.find(s => s.iotId == d.iotId)
          if (ds){
            ds.observations = newObservations
            console.log(ds.observations)
          }
        }
      }
      
      // Clear processed observations
      for (const d of this.requestFlag.params.observations ?? []) {
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
            things,
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
      if (!thing.Locations) {
        thing.Locations = []
      }
      if (!thing.Datastreams) {
        thing.Datastreams = []
      }
      try {
        if (thing.iotId) {
          const locs = (
            await new ThingsApi(
              this.baseConfigration,
            ).v11ThingsEntityIdLocationsGet({ entityId: thing.iotId })
          ).value as BoxedLocation[]
          thing.Locations = locs
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
        thing.Datastreams = dss
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

    if ('observations' in this.requestFlag.params) {
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
              const baseParams = {
                entityId: (ds as Datastream).iotId + '',
                $top: historyConfig?.enabled ? historyConfig.limit || 100 : 1,
              };

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
    if ('datastreams' in this.requestFlag.params) {
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
    if ('things' in this.requestFlag.params) {
      if ('all' in this.requestFlag.params.things!) {
        listOfPromesis.push(
          (async () => {
            const data = (
              await new ThingsApi(this.baseConfigration).v11ThingsGet()
            ).value!
            return { things: data }
          })(),
        )
      } else if ('ids' in this.requestFlag.params.things!) {
        for (const id in this.requestFlag.params.things!.ids) {
          listOfPromesis.push(
            (async () => {
              const thing = await new ThingsApi(
                this.baseConfigration,
              ).v11ThingsEntityIdGet({ entityId: id })
              return { things: [thing] }
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
        this.notify();
      } catch (error) {
        console.error('Error refetching observations after variable change:', error);
      }
    }, 100);
  }
}
