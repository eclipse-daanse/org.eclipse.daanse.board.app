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

import { inject, ref, computed, watchEffect, watch, onMounted } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI
} from 'org.eclipse.daanse.board.app.lib.repository.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
  type LayoutI
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import type { Container } from 'inversify'
const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

const pageid = defineModel<string>({ required: true })
const collepsed = ref(true);
const container = inject<Container>('container')
const pageRepo:PageRegistryI|undefined = container?.get<PageRegistryI>(PageIdentifier);
const layoutRepo:LayoutRepositoryI|undefined
  = container?.get<LayoutRepositoryI>(LayoutRepositoryIdentifier);
const pageSettings = ref<PageI | null>(null)
const emit = defineEmits(['close'])

const availableLayouts = computed(() => {
  return layoutRepo?.getAllLayouts() || []
})

const defaultLayout = computed(() => {
  return availableLayouts.value.find(layout =>
    layout.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base") || availableLayouts.value[0]
})

onMounted(() => {
  if (pageid.value && pageRepo) {
    const original = pageRepo.getPage(pageid.value)
    pageSettings.value = original ? { ...original } : null

    if (pageSettings.value && !pageSettings.value.layout && defaultLayout.value) {
      pageSettings.value.layout = defaultLayout.value
    }
  }
})
watch(pageSettings,()=>{
  pageRepo?.updatePage(pageSettings.value!);
},{deep:true})
</script>


<template>
  <div class="settings_window ice z-mx p-6 shadow-sm">
    <va-collapse v-model="collepsed" icon="settings" :header="t('page:PageSettings.title')">
      <div class="settings-container" v-if="pageSettings">
        <div class="settings-block">
          <va-input
            class="field"
            :label="t('page:PageSettings.id')"
            v-model="pageSettings.id"
          />
          <va-input
            class="field"
            :label="t('page:PageSettings.name')"
            v-model="pageSettings.name"
          >
          </va-input>
        </div>

        <div class="settings-block">
          <va-input
            class="field"
            :label="t('page:PageSettings.icon')"
            v-model="pageSettings.icon"
          />
          <va-input
            class="field"
            :label="t('page:PageSettings.description')"
            v-model="pageSettings.description"
          />
        </div>

        <div class="settings-block">
          <VaSelect

            :label="t('page:PageSettings.layout')"
            v-model="pageSettings.layout"
            :options="availableLayouts"
            text-by="name"
            track-by="id"
          />
        </div>

        <div class="settings-block">
          <va-switch
            :label="t('page:PageSettings.visibleInNavigation')"
            v-model="pageSettings.visibleInNavigation"
          />
        </div>
      </div>
    </va-collapse>
    <div class="buttons">
      <va-button @click="emit('close')">Close</va-button>
    </div>
  </div>
  </template>

<style scoped lang="scss">
    .settings-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .settings-block {
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
    }

    .field {
      flex: 1 1 45%;
      min-width: 200px;
    }
    .settings_window {
      position: absolute;
      display: flex;
      flex-direction: column;
      height: calc(100% - 40px);
      width: 400px;
      right: 20px;
      top: 20px;
      background-color: #ecf0f1;
      padding: 1rem 0;
      border-radius: 8px;
      z-index: 1000000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow: visible;
      gap: 16px;
    }
    .va-dropdown__content:deep() {
      z-index: 3800000 !important;
    }
</style>
<style>
.va-dropdown__content {
  z-index: 3800000 !important;
}
</style>
