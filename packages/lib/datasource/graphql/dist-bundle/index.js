import { inject as y, injectable as d } from "@eclipse-daanse/tsm";
import { BaseDatasource as v } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as g } from "org.eclipse.daanse.board.app.lib.api.connection";
const { serviceId: _ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var b = Object.defineProperty, w = Object.getOwnPropertyDescriptor, u = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? w(e, o) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (r = (a ? i(e, o, r) : i(r)) || r);
  return a && r && b(e, o, r), r;
};
let c = class extends v {
  connection;
  query = "";
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection, this.query = t.query, this.pollingInterval = t.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  get fetcher() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    return this.connectionRepository.getConnection(
      this.connection
    ).fetcher;
  }
  async getData(t) {
    return this.query ? (await (await this.fetcher({ query: this.query })).next()).value.data : (console.warn("Query is not provided for GraphQLStore"), null);
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
  }
  parseToDataTable(t) {
    if (!Array.isArray(t)) return { items: [], headers: [], rows: [] };
    const e = ["index"], o = [], a = t.map((r, n) => {
      if (typeof r != "object") return {};
      const i = {
        index: n
      };
      for (const s in r)
        typeof r[s] == "object" || Array.isArray(r[s]) || (e.includes(s) || e.push(s), i[s] = r[s]);
      return i;
    });
    return a.forEach((r, n) => {
      o[n] = [], e.forEach((i) => {
        o[n].push(r[i]);
      });
    }), { items: a, headers: e, rows: o };
  }
  callEvent(t, e) {
    console.warn(
      `Event "${t}" is not available for this type of store`,
      e
    );
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(t) {
    return !!t.connection;
  }
};
u([
  y(g)
], c.prototype, "connectionRepository", 2);
c = u([
  d()
], c);
const l = _("GraphQLStoreFactory"), m = Symbol.for(l);
function f({ services: t }) {
  t.register(l, (e) => {
    if (!c.validateConfiguration(e))
      throw new Error(
        "Invalid GraphQLStore configuration. Please provide a valid configuration."
      );
    const o = t.construct(c);
    return o.init(e), o;
  });
}
function h({ services: t }) {
  t.unregister(l);
}
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GRAPHQL_STORE_FACTORY: l,
  get GraphQLStore() {
    return c;
  },
  activate: f,
  deactivate: h,
  factorySymbol: m
}, Symbol.toStringTag, { value: "Module" })), p = "org.eclipse.daanse.board.app.lib.datasource.graphql", E = "0.0.1-next.1";
async function I(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${p}: tsm runtime is not initialized`);
  e.register(p, O, E, "lib.datasource.graphql"), await f?.(t);
}
async function P(t) {
  await h?.(t);
}
export {
  l as GRAPHQL_STORE_FACTORY,
  c as GraphQLStore,
  I as activate,
  P as deactivate,
  m as factorySymbol
};
