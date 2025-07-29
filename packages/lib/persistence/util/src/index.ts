/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import {container} from 'org.eclipse.daanse.board.app.lib.core'
import { type ValidityCheckI } from './api/ValidityCheckI'
import ValidityCheck from './utils/ValidityCheck'

const identifier = Symbol.for('ValidityCheck')
if(!container.isBound(identifier)) {
  container.bind<ValidityCheckI>(identifier).to(ValidityCheck).inSingletonScope()
}

export {
  ValidityCheckI,
  identifier
}
