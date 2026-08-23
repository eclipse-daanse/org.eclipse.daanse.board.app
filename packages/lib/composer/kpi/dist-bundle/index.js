import { DATASOURCE_REPOSITORY as y } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as f } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId: g } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class l extends f {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(e) {
    super(), this.datasourceRepository = e;
  }
  configuration;
  connectedDatasources = [];
  static availableTypes = ["KPI"];
  init(e) {
    this.configuration = e, this.connectedDatasources = e.connectedDatasources || [];
  }
  async getData(e) {
    if (this.connectedDatasources.length === 0) return [];
    const o = this.datasourceRepository, s = this.connectedDatasources.filter((r) => r).map(async (r) => {
      if (!o)
        throw new Error("DatasourceRepository is not provided to DataSource Classes");
      return await o.getDatasource(r).getOriginalData();
    }), n = await Promise.all(s);
    console.log("Datasource results:", n);
    const t = this.mergeKpiData(n);
    return console.log("Merged KPI data:", t), t;
  }
  async getOriginalData() {
    return this.getData("KPI");
  }
  mergeKpiData(e) {
    const o = [], s = /* @__PURE__ */ new Map();
    return e.forEach((n) => {
      Array.isArray(n) && n.forEach((t) => {
        if (console.log("Processing item:", t), t.type === "Folder") {
          const r = t.displayFolder || t.name || "Default";
          if (s.has(r)) {
            const i = s.get(r);
            i.children = [...i.children || [], ...t.children || []];
          } else
            s.set(r, { ...t }), o.push(t);
        } else if (t.displayFolder && typeof t.displayFolder == "string" && t.displayFolder.trim() !== "") {
          let r = Array.from(s.values()).find((i) => i.displayFolder === t.displayFolder);
          r || (r = {
            type: "Folder",
            name: t.displayFolder,
            displayFolder: t.displayFolder,
            children: []
          }, s.set(t.displayFolder, r), o.push(r)), r.children.push(t);
        } else
          o.push(t);
      });
    }), o;
  }
  callEvent(e, o) {
    console.warn(`Event "${e}" is not available for this type of store`, o);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(e) {
    return !(typeof e != "object" || e === null || e.connectedDatasources !== void 0 && !Array.isArray(e.connectedDatasources));
  }
}
const c = g("KpiComposer"), h = Symbol.for(c);
function D(a) {
  return (e) => {
    if (!l.validateConfiguration(e))
      throw new Error(
        "Invalid KpiComposer configuration. Please provide a valid configuration."
      );
    const o = new l(a);
    return o.init(e), o;
  };
}
function p({ services: a }) {
  a.register(c, D(a.getRequired(y)));
}
function u({ services: a }) {
  a.unregister(c);
}
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KPI_COMPOSER: c,
  KpiComposer: l,
  activate: p,
  deactivate: u,
  symbol: h
}, Symbol.toStringTag, { value: "Module" })), d = "org.eclipse.daanse.board.app.lib.composer.kpi", m = "0.0.1-next.1";
async function w(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${d}: tsm runtime is not initialized`);
  e.register(d, v, m, "lib.composer.kpi"), await p?.(a);
}
async function F(a) {
  await u?.(a);
}
export {
  c as KPI_COMPOSER,
  l as KpiComposer,
  w as activate,
  F as deactivate,
  h as symbol
};
