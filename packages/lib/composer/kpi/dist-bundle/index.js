import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class KpiComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    this.datasourceRepository = datasourceRepository;
  }
  configuration;
  connectedDatasources = [];
  static availableTypes = ["KPI"];
  init(configuration) {
    this.configuration = configuration;
    this.connectedDatasources = configuration.connectedDatasources || [];
  }
  async getData(type) {
    if (this.connectedDatasources.length === 0) return [];
    const datasourceRepository = this.datasourceRepository;
    const dataPromises = this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
      if (!datasourceRepository) {
        throw new Error("DatasourceRepository is not provided to DataSource Classes");
      }
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
      return await datasourceInstance.getOriginalData();
    });
    const datasourceResults = await Promise.all(dataPromises);
    console.log("Datasource results:", datasourceResults);
    const mergedData = this.mergeKpiData(datasourceResults);
    console.log("Merged KPI data:", mergedData);
    return mergedData;
  }
  async getOriginalData() {
    return this.getData("KPI");
  }
  mergeKpiData(dataArrays) {
    const merged = [];
    const folderMap = /* @__PURE__ */ new Map();
    dataArrays.forEach((data) => {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          console.log("Processing item:", item);
          if (item.type === "Folder") {
            const folderKey = item.displayFolder || item.name || "Default";
            if (folderMap.has(folderKey)) {
              const existingFolder = folderMap.get(folderKey);
              existingFolder.children = [...existingFolder.children || [], ...item.children || []];
            } else {
              folderMap.set(folderKey, { ...item });
              merged.push(item);
            }
          } else {
            if (item.displayFolder && typeof item.displayFolder === "string" && item.displayFolder.trim() !== "") {
              let folder = Array.from(folderMap.values()).find((f) => f.displayFolder === item.displayFolder);
              if (!folder) {
                folder = {
                  type: "Folder",
                  name: item.displayFolder,
                  displayFolder: item.displayFolder,
                  children: []
                };
                folderMap.set(item.displayFolder, folder);
                merged.push(folder);
              }
              folder.children.push(item);
            } else {
              merged.push(item);
            }
          }
        });
      }
    });
    return merged;
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for this type of store`, params);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(configuration) {
    if (typeof configuration !== "object" || configuration === null) {
      return false;
    }
    if (configuration.connectedDatasources !== void 0 && !Array.isArray(configuration.connectedDatasources)) {
      return false;
    }
    return true;
  }
}
const KPI_COMPOSER = serviceId("KpiComposer");
const symbol = Symbol.for(KPI_COMPOSER);
function createKpiComposer(repository) {
  return (config) => {
    if (!KpiComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid KpiComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new KpiComposer(repository);
    composer.init(config);
    return composer;
  };
}
function activate$1({ services }) {
  services.register(KPI_COMPOSER, createKpiComposer(services.getRequired(DATASOURCE_REPOSITORY)));
}
function deactivate$1({ services }) {
  services.unregister(KPI_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KPI_COMPOSER,
  KpiComposer,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.kpi";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.kpi");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  KPI_COMPOSER,
  KpiComposer,
  activate,
  deactivate,
  symbol
};
