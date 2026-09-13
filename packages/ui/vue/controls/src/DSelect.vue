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
 * A choice from a list.
 *
 * Built on the native select: it comes with keyboard handling, type-ahead
 * and the platform's own popup on touch devices, none of which is worth
 * rebuilding. Only the closed state is ours to style, which is exactly the
 * part that has to match the rest of the app.
 *
 * Options may be plain values or objects; valueKey and labelKey say which
 * field is which, so callers can pass the arrays they already have.
 */
import { computed, useId } from 'vue'

const model = defineModel<unknown>()

const props = withDefaults(
  defineProps<{
    options: Array<Record<string, unknown> | string | number>
    label?: string
    /** Field holding the value when options are objects. */
    valueKey?: string
    /** Field holding the text when options are objects. */
    labelKey?: string
    /**
     * Field holding the heading an option belongs under.
     *
     * With it the list is grouped; without it, flat. Grouping is what keeps
     * a list of a hundred readable - a widget's events under the widget's
     * name rather than a hundred lines of "Type:event".
     */
    groupKey?: string
    placeholder?: string
    hint?: string
    error?: string
    disabled?: boolean
    required?: boolean
    size?: 'sm' | 'md' | 'lg'
    /** Offers an empty choice. */
    clearable?: boolean
    /**
     * Several at once.
     *
     * The native control again: it opens as a list rather than a popup and
     * takes ctrl- and shift-click, which is what a person expects of a
     * multiple select on their own platform. The model is an array.
     */
    multiple?: boolean
    stacked?: boolean
  }>(),
  {
    valueKey: 'uid',
    labelKey: 'name',
    size: 'md',
    disabled: false,
    required: false,
    clearable: false,
    multiple: false,
    stacked: false,
  },
)

const id = useId()

interface Entry {
  value: unknown
  label: string
  /** The heading it belongs under, when the caller named one. */
  group?: string
}

const entries = computed<Entry[]>(() =>
  (props.options ?? []).map((option) => {
    if (option === null || typeof option !== 'object') {
      return { value: option, label: String(option) }
    }
    const record = option as Record<string, unknown>
    const value = props.valueKey in record ? record[props.valueKey] : record
    const label = props.labelKey in record ? record[props.labelKey] : value
    const group = props.groupKey ? record[props.groupKey] : undefined
    return { value, label: String(label ?? ''), group: group === undefined ? undefined : String(group) }
  }),
)

/**
 * The same entries under their headings, each keeping its position.
 *
 * The index is carried along because that is what the native select
 * addresses an option by, and grouping must not change which index means
 * which value.
 */
const groups = computed(() => {
  const byLabel = new Map<string, Array<{ index: number; label: string }>>()
  const loose: Array<{ index: number; label: string }> = []
  entries.value.forEach((entry, index) => {
    /* An option the caller gave no heading stands above the headings. */
    if (!entry.group) {
      loose.push({ index, label: entry.label })
      return
    }
    if (!byLabel.has(entry.group)) byLabel.set(entry.group, [])
    byLabel.get(entry.group)!.push({ index, label: entry.label })
  })
  return { loose, headed: [...byLabel].map(([label, options]) => ({ label, options })) }
})

/* The native select carries strings, so values are addressed by position. */
const selectedIndex = computed<string>({
  get() {
    const index = entries.value.findIndex((entry) => entry.value === model.value)
    return index >= 0 ? String(index) : ''
  },
  set(next: string) {
    model.value = next === '' ? undefined : entries.value[Number(next)]?.value
  },
})

/** The same, for several at once: the model is the values, not the places. */
const selectedIndexes = computed<string[]>({
  get() {
    const chosen = Array.isArray(model.value) ? model.value : []
    return entries.value
      .map((entry, index) => (chosen.includes(entry.value) ? String(index) : ''))
      .filter((index) => index !== '')
  },
  set(next: string[]) {
    model.value = next.map((index) => entries.value[Number(index)]?.value)
  },
})
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked, 'field--invalid': !!error }]">
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </label>

    <div class="field__control">
      <div :class="['shell', `shell--${size}`, { 'shell--invalid': !!error, 'shell--off': disabled }]">
        <select
          v-if="multiple"
          :id="id"
          v-model="selectedIndexes"
          :class="['select', 'select--many']"
          multiple
          :size="Math.min(Math.max(entries.length, 2), 8)"
          :disabled="disabled"
          :required="required"
          :aria-invalid="!!error || undefined"
        >
          <option v-for="(entry, index) in entries" :key="index" :value="String(index)">
            {{ entry.label }}
          </option>
        </select>

        <select
          v-else
          :id="id"
          v-model="selectedIndex"
          class="select"
          :disabled="disabled"
          :required="required"
          :aria-invalid="!!error || undefined"
        >
          <option v-if="clearable || model === undefined" value="">
            {{ placeholder ?? '—' }}
          </option>
          <template v-if="groupKey">
            <option
              v-for="entry in groups.loose"
              :key="entry.index"
              :value="String(entry.index)"
            >
              {{ entry.label }}
            </option>
            <optgroup v-for="group in groups.headed" :key="group.label" :label="group.label">
              <option v-for="entry in group.options" :key="entry.index" :value="String(entry.index)">
                {{ entry.label }}
              </option>
            </optgroup>
          </template>
          <option v-for="(entry, index) in entries" v-else :key="index" :value="String(index)">
            {{ entry.label }}
          </option>
        </select>
        <span v-if="!multiple" class="chevron" aria-hidden="true">▾</span>
      </div>

      <p v-if="error" class="field__error" role="alert">{{ error }}</p>
      <p v-else-if="hint" class="field__hint">{{ hint }}</p>
    </div>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 7px;
}

.field--stacked {
  flex-direction: column;
  align-items: stretch;
  gap: 3px;
}

.field__label {
  width: 112px;
  flex: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.field--stacked .field__label {
  width: auto;
}

.field__required {
  color: var(--color-err);
}

.field__control {
  flex: 1 1 auto;
  min-width: 0;
}

.field__hint,
.field__error {
  margin: 3px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-dim);
}

.field__error {
  color: var(--color-err);
}

.shell {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.shell:focus-within {
  border-color: var(--color-accent);
  outline: 1px solid var(--color-accent);
}

.shell--invalid {
  border-color: var(--color-err);
}

.shell--off {
  opacity: 0.5;
}

.shell--sm { height: 22px; }
.shell--md { height: 26px; }
.shell--lg { height: 32px; }

.shell:has(.select--many) {
  height: auto;
  padding: 0 2px;
}

.select {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding: 0 14px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  background: none;
  border: 0;
  outline: none;
  appearance: none;
  cursor: pointer;
}

.shell--lg .select {
  font-size: var(--text-base);
}

/* The list itself is drawn by the browser, which does not inherit the
   panel's colours - so the options get them explicitly. */
.select option {
  color: var(--color-fg);
  background-color: var(--color-pane);
}

/*
 * The headings need the same treatment, and one more thing: a browser
 * passes an optgroup's colour down to the options inside it, so the
 * options take theirs back below. Without this the heading keeps the
 * user agent's own colour and disappears into a dark list.
 */
.select optgroup {
  color: var(--color-dim);
  background-color: var(--color-pane);
  font-weight: 600;
  font-style: normal;
}

.select optgroup option {
  color: var(--color-fg);
}

/* A list rather than one line, so the shell grows with it. */
.select--many {
  height: auto;
  padding: 4px 0;
}

.chevron {
  position: absolute;
  right: 7px;
  font-size: 9px;
  color: var(--color-dim);
  pointer-events: none;
}
</style>
