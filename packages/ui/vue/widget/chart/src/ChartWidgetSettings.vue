<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { inject, ref, onMounted, computed } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { ChartSettings, SeriesSettings } from './gen/ChartSettings'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const opened = ref({
  seriesSection: false,
  styleSection: true,
  gridSection: false,
  dateFormatSection: false,
  annotationsSection: false,
})

const widgetSettings = defineModel<ChartSettings>({ required: true })

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

// Computed for chart type
const chartType = computed(() => widgetSettings.value?.chartType?.value ?? 'bar')
const isLineChart = computed(() => chartType.value === 'line')
const isBarChart = computed(() => chartType.value === 'bar')
const isPieChart = computed(() => ['pie', 'doughnut', 'polarArea'].includes(chartType.value))

// Debug: Check if settings are loaded
onMounted(() => {
  console.log('ChartWidgetSettings mounted, config:', widgetSettings.value)
  console.log('borderColor:', widgetSettings.value?.borderColor)
})

// Preset border dash patterns
const borderDashPresets = [
  { label: 'Solid', value: [] },
  { label: 'Dashed', value: [5, 5] },
  { label: 'Dotted', value: [2, 2] },
  { label: 'Dash-Dot', value: [10, 5, 2, 5] },
]

const selectedBorderDashPreset = ref('[]')

const updateBorderDash = (preset: any) => {
  try {
    // Handle both string and object values from va-select
    const presetValue = typeof preset === 'string' ? preset : preset?.value || preset
    const parsed = typeof presetValue === 'string' ? JSON.parse(presetValue) : presetValue
    widgetSettings.value.borderDash.value = parsed
  } catch (e) {
    console.error('Error parsing border dash preset:', e, preset)
  }
}

// Initialize selected preset
if (widgetSettings.value.borderDash?.value) {
  selectedBorderDashPreset.value = JSON.stringify(widgetSettings.value.borderDash.value)
}

// Annotation management
const addHorizontalLine = () => {
  if (!widgetSettings.value.horizontalLines) {
    widgetSettings.value.horizontalLines = []
  }
  widgetSettings.value.horizontalLines.push({
    value: 0,
    color: 'rgba(255, 0, 0, 0.8)',
    width: 2,
    label: 'Line'
  })
}

const removeHorizontalLine = (index: number) => {
  widgetSettings.value.horizontalLines?.splice(index, 1)
}

const addVerticalLine = () => {
  if (!widgetSettings.value.verticalLines) {
    widgetSettings.value.verticalLines = []
  }
  widgetSettings.value.verticalLines.push({
    value: 0,
    color: 'rgba(0, 0, 255, 0.8)',
    width: 2,
    label: 'Line'
  })
}

const removeVerticalLine = (index: number) => {
  widgetSettings.value.verticalLines?.splice(index, 1)
}

const addHorizontalBox = () => {
  if (!widgetSettings.value.horizontalBoxes) {
    widgetSettings.value.horizontalBoxes = []
  }
  widgetSettings.value.horizontalBoxes.push({
    yMin: 0,
    yMax: 10,
    color: 'rgba(255, 0, 0, 0.1)',
    label: 'Range'
  })
}

const removeHorizontalBox = (index: number) => {
  widgetSettings.value.horizontalBoxes?.splice(index, 1)
}

const addVerticalBox = () => {
  if (!widgetSettings.value.verticalBoxes) {
    widgetSettings.value.verticalBoxes = []
  }
  widgetSettings.value.verticalBoxes.push({
    xMin: 0,
    xMax: 10,
    color: 'rgba(0, 0, 255, 0.1)',
    label: 'Range'
  })
}

const removeVerticalBox = (index: number) => {
  widgetSettings.value.verticalBoxes?.splice(index, 1)
}

