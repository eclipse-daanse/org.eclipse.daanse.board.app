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

import { describe, expect, it } from 'vitest'
import { JSONResource, URI } from '@emfts/core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { LightingImpl, PageImpl, ambientOf, completeLighting, createLighting, type Page } from './index'

function roundTrip(page: Page): Page {
  const out = new JSONResource(URI.createURI('page.json'))
  out.getContents().add(page)
  const text = out.saveToString()
  const back = new JSONResource(URI.createURI('page.json'))
  back.loadFromString(text)
  return back.getContents().get(0) as Page
}

describe('a page with lighting', () => {
  it('starts in full daylight, its setting in a contained wrapper', () => {
    const lighting = createLighting()
    expect(lighting.ambient).toBeInstanceOf(VariableWrapper)
    expect(lighting.ambient!.value).toBe(100)
    expect(lighting.ambient!.eContainer()).toBe(lighting)
  })

  it('writes its ambient light out and reads it back, binding included', () => {
    const page = new PageImpl()
    page.id = 'p'
    page.lighting = createLighting()
    page.lighting.ambient!.value = 30
    page.lighting.ambient!.variable = 'dusk'
    page.lighting.ambient!.isSet = true

    const back = roundTrip(page)
    expect(back.lighting?.ambient?.value).toBe(30)
    expect(back.lighting?.ambient?.variable).toBe('dusk')
  })

  it('completes a stored lighting without its setting', () => {
    const lighting = new LightingImpl()
    expect(completeLighting(lighting)).toBe(true)
    expect(lighting.ambient?.value).toBe(100)
    expect(completeLighting(lighting)).toBe(false)
  })

  it('reads the ambient light from what a variable delivers', () => {
    expect(ambientOf(40)).toBe(40)
    expect(ambientOf('25')).toBe(25)
    expect(ambientOf(-5)).toBe(0)
    expect(ambientOf(250)).toBe(100)
    expect(ambientOf('dark')).toBe(100)
    expect(ambientOf(undefined)).toBe(100)
  })
})
