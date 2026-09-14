(function(){var i="ui.vue.composer.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".weather-composer-preview[data-v-2a15dca0]{padding:16px;background:#f8f9fa;border-radius:8px;max-width:400px}.preview-header h3[data-v-2a15dca0]{margin:0 0 16px;color:#495057;font-size:1.2em}.preview-content[data-v-2a15dca0]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-2a15dca0]{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #dee2e6}.info-item .label[data-v-2a15dca0]{color:#6c757d;font-weight:500}.info-item .value[data-v-2a15dca0]{color:#495057;font-weight:600}.capabilities[data-v-2a15dca0]{margin-top:16px}.capabilities h4[data-v-2a15dca0]{margin:0 0 8px;color:#495057;font-size:1em}.capabilities ul[data-v-2a15dca0]{list-style:none;padding:0;margin:0}.capabilities li[data-v-2a15dca0]{padding:4px 0;color:#6c757d;font-size:.9em}.preview-empty[data-v-2a15dca0]{text-align:center;color:#6c757d;font-style:italic;padding:20px}.weather-stations[data-v-2a15dca0]{display:flex;flex-direction:column;gap:16px}.weather-station[data-v-2a15dca0]{background:#fff;border-radius:8px;padding:16px;border:1px solid #e9ecef;box-shadow:0 1px 3px #0000001a}.station-header[data-v-2a15dca0]{margin-bottom:16px;border-bottom:1px solid #f1f3f4;padding-bottom:12px}.station-header h4[data-v-2a15dca0]{margin:0 0 4px;color:#343a40;font-size:1.1em}.station-header small[data-v-2a15dca0]{display:block;color:#6c757d;margin-bottom:2px}.coordinates[data-v-2a15dca0]{font-family:monospace;font-size:.85em!important}.weather-measurements[data-v-2a15dca0]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin-bottom:12px}.measurement[data-v-2a15dca0]{display:flex;align-items:center;gap:8px;padding:8px;background:#f8f9fa;border-radius:6px;border:1px solid #e9ecef}.measurement-icon[data-v-2a15dca0]{font-size:1.2em;width:24px;text-align:center}.measurement-info[data-v-2a15dca0]{display:flex;flex-direction:column;flex:1}.measurement-info .label[data-v-2a15dca0]{font-size:.85em;color:#6c757d;font-weight:500}.measurement-info .value[data-v-2a15dca0]{font-size:1em;color:#495057;font-weight:600}.timestamp[data-v-2a15dca0]{text-align:center;padding-top:8px;border-top:1px solid #f1f3f4}.timestamp small[data-v-2a15dca0]{color:#6c757d;font-size:.8em}.weather-composer-settings[data-v-c7230bfa]{display:flex;flex-direction:column;gap:16px;padding:16px;max-height:600px;overflow-y:auto}.section-description[data-v-c7230bfa]{margin:0 0 16px;color:#6c757d;font-size:.9em}.collapsible-section[data-v-c7230bfa]{border:1px solid #dee2e6;border-radius:8px;overflow:hidden}.collapsible-header[data-v-c7230bfa]{display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;padding:12px 16px;background:#f8f9fa;border-bottom:1px solid #dee2e6}.collapsible-header[data-v-c7230bfa]:hover{background:#e9ecef}.collapsible-header h3[data-v-c7230bfa]{margin:0;color:#495057;font-size:1.1em}.collapse-icon[data-v-c7230bfa]{font-size:12px;transition:transform .2s ease;color:#6c757d}.collapse-icon.expanded[data-v-c7230bfa]{transform:rotate(-180deg)}.collapsible-content[data-v-c7230bfa]{padding:16px;animation:slideDown-c7230bfa .2s ease-out}@keyframes slideDown-c7230bfa{0%{opacity:0;max-height:0}to{opacity:1;max-height:800px}}.mapping-item[data-v-c7230bfa]{margin-bottom:12px}\n";})();
import { identifier as E, DATASOURCE_REPOSITORY as _ } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as V, shallowRef as M, ref as g, watch as C, createElementBlock as n, openBlock as l, createElementVNode as s, Fragment as W, renderList as I, createCommentVNode as r, toDisplayString as a, computed as x, inject as O, createVNode as k, unref as S, normalizeClass as R } from "vue";
import { useTemporaryStore as A } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as T, DInput as L } from "org.eclipse.daanse.board.app.ui.vue.controls";
const $ = { class: "weather-composer-preview" }, N = {
  key: 0,
  class: "preview-empty"
}, U = {
  key: 1,
  class: "weather-stations"
}, F = { class: "station-header" }, j = { key: 0 }, q = {
  key: 1,
  class: "coordinates"
}, B = { class: "weather-measurements" }, G = {
  key: 0,
  class: "measurement"
}, H = { class: "measurement-info" }, z = { class: "value" }, K = {
  key: 1,
  class: "measurement"
}, Q = { class: "measurement-info" }, Y = { class: "value" }, J = {
  key: 2,
  class: "measurement"
}, X = { class: "measurement-info" }, Z = { class: "value" }, ee = {
  key: 3,
  class: "measurement"
}, te = { class: "measurement-info" }, se = { class: "value" }, ie = {
  key: 4,
  class: "measurement"
}, ae = { class: "measurement-info" }, oe = { class: "value" }, ne = {
  key: 5,
  class: "measurement"
}, le = { class: "measurement-info" }, re = { class: "value" }, de = {
  key: 6,
  class: "measurement"
}, ue = { class: "measurement-info" }, ce = { class: "value" }, me = {
  key: 7,
  class: "measurement"
}, pe = { class: "measurement-info" }, ve = { class: "value" }, ge = {
  key: 0,
  class: "timestamp"
}, fe = /* @__PURE__ */ V({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(i) {
    const p = i, d = M(null), c = g(p.dataSource), { update: v } = A(p.dataSource.type, c, d), u = g(null);
    C(d, async () => {
      u.value = await d.value.getData("WeatherData");
    }), C(p.dataSource, () => {
      v();
    }, { deep: !0 });
    function y(o) {
      return ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"].some((t) => o[t]?.timestamp);
    }
    function h(o) {
      const e = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"];
      let t = "";
      return e.forEach((m) => {
        o[m]?.timestamp && o[m].timestamp > t && (t = o[m].timestamp);
      }), t;
    }
    function w(o) {
      if (!o) return "";
      try {
        return new Date(o).toLocaleString();
      } catch {
        return o;
      }
    }
    return (o, e) => (l(), n("div", $, [
      e[17] || (e[17] = s("div", { class: "preview-header" }, [
        s("h3", null, "🌤️ Weather Data Composer")
      ], -1)),
      !u.value || u.value.length === 0 ? (l(), n("div", N, [...e[0] || (e[0] = [
        s("p", null, "No weather data available", -1),
        s("small", null, "Configure connected datasources to see weather data", -1)
      ])])) : (l(), n("div", U, [
        (l(!0), n(W, null, I(u.value, (t) => (l(), n("div", {
          key: t.thingId,
          class: "weather-station"
        }, [
          s("div", F, [
            s("h4", null, "📍 " + a(t.location.name), 1),
            t.location.description ? (l(), n("small", j, a(t.location.description), 1)) : r("", !0),
            t.location.coordinates?.latitude != null && t.location.coordinates?.longitude != null ? (l(), n("small", q, a(t.location.coordinates.latitude.toFixed(4)) + "°N, " + a(t.location.coordinates.longitude.toFixed(4)) + "°E ", 1)) : r("", !0)
          ]),
          s("div", B, [
            t.temperature ? (l(), n("div", G, [
              e[2] || (e[2] = s("div", { class: "measurement-icon" }, "🌡️", -1)),
              s("div", H, [
                e[1] || (e[1] = s("span", { class: "label" }, "Temperature", -1)),
                s("span", z, a(t.temperature.value) + a(t.temperature.unit), 1)
              ])
            ])) : r("", !0),
            t.humidity ? (l(), n("div", K, [
              e[4] || (e[4] = s("div", { class: "measurement-icon" }, "💧", -1)),
              s("div", Q, [
                e[3] || (e[3] = s("span", { class: "label" }, "Humidity", -1)),
                s("span", Y, a(t.humidity.value) + a(t.humidity.unit), 1)
              ])
            ])) : r("", !0),
            t.pressure ? (l(), n("div", J, [
              e[6] || (e[6] = s("div", { class: "measurement-icon" }, "📊", -1)),
              s("div", X, [
                e[5] || (e[5] = s("span", { class: "label" }, "Pressure", -1)),
                s("span", Z, a(t.pressure.value) + a(t.pressure.unit), 1)
              ])
            ])) : r("", !0),
            t.windSpeed ? (l(), n("div", ee, [
              e[8] || (e[8] = s("div", { class: "measurement-icon" }, "💨", -1)),
              s("div", te, [
                e[7] || (e[7] = s("span", { class: "label" }, "Wind Speed", -1)),
                s("span", se, a(t.windSpeed.value) + a(t.windSpeed.unit), 1)
              ])
            ])) : r("", !0),
            t.windDirection ? (l(), n("div", ie, [
              e[10] || (e[10] = s("div", { class: "measurement-icon" }, "🧭", -1)),
              s("div", ae, [
                e[9] || (e[9] = s("span", { class: "label" }, "Wind Direction", -1)),
                s("span", oe, a(t.windDirection.value) + a(t.windDirection.unit), 1)
              ])
            ])) : r("", !0),
            t.precipitation ? (l(), n("div", ne, [
              e[12] || (e[12] = s("div", { class: "measurement-icon" }, "🌧️", -1)),
              s("div", le, [
                e[11] || (e[11] = s("span", { class: "label" }, "Precipitation", -1)),
                s("span", re, a(t.precipitation.value) + a(t.precipitation.unit), 1)
              ])
            ])) : r("", !0),
            t.visibility ? (l(), n("div", de, [
              e[14] || (e[14] = s("div", { class: "measurement-icon" }, "👁️", -1)),
              s("div", ue, [
                e[13] || (e[13] = s("span", { class: "label" }, "Visibility", -1)),
                s("span", ce, a(t.visibility.value) + a(t.visibility.unit), 1)
              ])
            ])) : r("", !0),
            t.cloudCover ? (l(), n("div", me, [
              e[16] || (e[16] = s("div", { class: "measurement-icon" }, "☁️", -1)),
              s("div", pe, [
                e[15] || (e[15] = s("span", { class: "label" }, "Cloud Cover", -1)),
                s("span", ve, a(t.cloudCover.value) + a(t.cloudCover.unit), 1)
              ])
            ])) : r("", !0)
          ]),
          y(t) ? (l(), n("div", ge, [
            s("small", null, "Last updated: " + a(w(h(t))), 1)
          ])) : r("", !0)
        ]))), 128))
      ]))
    ]));
  }
}), P = (i, p) => {
  const d = i.__vccOpts || i;
  for (const [c, v] of p)
    d[c] = v;
  return d;
}, ye = /* @__PURE__ */ P(fe, [["__scopeId", "data-v-2a15dca0"]]), he = { class: "weather-composer-settings" }, we = { class: "collapsible-section" }, be = {
  key: 0,
  class: "collapsible-content"
}, ke = /* @__PURE__ */ V({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {}
  },
  setup(i) {
    const p = x(() => i.dataSources.filter((o) => o.type === "ogcsta")), d = g([]), c = g(!1);
    C(() => i.config.connectedDatasources, async () => {
      await v();
    }, { immediate: !0 });
    async function v() {
      if (!i.config.connectedDatasources || i.config.connectedDatasources.length === 0) {
        d.value = [];
        return;
      }
      c.value = !0;
      try {
        const o = O(E), e = [];
        for (const t of i.config.connectedDatasources)
          try {
            const D = await o.getDatasource(t).getData("OGCSTAData", {
              filter: {
                things: {
                  all: {
                    includeDatastreams: !1,
                    includeLocations: !1
                  }
                }
              }
            });
            D?.things && D.things.forEach((f) => {
              const b = f["@iot.id"] || f.iotId || f.id;
              b && e.push({
                iotId: String(b),
                name: f.name || `Thing ${b}`
              });
            });
          } catch (m) {
            console.error("Error loading things from datasource:", t, m);
          }
        d.value = e;
      } finally {
        c.value = !1;
      }
    }
    const u = g(!1), y = [
      { key: "temperature", label: "Temperature", placeholder: "temp, temperatur, lufttemperatur" },
      { key: "humidity", label: "Humidity", placeholder: "humidity, feuchte, luftfeuchte" },
      { key: "pressure", label: "Pressure", placeholder: "pressure, luftdruck" },
      { key: "windSpeed", label: "Wind Speed", placeholder: "windspeed, windgeschwindigkeit" },
      { key: "windDirection", label: "Wind Direction", placeholder: "winddirection, windrichtung" },
      { key: "precipitation", label: "Precipitation", placeholder: "precipitation, niederschlag, rain" },
      { key: "visibility", label: "Visibility", placeholder: "visibility, sicht" },
      { key: "cloudCover", label: "Cloud Cover", placeholder: "cloudcover, wolken, bedeckung" }
    ], h = (o, e) => {
      i.config.customMapping || (i.config.customMapping = {}), e.trim() ? i.config.customMapping[o] = e.split(",").map((t) => t.trim()) : delete i.config.customMapping[o];
    }, w = (o) => i.config.customMapping?.[o]?.join(", ") || "";
    return (o, e) => (l(), n("div", he, [
      k(S(T), {
        modelValue: i.config.connectedDatasources,
        "onUpdate:modelValue": e[0] || (e[0] = (t) => i.config.connectedDatasources = t),
        label: "OGC-STA-Quellen",
        options: p.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      k(S(T), {
        modelValue: i.config.thingId,
        "onUpdate:modelValue": e[1] || (e[1] = (t) => i.config.thingId = t),
        label: "Thing (wahlweise)",
        placeholder: "All Things",
        options: d.value,
        "label-key": "name",
        "value-key": "iotId",
        loading: c.value,
        disabled: c.value || d.value.length === 0,
        clearable: ""
      }, null, 8, ["modelValue", "options", "loading", "disabled"]),
      s("div", we, [
        s("div", {
          class: "collapsible-header",
          onClick: e[2] || (e[2] = (t) => u.value = !u.value)
        }, [
          e[3] || (e[3] = s("h3", null, "Custom Keyword Mapping (Optional)", -1)),
          s("span", {
            class: R(["collapse-icon", { expanded: u.value }])
          }, "▼", 2)
        ]),
        u.value ? (l(), n("div", be, [
          e[4] || (e[4] = s("p", { class: "section-description" }, "Override default keywords for weather parameter detection", -1)),
          (l(), n(W, null, I(y, (t) => s("div", {
            key: t.key,
            class: "mapping-item"
          }, [
            k(S(L), {
              "model-value": w(t.key),
              "onUpdate:modelValue": (m) => h(t.key, m),
              label: t.label,
              placeholder: t.placeholder
            }, null, 8, ["model-value", "onUpdate:modelValue", "label", "placeholder"])
          ])), 64))
        ])) : r("", !0)
      ])
    ]));
  }
}), Se = /* @__PURE__ */ P(ke, [["__scopeId", "data-v-c7230bfa"]]), Ce = Symbol.for("WeatherComposer"), De = Symbol.for("WeatherComposerPreview"), Te = Symbol.for("WeatherComposerSettings");
function Pe({ services: i }) {
  i.register("WeatherComposerPreview", ye), i.register("WeatherComposerSettings", Se), i.getRequired(_).registerDatasourceType("weather", {
    icon: "cloud",
    kind: "composer",
    Store: Ce,
    Preview: De,
    Settings: Te
  });
}
function Ee({ services: i }) {
  i.getRequired(_).unregisterDatasourceType("weather"), i.unregister("WeatherComposerPreview"), i.unregister("WeatherComposerSettings");
}
export {
  Pe as activate,
  Ee as deactivate
};
