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
export type { IDatasourceRepository, DataSourcePlugin, StoreIdentifiers, StoreConstructor, StoredDatasource } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { IDatasourceRepository, DataSourcePlugin, StoreIdentifiers, StoreConstructor, StoredDatasource } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  WORKSPACE,
  DatasourceImpl,
  type Connection,
  type Datasource,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'

/**
 * What a live store needs for its configuration to be applied again.
 *
 * Not on IDataRetrieveable, because reading data and being configured are
 * different things - but every store extends BaseDatasource and has it.
 */
interface Reconfigurable {
  init(config: unknown): void
}

function isReconfigurable(store: unknown): store is Reconfigurable {
  return typeof (store as Reconfigurable)?.init === 'function'
}

const datasources = new Map<string, IDataRetrieveable>()

/**
 * Sources whose input is another source, so they are registered last.
 *
 * Lifted out of the shell's restore, where it lived as a list beside the
 * loop that used it - the ordering is a property of how these sources are
 * built, not of the view that happened to load a board.
 */
const DERIVED_SOURCE_TYPES = ['chart', 'datatable']

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

  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  private workspaceHeld: Workspace | undefined

  private get workspace(): Workspace {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired<Workspace>(WORKSPACE)
    }
    return this.workspaceHeld
  }

  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier<T>(identifier: symbol): T {
    return this.resolver.getRequired<T>(identifier.description as string)
  }

  /** Lets go of the live store without touching the workspace. */
  private dropLive(datasourceId: string): void {
    const datasource = datasources.get(datasourceId)
    if (!datasource) return
    datasource.destroy()
    datasources.delete(datasourceId)
    delete this.datasourcesByType[datasourceId]
  }

  /**
   * Takes a source out of the workspace and lets go of its live store.
   *
   * Both halves, because both existed: the live store used to be left
   * registered when a source was deleted, since the removal happened in a
   * store that knew nothing about it.
   */
  removeDatasource(datasourceId: string): void {
    this.dropLive(datasourceId)

    const held = this.workspace.datasources
    const at = held.toArray().findIndex((source: Datasource) => source.uid === datasourceId)
    if (at > -1) held.removeAt(at)
  }

  getDatasources(): Datasource[] {
    return this.workspace.datasources.toArray()
  }

  getDatasourceModel(datasourceId: string): Datasource | undefined {
    return this.getDatasources().find((source) => source.uid === datasourceId)
  }

  createDatasource(type: string, config: Record<string, unknown> = {}): Datasource {
    const datasource = new DatasourceImpl()
    datasource.uid = Math.random().toString(36).substring(7)
    datasource.name = 'DataSource ' + datasource.uid
    datasource.type = type
    datasource.config = config

    this.workspace.datasources.push(datasource)
    this.saveDatasource(datasource)
    return datasource
  }

  saveDatasource(datasource: Datasource): void {
    const config = (datasource.config ?? {}) as Record<string, unknown>
    config['uid'] = datasource.uid
    config['name'] = datasource.name
    config['type'] = datasource.type
    /*
     * The reference is what the workspace holds; the id in the config is
     * its projection, because that is what a store's own init reads. One
     * direction only - the reference is never derived back from the id.
     */
    if (datasource.connection) config['connection'] = datasource.connection.uid
    datasource.config = config

    /* A source with no type yet is a legitimate half-finished thing. */
    if (!datasource.type) return

    const uid = datasource.uid as string
    const live = datasources.get(uid)

    /*
     * Re-initialised where it stands. Rebuilding used to be the only way a
     * changed setting reached the store, and it took the instance with it:
     * a poll timer, a websocket subscription and everything cached were
     * thrown away on every save. A different type is the one case that
     * genuinely needs another object, because it is another class.
     */
    if (live && this.datasourcesByType[uid] === datasource.type && isReconfigurable(live)) {
      live.init(config)
      return
    }

    this.dropLive(uid)
    this.registerDatasource(uid, datasource.type, config)
  }

  /**
   * Builds a live store for every source the workspace holds.
   *
   * Plain sources first: a derived one resolves against the sources it
   * reads while it is being registered, so they have to be there.
   */
  rebuildLive(): void {
    const held = this.getDatasources()
    for (const source of held) {
      if (!DERIVED_SOURCE_TYPES.includes(source.type as string)) this.saveDatasource(source)
    }
    for (const source of held) {
      if (DERIVED_SOURCE_TYPES.includes(source.type as string)) this.saveDatasource(source)
    }
  }

  setDatasources(stored: StoredDatasource[]): void {
    const held = this.workspace.datasources
    for (const source of held.toArray()) this.dropLive(source.uid as string)
    held.clear()

    const connectionOf = (uid: unknown): Connection | undefined =>
      this.workspace.connections.toArray().find((connection) => connection.uid === uid)

    /*
     * Plain sources first: a derived one resolves against the sources it
     * reads while it is being registered, so they have to be there.
     */
    const build = (entry: StoredDatasource) => {
      const datasource = new DatasourceImpl()
      datasource.uid = entry.uid
      datasource.name = entry.name
      datasource.type = entry.type
      datasource.config = entry.config ?? {}
      const connection = connectionOf((entry.config ?? {})['connection'])
      if (connection) datasource.connection = connection
      held.push(datasource)
      this.saveDatasource(datasource)
    }

    for (const entry of stored) {
      if (!DERIVED_SOURCE_TYPES.includes(entry.type)) build(entry)
    }
    for (const entry of stored) {
      if (DERIVED_SOURCE_TYPES.includes(entry.type)) build(entry)
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

  get registeredDatasources(): string[] {
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
