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
import { WeatherData, WeatherValue, LocationInfo, WeatherMapping } from '../interfaces/WeatherData'

export interface IWeatherComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources: string[]
  thingId?: string | number
  customMapping?: Partial<WeatherMapping>
  name: string
  type: string
  uid: string
}

export class WeatherComposer extends BaseDatasource {
  destroy(): void {
    console.log("Destroying WeatherComposer")
  }

  private connectedDatasources: string[] = []
  private thingId?: string | number
  private customMapping?: Partial<WeatherMapping>

  // Default mapping for weather data streams
  private defaultMapping: WeatherMapping = {
    temperature: [
      'temperature', 'temp', 'temperatur', 'lufttemperatur',
      'air_temperature', 'airtemperature', 'tempabovesurface'
    ],
    humidity: [
      'humidity', 'feuchte', 'luftfeuchte', 'relative_humidity',
      'relativehumidity', 'rh'
    ],
    pressure: [
      'pressure', 'luftdruck', 'air_pressure', 'airpressure',
      'surfacepressure', 'atmospheric_pressure'
    ],
    windSpeed: [
      'windspeed', 'windgeschwindigkeit', 'wind_speed', 'wind',
      'windvelocity'
    ],
    windDirection: [
      'winddirection', 'windrichtung', 'wind_direction', 'winddirection',
      'winddir'
    ],
    precipitation: [
      'precipitation', 'niederschlag', 'rain', 'regen', 'rainfall',
      'precipitationamount', 'precipitationlarger'
    ],
    visibility: [
      'visibility', 'sicht', 'sichtweite', 'visual_range'
    ],
    cloudCover: [
      'cloudcover', 'wolken', 'bedeckung', 'cloud_cover',
      'cloudcoverbelow', 'cloudcovertotal', 'cloudcovereffective'
    ]
  }

  public static availableTypes = ['ogcsta']

