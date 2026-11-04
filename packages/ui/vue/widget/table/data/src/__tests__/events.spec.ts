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
 * ********************************************************************/

/*
 * What the rule dialog is told the table's events carry (#1221): the
 * features of the modelled payloads, the record among them as a Record -
 * which is what makes the dialog offer one field per column.
 */
import { describe, it, expect } from 'vitest'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventRegistry, EcoreMetadataService } from 'org.eclipse.daanse.board.app.lib.events'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import { DataTableWidgetEvents } from '../events/DataTableWidgetEvents'

void EventsPackage.eINSTANCE
void DatatablesettingsPackage.eINSTANCE

function declared(event: string) {
  const registry = new EventRegistry()
  registry.setEcoreMetadataService(new EcoreMetadataService())
  registry.registerWidget('DataTableWidget', DataTableWidgetEvents)
  return Object.fromEntries(
    registry.extractPayloadPropertiesForEvent(`DataTableWidget:${event}`).map((each) => [each.name, each.type]),
  )
}

describe('the table’s events, as the rule dialog sees them', () => {
  it('a row click declares the record and its index', () => {
    expect(declared('row_click')).toMatchObject({ row: 'Record', rowIndex: 'number', widgetId: 'string' })
  })

  it('a cell click adds the column, by name and by place, and the value', () => {
    expect(declared('cell_click')).toMatchObject({
      row: 'Record',
      rowIndex: 'number',
      column: 'string',
      columnIndex: 'number',
      value: 'any',
    })
  })

  it('a column click declares the column, by name and by place', () => {
    const fields = declared('col_click')
    expect(fields).toMatchObject({ column: 'string', columnIndex: 'number' })
    expect(fields).not.toHaveProperty('row')
  })
})
