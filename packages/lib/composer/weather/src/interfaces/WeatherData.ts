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

export interface WeatherValue {
  value: number
  unit: string
  timestamp: string
  quality?: number
}

export interface LocationInfo {
  name: string
  description?: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export interface ForecastPeriods {
  forecast12h?: WeatherValue
  forecast24h?: WeatherValue
  forecast36h?: WeatherValue
  forecast48h?: WeatherValue
  forecast60h?: WeatherValue
  forecast72h?: WeatherValue
}

export interface WeatherData {
  temperature?: WeatherValue
  humidity?: WeatherValue
  pressure?: WeatherValue
  windSpeed?: WeatherValue
  windDirection?: WeatherValue
  precipitation?: WeatherValue
  visibility?: WeatherValue
  cloudCover?: WeatherValue
  
  // Forecast data for different time periods
  temperatureForecast?: ForecastPeriods
  humidityForecast?: ForecastPeriods
  pressureForecast?: ForecastPeriods
  windSpeedForecast?: ForecastPeriods
  windDirectionForecast?: ForecastPeriods
  precipitationForecast?: ForecastPeriods
  visibilityForecast?: ForecastPeriods
  cloudCoverForecast?: ForecastPeriods
  
  location?: LocationInfo
  timestamp?: string
  thingId?: string | number
}

export interface ForecastMapping {
  forecast12h: string[]
  forecast24h: string[]
  forecast36h: string[]
  forecast48h: string[]
  forecast60h: string[]
  forecast72h: string[]
}

export interface WeatherMapping {
  temperature: string[]
  humidity: string[]
  pressure: string[]
  windSpeed: string[]
  windDirection: string[]
  precipitation: string[]
  visibility: string[]
  cloudCover: string[]
  
  // Forecast mappings for different time periods
  temperatureForecast: ForecastMapping
  humidityForecast: ForecastMapping
  pressureForecast: ForecastMapping
  windSpeedForecast: ForecastMapping
  windDirectionForecast: ForecastMapping
  precipitationForecast: ForecastMapping
  visibilityForecast: ForecastMapping
  cloudCoverForecast: ForecastMapping
}