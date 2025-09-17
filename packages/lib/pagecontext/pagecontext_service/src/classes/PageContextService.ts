/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
  */

import { injectable } from 'inversify'
import { PageContextServiceI } from '../api/PageContextServiceI'
import { PageContextProviderI } from '../api/PageContextProviderI'

@injectable()
class PageContextService implements PageContextServiceI {
  private provider?: PageContextProviderI;


  setProvider(provider: PageContextProviderI): void {
    this.provider = provider;
  }

  getCurrentPageId(): string | undefined {
    return this.provider?.getCurrentPageId();
  }
}

export { PageContextService }
