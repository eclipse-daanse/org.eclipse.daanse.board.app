/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { createApp, ref } from 'vue'
import MapsWidget from '../src/MapsWidget.vue'
import MapsWidgetSettings from '../src/MapsWidgetSettings.vue'
import 'leaflet/dist/leaflet.css'

const app = createApp({
  components: {
    MapsWidget,
    MapsWidgetSettings
  },
  setup() {
    const config = ref({
      center: [50.9275, 11.5892], // Jena
      zoom: 13,
      services: [],
      layers: [],
      datapoints: [],
      markers: [],
      styles: []
    })

    const showSettings = ref(false)

    const toggleSettings = () => {
      showSettings.value = !showSettings.value
    }

    // Expose for testing
    ;(window as any).getConfig = () => config.value
    ;(window as any).toggleSettings = toggleSettings
    ;(window as any).openSettings = () => { showSettings.value = true }
    ;(window as any).closeSettings = () => { showSettings.value = false }

    return {
      config,
      showSettings,
      toggleSettings
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh; display: flex; flex-direction: column;">
      <div style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #ddd; display: flex; gap: 10px;">
        <button
          @click="toggleSettings"
          data-testid="toggle-settings"
          style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          {{ showSettings ? 'Settings schließen' : 'Settings öffnen' }}
        </button>
      </div>
      <div style="flex: 1; position: relative; display: flex;">
        <div style="flex: 1; position: relative;">
          <MapsWidget :config="config" data-testid="maps-widget" />
        </div>
        <div
          v-if="showSettings"
          data-testid="settings-panel"
          style="width: 400px; background: white; border-left: 1px solid #ddd; overflow-y: auto; padding: 10px;"
        >
          <MapsWidgetSettings :config="config" />
        </div>
      </div>
    </div>
  `
})

app.mount('#app')
