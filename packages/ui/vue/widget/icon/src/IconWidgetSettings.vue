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
import type { IconSettings } from './gen/IconSettings'
import { computed, inject, onMounted, ref, type Ref } from 'vue'
import MaterialIcons from './assets/output.json'

// interface MaterialIcon {
//     name: string;
//     version?: number;
//     popularity?: number;
//     codepoint?: number;
//     unsupported_families?: string[];
//     categories?: string[];
//     tags?: string[];
//     sizes_px?: number[];
// }

import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import {
  DCheckbox,
  DColorInput,
  DInput,
  DSlider,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const widgetSettings = defineModel<IconSettings>({ required: true })

const isDarkTheme: Ref<boolean> = ref(
  JSON.parse(localStorage.getItem('isDarkTheme') || 'false'),
)

const iconsList: Ref<string[]> = ref([])
const searchQuery: Ref<string> = ref('')

const filteredIcons = computed(() => {
  return iconsList.value.filter((icon: string) =>
    icon.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const handleIconClick = (icon: string) => {
  if (icon) widgetSettings.value.currentIcon = icon
}

onMounted(() => {
  iconsList.value = MaterialIcons
})

const iconStyle = computed(() => {
  return `font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 100, "opsz" 48;`
})
</script>

<template>
  <!--
    Two sections, because they are two different things: picking the icon
    is searching a list and clicking one - there is no value to type -
    while everything below it is a plain setting.

    The second section looks redundant beside the model, and inside this
    widget's own settings it is: the overlay hides it, because
    unmodelledSections names only the picker. It is here for the map
    widget, which renders this component whole to style its points and has
    no model form beside it.
  -->
  <section class="settings-section" data-section="Symbol wählen">
    <div class="settings-container">
      <DInput
        v-model="searchQuery"
        type="search"
        placeholder="Search icon..."
        :label="t('icon:IconWidget.iconSearch')"
      />
      <div class="icons-container" :style="iconStyle">
        <span
          v-for="icon in filteredIcons"
          :key="icon"
          @click="handleIconClick(icon)"
          class="material-symbols-outlined"
          :class="{ 'active-icon': icon === widgetSettings.currentIcon }"
        >
          {{ icon }}
        </span>
      </div>
    </div>
  </section>

  <section class="settings-section" :data-section="t('IconWidget.title')">
    <div class="settings-container">
      <DCheckbox
        v-model="widgetSettings.isIconFilled"
        :label="t('icon:IconWidget.iconFilled')"
      />
      <VariableInput v-model="widgetSettings.iconColor!" :label="t('icon:IconWidget.iconColor')">
        <template #default="{ value, change }">
          <DColorInput
            :model-value="value"
            @update:model-value="change"
            :label="t('icon:IconWidget.iconColor')"
          />
        </template>
      </VariableInput>
      <DSlider
        v-model="widgetSettings.iconSize"
        :min="10"
        :max="1000"
        :step="10"
        suffix="px"
        :label="t('icon:IconWidget.iconSize')"
      />
      <DSlider
        v-model="widgetSettings.strokeWeight"
        :min="100"
        :max="700"
        :step="100"
        :label="t('icon:IconWidget.strokeWeight')"
      />
      <DSlider
        v-model="widgetSettings.opticSize"
        :min="20"
        :max="48"
        :label="t('icon:IconWidget.opticSize')"
      />
      <DSlider
        v-model="widgetSettings.grade"
        :min="-25"
        :max="200"
        :step="15"
        :label="t('icon:IconWidget.grade')"
      />
    </div>
  </section>
</template>
<style lang="css" scoped>
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
  font-family: 'Material Symbols Outlined';
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
  transition:
    border-color 0.5s ease,
    transform 0.5s ease;
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
