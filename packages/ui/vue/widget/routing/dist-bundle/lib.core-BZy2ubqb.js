const { container } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const datasources = /* @__PURE__ */ new Map();
class DatasourceRepository {
  constructor() {
    __publicField(this, "availableDatasources", {});
    __publicField(this, "datasourcesByType", {});
  }
  removeDatasource(datasourceId) {
    if (datasources.has(datasourceId)) {
      const datasource = datasources.get(datasourceId);
      console.log(datasource);
      datasource == null ? void 0 : datasource.destroy();
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
      const datasourceFactory = container.get(identifiers.Store);
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
export {
  DATASOURCE_REPOSITORY,
  DatasourceRepository,
  identifier
};
