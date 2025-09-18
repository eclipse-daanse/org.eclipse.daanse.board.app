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
import { WeatherData, WeatherValue, LocationInfo, WeatherMapping, ForecastMapping } from '../interfaces/WeatherData'

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
  private isUpdating: boolean = false
  private pendingUpdate: boolean = false
  private cachedData: any = null
  private lastRelevantThings: Set<string> = new Set()

  // Default mapping for weather data streams
  private defaultMapping: WeatherMapping = {
    temperature: [
      'currentweather~tempabovesurface5',
      'temperature', 'temp', 'temperatur', 'lufttemperatur',
      'air_temperature', 'airtemperature', 'tempabovesurface',

    ],
    humidity: [
      'humidity', 'feuchte', 'luftfeuchte', 'relative_humidity',
      'relativehumidity', 'rh'
    ],
    pressure: [
      'currentWeather~surfacePressure', 'luftdruck', 'air_pressure', 'airpressure',
      'surfacepressure', 'atmospheric_pressure'
    ],
    windSpeed: [
      '~currentWeather~windSpeed', 'windgeschwindigkeit', 'wind_speed', 'wind',
      'windvelocity'
    ],
    windDirection: [
      '~currentWeather~windDirection', 'windrichtung', 'wind_direction', 'winddirection',
      'winddir'
    ],
    precipitation: [
      '~currentWeather~precipitationSignificantWeatherTotal', 'niederschlag', 'rain', 'regen', 'rainfall',
      'precipitationamount', 'precipitationlarger'
    ],
    visibility: [
      '~currentWeather~visibility', 'sicht', 'sichtweite', 'visual_range'
    ],
    cloudCover: [
      '~currentWeather~cloudCoverEffective', 'wolken', 'bedeckung', 'cloud_cover',
      'cloudcoverbelow', 'cloudcovertotal', 'cloudcovereffective'
    ],

    // Forecast mappings for different time periods
    temperatureForecast: {
      forecast12h: ['~forecast12H~tempAboveSurface5', 'forecast12h~tempabovesurface5', 'temp12h', 'temperature12h', 'temp_12h'],
      forecast24h: ['~forecast24H~tempAboveSurface5', 'temp24h', 'temperature24h', 'temp_24h'],
      forecast36h: ['~forecast36H~tempAboveSurface5', 'temp36h', 'temperature36h', 'temp_36h'],
      forecast48h: ['~forecast48H~tempAboveSurface5', 'temp48h', 'temperature48h', 'temp_48h'],
      forecast60h: ['~forecast60H~tempAboveSurface5', 'temp60h', 'temperature60h', 'temp_60h'],
      forecast72h: ['~forecast72H~tempAboveSurface5', 'temp72h', 'temperature72h', 'temp_72h']
    },
    humidityForecast: {
      forecast12h: ['forecast12h~humidity', 'humidity12h', 'feuchte12h', 'rh12h'],
      forecast24h: ['forecast24h~humidity', 'humidity24h', 'feuchte24h', 'rh24h'],
      forecast36h: ['forecast36h~humidity', 'humidity36h', 'feuchte36h', 'rh36h'],
      forecast48h: ['forecast48h~humidity', 'humidity48h', 'feuchte48h', 'rh48h'],
      forecast60h: ['forecast60h~humidity', 'humidity60h', 'feuchte60h', 'rh60h'],
      forecast72h: ['forecast72h~humidity', 'humidity72h', 'feuchte72h', 'rh72h']
    },
    pressureForecast: {
      forecast12h: ['~forecast12H~surfacePressure', 'forecast12h~pressure', 'pressure12h', 'luftdruck12h'],
      forecast24h: ['~forecast24H~surfacePressure', 'pressure24h', 'luftdruck24h'],
      forecast36h: ['~forecast36H~surfacePressure', 'pressure36h', 'luftdruck36h'],
      forecast48h: ['~forecast48H~surfacePressure', 'pressure48h', 'luftdruck48h'],
      forecast60h: ['~forecast60H~surfacePressure', 'pressure60h', 'luftdruck60h'],
      forecast72h: ['~forecast72H~surfacePressure', 'pressure72h', 'luftdruck72h']
    },
    windSpeedForecast: {
      forecast12h: ['~forecast12H~windSpeed', 'windspeed12h', 'wind12h'],
      forecast24h: ['~forecast24H~windSpeed', 'windspeed24h', 'wind24h'],
      forecast36h: ['~forecast36H~windSpeed', 'windspeed36h', 'wind36h'],
      forecast48h: ['~forecast48H~windSpeed', 'windspeed48h', 'wind48h'],
      forecast60h: ['~forecast60H~windSpeed', 'windspeed60h', 'wind60h'],
      forecast72h: ['~forecast72H~windSpeed', 'windspeed72h', 'wind72h']
    },
    windDirectionForecast: {
      forecast12h: ['~forecast12H~windDirection', 'winddirection12h', 'windrichtung12h'],
      forecast24h: ['~forecast24H~windDirection', 'winddirection24h', 'windrichtung24h'],
      forecast36h: ['~forecast36H~windDirection', 'winddirection36h', 'windrichtung36h'],
      forecast48h: ['~forecast48H~windDirection', 'winddirection48h', 'windrichtung48h'],
      forecast60h: ['~forecast60H~windDirection', 'winddirection60h', 'windrichtung60h'],
      forecast72h: ['~forecast72H~windDirection', 'winddirection72h', 'windrichtung72h']
    },
    precipitationForecast: {
      forecast12h: ['~forecast12H~precipitationSignificantWeatherTotal', '~forecast12H~precipitationSignificantWeatherTotal', 'forecast12h~precipitation', 'precipitation12h', 'niederschlag12h'],
      forecast24h: ['~forecast24H~precipitationSignificantWeatherTotal', 'precipitation24h', 'niederschlag24h'],
      forecast36h: ['~forecast36H~precipitationSignificantWeatherTotal', 'precipitation36h', 'niederschlag36h'],
      forecast48h: ['~forecast48H~precipitationSignificantWeatherTotal', 'precipitation48h', 'niederschlag48h'],
      forecast60h: ['~forecast60H~precipitationSignificantWeatherTotal', 'precipitation60h', 'niederschlag60h'],
      forecast72h: ['~forecast72H~precipitationSignificantWeatherTotal', 'precipitation72h', 'niederschlag72h']
    },
    visibilityForecast: {
      forecast12h: ['~forecast12H~visibility', 'visibility12h', 'sicht12h'],
      forecast24h: ['~forecast24H~visibility', 'visibility24h', 'sicht24h'],
      forecast36h: ['~forecast36H~visibility', 'visibility36h', 'sicht36h'],
      forecast48h: ['~forecast48H~visibility', 'visibility48h', 'sicht48h'],
      forecast60h: ['~forecast60H~visibility', 'visibility60h', 'sicht60h'],
      forecast72h: ['~forecast72H~visibility', 'visibility72h', 'sicht72h']
    },
    cloudCoverForecast: {
      forecast12h: ['~forecast12H~cloudCoverTotal', '~forecast12H~cloudCoverEffective', 'forecast12h~cloudcover', 'cloudcover12h', 'bedeckung12h'],
      forecast24h: ['~forecast24H~cloudCoverTotal', 'cloudcover24h', 'bedeckung24h'],
      forecast36h: ['~forecast36H~cloudCoverTotal', 'cloudcover36h', 'bedeckung36h'],
      forecast48h: ['~forecast48H~cloudCoverTotal', 'cloudcover48h', 'bedeckung48h'],
      forecast60h: ['~forecast60H~cloudCoverTotal', 'cloudcover60h', 'bedeckung60h'],
      forecast72h: ['~forecast72H~cloudCoverTotal', 'cloudcover72h', 'bedeckung72h']
    }
  }

  public static availableTypes = ['ogcsta']

  init(configuration: IWeatherComposerConfiguration) {
    super.init(configuration)

    this.connectedDatasources = configuration.connectedDatasources
    this.thingId = configuration.thingId
    this.customMapping = configuration.customMapping

    const updateFn = async () => {
      // Prevent duplicate processing when multiple datasources update quickly
      if (this.isUpdating) {
        console.log('🔄 Update already in progress, marking pending update')
        this.pendingUpdate = true
        return
      }

      this.isUpdating = true
      this.pendingUpdate = false

      try {
        console.log('🌤️ WeatherComposer: Checking for relevant changes...')

        // Check if relevant things have changed before doing full processing
        const hasRelevantChanges = await this.checkForRelevantChanges()

        if (hasRelevantChanges) {
          console.log('✅ Relevant changes detected, updating weather data')
          //await this.getData('WeatherData')
          this.notify()
        } else {
          console.log('⏭️ No relevant changes detected, using cached data')
          // Use cached data and still notify (data might be needed by widgets)
          if (this.cachedData) {
            this.notify()
          }
        }

        // Check if another update was requested while processing
        if (this.pendingUpdate) {
          console.log('🔄 Processing pending update')
          this.pendingUpdate = false
          setTimeout(() => updateFn(), 100) // Small delay to batch updates
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

          // Step 1: Get Things + Datastreams + Locations (no observations yet)
          let dat = await datasourceInstance.getData('OGCSTAData', datasourceOptions)
          console.log('Weather Composer: Things and Datastreams loaded (no observations):', dat)

          // Step 2: Identify relevant datastreams through mapping
          if (dat?.things) {
            const relevantDatastreams: any[] = []
            const mapping = { ...this.defaultMapping, ...this.customMapping }

            // Track which weather parameters we've already found (global across all things)
            const foundParameters = new Set<string>()

            // Collect all datastreams and check which ones match our weather parameters
            for (const thing of dat.things) {
              if (thing.datastreams && thing.datastreams.length > 0) {
                console.log(`🔍 Checking ${thing.datastreams.length} datastreams for thing ${thing.name}`)

                for (const datastream of thing.datastreams) {
                  // If we found all weather parameters, stop searching
                  if (foundParameters.size >= Object.keys(mapping).length) {
                    console.log('🎯 All weather parameters found, stopping search')
                    break
                  }

                  const name = datastream.name?.toLowerCase() || ''
                  const description = datastream.description?.toLowerCase() || ''
                  const searchText = `${name} ${description}`
                  const id = datastream.iotId

                  // Debug: Log all datastreams to see what's available
                  console.log(`🔍 Available datastream: "${datastream.name}" (ID: ${id}) - searchText: "${searchText}"`)

                  // Check if this datastream matches any weather parameter
                  for (const [weatherParam, keywords] of Object.entries(mapping)) {
                    // Skip if we already found this weather parameter (only for current weather, not forecasts)
                    if (foundParameters.has(weatherParam) && !weatherParam.endsWith('Forecast')) {
                      continue
                    }

                    // Handle forecast mappings (nested structure)
                    if (weatherParam.endsWith('Forecast') && typeof keywords === 'object' && !Array.isArray(keywords)) {
                      for (const [forecastPeriod, forecastKeywords] of Object.entries(keywords as ForecastMapping)) {
                        if (Array.isArray(forecastKeywords)) {
                          if (forecastKeywords.some(keyword => id.includes(keyword) || searchText.includes(keyword))) {
                            console.log(`🎯 Found relevant datastream: ${datastream.name} (${id}) for ${weatherParam}.${forecastPeriod}`)
                            relevantDatastreams.push({
                              ...datastream,
                              thingId: thing['@iot.id'] || thing.iotId, // Add thing reference
                              weatherParam: weatherParam, // Track which parameter this is for
                              forecastPeriod: forecastPeriod // Track which forecast period
                            })
                            // Don't break here - continue to find other forecast periods for this parameter
                          }
                        }
                      }
                    }
                    // Handle current weather mappings (simple array structure)
                    else if (Array.isArray(keywords)) {
                      if (keywords.includes(id) || keywords.some(keyword => searchText.includes(keyword))) {
                        console.log(`🎯 Found relevant datastream: ${datastream.name} (${id}) for ${weatherParam}`)
                        relevantDatastreams.push({
                          ...datastream,
                          thingId: thing['@iot.id'] || thing.iotId, // Add thing reference
                          weatherParam: weatherParam // Track which parameter this is for
                        })
                        foundParameters.add(weatherParam) // Mark this parameter as found
                        break // Stop after first match for this datastream
                      }
                    }
                  }
                }

                // If we found all weather parameters from this thing, stop checking other things
                if (foundParameters.size >= Object.keys(mapping).length) {
                  console.log('🎯 All weather parameters found in current thing, stopping thing search')
                  break
                }
              }
            }

            console.log(`🎯 Found weather parameters: ${Array.from(foundParameters).join(', ')}`)

            // Step 3: Get observations only for relevant datastreams
            if (relevantDatastreams.length > 0) {
              console.log(`📊 Loading observations for ${relevantDatastreams.length} relevant datastreams (out of total available)`)

              // Check if datastreams already have observations
              const datastreamWithoutObs = relevantDatastreams.filter((ds: any) => {
                const matchingInThing = dat.things.find((thing: any) =>
                  thing.datastreams?.find((thingDs: any) =>
                    (thingDs['@iot.id'] || thingDs.iotId) == ds['@iot.id'] || ds.iotId
                  )
                )?.datastreams?.find((thingDs: any) =>
                  (thingDs['@iot.id'] || thingDs.iotId) == (ds['@iot.id'] || ds.iotId)
                )

                const hasObservations = matchingInThing?.observations && matchingInThing.observations.length > 0
                console.log(`🔍 Datastream ${ds.name} has observations: ${hasObservations}`)
                return !hasObservations
              })

              if (datastreamWithoutObs.length > 0) {
                console.log(`📊 Loading observations for ${datastreamWithoutObs.length} datastreams without observations`)

                const observationsOptions = {
                  ...options,
                  filter: {
                    observations: datastreamWithoutObs.map((ds: any) => {
                      const datastreamId = ds['@iot.id'] || ds.iotId || ds.id
                      console.log(`🔍 Mapping datastream for observations: ${ds.name} -> ID: ${datastreamId}`)
                      if (!datastreamId) {
                        console.error('❌ No datastream ID found for datastream:', ds)
                      }
                      return {
                        iotId: datastreamId, // OGC STA expects iotId, not datastreamId
                        $top: 1,
                        $orderby: 'phenomenonTime desc'
                      }
                    }).filter(obs => obs.iotId !== undefined && obs.iotId !== null)
                  }
                }

                const observationsData = await datasourceInstance.getData('OGCSTAData', observationsOptions)

                // Merge observations back into relevant datastreams
                if (observationsData?.observations) {
                  console.log(`✅ Received ${observationsData.observations.length} observations`)

                  // Update datastreams in the things with observations
                  dat.things.forEach((thing: any) => {
                    if (thing.datastreams) {
                      thing.datastreams.forEach((ds: any) => {
                        const observation = observationsData.observations?.find((obs: any) =>
                          obs.ds_source == ds['@iot.id'] || obs.ds_source == ds.iotId
                        )
                        if (observation) {
                          ds.observations = [observation]
                          console.log(`✅ Added observation to ${ds.name}: ${observation.result}`)
                        }
                      })
                    }
                  })
                }
              } else {
                console.log('ℹ️ All relevant datastreams already have observations, skipping observation fetch')
              }
            } else {
              console.log('⚠️ No relevant datastreams found for weather mapping')
            }
          }

          console.log(dat)
          return dat;
        })
    )

    if (type === "WeatherData") {
      const weatherData = this.composeWeatherData(data)
      // Cache the composed weather data
      this.cachedData = weatherData
      return weatherData
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
          datastreamCount = thing.datastreams.length
          thing.datastreams.forEach((datastream: any) => {
            this.processDatastream(datastream, weatherData)
          })
        }
        // Fallback: check for separate datastreams in the response
        else if (ogcStaData.datastreams) {
          const matchingDatastreams = ogcStaData.datastreams.filter((ds: any) =>
            ds.thing && ds.thing['@iot.id'] == thing['@iot.id']
          )
          datastreamCount = matchingDatastreams.length
          matchingDatastreams.forEach((datastream: any) => {
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
    if (!datastream.observations || datastream.observations.length === 0) {
      return
    }

    const observation = datastream.observations[0]
    const name = datastream.name?.toLowerCase() || ''
    const description = datastream.description?.toLowerCase() || ''
    const searchText = `${name} ${description}`
    const id = datastream.iotId;

    const weatherValue: WeatherValue = {
      value: observation.result,
      unit: datastream.unitOfMeasurement?.symbol || '',
      timestamp: observation.phenomenonTime || observation.resultTime || '',
      quality: observation.resultQuality || undefined
    }

    // Get effective mapping (custom + default)
    const mapping = { ...this.defaultMapping, ...this.customMapping }

    // Determine if this is current weather or forecast based on ID pattern
    const isCurrentWeather = id.includes('~currentWeather~')
    const forecastMatch = id.match(/~forecast(\d+)H~/)
    const isForecast = !!forecastMatch

    console.log(`      🔍 Processing datastream: ${id}, isCurrentWeather: ${isCurrentWeather}, isForecast: ${isForecast}`)

    // Check each weather parameter
    let matched = false
    for (const [weatherParam, keywords] of Object.entries(mapping)) {
      // Handle forecast mappings (nested structure)
      if (weatherParam.endsWith('Forecast') && typeof keywords === 'object' && !Array.isArray(keywords) && isForecast) {
        const forecastHours = forecastMatch[1]
        const forecastPeriodKey = `forecast${forecastHours}h`

        // Only process supported forecast periods (12, 24, 36, 48, 60, 72 hours)
        const supportedPeriods = ['12', '24', '36', '48', '60', '72']
        if (!supportedPeriods.includes(forecastHours)) {
          console.log(`      ⏭️ Skipping unsupported forecast period: ${forecastPeriodKey}`)
          continue
        }

        console.log(`      🔍 Looking for forecast period: ${forecastPeriodKey} in ${weatherParam}`)

        const forecastKeywords = (keywords as ForecastMapping)[forecastPeriodKey as keyof ForecastMapping]
        if (Array.isArray(forecastKeywords)) {
          // Check if the parameter name matches (extract parameter from ID)
          const parameterName = id.split('~').pop()?.toLowerCase()
          const matchesParameter = forecastKeywords.some(keyword =>
            id.includes(keyword) ||
            searchText.includes(keyword) ||
            (parameterName && keyword.toLowerCase().includes(parameterName))
          )

          if (matchesParameter) {
            console.log(`      ✅ Matched "${weatherParam}.${forecastPeriodKey}" with ID "${id}"`)

            // Initialize forecast object if it doesn't exist
            if (!(weatherData as any)[weatherParam]) {
              ;(weatherData as any)[weatherParam] = {}
            }

            // Add the forecast value for this time period
            ;(weatherData as any)[weatherParam][forecastPeriodKey] = weatherValue
            matched = true
            break
          }
        }
      }
      // Handle current weather mappings (simple array structure)
      else if (Array.isArray(keywords) && isCurrentWeather) {
        // Extract parameter name from ID for current weather
        const parameterName = id.split('~').pop()?.toLowerCase()
        const matchesParameter = keywords.some(keyword =>
          id.includes(keyword) ||
          searchText.includes(keyword) ||
          (parameterName && keyword.toLowerCase().includes(parameterName))
        )

        if (matchesParameter) {
          console.log(`      ✅ Matched current "${weatherParam}" with ID "${id}"`)
          ;(weatherData as any)[weatherParam] = weatherValue
          matched = true
          break
        }
      }
    }

    if (!matched) {
      console.log(`      ❌ No match found for "${id}" (searchText: "${searchText}")`)
    }
  }

  private hasWeatherMeasurements(weatherData: WeatherData): boolean {
    return !!(
      // Current weather measurements
      weatherData.temperature ||
      weatherData.humidity ||
      weatherData.pressure ||
      weatherData.windSpeed ||
      weatherData.windDirection ||
      weatherData.precipitation ||
      weatherData.visibility ||
      weatherData.cloudCover ||

      // Forecast measurements
      weatherData.temperatureForecast ||
      weatherData.humidityForecast ||
      weatherData.pressureForecast ||
      weatherData.windSpeedForecast ||
      weatherData.windDirectionForecast ||
      weatherData.precipitationForecast ||
      weatherData.visibilityForecast ||
      weatherData.cloudCoverForecast
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

  // Helper method to get current weather summary for widget
  getCurrentWeather(weatherData?: WeatherData[]): any {
    if (!weatherData || !Array.isArray(weatherData) || weatherData.length === 0) {
      return null
    }

    // Use first weather station or find by thingId
    let currentStation = weatherData[0]
    if (this.thingId) {
      const specificStation = weatherData.find(station =>
        station.thingId == this.thingId || String(station.thingId) == String(this.thingId)
      )
      if (specificStation) {
        currentStation = specificStation
      }
    }

    return {
      location: currentStation.location,
      thingId: currentStation.thingId,
      measurements: {
        temperature: currentStation.temperature,
        humidity: currentStation.humidity,
        pressure: currentStation.pressure,
        windSpeed: currentStation.windSpeed,
        windDirection: currentStation.windDirection,
        precipitation: currentStation.precipitation,
        visibility: currentStation.visibility,
        cloudCover: currentStation.cloudCover
      },
      lastUpdated: this.getLatestTimestamp(currentStation)
    }
  }

  // Helper to get the most recent timestamp from all measurements
  private getLatestTimestamp(weatherData: WeatherData): string | undefined {
    const timestamps = [
      weatherData.temperature?.timestamp,
      weatherData.humidity?.timestamp,
      weatherData.pressure?.timestamp,
      weatherData.windSpeed?.timestamp,
      weatherData.windDirection?.timestamp,
      weatherData.precipitation?.timestamp,
      weatherData.visibility?.timestamp,
      weatherData.cloudCover?.timestamp
    ].filter(Boolean) as string[]

    if (timestamps.length === 0) return undefined

    return timestamps.reduce((latest, current) => {
      return new Date(current) > new Date(latest) ? current : latest
    })
  }

  // Check if relevant things have changed before doing expensive processing
  private async checkForRelevantChanges(): Promise<boolean> {
    try {
      const datasourceRepository = container.get(identifier) as DatasourceRepository

      // Get current relevant things from the datasource (lightweight check)
      const currentRelevantThings = new Set<string>()

      for (const datasourceId of this.connectedDatasources.filter(id => id)) {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId)

        // Get only thing IDs and names, no datastreams or observations
        const datasourceOptions = this.thingId ? {
          filter: {
            things: {
              ids: [this.thingId]
            }
          }
        } : {
          filter: {
            things: {
              all: {
                includeDatastreams: false, // Only get thing metadata
                includeLocations: false
              }
            }
          }
        }

        const lightweightData = await datasourceInstance.getData('OGCSTAData', datasourceOptions)

        if (lightweightData?.things) {
          lightweightData.things.forEach((thing: any) => {
            const thingId = thing['@iot.id'] || thing.iotId || thing.id
            // Only track things that match our filter
            if (!this.thingId || thingId == this.thingId || String(thingId) == String(this.thingId)) {
              currentRelevantThings.add(String(thingId))
            }
          })
        }
      }

      // Compare with last known relevant things
      const hasChanges = !this.setsEqual(currentRelevantThings, this.lastRelevantThings)

      if (hasChanges) {
        console.log(`🔄 Relevant things changed:`)
        console.log(`   Previous: [${Array.from(this.lastRelevantThings).join(', ')}]`)
        console.log(`   Current: [${Array.from(currentRelevantThings).join(', ')}]`)
        this.lastRelevantThings = currentRelevantThings
      }

      return hasChanges
    } catch (error) {
      console.warn('⚠️ Error checking for relevant changes, proceeding with full update:', error)
      return true // If we can't check, assume changes to be safe
    }
  }

  // Helper to compare two sets
  private setsEqual<T>(set1: Set<T>, set2: Set<T>): boolean {
    return set1.size === set2.size && [...set1].every(x => set2.has(x))
  }
}
