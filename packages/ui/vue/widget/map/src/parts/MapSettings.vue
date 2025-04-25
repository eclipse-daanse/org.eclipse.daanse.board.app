<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>

import { ref, onMounted, computed, type Ref, type UnwrapRef, type ModelRef } from 'vue'
import { IMapProps } from '../api/MapPreview'


export interface IMapPrevComponent {
  settings: IMapProps;
  setSetting: (key: string, value: any) => void;
  props: IMapProps;
}

const settings: ModelRef<IMapProps> = defineModel<IMapProps>({ required: true })
//const settings:Ref<IThingWidgetSettings> = defineModel<IThingWidgetSettings>({required:true});

const opened: Ref<UnwrapRef<{ textSection: boolean }>> = ref({
  textSection: true
})


</script>

<template>
  <va-collapse
    v-model="opened.textSection"
    header="Style settings"
  >
    <div class="settings-container">
      <va-checkbox
        v-model="settings.stroke"
        label="stroke"
      />
      <va-color-input
        v-model="settings.color"
        label="line Color"

      />
      <va-input
        v-model="settings.weight"
        label="line size"
      />
      <va-slider
        v-model="settings.opacity"
        :max="1"
        :min="0"
        :step="0.01"
        class="slider"
        label="line opacity"
        track-label-visible
        weight
      />
      <va-checkbox
        v-model="settings.fill"
        label="fill"
      />
      <va-slider
        v-model="settings.fillOpacity"
        :max="1"
        :min="0"
        :step="0.01"
        class="slider"
        label="fill opacity"
        track-label-visible

      />
      <va-color-input
        v-model="settings.fillColor"
        label="class name"
      />
      <va-input
        v-model="settings.className"
        label="class name"
      />


    </div>
  </va-collapse>

</template>
<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}

.icons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 220px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  cursor: pointer;
  padding: 10px;
}

.material-symbols-outlined {
  font-family: Material Symbols Outlined sans-serif;
  font-weight: normal;
  font-style: inherit;
  font-size: 40px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border-color 0.5s ease, transform 0.5s ease;
}

.material-symbols-outlined:hover {
  transform: scale(1.1);
}

.active-icon {
  border: 2px solid rgb(0, 121, 0);
}

.slider {
  padding: 0 10px;
}
</style>
