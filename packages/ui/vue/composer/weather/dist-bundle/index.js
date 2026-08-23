(function(){var i="ui.vue.composer.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".weather-composer-preview[data-v-2a15dca0]{padding:16px;background:#f8f9fa;border-radius:8px;max-width:400px}.preview-header h3[data-v-2a15dca0]{margin:0 0 16px;color:#495057;font-size:1.2em}.preview-content[data-v-2a15dca0]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-2a15dca0]{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #dee2e6}.info-item .label[data-v-2a15dca0]{color:#6c757d;font-weight:500}.info-item .value[data-v-2a15dca0]{color:#495057;font-weight:600}.capabilities[data-v-2a15dca0]{margin-top:16px}.capabilities h4[data-v-2a15dca0]{margin:0 0 8px;color:#495057;font-size:1em}.capabilities ul[data-v-2a15dca0]{list-style:none;padding:0;margin:0}.capabilities li[data-v-2a15dca0]{padding:4px 0;color:#6c757d;font-size:.9em}.preview-empty[data-v-2a15dca0]{text-align:center;color:#6c757d;font-style:italic;padding:20px}.weather-stations[data-v-2a15dca0]{display:flex;flex-direction:column;gap:16px}.weather-station[data-v-2a15dca0]{background:#fff;border-radius:8px;padding:16px;border:1px solid #e9ecef;box-shadow:0 1px 3px #0000001a}.station-header[data-v-2a15dca0]{margin-bottom:16px;border-bottom:1px solid #f1f3f4;padding-bottom:12px}.station-header h4[data-v-2a15dca0]{margin:0 0 4px;color:#343a40;font-size:1.1em}.station-header small[data-v-2a15dca0]{display:block;color:#6c757d;margin-bottom:2px}.coordinates[data-v-2a15dca0]{font-family:monospace;font-size:.85em!important}.weather-measurements[data-v-2a15dca0]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin-bottom:12px}.measurement[data-v-2a15dca0]{display:flex;align-items:center;gap:8px;padding:8px;background:#f8f9fa;border-radius:6px;border:1px solid #e9ecef}.measurement-icon[data-v-2a15dca0]{font-size:1.2em;width:24px;text-align:center}.measurement-info[data-v-2a15dca0]{display:flex;flex-direction:column;flex:1}.measurement-info .label[data-v-2a15dca0]{font-size:.85em;color:#6c757d;font-weight:500}.measurement-info .value[data-v-2a15dca0]{font-size:1em;color:#495057;font-weight:600}.timestamp[data-v-2a15dca0]{text-align:center;padding-top:8px;border-top:1px solid #f1f3f4}.timestamp small[data-v-2a15dca0]{color:#6c757d;font-size:.8em}.weather-composer-settings[data-v-ef42d833]{display:flex;flex-direction:column;gap:16px;padding:16px;max-height:600px;overflow-y:auto}.section-description[data-v-ef42d833]{margin:0 0 16px;color:#6c757d;font-size:.9em}.collapsible-section[data-v-ef42d833]{border:1px solid #dee2e6;border-radius:8px;overflow:hidden}.collapsible-header[data-v-ef42d833]{display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;padding:12px 16px;background:#f8f9fa;border-bottom:1px solid #dee2e6}.collapsible-header[data-v-ef42d833]:hover{background:#e9ecef}.collapsible-header h3[data-v-ef42d833]{margin:0;color:#495057;font-size:1.1em}.collapse-icon[data-v-ef42d833]{font-size:12px;transition:transform .2s ease;color:#6c757d}.collapse-icon.expanded[data-v-ef42d833]{transform:rotate(-180deg)}.collapsible-content[data-v-ef42d833]{padding:16px;animation:slideDown-ef42d833 .2s ease-out}@keyframes slideDown-ef42d833{0%{opacity:0;max-height:0}to{opacity:1;max-height:800px}}.mapping-item[data-v-ef42d833]{margin-bottom:12px}\n";})();
import { identifier as P, DATASOURCE_REPOSITORY as _ } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as T, shallowRef as x, ref as y, watch as C, createElementBlock as n, openBlock as l, createElementVNode as s, Fragment as V, renderList as I, createCommentVNode as d, toDisplayString as o, computed as E, inject as M, resolveComponent as D, createVNode as k, normalizeClass as O } from "vue";
import { useTemporaryStore as R } from "org.eclipse.daanse.board.app.ui.vue.composables";
const A = { class: "weather-composer-preview" }, L = {
  key: 0,
  class: "preview-empty"
}, $ = {
  key: 1,
  class: "weather-stations"
}, N = { class: "station-header" }, U = { key: 0 }, F = {
  key: 1,
  class: "coordinates"
}, j = { class: "weather-measurements" }, q = {
  key: 0,
  class: "measurement"
}, B = { class: "measurement-info" }, G = { class: "value" }, H = {
  key: 1,
  class: "measurement"
}, z = { class: "measurement-info" }, K = { class: "value" }, Y = {
  key: 2,
  class: "measurement"
}, J = { class: "measurement-info" }, Q = { class: "value" }, X = {
  key: 3,
  class: "measurement"
}, Z = { class: "measurement-info" }, ee = { class: "value" }, te = {
  key: 4,
  class: "measurement"
}, se = { class: "measurement-info" }, ie = { class: "value" }, oe = {
  key: 5,
  class: "measurement"
}, ae = { class: "measurement-info" }, ne = { class: "value" }, le = {
  key: 6,
  class: "measurement"
}, re = { class: "measurement-info" }, de = { class: "value" }, ue = {
  key: 7,
  class: "measurement"
}, ce = { class: "measurement-info" }, me = { class: "value" }, pe = {
  key: 0,
  class: "timestamp"
}, ve = /* @__PURE__ */ T({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(i) {
    const v = i, u = x(null), m = y(v.dataSource), { update: f } = R(v.dataSource.type, m, u), c = y(null);
    C(u, async () => {
      c.value = await u.value.getData("WeatherData");
    }), C(v.dataSource, () => {
      f();
    }, { deep: !0 });
    function h(a) {
      return ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"].some((t) => a[t]?.timestamp);
    }
    function b(a) {
      const e = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"];
      let t = "";
      return e.forEach((p) => {
        a[p]?.timestamp && a[p].timestamp > t && (t = a[p].timestamp);
      }), t;
    }
    function w(a) {
      if (!a) return "";
      try {
        return new Date(a).toLocaleString();
      } catch {
        return a;
      }
    }
    return (a, e) => (l(), n("div", A, [
      e[17] || (e[17] = s("div", { class: "preview-header" }, [
        s("h3", null, "🌤️ Weather Data Composer")
      ], -1)),
      !c.value || c.value.length === 0 ? (l(), n("div", L, [...e[0] || (e[0] = [
        s("p", null, "No weather data available", -1),
        s("small", null, "Configure connected datasources to see weather data", -1)
      ])])) : (l(), n("div", $, [
        (l(!0), n(V, null, I(c.value, (t) => (l(), n("div", {
          key: t.thingId,
          class: "weather-station"
        }, [
          s("div", N, [
            s("h4", null, "📍 " + o(t.location.name), 1),
            t.location.description ? (l(), n("small", U, o(t.location.description), 1)) : d("", !0),
            t.location.coordinates?.latitude != null && t.location.coordinates?.longitude != null ? (l(), n("small", F, o(t.location.coordinates.latitude.toFixed(4)) + "°N, " + o(t.location.coordinates.longitude.toFixed(4)) + "°E ", 1)) : d("", !0)
          ]),
          s("div", j, [
            t.temperature ? (l(), n("div", q, [
              e[2] || (e[2] = s("div", { class: "measurement-icon" }, "🌡️", -1)),
              s("div", B, [
                e[1] || (e[1] = s("span", { class: "label" }, "Temperature", -1)),
                s("span", G, o(t.temperature.value) + o(t.temperature.unit), 1)
              ])
            ])) : d("", !0),
            t.humidity ? (l(), n("div", H, [
              e[4] || (e[4] = s("div", { class: "measurement-icon" }, "💧", -1)),
              s("div", z, [
                e[3] || (e[3] = s("span", { class: "label" }, "Humidity", -1)),
                s("span", K, o(t.humidity.value) + o(t.humidity.unit), 1)
              ])
            ])) : d("", !0),
            t.pressure ? (l(), n("div", Y, [
              e[6] || (e[6] = s("div", { class: "measurement-icon" }, "📊", -1)),
              s("div", J, [
                e[5] || (e[5] = s("span", { class: "label" }, "Pressure", -1)),
                s("span", Q, o(t.pressure.value) + o(t.pressure.unit), 1)
              ])
            ])) : d("", !0),
            t.windSpeed ? (l(), n("div", X, [
              e[8] || (e[8] = s("div", { class: "measurement-icon" }, "💨", -1)),
              s("div", Z, [
                e[7] || (e[7] = s("span", { class: "label" }, "Wind Speed", -1)),
                s("span", ee, o(t.windSpeed.value) + o(t.windSpeed.unit), 1)
              ])
            ])) : d("", !0),
            t.windDirection ? (l(), n("div", te, [
              e[10] || (e[10] = s("div", { class: "measurement-icon" }, "🧭", -1)),
              s("div", se, [
                e[9] || (e[9] = s("span", { class: "label" }, "Wind Direction", -1)),
                s("span", ie, o(t.windDirection.value) + o(t.windDirection.unit), 1)
              ])
            ])) : d("", !0),
            t.precipitation ? (l(), n("div", oe, [
              e[12] || (e[12] = s("div", { class: "measurement-icon" }, "🌧️", -1)),
              s("div", ae, [
                e[11] || (e[11] = s("span", { class: "label" }, "Precipitation", -1)),
                s("span", ne, o(t.precipitation.value) + o(t.precipitation.unit), 1)
              ])
            ])) : d("", !0),
            t.visibility ? (l(), n("div", le, [
              e[14] || (e[14] = s("div", { class: "measurement-icon" }, "👁️", -1)),
              s("div", re, [
                e[13] || (e[13] = s("span", { class: "label" }, "Visibility", -1)),
                s("span", de, o(t.visibility.value) + o(t.visibility.unit), 1)
              ])
            ])) : d("", !0),
            t.cloudCover ? (l(), n("div", ue, [
              e[16] || (e[16] = s("div", { class: "measurement-icon" }, "☁️", -1)),
              s("div", ce, [
                e[15] || (e[15] = s("span", { class: "label" }, "Cloud Cover", -1)),
                s("span", me, o(t.cloudCover.value) + o(t.cloudCover.unit), 1)
              ])
            ])) : d("", !0)
          ]),
          h(t) ? (l(), n("div", pe, [
            s("small", null, "Last updated: " + o(w(b(t))), 1)
          ])) : d("", !0)
        ]))), 128))
      ]))
    ]));
  }
}), W = (i, v) => {
  const u = i.__vccOpts || i;
  for (const [m, f] of v)
    u[m] = f;
  return u;
}, ge = /* @__PURE__ */ W(ve, [["__scopeId", "data-v-2a15dca0"]]), fe = { class: "weather-composer-settings" }, ye = { class: "collapsible-section" }, he = {
  key: 0,
  class: "collapsible-content"
}, be = /* @__PURE__ */ T({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {}
  },
  setup(i) {
    const v = E(() => i.dataSources.filter((a) => a.type === "ogcsta")), u = y([]), m = y(!1);
    C(() => i.config.connectedDatasources, async () => {
      await f();
    }, { immediate: !0 });
    async function f() {
      if (!i.config.connectedDatasources || i.config.connectedDatasources.length === 0) {
        u.value = [];
        return;
      }
      m.value = !0;
      try {
        const a = M(P), e = [];
        for (const t of i.config.connectedDatasources)
          try {
            const r = await a.getDatasource(t).getData("OGCSTAData", {
              filter: {
                things: {
                  all: {
                    includeDatastreams: !1,
                    includeLocations: !1
                  }
                }
              }
            });
            r?.things && r.things.forEach((g) => {
              const S = g["@iot.id"] || g.iotId || g.id;
              S && e.push({
                iotId: String(S),
                name: g.name || `Thing ${S}`
              });
            });
          } catch (p) {
            console.error("Error loading things from datasource:", t, p);
          }
        u.value = e;
      } finally {
        m.value = !1;
      }
    }
    const c = y(!1), h = [
      { key: "temperature", label: "Temperature", placeholder: "temp, temperatur, lufttemperatur" },
      { key: "humidity", label: "Humidity", placeholder: "humidity, feuchte, luftfeuchte" },
      { key: "pressure", label: "Pressure", placeholder: "pressure, luftdruck" },
      { key: "windSpeed", label: "Wind Speed", placeholder: "windspeed, windgeschwindigkeit" },
      { key: "windDirection", label: "Wind Direction", placeholder: "winddirection, windrichtung" },
      { key: "precipitation", label: "Precipitation", placeholder: "precipitation, niederschlag, rain" },
      { key: "visibility", label: "Visibility", placeholder: "visibility, sicht" },
      { key: "cloudCover", label: "Cloud Cover", placeholder: "cloudcover, wolken, bedeckung" }
    ], b = (a, e) => {
      i.config.customMapping || (i.config.customMapping = {}), e.trim() ? i.config.customMapping[a] = e.split(",").map((t) => t.trim()) : delete i.config.customMapping[a];
    }, w = (a) => i.config.customMapping?.[a]?.join(", ") || "";
    return (a, e) => {
      const t = D("VaSelect"), p = D("VaInput");
      return l(), n("div", fe, [
        k(t, {
          modelValue: i.config.connectedDatasources,
          "onUpdate:modelValue": e[0] || (e[0] = (r) => i.config.connectedDatasources = r),
          label: "OGC STA Sources",
          options: v.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        k(t, {
          modelValue: i.config.thingId,
          "onUpdate:modelValue": e[1] || (e[1] = (r) => i.config.thingId = r),
          label: "Thing (Optional)",
          placeholder: "All Things",
          options: u.value,
          "text-by": "name",
          "value-by": "iotId",
          loading: m.value,
          disabled: m.value || u.value.length === 0,
          clearable: ""
        }, null, 8, ["modelValue", "options", "loading", "disabled"]),
        s("div", ye, [
          s("div", {
            class: "collapsible-header",
            onClick: e[2] || (e[2] = (r) => c.value = !c.value)
          }, [
            e[3] || (e[3] = s("h3", null, "Custom Keyword Mapping (Optional)", -1)),
            s("span", {
              class: O(["collapse-icon", { expanded: c.value }])
            }, "▼", 2)
          ]),
          c.value ? (l(), n("div", he, [
            e[4] || (e[4] = s("p", { class: "section-description" }, "Override default keywords for weather parameter detection", -1)),
            (l(), n(V, null, I(h, (r) => s("div", {
              key: r.key,
              class: "mapping-item"
            }, [
              k(p, {
                "model-value": w(r.key),
                "onUpdate:modelValue": (g) => b(r.key, g),
                label: r.label,
                placeholder: r.placeholder
              }, null, 8, ["model-value", "onUpdate:modelValue", "label", "placeholder"])
            ])), 64))
          ])) : d("", !0)
        ])
      ]);
    };
  }
}), we = /* @__PURE__ */ W(be, [["__scopeId", "data-v-ef42d833"]]), Se = Symbol.for("WeatherComposer"), ke = Symbol.for("WeatherComposerPreview"), Ce = Symbol.for("WeatherComposerSettings");
function Ve({ services: i }) {
  i.register("WeatherComposerPreview", ge), i.register("WeatherComposerSettings", we), i.getRequired(_).registerDatasourceType("weather", {
    Store: Se,
    Preview: ke,
    Settings: Ce
  });
}
function Ie({ services: i }) {
  i.getRequired(_).unregisterDatasourceType("weather"), i.unregister("WeatherComposerPreview"), i.unregister("WeatherComposerSettings");
}
export {
  Ve as activate,
  Ie as deactivate
};
