<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  A search over the cube: measures, dimensions, hierarchies, levels, named
  sets, KPIs and the members loaded so far, by caption or unique name. The
  hits drag into the editor like tree rows do.

  Only the top level's members are loaded, so a search that finds few of
  them asks the server once for the rest (state/metadata.ts says how);
  what it answers joins the hits below those already shown.
-->
<script setup lang="ts">
import { computed, inject, ref, shallowRef, watch } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { getCell, parseCellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { WORKBENCH } from '../state/workbench'
import {
  SERVER_SEARCH_BELOW,
  SERVER_SEARCH_MIN_LENGTH,
  emptyMetadata,
  entriesOf,
  memberSearchStatement,
  membersFromSearchCell,
  searchEntries,
  searchableHierarchies,
  type MetadataEntry,
} from '../state/metadata'

const emit = defineEmits<{
  (event: 'insert', text: string): void
  (event: 'inspect', entry: { title: string; kind: string; row: Record<string, unknown> }): void
}>()

const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

const query = ref('')
const debounced = ref('')
let timer: ReturnType<typeof setTimeout> | undefined
watch(query, value => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => (debounced.value = value), 200)
})

const entries = computed(() => entriesOf(wb.metadata.value))
/* One letter is a search too - for what starts with it, the best few first. */
const local = computed<MetadataEntry[]>(() => searchEntries(entries.value, debounced.value))

/* What the server found for the needle on screen, and whether it is still looking. */
const remote = shallowRef<{ needle: string; members: any[] } | null>(null)
const searching = ref(false)
const searchFailed = ref(false)
let asked = 0

function needsServer(needle: string): boolean {
  if (needle.length < SERVER_SEARCH_MIN_LENGTH) return false
  return local.value.filter(entry => entry.kind === 'member').length < SERVER_SEARCH_BELOW
}

async function askServer(needle: string) {
  const at = ++asked
  remote.value = null
  searchFailed.value = false
  searching.value = false
  if (!needsServer(needle)) return
  const hierarchies = searchableHierarchies(wb.metadata.value)
  const statement = memberSearchStatement(wb.cube.value, hierarchies, needle)
  if (!statement) return
  searching.value = true
  try {
    const cellset = parseCellset(await wb.execute(statement))
    if (at !== asked) return
    const members = cellset
      ? hierarchies.flatMap((hierarchy, index) => membersFromSearchCell(String(getCell(cellset, [index])?.value ?? ''), hierarchy))
      : []
    remote.value = { needle, members }
  } catch {
    if (at === asked) searchFailed.value = true
  } finally {
    if (at === asked) searching.value = false
  }
}

// The needle is debounced already; another cube's hierarchies ask again.
watch([() => debounced.value.trim(), () => wb.metadata.value.hierarchies], ([needle]) => void askServer(needle))

const hits = computed<MetadataEntry[]>(() => {
  const found = remote.value
  if (!found || found.needle !== debounced.value.trim()) return local.value
  const known = new Set(local.value.map(entry => entry.uniqueName.toLowerCase()))
  const more = entriesOf({ ...emptyMetadata(), members: found.members }).filter(entry => !known.has(entry.uniqueName.toLowerCase()))
  return [...local.value, ...searchEntries(more, found.needle)]
})

const BADGE: Record<MetadataEntry['kind'], string> = {
  measure: 'Σ',
  dimension: '◇',
  hierarchy: '⌗',
  level: 'L',
  member: '·',
  set: '{}',
  kpi: '◎',
}

function drag(event: DragEvent, entry: MetadataEntry) {
  event.dataTransfer?.setData('text/plain', entry.uniqueName)
}
</script>

<template>
  <div class="search">
    <input v-model="query" type="search" class="search__input" :placeholder="t('Explorer.search')" :aria-label="t('Explorer.search')" />
    <ul v-if="debounced.trim()" class="search__hits">
      <li
        v-for="entry in hits"
        :key="`${entry.kind}:${entry.uniqueName}`"
        class="search__hit"
        draggable="true"
        tabindex="0"
        :title="entry.uniqueName"
        @dragstart="drag($event, entry)"
        @click="emit('inspect', { title: entry.caption, kind: entry.kind, row: entry.row })"
        @dblclick="emit('insert', entry.uniqueName)"
        @keydown.enter="emit('insert', entry.uniqueName)"
      >
        <span class="search__badge" :class="`search__badge--${entry.kind}`">{{ BADGE[entry.kind] }}</span>
        <span class="search__caption">{{ entry.caption }}</span>
        <span class="search__name">{{ entry.uniqueName }}</span>
      </li>
      <li v-if="searching" class="search__none">{{ t('Explorer.searchingServer') }}</li>
      <li v-else-if="searchFailed" class="search__none">{{ t('Explorer.serverSearchFailed') }}</li>
      <li v-else-if="!hits.length" class="search__none">{{ t('Explorer.noHits') }}</li>
    </ul>
  </div>
</template>

<style scoped>
.search {
  padding: 6px 8px 0;
  flex: none;
  max-height: 50%;
  display: flex;
  flex-direction: column;
}

.search__input {
  font: inherit;
  font-size: var(--text-sm);
  padding: 3px 8px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-fg);
}

.search__hits {
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  overflow: auto;
  border-bottom: 1px solid var(--color-divider);
}

.search__hit {
  display: flex;
  gap: 6px;
  align-items: baseline;
  padding: 2px 4px;
  font-size: var(--text-sm);
  cursor: grab;
}

.search__hit:hover,
.search__hit:focus-visible {
  background: var(--color-raised);
  outline: none;
}

.search__badge {
  width: 16px;
  flex: none;
  text-align: center;
  color: var(--color-dim);
}

.search__badge--measure {
  color: var(--color-measure);
}

.search__badge--member {
  color: var(--color-member);
}

.search__caption {
  white-space: nowrap;
}

.search__name {
  color: var(--color-dim);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search__none {
  padding: 4px;
  color: var(--color-dim);
  font-size: var(--text-sm);
}
</style>
