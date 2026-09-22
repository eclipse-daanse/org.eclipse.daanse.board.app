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

import { inject, type InjectionKey } from 'vue'
import type { TinyEmitter } from 'tiny-emitter'
import type { Area, PivotCell, PivotMember } from './logic/types'

// What the areas report upwards over the event bus; PivotTable turns these
// into its own emits
export interface PivotBusEvents {
  row_clicked: string
  row_right_clicked: string
  column_clicked: string
  column_right_clicked: string
  cell_clicked: { i: number; j: number }
  cell_right_clicked: { i: number; j: number }
}

export interface PivotBus {
  emit<K extends keyof PivotBusEvents>(event: K, payload: PivotBusEvents[K]): void
}

export type MenuTarget =
  | { kind: 'member'; area: Area; member: PivotMember }
  | { kind: 'cell'; cell: PivotCell & { i: number; j: number } }

export type MenuAction =
  | 'drilldown'
  | 'drillup'
  | 'openMemberProperties'
  | 'showMemberProperties'
  | 'hideMemberProperties'
  | 'openCellProperties'
  | 'drillthrough'

// What the areas ask PivotTable to do
export interface PivotActions {
  expand(member: PivotMember, area: Area): void
  collapse(member: PivotMember, area: Area): void
  startResize(area: Area, index: number, event: MouseEvent): void
  openMenu(event: MouseEvent, target: MenuTarget): void
  focusCell(col: number, row: number): void
}

export const PIVOT_BUS: InjectionKey<PivotBus> = Symbol('pivotTableEventBus')
export const PIVOT_ACTIONS: InjectionKey<PivotActions> = Symbol('pivotTableActions')

export const typedBus = (emitter: TinyEmitter): PivotBus => ({
  emit: (event, payload) => emitter.emit(event, payload),
})

export const usePivotBus = () => inject(PIVOT_BUS)!
export const usePivotActions = () => inject(PIVOT_ACTIONS)!
