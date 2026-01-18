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
import { computed, onMounted, toRefs } from "vue";
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"
import { IconSettings } from './gen/IconSettings'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'

const props = defineProps<{ id: string }>();
const { id: widgetId } = toRefs(props);

const { wrapParameters } = useVariableRepository();

const config = defineModel<IconSettings>('configv', { required: true });

const defaultConfig = new IconSettings();

// Get EventBus
const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER);

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }
});

// Emit click event
const handleClick = () => {
    if (!widgetId.value) return;

    const payload = {
        iconName: config.value?.currentIcon || '',
        widgetId: widgetId.value,
        timestamp: Date.now()
    };

    console.log('🖱️ Icon Widget: Emitting click event', payload);
    eventBus.emit('widget:IconWidget:click', {
        type: 'widget:IconWidget:click',
        widgetId: widgetId.value,
        payload
    });
};

const {
    iconColor,
    iconSize,
} = wrapParameters({
    iconColor: computed(() => config.value.iconColor),
    iconSize: computed(() => config.value.iconSize),
});

const iconStyle = computed(() => {
    if (!config.value) return;
    return `
        font-variation-settings:
            'FILL' ${config.value.isIconFilled ? 1 : 0},
            'wght' ${config.value.strokeWeight},
            'GRAD' ${config.value.grade},
            'opsz' ${config.value.opticSize};
        `;
});
</script>

<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet" />
    <div class="icon" @click="handleClick" style="cursor: pointer;">
        <span v-bind="$attrs" :style="iconStyle" class="material-symbols-outlined">
            {{ config.currentIcon }}
        </span>
    </div>
</template>

<style scoped>
.icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.material-symbols-outlined {
    font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: v-bind(iconSize + "px");
    color: v-bind(iconColor);
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
}
</style>
