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
import { IIconSettings } from "./index";

const props = defineProps<{ config: IIconSettings }>();
const { config } = toRefs(props);

const defaultConfig: IIconSettings = {
    iconColor: "#000",
    iconSize: 100,
    isIconFilled: false,
    strokeWeight: 100,
    opticSize: 48,
    grade: 48,
    currentIcon: "",
};

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }
});

const iconColor = computed(() => {
    return config.value.iconColor;
});

const iconSize = computed(() => {
    return `${config.value.iconSize}px`;
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
    <div class="icon">
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
    font-size: v-bind(iconSize);
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
