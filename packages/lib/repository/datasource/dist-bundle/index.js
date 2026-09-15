import { WORKSPACE, DatasourceImpl } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { DATASOURCE_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { DATASOURCE_REPOSITORY as DATASOURCE_REPOSITORY2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.datasource";
function isReconfigurable(store) {
  return typeof store?.init === "function";
}
const datasources = /* @__PURE__ */ new Map();
const DERIVED_SOURCE_TYPES = ["chart", "datatable"];
class DatasourceRepository {
  constructor(resolver) {
    this.resolver = resolver;
  }
  availableDatasources = {};
  datasourcesByType = {};
  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  workspaceHeld;
  get workspace() {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired(WORKSPACE);
    }
    return this.workspaceHeld;
  }
  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier(identifier3) {
    return this.resolver.getRequired(identifier3.description);
  }
  /** Lets go of the live store without touching the workspace. */
  dropLive(datasourceId) {
    const datasource = datasources.get(datasourceId);
    if (!datasource) return;
    datasource.destroy();
    datasources.delete(datasourceId);
    delete this.datasourcesByType[datasourceId];
  }
  /**
   * Takes a source out of the workspace and lets go of its live store.
   *
   * Both halves, because both existed: the live store used to be left
   * registered when a source was deleted, since the removal happened in a
   * store that knew nothing about it.
   */
  removeDatasource(datasourceId) {
    this.dropLive(datasourceId);
    const held = this.workspace.datasources;
    const at = held.toArray().findIndex((source) => source.uid === datasourceId);
    if (at > -1) held.removeAt(at);
  }
  getDatasources() {
    return this.workspace.datasources.toArray();
  }
  getDatasourceModel(datasourceId) {
    return this.getDatasources().find((source) => source.uid === datasourceId);
  }
  createDatasource(type, config = {}) {
    const datasource = new DatasourceImpl();
    datasource.uid = Math.random().toString(36).substring(7);
    datasource.name = "DataSource " + datasource.uid;
    datasource.type = type;
    datasource.config = config;
    this.workspace.datasources.push(datasource);
    try {
      this.saveDatasource(datasource);
    } catch (error) {
      console.warn(`datasource ${datasource.uid} is not live yet:`, error);
    }
    return datasource;
  }
  saveDatasource(datasource) {
    const config = datasource.config ?? {};
    config["uid"] = datasource.uid;
    config["name"] = datasource.name;
    config["type"] = datasource.type;
    if (datasource.connection) config["connection"] = datasource.connection.uid;
    datasource.config = config;
    if (!datasource.type) return;
    const uid = datasource.uid;
    const live = datasources.get(uid);
    if (live && this.datasourcesByType[uid] === datasource.type && isReconfigurable(live)) {
      live.init(config);
      return;
    }
    this.dropLive(uid);
    this.registerDatasource(uid, datasource.type, config);
  }
  /**
   * Builds a live store for every source the workspace holds.
   *
   * Plain sources first: a derived one resolves against the sources it
   * reads while it is being registered, so they have to be there.
   */
  rebuildLive() {
    const held = this.getDatasources();
    for (const source of held) {
      if (!DERIVED_SOURCE_TYPES.includes(source.type)) this.saveDatasource(source);
    }
    for (const source of held) {
      if (DERIVED_SOURCE_TYPES.includes(source.type)) this.saveDatasource(source);
    }
  }
  setDatasources(stored) {
    const held = this.workspace.datasources;
    for (const source of held.toArray()) this.dropLive(source.uid);
    held.clear();
    const connectionOf = (uid) => this.workspace.connections.toArray().find((connection) => connection.uid === uid);
    const build = (entry) => {
      const datasource = new DatasourceImpl();
      datasource.uid = entry.uid;
      datasource.name = entry.name;
      datasource.type = entry.type;
      datasource.config = entry.config ?? {};
      const connection = connectionOf((entry.config ?? {})["connection"]);
      if (connection) datasource.connection = connection;
      held.push(datasource);
      this.saveDatasource(datasource);
    };
    for (const entry of stored) {
      if (!DERIVED_SOURCE_TYPES.includes(entry.type)) build(entry);
    }
    for (const entry of stored) {
      if (DERIVED_SOURCE_TYPES.includes(entry.type)) build(entry);
    }
  }
  getDatasource(datasourceId) {
    const datasource = datasources.get(datasourceId);
    if (!datasource) throw new Error(`Store with id ${datasourceId} not found`);
    return datasource;
  }
  registerDatasourceType(name, identifiers) {
    this.availableDatasources[name] = identifiers;
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
  unregisterDatasourceType(name) {
    if (!(name in this.availableDatasources)) {
      return false;
    }
    delete this.availableDatasources[name];
    return true;
  }
  getDataSourceTypes() {
    return Object.keys(this.availableDatasources);
  }
  get registeredDatasources() {
    return Object.keys(this.availableDatasources);
  }
  getDatasourceIdentifiers(type) {
    return this.availableDatasources[type];
  }
  registerDatasource(datasourceId, type, config) {
    const identifiers = this.availableDatasources[type];
    if (!identifiers) {
      console.warn(
        `Datasource "${datasourceId}" not registered: no datasource type "${type}". Known types: ${Object.keys(this.availableDatasources).join(", ") || "none"}`
      );
      return;
    }
    const datasourceFactory = this.resolveIdentifier(identifiers.Store);
    const datasource = datasourceFactory(config);
    datasources.set(datasourceId, datasource);
    this.datasourcesByType[datasourceId] = type;
  }
  getDatasourceType(datasourceId) {
    return this.datasourcesByType[datasourceId];
  }
  getDatasourceId(dataSource) {
    let key;
    datasources.forEach((aDataSource, akey) => {
      if (dataSource === aDataSource) {
        key = akey;
      }
    });
    return key;
  }
  getDatasourceTypeFromDatasource(dataSource) {
    const id = this.getDatasourceId(dataSource);
    if (!id) return void 0;
    return this.getDatasourceType(id);
  }
}
function activate$1({ services }) {
  services.register(DATASOURCE_REPOSITORY, new DatasourceRepository(services));
}
function deactivate$1({ services }) {
  services.unregister(DATASOURCE_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATASOURCE_REPOSITORY,
  DatasourceRepository,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.datasource";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.datasource");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  DATASOURCE_REPOSITORY2 as DATASOURCE_REPOSITORY,
  DatasourceRepository,
  activate,
  deactivate,
  identifier2 as identifier
};
