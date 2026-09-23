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
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { config, connections } = defineProps<{
    config: any;
    connections: any[];
    dataSources: any[];
}>();

const { t } = useTranslation('datasourceValhalla')

const connectionsFiltered = computed(
    () => connections.filter((c: any) => c.type === 'rest'),
);

const costingOptions = computed(() =>
    ['auto', 'bicycle', 'pedestrian', 'truck', 'bus', 'motor_scooter', 'motorcycle'].map((value) => ({
        text: t(`Valhalla.costing.${value}`),
        value,
    })),
);

const unitOptions = computed(() => [
    { text: t('Valhalla.units.kilometers'), value: 'kilometers' },
    { text: t('Valhalla.units.miles'), value: 'miles' },
]);

if (!config.costing) config.costing = 'auto';
if (!config.units) config.units = 'kilometers';
if (!config.language) config.language = 'de-DE';
</script>

<template>
    <DSelect
        v-model="config.connection"
        :label="t('Valhalla.connection')"
        :options="connectionsFiltered"
        label-key="name"
        value-key="uid"
    />
    <DSelect
        v-model="config.costing"
        :label="t('Valhalla.defaultCosting')"
        :options="costingOptions"
        label-key="text"
        value-key="value"
    />
    <DSelect
        v-model="config.units"
        :label="t('Valhalla.units.label')"
        :options="unitOptions"
        label-key="text"
        value-key="value"
    />
    <DInput
        v-model="config.language"
        :label="t('Valhalla.language')"
    />
</template>
