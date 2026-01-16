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
import { computed, toRefs, onMounted, ref, watch, getCurrentInstance, onBeforeMount } from 'vue'
import { useDatasourceRepository, VariableComplexStringWrapper, VariableWrapper, WrapperTypes } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { TextSettings } from './gen/TextSettings'
import 'reflect-metadata';

const props = defineProps<{ datasourceId: string; }>();
const { datasourceId } = toRefs(props);
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
    font-size: v-bind(config.fontSize.value + "px");
    color: v-bind(config.fontColor.value);
    text-align: v-bind(config.horizontalAlign.value);
    font-weight: v-bind(config.fontWeight.value);
    font-style: v-bind(config.fontStyle.value);
    text-decoration: v-bind(config.textDecoration.value);
    overflow: hidden;
}
</style>
