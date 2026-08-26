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
import {WidgetWrapperSettings} from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import { ref, inject } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.widget'

const emit = defineEmits(['saveWidgetSettings', 'close'])
const widget = defineModel<IWidget>()
const storeSection = ref(false)
const { dataSources } = useDataSourcesStore()

const registeredWidgets = inject<WidgetRepository>(identifier)!
const availableWidgetsSettings = registeredWidgets.getAllWidgets()

const i18n: i18n | undefined = inject('i18n')
const t = (key: string) => (i18n) ? i18n.t(key) : key
</script>

<template>
  <div class="widget_settings_window">
    <div class="settings-header">
      <span class="settings-title">Widget-Einstellungen</span>
      <code class="uid-value" :title="widget?.uid">{{ widget?.uid }}</code>
      <button type="button" class="settings-close" title="Schließen" @click="emit('close')">
        <va-icon name="close" size="16px" />
      </button>
    </div>
    <div class="content" v-if="widget">
      <WidgetWrapperSettings v-model="widget.wrapperConfig" />

      <component
        :is="availableWidgetsSettings[widget.type]?.settingsComponent"
        v-model="widget.config "
        :key="widget.uid"
        :dataSources="dataSources"
      />
      <va-collapse
        v-model="storeSection"
        :header="t('common:Widgets.storeSettingsTitle')"
        icon="store"
      >
        <VaSelect
          label="Store ID"
          class="mx-3 my-3"
          v-model="widget.config.datasourceId"
          :options="dataSources"
          text-by="name"
          value-by="uid"
          teleport=".widget_settings_window"
        />
      </va-collapse>
    </div>
    <div class="buttons">
      <va-button @click="emit('close')">Close</va-button>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 20px;
  padding: 0;
  margin: 0;
}

.content {
  flex-grow: 1;
  overflow: auto;
  width: 100%;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 16px;
}

.widgets_grid {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 1rem;
}

:deep() .widgets_grid-item .va-button__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.settings-header {
  height: var(--spacing-panelHeader, 30px);
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px 0 12px;
  border-bottom: 1px solid var(--color-divider);
}
.settings-title {
  font-size: var(--text-xs, 11px);
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-dim);
  white-space: nowrap;
}
.settings-close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--color-dim);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-xs, 3px);
}
.settings-close:hover {
  color: var(--color-fg);
  background: var(--color-bg);
}
.settings-close:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.uid-value {
  color: var(--color-brand, #795706);
  background-color: #fff3e0;
  border: 1px solid #ffcc80;
  padding: 0.15rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  user-select: all;
}

/* Docked into the inspector panel of the editor (mockup screen 4) - the panel
   owns position and width; this fills it. */
.widget_settings_window {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--color-pane);
  overflow: hidden;
}
</style>
