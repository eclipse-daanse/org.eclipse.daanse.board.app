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
import { codeToHtml } from 'shiki'
import { ref, watch, toRefs } from 'vue';
import { ICodeSettings } from '.';
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';

const props = defineProps<{ config: ICodeSettings, id?: string }>();
const { id: widgetId } = toRefs(props);

const htmlString = ref<string>('');

const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:CodeWidget:click', {
        type: 'widget:CodeWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:CodeWidget:right_click', {
        type: 'widget:CodeWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const renderCode = async () => {
    htmlString.value = await codeToHtml(props.config.code || '', {
        theme: props.config.theme || 'github-light',
        lang: props.config.language || 'typescript',
    });
};

watch(() => props.config.code, async () => {
    await renderCode();
}, { immediate: true });

watch(() => props.config.theme, async () => {
    await renderCode();
}, { immediate: true });

watch(() => props.config.language, async () => {
    await renderCode();
}, { immediate: true });
</script>

<template>
    <div v-html="htmlString" class="code_container" @click="emitClick" @contextmenu.prevent="emitRightClick"></div>
</template>

<style scoped>
.code_container {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.code_container :deep(.shiki) {
    padding: 1rem;
    height: 100%;
    width: 100%;
    overflow: auto;
}
</style>
