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
  What the selected node is: its kind and role, where it sits, its text -
  and, where the text names something, what: the cube object a bracketed
  name resolves to, the overloads of a function the server knows.
-->
<script setup lang="ts">
import { computed, inject } from 'vue'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { signatureOf, groupFunctions, type FunctionEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import type { AstTreeRow } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { WORKBENCH } from '../state/workbench'
import { entriesOf } from '../state/metadata'

/* stale: the text is ahead of the tree, so the tree's offsets cut the wrong text out of it. */
const props = defineProps<{ row: AstTreeRow | null; text: string; stale?: boolean }>()
const emit = defineEmits<{
  (event: 'function', entry: FunctionEntry): void
  (event: 'inspect', entry: { title: string; kind: string; row: Record<string, unknown> }): void
}>()

// i18n-keys: workbench:Kinds.*
const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

const source = computed(() => props.row?.source as any)
const offset = computed<number | undefined>(() => source.value?.offset)
const length = computed<number | undefined>(() => source.value?.length)
const snippet = computed(() => {
  // A token carries its own text; a rule's is cut from the document, once that matches the tree again.
  const own = typeof source.value?.text === 'string' ? source.value.text : undefined
  if (own === undefined && (props.stale || offset.value === undefined || length.value === undefined)) return ''
  const text = own ?? props.text.slice(offset.value!, offset.value! + length.value!)
  return text.length > 240 ? `${text.slice(0, 240)}…` : text
})
const range = computed(() => {
  const r = props.row?.range
  return r ? t('Inspector.range', { line: r.start.line + 1, from: r.start.character + 1, toLine: r.end.line + 1, to: r.end.character + 1 }) : ''
})

const byName = computed(() => {
  const map = new Map<string, ReturnType<typeof entriesOf>[number]>()
  for (const entry of entriesOf(wb.metadata.value)) map.set(entry.uniqueName.toLowerCase(), entry)
  return map
})

/* The cube object the node's text is the name of, compared case-insensitively. */
const resolved = computed(() => {
  const text = snippet.value.trim().toLowerCase()
  return text ? (byName.value.get(text) ?? null) : null
})

/* A call's name is its `name` child in the tree. */
const functionName = computed(() => {
  const node = source.value
  if (!node?.children) return null
  if (!/Call|FunctionCall|MethodCall/.test(String(node.label ?? ''))) return null
  const name = node.children.find((c: any) => c.property === 'name')?.value
  return typeof name === 'string' ? name.replace(/^"|"$/g, '') : null
})
const fn = computed<FunctionEntry | null>(() => {
  const name = functionName.value?.toLowerCase()
  if (!name) return null
  return groupFunctions(wb.metadata.value.functions).find((e: FunctionEntry) => e.name.toLowerCase() === name) ?? null
})
</script>

<template>
  <section class="inspector" :aria-label="t('Inspector.title')">
    <header class="inspector__head">{{ t('Inspector.title') }}</header>
    <p v-if="!row" class="inspector__empty">{{ t('Inspector.empty') }}</p>
    <table v-else class="inspector__table">
      <tbody>
        <tr><th>{{ t('Inspector.node') }}</th><td>{{ row.chain ? row.chain.join(' › ') : row.label }}</td></tr>
        <tr v-if="source?.property"><th>{{ t('Inspector.role') }}</th><td>{{ source.property }}<template v-if="source.index !== undefined">[{{ source.index }}]</template></td></tr>
        <tr v-if="source?.kind"><th>{{ t('Inspector.kind') }}</th><td>{{ source.kind }}</td></tr>
        <tr v-if="range"><th>{{ t('Inspector.where') }}</th><td>{{ range }}</td></tr>
        <tr v-if="offset !== undefined"><th>{{ t('Inspector.offsets') }}</th><td>[{{ offset }}..{{ (offset ?? 0) + (length ?? 0) }})</td></tr>
        <tr v-if="snippet"><th>{{ t('Inspector.text') }}</th><td><code>{{ snippet }}</code></td></tr>
        <tr v-if="row.astId"><th>{{ t('Inspector.astNode') }}</th><td><code>{{ row.astId }}</code></td></tr>
        <template v-if="resolved">
          <tr><th>{{ t('Inspector.resolved') }}</th><td>{{ t(`Kinds.${resolved.kind}`) }} · {{ resolved.caption }}</td></tr>
          <tr v-if="resolved.description"><th>{{ t('Inspector.description') }}</th><td>{{ resolved.description }}</td></tr>
          <tr><th /><td><DButton size="sm" intent="quiet" @click="emit('inspect', { title: resolved.caption, kind: resolved.kind, row: resolved.row })">{{ t('Inspector.allColumns') }}</DButton></td></tr>
        </template>
        <template v-if="fn">
          <tr><th>{{ t('Inspector.function') }}</th><td><code>{{ signatureOf(fn.overloads[0]) }}</code></td></tr>
          <tr v-if="fn.description"><th>{{ t('Inspector.description') }}</th><td>{{ fn.description }}</td></tr>
          <tr><th /><td><DButton size="sm" intent="quiet" @click="emit('function', fn)">{{ t('Inspector.overloads', { count: fn.overloads.length }) }}</DButton></td></tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.inspector {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: var(--text-sm);
  background: var(--color-pane);
}

.inspector__head {
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-dim);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.inspector__empty {
  margin: 10px;
  color: var(--color-dim);
}

.inspector__table {
  margin: 4px 8px;
  border-collapse: collapse;
  overflow: auto;
}

.inspector__table th {
  padding: 2px 10px 2px 0;
  color: var(--color-dim);
  font-weight: 500;
  text-align: left;
  vertical-align: top;
  white-space: nowrap;
}

.inspector__table td {
  padding: 2px 0;
  word-break: break-word;
}

.inspector__table code {
  font-family: var(--font-mono);
  white-space: pre-wrap;
}
</style>
