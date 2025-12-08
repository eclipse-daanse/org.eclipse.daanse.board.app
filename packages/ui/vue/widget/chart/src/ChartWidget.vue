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
import { Bar, Line, Radar, Pie, Doughnut, PolarArea } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip,
  Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement,
  RadialLinearScale, ArcElement, Filler
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { computed, onMounted, ref, toRefs, watch } from 'vue';
import { ChartSettings } from './gen/ChartSettings';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, ArcElement, Filler, annotationPlugin)

const props = defineProps<{ datasourceId: string }>();
const { datasourceId } = toRefs(props);
const config = defineModel<ChartSettings>('configv', { required: true });
const defaultConfig = new ChartSettings();
const data = ref(null as any);

onMounted(() => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })
  }
})

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

const { update } = useDatasourceRepository(datasourceId, "ChartData", data);

const chartComponent = computed(() => {
  // Check if we have mixed chart types (different types per series)
  const hasMixedTypes = config.value?.seriesSettings?.some(
    (s: any) => s.chartType?.value && s.chartType.value !== config.value?.chartType?.value
  )

  // For mixed charts, always use Bar as the base component
  if (hasMixedTypes) {
    return Bar
  }

  // Otherwise use the configured chart type
  const type = config.value?.chartType?.value ?? 'bar'
  const components: Record<string, any> = {
    'bar': Bar,
    'line': Line,
    'radar': Radar,
    'pie': Pie,
    'doughnut': Doughnut,
    'polarArea': PolarArea
  }
  return components[type] || Bar
})

// Force re-render when config changes
const chartKey = ref(0)
watch(() => config.value, (newVal) => {
  console.log('Chart config changed:', {
    chartType: newVal?.chartType?.value,
    borderColor: newVal?.borderColor?.value,
    backgroundColor: newVal?.backgroundColor?.value
  })
  chartKey.value++
}, { deep: true })

// Apply settings to data (override dataset colors and apply per-series settings)
const chartData = computed(() => {
  if (!data.value) return null

  const dataCopy = JSON.parse(JSON.stringify(data.value))

  // Check if we have any series-specific settings
  const hasSeriesSettings = config.value?.seriesSettings && config.value.seriesSettings.length > 0

  if (dataCopy.datasets && Array.isArray(dataCopy.datasets)) {
    dataCopy.datasets = dataCopy.datasets.map((dataset: any, index: number) => {
      // Check if there's a series-specific setting for this dataset
      const seriesSettings = config.value?.seriesSettings?.find(
        (s: any) => s.seriesIndex?.value === index
      )

      // Determine chart type (series-specific or global fallback)
      const chartType = seriesSettings?.chartType?.value ?? config.value?.chartType?.value ?? 'bar'

      // Determine axis assignment (series-specific or default)
      const xAxisId = seriesSettings?.xAxisId?.value
      const yAxisId = seriesSettings?.yAxisId?.value

      // Determine colors (series-specific or global fallback)
      const borderColor = seriesSettings?.borderColor?.value ?? config.value?.borderColor?.value ?? dataset.borderColor
      const backgroundColor = seriesSettings?.backgroundColor?.value ?? config.value?.backgroundColor?.value ?? dataset.backgroundColor
      const borderWidth = seriesSettings?.borderWidth?.value ?? config.value?.borderWidth?.value ?? dataset.borderWidth
      const borderDash = seriesSettings?.borderDash?.value ?? config.value?.borderDash?.value ?? dataset.borderDash

      // Apply settings based on chart type
      let result: any = {
        ...dataset,
        borderColor,
        backgroundColor,
        borderWidth,
      }

      // Only set type and axis IDs if we have series-specific settings
      if (hasSeriesSettings) {
        result.type = chartType
        if (xAxisId) {
          result.xAxisID = xAxisId
        }
        if (yAxisId) {
          result.yAxisID = yAxisId
        }
        // Override label if series-specific label is set
        if (seriesSettings?.label?.value) {
          result.label = seriesSettings.label.value
        }
      }

      if (chartType === 'line') {
        // Determine line-specific settings (series-specific or global fallback)
        const showPoints = seriesSettings?.showPoints?.value ?? config.value?.showPoints?.value ?? true
        const fillEnabled = seriesSettings?.fill?.value ?? config.value?.fill?.value ?? false
        const pointColor = seriesSettings?.pointColor?.value ?? config.value?.pointColor?.value ?? dataset.pointBackgroundColor
        const pointSize = seriesSettings?.pointSize?.value ?? config.value?.pointSize?.value ?? 3

        result = {
          ...result,
          borderDash,
          fill: fillEnabled ? 'origin' : false,
          // Point settings
          pointRadius: showPoints ? pointSize : 0,
          pointBackgroundColor: pointColor,
          pointBorderColor: pointColor,
          pointHoverRadius: showPoints ? (pointSize + 2) : 0,
        }
      } else if (chartType === 'bar') {
        result = {
          ...result,
          borderDash,
        }
      } else {
        // pie, doughnut, etc
        result = {
          ...result,
        }
      }

      return result
    })
  }

  return dataCopy
})

