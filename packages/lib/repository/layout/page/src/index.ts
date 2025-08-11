/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import {container} from 'org.eclipse.daanse.board.app.lib.core'
import { LayoutRepository } from './classes/LayoutRepository'
import type{LayoutRepositoryI } from './interfaces/LayoutRepositoryI'
import type{ LayoutI } from './interfaces/LayoutI'
const identifier = Symbol.for('LayoutRepository')
if(!container.isBound(identifier)) {
  console.log("📦 LayoutRepository initialized");
  container
    .bind<LayoutRepositoryI>(identifier)
    .to(LayoutRepository)
    .inSingletonScope()
}

export {
  identifier,
  LayoutI,
  LayoutRepositoryI
}
