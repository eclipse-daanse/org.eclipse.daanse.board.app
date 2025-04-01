/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { injectable, inject, Container } from 'inversify'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'

export interface ConnectionConstructor<T> {
  new (config: any): T
  validateConfiguration: (config: any) => boolean
}

@injectable()
export class ConnectionFactory {
  constructor(@inject(identifiers.CONTAINER) private container: Container) {}

  createConnection<T>(identifier: symbol, configuration: any): T {
    const ctor = this.container.get<ConnectionConstructor<T>>(identifier)
    if (ctor.validateConfiguration(configuration)) {
      return new ctor({
        ...configuration,
      })
    } else {
      console.warn('Invalid configuration', configuration)
      return null as unknown as T
    }
  }
}