const chartOptions = computed(() => {
  if (!config.value) {
    return {
      responsive: true,
    }
  }

  const editMode = config.value.annotationsEditMode?.value ?? false

  // Build annotations
  const annotations: any = {}

  // Horizontal lines (Y-axis)
  config.value.horizontalLines?.forEach((line: any, index: number) => {
    annotations[`hline_${index}`] = {
      type: 'line',
      yMin: line.value,
      yMax: line.value,
      borderColor: line.color,
      borderWidth: line.width,
      label: line.label ? {
        display: true,
        content: line.label,
        position: 'end'
      } : undefined,
      // Draggable options
      draggable: editMode,
      borderDash: editMode ? [5, 5] : undefined,
      enter({ element }: any) {
        if (editMode) element.options.borderWidth = line.width + 1
      },
      leave({ element }: any) {
        if (editMode) element.options.borderWidth = line.width
      },
      drag({ element }: any) {
        if (editMode && config.value.horizontalLines) {
          config.value.horizontalLines[index].value = element.y
        }
      }
    }
  })

  // Vertical lines (X-axis)
  config.value.verticalLines?.forEach((line: any, index: number) => {
    annotations[`vline_${index}`] = {
      type: 'line',
      xMin: line.value,
      xMax: line.value,
      borderColor: line.color,
      borderWidth: line.width,
      label: line.label ? {
        display: true,
        content: line.label,
        position: 'end'
      } : undefined,
      // Draggable options
      draggable: editMode,
      borderDash: editMode ? [5, 5] : undefined,
      enter({ element }: any) {
        if (editMode) element.options.borderWidth = line.width + 1
      },
      leave({ element }: any) {
        if (editMode) element.options.borderWidth = line.width
      },
      drag({ element }: any) {
        if (editMode && config.value.verticalLines) {
          config.value.verticalLines[index].value = element.x
        }
      }
    }
  })

  // Horizontal boxes (Y-axis ranges)
  config.value.horizontalBoxes?.forEach((box: any, index: number) => {
    annotations[`hbox_${index}`] = {
      type: 'box',
      yMin: box.yMin,
      yMax: box.yMax,
      backgroundColor: box.color,
      borderWidth: editMode ? 2 : 0,
      borderColor: editMode ? 'rgba(0,0,0,0.5)' : undefined,
      borderDash: editMode ? [5, 5] : undefined,
      label: box.label ? {
        display: true,
        content: box.label,
        position: 'center'
      } : undefined,
      // Draggable options
      draggable: editMode,
      enter({ element }: any) {
        if (editMode) element.options.borderWidth = 3
      },
      leave({ element }: any) {
        if (editMode) element.options.borderWidth = 2
      },
      drag({ element }: any) {
        if (editMode && config.value.horizontalBoxes) {
          const height = box.yMax - box.yMin
          config.value.horizontalBoxes[index].yMin = element.y - height / 2
          config.value.horizontalBoxes[index].yMax = element.y + height / 2
        }
      }
    }
  })

  // Vertical boxes (X-axis ranges)
  config.value.verticalBoxes?.forEach((box: any, index: number) => {
    annotations[`vbox_${index}`] = {
      type: 'box',
      xMin: box.xMin,
      xMax: box.xMax,
      backgroundColor: box.color,
      borderWidth: editMode ? 2 : 0,
      borderColor: editMode ? 'rgba(0,0,0,0.5)' : undefined,
      borderDash: editMode ? [5, 5] : undefined,
      label: box.label ? {
        display: true,
        content: box.label,
        position: 'center'
      } : undefined,
      // Draggable options
      draggable: editMode,
      enter({ element }: any) {
        if (editMode) element.options.borderWidth = 3
      },
      leave({ element }: any) {
        if (editMode) element.options.borderWidth = 2
      },
      drag({ element }: any) {
        if (editMode && config.value.verticalBoxes) {
          const width = (box.xMax as number) - (box.xMin as number)
          config.value.verticalBoxes[index].xMin = element.x - width / 2
          config.value.verticalBoxes[index].xMax = element.x + width / 2
        }
      }
    }
  })

  // Helper function to format dates based on the configured format
  const formatDate = (value: any, format: string) => {
    if (!value) return value

    const date = new Date(value)
    if (isNaN(date.getTime())) return value

    // Simple date formatting without external libraries
    const pad = (n: number) => n.toString().padStart(2, '0')

    const replacements: Record<string, string> = {
      'yyyy': date.getFullYear().toString(),
      'yy': date.getFullYear().toString().slice(-2),
      'MM': pad(date.getMonth() + 1),
      'M': (date.getMonth() + 1).toString(),
      'dd': pad(date.getDate()),
      'd': date.getDate().toString(),
      'HH': pad(date.getHours()),
      'H': date.getHours().toString(),
      'mm': pad(date.getMinutes()),
      'm': date.getMinutes().toString(),
      'ss': pad(date.getSeconds()),
      's': date.getSeconds().toString(),
    }

    let result = format
    // Sort by length descending to replace longer patterns first
    Object.keys(replacements).sort((a, b) => b.length - a.length).forEach(key => {
      result = result.replace(new RegExp(key, 'g'), replacements[key])
    })

    return result
  }

  const dateFormat = config.value.dateDisplayFormat?.value ?? 'dd.MM.yyyy HH:mm'

  // Collect all unique axis IDs from series settings
  const xAxisIds = new Set<string>()
  const yAxisIds = new Set<string>()
  const hasSeriesSettings = config.value?.seriesSettings && config.value.seriesSettings.length > 0

  if (hasSeriesSettings) {
    // If we have series settings, collect all axis IDs
    xAxisIds.add('x') // Default x-axis
    yAxisIds.add('y') // Default y-axis
    config.value.seriesSettings?.forEach((s: any) => {
      if (s.xAxisId?.value) {
        xAxisIds.add(s.xAxisId.value)
      }
      if (s.yAxisId?.value) {
        yAxisIds.add(s.yAxisId.value)
      }
    })
  }

  // Build scales configuration dynamically
  const scales: any = {
    y: {
      grid: {
        display: config.value.showHorizontalGrid?.value ?? true,
        color: config.value.horizontalGridColor?.value ?? 'rgba(0, 0, 0, 0.1)',
        lineWidth: config.value.horizontalGridWidth?.value ?? 1,
      }
    },
    x: {
      grid: {
        display: config.value.showVerticalGrid?.value ?? true,
        color: config.value.verticalGridColor?.value ?? 'rgba(0, 0, 0, 0.1)',
        lineWidth: config.value.verticalGridWidth?.value ?? 1,
      },
      ticks: {
        callback: function(value: any, index: number, ticks: any[]): string {
          // Try to format as date if the value looks like a date
          const label: any = (this as any).getLabelForValue(value)
          return formatDate(label, dateFormat)
        }
      }
    }
  }

  // Create additional scales for each unique X-axis ID (if we have multiple axes)
  if (xAxisIds.size > 1) {
    xAxisIds.forEach((axisId) => {
      if (axisId !== 'x') { // Don't override the default x-axis
        scales[axisId] = {
          type: 'category', // Explicitly set the axis type
          grid: {
            display: config.value.showVerticalGrid?.value ?? true,
            color: config.value.verticalGridColor?.value ?? 'rgba(0, 0, 0, 0.1)',
            lineWidth: config.value.verticalGridWidth?.value ?? 1,
          },
          ticks: {
            callback: function(value: any, index: number, ticks: any[]): string {
              // Try to format as date if the value looks like a date
              const label: any = (this as any).getLabelForValue(value)
              return formatDate(label, dateFormat)
            }
          },
          // Position secondary axes at the top
          position: 'top'
        }
      }
    })
  }

  // Create additional scales for each unique Y-axis ID (if we have multiple axes)
  if (yAxisIds.size > 1) {
    yAxisIds.forEach((axisId) => {
      if (axisId !== 'y') { // Don't override the default y-axis
        scales[axisId] = {
          type: 'linear', // Explicitly set the axis type
          grid: {
            display: config.value.showHorizontalGrid?.value ?? true,
            color: config.value.horizontalGridColor?.value ?? 'rgba(0, 0, 0, 0.1)',
            lineWidth: config.value.horizontalGridWidth?.value ?? 1,
          },
          // Position secondary Y-axes on the right
          position: 'right'
        }
      }
    })
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales,
    plugins: {
      annotation: {
        annotations
      }
    }
  }

  console.log('Chart options:', options)
  return options
})
</script>
<template>
  <component
    :is="chartComponent"
    :key="chartKey"
    id="my-chart-id"
    v-if="chartData && chartOptions"
    :options="chartOptions"
    :data="chartData"
  />
</template>
