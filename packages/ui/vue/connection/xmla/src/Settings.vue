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
import { watch, onMounted, ref } from 'vue';
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';

const catalogs = ref([] as any[]);

const { config } = defineProps<{
  config: any;
}>();

onMounted(async () => {
  if (config.url) {
    await fetchCatalogs();
  }
});

const fetchCatalogs = async () => {
  console.log('Fetching catalogs for URL', config.url, 'with security', config.security);
  catalogs.value = await XmlaConnection.getCatalogs(config.url, {
    type: config.security,
    user: config.user,
    password: config.password
  });
};


watch(async () => config.url, async () => {
  await fetchCatalogs();
});

watch(async () => config.security, async () => {
  await fetchCatalogs();
});

watch(async () => config.user, async () => {
  await fetchCatalogs();
});

watch(async () => config.password, async () => {
  await fetchCatalogs();
});
</script>

<template>

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaInput v-model="config.url" label="URL" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.catalogName" label="Catalog" :options="catalogs" text-by="CATALOG_NAME"
    value-by="CATALOG_NAME" />

  <VaSelect v-model="config.security" label="Security" :options="['None', 'Basic']" />
  <VaInput v-if="config.security === 'Basic'" v-model="config.user" label="User" />
  <VaInput v-if="config.security === 'Basic'" type="password" v-model="config.password" label="Password" />
</template>
