import { inject } from "@eclipse-daanse/tsm";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import helpers from "org.eclipse.daanse.board.app.lib.utils.helpers";
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
class CsvStore extends BaseDatasource {
  connection;
  resourceUrl = null;
  parseOptions = null;
  skipRowsFromStart = 0;
  skipRowsFromEnd = 0;
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.parseOptions = {
      separators: configuration.separators
    };
    this.skipRowsFromStart = configuration.skipRowsFromStart ?? 0;
    this.skipRowsFromEnd = configuration.skipRowsFromEnd ?? 0;
    this.resourceUrl = super.initVariable(configuration.resourceUrl);
    this.pollingInterval = configuration.pollingInterval ?? 5e3;
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval);
    }
  }
  async getOriginalData() {
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const req = await connection.fetch({ url: this.resourceUrl?.value || "" });
    if (!req.ok) return [];
    const text = await req.text();
    const data = helpers.csv.parse(text, this.parseOptions || {});
    return data;
  }
  async getData(type) {
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const req = await connection.fetch({ url: this.resourceUrl?.value || "" });
    if (!req.ok) return null;
    let text = await req.text();
    if (this.skipRowsFromStart > 0 || this.skipRowsFromEnd > 0) {
      const lines = text.split("\n");
      const startIndex = this.skipRowsFromStart;
      const endIndex = this.skipRowsFromEnd > 0 ? lines.length - this.skipRowsFromEnd : lines.length;
      text = lines.slice(startIndex, endIndex).join("\n");
    }
    const data = helpers.csv.parse(
      text,
      this.parseOptions || {}
    );
    data.header = data.header.map((header) => typeof header === "string" ? header.trim() : header);
    data.rows = data.rows.map(
      (row) => row.map((value) => typeof value === "string" ? value.trim() : value)
    );
    data.mappedRows = data.mappedRows.map((row) => {
      const trimmedRow = {};
      for (const [key, value] of Object.entries(row)) {
        const trimmedKey = typeof key === "string" ? key.trim() : key;
        trimmedRow[trimmedKey] = typeof value === "string" ? value.trim() : value;
      }
      return trimmedRow;
    });
    console.log(data);
    if (type === "DataTable") {
      return {
        headers: data.header,
        items: data.mappedRows,
        rows: data.rows
      };
    }
    if (type == "string") {
      return JSON.stringify(data);
    } else {
      console.warn("Invalid data type");
      return null;
    }
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
}
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], CsvStore.prototype, "connectionRepository");
const CSV_STORE_FACTORY = serviceId("CsvStoreFactory");
const factorySymbol = Symbol.for(CSV_STORE_FACTORY);
function activate$1({ services }) {
  services.register(CSV_STORE_FACTORY, (config) => {
    if (!CsvStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid CsvStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(CsvStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(CSV_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSV_STORE_FACTORY,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.csv";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.csv");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  CSV_STORE_FACTORY,
  activate,
  deactivate,
  factorySymbol
};
