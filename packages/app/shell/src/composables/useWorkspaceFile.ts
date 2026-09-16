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
 * Writing the workspace out, and reading one back.
 *
 * Everything is modelled, so this is a resource: saving walks the
 * containment tree from the root, loading builds it again. What it replaces
 * gathered the same state out of four Pinia stores and three registries by
 * hand, wrote it with `flatted` because the payload carried Vue components
 * and therefore cycles, and put it back in an order that had to be right.
 *
 * References are references in the file. A data source points at its
 * connection and a widget at its source by `$ref`, resolved on load -
 * where before both were ids that nothing checked.
 *
 * The live objects are not in the file, and should not be: a connection, a
 * store and a variable are built from what is in it by the repositories
 * that own them. That is the second half of loading.
 */

import { inject, ref } from 'vue'
import { JSONResource, OPTION_INDENT, URI } from '@emfts/core'
import {
  identifier as WORKSPACE,
  type Workspace,
  EventMappingImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
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
import { EVENT_MANAGER, type EventManager } from 'org.eclipse.daanse.board.app.lib.api.events'
import { decodeStored, isResource, readLegacyWorkspace } from './legacyWorkspace'

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

/** The name the resource carries, and what its `$ref`s resolve against. */
const WORKSPACE_URI = 'workspace.json'

const BOARD_ECLASS = 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Board'

/**
 * A state written before a board held the pages.
 *
 * Back then the pages sat on the workspace itself. The model puts them in a
 * board now, and a workspace has one or none - so a stored state's pages
 * are exactly one board's worth. They move there, and so does every
 * reference that pointed into them: the default page, a variable's page.
 * Those are fragment paths, which is why this is done on the text before
 * the resource reads it rather than on the objects afterwards.
 */
export function liftPagesIntoBoard(data: unknown): unknown {
  if (!data || typeof data !== 'object') return data
  const held = data as Record<string, unknown>
  if (held.board || !Array.isArray(held.pages)) return data

  const moved = JSON.parse(
    JSON.stringify(held).replace(/"\/\/@pages\./g, '"//@board/@pages.'),
  ) as Record<string, unknown>

  const board: Record<string, unknown> = {
    eClass: BOARD_ECLASS,
    id: crypto.randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: 'Board',
    pages: moved.pages,
  }
  if (moved.defaultPage) board.defaultPage = moved.defaultPage
  delete moved.pages
  delete moved.defaultPage
  moved.board = board
  return moved
}

/**
 * A workspace read out of stored content, without applying it.
 *
 * Both formats end here - one built from the model, one converted from the
 * shape stored before any of this - so a caller can look at what is in a
 * file before deciding to open it.
 */
export function parseWorkspace(content: unknown): Workspace | undefined {
  const data = decodeStored(content)
  if (!data) return undefined

  try {
    if (!isResource(data)) return readLegacyWorkspace(data as never)

    const resource = new JSONResource(URI.createURI(WORKSPACE_URI))
    resource.loadFromString(JSON.stringify(liftPagesIntoBoard(data)))
    return resource.getContents().get(0) as Workspace
  } catch {
    return undefined
  }
}

export function useWorkspaceFile() {
  const workspace = inject<Workspace>(WORKSPACE)!
  const connections = inject<ConnectionRepository>(ConnectionRepoId)
  const datasources = inject<DatasourceRepository>(DsRepoId)
  const variables = inject<VariableRepository>(VariableRepositoryId)
  const variableWrappers = inject<VariableWrapperFactory>(VariableWrapperFactoryId)
  const events = inject<EventManager>(EVENT_MANAGER)

  /**
   * Brings the one list whose live side is the truth up to date.
   *
   * Connections, data sources, boards and variables are the model, and what
   * runs is built from it. The event mappings are the other way round - the
   * manager holds them, and this is where what it holds is written into the
   * workspace, just before it is stored.
   */
  function collect(): void {
    workspace.eventMappings.clear()
    for (const mapping of events?.getAllMappings() ?? []) {
      const held = new EventMappingImpl()
      held.id = mapping.id
      held.definition = mapping
      workspace.eventMappings.push(held)
    }
  }

  /** The current workspace as a storable string. */
  function save(): string {
    collect()

    const resource = new JSONResource(URI.createURI(WORKSPACE_URI))
    resource.getContents().add(workspace)
    const text = resource.saveToString(new Map<string, unknown>([[OPTION_INDENT, 2]]))

    /*
     * Taken out again: the workspace is the application's, not the
     * resource's, and leaving it contained there would make the next save
     * move it out of a resource it is no longer in.
     */
    resource.getContents().clear()
    return text
  }

  /**
   * Puts a stored workspace in place, and builds what runs from it.
   *
   * @returns the ids of the boards it opened, so the caller can decide
   *   where to navigate - that is a view's business, not this one's.
   */
  function load(content: unknown): string[] {
    const loaded = parseWorkspace(content)
    if (!loaded) return []

    /*
     * Moved rather than copied. Adding an object to a containment list
     * takes it out of the one it was in, so the loaded tree is emptied into
     * the live workspace and the references inside it keep pointing at the
     * objects that moved with them.
     */
    workspace.connections.clear()
    for (const connection of loaded.connections.toArray()) workspace.connections.push(connection)

    workspace.datasources.clear()
    for (const source of loaded.datasources.toArray()) workspace.datasources.push(source)

    /*
     * The board comes over whole. A state written before boards existed has
     * its pages directly on the workspace; parseWorkspace puts those into a
     * board, so there is one shape to move here.
     */
    workspace.board = loaded.board

    workspace.variables.clear()
    for (const variable of loaded.variables.toArray()) workspace.variables.push(variable)

    workspace.eventMappings.clear()
    for (const mapping of loaded.eventMappings.toArray()) workspace.eventMappings.push(mapping)


    /* Now the things that run: built from the model, never stored with it. */
    connections?.rebuildLive()
    datasources?.rebuildLive()
    variables?.rebuildLive()
    events?.setAllMappings(
      workspace.eventMappings.toArray().map((mapping) => mapping.definition as never),
    )

    const opened: string[] = []
    for (const page of workspace.board?.pages.toArray() ?? []) {
      variableWrappers?.initilazeVariableWrappers(
        page.widgets.toArray().map((widget) => ({
          uid: widget.uid,
          type: widget.type,
          config: widget.config,
          wrapperConfig: widget.wrapperConfig,
        })),
      )
      opened.push(page.id as string)
    }
    return opened
  }

  return { save, load }
}
