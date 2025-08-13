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
import { ref, inject } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

interface IKpiTableSettings {
  headerBackground: string;
  trendVisualType: string[];
  statusVisualType: string[];
  showParentChild: boolean;
  showFolders: boolean;
}

const widgetSettings = defineModel<IKpiTableSettings>({ required: true });

const trendVisualTypes = [ 'Emoji', 'Arrow', 'Chart', 'Badge' ];
const statusVisualTypes = [ 'Emoji', 'Lights', 'Badge' ];

const opened = ref(false)
</script>

<template>
  <va-collapse v-model="opened" header="Kpi Table Settings" icon="settings">
    <div class="settings-container">
      <va-color-input class="text-color" label="Header Color" v-model="widgetSettings.headerBackground" />
      <va-select v-model="widgetSettings.trendVisualType" :options="trendVisualTypes" placeholder="Trend Visual Type" />
      <va-select v-model="widgetSettings.statusVisualType" :options="statusVisualTypes"
        placeholder="Status Visual Type" />
      <va-checkbox v-model="widgetSettings.showFolders" :label="t('Show Folders')" />
      <va-checkbox v-model="widgetSettings.showParentChild" :label="t('Show Parent-Child')" />
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
