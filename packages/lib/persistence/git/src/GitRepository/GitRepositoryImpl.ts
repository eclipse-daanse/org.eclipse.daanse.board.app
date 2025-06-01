/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0
Contributors: Smart City Jena
*/


import type { Entity, WritableRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import { BaseRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'

import type { BranchProviderI } from '../git_api/api/BranchProvider'
import BranchProvider from '../git_api/services/github/BranchProvider'
import CommitProvider from '../git_api/services/github/CommitProvider'
import FileProvider from '../git_api/services/github/FileProvider'
import type ContentProviderI from '../git_api/api/ContentProvider'
import ContentProvider from '../git_api/services/github/ContentProvider'
import File from '../git_api/services/common/File'
import Folder from '../git_api/services/common/Folder'
import type { BranchI } from '../git_api/api/Branch'
import type { CommitI } from '../git_api/api/Commit'
import type { FileI } from '../git_api/api/File'
import type { FolderI } from '../git_api/api/Folder'
import { FileProviderI } from '../git_api/api/FileProvider'
import CommitProviderI from '../git_api/api/CommitProvider'
import { injectable } from 'inversify'

@injectable()
export default class GitRepositoryImpl extends BaseRepository implements WritableRepository {

  public static readonly type = 'gitRepositories'
  private provider?: BranchProviderI
  private fileProvider?: FileProviderI
  private contentProvider?: ContentProviderI
  private commitProvider?: CommitProviderI
  private branch: BranchI | undefined
  private commit: CommitI | undefined

  private options = {
    auth: null//config.repos[0].token
  }

  init(url: URL, name: string, settings = {
      provider: 'github',
      owner: ''
  }) {
    super.init(url, name)

    switch (url.hostname) {
      case 'github.com':
        const path = this.uri?.pathname.split('/')
        if (!path || path.length < 2) {
          throw new Error('path in github url not completet either owner or repo is missing')
        }
        const owner = path[1]
        const repo = path.slice(2).join('/')
        console.log('found owner for git repo:' + owner)
        console.log('on repo:' + repo)
        this.contentProvider = new ContentProvider(owner, repo)
        this.fileProvider = new FileProvider(owner, repo, this.contentProvider)
        this.commitProvider = new CommitProvider(owner, repo, this.fileProvider, this.options)
        this.provider = new BranchProvider(owner, repo, this.commitProvider, this.options)

        this.provider.fetchBranches().then(async () => {
          this.branch = this.provider?.getBranches()[0]
          const branch = this.provider?.getBranches().find(b => b.name == 'main' || b.name == 'master')
          if (branch) this.branch = branch
          await this.branch?.fetchCommits()
          this.commit = await this.branch?.getCommits()[0]
        })

        break
      default:
        throw new Error('no Branch provider found')

    }

  }

  async auth(options: any): Promise<any> {
    if (!this.options.auth && options && this.provider) {
      this.options = options
      this.provider.setOptions?.(this.options)
      this.commitProvider?.setOptions?.(this.options)
      //.setOptions(this.options);
    }
    return true
  }


  sync(): Promise<Entity[]> {
    throw new Error('Method not implemented.')
  }

  async create(e: Entity): Promise<any> {
    try {
      let branches = await this.provider?.getBranches()
      if (!this.branch) {
        throw new Error('Main Branch not found')
      }

      let fileUrl = new URL(e.uri)
      const parts = fileUrl.pathname.replace('/', '').split('/')

      let folder: FolderI | FileI | undefined = undefined
      for (let i = 0; i < parts.length; i++) {
        if (i == parts.length - 1) {
          let file = new File(e.name, parts.join('/'), null, this.contentProvider!)
          file.setContent(e.data)
          if (folder) (folder as FolderI).addFiles([file])
          else {
            folder = file
          }
        } else {
          if (folder) {
            let temp = this.createFolder(parts.slice(0, i).join('/'))
            if (folder) (folder as FolderI).addFiles([temp])
            folder = temp
          }
        }
      }

      await this.branch.addCommit([folder as FolderI | FileI], 'add File ' + fileUrl.pathname)


    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async delete(e: Entity): Promise<any> {
  }

  async findAll(): Promise<Entity[]> {

    try {
      let branches = await this.provider?.getBranches()
      if (!this.branch) {
        throw new Error('Branch not found')
      }
      if (!this.commit) {
        throw new Error('Commit not found')
      }

      const resArr = await this.extractFolder(this.branch, this.commit)
      return resArr

    } catch (e) {
      console.log(e)
      throw new Error('Resource could not find entities')
    }
  }

  findByFragment(pathname: string): Promise<Entity[]> {
    return Promise.resolve([])
  }

  findByName(name: string): Promise<Entity[]> {
    return Promise.resolve([])
  }

  findByUri(uri: URL): Promise<Entity[]> {
    return Promise.resolve([])
  }

  async getEntityByUri(uri: URL): Promise<Entity | null> {

    try {
      const partsOfPath = uri.pathname.split('/')
      if (partsOfPath.length < 5) {
        throw new Error('cound not find owner branch or commit in the path')
      }
      const owner = partsOfPath[1]
      const branchSha = partsOfPath[2]
      const commitSha = partsOfPath[3]
      const path = partsOfPath.slice(4)

      if (!this.branch) {
        throw new Error('Branch not found')
      }
      if (!this.commit) {
        throw new Error('Commit not found')
      }

      await this.branch.fetchCommits()
      const commits = await this.branch.getCommits()

      const aCommitThatHasAnHash = commits.find(c => c.hash == commitSha)

      if (!aCommitThatHasAnHash) {
        throw new Error('hash ' + aCommitThatHasAnHash + ' not found in repo ' + owner + branchSha)
      }
      this.commit = aCommitThatHasAnHash
      const file = await this.findInCommit(path, aCommitThatHasAnHash)
      await file?.fetchContent()
      return {
        name: file?.name,
        uri: uri,
        data: file?.getContent()
      }

    } catch (e) {
      console.log(e)
      throw new Error('Resource could not find entities')
    }
  }

  async update(e: Entity): Promise<any> {

  }

  async getBranches(): Promise<BranchI[] | undefined> {
    return this.provider?.getBranches()
  }

  setBranch(branch: BranchI) {
    this.branch = branch
    this.branch.fetchCommits()
  }

  getCurrentBranch() {
    return this.branch
  }

  getCommits() {
    return this.branch?.getCommits()
  }

  setCommit(commit: CommitI) {
    this.commit = commit
  }

  getCurrentCommit() {
    return this.commit
  }

  private createFolder(path: string) {
    return new Folder(path, null, this.fileProvider!)
  }

  private extractFile(branch: BranchI, commit: CommitI, entity: FileI): Entity {
    const FileURL = new URL(this.uri ?? '')
    FileURL.pathname = branch.owner + '/' + branch.sha + '/' + commit.hash + '/' + entity.path
    return {
      name: entity.path,
      uri: FileURL,
      data: null
    } as Entity
  }

  private async extractFolder(branch: BranchI, commit: CommitI, entity?: FolderI) {
    let resArr: Entity[] = []
    let files
    if (entity) {
      files = await (entity as Folder).fetchFiles()
    } else {
      files = await commit.fetchFiles()
    }

    for (const fileOrFolder of files) {
      if (fileOrFolder instanceof File) {
        resArr.push(this.extractFile(branch, commit, fileOrFolder))
      }
      if (fileOrFolder instanceof Folder) {
        resArr = resArr.concat(await this.extractFolder(branch, commit, fileOrFolder as Folder))
      }
    }
    return resArr
  }

  private async findInCommit(path: string[], commit: CommitI, entity?: FolderI): Promise<FileI | undefined> {
    let files
    if (!entity) {
      files = await commit.fetchFiles()
    } else {
      files = await entity.fetchFiles()
    }
    let file: FileI | undefined = undefined

    const folder: FileI | FolderI = files.find((f: FolderI) => {
      let ret = f.path.split('/')
      return ret[ret.length - 1] == path[0]
    })
    if (folder instanceof Folder) {
      file = await this.findInCommit(path.slice(1), commit, folder)
    } else if (folder instanceof File) {
      file = folder
    }
    if (!file) {
      throw new Error('file ' + path + ' not found in repo ')
    }
    return file
  }


}
