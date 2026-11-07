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
 * The values a chart draws until board datasources feed it (#1286): a
 * sample in the dataset the starter layer reads.
 */

import type { TopLevelSpec } from 'vega-lite'
import { DEFAULT_DATASET } from './recipe'

export type Row = Record<string, unknown>

export const SAMPLE_VALUES: Row[] = [
  { category: 'A', amount: 28 },
  { category: 'B', amount: 55 },
  { category: 'C', amount: 43 },
  { category: 'D', amount: 91 },
  { category: 'E', amount: 81 },
  { category: 'F', amount: 53 },
]

/** The spec with these values in its named datasets. */
export function withDatasets(spec: TopLevelSpec, datasets: Record<string, Row[]>): TopLevelSpec {
  return { ...spec, datasets: { ...(spec.datasets ?? {}), ...datasets } } as TopLevelSpec
}

/** The sample, as the dataset of the widget. */
export const sampleDatasets = (): Record<string, Row[]> => ({ [DEFAULT_DATASET]: SAMPLE_VALUES })
