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

// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import {
  CONNECTION_REPOSITORY,
  identifier as CONNECTION_REPOSITORY_ID,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  WORKSPACE,
  identifier as WORKSPACE_ID,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { activate as activateRepository } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  activate as activateXmla,
  XmlaConnection,
} from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { activate as activateXmlaUi } from 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'
import NewConnectionDialog from '../NewConnectionDialog.vue'

/*
 * Creating an XMLA connection through the dialog, with the real repository
 * and the real XMLA factory behind it. The session a live connection opens
 * is held off with a request that never settles; the server's answers to
 * the form - its catalogues, a catalogue's cubes - are faked where the form
 * asks for them.
 */
vi.stubGlobal('fetch', vi.fn(() => new Promise(() => {})))

const CUBES: Record<string, string[]> = { FoodMart: ['Sales', 'Warehouse'], Steelwheels: ['Orders'] }

let wrapper: VueWrapper | undefined
let warn: ReturnType<typeof vi.spyOn>

function setUp() {
  const services = new DefaultServiceRegistry()
  const workspace = new WorkspaceImpl()
  services.register(WORKSPACE, workspace)
  activateRepository({ services } as never)
  activateXmla({ services } as never)
  /* The type as the XMLA UI bundle registers it - with its own create form. */
  activateXmlaUi({ services } as never)
  const connections = services.getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)

  wrapper = mount(NewConnectionDialog, {
    props: { modelValue: true },
    attachTo: document.body,
    global: {
      provide: { [CONNECTION_REPOSITORY_ID]: connections, [WORKSPACE_ID]: workspace },
    },
  })
  return { connections, workspace }
}

/* The dialog renders into a teleport, so it is looked for in the document. */
function button(text: string): HTMLButtonElement {
  const found = [...document.querySelectorAll('button')].find((b) => b.textContent?.includes(text))
  if (!found) throw new Error(`no button "${text}"`)
  return found
}

function field(label: string): HTMLInputElement {
  const tag = [...document.querySelectorAll('label')].find((l) => l.textContent?.trim().startsWith(label))
  const input = tag && document.getElementById(tag.getAttribute('for') ?? '')
  if (!input) throw new Error(`no field "${label}"`)
  return input as HTMLInputElement
}

async function type(label: string, value: string) {
  const input = field(label)
  input.value = value
  input.dispatchEvent(new Event('input'))
  await flushPromises()
}

function suggestionsOf(label: string): string[] {
  const list = document.getElementById(field(label).getAttribute('list') ?? '')
  return [...(list?.querySelectorAll('option') ?? [])].map((o) => (o as HTMLOptionElement).value)
}

async function chooseXmla() {
  button('xmla').click()
  await flushPromises()
}

describe('NewConnectionDialog - XMLA', () => {
  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(XmlaConnection, 'getCatalogs').mockResolvedValue(
      Object.keys(CUBES).map((CATALOG_NAME) => ({ CATALOG_NAME })) as never,
    )
    vi.spyOn(XmlaConnection, 'getCubes').mockImplementation(
      async (_url, _security, catalog) => (CUBES[catalog] ?? []).map((CUBE_NAME) => ({ CUBE_NAME })) as never,
    )
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    wrapper?.unmount()
    wrapper = undefined
    warn.mockRestore()
    document.body.innerHTML = ''
  })

  it('stores the catalogue and cube typed into the form', async () => {
    const { workspace } = setUp()
    await chooseXmla()

    await type('Editor.name', 'FoodMart')
    await type('URL', 'https://example.org/xmla')
    await type('Xmla.catalog', 'FoodMart')
    await type('Xmla.cube', 'Sales')
    button('Wizard.create').click()
    await flushPromises()

    const [created] = workspace.connections.toArray()
    expect(created.config).toMatchObject({
      url: 'https://example.org/xmla',
      catalogName: 'FoodMart',
      cubeName: 'Sales',
    })
  })

  it('creates a complete connection without warning that it is not live', async () => {
    setUp()
    await chooseXmla()

    await type('Editor.name', 'FoodMart')
    await type('URL', 'https://example.org/xmla')
    await type('Xmla.catalog', 'FoodMart')
    button('Wizard.create').click()
    await flushPromises()

    const notLive = warn.mock.calls.filter((call) => String(call[0]).includes('not live yet'))
    expect(notLive).toEqual([])
  })

  /* Nothing to pick from was what made a wrong URL look like an empty server. */
  it('offers the catalogues and cubes of the server once a URL is typed', async () => {
    vi.useFakeTimers()
    setUp()
    await chooseXmla()

    await type('URL', 'https://example.org/xmla')
    expect(XmlaConnection.getCatalogs).not.toHaveBeenCalled()
    await vi.advanceTimersByTimeAsync(600)

    expect(XmlaConnection.getCatalogs).toHaveBeenCalledWith('https://example.org/xmla', expect.anything())
    expect(suggestionsOf('Xmla.catalog')).toEqual(['FoodMart', 'Steelwheels'])

    await type('Xmla.catalog', 'Steelwheels')
    await vi.advanceTimersByTimeAsync(600)
    expect(suggestionsOf('Xmla.cube')).toEqual(['Orders'])
  })

  it('says that the server could not be reached', async () => {
    vi.useFakeTimers()
    vi.mocked(XmlaConnection.getCatalogs).mockRejectedValue(new TypeError('Failed to fetch'))
    setUp()
    await chooseXmla()

    await type('URL', 'https://wrong.example/xmla')
    await vi.advanceTimersByTimeAsync(600)

    const alert = document.querySelector('[role="alert"]')
    expect(alert?.textContent).toContain('Xmla.unreachable')
  })

  it('asks for the catalogue before it creates anything', async () => {
    const { workspace } = setUp()
    await chooseXmla()

    await type('Editor.name', 'FoodMart')
    await type('URL', 'https://example.org/xmla')

    /* The model says a connection cannot be opened without one. */
    expect(button('Wizard.create').disabled).toBe(true)
    button('Wizard.create').click()
    await flushPromises()
    expect(workspace.connections.toArray()).toHaveLength(0)
  })
})
