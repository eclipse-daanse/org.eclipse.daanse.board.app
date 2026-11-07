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
 * The Vega-Lite spec the widget draws, derived from its settings (#1283).
 *
 * Apart from the component and free of Vega, so a test reads the spec
 * without drawing it. Until the chart recipe arrives (#1284) the marks and
 * the data are a fixed sample; the settings already decide what the model
 * holds today - the title.
 */

import type { TopLevelSpec } from 'vega-lite'

/** What of the settings the spec is made from. */
export interface SpecSettings {
  title?: string | null
}

/** The sample drawn until the recipe describes the chart. */
const SAMPLE_VALUES = [
  { category: 'A', amount: 28 },
  { category: 'B', amount: 55 },
  { category: 'C', amount: 43 },
  { category: 'D', amount: 91 },
  { category: 'E', amount: 81 },
  { category: 'F', amount: 53 },
]

/** The Vega-Lite spec of a chart with these settings. */
export function specOf(settings: SpecSettings | null | undefined): TopLevelSpec {
  const title = String(settings?.title ?? '').trim()
  return {
    $schema: 'https://vega.github.io/schema/vega-lite/v6.json',
    ...(title ? { title } : {}),
    /* The board frame sizes the chart, not the spec. */
    width: 'container',
    height: 'container',
    autosize: { type: 'fit', contains: 'padding' },
    background: 'transparent',
    data: { values: SAMPLE_VALUES },
    mark: { type: 'bar', tooltip: true },
    encoding: {
      x: { field: 'category', type: 'nominal', axis: { labelAngle: 0 } },
      y: { field: 'amount', type: 'quantitative' },
    },
  }
}
