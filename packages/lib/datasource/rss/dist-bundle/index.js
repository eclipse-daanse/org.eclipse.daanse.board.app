import { inject as y } from "@eclipse-daanse/tsm";
import { BaseDatasource as h } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as v } from "org.eclipse.daanse.board.app.lib.api.connection";
const { serviceId: b } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var _ = Object.defineProperty, R = (e, t, o, i) => {
  for (var n = void 0, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = s(t, o, n) || n);
  return n && _(t, o, n), n;
};
class l extends h {
  connection;
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection;
  }
  async getOriginalData() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    return await this.connectionRepository.getConnection(
      this.connection
    ).fetch({});
  }
  async getData(t) {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const i = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({});
    if (t === "object")
      return i;
    if (t === "string")
      return JSON.stringify(i);
    if (t === "DataTable") {
      const n = i.items;
      return this.parseToDataTable(n);
    } else
      return console.warn("Invalid data type"), null;
  }
  parseToDataTable(t) {
    if (!Array.isArray(t)) return { items: [], headers: [], rows: [] };
    const o = ["index"], i = [], n = t.map((r, s) => {
      if (typeof r != "object") return {};
      const c = {
        index: s
      };
      for (const a in r)
        typeof r[a] == "object" || Array.isArray(r[a]) || (o.includes(a) || o.push(a), c[a] = r[a]);
      return c;
    });
    return n.forEach((r, s) => {
      i[s] = [], o.forEach((c) => {
        i[s].push(r[c]);
      });
    }), { items: n, headers: o, rows: i };
  }
  callEvent(t, o) {
    console.warn(
      `Event "${t}" is not available for this type of store`,
      o
    );
  }
  destroy() {
  }
  static validateConfiguration(t) {
    return !!t.connection;
  }
}
R([
  y(v)
], l.prototype, "connectionRepository");
const f = b("RssStoreFactory"), g = Symbol.for(f);
function p({ services: e }) {
  e.register(f, (t) => {
    if (!l.validateConfiguration(t))
      throw new Error(
        "Invalid RssStore configuration. Please provide a valid configuration."
      );
    const o = e.construct(l);
    return o.init(t), o;
  });
}
function d({ services: e }) {
  e.unregister(f);
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RSS_STORE_FACTORY: f,
  RssStore: l,
  activate: p,
  deactivate: d,
  factorySymbol: g
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.datasource.rss", S = "0.0.1-next.1";
async function O(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${u}: tsm runtime is not initialized`);
  t.register(u, w, S, "lib.datasource.rss"), await p?.(e);
}
async function T(e) {
  await d?.(e);
}
export {
  f as RSS_STORE_FACTORY,
  l as RssStore,
  O as activate,
  T as deactivate,
  g as factorySymbol
};
