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
 * What the chart tells the board (#1289): a click on a mark, a selection
 * that changed, a value parameter that changed - each as a board event
 * with a modelled payload, so a rule maps it to an action like any other
 * widget's event. The chart writes no variable itself; a rule does.
 *
 * Apart from the component and free of Vega, so a test reads a payload
 * without drawing a chart.
 */

import type { WidgetEventDefinition } from 'org.eclipse.daanse.board.app.lib.events'
import { MarkClickPayloadImpl } from '../gen/MarkClickPayloadImpl'
import { SelectionPayloadImpl } from '../gen/SelectionPayloadImpl'
import { ParamPayloadImpl } from '../gen/ParamPayloadImpl'

export const WIDGET_TYPE = 'VegaWidget'

export const VegaWidgetEvents: WidgetEventDefinition[] = [
  {
    name: 'Mark Clicked',
    type: 'click',
    description: 'Triggered when a mark of the chart is clicked (provides the row it draws)',
    payloadType: MarkClickPayloadImpl,
  },
  {
    name: 'Selection Changed',
    type: 'selection_changed',
    description: 'Triggered when a selection of the chart changes (provides what it holds)',
    payloadType: SelectionPayloadImpl,
  },
  {
    name: 'Parameter Changed',
    type: 'param_changed',
    description: 'Triggered when a value parameter of the chart changes',
    payloadType: ParamPayloadImpl,
  },
]

export type VegaEvent =
  | { event: 'click'; payload: MarkClickPayloadImpl }
  | { event: 'selection_changed'; payload: SelectionPayloadImpl }
  | { event: 'param_changed'; payload: ParamPayloadImpl }

/** The bus event name of a widget event, as every widget names it. */
export const busEventOf = (event: VegaEvent['event']) => `widget:${WIDGET_TYPE}:${event}`

const stamp = <T extends { widgetId?: string; timestamp?: number }>(payload: T, widgetId: string): T => {
  payload.widgetId = widgetId
  payload.timestamp = Date.now()
  return payload
}

/* Fields Vega and Vega-Lite add to a row for themselves. */
const INTERNAL = /^(_vgsid_|__|vlPoint$|Symbol\()/

/** A row or a value as the board sees it: without Vega's own bookkeeping. */
export function cleaned(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(cleaned)
  if (value instanceof Date) return value.toISOString()
  if (!value || typeof value !== 'object') return value
  const out: Record<string, unknown> = {}
  for (const [key, held] of Object.entries(value as Record<string, unknown>)) {
    if (!INTERNAL.test(key)) out[key] = cleaned(held)
  }
  return out
}

/** The layer a mark belongs to, read from the name Vega-Lite gives its marks. */
export function layerOfMark(name: string | undefined): number {
  const match = /^layer_(\d+)/.exec(name ?? '')
  return match ? Number(match[1]) : 0
}

/** The event of a click on a mark. */
export function clickEventOf(hit: { markName?: string; markType?: string; datum?: unknown }, widgetId: string): VegaEvent {
  const payload = stamp(new MarkClickPayloadImpl(), widgetId)
  payload.layer = layerOfMark(hit.markName)
  payload.mark = hit.markType ?? ''
  payload.datum = cleaned(hit.datum ?? {})
  return { event: 'click', payload }
}

/** The event of a changed selection; an empty one holds nothing. */
export function selectionEventOf(param: string, value: unknown, widgetId: string): VegaEvent {
  const payload = stamp(new SelectionPayloadImpl(), widgetId)
  payload.param = param
  const held = cleaned(value)
  payload.value = held && typeof held === 'object' && !Object.keys(held).length ? null : held
  return { event: 'selection_changed', payload }
}

/** The event of a changed value parameter. */
export function paramEventOf(param: string, value: unknown, widgetId: string): VegaEvent {
  const payload = stamp(new ParamPayloadImpl(), widgetId)
  payload.param = param
  payload.value = cleaned(value)
  return { event: 'param_changed', payload }
}
