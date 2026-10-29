<!--
Copyright (c) 2026 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->

<script setup lang="ts">
/*
 * The four modes on a recorded FoodMart cellset, without a board: the
 * navigator as the widget mounts it, the real pivot table in it. Data:
 * Unit/Store Sales x product families x years and quarters (1998 empty) x
 * countries and states (Canada and Mexico empty).
 *
 * The editor beside it runs any statement against the demo server (proxied
 * by Vite as /xmla), so other cubes and axis shapes can be tried as well.
 */
import { computed, provide, ref, shallowRef, watch } from 'vue'
import { parseCellset, pivotSlice, positionsOf, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { XMLAApi } from 'org.eclipse.daanse.board.app.lib.connection.xmla/src/classes/xml'
import PivotTable from 'org.eclipse.daanse.board.app.ui.vue.common.xmla/src/PivotTable/PivotTable.vue'
import PivotNavigator from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/PivotNavigator.vue'
import { createNavigationStore, type NavigationSettings } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/store'
import { PIVOT_EVENTS } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/events'
import { metadata, salesCellset } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/testing'
import MdxEditor from './MdxEditor.vue'

const four = salesCellset()

/** The same answer as a three-axis one: the chapter named kept, the axis gone. */
function withoutChapters(cellset: Cellset, chapter: string): Cellset {
  const keep = positionsOf(cellset, 3).findIndex(p => p.label === chapter)
  const stride = cellset.axes.slice(0, 3).reduce((n, a) => n * a.positions.length, 1)
  const cells: Cellset['cells'] = {}
  for (const [ordinal, cell] of Object.entries(cellset.cells)) {
    const n = Number(ordinal)
    if (Math.floor(n / stride) === keep) cells[n % stride] = cell
  }
  return { ...cellset, axes: cellset.axes.slice(0, 3), axesInfo: cellset.axesInfo.slice(0, 3), cells }
}

const QUERY_RESULT = 'Query result'
const recorded: Record<string, Cellset> = {
  'Four axes (recorded)': four,
  'Three axes, USA (recorded)': withoutChapters(four, 'USA'),
}
const result = shallowRef<Cellset | null>(null)
const variants = computed(() => (result.value ? [...Object.keys(recorded), QUERY_RESULT] : Object.keys(recorded)))
const variant = ref('Four axes (recorded)')
const cellset = computed<Cellset | null>(() =>
  variant.value === QUERY_RESULT ? result.value : recorded[variant.value],
)

/*
 * The editor starts from an example: the statement the fixture was recorded
 * with, or one on OnTime - flights by weekday, distance groups as pages,
 * airlines as chapters. OnTime is ClickHouse behind a memory limit: its
 * time, airports and tail numbers are left out, and nothing drills through.
 */
const DIMENSION_PROPERTIES = 'DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME'
const examples: Record<string, { catalog: string; mdx: string }> = {
  'FoodMart (recorded)': { catalog: 'FoodMart', mdx: (metadata as { mdx: string }).mdx },
  'OnTime': {
    catalog: 'OnTime',
    mdx: [
      `SELECT NON EMPTY {[Measures].[Flights]} ${DIMENSION_PROPERTIES} ON 0,`,
      ` NON EMPTY Hierarchize({[Day of Week].[(All)].Members, [Day of Week].[Day of Week].Members}) ${DIMENSION_PROPERTIES} ON 1,`,
      ` NON EMPTY {[Distance Group].[Distance Group].Members} ${DIMENSION_PROPERTIES} ON 2,`,
      ` NON EMPTY {[Airline].[Airline].Members} ${DIMENSION_PROPERTIES} ON 3`,
      'FROM [OnTime (attributes)] CELL PROPERTIES VALUE, FORMAT_STRING, FORMATTED_VALUE',
    ].join('\n'),
  },
}
const example = ref('FoodMart (recorded)')
const mdx = ref(examples[example.value].mdx)
const catalog = ref(examples[example.value].catalog)
watch(example, name => {
  mdx.value = examples[name].mdx
  catalog.value = examples[name].catalog
})
const running = ref(false)
const status = ref('')
let controller: AbortController | null = null

async function run() {
  controller?.abort()
  controller = new AbortController()
  const { signal } = controller
  running.value = true
  status.value = 'Running…'
  const started = performance.now()
  try {
    const api = new XMLAApi({ url: `${location.origin}/xmla`, catalog: catalog.value })
    const response = await api.getMDX(mdx.value, catalog.value, 'Multidimensional', { signal })
    const fault = response?.Body?.Fault
    if (fault) throw new Error(fault.faultstring ?? 'The server answered with a fault')
    const parsed = parseCellset(response)
    if (!parsed) throw new Error('The answer holds no cellset')
    result.value = parsed
    variant.value = QUERY_RESULT
    const shape = parsed.axes.map(a => a.positions.length).join(' × ')
    status.value = `${parsed.axes.length} axes (${shape}), ${Math.round(performance.now() - started)} ms`
  } catch (error) {
    if (signal.aborted) return
    status.value = error instanceof Error ? error.message : String(error)
  } finally {
    if (!signal.aborted) running.value = false
  }
}

/*
 * Drillthrough asks the datasource for its connection; here that is the demo
 * server, on the catalog of the statement, for the cube it reads from.
 */
provide('datasource', computed(() => ({
  getConnection: () => ({ getApi: async () => new XMLAApi({ url: `${location.origin}/xmla`, catalog: catalog.value }) }),
})))
const cubeName = computed(() => /\bFROM\s+(\[[^\]]+\]|\w+)/i.exec(mdx.value)?.[1] ?? '')

