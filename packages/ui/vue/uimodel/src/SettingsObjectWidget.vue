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
 * A setting that is one nested thing - the image widget's display options,
 * the video widget's fit.
 *
 * The list renderer beside this one covers the many-valued case; a single
 * containment had nothing, so the composer fell back to a text field and
 * offered an object where a form belonged. There is no accordion here: one
 * object is not a choice between entries, so its fields are shown under the
 * label as if they had been written out in place.
 *
 * A missing object is built through the package's factory rather than left
 * empty. The alternative is a form that shows nothing until someone presses
 * something, for a part of the settings that always exists.
 */
import { computed, watch } from 'vue'
import type { EClass, EObject, EStructuralFeature } from '@emfts/core'
import { UIModelComposer } from '@emfts/uimodel-composer'
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

/** The class the reference is typed against; without it nothing can be built. */
const valueClass = computed<EClass | undefined>(() => {
  try {
    return (props.feature as any)?.getEReferenceType?.() ?? undefined
  } catch {
    return undefined
  }
})

function read(): EObject | undefined {
  const name = props.feature?.getName?.()
  if (!name || !props.eObject) return undefined
  return (props.eObject as unknown as Record<string, any>)[name]
}

/*
 * Built once, on the object the caller holds - not returned from a computed.
 * Creating inside the getter would make every read produce a new instance,
 * and every edit land in the one before it.
 */
function ensureValue() {
  const eClass = valueClass.value
  const name = props.feature?.getName?.()
  if (!eClass || !name || !props.eObject || read()) return

  const factory = eClass.getEPackage?.()?.getEFactoryInstance?.()
  const created = factory?.create(eClass)
  if (!created) return
  // A fresh instance has no wrapper where the generator found no default
  ensureWrappers(created)
  ;(props.eObject as unknown as Record<string, any>)[name] = created
}

watch(() => [props.eObject, props.feature], ensureValue, { immediate: true })

const value = computed<EObject | undefined>(() => read())

/*
 * The form for the nested object: a written one if the widget shipped a
 * model for this class, otherwise derived from the class, so a nested
 * object is never blank for want of a form. Built once per class - the
 * composer compares metamodel objects by identity.
 */
const derived = new Map<EClass, ReturnType<typeof formFor>>()

const form = computed(() => {
  const eClass = valueClass.value
  if (!eClass) return undefined

  const written = formForClass(eClass)
  if (written) return written

  if (!derived.has(eClass)) derived.set(eClass, formFor(eClass, eClass.getName?.() ?? 'Eintrag'))
  return derived.get(eClass)
})
</script>

<template>
  <section class="object">
    <span v-if="label" class="object__label">{{ label }}</span>

    <p v-if="!valueClass" class="object__untyped">
      Diese Einstellung ist im Modell ohne Typ angegeben - es steht dort nur, dass etwas
      enthalten ist, nicht was. Solange das so ist, lässt sich hier nichts zeigen.
    </p>

    <div v-else class="object__body">
      <UIModelComposer v-if="form && value" :ui-model="form" :model="value" />
    </div>
  </section>
</template>

<style scoped>
.object {
  margin-bottom: 12px;
}

.object__label {
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--d-text-muted, #6b7280);
}

.object__body {
  padding-left: 10px;
  border-left: 2px solid var(--d-border, #e5e7eb);
}

.object__untyped {
  margin: 0;
  font-size: 12px;
  color: var(--d-text-muted, #6b7280);
}
</style>
