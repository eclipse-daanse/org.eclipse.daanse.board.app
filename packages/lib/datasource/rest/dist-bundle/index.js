const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { inject, injectable } from "@eclipse-daanse/tsm";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import helpers from "org.eclipse.daanse.board.app.lib.utils.helpers";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let RestStore = class extends BaseDatasource {
  connection;
  resourceUrl = null;
  selectedJSONValue;
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.resourceUrl = super.initVariable(configuration.resourceUrl);
    this.selectedJSONValue = configuration.selectedJSONValue;
    this.pollingInterval = configuration.pollingInterval ?? 5e3;
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval);
    }
  }
  //   async getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]> {
  async getData(type) {
    let response = null;
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      const req = await connection.fetch({ url: this.resourceUrl?.value || "" });
      const data = await req.json();
      response = data;
      if (this.selectedJSONValue) {
        response = helpers.extractDataByPath(data, this.selectedJSONValue);
      }
      if (type === "DataTable") {
        response = this.parseToDataTable(response);
      } else if (type === "object") {
      } else if (type === "string") {
        response = JSON.stringify(response);
      }
      return response;
    } catch (e) {
      console.log(e);
      console.warn("Invalid resource URL", e.name);
    }
    return response;
  }
  async getOriginalData() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    try {
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      const req = await connection.fetch({ url: this.resourceUrl?.value || "" });
      const data = await req.json();
      return data;
    } catch (e) {
      console.warn("Invalid resource URL", e.name);
    }
  }
  // TODO: Add proper typing and imports for interfaces
  // parseToDataTable(data: any): IDataTable {
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
    this.stopPolling();
  }
  static validateConfiguration(configuration) {
    if (!configuration.connection) {
      return false;
    }
    if (!configuration.resourceUrl) {
      return false;
    }
    return true;
  }
};
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], RestStore.prototype, "connectionRepository", 2);
RestStore = __decorateClass([
  injectable()
], RestStore);
const REST_STORE_FACTORY = serviceId("RestStoreFactory");
const factorySymbol = Symbol.for(REST_STORE_FACTORY);
function activate$1({ services }) {
  services.register(REST_STORE_FACTORY, (config) => {
    if (!RestStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid RestStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(RestStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(REST_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REST_STORE_FACTORY,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.rest";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.rest");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  REST_STORE_FACTORY,
  activate,
  deactivate,
  factorySymbol
};
