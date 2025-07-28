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
import { type IRequestParams } from 'org.eclipse.daanse.board.app.lib.connection.base'
import { transformFromThingLocationDastreamToLocationThingDatastream } from '../util/transformThings'
import { FILTER, FILTERRESET } from '../interfaces/Constances'
import { OgcStaStoreI } from '../interface/OgcStaI'
import { BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'

@injectable()
export class OgcStaStore extends BaseDatasource implements OgcStaStoreI {
  @inject(identifier)
  private connectionRepository!: ConnectionRepository

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

  init(configuration: IOGCSTAConfigartion): void {
    super.init(configuration)

    if (!configuration.connection) throw new Error('Connetion must be set')
    this.connection = configuration.connection
    this.requestFlag = { key: FILTERRESET, params: undefined }
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
        const ind = this.resultMap.observations?.findIndex(
          o => o.ds_source == d.iotId,
        )
        if (ind != undefined && ind != -1) {
          const ds = this.resultMap.datastreams?.find(s => s.iotId == d.iotId)
          if (ds)
            ds.observations = this.resultMap.observations?.splice(
              ind,
              1,
            ) as Observation[]
        }
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

  getObservations(listOfPromesis: Promise<IOGCSTAData>[]) {
    if ('observations' in this.requestFlag.params) {
      if ('all' in this.requestFlag.params.observations!) {
        listOfPromesis.push(
          (async () => {
            const data = (
              await new ObservationsApi(
                this.baseConfigration,
              ).v11ObservationsGet()
            ).value
            return { observations: data }
          })(),
        )
      } else {
        for (const ds of this.requestFlag.params.observations) {
          listOfPromesis.push(
            (async () => {
              const data = (
                await new DatastreamsApi(
                  this.baseConfigration,
                ).v11DatastreamsEntityIdObservationsGet({
                  entityId: (ds as Datastream).iotId + '',
                  $top: 1,
                })
              ).value as (Observation & { ds_source?: string })[]
              if (data && data[0]) {
                data[0]['ds_source'] = (ds as Datastream).iotId + ''
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
}
