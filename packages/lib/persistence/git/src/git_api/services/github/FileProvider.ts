/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import { Octokit } from 'octokit'
import { FileProviderI } from '../../api/FileProvider'
import ContentProviderI from '../../api/ContentProvider'
import { FileI } from '../../api/File'
import { FolderI } from '../../api/Folder'
import Folder from '../common/Folder'
import File from '../common/File'

export default class FileProvider implements FileProviderI {

  readonly owner: string
  readonly name: string
  readonly contentProvider: ContentProviderI
  readonly options?: any

  constructor(owner: string, name: string, contentProvider: ContentProviderI, options: any = undefined) {
    this.owner = owner
    this.name = name
    this.contentProvider = contentProvider
    this.options = options
  }

  async getFiles(path: string, commit: string): Promise<Array<FileI | FolderI>> {
    let file_ret: Array<FileI | FolderI> = []
    const files = await new Octokit(this.options).rest.repos.getContent({
      owner: this.owner,
      ref: commit,
      repo: this.name,
      path: path
    });

    (files.data as Array<any>).map(fileOrFolder => {
      if (fileOrFolder.type == 'dir') {
        file_ret.push(new Folder(fileOrFolder.path, commit, this))
      } else if (fileOrFolder.type == 'file') {
        file_ret.push(new File(fileOrFolder.name, fileOrFolder.path, fileOrFolder.sha, this.contentProvider))
      }
    })
    return file_ret
  }
}
