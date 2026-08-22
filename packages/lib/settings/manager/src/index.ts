/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core';
import { SettingsManager } from './classes/SettingsManager'
import { type SettingsManagerI } from './interfaces/SettingsManagerI'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
/** Typed service id - the name and the contract declared once, here. */
const SETTINGS_MANAGER = serviceId<SettingsManager>('SettingsManager')

const identifier = Symbol.for(SETTINGS_MANAGER)

export function activate({ services }: ActivationContext) {
  services.register(SETTINGS_MANAGER, new SettingsManager())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(SETTINGS_MANAGER)
}
export {
  identifier,
  type SettingsManagerI, SETTINGS_MANAGER }
