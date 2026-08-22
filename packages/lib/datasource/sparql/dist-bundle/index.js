const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
import { inject, injectable } from "@eclipse-daanse/tsm";
const { CONNECTION_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.connection");
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const QUERY = "Query";
const symbol = Symbol.for("SparqlStore");
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
let SparqlStore = class extends BaseDatasource {
  constructor() {
    super(...arguments);
    this.query = "";
    this.datasourceId = null;
  }
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.query = configuration.query;
  }
  callEvent(event, params) {
    if (event == QUERY) {
      this.query = params;
    }
    this.notify();
  }
  getOriginalData() {
    throw new Error("not implemented");
  }
  destroy() {
  }
  static validateConfiguration(configuration) {
    if (!configuration.connection) {
      return false;
    }
    return true;
  }
  async getData(type) {
    try {
      if (!this.connectionRepository) {
        throw new Error("ConnectionRepository is not provided to Store Classes");
      }
      const connection = this.connectionRepository.getConnection(
        this.connection
      );
      let encodedValue = "query=" + encodeURIComponent(this.query);
      const newData = await connection.fetch(
        { url: "" },
        {
          method: "POST",
          body: encodedValue,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      const parsed = await newData.json();
      this.data = parsed;
    } catch (e) {
      this.data = void 0;
    }
    if (type == "DataTable") {
      if (this.data) {
        const headers = this.data.head.vars;
        const items = this.data.results.bindings.map((binding) => {
          const item = {};
          for (const key of headers) {
            item[key] = binding[key]?.value ?? null;
          }
          return item;
        });
        const rows = items.map((item) => headers.map((key) => item[key]));
        return { headers, items, rows };
      }
      return { heders: [], items: [], rows: [] };
    }
    if (type == "string") {
      return JSON.stringify(this.data);
    }
    return this.data;
  }
};
SparqlStore.TYPE = "sparql";
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], SparqlStore.prototype, "connectionRepository", 2);
SparqlStore = __decorateClass([
  injectable()
], SparqlStore);
const SPARQL_STORE = serviceId("SparqlStore");
function activate$1({ services }) {
  services.register(SPARQL_STORE, (config) => {
    if (!SparqlStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid SparqlStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(SparqlStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(SPARQL_STORE);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get SparqlStore() {
    return SparqlStore;
  },
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.sparql";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.sparql");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  SparqlStore,
  activate,
  deactivate,
  symbol
};
