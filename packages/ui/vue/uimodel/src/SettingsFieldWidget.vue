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
 * Most settings are held in a VariableWrapper: a value that is either given
 * here or taken from a variable. Both states are editable from this one
 * field - the {x} switches between them - because a setting driven from
 * outside is still a setting, and having to look somewhere else to see or
 * change that is what made the old form hard to read.
 *
 * Some are a plain attribute instead - a list entry's own fields, mostly.
 * They are drawn by the same component so that the widget class written in
 * the form still decides the control: without this the composer's own
 * fallback draws every one of them as a text area, and a five-value choice
 * became a box to type a guess into. Such a field has no wrapper to bind,
 * so the {x} is not offered.
 *
 * The wrapper object itself is never replaced, only written through: the
 * widget holds a reference to it and would not see a new one.
 */
import { computed, inject, ref, watch } from 'vue'
import { evaluateValue } from '@emfts/uimodel-composer'
import type { EObject, EStructuralFeature } from '@emfts/core'
import {
  identifier as VARIABLE_REPOSITORY,
  type VariableRepository,
} from 'org.eclipse.daanse.board.app.lib.api.variable'
import {
  DCheckbox,
  DColorInput,
  DInput,
  DSelect,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { kindOf, labelOf } from './buildForm'

const props = defineProps<{
  eObject?: EObject
  feature?: EStructuralFeature
  custom?: {
    resolvedStyle?: { label?: string; readOnly?: boolean; required?: boolean; placeholder?: string }
    rawWidget?: any
  }
}>()

/* Injected once, in setup - not inside the handlers that use it. */
const variables = inject<VariableRepository>(VARIABLE_REPOSITORY)

/** The wrapper itself - read and written through, never swapped out. */
const wrapper = computed<any>(() => {
  const held = readHeld()
  return isWrapper(held) ? held : undefined
})

function readHeld(): unknown {
  const { eObject, feature } = props
  if (!eObject || !feature) return undefined
  const name = feature.getName?.()
  return name ? (eObject as unknown as Record<string, any>)[name] : undefined
}

/*
 * A wrapper is recognised by what it offers, not by its class: the settings
 * object may come from the widget's own bundle with its own copy of the
 * class, and instanceof across bundles is false even when the shape is the
 * same.
 */
function isWrapper(held: unknown): boolean {
  return typeof (held as { setTo?: unknown } | undefined)?.setTo === 'function'
}

/** Whether this field is a wrapper at all - only those can be bound. */
const bindable = computed(() => props.feature != null && isWrapperFeature(props.feature))

function isWrapperFeature(feature: EStructuralFeature): boolean {
  try {
    return (feature as any).getEReferenceType?.()?.getName?.() === 'VariableWrapper'
  } catch {
    return false
  }
}

/** Reads and writes the plain attribute, for a field with no wrapper. */
const plain = computed<any>({
  get: () => readHeld(),
  set: (next) => {
    const { eObject, feature } = props
    const name = feature?.getName?.()
    if (!eObject || !name) return
    ;(eObject as unknown as Record<string, any>)[name] = next
  },
})

/* ------------------------------------------------------------ binding */

const boundName = computed<string>(() => (bindable.value ? (wrapper.value?.variable ?? '') : ''))
const isBound = computed(() => Boolean(boundName.value))

/** Switched on by the {x}, or by the field already being bound. */
const bindingMode = ref(false)
watch(isBound, (bound) => { if (bound) bindingMode.value = true }, { immediate: true })

const variableNames = computed<string[]>(() => {
  try {
    return (variables?.getAllVariables() ?? []).map(([name]: [string, unknown]) => name)
  } catch {
    return []
  }
})

const chosenVariable = computed<string>({
  get: () => boundName.value,
  set: (name) => {
    if (!wrapper.value) return
    if (!name) return release()
    const variable = variables?.getVariable(name)
    if (variable) wrapper.value.setTo(variable)
  },
})

/**
 * Frees the field from its variable, keeping the value it had.
 *
 * Assigning through the wrapper's own setter is what releases it - the
 * setter drops the reference. Writing the current value back means the
 * field does not jump when the binding goes.
 */
function release() {
  if (!wrapper.value) return
  wrapper.value.value = wrapper.value.value
  bindingMode.value = false
}

function toggleBinding() {
  if (isBound.value) release()
  else bindingMode.value = !bindingMode.value
}

/* -------------------------------------------------------------- value */

const editable = computed(() => !props.custom?.resolvedStyle?.readOnly && !isBound.value)

const value = computed({
  get: () => (bindable.value ? wrapper.value?.value : plain.value) ?? '',
  set: (next) => {
    if (!editable.value) return
    if (bindable.value) { if (wrapper.value) wrapper.value.value = next }
    else plain.value = next
  },
})

/*
 * A number stays a number.
 *
 * Writing it back as a string looked harmless - most settings end up in CSS
 * either way - but a series index is compared against the dataset's
 * position with ===, and "0" is not 0. The series was then never found and
 * everything set on it silently had no effect.
 *
 * An unset field reads as empty rather than as 0: showing a value that is
 * not there invites setting it by accident, and for the series index that
 * means claiming dataset 0.
 */
const numeric = computed<number | ''>({
  get: () => {
    const raw = bindable.value ? wrapper.value?.value : plain.value
    if (raw === undefined || raw === null || raw === '') return ''
    const parsed = Number(raw)
    return Number.isFinite(parsed) ? parsed : ''
  },
  set: (next) => {
    if (!editable.value) return
    const parsed = next === '' || next === null ? undefined : Number(next)
    value.value = parsed !== undefined && Number.isFinite(parsed) ? parsed : undefined
  },
})

const flag = computed({
  get: () => value.value === true || value.value === 'true',
  set: (next) => { value.value = next },
})

/* --------------------------------------------------------------- form */

/*
 * What the model said this field is. The widget class is the decision;
 * guessing from the name is the fallback for a derived form, where nobody
 * has decided anything yet.
 */
const modelKind = computed<string>(() => props.custom?.rawWidget?.eClass?.()?.getName?.() ?? '')

/*
 * The choices, and what they are called.
 *
 * A model lists the values the setting may take - they are what gets
 * stored, so they are the technical ones. Where a form also gives an
 * optionLabel, each value is run through it to get the words the reader
 * sees: "pedestrian" is what a route is calculated with, "Zu Fuß" is what
 * someone is choosing.
 */
const options = computed<Array<{ value: string; text: string }>>(() => {
  const raw = props.custom?.rawWidget
  const values = raw?.values
  const list: string[] = values && typeof values.map === 'function' ? [...values] : []

  const labelExpression = raw?.optionLabel
  if (!labelExpression?.body || !props.eObject) return list.map((value) => ({ value, text: value }))

  return list.map((value) => {
    let text = value
    try {
      const named = evaluateValue(labelExpression, props.eObject!, { option: value })
      if (named != null && named !== '') text = String(named)
    } catch {
      // A label that will not evaluate leaves the value readable as itself
    }
    return { value, text }
  })
})

const numberBounds = computed(() => ({
  min: props.custom?.rawWidget?.min,
  max: props.custom?.rawWidget?.max,
  step: props.custom?.rawWidget?.step,
}))

const kind = computed<'flag' | 'number' | 'colour' | 'choice' | 'text'>(() => {
  switch (modelKind.value) {
    case 'CheckboxWidget':
      return 'flag'
    case 'NumberWidget':
      return 'number'
    case 'SelectWidget':
    case 'ComboboxWidget':
      return 'choice'
    case 'InputWidget':
      // The metamodel has no colour widget; the name is what is left to go on
      return props.feature && kindOf(props.feature) === 'colour' ? 'colour' : 'text'
    default:
      return props.feature ? kindOf(props.feature) : 'text'
  }
})

const label = computed(
  () => props.custom?.resolvedStyle?.label ?? (props.feature ? labelOf(props.feature) : ''),
)

const noVariables = computed(() => bindingMode.value && variableNames.value.length === 0)
</script>

<template>
  <div v-if="wrapper || !bindable" :class="['field-row', { 'field-row--bound': isBound }]">
    <div class="field-row__control">
      <!-- Bound: the variable takes the place of the value -->
      <DSelect
        v-if="bindingMode && !noVariables"
        v-model="chosenVariable"
        :label="label"
        :options="variableNames"
        :disabled="custom?.resolvedStyle?.readOnly"
        placeholder="Keine Variable"
        clearable
      />

      <DInput
        v-else-if="noVariables"
        :model-value="''"
        :label="label"
        disabled
        hint="Es sind noch keine Variablen angelegt."
      />

      <DCheckbox
        v-else-if="kind === 'flag'"
        v-model="flag"
        :label="label"
        :disabled="!editable"
      />

      <DSelect
        v-else-if="kind === 'choice'"
        v-model="value"
        :label="label"
        :options="options"
        value-key="value"
        label-key="text"
        :disabled="!editable"
        clearable
      />

      <DColorInput
        v-else-if="kind === 'colour'"
        v-model="value"
        :label="label"
        :disabled="!editable"
        :hint="boundHint ?? custom?.resolvedStyle?.placeholder"
      />

      <DInput
        v-else-if="kind === 'number'"
        v-model="numeric"
        :label="label"
        type="number"
        :min="numberBounds.min"
        :max="numberBounds.max"
        :step="numberBounds.step"
        :disabled="!editable"
      />

      <DInput
        v-else
        v-model="value"
        :label="label"
        :placeholder="custom?.resolvedStyle?.placeholder"
        :disabled="!editable"
      />
    </div>

    <!-- The switch between a value of its own and one from outside;
         a plain attribute has no wrapper to bind, so it is left out -->
    <button
      v-if="bindable"
      type="button"
      :class="['bind', { on: isBound, armed: bindingMode && !isBound }]"
      :title="isBound ? `Bindung an „${boundName}“ lösen` : 'An eine Variable binden'"
      :aria-pressed="isBound"
      @click="toggleBinding"
    >
      {x}
    </button>
  </div>
</template>

<style scoped>
.field-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
}

.field-row__control {
  flex: 1 1 auto;
  min-width: 0;
}

/* A field whose value comes from outside says so, and stays legible */
.field-row--bound {
  border-left: 2px solid var(--color-brand);
  padding-left: 6px;
  margin-left: -8px;
}

.bind {
  width: 24px;
  height: 26px;
  flex: none;
  margin-top: 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-style: italic;
  color: var(--color-dim);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.bind:hover {
  color: var(--color-fg);
  border-color: var(--color-outline);
}

.bind.armed {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.bind.on {
  color: var(--color-brand);
  border-color: var(--color-brand);
  background-color: color-mix(in srgb, var(--color-brand) 14%, transparent);
}

.bind:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}
</style>
