/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import type { FileProviderI } from '../../api/FileProvider'
import type { FileI } from '../../api/File'
import type ContentProviderI from '../../api/ContentProvider'
import type { FolderI } from '../../api/Folder'
import Folder from '../../services/common/Folder'
import GitteaFile from '../../services/gitea/File'
import { RepositoryApi } from '../../generated/gitea'

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
    try {
      let files_raw = (await new RepositoryApi().repoGetContents(this.owner, this.name, path, commit)).data;
      (files_raw as Array<any>).map(fileOrFolder => {
        if (fileOrFolder.type == 'dir') {
          file_ret.push(new Folder(fileOrFolder.path, commit, this))
        } else if (fileOrFolder.type == 'file') {
          file_ret.push(new GitteaFile(fileOrFolder.name, fileOrFolder.path, commit, this.contentProvider))
        }
      })
      return file_ret

    } catch (e) {
      console.log(e)
    }
    return []
  }


}
