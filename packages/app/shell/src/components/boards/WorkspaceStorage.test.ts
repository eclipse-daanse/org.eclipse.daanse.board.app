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

/*
 * The storage view hosts a place's own screen - git brings one. That screen
 * used to teleport its controls into a footer of the load/save modal, which
 * the storage view does not have; Vue then mounted nothing and threw on the
 * next update, and neither the git screen nor the storage view updated
 * again (#1247).
 *
 * Mounted with the real git screen against a repository that answers like
 * git does: entries listed without their content, content read per entry.
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as REPOSITORY_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import type { Entity, Repository } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import { identifier as WORKSPACE, WorkspaceImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as CONNECTIONS } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { identifier as DATASOURCES } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as VARIABLES } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { identifier as VARIABLE_WRAPPERS } from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import { EVENT_MANAGER } from 'org.eclipse.daanse.board.app.lib.api.events'
import GitRepositoryV from '../../../../../ui/vue/persistence/git/src/GitRepositoryV.vue'
import WorkspaceStorage from './WorkspaceStorage.vue'

const files = (): Entity[] =>
  ['dash/a.json', 'dash/b.json', 'c.json'].map(
    (path) =>
      ({
        name: path,
        uri: new URL(`https://github.com/owner/branch/commit/${path}`),
        data: null,
      }) as unknown as Entity,
  )

/** A repository that lists like git: names and uris, no content. */
class GitLikePlace {
  static readonly type: string = 'gitRepositories'
  name = 'Github-Repository'
  uri = new URL('https://github.com/owner/repo')
  read: string[] = []

  async findAll() {
    return files()
  }
  async getEntityByUri(uri: URL) {
    this.read.push(String(uri))
    return { name: uri.pathname, uri, data: '{}' } as unknown as Entity
  }
  async getBranches() {
    return [{ name: 'main' }]
  }
  getCommits() {
    return [{ creation_date: '2026-11-05', hash: 'commit' }]
  }
  setBranch() {}
  setCommit() {}
}

/** A repository with no screen of its own. */
class PlainPlace extends GitLikePlace {
  static readonly type: string = 'plain'
}

function registry(place: GitLikePlace, view = GitRepositoryV) {
  return {
    getAvailableReposetories: async () => [place as unknown as Repository],
    isViewForRepoType: (type: string) => type === 'gitRepositories',
    getViewForRepoType: () => view,
  }
}

function mountWith(place: GitLikePlace) {
  const errors: unknown[] = []
  const wrapper = mount(WorkspaceStorage, {
    attachTo: document.body,
    global: {
      provide: {
        [REPOSITORY_REGISTRY as symbol]: registry(place),
        /* Storing and loading are not exercised; the view only asks for them. */
        [WORKSPACE as symbol]: new WorkspaceImpl(),
        [CONNECTIONS as symbol]: undefined,
        [DATASOURCES as symbol]: undefined,
        [VARIABLES as symbol]: undefined,
        [VARIABLE_WRAPPERS as symbol]: undefined,
        [EVENT_MANAGER as symbol]: undefined,
      },
      config: { errorHandler: (error) => void errors.push(error) },
    },
  })
  return { wrapper, errors }
}

afterEach(() => {
  vi.restoreAllMocks()
  document.body.innerHTML = ''
})

describe('the storage view with a git place', () => {
  it('shows the git screen with its rows, pickers and load button, and throws nothing', async () => {
    const warn = vi.spyOn(console, 'warn')
    const { wrapper, errors } = mountWith(new GitLikePlace())
    await flushPromises()
    await flushPromises()

    expect(errors).toEqual([])
    expect(warn.mock.calls.flat().join(' ')).not.toMatch(/Teleport/i)

    /* The table lists the files, not "Loading…". */
    const text = wrapper.text()
    expect(text).toContain('dash/a.json')
    expect(text).toContain('c.json')

    /* The controls are inside the view, not hoped for in a footer. */
    const buttons = wrapper.findAll('button').map((b) => b.text())
    expect(buttons.some((label) => /Git\.load|Load|Laden/.test(label))).toBe(true)
    expect(wrapper.find('.toolbar input').exists()).toBe(true)

    /* And the view still follows a selection in the tree. */
    const entry = wrapper.findAll('.row--entry').find((row) => row.text().includes('c.json'))
    await entry!.trigger('click')
    await flushPromises()
    expect(errors).toEqual([])
    expect(wrapper.find('.detail__name').text()).toBe('c.json')
    wrapper.unmount()
  })
})

describe('an entry whose content is not read yet', () => {
  it('is not called empty, and is read when selected', async () => {
    const place = new PlainPlace()
    const { wrapper } = mountWith(place)
    await flushPromises()

    const metas = wrapper.findAll('.row--entry .row__meta').map((m) => m.text())
    expect(metas).toHaveLength(1) /* the folder "dash" is closed */
    expect(metas.every((meta) => meta === '')).toBe(true)
    expect(wrapper.text()).not.toMatch(/Storage\.entry\.empty|\bempty\b|\bleer\b/)

    await wrapper.find('.row--entry').trigger('click')
    await flushPromises()
    expect(place.read).toEqual(['https://github.com/owner/branch/commit/c.json'])
    wrapper.unmount()
  })
})
