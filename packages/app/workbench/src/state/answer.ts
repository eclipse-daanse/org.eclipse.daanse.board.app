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
 * The answer the workbench already holds, as a data source the board's
 * chart composer can read. The chart used to be fed by an XMLA source that
 * ran the statement again - two more Executes on opening the view, three on
 * a re-run - for cells that were already on screen. This source asks
 * nothing: it hands out the table it was built with.
 *
 * The table follows the chart's own reading of a cellset: one row per row
 * of the answer, along the axis, and one series per column. An answer with
 * only columns has one series, its columns along the axis.
 */

import type { DatasourceRepository, IDataRetrieveable } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { numericValue, type SliceMatrix } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'

/** The service the datasource type resolves its store through. */
export const ANSWER_SOURCE = 'WorkbenchAnswerSource'
/** The datasource type - registered by this bundle, in this frame only. */
export const ANSWER_TYPE = 'workbench.answer'
/** The table's label column; not a caption any answer can carry. */
export const LABEL_COLUMN = '\u0000label'

export interface AnswerTable {
  headers: string[]
  rows: unknown[][]
  items: Record<string, unknown>[]
}

/** Captions made unique: the composer keys rows and series by them. */
function unique(labels: string[]): string[] {
  const seen = new Map<string, number>()
  return labels.map(label => {
    const count = (seen.get(label) ?? 0) + 1
    seen.set(label, count)
    return count === 1 ? label : `${label} (${count})`
  })
}

/**
 * The slice on screen as the composer's table. `valueLabel` names the one
 * series of an answer that has no rows.
 */
export function answerTable(matrix: SliceMatrix, valueLabel: string): AnswerTable {
  const byRows = matrix.rows.length > 0
  const labels = unique(byRows ? matrix.rows.map(r => r.label) : matrix.columns.map(c => c.label))
  const series = byRows ? unique(matrix.columns.map(c => c.label)) : [valueLabel]
  const value = (row: number, column: number) => {
    const cell = byRows ? matrix.cells[row]?.[column] : matrix.cells[0]?.[row]
    // An empty cell is a gap in the line, not a zero.
    return numericValue(cell ?? null) ?? undefined
  }
  const items = labels.map((label, row) => {
    const item: Record<string, unknown> = { [LABEL_COLUMN]: label }
    series.forEach((name, column) => (item[name] = value(row, column)))
    return item
  })
  const headers = [LABEL_COLUMN, ...series]
  return { headers, items, rows: items.map(item => headers.map(h => item[h])) }
}

/** Hands out its table; there is nothing to ask and nothing to poll. */
export class AnswerSource implements IDataRetrieveable {
  private readonly subscribers = new Set<() => unknown>()

  constructor(private readonly table: AnswerTable) {}

  async getData(type: string): Promise<AnswerTable | null> {
    return type === 'DataTable' ? this.table : null
  }

  getOriginalData() {
    return this.table
  }

  callEvent() {}

  subscribe = (subscriber: () => unknown) => {
    this.subscribers.add(subscriber)
    return () => this.unsubscribe(subscriber)
  }

  unsubscribe = (subscriber: () => unknown) => {
    this.subscribers.delete(subscriber)
  }

  destroy() {
    this.subscribers.clear()
  }

  startPolling() {}

  stopPolling() {}
}

interface Registry {
  register(id: string, service: unknown): void
  unregister(id: string): void
}

/** The datasource type, for the workbench's frame; the returned function takes it back. */
export function registerAnswerSource(services: Registry, datasources: DatasourceRepository): () => void {
  services.register(ANSWER_SOURCE, (config: { table: AnswerTable }) => new AnswerSource(config.table))
  datasources.registerDatasourceType(ANSWER_TYPE, {
    kind: 'source',
    Store: Symbol.for(ANSWER_SOURCE),
    // Nothing to preview or set: the source exists only behind the chart view.
    Preview: Symbol.for(`${ANSWER_SOURCE}.preview`),
    Settings: Symbol.for(`${ANSWER_SOURCE}.settings`),
  })
  return () => {
    datasources.unregisterDatasourceType(ANSWER_TYPE)
    services.unregister(ANSWER_SOURCE)
  }
}
