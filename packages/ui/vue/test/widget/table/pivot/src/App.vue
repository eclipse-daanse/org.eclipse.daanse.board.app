<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<template>
  <div style="width: 100vw; height: 100vh; display: flex;">
    <!-- Left: Widget -->
    <div
      data-testid="widget-panel"
      style="flex: 1; position: relative; border-right: 2px solid #e0e0e0; padding: 16px; overflow-y: auto;"
    >
      <PivotTableWidget :datasourceId="datasourceId" v-model:configv="config" data-testid="test-widget" />
    </div>

    <!-- Right: Settings -->
    <div
      data-testid="settings-panel"
      style="width: 450px; background: #f5f5f5; overflow-y: auto; padding: 16px;"
    >
      <h2 style="margin-bottom: 16px; font-size: 18px; color: #333;">
        PivotTableWidget Settings
      </h2>
      <PivotTableWidgetSettings v-model="config" data-testid="test-settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PivotTableWidget from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/PivotTableWidget.vue'
import PivotTableWidgetSettings from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/PivotTableWidgetSettings.vue'

const datasourceId = ref('')

const config = ref({
  datasourceId: '',
  value: 'mocked-value',
  imagesSettings: { fit: 'none' },
  images: [],
  columns: [],
  rows: [],
  fields: [],
  conditions: [],
  style: {},
  videoFitSettings: { fit: 'Cover' },
  videoUrl: 'http://example.com/video.mp4',
  fontWeight: { value: 'normal' },
  fontStyle: { value: 'normal' },
  textDecoration: { value: 'none' },
  horizontalAlign: { value: 'left' },
  verticalAlign: { value: 'top' },
  text: 'mocked-text',
  fontSize: '14px',
  fontColor: '#000000',
  activeItemStyles: { fill: { value: '#ff0000' }, stroke: { value: '#000000' } },
  defaultItemStyles: { fill: { value: '#cccccc' }, stroke: { value: '#333333' } },
  settings: {
    showRows: true,
    showColumns: true,
    showFilters: true,
    imagesSettings: { fit: 'none' },
    images: [],
    columns: [],
    rows: [],
    fields: [],
    conditions: [],
    style: {}
  }
})

// Expose for E2E testing
;(window as any).getConfig = () => config.value
;(window as any).setConfig = (newConfig: any) => {
  config.value = newConfig
}
</script>
