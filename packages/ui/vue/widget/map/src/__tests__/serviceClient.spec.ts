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
 * ********************************************************************/

import { describe, it, expect } from 'vitest'
import { clientOf, describedService } from '../serviceClient'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { MapSettingsPackage } from '../gen/MapSettingsPackage'

/*
 * Built in the order the bundles load them: the map's package references
 * the events one, and a reference can only be resolved once the package
 * it points at is registered.
 */
void EventsPackage.eINSTANCE
void MapSettingsPackage.eINSTANCE

/** A client as an OGC endpoint hands one back. */
const client = {
  getLayers: () => [{ name: 'roads' }],
  getFeatureUrl: () => 'https://example.test/wfs?typeName=roads',
}

describe('a service entry', () => {
  /*
   * The point of #1098: these four fields used to be written out as a
   * literal, which the package's own declaration of Service accepted.
   * The generated one is an EObject, and a literal is not.
   */
  it('is a modelled object, not a literal', () => {
    const made = describedService(client, 'https://example.test/wms', 'WMS')

    expect(typeof made.eClass).toBe('function')
    expect(typeof (made as unknown as { eNotify?: unknown }).eNotify).toBe('function')
  })

  it('carries what it was given', () => {
    const made = describedService(client, 'https://example.test/wms', 'WMS')

    expect(made.url).toBe('https://example.test/wms')
    expect(made.type).toBe('WMS')
    expect(made.service).toBe(client)
  })

  /* Each entry is told apart by its id, and the layers refer to it. */
  it('gets an id of its own', () => {
    const first = describedService(client, 'https://example.test/wms', 'WMS')
    const second = describedService(client, 'https://example.test/wms', 'WMS')

    expect(first.id).toBeTruthy()
    expect(first.id).not.toBe(second.id)
  })

  it('takes a WFS the same way', () => {
    expect(describedService(client, 'https://example.test/wfs', 'WFS').type).toBe('WFS')
  })

  /*
   * A board that has just been opened has no client yet - it is rebuilt
   * from the URL - so an entry has to be makeable without one.
   */
  it('can be made before its client exists', () => {
    const made = describedService(undefined, 'https://example.test/wms', 'WMS')

    expect(made.url).toBe('https://example.test/wms')
    expect(made.service).toBeUndefined()
  })
})

describe('reading the client of an entry', () => {
  it('hands back what is there', () => {
    expect(clientOf(client)?.getLayers?.()).toEqual([{ name: 'roads' }])
  })

  /*
   * What a stored board holds until the client is rebuilt: the field is
   * empty, and asking it for a method has to answer rather than throw.
   */
  it('answers nothing where the client has not been rebuilt yet', () => {
    expect(clientOf(undefined)).toBeUndefined()
    expect(clientOf(null)).toBeUndefined()
    expect(typeof clientOf(undefined)?.getLayers).toBe('undefined')
  })

  /* A plain object out of storage has the fields and none of the methods. */
  it('answers a stored shell without its methods', () => {
    const stored = clientOf({ url: 'https://example.test/wms' })

    expect(stored?.url).toBe('https://example.test/wms')
    expect(typeof stored?.getLayers).toBe('undefined')
  })
})
