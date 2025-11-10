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
    <!-- Left: Maps Widget -->
    <div
      data-testid="widget-panel"
      style="flex: 1; position: relative; border-right: 2px solid #e0e0e0;"
    >
      <MapsWidget :datasourceId="datasourceId" v-model:configv="config" data-testid="maps-widget" />
    </div>

    <!-- Right: Settings -->
    <div
      data-testid="settings-panel"
      style="width: 450px; background: #f5f5f5; overflow-y: auto; padding: 16px;"
    >
      <h2 style="margin-bottom: 16px; font-size: 18px; color: #333;">
        Maps Widget Settings
      </h2>
      <MapsWidgetSettings v-model="config" data-testid="maps-settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MapsWidget from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/MapsWidget.vue'
import MapsWidgetSettings from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/MapsWidgetSettings.vue'

// Dummy datasource ID for standalone mode
const datasourceId = ref('')

const config = ref({
  datasourceId: '',
  datasourceIds: [],
  baseMapUrl: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  zoom: 13,
  center: [50.9275, 11.5892], // Jena, Germany
  attribution: undefined,
  layers: [],
  styles: [],
  OGCSstyles: [],
  services: [],
  fixed: false
})

// Expose for E2E testing
;(window as any).getConfig = () => config.value
;(window as any).setConfig = (newConfig: any) => {
  config.value = newConfig
}
</script>
