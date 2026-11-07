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

import { serviceId, type DataShape } from 'org.eclipse.daanse.board.app.lib.core'
import type { IDataRetrieveable } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import type { Datasource } from 'org.eclipse.daanse.board.app.lib.model.workspace'

export type { IDataRetrieveable }
export type { Datasource }

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

/**
 * One of the views a type brings, beside its settings.
 *
 * A type used to get exactly one - the preview - and a type with more
 * than one thing to show had to fold them into it and draw tabs of its
 * own inside, which is two rows of tabs above each other (#1178).
 */
export interface StoreView {
    /** What the tab is addressed by, and what the editor keeps in `view`. */
    id: string;
    /** A translation key, namespaced as the type's own texts are. */
    label: string;
    component: symbol;
}

export interface StoreIdentifiers {
    Store: symbol;
    /**
     * The shapes this type's stores answer in `getData(type)`.
     *
     * The other half of what a widget declares it reads: whether a widget
     * fits a source is whether the two overlap, and until this was written
     * down the question could only be answered by a hand-kept table of
     * source types that nothing read and that disagreed with both ends
     * (#1183).
     *
     * Optional, so a type that has not said yet is not mistaken for one
     * that answers nothing - it is simply not offered.
     */
    answers?: DataShape[];
    /**
     * The one view a type has when it declares no others.
     *
     * Ignored where `Views` is given: a type that says what its views are
     * says all of them.
     */
    Preview: symbol;
    Settings: symbol;
    /**
     * The views this type brings, in the order they are shown.
     *
     * The settings tab is appended by whoever renders these, because
     * every type has settings and none has to say so.
     */
    Views?: StoreView[];
    /**
     * The symbol this type wears in lists - a Material Symbols name.
     *
     * What a connection or source carries itself wins; this is what stands
     * there until somebody picks one, so a fresh workspace still reads as
     * more than rows of text.
     */
    icon?: string;
    /**
     * What this type is, for the places that list types.
     *
     * A composer reads from other data sources rather than from an endpoint
     * of its own, which makes it a different thing to pick even though it
     * registers the same way. Absent means a plain source.
     */
    kind?: 'source' | 'composer';
    /**
     * The connection types this source can read through.
     *
     * A hint, not a rule: the list a person picks from puts these first and
     * still offers the rest, because a connection nobody anticipated may
     * well answer - and being unable to choose it would be worse than
     * choosing badly.
     */
    connections?: string[];
    /**
     * The type's .ecore file, as text.
     *
     * What a field is for is written in the model as a GenModel
     * `documentation` annotation, and the code generator drops it. Handing
     * the model over here is what lets a form explain itself - see
     * modelDocs in ui.vue.composables. Optional: a type without a model
     * still registers, it just has nothing to say about its fields.
     */
    Model?: string;
    /**
     * The language-pack namespace that names this type's fields.
     *
     * A form looks up `<namespace>:Fields.<feature>` for a field's label and
     * `<namespace>:Hints.<feature>` for the sentence under it, and falls back
     * to the model's own name and documentation - which are English, and
     * stay English in a German UI unless a pack says otherwise.
     */
    namespace?: string;
    /**
     * Where the answers to a field come from, when the endpoint knows them.
     *
     * Keyed by feature name. Given the settings filled in so far - the
     * connection's uid among them - it answers the values to pick from, so
     * a form can offer the cubes a connection has instead of a text box
     * that has to be typed exactly right. A form that gets nothing back
     * still asks for the field as text.
     */
    choices?: Record<string, (settings: Record<string, unknown>) => Promise<FieldChoice[]>>;
}

/** One answer a field can take, as a form offers it. */
export interface FieldChoice {
    label: string;
    value: string;
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
  get registeredDatasources(): string[];
  /**
   * Subscribes to type registrations and their withdrawal; returns the
   * unsubscribe function. A type's bundle may activate after whoever lists
   * the types has already looked.
   */
  onChange(listener: () => void): () => void;
  getDatasourceIdentifiers(type: string): StoreIdentifiers;
  registerDatasource(datasourceId: string, type: string, config: any): void;
  getDatasourceType(datasourceId: string): string;

  /*
   * The modelled side. A data source is an object in the workspace; the
   * live store that fetches for it is built from it and kept beside it.
   */

  /** The data sources the workspace holds, in order. */
  getDatasources(): Datasource[];
  /** One of them, or nothing if no source carries that uid. */
  getDatasourceModel(datasourceId: string): Datasource | undefined;
  /** Adds one to the workspace and builds its live store. */
  createDatasource(type: string, config?: Record<string, unknown>): Datasource;
  /**
   * Applies a changed source to its live store.
   *
   * Re-initialises the store that is already there rather than destroying
   * it and building another, so a subscription, a poll timer or a cache
   * survives an edit. Only a changed type gets a new store, because a
   * different type is a different class.
   */
  saveDatasource(datasource: Datasource): void;
  /** Builds a live store for every source the workspace holds. */
  rebuildLive(): void;
  /**
   * Replaces every data source at once - what loading a stored workspace
   * does. Takes plain objects because that is the shape a stored board
   * holds; each becomes a modelled source with its live store.
   */
  setDatasources(datasources: StoredDatasource[]): void;
  getDatasourceId(dataSource: IDataRetrieveable): string | undefined;
  getDatasourceTypeFromDatasource(dataSource: IDataRetrieveable): string | undefined;
}

export interface IdentifierResolver {
    getRequired<T>(id: string): T;
}

export const DATASOURCE_REPOSITORY = serviceId<DatasourceRepository>('DatasourceRepository')
export const identifier = Symbol.for(DATASOURCE_REPOSITORY)

/** A data source as a stored board writes it. */
export interface StoredDatasource {
  uid: string;
  name: string;
  type: string;
  config?: Record<string, unknown>;
}

/**
 * The shape name a source answers in `getData` when it can say for which
 * stretches of time it holds data (#1279).
 */
export const TIME_COVERAGE = 'TimeCoverage'

/** One stretch of time with data, as ISO 8601 instants. */
export interface TimeInterval {
  start: string;
  end: string;
}

/**
 * For which stretches of time one series of a source holds data.
 *
 * A source that knows only the outer limits gives one interval; one that
 * knows its gaps gives several.
 */
export interface TimeCoverageSeries {
  id: string;
  label?: string;
  /** The colour the source gives this series, if any. */
  color?: string;
  intervals: TimeInterval[];
  /**
   * How many values fall into each of the requested buckets, in their
   * order - only when buckets were asked for (#1280). A bucket with none
   * is a gap.
   */
  bins?: number[];
}

/** What `getData('TimeCoverage')` answers. */
export interface TimeCoverage {
  series: TimeCoverageSeries[];
}

/**
 * The options of `getData('TimeCoverage', options)`.
 *
 * Without buckets a source answers the outer intervals only, which is
 * cheap. With them it also counts the values in each bucket.
 */
export interface TimeCoverageRequest {
  buckets?: TimeInterval[];
  signal?: AbortSignal;
}
