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

const openGroup = ref<string>(TOKEN_GROUPS[0].id)
const copied = ref(false)

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
        Erscheinungsbild
        <span class="panel__tools">
          <span v-if="changedCount" class="changed">
            {{ changedCount }} {{ changedCount === 1 ? 'Wert geändert' : 'Werte geändert' }}
          </span>
          <button v-if="changedCount" class="btn" type="button" @click="clearAllTokens">
            Alle zurücksetzen
          </button>
          <button class="btn" type="button" @click="copyTheme">
            {{ copied ? 'Kopiert' : 'Als JSON kopieren' }}
          </button>
        </span>
      </header>

      <div class="body">
        <aside class="themes" aria-label="Themen">
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
            <span class="theme__name">{{ theme.name }}</span>
            <span class="theme__note">{{ theme.note }}</span>
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
              <span class="group__label">{{ group.label }}</span>
              <span class="group__count">{{ group.tokens.length }}</span>
            </button>

            <div v-if="openGroup === group.id" class="group__body">
              <p v-if="group.note" class="group__note">{{ group.note }}</p>

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
                  <span class="token__role">{{ spec.role }}</span>
                </span>

                <input
                  v-if="isColor(spec)"
                  class="token__picker"
                  type="color"
                  :value="valueOf(spec.name)"
                  :aria-label="`Farbe für ${spec.name}`"
                  @input="setToken(spec.name, ($event.target as HTMLInputElement).value)"
                />

                <input
                  class="token__value"
                  type="text"
                  :value="valueOf(spec.name)"
                  :aria-label="`Wert für ${spec.name}`"
                  @change="setToken(spec.name, ($event.target as HTMLInputElement).value)"
                />

                <button
                  class="token__reset"
                  type="button"
                  :disabled="!isOverridden(spec.name)"
                  :title="
                    isOverridden(spec.name)
                      ? 'Auf den Wert des Themas zurücksetzen'
                      : 'Unverändert'
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
