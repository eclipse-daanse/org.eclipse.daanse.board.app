import { DATASOURCE_REPOSITORY as F } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as f } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId: g } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class c extends f {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(e) {
    super(), this.datasourceRepository = e;
  }
  connectedDatasources = [];
  xField = "";
  yField = "";
  geometryType = "Point";
  composeBy = "";
  useGeometryFromData = !1;
  useGeometryFromProps = !1;
  geometryField = "";
  geometryPropsField = "";
  init(e) {
    super.init(e), this.connectedDatasources = e.connectedDatasources, this.composeBy = e.composeBy, this.useGeometryFromProps = e.useGeometryFromProps ?? !1, this.useGeometryFromData = e.useGeometryFromData ?? !1, console.log(e), e.geometryPropsField ? this.geometryPropsField = e.geometryPropsField?.trim() || "" : e.geometryField ? this.geometryField = e.geometryField.trim() : (this.xField = e.xField.trim(), this.yField = e.yField.trim(), this.geometryType = e.geometryType.trim());
  }
  static validateConfiguration(e) {
    return Array.isArray(e.connectedDatasources);
  }
  async createFeatureCollection() {
    const e = this.datasourceRepository, s = await Promise.all(
      this.connectedDatasources.filter((t) => t).map(async (t) => {
        const r = e.getDatasource(t);
        return r ? await r.getData("DataTable") : null;
      })
    ), a = [];
    if (console.log("Datasources data:", s), this.useGeometryFromProps && this.geometryPropsField) {
      for (const t of s)
        if (!(!t || !Array.isArray(t.items)))
          for (const r of t.items) {
            let o = null;
            const u = r.Caption;
            let n = t.rowProperties?.[u]?.[this.geometryPropsField];
            if (Array.isArray(n) && (n = n[0]), n)
              try {
                o = JSON.parse(n);
              } catch (d) {
                console.warn(`Failed to parse geometry from properties field ${this.geometryPropsField}:`, d);
              }
            a.push({
              type: "Feature",
              geometry: o,
              properties: { ...r }
            });
          }
      return {
        type: "FeatureCollection",
        features: a
      };
    }
    if (this.useGeometryFromData && this.geometryField) {
      for (const t of s)
        if (!(!t || !Array.isArray(t.items)))
          for (const r of t.items) {
            let o = null;
            r[this.geometryField] && (o = JSON.parse(r[this.geometryField])), a.push({
              type: "Feature",
              geometry: o,
              properties: { ...r }
            });
          }
      return {
        type: "FeatureCollection",
        features: a
      };
    }
    for (const t of s)
      if (!(!t || !Array.isArray(t.items)))
        for (const r of t.items) {
          let o = null;
          console.log("Processing row:", r), console.log("xField:", this.xField, "yField:", this.yField), console.log("row[xField]:", r[this.xField], "row[yField]:", r[this.yField]), this.xField && this.yField && r[this.xField] != null && r[this.yField] != null ? o = {
            type: "Point",
            coordinates: [Number(r[this.xField]), Number(r[this.yField])]
          } : r.geometry && (o = r.geometry), a.push({
            type: "Feature",
            geometry: o,
            properties: { ...r }
          });
        }
    return {
      type: "FeatureCollection",
      features: a
    };
  }
  static async getHeaders(e, s) {
    return console.log("Composing headers from", e), (await Promise.all(
      e.filter((t) => t).map(async (t) => {
        if (!s)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await s.getDatasource(t).getData("DataTable");
      })
    )).reduce((t, r) => (r.headers.forEach((o) => {
      t.includes(o) || t.push(o);
    }), t), []);
  }
  static async getProperties(e, s) {
    return console.log("Composing properties from", e), (await Promise.all(
      e.filter((t) => t).map(async (t) => {
        if (!s)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        return await s.getDatasource(t).getData("DataTable");
      })
    )).reduce((t, r) => {
      if (!r || !r.rowProperties) return t;
      const o = Object.keys(r.rowProperties);
      return o.length === 0 || (console.log(o), Object.keys(r.rowProperties[o[1]] || r.rowProperties[o[0]] || {}).forEach((n) => {
        t.includes(n) || t.push(n);
      })), t;
    }, []);
  }
  async getData(e) {
    return this.createFeatureCollection();
  }
  getOriginalData() {
    return null;
  }
  callEvent(e, s) {
    console.warn(`Event '${e}' not supported in OgcFeatureComposer`, s);
  }
  destroy() {
    console.log("Destroying OgcFeatureComposer");
  }
}
const l = g("OgcFeatureComposer"), h = Symbol.for(l);
function w(i) {
  return (e) => {
    if (!c.validateConfiguration(e))
      throw new Error(
        "Invalid OgcFeatureComposer configuration. Please provide a valid configuration."
      );
    const s = new c(i);
    return s.init(e), s;
  };
}
function y({ services: i }) {
  i.register(l, w(i.getRequired(F)));
}
function m({ services: i }) {
  i.unregister(l);
}
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OGC_FEATURE_COMPOSER: l,
  OgcFeatureComposer: c,
  activate: y,
  deactivate: m,
  symbol: h
}, Symbol.toStringTag, { value: "Module" })), p = "org.eclipse.daanse.board.app.lib.composer.ogc", P = "0.0.1-next.1";
async function v(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${p}: tsm runtime is not initialized`);
  e.register(p, D, P, "lib.composer.ogc"), await y?.(i);
}
async function _(i) {
  await m?.(i);
}
export {
  l as OGC_FEATURE_COMPOSER,
  c as OgcFeatureComposer,
  v as activate,
  _ as deactivate,
  h as symbol
};