// Series settings management
const addSeriesSettings = () => {
  if (!widgetSettings.value.seriesSettings) {
    widgetSettings.value.seriesSettings = []
  }
  const newSettings = new SeriesSettings()
  newSettings.seriesIndex = new VariableWrapper<number>(widgetSettings.value.seriesSettings.length)
  newSettings.chartType = new VariableWrapper<string>('bar')
  newSettings.xAxisId = new VariableWrapper<string>('x')
  newSettings.yAxisId = new VariableWrapper<string>('y')

  // Initialize optional label
  newSettings.label = new VariableWrapper<string>('')

  // Initialize optional styling fields
  newSettings.borderColor = new VariableWrapper<string>('')
  newSettings.backgroundColor = new VariableWrapper<string>('')
  newSettings.borderWidth = new VariableWrapper<number>(2)
  newSettings.borderDash = new VariableWrapper<number[]>([])
  newSettings.fill = new VariableWrapper<boolean>(false)

  // Initialize optional point fields
  newSettings.showPoints = new VariableWrapper<boolean>(true)
  newSettings.pointColor = new VariableWrapper<string>('')
  newSettings.pointSize = new VariableWrapper<number>(3)

  widgetSettings.value.seriesSettings.push(newSettings)
}

const removeSeriesSettings = (index: number) => {
  widgetSettings.value.seriesSettings?.splice(index, 1)
}

// Helper to update series border dash
const updateSeriesBorderDash = (series: SeriesSettings, preset: any) => {
  try {
    const presetValue = typeof preset === 'string' ? preset : preset?.value || preset
    const parsed = typeof presetValue === 'string' ? JSON.parse(presetValue) : presetValue
    if (!series.borderDash) {
      series.borderDash = new VariableWrapper<number[]>(parsed)
    } else {
      series.borderDash.value = parsed
    }
  } catch (e) {
    console.error('Error parsing border dash preset:', e, preset)
  }
}

// Initialize seriesSettings if it doesn't exist and migrate existing series
onMounted(() => {
  if (!widgetSettings.value.seriesSettings) {
    widgetSettings.value.seriesSettings = []
  }

  // Migrate existing series to add missing fields
  widgetSettings.value.seriesSettings.forEach((series: SeriesSettings) => {
    if (!series.label) {
      series.label = new VariableWrapper<string>('')
    }
    if (!series.borderColor) {
      series.borderColor = new VariableWrapper<string>('')
    }
    if (!series.backgroundColor) {
      series.backgroundColor = new VariableWrapper<string>('')
    }
    if (!series.borderWidth) {
      series.borderWidth = new VariableWrapper<number>(2)
    }
    if (!series.borderDash) {
      series.borderDash = new VariableWrapper<number[]>([])
    }
    if (!series.fill) {
      series.fill = new VariableWrapper<boolean>(false)
    }
    if (!series.showPoints) {
      series.showPoints = new VariableWrapper<boolean>(true)
    }
    if (!series.pointColor) {
      series.pointColor = new VariableWrapper<string>('')
    }
    if (!series.pointSize) {
      series.pointSize = new VariableWrapper<number>(3)
    }
  })
})
</script>

