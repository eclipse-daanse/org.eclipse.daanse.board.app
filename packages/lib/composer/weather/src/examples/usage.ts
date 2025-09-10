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

import { WeatherComposer, IWeatherComposerConfiguration } from '../classes/index'

// Example configuration for Weather Composer
const weatherComposerConfig: IWeatherComposerConfiguration = {
  name: 'Jena Weather Data',
  type: 'weather',
  uid: 'weather-composer-1',
  connectedDatasources: ['ogcsta-datasource-id'],
  thingId: 10567, // Optional: filter for specific Thing
  customMapping: {
    // Optional: custom keyword mappings
    temperature: ['temperature', 'temp', 'temperatur', 'lufttemperatur', 'custom_temp_keyword'],
    pressure: ['pressure', 'luftdruck', 'custom_pressure_keyword']
  }
}

// Usage in a widget or application
//@ts-ignore
async function useWeatherComposer() {
  const weatherComposer = new WeatherComposer()
  weatherComposer.init(weatherComposerConfig)

  // Get weather data for all Things
  const allWeatherData = await weatherComposer.getAllWeatherData()
  console.log('All weather data:', allWeatherData)

  // Get weather data for specific Thing
  const specificWeatherData = await weatherComposer.getWeatherForThing(10567)
  console.log('Weather for Thing 10567:', specificWeatherData)

  // Get processed weather data (default behavior)
  const weatherData = await weatherComposer.getData('WeatherData')
  console.log('Processed weather data:', weatherData)
}

// Expected output structure:
/*
WeatherData[] = [
  {
    thingId: 10567,
    location: {
      name: "DWD Weather Report for Jena",
      description: "Weather station in Jena",
      coordinates: {
        latitude: 50.9375,
        longitude: 11.5854
      }
    },
    temperature: {
      value: 15.2,
      unit: "°C",
      timestamp: "2025-01-15T12:00:00Z"
    },
    humidity: {
      value: 65,
      unit: "%",
      timestamp: "2025-01-15T12:00:00Z"
    },
    pressure: {
      value: 1013.25,
      unit: "hPa",
      timestamp: "2025-01-15T12:00:00Z"
    },
    windSpeed: {
      value: 5.2,
      unit: "m/s",
      timestamp: "2025-01-15T12:00:00Z"
    },
    windDirection: {
      value: 225,
      unit: "°",
      timestamp: "2025-01-15T12:00:00Z"
    }
  }
]
*/
