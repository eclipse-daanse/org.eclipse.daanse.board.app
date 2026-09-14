<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
/*
 * Verbindungen & Daten, as docs/mdx-workbench-layout-mockups.html has it:
 * the tree on the left, what the selected thing is on the right.
 *
 * The page it replaces put two flat lists in one column and an editor
 * beside them, and the editor carried its own preview - so the settings
 * of a source and its data were side by side in a strip the width of a
 * third of the screen. Here the detail gets the whole right half and the
 * two are tabs, because you are reading one or changing the other.
 *
 * The header above the tabs says what the selection is and what reads
 * from it before either is touched.
 */
import { computed, inject, ref, watch } from 'vue'
import { DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList, useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import DataTree, { type Selection } from '@/components/datasources/DataTree.vue'
import DatasourceEditor from '@/components/datasources/DatasourceEditor.vue'
import ConnectionEditor from '@/components/connections/ConnectionEditor.vue'
import { useDatasourceUsage } from '@/composables/useDatasourceUsage'

const workspace = inject<Workspace>(WORKSPACE)!
const connections = useEList(workspace, (w) => w.connections)
const dataSources = useEList(workspace, (w) => w.datasources)

const { usageOf, usageLabel } = useDatasourceUsage()

const selected = ref<Selection | undefined>(undefined)
const tab = ref('preview')

const endpointfinder = inject('endpointfinder', null)
const findEndpoints = () => (endpointfinder as any)?.()

/*
 * Through useEObject, not a plain computed: a computed that finds a
 * modelled object returns the same instance every time, and Vue stops
 * there - the header would keep showing the name a connection had when it
 * was selected. A data source is still a plain reactive object and passes
 * through untouched.
 */
const held = useEObject(() => {
  const at = selected.value
  if (!at) return undefined
  return at.type === 'Connection'
    ? connections.value.find((c: any) => c.uid === at.itemId)
    : dataSources.value.find((d) => d.uid === at.itemId)
})

/** "xmla · ssas-demo" - what it is, and what it reads through. */
const subtitle = computed(() => {
  const item: any = held.value
  if (!item) return ''
  if (selected.value?.type === 'Connection') return item.type ?? ''
  /* The reference, not an id in the configuration. */
  return [item.type, item.connection?.name].filter(Boolean).join(' · ')
})

const usage = computed(() => {
  if (selected.value?.type !== 'DataSource' || !selected.value.itemId) return ''
  return usageLabel(usageOf(selected.value.itemId))
})

/*
 * A connection has no data of its own to look at, so it opens on its
 * settings; a source opens on its data, which is what you came to see.
 */
const tabs = computed(() =>
  selected.value?.type === 'DataSource'
    ? [
        { id: 'preview', label: 'Vorschau' },
        { id: 'settings', label: 'Einstellungen' },
      ]
    : [{ id: 'settings', label: 'Einstellungen' }],
)

watch(selected, (at) => {
  tab.value = at?.type === 'DataSource' ? 'preview' : 'settings'
})
</script>

<template>
  <div class="data-page">
    <aside class="data-page__tree">
      <DataTree v-model="selected" @find-endpoints="findEndpoints" @view="tab = $event" />
    </aside>

    <section class="data-page__detail">
      <p v-if="!selected" class="data-page__nothing">
        Wähle links eine Verbindung oder eine Datenquelle.
      </p>

      <template v-else>
        <header class="detail__head">
          <div class="detail__what">
            <h1 class="detail__name">{{ (held as any)?.name ?? selected.itemId }}</h1>
            <span v-if="subtitle" class="detail__sub">{{ subtitle }}</span>
          </div>
          <span v-if="usage" class="detail__usage">Verwendet in {{ usage }}</span>
        </header>

        <DTabs v-model="tab" :tabs="tabs" label="Ansicht der Auswahl" />

        <div class="detail__body">
          <ConnectionEditor
            v-if="selected.type === 'Connection'"
            :key="selected.itemId"
            :item-id="selected.itemId"
            @close="selected = undefined"
          />
          <DatasourceEditor
            v-else
            :key="`${selected.itemId}-${tab}`"
            :item-id="selected.itemId"
            :view="tab === 'preview' ? 'preview' : 'settings'"
            @close="selected = undefined"
          />
        </div>
      </template>
    </section>
  </div>
</template>

<style scoped>
.data-page {
  display: flex;
  height: 100%;
  min-height: 0;
}

.data-page__tree {
  flex: none;
  width: 320px;
  min-height: 0;
}

.data-page__detail {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  background: var(--color-pane);
  overflow: hidden;
}

.data-page__nothing {
  margin: auto;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.detail__head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex: none;
  padding: 12px 16px 8px;
}

.detail__what {
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
}

.detail__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detail__sub {
  font-size: var(--text-xs);
  color: var(--color-dim);
  white-space: nowrap;
}

/* What depends on this, before anything about it is changed */
.detail__usage {
  margin-left: auto;
  flex: none;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.detail__body {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  padding: 16px;
}
</style>
