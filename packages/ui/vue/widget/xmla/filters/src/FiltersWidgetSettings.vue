
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
import { DCheckbox } from 'org.eclipse.daanse.board.app.ui.vue.controls';

const widgetSettings = defineModel() as any;


widgetSettings.settings = widgetSettings.settings ?? {};
widgetSettings.settings.showRows = widgetSettings.settings?.showRows ?? true;
widgetSettings.settings.showColumns = widgetSettings.settings?.showRows ?? true;
widgetSettings.settings.showFilters = widgetSettings.settings?.showRows ?? true;
</script>

<template>
  <section class="settings-section" data-section="Vanta widget settings">
    <div class="settings-container">
      <DCheckbox v-model="widgetSettings.settings.showRows" label="Show rows" />
      <DCheckbox v-model="widgetSettings.settings.showColumns" label="Show columns" />
      <DCheckbox v-model="widgetSettings.settings.showFilters" label="Show filters" />
    </div>
  </section>
</template>
<style scoped>
  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
</style>
