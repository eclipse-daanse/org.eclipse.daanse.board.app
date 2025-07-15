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
import { ref } from 'vue'

interface IDataTableSettings {
  headerBackground: string;
  trendVisualType: string[];
  statusVisualType: string[];
}

const widgetSettings = defineModel<IDataTableSettings>({ required: true });

const trendVisualTypes = [ 'Emoji', 'Arrow', 'Chart', 'Badge' ];
const statusVisualTypes = [ 'Emoji', 'Lights', 'Badge' ];

const opened = ref(false)
</script>

<template>
  <va-collapse v-model="opened" header="Kpi Table Settings" icon="settings">
    <div class="settings-container">
      <va-color-input
          class="text-color"
          label="Header Color"
          v-model="widgetSettings.headerBackground"
      />
      <va-select
        v-model="widgetSettings.trendVisualType"
        :options="trendVisualTypes"
        placeholder="Trend Visual Type"
      />
      <va-select
        v-model="widgetSettings.statusVisualType"
        :options="statusVisualTypes"
        placeholder="Status Visual Type"
      />
    </div>
  </va-collapse>
</template>
<style scoped>
  .settings-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
</style>
