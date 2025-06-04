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

const props = defineProps<{ config: IMermaidWidgetSettings }>();

const container = ref<HTMLDivElement | null>(null);
const timestamp = ref(Date.now());

watch(() => props.config.theme, async (newTheme: any) => {
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

watch(() => props.config.value, async (newValue) => {
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
        {{ props.config.value }}
    </div>
</template>

<style scoped>
</style>
