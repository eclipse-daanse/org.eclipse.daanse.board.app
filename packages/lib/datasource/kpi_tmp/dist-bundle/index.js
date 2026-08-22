import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.connection";
import { inject } from "@eclipse-daanse/tsm";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp(target, key, result);
  return result;
};
class KpiStore extends BaseDatasource {
  connection;
  kpis = [];
  cube = "";
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.cube = configuration.cube;
    this.kpis = configuration.kpis;
  }
  async getData(type) {
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      let kpis = await this.getKpis();
      kpis = kpis.filter(
        (kpi) => this.kpis.some((k) => k === kpi.KPI_NAME)
      );
      return this.getKpiData(kpis);
    } catch (e) {
      console.warn("Error retriving selected kpis", e.name);
      return null;
    }
  }
  async getOriginalData() {
    try {
      const kpis = await this.getKpis();
      console.log("Retrieved KPIs:", kpis);
      return this.getKpiData(kpis);
    } catch (e) {
      console.warn("Error retriving all kpis", e.name);
      return null;
    }
  }
  generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function(c) {
        const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      }
    );
  }
  async getKpis() {
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const api = await connection.getApi();
    const { kpis } = await api.getKpis(connection.catalogName, this.cube);
    return kpis;
  }
  async getKpiData(kpis) {
    let response = null;
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      kpis.forEach((kpi) => {
        if (!kpi.KPI_GUID) {
          kpi.KPI_GUID = `${kpi.KPI_NAME}_${this.generateGuid()}`;
        }
      });
      if (kpis.length > 0) {
        let withPart = "WITH ";
        const kpiSets = kpis.map((kpi, index) => {
          let members = [];
          members.push(
            `MEMBER [Measures].[${kpi.KPI_GUID}_Value] AS ${kpi.KPI_VALUE}`
          );
          if (kpi.KPI_GOAL) {
            members.push(
              `MEMBER [Measures].[${kpi.KPI_GUID}_Goal] AS ${kpi.KPI_GOAL}`
            );
          }
          if (kpi.KPI_STATUS) {
            members.push(
              `MEMBER [Measures].[${kpi.KPI_GUID}_Status] AS ${kpi.KPI_STATUS}`
            );
          }
          if (kpi.KPI_TREND) {
            members.push(
              `MEMBER [Measures].[${kpi.KPI_GUID}_Trend] AS ${kpi.KPI_TREND}`
            );
          }
          return members.join("\n            ");
        }).join("\n");
        withPart += kpiSets;
        const measures = kpis.map((kpi, index) => {
          let measuresList = [`[Measures].[${kpi.KPI_GUID}_Value]`];
          if (kpi.KPI_GOAL) {
            measuresList.push(`[Measures].[${kpi.KPI_GUID}_Goal]`);
          }
          if (kpi.KPI_STATUS) {
            measuresList.push(`[Measures].[${kpi.KPI_GUID}_Status]`);
          }
          if (kpi.KPI_TREND) {
            measuresList.push(`[Measures].[${kpi.KPI_GUID}_Trend]`);
          }
          return measuresList.join(", ");
        }).join(", ");
        const mdxQuery = `
          ${withPart}
          SELECT {${measures}} ON COLUMNS FROM [${this.cube}]
        `;
        const mdxResponse = await connection.fetch({
          data: { mdx: mdxQuery },
          format: "Tabular"
        });
        const rowset = mdxResponse.Body?.ExecuteResponse?.return?.root?.row;
        if (rowset) {
          const kpiResults = kpis.map((kpi, index) => {
            const valueKey = findMatchingKey(rowset, `${kpi.KPI_GUID}_Value`);
            const goalKey = kpi.KPI_GOAL ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Goal`) : null;
            const statusKey = kpi.KPI_STATUS ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Status`) : null;
            const trendKey = kpi.KPI_TREND ? findMatchingKey(rowset, `${kpi.KPI_GUID}_Trend`) : null;
            return {
              name: kpi.KPI_NAME || `KPI ${index}`,
              caption: kpi.KPI_CAPTION || `KPI Caption ${index}`,
              displayFolder: kpi.KPI_DISPLAY_FOLDER || "",
              value: valueKey ? rowset[valueKey] : null,
              goal: goalKey ? rowset[goalKey] : null,
              status: statusKey ? rowset[statusKey] : null,
              trend: trendKey ? rowset[trendKey] : null,
              parentKpiName: kpi.KPI_PARENT_KPI_NAME || null,
              type: "KPI",
              children: []
            };
          });
          response = this.parseToKpiTable(kpiResults);
        }
      }
    } catch (e) {
      console.log(e);
      console.warn("Invalid resource URL", e.name);
    }
    return response;
  }
  parseToKpiTable(data) {
    if (!Array.isArray(data)) return [];
    const result = [];
    const folderMap = /* @__PURE__ */ new Map();
    const kpiMap = /* @__PURE__ */ new Map();
    data.forEach((kpi) => {
      kpiMap.set(kpi.name, kpi);
      const displayFolder = kpi.displayFolder || "";
      if (!displayFolder || typeof displayFolder !== "string") {
        result.push(kpi);
      } else {
        const folders = displayFolder.split("\\").filter((f) => f.trim());
        if (folders.length === 0) {
          result.push(kpi);
          return;
        }
        let currentPath = "";
        let currentLevel = result;
        folders.forEach((folderName, index) => {
          currentPath = currentPath ? `${currentPath}\\${folderName}` : folderName;
          let folder = currentLevel.find(
            (item) => item.type === "Folder" && item.name === folderName
          );
          if (!folder) {
            folder = {
              type: "Folder",
              name: folderName,
              children: []
            };
            currentLevel.push(folder);
            folderMap.set(currentPath, folder);
          }
          currentLevel = folder.children;
        });
        currentLevel.push(kpi);
      }
    });
    data.forEach((kpi) => {
      if (kpi.parentKpiName) {
        const parentKpi = kpiMap.get(kpi.parentKpiName);
        const childKpi = kpiMap.get(kpi.name);
        if (parentKpi && childKpi) {
          parentKpi.children.push(childKpi);
          childKpi.added = true;
        }
      }
    });
    return result.filter((kpi) => !kpi.added);
  }
  parseToDataTable(data) {
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] };
    const headers = ["index"];
    const rows = [];
    console.log("Data:", data);
    const items = data.map((item, index) => {
      console.log("Item:", item);
      if (typeof item !== "object") return {};
      const row = {
        index
      };
      for (const key in item) {
        if (typeof item[key] === "object" || Array.isArray(item[key])) continue;
        if (!headers.includes(key)) {
          headers.push(key);
        }
        row[key] = item[key];
      }
      return row;
    });
    items.forEach((item, index) => {
      rows[index] = [];
      headers.forEach((header) => {
        rows[index].push(item[header]);
      });
    });
    return { items, headers, rows };
  }
  callEvent(event, params) {
    console.warn(
      `Event "${event}" is not available for this type of store`,
      params
    );
  }
  destroy() {
  }
  static validateConfiguration(configuration) {
    if (!configuration.connection) {
      return false;
    }
    if (!configuration.cube) {
      return false;
    }
    return true;
  }
}
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], KpiStore.prototype, "connectionRepository");
function findMatchingKey(obj, targetKey) {
  if (obj.hasOwnProperty(targetKey)) {
    return targetKey;
  }
  for (const key in obj) {
    const normalizedKey = key.replace(
      /_x([0-9a-fA-F]{4})_/g,
      (_, hex) => String.fromCharCode(parseInt(hex, 16))
    ).toLowerCase();
    const normalizedTarget = targetKey.toLowerCase();
    if (normalizedKey.includes(normalizedTarget)) {
      return key;
    }
  }
  return null;
}
const KPI_STORE_FACTORY = serviceId("KpiStoreFactory");
const factorySymbol = Symbol.for(KPI_STORE_FACTORY);
function activate$1({ services }) {
  services.register(KPI_STORE_FACTORY, (config) => {
    if (!KpiStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid KpiStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(KpiStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(KPI_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KPI_STORE_FACTORY,
  KpiStore,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.kpi_tmp";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.kpi_tmp");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  KPI_STORE_FACTORY,
  KpiStore,
  activate,
  deactivate,
  factorySymbol
};
