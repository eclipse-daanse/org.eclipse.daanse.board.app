<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';
import mermaid from 'mermaid';
import { IMermaidWidgetSettings } from '.';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"

const { wrapParameters } = useVariableRepository();

const props = defineProps<{ config: IMermaidWidgetSettings }>();

const container = ref<HTMLDivElement | null>(null);
const timestamp = ref(Date.now());

const {
    value,
    theme,
} = wrapParameters({
    value: props.config.value,
    theme: props.config.theme,
});

watch(() => theme, async (newTheme: any) => {
    mermaid.initialize({
        theme: newTheme,
    });

    timestamp.value = Date.now();
    await nextTick();
    try {
        await mermaid.run({
            nodes: container.value ? [container.value] : [],
        })
    } catch (error) {
        // Ignore as it's expected to throw an error if the value is not valid mermaid code
    }
}, { immediate: true });

watch(() => value, async () => {
    timestamp.value = Date.now();

    await nextTick();
    try {
        await mermaid.run({
            nodes: container.value ? [container.value] : [],
        });
    } catch (error) {
        // Ignore as it's expected to throw an error if the value is not valid mermaid code
    }
}, { deep: true, immediate: true });
</script>

<template>
    <div ref="container" :key="timestamp">
        {{ value }}
    </div>
</template>

<style scoped>
</style>
