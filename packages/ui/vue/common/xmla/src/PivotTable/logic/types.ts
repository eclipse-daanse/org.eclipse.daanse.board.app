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

// Shapes produced by lib.datasource.xmla (parseMdxRequest) for the pivot table

export type Area = 'rows' | 'columns'

export interface PivotMember {
  UName: string
  Caption?: string
  LName?: string
  LNum?: string | number
  DisplayInfo?: string | number
  HIERARCHY_UNIQUE_NAME?: string
  PARENT_UNIQUE_NAME?: string
  [key: string]: any
}

export interface PivotProperty {
  isProperty: true
  PROPERTY_NAME: string
  HIERARCHY_UNIQUE_NAME?: string
  [key: string]: any
}

// One position on an axis: a member tuple, or a member property shown as its own row/column
export type AxisEntry = PivotMember[] | PivotProperty

export interface PivotCell {
  Value?: any
  FmtValue?: any
  FORE_COLOR?: string | number
  BACK_COLOR?: string | number
  FONT_FLAGS?: string | number
  FONT_SIZE?: string | number
  [key: string]: any
}

export interface PivotTableState {
  rowsExpandedMembers?: PivotMember[]
  columnsExpandedMembers?: PivotMember[]
  [key: string]: any
}

export interface PivotData {
  rows: PivotMember[][]
  columns: PivotMember[][]
  // rows x columns, property rows/columns included in front
  cells: PivotCell[][]
  propertiesRows?: PivotProperty[]
  propertiesCols?: PivotProperty[]
  tableState?: PivotTableState
}

export interface LevelStyle {
  level: number
  backgroundColor: string
  textColor: string
  fontWeight: number
}

export type ConditionType =
  | 'greaterThan'
  | 'lessThan'
  | 'equals'
  | 'notEquals'
  | 'between'
  | 'contains'
  | 'colorScale'
  | 'topN'
  | 'bottomN'

export interface ConditionalFormat {
  id: string
  conditionType: ConditionType | string
  value1: number | string
  value2?: number | string
  backgroundColor: string
  textColor: string
  fontWeight?: number
  minColor?: string
  maxColor?: string
  priority: number
}

export const isProperty = (entry: AxisEntry | undefined): entry is PivotProperty =>
  !!entry && !Array.isArray(entry) && (entry as PivotProperty).isProperty === true
