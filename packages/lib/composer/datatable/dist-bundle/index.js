import { DATASOURCE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as f } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId: h } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class u extends f {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(e) {
    super(), this.datasourceRepository = e;
  }
  destroy() {
    console.log("Destroying DataTableComposer");
  }
  connectedDatasources = [];
  composeBy = "";
  // TODO: find a better way to do this
  static availableTypes = ["rest", "csv", "xmla"];
  init(e) {
    super.init(e), this.connectedDatasources = e.connectedDatasources;
    const t = async () => {
      await this.getData("DataTable"), this.notify();
    }, i = this.datasourceRepository;
    this.connectedDatasources.filter((a) => a).forEach(function(a) {
      i.getDatasource(a).subscribe(t);
    }), this.composeBy = e.composeBy;
  }
  async getData(e) {
    if (!this.composeBy) return null;
    const t = this.datasourceRepository, i = await Promise.all(
      this.connectedDatasources.filter((a) => a).map(async (a) => {
        if (!t)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await t.getDatasource(a).getData("DataTable");
      })
    );
    if (e === "DataTable")
      return this.composeArrays(i);
    console.warn("Invalid data type");
  }
  async getOriginalData() {
    return [];
  }
  callEvent(e, t) {
    console.warn(`Event "${e}" is not available for this type of store`, t);
  }
  static async getHeaders(e, t) {
    return console.log("Composing headers from", e), (await Promise.all(
      e.filter((a) => a).map(async (a) => {
        if (!t)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await t.getDatasource(a).getData("DataTable");
      })
    )).reduce((a, o) => (o.headers.forEach((r) => {
      a.includes(r) || a.push(r);
    }), a), []);
  }
  composeArrays(e) {
    const t = {
      headers: [],
      rows: [],
      items: [],
      rowProperties: {}
    }, i = /* @__PURE__ */ new Map();
    e.forEach((o) => {
      o.items.forEach((r) => {
        const n = r[this.composeBy];
        i.has(n) || i.set(n, {}), i.set(n, {
          ...i.get(n),
          ...r
        });
      }), Object.keys(o.rowProperties).forEach((r) => {
        const n = o.rowProperties[r];
        t.rowProperties[r] = {
          ...t.rowProperties[r],
          ...n
        };
      });
    }), t.items = Array.from(i.values()), t.headers = e.reduce((o, r) => (r.headers.forEach((n) => {
      o.includes(n) || o.push(n);
    }), o), []);
    const a = [];
    return t.items.forEach((o) => {
      const r = t.headers.map((n) => o[n]);
      a.push(r);
    }), t.rows = a, t;
  }
  static validateConfiguration(e) {
    return !!e.connectedDatasources;
  }
}
const c = h("DataTableComposer"), y = Symbol.for(c);
function D(s) {
  return (e) => {
    if (!u.validateConfiguration(e))
      throw new Error(
        "Invalid DataTableComposer configuration. Please provide a valid configuration."
      );
    const t = new u(s);
    return t.init(e), t;
  };
}
function p({ services: s }) {
  s.register(c, D(s.getRequired(m)));
}
function d({ services: s }) {
  s.unregister(c);
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATA_TABLE_COMPOSER: c,
  DataTableComposer: u,
  activate: p,
  deactivate: d,
  symbol: y
}, Symbol.toStringTag, { value: "Module" })), l = "org.eclipse.daanse.board.app.lib.composer.datatable", b = "0.0.1-next.1";
async function E(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${l}: tsm runtime is not initialized`);
  e.register(l, w, b, "lib.composer.datatable"), await p?.(s);
}
async function T(s) {
  await d?.(s);
}
export {
  c as DATA_TABLE_COMPOSER,
  u as DataTableComposer,
  E as activate,
  T as deactivate,
  y as symbol
};
