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
import { computed, nextTick, onMounted, ref, watch, toRefs } from 'vue'
import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import mermaid from 'mermaid';
import { IMermaidWidgetSettings } from '.';
import {  VariableWrapper,VariableComplexStringWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { MermaidWidgetSettings } from './gen/MermaidWidgetSettings'


const config = defineModel<MermaidWidgetSettings>('configv', { required: true});
const props = defineProps<{ id?: string }>();
const { id: widgetId } = toRefs(props);

const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:MermaidWidget:click', {
        type: 'widget:MermaidWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:MermaidWidget:right_click', {
        type: 'widget:MermaidWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

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
    <div ref="container" :key="timestamp" @click="emitClick" @contextmenu.prevent="emitRightClick" class="w-full h-full">
        {{ config.value }}
    </div>
</template>

<style scoped>
</style>
