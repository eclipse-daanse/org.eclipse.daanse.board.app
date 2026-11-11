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
 * What this board is made of: the build it came from, the bundles it
 * loaded, the packages and libraries in it, and where it runs.
 *
 * The bundles are the part that has failed unseen before: an image went
 * out holding 4 of its 154, and nothing on screen said so (#1407). Here
 * the build's list (/versions.json) stands beside the loader's, and what
 * is missing, failed, in another version or brought by the deployment
 * comes first.
 */
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ModuleEvent, ModuleLoader } from '@eclipse-daanse/tsm'
import { MODULE_LOADER } from 'org.eclipse.daanse.board.app.lib.core'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { bundleRows, type BuiltBundle, type BundleStatus } from './about/bundleRows'

interface Versions {
  app: { name: string; version: string }
  commit?: string
  builtAt: string
  bundles: BuiltBundle[]
  packages: Array<{ name: string; version: string }>
  dependencies: Array<{ name: string; version: string }>
}

const { t } = useTranslation('shell')
const loader = inject<ModuleLoader | undefined>(MODULE_LOADER, undefined)

/* undefined while asking, null where there is no build to ask about. */
const versions = ref<Versions | null | undefined>(undefined)

onMounted(async () => {
  try {
    const response = await fetch('/versions.json', { cache: 'no-cache' })
    versions.value = response.ok ? ((await response.json()) as Versions) : null
  } catch {
    versions.value = null
  }
})

/*
 * The loader's states change while one looks - a bundle loaded on demand,
 * one that fails late - so every event of the loader reads them again.
 */
const loaderChanged = ref(0)
const listener = { onModuleEvent: (_event: ModuleEvent) => (loaderChanged.value += 1) }
loader?.addEventListener(listener)
onBeforeUnmount(() => loader?.removeEventListener(listener))

const loaded = computed(() => {
  void loaderChanged.value
  return (loader?.getManifests() ?? []).map((manifest) => {
    const module = loader?.getModule(manifest.id)
    return {
      id: manifest.id,
      name: manifest.name,
      version: manifest.version,
      state: module?.state ?? 'not loaded',
      error: module?.error ? String(module.error.message ?? module.error) : undefined,
    }
  })
})

const rows = computed(() =>
  versions.value === undefined ? [] : bundleRows(versions.value?.bundles, loaded.value),
)

/* Spelled out rather than built from the status, so that the language
  check finds every key in use. */
const statusLabel = computed<Record<BundleStatus, string>>(() => ({
  failed: t('About.status.failed'),
  missing: t('About.status.missing'),
  differs: t('About.status.differs'),
  added: t('About.status.added'),
  active: t('About.status.active'),
  idle: t('About.status.idle'),
}))

const STATUSES: BundleStatus[] = ['failed', 'missing', 'differs', 'added', 'active', 'idle']

/* How many of each, for the line above the table; the empty ones left out. */
const counts = computed(() =>
  STATUSES.map((status) => ({
    status,
    count: rows.value.filter((row) => row.status === status).length,
  })).filter((each) => each.count),
)

const shortCommit = computed(() => versions.value?.commit?.slice(0, 9))

const builtAt = computed(() => {
  const at = versions.value?.builtAt
  return at ? new Date(at).toLocaleString() : ''
})

const runtime = computed(() => [
  { label: t('About.runtime.address'), value: document.baseURI },
  { label: t('About.runtime.language'), value: navigator.language },
  { label: t('About.runtime.browser'), value: navigator.userAgent },
])
</script>

