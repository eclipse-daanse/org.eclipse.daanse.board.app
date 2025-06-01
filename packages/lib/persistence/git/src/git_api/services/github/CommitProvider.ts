/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type CommitProviderI from '../../api/CommitProvider'
import type { CommitI } from '../../api/Commit'
import { Octokit } from 'octokit'
import Commit from '../../services/common/Commit'
import type { FileProviderI } from '../../api/FileProvider'
import type { FileI } from '../../api/File'
import type { BranchI } from '../../api/Branch'
import OktokitMultipleFiles from 'octokit-commit-multiple-files'
import type { FolderI } from '../../api/Folder'
import { FileState } from '../../api/FileState'
import { AuthentificationError } from '../common/CastError'
import type { OctokitPlugin } from '@octokit/core/dist-types/types'

export default class CommitProvider implements CommitProviderI {


  readonly fileProvider: FileProviderI
  readonly owner: string
  readonly name: string
  protected options?: any
  private _oc

  constructor(owner: string, name: string, fileProvider: FileProviderI, options: any = undefined) {
    this.fileProvider = fileProvider
    this.owner = owner
    this.name = name
    this.options = options
    const oc = Octokit.plugin(OktokitMultipleFiles as unknown as OctokitPlugin)
    this._oc = new oc(this.options)
  }

  async getAllCommits(branch: string): Promise<CommitI[]> {
    let commits_ret: CommitI[] = []
    const commits = await new Octokit(this.options).rest.repos.listCommits({
      owner: this.owner,
      repo: this.name,
      sha: branch
    })
    commits.data.map((commit: any) => {
      commits_ret.push(
        new Commit(
          commit.author?.name ?? 'unknown',
          commit.commit.message,
          commit.commit?.author?.date ?? '',
          commit.sha,
          this.fileProvider
        ))
    })
    return commits_ret
  }

  async commitFiles(files: Array<FileI | FolderI>, branch: BranchI) {
    //make flat
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
    const listOfDeletions = flat.filter(file =>
      file.file_state === FileState.DELETED
    )
    console.log('commit')
    try {
      //@ts-ignore
      const commitFilesAwns = await this._oc.createOrUpdateFiles({
        owner: this.owner,
        repo: this.name,
        branch: branch.name,
        createBranch: false,
        changes: [
          {
            message: 'Update Files',
            files: flat.reduce<any>((a, file) => {
              if (file.file_state === FileState.MODIFIED ||
                file.file_state == FileState.NEW) {
                a[file.path] = file.content
                return a
              }

            }, {}),
            filesToDelete: listOfDeletions.map(f => f.path),
            ignoreDeletionFailures: true
          }]
      })
      return
    } catch (e: any) {
      console.log(e.code)
      if (e.status == 404) {
        throw new AuthentificationError(e.message, 402)
      } else {
        throw e
      }

    }
  };

  setOptions(options: any) {
    this.options = options
    const oc = Octokit.plugin(OktokitMultipleFiles as unknown as OctokitPlugin)
    this._oc = new oc(this.options)
  }

}
