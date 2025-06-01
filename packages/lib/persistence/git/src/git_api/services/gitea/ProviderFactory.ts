/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import BranchProvider from '../../services/gitea/BranchProvider'
import CommitProvider from '../../services/gitea/CommitProvider'
import FileProvider from '../../services/gitea/FileProvider'
import ContentProvider from '../../services/gitea/ContentProvider'

export default class ProviderFactory {
  static get(name: string, owner: string, options?: any) {
    return new BranchProvider(name, owner,
      new CommitProvider(name, owner,
        new FileProvider(name, owner,
          new ContentProvider(name, owner, options),
          options),
        options),
      options)
  }
}
