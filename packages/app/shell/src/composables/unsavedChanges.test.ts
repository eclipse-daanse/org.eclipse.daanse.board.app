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

import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import {
  BoardImpl,
  ConnectionImpl,
  PageImpl,
  WorkspaceImpl,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { guardBeforeUnload, trackUnsavedChanges } from './unsavedChanges'

/** A workspace with one board holding one page, as a loaded state has. */
function workspaceWithPage(): { workspace: Workspace; page: PageImpl } {
  const workspace = new WorkspaceImpl()
  const board = new BoardImpl()
  board.id = 'b1'
  const page = new PageImpl()
  page.id = 'p1'
  page.name = 'Overview'
  board.pages.push(page)
  workspace.board = board
  return { workspace, page }
}

describe('trackUnsavedChanges', () => {
  it('starts clean', () => {
    const { workspace } = workspaceWithPage()
    expect(trackUnsavedChanges(workspace).dirty).toBe(false)
  })

  it('hears a change deep in the containment tree', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    page.name = 'Renamed'
    expect(changes.dirty).toBe(true)
  })

  it('hears a page added to the board', () => {
    const { workspace } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    const page = new PageImpl()
    page.id = 'p2'
    workspace.board!.pages.push(page)
    expect(changes.dirty).toBe(true)
  })

  it('hears a change inside a page that arrived after tracking began', () => {
    const { workspace } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    const page = new PageImpl()
    page.id = 'p2'
    workspace.board!.pages.push(page)
    changes.markSaved()
    page.name = 'Later'
    expect(changes.dirty).toBe(true)
  })

  it('hears a connection added to the workspace', () => {
    const { workspace } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    const connection = new ConnectionImpl()
    connection.uid = 'c1'
    workspace.connections.push(connection)
    expect(changes.dirty).toBe(true)
  })

  it('does not count writing a value that was already there', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    page.name = 'Overview'
    expect(changes.dirty).toBe(false)
  })

  it('does not count writing back a copy of a config, or its reactive proxy', () => {
    const { workspace } = workspaceWithPage()
    const connection = new ConnectionImpl()
    connection.uid = 'c1'
    connection.config = { url: 'https://example.org/', headers: { a: '1' } }
    workspace.connections.push(connection)
    const changes = trackUnsavedChanges(workspace)

    connection.config = JSON.parse(JSON.stringify(connection.config))
    connection.config = reactive({ ...(connection.config as object) })
    expect(changes.dirty).toBe(false)

    connection.config = { url: 'https://example.org/other', headers: { a: '1' } }
    expect(changes.dirty).toBe(true)
  })

  it('counts another object in a reference, however alike it looks', () => {
    const { workspace } = workspaceWithPage()
    const board = workspace.board!
    const other = new PageImpl()
    other.id = 'p1'
    other.name = 'Overview'
    board.pages.push(other)
    const changes = trackUnsavedChanges(workspace)

    board.defaultPage = board.pages.get(0)
    changes.markSaved()
    board.defaultPage = other
    expect(changes.dirty).toBe(true)
  })

  it('is clean again once stored', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    page.name = 'Renamed'
    changes.markSaved()
    expect(changes.dirty).toBe(false)
  })

  it('does not count work done untracked, such as serializing', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    const result = changes.untracked(() => {
      page.name = 'Temporary'
      page.name = 'Overview'
      return 'text'
    })
    expect(result).toBe('text')
    expect(changes.dirty).toBe(false)
  })

  it('stops listening once disposed', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    changes.dispose()
    page.name = 'Renamed'
    expect(changes.dirty).toBe(false)
  })
})

describe('guardBeforeUnload', () => {
  const unload = () => new Event('beforeunload', { cancelable: true })

  it('lets the page go when nothing is unsaved', () => {
    const target = new EventTarget()
    guardBeforeUnload({ dirty: false }, target)
    const event = unload()
    target.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(false)
  })

  it('asks the browser to confirm when something is unsaved', () => {
    const target = new EventTarget()
    guardBeforeUnload({ dirty: true }, target)
    const event = unload()
    target.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
  })

  it('follows the state at the moment of leaving', () => {
    const { workspace, page } = workspaceWithPage()
    const changes = trackUnsavedChanges(workspace)
    const target = new EventTarget()
    guardBeforeUnload(changes, target)

    page.name = 'Renamed'
    const first = unload()
    target.dispatchEvent(first)
    expect(first.defaultPrevented).toBe(true)

    changes.markSaved()
    const second = unload()
    target.dispatchEvent(second)
    expect(second.defaultPrevented).toBe(false)
  })

  it('is gone once removed', () => {
    const target = new EventTarget()
    const remove = guardBeforeUnload({ dirty: true }, target)
    remove()
    const event = unload()
    target.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(false)
  })
})
