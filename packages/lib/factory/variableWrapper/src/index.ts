/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapperFactory, type WrapperTypeI } from './classes/Factory'

/** Typed service id - the name and the contract declared once, here. */
const VARIABLE_WRAPPER_FACTORY = serviceId<VariableWrapperFactory>('VariableWrapperFactory')

const identifier = Symbol.for(VARIABLE_WRAPPER_FACTORY)

/**
 * Singleton with constructor injection: the factory receives the
 * VariableRepository through its constructor; `construct` wires it in.
 */
export function activate({ services }: ActivationContext) {
  services.register(VARIABLE_WRAPPER_FACTORY, services.construct(VariableWrapperFactory))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VARIABLE_WRAPPER_FACTORY)
}

export {
  identifier,
  VARIABLE_WRAPPER_FACTORY,
  type VariableWrapperFactory,
  type WrapperTypeI
}
