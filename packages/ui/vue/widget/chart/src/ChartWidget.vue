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
import { inject, computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ChartSettingsImpl } from './gen/ChartSettingsImpl';
// The interface, for the model this component is bound to; the Impl above
// only supplies the defaults
import type { ChartSettings } from './gen/ChartSettings';
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events';
import { ChartWidgetInterface } from './api/ChartWidgetInterface';

const { wrapParameters } = useVariableRepository()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, ArcElement, Filler, annotationPlugin)

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);
const config = defineModel<ChartSettings>('configv', { required: true });
const defaultConfig = new ChartSettingsImpl();
const data = ref(null as any);

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!;

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
  const hasMixedTypes = seriesList().some(
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

/**
 * The first value that was actually set.
 *
 * An empty field is not a setting - clearing a colour has to fall through
 * to what lies behind it rather than painting with an empty string, which
 * is what `??` alone would do.
 */
function firstSet(...candidates: any[]): any {
  return candidates.find((v) => v !== undefined && v !== null && v !== '')
}

/**
 * One entry of a reference line or box list.
 *
 * These four lists are untyped in the Ecore, so the generator gives them an
 * EList of unknown - which has get(i) and does not answer to [i] at all.
 * Reading them through here works either way, and is the one place to change
 * once the lists have a class of their own.
 */
function annotationAt(list: unknown, index: number): any {
  const any = list as any
  if (typeof any?.get === 'function') return any.get(index)
  return any?.[index]
}

/** The series settings as a plain array, whether they arrive as one or as an EList. */
function seriesList(): any[] {
  const list: any = config.value?.seriesSettings
  if (!list) return []
  if (typeof list.toArray === 'function') return list.toArray()
  return Array.isArray(list) ? list : []
}

/*
 * Every one of these reads the value inside the wrapper, never the wrapper
 * itself: a wrapper is an object and therefore always truthy, so a flag
 * read without .value is permanently on - and the chart drew nothing.
 */
const resolvedConfig = wrapParameters({
  chartType: computed(() => (config.value?.chartType as any)?.value ?? 'bar'),
  borderColor: computed(() => (config.value?.borderColor as any)?.value ?? 'rgba(75, 192, 192, 1)'),
  backgroundColor: computed(() => (config.value?.backgroundColor as any)?.value ?? 'rgba(75, 192, 192, 0.2)'),
  borderWidth: computed(() => (config.value?.borderWidth as any)?.value ?? 2),
  borderDash: computed(() => (config.value?.borderDash as any)?.value ?? []),
  fill: computed(() => (config.value?.fill as any)?.value ?? false),
  showPoints: computed(() => (config.value?.showPoints as any)?.value ?? true),
  pointColor: computed(() => (config.value?.pointColor as any)?.value ?? 'rgba(75, 192, 192, 1)'),
  pointSize: computed(() => (config.value?.pointSize as any)?.value ?? 3),
  barOrientation: computed(() => (config.value as any)?.barOrientation?.value ?? 'vertical'),
  stacked: computed(() => (config.value as any)?.stacked?.value ?? false),
  showHorizontalGrid: computed(() => (config.value?.showHorizontalGrid as any)?.value ?? true),
  horizontalGridColor: computed(() => (config.value?.horizontalGridColor as any)?.value ?? 'rgba(0, 0, 0, 0.1)'),
  horizontalGridWidth: computed(() => (config.value?.horizontalGridWidth as any)?.value ?? 1),
  showVerticalGrid: computed(() => (config.value?.showVerticalGrid as any)?.value ?? true),
  verticalGridColor: computed(() => (config.value?.verticalGridColor as any)?.value ?? 'rgba(0, 0, 0, 0.1)'),
  verticalGridWidth: computed(() => (config.value?.verticalGridWidth as any)?.value ?? 1),
  dateDisplayFormat: computed(() => (config.value?.dateDisplayFormat as any)?.value ?? 'dd.MM.yyyy HH:mm'),
  annotationsEditMode: computed(() => (config.value?.annotationsEditMode as any)?.value ?? false)
})

console.log(resolvedConfig.backgroundColor.value);

// Apply settings to data (override dataset colors and apply per-series settings)
const chartData = computed(() => {
  if (!data.value) return null

  const dataCopy = JSON.parse(JSON.stringify(data.value))

  /*
   * The series list is an EList since the model types it against
   * SeriesSettings - it has size() and toArray(), not length and find().
   * Read as an array once, so the merge below stays plain.
   */
  const series = seriesList()
  const hasSeriesSettings = series.length > 0

  if (dataCopy.datasets && Array.isArray(dataCopy.datasets)) {
    dataCopy.datasets = dataCopy.datasets.map((dataset: any, index: number) => {
      // Check if there's a series-specific setting for this dataset
      /*
       * Compared as numbers: a settings value may arrive as a string,
       * whether it was typed, stored that way, or came from a variable -
       * and "0" === 0 is false, which loses the series without a word.
       */
      const seriesSettings: any = series.find((s: any) => {
        const at = (s.seriesIndex as any)?.value
        return at !== undefined && at !== null && at !== '' && Number(at) === index
      })

      // Determine chart type (series-specific or global fallback)
      /*
       * resolvedConfig holds computed refs, so it has to be read through
       * .value - handing the ref itself to Chart.js sets the type to
       * "[object Object]", which it rejects as an unknown controller. Only
       * visible once a series exists, since type is set for series only.
       */
      const chartType =
        (seriesSettings?.chartType as any)?.value ?? resolvedConfig.chartType?.value ?? 'bar'

      // Determine axis assignment (series-specific or default)
      const xAxisId = (seriesSettings?.xAxisId as any)?.value
      const yAxisId = (seriesSettings?.yAxisId as any)?.value

      /*
       * What was set here wins, and the data source is what is left when
       * nothing was: series first, then the chart's own setting, then the
       * colour the datasource composer proposed.
       *
       * The composer always supplies a colour - a configured one or one it
       * generates - so with the dataset in front, a colour set in the form
       * never took effect. Setting something and seeing nothing happen is
       * worse than losing a proposal nobody asked for.
       */
      const borderColor = firstSet(
        seriesSettings?.borderColor?.value,
        config.value?.borderColor?.value,
        dataset.borderColor,
      )
      const backgroundColor = firstSet(
        seriesSettings?.backgroundColor?.value,
        config.value?.backgroundColor?.value,
        dataset.backgroundColor,
      )
      const borderWidth = firstSet(
        seriesSettings?.borderWidth?.value,
        config.value?.borderWidth?.value,
        dataset.borderWidth,
      )
      const borderDash = firstSet(
        seriesSettings?.borderDash?.value,
        config.value?.borderDash?.value,
        dataset.borderDash,
      )

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
        const pointColor = firstSet(
          seriesSettings?.pointColor?.value,
          config.value?.pointColor?.value,
          dataset.pointBackgroundColor,
        )
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
          annotationAt(config.value.horizontalLines, index).value = element.y
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
          annotationAt(config.value.verticalLines, index).value = element.x
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
          annotationAt(config.value.horizontalBoxes, index).yMin = element.y - height / 2
          annotationAt(config.value.horizontalBoxes, index).yMax = element.y + height / 2
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
          annotationAt(config.value.verticalBoxes, index).xMin = element.x - width / 2
          annotationAt(config.value.verticalBoxes, index).xMax = element.x + width / 2
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
