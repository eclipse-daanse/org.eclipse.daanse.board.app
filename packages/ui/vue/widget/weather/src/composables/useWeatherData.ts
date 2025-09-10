/*
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
*/

import { ref, computed, watch } from 'vue'
import type { WeatherWidgetSettings } from '../types/WeatherWidgetSettings'

export function useWeatherData(settings: WeatherWidgetSettings, datasourceId: string) {
  const weatherData = ref<any>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const filteredDatastreams = computed(() => {
    if (!weatherData.value?.datastreams) return []
    
    let datastreams = weatherData.value.datastreams
    
    // Filter by time range if specified
    if (settings.useTimeRange && (settings.startTime || settings.endTime)) {
      datastreams = datastreams.filter((ds: any) => {
        if (!ds.observations || ds.observations.length === 0) return false
        
        const obsTime = new Date(ds.observations[0].phenomenonTime)
        
        if (settings.startTime) {
          const startTime = new Date(settings.startTime)
          if (obsTime < startTime) return false
        }
        
        if (settings.endTime) {
          const endTime = new Date(settings.endTime)
          if (obsTime > endTime) return false
        }
        
        return true
      })
    }
    
    return datastreams
  })

  const currentWeather = computed(() => {
    const datastreams = filteredDatastreams.value
    if (!datastreams || datastreams.length === 0) return null
    
    const weather: any = {}
    
    datastreams.forEach((ds: any) => {
      if (ds.observations && ds.observations.length > 0) {
        const obs = ds.observations[0]
        const name = ds.name?.toLowerCase()
        const description = ds.description?.toLowerCase()
        
        // Enhanced pattern matching for German weather data
        if (name?.includes('temperature') || name?.includes('temp') || 
            description?.includes('temperatur') || name?.includes('lufttemperatur')) {
          weather.temperature = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || '°C',
            timestamp: obs.phenomenonTime
          }
        } else if (name?.includes('humidity') || name?.includes('feuchte') || 
                   description?.includes('luftfeuchte')) {
          weather.humidity = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || '%',
            timestamp: obs.phenomenonTime
          }
        } else if (name?.includes('pressure') || name?.includes('luftdruck') || 
                   description?.includes('pressure')) {
          weather.pressure = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || 'hPa',
            timestamp: obs.phenomenonTime
          }
        } else if ((name?.includes('wind') && name?.includes('speed')) || 
                   name?.includes('windgeschwindigkeit')) {
          weather.windSpeed = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || 'm/s',
            timestamp: obs.phenomenonTime
          }
        } else if ((name?.includes('wind') && name?.includes('direction')) || 
                   name?.includes('windrichtung')) {
          weather.windDirection = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || '°',
            timestamp: obs.phenomenonTime
          }
        } else if (name?.includes('precipitation') || name?.includes('niederschlag') ||
                   name?.includes('rain') || name?.includes('regen')) {
          weather.precipitation = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || 'mm',
            timestamp: obs.phenomenonTime
          }
        } else if (name?.includes('visibility') || name?.includes('sicht')) {
          weather.visibility = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || 'm',
            timestamp: obs.phenomenonTime
          }
        } else if (name?.includes('cloud') || name?.includes('wolken') || 
                   name?.includes('bedeckung')) {
          weather.cloudCover = { 
            value: obs.result, 
            unit: ds.unitOfMeasurement?.symbol || '%',
            timestamp: obs.phenomenonTime
          }
        }
      }
    })
    
    return weather
  })

  const locationInfo = computed(() => {
    if (!weatherData.value?.things || weatherData.value.things.length === 0) return null
    
    const thing = weatherData.value.things[0]
    const location = thing.Locations?.[0]
    
    return {
      name: thing.name || 'Unknown Location',
      description: thing.description,
      coordinates: location?.location ? {
        latitude: location.location.coordinates?.[1],
        longitude: location.location.coordinates?.[0]
      } : undefined
    }
  })

  const findThingByLocation = async (locationName: string) => {
    // This would typically make an API call to search for Things by location
    // For now, we'll simulate this functionality
    console.log(`Searching for weather station near: ${locationName}`)
    
    // In a real implementation, this would:
    // 1. Geocode the location name to coordinates
    // 2. Search for nearby Things using spatial queries
    // 3. Return the closest weather station Thing ID
    
    return null
  }

  const formatTimeRange = () => {
    if (!settings.useTimeRange) return ''
    
    const start = settings.startTime ? new Date(settings.startTime).toLocaleString() : ''
    const end = settings.endTime ? new Date(settings.endTime).toLocaleString() : ''
    
    if (start && end) {
      return `${start} - ${end}`
    } else if (start) {
      return `From: ${start}`
    } else if (end) {
      return `Until: ${end}`
    }
    
    return ''
  }

  return {
    weatherData,
    loading,
    error,
    currentWeather,
    locationInfo,
    filteredDatastreams,
    findThingByLocation,
    formatTimeRange
  }
}