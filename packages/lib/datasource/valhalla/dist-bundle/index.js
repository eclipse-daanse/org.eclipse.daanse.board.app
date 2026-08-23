import { inject as S, injectable as b } from "@eclipse-daanse/tsm";
import { BaseDatasource as v } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as j } from "org.eclipse.daanse.board.app.lib.api.connection";
const { serviceId: R } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var E = Object.defineProperty, T = Object.getOwnPropertyDescriptor, f = (t, e, s, i) => {
  for (var n = i > 1 ? void 0 : i ? T(e, s) : e, o = t.length - 1, u; o >= 0; o--)
    (u = t[o]) && (n = (i ? u(e, s, n) : u(n)) || n);
  return i && n && E(e, s, n), n;
};
const m = "SET_WAYPOINTS", d = "SET_COSTING", _ = "OPTIMIZE_ROUTE";
function I(t, e = 6) {
  const s = Math.pow(10, e), i = [];
  let n = 0, o = 0, u = 0;
  for (; n < t.length; ) {
    let r = 0, a = 0, l;
    do
      l = t.charCodeAt(n++) - 63, a |= (l & 31) << r, r += 5;
    while (l >= 32);
    o += a & 1 ? ~(a >> 1) : a >> 1, r = 0, a = 0;
    do
      l = t.charCodeAt(n++) - 63, a |= (l & 31) << r, r += 5;
    while (l >= 32);
    u += a & 1 ? ~(a >> 1) : a >> 1, i.push([u / s, o / s]);
  }
  return i;
}
function P(t, e) {
  const s = [];
  for (let i = 0; i < t.length; i++) {
    const n = I(t[i].shape);
    s.push({
      type: "Feature",
      properties: {
        legIndex: i,
        length: t[i].length,
        time: t[i].time
      },
      geometry: {
        type: "LineString",
        coordinates: n
      }
    });
  }
  return e.forEach((i, n) => {
    let o = "via";
    n === 0 ? o = "start" : n === e.length - 1 && (o = "end"), s.push({
      type: "Feature",
      properties: {
        waypointIndex: n,
        role: o,
        name: i.name || ""
      },
      geometry: {
        type: "Point",
        coordinates: [i.lon, i.lat]
      }
    });
  }), {
    type: "FeatureCollection",
    features: s
  };
}
let p = class extends v {
  connection = "";
  costing = "auto";
  units = "kilometers";
  language = "de-DE";
  waypoints = [];
  lastResult = null;
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection, this.costing = t.costing || "auto", this.units = t.units || "kilometers", this.language = t.language || "de-DE";
  }
  toPlainObject(t) {
    return JSON.parse(JSON.stringify(t));
  }
  async getData(t) {
    if (!this.lastResult)
      return t === "object" ? null : JSON.stringify(null);
    const e = this.toPlainObject({
      geojson: this.lastResult.geojson,
      summary: this.lastResult.summary,
      legs: this.lastResult.legs,
      waypoints: this.lastResult.waypoints
    });
    return t === "object" ? e : t === "string" ? JSON.stringify(e) : t === "geojson" ? e.geojson : e;
  }
  async getOriginalData() {
    return this.lastResult?.raw ? this.toPlainObject(this.lastResult.raw) : null;
  }
  async callEvent(t, e, s = !0) {
    if (t === m) {
      const { waypoints: i, costing: n } = e;
      i && (this.waypoints = i), n && (this.costing = n), await this.calculateRoute(), s && this.notify();
    } else if (t === d)
      this.costing = e.costing, this.waypoints.length >= 2 && (await this.calculateRoute(), s && this.notify());
    else if (t === _) {
      const { waypoints: i, costing: n } = e;
      i && (this.waypoints = i), n && (this.costing = n), await this.calculateRoute("/optimized_route", !0), s && this.notify();
    }
  }
  findWaypointName(t, e, s) {
    return s.find(
      (o) => Math.abs(o.lat - t) < 1e-3 && Math.abs(o.lon - e) < 1e-3
    )?.name || `${t.toFixed(4)}, ${e.toFixed(4)}`;
  }
  async calculateRoute(t = "/route", e = !1) {
    if (this.waypoints.length < 2) {
      this.lastResult = null;
      return;
    }
    if (!this.connectionRepository)
      throw new Error(
        "ConnectionRepository is not provided to Store Classes"
      );
    const s = this.connectionRepository.getConnection(
      this.connection
    ), i = [...this.waypoints], n = JSON.stringify({
      locations: this.waypoints.map((a) => ({
        lat: a.lat,
        lon: a.lon,
        radius: 500
      })),
      costing: this.costing,
      units: this.units,
      language: this.language,
      directions_options: {
        units: this.units
      }
    }), o = "?json=" + encodeURIComponent(n), r = await (await s.fetch(
      { url: t + o }
    )).json();
    if (r.trip) {
      const a = r.trip.legs.map((c) => ({
        maneuvers: c.maneuvers.map((h) => ({
          instruction: h.instruction,
          length: h.length,
          time: h.time,
          type: h.type,
          street_names: h.street_names,
          begin_shape_index: h.begin_shape_index,
          end_shape_index: h.end_shape_index
        })),
        length: c.summary.length,
        time: c.summary.time,
        shape: c.shape
      })), l = {
        length: r.trip.summary.length,
        time: r.trip.summary.time
      };
      e && r.trip.locations && (this.waypoints = r.trip.locations.map((c) => ({
        lat: c.lat,
        lon: c.lon,
        name: this.findWaypointName(c.lat, c.lon, i)
      }))), this.lastResult = {
        geojson: P(a, this.waypoints),
        summary: {
          distance_km: l.length,
          duration_min: Math.round(l.time / 60)
        },
        legs: a,
        waypoints: [...this.waypoints],
        raw: r
      };
    } else
      console.warn("Valhalla route error:", r), this.lastResult = null;
  }
  destroy() {
    this.stopPolling(), this.lastResult = null, this.waypoints = [];
  }
  static validateConfiguration(t) {
    return !0;
  }
};
f([
  S(j)
], p.prototype, "connectionRepository", 2);
p = f([
  b()
], p);
const g = R("ValhallaStoreFactory"), N = Symbol.for(g);
function w({ services: t }) {
  t.register(g, (e) => {
    if (!p.validateConfiguration(e))
      throw new Error(
        "Invalid ValhallaStore configuration. Please provide a valid configuration."
      );
    const s = t.construct(p);
    return s.init(e), s;
  });
}
function O({ services: t }) {
  t.unregister(g);
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OPTIMIZE_ROUTE: _,
  SET_COSTING: d,
  SET_WAYPOINTS: m,
  VALHALLA_STORE_FACTORY: g,
  activate: w,
  deactivate: O,
  factorySymbol: N
}, Symbol.toStringTag, { value: "Module" })), y = "org.eclipse.daanse.board.app.lib.datasource.valhalla", x = "0.0.1-next.1";
async function M(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${y}: tsm runtime is not initialized`);
  e.register(y, C, x, "lib.datasource.valhalla"), await w?.(t);
}
async function J(t) {
  await O?.(t);
}
export {
  _ as OPTIMIZE_ROUTE,
  d as SET_COSTING,
  m as SET_WAYPOINTS,
  g as VALHALLA_STORE_FACTORY,
  M as activate,
  J as deactivate,
  N as factorySymbol
};
