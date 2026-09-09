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
import { ref, onMounted, watch, markRaw } from 'vue'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable } from './gen/PivotTable'
import type { LevelStyle } from './gen/LevelStyle'
import { LevelStyleImpl } from './gen/LevelStyleImpl'
import type { ConditionalFormat } from './gen/ConditionalFormat'
import { ConditionalFormatImpl } from './gen/ConditionalFormatImpl'
import {
  DButton,
  DCheckbox,
  DColorInput,
  DInput,
  DSelect,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

type ConditionType = 'greaterThan' | 'lessThan' | 'equals' | 'notEquals' | 'between' | 'contains' | 'colorScale' | 'topN' | 'bottomN'

const widgetSettings = defineModel<PivotTable>({ required: true });


const textAlignOptions = [
  { value: 'left', text: 'Links' },
  { value: 'center', text: 'Zentriert' },
  { value: 'right', text: 'Rechts' },
]

/*
 * The style lists are typed in the model, so the generator gives them an
 * EList: add() and removeAt(), not push() and splice(). An untyped list
 * still arrives as a plain array, so both are served.
 */
function listAdd(list: any, entry: unknown) {
  if (typeof list?.add === 'function') list.add(entry)
  else if (Array.isArray(list)) list.push(entry)
}

function listRemoveAt(list: any, index: number) {
  if (typeof list?.removeAt === 'function') list.removeAt(index)
  else if (Array.isArray(list)) list.splice(index, 1)
}

/** A list as a plain array, for v-for and for reading. */
function asArray(list: any): any[] {
  if (typeof list?.toArray === 'function') return list.toArray()
  return Array.isArray(list) ? list : []
}

const addRowLevelStyle = () => {
  if (!widgetSettings.value.rowLevelStyles) {
    widgetSettings.value.rowLevelStyles = [] as any
  }
  const nextLevel = widgetSettings.value.rowLevelStyles.length
  const newStyle = new LevelStyleImpl()
  newStyle.level = nextLevel
  listAdd(widgetSettings.value.rowLevelStyles, newStyle)
}

const removeRowLevelStyle = (index: number) => {
  listRemoveAt(widgetSettings.value.rowLevelStyles, index)
}

const addColumnLevelStyle = () => {
  if (!widgetSettings.value.columnLevelStyles) {
    widgetSettings.value.columnLevelStyles = [] as any
  }
  const nextLevel = widgetSettings.value.columnLevelStyles.length
  const newStyle = new LevelStyleImpl()
  newStyle.level = nextLevel
  listAdd(widgetSettings.value.columnLevelStyles, newStyle)
}

const removeColumnLevelStyle = (index: number) => {
  listRemoveAt(widgetSettings.value.columnLevelStyles, index)
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
    widgetSettings.value.conditionalFormats = [] as any
  }
  const priority = widgetSettings.value.conditionalFormats.length
  const newFormat = new ConditionalFormatImpl()
  newFormat.id = generateId()
  newFormat.priority = priority
  listAdd(widgetSettings.value.conditionalFormats, newFormat)
}

