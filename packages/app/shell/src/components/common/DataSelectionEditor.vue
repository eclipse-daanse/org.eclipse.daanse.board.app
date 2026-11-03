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
  What the widget's source answers, and which part of it the widget takes
  (#1216).

  The selection is the widget's - Widget.selection in the model - and this
  only edits it. So it is saved with the board, and the preview beside the
  form follows it the moment it changes: the preview renders through the
  same wrapper that hands the board's widget its part.
-->

<script setup lang="ts">
import { computed, inject, shallowRef, watch } from 'vue'
import type { EObject } from '@emfts/core'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  FilterOperator,
  SelectionPick,
  WorkspaceFactory,
  type DataSelection,
  type Widget,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import helpers, { applySelection } from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { selectionSnapshot, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DCheckbox, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import DataTree from './DataTree.vue'

const props = defineProps<{
  widget: Widget
  /** The shapes the widget reads, as its provider declares them. */
  reads?: readonly string[] | string
}>()

const { t } = useTranslation('shell')
const repository = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!

/*
 * Read through the watched widget: the selection is contained in it, so
 * every change inside the selection notifies the widget.
 */
const watched = useEObject(() => props.widget as unknown as EObject)
/*
 * A function, not a computed: a computed handing back the same instance
 * does not tell what depends on it that something inside changed - only
 * the watched ref does, so everything reads through it (#1093).
 */
const held = () => watched.value as unknown as Widget | undefined
const spec = computed(() => selectionSnapshot(held()?.selection as never))

/* ---------------------------------------------------------- the source */

const sourceId = computed<string>(
  () => (held()?.datasource as { uid?: string } | undefined)?.uid ?? ((held()?.config as any)?.datasourceId as string) ?? '',
)

/** The shapes a selection can say something about. */
const SELECTABLE = ['object', 'DataTable', 'geojson']

/*
 * The shape the widget will receive: the first it reads that the source
 * answers. That is what the selection is applied to, so it is what is
 * fetched and shown here.
 */
const shape = computed<string | null>(() => {
  if (!sourceId.value || !Array.isArray(props.reads)) return null
  let answers: readonly string[] | undefined
  try {
    answers = repository.getDatasourceIdentifiers(repository.getDatasourceType(sourceId.value))?.answers
  } catch {
    answers = undefined
  }
  const reads = props.reads as readonly string[]
  const fitting = answers?.length ? reads.filter((read) => answers!.includes(read)) : reads
  return fitting.find((read) => SELECTABLE.includes(read)) ?? null
})

const answer = shallowRef<unknown>(undefined)
const loading = shallowRef(false)
const failed = shallowRef<string | null>(null)

/* Which read is the current one; an outdated answer says nothing. */
let reading = 0

watch(
  [sourceId, shape],
  async ([id, kind]) => {
    const mine = ++reading
    answer.value = undefined
    failed.value = null
    if (!id || !kind) return
    loading.value = true
    try {
      const got = await repository.getDatasource(id).getData(kind)
      if (mine !== reading) return
      answer.value = got
    } catch (error) {
      if (mine !== reading) return
      failed.value = error instanceof Error ? error.message : String(error)
    } finally {
      if (mine === reading) loading.value = false
    }
  },
  { immediate: true },
)

/* ------------------------------------------------- what the path reaches */

/** The elements a filter, a pick and the fields act on - or null. */
const elements = computed<unknown[] | null>(() => {
  const got = answer.value as any
  if (got === undefined || got === null) return null
  if (shape.value === 'DataTable') return Array.isArray(got.items) ? got.items : null
  if (shape.value === 'geojson') return Array.isArray(got.features) ? got.features : null
  const reached = helpers.widget.getValueByPath(got, spec.value?.path || null)
  return Array.isArray(reached) ? reached : null
})

/* The object the fields act on, where the path reaches one rather than a list. */
const single = computed<Record<string, unknown> | null>(() => {
  if (shape.value !== 'object' || elements.value) return null
  const reached = helpers.widget.getValueByPath(answer.value, spec.value?.path || null)
  return reached && typeof reached === 'object' ? (reached as Record<string, unknown>) : null
})

/*
 * The fields offered for filters and for keeping: what the first entries
 * hold, one level into nested objects. A table offers its headers, in
 * their order.
 */
const keys = computed<string[]>(() => {
  if (shape.value === 'DataTable') return [...(((answer.value as any)?.headers as string[]) ?? [])]
  const found = new Set<string>()
  const look = (entry: unknown) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return
    for (const [key, value] of Object.entries(entry as Record<string, unknown>)) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        for (const inner of Object.keys(value as object)) found.add(`${key}.${inner}`)
      } else {
        found.add(key)
      }
    }
  }
  if (elements.value) elements.value.slice(0, 50).forEach(look)
  else look(single.value)
  return [...found]
})

