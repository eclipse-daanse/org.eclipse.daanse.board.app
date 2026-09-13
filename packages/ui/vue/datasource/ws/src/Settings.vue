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
import { DInput, DSelect, DSwitch } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { computed } from 'vue';

const { config, connections } = defineProps<{
  config: any;
  connections: any;
  dataSources: any;
}>();

const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'ws' || c.type === 'mqtt');
});

</script>

<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.connection" label="Verbindung" :options="connectionsFiltered" label-key="name"
    value-key="uid" />
  <DSwitch v-model="config.accumulate" label="Nachrichten sammeln" />
  <DInput v-model="config.topic" label="Thema"/>
</template>
