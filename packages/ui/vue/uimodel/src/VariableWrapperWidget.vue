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
 * The renderer for a settings field.
 *
 * Widgets in this app hold their settings in VariableWrapper: a value that
 * may be a literal or bound to a variable, in which case it comes from
 * outside and must not be edited here. The wrapper stays in place - only
 * what is inside it changes - because the widget holds a reference to it
 * and would not see a replacement.
 *
 * The composer hands its context in `custom`, which is the contract every
 * widget registered with the registry sees.
 */
import { computed } from 'vue'
import type { EObject, EStructuralFeature } from '@emfts/core'
import { DCheckbox, DColorInput, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { kindOf, labelOf } from './buildForm'

const props = defineProps<{
  custom?: {
    eObject?: EObject
    feature?: EStructuralFeature
    resolvedStyle?: { label?: string; readOnly?: boolean; required?: boolean; placeholder?: string }
  }
}>()

/** The wrapper itself - never replaced, only read and written through. */
const wrapper = computed<any>(() => {
  const { eObject, feature } = props.custom ?? {}
  if (!eObject || !feature) return undefined
  const name = feature.getName?.()
  return name ? (eObject as unknown as Record<string, any>)[name] : undefined
})

const boundToVariable = computed(() => Boolean(wrapper.value?.variable))

const value = computed({
  get: () => wrapper.value?.value ?? '',
  set: (next) => {
    if (wrapper.value && !boundToVariable.value) wrapper.value.value = next
  },
})

const numeric = computed({
  get: () => {
    const raw = Number(wrapper.value?.value)
    return Number.isFinite(raw) ? raw : 0
  },
  set: (next) => {
    if (wrapper.value && !boundToVariable.value) wrapper.value.value = String(next)
  },
})

const flag = computed({
  get: () => wrapper.value?.value === true || wrapper.value?.value === 'true',
  set: (next) => {
    if (wrapper.value && !boundToVariable.value) wrapper.value.value = next
  },
})

const kind = computed(() => (props.custom?.feature ? kindOf(props.custom.feature) : 'text'))

const label = computed(
  () =>
    props.custom?.resolvedStyle?.label ??
    (props.custom?.feature ? labelOf(props.custom.feature) : ''),
)

const readOnly = computed(() => props.custom?.resolvedStyle?.readOnly || boundToVariable.value)

/** What a bound field says instead of its value. */
const boundHint = computed(() =>
  boundToVariable.value
    ? `Kommt aus der Variablen „${wrapper.value?.variable?.name ?? wrapper.value?.variable}“`
    : undefined,
)
</script>

<template>
  <div v-if="wrapper" :class="['bound-field', { 'bound-field--variable': boundToVariable }]">
    <DCheckbox v-if="kind === 'flag'" v-model="flag" :label="label" :disabled="readOnly" />

    <DColorInput
      v-else-if="kind === 'colour'"
      v-model="value"
      :label="label"
      :disabled="readOnly"
      :hint="boundHint"
    />

    <DInput
      v-else-if="kind === 'number'"
      v-model="numeric"
      :label="label"
      type="number"
      :disabled="readOnly"
      :hint="boundHint"
    />

    <DInput
      v-else
      v-model="value"
      :label="label"
      :disabled="readOnly"
      :placeholder="custom?.resolvedStyle?.placeholder"
      :hint="boundHint"
    />
  </div>
</template>

<style scoped>
/* A field whose value comes from a variable is marked, not hidden: you
   should see that it is set, and where from. */
.bound-field--variable {
  border-left: 2px solid var(--color-brand);
  padding-left: 6px;
  margin-left: -8px;
}
</style>
