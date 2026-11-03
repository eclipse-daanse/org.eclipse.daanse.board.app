/*
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
*/

import { ref, computed, toValue, type MaybeRefOrGetter } from 'vue'
import type { WeatherWidgetSettings } from '../types/WeatherWidgetSettings'
import { useFormat, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

/**
 * The weather an answer holds, filtered by the settings' station and
 * time range. The one path from the answer to the screen: the widget
 * hands the datasource answer into `weatherData` and draws from what is
 * computed here (#1211). Two shapes arrive - a weather composer answers
 * one station object per thing, forecasts included, and an OGC STA
 * source answers datastreams and things.
 *
 * The settings arrive as a ref or a getter, not as the instance: read once
 * at setup, the range was fixed for the life of the widget, and a start
 * time changed in the open dialog never reached the filter (#1206). The
 * widget hands over the ref useEObject gives it, which is re-triggered by
 * the adapter on the settings instance, so the computeds here re-run.
 */
export function useWeatherData(source: MaybeRefOrGetter<WeatherWidgetSettings | undefined>, datasourceId: string) {
  const { t } = useTranslation('weather')
  const format = useFormat()
  const weatherData = ref<any>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const filteredDatastreams = computed(() => {
    if (!weatherData.value?.datastreams) return []

    let datastreams = weatherData.value.datastreams
    const settings = toValue(source)

    // Only the datastreams of the station asked for, where one is named
    if (settings?.thingId) {
      datastreams = datastreams.filter((ds: any) => ds.thing && ds.thing['@iot.id'] == settings.thingId)
    }

    // Filter by time range if specified
    if (settings?.useTimeRange && (settings.startTime || settings.endTime)) {
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

  /** The station asked for out of a composer answer, or the first one. */
  const station = computed(() => {
    const answer = weatherData.value
    if (!Array.isArray(answer) || answer.length === 0) return null
    const wanted = toValue(source)?.thingId
    if (wanted) {
      const named = answer.find((each: any) => each.thingId == wanted || String(each.thingId) == String(wanted))
      if (named) return named
    }
    return answer[0]
  })

  const currentWeather = computed(() => {
    // A composer answer is the weather already, forecasts included
    if (station.value) return station.value

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

    const wanted = toValue(source)?.thingId
    const thing =
      (wanted && weatherData.value.things.find((each: any) => each['@iot.id'] == wanted)) || weatherData.value.things[0]
    const location = thing.Locations?.[0]

    return {
      name: thing.name || t('Widget.unknownLocation'),
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
    const settings = toValue(source)
    if (!settings?.useTimeRange) return ''

    const moment = { dateStyle: 'short', timeStyle: 'short' } as const
    const start = settings.startTime ? format.date(settings.startTime, moment) : ''
    const end = settings.endTime ? format.date(settings.endTime, moment) : ''

    if (start && end) {
      return `${start} - ${end}`
    } else if (start) {
      return t('Widget.from', { time: start })
    } else if (end) {
      return t('Widget.until', { time: end })
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
