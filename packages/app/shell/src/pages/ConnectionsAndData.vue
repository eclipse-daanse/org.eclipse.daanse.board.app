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
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { DButton, DIcon, DModal, DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  identifier as CONNECTION_REPOSITORY,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { useEList, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import DataTree, { type Selection } from '@/components/datasources/DataTree.vue'
import DatasourceEditor from '@/components/datasources/DatasourceEditor.vue'
import ConnectionEditor from '@/components/connections/ConnectionEditor.vue'
import { useDatasourceUsage } from '@/composables/useDatasourceUsage'
import { leavingADraft, type Draft } from '@/composables/leavingADraft'
import { useNewDatasource } from '@/composables/useNewDatasource'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'

const workspace = inject<Workspace>(WORKSPACE)!
const connectionRepository = inject<ConnectionRepository>(CONNECTION_REPOSITORY)!
const connections = useEList(workspace, (w) => w.connections)
const dataSources = useEList(workspace, (w) => w.datasources)

const datasourceRepository = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!
const { show: showNewDatasource } = useNewDatasource()

/**
 * A catalogue hit, made into a data source.
 *
 * The hit carries an address and the type that reads it; what it has no
 * way to carry is a connection, because a connection is a thing of this
 * workspace and not of the catalogue. One on the same address is reused,
 * and otherwise one is made of whatever kind that source type reads
 * through - which the type itself declares.
 *
 * Then the ordinary dialog, with both filled in. It asks for whatever
 * the type's model requires, which is the point: the endpoint finder
 * this replaces minted connection and source itself, from a format
 * string, past both their models (#1163).
 */
function createFromHit(hit: { type: string; url: string; name: string }) {
  const identifiers = datasourceRepository.getDatasourceIdentifiers(hit.type)
  const kind = identifiers?.connections?.[0]
  if (!kind) return

  const existing = connections.value.find(
    (each: any) => each.type === kind && (each.config as any)?.url === hit.url,
  )

  let uid = existing?.uid as string | undefined
  if (!uid) {
    const made = connectionRepository.createConnection(kind, { url: hit.url })
    made.name = hit.name
    try {
      connectionRepository.saveConnection(made)
    } catch (error) {
      /* Modelled but not live - the same as a connection made by hand
        whose configuration is not complete yet. */
      console.warn(`${made.uid} is not live yet:`, error)
    }
    uid = made.uid as string
  }

  showNewDatasource({ connection: uid, type: hit.type })
}
const { usageOf, usageLabel } = useDatasourceUsage()
const { t } = useTranslation('shell')

const selected = ref<Selection | undefined>(undefined)
const tab = ref('preview')

/*
 * What the address asks to be shown.
 *
 * The selection used to live only in this component, so nothing could
 * point at one connection or one source - the board screen names them,
 * and a name one cannot follow is a label. `?select=<uid>&kind=...`
 * names it; the tree still sets the selection as it did, and sending
 * the choice back into the address keeps a reload on the same thing.
 */
const route = useRoute()
const router = useRouter()

function fromAddress() {
  const uid = route.query.select as string | undefined
  if (!uid) return
  const kind = route.query.kind === 'DataSource' ? 'DataSource' : 'Connection'
  if (selected.value?.itemId === uid && selected.value?.type === kind) return
  selected.value = { type: kind, itemId: uid }
}

watch(() => [route.query.select, route.query.kind], fromAddress, { immediate: true })

watch(selected, (at) => {
  const asked = route.query.select as string | undefined
  if (at?.itemId === asked) return
  router.replace({
    query: at ? { ...route.query, select: at.itemId, kind: at.type } : { ...route.query, select: undefined, kind: undefined },
  })
})

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
 * Whether a connection has anything to look at, which is not the same
 * question as connection or source.
 *
 * Every source has its data. Most connections have nothing - an address and
 * a credential - but a catalogue does: a SPARQL endpoint holds the datasets
 * one came to browse. So the type is asked, rather than assumed.
 */
const showsPreview = computed(() => {
  const at = selected.value
  if (!at || at.type === 'DataSource') return false
  const type = (held.value as any)?.type
  return !!(type && connectionRepository.getConnectionIdentifiers(type)?.Preview)
})

/** The type of the selected source, where one is selected. */
const sourceType = computed(() => {
  if (selected.value?.type !== 'DataSource') return undefined
  return (held.value as any)?.type as string | undefined
})

/**
 * The tabs the selection brings.
 *
 * A source type says what views it has; one that says nothing has a
 * preview, which is what every type had before any could say otherwise
 * (#1178). A connection has one where its type offers one, and settings
 * alone otherwise.
 *
 * The settings tab is added here rather than declared, because
 * everything selectable has settings and none has to say so.
 */
const SETTINGS_TAB = 'settings'

const tabs = computed(() => {
  const settings = { id: SETTINGS_TAB, label: t('WidgetSettings.settings') }

  if (selected.value?.type === 'DataSource') {
    const declared = sourceType.value
      ? datasourceRepository.getDatasourceIdentifiers(sourceType.value)?.Views
      : undefined
    const views = declared?.length
      ? declared.map((view) => ({ id: view.id, label: t(view.label) }))
      : [{ id: 'preview', label: t('Data.preview') }]
    return [...views, settings]
  }

  return showsPreview.value
    ? [{ id: 'preview', label: t('Data.preview') }, settings]
    : [settings]
})

/* What you came to see, where there is something; the settings otherwise. */
watch([selected, sourceType, showsPreview], () => {
  tab.value = tabs.value[0]?.id ?? SETTINGS_TAB
})

/* Opening something else over a draft that is not saved asks first. */
const editor = ref<Draft | null>(null)
const { asking, mayLeave, answer: answerLeaving } = leavingADraft(editor)

const sameItem = (a?: Selection, b?: Selection) => a?.type === b?.type && a?.itemId === b?.itemId

/* What the tree picks; it becomes the selection once the draft is taken care of. */
const picked = computed<Selection | undefined>({
  get: () => selected.value,
  set: async (next) => {
    if (sameItem(next, selected.value)) return
    if (await mayLeave()) selected.value = next
  },
})

onBeforeRouteLeave(() => mayLeave())
</script>

<template>
  <div class="data-page">
    <aside class="data-page__tree">
      <DataTree v-model="picked" @find-endpoints="findEndpoints" @view="tab = $event" />
    </aside>

    <section class="data-page__detail">
      <p v-if="!selected" class="data-page__nothing">
        {{ t('Data.pick') }}
      </p>

      <template v-else>
        <header class="detail__head">
          <div class="detail__what">
            <h1 class="detail__name">{{ (held as any)?.name ?? selected.itemId }}</h1>
            <span v-if="subtitle" class="detail__sub">{{ subtitle }}</span>
          </div>
          <span v-if="usage" class="detail__usage">{{ t('Data.usedIn', { usage }) }}</span>
        </header>

        <DTabs v-model="tab" :tabs="tabs" :label="t('Data.view')" />

        <div class="detail__body">
          <ConnectionEditor
            v-if="selected.type === 'Connection'"
            :key="selected.itemId"
            :item-id="selected.itemId"
            :view="tab === 'preview' ? 'preview' : 'settings'"
            @close="selected = undefined"
          />
          <!-- One editor for both tabs: the query built in the preview
            is part of the draft that Save in the settings commits. -->
          <DatasourceEditor
            v-else
            ref="editor"
            :key="selected.itemId"
            :item-id="selected.itemId"
            :view="tab"
            @create-datasource="createFromHit"
            @close="selected = undefined"
          />
        </div>
      </template>
    </section>

    <DModal :model-value="asking" size="sm" @update:model-value="answerLeaving('stay')" @cancel="answerLeaving('stay')">
      <template #header>
        <DIcon name="warning" size="lg" tone="color-warn" />
        <h2 class="leaving__title">{{ t('Data.leaving.title') }}</h2>
      </template>
      <p class="leaving__text">{{ t('Data.leaving.text', { name: (held as any)?.name ?? '' }) }}</p>
      <template #actions>
        <DButton intent="quiet" @click="answerLeaving('stay')">{{ t('Data.leaving.stay') }}</DButton>
        <DButton intent="quiet" @click="answerLeaving('discard')">{{ t('Editor.discard') }}</DButton>
        <DButton intent="primary" @click="answerLeaving('save')">{{ t('common:Action.save') }}</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
.leaving__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.leaving__text {
  margin: 0 0 6px;
  color: var(--color-dim);
  line-height: 1.5;
}

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
