<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { computed } from 'vue';



const { config, connections } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();


const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'rest');
});

</script>

<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.connection" label="Connection1" :options="connectionsFiltered" text-by="name"
    value-by="uid" />

</template>
