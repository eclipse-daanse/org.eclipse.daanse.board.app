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
 * Words a person files something under.
 *
 * Enter or a comma commits one, Backspace in an empty field takes the last
 * one back. Tags already in use are offered while typing: a workspace where
 * the same thing is filed under "extern" and "Extern" is worse than one with
 * no tags at all, so they are lowercased and matched against what exists.
 */
import { computed, ref } from 'vue'
import { DChip, DField, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const model = defineModel<string[]>({ default: () => [] })

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    /** Every tag already used in the workspace, for the suggestions. */
    known?: string[]
  }>(),
  { known: () => [] },
)

const draft = ref('')

const suggestions = computed(() => {
  const term = draft.value.trim().toLowerCase()
  if (!term) return []
  return props.known
    .filter((tag) => tag.includes(term) && !model.value.includes(tag))
    .slice(0, 6)
})

function add(raw: string) {
  /* One shape for a tag, so "Extern" and "extern" are the same file. */
  const tag = raw.trim().toLowerCase()
  if (!tag || model.value.includes(tag)) {
    draft.value = ''
    return
  }
  model.value = [...model.value, tag]
  draft.value = ''
}

function remove(tag: string) {
  model.value = model.value.filter((each) => each !== tag)
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault()
    add(draft.value)
    return
  }
  if (event.key === 'Backspace' && !draft.value && model.value.length) {
    model.value = model.value.slice(0, -1)
  }
}
</script>

<template>
  <DField :label="label" :hint="hint" stacked>
    <div class="tags">
      <div v-if="model.length" class="tags__held">
        <DChip v-for="tag in model" :key="tag" tone="accent" removable @remove="remove(tag)">
          {{ tag }}
        </DChip>
      </div>
      <!-- The design system's own input, so this field's left edge and
           frame are the ones every other field has. -->
      <DInput
        v-model="draft"
        placeholder="Wort eingeben, Enter"
        stacked
        @keydown="onKey"
        @blur="add(draft)"
      />
      <div v-if="suggestions.length" class="tags__offer">
        <button
          v-for="tag in suggestions"
          :key="tag"
          type="button"
          class="tags__suggestion"
          @mousedown.prevent="add(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
  </DField>
</template>

<style scoped>
.tags {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tags__held {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tags__offer {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tags__suggestion {
  padding: 2px 8px;
  font-size: 0.8rem;
  color: var(--color-dim);
  background: none;
  border: 1px dashed var(--color-outline);
  border-radius: 999px;
  cursor: pointer;
}

.tags__suggestion:hover {
  color: var(--color-fg);
  border-style: solid;
  border-color: var(--color-accent);
}
</style>
