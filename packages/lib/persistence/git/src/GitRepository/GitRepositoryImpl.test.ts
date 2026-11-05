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

/*
 * What a git place lists, and what it does when it starts without its
 * branches (#1247). Against an in-memory commit, not GitHub.
 */

import { describe, expect, it } from 'vitest'
import GitRepositoryImpl from './GitRepositoryImpl'
import File from '../git_api/services/common/File'
import Folder from '../git_api/services/common/Folder'

const content = {} as never

function commitWith(files: unknown[]) {
  return { hash: 'c1', creation_date: '2026-11-05', fetchFiles: async () => files }
}

function repositoryOn(files: unknown[], branchFetches = { count: 0 }) {
  const repository = new GitRepositoryImpl()
  const branch = { owner: 'owner', sha: 'b1', name: 'main', getCommits: () => [commitWith(files)] }
  const state = repository as unknown as Record<string, unknown>
  state.uri = new URL('https://github.com/owner/repo')
  state.provider = {
    fetchBranches: async () => {
      branchFetches.count += 1
      return [branch]
    },
    getBranches: () => (branchFetches.count > 1 ? [branch] : []),
  }
  ;(branch as Record<string, unknown>).fetchCommits = async () => branch.getCommits()
  return repository
}

describe('a git place', () => {
  it('lists the stored states - .json files - and nothing else', async () => {
    const sub = new Folder('dash', 'c1', { getFiles: async () => [new File('b.json', 'dash/b.json', 'h', content)] } as never)
    const repository = repositoryOn([
      new File('a.json', 'a.json', 'h', content),
      new File('README.md', 'README.md', 'h', content),
      new File('.gitignore', '.gitignore', 'h', content),
      sub,
    ], { count: 1 } /* the branches come on the first fetch */)
    const names = (await repository.findAll()).map((entry) => entry.name)
    expect(names).toEqual(['a.json', 'dash/b.json'])
  })

  it('fetches its branches again when the first attempt found none', async () => {
    const fetches = { count: 0 }
    const repository = repositoryOn([new File('a.json', 'a.json', 'h', content)], fetches)
    /* The start found nothing - offline, or GitHub's limit used up. */
    await (repository as unknown as { loadBranches(): Promise<void> }).loadBranches()
    expect(fetches.count).toBe(1)

    const names = (await repository.findAll()).map((entry) => entry.name)
    expect(fetches.count).toBe(2)
    expect(names).toEqual(['a.json'])
  })
})
