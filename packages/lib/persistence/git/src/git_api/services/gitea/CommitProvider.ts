/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type CommitProviderI from '../../api/CommitProvider'
import type { ChangeFileOperation, ChangeFilesOptions } from '../../generated/gitea'
import {

  ChangeFileOperationOperationEnum
  , Configuration,
  RepositoryApi
} from '../../generated/gitea'

import type { CommitI } from '../../api/Commit'
import type { FileProviderI } from '../../api/FileProvider'
import type { FileI } from '../../api/File'
import type { FolderI } from '../../api/Folder'
import type { BranchI } from '../../api/Branch'
import Commit from '../../services/common/Commit'
import { FileState } from '../../api/FileState'


export default class CommitProvider implements CommitProviderI {

  readonly fileProvider: FileProviderI
  readonly owner: string
  readonly name: string
  readonly options?: any

  constructor(owner: string, name: string, fileProvider: FileProviderI, options: any = undefined) {
    this.fileProvider = fileProvider
    this.owner = owner
    this.name = name
    this.options = options
  }

  async getAllCommits(branch: string): Promise<CommitI[]> {
    let commits: CommitI[] = []
    let commits_raw = (await new RepositoryApi().repoGetAllCommits(this.owner, this.name, branch)).data
    for (let commit_raw of commits_raw) {
      commits.push(new Commit(commit_raw.author?.login ?? 'unknown',
        commit_raw.commit?.message ?? '-',
        commit_raw.created?.toString() ?? '',
        commit_raw.sha ?? '',
        this.fileProvider))
    }
    return commits
  }

  async commitFiles(files: Array<FileI | FolderI>, branch: BranchI): Promise<void> {
    let flat: FileI[] = []

    const recurse = function(files: Array<FileI | FolderI>) {
      files.forEach(fileOrFolder => {
        if ('files' in fileOrFolder && fileOrFolder.files != undefined) {
          //Folder
          recurse(fileOrFolder.files)
        } else {
          flat.push(fileOrFolder as FileI)
        }
      })
    }
    recurse(files)

    //find delete Files
    /*const listOfDeletions = flat.filter(file=>
        file.file_state===FileState.DELETED
    );*/


    let opt = {
      files: [],
      branch: branch.name
    } as ChangeFilesOptions


    let repo_files: Array<ChangeFileOperation> = []
    let files_filtered = flat.filter(f => f.file_state == FileState.NEW || f.file_state == FileState.MODIFIED || f.file_state == FileState.DELETED)
    for (let file of files_filtered) {

      let state: ChangeFileOperationOperationEnum = ChangeFileOperationOperationEnum.update
      switch (file.file_state) {
        case FileState.DELETED:
          state = ChangeFileOperationOperationEnum.delete
          break
        case FileState.NEW:
          state = ChangeFileOperationOperationEnum.create
          break
      }
      repo_files.push({
        content: file.content,
        operation: state,
        path: file.path
      } as ChangeFileOperation)
      opt['files'] = repo_files
    }

    try {
      let add_opts = {}
      if (this.options.accessToken) {
        add_opts = { headers: { Authorization: 'token ' + this.options.accessToken } }
      }
      await new RepositoryApi(new Configuration(this.options)).repoChangeFiles(
        this.owner, this.name, opt,
        add_opts)
    } catch (e) {
      console.log(e)
    }


  }


}
