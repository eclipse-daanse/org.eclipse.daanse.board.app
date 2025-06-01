/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { CommitI } from '../../api/Commit'
import type { FileI } from '../../api/File'
import type { FileProviderI } from '../../api/FileProvider'
import type { FolderI } from '../../api/Folder'


export default class Commit implements CommitI {

  creation_date: string
  files: Array<FileI | FolderI> = []
  hash: string
  message: string
  name: string
  fileProvider: FileProviderI

  constructor(name: string, message: string, creation_date: string, hash: string, fileProvider: FileProviderI) {
    this.name = name
    this.fileProvider = fileProvider
    this.message = message
    this.hash = hash
    this.creation_date = creation_date
  }

  async fetchFiles(): Promise<Array<FileI | FolderI>> {
    this.files = await this.fileProvider.getFiles('', this.hash)
    return this.files
  }

  getFiles(): Array<FileI | FolderI> {
    return this.files
  }

}
