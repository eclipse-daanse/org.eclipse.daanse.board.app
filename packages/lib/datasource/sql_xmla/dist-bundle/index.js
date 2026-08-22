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
class SqlXmlaStore extends BaseDatasource {
  connection;
  sql = "";
  connectionRepository;
  // private computedUrl: ComputedVariable;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.sql = configuration.sql;
  }
  async getData(type) {
    let response = null;
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      const mdxResponse = await connection.fetch({
        data: {
          mdx: this.sql
        }
      });
      let rowset = mdxResponse.Body?.DiscoverResponse?.return?.[0]?.root?.row;
      if (!rowset) {
        rowset = mdxResponse.Body?.ExecuteResponse?.return?.root?.row;
      }
      if (!rowset) return null;
      let response2 = null;
      if (type === "DataTable") {
        response2 = this.parseToDataTable(rowset);
      } else if (type === "object") {
      } else if (type === "string") {
        response2 = JSON.stringify(response2);
      }
      return response2;
    } catch (e) {
      console.log(e);
      console.warn("Invalid resource URL", e.name);
    }
    return response;
  }
  async getTables() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      const api = await connection.getApi();
      console.log("API:", api);
      const tables = await api.getTables();
      return tables;
    } catch (e) {
      console.log(e);
      console.warn("Invalid resource URL", e.name);
    }
  }
  async getCatalogs() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const conn = this.connectionRepository.getConnection(
      this.connection
    );
    const api = await conn.getApi();
    const { catalogs } = await api.getCatalogs();
    return catalogs;
  }
  async getColumns() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const conn = this.connectionRepository.getConnection(
      this.connection
    );
    const api = await conn.getApi();
    const { columns } = await api.getColumns();
    return columns;
  }
  async getOriginalData() {
  }
  parseToDataTable(data) {
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] };
    const headers = ["index"];
    const rows = [];
    const items = data.map((item, index) => {
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
    return true;
  }
}
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], SqlXmlaStore.prototype, "connectionRepository");
const SQL_XMLA_STORE_FACTORY = serviceId("SqlXmlaStoreFactory");
const factorySymbol = Symbol.for(SQL_XMLA_STORE_FACTORY);
function activate$1({ services }) {
  services.register(SQL_XMLA_STORE_FACTORY, (config) => {
    if (!SqlXmlaStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid SqlXmlaStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(SqlXmlaStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(SQL_XMLA_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SQL_XMLA_STORE_FACTORY,
  SqlXmlaStore,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.sql_xmla";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.sql_xmla");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  SQL_XMLA_STORE_FACTORY,
  SqlXmlaStore,
  activate,
  deactivate,
  factorySymbol
};
