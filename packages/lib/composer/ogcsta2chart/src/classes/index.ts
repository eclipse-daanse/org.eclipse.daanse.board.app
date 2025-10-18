/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { BaseDatasource, IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifier, DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { DatastreamSelection, OGCSTAToChartData } from '../interfaces/OGCSTAToChartData'

export interface IOGCSTAToChartComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources: string[]
  thingId?: string | number
  datastreams: DatastreamSelection[]
  name: string
  type: string
  uid: string
}

export class OGCSTAToChartComposer extends BaseDatasource {
  destroy(): void {
    console.log("Destroying OGCSTAToChartComposer")
  }

  private connectedDatasources: string[] = []
  private thingId?: string | number
  private datastreams: DatastreamSelection[] = []
  private isUpdating: boolean = false
  private pendingUpdate: boolean = false
  private cachedData: any = null

  public static availableTypes = ['ogcsta']

  init(configuration: IOGCSTAToChartComposerConfiguration) {
    super.init(configuration)

    this.connectedDatasources = configuration.connectedDatasources
    this.thingId = configuration.thingId
    this.datastreams = configuration.datastreams || []

    const updateFn = async () => {
      if (this.isUpdating) {
        console.log('🔄 Update already in progress, marking pending update')
        this.pendingUpdate = true
        return
      }

      this.isUpdating = true
      this.pendingUpdate = false

      try {
        console.log('📊 OGCSTAToChartComposer: Updating chart data...')
        this.notify()

        if (this.pendingUpdate) {
          console.log('🔄 Processing pending update')
          this.pendingUpdate = false
          setTimeout(() => updateFn(), 100)
        }
      } finally {
        this.isUpdating = false
      }
    }

    const datasourceRepository = container.get(identifier) as DatasourceRepository

    this.connectedDatasources
      .filter((datasourceId) => datasourceId)
      .forEach((ds) => {
        const datasource = datasourceRepository.getDatasource(ds)
        datasource.subscribe(updateFn)
      })
  }

  async getData(type: string, options?: any): Promise<any> {
    const datasourceRepository = container.get(identifier) as DatasourceRepository

    const data = await Promise.all(
      this.connectedDatasources
        .filter((datasourceId) => datasourceId)
        .map(async (datasourceId) => {
          if (!datasourceRepository) {
            throw new Error('DatasourceRepository is not provided to DataSource Classes')
          }
          const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

          // Configure datasource options
          const datasourceOptions = this.thingId ? {
            ...options,
            filter: {
              things: {
                ids: [this.thingId]
              }
            }
          } : {
            ...options,
            filter: {
              things: {
                all: {
                  includeDatastreams: true,
                  includeLocations: false
                }
              }
            }
          }

          // Step 1: Get Things + Datastreams (no observations yet)
          let dat = await datasourceInstance.getData('OGCSTAData', datasourceOptions)
          console.log('OGCSTAToChart Composer: Things and Datastreams loaded:', dat)

          // Step 2: Get observations for selected datastreams
          if (dat?.things && this.datastreams.length > 0) {
            const datastreamIds = this.datastreams.map(ds => ds.datastreamId)

            // Find matching datastreams in the things
            const relevantDatastreams: any[] = []
            for (const thing of dat.things) {
              if (thing.datastreams && thing.datastreams.length > 0) {
                for (const datastream of thing.datastreams) {
                  const datastreamId = datastream['@iot.id'] || datastream.iotId
                  if (datastreamIds.includes(datastreamId)) {
                    relevantDatastreams.push({
                      ...datastream,
                      thingId: thing['@iot.id'] || thing.iotId
                    })
                  }
                }
              }
            }

            // Get observations for relevant datastreams
            if (relevantDatastreams.length > 0) {
              console.log(`📊 Loading observations for ${relevantDatastreams.length} datastreams`)

              const observationsOptions = {
                ...options,
                filter: {
                  observations: relevantDatastreams.map((ds: any) => ({
                    iotId: ds['@iot.id'] || ds.iotId,
                    $orderby: 'phenomenonTime desc'
                  }))
                }
              }

              const observationsData = await datasourceInstance.getData('OGCSTAData', observationsOptions)

              // Merge observations back into datastreams
              if (observationsData?.observations) {
                console.log(`✅ Received ${observationsData.observations.length} observations`)

                dat.things.forEach((thing: any) => {
                  if (thing.datastreams) {
                    thing.datastreams.forEach((ds: any) => {
                      const dsId = ds['@iot.id'] || ds.iotId
                      const observations = observationsData.observations?.filter((obs: any) =>
                        obs.ds_source == dsId
                      ) || []
                      if (observations.length > 0) {
                        ds.observations = observations
                        console.log(`✅ Added ${observations.length} observations to ${ds.name}`)
                      }
                    })
                  }
                })
              }
            }
          }

          return dat
        })
    )

    if (type === "ChartData") {
      const chartData = this.composeChartData(data)
      this.cachedData = chartData
      return chartData
    } else if (type === "DataTable") {
      const tableData = this.composeDataTable(data)
      this.cachedData = tableData
      return tableData
    } else {
      console.warn("Invalid data type for OGCSTAToChartComposer")
      return null
    }
  }

  async getOriginalData() {
    return []
  }

