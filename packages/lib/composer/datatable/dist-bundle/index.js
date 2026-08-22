const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
class DataTableComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    this.datasourceRepository = datasourceRepository;
  }
  destroy() {
    console.log("Destroying DataTableComposer");
  }
  connectedDatasources = [];
  composeBy = "";
  // TODO: find a better way to do this
  static availableTypes = ["rest", "csv", "xmla"];
  init(configuration) {
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    const updateFn = async () => {
      await this.getData("DataTable");
      this.notify();
    };
    const datasourceRepository = this.datasourceRepository;
    this.connectedDatasources.filter((datasourceId) => datasourceId).forEach(function(ds) {
      const datasource = datasourceRepository.getDatasource(ds);
      datasource.subscribe(updateFn);
    });
    this.composeBy = configuration.composeBy;
  }
  async getData(type) {
    if (!this.composeBy) return null;
    const datasourceRepository = this.datasourceRepository;
    const data = await Promise.all(
      this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    if (type === "DataTable") {
      return this.composeArrays(data);
    } else {
      console.warn("Invalid data type");
      return;
    }
  }
  async getOriginalData() {
    return [];
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for this type of store`, params);
  }
  static async getHeaders(connectedDatasources, datasourceRepository) {
    console.log("Composing headers from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
  }
  composeArrays(data) {
    const resultingDataTable = {
      headers: [],
      rows: [],
      items: [],
      rowProperties: {}
    };
    const rowMap = /* @__PURE__ */ new Map();
    data.forEach((table) => {
      table.items.forEach((row) => {
        const key = row[this.composeBy];
        if (!rowMap.has(key)) {
          rowMap.set(key, {});
        }
        rowMap.set(key, {
          ...rowMap.get(key),
          ...row
        });
      });
      Object.keys(table.rowProperties).forEach((key) => {
        const prop = table.rowProperties[key];
        resultingDataTable.rowProperties[key] = {
          ...resultingDataTable.rowProperties[key],
          ...prop
        };
      });
    });
    resultingDataTable.items = Array.from(rowMap.values());
    resultingDataTable.headers = data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
    const rows = [];
    resultingDataTable.items.forEach((row) => {
      const newRow = resultingDataTable.headers.map((header) => {
        return row[header];
      });
      rows.push(newRow);
    });
    resultingDataTable.rows = rows;
    return resultingDataTable;
  }
  static validateConfiguration(config) {
    if (!config.connectedDatasources) return false;
    return true;
  }
}
const DATA_TABLE_COMPOSER = "DataTableComposer";
const symbol = Symbol.for(DATA_TABLE_COMPOSER);
function createDataTableComposer(repository) {
  return (config) => {
    if (!DataTableComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid DataTableComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new DataTableComposer(repository);
    composer.init(config);
    return composer;
  };
}
function activate$1({ services }) {
  services.register(DATA_TABLE_COMPOSER, createDataTableComposer(services.getRequired("DatasourceRepository")));
}
function deactivate$1({ services }) {
  services.unregister(DATA_TABLE_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATA_TABLE_COMPOSER,
  DataTableComposer,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.datatable";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.datatable");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  DATA_TABLE_COMPOSER,
  DataTableComposer,
  activate,
  deactivate,
  symbol
};
