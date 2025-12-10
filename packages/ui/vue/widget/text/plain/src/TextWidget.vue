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
import { computed, toRefs, onMounted, ref, watch, getCurrentInstance } from 'vue'
import { useDatasourceRepository, VariableComplexStringWrapper, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"
import { TextSettings } from './gen/TextSettings'


const { wrapParameters } = useVariableRepository();
const props = defineProps<{ datasourceId: string; }>();
const { datasourceId } = toRefs(props);
const config = defineModel<TextSettings>('configv', { required: true});

const defaultConfig = new TextSettings();

// Initialize config with defaults immediately
if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value });
}

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})


const calculatedString = computed(() => {
    console.log(config.value.text.value)
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
</script>

<template>
  <div class="text-container" :style="{
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
    font-size: v-bind((config.fontSize?.value || '12') + "px");
    color: v-bind(config.fontColor?.value || '#000');
    text-align: v-bind(config.horizontalAlign?.value || 'Left');
    font-weight: v-bind(config.fontWeight?.value || 'normal');
    font-style: v-bind(config.fontStyle?.value || 'normal');
    text-decoration: v-bind(config.textDecoration?.value || 'none');
    overflow: hidden;
}
</style>
