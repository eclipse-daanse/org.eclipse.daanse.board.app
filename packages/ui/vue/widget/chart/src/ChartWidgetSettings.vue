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
import { onMounted, computed } from 'vue'
import { ChartSettings } from './gen/ChartSettings'
import type { SeriesSettings } from './gen/SeriesSettings'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const widgetSettings = defineModel<ChartSettings>({ required: true })


/*
 * The reference lines and areas are typed as lists in the model, which the
 * generator gives an EList - it has add() and removeAt(), not push() and
 * splice(). An untyped list still arrives as a plain array, so both are
 * served rather than guessing which one is in hand.
 */
function listAdd(list: any, entry: unknown) {
  if (typeof list?.add === 'function') list.add(entry)
  else if (Array.isArray(list)) list.push(entry)
}

/**
 * The four annotation lists as plain arrays, for the template.
 *
 * v-for cannot walk an EList, and every entry would be unknown if it could:
 * these lists have no class in the Ecore yet. One computed per list gives
 * the template something it can iterate and read.
 */
function asArray(list: any): any[] {
  if (typeof list?.toArray === 'function') return list.toArray()
  return Array.isArray(list) ? list : []
}

const horizontalLineList = computed(() => asArray(widgetSettings.value?.horizontalLines))
const verticalLineList = computed(() => asArray(widgetSettings.value?.verticalLines))
const horizontalBoxList = computed(() => asArray(widgetSettings.value?.horizontalBoxes))
const verticalBoxList = computed(() => asArray(widgetSettings.value?.verticalBoxes))

function listRemoveAt(list: any, index: number) {
  if (typeof list?.removeAt === 'function') list.removeAt(index)
  else if (Array.isArray(list)) list.splice(index, 1)
}

// Annotation management
const addHorizontalLine = () => {
  if (!widgetSettings.value.horizontalLines) {
    // Nothing there at all - a stored board from before this list existed
    widgetSettings.value.horizontalLines = [] as any
  }
  listAdd(widgetSettings.value.horizontalLines, ({
    value: 0,
    color: 'rgba(255, 0, 0, 0.8)',
    width: 2,
    label: 'Line'
  }))
}

const removeHorizontalLine = (index: number) => {
  listRemoveAt(widgetSettings.value.horizontalLines, index)
}

const addVerticalLine = () => {
  if (!widgetSettings.value.verticalLines) {
    // Nothing there at all - a stored board from before this list existed
    widgetSettings.value.verticalLines = [] as any
  }
  listAdd(widgetSettings.value.verticalLines, ({
    value: 0,
    color: 'rgba(0, 0, 255, 0.8)',
    width: 2,
    label: 'Line'
  }))
}

const removeVerticalLine = (index: number) => {
  listRemoveAt(widgetSettings.value.verticalLines, index)
}

const addHorizontalBox = () => {
  if (!widgetSettings.value.horizontalBoxes) {
    // Nothing there at all - a stored board from before this list existed
    widgetSettings.value.horizontalBoxes = [] as any
  }
  listAdd(widgetSettings.value.horizontalBoxes, ({
    yMin: 0,
    yMax: 10,
    color: 'rgba(255, 0, 0, 0.1)',
    label: 'Range'
  }))
}

const removeHorizontalBox = (index: number) => {
  listRemoveAt(widgetSettings.value.horizontalBoxes, index)
}

const addVerticalBox = () => {
  if (!widgetSettings.value.verticalBoxes) {
    // Nothing there at all - a stored board from before this list existed
    widgetSettings.value.verticalBoxes = [] as any
  }
  listAdd(widgetSettings.value.verticalBoxes, ({
    xMin: 0,
    xMax: 10,
    color: 'rgba(0, 0, 255, 0.1)',
    label: 'Range'
  }))
}

const removeVerticalBox = (index: number) => {
  listRemoveAt(widgetSettings.value.verticalBoxes, index)
}

// Initialize seriesSettings if it doesn't exist and migrate existing series
onMounted(() => {
  if (!widgetSettings.value.seriesSettings) {
    widgetSettings.value.seriesSettings = [] as any
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
  <section class="settings-section" data-section="Reference Lines & Areas">
    <div class="settings-container">
      <!-- Edit Mode Toggle -->
      <div class="settings-block">
        <va-checkbox
          v-if="widgetSettings.annotationsEditMode"
          label="Enable Drag & Drop (Move annotations in chart)"
          v-model="widgetSettings.annotationsEditMode"
        />
      </div>

      <!-- Horizontal Lines (Y-Axis) -->
      <div class="settings-block">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Horizontal Lines (Y-Axis)</h3>
          <va-button size="small" @click="addHorizontalLine">Add Line</va-button>
        </div>

        <div v-for="(line, index) in horizontalLineList" :key="`hline_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
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

        <div v-for="(line, index) in verticalLineList" :key="`vline_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
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

        <div v-for="(box, index) in horizontalBoxList" :key="`hbox_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
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

        <div v-for="(box, index) in verticalBoxList" :key="`vbox_${index}`" style="border: 1px solid #ddd; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
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
  </section>
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
