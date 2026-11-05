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

import { randomUUID } from 'org.eclipse.daanse.board.app.lib.core'
import { inject, ref } from 'vue'
import { JSONResource, OPTION_INDENT, URI } from '@emfts/core'
import {
  identifier as WORKSPACE,
  type Workspace,
  EventMappingImpl,
  BoardImpl,
  liftTypedWeatherRegions,
  completeWeather,
  completeLighting,
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
import {
  type Entity,
  type Repository,
  type RepositoryRegistryI,
  type WritableRepository,
  identifier as RepoManagerId,
} from 'org.eclipse.daanse.board.app.lib.api.persistence'
import { decodeStored, isResource, readLegacyWorkspace } from './legacyWorkspace'
import { useUnsavedChanges } from './unsavedChanges'

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

/**
 * Where a state of this name lives in a place.
 *
 * The place's own address with a file name on it - which is what makes
 * two states of the same name in the same place the same state, and why
 * storing over one is an update rather than a second entry.
 */
export function entryUriFor(place: { uri: unknown }, name: string): URL {
  const uri = new URL(String(place.uri))
  uri.pathname = `/${name}.json`
  return uri
}

/** The name the resource carries, and what its `$ref`s resolve against. */
const WORKSPACE_URI = 'workspace.json'

const BOARD_ECLASS = 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Board'

/**
 * The board a state without one is opened as.
 *
 * Named after what was opened, so the header has something true to show;
 * it holds no pages, which is a board one explores its connections from
 * rather than a half-finished one.
 */
function boardFor(name?: string) {
  const board = new BoardImpl()
  board.id = randomUUID()
  if (name) board.name = name
  return board
}

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
    id: randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: 'Board',
    pages: moved.pages,
  }
  /*
   * Only a path to the page survives the move. Older states wrote the
   * default as a position in the file instead - "workspace.json#/0/3" -
   * and the pages are not at that position any more, so such a reference
   * would resolve to whatever now sits there. Dropped rather than
   * repaired: the first page is the right answer, and a wrong page is
   * worse than no preference.
   */
  const named = moved.defaultPage as { $ref?: string } | undefined
  if (named?.$ref?.includes('//@board/@pages.')) board.defaultPage = named
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
    /* A weather region typed in before regions were drawn becomes a shape */
    resource.loadFromString(JSON.stringify(liftTypedWeatherRegions(liftPagesIntoBoard(data))))
    const workspace = resource.getContents().get(0) as Workspace
    /* A weather stored before some of its settings existed gets them, or the form cannot offer them */
    for (const page of workspace.board?.pages.toArray() ?? []) {
      if (page.weather) completeWeather(page.weather)
      if (page.lighting) completeLighting(page.lighting)
    }
    return workspace
  } catch {
    return undefined
  }
}

/**
 * What came of writing the workspace back where it came from.
 *
 * Three different failures used to be one `false`, and the caller could
 * only answer all of them the same way: open the storage dialog and ask
 * for a place, for a board that has one (#1200). A place that is merely
 * not connected can be asked for again; a board that was never stored
 * cannot.
 */
export type SaveOutcome = 'saved' | 'no-origin' | 'place-unreachable' | 'entry-gone'

