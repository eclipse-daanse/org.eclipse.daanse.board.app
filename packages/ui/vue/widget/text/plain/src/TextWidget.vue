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
import { computed, toRefs, onMounted, onUnmounted, ref, watch, getCurrentInstance, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useDatasourceRepository, VariableComplexStringWrapper, VariableWrapper, WrapperTypes } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { TextSettings } from './gen/TextSettings'
import 'reflect-metadata';

const props = defineProps<{ datasourceId: string; id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { TextWidgetInterface } from './api/TextWidgetInterface';

const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);
const actionsRegistry = coreContainer.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class TextWidgetApi extends TextWidgetInterface {
    clearContent(): void {
        if (config.value?.text) config.value.text.value = '';
    }
    copyContent(): void {
        const text = calculatedString.value || '';
        navigator.clipboard?.writeText(text).catch(() => {});
    }
}
const api = new TextWidgetApi();
defineExpose<TextWidgetInterface>(api);

onMounted(() => { if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'TextWidget', pageId); });
onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:TextWidget:click', {
        type: 'widget:TextWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:TextWidget:right_click', {
        type: 'widget:TextWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitTextChange = (newText: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:TextWidget:text_change', {
        type: 'widget:TextWidget:text_change',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, text: newText, timestamp: Date.now() }
    });
};
const config = defineModel<TextSettings>('configv', { required: true});

// TODO: Should be moved somewhere central
const defaultConfig = {
  text: "Some text",
  fontSize: 12,
  fontColor: "#000",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  horizontalAlign: "Left",
  verticalAlign: "Top",
}

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);

Object.keys(defaultConfig).forEach((key) => {
  if (config.value[key as keyof TextSettings] === undefined || config.value[key as keyof TextSettings] === null) {
    const refTypeName = Reflect.getMetadata("Reference", TextSettings.prototype, key);
    const Constructor = WrapperTypes[refTypeName as keyof typeof WrapperTypes];
    const defaultValue = defaultConfig[key as keyof typeof defaultConfig];
    (config.value as any)[key] = new Constructor(defaultValue as string);
  }
});

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})


const calculatedString = computed(() => {
    if (!config.value.text.value) {
        return "";
    }


    const { parts } = helpers.widget.extractValuesAndFullObject(config.value.text.value);
    let result = "";

    for (const part of parts) {
        if (part.path || part.path === null) {
            const value = helpers.widget.getValueByPath(data.value, part.path);
            result += value !== undefined ? JSON.stringify(value) : part.text;
        } else {
            result += part.text;
        }
    }

    return result;
})
const fontSizeStyle = computed(() => { return (config.value?.fontSize?.value || 12) + "px"; });

watch(calculatedString, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        emitTextChange(newVal);
    }
});
</script>

<template>
  <div class="text-container" @click="emitClick" @contextmenu.prevent="emitRightClick" :style="{
        'justify-content':
            config.verticalAlign?.value === 'Top'
                ? 'flex-start'
                : config.verticalAlign?.value === 'Center'
                    ? 'center'
                    : 'flex-end',
    }">
        <div class="component">
            {{ calculatedString }}
        </div>
    </div>
</template>

<style scoped>
.text-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    align-items: stretch;
}

.component {
    font-size: v-bind('fontSizeStyle');
    color: v-bind('config.fontColor.value');
    text-align: v-bind('config.horizontalAlign.value');
    font-weight: v-bind('config.fontWeight.value');
    font-style: v-bind('config.fontStyle.value');
    text-decoration: v-bind('config.textDecoration.value');
    overflow: hidden;
}
</style>
