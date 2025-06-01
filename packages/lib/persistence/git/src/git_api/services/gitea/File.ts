/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import File from '../../services/common/File'
import { FileState } from '../../api/FileState'
import { FileParseError } from '../../services/common/FileParseError'

export default class GitteaFile extends File {

  async fetchContent() {

    if (!this.hash) new Error('File not synced yet, commit first')
    try {
      this.content = (await this.contentProvider.getContent({ filehash: this.hash!, path: this.path }))
      this.file_state = FileState.UNTOUCHED
      return this.content
    } catch (e) {
      console.log(e)
      throw new FileParseError('File not get parsed')
    }

  }
}
