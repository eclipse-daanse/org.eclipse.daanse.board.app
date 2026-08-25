import { BaseDatasource as d } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as h } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as g } from "@eclipse-daanse/tsm";
const { serviceId: w } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var v = Object.defineProperty, R = (r, o, t, e) => {
  for (var i = void 0, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (i = s(o, t, i) || i);
  return i && v(o, t, i), i;
};
class l extends d {
  connection;
  sql = "";
  connectionRepository;
  // private computedUrl: ComputedVariable;
  init(o) {
    super.init(o), this.connection = o.connection, this.sql = o.sql;
  }
  async getData(o) {
    let t = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const i = await this.connectionRepository.getConnection(
        this.connection
      ).fetch({
        data: {
          mdx: this.sql
        }
      });
      let n = i.Body?.DiscoverResponse?.return?.[0]?.root?.row;
      if (n || (n = i.Body?.ExecuteResponse?.return?.root?.row), !n) return null;
      let s = null;
      return o === "DataTable" ? s = this.parseToDataTable(n) : o === "object" || o === "string" && (s = JSON.stringify(s)), s;
    } catch (e) {
      console.log(e), console.warn("Invalid resource URL", e.name);
    }
    return t;
  }
  async getTables() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const t = await this.connectionRepository.getConnection(
        this.connection
      ).getApi();
      return console.log("API:", t), await t.getTables();
    } catch (o) {
      console.log(o), console.warn("Invalid resource URL", o.name);
    }
  }
  async getCatalogs() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const t = await this.connectionRepository.getConnection(
      this.connection
    ).getApi(), { catalogs: e } = await t.getCatalogs();
    return e;
  }
  async getColumns() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const t = await this.connectionRepository.getConnection(
      this.connection
    ).getApi(), { columns: e } = await t.getColumns();
    return e;
  }
  async getOriginalData() {
  }
  parseToDataTable(o) {
    if (!Array.isArray(o)) return { items: [], headers: [], rows: [] };
    const t = ["index"], e = [], i = o.map((n, s) => {
      if (typeof n != "object") return {};
      const a = {
        index: s
      };
      for (const c in n)
        typeof n[c] == "object" || Array.isArray(n[c]) || (t.includes(c) || t.push(c), a[c] = n[c]);
      return a;
    });
    return i.forEach((n, s) => {
      e[s] = [], t.forEach((a) => {
        e[s].push(n[a]);
      });
    }), { items: i, headers: t, rows: e };
  }
  callEvent(o, t) {
    console.warn(
      `Event "${o}" is not available for this type of store`,
      t
    );
  }
  destroy() {
  }
  static validateConfiguration(o) {
    return !!o.connection;
  }
}
R([
  g(h)
], l.prototype, "connectionRepository");
const p = w("SqlXmlaStoreFactory"), m = Symbol.for(p);
function f({ services: r }) {
  r.register(p, (o) => {
    if (!l.validateConfiguration(o))
      throw new Error(
        "Invalid SqlXmlaStore configuration. Please provide a valid configuration."
      );
    const t = r.construct(l);
    return t.init(o), t;
  });
}
function y({ services: r }) {
  r.unregister(p);
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SQL_XMLA_STORE_FACTORY: p,
  SqlXmlaStore: l,
  activate: f,
  deactivate: y,
  factorySymbol: m
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.datasource.sql_xmla", _ = "0.0.1-next.1";
async function T(r) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${u}: tsm runtime is not initialized`);
  o.register(u, b, _, "lib.datasource.sql_xmla"), await f?.(r);
}
async function O(r) {
  await y?.(r);
}
export {
  p as SQL_XMLA_STORE_FACTORY,
  l as SqlXmlaStore,
  T as activate,
  O as deactivate,
  m as factorySymbol
};
