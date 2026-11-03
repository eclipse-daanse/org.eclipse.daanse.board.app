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

import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import {
  identifier as WORKSPACE_ID,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as RepoManagerId } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import {
  liftPagesIntoBoard,
  useWorkspaceFile,
  useWorkspaceOrigin,
} from './useWorkspaceFile'
import { useRestoreLastOpened } from './useRestoreLastOpened'

/**
 * States written before a board held the pages.
 *
 * Every one of these is a file somebody may still open, so the shapes here
 * are the ones that were actually written, references and all.
 */
describe('liftPagesIntoBoard', () => {
  const stored = () => ({
    eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
    connections: [{ uid: 'c1', name: 'REST' }],
    pages: [
      { id: 'p1', name: 'Übersicht' },
      { id: 'p2', name: 'Störungen' },
    ],
    defaultPage: { $ref: '//@pages.1' },
    variables: [{ uid: 'v1', page: { $ref: '//@pages.0' } }],
  })

  it('moves the pages into a board', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.pages).toBeUndefined()
    expect(after.board.pages).toHaveLength(2)
    /* Order is what the page switcher shows; it has to survive. */
    expect(after.board.pages[1].name).toBe('Störungen')
  })

  it('carries the default page across, as a path into the board', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.defaultPage).toBeUndefined()
    expect(after.board.defaultPage.$ref).toBe('//@board/@pages.1')
  })

  it('drops a default written as a position in the file', () => {
    /*
     * What phase3-neu actually held. The pages are not at that position
     * any more, so keeping it would resolve to whatever now is - which is
     * how the open board came to link to a page that does not exist.
     */
    const positional = { ...stored(), defaultPage: { $ref: 'workspace.json#/0/3' } }
    const after = liftPagesIntoBoard(positional) as any
    expect(after.board.defaultPage).toBeUndefined()
    expect(after.defaultPage).toBeUndefined()
    /* The pages themselves still come across. */
    expect(after.board.pages).toHaveLength(2)
  })

  it('repoints anything else that referenced a page', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.variables[0].page.$ref).toBe('//@board/@pages.0')
  })

  it('leaves the rest of the workspace alone', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.connections[0].name).toBe('REST')
    expect(after.eClass).toBe(stored().eClass)
  })

  it('names the board, since the old shape never did', () => {
    const after = liftPagesIntoBoard(stored()) as any
    expect(after.board.name).toBe('Board')
    expect(after.board.id).toEqual(expect.any(String))
  })

  it('does not touch a state that already has a board', () => {
    const already = { board: { pages: [{ id: 'x' }] } }
    expect(liftPagesIntoBoard(already)).toBe(already)
  })

  it('does not invent a board for a state with no pages', () => {
    const after = liftPagesIntoBoard({ connections: [] }) as any
    expect(after.board).toBeUndefined()
  })

  it('passes anything that is not an object straight through', () => {
    expect(liftPagesIntoBoard(undefined)).toBeUndefined()
    expect(liftPagesIntoBoard('nonsense')).toBe('nonsense')
  })
})

/*
 * Opening a state that holds no board.
 *
 * liftPagesIntoBoard above is the migration and rightly invents nothing;
 * this is what opening does, where the difference shows: a state carrying
 * connections and no pages is a board one explores them from, and it used
 * to arrive with workspace.board empty - which every screen read as "no
 * board open", with the connections nowhere to be seen.
 */
