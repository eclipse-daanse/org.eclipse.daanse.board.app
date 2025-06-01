/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { BranchProviderI } from '../../api/BranchProvider'
import { RepositoryApi } from '../../generated/gitea'
import type { BranchI } from '../../api/Branch'
import type CommitProviderI from '../../api/CommitProvider'
import Branch from '../../services/common/Branch'


export default class BranchProvider implements BranchProviderI {

  branches: BranchI[] = []
  commitProivder: CommitProviderI
  owner: string
  repo: string
  readonly options?: any

  constructor(owner: string, repo: string, commitProvider: CommitProviderI, options: any = undefined) {
    this.owner = owner
    this.repo = repo
    this.commitProivder = commitProvider
    this.options = options
  }

  getBranches(): BranchI[] {
    return []
  }

  async fetchBranches(): Promise<BranchI[]> {
    let branches = (await new RepositoryApi().repoListBranches(this.owner, this.repo)).data
    if (branches) {
      this.branches = []
      branches.map(br => {
        this.branches.push(new Branch(this.owner, this.repo, br.name ?? 'unkown', br.commit!.id ?? '', this.commitProivder))
      })
    }
    return this.branches
  }

  async addBranch(name: string, sourceBranch: BranchI) {
    //Todo add Branch
  }

}
