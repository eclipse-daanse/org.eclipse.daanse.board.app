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

import { expect, it } from 'vitest'
import { readShapes } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { parseWorkspace } from './useWorkspaceFile'

/*
 * A board stored while the weather region was typed in grid units
 * (c8ed1ade): the four numbers are no longer in the model, and the
 * resource would pass over them without a word. Opened now, the
 * rectangle they described is the region's one shape.
 */
it('opens a board with a typed weather rectangle as one drawn rectangle', () => {
  const NS = 'http://org.eclipse.daanse.board.app.lib.model.workspace#//'
  const stored = {
    eClass: `${NS}Workspace`,
    board: {
      name: 'Board',
      pages: [
        {
          id: 'p',
          weather: {
            kind: { value: 'rain' },
            region: { value: 'area' },
            regionX: { value: 3 },
            regionY: { value: 2 },
            regionWidth: { value: 6 },
            regionHeight: { value: 5 },
          },
        },
      ],
    },
  }
  const page = parseWorkspace(JSON.stringify(stored))!.board!.pages.get(0)
  expect(page.weather?.kind?.value).toBe('rain')
  expect(readShapes(page.weather)).toEqual([{ kind: 'rectangle', x: 3, y: 2, width: 6, height: 5 }])
})
