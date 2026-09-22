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
import { ref } from 'vue'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import { PivotTable } from './gen/PivotTable'
import { LevelStyle } from './gen/LevelStyle'
import { ConditionalFormat } from './gen/ConditionalFormat'

const widgetSettings = defineModel<PivotTable>({ required: true });

const opened = ref({
  colorsSection: true,
  dimensionsSection: false,
  textSection: false,
  rowLevelsSection: false,
  columnLevelsSection: false,
  conditionalFormatSection: false,
  dataSettings: false,
})

const textAlignOptions = [
  { value: 'left', text: 'Links' },
  { value: 'center', text: 'Zentriert' },
  { value: 'right', text: 'Rechts' },
]

type LevelStylesKey = 'rowLevelStyles' | 'columnLevelStyles'

const levelSections: { key: LevelStylesKey; opened: 'rowLevelsSection' | 'columnLevelsSection'; header: string; icon: string; area: string }[] = [
  { key: 'rowLevelStyles', opened: 'rowLevelsSection', header: 'Zeilen-Level Styles', icon: 'table_rows', area: 'Zeilen' },
  { key: 'columnLevelStyles', opened: 'columnLevelsSection', header: 'Spalten-Level Styles', icon: 'view_column', area: 'Spalten' },
]

const addLevelStyle = (key: LevelStylesKey) => {
  const styles = (widgetSettings.value[key] ??= [])
  const newStyle = new LevelStyle()
  newStyle.level = styles.length
  styles.push(newStyle)
}

const removeLevelStyle = (key: LevelStylesKey, index: number) => {
  widgetSettings.value[key]?.splice(index, 1)
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
  const newFormat = new ConditionalFormat()
  newFormat.id = generateId()
  newFormat.priority = priority
  widgetSettings.value.conditionalFormats.push(newFormat)
}

const removeConditionalFormat = (index: number) => {
  widgetSettings.value.conditionalFormats?.splice(index, 1)
}

const needsSecondValue = (type?: string) => {
  return type === 'between'
}

const needsColorScale = (type?: string) => {
  return type === 'colorScale'
}

const needsTextValue = (type?: string) => {
  return type === 'contains'
}

const needsCountValue = (type?: string) => {
  return type === 'topN' || type === 'bottomN'
}

const needsResultColors = (type?: string) => {
  return type !== 'colorScale'
}
</script>

<template>
  <va-collapse v-model="opened.dataSettings" header="Data settings" icon="palette">
    <div class="settings-container">
      <VaCheckbox v-model="widgetSettings.showRowsProperties" label="Show rows properties" style="margin: 0.5rem 0;"/>
      <VaCheckbox v-model="widgetSettings.showColumnsProperties" label="Show columns properties" style="margin: 0.5rem 0;"/>
      <VaCheckbox v-model="widgetSettings.showSingleMeasureHeader" label="Show single measure header" style="margin: 0.5rem 0;"/>
    </div>
  </va-collapse>
  <va-collapse v-model="opened.colorsSection" header="Farben" icon="palette">
    <div class="settings-container">
      <div class="settings-block">
        <h3>Header</h3>
        <VariableInput v-model="widgetSettings.headerBackgroundColor" label="Header Hintergrund">
          <template #default="{ value, change }">
            <va-color-input label="Header Hintergrund" :model-value="value" @input="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="widgetSettings.headerTextColor" label="Header Textfarbe">
          <template #default="{ value, change }">
            <va-color-input label="Header Textfarbe" :model-value="value" @input="change" />
          </template>
        </VariableInput>
      </div>

      <div class="settings-block">
        <h3>Zellen</h3>
        <VariableInput v-model="widgetSettings.cellBackgroundColor" label="Zellen Hintergrund">
          <template #default="{ value, change }">
            <va-color-input label="Zellen Hintergrund" :model-value="value" @input="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="widgetSettings.cellTextColor" label="Zellen Textfarbe">
          <template #default="{ value, change }">
            <va-color-input label="Zellen Textfarbe" :model-value="value" @input="change" />
          </template>
        </VariableInput>
      </div>

      <div class="settings-block">
        <h3>Rahmen</h3>
        <VariableInput v-model="widgetSettings.borderColor" label="Rahmenfarbe">
          <template #default="{ value, change }">
            <va-color-input label="Rahmenfarbe" :model-value="value" @input="change" />
          </template>
        </VariableInput>
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.dimensionsSection" header="Dimensionen" icon="straighten">
    <div class="settings-container">
      <div class="settings-block">
        <VariableInput v-model="widgetSettings.defaultColumnWidth" label="Standard Spaltenbreite (px)">
          <template #default="{ value, change }">
            <va-input
              label="Standard Spaltenbreite (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="50"
              :max="500"
            />
          </template>
        </VariableInput>
        <VariableInput v-model="widgetSettings.defaultRowHeight" label="Standard Zeilenhöhe (px)">
          <template #default="{ value, change }">
            <va-input
              label="Standard Zeilenhöhe (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="20"
              :max="100"
            />
          </template>
        </VariableInput>
      </div>
    </div>
  </va-collapse>

  <va-collapse v-model="opened.textSection" header="Text" icon="text_fields">
    <div class="settings-container">
      <div class="settings-block">
        <VariableInput v-model="widgetSettings.fontSize" label="Schriftgröße (px)">
          <template #default="{ value, change }">
            <va-input
              label="Schriftgröße (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="8"
              :max="32"
            />
          </template>
        </VariableInput>
        <VariableInput v-model="widgetSettings.headerFontWeight" label="Header Font-Weight">
          <template #default="{ value, change }">
            <va-input
              label="Header Font-Weight"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="100"
              :max="900"
              :step="100"
            />
          </template>
        </VariableInput>
        <va-select
          label="Text-Ausrichtung (Zellen)"
          v-model="widgetSettings.cellTextAlign"
          :options="textAlignOptions"
          value-by="value"
        />
      </div>
    </div>
  </va-collapse>

  <va-collapse v-for="section in levelSections" :key="section.key" v-model="opened[section.opened]" :header="section.header" :icon="section.icon">
    <div class="settings-container">
      <p class="hint-text">
        Definiere individuelle Styles für verschiedene Hierarchie-Level in den {{ section.area }}-Headern.
      </p>

      <div class="level-header">
        <span>Level-Konfiguration</span>
        <va-button size="small" @click="addLevelStyle(section.key)">Level hinzufügen</va-button>
      </div>

      <div
        v-for="(levelStyle, index) in widgetSettings[section.key]"
        :key="`${section.key}_${index}`"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Level {{ levelStyle.level }}</strong>
          <va-button size="small" color="danger" @click="removeLevelStyle(section.key, index)">Entfernen</va-button>
        </div>

        <va-input
          label="Level-Nummer"
          v-model.number="levelStyle.level"
          type="number"
          :min="0"
        />

        <VariableInput v-model="levelStyle.backgroundColor" label="Hintergrundfarbe">
          <template #default="{ value, change }">
            <va-color-input label="Hintergrundfarbe" :model-value="value" @input="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="levelStyle.textColor" label="Textfarbe">
          <template #default="{ value, change }">
            <va-color-input label="Textfarbe" :model-value="value" @input="change" />
          </template>
        </VariableInput>

        <va-input
          label="Font-Weight"
          v-model.number="levelStyle.fontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100"
        />
      </div>

      <div v-if="!widgetSettings[section.key]?.length" class="empty-state">
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
