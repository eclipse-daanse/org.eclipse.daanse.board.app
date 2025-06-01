/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { FilehashPathType } from '../../api/ContentProvider'
import type ContentProviderI from '../../api/ContentProvider'
import { RepositoryApi } from '../../generated/gitea'


export default class ContentProvider implements ContentProviderI {
  owner: string
  repo: string
  readonly options?: any

  constructor(owner: string, repo: string, options: any = undefined) {
    this.owner = owner
    this.repo = repo
    this.options = options
  }

  async getContent(arg: FilehashPathType): Promise<string | null> {
    try {
      return (await new RepositoryApi().repoGetContents(this.owner, this.repo, arg.path, arg.filehash)).data.content!
    } catch (e) {
      console.log(e)
      return null
    }

  }


}
