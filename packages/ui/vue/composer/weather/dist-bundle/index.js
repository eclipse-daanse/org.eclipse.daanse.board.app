(function(){var i="ui.vue.composer.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".weather-composer-preview[data-v-9596e589]{padding:16px;background:#f8f9fa;border-radius:8px;max-width:400px}.preview-header h3[data-v-9596e589]{margin:0 0 16px;color:#495057;font-size:1.2em}.preview-content[data-v-9596e589]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-9596e589]{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #dee2e6}.info-item .label[data-v-9596e589]{color:#6c757d;font-weight:500}.info-item .value[data-v-9596e589]{color:#495057;font-weight:600}.capabilities[data-v-9596e589]{margin-top:16px}.capabilities h4[data-v-9596e589]{margin:0 0 8px;color:#495057;font-size:1em}.capabilities ul[data-v-9596e589]{list-style:none;padding:0;margin:0}.capabilities li[data-v-9596e589]{padding:4px 0;color:#6c757d;font-size:.9em}.preview-empty[data-v-9596e589]{text-align:center;color:#6c757d;font-style:italic;padding:20px}.weather-stations[data-v-9596e589]{display:flex;flex-direction:column;gap:16px}.weather-station[data-v-9596e589]{background:#fff;border-radius:8px;padding:16px;border:1px solid #e9ecef;box-shadow:0 1px 3px #0000001a}.station-header[data-v-9596e589]{margin-bottom:16px;border-bottom:1px solid #f1f3f4;padding-bottom:12px}.station-header h4[data-v-9596e589]{margin:0 0 4px;color:#343a40;font-size:1.1em}.station-header small[data-v-9596e589]{display:block;color:#6c757d;margin-bottom:2px}.coordinates[data-v-9596e589]{font-family:monospace;font-size:.85em!important}.weather-measurements[data-v-9596e589]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin-bottom:12px}.measurement[data-v-9596e589]{display:flex;align-items:center;gap:8px;padding:8px;background:#f8f9fa;border-radius:6px;border:1px solid #e9ecef}.measurement-icon[data-v-9596e589]{font-size:1.2em;width:24px;text-align:center}.measurement-info[data-v-9596e589]{display:flex;flex-direction:column;flex:1}.measurement-info .label[data-v-9596e589]{font-size:.85em;color:#6c757d;font-weight:500}.measurement-info .value[data-v-9596e589]{font-size:1em;color:#495057;font-weight:600}.timestamp[data-v-9596e589]{text-align:center;padding-top:8px;border-top:1px solid #f1f3f4}.timestamp small[data-v-9596e589]{color:#6c757d;font-size:.8em}.weather-composer-settings[data-v-670d6a31]{display:flex;flex-direction:column;gap:16px;padding:16px;max-height:600px;overflow-y:auto}.section-description[data-v-670d6a31]{margin:0 0 16px;color:#6c757d;font-size:.9em}.collapsible-section[data-v-670d6a31]{border:1px solid #dee2e6;border-radius:8px;overflow:hidden}.collapsible-header[data-v-670d6a31]{display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;padding:12px 16px;background:#f8f9fa;border-bottom:1px solid #dee2e6}.collapsible-header[data-v-670d6a31]:hover{background:#e9ecef}.collapsible-header h3[data-v-670d6a31]{margin:0;color:#495057;font-size:1.1em}.collapse-icon[data-v-670d6a31]{font-size:12px;transition:transform .2s ease;color:#6c757d}.collapse-icon.expanded[data-v-670d6a31]{transform:rotate(-180deg)}.collapsible-content[data-v-670d6a31]{padding:16px;animation:slideDown-670d6a31 .2s ease-out}@keyframes slideDown-670d6a31{0%{opacity:0;max-height:0}to{opacity:1;max-height:800px}}.mapping-item[data-v-670d6a31]{margin-bottom:12px}\n";})();
import { identifier as x, DATASOURCE_REPOSITORY as I } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as P, shallowRef as R, ref as _, watch as D, createElementBlock as r, openBlock as l, createElementVNode as t, toDisplayString as s, unref as c, Fragment as E, renderList as O, createCommentVNode as m, computed as C, inject as U, createVNode as k, normalizeClass as H } from "vue";
import { useTranslation as A, useFormat as L, useTemporaryStore as N } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as T, DInput as F } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { component as j } from "@eclipse-daanse/tsm";
const q = { class: "weather-composer-preview" }, z = { class: "preview-header" }, B = {
  key: 0,
  class: "preview-empty"
}, G = {
  key: 1,
  class: "weather-stations"
}, Z = { class: "station-header" }, K = { key: 0 }, Q = {
  key: 1,
  class: "coordinates"
}, Y = { class: "weather-measurements" }, J = {
  key: 0,
  class: "measurement"
}, X = { class: "measurement-info" }, ee = { class: "label" }, te = { class: "value" }, ae = {
  key: 1,
  class: "measurement"
}, se = { class: "measurement-info" }, ie = { class: "label" }, ne = { class: "value" }, oe = {
  key: 2,
  class: "measurement"
}, re = { class: "measurement-info" }, le = { class: "label" }, ce = { class: "value" }, de = {
  key: 3,
  class: "measurement"
}, ue = { class: "measurement-info" }, me = { class: "label" }, pe = { class: "value" }, he = {
  key: 4,
  class: "measurement"
}, ve = { class: "measurement-info" }, ge = { class: "label" }, fe = { class: "value" }, ye = {
  key: 5,
  class: "measurement"
}, _e = { class: "measurement-info" }, we = { class: "label" }, be = { class: "value" }, Se = {
  key: 6,
  class: "measurement"
}, We = { class: "measurement-info" }, ke = { class: "label" }, De = { class: "value" }, Ce = {
  key: 7,
  class: "measurement"
}, Te = { class: "measurement-info" }, Ve = { class: "label" }, Ie = { class: "value" }, Pe = {
  key: 0,
  class: "timestamp"
}, Ee = /* @__PURE__ */ P({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(i) {
    const o = i, { t: d } = A("composerWeather"), p = L(), u = R(null), g = _(o.dataSource), { update: v } = N(o.dataSource.type, g, u), f = _(null);
    D(u, async () => {
      f.value = await u.value.getData("WeatherData");
    }), D(o.dataSource, () => {
      v();
    }, { deep: !0 });
    function b(n) {
      return ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"].some((e) => n[e]?.timestamp);
    }
    function S(n) {
      const a = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"];
      let e = "";
      return a.forEach((y) => {
        n[y]?.timestamp && n[y].timestamp > e && (e = n[y].timestamp);
      }), e;
    }
    function h(n) {
      if (!n) return "";
      try {
        return p.date(n, { dateStyle: "short", timeStyle: "medium" });
      } catch {
        return n;
      }
    }
    return (n, a) => (l(), r("div", q, [
      t("div", z, [
        t("h3", null, "🌤️ " + s(c(d)("Weather.title")), 1)
      ]),
      !f.value || f.value.length === 0 ? (l(), r("div", B, [
        t("p", null, s(c(d)("Weather.noData")), 1),
        t("small", null, s(c(d)("Weather.noDataHint")), 1)
      ])) : (l(), r("div", G, [
        (l(!0), r(E, null, O(f.value, (e) => (l(), r("div", {
          key: e.thingId,
          class: "weather-station"
        }, [
          t("div", Z, [
            t("h4", null, "📍 " + s(e.location.name), 1),
            e.location.description ? (l(), r("small", K, s(e.location.description), 1)) : m("", !0),
            e.location.coordinates?.latitude != null && e.location.coordinates?.longitude != null ? (l(), r("small", Q, s(e.location.coordinates.latitude.toFixed(4)) + "°N, " + s(e.location.coordinates.longitude.toFixed(4)) + "°E ", 1)) : m("", !0)
          ]),
          t("div", Y, [
            e.temperature ? (l(), r("div", J, [
              a[0] || (a[0] = t("div", { class: "measurement-icon" }, "🌡️", -1)),
              t("div", X, [
                t("span", ee, s(c(d)("Weather.param.temperature")), 1),
                t("span", te, s(e.temperature.value) + s(e.temperature.unit), 1)
              ])
            ])) : m("", !0),
            e.humidity ? (l(), r("div", ae, [
              a[1] || (a[1] = t("div", { class: "measurement-icon" }, "💧", -1)),
              t("div", se, [
                t("span", ie, s(c(d)("Weather.param.humidity")), 1),
                t("span", ne, s(e.humidity.value) + s(e.humidity.unit), 1)
              ])
            ])) : m("", !0),
            e.pressure ? (l(), r("div", oe, [
              a[2] || (a[2] = t("div", { class: "measurement-icon" }, "📊", -1)),
              t("div", re, [
                t("span", le, s(c(d)("Weather.param.pressure")), 1),
                t("span", ce, s(e.pressure.value) + s(e.pressure.unit), 1)
              ])
            ])) : m("", !0),
            e.windSpeed ? (l(), r("div", de, [
              a[3] || (a[3] = t("div", { class: "measurement-icon" }, "💨", -1)),
              t("div", ue, [
                t("span", me, s(c(d)("Weather.param.windSpeed")), 1),
                t("span", pe, s(e.windSpeed.value) + s(e.windSpeed.unit), 1)
              ])
            ])) : m("", !0),
            e.windDirection ? (l(), r("div", he, [
              a[4] || (a[4] = t("div", { class: "measurement-icon" }, "🧭", -1)),
              t("div", ve, [
                t("span", ge, s(c(d)("Weather.param.windDirection")), 1),
                t("span", fe, s(e.windDirection.value) + s(e.windDirection.unit), 1)
              ])
            ])) : m("", !0),
            e.precipitation ? (l(), r("div", ye, [
              a[5] || (a[5] = t("div", { class: "measurement-icon" }, "🌧️", -1)),
              t("div", _e, [
                t("span", we, s(c(d)("Weather.param.precipitation")), 1),
                t("span", be, s(e.precipitation.value) + s(e.precipitation.unit), 1)
              ])
            ])) : m("", !0),
            e.visibility ? (l(), r("div", Se, [
              a[6] || (a[6] = t("div", { class: "measurement-icon" }, "👁️", -1)),
              t("div", We, [
                t("span", ke, s(c(d)("Weather.param.visibility")), 1),
                t("span", De, s(e.visibility.value) + s(e.visibility.unit), 1)
              ])
            ])) : m("", !0),
            e.cloudCover ? (l(), r("div", Ce, [
              a[7] || (a[7] = t("div", { class: "measurement-icon" }, "☁️", -1)),
              t("div", Te, [
                t("span", Ve, s(c(d)("Weather.param.cloudCover")), 1),
                t("span", Ie, s(e.cloudCover.value) + s(e.cloudCover.unit), 1)
              ])
            ])) : m("", !0)
          ]),
          b(e) ? (l(), r("div", Pe, [
            t("small", null, s(c(d)("Weather.lastUpdated", { time: h(S(e)) })), 1)
          ])) : m("", !0)
        ]))), 128))
      ]))
    ]));
  }
}), M = (i, o) => {
  const d = i.__vccOpts || i;
  for (const [p, u] of o)
    d[p] = u;
  return d;
}, Oe = /* @__PURE__ */ M(Ee, [["__scopeId", "data-v-9596e589"]]), Ae = { class: "weather-composer-settings" }, Me = { class: "collapsible-section" }, $e = {
  key: 0,
  class: "collapsible-content"
}, xe = { class: "section-description" }, Re = /* @__PURE__ */ P({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {}
  },
  setup(i) {
    const { t: o } = A("composerWeather"), d = C(() => i.dataSources.filter((h) => h.type === "ogcsta")), p = _([]), u = _(!1);
    D(() => i.config.connectedDatasources, async () => {
      await g();
    }, { immediate: !0 });
    async function g() {
      if (!i.config.connectedDatasources || i.config.connectedDatasources.length === 0) {
        p.value = [];
        return;
      }
      u.value = !0;
      try {
        const h = U(x), n = [];
        for (const a of i.config.connectedDatasources)
          try {
            const y = await h.getDatasource(a).getData("OGCSTAData", {
              filter: {
                things: {
                  all: {
                    includeDatastreams: !1,
                    includeLocations: !1
                  }
                }
              }
            });
            y?.things && y.things.forEach((w) => {
              const W = w["@iot.id"] || w.iotId || w.id;
              W && n.push({
                iotId: String(W),
                name: w.name || `Thing ${W}`
              });
            });
          } catch (e) {
            console.error("Error loading things from datasource:", a, e);
          }
        p.value = n;
      } finally {
        u.value = !1;
      }
    }
    const v = _(!1), f = C(() => [
      { key: "temperature", label: o("Weather.param.temperature"), placeholder: "temp, temperatur, lufttemperatur" },
      { key: "humidity", label: o("Weather.param.humidity"), placeholder: "humidity, feuchte, luftfeuchte" },
      { key: "pressure", label: o("Weather.param.pressure"), placeholder: "pressure, luftdruck" },
      { key: "windSpeed", label: o("Weather.param.windSpeed"), placeholder: "windspeed, windgeschwindigkeit" },
      { key: "windDirection", label: o("Weather.param.windDirection"), placeholder: "winddirection, windrichtung" },
      { key: "precipitation", label: o("Weather.param.precipitation"), placeholder: "precipitation, niederschlag, rain" },
      { key: "visibility", label: o("Weather.param.visibility"), placeholder: "visibility, sicht" },
      { key: "cloudCover", label: o("Weather.param.cloudCover"), placeholder: "cloudcover, wolken, bedeckung" }
    ]), b = (h, n) => {
      i.config.customMapping || (i.config.customMapping = {}), n.trim() ? i.config.customMapping[h] = n.split(",").map((a) => a.trim()) : delete i.config.customMapping[h];
    }, S = (h) => i.config.customMapping?.[h]?.join(", ") || "";
    return (h, n) => (l(), r("div", Ae, [
      k(c(T), {
        modelValue: i.config.connectedDatasources,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => i.config.connectedDatasources = a),
        label: c(o)("Sta.sources"),
        options: d.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      k(c(T), {
        modelValue: i.config.thingId,
        "onUpdate:modelValue": n[1] || (n[1] = (a) => i.config.thingId = a),
        label: c(o)("Weather.thing"),
        placeholder: c(o)("Weather.allThings"),
        options: p.value,
        "label-key": "name",
        "value-key": "iotId",
        loading: u.value,
        disabled: u.value || p.value.length === 0,
        clearable: ""
      }, null, 8, ["modelValue", "label", "placeholder", "options", "loading", "disabled"]),
      t("div", Me, [
        t("div", {
          class: "collapsible-header",
          onClick: n[2] || (n[2] = (a) => v.value = !v.value)
        }, [
          t("h3", null, s(c(o)("Weather.mapping")), 1),
          t("span", {
            class: H(["collapse-icon", { expanded: v.value }])
          }, "▼", 2)
        ]),
        v.value ? (l(), r("div", $e, [
          t("p", xe, s(c(o)("Weather.mappingHint")), 1),
          (l(!0), r(E, null, O(f.value, (a) => (l(), r("div", {
            key: a.key,
            class: "mapping-item"
          }, [
            k(c(F), {
              "model-value": S(a.key),
              "onUpdate:modelValue": (e) => b(a.key, e),
              label: a.label,
              placeholder: a.placeholder
            }, null, 8, ["model-value", "onUpdate:modelValue", "label", "placeholder"])
          ]))), 128))
        ])) : m("", !0)
      ])
    ]));
  }
}), Ue = /* @__PURE__ */ M(Re, [["__scopeId", "data-v-670d6a31"]]), He = { sources: "OGC-STA-Quellen" }, Le = { title: "Wetterdaten", noData: "Keine Wetterdaten vorhanden", noDataHint: "Verbundene Datenquellen einrichten, um Wetterdaten zu sehen", lastUpdated: "Zuletzt aktualisiert: {{time}}", thing: "Thing (wahlweise)", allThings: "Alle Things", mapping: "Eigene Schlagwort-Zuordnung (optional)", mappingHint: "Überschreibt die Standard-Schlagworte, an denen Wetterwerte erkannt werden", param: { temperature: "Temperatur", humidity: "Luftfeuchte", pressure: "Luftdruck", windSpeed: "Windgeschwindigkeit", windDirection: "Windrichtung", precipitation: "Niederschlag", visibility: "Sichtweite", cloudCover: "Bewölkung" } }, Ne = {
  Sta: He,
  Weather: Le
}, Fe = { sources: "OGC STA sources" }, je = { title: "Weather data", noData: "No weather data available", noDataHint: "Set up connected data sources to see weather data", lastUpdated: "Last updated: {{time}}", thing: "Thing (optional)", allThings: "All Things", mapping: "Custom keyword mapping (optional)", mappingHint: "Overrides the default keywords used to detect weather values", param: { temperature: "Temperature", humidity: "Humidity", pressure: "Pressure", windSpeed: "Wind speed", windDirection: "Wind direction", precipitation: "Precipitation", visibility: "Visibility", cloudCover: "Cloud cover" } }, qe = {
  Sta: Fe,
  Weather: je
};
var ze = Object.getOwnPropertyDescriptor, Be = (i, o, d, p) => {
  for (var u = p > 1 ? void 0 : p ? ze(o, d) : o, g = i.length - 1, v; g >= 0; g--)
    (v = i[g]) && (u = v(u) || u);
  return u;
};
const $ = "composerWeather";
let V = class {
  namespace = $;
  resources = {
    de: Ne,
    en: qe
  };
};
V = Be([
  j({
    service: ["Translations"],
    properties: { "i18n.namespace": $ }
  })
], V);
const Ge = Symbol.for("WeatherComposer"), Ze = Symbol.for("WeatherComposerPreview"), Ke = Symbol.for("WeatherComposerSettings");
function tt({ services: i }) {
  i.register("WeatherComposerPreview", Oe), i.register("WeatherComposerSettings", Ue), i.getRequired(I).registerDatasourceType("weather", {
    icon: "cloud",
    kind: "composer",
    Store: Ge,
    Preview: Ze,
    Settings: Ke
  });
}
function at({ services: i }) {
  i.getRequired(I).unregisterDatasourceType("weather"), i.unregister("WeatherComposerPreview"), i.unregister("WeatherComposerSettings");
}
export {
  V as ComposerWeatherTranslations,
  tt as activate,
  at as deactivate
};
