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

/**
 * The @emfts/core ESM artefact the import map points at - the application's
 * only copy.
 *
 * One copy is not about size here. EMF is built on identity: a generated
 * package registers its EClass once, and `eObject.eClass() === Package
 * .Literals.X` has to hold for reflection, factories and the UI model
 * composer to agree on what an object is. Two copies mean two registries
 * and two EClass objects for the same model - every such comparison then
 * quietly fails.
 */
import * as EmftsCore from '@emfts/core'

export * from '@emfts/core'
export default EmftsCore
