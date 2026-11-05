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

import { BaseDatasource, IBaseConnectionConfiguration, type ConfigurationOf } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  DatasourceRepository
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { DatastreamSelection, OGCSTAToChartData } from '../interfaces/OGCSTAToChartData'
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY
} from 'org.eclipse.daanse.board.app.lib.api.events'
import { OGCSTAToChartComposerActions } from '../gen/OGCSTAToChartComposerActions'

/**
 * What this composer needs from an OGC STA source. Stated here rather than
 * imported, so the composer does not depend on the source's package.
 */
interface ThingListSource {
  listThings(): Promise<{ id: string; name: string }[]>
  listDatastreamsOfThing(thingId: string): Promise<any[]>
}

interface DatastreamWindowSource {
  loadDatastreamWindow(datastreamId: string): Promise<{ datastream?: any; observations: any[] }>
}

export interface IOGCSTAToChartComposerConfiguration extends ConfigurationOf<IBaseConnectionConfiguration> {
  connectedDatasources: string[]
  thingIds: (string | number)[]
  datastreams: DatastreamSelection[]
  name: string
  type: string
  uid: string
}

export class OGCSTAToChartComposer extends BaseDatasource implements OGCSTAToChartComposerActions {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(
    private readonly datasourceRepository: DatasourceRepository,
    private readonly actionsRegistry?: EventActionsRegistry,
  ) {
    super()
  }


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
        if (this.actionsRegistry) {
          const actionsRegistry = this.actionsRegistry
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
  private requestSessionId: number = 0  // Incremented on each thing switch to invalidate old requests

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

    const datasourceRepository = this.datasourceRepository

    this.connectedDatasources
      .filter((datasourceId) => datasourceId)
      .forEach((ds) => {
        const datasource = datasourceRepository.getDatasource(ds)
        datasource.subscribe(updateFn)
      })

    // Trigger initial load after a short delay to ensure datasources are ready
    setTimeout(() => {
      console.log('📊 OGCSTAToChartComposer: Initial notify to load data')
      this.notify()
    }, 100)
  }