export function useWorkspaceFile() {
  const workspace = inject<Workspace>(WORKSPACE)!
  const connections = inject<ConnectionRepository>(ConnectionRepoId)
  const datasources = inject<DatasourceRepository>(DsRepoId)
  const variables = inject<VariableRepository>(VariableRepositoryId)
  const variableWrappers = inject<VariableWrapperFactory>(VariableWrapperFactoryId)
  const events = inject<EventManager>(EVENT_MANAGER)
  const repoManager = inject<RepositoryRegistryI>(RepoManagerId)

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

  /**
   * The current workspace as a storable string.
   *
   * Serializing moves the workspace into a resource and out again, which is
   * not a change to it - so it is not counted as one. Whether the string
   * actually got stored is the caller's to report, by markSaved.
   */
  function save(): string {
    const changes = useUnsavedChanges()
    return changes ? changes.untracked(serialize) : serialize()
  }

  function serialize(): string {
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
  /**
   * Applies a stored state.
   *
   * `name` is what the state was called where it was stored - a board
   * that arrives without one is named after it, so the header has
   * something true to show instead of a generic label.
   */
  function load(content: unknown, name?: string): string[] {
    const loaded = parseWorkspace(content)
    if (!loaded) return []

    const opened = apply(loaded, name)
    /* What was just loaded is what is stored. */
    useUnsavedChanges()?.markSaved()
    return opened
  }

  /**
   * Moves a loaded state into the live workspace.
   *
   * `openedAs` is what the state was called where it was stored, used to
   * name a board that arrives without one. Not called `name`: that is a
   * property of window, so a stray reference to it compiles and silently
   * reads the frame's name instead of failing.
   */
  function apply(loaded: Workspace, openedAs?: string): string[] {
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
     *
     * A state that holds no board at all still opens one. Such a state is
     * not nothing - it carries the connections, sources and variables that
     * were saved with it - and it is what a person explores those from. It
     * used to arrive with workspace.board left empty, which every screen
     * read as "no board open", so the connections that had just loaded
     * were nowhere to be seen.
     */
    workspace.board = loaded.board ?? boardFor(openedAs)

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
      /*
       * The page's own modelled settings - its weather - hold their
       * wrappers by containment and came back as the generated class.
       */
      variableWrappers?.bindContainedWrappers(page as never)
      opened.push(page.id as string)
    }
    return opened
  }

  /**
   * Writes the workspace back over the state it came from.
   *
   * The origin is where that is - kept with the workspace rather than
   * with the storage view, which is what lets this be called from the
   * board's own screen. A workspace that was never stored has none, and
   * there is nothing here to write over: naming a new state is the
   * storage view's business, and this says so by returning false rather
   * than guessing a place.
   */
  async function saveInPlace(): Promise<SaveOutcome> {
    const where = origin.value
    if (!where || !repoManager) return 'no-origin'

    const places: Repository[] = (await repoManager.getAvailableReposetories()) ?? []
    const place = places.find((each) => String(each.uri) === where.placeUri)
    if (!place) return 'place-unreachable'

    /*
     * Asked before the entry is read, not after the write fails.
     *
     * A folder place answers from a handle whose permission may have
     * lapsed since it was registered. Asking is a prompt, and a prompt
     * needs the click that brought us here - so it happens here, at the
     * front, rather than three awaits deeper where the activation may
     * already have run out.
     */
    if (typeof (place as { auth?: unknown }).auth === 'function') {
      try {
        if ((await (place as { auth(): Promise<unknown> }).auth()) === false) {
          return 'place-unreachable'
        }
      } catch {
        return 'place-unreachable'
      }
    }

    /*
     * A URL, not the string it was kept as: a repository reads
     * `uri.protocol` and `uri.hostname` off it to decide whether the
     * entry is one of its own, and on a string both are undefined - so
     * it answers that it has never heard of it.
     */
    const entry = await place.getEntityByUri(new URL(where.entryUri))
    if (!entry) return 'entry-gone'

    await (place as WritableRepository).update({ ...entry, data: save() } as Entity)
    useUnsavedChanges()?.markSaved()
    return 'saved'
  }

  /**
   * Writes the workspace into a place under a name, as a new state.
   *
   * What the board came from afterwards - so the next save is a write
   * rather than a question. Used where a state is first put somewhere:
   * the storage view, and making a board, which asks for both up front
   * precisely so that the first save has somewhere to go.
   */
  async function storeAs(place: Repository, name: string): Promise<boolean> {
    if (typeof (place as WritableRepository).create !== 'function') return false

    const entry = {
      name,
      uri: entryUriFor(place, name),
      data: save(),
    } as unknown as Entity
    await (place as WritableRepository).create(entry)

    origin.value = {
      placeUri: String(place.uri),
      entryUri: String(entry.uri),
      name,
    }
    useUnsavedChanges()?.markSaved()
    return true
  }

  /** The places a state can be written to, in the order they are offered. */
  async function writablePlaces(): Promise<Repository[]> {
    const places: Repository[] = (await repoManager?.getAvailableReposetories()) ?? []
    return places.filter(
      (place) => typeof (place as WritableRepository).create === 'function',
    )
  }

  return { save, load, saveInPlace, storeAs, writablePlaces }
}
