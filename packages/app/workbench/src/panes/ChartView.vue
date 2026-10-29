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
  The result as a chart - the board's own chart widget behind the board's
  chart composer, fed the slice on screen: one series per column, the rows
  along the axis. The composer reads the answer the workbench already holds
  (state/answer.ts), so opening the view or turning an axis asks the server
  nothing. The widget's own settings form - type, colours, series - sits
  beside it, rendered from its model as on a dashboard. The settings object
  is the workbench's (state/workbench.ts), not this view's: the view is
  unmounted whenever another output tab is up, and a chart that came back
  as bars in default colours had lost what was set on it.
-->
<script setup lang="ts">
import { computed, inject, nextTick, onUnmounted, ref, watch } from 'vue'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { DATASOURCE_REPOSITORY, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { WIDGET_REPOSITORY, type WidgetRepository } from 'org.eclipse.daanse.board.app.lib.api.widget'
import type { SliceMatrix } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { ANSWER_TYPE, LABEL_COLUMN, answerTable } from '../state/answer'
import { WORKBENCH } from '../state/workbench'

const props = defineProps<{ matrix: SliceMatrix }>()

const datasources = inject<DatasourceRepository>(Symbol.for(DATASOURCE_REPOSITORY))!
const widgets = inject<WidgetRepository | undefined>(Symbol.for(WIDGET_REPOSITORY), undefined)
const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

const SOURCE = 'workbench.chart.source'
const COMPOSER = 'workbench.chart'
const COMPOSER_TYPE = 'chart'

const chart = computed(() => {
  try {
    return widgets?.getWidget('ChartWidget') ?? null
  } catch {
    return null
  }
})
const form = computed(() => chart.value?.settingsForm ?? null)
const settings = wb.chartSettings
/*
 * Read through a watched object, as the board's widget wrapper does: the
 * form may hand back a new instance, and a changed feature keeps the old
 * one, which a plain prop would not pass on.
 */
const watched = useEObject(() => settings.value ?? undefined)
const config = computed({
  get: () => watched.value,
  set: (next: any) => (settings.value = next),
})
const ready = ref(0)
const failed = ref<string | null>(null)
const showSettings = ref(false)

function forget(id: string) {
  try {
    datasources.removeDatasource(id)
  } catch {
    // Not there.
  }
}

let builds = 0
async function build() {
  failed.value = null
  if (!chart.value) return
  // The widget goes first: one still mounted would ask for the source removed below.
  ready.value = 0
  await nextTick()
  forget(COMPOSER)
  forget(SOURCE)
  const types = datasources.getDataSourceTypes()
  if (!types.includes(COMPOSER_TYPE) || !types.includes(ANSWER_TYPE)) {
    failed.value = t('Chart.noComposer')
    return
  }
  try {
    const table = answerTable(props.matrix, t('Chart.value'))
    datasources.registerDatasource(SOURCE, ANSWER_TYPE, { table })
    datasources.registerDatasource(COMPOSER, COMPOSER_TYPE, {
      uid: COMPOSER,
      name: COMPOSER,
      type: COMPOSER_TYPE,
      connectedDatasources: [SOURCE],
      composeBy: LABEL_COLUMN,
      labelColumn: LABEL_COLUMN,
      usedSets: table.headers.slice(1),
    })
    if (!settings.value) settings.value = form.value?.create() ?? {}
    ready.value = ++builds
  } catch (error) {
    failed.value = error instanceof Error ? error.message : String(error)
  }
}

watch(() => props.matrix, build, { immediate: true })
// After the widget has unmounted, so it unsubscribes from a source that is still there.
onUnmounted(() => {
  forget(COMPOSER)
  forget(SOURCE)
})
</script>

<template>
  <div class="chart-view">
    <p v-if="!chart" class="chart-view__note">{{ t('Chart.noWidget') }}</p>
    <p v-else-if="failed" class="chart-view__note chart-view__note--error">{{ t('Chart.failed', { error: failed }) }}</p>
    <template v-else-if="ready && config">
      <div class="chart-view__bar">
        <span class="chart-view__hint">{{ t('Chart.hint') }}</span>
        <DButton v-if="form" size="sm" intent="quiet" @click="showSettings = !showSettings">{{ showSettings ? t('Chart.hideSettings') : t('Chart.settings') }}</DButton>
      </div>
      <div class="chart-view__main">
        <div class="chart-view__chart">
          <component :is="chart.component" :key="ready" :datasource-id="COMPOSER" id="workbench-chart" v-model:configv="config" />
        </div>
        <aside v-if="showSettings && form" class="chart-view__settings">
          <SettingsForm
            v-model="settings"
            :create="form.create"
            :ui-model-xmi="form.xmi"
            :domain-package="form.ePackage()"
            :ui-model-uri="form.uri"
            :entry-forms="form.entryForms"
            :ecore="form.ecore"
          />
        </aside>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* A chart squeezed into a short output pane draws nothing readable; below this the pane scrolls. */
.chart-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
}

.chart-view__note {
  margin: 12px;
  color: var(--color-dim);
}

.chart-view__note--error {
  color: var(--color-err);
}

.chart-view__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 8px;
  border-bottom: 1px solid var(--color-divider);
}

.chart-view__hint {
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.chart-view__main {
  display: flex;
  flex: 1;
  min-height: 0;
}

.chart-view__chart {
  flex: 1;
  min-width: 0;
  min-height: 320px;
  padding: 8px;
}

.chart-view__settings {
  width: 320px;
  flex: none;
  overflow: auto;
  border-left: 1px solid var(--color-divider);
  padding: 8px;
}
</style>
