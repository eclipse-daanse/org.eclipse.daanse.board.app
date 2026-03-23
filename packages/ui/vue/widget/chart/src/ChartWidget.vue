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
import { useDatasourceRepository, useVariableRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { computed, onMounted, ref, toRefs, watch } from 'vue';
import { ChartSettings } from './gen/ChartSettings';

const { wrapParameters } = useVariableRepository()

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
  chartKey.value++
}, { deep: true })

const resolvedConfig = wrapParameters({
  chartType: computed(() => (config.value?.chartType as any)?.value ?? 'bar'),
  borderColor: computed(() => (config.value?.borderColor as any)?.value ?? 'rgba(75, 192, 192, 1)'),
  backgroundColor: computed(() => (config.value?.backgroundColor as any)?.value ?? 'rgba(75, 192, 192, 0.2)'),
  borderWidth: computed(() => (config.value?.borderWidth as any)?.value ?? 2),
  borderDash: computed(() => (config.value?.borderDash as any)?.value ?? []),
  fill: computed(() => config.value?.fill ?? false),
  showPoints: computed(() => config.value?.showPoints ?? true),
  pointColor: computed(() => (config.value?.pointColor as any)?.value ?? 'rgba(75, 192, 192, 1)'),
  pointSize: computed(() => (config.value?.pointSize as any)?.value ?? 3),
  barOrientation: computed(() => (config.value as any)?.barOrientation?.value ?? 'vertical'),
  stacked: computed(() => (config.value as any)?.stacked?.value ?? false),
  showHorizontalGrid: computed(() => config.value?.showHorizontalGrid ?? true),
  horizontalGridColor: computed(() => (config.value?.horizontalGridColor as any)?.value ?? 'rgba(0, 0, 0, 0.1)'),
  horizontalGridWidth: computed(() => (config.value?.horizontalGridWidth as any)?.value ?? 1),
  showVerticalGrid: computed(() => config.value?.showVerticalGrid ?? true),
  verticalGridColor: computed(() => (config.value?.verticalGridColor as any)?.value ?? 'rgba(0, 0, 0, 0.1)'),
  verticalGridWidth: computed(() => (config.value?.verticalGridWidth as any)?.value ?? 1),
  dateDisplayFormat: computed(() => (config.value?.dateDisplayFormat as any)?.value ?? 'dd.MM.yyyy HH:mm'),
  annotationsEditMode: computed(() => config.value?.annotationsEditMode ?? false)
})

console.log(resolvedConfig.backgroundColor.value);

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
        (s: any) => (s.seriesIndex as any)?.value === index
      )

      // Determine chart type (series-specific or global fallback)
      const chartType = (seriesSettings?.chartType as any)?.value ?? resolvedConfig.chartType ?? 'bar'

      // Determine axis assignment (series-specific or default)
      const xAxisId = (seriesSettings?.xAxisId as any)?.value
      const yAxisId = (seriesSettings?.yAxisId as any)?.value

      // Determine colors (series-specific or global fallback)
      const borderColor = (seriesSettings?.borderColor as any)?.value ?? resolvedConfig.borderColor ?? dataset.borderColor
      const backgroundColor = (seriesSettings?.backgroundColor as any)?.value ?? resolvedConfig.backgroundColor ?? dataset.backgroundColor
      const borderWidth = (seriesSettings?.borderWidth as any)?.value ?? resolvedConfig.borderWidth ?? dataset.borderWidth
      const borderDash = (seriesSettings?.borderDash as any)?.value ?? resolvedConfig.borderDash ?? dataset.borderDash

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
        if ((seriesSettings?.label as any)?.value) {
          result.label = (seriesSettings?.label as any).value
        }
      }

      if (chartType === 'line') {
        // Determine line-specific settings (series-specific or global fallback)
        const showPoints = seriesSettings?.showPoints?.value ?? resolvedConfig.showPoints ?? true
        const fillEnabled = seriesSettings?.fill?.value ?? resolvedConfig.fill ?? false
        const pointColor = (seriesSettings?.pointColor as any)?.value ?? resolvedConfig.pointColor ?? dataset.pointBackgroundColor
        const pointSize = (seriesSettings?.pointSize as any)?.value ?? resolvedConfig.pointSize ?? 3

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

  const editMode = resolvedConfig.annotationsEditMode

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

  // Helper function to check if a value looks like a date string
  const isDateString = (value: any): boolean => {
    if (typeof value !== 'string') return false
    // Check for ISO date format or common date patterns
    const isoPattern = /^\d{4}-\d{2}-\d{2}(T|\s)/
    const datePattern = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/
    return isoPattern.test(value) || datePattern.test(value)
  }

  // Helper function to format dates based on the configured format
  const formatDate = (value: any, format: string) => {
    if (!value) return value

    // Only try to parse as date if it looks like a date string
    if (!isDateString(value)) return value

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

  const dateFormat = resolvedConfig.dateDisplayFormat

  // Collect all unique axis IDs from series settings
  const xAxisIds = new Set<string>()
  const yAxisIds = new Set<string>()
  const hasSeriesSettings = config.value?.seriesSettings && config.value.seriesSettings.length > 0

  if (hasSeriesSettings) {
    // If we have series settings, collect all axis IDs
    xAxisIds.add('x') // Default x-axis
    yAxisIds.add('y') // Default y-axis
    config.value.seriesSettings?.forEach((s: any) => {
      if ((s?.xAxisId as any)?.value) {
        xAxisIds.add((s.xAxisId as any).value)
      }
      if ((s?.yAxisId as any)?.value) {
        yAxisIds.add((s.yAxisId as any).value)
      }
    })
  }

  // Determine if stacked mode is enabled
  const isStacked = resolvedConfig.stacked

  // Build scales configuration dynamically
  const scales: any = {
    y: {
      stacked: isStacked,
      grid: {
        display: resolvedConfig.showHorizontalGrid,
        color: resolvedConfig.horizontalGridColor,
        lineWidth: resolvedConfig.horizontalGridWidth,
      }
    },
    x: {
      stacked: isStacked,
      grid: {
        display: resolvedConfig.showVerticalGrid,
        color: resolvedConfig.verticalGridColor,
        lineWidth: resolvedConfig.verticalGridWidth,
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
            display: resolvedConfig.showVerticalGrid,
            color: resolvedConfig.verticalGridColor,
            lineWidth: resolvedConfig.verticalGridWidth,
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
            display: resolvedConfig.showHorizontalGrid,
            color: resolvedConfig.horizontalGridColor,
            lineWidth: resolvedConfig.horizontalGridWidth,
          },
          // Position secondary Y-axes on the right
          position: 'right'
        }
      }
    })
  }

  // Determine bar orientation (horizontal uses indexAxis: 'y')
  const barOrientation = resolvedConfig.barOrientation
  const indexAxis = barOrientation === 'horizontal' ? 'y' : 'x'

  const options: any = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis,
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
