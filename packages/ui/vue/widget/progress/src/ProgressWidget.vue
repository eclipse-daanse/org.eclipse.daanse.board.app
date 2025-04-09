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
// import { useDatasourceRepository } from '@/plugins/widgets/composables/datasourceRepository';
import type { IProgressSettings } from './index';
import { computed, onMounted, toRefs } from 'vue';

const props = defineProps<{ datasourceId: string, config: IProgressSettings }>();
const { datasourceId, config } = toRefs(props);

// const { data } = useDatasourceRepository(datasourceId, "object");

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
            ? `${parseFloat(parsedProgress.value)}%`
            : "35px";
    }
});

const horizontalPositionFiller = computed(() => {
    if (parsedProgress.value) {
        return !config.value.isVertical
            ? `${parseFloat(parsedProgress.value)}%`
            : "35px";
    }
});

const verticalPositionBackground = computed(() => {
  return config.value.isVertical ? "35px" : "100%";
});

const horizontalPositionBackground = computed(() => {
  return !config.value.isVertical ? "35px" : "100%";
});

const parsedProgress = computed((): string => {
    return config.value.progress;

    // if (!config.value.progress) return "";
    // if (!isNaN(parseFloat(config.value.progress)))
    //     return `${(parseFloat(config.value.progress)).toFixed(2)}`;

    // let processedString = config.value.progress;
    // if (!processedString) return "";
    // const regex = /{(.*?)}/g;
    // const parts = processedString.match(regex);

    // if (!parts || !data.value) return processedString;

    // parts.forEach((element: string) => {
    //     const trimmedString = element.replace("{", "").replace("}", "");
    //     const dataField = trimmedString.split(".");

    //     const res = dataField.reduce((acc: any, field) => {
    //         if(!acc[field]){
    //             return ""
    //         }
    //         return acc[field];
    //     }, data.value);

    //     processedString = processedString?.replace(element, res);
    // });

    // return !isNaN(parseFloat(processedString))
    //     ? parseFloat(processedString) > 100
    //         ? "100%"
    //         : `${processedString}`
    //     : `${processedString}`;
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
