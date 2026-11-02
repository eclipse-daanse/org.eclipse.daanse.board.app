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

// import { extractDataByPath } from "@/utils/helpers";
import { injectable, inject } from '@eclipse-daanse/tsm'
import { type ConfigurationOf, BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY,
  identifier,
  type IConnection,
  ConnectionRepository,} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { ComputedStoreParameter } from 'org.eclipse.daanse.board.app.lib.variables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { ParseOptions } from 'org.eclipse.daanse.board.app.lib.utils.helpers'

/* The configuration is the model's; see ../gen. */
export type { ICsvStoreConfiguration } from '../gen/ICsvStoreConfiguration'
import type { ICsvStoreConfiguration } from '../gen/ICsvStoreConfiguration'

export interface ICsvParseResult {
  header: string[]
  rows: any[]
  // mappedRows: IDataTableRow[];
  mappedRows: any[]
}

/**
 * What this store asks for.
 *
 * It asked for nothing, so an endpoint serving several representations
 * of one address answered with whichever it prefers - which is JSON
 * often enough that a CSV source pointed at a perfectly good address
 * came back with something it could not parse, and said nothing about
 * why.
 */
const ASKS_FOR_CSV: RequestInit = {
  headers: { Accept: 'text/csv, text/plain;q=0.9, */*;q=0.1' },
}

@injectable()
export class CsvStore extends BaseDatasource {
  private connection: any
  private resourceUrl: ComputedStoreParameter | null = null
  private parseOptions: ParseOptions | null = null
  private skipRowsFromStart: number = 0
  private skipRowsFromEnd: number = 0

  @inject(CONNECTION_REPOSITORY)
  private connectionRepository!: ConnectionRepository

  init(configuration: ConfigurationOf<ICsvStoreConfiguration>) {
    super.init(configuration)

    this.connection = configuration.connection
    this.parseOptions = {
      /*
       * Left out entirely when the configuration names none: the parser
       * falls back to a comma through a default parameter, and a default
       * parameter only fires on undefined. An empty list would be taken as
       * "split on nothing" and put every line in one column.
       *
       * A many-valued feature is an EList on the model and a plain array in
       * a stored board; both are iterable.
       */
      separators: configuration.separators
        ? Array.from(configuration.separators)
        : undefined,
    }
    this.skipRowsFromStart = configuration.skipRowsFromStart ?? 0
    this.skipRowsFromEnd = configuration.skipRowsFromEnd ?? 0

    this.resourceUrl = super.initVariable(configuration.resourceUrl ?? '')
    this.pollingInterval = configuration.pollingInterval ?? 5000
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval)
    }
  }

  /*
   * One read and one parse, shared by whatever asks for it while it runs.
   *
   * getData and getOriginalData each fetched the text and each ran the
   * whole parse over it, and a preview calls both. The connection answers
   * the second fetch from the one in flight, so there was one request -
   * and two full parses. Measured on 0.92 MB and 20,000 rows: 402 ms for
   * one opening, of which 179 ms was a single read and parse.
   *
   * Held only while it is in flight. What stays good for how long is the
   * connection's business, and a poll that comes round again wants a new
   * answer, not this one.
   */
  private reading?: { key: string; answer: Promise<ICsvParseResult | undefined> }

  private read(skipStart: number, skipEnd: number): Promise<ICsvParseResult | undefined> {
    /* Keyed by what was asked for: skipping rows makes a different answer
      out of the same text, so those two are not one another's. */
    const key = `${this.resourceUrl?.value ?? ''}|${skipStart}|${skipEnd}`
    if (this.reading?.key === key) return this.reading.answer

    const answer = this.readAndParse(skipStart, skipEnd)
    this.reading = { key, answer }
    void answer
      .catch(() => undefined)
      .then(() => {
        if (this.reading?.answer === answer) this.reading = undefined
      })
    return answer
  }

  private async readAndParse(
    skipStart: number,
    skipEnd: number,
  ): Promise<ICsvParseResult | undefined> {
    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({ url: this.resourceUrl?.value || '' }, ASKS_FOR_CSV)
    if (!req.ok) return undefined

    let text = await req.text()

    // Apply row skipping BEFORE parsing
    if (skipStart > 0 || skipEnd > 0) {
      const lines = text.split('\n')
      const endIndex = skipEnd > 0 ? lines.length - skipEnd : lines.length
      text = lines.slice(skipStart, endIndex).join('\n')
    }

    return helpers.csv.parse(text, this.parseOptions || {})
  }

  async getOriginalData(): Promise<any> {
    const data = await this.read(0, 0)
    if (!data) return []
    return data
  }

  async getData(type: string): Promise<any> {
    const parsed = await this.read(this.skipRowsFromStart, this.skipRowsFromEnd)
    if (!parsed) return null

    /* Built rather than written into: with no rows skipped this is the
      same parse getOriginalData was given, and trimming it in place would
      trim what the other reader is holding. */
    const trim = (value: any) => (typeof value === 'string' ? value.trim() : value)

    const data: ICsvParseResult = {
      header: parsed.header.map(trim),
      rows: parsed.rows.map((row: any) => row.map(trim)),
      mappedRows: parsed.mappedRows.map((row: any) => {
        const trimmedRow: any = {}
        for (const [key, value] of Object.entries(row)) {
          trimmedRow[trim(key)] = trim(value)
        }
        return trimmedRow
      }),
    }

    if (type === 'DataTable') {
      return {
        headers: data.header,
        items: data.mappedRows,
        rows: data.rows,
      }
    }
    if (type == 'string') {
      return JSON.stringify(data)
    } else {
      console.warn('Invalid data type')
      return null
    }
  }

  callEvent(event: string, params: any) {
    console.warn(
      `Event "${event}" is not available for this type of store`,
      params,
    )
  }

  destroy(): void {
    this.stopPolling()
  }

  static validateConfiguration(configuration: ICsvStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    if (!configuration.resourceUrl) {
      return false
    }

    return true
  }
}
