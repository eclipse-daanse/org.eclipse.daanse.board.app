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
import { inject, ref } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { useVariableRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { TextSettings } from './gen/TextSettings'
import { VariableInput, ComplexTextInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import {
  DButton,
  DIcon,
  DInput,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

const previews = ref({
} as Record<string, boolean>)


const widgetSettings = defineModel<TextSettings>({ required: true })
const variableRepository = inject<VariableRepository>(identifier)!

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

</script>

<template>
  <section class="settings-section" data-section="Text und Formatierung">
    <div class="settings-container">
      <div class="settings-block">
        <ComplexTextInput v-model="widgetSettings.text!">
          <template #default="{ value, change }">
            <DInput
              :modelValue="value"
              @input="change"
              :label="t('textBase:TextWidget.label')"
              placeholder="Enter text with variables..."
              class="w-full"
            />
          </template>
        </ComplexTextInput>
      </div>
      <div class="toolbar">
        <!-- Font Size & Color -->
        <!--
          Size and colour are not here any more: they are typed, so they are
          rendered from model/ui.xmi beside this. What is left is pressed.
        -->
        <!-- Text Format -->
        <div class="toolbar-group">
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.fontWeight!.value === 'bold' }"
            @click="widgetSettings.fontWeight!.value = widgetSettings.fontWeight!.value === 'bold' ? 'normal' : 'bold'"
            title="Bold"
          >
            <DIcon name="format_bold" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.fontStyle!.value === 'italic' }"
            @click="widgetSettings.fontStyle!.value = widgetSettings.fontStyle!.value === 'italic' ? 'normal' : 'italic'"
            title="Italic"
          >
            <DIcon name="format_italic" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.textDecoration!.value === 'underline' }"
            @click="widgetSettings.textDecoration!.value = widgetSettings.textDecoration!.value === 'underline' ? 'None' : 'underline'"
            title="Underline"
          >
            <DIcon name="format_underlined" size="sm" />
          </DButton>
        </div>
        <!-- Horizontal Align -->
        <div class="toolbar-group">
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.horizontalAlign!.value === 'Left' }"
            @click="widgetSettings.horizontalAlign!.value = 'Left'"
            title="Left"
          >
            <DIcon name="format_align_left" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.horizontalAlign!.value === 'Center' }"
            @click="widgetSettings.horizontalAlign!.value = 'Center'"
            title="Center"
          >
            <DIcon name="format_align_center" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.horizontalAlign!.value === 'Right' }"
            @click="widgetSettings.horizontalAlign!.value = 'Right'"
            title="Right"
          >
            <DIcon name="format_align_right" size="sm" />
          </DButton>
        </div>
        <!-- Vertical Align -->
        <div class="toolbar-group">
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.verticalAlign!.value === 'Top' }"
            @click="widgetSettings.verticalAlign!.value = 'Top'"
            title="Top"
          >
            <DIcon name="vertical_align_top" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.verticalAlign!.value === 'Center' }"
            @click="widgetSettings.verticalAlign!.value = 'Center'"
            title="Center"
          >
            <DIcon name="vertical_align_center" size="sm" />
          </DButton>
          <DButton class="toolbar-btn" size="sm" intent="quiet"
            :class="{ 'is-active': widgetSettings.verticalAlign!.value === 'Bottom' }"
            @click="widgetSettings.verticalAlign!.value = 'Bottom'"
            title="Bottom"
          >
            <DIcon name="vertical_align_bottom" size="sm" />
          </DButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}

.settings-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.text-title {
  width: 100%;
}

.text-size {
  width: 100%;
  margin-left: 12px;
}

.text-weight {
  width: 100px;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}

/*
 * The colours come from the theme now rather than being written out, and
 * nothing here has to shout it down with !important: the buttons are the
 * app's own, so there is no third-party palette left to override.
 */
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.5rem;
  background: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
}

.toolbar-group {
  display: flex;
  gap: 2px;
  padding-right: 0.5rem;
  margin-right: 0.25rem;
  border-right: 1px solid var(--color-divider);
}

.toolbar-group:last-child {
  border-right: none;
  padding-right: 0;
  margin-right: 0;
}

.toolbar-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 4px;
}

/* Pressed, not merely hovered: the border is what carries it at a glance */
.is-active {
  background-color: color-mix(in srgb, var(--color-accent) 18%, transparent);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.toolbar-group--inputs {
  align-items: center;
  gap: 0.25rem;
}

.toolbar-input {
  max-width: 70px;
}
</style>
