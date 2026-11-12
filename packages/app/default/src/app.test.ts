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
import type { ModuleManifest } from '@eclipse-daanse/tsm'
import { frameOf, framed } from './app'

const manifest = (id: string) => ({ id, name: id, version: '1.0.0', entry: '' }) as ModuleManifest
const ids = (manifests: ModuleManifest[]) => manifests.map((each) => each.id)

const BUILT_IN = ['app.shell', 'app.workbench', 'lib.core', 'ui.chart'].map(manifest)
const BOARD = { frame: null, bundles: null }
const WORKBENCH = { frame: 'app.workbench', bundles: ['app.workbench', 'lib.core'] }

describe('the board', () => {
  it('shows the shell, and the workbench at /workbench only', () => {
    expect(frameOf('/', BOARD)).toBe('app.shell')
    expect(frameOf('/workbench', BOARD)).toBe('app.workbench')
    expect(frameOf('/workbench/', BOARD)).toBe('app.workbench')
    expect(frameOf('/workbenches', BOARD)).toBe('app.shell')
  })

  it('registers every built-in bundle but the other frame', () => {
    expect(ids(framed(BUILT_IN, [], '/', BOARD))).toEqual(['app.shell', 'lib.core', 'ui.chart'])
  })
})

describe('the workbench app', () => {
  it('shows the workbench on every path, / included', () => {
    expect(frameOf('/', WORKBENCH)).toBe('app.workbench')
    expect(frameOf('/anything', WORKBENCH)).toBe('app.workbench')
  })

  /* A manifest of a bundle the build left out would only fail to load. */
  it('registers only the bundles its build holds', () => {
    expect(ids(framed(BUILT_IN, [], '/', WORKBENCH))).toEqual(['app.workbench', 'lib.core'])
  })

  it('still registers what the deployment adds', () => {
    const extras = [manifest('customer.extra')]
    expect(ids(framed(BUILT_IN, extras, '/', WORKBENCH))).toEqual([
      'app.workbench',
      'lib.core',
      'customer.extra',
    ])
  })
})
