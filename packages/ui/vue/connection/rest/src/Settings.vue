<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { debounce } from 'lodash'
import { DCheckbox, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const { config } = defineProps<{
  config: any
}>()

const available = ref(false)
const url = ref(config.url)
const statusCode = ref<string | null>(null)
const cacheEnabled = ref(config.cacheEnabled ?? false)
const cacheTTL = ref(config.cacheTTL ?? 30000)

/** The smallest cache lifetime that is worth keeping one for. */
const MIN_TTL = 1000

const urlError = computed(() => (!url.value || isValidUrl(url.value) ? undefined : 'Keine gültige http- oder https-Adresse'))
const ttlError = computed(() => (cacheTTL.value >= MIN_TTL ? undefined : `Mindestens ${MIN_TTL} ms`))

/**
 * What the endpoint answered, as a word rather than a colour alone.
 *
 * The three states were three Tailwind colours - green, red, grey - which
 * say nothing to anyone who cannot tell them apart, and nothing at all to
 * a theme that is not the one they were picked against.
 */
const reach = computed(() => {
  if (!url.value) return undefined
  if (!statusCode.value) return { tone: 'color-dim', text: 'Noch nicht geprüft' }
  if (available.value) return { tone: 'color-ok', text: `Erreichbar (${statusCode.value})` }
  return { tone: 'color-err', text: `Nicht erreichbar (${statusCode.value})` }
})

const updateUrl = debounce((newUrl: string) => {
  config.url = newUrl
  validateAndCheckUrl(newUrl)
}, 700)

function isValidUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

async function ifUrlExist(value: string) {
  try {
    const response = await fetch(value, { method: 'HEAD' })
    return { available: response.ok, statusCode: response.status.toString() }
  } catch (error: any) {
    console.warn('Network error:', error.name)
    return { available: false, statusCode: 'Fehler' }
  }
}

async function validateAndCheckUrl(newUrl: string) {
  if (!isValidUrl(newUrl)) {
    available.value = false
    statusCode.value = null
    return
  }

  const result = await ifUrlExist(newUrl)
  available.value = result.available
  statusCode.value = result.statusCode
}

watch(url, (newUrl) => {
  if (newUrl !== config.url) {
    updateUrl(newUrl)
  }
})

watch(cacheEnabled, (newValue) => {
  config.cacheEnabled = newValue
})

watch(cacheTTL, (newValue) => {
  config.cacheTTL = newValue
})

onMounted(async () => {
  if (config.url) {
    url.value = config.url
    const resp = await ifUrlExist(config.url)
    available.value = resp.available
    statusCode.value = resp.statusCode
  }
  cacheEnabled.value = config.cacheEnabled ?? false
  cacheTTL.value = config.cacheTTL ?? 30000
})
</script>

<template>
  <div class="rest">
    <DInput v-model="url" label="URL" :error="urlError" />

    <p v-if="reach" class="reach">
      <span class="reach__dot" :style="{ backgroundColor: `var(--${reach.tone})` }" />
      {{ reach.text }}
    </p>

    <DCheckbox v-model="cacheEnabled" label="Antworten zwischenspeichern" />

    <DInput
      v-if="cacheEnabled"
      v-model.number="cacheTTL"
      label="Haltbarkeit"
      type="number"
      suffix="ms"
      :min="MIN_TTL"
      :max="3600000"
      :error="ttlError"
      hint="Wie lange eine Antwort wiederverwendet wird, bevor neu gefragt wird."
    />
  </div>
</template>

<style scoped>
.rest {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.reach {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 0 4px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.reach__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: none;
}
</style>