  callEvent(event: string, params: any) {
    console.warn(`Event "${event}" is not available for OGCSTAToChartComposer`, params)
  }

  private composeChartData(ogcStaDataArray: any[]): OGCSTAToChartData {
    const chartData: OGCSTAToChartData = {
      labels: [],
      datasets: []
    }

    console.log('📊 OGCSTAToChartComposer: Starting chart data composition')

    // Collect all unique timestamps across all datastreams
    const allTimestamps = new Set<string>()
    const datastreamObservations: Map<string, Map<string, number>> = new Map()

    // Build datasets for each selected datastream
    this.datastreams.forEach((datastreamSelection) => {
      const observationsByTimestamp = new Map<string, number>()

      // Find the datastream in the OGC STA data
      for (const ogcStaData of ogcStaDataArray) {
        if (!ogcStaData?.things) continue

        for (const thing of ogcStaData.things) {
          if (!thing.datastreams) continue

          const datastream = thing.datastreams.find((ds: any) => {
            const dsId = ds['@iot.id'] || ds.iotId
            return dsId === datastreamSelection.datastreamId
          })

          if (datastream && datastream.observations && datastream.observations.length > 0) {
            datastream.observations.forEach((obs: any) => {
              const timestamp = obs.phenomenonTime || obs.resultTime || new Date().toISOString()
              allTimestamps.add(timestamp)
              observationsByTimestamp.set(timestamp, obs.result)
            })
          }
        }
      }

      datastreamObservations.set(datastreamSelection.datastreamId, observationsByTimestamp)
    })

    // Sort timestamps
    const sortedTimestamps = Array.from(allTimestamps).sort()
    chartData.labels = sortedTimestamps

    // Create datasets
    this.datastreams.forEach((datastreamSelection) => {
      const observations = datastreamObservations.get(datastreamSelection.datastreamId) || new Map()

      const dataset: any = {
        label: datastreamSelection.label || datastreamSelection.datastreamId,
        data: sortedTimestamps.map(ts => observations.get(ts) ?? null),
        backgroundColor: datastreamSelection.color || this.generateColor(),
        borderColor: datastreamSelection.color || this.generateColor()
      }

      chartData.datasets.push(dataset)
    })

    console.log('📊 Chart data composed:', chartData)
    return chartData
  }

  private composeDataTable(ogcStaDataArray: any[]): any {
    const dataTable: any = {
      headers: ['Datastream', 'Value', 'Unit', 'Timestamp'],
      rows: [],
      items: []
    }

    console.log('📊 OGCSTAToChartComposer: Starting data table composition')

    this.datastreams.forEach((datastreamSelection) => {
      for (const ogcStaData of ogcStaDataArray) {
        if (!ogcStaData?.things) continue

        for (const thing of ogcStaData.things) {
          if (!thing.datastreams) continue

          const datastream = thing.datastreams.find((ds: any) => {
            const dsId = ds['@iot.id'] || ds.iotId
            return dsId === datastreamSelection.datastreamId
          })

          if (datastream && datastream.observations && datastream.observations.length > 0) {
            // Add all observations, not just the first one
            datastream.observations.forEach((observation: any) => {
              const item = {
                datastream: datastreamSelection.label || datastream.name,
                value: observation.result,
                unit: datastream.unitOfMeasurement?.symbol || '',
                timestamp: observation.phenomenonTime || observation.resultTime || ''
              }

              dataTable.items.push(item)
              dataTable.rows.push([
                item.datastream,
                item.value,
                item.unit,
                item.timestamp
              ])
            })
          }
        }
      }
    })

    console.log('📊 Data table composed:', dataTable)
    return dataTable
  }

  private generateColor(): string {
    const colors = [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF',
      '#FF9F40',
      '#FF6384',
      '#C9CBCF'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  static validateConfiguration(config: any): boolean {
    if (!config.connectedDatasources || !Array.isArray(config.connectedDatasources)) {
      return false
    }
    if (config.connectedDatasources.length === 0) {
      return false
    }
    if (!config.datastreams || !Array.isArray(config.datastreams)) {
      return false
    }
    return true
  }

  // Helper to get available datastreams from connected datasources
  static async getAvailableDatastreams(
    connectedDatasources: string[],
    thingId?: string | number,
    datasourceRepository?: DatasourceRepository
  ): Promise<any[]> {
    if (!datasourceRepository) {
      throw new Error('DatasourceRepository is required')
    }

    const allDatastreams: any[] = []

    for (const datasourceId of connectedDatasources) {
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

      const options = thingId ? {
        filter: {
          things: {
            ids: [thingId]
          }
        }
      } : {
        filter: {
          things: {
            all: {
              includeDatastreams: true,
              includeLocations: false
            }
          }
        }
      }

      const data = await datasourceInstance.getData('OGCSTAData', options)

      if (data?.things) {
        for (const thing of data.things) {
          if (thing.datastreams) {
            thing.datastreams.forEach((ds: any) => {
              allDatastreams.push({
                id: ds['@iot.id'] || ds.iotId,
                name: ds.name,
                description: ds.description,
                unit: ds.unitOfMeasurement?.symbol || '',
                thingId: thing['@iot.id'] || thing.iotId,
                thingName: thing.name
              })
            })
          }
        }
      }
    }

    return allDatastreams
  }
}