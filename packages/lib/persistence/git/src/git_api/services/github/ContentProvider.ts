/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import { Octokit } from 'octokit'
import ContentProviderI, { FilehashType } from '../../api/ContentProvider'

export default class ContentProvider implements ContentProviderI {
  readonly owner: string
  readonly repo: string
  readonly options?: any

  constructor(owner: string, repo: string, options: any = undefined) {
    this.owner = owner
    this.repo = repo
    this.options = options
  }

  async getContent(arg: FilehashType): Promise<string> {
    const blob = await new Octokit(this.options).rest.git.getBlob({
      owner: this.owner,
      repo: this.repo,
      file_sha: arg.filehash
    })
    return blob.data.content
  }

}
