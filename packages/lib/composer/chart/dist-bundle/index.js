import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.datasource";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
class ChartComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    this.datasourceRepository = datasourceRepository;
  }
  destroy() {
    console.log("Destroying ChartComposer");
  }
  connectedDatasources = [];
  composeBy = "";
  usedSets = [];
  labelColumn = "";
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
    this.usedSets = configuration.usedSets;
    this.labelColumn = configuration.labelColumn;
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
    } else if (type === "ChartData") {
      const composedData = this.composeArrays(data);
      return this.parseToChartData(composedData);
    } else {
      console.warn("Invalid data type");
      return null;
    }
  }
  async getOriginalData() {
    return [];
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for this type of store`, params);
  }
  static async getHeaders(connectedDatasources, datasourceRepository) {
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
      items: []
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
  parseToChartData(data) {
    const chartData = {};
    chartData.labels = data.items.map((e) => e[this.labelColumn]);
    chartData.datasets = this.usedSets.map((set) => {
      return {
        label: set,
        data: data.items.map((e) => --e[set]),
        backgroundColor: "red"
      };
    });
    return chartData;
  }
  static validateConfiguration(config) {
    if (!config.connectedDatasources || !config.labelColumn || !config.usedSets || !config.composeBy) return false;
    return true;
  }
}
const CHART_COMPOSER = serviceId("ChartComposer");
const symbol = Symbol.for(CHART_COMPOSER);
function createChartComposer(repository) {
  return (config) => {
    if (!ChartComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid ChartComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new ChartComposer(repository);
    composer.init(config);
    return composer;
  };
}
function activate$1({ services }) {
  services.register(CHART_COMPOSER, createChartComposer(services.getRequired(DATASOURCE_REPOSITORY)));
}
function deactivate$1({ services }) {
  services.unregister(CHART_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CHART_COMPOSER,
  ChartComposer,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.chart";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.chart");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  CHART_COMPOSER,
  ChartComposer,
  activate,
  deactivate,
  symbol
};
