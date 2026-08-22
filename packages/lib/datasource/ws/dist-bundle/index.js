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
class WSStore extends BaseDatasource {
  connection;
  accumulatedData = [];
  lastMessage = null;
  accumulate = false;
  topic = "";
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.accumulate = configuration.accumulate ?? false;
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    if (configuration.topic && connection.hasTopics()) {
      this.topic = configuration.topic;
      connection.connectStore(this, configuration.topic);
    }
    connection.subscribe((event, data, topic) => {
      switch (event) {
        case "connect":
          this.onConnect();
          break;
        case "message":
          this.onMessage(data, topic);
          break;
        case "close":
          this.onClose();
          break;
        case "error":
          this.onError(data);
          break;
      }
    });
  }
  onError(error) {
  }
  onClose() {
  }
  onMessage(data, topic) {
    if (this.topic && topic !== this.topic) return;
    if (this.accumulate) {
      this.accumulatedData.push({
        message: data,
        timestamp: new Date(Date.now()).toTimeString(),
        topic: topic || "default"
      });
    } else {
      this.lastMessage = {
        message: data,
        timestamp: new Date(Date.now()).toTimeString(),
        topic: topic || "default"
      };
    }
    this.notify();
  }
  onConnect() {
  }
  parseToDataTable() {
    let data = [this.lastMessage];
    if (this.accumulate) {
      data = this.accumulatedData;
    }
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
  destroy() {
    console.log("Destroying WSStore");
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    if (connection && connection.hasTopics()) {
      connection.disconnectStore(this);
    }
  }
  getData(type) {
    let data = this.lastMessage;
    if (this.accumulate) {
      data = this.accumulatedData;
    }
    if (type === "DataTable") {
      return this.parseToDataTable();
    }
    if (type === "object") {
      return JSON.stringify(data);
    }
    if (type === "string") {
      return JSON.stringify(data);
    }
    throw new Error("Method not implemented.");
  }
  getOriginalData() {
    throw new Error("Method not implemented.");
  }
  callEvent(event, params) {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(configuration) {
    if (!configuration?.connection) {
      return false;
    }
    return true;
  }
}
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], WSStore.prototype, "connectionRepository");
const WS_STORE_FACTORY = serviceId("WSStoreFactory");
const factorySymbol = Symbol.for(WS_STORE_FACTORY);
function activate$1({ services }) {
  services.register(WS_STORE_FACTORY, (config) => {
    if (!WSStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid WSStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(WSStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(WS_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WSStore,
  WS_STORE_FACTORY,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.websocket";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.websocket");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  WSStore,
  WS_STORE_FACTORY,
  activate,
  deactivate,
  factorySymbol
};
