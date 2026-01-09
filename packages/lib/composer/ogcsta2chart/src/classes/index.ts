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

import {
  BaseDatasource,
  IBaseConnectionConfiguration
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  DatasourceRepository
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { DatastreamSelection, OGCSTAToChartData } from '../interfaces/OGCSTAToChartData'
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY
} from 'org.eclipse.daanse.board.app.lib.events'
import { OGCSTAToChartComposerActions } from '../gen/OGCSTAToChartComposerActions'

export interface IOGCSTAToChartComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources: string[]
  thingIds: (string | number)[]
  datastreams: DatastreamSelection[]
  name: string
  type: string
  uid: string
}

export class OGCSTAToChartComposer extends BaseDatasource implements OGCSTAToChartComposerActions {

  private instanceId: string = ''
  private configuration!: IOGCSTAToChartComposerConfiguration  // Store config reference
  private connectedDatasources: string[] = []
  private thingIds: (string | number)[] = []
  private allThingsCache: any[] = []  // Cache all things for name/id lookup

  // Use getter to always access configuration.datastreams directly
  // This ensures we stay in sync even when Settings UI modifies the array
  private get datastreams(): DatastreamSelection[] {
    return this.configuration?.datastreams || []
  }

  private set datastreams(value: DatastreamSelection[]) {
    if (this.configuration) {
      this.configuration.datastreams = value
    }
  }

