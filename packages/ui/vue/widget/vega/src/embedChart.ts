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
 * Draws a Vega-Lite spec into an element (#1283).
 *
 * The one place the widget touches Vega. The component imports this module
 * dynamically, so Vega, Vega-Lite and vega-embed form a chunk of their own
 * and load only when a chart is drawn.
 *
 * Two rules hold for every chart, whatever its spec says:
 * - Expressions are interpreted, never compiled with the Function
 *   constructor (`ast` + vega-interpreter), so the board needs no
 *   'unsafe-eval' in its Content Security Policy.
 * - Nothing is loaded by URL. Data comes from board datasources; a spec
 *   that names a URL - data, image or anything else - gets an error, not
 *   a request.
 */

import embed, { type Result } from 'vega-embed'
import { expressionInterpreter } from 'vega-interpreter'
import { changeset, loader, type Loader, type View } from 'vega'
import type { TopLevelSpec } from 'vega-lite'

export type ChartRenderer = 'canvas' | 'svg'

export interface DrawOptions {
  renderer?: ChartRenderer
  tooltip?: boolean
  /** The base config - the board's theme; the spec's own config wins over it. */
  config?: Record<string, unknown>
}

/** Thrown for every URL a spec names. */
export class UrlRefusedError extends Error {
  constructor(readonly uri: string) {
    super(`a chart loads no URL ("${uri}"); its data comes from board datasources`)
    this.name = 'UrlRefusedError'
  }
}

/**
 * A Vega loader that loads nothing.
 *
 * Every load passes through `sanitize` first; refusing there stops data,
 * images and nested specs alike, before any request is made.
 */
export function refusingLoader(): Loader {
  const refusing = loader()
  refusing.sanitize = (uri: string) => Promise.reject(new UrlRefusedError(String(uri)))
  return refusing
}

/** Draws the spec into the element; the caller finalizes the result. */
export function drawChart(el: HTMLElement, spec: TopLevelSpec, options: DrawOptions = {}): Promise<Result> {
  return embed(el, spec, {
    mode: 'vega-lite',
    renderer: options.renderer ?? 'canvas',
    tooltip: options.tooltip ?? true,
    actions: false,
    /* No style tag of vega-embed's own: there is no action menu to style. */
    defaultStyle: false,
    ast: true,
    expr: expressionInterpreter,
    loader: refusingLoader(),
    ...(options.config ? { config: options.config } : {}),
  })
}

/**
 * Puts new rows into a named dataset of a drawn chart (#1286).
 *
 * The view is kept, so what the reader did with it stays: a zoom, a brush,
 * a picked mark. Answers false when the chart has no dataset of that name -
 * the caller draws the chart anew then.
 */
export async function replaceData(view: View, name: string, rows: object[]): Promise<boolean> {
  try {
    view.data(name)
  } catch {
    return false
  }
  /*
   * Laid out again: autosize fit keeps the plot size it found for the rows
   * before, so labels and a legend that grew with the new rows ran out of
   * the widget (#1287).
   */
  await view
    .change(
      name,
      changeset()
        .remove(() => true)
        .insert(rows),
    )
    .resize()
    .runAsync()
  return true
}

/* The signals every view has, which the new chart sets for itself. */
const OWN_SIGNALS = new Set(['width', 'height', 'padding', 'autosize', 'background', 'cursor'])

/**
 * The values of a drawn chart's signals - what the reader did with it: the
 * params and selections, not the size the new chart takes from its frame.
 * Vega's default keeps none of them, so the filter is said here.
 */
export function signalsOf(view: View): unknown {
  return view.getState({
    data: () => false,
    signals: (name?: string) => !!name && !OWN_SIGNALS.has(name),
    recurse: true,
  })
}

/** Gives a chart drawn anew the signals the one before held. */
export async function restoreSignals(view: View, state: unknown): Promise<void> {
  try {
    view.setState(state as never)
    await view.runAsync()
  } catch {
    // A signal the new chart no longer has is not worth an error
  }
}
