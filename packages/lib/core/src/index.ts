/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { Container } from 'inversify'

const identifiers = {
  TINY_EMITTER: Symbol.for('TINY_EMITTER'),
  CONTAINER: Symbol.for('CONTAINER'),
}

const container = new Container()

export { container, identifiers }
