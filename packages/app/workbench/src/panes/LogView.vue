<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The request log: every XMLA request any connection of the page sent -
  the workbench's own, the tree's, the pivot table's - with its action,
  status, time and size, and the SOAP envelopes both ways, laid out.
-->
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DButton, DCheckbox } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useFormat, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { XmlaExchange } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { WORKBENCH } from '../state/workbench'

const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')
const format = useFormat()

const open = ref<number | null>(null)
const only = ref<'all' | 'Execute' | 'Discover' | 'failed'>('all')
const shown = computed(() =>
  wb.exchanges.value.filter(e => {
    if (only.value === 'failed') return outcome(e) === 'error'
    return only.value === 'all' || e.action === only.value
  }),
)
const paused = computed({ get: () => wb.logPaused.value, set: (v: boolean) => (wb.logPaused.value = v) })

/* Indents an envelope for reading; a body that does not parse stays as it is. */
function pretty(xml: string | undefined): string {
  if (!xml) return ''
  if (xml.length > 300000) return `${xml.slice(0, 300000)}\n…`
  let depth = 0
  return xml
    .replace(/>\s*</g, '>\n<')
    .split('\n')
    .map(line => {
      if (/^<\//.test(line)) depth = Math.max(0, depth - 1)
      const out = '  '.repeat(depth) + line
      if (/^<[^!?/][^>]*[^/]>$/.test(line) && !/<\/[^>]+>$/.test(line)) depth++
      return out
    })
    .join('\n')
}

/* What the request asked: the statement or the request type. */
function subject(exchange: XmlaExchange): string {
  const statement = /<Statement>([\s\S]*?)<\/Statement>/.exec(exchange.request)?.[1]
  if (statement) return statement.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
  const type = /<RequestType>([^<]*)<\/RequestType>/.exec(exchange.request)?.[1]
  if (type) return type
  // A session opened or closed by an Execute with an empty statement.
  return /<(?:[\w.-]+:)?(BeginSession|EndSession)\b/.exec(exchange.request)?.[1] ?? ''
}

/* A fault counts as failed whatever the HTTP status; a stop is not a failure. */
function outcome(exchange: XmlaExchange): 'pending' | 'ok' | 'error' | 'stopped' {
  if (exchange.durationMs === undefined) return 'pending'
  if (exchange.aborted) return 'stopped'
  if (exchange.error || exchange.fault || (exchange.status ?? 0) >= 400) return 'error'
  return 'ok'
}

async function copy(text: string | undefined) {
  try {
    await navigator.clipboard.writeText(text ?? '')
    wb.notify('Notice.copied')
  } catch {
    // Nothing to tell: the text is on screen.
  }
}
</script>

<template>
  <div class="log">
    <div class="log__bar">
      <select v-model="only" class="log__only" :aria-label="t('Log.show')">
        <option value="all">{{ t('Log.all') }}</option>
        <option value="Execute">Execute</option>
        <option value="Discover">Discover</option>
        <option value="failed">{{ t('Log.failed') }}</option>
      </select>
      <span class="log__count">{{ t('Log.count', { count: shown.length }) }}</span>
      <DCheckbox v-model="paused" :label="t('Log.pause')" />
      <DButton size="sm" intent="quiet" :disabled="!wb.exchanges.value.length" @click="wb.clearLog()">{{ t('Log.clear') }}</DButton>
    </div>
    <p v-if="!shown.length" class="log__empty">{{ wb.exchanges.value.length ? t('Log.noneShown') : t('Log.empty') }}</p>
    <ul v-else class="log__list">
      <li v-for="exchange in shown" :key="exchange.id" class="exchange" :class="`exchange--${outcome(exchange)}`">
        <button type="button" class="exchange__head" :aria-expanded="open === exchange.id" @click="open = open === exchange.id ? null : exchange.id">
          <span class="exchange__dot" aria-hidden="true" />
          <span class="exchange__time">{{ format.date(exchange.startedAt, { timeStyle: 'medium' }) }}</span>
          <span class="exchange__action">{{ exchange.action }}</span>
          <code class="exchange__subject">{{ subject(exchange) }}</code>
          <span class="exchange__facts">
            <template v-if="exchange.status !== undefined">{{ exchange.status }} · </template>
            <template v-if="exchange.fault">{{ t('Log.fault') }} · </template>
            <template v-if="exchange.aborted">{{ t('Log.stopped') }} · </template>
            <template v-if="exchange.durationMs !== undefined">{{ format.number(exchange.durationMs) }} ms</template>
            <template v-else>{{ t('Log.pending') }}</template>
            <template v-if="exchange.response"> · {{ format.number(Math.round(exchange.response.length / 1024)) }} kB</template>
          </span>
        </button>
        <div v-if="open === exchange.id" class="exchange__body">
          <p class="exchange__url">{{ exchange.url }}</p>
          <p v-if="exchange.fault" class="exchange__error">{{ exchange.fault }}</p>
          <p v-else-if="exchange.aborted" class="exchange__note">{{ t('Log.stoppedDetail') }}</p>
          <p v-else-if="exchange.error" class="exchange__error">{{ exchange.error }}</p>
          <div class="exchange__parts">
            <section>
              <header>{{ t('Log.request') }} <DButton size="sm" intent="quiet" @click="copy(exchange.request)">{{ t('Log.copy') }}</DButton></header>
              <pre>{{ pretty(exchange.request) }}</pre>
            </section>
            <section>
              <header>{{ t('Log.response') }} <DButton size="sm" intent="quiet" :disabled="!exchange.response" @click="copy(exchange.response)">{{ t('Log.copy') }}</DButton></header>
              <pre>{{ pretty(exchange.response) }}</pre>
            </section>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.log {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: var(--text-sm);
}

.log__bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
}

.log__only {
  font: inherit;
  padding: 2px 6px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.log__count,
.log__empty {
  color: var(--color-dim);
}

.log__bar > :last-child {
  margin-left: auto;
}

.log__empty {
  margin: 12px;
}

.log__list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  margin: 0;
  padding: 0;
  list-style: none;
}

.exchange {
  border-bottom: 1px solid var(--color-divider);
}

.exchange__head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 3px 8px;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.exchange__head:hover {
  background: var(--color-raised);
}

.exchange__dot {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-warn);
}

.exchange--ok .exchange__dot {
  background: var(--color-ok);
}

.exchange--error .exchange__dot {
  background: var(--color-err);
}

.exchange--stopped .exchange__dot {
  background: var(--color-dim);
}

.exchange__time,
.exchange__facts {
  flex: none;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.exchange__action {
  flex: none;
  width: 70px;
  font-weight: 600;
}

.exchange__subject {
  flex: 1;
  min-width: 0;
  font-family: var(--font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.exchange__body {
  padding: 4px 8px 8px 24px;
}

.exchange__url {
  margin: 0 0 4px;
  color: var(--color-dim);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.exchange__error {
  margin: 0 0 4px;
  color: var(--color-err);
}

.exchange__note {
  margin: 0 0 4px;
  color: var(--color-dim);
}

.exchange__parts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.exchange__parts header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-dim);
  font-weight: 600;
}

.exchange__parts pre {
  margin: 0;
  max-height: 320px;
  overflow: auto;
  padding: 6px;
  background: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
</style>
