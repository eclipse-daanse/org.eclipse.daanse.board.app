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

import { describe, expect, it } from 'vitest'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { ComposablesPackage } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { EventsPackage } from '../../../../../../lib/api/events/src/gen/EventsPackage'
import { PivotTablePackage } from './gen/PivotTablePackage'
import { PivotTableImpl } from './gen/PivotTableImpl'
import { LevelStyleImpl } from './gen/LevelStyleImpl'
import { modelledSettings } from './settings'

void EventsPackage.eINSTANCE
void ComposablesPackage.eINSTANCE
void PivotTablePackage.eINSTANCE

describe('modelledSettings', () => {
  it("puts a stored board's plain settings into a PivotTable, lists and wrappers included", () => {
    const fontSize = new VariableWrapper<string>('12')
    const stored = {
      datasourceId: 'ds',
      mode: 'map',
      showRowsProperties: true,
      fontSize,
      // A wrapper the variable factory left as it was written
      borderColor: { type: 'VARIABLEWRAPPER', _value: 'red' },
      // From before the colour became a wrapper
      cellTextColor: '#333',
      rowLevelStyles: [{ level: 1, fontWeight: 700 }],
    }

    const settings = modelledSettings(stored) as any

    expect(settings).toBeInstanceOf(PivotTableImpl)
    expect(settings.mode).toBe('map')
    expect(settings.cascadeDepth).toBe('axes')
    expect(settings.showRowsProperties).toBe(true)
    expect(settings.fontSize).toBe(fontSize)
    expect(settings.borderColor).toBeInstanceOf(VariableWrapper)
    expect(settings.borderColor.value).toBe('red')
    expect(settings.cellTextColor.value).toBe('#333')
    expect(settings.rowLevelStyles.length).toBe(1)
    expect(settings.rowLevelStyles.get(0)).toBeInstanceOf(LevelStyleImpl)
    expect(settings.rowLevelStyles.get(0).fontWeight).toBe(700)
    expect(settings.datasourceId).toBe('ds')
  })

  it('hands a modelled instance back as it is', () => {
    const settings = new PivotTableImpl()
    expect(modelledSettings(settings)).toBe(settings)
  })

  it('reads settings written out by their private fields', () => {
    expect((modelledSettings({ _mode: 'compare' }) as any).mode).toBe('compare')
  })
})
