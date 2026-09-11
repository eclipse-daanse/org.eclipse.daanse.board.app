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
import { type IDataRetrieveable } from 'org.eclipse.daanse.board.app.lib.datasource.base'
export type { IDataRetrieveable }

/*
 * The contract lives in lib.api.datasource - re-exported here so old
 * import paths keep compiling during the transition.
 */
export type { IDatasourceRepository, DataSourcePlugin, StoreIdentifiers, StoreConstructor } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { IDatasourceRepository, DataSourcePlugin, StoreIdentifiers, StoreConstructor } from 'org.eclipse.daanse.board.app.lib.api.datasource'

const datasources = new Map<string, IDataRetrieveable>()

/**
 * The slice of the service registry a repository needs: resolving the
 * identifiers its type entries carry. Injected through the constructor -
 * the repository names its dependency instead of reaching for a global.
 */
export interface IdentifierResolver {
  getRequired<T>(id: string): T
}

export class DatasourceRepository implements IDatasourceRepository {
  private availableDatasources: Record<string, StoreIdentifiers> = {}
  private datasourcesByType: Record<string, string> = {}

  constructor(private readonly resolver: IdentifierResolver) {}

  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier<T>(identifier: symbol): T {
    return this.resolver.getRequired<T>(identifier.description as string)
  }

  removeDatasource(datasourceId: string): void {
    if (datasources.has(datasourceId)) {
      const datasource = datasources.get(datasourceId)
      console.log(datasource)
      datasource?.destroy()

      datasources.delete(datasourceId)
    }
  }

  getDatasource(datasourceId: string): IDataRetrieveable {
    const datasource = datasources.get(datasourceId)
    if (!datasource) throw new Error(`Store with id ${datasourceId} not found`)

    return datasource
  }

  registerDatasourceType(name: string, identifiers: StoreIdentifiers): void {
    this.availableDatasources[name] = identifiers
  }

  /**
   * Nimmt die Registrierung eines Datenquellen-Typs zurück.
   *
   * Gegenstück zu registerDatasourceType, damit ein Modul seine
   * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
   * Typ; bereits angelegte Instanzen werden über removeDatasource entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterDatasourceType(name: string): boolean {
    if (!(name in this.availableDatasources)) {
      return false
    }
    delete this.availableDatasources[name]
    return true
  }
  getDataSourceTypes() {
    return Object.keys(this.availableDatasources)
  }

  get registeredDatasources(): String[] {
    return Object.keys(this.availableDatasources)
  }

  getDatasourceIdentifiers(type: string): StoreIdentifiers {
    return this.availableDatasources[type]
  }
  registerDatasource(datasourceId: string, type: string, config: any): void {
    const identifiers = this.availableDatasources[type]

    /*
     * Saying so rather than dropping it: the caller asked for a source of
     * this type to exist, and it will not. Every widget reading from it
     * fails later with "Store with id ... not found", far from here.
     */
    if (!identifiers) {
      console.warn(
        `Datasource "${datasourceId}" not registered: no datasource type "${type}". ` +
          `Known types: ${Object.keys(this.availableDatasources).join(', ') || 'none'}`,
      )
      return
    }

    const datasourceFactory = this.resolveIdentifier<(c: unknown) => IDataRetrieveable>(identifiers.Store)
    const datasource = datasourceFactory(config)
    datasources.set(datasourceId, datasource)
    this.datasourcesByType[datasourceId] = type
  }
  getDatasourceType(datasourceId: string) {
    return this.datasourcesByType[datasourceId]
  }
  getDatasourceId(dataSource: IDataRetrieveable) {
    let key: string | undefined
    datasources.forEach((aDataSource, akey) => {
      if (dataSource === aDataSource) {
        key = akey
      }
    })
    return key
  }
  getDatasourceTypeFromDatasource(dataSource: IDataRetrieveable) {
    const id = this.getDatasourceId(dataSource)
    if (!id) return undefined
    return this.getDatasourceType(id)
  }
}
