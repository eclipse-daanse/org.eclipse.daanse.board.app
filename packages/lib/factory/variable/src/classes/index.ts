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
export interface VariableConstuctor<T> {
  new (
    name: string,
    container: Container,
    config: any,
  ): T
  validateConfiguration: (config: any) => boolean
}

@injectable()
export class VariableFactory {
  constructor(@inject(identifiers.CONTAINER) private container: Container) {}

  createVariable<T>(identifier: symbol, configuration: any): T {
    const ctor = this.container.get<VariableConstuctor<T>>(identifier)
    const name = configuration.name
    delete configuration.name
    return new ctor(name, this.container, {
      ...configuration,
    })
  }
}
