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
import { computed, watch, onMounted, onUnmounted, ref } from 'vue';
import { DEFAULT_TIMEOUT_SECONDS, XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';
import { DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls';
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const catalogs = ref([] as any[]);

const { config } = defineProps<{
  config: any;
}>();

const { t } = useTranslation('connectionXmla')

/* The stored values stay as they were; only what is shown is translated. */
const securityOptions = computed(() => [
  { uid: 'None', name: t('Xmla.security.none') },
  { uid: 'Basic', name: t('Xmla.security.basic') },
])

onMounted(async () => {
  if (config.url) {
    await fetchCatalogs();
  }
});

let latestRequest = 0;

const fetchCatalogs = async () => {
  const request = ++latestRequest;
  try {
    const result = await XmlaConnection.getCatalogs(config.url, {
      type: config.security,
      user: config.user,
      password: config.password
    });
    // An answer to an older URL or login must not replace a newer one.
    if (request === latestRequest) catalogs.value = result;
  } catch (error) {
    if (request === latestRequest) catalogs.value = [];
    console.warn('Could not list the catalogs', error);
  }
};

/*
 * One request once typing pauses, not one per keystroke in the URL, the
 * user or the password.
 */
let debounce: ReturnType<typeof setTimeout> | undefined;
watch(
  () => [config.url, config.security, config.user, config.password],
  () => {
    clearTimeout(debounce);
    if (!config.url) return;
    debounce = setTimeout(fetchCatalogs, 400);
  },
);

onUnmounted(() => clearTimeout(debounce));
</script>

<template>

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-model="config.url" label="URL" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect
    v-model="config.catalogName"
    :label="t('Xmla.catalog')"
    :options="catalogs"
    label-key="CATALOG_NAME"
    value-key="CATALOG_NAME"
  />

  <DSelect v-model="config.security" :label="t('Xmla.security.label')" :options="securityOptions" />
  <DInput v-if="config.security === 'Basic'" v-model="config.user" :label="t('Xmla.user')" />
  <DInput
    v-if="config.security === 'Basic'"
    v-model="config.password"
    :label="t('Xmla.password')"
    type="password"
  />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-model="config.timeout"
    :label="t('Xmla.timeout')"
    type="number"
    :placeholder="String(DEFAULT_TIMEOUT_SECONDS)"
  />
</template>
