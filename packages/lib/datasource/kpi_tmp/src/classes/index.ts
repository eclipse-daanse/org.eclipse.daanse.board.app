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

  private generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      },
    )
  }

  private async getKpiData(kpis: any[]): Promise<any> {
    let response = null

    try {
      const connection = this.connectionRepository.getConnection(
        this.connection,
      ) as any
      const cube = connection.cubeName

      kpis = kpis.filter(kpi => kpi.CUBE_NAME === cube)

      kpis.forEach(kpi => {
        if (!kpi.KPI_GUID) {
          kpi.KPI_GUID = `${kpi.KPI_NAME}_${this.generateGuid()}`
        }
      })

      if (kpis.length > 0) {
        let withPart = 'WITH '

        const kpiSets = kpis
          .map((kpi, index) => {
            let members = []

            members.push(
              `MEMBER [Measures].[${kpi.KPI_GUID}_Value] AS ${kpi.KPI_VALUE}`,
            )

            if (kpi.KPI_GOAL) {
              members.push(
                `MEMBER [Measures].[${kpi.KPI_GUID}_Goal] AS ${kpi.KPI_GOAL}`,
              )
            }

            if (kpi.KPI_STATUS) {
              members.push(
                `MEMBER [Measures].[${kpi.KPI_GUID}_Status] AS ${kpi.KPI_STATUS}`,
              )
            }

            if (kpi.KPI_TREND) {
              members.push(
                `MEMBER [Measures].[${kpi.KPI_GUID}_Trend] AS ${kpi.KPI_TREND}`,
              )
            }

            return members.join('\n            ')
          })
          .join('\n')

        withPart += kpiSets

        const measures = kpis
          .map((kpi, index) => {
            let measuresList = [`[Measures].[${kpi.KPI_GUID}_Value]`]

            if (kpi.KPI_GOAL) {
              measuresList.push(`[Measures].[${kpi.KPI_GUID}_Goal]`)
            }

            if (kpi.KPI_STATUS) {
              measuresList.push(`[Measures].[${kpi.KPI_GUID}_Status]`)
            }

            if (kpi.KPI_TREND) {
              measuresList.push(`[Measures].[${kpi.KPI_GUID}_Trend]`)
            }

            return measuresList.join(', ')
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
            const valueKey = findMatchingKey(rowset, `${kpi.KPI_GUID}_Value`)
            const goalKey = kpi.KPI_GOAL
              ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Goal`)
              : null
            const statusKey = kpi.KPI_STATUS
              ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Status`)
              : null
            const trendKey = kpi.KPI_TREND
              ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Trend`)
              : null

            return {
              name: kpi.KPI_NAME || `KPI ${index}`,
              caption: kpi.KPI_CAPTION || `KPI Caption ${index}`,
              displayFolder: kpi.KPI_DISPLAY_FOLDER || '',
              value: valueKey ? rowset[valueKey] : null,
              goal: goalKey ? rowset[goalKey] : null,
              status: statusKey ? rowset[statusKey] : null,
              trend: trendKey ? rowset[trendKey] : null,
              parentKpiName: kpi.KPI_PARENT_KPI_NAME || null,
              type: 'KPI',
              children: [],
            }
          })
          response = this.parseToKpiTable(kpiResults)
        }
      }
    } catch (e: any) {
      console.log(e)
      console.warn('Invalid resource URL', e.name)
    }
    return response
  }

  parseToKpiTable(data: any[]): any[] {
    if (!Array.isArray(data)) return []

    const result: any[] = []
    const folderMap: Map<string, any> = new Map()
    const kpiMap: Map<string, any> = new Map()

    // First pass: create all KPI nodes and organize by display folder
    data.forEach((kpi: any) => {
      kpiMap.set(kpi.name, kpi)

      const displayFolder = kpi.displayFolder || ''

      if (!displayFolder || typeof displayFolder !== 'string') {
        result.push(kpi)
      } else {
        const folders = displayFolder
          .split('\\')
          .filter((f: string) => f.trim())

        if (folders.length === 0) {
          result.push(kpi)
          return
        }

        let currentPath = ''
        let currentLevel = result

        folders.forEach((folderName: string, index: number) => {
          currentPath = currentPath
            ? `${currentPath}\\${folderName}`
            : folderName

          let folder = currentLevel.find(
            (item: any) => item.type === 'Folder' && item.name === folderName,
          )

          if (!folder) {
            folder = {
              type: 'Folder',
              name: folderName,
              children: [],
            }
            currentLevel.push(folder)
            folderMap.set(currentPath, folder)
          }

          currentLevel = folder.children
        })

        currentLevel.push(kpi)
      }
    })

    data.forEach((kpi: any) => {
      if (kpi.parentKpiName) {
        const parentKpi = kpiMap.get(kpi.parentKpiName)
        const childKpi = kpiMap.get(kpi.name)

        if (parentKpi && childKpi) {
          parentKpi.children.push(childKpi)
          childKpi.added = true
        }
      }
    })

    return result.filter(kpi => !kpi.added)
  }

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
