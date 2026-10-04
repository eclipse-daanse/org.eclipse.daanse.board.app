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
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { debounce } from 'lodash';

const { config, connections } = defineProps<{
    config: any;
    connections: any[];
    dataSources: any[];
}>();

const tempResourceUrl = ref(config.resourceUrl);
const innerInterval = ref(config.pollingInterval ?? 5000);
const available = ref(false);
const response = reactive<{
    code: number | null;
    statusText: string;
}>({
    code: null,
    statusText: '',
});

const connection = computed(() => connections.find((e) => config.connection === e.uid));
const fullUrl = computed(() => connection.value ? `${connection.value?.config?.url}${tempResourceUrl.value}` : '');
const connectionsFiltered = computed(() => connections.filter((c: any) => c.type === 'rest'));

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
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DSelect v-model="config.connection" label="Verbindung" :options="connectionsFiltered" label-key="name"
        value-key="uid" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DInput v-model="tempResourceUrl" label="Pfad"
        :rules="[() => !tempResourceUrl || available || `Invalid resource URL`]" />
    <DInput v-model="config.selectedJSONValue" label="Ausgewählter Wert" />
    <DSwitch class="m-2" v-model="config.pollingEnabled" label="Regelmäßig neu laden" />
    <DInput v-if="config.pollingEnabled" v-model="innerInterval" label="Abstand (ms)" />
</template>
