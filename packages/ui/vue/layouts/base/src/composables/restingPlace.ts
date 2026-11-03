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

/** Where a widget sits, as the layout keeps it. */
export interface Placed {
  x?: number
  y?: number
  width?: number
  height?: number
}

/**
 * Where a widget goes when nothing pointed anywhere.
 *
 * The palette can place one by being clicked, which is the only way in
 * for anyone working by keyboard (#1165) - and a click carries no
 * coordinates to be dropped at.
 *
 * Below everything already on the board, so it never lands on top of
 * another widget, and clear of the left edge, where the editor docks the
 * palette itself and would hide the new widget completely.
 *
 * Answered as a centre, not a corner: that is what the editor's addWidget
 * takes, being written for a widget dropped under a cursor.
 */
export function restingPlace(
  taken: readonly Placed[],
  size: { width: number; height: number },
  options: { clearOfPalette: number; gap: number },
): { x: number; y: number } {
  const bottom = taken.reduce(
    (lowest, item) => Math.max(lowest, (item.y ?? 0) + (item.height ?? 0)),
    0,
  )

  return {
    x: options.clearOfPalette + size.width / 2,
    y: bottom + options.gap + size.height / 2,
  }
}
