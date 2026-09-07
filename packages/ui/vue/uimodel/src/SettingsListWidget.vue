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
import { formFor, labelOf } from './buildForm'
import { formForClass } from './loadUIModel'

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
 * The form for one entry.
 *
 * A written one if the widget shipped a model for this class - it can say
 * which values a field may take, which the derived one cannot. Otherwise
 * derived from the class, so a list is never empty for want of a form.
 * Built once per class either way: the composer compares metamodel objects
 * by identity, and a fresh model per render would defeat that.
 */
const derived = new Map<EClass, ReturnType<typeof formFor>>()

const entryForm = computed(() => {
  const eClass = entryClass.value
  if (!eClass) return undefined

  const written = formForClass(eClass)
  if (written) return written

  if (!derived.has(eClass)) derived.set(eClass, formFor(eClass, eClass.getName?.() ?? 'Eintrag'))
  return derived.get(eClass)
})

const open = ref(0)

/*
 * What to call an entry: whatever it calls itself, else its position.
 *
 * The candidates are the fields that name a thing rather than describe it -
 * a list of five whose entries are all called "Eintrag 3" is a list you
 * have to open one by one to find anything in.
 */
const NAMING = ['label', 'name', 'title', 'key', 'className', 'id']

function titleOf(entry: EObject, index: number): string {
  return nameIn(entry) ?? `${entryClass.value?.getName?.() ?? 'Eintrag'} ${index + 1}`
}

/**
 * A name held by the object, or by the one thing it contains.
 *
 * A map entry keeps its identity in its value rather than in itself, so
 * looking only at the entry leaves a list of "SvgClassConfigMapEntry 1"
 * through 5. One level in is enough; deeper is guessing.
 *
 * Only what the class declares is read. An EObject also carries eContainer
 * and eContainingFeature, and those have names of their own - the feature
 * such a list hangs off is called classesConfig, which would otherwise
 * title every entry in it that.
 */
function nameIn(object: unknown, depth = 1): string | undefined {
  if (typeof (object as EObject | undefined)?.eClass !== 'function') return undefined
  const held = object as unknown as Record<string, any>

  let features: EStructuralFeature[]
  try {
    features = [...(object as EObject).eClass().getEStructuralFeatures()]
  } catch {
    return undefined
  }

  for (const field of NAMING) {
    if (!features.some((feature) => feature.getName?.() === field)) continue
    const value = held[field]
    const own = value && typeof value === 'object' ? value.value : value
    if (own !== undefined && own !== null && String(own) !== '') return String(own)
  }

  if (depth < 1) return undefined
  for (const feature of features) {
    const name = feature.getName?.()
    const inner = name ? nameIn(held[name], depth - 1) : undefined
    if (inner) return inner
  }
  return undefined
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
