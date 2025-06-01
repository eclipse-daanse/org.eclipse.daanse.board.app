/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { FolderI } from '../../api/Folder'
import type { FileProviderI } from '../../api/FileProvider'
import type { FileI } from '../../api/File'

export default class Folder implements FolderI {
  fileProvider: FileProviderI
  path: string
  files: Array<FileI | FolderI> = []
  commit: string | null

  constructor(path: string, commit: string | null, fileProvider: FileProviderI) {
    this.fileProvider = fileProvider
    this.path = path
    this.commit = commit
  }

  async fetchFiles() {
    if (!this.commit) throw Error('This Folder istn synced, commit first')
    this.files = await this.fileProvider.getFiles(this.path, this.commit)
    return this.files
  }

  getFiles() {
    return this.files
  }

  addFiles(listofFiles: Array<FileI | FolderI>) {
    this.files = this.files.concat(listofFiles)
  }

}