  init(configuration: IWeatherComposerConfiguration) {
    super.init(configuration)

    this.connectedDatasources = configuration.connectedDatasources
    this.thingId = configuration.thingId
    this.customMapping = configuration.customMapping

    const updateFn = async () => {
      await this.getData('WeatherData')
      this.notify()
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

          // Configure datasource options for weather data retrieval
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
                  includeLocations: true
                }
              }
            }
          }

          // Get the data first to access datastreams
          let dat = await datasourceInstance.getData('OGCSTAData', datasourceOptions)
          console.log(dat)
          // Now get observations for each datastream with $top=1 for latest values
          if (dat?.things) {
            const datastreams:any = []

            // Collect all datastreams from things
            dat.things.forEach((thing: any) => {
              if (thing.datastreams && thing.datastreams.length > 0) {
                datastreams.push(...thing.datastreams)
              }
            })

            // Get latest observations for each datastream
            if (datastreams.length > 0) {
              const observationsOptions = {
                ...options,
                filter: {
                  observations: datastreams.map((ds: any) => ({
                    ...ds,
                    $top: 1
                  }))
                }
              }

              const observationsData = await datasourceInstance.getData('OGCSTAData', observationsOptions)

              // Merge observations back into datastreams
              if (observationsData?.observations) {
                datastreams.forEach((ds: any) => {
                  const observation = observationsData.observations?.find((obs: any) =>
                    obs.ds_source == ds['@iot.id'] || obs.ds_source == ds.iotId
                  )
                  if (observation) {
                    ds.observations = [observation]
                  }
                })
              }
            }
          }

          console.log(dat)
          return dat;
        })
    )

    if (type === "WeatherData") {
      return this.composeWeatherData(data)
    } else {
      console.warn("Invalid data type for WeatherComposer")
      return null
    }
  }

  async getOriginalData() {
    return []
  }

  callEvent(event: string, params: any) {
    console.warn(`Event "${event}" is not available for WeatherComposer`, params)
  }

  private composeWeatherData(ogcStaDataArray: any[]): WeatherData[] {
    const weatherDataArray: WeatherData[] = []

    console.log('🌤️ WeatherComposer: Starting data composition', ogcStaDataArray)

    ogcStaDataArray.forEach((ogcStaData, index) => {
      console.log(`🌤️ Processing datasource ${index}:`, ogcStaData)

      if (!ogcStaData?.things) {
        console.log('❌ No things found in datasource')
        return
      }

      console.log(`✅ Found ${ogcStaData.things.length} things`)

      ogcStaData.things.forEach((thing: any) => {
        // Try different possible ID fields
        const thingId = thing['@iot.id'] || thing.iotId || thing.id
        console.log(`🏠 Processing thing ${thingId}:`, thing.name)
        console.log(`    Thing object keys:`, Object.keys(thing))
        console.log(`    Thing:`, thing)

        // Skip if thingId is specified and doesn't match
        if (this.thingId && thingId != this.thingId && String(thingId) != String(this.thingId)) {
          console.log(`⏭️ Skipping thing ${thingId} - doesn't match filter ${this.thingId}`)
          return
        }

        const weatherData: WeatherData = {
          thingId: thingId,
          location: this.extractLocationInfo(thing)
        }

        let datastreamCount = 0

        // Process datastreams for this thing
        // First check if datastreams are directly attached to the thing (from expand)
        if (thing.datastreams && thing.datastreams.length > 0) {
          console.log(`📊 Found ${thing.datastreams.length} datastreams directly on thing`)
          datastreamCount = thing.datastreams.length
          thing.datastreams.forEach((datastream: any) => {
            console.log(`📈 Processing datastream: ${datastream.name} (${datastream['@iot.id']})`)
            this.processDatastream(datastream, weatherData)
          })
        }
        // Fallback: check for separate datastreams in the response
        else if (ogcStaData.datastreams) {
          const matchingDatastreams = ogcStaData.datastreams.filter((ds: any) =>
            ds.thing && ds.thing['@iot.id'] == thing['@iot.id']
          )
          console.log(`📊 Found ${matchingDatastreams.length} datastreams in separate array`)
          datastreamCount = matchingDatastreams.length
          matchingDatastreams.forEach((datastream: any) => {
            console.log(`📈 Processing datastream: ${datastream.name} (${datastream['@iot.id']})`)
            this.processDatastream(datastream, weatherData)
          })
        }

        console.log(`🌤️ Weather data after processing:`, weatherData)

        // Only add weather data if it contains actual measurements
        if (this.hasWeatherMeasurements(weatherData)) {
          console.log(`✅ Adding weather data for thing ${thingId}`)
          weatherDataArray.push(weatherData)
        } else {
          console.log(`❌ No weather measurements found for thing ${thingId}`)
          console.log(`   - Processed ${datastreamCount} datastreams`)
        }
      })
    })

    return weatherDataArray
  }

  private extractLocationInfo(thing: any): LocationInfo {
    const location: LocationInfo = {
      name: thing.name || 'Unknown Location',
      description: thing.description
    }

    if (thing.locations && thing.locations.length > 0) {
      const firstLocation = thing.locations[0]
      if (firstLocation.location?.coordinates) {
        location.coordinates = {
          latitude: firstLocation.location.coordinates[1],
          longitude: firstLocation.location.coordinates[0]
        }
      }
    }

    return location
  }

  private processDatastream(datastream: any, weatherData: WeatherData) {
    console.log(`  📈 Processing datastream: ${datastream.name}`)
    console.log(`      ID: ${datastream['@iot.id']}`)
    console.log(`      Has observations:`, !!datastream.observations)
    console.log(`      Observations count:`, datastream.observations?.length || 0)

    if (!datastream.observations || datastream.observations.length === 0) {
      console.log(`      ❌ No observations found for ${datastream.name}`)
      return
    }

    const observation = datastream.observations[0]
    const name = datastream.name?.toLowerCase() || ''
    const description = datastream.description?.toLowerCase() || ''
    const searchText = `${name} ${description}`

    console.log(`      Search text: "${searchText}"`)
    console.log(`      Observation result:`, observation.result)

    const weatherValue: WeatherValue = {
      value: observation.result,
      unit: datastream.unitOfMeasurement?.symbol || '',
      timestamp: observation.phenomenonTime || observation.resultTime || '',
      quality: observation.resultQuality || undefined
    }

    // Get effective mapping (custom + default)
    const mapping = { ...this.defaultMapping, ...this.customMapping }

    // Check each weather parameter
    let matched = false
    for (const [weatherParam, keywords] of Object.entries(mapping)) {
      const matchingKeyword = keywords.find(keyword => searchText.includes(keyword))
      if (matchingKeyword) {
        console.log(`      ✅ Matched "${weatherParam}" with keyword "${matchingKeyword}"`)
        ;(weatherData as any)[weatherParam] = weatherValue
        matched = true
        break // Stop at first match to avoid duplicate assignments
      }
    }

    if (!matched) {
      console.log(`      ❌ No keyword match found for "${searchText}"`)
      console.log(`      Available keywords:`, Object.keys(mapping).map(key => `${key}: [${mapping[key as keyof WeatherMapping].join(', ')}]`))
    }
  }

  private hasWeatherMeasurements(weatherData: WeatherData): boolean {
    return !!(
      weatherData.temperature ||
      weatherData.humidity ||
      weatherData.pressure ||
      weatherData.windSpeed ||
      weatherData.windDirection ||
      weatherData.precipitation ||
      weatherData.visibility ||
      weatherData.cloudCover
    )
  }

  static validateConfiguration(config: any): boolean {
    if (!config.connectedDatasources || !Array.isArray(config.connectedDatasources)) {
      return false
    }
    if (config.connectedDatasources.length === 0) {
      return false
    }
    return true
  }

  // Helper method to get weather data for a specific thing
  async getWeatherForThing(thingId: string | number): Promise<WeatherData | null> {
    const originalThingId = this.thingId
    this.thingId = thingId

    try {
      const weatherDataArray = await this.getData('WeatherData')
      return weatherDataArray.length > 0 ? weatherDataArray[0] : null
    } finally {
      this.thingId = originalThingId
    }
  }

  // Helper method to get all available weather data
  async getAllWeatherData(): Promise<WeatherData[]> {
    const originalThingId = this.thingId
    this.thingId = undefined

    try {
      return await this.getData('WeatherData')
    } finally {
      this.thingId = originalThingId
    }
  }
}
