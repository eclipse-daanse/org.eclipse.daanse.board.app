import { DATASOURCE_REPOSITORY as W } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as _ } from "org.eclipse.daanse.board.app.lib.datasource.base";
const { serviceId: D } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class H extends _ {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(e) {
    super(), this.datasourceRepository = e;
  }
  destroy() {
    console.log("Destroying WeatherComposer");
  }
  connectedDatasources = [];
  thingId;
  customMapping;
  isUpdating = !1;
  pendingUpdate = !1;
  cachedData = null;
  lastRelevantThings = /* @__PURE__ */ new Set();
  // Default mapping for weather data streams
  defaultMapping = {
    temperature: [
      "currentweather~tempabovesurface5",
      "temperature",
      "temp",
      "temperatur",
      "lufttemperatur",
      "air_temperature",
      "airtemperature",
      "tempabovesurface"
    ],
    humidity: [
      "humidity",
      "feuchte",
      "luftfeuchte",
      "relative_humidity",
      "relativehumidity",
      "rh"
    ],
    pressure: [
      "currentWeather~surfacePressure",
      "luftdruck",
      "air_pressure",
      "airpressure",
      "surfacepressure",
      "atmospheric_pressure"
    ],
    windSpeed: [
      "~currentWeather~windSpeed",
      "windgeschwindigkeit",
      "wind_speed",
      "wind",
      "windvelocity"
    ],
    windDirection: [
      "~currentWeather~windDirection",
      "windrichtung",
      "wind_direction",
      "winddirection",
      "winddir"
    ],
    precipitation: [
      "~currentWeather~precipitationSignificantWeatherTotal",
      "niederschlag",
      "rain",
      "regen",
      "rainfall",
      "precipitationamount",
      "precipitationlarger"
    ],
    visibility: [
      "~currentWeather~visibility",
      "sicht",
      "sichtweite",
      "visual_range"
    ],
    cloudCover: [
      "~currentWeather~cloudCoverEffective",
      "wolken",
      "bedeckung",
      "cloud_cover",
      "cloudcoverbelow",
      "cloudcovertotal",
      "cloudcovereffective"
    ],
    // Forecast mappings for different time periods
    temperatureForecast: {
      forecast3h: ["~forecast3H~tempAboveSurface5", "temp3h", "temperature3h", "temp_3h"],
      forecast6h: ["~forecast6H~tempAboveSurface5", "temp6h", "temperature6h", "temp_6h"],
      forecast9h: ["~forecast9H~tempAboveSurface5", "temp9h", "temperature9h", "temp_9h"],
      forecast12h: ["~forecast12H~tempAboveSurface5", "forecast12h~tempabovesurface5", "temp12h", "temperature12h", "temp_12h"],
      forecast24h: ["~forecast24H~tempAboveSurface5", "temp24h", "temperature24h", "temp_24h"],
      forecast36h: ["~forecast36H~tempAboveSurface5", "temp36h", "temperature36h", "temp_36h"],
      forecast48h: ["~forecast48H~tempAboveSurface5", "temp48h", "temperature48h", "temp_48h"],
      forecast60h: ["~forecast60H~tempAboveSurface5", "temp60h", "temperature60h", "temp_60h"],
      forecast72h: ["~forecast72H~tempAboveSurface5", "temp72h", "temperature72h", "temp_72h"]
    },
    humidityForecast: {
      forecast12h: ["forecast12h~humidity", "humidity12h", "feuchte12h", "rh12h"],
      forecast24h: ["forecast24h~humidity", "humidity24h", "feuchte24h", "rh24h"],
      forecast36h: ["forecast36h~humidity", "humidity36h", "feuchte36h", "rh36h"],
      forecast48h: ["forecast48h~humidity", "humidity48h", "feuchte48h", "rh48h"],
      forecast60h: ["forecast60h~humidity", "humidity60h", "feuchte60h", "rh60h"],
      forecast72h: ["forecast72h~humidity", "humidity72h", "feuchte72h", "rh72h"]
    },
    pressureForecast: {
      forecast12h: ["~forecast12H~surfacePressure", "forecast12h~pressure", "pressure12h", "luftdruck12h"],
      forecast24h: ["~forecast24H~surfacePressure", "pressure24h", "luftdruck24h"],
      forecast36h: ["~forecast36H~surfacePressure", "pressure36h", "luftdruck36h"],
      forecast48h: ["~forecast48H~surfacePressure", "pressure48h", "luftdruck48h"],
      forecast60h: ["~forecast60H~surfacePressure", "pressure60h", "luftdruck60h"],
      forecast72h: ["~forecast72H~surfacePressure", "pressure72h", "luftdruck72h"]
    },
    windSpeedForecast: {
      forecast12h: ["~forecast12H~windSpeed", "windspeed12h", "wind12h"],
      forecast24h: ["~forecast24H~windSpeed", "windspeed24h", "wind24h"],
      forecast36h: ["~forecast36H~windSpeed", "windspeed36h", "wind36h"],
      forecast48h: ["~forecast48H~windSpeed", "windspeed48h", "wind48h"],
      forecast60h: ["~forecast60H~windSpeed", "windspeed60h", "wind60h"],
      forecast72h: ["~forecast72H~windSpeed", "windspeed72h", "wind72h"]
    },
    windDirectionForecast: {
      forecast12h: ["~forecast12H~windDirection", "winddirection12h", "windrichtung12h"],
      forecast24h: ["~forecast24H~windDirection", "winddirection24h", "windrichtung24h"],
      forecast36h: ["~forecast36H~windDirection", "winddirection36h", "windrichtung36h"],
      forecast48h: ["~forecast48H~windDirection", "winddirection48h", "windrichtung48h"],
      forecast60h: ["~forecast60H~windDirection", "winddirection60h", "windrichtung60h"],
      forecast72h: ["~forecast72H~windDirection", "winddirection72h", "windrichtung72h"]
    },
    precipitationForecast: {
      forecast12h: ["~forecast12H~precipitationSignificantWeatherTotal", "~forecast12H~precipitationSignificantWeatherTotal", "forecast12h~precipitation", "precipitation12h", "niederschlag12h"],
      forecast24h: ["~forecast24H~precipitationSignificantWeatherTotal", "precipitation24h", "niederschlag24h"],
      forecast36h: ["~forecast36H~precipitationSignificantWeatherTotal", "precipitation36h", "niederschlag36h"],
      forecast48h: ["~forecast48H~precipitationSignificantWeatherTotal", "precipitation48h", "niederschlag48h"],
      forecast60h: ["~forecast60H~precipitationSignificantWeatherTotal", "precipitation60h", "niederschlag60h"],
      forecast72h: ["~forecast72H~precipitationSignificantWeatherTotal", "precipitation72h", "niederschlag72h"]
    },
    visibilityForecast: {
      forecast12h: ["~forecast12H~visibility", "visibility12h", "sicht12h"],
      forecast24h: ["~forecast24H~visibility", "visibility24h", "sicht24h"],
      forecast36h: ["~forecast36H~visibility", "visibility36h", "sicht36h"],
      forecast48h: ["~forecast48H~visibility", "visibility48h", "sicht48h"],
      forecast60h: ["~forecast60H~visibility", "visibility60h", "sicht60h"],
      forecast72h: ["~forecast72H~visibility", "visibility72h", "sicht72h"]
    },
    cloudCoverForecast: {
      forecast12h: ["~forecast12H~cloudCoverTotal", "~forecast12H~cloudCoverEffective", "forecast12h~cloudcover", "cloudcover12h", "bedeckung12h"],
      forecast24h: ["~forecast24H~cloudCoverTotal", "cloudcover24h", "bedeckung24h"],
      forecast36h: ["~forecast36H~cloudCoverTotal", "cloudcover36h", "bedeckung36h"],
      forecast48h: ["~forecast48H~cloudCoverTotal", "cloudcover48h", "bedeckung48h"],
      forecast60h: ["~forecast60H~cloudCoverTotal", "cloudcover60h", "bedeckung60h"],
      forecast72h: ["~forecast72H~cloudCoverTotal", "cloudcover72h", "bedeckung72h"]
    }
  };
  static availableTypes = ["ogcsta"];
  init(e) {
    super.init(e), this.connectedDatasources = e.connectedDatasources, this.thingId = e.thingId, this.customMapping = e.customMapping;
  }
  async getData(e, t) {
    const r = this.datasourceRepository, m = await Promise.all(
      this.connectedDatasources.filter((o) => o).map(async (o) => {
        if (!r)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        const u = r.getDatasource(o), s = this.thingId ? {
          ...t,
          filter: {
            things: {
              ids: [this.thingId],
              includeDatastreams: !0,
              includeLocations: !0
            }
          }
        } : {
          ...t,
          filter: {
            things: {
              all: {
                includeDatastreams: !0,
                includeLocations: !0
              }
            }
          }
        };
        let c = await u.getData("OGCSTAData", s);
        if (console.log("Weather Composer: Things and Datastreams loaded (no observations):", c), c?.things) {
          const f = [], v = { ...this.defaultMapping, ...this.customMapping }, w = /* @__PURE__ */ new Set();
          for (const p of c.things)
            if (p.datastreams && p.datastreams.length > 0) {
              console.log(`🔍 Checking ${p.datastreams.length} datastreams for thing ${p.name}`);
              for (const n of p.datastreams) {
                if (w.size >= Object.keys(v).length) {
                  console.log("🎯 All weather parameters found, stopping search");
                  break;
                }
                const h = n.name?.toLowerCase() || "", i = n.description?.toLowerCase() || "", a = `${h} ${i}`, d = n.iotId;
                console.log(`🔍 Available datastream: "${n.name}" (ID: ${d}) - searchText: "${a}"`);
                for (const [l, y] of Object.entries(v))
                  if (!(w.has(l) && !l.endsWith("Forecast"))) {
                    if (l.endsWith("Forecast") && typeof y == "object" && !Array.isArray(y))
                      for (const [I, b] of Object.entries(y))
                        Array.isArray(b) && b.some((S) => d.includes(S) || a.includes(S)) && (console.log(`🎯 Found relevant datastream: ${n.name} (${d}) for ${l}.${I}`), f.push({
                          ...n,
                          thingId: p["@iot.id"] || p.iotId,
                          // Add thing reference
                          weatherParam: l,
                          // Track which parameter this is for
                          forecastPeriod: I
                          // Track which forecast period
                        }));
                    else if (Array.isArray(y) && (y.includes(d) || y.some((I) => a.includes(I)))) {
                      console.log(`🎯 Found relevant datastream: ${n.name} (${d}) for ${l}`), f.push({
                        ...n,
                        thingId: p["@iot.id"] || p.iotId,
                        // Add thing reference
                        weatherParam: l
                        // Track which parameter this is for
                      }), w.add(l);
                      break;
                    }
                  }
              }
              if (w.size >= Object.keys(v).length) {
                console.log("🎯 All weather parameters found in current thing, stopping thing search");
                break;
              }
            }
          if (console.log(`🎯 Found weather parameters: ${Array.from(w).join(", ")}`), f.length > 0) {
            console.log(`📊 Loading observations for ${f.length} relevant datastreams (out of total available)`);
            const p = f.filter((n) => {
              const h = c.things.find(
                (a) => a.datastreams?.find(
                  (d) => (d["@iot.id"] || d.iotId) == n["@iot.id"] || n.iotId
                )
              )?.datastreams?.find(
                (a) => (a["@iot.id"] || a.iotId) == (n["@iot.id"] || n.iotId)
              ), i = h?.observations && h.observations.length > 0;
              return console.log(`🔍 Datastream ${n.name} has observations: ${i}`), !i;
            });
            if (p.length > 0) {
              console.log(`📊 Loading observations for ${p.length} datastreams without observations`);
              const n = {
                ...t,
                filter: {
                  observations: p.map((i) => {
                    const a = i["@iot.id"] || i.iotId || i.id;
                    return console.log(`🔍 Mapping datastream for observations: ${i.name} -> ID: ${a}`), a || console.error("❌ No datastream ID found for datastream:", i), {
                      iotId: a,
                      // OGC STA expects iotId, not datastreamId
                      $top: 1,
                      $orderby: "phenomenonTime desc"
                    };
                  }).filter((i) => i.iotId !== void 0 && i.iotId !== null)
                }
              }, h = await u.getData("OGCSTAData", n);
              h?.observations && (console.log(`✅ Received ${h.observations.length} observations`), c.things.forEach((i) => {
                i.datastreams && i.datastreams.forEach((a) => {
                  const d = h.observations?.find(
                    (l) => l.ds_source == a["@iot.id"] || l.ds_source == a.iotId
                  );
                  d && (a.observations = [d], console.log(`✅ Added observation to ${a.name}: ${d.result}`));
                });
              }));
            } else
              console.log("ℹ️ All relevant datastreams already have observations, skipping observation fetch");
          } else
            console.log("⚠️ No relevant datastreams found for weather mapping");
        }
        return console.log(c), c;
      })
    );
    if (e === "WeatherData") {
      const o = this.composeWeatherData(m);
      return this.cachedData = o, o;
    } else
      return console.warn("Invalid data type for WeatherComposer"), null;
  }
  async getOriginalData() {
    return [];
  }
  callEvent(e, t) {
    console.warn(`Event "${e}" is not available for WeatherComposer`, t);
  }
  composeWeatherData(e) {
    const t = [];
    return console.log("🌤️ WeatherComposer: Starting data composition", e), e.forEach((r, m) => {
      if (console.log(`🌤️ Processing datasource ${m}:`, r), !r?.things) {
        console.log("❌ No things found in datasource");
        return;
      }
      console.log(`✅ Found ${r.things.length} things`), r.things.forEach((o) => {
        const u = o["@iot.id"] || o.iotId || o.id;
        if (console.log(`🏠 Processing thing ${u}:`, o.name), console.log("    Thing object keys:", Object.keys(o)), console.log("    Thing:", o), this.thingId && u != this.thingId && String(u) != String(this.thingId)) {
          console.log(`⏭️ Skipping thing ${u} - doesn't match filter ${this.thingId}`);
          return;
        }
        const s = {
          thingId: u,
          location: this.extractLocationInfo(o)
        };
        let c = 0;
        if (o.datastreams && o.datastreams.length > 0)
          c = o.datastreams.length, o.datastreams.forEach((f) => {
            this.processDatastream(f, s);
          });
        else if (r.datastreams) {
          const f = r.datastreams.filter(
            (v) => v.thing && v.thing["@iot.id"] == o["@iot.id"]
          );
          c = f.length, f.forEach((v) => {
            this.processDatastream(v, s);
          });
        }
        console.log("🌤️ Weather data after processing:", s), this.hasWeatherMeasurements(s) ? (console.log(`✅ Adding weather data for thing ${u}`), t.push(s)) : (console.log(`❌ No weather measurements found for thing ${u}`), console.log(`   - Processed ${c} datastreams`));
      });
    }), t;
  }
  extractLocationInfo(e) {
    const t = {
      name: e.name || "Unknown Location",
      description: e.description
    };
    if (e.locations && e.locations.length > 0) {
      const r = e.locations[0];
      r.location?.coordinates && (t.coordinates = {
        latitude: r.location.coordinates[1],
        longitude: r.location.coordinates[0]
      });
    }
    return t;
  }
  processDatastream(e, t) {
    if (!e.observations || e.observations.length === 0)
      return;
    const r = e.observations[0], m = e.name?.toLowerCase() || "", o = e.description?.toLowerCase() || "", u = `${m} ${o}`, s = e.iotId, c = {
      value: r.result,
      unit: e.unitOfMeasurement?.symbol || "",
      timestamp: r.phenomenonTime || r.resultTime || "",
      quality: r.resultQuality || void 0
    }, f = { ...this.defaultMapping, ...this.customMapping }, v = s.includes("~currentWeather~"), w = s.match(/~forecast(\d+)H~/), p = !!w;
    console.log(`      🔍 Processing datastream: ${s}, isCurrentWeather: ${v}, isForecast: ${p}`);
    let n = !1;
    for (const [h, i] of Object.entries(f))
      if (h.endsWith("Forecast") && typeof i == "object" && !Array.isArray(i) && p) {
        const d = `forecast${w[1]}h`;
        console.log(`      🔍 Looking for forecast period: ${d} in ${h}`);
        const l = i[d], y = s.split("~").pop()?.toLowerCase();
        let I = !1;
        if (Array.isArray(l))
          I = l.some(
            (b) => s.includes(b) || u.includes(b) || y && b.toLowerCase().includes(y)
          );
        else {
          const b = h.replace("Forecast", "").toLowerCase();
          I = y?.includes(b) || u.includes(b);
        }
        if (I) {
          console.log(`      ✅ Matched "${h}.${d}" with ID "${s}"`), t[h] || (t[h] = {}), t[h][d] = c, n = !0;
          break;
        }
      } else if (Array.isArray(i) && v) {
        const a = s.split("~").pop()?.toLowerCase();
        if (i.some(
          (l) => s.includes(l) || u.includes(l) || a && l.toLowerCase().includes(a)
        )) {
          console.log(`      ✅ Matched current "${h}" with ID "${s}"`), t[h] = c, n = !0;
          break;
        }
      }
    n || console.log(`      ❌ No match found for "${s}" (searchText: "${u}")`);
  }
  hasWeatherMeasurements(e) {
    return !!// Current weather measurements
    (e.temperature || e.humidity || e.pressure || e.windSpeed || e.windDirection || e.precipitation || e.visibility || e.cloudCover || // Forecast measurements
    e.temperatureForecast || e.humidityForecast || e.pressureForecast || e.windSpeedForecast || e.windDirectionForecast || e.precipitationForecast || e.visibilityForecast || e.cloudCoverForecast);
  }
  static validateConfiguration(e) {
    return !(!e.connectedDatasources || !Array.isArray(e.connectedDatasources) || e.connectedDatasources.length === 0);
  }
  // Helper method to get weather data for a specific thing
  async getWeatherForThing(e) {
    const t = this.thingId;
    this.thingId = e;
    try {
      const r = await this.getData("WeatherData");
      return r.length > 0 ? r[0] : null;
    } finally {
      this.thingId = t;
    }
  }
  // Helper method to get all available weather data
  async getAllWeatherData() {
    const e = this.thingId;
    this.thingId = void 0;
    try {
      return await this.getData("WeatherData");
    } finally {
      this.thingId = e;
    }
  }
  // Helper method to get current weather summary for widget
  getCurrentWeather(e) {
    if (!e || !Array.isArray(e) || e.length === 0)
      return null;
    let t = e[0];
    if (this.thingId) {
      const r = e.find(
        (m) => m.thingId == this.thingId || String(m.thingId) == String(this.thingId)
      );
      r && (t = r);
    }
    return {
      location: t.location,
      thingId: t.thingId,
      measurements: {
        temperature: t.temperature,
        humidity: t.humidity,
        pressure: t.pressure,
        windSpeed: t.windSpeed,
        windDirection: t.windDirection,
        precipitation: t.precipitation,
        visibility: t.visibility,
        cloudCover: t.cloudCover
      },
      lastUpdated: this.getLatestTimestamp(t)
    };
  }
  // Helper to get the most recent timestamp from all measurements
  getLatestTimestamp(e) {
    const t = [
      e.temperature?.timestamp,
      e.humidity?.timestamp,
      e.pressure?.timestamp,
      e.windSpeed?.timestamp,
      e.windDirection?.timestamp,
      e.precipitation?.timestamp,
      e.visibility?.timestamp,
      e.cloudCover?.timestamp
    ].filter(Boolean);
    if (t.length !== 0)
      return t.reduce((r, m) => new Date(m) > new Date(r) ? m : r);
  }
  // Check if relevant things have changed before doing expensive processing
  async checkForRelevantChanges() {
    try {
      const e = this.datasourceRepository, t = /* @__PURE__ */ new Set();
      for (const m of this.connectedDatasources.filter((o) => o)) {
        const o = e.getDatasource(m), u = this.thingId ? {
          filter: {
            things: {
              ids: [this.thingId]
            }
          }
        } : {
          filter: {
            things: {
              all: {
                includeDatastreams: !1,
                // Only get thing metadata
                includeLocations: !1
              }
            }
          }
        }, s = await o.getData("OGCSTAData", u);
        s?.things && s.things.forEach((c) => {
          const f = c["@iot.id"] || c.iotId || c.id;
          (!this.thingId || f == this.thingId || String(f) == String(this.thingId)) && t.add(String(f));
        });
      }
      const r = !this.setsEqual(t, this.lastRelevantThings);
      return r && (console.log("🔄 Relevant things changed:"), console.log(`   Previous: [${Array.from(this.lastRelevantThings).join(", ")}]`), console.log(`   Current: [${Array.from(t).join(", ")}]`), this.lastRelevantThings = t), r;
    } catch (e) {
      return console.warn("⚠️ Error checking for relevant changes, proceeding with full update:", e), !0;
    }
  }
  // Helper to compare two sets
  setsEqual(e, t) {
    return e.size === t.size && [...e].every((r) => t.has(r));
  }
}
const $ = D("WeatherComposer"), k = Symbol.for($);
function F(g) {
  return (e) => {
    if (!H.validateConfiguration(e))
      throw new Error(
        "Invalid WeatherComposer configuration. Please provide a valid configuration."
      );
    const t = new H(g);
    return t.init(e), t;
  };
}
function T({ services: g }) {
  g.register($, F(g.getRequired(W)));
}
function A({ services: g }) {
  g.unregister($);
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WEATHER_COMPOSER: $,
  WeatherComposer: H,
  activate: T,
  deactivate: A,
  symbol: k
}, Symbol.toStringTag, { value: "Module" })), C = "org.eclipse.daanse.board.app.lib.composer.weather", O = "0.0.1-next.1";
async function L(g) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${C}: tsm runtime is not initialized`);
  e.register(C, P, O, "lib.composer.weather"), await T?.(g);
}
async function M(g) {
  await A?.(g);
}
export {
  $ as WEATHER_COMPOSER,
  H as WeatherComposer,
  L as activate,
  M as deactivate,
  k as symbol
};
