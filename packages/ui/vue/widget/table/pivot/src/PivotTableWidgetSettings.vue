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
import { ref, onMounted } from 'vue'

interface ILevelStyle {
  level: number
  backgroundColor: string
  textColor: string
  fontWeight: number
}

type ConditionType = 'greaterThan' | 'lessThan' | 'equals' | 'notEquals' | 'between' | 'contains' | 'colorScale' | 'topN' | 'bottomN'

interface IConditionalFormat {
  id: string
  conditionType: ConditionType
  value1: number | string
  value2?: number | string
  backgroundColor: string
  textColor: string
  fontWeight?: number
  minColor?: string
  maxColor?: string
  priority: number
}

interface IPivotTableSettings {
  headerBackgroundColor?: string
  headerTextColor?: string
  cellBackgroundColor?: string
  cellTextColor?: string
  borderColor?: string
  defaultColumnWidth?: number
  defaultRowHeight?: number
  fontSize?: number
  headerFontWeight?: number
  cellTextAlign?: 'left' | 'center' | 'right'
  rowLevelStyles?: ILevelStyle[]
  columnLevelStyles?: ILevelStyle[]
  conditionalFormats?: IConditionalFormat[]
}

const widgetSettings = defineModel<IPivotTableSettings>({ required: true });

const opened = ref({
  colorsSection: true,
  dimensionsSection: false,
  textSection: false,
  rowLevelsSection: false,
  columnLevelsSection: false,
  conditionalFormatSection: false,
})

const textAlignOptions = [
  { value: 'left', text: 'Links' },
  { value: 'center', text: 'Zentriert' },
  { value: 'right', text: 'Rechts' },
]

onMounted(() => {
  if (!widgetSettings.value.rowLevelStyles) {
    widgetSettings.value.rowLevelStyles = []
  }
  if (!widgetSettings.value.columnLevelStyles) {
    widgetSettings.value.columnLevelStyles = []
  }
  if (!widgetSettings.value.conditionalFormats) {
    widgetSettings.value.conditionalFormats = []
  }
})

const addRowLevelStyle = () => {
  if (!widgetSettings.value.rowLevelStyles) {
    widgetSettings.value.rowLevelStyles = []
  }
  const nextLevel = widgetSettings.value.rowLevelStyles.length
  widgetSettings.value.rowLevelStyles.push({
    level: nextLevel,
    backgroundColor: '#f5f5f5',
    textColor: '#000000',
    fontWeight: 600,
  })
}

const removeRowLevelStyle = (index: number) => {
  widgetSettings.value.rowLevelStyles?.splice(index, 1)
}

const addColumnLevelStyle = () => {
  if (!widgetSettings.value.columnLevelStyles) {
    widgetSettings.value.columnLevelStyles = []
  }
  const nextLevel = widgetSettings.value.columnLevelStyles.length
  widgetSettings.value.columnLevelStyles.push({
    level: nextLevel,
    backgroundColor: '#f5f5f5',
    textColor: '#000000',
    fontWeight: 600,
  })
}

const removeColumnLevelStyle = (index: number) => {
  widgetSettings.value.columnLevelStyles?.splice(index, 1)
}

const conditionTypeOptions = [
  { value: 'greaterThan', text: 'Größer als' },
  { value: 'lessThan', text: 'Kleiner als' },
  { value: 'equals', text: 'Gleich' },
  { value: 'notEquals', text: 'Ungleich' },
  { value: 'between', text: 'Zwischen' },
  { value: 'contains', text: 'Enthält (Text)' },
  { value: 'colorScale', text: 'Farbskala (Min→Max)' },
  { value: 'topN', text: 'Top N Werte' },
  { value: 'bottomN', text: 'Bottom N Werte' },
]

const generateId = () => Math.random().toString(36).substring(2, 9)

const addConditionalFormat = () => {
  if (!widgetSettings.value.conditionalFormats) {
    widgetSettings.value.conditionalFormats = []
  }
  const priority = widgetSettings.value.conditionalFormats.length
  widgetSettings.value.conditionalFormats.push({
    id: generateId(),
    conditionType: 'greaterThan',
    value1: 0,
    value2: 100,
    backgroundColor: '#ffcccc',
    textColor: '#000000',
    fontWeight: 400,
    minColor: '#ffffff',
    maxColor: '#ff0000',
    priority,
  })
}

