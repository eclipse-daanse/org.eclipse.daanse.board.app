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
import { computed, toRefs, ref, onMounted, watch, nextTick } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface ForecastDataPoint {
  period: string
  value: number
  unit: string
}

const props = defineProps<{
  data: ForecastDataPoint[]
  parameter: string
  color: string
  fontColor?: string
  gridColor?: string
}>()

const { data, parameter, color, fontColor, gridColor } = toRefs(props)

const chartContainer = ref<HTMLElement>()
const resolvedFontColor = ref('#495057')
const chartKey = ref(0) // Force chart re-render

// Resolve CSS variable to actual color value
const updateFontColor = () => {
  if (chartContainer.value) {
    const computedStyle = getComputedStyle(chartContainer.value)
    const titleColor = computedStyle.getPropertyValue('--title-color').trim()
    if (titleColor && titleColor !== resolvedFontColor.value) {
      resolvedFontColor.value = titleColor
      // Force chart re-render when color changes
      nextTick(() => {
        chartKey.value++
      })
    }
  }
}

onMounted(() => {
  updateFontColor()

  // Find the wrapper-container element that has the CSS variable
  let targetElement: HTMLElement | undefined | null = chartContainer.value
  while (targetElement && !targetElement.classList?.contains('wrapper-container')) {
    targetElement = targetElement.parentElement
  }

  if (targetElement) {
    // Watch for style changes on the wrapper-container
    const observer = new MutationObserver(() => {
      updateFontColor()
    })
    observer.observe(targetElement, {
      attributes: true,
      attributeFilter: ['style']
    })
  }
})

const chartFontColor = computed(() => resolvedFontColor.value)

// Compute chart data
const chartData = computed(() => {
  if (!data.value || data.value.length === 0) {
    return {
      labels: [],
      datasets: []
    }
  }

  return {
    labels: data.value.map(point => point.period),
    datasets: [
      {
        label: `${parameter.value.charAt(0).toUpperCase() + parameter.value.slice(1)}`,
        data: data.value.map(point => point.value),
        borderColor: color.value,
        backgroundColor: createGradient,
        borderWidth: 3,
        pointBackgroundColor: color.value,
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
        tension: 0.4
      }
    ]
  }
})

// Create gradient function
function createGradient(ctx: any) {
  const canvas = ctx.chart.canvas
  const chartArea = ctx.chart.chartArea

  if (!chartArea) {
    return color.value
  }

  const gradient = canvas.getContext('2d').createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
  gradient.addColorStop(0, color.value + '80') // 50% opacity at top
  gradient.addColorStop(1, color.value + '10') // 6% opacity at bottom

  return gradient
}

// Chart options
const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: gridColor?.value || '#e0e0e0',
        lineWidth: 1
      },
      ticks: {
        color: chartFontColor.value,
        font: {
          size: 12
        }
      }
    },
    y: {
      display: true,
      grid: {
        color: gridColor?.value || '#e0e0e0',
        lineWidth: 1
      },
      ticks: {
        color: chartFontColor.value,
        font: {
          size: 12
        },
        maxTicksLimit: 5,
        callback: function(value: any) {
          const unit = data.value[0]?.unit || ''
          return `${Math.round(value * 10) / 10}${unit}`
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: color.value,
      borderWidth: 1,
      cornerRadius: 6,
      displayColors: false,
      callbacks: {
        label: function(context: any) {
          const point = data.value[context.dataIndex]
          return `${Math.round(point.value * 10) / 10}${point.unit}`
        }
      }
    }
  },
  elements: {
    line: {
      borderCapStyle: 'round' as const,
      borderJoinStyle: 'round' as const
    }
  },
  animation: {
    duration: 1000,
    easing: 'easeOutQuart' as const
  }
}))
</script>

<template>
  <div class="forecast-chart" ref="chartContainer">
    <h4>{{ parameter.charAt(0).toUpperCase() + parameter.slice(1) }} Forecast</h4>
    <div class="chart-container">
      <Line
        v-if="data && data.length > 0"
        :key="chartKey"
        :data="chartData"
        :options="chartOptions"
      />
      <div v-else class="no-data">
        <p>No forecast data available</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forecast-chart {
  padding: 16px;
}

.forecast-chart h4 {
  margin: 0 0 16px 0;
  color: v-bind(chartFontColor);
  font-size: 1.1em;
  text-align: center;
}

.chart-container {
  position: relative;
  height: 200px;
  /*background: #f8f9fa;
  border-radius: 8px;*/
  padding: 0px;
}

.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: v-bind(chartFontColor);
  font-style: italic;
}

.no-data p {
  margin: 0;
}

@media (max-width: 480px) {
  .chart-container {
    height: 150px;
    padding: 5px;
  }

  .forecast-chart h4 {
    font-size: 1em;
  }
}
</style>
