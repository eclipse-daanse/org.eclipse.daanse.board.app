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

import { Container } from 'inversify'
import { VariableFactory } from './classes'

const identifier = Symbol.for('VariableFactory')

const init = (container: Container) => {
  container
    .bind<VariableFactory>(identifier)
    .to(VariableFactory)
    .inSingletonScope()
}

export { VariableFactory, init, identifier }
