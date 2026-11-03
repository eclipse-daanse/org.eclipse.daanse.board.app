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

import { describe, expect, test } from 'vitest'
import { restingPlace } from '../composables/restingPlace'

const SIZE = { width: 300, height: 150 }
const WHERE = { clearOfPalette: 264, gap: 24 }

/*
 * Where a widget lands that nobody dropped (#1165).
 *
 * A click from the palette carries no coordinates, so the position is
 * worked out instead - and the two things it must not do are land on top
 * of another widget and land underneath the palette, which is docked at
 * the left edge and would hide it entirely.
 */
describe('restingPlace', () => {
  test('puts the first widget clear of the palette', () => {
    const at = restingPlace([], SIZE, WHERE)

    /* A centre, so the left edge is x minus half the width. */
    expect(at.x - SIZE.width / 2).toBe(264)
  })

  test('puts it below everything already there', () => {
    const at = restingPlace([{ x: 0, y: 100, width: 300, height: 150 }], SIZE, WHERE)

    expect(at.y - SIZE.height / 2).toBe(100 + 150 + 24)
  })

  test('measures from the lowest edge, whichever widget that is', () => {
    const taken = [
      { x: 0, y: 400, width: 300, height: 100 },
      { x: 320, y: 0, width: 300, height: 900 },
      { x: 0, y: 50, width: 300, height: 100 },
    ]

    const at = restingPlace(taken, SIZE, WHERE)

    expect(at.y - SIZE.height / 2).toBe(900 + 24)
  })

  /* A board loaded from storage drops the zeroes, and a widget without a
    height is not a widget of infinite height. */
  test('treats a missing position as the origin', () => {
    const at = restingPlace([{ width: 300 }], SIZE, WHERE)

    expect(at.y - SIZE.height / 2).toBe(24)
  })

  test('never lands on top of what is there', () => {
    const taken = [{ x: 0, y: 0, width: 300, height: 150 }]
    const at = restingPlace(taken, SIZE, WHERE)

    const top = at.y - SIZE.height / 2
    expect(top).toBeGreaterThanOrEqual(150)
  })
})