describe('opening a state with no board in it', () => {
  function open(content: unknown, name?: string) {
    const workspace = new WorkspaceImpl()
    let ids: string[] = []
    const host = defineComponent({
      setup() {
        const { load } = useWorkspaceFile()
        ids = load(content, name)
        return () => null
      },
    })
    mount(host, { global: { provide: { [WORKSPACE_ID]: workspace } } })
    return { workspace, ids }
  }

  const withConnections = {
    eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
    connections: [
      {
        eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Connection',
        uid: 'c1',
        name: 'govdata',
        type: 'rest',
      },
    ],
  }

  it('opens a board, so the state that was loaded is an open board', () => {
    const { workspace } = open(withConnections)

    expect(workspace.board).toBeTruthy()
    expect(workspace.board?.pages.toArray()).toHaveLength(0)
  })

  it('keeps the connections that came with it', () => {
    const { workspace } = open(withConnections)

    expect(workspace.connections.toArray()).toHaveLength(1)
  })

  it('names the board after the state it came from', () => {
    const { workspace } = open(withConnections, 'Sparky')

    expect(workspace.board?.name).toBe('Sparky')
  })

  it('leaves a state that brought its own board alone', () => {
    const { workspace } = open(
      {
        eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
        board: {
          eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Board',
          id: 'b1',
          name: 'Stored name',
          pages: [],
        },
      },
      'Sparky',
    )

    expect(workspace.board?.name).toBe('Stored name')
  })
})


/**
 * Saving in place.
 *
 * The origin was written for this - "there for saving in place from
 * anywhere", says the comment on it - and nothing used it outside the
 * storage view until the board's own screen did.
 */
describe('saveInPlace', () => {
  const PLACE = 'file:///states'
  const ENTRY = 'file:///states/sparky.json'

  function setUp({ place = PLACE, entry = ENTRY, known = true, auth }: {
    place?: string
    entry?: string
    known?: boolean
    /* undefined: a place that cannot be asked, like a server. */
    auth?: (() => Promise<unknown>) | undefined
  } = {}) {
    const updated: Array<Record<string, unknown>> = []
    const asked: unknown[] = []
    /* What happened in which order, for the permission test below. */
    const order: string[] = []
    const repository = {
      uri: PLACE,
      ...(auth
        ? {
            auth: async () => {
              order.push('auth')
              return auth()
            },
          }
        : {}),
      /*
       * A repository reads uri.protocol and uri.hostname to decide
       * whether an entry is one of its own, so it is handed a URL. A
       * string stringifies the same and is answered "never heard of it".
       */
      getEntityByUri: async (uri: unknown) => {
        order.push('read')
        asked.push(uri)
        if (!(uri instanceof URL)) return undefined
        return known && String(uri) === ENTRY ? { uri: new URL(ENTRY), name: 'Sparky', data: '{}' } : undefined
      },
      update: async (held: Record<string, unknown>) => {
        updated.push(held)
      },
    }

    const workspace = new WorkspaceImpl()
    useWorkspaceOrigin().value = { placeUri: place, entryUri: entry, name: 'Sparky' }

    let kept: Promise<string> | undefined
    const host = defineComponent({
      setup() {
        const { saveInPlace } = useWorkspaceFile()
        kept = saveInPlace()
        return () => null
      },
    })
    mount(host, {
      global: {
        provide: {
          [WORKSPACE_ID]: workspace,
          [RepoManagerId]: { getAvailableReposetories: async () => [repository] },
        },
      },
    })
    return { kept: kept!, updated, asked, order }
  }

  it('writes the workspace over the state it came from', async () => {
    const { kept, updated, asked } = setUp()

    expect(await kept).toBe('saved')
    expect(asked[0]).toBeInstanceOf(URL)
    expect(updated).toHaveLength(1)
    /* The serialized workspace, not the string the entry held before. */
    expect(String(updated[0].data)).toContain('Workspace')
    expect(String(updated[0].uri)).toBe(ENTRY)
  })

  /*
   * The three failures are three different things to do next (#1200), so
   * they are three different answers.
   */
  it('says the place is not reachable when it is not registered', async () => {
    const { kept, updated } = setUp({ place: 'file:///elsewhere' })

    expect(await kept).toBe('place-unreachable')
    expect(updated).toHaveLength(0)
  })

  it('says the entry is gone when the place no longer holds it', async () => {
    const { kept, updated } = setUp({ known: false })

    expect(await kept).toBe('entry-gone')
    expect(updated).toHaveLength(0)
  })

  it('says there is no origin when the board was never stored', async () => {
    useWorkspaceOrigin().value = undefined
    const workspace = new WorkspaceImpl()
    let kept: Promise<string> | undefined
    const host = defineComponent({
      setup() {
        kept = useWorkspaceFile().saveInPlace() as Promise<string>
        return () => null
      },
    })
    mount(host, {
      global: {
        provide: {
          [WORKSPACE_ID]: workspace,
          [RepoManagerId]: { getAvailableReposetories: async () => [] },
        },
      },
    })

    expect(await kept!).toBe('no-origin')
  })

  /*
   * A folder place answers from a handle whose permission may have
   * lapsed. Asking is a prompt, and the prompt needs the click that led
   * here - so it happens before the entry is read, not three awaits
   * deeper.
   */
  it('asks the place for permission before it reads the entry', async () => {
    const { kept, order } = setUp({ auth: async () => true })
    await kept

    expect(order).toEqual(['auth', 'read'])
  })

  it('says the place is not reachable when the person declines', async () => {
    const { kept, updated } = setUp({ auth: async () => false })

    expect(await kept).toBe('place-unreachable')
    expect(updated).toHaveLength(0)
  })

  it('says the same when asking throws', async () => {
    const { kept, updated } = setUp({
      auth: async () => {
        throw new Error('no gesture')
      },
    })

    expect(await kept).toBe('place-unreachable')
    expect(updated).toHaveLength(0)
  })
})

