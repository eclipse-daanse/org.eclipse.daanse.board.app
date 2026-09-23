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
 * Erscheinungsbild: pick a theme, then change any single value in it.
 *
 * Same tree-and-detail shape as the other detail screens - themes on the
 * left, the tokens of the chosen one on the right. Every swatch shows the
 * value actually in force, and a changed token says so, so it is always
 * clear what came from the theme and what you did to it.
 */
import { computed, ref } from 'vue'
import { TOKEN_GROUPS, type TokenSpec } from '@/theme/tokens'
import { useTheme } from '@/theme/useTheme'
import {
  DButton,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DInput,
  DSelect,
  DSlider,
  DSwitch,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const {
  themes,
  activeTheme,
  overrides,
  valueOf,
  isOverridden,
  selectTheme,
  setToken,
  clearToken,
  clearAllTokens,
  exportTheme,
} = useTheme()

const { t } = useTranslation('shell')

const openGroup = ref<string>(TOKEN_GROUPS[0].id)
const copied = ref(false)

/** Tokens or controls - the two halves of the design system. */
const view = ref<'tokens' | 'controls'>('tokens')

/*
 * The gallery is live, not pictures: these are the same controls the app is
 * built from, so a token changed above shows here immediately - and a
 * control that breaks under a theme breaks in plain sight.
 */
const demo = ref({
  text: t('Appearance.demo.sample'),
  number: 38.4,
  choice: 'ogcsta',
  colour: '#4fa3d1',
  when: '2026-08-28',
  amount: 60,
  on: true,
  checked: true,
  note: '',
})

const demoOptions = [
  { uid: 'ogcsta', name: 'OGC SensorThings' },
  { uid: 'xmla', name: 'XMLA / MDX' },
  { uid: 'rest', name: 'REST' },
]

const changedCount = computed(() => Object.keys(overrides.value).length)

/** A theme's own colours, for the strip on its card - no invented preview. */
function stripOf(theme: (typeof themes.value)[number]): string[] {
  return [
    theme.tokens['color-bg'],
    theme.tokens['color-pane'],
    theme.tokens['color-accent'],
    theme.tokens['color-brand'],
    theme.tokens['color-ok'],
  ].filter(Boolean)
}

function isColor(spec: TokenSpec): boolean {
  return spec.kind === 'color'
}

async function copyTheme() {
  try {
    await navigator.clipboard.writeText(JSON.stringify(exportTheme(), null, 2))
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="appearance">
    <div class="panel">
      <header class="panel__head">
        <button
          type="button"
          :class="['head__tab', { on: view === 'tokens' }]"
          @click="view = 'tokens'"
        >
          {{ t('Appearance.tokens') }}
        </button>
        <button
          type="button"
          :class="['head__tab', { on: view === 'controls' }]"
          @click="view = 'controls'"
        >
          {{ t('Appearance.controls') }}
        </button>
        <span class="panel__tools">
          <span v-if="changedCount" class="changed">
            {{ t('Appearance.changed', { count: changedCount }) }}
          </span>
          <button v-if="changedCount" class="btn" type="button" @click="clearAllTokens">
            {{ t('Appearance.resetAll') }}
          </button>
          <button class="btn" type="button" @click="copyTheme">
            {{ copied ? t('Appearance.copied') : t('Appearance.copy') }}
          </button>
        </span>
      </header>

      <div v-if="view === 'controls'" class="gallery">
        <p class="gallery__lead">
          {{ t('Appearance.lead') }}
        </p>

        <section class="demo">
          <h3 class="demo__title">{{ t('Appearance.demo.buttons') }}</h3>
          <div class="demo__row">
            <DButton>{{ t('Appearance.demo.standard') }}</DButton>
            <DButton intent="primary">{{ t('common:Action.save') }}</DButton>
            <DButton intent="quiet">{{ t('common:Action.cancel') }}</DButton>
            <DButton intent="danger">{{ t('common:Action.delete') }}</DButton>
            <DButton disabled>{{ t('Appearance.demo.disabled') }}</DButton>
            <DButton busy>{{ t('Appearance.demo.busy') }}</DButton>
          </div>
          <div class="demo__row">
            <DButton size="sm">{{ t('Appearance.demo.small') }}</DButton>
            <DButton size="md">{{ t('Appearance.demo.medium') }}</DButton>
            <DButton size="lg">{{ t('Appearance.demo.large') }}</DButton>
          </div>
        </section>

        <section class="demo">
          <h3 class="demo__title">{{ t('Appearance.demo.inputs') }}</h3>
          <div class="demo__form">
            <DInput v-model="demo.text" :label="t('Appearance.demo.title')" />
            <DInput v-model="demo.number" :label="t('Appearance.demo.value')" type="number" suffix="%" />
            <DSelect v-model="demo.choice" :label="t('WidgetSettings.datasource')" :options="demoOptions" />
            <DColorInput v-model="demo.colour" :label="t('PageSettings.color')" />
            <DDateInput v-model="demo.when" :label="t('Appearance.demo.date')" />
            <DSlider v-model="demo.amount" :label="t('Appearance.demo.coverage')" suffix="%" />
            <DInput v-model="demo.note" :label="t('Appearance.demo.note')" :rows="2" stacked />
            <DInput v-model="demo.text" :label="t('Appearance.demo.withError')" :error="t('Appearance.demo.error')" />
          </div>
        </section>

        <section class="demo">
          <h3 class="demo__title">{{ t('Appearance.demo.switches') }}</h3>
          <div class="demo__row">
            <DCheckbox v-model="demo.checked" :label="t('Appearance.demo.showOnBoard')" />
            <DSwitch v-model="demo.on" :label="t('Appearance.demo.autoRefresh')" />
          </div>
          <div class="demo__row">
            <DChip>{{ t('Appearance.demo.neutral') }}</DChip>
            <DChip tone="accent">{{ t('Storage.loaded') }}</DChip>
            <DChip tone="ok">{{ t('Appearance.demo.ok') }}</DChip>
            <DChip tone="warn">{{ t('Appearance.demo.warn') }}</DChip>
            <DChip tone="err">{{ t('Appearance.demo.err') }}</DChip>
            <DChip tone="accent" numeric>14</DChip>
          </div>
          <DDivider :label="t('Appearance.demo.divider')" />
        </section>
      </div>

      <div v-else class="body">
        <aside class="themes" :aria-label="t('Appearance.themes')">
          <button
            v-for="theme in themes"
            :key="theme.id"
            type="button"
            :class="['theme', { on: theme.id === activeTheme.id }]"
            @click="selectTheme(theme.id)"
          >
            <span class="theme__strip" aria-hidden="true">
              <i v-for="(colour, i) in stripOf(theme)" :key="i" :style="{ background: colour }" />
            </span>
            <span class="theme__name">{{ t(theme.name) }}</span>
            <span class="theme__note">{{ t(theme.note) }}</span>
          </button>
        </aside>

        <section class="tokens">
          <div v-for="group in TOKEN_GROUPS" :key="group.id" class="group">
            <button
              type="button"
              class="group__head"
              :aria-expanded="openGroup === group.id"
              @click="openGroup = openGroup === group.id ? '' : group.id"
            >
              <span class="group__twist">{{ openGroup === group.id ? '▾' : '▸' }}</span>
              <span class="group__label">{{ t(group.label) }}</span>
              <span class="group__count">{{ group.tokens.length }}</span>
            </button>

            <div v-if="openGroup === group.id" class="group__body">
              <p v-if="group.note" class="group__note">{{ t(group.note) }}</p>

              <div v-for="spec in group.tokens" :key="spec.name" class="token">
                <span
                  v-if="isColor(spec)"
                  class="token__swatch"
                  :style="{ background: valueOf(spec.name) }"
                  aria-hidden="true"
                />
                <span v-else class="token__swatch token__swatch--none" aria-hidden="true" />

                <span class="token__text">
                  <code class="token__name">--{{ spec.name }}</code>
                  <span class="token__role">{{ t(spec.role) }}</span>
                </span>

                <input
                  v-if="isColor(spec)"
                  class="token__picker"
                  type="color"
                  :value="valueOf(spec.name)"
                  :aria-label="t('Appearance.colorOf', { name: spec.name })"
                  @input="setToken(spec.name, ($event.target as HTMLInputElement).value)"
                />

                <input
                  class="token__value"
                  type="text"
                  :value="valueOf(spec.name)"
                  :aria-label="t('Appearance.valueOf', { name: spec.name })"
                  @change="setToken(spec.name, ($event.target as HTMLInputElement).value)"
                />

                <button
                  class="token__reset"
                  type="button"
                  :disabled="!isOverridden(spec.name)"
                  :title="
                    isOverridden(spec.name)
                      ? t('Appearance.reset')
                      : t('Appearance.unchanged')
                  "
                  @click="clearToken(spec.name)"
                >
                  ↺
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appearance {
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px 16px 16px;
  background-color: var(--color-bg);
}

.panel {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.panel__head {
  display: flex;
  align-items: center;
  gap: 8px;
  height: var(--spacing-panelHeader);
  flex: none;
  padding: 0 10px;
  font-size: var(--text-xs);
  font-weight: 650;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.head__tab {
  position: relative;
  height: 100%;
  padding: 0 10px;
  font-family: inherit;
  font-size: var(--text-xs);
  font-weight: 650;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.head__tab.on {
  color: var(--color-fg);
}

.head__tab.on::after {
  content: '';
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: -1px;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

.head__tab:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

/* -------------------------------------------------------------- gallery */

.gallery {
  flex: 1 1 auto;
  min-height: 0;
  padding: 16px 18px 24px;
  overflow-y: auto;
  background-color: var(--color-bg);
}

.gallery__lead {
  margin: 0 0 18px;
  max-width: 70ch;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.demo {
  margin-bottom: 26px;
}

.demo__title {
  margin: 0 0 10px;
  padding-bottom: 4px;
  font-size: var(--text-xs);
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.demo__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.demo__form {
  max-width: 460px;
}

.panel__tools {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
}

.changed {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.body {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  background-color: var(--color-bg);
}

/* ---------------------------------------------------------------- themes */

.themes {
  width: 240px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 6px;
  overflow-y: auto;
  background-color: var(--color-pane);
  border-right: 1px solid var(--color-divider);
}

.theme {
  display: grid;
  gap: 3px;
  padding: 8px;
  font-family: inherit;
  text-align: left;
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.theme:hover {
  background-color: var(--color-raised);
}

.theme.on {
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
  border-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
}

.theme__strip {
  display: flex;
  height: 14px;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid var(--color-divider);
}

.theme__strip i {
  flex: 1;
}

.theme__name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.theme__note {
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-dim);
}

/* ---------------------------------------------------------------- tokens */

.tokens {
  flex: 1 1 auto;
  min-width: 0;
  padding: 8px 10px 16px;
  overflow-y: auto;
}

.group__head {
  display: flex;
  align-items: baseline;
  gap: 7px;
  width: 100%;
  padding: 6px 4px;
  font-family: inherit;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
  text-align: left;
  background: none;
  border: 0;
  border-bottom: 1px solid var(--color-divider);
  cursor: pointer;
}

.group__twist {
  width: 11px;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.group__count {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-dim);
}

.group__body {
  padding: 8px 0 14px 18px;
}

.group__note {
  margin: 0 0 8px;
  font-size: var(--text-sm);
  color: var(--color-dim);
  max-width: 70ch;
}

.token {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}

.token__swatch {
  width: 22px;
  height: 22px;
  flex: none;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.token__swatch--none {
  background: repeating-linear-gradient(
    45deg,
    var(--color-raised),
    var(--color-raised) 3px,
    var(--color-bg) 3px,
    var(--color-bg) 6px
  );
}

.token__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1 1 auto;
}

.token__name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.token__role {
  font-size: var(--text-xs);
  color: var(--color-dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.token__picker {
  width: 28px;
  height: 24px;
  flex: none;
  padding: 0;
  background: none;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.token__value {
  width: 220px;
  flex: none;
  height: 24px;
  padding: 0 7px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.token__reset {
  width: 24px;
  height: 24px;
  flex: none;
  font-family: inherit;
  font-size: var(--text-base);
  color: var(--color-dim);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.token__reset:disabled {
  opacity: 0.35;
  cursor: default;
}

.btn {
  height: 22px;
  padding: 0 10px;
  font-family: inherit;
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.btn:hover {
  border-color: var(--color-outline);
}

.btn:focus-visible,
.theme:focus-visible,
.group__head:focus-visible,
.token__value:focus-visible,
.token__picker:focus-visible,
.token__reset:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}
</style>
