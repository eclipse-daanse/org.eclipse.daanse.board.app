/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { ScenarioSpec } from './generator'

export interface Scenario {
  spec: ScenarioSpec
  // widget config overrides
  config?: Record<string, any>
  // member toggled by the expand/collapse series
  toggle?: { area: 'rows' | 'columns'; uName: string }
}

export const scenarios: Record<string, Scenario> = {
  // 10 000 rows x 20 columns, two hierarchies on rows
  tall: {
    spec: {
      rows: { hierarchies: [{ name: 'Region', fanout: [100, 10] }, { name: 'Product', fanout: [100] }] },
      columns: { hierarchies: [{ name: 'Measures', fanout: [20] }] },
    },
    toggle: { area: 'rows', uName: '[Region].[0]' },
  },
  // 200 rows x 1 000 columns
  wide: {
    spec: {
      rows: { hierarchies: [{ name: 'Store', fanout: [200] }] },
      columns: { hierarchies: [{ name: 'Year', fanout: [10, 12] }, { name: 'Product', fanout: [100] }] },
    },
    toggle: { area: 'columns', uName: '[Year].[0]' },
  },
  // 2 000 x 200 with colour scale and top-N formats
  formats: {
    spec: {
      rows: { hierarchies: [{ name: 'Customer', fanout: [2000] }] },
      columns: { hierarchies: [{ name: 'Month', fanout: [200] }] },
    },
    config: {
      conditionalFormats: [
        { id: 'top', conditionType: 'topN', value1: 500, backgroundColor: '#ffe08a', textColor: '#000000', priority: 0 },
        { id: 'scale', conditionType: 'colorScale', value1: 0, minColor: '#f8696b', maxColor: '#63be7b', backgroundColor: '', textColor: '', priority: 1 },
      ],
    },
  },
  // 50 members with 150 children each, toggled repeatedly
  expand: {
    spec: {
      rows: { hierarchies: [{ name: 'Account', fanout: [50, 150] }] },
      columns: { hierarchies: [{ name: 'Period', fanout: [30] }] },
    },
    toggle: { area: 'rows', uName: '[Account].[0]' },
  },
  // small table with updateable cells for edit-mode checks
  edit: {
    spec: {
      rows: { hierarchies: [{ name: 'Account', fanout: [30, 3] }] },
      columns: { hierarchies: [{ name: 'Period', fanout: [12] }] },
      updateableEvery: 2,
    },
    toggle: { area: 'rows', uName: '[Account].[0]' },
  },
}
