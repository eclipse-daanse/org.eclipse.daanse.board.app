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


import { type VariableStorage } from '../storage/VariableStorage'
import { type TinyEmitter } from 'tiny-emitter'




export interface ComputedStoreParameterI {
   storage: any,
   innerExpression: string,
   eventBus: TinyEmitter
   currentSubscriptions: Map<string, () => void>,
   refreshCb: () => void
   getDependencies(): string[]
   computeValue(): string
}
