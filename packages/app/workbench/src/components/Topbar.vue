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
  The topbar: where the workbench is - server, catalog, cube, the locale
  sent with every request - and what it is doing.
-->
<script setup lang="ts">
import { computed, inject } from 'vue'
import { DButton, DIcon, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { LOCALES, WORKBENCH, type SavedConnection } from '../state/workbench'

const emit = defineEmits<{ (event: 'connect'): void; (event: 'edit-connection'): void }>()

// i18n-keys: workbench:Notice.*
const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

/* Where a server came from, and whether it answered the last time it was asked. */
function serverLabel(c: SavedConnection): string {
  const name = c.fromLink ? t('Topbar.fromLink', { name: c.name }) : c.name
  return wb.failing.value.includes(c.uid) ? t('Topbar.failing', { name }) : name
}

const connectionOptions = computed(() =>
  wb.connections.value.map(c => ({
    uid: c.uid,
    name: serverLabel(c),
    group: c.preset ? t('Topbar.demoServers') : t('Topbar.savedServers'),
  })),
)
const catalogOptions = computed(() => wb.catalogs.value.map(row => ({ uid: String(row.CATALOG_NAME), name: String(row.CATALOG_NAME) })))
const cubeOptions = computed(() =>
  wb.cubes.value.map(row => ({ uid: String(row.CUBE_NAME), name: String(row.CUBE_CAPTION || row.CUBE_NAME) })),
)
const localeOptions = LOCALES.map(l => ({ uid: l.lcid, name: `${l.lcid} · ${l.tag}` }))

const activeId = computed({
  get: () => wb.activeId.value ?? undefined,
  set: (uid: string | undefined) => {
    if (uid) void wb.open(uid)
  },
})
const catalog = computed({
  get: () => wb.catalog.value || undefined,
  set: (name: string | undefined) => {
    if (name && name !== wb.catalog.value) void wb.useCatalog(name)
  },
})
const cube = computed({
  get: () => wb.cube.value || undefined,
  set: (name: string | undefined) => {
    if (name && name !== wb.cube.value) void wb.useCube(name)
  },
})
const lcid = computed({
  get: () => wb.lcid.value,
  set: (value: number) => (wb.lcid.value = Number(value)),
})

const status = computed(() => {
  if (wb.connecting.value) return { kind: 'busy', text: t('Topbar.connecting', { url: wb.active.value?.url }) }
  if (wb.connectionError.value) return { kind: 'error', text: t('Topbar.unreachable') }
  if (wb.metadataLoading.value) return { kind: 'busy', text: t('Topbar.loadingMetadata') }
  if (wb.active.value && wb.cube.value) {
    return { kind: 'ok', text: t('Topbar.ready', { cube: wb.cube.value, functions: wb.metadata.value.functions.length }) }
  }
  return { kind: 'idle', text: t('Topbar.noConnection') }
})
</script>

<template>
  <header class="topbar">
    <a class="brand" href="/" :title="t('Topbar.toBoards')">
      <span class="brand__mark">D</span>
      <span class="brand__name">{{ t('Topbar.title') }}</span>
    </a>

    <div class="context">
      <DSelect
        v-model="activeId"
        class="context__connection"
        size="sm"
        :options="connectionOptions"
        group-key="group"
        :placeholder="t('Topbar.pickServer')"
        :aria-label="t('Topbar.server')"
      />
      <DButton size="sm" intent="quiet" :title="t('Topbar.newServer')" @click="emit('connect')">
        <DIcon name="add_link" size="sm" />
      </DButton>
      <DButton
        v-if="wb.active.value && !wb.active.value.preset"
        size="sm"
        intent="quiet"
        :title="t('Topbar.editServer')"
        @click="emit('edit-connection')"
      >
        <DIcon name="edit" size="sm" />
      </DButton>
      <DSelect
        v-if="catalogOptions.length"
        v-model="catalog"
        size="sm"
        :options="catalogOptions"
        :aria-label="t('Topbar.catalog')"
        :title="t('Topbar.catalog')"
      />
      <DSelect
        v-if="cubeOptions.length"
        v-model="cube"
        size="sm"
        :options="cubeOptions"
        :aria-label="t('Topbar.cube')"
        :title="t('Topbar.cube')"
      />
      <DSelect
        v-model="lcid"
        size="sm"
        :options="localeOptions"
        :aria-label="t('Topbar.locale')"
        :title="t('Topbar.localeHint')"
      />
    </div>

    <p class="status" :class="`status--${status.kind}`" role="status" aria-live="polite">
      <span class="status__dot" aria-hidden="true" />
      <template v-if="wb.notice.value">{{ t(wb.notice.value.text, wb.notice.value.values) }}</template>
      <template v-else>{{ status.text }}</template>
    </p>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  gap: 14px;
  height: var(--spacing-topbar, 42px);
  padding: 0 12px;
  background: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-fg);
  font-size: var(--text-base);
  min-width: 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  flex: none;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-sm);
  background: var(--color-brandFill);
  color: var(--color-onBrand);
  font-weight: 700;
}

.brand__name {
  font-weight: 600;
  white-space: nowrap;
}

.context {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  flex: 1 1 auto;
}

.context :deep(.field) {
  min-width: 0;
}

.context__connection {
  min-width: 220px;
}

.status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  max-width: 40%;
  font-size: var(--text-sm);
  color: var(--color-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status__dot {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-outline);
}

.status--ok .status__dot {
  background: var(--color-ok);
}

.status--busy .status__dot {
  background: var(--color-warn);
}

.status--error {
  color: var(--color-err);
}

.status--error .status__dot {
  background: var(--color-err);
}
</style>
