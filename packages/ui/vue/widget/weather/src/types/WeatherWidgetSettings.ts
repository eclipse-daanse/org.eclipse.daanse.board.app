/*
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
*/

export interface WeatherWidgetSettings {
  thingId?: string
  location?: string
  useLocation?: boolean
  startTime?: string
  endTime?: string
  useTimeRange?: boolean
  manualTimeSelection?: boolean
  refreshInterval?: number
}

export interface WeatherDataItem {
  value: number
  unit: string
  timestamp?: string
}

export interface WeatherData {
  temperature?: WeatherDataItem
  humidity?: WeatherDataItem
  pressure?: WeatherDataItem
  windSpeed?: WeatherDataItem
  windDirection?: WeatherDataItem
  precipitation?: WeatherDataItem
  visibility?: WeatherDataItem
  cloudCover?: WeatherDataItem
}

export interface LocationInfo {
  name: string
  description?: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}