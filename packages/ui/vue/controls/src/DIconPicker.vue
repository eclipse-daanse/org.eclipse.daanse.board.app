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
 * Picks a symbol, and only offers ones that exist.
 *
 * An icon here is a ligature: the font turns the word "sensors" into a
 * glyph. A word it does not know is left as the word, so a typo does not
 * fail - it renders as text of whatever width that word happens to be, and
 * pushes everything beside it out of line. Typing the name into a plain
 * input gives no sign of which of the two happened.
 *
 * So the list is measured rather than trusted: a ligature that resolved is
 * exactly one em wide, a word never is. Candidates that do not resolve are
 * dropped, which also means this keeps working if the font is ever swapped
 * for one with a different set.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import DIcon from './DIcon.vue'
import DField from './DField.vue'

const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    /** Drawn when nothing is chosen - the one inherited from elsewhere. */
    fallback?: string
    disabled?: boolean
  }>(),
  { fallback: 'category', disabled: false },
)

/*
 * Worth offering for boards, connections and data: protocols, shapes of
 * data, devices, places, time, state. Not the whole font - a thousand
 * glyphs is a worse answer than eighty, and anything missing can still be
 * typed.
 */
const CANDIDATES = [
  // data and its shapes
  'dataset', 'storage', 'table_chart', 'grid_on', 'list', 'view_list', 'account_tree',
  'schema', 'hub', 'share', 'category', 'inventory_2', 'folder', 'description', 'article',
  'code', 'data_object', 'data_array', 'functions', 'calculate', 'tag',
  // moving data around
  'api', 'cloud', 'cloud_download', 'cloud_upload', 'sync', 'swap_horiz', 'bolt',
  'rss_feed', 'router', 'lan', 'wifi', 'cable', 'dns', 'vpn_key', 'lock', 'key',
  // measuring and showing
  'insights', 'bar_chart', 'show_chart', 'pie_chart', 'stacked_line_chart', 'timeline',
  'speed', 'monitor_heart', 'thermostat', 'water_drop', 'air', 'bloodtype', 'scale',
  'trending_up', 'trending_down', 'leaderboard', 'analytics', 'query_stats',
  // things in the world
  'sensors', 'devices', 'memory', 'developer_board', 'precision_manufacturing', 'factory',
  'warehouse', 'home', 'apartment', 'store', 'agriculture', 'construction', 'build',
  'electric_bolt', 'solar_power', 'wind_power', 'battery_full', 'power',
  // where and when
  'place', 'map', 'route', 'explore', 'public', 'my_location', 'directions',
  'schedule', 'calendar_month', 'event', 'history', 'update', 'alarm', 'timer',
  // how it is going
  'check_circle', 'error', 'warning', 'info', 'help', 'visibility', 'flag', 'star',
  'bookmark', 'label', 'priority_high', 'notifications', 'campaign', 'verified',
  // people and work
  'person', 'group', 'badge', 'work', 'assignment', 'task_alt', 'science', 'biotech',
  'psychology', 'school', 'local_shipping', 'shopping_cart', 'payments', 'receipt_long',
]

const open = ref(false)
const search = ref('')
const draft = ref('')
const panel = ref<HTMLElement | undefined>()
const resolved = ref<string[]>([])

/**
 * Which candidates the loaded font actually draws.
 *
 * Measured once, off-screen: a resolved ligature is exactly as wide as the
 * font size, a word that was left as a word is not.
 */
function measure(): string[] {
  const probe = document.createElement('span')
  probe.setAttribute('aria-hidden', 'true')
  probe.style.cssText =
    'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";' +
    'font-size:24px;line-height:1;white-space:nowrap'
  document.body.appendChild(probe)
  const good: string[] = []
  for (const name of CANDIDATES) {
    probe.textContent = name
    if (Math.abs(probe.getBoundingClientRect().width - 24) < 1.5) good.push(name)
  }
  probe.remove()
  return good
}

/** Whether a name typed by hand draws as a glyph rather than as itself. */
function draws(name: string): boolean {
  if (!name.trim()) return true
  const probe = document.createElement('span')
  probe.style.cssText =
    'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";' +
    'font-size:24px;line-height:1;white-space:nowrap'
  probe.textContent = name.trim()
  document.body.appendChild(probe)
  const width = probe.getBoundingClientRect().width
  probe.remove()
  return Math.abs(width - 24) < 1.5
}

const typedIsReal = computed(() => draws(draft.value))

const shown = computed(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) return resolved.value
  return resolved.value.filter((name) => name.includes(term))
})

