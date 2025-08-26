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
import { useDatasourceRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import type { ITextSettings } from "./index";
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"
import { TextSettings } from './gen/TextSettings'


const { wrapParameters } = useVariableRepository();
const props = defineProps<{ datasourceId: string; }>();
const { datasourceId } = toRefs(props);
const config = defineModel<TextSettings>('configv', { required: true});
const defaultConfig: ITextSettings = {
  text: new VariableWrapper<string>(""),
  fontSize: new VariableWrapper<number>(12),
  fontColor: new VariableWrapper<string>("#000"),
  fontWeight: new VariableWrapper<string>("normal"),
  fontStyle: new VariableWrapper<string>("normal"),
  textDecoration: new VariableWrapper<string>("none"),
  horizontalAlign: new VariableWrapper<string>("Left"),
  verticalAlign: new VariableWrapper<string>("Top"),
};

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);




watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

type ConfigKeys = keyof ITextSettings;
if(!config.value.text){
  for (const key of Object.keys(defaultConfig) as ConfigKeys[]) {
    const defaultVal = defaultConfig[key];
    const currentVal = config.value[key];

    if (currentVal === undefined || currentVal === null) {
      // TypeScript hilft hier nicht automatisch → expliziter Cast nötig
      (config.value[key] as typeof defaultVal) = defaultVal;
    }
  }
}

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
            config.verticalAlign.value === 'Top'
                ? 'flex-start'
                : config.verticalAlign.value === 'Center'
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
    font-size: v-bind(fontSize + "px");
    color: v-bind(config.fontColor.value);
    text-align: v-bind(config.horizontalAlign.value);
    font-weight: v-bind(config.fontWeight.value);
    font-style: v-bind(config.fontStyle.value);
    text-decoration: v-bind(config.textDecoration.value);
    overflow: hidden;
}
</style>