const removeConditionalFormat = (index: number) => {
  widgetSettings.value.conditionalFormats?.splice(index, 1)
}

const needsSecondValue = (type: ConditionType) => {
  return type === 'between'
}

const needsColorScale = (type: ConditionType) => {
  return type === 'colorScale'
}

const needsTextValue = (type: ConditionType) => {
  return type === 'contains'
}

const needsCountValue = (type: ConditionType) => {
  return type === 'topN' || type === 'bottomN'
}

const needsResultColors = (type: ConditionType) => {
  return type !== 'colorScale'
}
</script>

<template>
  <va-collapse v-model="opened.colorsSection" header="Farben" icon="palette">
    <div class="settings-container">
      <div class="settings-block">
        <h3>Header</h3>
        <va-color-input
          label="Header Hintergrund"
          v-model="widgetSettings.headerBackgroundColor"
        />
        <va-color-input
          label="Header Textfarbe"
          v-model="widgetSettings.headerTextColor"
        />
      </div>

      <div class="settings-block">
        <h3>Zellen</h3>
        <va-color-input
          label="Zellen Hintergrund"
          v-model="widgetSettings.cellBackgroundColor"
        />
        <va-color-input
          label="Zellen Textfarbe"
          v-model="widgetSettings.cellTextColor"
        />
      </div>

      <div class="settings-block">
        <h3>Rahmen</h3>
        <va-color-input
          label="Rahmenfarbe"
          v-model="widgetSettings.borderColor"
        />
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.dimensionsSection" header="Dimensionen" icon="straighten">
    <div class="settings-container">
      <div class="settings-block">
        <va-input
          label="Standard Spaltenbreite (px)"
          v-model.number="widgetSettings.defaultColumnWidth"
          type="number"
          :min="50"
          :max="500"
        />
        <va-input
          label="Standard Zeilenhöhe (px)"
          v-model.number="widgetSettings.defaultRowHeight"
          type="number"
          :min="20"
          :max="100"
        />
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.textSection" header="Text" icon="text_fields">
    <div class="settings-container">
      <div class="settings-block">
        <va-input
          label="Schriftgröße (px)"
          v-model.number="widgetSettings.fontSize"
          type="number"
          :min="8"
          :max="32"
        />
        <va-input
          label="Header Font-Weight"
          v-model.number="widgetSettings.headerFontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100"
        />
        <va-select
          label="Text-Ausrichtung (Zellen)"
          v-model="widgetSettings.cellTextAlign"
          :options="textAlignOptions"
          value-by="value"
        />
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.rowLevelsSection" header="Zeilen-Level Styles" icon="table_rows">
    <div class="settings-container">
      <p class="hint-text">
        Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern.
      </p>

      <div class="level-header">
        <span>Level-Konfiguration</span>
        <va-button size="small" @click="addRowLevelStyle">Level hinzufügen</va-button>
      </div>

      <div
        v-for="(levelStyle, index) in widgetSettings.rowLevelStyles"
        :key="`row_level_${index}`"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Level {{ levelStyle.level }}</strong>
          <va-button size="small" color="danger" @click="removeRowLevelStyle(index)">Entfernen</va-button>
        </div>

        <va-input
          label="Level-Nummer"
          v-model.number="levelStyle.level"
          type="number"
          :min="0"
        />

        <va-color-input
          label="Hintergrundfarbe"
          v-model="levelStyle.backgroundColor"
        />

        <va-color-input
          label="Textfarbe"
          v-model="levelStyle.textColor"
        />

        <va-input
          label="Font-Weight"
          v-model.number="levelStyle.fontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100"
        />
      </div>

      <div v-if="!widgetSettings.rowLevelStyles?.length" class="empty-state">
        Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen.
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.columnLevelsSection" header="Spalten-Level Styles" icon="view_column">
    <div class="settings-container">
      <p class="hint-text">
        Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern.
      </p>

      <div class="level-header">
        <span>Level-Konfiguration</span>
        <va-button size="small" @click="addColumnLevelStyle">Level hinzufügen</va-button>
      </div>

      <div
        v-for="(levelStyle, index) in widgetSettings.columnLevelStyles"
        :key="`col_level_${index}`"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Level {{ levelStyle.level }}</strong>
          <va-button size="small" color="danger" @click="removeColumnLevelStyle(index)">Entfernen</va-button>
        </div>

        <va-input
          label="Level-Nummer"
          v-model.number="levelStyle.level"
          type="number"
          :min="0"
        />

        <va-color-input
          label="Hintergrundfarbe"
          v-model="levelStyle.backgroundColor"
        />

        <va-color-input
          label="Textfarbe"
          v-model="levelStyle.textColor"
        />

        <va-input
          label="Font-Weight"
          v-model.number="levelStyle.fontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100"
        />
      </div>

      <div v-if="!widgetSettings.columnLevelStyles?.length" class="empty-state">
        Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen.
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.conditionalFormatSection" header="Bedingte Formatierung" icon="format_color_fill">
    <div class="settings-container">
      <p class="hint-text">
        Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten.
      </p>

      <div class="level-header">
        <span>Formatierungsregeln</span>
        <va-button size="small" @click="addConditionalFormat">Regel hinzufügen</va-button>
      </div>

      <div
        v-for="(rule, index) in widgetSettings.conditionalFormats"
        :key="rule.id"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Regel {{ index + 1 }}</strong>
          <va-button size="small" color="danger" @click="removeConditionalFormat(index)">Entfernen</va-button>
        </div>

        <va-select
          label="Bedingungstyp"
          v-model="rule.conditionType"
          :options="conditionTypeOptions"
          value-by="value"
        />

        <!-- Numerische Vergleiche -->
        <va-input
          v-if="!needsTextValue(rule.conditionType) && !needsColorScale(rule.conditionType)"
          :label="needsCountValue(rule.conditionType) ? 'Anzahl (N)' : 'Wert'"
          v-model.number="rule.value1"
          type="number"
        />

        <!-- Zweiter Wert für "zwischen" -->
        <va-input
          v-if="needsSecondValue(rule.conditionType)"
          label="Bis Wert"
          v-model.number="rule.value2"
          type="number"
        />

        <!-- Text-Eingabe für "enthält" -->
        <va-input
          v-if="needsTextValue(rule.conditionType)"
          label="Text"
          v-model="rule.value1"
        />

        <!-- Farbskala-Einstellungen -->
        <template v-if="needsColorScale(rule.conditionType)">
          <div class="color-scale-row">
            <va-color-input
              label="Min-Farbe"
              v-model="rule.minColor"
            />
            <va-color-input
              label="Max-Farbe"
              v-model="rule.maxColor"
            />
          </div>
        </template>

        <!-- Ergebnis-Farben für alle außer Farbskala -->
        <template v-if="needsResultColors(rule.conditionType)">
          <va-color-input
            label="Hintergrundfarbe"
            v-model="rule.backgroundColor"
          />
          <va-color-input
            label="Textfarbe"
            v-model="rule.textColor"
          />
          <va-input
            label="Font-Weight"
            v-model.number="rule.fontWeight"
            type="number"
            :min="100"
            :max="900"
            :step="100"
          />
        </template>

        <va-input
          label="Priorität (niedriger = höher)"
          v-model.number="rule.priority"
          type="number"
          :min="0"
        />
      </div>

      <div v-if="!widgetSettings.conditionalFormats?.length" class="empty-state">
        Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen.
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
  margin-bottom: 16px;
}

.settings-block:last-child {
  margin-bottom: 0;
}

.settings-block h3 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--va-primary);
}

.hint-text {
  margin: 0 0 16px 0;
  color: var(--va-text-secondary);
  font-size: 13px;
}

.level-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 600;
}

.level-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 12px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.level-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.empty-state {
  padding: 20px;
  text-align: center;
  color: var(--va-text-secondary);
  background: #f5f5f5;
  border-radius: 4px;
}

.color-scale-row {
  display: flex;
  gap: 12px;
}

.color-scale-row > * {
  flex: 1;
}
</style>
