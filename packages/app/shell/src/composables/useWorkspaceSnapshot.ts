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
  type Page,
  type StoredPage,
  type Widget,
  type StoredWidget,
  type LayoutItem,
  type StoredLayoutItem,
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

/** A stored workspace as it comes out of a repository. */
export interface StoredWorkspace {
  pages?: Record<string, { info?: { name?: string; description?: string }; widgets?: any[]; layout?: any[] }>
  widgets?: any[]
  datasources?: any[]
  conections?: any[]
  variables?: any[]
}

/**
 * Decodes a stored payload without applying it, so a state can be inspected
 * before it is loaded. Repositories hand it over either as the raw string or
 * already through JSON.parse, and cyclic payloads are written with flatted -
 * an array at the top level is the tell.
 */
export function parseSnapshot(content: unknown): StoredWorkspace | undefined {
  if (!content) return undefined
  try {
    if (typeof content === 'string') {
      const data = JSON.parse(content)
      return Array.isArray(data) ? parse(content) : data
    }
    return Array.isArray(content) ? parse(JSON.stringify(content)) : (content as StoredWorkspace)
  } catch {
    return undefined
  }
}

/**
 * A modelled page as plain data.
 *
 * Feature by feature, because a modelled object keeps its values in
 * private fields behind getters - spreading it would store _name and _id
 * rather than what the model calls them.
 */
function toStoredPage(page: Page | undefined): StoredPage | undefined {
  if (!page) return undefined
  return {
    id: page.id as string,
    name: page.name as string,
    description: page.description,
    icon: page.icon,
    visibleInNavigation: page.visibleInNavigation ?? true,
    layoutId: page.layoutId,
    layoutSettings: page.layoutSettings as Record<string, unknown> | undefined,
    backgroundColor: page.backgroundColor,
    backgroundImage: page.backgroundImage,
    backgroundSize: page.backgroundSize as StoredPage['backgroundSize'],
    backgroundPosition: page.backgroundPosition,
    backgroundRepeat: page.backgroundRepeat as StoredPage['backgroundRepeat'],
  }
}

/** A modelled widget as plain data, feature by feature. */
function toStoredWidget(widget: Widget): StoredWidget {
  return {
    uid: widget.uid,
    type: widget.type as string,
    config: widget.config as StoredWidget['config'],
    wrapperConfig: widget.wrapperConfig as Record<string, unknown>,
  }
}

/** Where it sits, likewise. */
function toStoredLayoutItem(item: LayoutItem): StoredLayoutItem {
  return {
    id: item.id,
    x: item.x,
    y: item.y,
    z: item.z,
    width: item.width,
    height: item.height,
    group: item.group,
  }
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
    const variables: unknown[] = []
    for (const entry of variableRepository?.getAllVariables() ?? []) {
      const serialized = (entry[1] as Variable).serialize()
      serialized.name = entry[0] as string
      variables.push(serialized)
    }

    const pages: Record<string, unknown> = {}
    for (const id of pageRepo?.getAllPageIds() ?? []) {
      const page = pageRepo?.getPage(id)
      pages[id] = {
        info: toStoredPage(page),
        widgets: (page?.widgets?.toArray() ?? []).map((w) => toStoredWidget(w as Widget)),
        layout: (page?.layout?.toArray() ?? []).map(toStoredLayoutItem),
      }
    }

    return stringify({
      datasources: (dsRepository?.getDatasources() ?? []).map((source) => ({
        uid: source.uid,
        name: source.name,
        type: source.type,
        config: source.config,
      })),
      /*
       * Still written under the misspelled key and still as plain objects:
       * the format is what stored boards already hold, and changing it is
       * its own step. The connections come from the model now, the rest
       * from the stores that have not moved yet.
       */
      conections: (connectionRepository?.getConnections() ?? []).map((connection) => ({
        uid: connection.uid,
        name: connection.name,
        type: connection.type,
        config: connection.config,
      })),
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
    const data = parseSnapshot(content) as any
    if (!data) return []

    for (const variable of data.variables ?? []) {
      variableRepository?.registerVariable(variable.name, variable.type, variable)
    }

    /* Both halves in one call now - the model objects and their live ones. */
    connectionRepository?.setConnections((data.conections ?? []) as never)

    /*
     * Both halves in one call, and the ordering of derived sources with it -
     * which source has to exist before which is a property of how they are
     * built, not of this view.
     */
    dsRepository?.setDatasources((data.datasources ?? []) as never)

    const restored: string[] = []
    for (const [id, page] of Object.entries<any>(data.pages ?? {})) {
      /*
       * A board stored before the layout became an id carries the whole
       * layout object, Vue components and all. Only its id is of any use
       * here; the rest is resolved from the repository on render.
       */
      const info = page.info
      if (info) {
        pageRepo?.registerPage({
          ...info,
          layoutId:
            info.layoutId ??
            info.layout?.id ??
            'org.eclipse.daanse.board.app.ui.vue.layouts.base',
          layout: undefined,
        })
      }

      /*
       * The board's contents after the page exists to hold them, and both
       * halves in one call - a widget and its placement arrive together.
       */
      pageRepo?.setBoard(id, page.widgets ?? [], page.layout ?? [])
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
