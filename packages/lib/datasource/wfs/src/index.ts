/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

import { WfsStore } from './classes/WfsStore'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { WfsstorePackage } from './gen/WfsstorePackage'
import { WfsstoreFactory } from './gen/WfsstoreFactory'
import { IWfsStoreConfigurationImpl } from './gen/IWfsStoreConfigurationImpl'
import type { IWfsStoreConfiguration } from './gen/IWfsStoreConfiguration'

/* Building the EPackage on load: until it exists nothing can render a form from the model. */
void WfsstorePackage.eINSTANCE

/** Typed service id - the name and the contract declared once, here. */
const WFS_STORE_FACTORY = serviceId<(config: unknown) => WfsStore>('WfsStoreFactory')
const factorySymbol = Symbol.for(WFS_STORE_FACTORY)

/** Makes a store from a configuration; each call its own instance, built by the container. */
export function activate({ services }: ActivationContext) {
  services.register(WFS_STORE_FACTORY, (config: any) => {
    if (!WfsStore.validateConfiguration(config)) {
      throw new Error('Invalid WfsStore configuration: a connection and a feature type are needed.')
    }
    const store = services.construct(WfsStore)
    store.init(config)
    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(WFS_STORE_FACTORY)
}

export { type WfsStore, type IWfsStoreConfiguration, WFS_STORE_FACTORY, factorySymbol }
export { WfsstorePackage, WfsstoreFactory, IWfsStoreConfigurationImpl }
export { boxOf, columnTypesOfSchema, describeFeatureTypePath, exceptionOf, featuresOf, featuresOfGml, getCapabilitiesPath, getFeaturePath, tableOf, GEOJSON } from './wfs'
export type { WfsRequest } from './wfs'
export { featureInfoPath, featuresOfFeatureInfo, mergedOf, tilesOf, MAX_TILES } from './featureInfo'
export type { FeatureInfoRequest } from './featureInfo'
export type { WfsFailure } from './classes/WfsStore'
