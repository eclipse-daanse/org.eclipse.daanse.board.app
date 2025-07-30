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

import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { inject } from 'inversify'

export interface IKpiStoreConfiguration extends IBaseConnectionConfiguration {
  connection: string
  kpis: any[]
  pollingInterval?: number
  name: string
  type: string
  uid: string
}

export class KpiStore extends BaseDatasource {
  private connection: any
  private kpis: any[] = []
  // private computedUrl: ComputedVariable;

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IKpiStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection
    this.kpis = configuration.kpis
  }

  async getData(type: string): Promise<any> {
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as any

      let { kpis } = await connection.getKpis()
      kpis = kpis.filter((kpi: any) =>
        this.kpis.some((k: any) => k === kpi.KPI_NAME),
      )
      return this.getKpiData(kpis)
    } catch (e: any) {
      console.warn('Error retriving selected kpis', e.name)
      return null
    }
  }

  async getOriginalData() {
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as any

      const { kpis } = await connection.getKpis()
      console.log('Retrieved KPIs:', kpis)
      return this.getKpiData(kpis)
    } catch (e: any) {
      console.warn('Error retriving all kpis', e.name)
      return null
    }
  }

  private async getKpiData(kpis: any[]): Promise<any> {
    let response = null

    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as any

      // TODO: MAYBE SWITH TO GUID
      if (kpis.length > 0) {
        let withPart = 'WITH '

        const kpiSets = kpis
          .map((kpi, index) => {
            return `
            MEMBER [Measures].[${kpi.KPI_NAME}_Value] AS ${kpi.KPI_VALUE}
            MEMBER [Measures].[${kpi.KPI_NAME}_Goal] AS ${kpi.KPI_GOAL}
            MEMBER [Measures].[${kpi.KPI_NAME}_Status] AS ${kpi.KPI_STATUS}
            MEMBER [Measures].[${kpi.KPI_NAME}_Trend] AS ${kpi.KPI_TREND}`
          })
          .join('\n')

        withPart += kpiSets

        // Create the measures to select
        const measures = kpis
          .map((kpi, index) => {
            return `[Measures].[${kpi.KPI_NAME}_Value], [Measures].[${kpi.KPI_NAME}_Goal], [Measures].[${kpi.KPI_NAME}_Status], [Measures].[${kpi.KPI_NAME}_Trend]`
          })
          .join(', ')

        const mdxQuery = `
          ${withPart}
          SELECT {${measures}} ON COLUMNS FROM [${connection.cubeName}]
        `

        const mdxResponse = await connection.fetch({
          data: { mdx: mdxQuery },
          format: 'Tabular',
        })

        const rowset = mdxResponse.Body?.ExecuteResponse?.return?.root?.row

        // Transform the response to have one row per KPI
        if (rowset) {
          const kpiResults = kpis.map((kpi, index) => {
            // Find the keys in the rowset that correspond to this KPI
            const valueKey = findMatchingKey(rowset, `${kpi.KPI_NAME}_Value`)
            const goalKey = findMatchingKey(rowset, `${kpi.KPI_NAME}_Goal`)
            const statusKey = findMatchingKey(rowset, `${kpi.KPI_NAME}_Status`)
            const trendKey = findMatchingKey(rowset, `${kpi.KPI_NAME}_Trend`)

            return {
              name: kpi.KPI_NAME || `KPI ${index}`,
              caption: kpi.KPI_CAPTION || `KPI Caption ${index}`,
              value: valueKey ? rowset[valueKey] : null,
              goal: goalKey ? rowset[goalKey] : null,
              status: statusKey ? rowset[statusKey] : null,
              trend: trendKey ? rowset[trendKey] : null,
            }
          })

          response = this.parseToDataTable(kpiResults)
        }
      }
    } catch (e: any) {
      console.log(e)
      console.warn('Invalid resource URL', e.name)
    }
    return response
  }

  // parseToDataTable(mdxResponce: any): any {
  //   return parseRequestToTable(mdxResponce, 0)
  // }
  parseToDataTable(data: any): any {
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] }

    const headers: string[] = ['index']
    const rows: any[] = []

    console.log('Data:', data)
    const items = data.map((item: any, index: number) => {
      console.log('Item:', item)
      if (typeof item !== 'object') return {}

      const row: any = {
        index,
      }

      for (const key in item) {
        if (typeof item[key] === 'object' || Array.isArray(item[key])) continue

        if (!headers.includes(key)) {
          headers.push(key)
        }

        row[key] = item[key]
      }

      return row
    })

    items.forEach((item: any, index: number) => {
      rows[index] = []

      headers.forEach((header: string) => {
        rows[index].push(item[header])
      })
    })

    return { items, headers, rows }
  }

  callEvent(event: string, params: any) {
    console.warn(
      `Event "${event}" is not available for this type of store`,
      params,
    )
  }

  destroy(): void {}

  static validateConfiguration(configuration: IKpiStoreConfiguration) {
    // if (!configuration.connection) {
    //   return false
    // }

    return true
  }
}

// Helper function to find the correct key in the rowset regardless of escaping
function findMatchingKey(obj: any, targetKey: string): string | null {
  // Direct match first
  if (obj.hasOwnProperty(targetKey)) {
    return targetKey
  }

  // Look for XML-escaped variants
  for (const key in obj) {
    // Convert both to lowercase for case-insensitive comparison
    // and remove any XML escape sequences
    const normalizedKey = key
      .replace(/_x([0-9a-fA-F]{4})_/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
      .toLowerCase()

    const normalizedTarget = targetKey.toLowerCase()

    if (normalizedKey.includes(normalizedTarget)) {
      return key
    }
  }

  return null
}
