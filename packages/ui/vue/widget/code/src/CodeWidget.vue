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
import { ref, watch, toRefs, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { ICodeSettings } from '.';
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { CodeWidgetInterface } from './api/CodeWidgetInterface';

const props = defineProps<{ config: ICodeSettings, id?: string }>();
const { id: widgetId } = toRefs(props);

const htmlString = ref<string>('');

const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER);
const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class CodeWidgetApi extends CodeWidgetInterface {
    setCode(code: string): void {
        if (props.config) (props.config as any).code = code;
    }
    setLanguage(lang: string): void {
        if (props.config) (props.config as any).language = lang;
    }
    refresh(): void {
        // Re-trigger code rendering by forcing a watch cycle
        const current = props.config?.code;
        if (props.config) {
            (props.config as any).code = '';
            nextTick(() => { if (props.config) (props.config as any).code = current; });
        }
    }

    copyContent(): void {
        const text = props.config?.code || '';
        navigator.clipboard?.writeText(text).catch(() => {});
    }
    clearCode(): void {
        if (props.config) (props.config as any).code = '';
    }
}
const api = new CodeWidgetApi();
defineExpose<CodeWidgetInterface>(api);

onMounted(() => { if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'CodeWidget', pageId); });
onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

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

const emitTextChange = (newText: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:CodeWidget:text_change', {
        type: 'widget:CodeWidget:text_change',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, text: newText, timestamp: Date.now() }
    });
};

const renderCode = async () => {
    htmlString.value = await codeToHtml(props.config.code || '', {
        theme: props.config.theme || 'github-light',
        lang: props.config.language || 'typescript',
    });
};

watch(() => props.config.code, async (newVal, oldVal) => {
    if (newVal !== oldVal) {
        emitTextChange(newVal || '');
    }
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
