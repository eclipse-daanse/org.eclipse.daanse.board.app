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
import { computed } from 'vue';

const { config, connections } = defineProps<{
    config: any;
    connections: any[];
    dataSources: any[];
}>();

const connectionsFiltered = computed(
    () => connections.filter((c: any) => c.type === 'rest'),
);

const costingOptions = [
    { text: 'Auto', value: 'auto' },
    { text: 'Bicycle', value: 'bicycle' },
    { text: 'Pedestrian', value: 'pedestrian' },
    { text: 'Truck', value: 'truck' },
    { text: 'Bus', value: 'bus' },
    { text: 'Motor Scooter', value: 'motor_scooter' },
    { text: 'Motorcycle', value: 'motorcycle' },
];

const unitOptions = [
    { text: 'Kilometers', value: 'kilometers' },
    { text: 'Miles', value: 'miles' },
];

if (!config.costing) config.costing = 'auto';
if (!config.units) config.units = 'kilometers';
if (!config.language) config.language = 'de-DE';
</script>

<template>
    <VaSelect
        v-model="config.connection"
        label="Valhalla Connection"
        :options="connectionsFiltered"
        text-by="name"
        value-by="uid"
    />
    <VaSelect
        v-model="config.costing"
        label="Default Costing"
        :options="costingOptions"
        text-by="text"
        value-by="value"
    />
    <VaSelect
        v-model="config.units"
        label="Units"
        :options="unitOptions"
        text-by="text"
        value-by="value"
    />
    <VaInput
        v-model="config.language"
        label="Language (e.g. de-DE)"
    />
</template>
