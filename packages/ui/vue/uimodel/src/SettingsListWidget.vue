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
 * A setting that is a list of things - the chart's series, and whatever
 * else a widget keeps more than one of.
 *
 * Each entry is a small form of its own, built from the class the list is
 * typed against. One entry is open at a time: a list of five series with
 * fourteen fields each is unreadable when it is all unfolded, and which
 * series you are editing is the one thing that must never be in doubt.
 *
 * Entries are created through the package's factory, so a new one is a
 * real instance of the right class - with its defaults, and able to say
 * what it is, which is what lets the same renderer draw its fields.
 */
import { computed, ref } from 'vue'
import type { EClass, EObject, EStructuralFeature } from '@emfts/core'
import { UIModelComposer } from '@emfts/uimodel-composer'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { ensureWrappers } from './adopt'
import { formFor } from './buildForm'
import { labelOf } from './buildForm'

const props = defineProps<{
  eObject?: EObject
  feature?: EStructuralFeature
  custom?: {
    resolvedStyle?: { label?: string; readOnly?: boolean }
    rawWidget?: any
  }
}>()

const label = computed(
  () => props.custom?.resolvedStyle?.label ?? (props.feature ? labelOf(props.feature) : ''),
)

const readOnly = computed(() => props.custom?.resolvedStyle?.readOnly === true)

/*
 * The list as the settings object holds it.
 *
 * A typed list is an EList - the generated class builds one that knows its
 * containment - while a list the model leaves untyped comes back as a
 * plain array. Both are read and written through the same few operations
 * so the rest of this component does not have to care which it got.
 */
function rawList(): any {
  const name = props.feature?.getName?.()
  if (!name || !props.eObject) return undefined
  return (props.eObject as unknown as Record<string, unknown>)[name]
}

const entries = computed<EObject[]>(() => {
  const list = rawList()
  if (!list) return []
  if (typeof list.toArray === 'function') return list.toArray()
  return Array.isArray(list) ? (list as EObject[]) : []
})

/** The class the list is typed against; without it nothing can be built. */
const entryClass = computed<EClass | undefined>(() => {
  try {
    return (props.feature as any)?.getEReferenceType?.() ?? undefined
  } catch {
    // An untyped list says only "some things" - see the note in the template
    return undefined
  }
})

/*
 * The form for one entry, derived from its class. Built once per class:
 * the composer compares metamodel objects by identity, and a fresh model
 * per render would defeat that.
 */
const entryForm = computed(() => {
  const eClass = entryClass.value
  return eClass ? formFor(eClass, eClass.getName?.() ?? 'Eintrag') : undefined
})

const open = ref(0)

/** What to call an entry: its own label if it has one, else its position. */
function titleOf(entry: EObject, index: number): string {
  const named = entry as unknown as Record<string, any>
  const own = named.label?.value ?? named.name?.value ?? named.title?.value
  return own ? String(own) : `${entryClass.value?.getName?.() ?? 'Eintrag'} ${index + 1}`
}

function add() {
  const eClass = entryClass.value
  const name = props.feature?.getName?.()
  if (!eClass || !name || !props.eObject) return

  const factory = eClass.getEPackage?.()?.getEFactoryInstance?.()
  const created = factory?.create(eClass)
  if (!created) return
  // A fresh instance has no wrapper where the generator found no default
  ensureWrappers(created)

  const list = rawList()
  if (!list) return
  if (typeof list.add === 'function') list.add(created)
  else if (Array.isArray(list)) list.push(created)
  else return
  open.value = entries.value.length - 1
}

function remove(index: number) {
  const list = rawList()
  if (!list) return
  if (typeof list.removeAt === 'function') list.removeAt(index)
  else if (Array.isArray(list)) list.splice(index, 1)
  else return
  open.value = Math.min(open.value, Math.max(entries.value.length - 1, 0))
}

function move(index: number, by: number) {
  const list = rawList()
  if (!list) return
  const to = index + by
  if (to < 0 || to >= entries.value.length) return
  if (typeof list.move === 'function') list.move(to, index)
  else if (Array.isArray(list)) {
    const [entry] = list.splice(index, 1)
    list.splice(to, 0, entry)
  } else return
  open.value = to
}
</script>

<template>
  <section class="list">
    <header class="list__head">
      <span class="list__label">{{ label }}</span>
      <span class="list__count">{{ entries.length }}</span>
      <span class="list__spacer" />
      <DButton v-if="entryClass && !readOnly" size="sm" @click="add">Hinzufügen</DButton>
    </header>

    <p v-if="!entryClass" class="list__untyped">
      Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind,
      nicht wovon. Solange das so ist, lässt sich hier nichts zeigen.
    </p>

    <p v-else-if="!entries.length" class="list__empty">Noch nichts angelegt.</p>

    <div v-for="(entry, index) in entries" :key="index" class="entry">
      <button
        type="button"
        class="entry__head"
        :aria-expanded="open === index"
        @click="open = open === index ? -1 : index"
      >
        <span class="entry__twist">{{ open === index ? '▾' : '▸' }}</span>
        <span class="entry__title">{{ titleOf(entry, index) }}</span>
      </button>

      <span v-if="!readOnly" class="entry__actions">
        <button type="button" title="Nach oben" :disabled="index === 0" @click="move(index, -1)">↑</button>
        <button
          type="button"
          title="Nach unten"
          :disabled="index === entries.length - 1"
          @click="move(index, 1)"
        >
          ↓
        </button>
        <button type="button" title="Entfernen" class="entry__remove" @click="remove(index)">✕</button>
      </span>

      <div v-if="open === index" class="entry__body">
        <UIModelComposer v-if="entryForm" :ui-model="entryForm" :model="entry" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  margin-bottom: 12px;
}

.list__head {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 5px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--color-divider);
}

.list__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
}

.list__count {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-dim);
}

.list__spacer {
  flex: 1 1 auto;
}

.list__empty,
.list__untyped {
  margin: 0 0 8px;
  font-size: var(--text-xs);
  line-height: 1.5;
  color: var(--color-dim);
}

.entry {
  position: relative;
  margin-bottom: 3px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.entry__head {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 5px 8px;
  padding-right: 78px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  text-align: left;
  background: none;
  border: 0;
  cursor: pointer;
}

.entry__twist {
  width: 10px;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.entry__actions {
  position: absolute;
  top: 3px;
  right: 5px;
  display: flex;
  gap: 2px;
}

.entry__actions button {
  width: 20px;
  height: 20px;
  font-size: var(--text-xs);
  color: var(--color-dim);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.entry__actions button:hover:not(:disabled) {
  color: var(--color-fg);
  border-color: var(--color-divider);
}

.entry__actions button:disabled {
  opacity: 0.3;
  cursor: default;
}

.entry__remove:hover:not(:disabled) {
  color: var(--color-err);
}

.entry__actions button:focus-visible,
.entry__head:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.entry__body {
  padding: 8px 10px 10px;
  border-top: 1px solid var(--color-divider);
}
</style>