function cancel() {
  controller?.abort()
  running.value = false
  status.value = 'Cancelled'
}

const settings = ref<NavigationSettings>({ mode: 'cascade', matrixLimit: 200 })
const store = createNavigationStore(cellset, settings)

const params = {
  // Not empty: the table reads axis 0 as columns and axis 1 as rows.
  rows: [{}],
  columns: [{}],
  measures: [],
  properties: [],
  showRowsProperties: false,
  showColumnsProperties: false,
}
const table = computed(() =>
  cellset.value
    ? { ...pivotSlice(cellset.value, store.state.slice, params), tableState: {} }
    : null,
)

const light = ref(false)
watch(light, on => document.documentElement.setAttribute('data-theme', on ? 'light' : 'dark'), { immediate: true })

/* What the widget would put on the board's bus. */
const log = ref<string[]>([])
const note = (line: string) => {
  log.value = [line, ...log.value].slice(0, 6)
}
watch(
  () => ({ ...store.state.slice }),
  slice => {
    const keys = {
      axis2: positionsOf(cellset.value!, 2)[slice.axis2]?.key ?? null,
      axis3: positionsOf(cellset.value!, 3)[slice.axis3]?.key ?? null,
    }
    note(`${PIVOT_EVENTS.sliceChanged} ${JSON.stringify(keys)}`)
  },
)
watch(
  () => store.state.selection.length,
  n => note(`${PIVOT_EVENTS.selectionChanged} (${n})`),
)

// For poking at it from the console.
;(window as unknown as { pivot: unknown }).pivot = { store, settings, cellset }
</script>

