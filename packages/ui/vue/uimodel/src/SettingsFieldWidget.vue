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

/** Several values rather than one - a set of choices, not a value. */
const isMany = computed(() => {
  try {
    return props.feature?.isMany?.() === true || (props.feature?.getUpperBound?.() ?? 1) !== 1
  } catch {
    return false
  }
})

/*
 * The chosen values, whatever shape they arrive in.
 *
 * A generated class holds an EList; a board saved as JSON brings back a
 * plain array. Both are read through the same few operations so the rest
 * of this does not have to care which it got.
 */
function chosenList(): any {
  const name = props.feature?.getName?.()
  if (!name || !props.eObject) return undefined
  return (props.eObject as unknown as Record<string, any>)[name]
}

const chosen = computed<Array<string | number>>(() => {
  const list = chosenList()
  if (!list) return []
  if (typeof list.toArray === 'function') return list.toArray()
  return Array.isArray(list) ? list : []
})

function isChosen(value: string | number): boolean {
  return chosen.value.some((held) => held === value)
}

function toggle(value: string | number, on: boolean) {
  const list = chosenList()
  if (!list || !editable.value) return

  if (on) {
    if (isChosen(value)) return
    if (typeof list.add === 'function') list.add(value)
    else if (Array.isArray(list)) list.push(value)
    return
  }

  const at = chosen.value.findIndex((held) => held === value)
  if (at < 0) return
  if (typeof list.removeAt === 'function') list.removeAt(at)
  else if (Array.isArray(list)) list.splice(at, 1)
}

/** Reads and writes the plain attribute, for a field with no wrapper. */
const plain = computed<any>({
  get: () => {
    const held = readHeld()
    return holdsValue(held) ? (held as { value: unknown }).value : held
  },
  set: (next) => {
    const { eObject, feature } = props
    const name = feature?.getName?.()
    if (!eObject || !name) return

    /*
     * Written through, not over. A field can hold something that is not a
     * bindable wrapper but still keeps its value inside - the complex
     * string wrapper, which stores a text naming variables and hands back
     * the text with them substituted. Assigning the field would put a
     * string where that object was and lose what it does.
     */
    const held = readHeld()
    if (holdsValue(held)) {
      ;(held as { value: unknown }).value = next
      return
    }
    ;(eObject as unknown as Record<string, any>)[name] = next
  },
})

/** Something that keeps its value inside rather than being one. */
function holdsValue(held: unknown): boolean {
  return Boolean(held) && typeof held === 'object' && 'value' in (held as object)
}

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

/*
 * What a bound field says under itself. The colour field asked for this and
 * nothing defined it, so it read as undefined and fell through to the
 * placeholder - which is the one thing a bound field is not showing.
 */
const boundHint = computed(() => (isBound.value ? `Von „${boundName.value}“` : undefined))

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
/*
 * A model lists its values as text, because that is what XMI holds. Where
 * the feature they are stored in is a number, they are handed back as
 * numbers: a playback speed of "0.5" multiplies into a string, and the
 * chosen option would not match the stored one on the way back in either.
 */
const storesNumber = computed(() => {
  const type = props.feature?.getEType?.()?.getName?.()
  return type === 'EInt' || type === 'EDouble' || type === 'ELong' || type === 'EFloat'
})

const options = computed<Array<{ value: string | number; text: string }>>(() => {
  const raw = props.custom?.rawWidget
  const values = raw?.values
  const list: string[] = values && typeof values.map === 'function' ? [...values] : []
  const labelExpression = raw?.optionLabel

  return list.map((given) => {
    const value = storesNumber.value ? Number(given) : given
    let text = given
    if (labelExpression?.body && props.eObject) {
      try {
        const named = evaluateValue(labelExpression, props.eObject, { option: given })
        if (named != null && named !== '') text = String(named)
      } catch {
        // A label that will not evaluate leaves the value readable as itself
      }
    }
    return { value, text }
  })
})

/* How tall a text area is, when the form asks for one. */
const rows = computed<number>(() => Number(props.custom?.rawWidget?.rows) || 6)

const numberBounds = computed(() => ({
  min: props.custom?.rawWidget?.min,
  max: props.custom?.rawWidget?.max,
  step: props.custom?.rawWidget?.step,
}))

const kind = computed<'flag' | 'number' | 'colour' | 'choice' | 'lines' | 'set' | 'text'>(() => {
  /* Several values are a set of choices however the form names the field */
  if (isMany.value) return 'set'

  switch (modelKind.value) {
    case 'CheckboxWidget':
      return 'flag'
    case 'TextAreaWidget':
      return 'lines'
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

      <!-- Several values: every choice is shown, ticked or not. A list
           this size is read by scanning it, and a dropdown that has to be
           opened to see what is in it hides exactly that. -->
      <fieldset v-else-if="kind === 'set'" class="set">
        <legend class="set__label">{{ label }}</legend>
        <DCheckbox
          v-for="option in options"
          :key="String(option.value)"
          :model-value="isChosen(option.value)"
          :label="option.text"
          :disabled="!editable"
          @update:model-value="(on: boolean) => toggle(option.value, on)"
        />
      </fieldset>

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
        v-else-if="kind === 'lines'"
        v-model="value"
        :label="label"
        :rows="rows"
        :placeholder="custom?.resolvedStyle?.placeholder"
        :disabled="!editable"
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
.set {
  margin: 0 0 7px;
  padding: 0;
  border: 0;
}

.set__label {
  padding: 0;
  margin-bottom: 4px;
  font-size: 12px;
  color: var(--d-text-muted, #6b7280);
}

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