  destroy(): void {
    console.log(`Destroying OGCSTAToChartComposer: ${this.instanceId}`)

    // Unregister instance from actions registry
    if (this.instanceId) {
      try {
        if (container.isBound(EVENT_ACTIONS_REGISTRY)) {
          const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)
          // Use unregisterInstance to remove from widgetInstances map
          actionsRegistry.unregisterInstance(this.instanceId)
          console.log(`📝 Unregistered OGCSTAToChartComposer instance: ${this.instanceId}`)
        }
      } catch (error) {
        console.warn('Could not unregister composer instance:', error)
      }
    }
  }

  /**
   * Get the instance ID for this composer
   */
  getInstanceId(): string {
    return this.instanceId
  }

  /**
   * Set the instance ID (called by factory)
   */
  setInstanceId(id: string): void {
    this.instanceId = id
  }
  private isUpdating: boolean = false
  private pendingUpdate: boolean = false
  private cachedData: any = null
  private cachedThingsStructure: any[] = []  // Cache Things structure for operation mode
  private loadingPromises: Map<string, Promise<any>> = new Map()  // Track ongoing loads to prevent duplicates

  public static availableTypes = ['ogcsta']

  init(configuration: IOGCSTAToChartComposerConfiguration) {
    super.init(configuration)

    // Store reference to configuration for UI sync
    this.configuration = configuration

    // Ensure arrays exist in configuration
    if (!Array.isArray(configuration.datastreams)) {
      configuration.datastreams = []
    }
    if (!Array.isArray(configuration.thingIds)) {
      configuration.thingIds = []
    }

    this.connectedDatasources = configuration.connectedDatasources
    this.thingIds = configuration.thingIds

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
                  }).catch((error: any) => {
                    // Remove failed promise from cache immediately so next call can retry
                    this.loadingPromises.delete(loadKey)
                    console.error(`❌ Failed to load observations for ${ds.datastreamId}:`, error)
                    throw error  // Re-throw to propagate error
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
    // Handle switch thing events
    if (event === 'switchThingByName' && params?.name) {
      this.switchThingByName(params.name)
      return
    }
    if (event === 'switchThingById' && params?.id) {
      this.switchThingById(params.id)
      return
    }
    console.warn(`Event "${event}" is not available for OGCSTAToChartComposer`, params)
  }

  /**
   * Switch to a different Thing by its name
   * @param name - The name of the Thing to switch to
   */
  async switchThingByName(name: string): Promise<void> {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by name: "${name}"`)

    const thing = await this.findThingByName(name)
    if (thing) {
      const thingId = thing['@iot.id'] || thing.iotId
      await this.switchToThing(thingId, thing)
    } else {
      console.warn(`⚠️ Thing with name "${name}" not found`)
    }
  }

  /**
   * Switch to a different Thing by its ID
   * @param id - The ID of the Thing to switch to
   */
  async switchThingById(id: string): Promise<void> {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by id: "${id}"`)

    const thing = await this.findThingById(id)
    if (thing) {
      await this.switchToThing(id, thing)
    } else {
      console.warn(`⚠️ Thing with id "${id}" not found`)
    }
  }

  /**
   * Find a Thing by its name from connected datasources
   */
  private async findThingByName(name: string): Promise<any | null> {
    await this.refreshThingsCache()

    const thing = this.allThingsCache.find((t: any) => {
      const thingName = t.name || t.Name
      return thingName === name ||
             thingName?.toLowerCase() === name.toLowerCase()
    })

    return thing || null
  }

  /**
   * Find a Thing by its ID from connected datasources
   */
  private async findThingById(id: string): Promise<any | null> {
    await this.refreshThingsCache()

    const thing = this.allThingsCache.find((t: any) => {
      const thingId = t['@iot.id'] || t.iotId
      return thingId == id  // Use == for string/number comparison
    })

    return thing || null
  }

  /**
   * Refresh the cache of all things from connected datasources
   */
  private async refreshThingsCache(): Promise<void> {
    if (this.allThingsCache.length > 0) {
      return  // Cache is already populated
    }

    const datasourceRepository = container.get(identifier) as DatasourceRepository

    for (const datasourceId of this.connectedDatasources) {
      if (!datasourceId) continue

      try {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId)
        const resultMap = (datasourceInstance as any).resultMap

        if (resultMap?.things && resultMap.things.length > 0) {
          this.allThingsCache.push(...resultMap.things)
        } else {
          // Try to load things directly
          const data = await datasourceInstance.getData('OGCSTAData', {
            isolatedRequest: true,
            filter: {
              things: {
                includeDatastreams: true,
                includeLocations: false
              }
            }
          })

          if (data?.things) {
            this.allThingsCache.push(...data.things)
          }
        }
      } catch (error) {
        console.error(`Error loading things from datasource ${datasourceId}:`, error)
      }
    }

    console.log(`📦 Cached ${this.allThingsCache.length} things for lookup`)
  }

  /**
   * Switch to a specific thing (without changing datastreams)
   * Use addDatastreamsByName or similar actions to configure datastreams separately
   */
  private async switchToThing(thingId: string | number, thing: any): Promise<void> {
    console.log(`🔄 Switching to thing: ${thingId} (${thing.name || 'unnamed'})`)

    // Update thingIds
    this.thingIds = [thingId]

    // Sync configuration object for UI updates (reactive)
    if (this.configuration) {
      // Update thingIds array using splice to trigger Vue reactivity
      this.configuration.thingIds.splice(0, this.configuration.thingIds.length, thingId)
    }

    // Clear cached data to force refresh
    this.cachedData = null

    // Notify subscribers about the change
    this.notify()
  }

  /**
   * Add datastreams by name pattern
   * @param name - The name (or part of name) of datastreams to add
   */
  async addDatastreamsByName(name: string): Promise<void> {
    console.log(`➕ OGCSTAToChartComposer: Adding datastreams by name: "${name}"`)

    await this.refreshThingsCache()

    // Find datastreams matching the name from the current thing(s)
    const matchingDatastreams: DatastreamSelection[] = []

    for (const thing of this.allThingsCache) {
      const thingId = thing['@iot.id'] || thing.iotId
      // Only search in currently selected things
      if (!this.thingIds.includes(thingId) && !this.thingIds.includes(String(thingId))) {
        continue
      }

      if (thing.datastreams) {
        for (const ds of thing.datastreams) {
          const dsName = ds.name || ''
          const dsId = String(ds['@iot.id'] || ds.iotId)

          // Match by exact name or partial name (case-insensitive)
          if (dsName === name || dsName.toLowerCase().includes(name.toLowerCase())) {
            // Check if not already added
            const alreadyExists = this.datastreams.some(d => d.datastreamId === dsId)
            if (!alreadyExists) {
              matchingDatastreams.push({
                datastreamId: dsId,
                label: dsName,
                color: this.generateColor()
              })
            }
          }
        }
      }
    }

    if (matchingDatastreams.length > 0) {
      console.log(`✅ Found ${matchingDatastreams.length} matching datastream(s)`, matchingDatastreams)
      // datastreams getter/setter directly accesses configuration.datastreams
      // so we only need to push to one place
      this.datastreams.push(...matchingDatastreams)
      console.log(`📊 Total datastreams now: ${this.datastreams.length}`, this.datastreams)

      this.cachedData = null
      console.log(`🔔 Calling notify() on instance ${this.instanceId}`)
      this.notify()
    } else {
      console.warn(`⚠️ No datastreams matching "${name}" found in instance ${this.instanceId}`)
    }
  }

  /**
   * Remove all datastreams from the composer
   */
  removeAllDatastreams(): void {
    console.log(`🗑️ OGCSTAToChartComposer: Removing all datastreams`)

    // Use splice to clear array in-place (maintains Vue reactivity)
    this.datastreams.splice(0, this.datastreams.length)

    this.cachedData = null
    this.notify()
  }

  /**
   * Remove a specific datastream by name
   * @param name - The name of the datastream to remove
   */
  removeDatastreamByName(name: string): void {
    console.log(`🗑️ OGCSTAToChartComposer: Removing datastream by name: "${name}"`)

    const initialLength = this.datastreams.length

    // Find indices to remove (in reverse order to avoid index shifting)
    const indicesToRemove: number[] = []
    this.datastreams.forEach((ds, index) => {
      const dsLabel = ds.label || ''
      if (dsLabel === name || dsLabel.toLowerCase().includes(name.toLowerCase())) {
        indicesToRemove.push(index)
      }
    })

    // Remove in reverse order to maintain correct indices
    for (let i = indicesToRemove.length - 1; i >= 0; i--) {
      this.datastreams.splice(indicesToRemove[i], 1)
    }

    const removedCount = initialLength - this.datastreams.length

    if (removedCount > 0) {
      console.log(`✅ Removed ${removedCount} datastream(s)`)
      this.cachedData = null
      this.notify()
    } else {
      console.warn(`⚠️ No datastreams matching "${name}" found to remove`)
    }
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
