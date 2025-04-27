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
import {
  RestStore,
  type IRestStoreConfiguration
} from './classes'
import {init as depinit} from "org.eclipse.daanse.board.app.lib.datasource.base";

const symbol = Symbol.for('RestStore')

const init = (container: Container) => {
  console.log('restinit')
  depinit(container)
  container.bind(symbol).toConstantValue(RestStore);
}

export { RestStore, IRestStoreConfiguration, symbol, init }
