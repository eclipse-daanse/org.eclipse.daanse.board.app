<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as THREE from 'three'
import VANTA from 'vanta'

interface WeatherData {
  temperature?: { value: number; unit: string }
  humidity?: { value: number; unit: string }
  precipitation?: { value: number; unit: string }
  cloudCover?: { value: number; unit: string }
  windSpeed?: { value: number; unit: string }
  weatherCode?: { value: number }
  wmoCode?: { value: number }
}

const props = defineProps<{
  weatherData: WeatherData | null
  intensity: 'low' | 'medium' | 'high'
}>()

const vantaRef = ref<HTMLElement>()
let vantaEffect: any = null

// Determine weather type from data
const getWeatherType = (weather: WeatherData | null): string => {
  if (!weather) return 'clear'

  const wmoCode = weather.weatherCode?.value || weather.wmoCode?.value
  const precipitation = weather.precipitation?.value || 0
  const cloudCover = weather.cloudCover?.value || 0
  const temperature = weather.temperature?.value

  // Use WMO codes if available
  if (wmoCode !== undefined) {
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(wmoCode)) return 'rain'
    if ([71, 73, 75, 77, 85, 86].includes(wmoCode)) return 'snow'
    if ([95, 96, 99].includes(wmoCode)) return 'storm'
    if ([45, 48].includes(wmoCode)) return 'fog'
    if ([2, 3].includes(wmoCode)) return 'cloudy'
    return 'clear'
  }

  // Fallback to basic weather parameters
  if (precipitation > 0) {
    if (temperature && temperature < 2) return 'snow'
    return 'rain'
  }

  if (cloudCover > 70) return 'cloudy'
  if (cloudCover > 30) return 'partly-cloudy'

  return 'clear'
}

// Get intensity settings based on user preference
const getIntensitySettings = (intensity: 'low' | 'medium' | 'high') => {
  const settings = {
    low: { scale: 0.5, speed: 0.5, count: 50 },
    medium: { scale: 1.0, speed: 1.0, count: 100 },
    high: { scale: 1.5, speed: 1.5, count: 150 }
  }
  return settings[intensity]
}

// Initialize Vanta effect based on weather type
const initVantaEffect = async () => {
  if (!vantaRef.value) return

  // Destroy existing effect
  if (vantaEffect) {
    vantaEffect.destroy()
    vantaEffect = null
  }

  const weatherType = getWeatherType(props.weatherData)
  const intensitySettings = getIntensitySettings(props.intensity)

  try {
    // Use VANTA effects based on weather type
    switch (weatherType) {
      case 'rain':
        if ((VANTA as any).RAIN) {
          vantaEffect = (VANTA as any).RAIN({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: intensitySettings.scale,
            scaleMobile: intensitySettings.scale * 0.7,
            color: '#87ceeb',
            backgroundColor: 'transparent'
          })
        }
        break

      case 'snow':
        if ((VANTA as any).SNOW) {
          vantaEffect = (VANTA as any).SNOW({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: intensitySettings.scale,
            scaleMobile: intensitySettings.scale * 0.7,
            color: '#ffffff',
            backgroundColor: 'transparent'
          })
        }
        break

      case 'storm':
        if ((VANTA as any).HALO) {
          vantaEffect = (VANTA as any).HALO({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 'transparent',
            size: intensitySettings.scale * 1.5
          })
        }
        break

      case 'fog':
        if ((VANTA as any).FOG) {
          vantaEffect = (VANTA as any).FOG({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: '#e6e6fa',
            midtoneColor: '#d3d3d3',
            lowlightColor: '#a9a9a9',
            baseColor: '#f5f5f5',
            blurFactor: 0.6,
            speed: intensitySettings.speed * 0.3,
            zoom: 0.8,
            backgroundColor: 'transparent'
          })
        }
        break

      case 'cloudy':
        if ((VANTA as any).CLOUDS) {
          vantaEffect = (VANTA as any).CLOUDS({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: '#87ceeb',
            cloudColor: '#ffffff',
            cloudShadowColor: '#a0a0a0',
            sunColor: '#ffcc00',
            sunGlareColor: '#ffaa00',
            sunlightColor: '#ffffff',
            speed: intensitySettings.speed * 0.5,
            backgroundColor: 'transparent'
          })
        }
        break

      case 'partly-cloudy':
        if ((VANTA as any).CLOUDS) {
          vantaEffect = (VANTA as any).CLOUDS({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: '#87ceeb',
            cloudColor: '#ffffff',
            cloudShadowColor: '#d3d3d3',
            sunColor: '#ffdd44',
            sunGlareColor: '#ffcc00',
            sunlightColor: '#ffffff',
            speed: intensitySettings.speed * 0.3,
            backgroundColor: 'transparent'
          })
        }
        break

      default: // clear
        if ((VANTA as any).WAVES) {
          vantaEffect = (VANTA as any).WAVES({
            el: vantaRef.value,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            color: '#87ceeb',
            shininess: 30,
            waveHeight: 10 * intensitySettings.scale,
            waveSpeed: intensitySettings.speed * 0.5,
            zoom: 0.8,
            backgroundColor: 'transparent'
          })
        }
        break
    }
  } catch (error) {
    console.warn('Could not load Vanta effect:', error)
  }
}

// Watch for changes in weather data or intensity
watch(() => [props.weatherData, props.intensity], () => {
  nextTick(() => {
    initVantaEffect()
  })
}, { deep: true })

onMounted(() => {
  nextTick(() => {
    initVantaEffect()
  })
})

onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
    vantaEffect = null
  }
})
</script>

<template>
  <div 
    ref="vantaRef" 
    class="vanta-background"
  />
</template>

<style scoped>
.vanta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}
</style>