/* ------------------------------------------------------------- the result */

const result = computed(() => (shape.value ? applySelection(answer.value, spec.value, shape.value) : undefined))

const resultCount = computed<number | null>(() => {
  const got = result.value as any
  if (shape.value === 'DataTable') return Array.isArray(got?.items) ? got.items.length : null
  if (shape.value === 'geojson') return Array.isArray(got?.features) ? got.features.length : null
  return Array.isArray(got) ? got.length : null
})

/** At most this much of the result is written out. */
const SHOWN = 4000

const resultText = computed(() => {
  if (result.value === undefined) return ''
  const text = JSON.stringify(shape.value === 'DataTable' ? (result.value as any)?.items : result.value, null, 2) ?? ''
  return text.length > SHOWN ? text.slice(0, SHOWN) + '\n…' : text
})

/* ------------------------------------------------------------ editing */

const factory = () => WorkspaceFactory.eINSTANCE

/** The widget's selection, made on the first edit. */
function selection(): DataSelection {
  const widget = props.widget
  if (!widget.selection) widget.selection = factory().createDataSelection()
  return widget.selection
}

/*
 * A new path reaches other elements, and the filters and fields chosen
 * for the old ones mean nothing there - so they go with it.
 */
function choosePath(path: string) {
  const current = selection()
  if ((current.path ?? '') === path) return
  current.path = path
  current.filters.clear()
  current.fields.clear()
  current.pick = SelectionPick.ALL
  current.index = 0
}

/* The option labels are built from the enum values - declared for scripts/i18n.mjs:
 * i18n-keys: shell:WidgetSettings.selection.pick.*
 * i18n-keys: shell:WidgetSettings.selection.operator.* */
const pickOptions = computed(() =>
  (['ALL', 'FIRST', 'LAST', 'INDEX'] as const).map((uid) => ({ uid, name: t(`WidgetSettings.selection.pick.${uid}`) })),
)

const operatorOptions = computed(() =>
  Object.values(FilterOperator).map((uid) => ({ uid, name: t(`WidgetSettings.selection.operator.${uid}`) })),
)

const pick = computed<string>({
  get: () => spec.value?.pick ?? 'ALL',
  set: (value) => {
    selection().pick = (value || SelectionPick.ALL) as never
  },
})

const index = computed<number | null>({
  get: () => spec.value?.index ?? 0,
  set: (value) => {
    const parsed = Number(value)
    selection().index = Number.isFinite(parsed) && parsed >= 0 ? Math.floor(parsed) : 0
  },
})

function addFilter() {
  const filter = factory().createDataFilter()
  filter.field = keys.value[0] ?? ''
  filter.operator = FilterOperator.EQUALS
  filter.value = ''
  selection().filters.push(filter)
}

function setFilter(at: number, feature: 'field' | 'operator' | 'value', value: unknown) {
  const filter = selection().filters.get(at)
  if (filter) (filter as any)[feature] = value === null || value === undefined ? '' : String(value)
}

function removeFilter(at: number) {
  selection().filters.removeAt(at)
}

const keeps = (key: string) => !!spec.value?.fields?.includes(key)

function keep(key: string, kept: boolean | undefined) {
  const fields = selection().fields
  if (kept && !fields.includes(key)) fields.push(key)
  if (!kept && fields.includes(key)) fields.remove(key)
}

function clearSelection() {
  props.widget.selection = undefined as never
}
</script>

