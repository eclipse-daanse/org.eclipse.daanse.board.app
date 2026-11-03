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
 * A widget on this source, made from where the source is.
 *
 * The other direction existed: add an empty widget to a board, open its
 * settings, pick a source out of a list of all of them. Standing in
 * front of a source with its preview on the screen, the decision "this
 * should be a table" is already made, and this is the shorter way to act
 * on it (#1184).
 *
 * Which types are offered is not a list kept here: a widget declares the
 * data shapes it reads, a source type declares the ones it answers, and
 * `fits` puts the two together (#1183).
 */
import { computed, inject, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { DButton, DIcon, DModal, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { fits, randomUUID } from 'org.eclipse.daanse.board.app.lib.core'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as PAGE_REPOSITORY,
  pagePath,
  type PageRegistryI,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  identifier as WIDGET_REPOSITORY,
  type WidgetRepository,
} from 'org.eclipse.daanse.board.app.lib.api.widget'
import { useEList, useRegistrations, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useNewWidget } from '@/composables/useNewWidget'

const { t } = useTranslation('shell')
const router = useRouter()

const workspace = inject<Workspace>(WORKSPACE)!
const datasourceRepository = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!
const widgetRepository = inject<WidgetRepository>(WIDGET_REPOSITORY)!
const pages = inject<PageRegistryI>(PAGE_REPOSITORY)!

const { open, forDatasource } = useNewWidget()

const sources = useEList(workspace, (w) => w.datasources)
const boardPages = useEList(workspace, (w) => w.board?.pages)

const source = computed(() =>
  sources.value.find((each: any) => each.uid === forDatasource.value),
)

/** What this source's type answers; undefined where the type has not said. */
const answers = computed(() => {
  const type = (source.value as any)?.type
  return type ? datasourceRepository.getDatasourceIdentifiers(type)?.answers : undefined
})

/*
 * Read again on every registration, like the palette: a widget bundle
 * can activate after this has been mounted.
 */
const registered = useRegistrations(widgetRepository, () =>
  Object.entries(widgetRepository.getAllWidgets()).map(([type, widget]) => ({
    type,
    name: widget.name,
    nameKey: widget.nameKey,
    icon: widget.icon,
    reads: widget.reads,
  })),
)

const offered = computed(() =>
  registered.value.filter((widget) => fits(widget.reads, answers.value)),
)

const chosen = ref<string | undefined>(undefined)
const onPage = ref<string>('')

/* Opened afresh each time: the source may be another one than last time. */
watch(open, (isOpen) => {
  if (!isOpen) return
  chosen.value = offered.value.length === 1 ? offered.value[0].type : undefined
  onPage.value = (boardPages.value[0] as any)?.id ?? ''
})

const pageOptions = computed(() =>
  boardPages.value.map((page: any) => ({ value: page.id, label: page.name ?? page.id })),
)

function labelOf(widget: { name: string; nameKey?: string }) {
  return widget.nameKey ? t(widget.nameKey) : widget.name
}

/*
 * Placed below what is already there rather than at the origin, which is
 * where everything else lands and would sit on top of the last one.
 */
function below() {
  const page = pages.getPage(onPage.value)
  const items = page?.layout.toArray() ?? []
  const bottom = Math.max(0, ...items.map((item: any) => (item.y ?? 0) + (item.height ?? 0)))
  return { x: 0, y: bottom, width: 300, height: 150 }
}

function create() {
  if (!chosen.value || !onPage.value || !source.value) return

  const uid = 'li_' + randomUUID()
  pages.addWidget(
    onPage.value,
    {
      uid,
      type: chosen.value,
      /* The source, set here rather than left for the settings to ask
        about - having it is the whole point of coming from one. */
      config: { datasourceId: (source.value as any).uid, settings: {} },
      /* Empty: the wrapper fills in what a setting does not say. */
      wrapperConfig: {},
    },
    below(),
  )

  open.value = false
  router.push(pagePath(workspace.board?.id as string, onPage.value, true))
}
</script>

<template>
  <DModal
    v-model="open"
    :title="t('NewWidget.title', { source: (source as any)?.name ?? '' })"
    size="lg"
    @cancel="open = false"
  >
    <p v-if="!boardPages.length" class="note">{{ t('NewWidget.noPages') }}</p>

    <template v-else>
      <p class="lead">{{ t('NewWidget.lead') }}</p>

      <p v-if="!answers" class="note">{{ t('NewWidget.unknown') }}</p>
      <p v-else-if="!offered.length" class="note">{{ t('NewWidget.none') }}</p>

      <ul v-else class="tiles">
        <li v-for="widget in offered" :key="widget.type">
          <button
            type="button"
            :class="['tile', { 'tile--on': chosen === widget.type }]"
            :aria-pressed="chosen === widget.type"
            @click="chosen = widget.type"
          >
            <!-- A widget's icon is an image it brings, not a symbol name. -->
            <img :src="widget.icon" alt="" class="tile__icon" />
            <span class="tile__name">{{ labelOf(widget) }}</span>
            <DIcon v-if="chosen === widget.type" name="check" size="sm" class="tile__check" />
          </button>
        </li>
      </ul>

      <!-- Asked only where there is a choice to make. -->
      <DSelect
        v-if="offered.length && pageOptions.length > 1"
        v-model="onPage"
        :label="t('NewWidget.page')"
        :options="pageOptions"
        class="where"
      />
    </template>

    <template #actions>
      <DButton intent="quiet" @click="open = false">{{ t('common:Action.cancel') }}</DButton>
      <DButton intent="primary" :disabled="!chosen || !onPage" @click="create">
        {{ t('Wizard.create') }}
      </DButton>
    </template>
  </DModal>
</template>

<style scoped>
.lead {
  margin: 0 0 12px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.note {
  margin: 0;
  padding: 14px 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tile {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  text-align: left;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.tile:hover {
  border-color: var(--color-accent);
}

.tile--on {
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

.tile__icon {
  flex: none;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.tile__name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tile__check {
  flex: none;
  color: var(--color-accent);
}

.where {
  margin-top: 16px;
  max-width: 320px;
}
</style>
