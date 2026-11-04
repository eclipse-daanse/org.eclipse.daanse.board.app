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

/*
 * What an event's payload offers, asked of the class it declares (#1221).
 *
 * An event declares a generated Impl. Its name is not the EClass's, so the
 * old lookup by name in a model registered under the widget type found
 * nothing, and the rule dialog offered nothing - not even what Payload
 * itself declares.
 */
import { describe, it, expect } from 'vitest'
import { EventsPackage, PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventRegistry } from './EventRegistry'
import { EcoreMetadataService } from './EcoreMetadataService'

void EventsPackage.eINSTANCE

/* A payload with nothing of its own: what it offers is what Payload declares. */
class PlainPayload extends PayloadImpl {}

describe('EventRegistry.extractPayloadPropertiesForEvent', () => {
  it('lists the features of the declared payload class without a model registered for the widget', () => {
    const registry = new EventRegistry()
    registry.setEcoreMetadataService(new EcoreMetadataService())
    registry.registerWidget('SomeWidget', [{ name: 'Clicked', type: 'click', payloadType: PlainPayload }])

    const names = registry.extractPayloadPropertiesForEvent('SomeWidget:click').map((each) => each.name)

    expect(names).toEqual(['eventType', 'widgetId', 'timestamp', 'metadata'])
  })
})
