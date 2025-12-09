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

const config = defineModel<PageI>('configv', { required: true});
const defaultConfig: PageI = {
  path: '/page/abc',
  hideTitle: false,
};

const router = useRouter()
const currentRoute = useRoute()

// Rekursions-Schutz: Prüfe ob wir bereits auf der Zielseite sind
const parentDepth = inject('pageWidgetDepth', 0) as number
const currentDepth = parentDepth + 1
const maxRecursionDepth = 3

// Provide für nachfolgende PageWidgets
provide('pageWidgetDepth', currentDepth)

// Sammle alle PageWidget-Pfade in der Aufrufkette
// WICHTIG: Verwende die aktuelle Seite, nicht den konfigurierten Ziel-Pfad
const parentPaths = inject('pageWidgetPaths', []) as string[]
const currentPagePath = `/page/${currentRoute.params.pageid}`
const currentPaths = [...parentPaths, currentPagePath]
provide('pageWidgetPaths', currentPaths)

const isRecursive = computed(() => {
  const targetPath = config.value.path
  if (!targetPath) return false

  // 1. Maximale Tiefe erreicht
  if (currentDepth > maxRecursionDepth) {
    console.warn(`PageWidget: Max depth ${maxRecursionDepth} reached`, { currentDepth, targetPath })
    return true
  }

  // 2. Ziel-Pfad bereits in der Aufrufkette vorhanden (Zirkulare Referenz)
  // Prüfe ob das Ziel bereits von einer übergeordneten Seite aufgerufen wird
  if (parentPaths.includes(targetPath)) {
    console.warn(`PageWidget: Circular reference detected`, { targetPath, parentPaths })
    return true
  }

  // 3. Zielseite ist die aktuelle Seite
  const targetPageId = targetPath.split('/').pop()
  const currentPageId = currentRoute.params.pageid as string
  if (targetPageId === currentPageId) {
    console.warn(`PageWidget: Self-reference detected`, { targetPageId, currentPageId })
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

// Extrahiere Page-ID aus dem Pfad
const targetPageId = computed(() => {
  return config.value.path?.split('/').pop() || 'abc'
})

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
  <div class="container" v-if="config.path">
    <!-- Rekursions-Warnung -->
    <div v-if="isRecursive" class="recursion-warning">
      ⚠️ Rekursive Seitenverweis verhindert:
      {{ config.path }}
      <div class="recursion-details">
        Tiefe: {{ currentDepth }}/{{ maxRecursionDepth }}<br>
        Aufrufkette: {{ currentPaths.join(' → ') }} → {{ config.path }}
      </div>
    </div>

    <!-- Normale Darstellung mit LayoutRenderer -->
    <div v-else>
      <div
        class="page-widget-content"
        :style="{
          backgroundColor: config.backgroundColor || undefined
        }"
        :class="{

        }"
      >
        <!-- Titel (optional anzeigen) -->
        <div v-if="!config.hideTitle" class="page-info">
          📄 Seite: {{ targetPageId }}
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
  height: 100%;
}

/* Sicherstellen dass Layout-Engines korrekt funktionieren */
.page-content-wrapper > * {
  width: 100%;
  height: 100%;
}

/* Cleanup: temp-fallback nicht mehr benötigt */
</style>