  async getData(type: string, options?: any): Promise<any> {
    const datasourceRepository = this.datasourceRepository
    if (!datasourceRepository) {
      throw new Error('DatasourceRepository is not provided to DataSource Classes')
    }

    /*
     * Each configured datastream is loaded directly, with its window, all at
     * once. The catalogue of the source is not touched: the chart knows its
     * datastream ids, and waiting for every thing of the server first cost
     * about a minute (#1250).
     */
    const data = await Promise.all(
      this.connectedDatasources
        .filter((datasourceId) => datasourceId)
        .map(async (datasourceId) => {
          const source = datasourceRepository.getDatasource(datasourceId) as unknown as Partial<DatastreamWindowSource>
          if (this.datastreams.length === 0 || typeof source.loadDatastreamWindow !== 'function') {
            return { things: [], datastreams: [], observations: [] }
          }

          const windows = await Promise.all(
            this.datastreams.map((selection) =>
              source.loadDatastreamWindow!(selection.datastreamId).catch((error: unknown) => {
                console.error(`Error loading observations for ${selection.datastreamId}:`, error)
                return { datastream: undefined, observations: [] }
              }),
            ),
          )

          return {
            things: [],
            datastreams: windows.map((w) => w.datastream).filter((ds) => ds),
            observations: windows.flatMap((w) => w.observations),
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

    /*
     * Ids and names only (`Things?$select=@iot.id,name`). This used to read
     * the source's private catalogue, or else send a filter the source did
     * not act on, so it found things only after a map had loaded them all.
     * Datastreams of the chosen thing come later, by navigation.
     */
    const datasourceRepository = this.datasourceRepository
    for (const datasourceId of this.connectedDatasources) {
      if (!datasourceId) continue
      try {
        const source = datasourceRepository.getDatasource(datasourceId) as unknown as Partial<ThingListSource>
        if (typeof source.listThings !== 'function') continue
        for (const thing of await source.listThings()) {
          this.allThingsCache.push({ iotId: thing.id, name: thing.name })
        }
      } catch (error) {
        console.error(`Error loading things from datasource ${datasourceId}:`, error)
      }
    }

    console.log(`📦 Cached ${this.allThingsCache.length} things for lookup`)
  }

  /**
   * Load datastreams for a specific thing if not already loaded
   */
  private async loadDatastreamsForThing(thingId: string | number): Promise<any | null> {
    // Find thing in cache
    const thing = this.allThingsCache.find((t: any) => {
      const tId = t['@iot.id'] || t.iotId
      return tId == thingId
    })

    // If thing has datastreams, return it
    if (thing?.datastreams && thing.datastreams.length > 0) {
      console.log(`📦 Thing ${thingId} already has ${thing.datastreams.length} datastreams cached`)
      return thing
    }

    // Load datastreams for this thing
    console.log(`📡 Loading datastreams for thing ${thingId}...`)
    const datasourceRepository = this.datasourceRepository

    for (const datasourceId of this.connectedDatasources) {
      if (!datasourceId) continue

      try {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

        // By navigation, Things(id)/Datastreams: complete on every server.
        const source = datasourceInstance as unknown as Partial<ThingListSource>
        if (typeof source.listDatastreamsOfThing === 'function') {
          const datastreams = await source.listDatastreamsOfThing(String(thingId))
          if (thing) {
            thing.datastreams = datastreams
            return thing
          }
          const loaded = { iotId: thingId, datastreams }
          this.allThingsCache.push(loaded)
          return loaded
        }

        const data = await datasourceInstance.getData('OGCSTAData', {
          isolatedRequest: true,
          filter: {
            things: {
              ids: [thingId],
              includeDatastreams: true,
              includeLocations: false
            }
          }
        })

        if (data?.things && data.things.length > 0) {
          const loadedThing = data.things[0]
          console.log(`✅ Loaded ${loadedThing.datastreams?.length || 0} datastreams for thing ${thingId}`)

          // Update cache with loaded datastreams
          if (thing) {
            thing.datastreams = loadedThing.datastreams
          } else {
            // Add to cache if not found
            this.allThingsCache.push(loadedThing)
          }

          return thing || loadedThing
        }
      } catch (error) {
        console.error(`Error loading datastreams for thing ${thingId}:`, error)
      }
    }

    return thing
  }

  /**
   * Switch to a specific thing (without changing datastreams)
   * Use addDatastreamsByName or similar actions to configure datastreams separately
   */
  private async switchToThing(thingId: string | number, thing: any): Promise<void> {
    console.log(`🔄 Switching to thing: ${thingId} (${thing.name || 'unnamed'})`)

    // Increment session ID to invalidate any in-flight requests from previous thing
    this.requestSessionId++
    console.log(`🔄 New request session: ${this.requestSessionId}`)

    // Update thingIds
    this.thingIds = [thingId]

    // Sync configuration object for UI updates (reactive)
    if (this.configuration) {
      // Update thingIds array using splice to trigger Vue reactivity
      this.configuration.thingIds.splice(0, this.configuration.thingIds.length, thingId)
    }

    // Clear cached data to force refresh
    this.cachedData = null

    // Don't notify here - let removeAllDatastreams and addDatastreamsByName handle it
    // This prevents getData from being called with old datastreams
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

    for (const thingId of this.thingIds) {
      // Load datastreams for this thing if not already loaded
      const thing = await this.loadDatastreamsForThing(thingId)

      if (!thing) {
        console.warn(`⚠️ Thing ${thingId} not found`)
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

          const datastream = ogcStaData.datastreams?.find((ds: any) => ds?.iotId == datastreamSelection.datastreamId)
          relevantObservations.forEach((observation: any) => {
            const item = {
              datastream: datastreamSelection.label || datastream?.name || datastreamSelection.datastreamId,
              value: observation.result,
              unit: datastream?.unitOfMeasurement?.symbol || '',
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
