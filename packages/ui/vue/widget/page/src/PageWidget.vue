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

import { computed, toRefs, onMounted, ref, watch, inject, provide } from "vue";
import { PageI } from './interface/PageI'
import { RouterView, useRouter, useRoute } from 'vue-router'
import PageLayoutRenderer from './PageLayoutRenderer.vue'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { EObject } from '@emfts/core'
import { pageIdIn } from 'org.eclipse.daanse.board.app.lib.api.page'

const config = defineModel<PageI>('configv', { required: true});

/*
 * The settings, watched rather than read off the model prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting changed in the open dialog
 * reached the page only once the dialog was reopened (#1203). The reads go
 * through `settings`; the writes still go to `config`.
 */
const settings = useEObject(() => config.value as unknown as EObject | undefined) as unknown as { value: PageI | undefined }
const defaultConfig: PageI = {
  /* A placeholder, replaced the moment a page is picked in the settings. */
  path: '',
  hideTitle: false,
};

const router = useRouter()
const currentRoute = useRoute()
const { t } = useTranslation('page')

// Rekursions-Schutz: Prüfe ob wir bereits auf der Zielseite sind
const parentDepth = inject('pageWidgetDepth', 0) as number
const currentDepth = parentDepth + 1
const maxRecursionDepth = 3

// Provide für nachfolgende PageWidgets
provide('pageWidgetDepth', currentDepth)

/*
 * The chain of pages this one is being shown inside.
 *
 * Page ids, not paths: a page is addressed inside its board now
 * (/board/:boardid/pages/:pageid), and a board stored before that holds
 * widgets configured with the old /page/:pageid. Comparing the two
 * strings would find no cycle where there plainly is one, and the id is
 * what the question was ever about.
 */
const parentPageIds = inject('pageWidgetPageIds', []) as string[]
const currentPageId = String(currentRoute.params.pageid ?? '')
const chain = [...parentPageIds, currentPageId]
provide('pageWidgetPageIds', chain)

const isRecursive = computed(() => {
  const targetPath = settings.value?.path
  if (!targetPath) return false

  // 1. Maximale Tiefe erreicht
  if (currentDepth > maxRecursionDepth) {
    console.warn(`PageWidget: Max depth ${maxRecursionDepth} reached`, { currentDepth, targetPath })
    return true
  }

  // 2. The target is already somewhere in the chain above - a cycle
  const wanted = pageIdIn(targetPath)
  if (wanted && parentPageIds.includes(wanted)) {
    console.warn('PageWidget: Circular reference detected', { wanted, parentPageIds })
    return true
  }

  // 3. The target is the page this widget is on
  if (wanted && wanted === currentPageId) {
    console.warn('PageWidget: Self-reference detected', { wanted, currentPageId })
    return true
  }

  return false
})

// Initialisiere Konfiguration
type ConfigKeys = keyof PageI;
if (!config.value.path) {
  for (const key of Object.keys(defaultConfig) as ConfigKeys[]) {
    const defaultVal = defaultConfig[key];
    const currentVal = config.value[key];
    if (currentVal === undefined || currentVal === null) {
      (config.value[key] as typeof defaultVal) = defaultVal;
    }
  }
}

// The page this widget shows, whichever shape its path was written in
const targetPageId = computed(() => pageIdIn(settings.value?.path ?? '') || 'abc')

// Event Handlers für LayoutRenderer
const handleOpenSettings = (widgetId: string) => {
  console.log('PageWidget: Open settings for widget', widgetId)
  // Hier könnten wir Events nach außen weiterleiten
}

const handleRemoveWidget = (widgetId: string) => {
  console.log('PageWidget: Remove widget', widgetId)
  // Hier könnten wir Events nach außen weiterleiten
}

</script>

<template>
  <div class="container" v-if="settings?.path">
    <!-- The cycle this widget would have opened -->
    <div v-if="isRecursive" class="recursion-warning">
      ⚠️ {{ t('Widget.recursion', { path: settings?.path }) }}
      <div class="recursion-details">
        {{ t('Widget.depth', { depth: currentDepth, max: maxRecursionDepth }) }}<br>
        {{ t('Widget.chain', { chain: [...chain, targetPageId].join(' → ') }) }}
      </div>
    </div>

    <!-- Otherwise the page itself -->
    <div v-else style="width: 100%; height: 100%">
      <div
        class="page-widget-content"
        :style="{
          backgroundColor: settings?.backgroundColor || undefined
        }"
        :class="{

        }"
      >
        <!-- Titel (optional anzeigen) -->
        <div v-if="!settings?.hideTitle" class="page-info">
          📄 {{ t('Widget.target', { page: targetPageId }) }}
        </div>

        <!-- PageLayoutRenderer mit spezifischer pageId -->
        <div class="page-content-wrapper">
          <PageLayoutRenderer
            :pageId="targetPageId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.recursion-warning {
  padding: 1rem;
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  color: #856404;
  text-align: center;
}

.recursion-details {
  font-size: 0.8em;
  margin-top: 0.5rem;
  opacity: 0.7;
}

.page-widget-content {
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Scrollbar Mode - mit Scrollbalken */
.page-widget-content.scroll-mode {
  overflow: auto;
}

.page-widget-content.scroll-mode .page-content-wrapper {
  min-height: fit-content;
  overflow: visible;
}

/* Responsive Mode - ohne Scrollbalken */
.page-widget-content.responsive-mode {
  overflow: hidden;
}

.page-widget-content.responsive-mode .page-content-wrapper {
  flex: 1;
  overflow: hidden;
  /* Layout-Engines brauchen oft absolute Positionierung */
  position: relative;
}

.page-info {
  background: #f8f9fa;
  padding: 0.5rem;
  font-size: 0.9em;
  color: #6c757d;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.page-content-wrapper {
  flex: 1;
  position: relative;
  min-height: 0; /* Wichtig für Flex-Layout */
  width: 100%;
  overflow: auto;
}

/* Sicherstellen dass Layout-Engines korrekt funktionieren */
.page-content-wrapper > * {
  width: 100%;
  height: 100%;
}

/* Cleanup: temp-fallback nicht mehr benötigt */
</style>
