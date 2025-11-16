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
  thingIds: (string | number)[]
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
  private thingIds: (string | number)[] = []
  private datastreams: DatastreamSelection[] = []
  private isUpdating: boolean = false
  private pendingUpdate: boolean = false
  private cachedData: any = null
  private cachedThingsStructure: any[] = []  // Cache Things structure for operation mode
  private loadingPromises: Map<string, Promise<any>> = new Map()  // Track ongoing loads to prevent duplicates

  public static availableTypes = ['ogcsta']

  init(configuration: IOGCSTAToChartComposerConfiguration) {
    super.init(configuration)

    this.connectedDatasources = configuration.connectedDatasources
    this.thingIds = configuration.thingIds || []
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
        console.log('📊 OGCSTAToChartComposer: Datasource updated, notifying widgets...')

        // Add small delay to ensure datasource has finished loading observations
        await new Promise(resolve => setTimeout(resolve, 50))

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

    // Check if datasource has history enabled
    // If not, we need to load observations ourselves for the chart
    const data = await Promise.all(
      this.connectedDatasources
        .filter((datasourceId) => datasourceId)
        .map(async (datasourceId) => {
          if (!datasourceRepository) {
            throw new Error('DatasourceRepository is not provided to DataSource Classes')
          }
          const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

          if (this.datastreams.length === 0) {
            console.log('⚠️ No datastreams configured yet')
            return { things: [], datastreams: [], observations: [] }
          }

          // Read observations from datastreams in resultMap
          // The OGC STA datasource stores observations in datastreams after processing
          console.log(`📊 Reading observations from datastreams in cache`)

          const resultMap = (datasourceInstance as any).resultMap
          const dsConfig = (datasourceInstance as any).configuration
          const allObservations: any[] = []
          const missingDatastreams: any[] = []

          if (resultMap?.datastreams) {
            console.log(`✅ Found ${resultMap.datastreams.length} datastreams in cache`)

            for (const ds of this.datastreams) {
              const datastream = resultMap.datastreams.find((d: any) => d.iotId == ds.datastreamId)

              if (datastream?.observations && datastream.observations.length > 0) {
                console.log(`📊 Found ${datastream.observations.length} observations in datastream ${ds.datastreamId}`)

                // Add ds_source to observations
                datastream.observations.forEach((obs: any) => {
                  obs.ds_source = ds.datastreamId
                  allObservations.push(obs)
                })
              } else {
                console.log(`⚠️ No observations in cache for datastream ${ds.datastreamId}, will load directly`)
                missingDatastreams.push(ds)
              }
            }
          } else {
            console.log(`⚠️ No datastreams in cache, will load all directly`)
            missingDatastreams.push(...this.datastreams)
          }

          // Load missing datastreams directly
          if (missingDatastreams.length > 0) {
            console.log(`📊 Loading ${missingDatastreams.length} missing datastreams directly`)

            const historyConfig = dsConfig?.history || {
              enabled: true,
              phenomenonTime: {
                startVariable: dsConfig?.history?.phenomenonTime?.startVariable,
                endVariable: dsConfig?.history?.phenomenonTime?.endVariable
              }
            }

            for (const ds of missingDatastreams) {
              try {
                // Check if already loading this datastream
                const loadKey = `${datasourceId}:${ds.datastreamId}`

                if (this.loadingPromises.has(loadKey)) {
                  console.log(`⏳ Already loading datastream ${ds.datastreamId}, reusing promise`)
                  const observations = await this.loadingPromises.get(loadKey)!
                  observations.forEach((obs: any) => {
                    allObservations.push(obs)
                  })
                } else {
                  console.log(`📊 Loading observations for missing datastream ${ds.datastreamId}`)

                  // Create loading promise
                  const loadPromise = (datasourceInstance as any).getHistoricalObservations(
                    ds.datastreamId,
                    historyConfig
                  ).then((observations: any[]) => {
                    // Add ds_source to observations
                    observations.forEach((obs: any) => {
                      obs.ds_source = ds.datastreamId
                    })
                    console.log(`✅ Loaded ${observations.length} observations for ${ds.datastreamId}`)

                    // Remove from loading map after a short delay to allow concurrent calls to use it
                    setTimeout(() => this.loadingPromises.delete(loadKey), 100)

                    return observations
                  })

                  // Store promise
                  this.loadingPromises.set(loadKey, loadPromise)

                  // Wait for result
                  const observations = await loadPromise
                  observations.forEach((obs: any) => {
                    allObservations.push(obs)
                  })
                }
              } catch (error) {
                console.error(`Error loading observations for ${ds.datastreamId}:`, error)
              }
            }
          }

          console.log(`✅ Total observations collected: ${allObservations.length}`)

          return {
            things: resultMap?.things || [],
            datastreams: resultMap?.datastreams || [],
            observations: allObservations
          }
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

      // Get observations directly from the observations array (Operation mode)
      for (const ogcStaData of ogcStaDataArray) {
        if (ogcStaData?.observations && ogcStaData.observations.length > 0) {
          // Filter observations for this specific datastream
          const relevantObservations = ogcStaData.observations.filter((obs: any) => {
            // Check ds_source field (set by OgcSta.ts:504)
            const obsDatastreamId = obs.ds_source || obs['Datastream@iot.navigationLink']?.match(/Datastreams\((.+?)\)/)?.[1] || obs.datastreamId
            return obsDatastreamId == datastreamSelection.datastreamId  // Use == to handle string/number comparison
          })

          console.log(`📊 Found ${relevantObservations.length} observations for datastream ${datastreamSelection.datastreamId}`)

          relevantObservations.forEach((obs: any) => {
            const timestamp = obs.phenomenonTime || obs.resultTime || new Date().toISOString()
            allTimestamps.add(timestamp)
            observationsByTimestamp.set(timestamp, obs.result)
          })
        }

        // Also support Things structure (Setup/Preview mode)
        if (ogcStaData?.things) {
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
        // Support observations array directly (Operation mode)
        if (ogcStaData?.observations && ogcStaData.observations.length > 0) {
          const relevantObservations = ogcStaData.observations.filter((obs: any) => {
            // Check ds_source field (set by OgcSta.ts:504)
            const obsDatastreamId = obs.ds_source || obs['Datastream@iot.navigationLink']?.match(/Datastreams\((.+?)\)/)?.[1] || obs.datastreamId
            return obsDatastreamId == datastreamSelection.datastreamId  // Use == to handle string/number comparison
          })

          relevantObservations.forEach((observation: any) => {
            const item = {
              datastream: datastreamSelection.label || datastreamSelection.datastreamId,
              value: observation.result,
              unit: '', // Unit not available in observation-only mode
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

        // Support Things structure (Setup/Preview mode)
        if (ogcStaData?.things) {
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
    thingIds: (string | number)[],
    datasourceRepository?: DatasourceRepository
  ): Promise<any[]> {
    if (!datasourceRepository) {
      throw new Error('DatasourceRepository is required')
    }

    // Return empty if no things selected
    if (!thingIds || thingIds.length === 0) {
      return []
    }

    const allDatastreams: any[] = []

    for (const datasourceId of connectedDatasources) {
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

      const options = {
        isolatedRequest: true,  // Don't affect cache, only load for UI
        filter: {
          things: {
            ids: thingIds,
            includeDatastreams: true,
            includeLocations: false
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
