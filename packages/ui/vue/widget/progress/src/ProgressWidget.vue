<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import type { IProgressSettings } from './index';
import { computed, toRefs, onMounted, ref, watch } from "vue";
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'

const props = defineProps<{ datasourceId: string, config: IProgressSettings }>();
const { datasourceId, config } = toRefs(props);

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

const defaultConfig: IProgressSettings = {
    progress: "",
    fillColor: "#00FF00",
    gradientColor: "",
    backgroundColor: "#D3D3D3",
    isGradient: false,
    isVertical: false,
    rotation: 90,
};

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    };
});

const backgroundColor = computed(() => {
    return config.value.backgroundColor;
});

const backgroundProgressColor = computed(() => {
    return config.value.isGradient
        ? `linear-gradient(${config.value.rotation}deg, ${config.value.gradientColor})`
        : `${config.value.fillColor}`;
});

const transition = computed(() => {
    return config.value.isVertical ? "height .7s ease" : "width .7s ease";
});

const verticalPositionFiller = computed(() => {
    if (parsedProgress.value) {
        return config.value.isVertical
            ? `${parsedProgress.value}%`
            : "35px";
    }
});

const horizontalPositionFiller = computed(() => {
    if (parsedProgress.value) {
        return !config.value.isVertical
            ? `${parsedProgress.value}%`
            : "35px";
    }
});

const verticalPositionBackground = computed(() => {
    return config.value.isVertical ? "35px" : "100%";
});

const horizontalPositionBackground = computed(() => {
    return !config.value.isVertical ? "35px" : "100%";
});

const parsedProgress = computed(() => {
    if (!config.value.progress) {
        return null;
    }

    const { parts } = helpers.widget.extractValuesAndFullObject(config.value.progress);
    let result = "";

    for (const part of parts) {
        if (part.path || part.path === null) {
            const value = helpers.widget.getValueByPath(data.value, part.path);
            result += value !== undefined ? value : part.text;
        } else {
            result += part.text;
        }
    }

    return parseFloat(result);
});
</script>

<template>
    <div class="container">
        <div class="progress">
            <span>
                {{ parsedProgress }}%
            </span>
            <div class="progress-percent"></div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress {
    width: v-bind(verticalPositionBackground);
    height: v-bind(horizontalPositionBackground);
    background: v-bind(backgroundColor);
    border-radius: 10px;
    display: flex;
    align-items: end;
    position: relative;
}

.progress-percent {
    height: v-bind(verticalPositionFiller);
    width: v-bind(horizontalPositionFiller);
    background: v-bind(backgroundProgressColor);
    transition: v-bind(transition);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    z-index: 1000;
}
</style>
