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

import { v4 } from 'uuid'
import { MapSettingsFactory } from './gen/MapSettingsFactory'
import type { Service } from './gen/Service'

/**
 * The live client inside a stored service entry.
 *
 * A Service in the model names an address and a type and carries the
 * client that talks to it. The client is the one part that storage
 * cannot keep: it is rebuilt from the URL when a board opens, so every
 * method on it may or may not be there at any moment.
 *
 * Everything is optional for that reason, and reading one goes through
 * clientOf rather than through a cast at each call site - the model
 * types the field as unknown, which is what it is.
 */
export interface MapServiceClient {
  getLayers?: (...args: unknown[]) => unknown
  getFeatureTypes?: (...args: unknown[]) => unknown
  getFeatureUrl?: (...args: unknown[]) => string
  getOperationUrl?: (...args: unknown[]) => string
  fetch?: (...args: unknown[]) => unknown
  geoJson?: unknown
  url?: string
  serviceUrl?: string
  _capabilitiesUrl?: string
}

/** The client of a service, as the files that use one work with it. */
export function clientOf(service: unknown): MapServiceClient | undefined {
  return (service ?? undefined) as MapServiceClient | undefined
}

/*
 * A service entry as the model has it, not as a literal.
 *
 * The four fields used to be written out at the call site, which the
 * package's own declaration of Service accepted and the generated one
 * cannot: it is an EObject, and a literal has none of eClass, eResource
 * and the twelve others. Built through the factory the entry is a real
 * one - which is what makes it survive a save, now that adopt() rebuilds
 * contained objects (#1195).
 *
 * The client goes in as it stands. It is the one part storage cannot
 * keep, and the widget rebuilds it from the URL when a board opens.
 */
export function describedService(client: unknown, url: string, type: string): Service {
  const made = MapSettingsFactory.eINSTANCE.createService()
  made.service = client
  made.url = url
  made.type = type
  made.id = v4()
  return made
}
