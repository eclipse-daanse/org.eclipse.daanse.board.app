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
 * What a pivot says about where it is, and what it listens to - so another
 * widget (a sankey, a sunburst) can follow it or lead it. Members by unique
 * name only: an index means nothing outside the cellset it came from.
 *
 * On the board's event bus. A pivot ignores what it sent itself; a message
 * with a target is for that widget only, one without is for every pivot.
 */

export const PIVOT_EVENTS = {
  sliceChanged: 'pivot:slice-changed',
  selectionChanged: 'pivot:selection-changed',
  memberHover: 'pivot:member-hover',
} as const

interface Addressed {
  /** The widget that sent it. */
  source?: string
  /** The widget it is for; absent for all. */
  target?: string
}

/** The slice shown: the members on axis 2 (pages) and 3 (chapters); null where the axis is absent. */
export interface SliceChangedEvent extends Addressed {
  axis2: string | null
  axis3: string | null
}

export interface SelectionChangedEvent extends Addressed {
  slices: { axis2: string | null; axis3: string | null }[]
}

/** The member under the pointer, or null when it left. */
export interface MemberHoverEvent extends Addressed {
  axis: 2 | 3
  uniqueName: string | null
}

/** Whether a message on the bus is for the given widget. */
export function isFor(event: Addressed | undefined, widgetId: string | undefined): boolean {
  if (!event) return false
  if (widgetId && event.source === widgetId) return false
  return !event.target || event.target === widgetId
}
