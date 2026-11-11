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
import { appOf } from './apps.mjs'

describe('which app a build is', () => {
  it('is the board unless VITE_APP says otherwise', () => {
    expect(appOf({})).toMatchObject({ id: 'board', outDir: 'dist-board', roots: undefined })
  })

  it('is the workbench, built into its own directory', () => {
    expect(appOf({ VITE_APP: 'workbench' })).toMatchObject({
      outDir: 'dist-workbench',
      frame: 'app.workbench',
      roots: ['app.workbench'],
    })
  })

  it('refuses an app that does not exist', () => {
    expect(() => appOf({ VITE_APP: 'nonsense' })).toThrow(/board, workbench/)
  })
})