<template>
  <div class="harness">
    <header class="harness__bar">
      <strong>Pivot – pages and chapters</strong>
      <label>
        Data
        <select v-model="variant">
          <option v-for="name in variants" :key="name">{{ name }}</option>
        </select>
      </label>
      <label><input v-model="light" type="checkbox" /> Light</label>
      <code class="harness__state">{{ JSON.stringify({ slice: store.state.slice, selection: store.state.selection.length, ...settings }) }}</code>
    </header>
    <div class="harness__body">
    <main class="harness__widget">
      <PivotNavigator
        v-if="cellset && store.hasNavigation.value"
        v-model:settings="settings"
        :cellset="cellset"
        :store="store"
        :metadata="metadata"
        @hover="(axis, key) => key && note(`${PIVOT_EVENTS.memberHover} ${axis} ${key}`)"
      >
        <template #table="{ compact }">
          <!-- As the widget draws it: smaller in the Table mode's popover. -->
          <PivotTable
            v-if="table"
            v-bind="compact ? { fontSize: 11, defaultRowHeight: 22, defaultColumnWidth: 96 } : {}"
            :key="`${store.state.slice.axis2}:${store.state.slice.axis3}`"
            :model-value="table"
            :cube-name="cubeName"
            :rows-expanded-members="[]"
            :columns-expanded-members="[]"
            :properties-rows="[]"
            :properties-cols="[]"
          />
        </template>
      </PivotNavigator>
      <!-- Two axes have no pages or chapters to move through: the table alone, as in the widget. -->
      <PivotTable
        v-else-if="table"
        :key="`${store.state.slice.axis2}:${store.state.slice.axis3}`"
        :model-value="table"
        :cube-name="cubeName"
        :rows-expanded-members="[]"
        :columns-expanded-members="[]"
        :properties-rows="[]"
        :properties-cols="[]"
      />
    </main>
    <aside class="harness__editor" aria-label="MDX">
      <div class="harness__editor-bar">
        <strong>MDX</strong>
        <label>
          Example
          <select v-model="example">
            <option v-for="name in Object.keys(examples)" :key="name">{{ name }}</option>
          </select>
        </label>
        <label>
          Catalog
          <input v-model="catalog" class="harness__catalog" />
        </label>
        <span class="harness__spacer" />
        <button type="button" :disabled="mdx === examples[example].mdx" @click="mdx = examples[example].mdx">Reset</button>
        <button v-if="running" type="button" @click="cancel">Cancel</button>
        <button v-else type="button" class="harness__run" title="Ctrl/Cmd+Enter" @click="run">Run</button>
      </div>
      <MdxEditor v-model="mdx" class="harness__code" @run="run" />
      <p class="harness__status" :class="{ 'is-running': running }">{{ status || 'Ctrl/Cmd+Enter runs the statement against the demo server.' }}</p>
    </aside>
    </div>
    <footer class="harness__log" aria-live="polite">
      <div v-for="(line, i) in log" :key="i">{{ line }}</div>
    </footer>
  </div>
</template>

<style scoped>
.harness {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  gap: 0.5rem;
  padding: 0.75rem;
}

.harness__bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.harness__state {
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.harness__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 34%);
  gap: 0.5rem;
  min-height: 0;
}

.harness__widget {
  min-height: 0;
  overflow: auto;
  padding: 1rem;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.harness__editor {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 0;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.harness__editor-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid var(--color-divider);
}

.harness__editor-bar button {
  padding: 2px 10px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
  cursor: pointer;
}

.harness__editor-bar button:disabled {
  opacity: 0.5;
  cursor: default;
}

.harness__editor-bar .harness__run {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.harness__catalog {
  width: 8em;
  padding: 1px 4px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-xs);
  background: var(--color-bg);
  color: var(--color-fg);
}

.harness__spacer {
  flex: 1;
}

.harness__code {
  min-height: 0;
}

.harness__status {
  margin: 0;
  padding: 0.4rem 0.6rem;
  border-top: 1px solid var(--color-divider);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
  white-space: pre-wrap;
}

.harness__status.is-running {
  color: var(--color-accent);
}

.harness__log {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
  min-height: 6em;
}

/* A narrow window puts the editor under the widget. */
@media (max-width: 900px) {
  .harness {
    height: auto;
    min-height: 100vh;
  }

  .harness__body {
    grid-template-columns: minmax(0, 1fr);
  }

  .harness__widget {
    min-height: 70vh;
  }

  .harness__editor {
    height: 22rem;
  }
}
</style>
