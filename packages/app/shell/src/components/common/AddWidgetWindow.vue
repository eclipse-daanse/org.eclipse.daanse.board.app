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
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList, useRegistrations, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.widget'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { fits } from 'org.eclipse.daanse.board.app.lib.core'
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { inject, ref, computed } from 'vue'
import Draggable from 'vuedraggable'

const dataSources = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.datasources)
const datasourceRepository = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!

/**
 * The source a widget dragged from here will read, where one is picked.
 *
 * Empty means "no source yet", which is how every widget arrived before
 * this and still the right answer for the ones that show no data.
 */
const forSource = ref('')

const onDragStart = (event: DragEvent) => {
  const dragElement = document.createElement('div')
  document.body.appendChild(dragElement)
  event.dataTransfer?.setDragImage(dragElement, 0, 0)
  setTimeout(() => {
    document.body.removeChild(dragElement)
  }, 0)
}

const registeredWidgets = inject<WidgetRepository>(identifier)!
const { t } = useTranslation('shell')
/*
 * Read again on every registration: a widget bundle can activate after the
 * palette has mounted, and the pivot table used to be missing until the
 * route changed.
 */
const availableWidgets = useRegistrations(registeredWidgets, () =>
  Object.entries(registeredWidgets.getAllWidgets()).map(([name, widget]) => ({
    type: name,
    name: widget.name,
    nameKey: widget.nameKey,
    icon: widget.icon,
    reads: widget.reads,
  })),
)

/*
 * The sources to choose from, and the entry that chooses none.
 *
 * Shaped as uid and name because that is what DSelect reads by default -
 * given anything else it has no field to take the text from and writes
 * the object out instead.
 */
const sourceOptions = computed(() => [
  { uid: '', name: t('Palette.anySource') },
  ...dataSources.value.map((source: any) => ({
    uid: source.uid as string,
    name: (source.name as string) || (source.uid as string),
  })),
])

/** What the picked source's type answers; nothing while none is picked. */
const answers = computed(() => {
  const picked: any = dataSources.value.find((source: any) => source.uid === forSource.value)
  return picked ? datasourceRepository.getDatasourceIdentifiers(picked.type)?.answers : undefined
})

/*
 * The widgets that can show the picked source - and all of them while
 * none is picked.
 *
 * A filter stood here commented out, matching widget.supportedDSTypes
 * against a hand-written table of source types. Both are gone: a widget
 * declares the data shapes it reads, a source type the ones it answers,
 * and `fits` puts the two together (#1183).
 *
 * The source rides along on the entry, because that is what the board
 * reads off what was dropped on it - the grid editor has taken a
 * datasourceId from a dropped item since before anything put one there.
 */
const computedWidgets = computed(() => {
  const source = forSource.value || undefined
  const offered = source
    ? availableWidgets.value.filter((widget) => fits(widget.reads, answers.value))
    : availableWidgets.value
  return offered.map((widget) => ({ ...widget, datasourceId: source }))
})
</script>

<template>
  <div class="add_widget_window">
    <!-- Asked above the list, because it decides what the list contains. -->
    <DSelect
      v-if="dataSources.length"
      v-model="forSource"
      class="add_widget_window__source"
      :label="t('Palette.forSource')"
      :options="sourceOptions"
      stacked
    />

    <p v-if="forSource && !computedWidgets.length" class="add_widget_window__none">
      {{ t('Palette.noneFit') }}
    </p>

    <div class="add_widget_window__scroll">
    <draggable
      class="widgets_grid"
      :list="computedWidgets"
      :group="{ name: 'widgets', pull: 'clone', put: false }"
      itemKey="type"
    >
      <template #item="{ element }">
        <div
          class="widgets_grid-item"
          draggable="true"
          @dragstart="(event) => onDragStart(event)"
        >
          <span class="widgets_grid-icon"><img :src="element.icon" alt="" /></span>
          <span class="widgets_grid-name">{{ element.nameKey ? t(element.nameKey, { defaultValue: element.name }) : element.name }}</span>
        </div>
      </template>
    </draggable>
    </div>
  </div>
</template>

<style scoped>
.add_widget_window__source {
  padding: 0 10px 8px;
}

.add_widget_window__none {
  margin: 0;
  padding: 4px 10px 12px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/* A list, not a tile grid - that is what the mockups' palette is, and it
  survives a 240px column. */
.widgets_grid {
  display: flex;
  flex-direction: column;
}

:deep() .widgets_grid-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  padding: 6px 12px;
  font-size: var(--text-base, 13px);
  color: var(--color-fg);
  cursor: grab;
  border-radius: var(--radius-sm, 5px);
  margin: 0 6px;
}

:deep() .widgets_grid-item:hover {
  background: var(--color-bg);
}

:deep() .widgets_grid-icon {
  width: 26px;
  height: 26px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm, 5px);
  overflow: hidden;
}

:deep() .widgets_grid-icon img {
  max-width: 18px;
  max-height: 18px;
}

:deep() .widgets_grid-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Docked into the palette panel of the editor (mockup screen 4) - the panel
  owns position, width and header now. */
.add_widget_window {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 6px 0;
}

/* What the scroll container was: a box that scrolls. */
.add_widget_window__scroll {
  height: 100%;
  overflow-y: auto;
}
</style>