<template>
  <section class="selection" :aria-label="t('WidgetSettings.selection.title')">
    <p v-if="!sourceId" class="selection__note">{{ t('WidgetSettings.selection.noSource') }}</p>
    <p v-else-if="!shape" class="selection__note">{{ t('WidgetSettings.selection.notSelectable') }}</p>
    <p v-else-if="loading" class="selection__note">{{ t('WidgetSettings.selection.loading') }}</p>
    <p v-else-if="failed" class="selection__note selection__note--error">
      {{ t('WidgetSettings.selection.failed', { reason: failed }) }}
    </p>
    <p v-else-if="answer === undefined || answer === null" class="selection__note">
      {{ t('WidgetSettings.selection.empty') }}
    </p>

    <template v-else>
      <h3 class="selection__head">{{ t('WidgetSettings.selection.answerHead') }}</h3>
      <p v-if="shape === 'object'" class="selection__hint">{{ t('WidgetSettings.selection.pathHint') }}</p>
      <div v-if="shape === 'object'" class="selection__tree">
        <DataTree :value="answer" :chosen="spec?.path ?? ''" @choose="choosePath" />
      </div>
      <p v-if="shape === 'object'" class="selection__path">
        <span>{{ t('WidgetSettings.selection.path') }}</span>
        <code>{{ spec?.path || t('WidgetSettings.selection.wholeAnswer') }}</code>
      </p>

      <template v-if="elements">
        <h3 class="selection__head">
          {{ t('WidgetSettings.selection.elementsHead', { count: elements.length }) }}
        </h3>

        <div class="selection__pick">
          <DSelect v-model="pick" :label="t('WidgetSettings.selection.pickLabel')" :options="pickOptions" />
          <DInput
            v-if="pick === 'INDEX'"
            v-model="index"
            type="number"
            :label="t('WidgetSettings.selection.index')"
          />
        </div>

        <div class="selection__filters">
          <div v-for="(filter, at) in spec?.filters ?? []" :key="at" class="filter" data-filter>
            <DSelect
              :model-value="filter.field"
              :options="keys"
              :label="t('WidgetSettings.selection.field')"
              @update:model-value="setFilter(at, 'field', $event)"
            />
            <DSelect
              :model-value="filter.operator"
              :options="operatorOptions"
              :label="t('WidgetSettings.selection.operatorLabel')"
              @update:model-value="setFilter(at, 'operator', $event)"
            />
            <DInput
              v-if="filter.operator !== 'EXISTS'"
              :model-value="filter.value"
              :label="t('WidgetSettings.selection.value')"
              @update:model-value="setFilter(at, 'value', $event)"
            />
            <DButton intent="quiet" size="sm" :aria-label="t('WidgetSettings.selection.removeFilter')" @click="removeFilter(at)">✕</DButton>
          </div>
          <DButton size="sm" data-add-filter @click="addFilter">{{ t('WidgetSettings.selection.addFilter') }}</DButton>
        </div>
      </template>

      <template v-if="keys.length && shape !== 'geojson'">
        <h3 class="selection__head">{{ t('WidgetSettings.selection.fieldsHead') }}</h3>
        <p class="selection__hint">{{ t('WidgetSettings.selection.fieldsHint') }}</p>
        <div class="selection__fields">
          <DCheckbox
            v-for="key in keys"
            :key="key"
            :model-value="keeps(key)"
            :label="key"
            @update:model-value="keep(key, $event)"
          />
        </div>
      </template>

      <h3 class="selection__head">
        {{ t('WidgetSettings.selection.resultHead') }}
        <span v-if="resultCount !== null" class="selection__count" :data-result-count="resultCount">
          {{ t('WidgetSettings.selection.resultCount', { count: resultCount }) }}
        </span>
      </h3>
      <pre class="selection__result">{{ resultText }}</pre>

      <DButton v-if="held()?.selection" intent="quiet" size="sm" @click="clearSelection">
        {{ t('WidgetSettings.selection.clear') }}
      </DButton>
    </template>
  </section>
</template>

<style scoped>
.selection {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.selection__head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 8px 0 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
}
.selection__count {
  font-weight: 400;
  color: var(--color-dim);
}
.selection__note,
.selection__hint {
  margin: 0;
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-dim);
}
.selection__note--error {
  color: var(--color-danger, #b3261e);
}
.selection__tree {
  max-height: 260px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  background: var(--color-canvas);
}
.selection__path {
  display: flex;
  gap: 8px;
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}
.selection__path code {
  font-family: var(--font-mono);
  color: var(--color-fg);
}
.selection__pick {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.selection__filters {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}
.filter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 6px;
  align-items: end;
  width: 100%;
}
.selection__fields {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 2px 12px;
}
.selection__result {
  max-height: 220px;
  overflow: auto;
  margin: 0;
  padding: 8px;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  background: var(--color-canvas);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  white-space: pre;
}
</style>
