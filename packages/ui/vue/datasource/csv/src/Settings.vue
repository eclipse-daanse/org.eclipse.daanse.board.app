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
import { debounce } from 'lodash';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { DInput, DSelect, DSwitch } from 'org.eclipse.daanse.board.app.ui.vue.controls';

const { config, connections } = defineProps<{
    config: any;
    dataSources: any;
    connections: any;
}>();

const tempResourceUrl = ref(config.resourceUrl);
const innerInterval = ref(config.pollingInterval ?? 5000);
const available = ref(false);

/*
 * The separators the file may use, as data. They were five object
 * literals inside the template, one of them carrying an escaped tab
 * through two levels of quoting.
 */
/**
 * What the endpoint said, when it said no.
 *
 * The old message was "Invalid resource URL", which the path is not: it is
 * a path, and it is joined to the connection's address before anything is
 * fetched. What can be wrong is the answer, so that is what this reports.
 */
const urlError = computed(() => {
  if (!tempResourceUrl.value || available.value) return undefined
  if (response.code) return `${response.code} ${response.statusText}`.trim()
  return 'Nicht erreichbar'
})

const separatorOptions = [
  { label: 'Komma (,)', value: ',' },
  { label: 'Semikolon (;)', value: ';' },
  { label: 'Tabulator', value: '\t' },
  { label: 'Senkrechter Strich (|)', value: '|' },
  { label: 'Doppelpunkt (:)', value: ':' },
]
const response = reactive<{
    code: number | null;
    statusText: string;
}>({
    code: null,
    statusText: '',
});

const connection = computed(() => connections.find((e: any) => config.connection === e.uid));
const fullUrl = computed(() => connection.value ? `${connection.value?.config?.url}${tempResourceUrl.value}` : '');
const connectionsFiltered = computed(() => {
    return connections.filter((c: any) => c.type === 'rest');
});

const checkUrl = async (url: string) => {
    try {
        const fetchResponse = await fetch(url, { method: "HEAD" });
        response.code = fetchResponse.status;
        response.statusText = fetchResponse.statusText;

        if (!fetchResponse.ok) {
            console.warn("Invalid resource URL");
            return { available: false };
        }
        return { available: true };
    } catch (error: any) {
        console.warn("Invalid resource URL", error.name);
        return { available: false }
    }
};

const updateResourceUrl = debounce(async (newUrl: string) => {
    if (!newUrl) {
        available.value = false;
        return;
    }

    if (config.resourceUrl !== newUrl) {
        config.resourceUrl = newUrl;
        config.selectedJSONValue = '';
    }

    const resp = await checkUrl(fullUrl.value);
    available.value = resp.available;
}, 700);

const intervalDebounce = debounce((interval: string) => {
    if (!interval) return;
    const parsedInterval = parseInt(interval);
    config.pollingInterval = parsedInterval;
}, 700);

watch(() => innerInterval.value, (nv) => {
    if (!nv || isNaN(parseInt(nv))) {
        innerInterval.value = "5000";
    }
    intervalDebounce(nv);
});

watch([tempResourceUrl, connection], ([newTempUrl, newConnection]) => {
    if (newTempUrl && newConnection) {
        updateResourceUrl(newTempUrl);
    }
}, { immediate: true });

onMounted(async () => {
    if (fullUrl.value) {
        const resp = await checkUrl(fullUrl.value);
        available.value = resp.available;
    }
});
</script>

<template>
  <div class="settings">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DSelect v-model="config.connection" label="Verbindung" :options="connectionsFiltered" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DInput
      v-model="tempResourceUrl"
      label="Pfad"
      :error="urlError"
      hint="Relativ zur Adresse der Verbindung."
    />

    <DSelect
      v-model="config.separators"
      label="Trennzeichen"
      :options="separatorOptions"
      label-key="label"
      value-key="value"
    />

    <DInput
      v-model.number="config.skipRowsFromStart"
      type="number"
      label="Zeilen oben überspringen"
      :min="0"
      placeholder="0"
    />

    <DInput
      v-model.number="config.skipRowsFromEnd"
      type="number"
      label="Zeilen unten überspringen"
      :min="0"
      placeholder="0"
    />

    <DSwitch v-model="config.pollingEnabled" label="Regelmäßig neu laden" />

    <DInput
      v-if="config.pollingEnabled"
      v-model="innerInterval"
      label="Abstand"
      type="number"
      suffix="ms"
    />
  </div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
