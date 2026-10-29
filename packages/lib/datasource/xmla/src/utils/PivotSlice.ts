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

import { sliceResponse, type Cellset, type LegacyNode, type SliceRef } from './Cellset'
import { parseMdxRequest } from './MdxRequestHelper'

/** What parseMdxRequest needs besides the answer; plain data, sent along with a cellset. */
export interface PivotSliceParams {
  rows: LegacyNode[]
  columns: LegacyNode[]
  measures: LegacyNode[]
  properties: LegacyNode[]
  showRowsProperties: boolean
  showColumnsProperties: boolean
}

/** One slice in the shape the pivot table renders - the same as a two-axis query gives. */
export function pivotSlice(cellset: Cellset, slice: SliceRef, params: PivotSliceParams): LegacyNode {
  return parseMdxRequest(sliceResponse(cellset, slice), params)
}
