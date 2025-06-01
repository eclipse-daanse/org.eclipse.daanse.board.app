/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { BranchProviderI } from '../../api/BranchProvider'
import type { RepoI } from '../../api/Repo'
import { CastError } from '../../services/common/CastError'
import type { BranchI } from '../../api/Branch'


export class Repo implements RepoI {

  id: string
  name: string
  owner: string

  branchProvider: BranchProviderI
  branches: BranchI[] = []

  constructor(name: string, owner: string, id: string, branchProvider: BranchProviderI) {
    try {
      this.name = name
      this.id = id
      this.owner = owner
      this.branchProvider = branchProvider


    } catch (e) {
      throw new CastError('Not castable')
    }
  }

  async fetchBranches() {
    this.branches = await this.branchProvider.fetchBranches()
    console.log(this.branches)
    return this.branches
  }

  getBranches() {
    return this.branches
  }

  async addBranch(name: string, sourceBranch: BranchI) {
    return await this.branchProvider.addBranch(name, sourceBranch)
  }

  /*async commit(token=''){

      let opt = new class implements ChangeFilesOptions{
          files: Array<ChangeFileOperation> = [];
      };
      if(this.branch) opt['branch'] = this.branch;

      let repo_files:Array<ChangeFileOperation> = [];
      let files = this.files.filter(f=>f.file_state==FileState.NEW||f.file_state==FileState.MODIFIED||f.file_state==FileState.DELETED)
      for (let file of files){
          let afile = (file as FileI);
          let state:ChangeFileOperationOperationEnum = ChangeFileOperationOperationEnum.update
          switch (afile.file_state){
              case FileState.DELETED:
                  state=ChangeFileOperationOperationEnum.delete
                  break;
              case FileState.NEW:
                  state=ChangeFileOperationOperationEnum.create
                  break;
          }
          repo_files.push({
              content: afile.content,
              operation:state,
              path: afile.path
          }as ChangeFileOperation)
          opt['files']=repo_files
      }
      await new RepositoryApi({accessToken:token} as Configuration).repoChangeFiles(this.owner,this.name,opt,{headers:{Authorization:'token '+token}})

  }*/
}
