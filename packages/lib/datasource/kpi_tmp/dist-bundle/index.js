import { BaseDatasource as E } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as T } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as S } from "@eclipse-daanse/tsm";
const { serviceId: A } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var v = Object.defineProperty, D = (c, e, t, s) => {
  for (var o = void 0, n = c.length - 1, i; n >= 0; n--)
    (i = c[n]) && (o = i(e, t, o) || o);
  return o && v(e, t, o), o;
};
class I extends E {
  connection;
  kpis = [];
  cube = "";
  connectionRepository;
  init(e) {
    super.init(e), this.connection = e.connection, this.cube = e.cube, this.kpis = e.kpis;
  }
  async getData(e) {
    try {
      const t = this.connectionRepository.getConnection(
        this.connection
      );
      let s = await this.getKpis();
      return s = s.filter(
        (o) => this.kpis.some((n) => n === o.KPI_NAME)
      ), this.getKpiData(s);
    } catch (t) {
      return console.warn("Error retriving selected kpis", t.name), null;
    }
  }
  async getOriginalData() {
    try {
      const e = await this.getKpis();
      return console.log("Retrieved KPIs:", e), this.getKpiData(e);
    } catch (e) {
      return console.warn("Error retriving all kpis", e.name), null;
    }
  }
  generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function(e) {
        const t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16);
      }
    );
  }
  async getKpis() {
    const e = this.connectionRepository.getConnection(
      this.connection
    ), t = await e.getApi(), { kpis: s } = await t.getKpis(e.catalogName, this.cube);
    return s;
  }
  async getKpiData(e) {
    let t = null;
    try {
      const s = this.connectionRepository.getConnection(
        this.connection
      );
      if (e.forEach((o) => {
        o.KPI_GUID || (o.KPI_GUID = `${o.KPI_NAME}_${this.generateGuid()}`);
      }), e.length > 0) {
        let o = "WITH ";
        const n = e.map((r, u) => {
          let a = [];
          return a.push(
            `MEMBER [Measures].[${r.KPI_GUID}_Value] AS ${r.KPI_VALUE}`
          ), r.KPI_GOAL && a.push(
            `MEMBER [Measures].[${r.KPI_GUID}_Goal] AS ${r.KPI_GOAL}`
          ), r.KPI_STATUS && a.push(
            `MEMBER [Measures].[${r.KPI_GUID}_Status] AS ${r.KPI_STATUS}`
          ), r.KPI_TREND && a.push(
            `MEMBER [Measures].[${r.KPI_GUID}_Trend] AS ${r.KPI_TREND}`
          ), a.join(`
            `);
        }).join(`
`);
        o += n;
        const i = e.map((r, u) => {
          let a = [`[Measures].[${r.KPI_GUID}_Value]`];
          return r.KPI_GOAL && a.push(`[Measures].[${r.KPI_GUID}_Goal]`), r.KPI_STATUS && a.push(`[Measures].[${r.KPI_GUID}_Status]`), r.KPI_TREND && a.push(`[Measures].[${r.KPI_GUID}_Trend]`), a.join(", ");
        }).join(", "), _ = `
          ${o}
          SELECT {${i}} ON COLUMNS FROM [${this.cube}]
        `, l = (await s.fetch({
          data: { mdx: _ },
          format: "Tabular"
        })).Body?.ExecuteResponse?.return?.root?.row;
        if (l) {
          const r = e.map((u, a) => {
            const d = f(l, `${u.KPI_GUID}_Value`), K = u.KPI_GOAL ? f(l, `${u.KPI_GUID}_Goal`) : null, y = u.KPI_STATUS ? f(l, `${u.KPI_GUID}_Status`) : null, P = u.KPI_TREND ? f(l, `${u.KPI_GUID}_Trend`) : null;
            return {
              name: u.KPI_NAME || `KPI ${a}`,
              caption: u.KPI_CAPTION || `KPI Caption ${a}`,
              displayFolder: u.KPI_DISPLAY_FOLDER || "",
              value: d ? l[d] : null,
              goal: K ? l[K] : null,
              status: y ? l[y] : null,
              trend: P ? l[P] : null,
              parentKpiName: u.KPI_PARENT_KPI_NAME || null,
              type: "KPI",
              children: []
            };
          });
          t = this.parseToKpiTable(r);
        }
      }
    } catch (s) {
      console.log(s), console.warn("Invalid resource URL", s.name);
    }
    return t;
  }
  parseToKpiTable(e) {
    if (!Array.isArray(e)) return [];
    const t = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    return e.forEach((n) => {
      o.set(n.name, n);
      const i = n.displayFolder || "";
      if (!i || typeof i != "string")
        t.push(n);
      else {
        const _ = i.split("\\").filter((r) => r.trim());
        if (_.length === 0) {
          t.push(n);
          return;
        }
        let p = "", l = t;
        _.forEach((r, u) => {
          p = p ? `${p}\\${r}` : r;
          let a = l.find(
            (d) => d.type === "Folder" && d.name === r
          );
          a || (a = {
            type: "Folder",
            name: r,
            children: []
          }, l.push(a), s.set(p, a)), l = a.children;
        }), l.push(n);
      }
    }), e.forEach((n) => {
      if (n.parentKpiName) {
        const i = o.get(n.parentKpiName), _ = o.get(n.name);
        i && _ && (i.children.push(_), _.added = !0);
      }
    }), t.filter((n) => !n.added);
  }
  parseToDataTable(e) {
    if (!Array.isArray(e)) return { items: [], headers: [], rows: [] };
    const t = ["index"], s = [];
    console.log("Data:", e);
    const o = e.map((n, i) => {
      if (console.log("Item:", n), typeof n != "object") return {};
      const _ = {
        index: i
      };
      for (const p in n)
        typeof n[p] == "object" || Array.isArray(n[p]) || (t.includes(p) || t.push(p), _[p] = n[p]);
      return _;
    });
    return o.forEach((n, i) => {
      s[i] = [], t.forEach((_) => {
        s[i].push(n[_]);
      });
    }), { items: o, headers: t, rows: s };
  }
  callEvent(e, t) {
    console.warn(
      `Event "${e}" is not available for this type of store`,
      t
    );
  }
  destroy() {
  }
  static validateConfiguration(e) {
    return !(!e.connection || !e.cube);
  }
}
D([
  S(T)
], I.prototype, "connectionRepository");
function f(c, e) {
  if (c.hasOwnProperty(e))
    return e;
  for (const t in c) {
    const s = t.replace(
      /_x([0-9a-fA-F]{4})_/g,
      (n, i) => String.fromCharCode(parseInt(i, 16))
    ).toLowerCase(), o = e.toLowerCase();
    if (s.includes(o))
      return t;
  }
  return null;
}
const h = A("KpiStoreFactory"), M = Symbol.for(h);
function g({ services: c }) {
  c.register(h, (e) => {
    if (!I.validateConfiguration(e))
      throw new Error(
        "Invalid KpiStore configuration. Please provide a valid configuration."
      );
    const t = c.construct(I);
    return t.init(e), t;
  });
}
function m({ services: c }) {
  c.unregister(h);
}
const R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KPI_STORE_FACTORY: h,
  KpiStore: I,
  activate: g,
  deactivate: m,
  factorySymbol: M
}, Symbol.toStringTag, { value: "Module" })), x = "org.eclipse.daanse.board.app.lib.datasource.kpi_tmp", $ = "0.0.1-next.1";
async function O(c) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${x}: tsm runtime is not initialized`);
  e.register(x, R, $, "lib.datasource.kpi_tmp"), await g?.(c);
}
async function U(c) {
  await m?.(c);
}
export {
  h as KPI_STORE_FACTORY,
  I as KpiStore,
  O as activate,
  U as deactivate,
  M as factorySymbol
};
