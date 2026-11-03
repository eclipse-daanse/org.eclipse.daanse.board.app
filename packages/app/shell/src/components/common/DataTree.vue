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
  A source's answer as a tree a person can point into (#1216).

  Drawn only as far as it is open, and an open list only as far as its
  first entries: a preview that drew every node of a large answer took
  seconds and left the page stuttering (#1182). Choosing a node hands its
  path up - in the syntax of a $value placeholder, which is what the
  selection's path is.
-->

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

defineOptions({ name: 'DataTree' })

const props = withDefaults(
  defineProps<{
    value: unknown
    /** The path of this node; empty at the root. */
    path?: string
    /** The key it sits under in its parent. */
    label?: string
    /** The path that is chosen now, to mark it. */
    chosen?: string
    depth?: number
  }>(),
  { path: '', label: '', chosen: '', depth: 0 },
)

const emit = defineEmits<{ choose: [path: string] }>()

const { t } = useTranslation('shell')

/** How many entries of an open list are drawn before the rest are offered. */
const PAGE = 50

const isList = computed(() => Array.isArray(props.value))
const isBranch = computed(() => props.value !== null && typeof props.value === 'object')

/* The root starts open - a closed root shows nothing to choose from. */
const open = ref(props.depth === 0)
const shown = ref(PAGE)

const entries = computed<Array<[string, unknown]>>(() => {
  if (!isBranch.value) return []
  const all = isList.value
    ? (props.value as unknown[]).map((entry, index) => [String(index), entry] as [string, unknown])
    : Object.entries(props.value as Record<string, unknown>)
  return all.slice(0, shown.value)
})

const size = computed(() =>
  isList.value ? (props.value as unknown[]).length : isBranch.value ? Object.keys(props.value as object).length : 0,
)

const childPath = (key: string) => (props.path ? `${props.path}.${key}` : key)

/** What a leaf says about itself, short enough for one line. */
const summary = computed(() => {
  if (isList.value) return t('WidgetSettings.selection.listOf', { count: size.value })
  if (isBranch.value) return t('WidgetSettings.selection.objectOf', { count: size.value })
  if (typeof props.value === 'string') return JSON.stringify(props.value.length > 60 ? props.value.slice(0, 60) + '…' : props.value)
  return String(props.value)
})
</script>

<template>
  <div class="node" :style="{ '--depth': depth }">
    <div class="node__row" :class="{ chosen: chosen === path }">
      <button
        v-if="isBranch"
        type="button"
        class="node__toggle"
        :aria-expanded="open"
        :aria-label="open ? t('WidgetSettings.selection.collapse') : t('WidgetSettings.selection.expand')"
        @click="open = !open"
      >{{ open ? '▾' : '▸' }}</button>
      <span v-else class="node__toggle" aria-hidden="true" />
      <button type="button" class="node__pick" :title="path || t('WidgetSettings.selection.wholeAnswer')" @click="emit('choose', path)">
        <span class="node__key">{{ depth === 0 ? t('WidgetSettings.selection.answer') : label }}</span>
        <span class="node__value" :class="{ branch: isBranch }">{{ summary }}</span>
      </button>
    </div>
    <template v-if="open && isBranch">
      <DataTree
        v-for="[key, entry] in entries"
        :key="key"
        :value="entry"
        :label="key"
        :path="childPath(key)"
        :chosen="chosen"
        :depth="depth + 1"
        @choose="emit('choose', $event)"
      />
      <button v-if="size > shown" type="button" class="node__more" @click="shown += PAGE">
        {{ t('WidgetSettings.selection.more', { count: size - shown }) }}
      </button>
    </template>
  </div>
</template>

<style scoped>
.node__row {
  display: flex;
  align-items: center;
  gap: 2px;
  padding-left: calc(var(--depth) * 14px);
  border-radius: var(--radius-xs);
}
.node__row.chosen {
  background: color-mix(in srgb, var(--color-accent) 16%, transparent);
}
.node__toggle {
  flex: 0 0 18px;
  height: 22px;
  border: 0;
  background: none;
  color: var(--color-dim);
  cursor: pointer;
  font-size: var(--text-xs);
}
span.node__toggle {
  cursor: default;
}
.node__pick {
  display: flex;
  gap: 8px;
  min-width: 0;
  flex: 1;
  padding: 2px 4px;
  border: 0;
  background: none;
  color: var(--color-fg);
  text-align: left;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  border-radius: var(--radius-xs);
}
.node__pick:hover,
.node__pick:focus-visible {
  background: color-mix(in srgb, var(--color-fg) 7%, transparent);
}
.node__key {
  flex: none;
}
.node__value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-dim);
}
.node__value.branch {
  font-style: italic;
}
.node__more {
  margin: 2px 0 2px calc((var(--depth) + 1) * 14px + 20px);
  border: 0;
  background: none;
  color: var(--color-accent);
  cursor: pointer;
  font-size: var(--text-xs);
}
</style>
