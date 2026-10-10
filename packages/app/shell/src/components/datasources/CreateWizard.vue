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
 * Two steps: pick a type, then fill it in.
 *
 * Both halves used to sit in one column, so choosing a type pushed a form
 * below a grid of two dozen tiles and the whole thing had to be scrolled to
 * be understood. The type decides what the form even contains, which makes
 * it a step of its own rather than the first field of a long one.
 *
 * The shell is shared because creating a connection and creating a data
 * source are the same shape; what differs is the fields, which the caller
 * fills in through the `setup` slot.
 */
import { computed, ref, watch } from 'vue'
import { DButton, DIcon, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'

export interface TypeGroup {
  label: string
  types: string[]
}

const open = defineModel<boolean>({ required: true })
const type = defineModel<string>('type', { required: true })

const props = defineProps<{
  title: string
  /** The question above the tiles - what the choice is about. */
  lead: string
  groups: TypeGroup[]
  /** The model's sentence about a type, shown on its tile and in step two. */
  summaryOf: (type: string) => string | undefined
  iconOf: (type: string) => string
  /** Whether what is filled in so far is enough. */
  ready: boolean
  createLabel?: string
}>()

const emit = defineEmits<{ create: [] }>()

const step = ref<1 | 2>(1)

/* Reopening starts at the beginning; the caller clears its own fields. */
watch(open, (isOpen) => {
  if (isOpen) step.value = 1
})

const shown = computed(() => props.groups.filter((group) => group.types.length))

function choose(each: string) {
  type.value = each
  step.value = 2
}
</script>

<template>
  <DModal v-model="open" :title="title" size="lg" @cancel="open = false">
    <!-- Step one: what kind of thing is this -->
    <div v-if="step === 1" class="pick">
      <p class="pick__lead">{{ lead }}</p>

      <section v-for="group in shown" :key="group.label" class="pick__group">
        <h3 v-if="shown.length > 1" class="pick__rubric">{{ group.label }}</h3>
        <ul class="tiles">
          <li v-for="each in group.types" :key="each">
            <button
              type="button"
              :class="['tile', { 'tile--on': type === each }]"
              @click="choose(each)"
            >
              <span class="tile__head">
                <DIcon :name="iconOf(each)" size="sm" class="tile__icon" />
                <span class="tile__name">{{ each }}</span>
                <DIcon v-if="type === each" name="check" size="sm" class="tile__check" />
              </span>
              <span v-if="summaryOf(each)" class="tile__what">{{ summaryOf(each) }}</span>
            </button>
          </li>
        </ul>
      </section>
    </div>

    <!-- Step two: the form that type implies -->
    <div v-else class="fill">
      <header class="chosen">
        <span class="chosen__icon" aria-hidden="true">
          <DIcon :name="iconOf(type)" size="lg" />
        </span>
        <div class="chosen__text">
          <span class="chosen__name">{{ type }}</span>
          <p v-if="summaryOf(type)" class="chosen__what">{{ summaryOf(type) }}</p>
        </div>
        <DButton intent="quiet" size="sm" @click="step = 1">Anderer Typ</DButton>
      </header>

      <div class="fill__fields">
        <slot name="setup" />
      </div>
    </div>

    <template #actions>
      <DButton v-if="step === 2" intent="quiet" @click="step = 1">Zurück</DButton>
      <DButton intent="quiet" @click="open = false">Abbrechen</DButton>
      <DButton
        v-if="step === 2"
        intent="primary"
        :disabled="!ready"
        @click="emit('create')"
      >
        {{ createLabel ?? 'Anlegen' }}
      </DButton>
    </template>
  </DModal>
</template>

<style scoped>
/* One rhythm for both steps: 8px inside a group, 24px between groups. */
.pick,
.fill {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pick__lead {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-dim);
}

.pick__group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pick__rubric {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--color-dim);
  text-transform: none;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tile {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  font: inherit;
  text-align: left;
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.tile:hover {
  border-color: var(--color-accent);
}

.tile:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.tile--on {
  border-color: var(--color-accent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.tile__head {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tile__icon {
  flex: none;
  color: var(--color-accent);
}

.tile__name {
  flex: 1;
  font-weight: 600;
  color: var(--color-fg);
}

.tile__check {
  flex: none;
  color: var(--color-accent);
}

/*
 * Three lines at most.
 *
 * The model's sentences run to different lengths, and a grid where one tile
 * is twice the height of its neighbour reads as broken. The full sentence
 * is on the second step, where there is room for it.
 */
.tile__what {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--color-dim);
}

.chosen {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.chosen__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 40px;
  height: 40px;
  color: var(--color-accent);
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.chosen__text {
  flex: 1;
  min-width: 0;
}

.chosen__name {
  font-weight: 600;
  color: var(--color-fg);
}

.chosen__what {
  margin: 2px 0 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--color-dim);
}

/* Every field the same distance apart, whatever control it holds. */
.fill__fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
