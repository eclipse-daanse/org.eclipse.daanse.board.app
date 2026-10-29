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
  The server explorer: OLAP (catalogs, their cubes, the rowsets scoped to a
  catalog), relational (tables and their columns, where the server has
  DBSCHEMA_TABLES) and every other Discover rowset the server declares.
  Each branch is asked for when it opens. A rowset's rows are listed up to
  a hundred; all of them go to the host to show in a grid.
-->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import TreeView from '../TreeView.vue'
import {
  TABLE_ROWSETS,
  TREE_ROW_LIMIT,
  dataTypeName,
  isMeasuresDimension,
  rowLabel,
  scopesOf,
  type ExplorerNode,
  type ExplorerText,
  type RowsetScopes,
} from './explorer'

type Discover = (requestType: string, restrictions?: Record<string, unknown>) => Promise<Record<string, unknown>[]>

const props = defineProps<{
  discover: Discover
  /** The catalog and cube in use, opened and marked. */
  catalog?: string
  cube?: string
  /** Changes when the server does; the tree starts over. */
  version?: number
}>()

const emit = defineEmits<{
  (event: 'use-cube', catalog: string, cube: string): void
  (event: 'show-rows', rows: { title: string; rows: Record<string, unknown>[]; fileName: string }): void
  (event: 'inspect', entry: { title: string; kind: string; row: Record<string, unknown> }): void
}>()

const { t } = useTranslation('xmla')

const nodes = ref<ExplorerNode[]>([])
const expanded = ref<string[]>([])
const filter = ref('')
const failed = ref<string | null>(null)
let scopes: RowsetScopes = { global: [], catalogScoped: [], declared: new Set(), restrictions: new Map() }

function rowsetNode(id: string, requestType: string, restrictions: Record<string, unknown>, catalog?: string): ExplorerNode {
  const declared = scopes.restrictions.get(requestType) ?? []
  const hint: ExplorerText = declared.length
    ? { key: 'xmla:Explorer.restrictions', params: { names: declared.join(', ') } }
    : { key: 'xmla:Explorer.noRestrictions' }
  return { id, label: requestType, kind: 'rowset', requestType, restrictions, catalog, hint, lazy: true, children: [] }
}

