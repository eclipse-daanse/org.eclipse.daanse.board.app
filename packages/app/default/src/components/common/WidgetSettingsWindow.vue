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
import { ref, getCurrentInstance } from 'vue'
// import { useI18n } from "vue-i18n";
import { type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import type { Container } from 'inversify'

const emit = defineEmits(['saveWidgetSettings', 'close'])
const widget = defineModel<IWidget>()
const storeSection = ref(false)
const { dataSources } = useDataSourcesStore()

const instance = getCurrentInstance()
const container = instance?.appContext.config.globalProperties.$container as Container

const registeredWidgets = container.get<WidgetRepository>(identifier)
const availableWidgetsSettings = registeredWidgets.getAllWidgets()

// const { t } = useI18n();
const t = (key: string) => {
  return key
}
</script>

<template>
  <div class="widget_settings_window ice z-mx p-6 shadow-sm">
    <h3>Widget Settings</h3>
    <div class="content" v-if="widget">
      <WidgetWrapperSettings v-model="widget.wrapperConfig" />

      <component
        :is="availableWidgetsSettings[widget.type]?.settingsComponent"
        v-model="widget.config "
        :key="widget.uid"
      />
      <va-collapse v-model="storeSection" :header="t('Widgets.storeSettingsTitle')" icon="store">
        <VaSelect
          label="Datasource ID"
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
  padding: 1rem;
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

.widget_settings_window {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  width: 400px;
  right: 20px;
  top: 20px;
  background-color: #ecf0f1;
  padding: 1rem 0;
  border-radius: 8px;
  z-index: 1000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  gap: 16px;
}
</style>