<template>
  <!-- Series-specific Settings -->
  <va-collapse v-model="opened.seriesSection" icon="format_list_numbered" header="Per-Series Settings">
    <div class="settings-container">
      <div class="settings-block">
        <p style="margin-bottom: 12px; color: var(--va-text-secondary);">
          Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling.
        </p>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3>Series Configuration</h3>
          <va-button size="small" @click="addSeriesSettings">Add Series</va-button>
        </div>

        <div v-for="(series, index) in widgetSettings.seriesSettings" :key="`series_${index}`"
          style="border: 1px solid #ddd; padding: 16px; border-radius: 4px; margin-bottom: 12px; background: #fafafa;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <strong style="font-size: 15px;">Series {{ series.seriesIndex?.value ?? index }}</strong>
            <va-button size="small" color="danger" @click="removeSeriesSettings(index)">Remove</va-button>
          </div>

          <!-- Basic Info -->
          <va-input
            v-if="series.seriesIndex"
            label="Series Index (0-based)"
            v-model.number="series.seriesIndex.value"
            type="number"
            :min="0"
            style="margin-bottom: 12px;"
          />

          <va-input
            v-if="series.label !== undefined"
            label="Series Label/Title (optional)"
            v-model="series.label.value"
            placeholder="e.g., Temperature, Humidity, Pressure..."
            style="margin-bottom: 12px;"
          />

          <va-select
            v-if="series.chartType"
            label="Chart Type"
            v-model="series.chartType.value"
            :options="[
              { value: 'bar', text: 'Bar Chart' },
              { value: 'line', text: 'Line Chart' },
              { value: 'radar', text: 'Radar Chart' },
              { value: 'pie', text: 'Pie Chart' },
              { value: 'doughnut', text: 'Doughnut Chart' },
              { value: 'polarArea', text: 'Polar Area Chart' }
            ]"
            value-by="value"
            style="margin-bottom: 12px;"
          />

          <!-- Axis Assignment -->
          <h4 style="margin: 16px 0 8px 0; font-size: 13px; color: var(--va-primary);">Axis Assignment</h4>

          <va-input
            v-if="series.xAxisId"
            label="X-Axis ID (e.g., 'x', 'x1', 'x2')"
            v-model="series.xAxisId.value"
            placeholder="x"
            style="margin-bottom: 8px;"
          />

          <va-input
            v-if="series.yAxisId"
            label="Y-Axis ID (e.g., 'y', 'y1', 'y2')"
            v-model="series.yAxisId.value"
            placeholder="y"
            style="margin-bottom: 12px;"
          />

          <!-- Colors -->
          <h4 style="margin: 16px 0 8px 0; font-size: 13px; color: var(--va-primary);">Colors</h4>

          <va-color-input
            v-if="series.borderColor !== undefined"
            label="Border Color"
            v-model="series.borderColor.value"
            style="margin-bottom: 8px;"
          />

          <va-color-input
            v-if="series.backgroundColor !== undefined"
            label="Background Color"
            v-model="series.backgroundColor.value"
            style="margin-bottom: 12px;"
          />

          <!-- Line/Border Style -->
          <h4 style="margin: 16px 0 8px 0; font-size: 13px; color: var(--va-primary);">Border Style</h4>

          <va-input
            v-if="series.borderWidth !== undefined"
            label="Border Width (px)"
            v-model.number="series.borderWidth.value"
            type="number"
            :min="0"
            :max="20"
            style="margin-bottom: 8px;"
          />

          <va-select
            v-if="series.borderDash !== undefined"
            label="Border Style"
            :model-value="JSON.stringify(series.borderDash?.value || [])"
            :options="borderDashPresets.map(p => ({ value: JSON.stringify(p.value), text: p.label }))"
            value-by="value"
            @update:modelValue="updateSeriesBorderDash(series, $event)"
            style="margin-bottom: 8px;"
          />

          <va-checkbox
            v-if="series.fill !== undefined"
            label="Fill Area"
            v-model="series.fill.value"
            style="margin-bottom: 12px;"
          />

          <!-- Point Style (for line charts) -->
          <div v-if="series.chartType?.value === 'line'">
            <h4 style="margin: 16px 0 8px 0; font-size: 13px; color: var(--va-primary);">Point Style</h4>

            <va-checkbox
              v-if="series.showPoints !== undefined"
              label="Show Points"
              v-model="series.showPoints.value"
              style="margin-bottom: 8px;"
            />

            <va-color-input
              v-if="series.pointColor !== undefined && series.showPoints?.value"
              label="Point Color"
              v-model="series.pointColor.value"
              style="margin-bottom: 8px;"
            />

            <va-input
              v-if="series.pointSize !== undefined && series.showPoints?.value"
              label="Point Size (px)"
              v-model.number="series.pointSize.value"
              type="number"
              :min="0"
              :max="20"
            />
          </div>
        </div>

        <div v-if="!widgetSettings.seriesSettings || widgetSettings.seriesSettings.length === 0"
          style="padding: 20px; text-align: center; color: var(--va-text-secondary);">
          No series-specific settings configured. Click "Add Series" to configure individual data series.
        </div>
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.styleSection" icon="palette" header="Default Chart Styling">
    <div class="settings-container">
      <div class="settings-block">
        <h3>Chart Type</h3>

        <va-select
          v-if="widgetSettings.chartType"
          label="Chart Type"
          v-model="widgetSettings.chartType.value"
          :options="[
            { value: 'bar', text: 'Bar Chart' },
            { value: 'line', text: 'Line Chart' },
            { value: 'radar', text: 'Radar Chart' },
            { value: 'pie', text: 'Pie Chart' },
            { value: 'doughnut', text: 'Doughnut Chart' },
            { value: 'polarArea', text: 'Polar Area Chart' }
          ]"
          value-by="value"
        />
      </div>

      <!-- Line Chart Settings -->
      <div class="settings-block" v-if="isLineChart">
        <h3>Line Style</h3>

        <va-color-input
          v-if="widgetSettings.borderColor"
          label="Line Color"
          v-model="widgetSettings.borderColor.value"
        />

        <va-input
          v-if="widgetSettings.borderWidth"
          label="Line Width (px)"
          v-model.number="widgetSettings.borderWidth.value"
          type="number"
          :min="0"
          :max="20"
        />

        <va-select
          v-if="widgetSettings.borderDash"
          label="Line Style"
          v-model="selectedBorderDashPreset"
          :options="borderDashPresets.map(p => ({ value: JSON.stringify(p.value), text: p.label }))"
          value-by="value"
          @update:modelValue="updateBorderDash"
        />

        <va-checkbox
          v-if="widgetSettings.fill"
          label="Fill Area Under Line"
          v-model="widgetSettings.fill.value"
        />

        <va-color-input
          v-if="widgetSettings.backgroundColor && widgetSettings.fill?.value"
          label="Fill Color"
          v-model="widgetSettings.backgroundColor.value"
        />

        <h3 style="margin-top: 16px;">Point Style</h3>

        <va-checkbox
          v-if="widgetSettings.showPoints"
          label="Show Points"
          v-model="widgetSettings.showPoints.value"
        />

        <va-color-input
          v-if="widgetSettings.pointColor && widgetSettings.showPoints?.value"
          label="Point Color"
          v-model="widgetSettings.pointColor.value"
        />

        <va-input
          v-if="widgetSettings.pointSize && widgetSettings.showPoints?.value"
          label="Point Size (px)"
          v-model.number="widgetSettings.pointSize.value"
          type="number"
          :min="0"
          :max="20"
        />
      </div>

      <!-- Bar Chart Settings -->
      <div class="settings-block" v-if="isBarChart">
        <h3>Bar Style</h3>

        <va-color-input
          v-if="widgetSettings.backgroundColor"
          label="Bar Fill Color"
          v-model="widgetSettings.backgroundColor.value"
        />

        <va-color-input
          v-if="widgetSettings.borderColor"
          label="Bar Border Color"
          v-model="widgetSettings.borderColor.value"
        />

        <va-input
          v-if="widgetSettings.borderWidth"
          label="Border Width (px)"
          v-model.number="widgetSettings.borderWidth.value"
          type="number"
          :min="0"
          :max="20"
        />
      </div>

      <!-- Pie/Doughnut Settings -->
      <div class="settings-block" v-if="isPieChart">
        <h3>Segment Style</h3>

        <va-color-input
          v-if="widgetSettings.borderColor"
          label="Segment Border Color"
          v-model="widgetSettings.borderColor.value"
        />

        <va-input
          v-if="widgetSettings.borderWidth"
          label="Border Width (px)"
          v-model.number="widgetSettings.borderWidth.value"
          type="number"
          :min="0"
          :max="20"
        />
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.gridSection" icon="grid_on" header="Grid Lines">
    <div class="settings-container">
      <div class="settings-block">
        <h3>Horizontal Grid (Y-Axis)</h3>

        <va-checkbox
          v-if="widgetSettings.showHorizontalGrid"
          label="Show Horizontal Grid"
          v-model="widgetSettings.showHorizontalGrid.value"
        />

        <va-color-input
          v-if="widgetSettings.horizontalGridColor"
          label="Grid Color"
          v-model="widgetSettings.horizontalGridColor.value"
          :disabled="!widgetSettings.showHorizontalGrid?.value"
        />

        <va-input
          v-if="widgetSettings.horizontalGridWidth"
          label="Grid Width (px)"
          v-model.number="widgetSettings.horizontalGridWidth.value"
          type="number"
          :min="0"
          :max="10"
          :disabled="!widgetSettings.showHorizontalGrid?.value"
        />
      </div>

      <div class="settings-block" style="margin-top: 20px;">
        <h3>Vertical Grid (X-Axis)</h3>

        <va-checkbox
          v-if="widgetSettings.showVerticalGrid"
          label="Show Vertical Grid"
          v-model="widgetSettings.showVerticalGrid.value"
        />

        <va-color-input
          v-if="widgetSettings.verticalGridColor"
          label="Grid Color"
          v-model="widgetSettings.verticalGridColor.value"
          :disabled="!widgetSettings.showVerticalGrid?.value"
        />

        <va-input
          v-if="widgetSettings.verticalGridWidth"
          label="Grid Width (px)"
          v-model.number="widgetSettings.verticalGridWidth.value"
          type="number"
          :min="0"
          :max="10"
          :disabled="!widgetSettings.showVerticalGrid?.value"
        />
      </div>

    </div>
  </va-collapse>

  <va-collapse v-model="opened.dateFormatSection" icon="event" header="Date/Time Formatting">
    <div class="settings-container">
      <div class="settings-block">
        <h3>X-Axis Date/Time Format</h3>

        <va-select
          v-if="widgetSettings.dateDisplayFormat"
          label="Date Format"
          v-model="widgetSettings.dateDisplayFormat.value"
          :options="[
            { value: 'dd.MM.yyyy HH:mm', text: 'dd.MM.yyyy HH:mm' },
            { value: 'dd.MM.yyyy HH:mm:ss', text: 'dd.MM.yyyy HH:mm:ss' },
            { value: 'dd.MM.yyyy', text: 'dd.MM.yyyy' },
            { value: 'dd.MM.yy HH:mm', text: 'dd.MM.yy HH:mm' },
            { value: 'dd.MM.yy', text: 'dd.MM.yy' },
            { value: 'yyyy-MM-dd HH:mm:ss', text: 'yyyy-MM-dd HH:mm:ss' },
            { value: 'yyyy-MM-dd HH:mm', text: 'yyyy-MM-dd HH:mm' },
            { value: 'yyyy-MM-dd', text: 'yyyy-MM-dd' },
            { value: 'dd/MM/yyyy HH:mm', text: 'dd/MM/yyyy HH:mm' },
            { value: 'dd/MM/yyyy', text: 'dd/MM/yyyy' },
            { value: 'MM/dd/yyyy HH:mm', text: 'MM/dd/yyyy HH:mm' },
            { value: 'MM/dd/yyyy', text: 'MM/dd/yyyy' },
            { value: 'HH:mm:ss', text: 'HH:mm:ss' },
            { value: 'HH:mm', text: 'HH:mm' },
            { value: 'yyyy-MM-dd\'T\'HH:mm:ss', text: 'yyyy-MM-dd\'T\'HH:mm:ss (ISO)' }
          ]"
          value-by="value"
        />

      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.annotationsSection" icon="show_chart" header="Reference Lines & Areas">
    <div class="settings-container">
      <!-- Edit Mode Toggle -->
      <div class="settings-block">
        <va-checkbox
          v-if="widgetSettings.annotationsEditMode"
          label="Enable Drag & Drop (Move annotations in chart)"
          v-model="widgetSettings.annotationsEditMode.value"
        />
      </div>

      <!-- Horizontal Lines (Y-Axis) -->
      <div class="settings-block">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Horizontal Lines (Y-Axis)</h3>
          <va-button size="small" @click="addHorizontalLine">Add Line</va-button>
        </div>

        <div v-for="(line, index) in widgetSettings.horizontalLines" :key="`hline_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong>Line {{ index + 1 }}</strong>
            <va-button size="small" color="danger" @click="removeHorizontalLine(index)">Remove</va-button>
          </div>

          <va-input
            label="Y-Value"
            v-model.number="line.value"
            type="number"
          />

          <va-color-input
            label="Color"
            v-model="line.color"
          />

          <va-input
            label="Line Width (px)"
            v-model.number="line.width"
            type="number"
            :min="1"
            :max="10"
          />

          <va-input
            label="Label (optional)"
            v-model="line.label"
          />
        </div>
      </div>

      <!-- Vertical Lines (X-Axis) -->
      <div class="settings-block" style="margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Vertical Lines (X-Axis)</h3>
          <va-button size="small" @click="addVerticalLine">Add Line</va-button>
        </div>

        <div v-for="(line, index) in widgetSettings.verticalLines" :key="`vline_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong>Line {{ index + 1 }}</strong>
            <va-button size="small" color="danger" @click="removeVerticalLine(index)">Remove</va-button>
          </div>

          <va-input
            label="X-Value"
            v-model="line.value"
          />

          <va-color-input
            label="Color"
            v-model="line.color"
          />

          <va-input
            label="Line Width (px)"
            v-model.number="line.width"
            type="number"
            :min="1"
            :max="10"
          />

          <va-input
            label="Label (optional)"
            v-model="line.label"
          />
        </div>
      </div>

      <!-- Horizontal Boxes (Y-Axis Ranges) -->
      <div class="settings-block" style="margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Horizontal Areas (Y-Axis Ranges)</h3>
          <va-button size="small" @click="addHorizontalBox">Add Area</va-button>
        </div>

        <div v-for="(box, index) in widgetSettings.horizontalBoxes" :key="`hbox_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong>Area {{ index + 1 }}</strong>
            <va-button size="small" color="danger" @click="removeHorizontalBox(index)">Remove</va-button>
          </div>

          <va-input
            label="Y-Min"
            v-model.number="box.yMin"
            type="number"
          />

          <va-input
            label="Y-Max"
            v-model.number="box.yMax"
            type="number"
          />

          <va-color-input
            label="Fill Color"
            v-model="box.color"
          />

          <va-input
            label="Label (optional)"
            v-model="box.label"
          />
        </div>
      </div>

      <!-- Vertical Boxes (X-Axis Ranges) -->
      <div class="settings-block" style="margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Vertical Areas (X-Axis Ranges)</h3>
          <va-button size="small" @click="addVerticalBox">Add Area</va-button>
        </div>

        <div v-for="(box, index) in widgetSettings.verticalBoxes" :key="`vbox_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong>Area {{ index + 1 }}</strong>
            <va-button size="small" color="danger" @click="removeVerticalBox(index)">Remove</va-button>
          </div>

          <va-input
            label="X-Min"
            v-model="box.xMin"
          />

          <va-input
            label="X-Max"
            v-model="box.xMax"
          />

          <va-color-input
            label="Fill Color"
            v-model="box.color"
          />

          <va-input
            label="Label (optional)"
            v-model="box.label"
          />
        </div>
      </div>
    </div>
  </va-collapse>
</template>

<style scoped>
.settings-container {
  padding: 16px;
}

.settings-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.settings-block h3 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--va-primary);
}
</style>
