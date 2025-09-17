/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import {container} from "org.eclipse.daanse.board.app.lib.core"
import {identifier as pagecontext_service_id,type PageContextServiceI } from "org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service"
import { VuePageProvider } from './classes/VuePageProvider'

const identifier = Symbol.for('VuePageProvider');

const vuePageProvider = new VuePageProvider();
container.bind(identifier).toConstantValue(vuePageProvider);

if(!container.isBound(pagecontext_service_id)){
  console.log("X📦X VuePageContext couldn't be initialized: No PageContextService");
}else {
  container.get<PageContextServiceI>(pagecontext_service_id).setProvider(vuePageProvider);
  console.log("✅ VuePageProvider set as PageContextService provider");
}

export { VuePageProvider, identifier, vuePageProvider };


