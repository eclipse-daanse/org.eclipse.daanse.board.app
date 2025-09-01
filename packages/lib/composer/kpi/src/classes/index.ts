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

import { inject, injectable } from 'inversify'
import { BaseDatasource, type IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  DatasourceRepository,
  identifier
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

export interface IKpiComposerConfiguration extends IBaseConnectionConfiguration {
  connectedDatasources?: string[]
}

@injectable()
export class KpiComposer extends BaseDatasource {
  private configuration!: IKpiComposerConfiguration
  private connectedDatasources: string[] = []
  public static availableTypes = ["KPI"];

  init(configuration: IKpiComposerConfiguration) {
    this.configuration = configuration
    this.connectedDatasources = configuration.connectedDatasources || []
  }

  async getData(type: string): Promise<any> {
    if (this.connectedDatasources.length === 0) return []

    const datasourceRepository = container.get(identifier) as DatasourceRepository

    const dataPromises = this.connectedDatasources
      .filter((datasourceId) => datasourceId)
      .map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error('DatasourceRepository is not provided to DataSource Classes')
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId)
        return await datasourceInstance.getOriginalData()
      })

    const datasourceResults = await Promise.all(dataPromises)
    console.log('Datasource results:', datasourceResults)
    const mergedData = this.mergeKpiData(datasourceResults)
    console.log('Merged KPI data:', mergedData)

    // if (type === 'KPI') {
    //   return this.compose(mergedData)
    // }

    return mergedData
  }

  async getOriginalData() {
    return this.getData('KPI')
  }

  private mergeKpiData(dataArrays: any[]): any[] {
    const merged: any[] = []
    const folderMap = new Map<string, any>()

    dataArrays.forEach(data => {
      if (Array.isArray(data)) {
        data.forEach(item => {
        console.log('Processing item:', item)
          if (item.type === 'Folder') {
            // Merge folders with same displayFolder
            const folderKey = item.displayFolder || item.name || 'Default'
            if (folderMap.has(folderKey)) {
              const existingFolder = folderMap.get(folderKey)
              existingFolder.children = [...(existingFolder.children || []), ...(item.children || [])]
            } else {
              folderMap.set(folderKey, { ...item })
              merged.push(item)
            }
          } else {
            // Handle KPI items
            if (item.displayFolder && typeof item.displayFolder === 'string' && item.displayFolder.trim() !== '') {
              // Find or create folder for this KPI
              let folder = Array.from(folderMap.values()).find(f => f.displayFolder === item.displayFolder)
              if (!folder) {
                folder = {
                  type: 'Folder',
                  name: item.displayFolder,
                  displayFolder: item.displayFolder,
                  children: []
                }
                folderMap.set(item.displayFolder, folder)
                merged.push(folder)
              }
              folder.children.push(item)
            } else {
              // Add KPI directly to root
              merged.push(item)
            }
          }
        })
      }
    })

    return merged
  }

  callEvent(event: string, params: any) {
    console.warn(`Event "${event}" is not available for this type of store`, params)
  }

  destroy(): void {
    this.stopPolling()
  }

  static validateConfiguration(configuration: IKpiComposerConfiguration): boolean {
    if (typeof configuration !== 'object' || configuration === null) {
      return false
    }

    if (configuration.connectedDatasources !== undefined && !Array.isArray(configuration.connectedDatasources)) {
      return false
    }

    return true
  }
}
