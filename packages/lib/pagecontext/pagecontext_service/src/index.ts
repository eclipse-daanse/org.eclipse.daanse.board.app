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

import {container} from "org.eclipse.daanse.board.app.lib.core"
import {type PageContextServiceI } from './api/PageContextServiceI'
import {type PageContextProviderI } from './api/PageContextProviderI'
import { PageContextService } from './classes/PageContextService'

const identifier = Symbol.for('PageContext')
if(!container.isBound(identifier)){
  container.bind<PageContextServiceI>(identifier).to(PageContextService).inSingletonScope();
  console.log("📦 PageContextService initialized");
}

export {identifier , type PageContextServiceI, type PageContextProviderI}

