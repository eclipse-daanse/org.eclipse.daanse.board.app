import { BaseDatasource as f } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { inject as h, injectable as m } from "@eclipse-daanse/tsm";
import { CONNECTION_REPOSITORY as y } from "org.eclipse.daanse.board.app.lib.api.connection";
const { serviceId: v } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), w = "Query", _ = Symbol.for("SparqlStore");
var g = Object.defineProperty, S = Object.getOwnPropertyDescriptor, l = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? S(e, o) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (a ? s(e, o, r) : s(r)) || r);
  return a && r && g(e, o, r), r;
};
let i = class extends f {
  constructor() {
    super(...arguments), this.query = "", this.datasourceId = null;
  }
  init(t) {
    super.init(t), this.connection = t.connection, this.query = t.query;
  }
  callEvent(t, e) {
    t == w && (this.query = e), this.notify();
  }
  getOriginalData() {
    throw new Error("not implemented");
  }
  destroy() {
  }
  static validateConfiguration(t) {
    return !!t.connection;
  }
  async getData(t) {
    try {
      if (!this.connectionRepository)
        throw new Error("ConnectionRepository is not provided to Store Classes");
      const e = this.connectionRepository.getConnection(
        this.connection
      );
      let o = "query=" + encodeURIComponent(this.query);
      const r = await (await e.fetch(
        { url: "" },
        {
          method: "POST",
          body: o,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )).json();
      this.data = r;
    } catch {
      this.data = void 0;
    }
    if (t == "DataTable") {
      if (this.data) {
        const e = this.data.head.vars, o = this.data.results.bindings.map((r) => {
          const n = {};
          for (const s of e)
            n[s] = r[s]?.value ?? null;
          return n;
        }), a = o.map((r) => e.map((n) => r[n]));
        return { headers: e, items: o, rows: a };
      }
      return { heders: [], items: [], rows: [] };
    }
    return t == "string" ? JSON.stringify(this.data) : this.data;
  }
};
i.TYPE = "sparql";
l([
  h(y)
], i.prototype, "connectionRepository", 2);
i = l([
  m()
], i);
const p = v("SparqlStore");
function u({ services: t }) {
  t.register(p, (e) => {
    if (!i.validateConfiguration(e))
      throw new Error(
        "Invalid SparqlStore configuration. Please provide a valid configuration."
      );
    const o = t.construct(i);
    return o.init(e), o;
  });
}
function d({ services: t }) {
  t.unregister(p);
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get SparqlStore() {
    return i;
  },
  activate: u,
  deactivate: d,
  symbol: _
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.datasource.sparql", q = "0.0.1-next.1";
async function C(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${c}: tsm runtime is not initialized`);
  e.register(c, b, q, "lib.datasource.sparql"), await u?.(t);
}
async function P(t) {
  await d?.(t);
}
export {
  i as SparqlStore,
  C as activate,
  P as deactivate,
  _ as symbol
};
