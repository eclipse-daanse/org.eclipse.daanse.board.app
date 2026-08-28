<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The topbar from docs/mdx-workbench-layout-mockups.html: 42px tall, the
  Daanse mark on the left, a breadcrumb for where you are, and the
  view/edit switch on the right - the mockups move that switch out of the
  navigation into the topbar, because it is a mode of the open board, not
  a place you navigate to.
-->

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

/** The page currently open, if any - drives both crumb and mode switch. */
const pageId = computed(() => (route.params.pageid as string | undefined) ?? '')

const isEditing = computed(
  () => route.name === 'edit' || route.name === 'pageEdit' || String(route.path).endsWith('/edit'),
)

/** Where you are, as a path of labels; the last one is the current place. */
const crumb = computed<string[]>(() => {
  const board = pageId.value ? `Board ${pageId.value.slice(0, 8)}` : 'Board'
  switch (route.name) {
    case 'home':
    case 'page':
      return ['Boards', board]
    case 'edit':
    case 'pageEdit':
      return ['Boards', board, 'Bearbeiten']
    case 'data':
      return ['Übersicht', 'Verbindungen & Daten']
    case 'config':
      return ['Übersicht', 'Konfiguration']
    case 'test':
      return ['Übersicht', 'Test']
    default:
      return [String(route.name ?? 'Board')]
  }
})

const showModes = computed(() => Boolean(pageId.value))

const openView = () => {
  if (pageId.value) router.push(`/page/${pageId.value}`)
}
const openEdit = () => {
  if (pageId.value) router.push(`/page/${pageId.value}/edit`)
}

/*
 * Storing belongs to the board you are looking at, not to a separate area
 * in the rail. It opens the storage view, which is where a target
 * repository is chosen - the workspace has no notion yet of where a given
 * board came from, so it cannot save silently.
 */
const openStorage = () => router.push('/save')
</script>

<template>
  <header class="topbar">
    <span class="brand">
      <span class="brand-mark" aria-hidden="true">D</span>
      <span class="brand-name">Daanse Board</span>
    </span>

    <nav class="crumb" aria-label="Pfad">
      <template v-for="(part, i) in crumb" :key="part + i">
        <span v-if="i > 0" class="crumb-sep" aria-hidden="true">/</span>
        <span :class="['crumb-part', { current: i === crumb.length - 1 }]">{{ part }}</span>
      </template>
    </nav>

    <span class="spacer"></span>

    <button
      v-if="showModes"
      type="button"
      class="action"
      title="Arbeitsstand speichern oder laden"
      @click="openStorage"
    >
      Speichern
    </button>

    <div v-if="showModes" class="modes" role="group" aria-label="Modus">
      <button
        type="button"
        :class="['mode', { on: !isEditing }]"
        :aria-pressed="!isEditing"
        @click="openView"
      >
        Ansicht
      </button>
      <button
        type="button"
        :class="['mode', { on: isEditing }]"
        :aria-pressed="isEditing"
        @click="openEdit"
      >
        Bearbeiten
      </button>
    </div>

    <span class="avatar" title="Angemeldet">MH</span>
  </header>

  <Teleport to="body">
    <!-- modals mounted by other components land here -->
  </Teleport>
</template>

<style scoped>
.topbar {
  height: var(--spacing-topbar, 42px);
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  background: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-fg);
  font-size: var(--text-sm, 12px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;
  white-space: nowrap;
  font-weight: 600;
  font-size: var(--text-base, 13px);
}
.brand-mark {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm, 5px);
  background: var(--color-brandFill);
  color: var(--color-onBrand);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs, 11px);
  font-weight: 700;
  flex: none;
}

.crumb {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--color-dim);
}
.crumb-part {
  overflow: hidden;
  text-overflow: ellipsis;
}
.crumb-part.current {
  color: var(--color-fg);
  font-weight: 500;
}
.crumb-sep {
  color: var(--color-outline);
}

.spacer {
  flex: 1 1 auto;
  min-width: 8px;
}

.action {
  height: 24px;
  padding: 0 10px;
  margin-right: 8px;
  font-size: var(--text-sm, 12px);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.action:hover {
  border-color: var(--color-outline);
}

.action:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.modes {
  display: inline-flex;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm, 5px);
  overflow: hidden;
  flex: none;
}
.mode {
  font: inherit;
  padding: 4px 11px;
  border: 0;
  background: var(--color-raised);
  color: var(--color-dim);
  cursor: pointer;
  white-space: nowrap;
}
.mode:hover {
  color: var(--color-fg);
}
.mode.on {
  background: var(--color-accent);
  color: var(--color-onAccent);
  font-weight: 600;
}
.mode:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-raised);
  border: 1px solid var(--color-outline);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs, 11px);
  font-weight: 700;
  color: var(--color-dim);
  flex: none;
}
</style>
