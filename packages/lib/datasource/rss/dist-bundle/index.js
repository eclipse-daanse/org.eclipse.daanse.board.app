import { inject } from "@eclipse-daanse/tsm";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.connection";
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
class RssStore extends BaseDatasource {
  connection;
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
  }
  async getOriginalData() {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const req = await connection.fetch({});
    return req;
  }
  async getData(type) {
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const req = await connection.fetch({});
    if (type === "object") {
      return req;
    } else if (type === "string") {
      return JSON.stringify(req);
    } else if (type === "DataTable") {
      const data = req.items;
      return this.parseToDataTable(data);
    } else {
      console.warn("Invalid data type");
      return null;
    }
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
], RssStore.prototype, "connectionRepository");
const RSS_STORE_FACTORY = serviceId("RssStoreFactory");
const factorySymbol = Symbol.for(RSS_STORE_FACTORY);
function activate$1({ services }) {
  services.register(RSS_STORE_FACTORY, (config) => {
    if (!RssStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid RssStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(RssStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(RSS_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RSS_STORE_FACTORY,
  RssStore,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.rss";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.rss");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  RSS_STORE_FACTORY,
  RssStore,
  activate,
  deactivate,
  factorySymbol
};
