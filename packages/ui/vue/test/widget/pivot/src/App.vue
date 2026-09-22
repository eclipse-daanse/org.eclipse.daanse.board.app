<!--
Copyright (c) 2026 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<template>
  <div style="width: 100vw; height: 100vh; display: flex;">
    <div data-testid="widget-panel" style="flex: 1; position: relative; min-width: 0;">
      <PivotTableWidget v-if="mounted" id="pivot" datasourceId="synthetic" v-model:configv="config" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PivotTableWidget from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/PivotTableWidget.vue'
import { PivotTable } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/gen/PivotTable'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { TinyEmitter } from 'tiny-emitter'
import type { Scenario } from './scenarios'
import type { SyntheticDatasource } from './syntheticDatasource'

const props = defineProps<{ scenario: Scenario }>()

// window.__pivot.start() mounts the widget so the first render can be timed
// from the outside. It gets its datasource right away: useDatasourceRepository
// only subscribes to datasource updates when the id is there on mount
const mounted = ref(false)
const config = ref(Object.assign(new PivotTable(), props.scenario.config ?? {}))

const datasource = () =>
  container.get<DatasourceRepository>(DATASOURCE_REPOSITORY).getDatasource('synthetic') as unknown as SyntheticDatasource

const frames = (n: number) =>
  new Promise<void>(resolve => {
    const step = () => (n-- <= 0 ? resolve() : requestAnimationFrame(step))
    requestAnimationFrame(step)
  })

// Resolves two frames after the datasource answered, i.e. once the new data
// has been rendered and painted
const afterNextDelivery = async (action: () => void) => {
  const before = datasource().deliveries
  const t0 = performance.now()
  action()
  while (datasource().deliveries === before) await frames(1)
  await frames(2)
  return performance.now() - t0
}

const widgetEvents: any[] = []
const bus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)
for (const name of [
  'cell_clicked', 'cell_right_clicked', 'row_clicked', 'row_right_clicked',
  'column_clicked', 'column_right_clicked', 'row_expanded', 'row_collapsed',
  'column_expanded', 'column_collapsed', 'cell_edited',
]) {
  bus.on(`widget:PivotTableWidget:${name}`, (e: any) => widgetEvents.push(e))
}

;(window as any).__pivot = {
  toggle: props.scenario.toggle,
  start: () => afterNextDelivery(() => { mounted.value = true }),
  clickAndWait: (el: HTMLElement) => afterNextDelivery(() => el.click()),
  frames,
  events: () => datasource().events,
  widgetEvents: () => widgetEvents,
  config: () => config.value,
}
</script>
