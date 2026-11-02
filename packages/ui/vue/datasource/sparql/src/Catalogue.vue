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
/**
 * What a DCAT catalogue holds, searched a page at a time.
 *
 * This is the endpoint finder, moved: it used to be a modal carrying one
 * hard-coded endpoint, which built connections and sources by itself. Here
 * the endpoint is the one this source reads through, and what is found is
 * offered rather than acted on.
 */
import { computed, inject, ref, watch } from 'vue'
import {
  identifier as CONNECTION_REPOSITORY,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { DButton, DChip, DIcon, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { askSparql } from './catalogue/ask'
import { catalogueQuery, pageFrom } from './catalogue/query'
import {
  FILE_TYPE,
  CONFORMS_TO,
  readsWith,
  shortFormat,
  type CatalogueEntry,
  type EntryKind,
} from './catalogue/types'

const props = defineProps<{ dataSource: any }>()

const { t } = useTranslation('datasourceSparql')

const connections = inject<ConnectionRepository>(CONNECTION_REPOSITORY)!

const PAGE = 20

const search = ref('')
const chosenFormats = ref<string[]>([])
const kind = ref<EntryKind | undefined>(undefined)
const entries = ref<CatalogueEntry[]>([])
const page = ref(0)
const more = ref(false)
const asking = ref(false)
const failure = ref<string | undefined>(undefined)
const asked = ref(false)

const offered = [
  { id: FILE_TYPE.XMLA, label: 'XMLA' },
  { id: FILE_TYPE.CSV, label: 'CSV' },
  { id: FILE_TYPE.JSON, label: 'JSON' },
  { id: FILE_TYPE.REST, label: 'REST' },
  { id: CONFORMS_TO.SENSORTHINGS, label: 'SensorThings' },
]

/* Named through a variable, so the collector is told they are in use.
  i18n-keys: datasourceSparql:Catalogue.all,
  i18n-keys: datasourceSparql:Catalogue.datasets,
  i18n-keys: datasourceSparql:Catalogue.services */
const kinds: { id: EntryKind | undefined; key: string }[] = [
  { id: undefined, key: 'Catalogue.all' },
  { id: 'dataset', key: 'Catalogue.datasets' },
  { id: 'service', key: 'Catalogue.services' },
]

function connection() {
  const uid = props.dataSource?.config?.connection
  if (!uid) return undefined
  try {
    return connections.getConnection(uid) as any
  } catch {
    return undefined
  }
}

let running: AbortController | undefined

async function load(at: number) {
  const live = connection()
  if (!live) {
    failure.value = t('Catalogue.noConnection')
    return
  }

  running?.abort()
  const mine = new AbortController()
  running = mine

  asking.value = true
  failure.value = undefined
  try {
    const answer = await askSparql(
      live,
      catalogueQuery({
        text: search.value,
        formats: chosenFormats.value,
        kind: kind.value,
        limit: PAGE,
        offset: at * PAGE,
      }),
      mine.signal,
    )
    if (running !== mine) return
    const read = pageFrom(answer, PAGE)
    entries.value = read.entries
    more.value = read.more
    page.value = at
    asked.value = true
  } catch (error) {
    if (mine.signal.aborted) return
    failure.value = error instanceof Error ? error.message : String(error)
  } finally {
    if (running === mine) asking.value = false
  }
}

/* Every change of what is asked starts at the first page again - page 4 of
  one search is not page 4 of the next. */
const first = () => load(0)

function toggleFormat(id: string) {
  const at = chosenFormats.value.indexOf(id)
  if (at === -1) chosenFormats.value.push(id)
  else chosenFormats.value.splice(at, 1)
  if (asked.value) first()
}

function chooseKind(id: EntryKind | undefined) {
  kind.value = id
  if (asked.value) first()
}

watch(
  () => props.dataSource?.config?.connection,
  () => {
    entries.value = []
    asked.value = false
    failure.value = undefined
    page.value = 0
  },
)

const nothingFound = computed(() => asked.value && !asking.value && !entries.value.length)
const showing = computed(() => ({
  from: page.value * PAGE + 1,
  to: page.value * PAGE + entries.value.length,
}))

const labelFor = (entry: CatalogueEntry) => readsWith(entry) ?? shortFormat(entry.format)
</script>

<template>
  <div class="catalogue">
    <form class="catalogue__ask" @submit.prevent="first">
      <!--
        The words stand over the row rather than over the field: a label
        on one of two controls makes that control taller than the other,
        and no alignment of the boxes can put the field and the button on
        one line afterwards.
      -->
      <h2 class="catalogue__asking">{{ t('Catalogue.search') }}</h2>
      <div class="catalogue__row">
        <DInput
          v-model="search"
          :aria-label="t('Catalogue.search')"
          :placeholder="t('Catalogue.searchPlaceholder')"
          type="search"
        />
        <DButton intent="primary" type="submit" :disabled="asking">
          {{ asking ? t('Catalogue.asking') : t('Catalogue.ask') }}
        </DButton>
      </div>
    </form>

    <div class="catalogue__filters">
      <div class="chips" role="group" :aria-label="t('Catalogue.kind')">
        <button
          v-for="each in kinds"
          :key="each.key"
          type="button"
          class="chip"
          :class="{ on: kind === each.id }"
          :aria-pressed="kind === each.id"
          @click="chooseKind(each.id)"
        >
          {{ t(each.key) }}
        </button>
      </div>

      <div class="chips" role="group" :aria-label="t('Catalogue.formats')">
        <button
          v-for="format in offered"
          :key="format.id"
          type="button"
          class="chip"
          :class="{ on: chosenFormats.includes(format.id) }"
          :aria-pressed="chosenFormats.includes(format.id)"
          @click="toggleFormat(format.id)"
        >
          {{ format.label }}
        </button>
      </div>
    </div>

    <p v-if="failure" class="catalogue__note" role="alert">
      <DIcon name="warning" size="lg" tone="color-err" />
      {{ t('Catalogue.failed', { reason: failure }) }}
    </p>

    <p v-else-if="nothingFound" class="catalogue__note" role="status">
      {{ t('Catalogue.nothing') }}
    </p>

    <template v-else-if="entries.length">
      <ul class="results">
        <li v-for="(entry, at) in entries" :key="`${entry.accessUrl}-${at}`" class="result">
          <div class="result__head">
            <DChip>{{ entry.kind === 'service' ? t('Catalogue.service') : t('Catalogue.dataset') }}</DChip>
            <h3 class="result__title">{{ entry.title || t('Catalogue.untitled') }}</h3>
            <DChip v-if="labelFor(entry)" class="result__format">{{ labelFor(entry) }}</DChip>
          </div>
          <p v-if="entry.description" class="result__description">{{ entry.description }}</p>
          <p class="result__where">
            <span class="result__url">{{ entry.accessUrl }}</span>
            <span v-if="entry.publisher"> · {{ entry.publisher }}</span>
          </p>
        </li>
      </ul>

      <nav class="pager" :aria-label="t('Catalogue.pages')">
        <DButton intent="quiet" size="sm" :disabled="page === 0 || asking" @click="load(page - 1)">
          {{ t('Catalogue.previous') }}
        </DButton>
        <span class="pager__at">{{ t('Catalogue.showing', showing) }}</span>
        <DButton intent="quiet" size="sm" :disabled="!more || asking" @click="load(page + 1)">
          {{ t('Catalogue.next') }}
        </DButton>
      </nav>
    </template>
  </div>
</template>

<style scoped>
.catalogue {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 12px;
}

.catalogue__ask {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.catalogue__asking {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-dim);
}

/* Two controls of one height, centred on each other. */
.catalogue__row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.catalogue__row > :first-child {
  flex: 1 1 auto;
}

/*
 * The field keeps a line under itself for a hint it has none of, as a
 * margin - which is outside its box and inside the row's. The row then
 * stands 33px while both controls are 26, and centring puts the button
 * three pixels below the field it belongs beside.
 */
.catalogue__row > :deep(.field) {
  margin-bottom: 0;
}

.catalogue__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  padding: 2px 10px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
  background: none;
  border: 1px solid var(--color-divider);
  border-radius: 999px;
  cursor: pointer;
}

.chip:hover {
  border-color: var(--color-outline);
  color: var(--color-fg);
}

.chip.on {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.catalogue__note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/*
 * The rows sit on the canvas, not on the pane around them.
 *
 * As cards with no ground of their own on a pale surface they read as one
 * undivided sheet, which is hard to scan and tiring to look at. The darker
 * ground is what makes each row a row.
 */
.results {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 8px;
  list-style: none;
  background-color: var(--color-canvas);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.result {
  padding: 10px 12px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.result__head {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.result__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.result__format {
  margin-left: auto;
}

.result__description {
  margin: 6px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.result__where {
  margin: 6px 0 0;
  font-family: var(--font-mono, monospace);
  font-size: var(--text-sm);
  color: var(--color-dim);
  overflow-wrap: anywhere;
}

.pager {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pager__at {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
