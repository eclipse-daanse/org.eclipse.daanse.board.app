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
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ChartSettings } from './gen/ChartSettings';
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { ChartWidgetInterface } from './api/ChartWidgetInterface';

const { wrapParameters } = useVariableRepository()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, ArcElement, Filler, annotationPlugin)

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);
const config = defineModel<ChartSettings>('configv', { required: true });
const defaultConfig = new ChartSettings();
const data = ref(null as any);

const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER);
const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

const yAxisZoom = ref<{ min: number | null; max: number | null }>({ min: null, max: null });
const chartRef = ref<any>(null);

class ChartWidgetApi extends ChartWidgetInterface {
    refresh(): void {
        update(datasourceId.value, datasourceId.value);
    }
    zoomIn(): void {
        const min = yAxisZoom.value.min ?? 0;
        const max = yAxisZoom.value.max ?? 100;
        const range = max - min;
        const mid = (max + min) / 2;
        yAxisZoom.value = { min: mid - range * 0.4, max: mid + range * 0.4 };
        chartKey.value++;
    }
    zoomOut(): void {
        const min = yAxisZoom.value.min ?? 0;
        const max = yAxisZoom.value.max ?? 100;
        const range = max - min;
        const mid = (max + min) / 2;
        yAxisZoom.value = { min: mid - range * 0.75, max: mid + range * 0.75 };
        chartKey.value++;
    }
    resetZoom(): void {
        yAxisZoom.value = { min: null, max: null };
        chartKey.value++;
    }
    exportAsImage(format?: string): void {
        if (chartRef.value && chartRef.value.chart) {
            const chartInstance = chartRef.value.chart;
            const type = format || 'image/png';
            const base64 = chartInstance.toBase64Image(type);
            const a = document.createElement('a');
            a.href = base64;
            a.download = `chart.${type.split('/')[1] || 'png'}`;
            a.click();
        }
    }
}
const api = new ChartWidgetApi();
defineExpose<ChartWidgetInterface>(api);

onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:ChartWidget:click', {
        type: 'widget:ChartWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:ChartWidget:right_click', {
        type: 'widget:ChartWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'ChartWidget', pageId);
  if (config.value) {
    // Merge defaults for any missing properties
    for (const key of Object.keys(defaultConfig)) {
      if (!(key in config.value) || config.value[key as keyof ChartSettings] === undefined) {
        (config.value as any)[key] = (defaultConfig as any)[key]
      }
    }
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

      // Determine colors: series-specific > dataset (from composer) > global config
      const borderColor = seriesSettings?.borderColor?.value ?? dataset.borderColor ?? config.value?.borderColor?.value
      const backgroundColor = seriesSettings?.backgroundColor?.value ?? dataset.backgroundColor ?? config.value?.backgroundColor?.value
      const borderWidth = seriesSettings?.borderWidth?.value ?? dataset.borderWidth ?? config.value?.borderWidth?.value
      const borderDash = seriesSettings?.borderDash?.value ?? dataset.borderDash ?? config.value?.borderDash?.value

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
        const showPoints = seriesSettings?.showPoints?.value ?? config.value?.showPoints?.value ?? true
        const fillEnabled = seriesSettings?.fill?.value ?? config.value?.fill?.value ?? false
        const pointColor = seriesSettings?.pointColor?.value ?? dataset.pointBackgroundColor ?? config.value?.pointColor?.value
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

      // Apply optional per-series value conversion formula (e.g. °F → °C).
      // The expression sees the raw data point as `value`; compiled once per
      // dataset, invalid formulas leave the data untouched.
      const valueFormula = (seriesSettings?.valueFormula as any)?.value
      if (typeof valueFormula === 'string' && valueFormula.trim() && Array.isArray(result.data)) {
        try {
          const convert = new Function('value', `return (${valueFormula})`) as (v: number) => number
          result.data = result.data.map((point: any) => {
            if (point == null) return point
            if (typeof point === 'number') {
              const converted = convert(point)
              return Number.isFinite(converted) ? converted : point
            }
            if (typeof point === 'object' && point.y != null) {
              const converted = convert(Number(point.y))
              return Number.isFinite(converted) ? { ...point, y: converted } : point
            }
            return point
          })
        } catch (e) {
          console.warn('Invalid series value formula:', valueFormula, e)
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

  const editMode = resolvedConfig.annotationsEditMode.value

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

  const dateFormat = resolvedConfig.dateDisplayFormat.value

  // Collect all unique axis IDs from series settings
  const xAxisIds = new Set<string>()
  const yAxisIds = new Set<string>()
  const hasSeriesSettings = config.value?.seriesSettings && config.value.seriesSettings.length > 0

  // Map axis ID -> title from series settings
  const yAxisTitles: Record<string, string> = {}

  if (hasSeriesSettings) {
    // If we have series settings, collect all axis IDs
    xAxisIds.add('x') // Default x-axis
    yAxisIds.add('y') // Default y-axis
    config.value.seriesSettings?.forEach((s: any) => {
      if ((s?.xAxisId as any)?.value) {
        xAxisIds.add((s.xAxisId as any).value)
      }
      if (s.yAxisId?.value) {
        yAxisIds.add(s.yAxisId.value)
        if (s.yAxisTitle?.value) {
          yAxisTitles[s.yAxisId.value] = s.yAxisTitle.value
        }
      }
    })
  }

  // Determine if stacked mode is enabled (ensure boolean, not truthy string)
  const isStacked = resolvedConfig.stacked.value === true || resolvedConfig.stacked.value === 'true'

  // Axis title settings
  const xAxisTitle = config.value.xAxisTitle?.value ?? ''
  const yAxisTitle = config.value.yAxisTitle?.value ?? ''

  // Build scales configuration dynamically
  const scales: any = {
    y: {
      stacked: isStacked,
      title: {
        display: !!yAxisTitle,
        text: yAxisTitle,
      },
      grid: {
        display: resolvedConfig.showHorizontalGrid.value,
        color: resolvedConfig.horizontalGridColor.value,
        lineWidth: resolvedConfig.horizontalGridWidth.value,
      }
    },
    x: {
      stacked: isStacked,
      title: {
        display: !!xAxisTitle,
        text: xAxisTitle,
      },
      grid: {
        display: resolvedConfig.showVerticalGrid.value,
        color: resolvedConfig.verticalGridColor.value,
        lineWidth: resolvedConfig.verticalGridWidth.value,
      },
      ticks: {
        callback: function(value: any, index: number, ticks: any[]): string {
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
            display: resolvedConfig.showVerticalGrid.value,
            color: resolvedConfig.verticalGridColor.value,
            lineWidth: resolvedConfig.verticalGridWidth.value,
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
        const axisTitle = yAxisTitles[axisId] ?? ''
        scales[axisId] = {
          type: 'linear', // Explicitly set the axis type
          title: {
            display: !!axisTitle,
            text: axisTitle,
          },
          grid: {
            display: resolvedConfig.showHorizontalGrid.value,
            color: resolvedConfig.horizontalGridColor.value,
            lineWidth: resolvedConfig.horizontalGridWidth.value,
          },
          // Position secondary Y-axes on the right
          position: 'right'
        }
      }
    })
  }

  // Determine bar orientation (horizontal uses indexAxis: 'y')
  const barOrientation = resolvedConfig.barOrientation.value
  const indexAxis = barOrientation === 'horizontal' ? 'y' : 'x'

  const options: any = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis,
    scales,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
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
  <div class="w-full h-full" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <component
      :is="chartComponent"
      :key="chartKey"
      id="my-chart-id"
      ref="chartRef"
      v-if="chartData && chartOptions"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>
