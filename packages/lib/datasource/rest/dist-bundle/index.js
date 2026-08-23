import { inject as y, injectable as v } from "@eclipse-daanse/tsm";
import { BaseDatasource as b } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as w } from "org.eclipse.daanse.board.app.lib.api.connection";
import _ from "org.eclipse.daanse.board.app.lib.utils.helpers";
const { serviceId: d } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var R = Object.defineProperty, g = Object.getOwnPropertyDescriptor, p = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? g(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
  return n && o && R(t, r, o), o;
};
let c = class extends b {
  connection;
  resourceUrl = null;
  selectedJSONValue;
  connectionRepository;
  init(e) {
    super.init(e), this.connection = e.connection, this.resourceUrl = super.initVariable(e.resourceUrl), this.selectedJSONValue = e.selectedJSONValue, this.pollingInterval = e.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  //   async getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]> {
  async getData(e) {
    let t = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const o = await (await this.connectionRepository.getConnection(
        this.connection
      ).fetch({ url: this.resourceUrl?.value || "" })).json();
      return t = o, this.selectedJSONValue && (t = _.extractDataByPath(o, this.selectedJSONValue)), e === "DataTable" ? t = this.parseToDataTable(t) : e === "object" || e === "string" && (t = JSON.stringify(t)), t;
    } catch (r) {
      console.log(r), console.warn("Invalid resource URL", r.name);
    }
    return t;
  }
  async getOriginalData() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      return await (await this.connectionRepository.getConnection(
        this.connection
      ).fetch({ url: this.resourceUrl?.value || "" })).json();
    } catch (e) {
      console.warn("Invalid resource URL", e.name);
    }
  }
  // TODO: Add proper typing and imports for interfaces
  // parseToDataTable(data: any): IDataTable {
  parseToDataTable(e) {
    if (!Array.isArray(e)) return { items: [], headers: [], rows: [] };
    const t = ["index"], r = [], n = e.map((o, i) => {
      if (typeof o != "object") return {};
      const s = {
        index: i
      };
      for (const a in o)
        typeof o[a] == "object" || Array.isArray(o[a]) || (t.includes(a) || t.push(a), s[a] = o[a]);
      return s;
    });
    return n.forEach((o, i) => {
      r[i] = [], t.forEach((s) => {
        r[i].push(o[s]);
      });
    }), { items: n, headers: t, rows: r };
  }
  callEvent(e, t) {
    console.warn(
      `Event "${e}" is not available for this type of store`,
      t
    );
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(e) {
    return !(!e.connection || !e.resourceUrl);
  }
};
p([
  y(w)
], c.prototype, "connectionRepository", 2);
c = p([
  v()
], c);
const l = d("RestStoreFactory"), O = Symbol.for(l);
function f({ services: e }) {
  e.register(l, (t) => {
    if (!c.validateConfiguration(t))
      throw new Error(
        "Invalid RestStore configuration. Please provide a valid configuration."
      );
    const r = e.construct(c);
    return r.init(t), r;
  });
}
function h({ services: e }) {
  e.unregister(l);
}
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REST_STORE_FACTORY: l,
  activate: f,
  deactivate: h,
  factorySymbol: O
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.datasource.rest", m = "0.0.1-next.1";
async function j(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${u}: tsm runtime is not initialized`);
  t.register(u, S, m, "lib.datasource.rest"), await f?.(e);
}
async function D(e) {
  await h?.(e);
}
export {
  l as REST_STORE_FACTORY,
  j as activate,
  D as deactivate,
  O as factorySymbol
};
