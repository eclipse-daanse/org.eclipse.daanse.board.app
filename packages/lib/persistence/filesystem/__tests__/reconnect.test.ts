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
 * ********************************************************************/

// @vitest-environment jsdom

/*
 * The first tests in this package (#1200).
 *
 * A folder is remembered as a handle in IndexedDB. Start-up may not ask
 * for its permission back - requestPermission throws without a user
 * gesture - so a folder that says 'prompt' is skipped, and the board
 * that came from it finds no place to save into. A click is a gesture,
 * and reconnect is what a click can call.
 */

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

/* What IndexedDB holds, per test. */
let remembered = new Map<string, unknown>()
/* What the browser answers for a handle, per test. */
let standing: Record<string, string> = {}
let asked: string[] = []

vi.mock('../src/classes/handleStore', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    filesystemAvailable: () => true,
    recallDirectory: async (key: string) => remembered.get(key),
    rememberedKeys: async () => [...remembered.keys()],
    ensurePermission: async (handle: any, writable: boolean, mayAsk = false) => {
      const held = standing[handle.name] ?? 'prompt'
      if (held === 'granted') return true
      if (!mayAsk) return false
      asked.push(`${handle.name}:${writable ? 'readwrite' : 'read'}`)
      return standing[handle.name] === 'prompt-then-grant'
    },
  }
})

const registered: Array<{ uri: unknown; name: string }> = []

/** What a repository instance looks like to this module. */
class RepositoryDouble {
  uri: unknown
  name = ''
  init(uri: URL, name: string, _options?: unknown) {
    this.uri = uri
    this.name = name
  }
  adopt = vi.fn()
}

vi.mock('../src/classes/FileSystemRepositoryImpl', () => ({
  default: class {
    static type = 'filesystem'
    uri: unknown
    name = ''
    init(uri: URL, name: string) {
      this.uri = uri
      this.name = name
    }
    adopt = vi.fn()
  },
}))

const registry = {
  register: (repository: { uri: unknown; name: string }) => registered.push(repository),
  registerRepoType: vi.fn(),
  getAvailableReposetories: async () => [...registered],
}

const services = {
  getRequired: () => registry,
  construct: (Klass: new () => RepositoryDouble) => new Klass(),
}

const log = { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() }

/* The module holds its context from activate, so each test activates. */
async function started() {
  const module = await import('../src/index')
  await module.activate({ services, log } as never)
  return module
}

beforeEach(() => {
  vi.resetModules()
  remembered = new Map()
  standing = {}
  asked = []
  registered.length = 0
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('a folder remembered from last time', () => {
  test('comes back on its own when its permission still stands', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'granted'

    await started()

    expect(registered.map((each) => String(each.uri))).toEqual(['folder://boards/'])
    expect(asked).toEqual([])
  })

  /*
   * The case the reload produces. Start-up is not a user gesture, so
   * asking would throw - the module says so and carries on.
   */
  test('is left alone at start-up when it needs asking', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'prompt'

    await started()

    expect(registered).toEqual([])
    expect(asked).toEqual([])
    expect(log.info).toHaveBeenCalledWith(expect.stringContaining('boards'))
  })
})

describe('reconnect', () => {
  test('asks for the folder and registers it', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'prompt-then-grant'

    const module = await started()
    expect(registered).toEqual([])

    const place = await module.reconnect('folder://boards/')

    expect(place).toBeDefined()
    expect(registered.map((each) => String(each.uri))).toEqual(['folder://boards/'])
  })

  /* One prompt, for what the click wants to do: write. */
  test('asks for write, not for read', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'prompt-then-grant'

    const module = await started()
    await module.reconnect('folder://boards/')

    expect(asked).toEqual(['boards:readwrite'])
  })

  test('registers nothing when the person declines', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'prompt'

    const module = await started()
    const place = await module.reconnect('folder://boards/')

    expect(place).toBeUndefined()
    expect(registered).toEqual([])
  })

  test('answers nothing for a uri no folder was remembered under', async () => {
    const module = await started()

    expect(await module.reconnect('folder://gone/')).toBeUndefined()
    expect(asked).toEqual([])
  })

  /* Reconnected twice - by two clicks, or by a click after start-up
    brought it back - hands back the one that is registered. */
  test('does not register the same folder twice', async () => {
    remembered.set('folder://boards/', { name: 'boards' })
    standing.boards = 'granted'

    const module = await started()
    expect(registered).toHaveLength(1)

    await module.reconnect('folder://boards/')

    expect(registered).toHaveLength(1)
  })
})
