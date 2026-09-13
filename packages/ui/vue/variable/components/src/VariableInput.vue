<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/*
 * A value typed in, or a variable to take it from.
 *
 * The control itself comes from the caller through the slot; this adds the
 * switch beside it and, when it is thrown, the list of variables to bind
 * to.
 */
import { inject, onMounted, ref, computed, watch } from 'vue'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DIcon, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'

/*
 * Resolved here, which is the only place inject() works. It used to be
 * called inside four functions and a computed, where Vue hands back
 * undefined - the same mistake the variables page had.
 */
const variableRepository = inject<VariableRepository>(identifier)!

const model = defineModel<VariableWrapper<any>>({ required: true })
const props = defineProps<{ label?: string }>()

interface VariableOption {
  /** What the variable is called - what a binding is stored as. */
  name: string
  /** The name with what it currently says, which is what the list shows. */
  text: string
}

const options = ref<VariableOption[]>([])
const usesVariable = ref(false)

watch(
  () => model.value?.isSet,
  (isSet) => {
    if (isSet) usesVariable.value = true
  },
  { immediate: true },
)

/*
 * The value in the label rather than in a slot: the list used to render
 * "name (value)" through two of the framework's own slots, one for the
 * closed control and one for each row, saying the same thing twice.
 */
function describe(name: string): VariableOption {
  const variable = variableRepository?.getVariable(name)
  const value = variable?.value
  return { name, text: value === undefined || value === null ? name : `${name} (${value})` }
}

onMounted(() => {
  options.value = (variableRepository?.getAllVariables() ?? []).map(([name]) => describe(name))
})

/** Which variable is bound, as its name. */
const boundName = computed<string>({
  get: () => (model.value?.variable as string) ?? '',
  set(name: string) {
    if (!model.value) return
    const variable = variableRepository?.getVariable(name)
    if (variable) model.value.setTo(variable)
  },
})

/**
 * The new value, however the control reports it.
 *
 * A control in the slot may hand back the value or the event that carried
 * it - some inputs emit update:modelValue with the value, a plain input
 * emits an event. Reading both here is what lets the slot take any control
 * without its caller knowing which kind it got.
 */
function valueOf(given: unknown): string {
  const event = given as { target?: { value?: unknown } } | null
  if (event && typeof event === 'object' && event.target && 'value' in event.target) {
    return String(event.target.value ?? '')
  }
  return given == null ? '' : String(given)
}

const onChange = (given: unknown) => {
  if (model.value) model.value.value = valueOf(given)
}
</script>

<template>
  <div v-if="model" class="variable-input">
    <div class="input-block">
      <slot v-if="!usesVariable" :value="model.value" :change="onChange" />

      <DSelect
        v-else
        v-model="boundName"
        :label="props.label"
        :options="options"
        label-key="text"
        value-key="name"
        placeholder="Variable wählen"
      />
    </div>

    <!-- The switch, and whether it is thrown: bound is the accent, typed
         in is the quiet colour every other secondary mark uses. -->
    <button
      type="button"
      class="toggle"
      :aria-pressed="usesVariable"
      :title="usesVariable ? 'Wert selbst eingeben' : 'An eine Variable binden'"
      @click="usesVariable = !usesVariable"
    >
      <DIcon name="code" size="sm" :tone="usesVariable ? 'color-accent' : 'color-dim'" />
    </button>
  </div>
</template>

<style scoped>
.variable-input {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
}

.input-block {
  flex-grow: 1;
  min-width: 0;
}

.toggle {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 3px;
  border: 0;
  border-radius: var(--radius-xs);
  background: none;
  cursor: pointer;
}

.toggle:hover {
  background-color: color-mix(in srgb, var(--color-pane) 70%, transparent);
}

.toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
}
</style>
