/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Capturing and restoring the whole workspace - every board with its
 * widgets and layout, plus the data sources, connections, variables and
 * event mappings they share.
 *
 * Lifted out of the storage page unchanged, because the order matters in
 * ways that are easy to break: chart and datatable sources have to be
 * registered after the ones they read from, variable wrappers are
 * initialised against widgets that must already exist, and the payload is
 * flatted rather than plain JSON. Both the storage view and anything that
 * saves in place use this one implementation.
 */
import { inject, ref } from 'vue'
import { parse, stringify } from 'flatted'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import {
  type ConnectionRepository,
  identifier as ConnectionRepoId,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  type DatasourceRepository,
  identifier as DsRepoId,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as VariableRepositoryId,
  type VariableRepository,
} from 'org.eclipse.daanse.board.app.lib.api.variable'
import {
  identifier as VariableWrapperFactoryId,
  type VariableWrapperFactory,
} from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import { type Variable } from 'org.eclipse.daanse.board.app.lib.variables'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import {
  EVENT_MANAGER,
  type EventManager,
} from 'org.eclipse.daanse.board.app.lib.api.events'

/** Sources whose input is another source, so they are registered last. */
const DERIVED_SOURCE_TYPES = ['chart', 'datatable']

/** Where the workspace currently in the app came from, or nothing if it was never stored. */
export interface WorkspaceOrigin {
  placeUri: string
  entryUri: string
  name: string
}

/*
 * Module scope on purpose: the origin belongs to the workspace, not to the
 * view that happens to show it, so it survives switching away from the
 * storage view and is there for saving in place from anywhere.
 */
const origin = ref<WorkspaceOrigin | undefined>()

export function useWorkspaceOrigin() {
  return origin
}

export function useWorkspaceSnapshot() {
  const pageRepo = inject<PageRegistryI>(PageIdentifier)
  const layoutRepo = inject<LayoutRepositoryI>(LayoutRepositoryIdentifier)
  const connectionRepository = inject<ConnectionRepository>(ConnectionRepoId)
  const dsRepository = inject<DatasourceRepository>(DsRepoId)
  const variableRepository = inject<VariableRepository>(VariableRepositoryId)
  const variableWrapperFactory = inject<VariableWrapperFactory>(VariableWrapperFactoryId)
  const eventManager = inject<EventManager>(EVENT_MANAGER)

  /** The current workspace as a storable string. */
  function capture(): string {
    const layoutStore = useLayoutStore()
    const sources = useDataSourcesStore()
    const connections = useConnectionsStore()
    const widgets = useWidgetsStore()

    const variables: unknown[] = []
    for (const entry of variableRepository?.getAllVariables() ?? []) {
      const serialized = (entry[1] as Variable).serialize()
      serialized.name = entry[0] as string
      variables.push(serialized)
    }

    const pages: Record<string, unknown> = {}
    for (const id of pageRepo?.getAllPageIds() ?? []) {
      pages[id] = {
        info: pageRepo?.getPage(id),
        widgets: useWidgetsStore(id).widgets,
        layout: useLayoutStore(id).layout,
      }
    }

    return stringify({
      layout: layoutStore.layout,
      datasources: sources.dataSources,
      conections: connections.connections,
      widgets: widgets.widgets,
      variables,
      pages,
      eventMappings: eventManager?.getAllMappings() ?? [],
    })
  }

  /**
   * Puts a stored workspace back in place.
   *
   * @returns the ids of the boards it restored, so the caller can decide
   *   where to navigate - that is a view's business, not this one's.
   */
  function restore(content: unknown): string[] {
    if (!content) return []

    let data: any
    if (typeof content === 'string') {
      data = JSON.parse(content)
      // Written with flatted when the payload contains cycles
      if (Array.isArray(data)) data = parse(content)
    } else {
      data = content
      if (Array.isArray(data)) data = parse(JSON.stringify(content))
    }

    const layoutStore = useLayoutStore()
    const sources = useDataSourcesStore()
    const connections = useConnectionsStore()
    const widgets = useWidgetsStore()

    for (const variable of data.variables ?? []) {
      variableRepository?.registerVariable(variable.name, variable.type, variable)
    }

    if (data.conections) connections.connections = data.conections
    for (const connection of data.conections ?? []) {
      connectionRepository?.registerConnection(connection.uid, connection.type, connection.config)
    }

    // Plain sources first: the derived ones resolve against them on registration
    for (const source of data.datasources ?? []) {
      if (!DERIVED_SOURCE_TYPES.includes(source.type)) {
        dsRepository?.registerDatasource(source.uid, source.type, source.config)
      }
    }
    for (const source of data.datasources ?? []) {
      if (DERIVED_SOURCE_TYPES.includes(source.type)) {
        dsRepository?.registerDatasource(source.uid, source.type, source.config)
      }
    }

    variableWrapperFactory?.initilazeVariableWrappers(data.widgets)
    if (data.datasources) sources.dataSources = data.datasources
    if (data.layout) layoutStore.layout = data.layout
    if (data.widgets) widgets.widgets = data.widgets

    const restored: string[] = []
    for (const [id, page] of Object.entries<any>(data.pages ?? {})) {
      useLayoutStore(id).layout = page.layout
      useWidgetsStore(id).widgets = page.widgets

      const info = page.info
      if (info && !info.layout && layoutRepo) {
        info.layout = layoutRepo.getLayout('org.eclipse.daanse.board.app.ui.vue.layouts.base')
      }
      pageRepo?.registerPage(info)
      variableWrapperFactory?.initilazeVariableWrappers(page.widgets)
      restored.push(id)
    }

    if (data.eventMappings && eventManager) {
      eventManager.setAllMappings(data.eventMappings)
    }

    return restored
  }

  return { capture, restore }
}
