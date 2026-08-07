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
    <div
      data-testid="widget-panel"
      style="flex: 1; position: relative; border-right: 2px solid #e0e0e0; padding: 16px; overflow-y: auto;"
    >
      <WidgetWrapper :widget="widget" :editEnabled="true" data-testid="test-widget"
        @openSettings="opened = true" @removeWidget="removed = true" />
    </div>

    <div
      data-testid="settings-panel"
      style="width: 450px; background: #f5f5f5; overflow-y: auto; padding: 16px;"
    >
      <h2 style="margin-bottom: 16px; font-size: 18px; color: #333;">
        WidgetWrapper Settings
      </h2>
      <WidgetWrapperSettings v-model="widget.wrapperConfig" data-testid="test-settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WidgetWrapper from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper/src/WidgetWrapper.vue'
import WidgetWrapperSettings from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper/src/WidgetWrapperSettings.vue'

// WidgetWrapper renders whatever widget `widget.type` resolves to via the
// WidgetRepository, rather than taking a config model directly itself.
const widget = ref({
  type: 'SampleWidget',
  editEnabled: true,
  wrapperConfig: {},
  children: [],
  config: {
    datasourceId: ''
  }
})

const opened = ref(false)
const removed = ref(false)

;(window as any).getConfig = () => widget.value
;(window as any).setConfig = (newConfig: any) => {
  widget.value = newConfig
}
;(window as any).getWrapperEvents = () => ({ opened: opened.value, removed: removed.value })
</script>