function describe(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

function message(id: string, key: string, params?: Record<string, unknown>): ExplorerNode {
  return { id, label: '', text: { key, params }, kind: 'message' }
}

/* Translated as drawn, never stored translated: see ExplorerText. */
function say(text: ExplorerText | undefined): string {
  return text ? t(text.key, text.params) : ''
}

function labelOf(node: ExplorerNode): string {
  return node.text ? say(node.text) : node.label
}

function badgeOf(node: ExplorerNode): string {
  return node.badgeText ? say(node.badgeText) : (node.badge ?? '')
}

async function build() {
  failed.value = null
  nodes.value = []
  try {
    scopes = scopesOf(await props.discover('DISCOVER_SCHEMA_ROWSETS'))
  } catch (error) {
    // A server without the meta-rowset still has catalogs and cubes.
    scopes = { global: [], catalogScoped: [], declared: new Set(), restrictions: new Map() }
  }
  let catalogs: Record<string, unknown>[] = []
  try {
    catalogs = await props.discover('DBSCHEMA_CATALOGS')
  } catch (error) {
    failed.value = error instanceof Error ? error.message : String(error)
    return
  }
  const names = catalogs.map(row => String(row.CATALOG_NAME))
  const olap: ExplorerNode = {
    id: 'olap',
    label: '',
    text: { key: 'xmla:Explorer.olap' },
    kind: 'group',
    children: catalogs.map((row, index) => ({
      id: `olap.${index}`,
      label: names[index],
      kind: 'catalog',
      catalog: names[index],
      row,
      lazy: true,
      children: [],
    })),
  }
  const relational: ExplorerNode = {
    id: 'relational',
    label: '',
    text: { key: 'xmla:Explorer.relational' },
    kind: 'group',
    badgeText: scopes.declared.has('DBSCHEMA_TABLES') ? undefined : { key: 'xmla:Explorer.unavailable' },
    children: scopes.declared.has('DBSCHEMA_TABLES')
      ? names.map((name, index) => ({
          id: `rel.${index}`,
          label: name,
          kind: 'catalog',
          catalog: name,
          requestType: 'DBSCHEMA_TABLES',
          restrictions: { TABLE_CATALOG: name },
          lazy: true,
          children: [],
        }))
      : [],
  }
  const rowsets: ExplorerNode = {
    id: 'rowsets',
    label: '',
    text: { key: 'xmla:Explorer.rowsets' },
    kind: 'group',
    badge: String(scopes.global.length),
    children: scopes.global.map(name => rowsetNode(`global.${name}`, name, {})),
  }
  nodes.value = [olap, relational, rowsets]
  expanded.value = ['olap', ...olap.children!.filter(c => c.catalog === props.catalog).map(c => c.id)]
  // The open catalog's cubes are there before anyone clicks - filled through
  // the ref, since a change to the plain object behind it is not drawn.
  const current = nodes.value[0]!.children!.find(c => c.catalog === props.catalog)
  if (current) await loadChildren(current).catch(() => undefined)
}

/*
 * A branch that fails says so in place and in the bar above - a request
 * the server refused must not look like an empty branch, or like nothing.
 * The error goes on to the tree, which leaves the branch lazy: closing and
 * opening it asks again, and an answer then clears the bar.
 */
async function loadChildren(node: ExplorerNode) {
  try {
    await fill(node)
    // Also for the branch opened here rather than by the tree.
    node.lazy = false
    failed.value = null
  } catch (error) {
    failed.value = describe(error)
    node.children = [message(`${node.id}.failed`, 'xmla:Explorer.branchFailed', { error: describe(error) })]
    throw error
  }
}

/** What a cube holds, down to its levels: each a discover restricted to the one above. */
const CUBE_PARTS: Record<string, { requestType: string; kind: ExplorerNode['kind']; key: string; label: string; next?: string; restrict?: string }> = {
  cube: { requestType: 'MDSCHEMA_DIMENSIONS', kind: 'dimension', key: 'DIMENSION_UNIQUE_NAME', label: 'DIMENSION_CAPTION', next: 'dimension' },
  dimension: { requestType: 'MDSCHEMA_HIERARCHIES', kind: 'hierarchy', key: 'HIERARCHY_UNIQUE_NAME', label: 'HIERARCHY_CAPTION', next: 'hierarchy', restrict: 'DIMENSION_UNIQUE_NAME' },
  hierarchy: { requestType: 'MDSCHEMA_LEVELS', kind: 'level', key: 'LEVEL_UNIQUE_NAME', label: 'LEVEL_CAPTION', restrict: 'HIERARCHY_UNIQUE_NAME' },
}

async function fillCubePart(node: ExplorerNode) {
  const part = CUBE_PARTS[node.kind]!
  const cube = String(node.row?.CUBE_NAME ?? node.restrictions?.CUBE_NAME ?? '')
  const base = { CATALOG_NAME: node.catalog, CUBE_NAME: cube }
  const restrictions = part.restrict ? { ...base, [part.restrict]: node.row?.[part.restrict] } : base
  const all = await props.discover(part.requestType, restrictions)
  // The measures dimension is the measures group below, not a second "Measures".
  const rows = node.kind === 'cube' ? all.filter(row => !isMeasuresDimension(row)) : all
  const children: ExplorerNode[] = rows.map((row, index) => ({
    id: `${node.id}.${part.kind}.${index}`,
    label: String(row[part.label] || row[part.key] || rowLabel(row)),
    kind: part.kind,
    catalog: node.catalog,
    restrictions: base,
    row,
    lazy: !!part.next,
    children: [],
  }))
  if (node.kind === 'cube') {
    const measures = await props.discover('MDSCHEMA_MEASURES', base)
    children.unshift({
      id: `${node.id}.measures`,
      label: '',
      text: { key: 'xmla:Explorer.measures' },
      kind: 'group',
      badge: String(measures.length),
      children: measures.map((row, index) => ({
        id: `${node.id}.measure.${index}`,
        label: String(row.MEASURE_CAPTION || row.MEASURE_NAME),
        kind: 'measure' as const,
        catalog: node.catalog,
        row,
      })),
    })
  }
  node.children = children.length ? children : [message(`${node.id}.none`, 'xmla:Explorer.noRows')]
}

async function fill(node: ExplorerNode) {
  if (CUBE_PARTS[node.kind]) return fillCubePart(node)
  if (node.kind === 'catalog' && node.id.startsWith('olap.')) {
    const cubes = await props.discover('MDSCHEMA_CUBES', { CATALOG_NAME: node.catalog })
    node.children = [
      ...cubes.map((row, index) => ({
        id: `${node.id}.cube.${index}`,
        label: String(row.CUBE_CAPTION || row.CUBE_NAME),
        kind: 'cube' as const,
        catalog: node.catalog,
        row,
        lazy: true,
        children: [],
      })),
      {
        id: `${node.id}.rowsets`,
        label: '',
        text: { key: 'xmla:Explorer.catalogRowsets' },
        kind: 'group' as const,
        badge: String(scopes.catalogScoped.length),
        children: scopes.catalogScoped.map(name =>
          rowsetNode(`${node.id}.rowset.${name}`, name, { CATALOG_NAME: node.catalog }, node.catalog),
        ),
      },
    ]
    return
  }
  if (node.kind === 'catalog' && node.requestType === 'DBSCHEMA_TABLES') {
    const tables = await props.discover('DBSCHEMA_TABLES', node.restrictions)
    node.children = tables.map((row, index) => ({
      id: `${node.id}.table.${index}`,
      label: String(row.TABLE_NAME),
      kind: 'table' as const,
      badgeText: String(row.TABLE_TYPE ?? '') === 'VIEW' ? { key: 'xmla:Explorer.view' } : undefined,
      row,
      catalog: node.catalog,
      requestType: 'DBSCHEMA_COLUMNS',
      restrictions: {
        TABLE_CATALOG: row.TABLE_CATALOG ?? node.catalog,
        ...(row.TABLE_SCHEMA ? { TABLE_SCHEMA: row.TABLE_SCHEMA } : {}),
        TABLE_NAME: row.TABLE_NAME,
      },
      lazy: scopes.declared.has('DBSCHEMA_COLUMNS') || TABLE_ROWSETS.some(r => scopes.declared.has(r.requestType)),
      children: [],
    }))
    if (!node.children.length) node.children = [message(`${node.id}.none`, 'xmla:Explorer.noRows')]
    return
  }
  if (node.kind === 'table') {
    const columns = scopes.declared.has('DBSCHEMA_COLUMNS') ? await props.discover('DBSCHEMA_COLUMNS', node.restrictions) : []
    const table = node.row ?? {}
    node.children = [
      ...columns.map((row, index) => ({
        id: `${node.id}.column.${index}`,
        label: String(row.COLUMN_NAME),
        kind: 'column' as const,
        badge: dataTypeName(row.DATA_TYPE),
        row,
      })),
      // The table's indexes, keys, constraints - as rowsets, by the names each one restricts on.
      ...TABLE_ROWSETS.filter(r => scopes.declared.has(r.requestType)).map(r =>
        rowsetNode(`${node.id}.${r.requestType}`, r.requestType, {
          [r.catalog]: table.TABLE_CATALOG ?? node.catalog,
          ...(table.TABLE_SCHEMA ? { [r.schema]: table.TABLE_SCHEMA } : {}),
          [r.table]: table.TABLE_NAME,
        }, node.catalog),
      ),
    ]
    return
  }
  if (node.kind === 'rowset' && node.requestType) {
    const rows = await props.discover(node.requestType, node.restrictions)
    emit('show-rows', { title: titleOf(node), rows, fileName: node.requestType })
    node.badge = String(rows.length)
    node.children = rows.slice(0, TREE_ROW_LIMIT).map((row, index) => ({
      id: `${node.id}.row.${index}`,
      label: rowLabel(row),
      kind: 'row' as const,
      row,
    }))
    if (rows.length > TREE_ROW_LIMIT) {
      node.children.push(message(`${node.id}.more`, 'xmla:Explorer.more', { count: rows.length - TREE_ROW_LIMIT }))
    } else if (!rows.length) {
      node.children.push(message(`${node.id}.none`, 'xmla:Explorer.noRows'))
    }
  }
}

function titleOf(node: ExplorerNode): string {
  const restrictions = Object.entries(node.restrictions ?? {})
    .map(([key, value]) => `${key}=${value}`)
    .join(', ')
  return restrictions ? `${node.requestType} · ${restrictions}` : String(node.requestType)
}

function activate(node: ExplorerNode) {
  if (node.kind === 'cube' && node.catalog && node.row) {
    emit('use-cube', node.catalog, String(node.row.CUBE_NAME))
  } else if (node.row) {
    emit('inspect', { title: labelOf(node), kind: node.kind, row: node.row })
  } else if (node.kind === 'rowset' && node.requestType) {
    failed.value = null
    void props.discover(node.requestType, node.restrictions).then(
      rows => emit('show-rows', { title: titleOf(node), rows, fileName: node.requestType! }),
      error => (failed.value = describe(error)),
    )
  }
}

const ICONS: Record<ExplorerNode['kind'], string> = {
  group: 'folder',
  catalog: 'inventory_2',
  cube: 'view_in_ar',
  measure: 'functions',
  dimension: 'category',
  hierarchy: 'account_tree',
  level: 'stairs',
  rowset: 'table_rows',
  row: 'subdirectory_arrow_right',
  table: 'table_chart',
  column: 'view_column',
  more: 'more_horiz',
  message: 'info',
}

onMounted(build)
watch(() => props.version, build)
</script>

<template>
  <div class="explorer">
    <input v-model="filter" class="explorer__filter" type="search" :placeholder="t('Explorer.filter')" />
    <p v-if="failed" class="explorer__failed">{{ t('Explorer.failed', { error: failed }) }}</p>
    <div class="explorer__tree">
      <TreeView v-model:expanded="expanded" :nodes="nodes" :filter="filter" text-by="label" :text-of="labelOf as any" :load-children="loadChildren as any">
        <template #content="node">
          <div
            class="explorer__row"
            :class="{
              'explorer__row--active': node.kind === 'cube' && node.catalog === catalog && (node.row as any)?.CUBE_NAME === cube,
              'explorer__row--quiet': node.kind === 'message' || node.kind === 'more',
            }"
            :title="node.kind === 'cube' ? t('Explorer.useCube') : node.hint ? say(node.hint as ExplorerText) : labelOf(node as any)"
            @click="activate(node as any)"
            @dblclick="activate(node as any)"
          >
            <DIcon :name="ICONS[(node as any).kind as ExplorerNode['kind']]" size="sm" tone="color-dim" />
            <span class="explorer__label">{{ labelOf(node as any) }}</span>
            <span v-if="badgeOf(node as any)" class="explorer__badge">{{ badgeOf(node as any) }}</span>
          </div>
        </template>
      </TreeView>
    </div>
  </div>
</template>

<style scoped>
.explorer {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.explorer__filter {
  margin: 6px 8px;
  padding: 3px 8px;
  font: inherit;
  font-size: var(--text-sm);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-fg);
}

.explorer__failed {
  margin: 4px 8px;
  font-size: var(--text-sm);
  color: var(--color-err);
}

.explorer__tree {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0 4px 8px;
}

.explorer__row {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  min-width: 0;
}

.explorer__row--active {
  color: var(--color-accent);
  font-weight: 600;
}

.explorer__row--quiet {
  color: var(--color-dim);
  font-style: italic;
}

.explorer__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.explorer__badge {
  margin-left: auto;
  padding: 0 5px;
  border-radius: var(--radius-xs);
  background: var(--color-raised);
  color: var(--color-dim);
  font-size: var(--text-xs);
  white-space: nowrap;
}
</style>
