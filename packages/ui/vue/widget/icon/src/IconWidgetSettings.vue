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
  DInput,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

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
    Only the picker is left here: choosing an icon is searching a list and
    clicking one, which is not a value anyone types, so it has no field in
    the model. Everything else the widget offers is rendered from
    model/ui.xmi beside this.
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
