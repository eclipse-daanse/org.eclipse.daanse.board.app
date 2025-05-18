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
import { computed, toRefs, onMounted, ref, watch } from "vue";
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import type { ITextSettings } from "./index";

const props = defineProps<{ datasourceId: string; config: ITextSettings }>();
const { datasourceId, config } = toRefs(props);

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

const calculatedString = computed(() => {
    if (!config.value.text) {
        return "";
    }

    const { parts } = helpers.widget.extractValuesAndFullObject(config.value.text);
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


const defaultConfig: ITextSettings = {
    text: "",
    fontSize: 12,
    fontColor: "#000",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    horizontalAlign: "Left",
    verticalAlign: "Top",
};

onMounted(async () => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }
});

const fontSize = computed(() => {
    return config.value.fontSize;
});

const fontColor = computed(() => {
    return config.value.fontColor;
});

const horizontalAlign = computed(() => {
    return config.value.horizontalAlign;
});

const fontWeight = computed(() => {
    return config.value.fontWeight;
});

const fontStyle = computed(() => {
    return config.value.fontStyle;
});

const textDecoration = computed(() => {
    return config.value.textDecoration;
});
</script>

<template>
    <div class="text-container" :style="{
        'justify-content':
            config.verticalAlign === 'Top'
                ? 'flex-start'
                : config.verticalAlign === 'Center'
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
    color: v-bind(fontColor);
    text-align: v-bind(horizontalAlign);
    font-weight: v-bind(fontWeight);
    font-style: v-bind(fontStyle);
    text-decoration: v-bind(textDecoration);
    overflow: hidden;
}
</style>
