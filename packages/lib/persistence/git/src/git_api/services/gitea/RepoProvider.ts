/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type RepoProviderI from '../../api/RepoProvider'
import type { RepoI } from '../../api/Repo'
import type { BranchProviderI } from '../../api/BranchProvider'
import { Repo } from '../../services/common/Repo'
import { RepositoryApi } from '../../generated/gitea'


export default class RepoProvider implements RepoProviderI {
  owner: string
  name: string
  branchProvider: BranchProviderI
  options?: any

  constructor(owner: string, name: string, branchProvider: BranchProviderI, options?: any) {
    this.owner = owner
    this.name = name
    this.options = options
    this.branchProvider = branchProvider
  }

  async getRepo(): Promise<RepoI> {
    const repo = await new RepositoryApi().repoSearch(this.name, false, false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 1)
    let id = 'unknown'
    if (repo.data && repo.data.data && repo.data.data[0] && repo.data.data[0].id) {
      id = repo.data.data[0].id.toString()
    }
    return new Repo(this.name, this.owner, id, this.branchProvider)
  }

}