const removeConditionalFormat = (index: number) => {
  listRemoveAt(widgetSettings.value.conditionalFormats, index)
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
  <section class="settings-section" data-section="Data settings">
    <div class="settings-container">
      <DCheckbox v-model="widgetSettings.showRowsProperties" label="Show rows properties" />
      <DCheckbox v-model="widgetSettings.showColumnsProperties" label="Show columns properties" />
      <DCheckbox v-model="widgetSettings.showSingleMeasureHeader" label="Show single measure header" />
    </div>
  </section>
  <section class="settings-section" data-section="Farben">
    <div class="settings-container">
      <div class="settings-block">
        <h3>Header</h3>
        <VariableInput v-model="(widgetSettings.headerBackgroundColor as unknown as VariableWrapper<string>)" label="Header Hintergrund">
          <template #default="{ value, change }">
            <DColorInput label="Header Hintergrund" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="(widgetSettings.headerTextColor as unknown as VariableWrapper<string>)" label="Header Textfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Header Textfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>
      </div>

      <div class="settings-block">
        <h3>Zellen</h3>
        <VariableInput v-model="(widgetSettings.cellBackgroundColor as unknown as VariableWrapper<string>)" label="Zellen Hintergrund">
          <template #default="{ value, change }">
            <DColorInput label="Zellen Hintergrund" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="(widgetSettings.cellTextColor as unknown as VariableWrapper<string>)" label="Zellen Textfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Zellen Textfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>
      </div>

      <div class="settings-block">
        <h3>Rahmen</h3>
        <VariableInput v-model="(widgetSettings.borderColor as unknown as VariableWrapper<string>)" label="Rahmenfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Rahmenfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>
      </div>
    </div>
  </section>

  <section class="settings-section" data-section="Dimensionen">
    <div class="settings-container">
      <div class="settings-block">
        <VariableInput v-model="(widgetSettings.defaultColumnWidth as unknown as VariableWrapper<any>)" label="Standard Spaltenbreite (px)">
          <template #default="{ value, change }">
            <DInput
              label="Standard Spaltenbreite (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="50"
              :max="500" />
          </template>
        </VariableInput>
        <VariableInput v-model="(widgetSettings.defaultRowHeight as unknown as VariableWrapper<any>)" label="Standard Zeilenhöhe (px)">
          <template #default="{ value, change }">
            <DInput
              label="Standard Zeilenhöhe (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="20"
              :max="100" />
          </template>
        </VariableInput>
      </div>
    </div>
  </section>

  <section class="settings-section" data-section="Text">
    <div class="settings-container">
      <div class="settings-block">
        <VariableInput v-model="(widgetSettings.fontSize as unknown as VariableWrapper<any>)" label="Schriftgröße (px)">
          <template #default="{ value, change }">
            <DInput
              label="Schriftgröße (px)"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="8"
              :max="32" />
          </template>
        </VariableInput>
        <VariableInput v-model="(widgetSettings.headerFontWeight as unknown as VariableWrapper<any>)" label="Header Font-Weight">
          <template #default="{ value, change }">
            <DInput
              label="Header Font-Weight"
              :model-value="value"
              @update:model-value="change"
              type="number"
              :min="100"
              :max="900"
              :step="100" />
          </template>
        </VariableInput>
        <DSelect
          label="Text-Ausrichtung (Zellen)"
          v-model="widgetSettings.cellTextAlign"
          :options="textAlignOptions" value-key="value" />
      </div>
    </div>
  </section>

  <section class="settings-section" data-section="Zeilen-Level Styles">
    <div class="settings-container">
      <p class="hint-text">
        Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern.
      </p>

      <div class="level-header">
        <span>Level-Konfiguration</span>
        <DButton size="sm" @click="addRowLevelStyle">Level hinzufügen</DButton>
      </div>

      <div
        v-for="(levelStyle, index) in widgetSettings.rowLevelStyles"
        :key="`row_level_${index}`"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Level {{ levelStyle.level }}</strong>
          <DButton size="sm" intent="danger" @click="removeRowLevelStyle(index)">Entfernen</DButton>
        </div>

        <DInput
          label="Level-Nummer"
          v-model.number="levelStyle.level"
          type="number"
          :min="0" />

        <VariableInput v-model="(levelStyle.backgroundColor as unknown as VariableWrapper<string>)" label="Hintergrundfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Hintergrundfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="(levelStyle.textColor as unknown as VariableWrapper<string>)" label="Textfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Textfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <DInput
          label="Font-Weight"
          v-model.number="levelStyle.fontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100" />
      </div>

      <div v-if="!widgetSettings.rowLevelStyles?.length" class="empty-state">
        Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen.
      </div>
    </div>
  </section>

  <section class="settings-section" data-section="Spalten-Level Styles">
    <div class="settings-container">
      <p class="hint-text">
        Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern.
      </p>

      <div class="level-header">
        <span>Level-Konfiguration</span>
        <DButton size="sm" @click="addColumnLevelStyle">Level hinzufügen</DButton>
      </div>

      <div
        v-for="(levelStyle, index) in widgetSettings.columnLevelStyles"
        :key="`col_level_${index}`"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Level {{ levelStyle.level }}</strong>
          <DButton size="sm" intent="danger" @click="removeColumnLevelStyle(index)">Entfernen</DButton>
        </div>

        <DInput
          label="Level-Nummer"
          v-model.number="levelStyle.level"
          type="number"
          :min="0" />

        <VariableInput v-model="(levelStyle.backgroundColor as unknown as VariableWrapper<string>)" label="Hintergrundfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Hintergrundfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <VariableInput v-model="(levelStyle.textColor as unknown as VariableWrapper<string>)" label="Textfarbe">
          <template #default="{ value, change }">
            <DColorInput label="Textfarbe" :model-value="value" @update:model-value="change" />
          </template>
        </VariableInput>

        <DInput
          label="Font-Weight"
          v-model.number="levelStyle.fontWeight"
          type="number"
          :min="100"
          :max="900"
          :step="100" />
      </div>

      <div v-if="!widgetSettings.columnLevelStyles?.length" class="empty-state">
        Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen.
      </div>
    </div>
  </section>

  <section class="settings-section" data-section="Bedingte Formatierung">
    <div class="settings-container">
      <p class="hint-text">
        Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten.
      </p>

      <div class="level-header">
        <span>Formatierungsregeln</span>
        <DButton size="sm" @click="addConditionalFormat">Regel hinzufügen</DButton>
      </div>

      <div
        v-for="(rule, index) in widgetSettings.conditionalFormats"
        :key="rule.id"
        class="level-card"
      >
        <div class="level-card-header">
          <strong>Regel {{ index + 1 }}</strong>
          <DButton size="sm" intent="danger" @click="removeConditionalFormat(index)">Entfernen</DButton>
        </div>

        <DSelect
          label="Bedingungstyp"
          v-model="rule.conditionType"
          :options="conditionTypeOptions" value-key="value" />

        <!-- Numerische Vergleiche -->
        <DInput
          v-if="!needsTextValue(rule.conditionType) && !needsColorScale(rule.conditionType)"
          :label="needsCountValue(rule.conditionType) ? 'Anzahl (N)' : 'Wert'"
          v-model.number="rule.value1"
          type="number" />

        <!-- Zweiter Wert für "zwischen" -->
        <DInput
          v-if="needsSecondValue(rule.conditionType)"
          label="Bis Wert"
          v-model.number="rule.value2"
          type="number" />

        <!-- Text-Eingabe für "enthält" -->
        <DInput
          v-if="needsTextValue(rule.conditionType)"
          label="Text"
          v-model="rule.value1" />

        <!-- Farbskala-Einstellungen -->
        <template v-if="needsColorScale(rule.conditionType)">
          <div class="color-scale-row">
            <VariableInput v-model="(rule.minColor as unknown as VariableWrapper<string>)" label="Min-Farbe">
              <template #default="{ value, change }">
                <DColorInput label="Min-Farbe" :model-value="value" @update:model-value="change" />
              </template>
            </VariableInput>
            <VariableInput v-model="(rule.maxColor as unknown as VariableWrapper<string>)" label="Max-Farbe">
              <template #default="{ value, change }">
                <DColorInput label="Max-Farbe" :model-value="value" @update:model-value="change" />
              </template>
            </VariableInput>
          </div>
        </template>

        <!-- Ergebnis-Farben für alle außer Farbskala -->
        <template v-if="needsResultColors(rule.conditionType)">
          <VariableInput v-model="(rule.backgroundColor as unknown as VariableWrapper<string>)" label="Hintergrundfarbe">
            <template #default="{ value, change }">
              <DColorInput label="Hintergrundfarbe" :model-value="value" @update:model-value="change" />
            </template>
          </VariableInput>
          <VariableInput v-model="(rule.textColor as unknown as VariableWrapper<string>)" label="Textfarbe">
            <template #default="{ value, change }">
              <DColorInput label="Textfarbe" :model-value="value" @update:model-value="change" />
            </template>
          </VariableInput>
          <DInput
            label="Font-Weight"
            v-model.number="rule.fontWeight"
            type="number"
            :min="100"
            :max="900"
            :step="100" />
        </template>

        <DInput
          label="Priorität (niedriger = höher)"
          v-model.number="rule.priority"
          type="number"
          :min="0" />
      </div>

      <div v-if="!widgetSettings.conditionalFormats?.length" class="empty-state">
        Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen.
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
