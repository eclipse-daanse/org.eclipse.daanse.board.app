/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { WidgetActionInterfaceImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

/**
 * Which row a mark means: its position in the source's answer, or the rows
 * whose cell in a key column holds a value.
 *
 * The index counts the answer as it came, like a click event's rowIndex
 * (#1221), so it only means something inside the same table. The key form
 * is what a rule from elsewhere can supply - a map marker knows a station's
 * id, not where that station sits in this table.
 */
export type DataTableRowMatch = number | { column: string; value: unknown }

/**
 * Which column a mark means: by name, or by its position among the source's
 * columns, hidden ones counted - as a click event's columnIndex.
 */
export type DataTableColumnMatch = string | number

/**
 * What a data table can be told to do from elsewhere on the board.
 *
 * The marks are what the table shows right now, not what it is set up to
 * show: they are not settings and do not survive a reload. A row mark and a
 * column mark stand side by side, and where they cross the cell is marked
 * as well. Each kind holds one mark; marking another row moves it there.
 *
 * Arguments a rule hands over are flat - one value per parameter, either
 * typed in or taken from the event's payload - so the key form can also be
 * given as two arguments: the key column, then the value it must hold.
 */
export abstract class DataTableWidgetInterface extends WidgetActionInterfaceImpl {

  @WidgetAction({ eventType: 'dataTable.refresh' })
  refresh(): void { throw new Error("refresh not implemented"); }

  /** Marks a row: by index, by `{ column, value }`, or by key column and value. */
  @WidgetAction({ eventType: 'dataTable.highlightRow', parameters: ['match: any', 'value?: any'] })
  highlightRow(match: DataTableRowMatch | string, value?: unknown): void {
    throw new Error('highlightRow not implemented')
  }

  /** Marks a column, by name or by index. */
  @WidgetAction({ eventType: 'dataTable.highlightColumn', parameters: ['column: any'] })
  highlightColumn(column: DataTableColumnMatch): void {
    throw new Error('highlightColumn not implemented')
  }

  /**
   * Marks the one cell where a row and a column cross, each in the forms
   * above. Given a third argument, `row` is the key column and `value` the
   * value it must hold.
   */
  @WidgetAction({ eventType: 'dataTable.highlightCell', parameters: ['row: any', 'column: any', 'value?: any'] })
  highlightCell(row: DataTableRowMatch | string, column: DataTableColumnMatch, value?: unknown): void {
    throw new Error('highlightCell not implemented')
  }

  /** Removes every mark. */
  @WidgetAction({ eventType: 'dataTable.clearHighlight' })
  clearHighlight(): void {
    throw new Error('clearHighlight not implemented')
  }
}
