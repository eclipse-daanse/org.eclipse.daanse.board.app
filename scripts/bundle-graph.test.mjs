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

// @vitest-environment node

import { describe, expect, it } from 'vitest'
import { bundleHull } from './bundle-graph.mjs'

const library = (name) => ({ namespace: 'tsm.library', attributes: { library: name } })

/* An app, what it names, what it imports, the services it asks for - and
  a bundle nobody needs. */
const MANIFESTS = [
  {
    id: 'app.tool',
    dependencies: ['lib.api'],
    sharedDependencies: [{ id: 'pkg.ui' }, { id: 'vue' }],
    requiresService: [{ id: 'Store' }, { id: 'Settings', optional: true }],
  },
  { id: 'lib.api', dependencies: ['platform.system'] },
  { id: 'platform.system' },
  { id: 'ui.lib', capabilities: [library('pkg.ui')] },
  { id: 'repo.store', provides: [{ id: 'Store' }], dependencies: ['lib.api'] },
  { id: 'ui.settings', provides: [{ id: 'Settings' }] },
  { id: 'widget.unrelated', dependencies: ['lib.api'] },
]

describe('the bundles an app is made of', () => {
  it('follows dependencies, shared libraries and the services asked for', () => {
    expect([...bundleHull(['app.tool'], MANIFESTS)].sort()).toEqual([
      'app.tool',
      'lib.api',
      'platform.system',
      'repo.store',
      'ui.lib',
      'ui.settings',
    ])
  })

  it('names a bundle that is needed and missing, rather than leaving it out', () => {
    expect(() => bundleHull(['app.tool'], MANIFESTS.slice(1))).toThrow(/app.tool/)
  })
})
