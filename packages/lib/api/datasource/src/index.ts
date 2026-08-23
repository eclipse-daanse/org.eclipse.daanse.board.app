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

/**
 * The datasource contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { IDataRetrieveable } from 'org.eclipse.daanse.board.app.lib.datasource.base'

export type { IDataRetrieveable }

export interface IDatasourceRepository {
    getDatasource(datasourceName: string): IDataRetrieveable;
    registerDatasource(datasourceName: string, type: string, config: any): void;
}

export interface DataSourcePlugin<T> {
    Preview: any;
    Settings: any;
    Store: StoreConstructor<T>;
    Identifiers: StoreIdentifiers;
    Name: string;
}

export interface StoreIdentifiers {
    Store: symbol;
    Preview: symbol;
    Settings: symbol;
}

export interface StoreConstructor<T> {
    new (config: any): T;
    validateConfiguration: (config: any) => boolean;
}

export interface DatasourceRepository {
  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier<T>(identifier: symbol): T;
  removeDatasource(datasourceId: string): void;
  getDatasource(datasourceId: string): IDataRetrieveable;
  registerDatasourceType(name: string, identifiers: StoreIdentifiers): void;
  /**
  * Nimmt die Registrierung eines Datenquellen-Typs zurück.
  *
  * Gegenstück zu registerDatasourceType, damit ein Modul seine
  * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
  * Typ; bereits angelegte Instanzen werden über removeDatasource entfernt.
  *
  * @returns ob der Typ registriert war
  */
  unregisterDatasourceType(name: string): boolean;
  getDataSourceTypes(): string[];
  get registeredDatasources(): String[];
  getDatasourceIdentifiers(type: string): StoreIdentifiers;
  registerDatasource(datasourceId: string, type: string, config: any): void;
  getDatasourceType(datasourceId: string): string;
  getDatasourceId(dataSource: IDataRetrieveable): string | undefined;
  getDatasourceTypeFromDatasource(dataSource: IDataRetrieveable): string | undefined;
}

export interface IdentifierResolver {
    getRequired<T>(id: string): T;
}

export const DATASOURCE_REPOSITORY = serviceId<DatasourceRepository>('DatasourceRepository')
export const identifier = Symbol.for(DATASOURCE_REPOSITORY)
