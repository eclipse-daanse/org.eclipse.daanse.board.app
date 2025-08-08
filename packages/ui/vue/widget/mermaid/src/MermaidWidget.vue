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
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import mermaid from 'mermaid';
import { IMermaidWidgetSettings } from '.';
import {  VariableWrapper,VariableComplexStringWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { MermaidWidgetSettings } from './gen/MermaidWidgetSettings'


const config = defineModel<MermaidWidgetSettings>('configv', { required: true});

const container = ref<HTMLDivElement | null>(null);
const timestamp = ref(Date.now());
const defaultConfig = new MermaidWidgetSettings();

onMounted(() => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })
  }
})



watch(() => config.value.theme, async (newTheme: any) => {
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

watch(() => config.value.value, async (val) => {
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
        {{ config.value }}
    </div>
</template>

<style scoped>
</style>
