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
const { config } = defineProps<{
  config: any;
}>();
</script>

<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaInput v-model="config.url" label="URL" />
</template>
