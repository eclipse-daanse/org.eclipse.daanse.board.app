const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { inject, injectable } from "@eclipse-daanse/tsm";
const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
const { CONNECTION_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.connection");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
const SET_WAYPOINTS = "SET_WAYPOINTS";
const SET_COSTING = "SET_COSTING";
const OPTIMIZE_ROUTE = "OPTIMIZE_ROUTE";
function decodePolyline(encoded, precision = 6) {
  const factor = Math.pow(10, precision);
  const coords = [];
  let index = 0;
  let lat = 0;
  let lng = 0;
  while (index < encoded.length) {
    let shift = 0;
    let result = 0;
    let byte;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 31) << shift;
      shift += 5;
    } while (byte >= 32);
    lat += result & 1 ? ~(result >> 1) : result >> 1;
    shift = 0;
    result = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 31) << shift;
      shift += 5;
    } while (byte >= 32);
    lng += result & 1 ? ~(result >> 1) : result >> 1;
    coords.push([lng / factor, lat / factor]);
  }
  return coords;
}
function shapeToGeoJSON(legs, waypoints) {
  const features = [];
  for (let i = 0; i < legs.length; i++) {
    const coords = decodePolyline(legs[i].shape);
    features.push({
      type: "Feature",
      properties: {
        legIndex: i,
        length: legs[i].length,
        time: legs[i].time
      },
      geometry: {
        type: "LineString",
        coordinates: coords
      }
    });
  }
  waypoints.forEach((wp, i) => {
    let role = "via";
    if (i === 0) role = "start";
    else if (i === waypoints.length - 1) role = "end";
    features.push({
      type: "Feature",
      properties: {
        waypointIndex: i,
        role,
        name: wp.name || ""
      },
      geometry: {
        type: "Point",
        coordinates: [wp.lon, wp.lat]
      }
    });
  });
  return {
    type: "FeatureCollection",
    features
  };
}
let ValhallaStore = class extends BaseDatasource {
  connection = "";
  costing = "auto";
  units = "kilometers";
  language = "de-DE";
  waypoints = [];
  lastResult = null;
  connectionRepository;
  init(configuration) {
    super.init(configuration);
    this.connection = configuration.connection;
    this.costing = configuration.costing || "auto";
    this.units = configuration.units || "kilometers";
    this.language = configuration.language || "de-DE";
  }
  toPlainObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  async getData(type) {
    if (!this.lastResult) {
      return type === "object" ? null : JSON.stringify(null);
    }
    const plain = this.toPlainObject({
      geojson: this.lastResult.geojson,
      summary: this.lastResult.summary,
      legs: this.lastResult.legs,
      waypoints: this.lastResult.waypoints
    });
    if (type === "object") {
      return plain;
    } else if (type === "string") {
      return JSON.stringify(plain);
    } else if (type === "geojson") {
      return plain.geojson;
    }
    return plain;
  }
  async getOriginalData() {
    if (!this.lastResult?.raw) return null;
    return this.toPlainObject(this.lastResult.raw);
  }
  async callEvent(event, params, shouldUpdate = true) {
    if (event === SET_WAYPOINTS) {
      const { waypoints, costing } = params;
      if (waypoints) this.waypoints = waypoints;
      if (costing) this.costing = costing;
      await this.calculateRoute();
      if (shouldUpdate) this.notify();
    } else if (event === SET_COSTING) {
      this.costing = params.costing;
      if (this.waypoints.length >= 2) {
        await this.calculateRoute();
        if (shouldUpdate) this.notify();
      }
    } else if (event === OPTIMIZE_ROUTE) {
      const { waypoints, costing } = params;
      if (waypoints) this.waypoints = waypoints;
      if (costing) this.costing = costing;
      await this.calculateRoute("/optimized_route", true);
      if (shouldUpdate) this.notify();
    }
  }
  findWaypointName(lat, lon, originals) {
    const threshold = 1e-3;
    const match = originals.find(
      (wp) => Math.abs(wp.lat - lat) < threshold && Math.abs(wp.lon - lon) < threshold
    );
    return match?.name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  }
  async calculateRoute(endpoint = "/route", reorderWaypoints = false) {
    if (this.waypoints.length < 2) {
      this.lastResult = null;
      return;
    }
    if (!this.connectionRepository) {
      throw new Error(
        "ConnectionRepository is not provided to Store Classes"
      );
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const originalWaypoints = [...this.waypoints];
    const jsonParam = JSON.stringify({
      locations: this.waypoints.map((wp) => ({
        lat: wp.lat,
        lon: wp.lon,
        radius: 500
      })),
      costing: this.costing,
      units: this.units,
      language: this.language,
      directions_options: {
        units: this.units
      }
    });
    const queryString = "?json=" + encodeURIComponent(jsonParam);
    const response = await connection.fetch(
      { url: endpoint + queryString }
    );
    const data = await response.json();
    if (data.trip) {
      const legs = data.trip.legs.map((leg) => ({
        maneuvers: leg.maneuvers.map((m) => ({
          instruction: m.instruction,
          length: m.length,
          time: m.time,
          type: m.type,
          street_names: m.street_names,
          begin_shape_index: m.begin_shape_index,
          end_shape_index: m.end_shape_index
        })),
        length: leg.summary.length,
        time: leg.summary.time,
        shape: leg.shape
      }));
      const summary = {
        length: data.trip.summary.length,
        time: data.trip.summary.time
      };
      if (reorderWaypoints && data.trip.locations) {
        this.waypoints = data.trip.locations.map((loc) => ({
          lat: loc.lat,
          lon: loc.lon,
          name: this.findWaypointName(loc.lat, loc.lon, originalWaypoints)
        }));
      }
      this.lastResult = {
        geojson: shapeToGeoJSON(legs, this.waypoints),
        summary: {
          distance_km: summary.length,
          duration_min: Math.round(summary.time / 60)
        },
        legs,
        waypoints: [...this.waypoints],
        raw: data
      };
    } else {
      console.warn("Valhalla route error:", data);
      this.lastResult = null;
    }
  }
  destroy() {
    this.stopPolling();
    this.lastResult = null;
    this.waypoints = [];
  }
  static validateConfiguration(configuration) {
    return true;
  }
};
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], ValhallaStore.prototype, "connectionRepository", 2);
ValhallaStore = __decorateClass([
  injectable()
], ValhallaStore);
const VALHALLA_STORE_FACTORY = serviceId("ValhallaStoreFactory");
const factorySymbol = Symbol.for(VALHALLA_STORE_FACTORY);
function activate$1({ services }) {
  services.register(VALHALLA_STORE_FACTORY, (config) => {
    if (!ValhallaStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid ValhallaStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(ValhallaStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(VALHALLA_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OPTIMIZE_ROUTE,
  SET_COSTING,
  SET_WAYPOINTS,
  VALHALLA_STORE_FACTORY,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.valhalla";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.valhalla");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  OPTIMIZE_ROUTE,
  SET_COSTING,
  SET_WAYPOINTS,
  VALHALLA_STORE_FACTORY,
  activate,
  deactivate,
  factorySymbol
};