/**
 * Coming up with what was open.
 *
 * A reload used to be restored on the board screen and nowhere else, so
 * the launcher offered "no board yet" for a board lying complete in
 * storage (#1175).
 */
describe('restoreLastOpened', () => {
  const STORED = {
    eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
    board: {
      eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Board',
      id: 'b1',
      name: 'Caradog',
      pages: [],
    },
  }

  function setUp({ wanted = undefined as string | undefined, held = STORED as unknown } = {}) {
    useWorkspaceOrigin().value = undefined
    if (held) {
      localStorage.setItem(
        'daanse.board.lastOpened',
        JSON.stringify({
          boardId: 'b1',
          name: 'Caradog',
          data: held,
          origin: { placeUri: 'file:///x', entryUri: 'file:///x/c.json', name: 'Caradog' },
        }),
      )
    }

    const workspace = new WorkspaceImpl()
    let restored = false
    const host = defineComponent({
      setup() {
        const { restoreLastOpened } = useRestoreLastOpened()
        restored = restoreLastOpened(wanted)
        return () => null
      },
    })
    mount(host, { global: { provide: { [WORKSPACE_ID]: workspace } } })
    return { workspace, restored }
  }

  afterEach(() => localStorage.clear())

  it('puts the board back, and where it was written to with it', () => {
    const { workspace, restored } = setUp()

    expect(restored).toBe(true)
    expect(workspace.board?.name).toBe('Caradog')
    expect(useWorkspaceOrigin().value?.name).toBe('Caradog')
  })

  it('restores the board an address names', () => {
    const { restored, workspace } = setUp({ wanted: 'b1' })

    expect(restored).toBe(true)
    expect(workspace.board?.id).toBe('b1')
  })

  /* Following a link to someone else's board must not quietly open one's own. */
  it('leaves the remembered state alone when the address names another board', () => {
    const { restored, workspace } = setUp({ wanted: 'b9' })

    expect(restored).toBe(false)
    expect(workspace.board).toBeFalsy()
    expect(useWorkspaceOrigin().value).toBeUndefined()
  })

  it('says nothing was restored when this browser remembers nothing', () => {
    localStorage.clear()
    const { restored } = setUp({ held: null })

    expect(restored).toBe(false)
  })

  /*
   * A state holding no board at all is not a failure: it is opened as
   * one, named after what it came from, the same as opening it from
   * storage would. What matters here is that nothing throws on the way
   * up - this runs in App.vue's setup, where an exception is a blank
   * screen rather than a message.
   */
  it('opens a state that holds no board as one, rather than throwing', () => {
    const { restored, workspace } = setUp({ held: { nonsense: true } })

    expect(restored).toBe(true)
    expect(workspace.board).toBeTruthy()
  })
})
