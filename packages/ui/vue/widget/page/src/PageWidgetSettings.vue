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
import { type PageRegistryI, identifier } from 'org.eclipse.daanse.board.app.lib.api.page'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;


const widgetSettings = defineModel<PageI>({ required: true });
const currentRoute = useRoute()

// Lade alle verfügbaren Seiten
const pageRegistry = inject<PageRegistryI>(identifier)!
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
  <!--
    What is left of the hand-written form: choosing the page.

    The choices are the pages that exist right now, so there is no list a
    model could state; and the widget refuses the page it is sitting on,
    which is a rule about the choice rather than a property of it. The
    framing - the title switch and the background - is rendered from
    model/ui.xmi beside this.
  -->
  <section class="settings-section" data-section="Seite wählen">
    <div class="settings-container">
      <va-select
        v-model="widgetSettings.path"
        :label="t('page:pageWidget.selectPage')"
        :options="availablePages"
        value-by="value"
        text-by="text"
        :placeholder="t('page:pageWidget.selectPagePlaceholder')"
        :color="isValidSelection ? 'primary' : 'danger'"
      />

      <va-alert v-if="!isValidSelection" color="warning" :border="false" icon="warning">
        {{ t('page:pageWidget.selfReferenceWarning') }}
      </va-alert>

      <!-- A page that is not in the list yet - one being built, or one from
           a board that has not loaded - can still be reached by its path.
           It used to sit behind a disclosure inside the section; the way
           out of a list that does not have your page in it is worth
           seeing before you need it. -->
      <div class="manual-path">
        <p class="manual-path__note">{{ t('page:pageWidget.manualPath') }}</p>
        <va-input
          v-model="widgetSettings.path"
          :label="t('page:pageWidget.path')"
          :color="isValidSelection ? 'primary' : 'danger'"
        />
      </div>
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

.manual-path {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.manual-path__note {
  margin: 0;
  font-size: 12px;
  color: var(--color-dim, #6b7280);
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
