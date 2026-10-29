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
 * Where the panes' edges are, kept across sessions. Sizes are pixels of the
 * pane on the edge's near side; a pane never gets narrower than MIN, so a
 * dragged-away pane can always be dragged back.
 */

import { reactive, watch } from 'vue'
import { readStored, writeStored } from './storage'

export interface PaneSizes {
  left: number
  right: number
  bottom: number
  inspector: number
}

const DEFAULTS: PaneSizes = { left: 280, right: 400, bottom: 260, inspector: 220 }
export const MIN_PANE = 120

export function usePaneSizes() {
  const stored = readStored<Partial<PaneSizes>>('layout', {})
  const sizes = reactive<PaneSizes>({ ...DEFAULTS, ...stored })
  watch(sizes, value => writeStored('layout', { ...value }), { deep: true })
  return sizes
}
