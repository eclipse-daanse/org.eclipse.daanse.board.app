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

export interface WeatherData {
  temperature?: WeatherValue
  humidity?: WeatherValue
  pressure?: WeatherValue
  windSpeed?: WeatherValue
  windDirection?: WeatherValue
  precipitation?: WeatherValue
  visibility?: WeatherValue
  cloudCover?: WeatherValue
  location?: LocationInfo
  timestamp?: string
  thingId?: string | number
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
}