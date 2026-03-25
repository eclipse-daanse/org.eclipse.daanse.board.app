/*
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

export interface GridSettingsI {
  rowHeight: number
  cols: { lg: number; md: number; sm: number; xs: number; xxs: number }
}

export const DEFAULT_GRID_SETTINGS: GridSettingsI = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
}

export const BREAKPOINTS = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 } as const

export function resolveGridSettings(layoutSettings?: Record<string, any>): GridSettingsI {
  const s = layoutSettings ?? {}
  return {
    rowHeight: s.rowHeight ?? DEFAULT_GRID_SETTINGS.rowHeight,
    cols: { ...DEFAULT_GRID_SETTINGS.cols, ...s.cols }
  }
}
