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
import { nextTick, onMounted, onUnmounted, ref, watch, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { MarkdownWidgetInterface } from './api/MarkdownWidgetInterface';
import "easymde/dist/easymde.min.css";
import "github-markdown-css/github-markdown.css";
// @ts-ignore
import EasyMDE from 'easymde';
import { MarkdownWidgetSettings } from './gen/MarkdownWidgetSettings'

const config = defineModel<MarkdownWidgetSettings>('configv', { required: true});
const props = defineProps<{ id?: string }>();
const { id: widgetId } = toRefs(props);

const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);
const actionsRegistry = coreContainer.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

const wrapperRef = ref<HTMLDivElement | null>(null);

class MarkdownWidgetApi extends MarkdownWidgetInterface {
    refresh(): void {
        // Re-render the markdown by bumping easyMDE value
        if (easyMDE) {
            const current = config.value?.value || '';
            easyMDE.value('');
            easyMDE.value(current);
        }
    }
    copyContent(): void {
        const text = config.value?.value || '';
        navigator.clipboard?.writeText(text).catch(() => {});
    }
    scrollToTop(): void {
        if (wrapperRef.value) {
            const preview = wrapperRef.value.querySelector('.editor-preview');
            if (preview) {
                preview.scrollTop = 0;
            } else {
                wrapperRef.value.scrollTop = 0;
            }
        }
    }
    scrollToHash(hashId: string): void {
        if (wrapperRef.value) {
            const target = wrapperRef.value.querySelector(`#${hashId}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
const api = new MarkdownWidgetApi();
defineExpose<MarkdownWidgetInterface>(api);

onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:MarkdownWidget:click', {
        type: 'widget:MarkdownWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:MarkdownWidget:right_click', {
        type: 'widget:MarkdownWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitTextChange = (newText: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:MarkdownWidget:text_change', {
        type: 'widget:MarkdownWidget:text_change',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, text: newText, timestamp: Date.now() }
    });
};

const container = ref<HTMLDivElement | null>(null);
let easyMDE: EasyMDE | null = null;

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'MarkdownWidget', pageId);

    easyMDE = new EasyMDE({
        toolbar: false,
        element: container.value as HTMLDivElement,
        status: false,
        previewClass: 'markdown-body',
    })

    easyMDE.value(config.value?.value || '');

    // @ts-ignore
    easyMDE.togglePreview();
})

watch(() => config.value?.value, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        emitTextChange(newValue || '');
    }
    if (container.value) {
        easyMDE?.value(newValue || '');
    }
}, { immediate: true });
</script>

<template>
    <div class="markdown-wrapper" @click="emitClick" @contextmenu.prevent="emitRightClick" ref="wrapperRef">
        <textarea ref="container">
            {{ config.value }}
        </textarea>
    </div>
</template>

<style scoped>
:global(.CodeMirror) {
    height: 100% !important;
    width: 100%;
}

:global(.EasyMDEContainer) {
    height: 100%;
    width: 100%;
}

.markdown-wrapper {
    width: 100%;
    height: 100%;
}
</style>
