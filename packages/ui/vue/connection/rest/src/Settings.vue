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
import { computed, onMounted, ref, watch } from 'vue';
import { debounce } from 'lodash';

const { config } = defineProps<{
  config: any;
}>();

const available = ref(false);
const url = ref(config.url);
const isUrlValid = ref(true);
const statusCode = ref<string | null>(null);

const statusCircleClass = computed(() => {
  if (!url.value) return 'bg-gray-400';
  return available.value ? 'bg-green-500' : 'bg-red-500';
});

const statusTextClass = computed(() => {
  if (!url.value) return 'text-gray-500';
  if (!statusCode.value) return 'text-black';
  return statusCode.value.toString()[0] === '2' ? 'text-green-500' : 'text-red-500';
});

const updateUrl = debounce((newUrl: string) => {
  config.url = newUrl;
  validateAndCheckUrl(newUrl);
}, 700);

function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
};

async function ifUrlExist(url: string) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { available: response.ok, statusCode: response.status.toString() };
  } catch (error: any) {
    console.warn('Network error:', error.name);
    return { available: false, statusCode: 'Error' };
  }
};

async function validateAndCheckUrl(newUrl: string) {
  if (!isValidUrl(newUrl)) {
    available.value = false;
    statusCode.value = null;
    return;
  }

  isUrlValid.value = true;
  const result = await ifUrlExist(newUrl);
  available.value = result.available;
  statusCode.value = result.statusCode;
}

watch(url, (newUrl) =>  {
  if (newUrl !== config.url) {
    updateUrl(newUrl);
  }
});

onMounted(async () => {
  if (config.url) {
    url.value = config.url;
    const resp = await ifUrlExist(config.url);
    available.value = resp.available;
    statusCode.value = resp.statusCode;
  }
});
</script>

<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaInput v-model="url" label="URL" :rules="[() => !url || isUrlValid || `Invalid URL`]" />

  <div v-if="isUrlValid && url" class="ml-2 flex items-center space-x-2">
    <div :class="`w-3 h-3 rounded-full ${statusCircleClass}`"></div>
    <span class="text-sm font-medium" :class="statusTextClass">Status: {{ statusCode  }}</span>
  </div>
</template>

