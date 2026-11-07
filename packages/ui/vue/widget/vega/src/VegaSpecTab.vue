<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
/*
 * The Spec tab of a chart (#1291), for readers who turned on advanced
 * editing. It shows the whole spec the chart draws - the recipe compiled,
 * with the overlay merged in - and keeps of an edit only what differs from
 * the compiled spec, as the chart's overlay. The form stays the truth for
 * the rest: change a field there and the overlay still applies.
 */
import { computed, inject, ref, watch } from 'vue'
import type { EObject } from '@emfts/core'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifier as PAGE_REGISTRY, type PageRegistryI } from 'org.eclipse.daanse.board.app.lib.api.page'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'
import { compileRecipe, RecipeError } from './recipe'
import { diffOverlay, guarded, overlayPaths, overlayText, parseOverlay, withOverlay, withoutPath, OverlayError } from './overlay'
import { modelledSettings } from './settingsModel'

const props = defineProps<{ widgetId: string; widgetType: string }>()
const { t } = useTranslation('vega')

/* The widget is told by its id, so it is looked up on the board that holds it. */
const pages = inject<PageRegistryI | undefined>(PAGE_REGISTRY, undefined)
const widget = (() => {
  for (const page of pages?.getPages?.() ?? []) {
    for (const each of page.widgets ?? []) if (each.uid === props.widgetId) return each as { config?: unknown }
  }
  return undefined
})()
const config = (() => {
  if (!widget) return undefined
  const modelled = modelledSettings(widget.config)
  if (widget.config !== modelled) widget.config = modelled
  return modelled
})()
const settings = useEObject<VegaWidgetSettings>(() => config as (VegaWidgetSettings & EObject) | undefined)

const compiled = computed(() => {
  try {
    return settings.value ? compileRecipe(settings.value) : undefined
  } catch (e) {
    if (e instanceof RecipeError) return undefined
    throw e
  }
})
const drawn = computed(() => (compiled.value ? withOverlay(compiled.value, settings.value?.specOverlay) : undefined))
const overlay = computed(() => {
  try {
    return guarded(parseOverlay(settings.value?.specOverlay)).overlay
  } catch {
    return undefined
  }
})
const overrides = computed(() => overlayPaths(overlay.value))

const text = ref('')
const problem = ref<string | null>(null)
const show = () => {
  text.value = drawn.value ? JSON.stringify(drawn.value.spec, null, 2) : ''
}
watch(drawn, show, { immediate: true })

/* An edit keeps what differs from the compiled spec, without what it may not say. */
function apply() {
  if (!config || !compiled.value) return
  let edited: unknown
  try {
    edited = JSON.parse(text.value)
  } catch (e) {
    problem.value = t('SpecTab.invalid', { message: e instanceof Error ? e.message : String(e) })
    return
  }
  try {
    const { overlay: kept } = guarded(diffOverlay(compiled.value, edited))
    config.specOverlay = overlayText(kept)
    problem.value = null
    show()
  } catch (e) {
    problem.value = e instanceof OverlayError ? t('SpecTab.invalid', { message: e.message }) : String(e)
  }
}

function remove(path: string) {
  if (!config) return
  config.specOverlay = overlayText(withoutPath(overlay.value, path))
}

function removeAll() {
  if (!config) return
  config.specOverlay = ''
}
</script>

<template>
  <div class="spec-tab">
    <p v-if="!config" class="spec-tab__note">{{ t('SpecTab.noWidget') }}</p>
    <template v-else>
      <p class="spec-tab__note">{{ t('SpecTab.explain') }}</p>
      <textarea
        v-model="text"
        class="spec-tab__text"
        spellcheck="false"
        :aria-label="t('SpecTab.label')"
        data-testid="vega-spec-text"
      />
      <div class="spec-tab__actions">
        <button type="button" data-testid="vega-spec-apply" @click="apply">{{ t('SpecTab.apply') }}</button>
        <button type="button" :disabled="!overrides.length" @click="removeAll">{{ t('SpecTab.removeAll') }}</button>
      </div>
      <p v-if="problem" class="spec-tab__problem" role="alert">{{ problem }}</p>

      <section v-if="overrides.length" class="spec-tab__list">
        <h4>{{ t('SpecTab.overrides') }}</h4>
        <ul>
          <li v-for="path in overrides" :key="path">
            <code>{{ path }}</code>
            <button type="button" :title="t('SpecTab.remove')" :aria-label="t('SpecTab.remove')" @click="remove(path)">✕</button>
          </li>
        </ul>
      </section>
      <section v-if="drawn?.unused.length" class="spec-tab__list">
        <h4>{{ t('SpecTab.unused') }}</h4>
        <ul>
          <li v-for="path in drawn.unused" :key="path">
            <code>{{ path }}</code>
            <button type="button" :title="t('SpecTab.remove')" :aria-label="t('SpecTab.remove')" @click="remove(path)">✕</button>
          </li>
        </ul>
      </section>
      <section v-if="drawn?.refused.length" class="spec-tab__list">
        <h4>{{ t('SpecTab.refused') }}</h4>
        <ul>
          <li v-for="path in drawn.refused" :key="path"><code>{{ path }}</code></li>
        </ul>
      </section>
    </template>
  </div>
</template>

<style scoped>
.spec-tab {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.spec-tab__note {
  margin: 0;
  color: var(--color-fg-muted, var(--color-dim));
}

.spec-tab__text {
  min-height: 22rem;
  resize: vertical;
  font-family: var(--font-mono, monospace);
  font-size: var(--text-xs);
  color: var(--color-fg);
  background: var(--color-pane, transparent);
  border: 1px solid var(--color-border, var(--color-divider));
  border-radius: var(--radius-md, 4px);
  padding: 0.5rem;
}

.spec-tab__actions {
  display: flex;
  gap: 0.5rem;
}

.spec-tab__problem {
  margin: 0;
  color: var(--color-err, var(--color-danger));
}

.spec-tab__list h4 {
  margin: 0.25rem 0;
  font-size: var(--text-sm);
}

.spec-tab__list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.spec-tab__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
