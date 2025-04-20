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
import type { IIconSettings } from './index'
import { computed, onMounted, ref, type Ref } from 'vue'
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

// import { useI18n } from "vue-i18n";

// const { t } = useI18n();
const t = (key: string) => key
const opened = ref({
  widgetSection: false,
  storeSection: false,
})
const widgetSettings = defineModel<IIconSettings>({ required: true })

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

const fontColor = computed(() => {
  return isDarkTheme.value ? '#ffffff' : ''
})

const iconStyle = computed(() => {
  return `font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 100, "opsz" 48;`
})
</script>

<template>
  <va-collapse v-model="opened.widgetSection" :header="t('IconWidget.title')">
    <div class="settings-container">
      <va-input
        v-model="searchQuery"
        placeholder="Search icon..."
        :label="t('IconWidget.iconSearch')"
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
      <va-checkbox
        v-model="widgetSettings.isIconFilled"
        :label="t('IconWidget.iconFilled')"
      />
      <va-color-input
        v-model="widgetSettings.iconColor"
        :label="t('IconWidget.iconColor')"
      />
      <va-slider
        class="slider"
        v-model="widgetSettings.iconSize"
        :label-color="fontColor"
        track-label-visible
        :min="10"
        :max="1000"
        :step="10"
        :label="t('IconWidget.iconSize')"
      />
      <va-slider
        class="slider"
        v-model="widgetSettings.strokeWeight"
        :label-color="fontColor"
        track-label-visible
        :min="100"
        :max="700"
        :step="100"
        :label="t('IconWidget.strokeWeight')"
      />
      <va-slider
        class="slider"
        v-model="widgetSettings.opticSize"
        :label-color="fontColor"
        track-label-visible
        :min="20"
        :max="48"
        :label="t('IconWidget.opticSize')"
      />
      <va-slider
        class="slider"
        v-model="widgetSettings.grade"
        :label-color="fontColor"
        track-label-visible
        :min="-25"
        :max="200"
        :step="15"
        :label="t('IconWidget.grade')"
      />
    </div>
  </va-collapse>
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
