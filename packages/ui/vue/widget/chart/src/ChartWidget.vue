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

// Apply settings to data (override dataset colors)
const chartData = computed(() => {
  if (!data.value) return null

  const dataCopy = JSON.parse(JSON.stringify(data.value))

  if (dataCopy.datasets && Array.isArray(dataCopy.datasets)) {
    dataCopy.datasets = dataCopy.datasets.map((dataset: any) => {
      const chartType = config.value?.chartType?.value ?? 'bar'

      // Apply settings based on chart type
      if (chartType === 'line') {
        const showPoints = config.value?.showPoints?.value ?? true
        const fillEnabled = config.value?.fill?.value ?? false
        const result = {
          ...dataset,
          borderColor: config.value?.borderColor?.value ?? dataset.borderColor,
          borderWidth: config.value?.borderWidth?.value ?? dataset.borderWidth,
          borderDash: config.value?.borderDash?.value ?? dataset.borderDash,
          backgroundColor: config.value?.backgroundColor?.value ?? dataset.backgroundColor,
          fill: fillEnabled ? 'origin' : false,
          // Point settings
          pointRadius: showPoints ? (config.value?.pointSize?.value ?? 3) : 0,
          pointBackgroundColor: config.value?.pointColor?.value ?? dataset.pointBackgroundColor,
          pointBorderColor: config.value?.pointColor?.value ?? dataset.pointBorderColor,
          pointHoverRadius: showPoints ? ((config.value?.pointSize?.value ?? 3) + 2) : 0,
        }
        console.log('Line dataset config:', { fillEnabled, fill: result.fill, backgroundColor: result.backgroundColor })
        return result
      } else if (chartType === 'bar') {
        return {
          ...dataset,
          borderColor: config.value?.borderColor?.value ?? dataset.borderColor,
          borderWidth: config.value?.borderWidth?.value ?? dataset.borderWidth,
          backgroundColor: config.value?.backgroundColor?.value ?? dataset.backgroundColor,
        }
      } else {
        // pie, doughnut, etc
        return {
          ...dataset,
          borderColor: config.value?.borderColor?.value ?? dataset.borderColor,
          borderWidth: config.value?.borderWidth?.value ?? dataset.borderWidth,
          backgroundColor: config.value?.backgroundColor?.value ?? dataset.backgroundColor,
        }
      }
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

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
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
      },
      y: {
        grid: {
          display: config.value.showHorizontalGrid?.value ?? true,
          color: config.value.horizontalGridColor?.value ?? 'rgba(0, 0, 0, 0.1)',
          lineWidth: config.value.horizontalGridWidth?.value ?? 1,
        }
      }
    },
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
