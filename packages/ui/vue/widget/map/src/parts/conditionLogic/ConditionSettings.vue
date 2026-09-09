<!--
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { Comperator, type ICondition } from './../../api/Renderer'
import { computed, type ModelRef, reactive, ref, useId } from 'vue'
import { DButton, DIcon, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'

export interface ThingProp {
  text: string,
  selector: string,
  suggestions?: any[]
}

const model: ModelRef<ICondition[]> = defineModel<ICondition[]>({
  default:
    () => reactive([])
})
const newCreateProp = ref('')
const newCreateValue = ref('')
const newCreateComperator = ref<Comperator>(Comperator.equals)

const thingsPropOptions: ModelRef<ThingProp[]> = defineModel<ThingProp[]>('thingProps', {
  default: () => reactive([{
      text: 'id',
      selector: '@iot.id'
    },
      {
        text: 'name',
        selector: 'name'
      },
      {
        text: 'decription',
        selector: 'description'
      },
      {
        text: 'property',
        selector: 'property'
      },
      {
        text: 'observation',
        selector: 'Observations.0.result'
      },
      {
        text: 'all',
        selector: '*'
      }]
  )
})

const ComperatorOptions = [{
  text: '==',
  selector: Comperator.equals
},
  {
    text: '>',
    selector: Comperator.greaterThen
  },
  {
    text: '>=',
    selector: Comperator.greaterThenEquals
  },
  {
    text: '<',
    selector: Comperator.lessThen
  },
  {
    text: '<=',
    selector: Comperator.lessThenEquals
  },
  {
    text: '!=',
    selector: Comperator.notEQuals
  }
]

/*
 * The property is picked from what the layer offers or typed in full: a
 * feature nobody has read yet is still a property, and the list is only
 * what has been seen so far. A datalist is the browser's own answer to
 * that - a text field with suggestions attached, so both ways of naming
 * one are the same control.
 */
const propListId = useId()
const valueListId = useId()

/** The suggestions the chosen property brings, if any were read with it. */
const suggestionsFor = (selector: string): any[] =>
  thingsPropOptions.value.find((option) => option.selector === selector)?.suggestions ?? []

const newValueSuggestions = computed(() => suggestionsFor(newCreateProp.value))

const labelFor = (selector: string): string =>
  ComperatorOptions.find((option) => option.selector === selector)?.text ?? String(selector)

/**
 * The cell being edited, as "<row>:<column>".
 *
 * A condition reads as a sentence until it is clicked, and turns into the
 * control for that one part while it is being changed. One at a time, so
 * the rest of the table stays readable.
 */
const editing = ref<string | undefined>(undefined)
const isEditing = (index: number, column: string) => editing.value === `${index}:${column}`
const edit = (index: number, column: string) => { editing.value = `${index}:${column}` }
const done = () => { editing.value = undefined }

/** A name that is not in the list yet becomes one, so it is offered next time. */
const rememberProp = (selector: string) => {
  if (!selector) return
  if (thingsPropOptions.value.some((option) => option.selector === selector)) return
  thingsPropOptions.value.push({ text: selector, selector })
}

const addContition = () => {
  rememberProp(newCreateProp.value)
  model.value.push({
    comperator: newCreateComperator.value,
    value: newCreateValue.value,
    prop: newCreateProp.value
  } as ICondition)
  newCreateComperator.value = Comperator.equals
  newCreateValue.value = ''
  newCreateProp.value = ''
}

const setProp = (condition: ICondition, selector: string) => {
  rememberProp(selector)
  condition.prop = selector
  done()
}
</script>

<template>
  <table class="conditions">
    <thead>
      <tr>
        <th class="conditions__head">Property</th>
        <th class="conditions__head">Is</th>
        <th class="conditions__head">Value</th>
        <th class="conditions__head conditions__head--end"></th>
      </tr>
      <tr class="conditions__new">
        <td>
          <input
            v-model="newCreateProp"
            :list="propListId"
            class="cell__input"
            placeholder="Property"
          >
          <datalist :id="propListId">
            <option v-for="option in thingsPropOptions" :key="option.selector" :value="option.selector">
              {{ option.text }}
            </option>
          </datalist>
        </td>
        <td>
          <DSelect
            v-model="newCreateComperator"
            :options="ComperatorOptions"
            label-key="text"
            value-key="selector"
            stacked
          />
        </td>
        <td>
          <input
            v-model="newCreateValue"
            :list="valueListId"
            class="cell__input"
            placeholder="Value"
          >
          <datalist :id="valueListId">
            <option v-for="(suggestion, at) in newValueSuggestions" :key="at" :value="suggestion" />
          </datalist>
        </td>
        <td class="conditions__end">
          <DButton
            intent="primary"
            :disabled="!newCreateProp || !newCreateValue"
            @click="addContition"
          >
            Add
          </DButton>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(condition, index) in model" :key="index">
        <td>
          <input
            v-if="isEditing(index, 'prop')"
            :value="condition.prop"
            :list="propListId"
            class="cell__input"
            @blur="setProp(condition, ($event.target as HTMLInputElement).value)"
            @keyup.enter="setProp(condition, ($event.target as HTMLInputElement).value)"
          >
          <span v-else class="cell__text" @click="edit(index, 'prop')">{{ condition.prop }}</span>
        </td>
        <td>
          <DSelect
            v-if="isEditing(index, 'comperator')"
            :model-value="condition.comperator"
            :options="ComperatorOptions"
            label-key="text"
            value-key="selector"
            stacked
            @update:model-value="(next: any) => { condition.comperator = next; done() }"
          />
          <span v-else class="cell__text" @click="edit(index, 'comperator')">
            {{ labelFor(condition.comperator) }}
          </span>
        </td>
        <td>
          <input
            v-if="isEditing(index, 'value')"
            :value="condition.value"
            :list="valueListId"
            class="cell__input"
            @blur="condition.value = ($event.target as HTMLInputElement).value; done()"
            @keyup.enter="condition.value = ($event.target as HTMLInputElement).value; done()"
          >
          <span v-else class="cell__text" @click="edit(index, 'value')">{{ condition.value }}</span>
        </td>
        <td class="conditions__end">
          <DButton intent="quiet" title="Remove condition" @click="model.splice(index, 1)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </td>
      </tr>
      <tr v-if="model.length === 0">
        <td class="conditions__empty" colspan="4">Nothing to match on yet.</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.conditions {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.conditions td,
.conditions th {
  padding: 3px 6px;
  text-align: left;
  vertical-align: middle;
}

.conditions__head {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.conditions__head--end,
.conditions__end {
  width: 1%;
  text-align: right;
  white-space: nowrap;
}

.conditions__new td {
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 7px;
}

.conditions tbody tr:hover {
  background: var(--color-raised);
}

.conditions__empty {
  padding: 10px 6px;
  color: var(--color-dim);
}

/* Reads as a word until it is pointed at, then says it can be changed */
.cell__text {
  display: inline-block;
  min-width: 40px;
  padding: 2px 4px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm, 3px);
  cursor: text;
}

.cell__text:hover {
  border-color: var(--color-divider);
}

.cell__input {
  width: 100%;
  padding: 2px 4px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm, 3px);
  background: var(--color-pane);
  color: var(--color-fg);
  font: inherit;
}

.cell__input:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
}
</style>
