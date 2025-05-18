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

import { v4 } from 'uuid'
import { inject, ref } from 'vue'

interface IVantaSettings {
  type: string
  [key: string]: any
  // color: string
  // backgroundColor: string
  // speed: number
}

const opened = ref(false)
const widgetSettings = defineModel<IVantaSettings>({ required: true })
</script>

<template>
  <va-collapse v-model="opened" header="Vanta widget settings">
    <div class="settings-container">
      <div>If no settings is specified, the default value will be used</div>
      <VaSelect
        v-model="widgetSettings.type"
        :options="[
          { label: 'CLOUDS', value: 'CLOUDS' },
          { label: 'BIRDS', value: 'BIRDS' },
          { label: 'NET', value: 'NET' },
          { label: 'TRUNK', value: 'TRUNK' },
        ]"
        text-by="label"
        value-by="value"
        label="Vanta type"
      />
      <template v-if="widgetSettings.type === 'CLOUDS'">
        <va-color-input
            label="Background color"
            v-model="widgetSettings.backgroundColor"
        />
        <va-color-input
            label="Sky color"
            v-model="widgetSettings.skyColor"
        />
        <va-color-input
            label="Cloud color"
            v-model="widgetSettings.cloudColor"
        />
        <va-color-input
            class="text-color"
            label="Cloud shadow color"
            v-model="widgetSettings.cloudShadowColor"
        />
        <va-color-input
            class="text-color"
            label="Sun color"
            v-model="widgetSettings.sunColor"
        />
        <va-color-input
            class="text-color"
            label="Sun glare color"
            v-model="widgetSettings.sunGlareColor"
        />
        <va-color-input
            class="text-color"
            label="Sunlight color"
            v-model="widgetSettings.sunlightColor"
        />
        <va-input
            type="number"
            label="Speed"
            v-model="widgetSettings.speed"
        />
      </template>
      <template v-if="widgetSettings.type === 'BIRDS'">
        <va-color-input
            class="text-color"
            label="Background color"
            v-model="widgetSettings.backgroundColor"
        />
        <va-color-input
            class="text-color"
            label="Color 1"
            v-model="widgetSettings.color1"
        />
        <va-color-input
            class="text-color"
            label="Color 2"
            v-model="widgetSettings.color2"
        />
        <va-input
            type="number"
            label="Quantity"
            v-model="widgetSettings.quantity"
        />
        <va-input
            type="number"
            label="Bird size"
            v-model="widgetSettings.birdSize"
        />
        <va-input
            type="number"
            label="Wing span"
            v-model="widgetSettings.wingSpan"
        />
        <va-input
            type="number"
            label="Speed limit"
            v-model="widgetSettings.speedLimit"
        />
        <va-input
            type="number"
            label="Separation"
            v-model="widgetSettings.separation"
        />
        <va-input
            type="number"
            label="Alignment"
            v-model="widgetSettings.alignment"
        />
        <va-input
            type="number"
            label="Cohesion"
            v-model="widgetSettings.cohesion"
        />
      </template>
      <template v-if="widgetSettings.type === 'NET'">
        <va-color-input
            label="Background color"
            v-model="widgetSettings.backgroundColor"
        />
        <va-color-input
            label="Color"
            v-model="widgetSettings.color"
        />
        <va-input
            type="number"
            label="Points"
            v-model="widgetSettings.points"
        />
        <va-input
            type="number"
            label="Max distance"
            v-model="widgetSettings.maxDistance"
        />
        <va-input
            type="number"
            label="Spacing"
            v-model="widgetSettings.spacing"
        />
      </template>
      <template v-if="widgetSettings.type === 'TRUNK'">
        <va-color-input
            label="Background color"
            v-model="widgetSettings.backgroundColor"
        />
        <va-color-input
            label="Color"
            v-model="widgetSettings.color"
        />
        <va-input
            type="number"
            label="Chaos"
            step="0.1"
            v-model="widgetSettings.chaos"
        />
        <va-input
            type="number"
            label="Spacing"
            step="0.1"
            v-model="widgetSettings.spacing"
        />

      </template>

    </div>
  </va-collapse>
</template>
<style scoped></style>
