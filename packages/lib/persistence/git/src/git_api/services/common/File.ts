/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import { FileParseError } from '../../services/common/FileParseError'
import type { FileI } from '../../api/File'
import { FileState } from '../../api/FileState'
import type ContentProviderI from '../../api/ContentProvider'


export default class File implements FileI {
  content: any
  name: string
  path: string
  hash: string | null
  contentProvider: ContentProviderI
  file_state: FileState = FileState.UNLOADED

  constructor(name: string, path: string, hash: string | null, contentProvider: ContentProviderI, exsists = false) {
    console.log(hash)
    this.name = name
    this.path = path
    this.hash = hash
    this.contentProvider = contentProvider
    if (!exsists) {
      this.file_state = FileState.NEW
    }
  }

  async fetchContent() {

    if (!this.hash) new Error('File not synced yet, commit first')
    try {
      this.content = (await this.contentProvider.getContent({ filehash: this.hash! }))
      this.file_state = FileState.UNTOUCHED
      return this.content
    } catch (e) {
      console.log(e)
      throw new FileParseError('File not get parsed')
    }

  }

  getContent(): any {
    try {
      const content_as_string = atob(this.content)
      return JSON.parse(content_as_string)
    } catch (e) {
      //throw new FileParseError('File not get parsed')
      return {}
    }
  }

  setContent(content: any) {
    try {
      const content_as_String = JSON.stringify(content)
      const content_as_base = btoa(content_as_String)
      this.content = content_as_base
      if (this.file_state != FileState.NEW) this.file_state = FileState.MODIFIED
    } catch (e) {
      throw new FileParseError('File not get parsed')
    }
  }

  delete() {
    this.file_state = FileState.DELETED
  }

}
