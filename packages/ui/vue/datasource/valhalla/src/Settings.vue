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
import { DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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
    <DSelect
        v-model="config.connection"
        label="Valhalla-Verbindung"
        :options="connectionsFiltered"
        label-key="name"
        value-key="uid"
    />
    <DSelect
        v-model="config.costing"
        label="Standard-Fortbewegung"
        :options="costingOptions"
        label-key="text"
        value-key="value"
    />
    <DSelect
        v-model="config.units"
        label="Einheiten"
        :options="unitOptions"
        label-key="text"
        value-key="value"
    />
    <DInput
        v-model="config.language"
        label="Language (e.g. de-DE)"
    />
</template>
