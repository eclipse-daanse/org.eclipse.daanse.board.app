import { DATASOURCE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as y } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId: h } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class u extends y {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(t) {
    super(), this.datasourceRepository = t;
  }
  destroy() {
    console.log("Destroying ChartComposer");
  }
  connectedDatasources = [];
  composeBy = "";
  usedSets = [];
  labelColumn = "";
  init(t) {
    super.init(t), this.connectedDatasources = t.connectedDatasources;
    const e = async () => {
      await this.getData("DataTable"), this.notify();
    }, s = this.datasourceRepository;
    this.connectedDatasources.filter((a) => a).forEach(function(a) {
      s.getDatasource(a).subscribe(e);
    }), this.composeBy = t.composeBy, this.usedSets = t.usedSets, this.labelColumn = t.labelColumn;
  }
  async getData(t) {
    if (!this.composeBy) return null;
    const e = this.datasourceRepository, s = await Promise.all(
      this.connectedDatasources.filter((a) => a).map(async (a) => {
        if (!e)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await e.getDatasource(a).getData("DataTable");
      })
    );
    if (t === "DataTable")
      return this.composeArrays(s);
    if (t === "ChartData") {
      const a = this.composeArrays(s);
      return this.parseToChartData(a);
    } else
      return console.warn("Invalid data type"), null;
  }
  async getOriginalData() {
    return [];
  }
  callEvent(t, e) {
    console.warn(`Event "${t}" is not available for this type of store`, e);
  }
  static async getHeaders(t, e) {
    return (await Promise.all(
      t.filter((a) => a).map(async (a) => {
        if (!e)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await e.getDatasource(a).getData("DataTable");
      })
    )).reduce((a, r) => (r.headers.forEach((n) => {
      a.includes(n) || a.push(n);
    }), a), []);
  }
  composeArrays(t) {
    const e = {
      headers: [],
      rows: [],
      items: []
    }, s = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      r.items.forEach((n) => {
        const i = n[this.composeBy];
        s.has(i) || s.set(i, {}), s.set(i, {
          ...s.get(i),
          ...n
        });
      });
    }), e.items = Array.from(s.values()), e.headers = t.reduce((r, n) => (n.headers.forEach((i) => {
      r.includes(i) || r.push(i);
    }), r), []);
    const a = [];
    return e.items.forEach((r) => {
      const n = e.headers.map((i) => r[i]);
      a.push(n);
    }), e.rows = a, e;
  }
  parseToChartData(t) {
    const e = {};
    return e.labels = t.items.map((s) => s[this.labelColumn]), e.datasets = this.usedSets.map((s) => ({
      label: s,
      data: t.items.map((a) => --a[s]),
      backgroundColor: "red"
    })), e;
  }
  static validateConfiguration(t) {
    return !(!t.connectedDatasources || !t.labelColumn || !t.usedSets || !t.composeBy);
  }
}
const c = h("ChartComposer"), f = Symbol.for(c);
function D(o) {
  return (t) => {
    if (!u.validateConfiguration(t))
      throw new Error(
        "Invalid ChartComposer configuration. Please provide a valid configuration."
      );
    const e = new u(o);
    return e.init(t), e;
  };
}
function d({ services: o }) {
  o.register(c, D(o.getRequired(m)));
}
function p({ services: o }) {
  o.unregister(c);
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CHART_COMPOSER: c,
  ChartComposer: u,
  activate: d,
  deactivate: p,
  symbol: f
}, Symbol.toStringTag, { value: "Module" })), l = "org.eclipse.daanse.board.app.lib.composer.chart", C = "0.0.1-next.1";
async function v(o) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${l}: tsm runtime is not initialized`);
  t.register(l, b, C, "lib.composer.chart"), await d?.(o);
}
async function E(o) {
  await p?.(o);
}
export {
  c as CHART_COMPOSER,
  u as ChartComposer,
  v as activate,
  E as deactivate,
  f as symbol
};