<template>
  <div class="about">
    <header class="head">
      <h1 class="head__title">{{ t('About.title') }}</h1>
      <p class="head__desc">{{ t('About.lead') }}</p>

      <dl v-if="versions" class="facts">
        <dt>{{ t('About.version') }}</dt>
        <dd class="mono">{{ versions.app.version }}</dd>
        <template v-if="shortCommit">
          <dt>{{ t('About.commit') }}</dt>
          <dd class="mono" :title="versions.commit">{{ shortCommit }}</dd>
        </template>
        <dt>{{ t('About.builtAt') }}</dt>
        <dd>{{ builtAt }}</dd>
      </dl>
      <p v-else-if="versions === null" class="note">{{ t('About.noBuild') }}</p>
    </header>

    <section class="section">
      <h2 class="section__title">{{ t('About.bundles') }}</h2>
      <p v-if="counts.length" class="counts">
        <span v-for="each in counts" :key="each.status" :class="['count', `count--${each.status}`]">
          {{ statusLabel[each.status] }}: {{ each.count }}
        </span>
      </p>
      <table v-if="rows.length" class="table">
        <thead>
          <tr>
            <th>{{ t('About.column.bundle') }}</th>
            <th>{{ t('About.column.built') }}</th>
            <th>{{ t('About.column.loaded') }}</th>
            <th>{{ t('About.column.status') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id" :class="['row', `row--${row.status}`]">
            <td>
              <span class="row__name">{{ row.name }}</span>
              <span v-if="row.name !== row.id" class="row__id mono">{{ row.id }}</span>
            </td>
            <td class="mono">{{ row.built ?? '–' }}</td>
            <td class="mono">{{ row.loaded ?? '–' }}</td>
            <td>
              <span :class="['status', `status--${row.status}`]">
                {{ statusLabel[row.status] }}
              </span>
              <span v-if="row.error" class="row__error">{{ row.error }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-if="versions?.dependencies.length" class="section">
      <h2 class="section__title">{{ t('About.dependencies') }}</h2>
      <table class="table table--pairs">
        <tbody>
          <tr v-for="each in versions.dependencies" :key="each.name">
            <td class="mono">{{ each.name }}</td>
            <td class="mono">{{ each.version }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-if="versions?.packages.length" class="section">
      <details>
        <summary class="section__title section__title--toggle">
          {{ t('About.packages', { count: versions.packages.length }) }}
        </summary>
        <table class="table table--pairs">
          <tbody>
            <tr v-for="each in versions.packages" :key="each.name">
              <td class="mono">{{ each.name }}</td>
              <td class="mono">{{ each.version }}</td>
            </tr>
          </tbody>
        </table>
      </details>
    </section>

    <section class="section">
      <h2 class="section__title">{{ t('About.runtime.title') }}</h2>
      <dl class="facts">
        <template v-for="each in runtime" :key="each.label">
          <dt>{{ each.label }}</dt>
          <dd class="mono">{{ each.value }}</dd>
        </template>
      </dl>
    </section>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  min-height: 0;
  padding: 20px 24px;
  overflow: auto;
}

/* A column to read down, as on the board's own screen. */
.about > * {
  width: 100%;
  max-width: 880px;
}

.mono {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

/* ------------------------------------------------------------- the head */

.head {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-divider);
}

.head__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-fg);
}

.head__desc,
.note {
  margin: 4px 0 0;
  font-size: var(--text-base);
  color: var(--color-dim);
}

.facts {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 4px 16px;
  margin: 12px 0 0;
}
.facts dt {
  color: var(--color-dim);
}
.facts dd {
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--color-fg);
}

/* ------------------------------------------------------------ sections */

.section__title {
  margin: 0 0 8px;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-fg);
}
.section__title--toggle {
  cursor: pointer;
}

.counts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 8px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-base);
}
.table th {
  text-align: left;
  font-weight: 600;
  color: var(--color-dim);
}
.table th,
.table td {
  padding: 6px 8px;
  border-bottom: 1px solid var(--color-divider);
  vertical-align: top;
}
.table--pairs td:first-child {
  width: 60%;
}

.row__name {
  display: block;
  color: var(--color-fg);
}
.row__id,
.row__error {
  display: block;
  color: var(--color-dim);
}
.row__error {
  color: var(--color-err);
  font-size: var(--text-sm);
}

/* What needs a look stands out; what is fine stays quiet. */
.status--failed,
.status--missing,
.count--failed,
.count--missing {
  color: var(--color-err);
  font-weight: 600;
}
.status--differs,
.status--added,
.count--differs,
.count--added {
  color: var(--color-warn);
  font-weight: 600;
}
.status--active {
  color: var(--color-fg);
}
.status--idle {
  color: var(--color-dim);
}
</style>
