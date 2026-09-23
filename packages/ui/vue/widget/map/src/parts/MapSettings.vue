<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>

import { type ModelRef } from 'vue'
import { IMapProps } from '../api/MapPreview'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  DCheckbox,
  DColorInput,
  DInput,
  DSlider,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'


export interface IMapPrevComponent {
  settings: IMapProps;
  setSetting: (key: string, value: any) => void;
  props: IMapProps;
}

const settings: ModelRef<IMapProps> = defineModel<IMapProps>({ required: true })
const { t } = useTranslation('map')
//const settings:Ref<IThingWidgetSettings> = defineModel<IThingWidgetSettings>({required:true});

</script>

<template>
  <section class="settings-section" data-section-id="style" :data-section="t('Style.section')">
    <div class="settings-container">
      <DCheckbox v-model="settings.stroke" :label="t('Style.stroke')" />
      <DColorInput v-model="settings.color" :label="t('Style.lineColor')" />
      <DInput v-model="settings.weight" type="number" :label="t('Style.lineSize')" suffix="px" />
      <DSlider v-model="settings.opacity" :min="0" :max="1" :step="0.01" :label="t('Style.lineOpacity')" />
      <DCheckbox v-model="settings.fill" :label="t('Style.fill')" />
      <DSlider v-model="settings.fillOpacity" :min="0" :max="1" :step="0.01" :label="t('Style.fillOpacity')" />
      <DColorInput v-model="settings.fillColor" :label="t('Style.fillColor')" />
      <DInput v-model="settings.className" :label="t('Style.className')" />
    </div>
  </section>

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
