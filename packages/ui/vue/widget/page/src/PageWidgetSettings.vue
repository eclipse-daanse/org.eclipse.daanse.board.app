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

import { inject, onMounted, ref, computed } from 'vue'
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { PageI } from './interface/PageI'
import { useRoute } from 'vue-router'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { type PageRegistryI, identifier } from 'org.eclipse.daanse.board.app.lib.repository.page'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const opened = ref({
  widgetSection: false,
  storeSection: false,
});

const widgetSettings = defineModel<PageI>({ required: true });
const currentRoute = useRoute()

// Lade alle verfügbaren Seiten
const pageRegistry = container.get<PageRegistryI>(identifier)
const currentPageId = computed(() => currentRoute.params.pageid as string)

// Verfügbare Seiten ohne die aktuelle Seite
const availablePages = computed(() => {
  const allPageIds = pageRegistry.getAllPageIds()
  return allPageIds
    .filter(pageId => pageId !== currentPageId.value)
    .map(pageId => {
      const page = pageRegistry.getPage(pageId)
      return {
        value: `/page/${pageId}`,
        text: page?.name || pageId,
        id: pageId
      }
    })
})

// Hilfsfunktion um die aktuelle Auswahl zu validieren
const isValidSelection = computed(() => {
  if (!widgetSettings.value.path) return true
  const selectedPageId = widgetSettings.value.path.split('/').pop()
  return selectedPageId !== currentPageId.value
})

</script>

<template>
<va-collapse
        v-model="opened.widgetSection"
        :header="t('page:pageWidget.title')"
        icon="settings"
    >
        <div class="settings-container">
            <!-- Dropdown für Seitenauswahl -->
            <va-select
                v-model="widgetSettings.path"
                :label="t('page:pageWidget.selectPage')"
                :options="availablePages"
                value-by="value"
                text-by="text"
                :placeholder="t('page:pageWidget.selectPagePlaceholder')"
                :color="isValidSelection ? 'primary' : 'danger'"
            />
            <!-- Warnung bei Selbstreferenz -->
            <va-alert
                v-if="!isValidSelection"
                color="warning"
                :border="false"
                icon="warning"
            >
              {{ t('page:pageWidget.selfReferenceWarning') }}
            </va-alert>
            <!-- Manueller Pfad-Input als Fallback -->
            <va-collapse
                v-model="opened.storeSection"
                :header="t('page:pageWidget.manualPath')"
                icon="edit"
            >
                <va-input
                    v-model="widgetSettings.path"
                    :label="t('page:pageWidget.path')"
                    :color="isValidSelection ? 'primary' : 'danger'"
                />
            </va-collapse>
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
.add-btn {
  width: 150px;
}
.input {
  width: 100px;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}
</style>
