/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/


import config from './github.config.json'
import type { CommitI } from '../api/Commit'
import type { FileI } from '../api/File'
import type { FolderI } from '../api/Folder'
import ProviderFactory from '../../git_api/services/github/ProviderFactory'
import { expect, test } from 'vitest'

const options = {
  auth: config.repos[0].token
}
const bp = ProviderFactory.get(config.repos[0].owner, config.repos[0].name, options)


test('BranchProvider is there', () => {
  expect(bp).not.toBe(undefined)
})
test('list Branches', async () => {
  const branches = await bp.fetchBranches()
  console.log(branches)
  expect(branches.length).toBeGreaterThan(0)
})

test('having a main Branch', async () => {
  const branches = await bp.fetchBranches()
  const main = branches[0]
  console.log(branches)
  expect(main.name).toBe('main')
})

test('having some commits in main Branch', async () => {
  const branches = await bp.fetchBranches()
  const main = branches[0]
  const commits = await main.fetchCommits()
  console.log(commits)
  expect(commits.length).toBeGreaterThan(0)
})

test('having some Files in last Commit', async () => {
  const branches = await bp.fetchBranches()
  const main = branches[0]
  const commits = await main.fetchCommits()
  const latest_commit: CommitI = commits[0]
  const fs: Array<FileI | FolderI> = await latest_commit.fetchFiles()
  console.log(fs)
  expect(fs.length).toBeGreaterThan(0)
})

test('having a test.json File in main branch containing key "v', async () => {
  const branches = await bp.fetchBranches()
  const main = branches[0]
  const commits = await main.fetchCommits()
  const latest_commit: CommitI = commits[0]
  const fs: Array<FileI | FolderI> = await latest_commit.fetchFiles()
  const testJson: FileI = fs.find(entry => entry.path == 'test.json') as FileI
  await testJson.fetchContent()
  const jsonObj = testJson.getContent()
  console.log('Filecontent:')
  console.log(jsonObj)
  expect(jsonObj).toHaveProperty('v')
})

test('update the content of a File and commit results', async () => {
  const branches = await bp.fetchBranches()
  const main = branches[0]
  let commits = await main.fetchCommits()
  let latest_commit: CommitI = commits[0]
  const fs: Array<FileI | FolderI> = await latest_commit.fetchFiles()
  const testJson: FileI = fs.find(entry => entry.path == 'test.json') as FileI
  await testJson.fetchContent()
  const jsonObj = testJson.getContent() as any
  const versionBefore = jsonObj['v'] ?? 0

  console.log('Filecontent before:')
  console.log(jsonObj)

  testJson.setContent({ 'v': (versionBefore + 1) })
  await main.addCommit([testJson], 'change v')
  console.log('commited')

  commits = await main.fetchCommits()
  latest_commit = commits[0]
  const fs2: Array<FileI | FolderI> = await latest_commit.fetchFiles()
  const testJsonAfter: FileI = fs2.find(entry => entry.path == 'test.json') as FileI
  await testJsonAfter.fetchContent()
  const jsonObjAfter = testJsonAfter.getContent() as any
  const versionAfter = jsonObjAfter['v'] ?? 0

  console.log('Filecontent after:')
  console.log(jsonObjAfter)

  expect(versionAfter).toBe(versionBefore + 1)
})




