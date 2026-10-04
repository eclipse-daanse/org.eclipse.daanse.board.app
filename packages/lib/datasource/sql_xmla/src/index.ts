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

import { SqlXmlaStore, type ISqlXmlaStoreConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { SqlxmlastorePackage } from './gen/SqlxmlastorePackage'
import { SqlxmlastoreFactory } from './gen/SqlxmlastoreFactory'
import { ISqlXmlaStoreConfigurationImpl } from './gen/ISqlXmlaStoreConfigurationImpl'
/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render a form
 * from the model.
 */
void SqlxmlastorePackage.eINSTANCE

/** Typed service id - the name and the contract declared once, here. */
const SQL_XMLA_STORE_FACTORY = serviceId<(config: any) => SqlXmlaStore>('SqlXmlaStoreFactory')

const factorySymbol = Symbol.for(SQL_XMLA_STORE_FACTORY)

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(SQL_XMLA_STORE_FACTORY, (config: any) => {
    if (!SqlXmlaStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid SqlXmlaStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(SqlXmlaStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(SQL_XMLA_STORE_FACTORY)
}

export { SqlXmlaStore, ISqlXmlaStoreConfiguration, SQL_XMLA_STORE_FACTORY, factorySymbol }
export { SqlxmlastorePackage, SqlxmlastoreFactory, ISqlXmlaStoreConfigurationImpl }
