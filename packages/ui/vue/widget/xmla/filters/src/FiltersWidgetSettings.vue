
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
import { ref } from 'vue';

const widgetSettings = defineModel() as any;


widgetSettings.settings = widgetSettings.settings ?? {};
widgetSettings.settings.showRows = widgetSettings.settings?.showRows ?? true;
widgetSettings.settings.showColumns = widgetSettings.settings?.showRows ?? true;
widgetSettings.settings.showFilters = widgetSettings.settings?.showRows ?? true;
const opened = ref(false)
</script>

<template>
  <va-collapse v-model="opened" header="Vanta widget settings" icon="settings">
    <div class="settings-container">
      <VaCheckbox v-model="widgetSettings.settings.showRows" label="Show rows" style="margin: 0.5rem 0;"/>
      <VaCheckbox v-model="widgetSettings.settings.showColumns" label="Show columns" style="margin: 0.5rem 0;"/>
      <VaCheckbox v-model="widgetSettings.settings.showFilters" label="Show filters" style="margin: 0.5rem 0;"/>
    </div>
  </va-collapse>
</template>
<style scoped>
  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
</style>
