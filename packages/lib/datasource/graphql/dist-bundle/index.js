import { inject, injectable } from "@eclipse-daanse/tsm";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
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
let GraphQLStore = class extends BaseDatasource {
  connection;
  query = "";
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.query = configuration.query;
    this.pollingInterval = configuration.pollingInterval ?? 5e3;
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval);
    }
  }
  get fetcher() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    return connection.fetcher;
  }
  async getData(type) {
    if (this.query) {
      const request = await this.fetcher({ query: this.query });
      const result = (await request.next()).value.data;
      return result;
    } else {
      console.warn("Query is not provided for GraphQLStore");
      return null;
    }
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
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
    this.stopPolling();
  }
  static validateConfiguration(configuration) {
    if (!configuration.connection) {
      return false;
    }
    return true;
  }
};
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], GraphQLStore.prototype, "connectionRepository", 2);
GraphQLStore = __decorateClass([
  injectable()
], GraphQLStore);
const GRAPHQL_STORE_FACTORY = serviceId("GraphQLStoreFactory");
const factorySymbol = Symbol.for(GRAPHQL_STORE_FACTORY);
function activate$1({ services }) {
  services.register(GRAPHQL_STORE_FACTORY, (config) => {
    if (!GraphQLStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid GraphQLStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(GraphQLStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(GRAPHQL_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GRAPHQL_STORE_FACTORY,
  get GraphQLStore() {
    return GraphQLStore;
  },
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.graphql";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.graphql");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  GRAPHQL_STORE_FACTORY,
  GraphQLStore,
  activate,
  deactivate,
  factorySymbol
};
