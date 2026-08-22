const datasources = /* @__PURE__ */ new Map();
class DatasourceRepository {
  constructor(resolver) {
    this.resolver = resolver;
  }
  availableDatasources = {};
  datasourcesByType = {};
  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier(identifier2) {
    return this.resolver.getRequired(identifier2.description);
  }
  removeDatasource(datasourceId) {
    if (datasources.has(datasourceId)) {
      const datasource = datasources.get(datasourceId);
      console.log(datasource);
      datasource?.destroy();
      datasources.delete(datasourceId);
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
    if (identifiers) {
      const datasourceFactory = this.resolveIdentifier(identifiers.Store);
      const datasource = datasourceFactory(config);
      datasources.set(datasourceId, datasource);
      this.datasourcesByType[datasourceId] = type;
    }
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
const DATASOURCE_REPOSITORY = "DatasourceRepository";
const identifier = Symbol.for(DATASOURCE_REPOSITORY);
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
  DATASOURCE_REPOSITORY,
  DatasourceRepository,
  activate,
  deactivate,
  identifier
};