watch(open, async (isOpen) => {
  if (!isOpen) {
    window.removeEventListener('keydown', onKey)
    return
  }
  draft.value = model.value
  search.value = ''
  window.addEventListener('keydown', onKey)

  /*
   * The font may still be loading on the first open, and a measurement
   * taken before it lands rejects every candidate. Waiting for it is the
   * fix; showing them all anyway is the fallback, because an empty sheet
   * would be a worse answer than one with a few duds in it.
   */
  await nextTick()
  try {
    await document.fonts?.ready
  } catch {
    // no font loading API, or it never settles: measure what is there
  }
  const good = measure()
  resolved.value = good.length ? good : CANDIDATES
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

function choose(name: string) {
  model.value = name
  open.value = false
}

function clear() {
  model.value = ''
  open.value = false
}

function commitTyped() {
  if (!typedIsReal.value) return
  model.value = draft.value.trim()
  open.value = false
}
</script>

<template>
  <DField :label="label" :hint="hint" stacked>
    <div class="picker">
      <button
        type="button"
        class="picker__current"
        :disabled="disabled"
        :title="model || `${fallback} (vom Typ)`"
        @click="open = !open"
      >
        <DIcon :name="model || fallback" size="lg" />
      </button>
      <span class="picker__name">{{ model || `${fallback} — vom Typ` }}</span>
      <button v-if="model" type="button" class="picker__clear" @click="clear">
        Zurücksetzen
      </button>
    </div>

    <Teleport to="body">
      <template v-if="open">
        <div class="picker__catch" @click="open = false" />
        <div ref="panel" class="sheet" role="dialog" aria-label="Symbol wählen">
          <div class="sheet__search">
            <input v-model="search" type="search" placeholder="Symbol suchen…" autofocus />
          </div>

          <ul v-if="shown.length" class="sheet__grid">
            <li v-for="name in shown" :key="name">
              <button
                type="button"
                :class="['sheet__item', { 'sheet__item--on': model === name }]"
                :title="name"
                @click="choose(name)"
              >
                <DIcon :name="name" size="lg" />
              </button>
            </li>
          </ul>
          <p v-else class="sheet__none">Kein Symbol mit diesem Namen in der Auswahl.</p>

          <div class="sheet__own">
            <label class="sheet__own-label" for="icon-own">Anderer Name</label>
            <input
              id="icon-own"
              v-model="draft"
              type="text"
              placeholder="z. B. thermostat"
              @keydown.enter.prevent="commitTyped"
            />
            <span class="sheet__preview" aria-hidden="true">
              <DIcon v-if="typedIsReal && draft.trim()" :name="draft.trim()" size="md" />
            </span>
            <button
              type="button"
              class="sheet__take"
              :disabled="!typedIsReal || !draft.trim()"
              @click="commitTyped"
            >
              Übernehmen
            </button>
          </div>
          <p v-if="draft.trim() && !typedIsReal" class="sheet__warn">
            Dieses Symbol kennt die Schrift nicht — es würde als Text erscheinen.
          </p>
        </div>
      </template>
    </Teleport>
  </DField>
</template>

<style scoped>
.picker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.picker__current {
  display: grid;
  flex: none;
  place-items: center;
  width: 34px;
  height: 34px;
  color: var(--color-accent);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.picker__current:hover:not(:disabled) {
  border-color: var(--color-accent);
}

.picker__current:disabled {
  cursor: default;
  opacity: 0.5;
}

.picker__name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 0.85rem;
  color: var(--color-dim);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.picker__clear {
  flex: none;
  padding: 2px 6px;
  font: inherit;
  font-size: 0.78rem;
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.picker__clear:hover {
  color: var(--color-fg);
  text-decoration: underline;
}

.picker__catch {
  position: fixed;
  inset: 0;
  z-index: 50000;
}

.sheet {
  position: fixed;
  z-index: 50001;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(460px, calc(100vw - 32px));
  max-height: min(70vh, 560px);
  padding: 12px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-e3);
  transform: translate(-50%, -50%);
}

.sheet__search input,
.sheet__own input {
  width: 100%;
  padding: 6px 10px;
  font: inherit;
  color: var(--color-fg);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.sheet__grid {
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
  gap: 4px;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
}

.sheet__item {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  color: var(--color-fg);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.sheet__item:hover {
  background-color: var(--color-sunken);
  border-color: var(--color-outline);
}

.sheet__item--on {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.sheet__none {
  flex: 1 1 auto;
  margin: 0;
  padding: 16px 4px;
  font-size: 0.85rem;
  color: var(--color-dim);
}

.sheet__own {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--color-divider, var(--color-outline));
}

.sheet__own-label {
  flex: none;
  font-size: 0.8rem;
  color: var(--color-dim);
}

.sheet__own input {
  flex: 1;
  min-width: 0;
}

.sheet__preview {
  display: grid;
  flex: none;
  place-items: center;
  width: 28px;
  height: 28px;
  color: var(--color-accent);
}

.sheet__take {
  flex: none;
  padding: 5px 10px;
  font: inherit;
  font-size: 0.82rem;
  color: var(--color-fg);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.sheet__take:disabled {
  cursor: default;
  opacity: 0.45;
}

.sheet__warn {
  margin: 0;
  font-size: 0.8rem;
  color: var(--color-err);
}
</style>
