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
 * The storage view: places on the left, the selected place on the right -
 * its header, its entries, storing into it - and an entry's detail there
 * too. One layout for every kind of place; git adds its header controls
 * and nothing else (#1247).
 *
 * The git view used to teleport its controls into a footer of the old
 * load/save modal, which the storage view does not have; Vue then mounted
 * nothing and threw on the next update. Mounted here with the real git view
 * against a repository that answers like git: entries listed without their
 * content, content read per entry.
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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

const commitsOf = (branch: string) => [
  { hash: `${branch}-2`, creation_date: '2026-11-05', message: 'newest' },
  { hash: `${branch}-1`, creation_date: '2026-11-01', message: 'older' },
]

class Branch {
  constructor(public name: string) {}
  getCommits() {
    return commitsOf(this.name)
  }
  async fetchCommits() {
    return commitsOf(this.name)
  }
}

/** A repository that lists like git: names and uris, no content. */
class GitLikePlace {
  static readonly type: string = 'gitRepositories'
  name = 'Github-Repository'
  uri = new URL('https://github.com/owner/repo')
  read: string[] = []
  listed = 0
  branches = [new Branch('main'), new Branch('dev')]
  branch = this.branches[0]!
  commit = commitsOf('main')[0]!

  async findAll() {
    this.listed += 1
    return files()
  }
  async getEntityByUri(uri: URL) {
    this.read.push(String(uri))
    return { name: uri.pathname, uri, data: '{}' } as unknown as Entity
  }
  async create() {}
  async getBranches() {
    return this.branches
  }
  getCurrentBranch() {
    return this.branch
  }
  getCommits() {
    return this.branch.getCommits()
  }
  getCurrentCommit() {
    return this.commit
  }
  setBranch(branch: Branch) {
    this.branch = branch
  }
  setCommit(commit: { hash: string; creation_date: string; message: string }) {
    this.commit = commit
  }
  isAuthenticated() {
    return false
  }
}

/** A repository with no view of its own. */
class PlainPlace extends GitLikePlace {
  static readonly type: string = 'plain'
}

function registry(places: GitLikePlace[]) {
  return {
    getAvailableReposetories: async () => places as unknown as Repository[],
    isViewForRepoType: (type: string) => type === 'gitRepositories',
    getViewForRepoType: () => GitRepositoryV,
  }
}

function mountWith(...places: GitLikePlace[]) {
  const errors: unknown[] = []
  const wrapper = mount(WorkspaceStorage, {
    attachTo: document.body,
    global: {
      provide: {
        [REPOSITORY_REGISTRY as symbol]: registry(places),
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

describe('the storage view', () => {
  it('lists only the places on the left, and the entries of the selected one on the right', async () => {
    const { wrapper, errors } = mountWith(new PlainPlace(), new GitLikePlace())
    await flushPromises()

    expect(errors).toEqual([])
    const left = wrapper.find('.places')
    expect(left.findAll('.place').map((r) => r.text())).toHaveLength(2)
    expect(left.findAll('.row--entry')).toHaveLength(0)

    const right = wrapper.find('.detail')
    expect(right.find('.head__name').text()).toBe('Github-Repository')
    /* "dash" is a closed folder; c.json is the one entry at the top. */
    expect(right.findAll('.row--folder').map((r) => r.text())).toEqual([expect.stringContaining('dash')])
    expect(right.findAll('.row--entry').map((r) => r.find('.row__name').text())).toEqual(['c.json'])
    /* Storing the current workspace belongs to the place. */
    expect(right.find('form.store').exists()).toBe(true)
    wrapper.unmount()
  })
})

describe('a git place', () => {
  it('shows its header controls and no list of its own, and throws nothing', async () => {
    const warn = vi.spyOn(console, 'warn')
    const { wrapper, errors } = mountWith(new GitLikePlace())
    await flushPromises()
    await flushPromises()

    expect(errors).toEqual([])
    expect(warn.mock.calls.flat().join(' ')).not.toMatch(/Teleport/i)

    const header = wrapper.find('.head--place')
    expect(header.find('a').attributes('href')).toBe('https://github.com/owner/repo')
    expect(header.findAllComponents(DSelect)).toHaveLength(2)
    /* The tree of the place is the only list; the git view has no table. */
    expect(wrapper.find('table').exists()).toBe(false)
    expect(wrapper.findAll('.row--entry')).toHaveLength(1)
    wrapper.unmount()
  })

  it('reads its entries again when another branch is chosen', async () => {
    const place = new GitLikePlace()
    const { wrapper, errors } = mountWith(place)
    await flushPromises()
    const before = place.listed

    wrapper.findAllComponents(DSelect)[0]!.vm.$emit('update:modelValue', 'dev')
    await flushPromises()

    expect(errors).toEqual([])
    expect(place.branch.name).toBe('dev')
    /* A new branch starts at its newest commit. */
    expect(place.commit.hash).toBe('dev-2')
    expect(place.listed).toBe(before + 1)

    wrapper.findAllComponents(DSelect)[1]!.vm.$emit('update:modelValue', 'dev-1')
    await flushPromises()
    expect(place.commit.hash).toBe('dev-1')
    expect(place.listed).toBe(before + 2)
    wrapper.unmount()
  })

  it('shows a selected entry in the normal detail, and goes back to the place', async () => {
    const place = new GitLikePlace()
    const { wrapper, errors } = mountWith(place)
    await flushPromises()

    await wrapper.find('.row--entry').trigger('click')
    await flushPromises()
    expect(errors).toEqual([])
    expect(wrapper.find('.head__name').text()).toBe('c.json')
    expect(place.read).toEqual(['https://github.com/owner/branch/commit/c.json'])
    expect(wrapper.find('.head--place').exists()).toBe(false)

    await wrapper.find('.head__back').trigger('click')
    expect(wrapper.find('.head__name').text()).toBe('Github-Repository')
    wrapper.unmount()
  })
})

describe('an entry whose content is not read yet', () => {
  it('is not called empty', async () => {
    const { wrapper } = mountWith(new PlainPlace())
    await flushPromises()

    const metas = wrapper.findAll('.row--entry .row__meta').map((m) => m.text())
    expect(metas).toEqual([''])
    expect(wrapper.text()).not.toMatch(/Storage\.entry\.empty|\bempty\b|\bleer\b/)
    wrapper.unmount()
  })
})
