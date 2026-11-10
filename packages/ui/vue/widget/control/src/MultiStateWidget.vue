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
/**
 * A multi-state button: each press moves to the next state, the last back
 * to the first, writes that state's value and sends `change`.
 *
 * The state shown is read from the target - the first whose value the
 * variable holds - so a variable changed elsewhere moves the button too.
 * Holding none of them, it shows the shared label and colour, and a press
 * goes to the first state.
 */
import { computed, toRefs } from 'vue'
import type { MultiStateSettings } from './gen/MultiStateSettings'
import { MultiStateSettingsImpl } from './gen/MultiStateSettingsImpl'
import { MultiStateWidgetInterface } from './api/MultiStateWidgetInterface'
import { listOf, sameValue, textOf, useControl } from './support/useControl'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<MultiStateSettings>('configv', { required: true })

class MultiStateWidgetApi extends MultiStateWidgetInterface {
  setValue(value: string): void {
    write(String(value ?? ''))
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new MultiStateWidgetApi()
defineExpose<MultiStateWidgetInterface>(api)

const { settings, current, label, color, look, disabled, put, write, operate } = useControl(config, widgetId, {
  type: 'MultiStateWidget',
  wrapped: { target: '' },
  create: () => new MultiStateSettingsImpl(),
  api,
  nameKey: 'control:Default.multiState',
})

interface State {
  label: string
  value: string
  color: string
}

const states = computed<State[]>(() =>
  listOf((settings.value as any)?.states).map((each: any) => ({
    label: textOf(each?.label),
    value: textOf(each?.value),
    color: textOf(each?.color),
  })),
)

const index = computed(() => states.value.findIndex((each) => sameValue(current(), each.value)))
const state = computed<State | undefined>(() => states.value[index.value])

const shownLabel = computed(() => (state.value ? state.value.label || state.value.value : label.value))
/* A state's own colour, else the control's, else the theme's (through look). */
const shownColor = computed(() => state.value?.color || color.value || undefined)

function press(): void {
  if (!states.value.length) return
  const next = states.value[(index.value + 1) % states.value.length]
  operate(next.value)
}
</script>

<template>
  <div class="control-multistate">
    <button
      type="button"
      class="control-multistate__face"
      :disabled="disabled"
      :data-state="index"
      :style="[look, shownColor ? { background: shownColor } : {}]"
      @click="press"
    >
      <span class="control-multistate__label">{{ shownLabel }}</span>
      <span v-if="states.length > 1" class="control-multistate__dots" aria-hidden="true">
        <span
          v-for="(each, at) in states"
          :key="at"
          class="control-multistate__dot"
          :class="{ 'control-multistate__dot--on': at === index }"
        ></span>
      </span>
    </button>
  </div>
</template>

<style scoped>
/* The tile: the button stands centred in it, at the size its text gives it. */
.control-multistate {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-sizing: border-box;
  overflow: hidden;
}

/* Text, padding and radius are in em: they grow with the font size. */
.control-multistate__face {
  min-width: min(100%, 6em);
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  border: none;
  border-radius: 0.45em;
  padding: 0.5em 1.4em;
  background: var(--control-face);
  color: var(--control-on-face);
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: filter 0.15s ease, box-shadow 0.05s ease, background-color 0.15s ease;
}

.control-multistate__label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Where in the cycle the button stands: one dot per state, the current one filled. */
.control-multistate__dots {
  display: flex;
  gap: 0.3em;
}

.control-multistate__dot {
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.6;
}

.control-multistate__dot--on {
  background: currentColor;
  opacity: 1;
}

.control-multistate__face:hover:not(:disabled) {
  filter: brightness(1.08);
}

/* Shade only: a moved face would change the layout (see the button). */
.control-multistate__face:active:not(:disabled) {
  filter: brightness(0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.35);
}

.control-multistate__face:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
