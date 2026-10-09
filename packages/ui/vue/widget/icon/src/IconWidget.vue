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
import { inject } from 'vue'
import { plainSettings } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { computed, onMounted, toRefs } from "vue";
import { useVariableRepository, VariableWrapper } from "org.eclipse.daanse.board.app.ui.vue.composables"
import type { IconSettings } from './gen/IconSettings'
import { IconSettingsImpl } from './gen/IconSettingsImpl'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'

const props = defineProps<{ id?: string }>();
const { id: widgetId } = toRefs(props);

const { wrapParameters } = useVariableRepository();

const config = defineModel<IconSettings>('configv', { required: true });

const defaultConfig = new IconSettingsImpl();

// Get EventBus
const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;

onMounted(() => {
    if (config.value) {
        /* Read by the model's names: spreading a generated instance gives
         * the private fields the getters sit in, not the features. */
        Object.assign(config.value, {
            ...plainSettings(defaultConfig),
            ...plainSettings(config.value),
        });

        /*
         * A board saved before iconColor was a wrapper holds the colour
         * itself, or a plain object that only looks like one. The model
         * says wrapper now, so what is stored is carried into a real one
         * rather than trusted - a plain string here reaches v-bind as a
         * wrapper object and paints nothing.
         */
        const current: unknown = config.value.iconColor;
        if (!(current instanceof VariableWrapper)) {
            if (typeof current === 'object' && current !== null && 'value' in current) {
                const held = current as { value?: string; variable?: string };
                const v = new VariableWrapper(held.value);
                if (held.variable) v.variable = held.variable;
                config.value.iconColor = v;
            } else {
                config.value.iconColor = new VariableWrapper(
                    typeof current === 'string' && current ? current : 'var(--color-fg)',
                );
            }
        }
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

// Emit right-click event
const handleRightClick = () => {
    if (!widgetId.value) return;

    const payload = {
        iconName: config.value?.currentIcon || '',
        widgetId: widgetId.value,
        timestamp: Date.now()
    };

    console.log('🖱️ Icon Widget: Emitting right-click event', payload);
    eventBus.emit('widget:IconWidget:right_click', {
        type: 'widget:IconWidget:right_click',
        widgetId: widgetId.value,
        payload
    });
};

const {
    iconColor,
    iconSize,
} = wrapParameters({
    iconColor: computed(() => (config.value.iconColor as any)?.value || 'var(--color-fg)'),
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
    <div class="icon" @click="handleClick" @contextmenu.prevent="handleRightClick" style="cursor: pointer;">
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
