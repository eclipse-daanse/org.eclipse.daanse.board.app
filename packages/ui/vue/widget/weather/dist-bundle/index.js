(function(){var i="ui.vue.widget.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".forecast-chart[data-v-97c7ece2]{padding:16px}.forecast-chart h4[data-v-97c7ece2]{margin:0 0 16px;color:var(--v0d0aeb29);font-size:1.1em;text-align:center}.chart-container[data-v-97c7ece2]{position:relative;height:200px;padding:0}.no-data[data-v-97c7ece2]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--v0d0aeb29);font-style:italic}.no-data p[data-v-97c7ece2]{margin:0}@media(max-width:480px){.chart-container[data-v-97c7ece2]{height:150px;padding:5px}.forecast-chart h4[data-v-97c7ece2]{font-size:1em}}.weather-widget[data-v-b1212766]{padding:16px;border-radius:8px;font-family:Arial,sans-serif;height:100%;display:flex;flex-direction:column}.weather-loading[data-v-b1212766]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;color:#6c757d}.spinner[data-v-b1212766]{width:24px;height:24px;border:2px solid #e9ecef;border-top:2px solid #007bff;border-radius:50%;animation:spin-b1212766 1s linear infinite;margin-bottom:8px}@keyframes spin-b1212766{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.weather-error[data-v-b1212766]{color:#dc3545;text-align:center;flex:1;display:flex;align-items:center;justify-content:center}.weather-content[data-v-b1212766]{flex:1;display:flex;flex-direction:column}.weather-header[data-v-b1212766]{margin-bottom:16px;border-bottom:1px solid #dee2e6;padding-bottom:12px}.weather-header h3[data-v-b1212766]{margin:0 0 4px;color:var(--v66a67167);font-size:1.2em}.location-desc[data-v-b1212766]{margin:0;color:var(--v66a67167);font-size:.9em;opacity:.7}.weather-main[data-v-b1212766]{flex:1}.weather-icon-section[data-v-b1212766]{text-align:center;margin-bottom:16px}.weather-icon[data-v-b1212766]{font-size:5em;line-height:1}.temperature[data-v-b1212766]{text-align:center;margin-bottom:24px}.temp-value[data-v-b1212766]{font-size:2.5em;font-weight:200;color:var(--v66a67167)}.weather-details[data-v-b1212766]{display:grid;gap:12px}.weather-item[data-v-b1212766]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#fff3;border-radius:6px}.weather-item .label[data-v-b1212766]{color:var(--v66a67167);opacity:.7;font-weight:500}.weather-item .value[data-v-b1212766]{color:var(--v66a67167);font-weight:600}.weather-empty[data-v-b1212766]{text-align:center;color:#6c757d;flex:1;display:flex;align-items:center;justify-content:center}.time-range[data-v-b1212766]{margin-top:8px;color:var(--v66a67167);opacity:.7;font-style:italic}.timestamp[data-v-b1212766]{margin-top:8px;text-align:center}.timestamp small[data-v-b1212766]{color:var(--v66a67167);opacity:.7;font-size:.8em}.refresh-info[data-v-b1212766]{margin-top:16px;text-align:center;color:var(--v66a67167);opacity:.7;border-top:1px solid #dee2e6;padding-top:12px}.forecast-section[data-v-b1212766]{margin-top:20px;border-top:2px solid #dee2e6;padding-top:16px}.forecast-title[data-v-b1212766]{margin:0 0 20px;color:var(--v66a67167);font-size:1.3em;text-align:center}.forecast-charts[data-v-b1212766]{display:flex;flex-direction:column;gap:20px}@media(max-width:480px){.weather-widget[data-v-b1212766]{padding:12px}.temp-value[data-v-b1212766]{font-size:2em}.weather-item[data-v-b1212766]{flex-direction:column;align-items:flex-start;gap:4px}.forecast-charts[data-v-b1212766]{gap:15px}.forecast-title[data-v-b1212766]{font-size:1.1em}}.weather-settings[data-v-5a01b91f]{padding:16px;max-width:600px}.settings-section[data-v-5a01b91f]{margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e9ecef}.settings-section[data-v-5a01b91f]:last-child{border-bottom:none}.settings-section h4[data-v-5a01b91f]{margin:0 0 16px;color:#495057;font-size:1.1em}.input-mode-selector[data-v-5a01b91f],.time-mode-selector[data-v-5a01b91f]{display:flex;gap:16px;margin-bottom:16px}.input-mode-selector label[data-v-5a01b91f],.time-mode-selector label[data-v-5a01b91f]{display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:500}.form-group[data-v-5a01b91f]{margin-bottom:16px}.form-group label[data-v-5a01b91f]{display:block;margin-bottom:4px;font-weight:600;color:#495057}.form-control[data-v-5a01b91f]{width:100%;padding:8px 12px;border:1px solid #ced4da;border-radius:4px;font-size:14px}.form-control[data-v-5a01b91f]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px #007bff40}.form-text[data-v-5a01b91f]{color:#6c757d;font-size:.875em;margin-top:4px;display:block}.time-range-buttons[data-v-5a01b91f]{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}.time-inputs[data-v-5a01b91f]{display:grid;gap:16px}.btn[data-v-5a01b91f]{padding:6px 12px;border:1px solid #ced4da;border-radius:4px;background:#f8f9fa;cursor:pointer;font-size:14px}.btn[data-v-5a01b91f]:hover{background:#e9ecef}.btn-sm[data-v-5a01b91f]{padding:4px 8px;font-size:12px}.btn-secondary[data-v-5a01b91f]{background:#6c757d;color:#fff;border-color:#6c757d}.btn-secondary[data-v-5a01b91f]:hover{background:#5a6268}.settings-validation .error[data-v-5a01b91f]{color:#dc3545;background:#f8d7da;border:1px solid #f5c6cb;border-radius:4px;padding:12px;margin:0}.forecast-configuration[data-v-5a01b91f]{margin-top:16px;padding:16px;background:#f8f9fa;border-radius:6px;border:1px solid #e9ecef}.checkbox-grid[data-v-5a01b91f]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:8px 0}.checkbox-item[data-v-5a01b91f]{display:flex;align-items:center;gap:8px;font-weight:400!important;margin-bottom:0;cursor:pointer}.checkbox-item input[type=checkbox][data-v-5a01b91f]{width:auto;padding:0}.color-settings[data-v-5a01b91f]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0}.color-setting-item[data-v-5a01b91f]{display:flex;align-items:center;gap:8px}.color-setting-item label[data-v-5a01b91f]{font-weight:500;color:#495057;min-width:80px;margin-bottom:0}.color-picker[data-v-5a01b91f]{width:40px;height:30px;border:1px solid #ced4da;border-radius:4px;cursor:pointer;padding:0}.color-picker[data-v-5a01b91f]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px #007bff40}.color-preview[data-v-5a01b91f]{width:20px;height:20px;border-radius:50%;border:2px solid #ffffff;box-shadow:0 0 0 1px #ced4da}@media(max-width:480px){.input-mode-selector[data-v-5a01b91f],.time-mode-selector[data-v-5a01b91f]{flex-direction:column;gap:8px}.time-range-buttons[data-v-5a01b91f]{flex-direction:column}.btn[data-v-5a01b91f]{width:100%}}\n";})();
import { WidgetActionInterfaceImpl as xo, EVENT_ACTIONS_REGISTRY as So, PayloadImpl as Gi, EVENT_REGISTRY_ID as wo, EVENT_ACTIONS_REGISTRY_ID as To } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as pn, activate as Eo, deactivate as Co, inject as Yi } from "@eclipse-daanse/tsm";
import { ref as dt, computed as it, defineComponent as we, shallowRef as mn, h as bi, onMounted as Ke, onUnmounted as _n, watch as Jt, toRaw as yi, nextTick as bn, version as ko, isProxy as yn, useCssVars as vn, toRefs as xn, createElementBlock as $, openBlock as z, createElementVNode as k, toDisplayString as I, unref as V, createBlock as Sn, mergeModels as Mo, useModel as wn, inject as Xi, withModifiers as Oo, createCommentVNode as Z, createTextVNode as He, Fragment as Tn, renderList as En, withDirectives as Yt, vModelRadio as oi, vModelText as ri, normalizeStyle as Do } from "vue";
import { useRoute as Io } from "vue-router";
import { useTranslation as qe, useFormat as Cn, useDatasourceRepository as Ao } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as Ro } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as Lo, BasicEPackage as Fo, EPackageRegistry as No, BasicEClass as Ho, BasicEAttribute as ct, getEcorePackage as ht, BasicEObject as Wo, createBasicEList as Ki } from "@emfts/core";
import { WIDGET_SERVICE_ID as Bo } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Po } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), zo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='currentColor'%3e%3cpath%20d='M12.5%206.5C10.8%206.5%209.5%207.8%209.5%209.5c0%20.3.1.6.2.9C7.6%2011.2%206%2012.9%206%2015c0%202.2%201.8%204%204%204h8c1.7%200%203-1.3%203-3%200-1.4-1-2.6-2.4-2.9.1-.4.4-.6.4-1.1%200-1.9-1.6-3.5-3.5-3.5-.8%200-1.5.3-2.1.7-.4-1.8-2-3.2-3.9-3.2v.5zm0%201c1.4%200%202.5%201.1%202.5%202.5%200%20.3-.1.6-.2.9l-.2.4.4.2c.3.2.6.3%201%20.3%201.4%200%202.5%201.1%202.5%202.5%200%20.3-.1.6-.2.9l-.1.3.3.1c1%20.3%201.8%201.2%201.8%202.3%200%201.4-1.1%202.5-2.5%202.5H10c-1.9%200-3.5-1.6-3.5-3.5s1.6-3.5%203.5-3.5c.3%200%20.6%200%20.9.1l.4.1.1-.4c.1-.3.2-.6.2-.9%200-1.4%201.1-2.5%202.5-2.5z'/%3e%3ccircle%20cx='7'%20cy='8'%20r='1'/%3e%3ccircle%20cx='17'%20cy='7'%20r='1'/%3e%3ccircle%20cx='14'%20cy='4'%20r='1'/%3e%3c/svg%3e";
function Vo(i, t) {
  const { t: e } = qe("weather"), s = Cn(), n = dt(null), o = dt(!1), r = dt(null), a = it(() => {
    if (!n.value?.datastreams) return [];
    let d = n.value.datastreams;
    return i.useTimeRange && (i.startTime || i.endTime) && (d = d.filter((f) => {
      if (!f.observations || f.observations.length === 0) return !1;
      const m = new Date(f.observations[0].phenomenonTime);
      if (i.startTime) {
        const g = new Date(i.startTime);
        if (m < g) return !1;
      }
      if (i.endTime) {
        const g = new Date(i.endTime);
        if (m > g) return !1;
      }
      return !0;
    })), d;
  }), l = it(() => {
    const d = a.value;
    if (!d || d.length === 0) return null;
    const f = {};
    return d.forEach((m) => {
      if (m.observations && m.observations.length > 0) {
        const g = m.observations[0], p = m.name?.toLowerCase(), _ = m.description?.toLowerCase();
        p?.includes("temperature") || p?.includes("temp") || _?.includes("temperatur") || p?.includes("lufttemperatur") ? f.temperature = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "°C",
          timestamp: g.phenomenonTime
        } : p?.includes("humidity") || p?.includes("feuchte") || _?.includes("luftfeuchte") ? f.humidity = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "%",
          timestamp: g.phenomenonTime
        } : p?.includes("pressure") || p?.includes("luftdruck") || _?.includes("pressure") ? f.pressure = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "hPa",
          timestamp: g.phenomenonTime
        } : p?.includes("wind") && p?.includes("speed") || p?.includes("windgeschwindigkeit") ? f.windSpeed = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "m/s",
          timestamp: g.phenomenonTime
        } : p?.includes("wind") && p?.includes("direction") || p?.includes("windrichtung") ? f.windDirection = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "°",
          timestamp: g.phenomenonTime
        } : p?.includes("precipitation") || p?.includes("niederschlag") || p?.includes("rain") || p?.includes("regen") ? f.precipitation = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "mm",
          timestamp: g.phenomenonTime
        } : p?.includes("visibility") || p?.includes("sicht") ? f.visibility = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "m",
          timestamp: g.phenomenonTime
        } : (p?.includes("cloud") || p?.includes("wolken") || p?.includes("bedeckung")) && (f.cloudCover = {
          value: g.result,
          unit: m.unitOfMeasurement?.symbol || "%",
          timestamp: g.phenomenonTime
        });
      }
    }), f;
  }), c = it(() => {
    if (!n.value?.things || n.value.things.length === 0) return null;
    const d = n.value.things[0], f = d.Locations?.[0];
    return {
      name: d.name || e("Widget.unknownLocation"),
      description: d.description,
      coordinates: f?.location ? {
        latitude: f.location.coordinates?.[1],
        longitude: f.location.coordinates?.[0]
      } : void 0
    };
  });
  return {
    weatherData: n,
    loading: o,
    error: r,
    currentWeather: l,
    locationInfo: c,
    filteredDatastreams: a,
    findThingByLocation: async (d) => (console.log(`Searching for weather station near: ${d}`), null),
    formatTimeRange: () => {
      if (!i.useTimeRange) return "";
      const d = { dateStyle: "short", timeStyle: "short" }, f = i.startTime ? s.date(i.startTime, d) : "", m = i.endTime ? s.date(i.endTime, d) : "";
      return f && m ? `${f} - ${m}` : f ? e("Widget.from", { time: f }) : m ? e("Widget.until", { time: m }) : "";
    }
  };
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Te(i) {
  return i + 0.5 | 0;
}
const Ot = (i, t, e) => Math.max(Math.min(i, e), t);
function ce(i) {
  return Ot(Te(i * 2.55), 0, 255);
}
function It(i) {
  return Ot(Te(i * 255), 0, 255);
}
function kt(i) {
  return Ot(Te(i / 2.55) / 100, 0, 1);
}
function qi(i) {
  return Ot(Te(i * 100), 0, 100);
}
const ut = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, vi = [..."0123456789ABCDEF"], jo = (i) => vi[i & 15], $o = (i) => vi[(i & 240) >> 4] + vi[i & 15], Ee = (i) => (i & 240) >> 4 === (i & 15), Uo = (i) => Ee(i.r) && Ee(i.g) && Ee(i.b) && Ee(i.a);
function Go(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & ut[i[1]] * 17,
    g: 255 & ut[i[2]] * 17,
    b: 255 & ut[i[3]] * 17,
    a: t === 5 ? ut[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: ut[i[1]] << 4 | ut[i[2]],
    g: ut[i[3]] << 4 | ut[i[4]],
    b: ut[i[5]] << 4 | ut[i[6]],
    a: t === 9 ? ut[i[7]] << 4 | ut[i[8]] : 255
  })), e;
}
const Yo = (i, t) => i < 255 ? t(i) : "";
function Xo(i) {
  var t = Uo(i) ? jo : $o;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Yo(i.a, t) : void 0;
}
const Ko = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function kn(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function qo(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function Jo(i, t, e) {
  const s = kn(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Zo(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Oi(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Zo(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Di(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(It);
}
function Ii(i, t, e) {
  return Di(kn, i, t, e);
}
function Qo(i, t, e) {
  return Di(Jo, i, t, e);
}
function tr(i, t, e) {
  return Di(qo, i, t, e);
}
function Mn(i) {
  return (i % 360 + 360) % 360;
}
function er(i) {
  const t = Ko.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? ce(+t[5]) : It(+t[5]));
  const n = Mn(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = Qo(n, o, r) : t[1] === "hsv" ? s = tr(n, o, r) : s = Ii(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function ir(i, t) {
  var e = Oi(i);
  e[0] = Mn(e[0] + t), e = Ii(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function sr(i) {
  if (!i)
    return;
  const t = Oi(i), e = t[0], s = qi(t[1]), n = qi(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${kt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const Ji = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Zi = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function nr() {
  const i = {}, t = Object.keys(Zi), e = Object.keys(Ji);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, Ji[o]);
    o = parseInt(Zi[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let Ce;
function or(i) {
  Ce || (Ce = nr(), Ce.transparent = [0, 0, 0, 0]);
  const t = Ce[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const rr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function ar(i) {
  const t = rr.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? ce(r) : Ot(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? ce(s) : Ot(s, 0, 255)), n = 255 & (t[4] ? ce(n) : Ot(n, 0, 255)), o = 255 & (t[6] ? ce(o) : Ot(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function lr(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${kt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ai = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Xt = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function cr(i, t, e) {
  const s = Xt(kt(i.r)), n = Xt(kt(i.g)), o = Xt(kt(i.b));
  return {
    r: It(ai(s + e * (Xt(kt(t.r)) - s))),
    g: It(ai(n + e * (Xt(kt(t.g)) - n))),
    b: It(ai(o + e * (Xt(kt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ke(i, t, e) {
  if (i) {
    let s = Oi(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ii(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function On(i, t) {
  return i && Object.assign(t || {}, i);
}
function Qi(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = It(i[3]))) : (t = On(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = It(t.a)), t;
}
function hr(i) {
  return i.charAt(0) === "r" ? ar(i) : er(i);
}
class _e {
  constructor(t) {
    if (t instanceof _e)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Qi(t) : e === "string" && (s = Go(t) || or(t) || hr(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = On(this._rgb);
    return t && (t.a = kt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Qi(t);
  }
  rgbString() {
    return this._valid ? lr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Xo(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? sr(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = cr(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new _e(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = It(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Te(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return ke(this._rgb, 2, t), this;
  }
  darken(t) {
    return ke(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ke(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ke(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return ir(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Tt() {
}
const ur = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function U(i) {
  return i == null;
}
function q(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function N(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function nt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function yt(i, t) {
  return nt(i) ? i : t;
}
function F(i, t) {
  return typeof i > "u" ? t : i;
}
const dr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function G(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function j(i, t, e, s) {
  let n, o, r;
  if (q(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (N(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function ze(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Ve(i) {
  if (q(i))
    return i.map(Ve);
  if (N(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Ve(i[e[n]]);
    return t;
  }
  return i;
}
function Dn(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function fr(i, t, e, s) {
  if (!Dn(i))
    return;
  const n = t[i], o = e[i];
  N(n) && N(o) ? be(n, o, s) : t[i] = Ve(o);
}
function be(i, t, e) {
  const s = q(t) ? t : [
    t
  ], n = s.length;
  if (!N(i))
    return i;
  e = e || {};
  const o = e.merger || fr;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !N(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function de(i, t) {
  return be(i, t, {
    merger: gr
  });
}
function gr(i, t, e) {
  if (!Dn(i))
    return;
  const s = t[i], n = e[i];
  N(s) && N(n) ? de(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ve(n));
}
const ts = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function pr(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function mr(i) {
  const t = pr(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function je(i, t) {
  return (ts[t] || (ts[t] = mr(t)))(i);
}
function Ai(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const $e = (i) => typeof i < "u", At = (i) => typeof i == "function", es = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function _r(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const J = Math.PI, _t = 2 * J, br = _t + J, Ue = Number.POSITIVE_INFINITY, yr = J / 180, mt = J / 2, Rt = J / 4, is = J * 2 / 3, In = Math.log10, te = Math.sign;
function fe(i, t, e) {
  return Math.abs(i - t) < e;
}
function ss(i) {
  const t = Math.round(i);
  i = fe(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(In(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function vr(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function xr(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function ye(i) {
  return !xr(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Sr(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function wr(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Wt(i) {
  return i * (J / 180);
}
function Tr(i) {
  return i * (180 / J);
}
function ns(i) {
  if (!nt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Er(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * J && (o += _t), {
    angle: o,
    distance: n
  };
}
function xi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Cr(i, t) {
  return (i - t + br) % _t - J;
}
function St(i) {
  return (i % _t + _t) % _t;
}
function An(i, t, e, s) {
  const n = St(i), o = St(t), r = St(e), a = St(o - n), l = St(r - n), c = St(n - o), h = St(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function ft(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function kr(i) {
  return ft(i, -32768, 32767);
}
function Zt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Pi(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const Bt = (i, t, e, s) => Pi(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Mr = (i, t, e) => Pi(i, e, (s) => i[s][t] >= e);
function Or(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const Pn = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Dr(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Pn.forEach((e) => {
    const s = "_onData" + Ai(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function os(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (Pn.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function Ir(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Rn = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function Ln(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Rn.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Ar(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Ri = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", et = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Pr = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Rr(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: u, max: d, minDefined: f, maxDefined: m } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        Bt(l, h, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : Bt(t, h, r.getPixelForValue(u)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((p) => !U(p[a.axis]));
        n -= Math.max(0, g);
      }
      n = ft(n, 0, s - 1);
    }
    if (m) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        Bt(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Bt(t, h, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const p = l.slice(g - 1).findIndex((_) => !U(_[a.axis]));
        g += Math.max(0, p);
      }
      o = ft(g, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Lr(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const Me = (i) => i === 0 || i === 1, rs = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * _t / e)), as = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * _t / e) + 1, ge = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * mt) + 1,
  easeOutSine: (i) => Math.sin(i * mt),
  easeInOutSine: (i) => -0.5 * (Math.cos(J * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => Me(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => Me(i) ? i : rs(i, 0.075, 0.3),
  easeOutElastic: (i) => Me(i) ? i : as(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return Me(i) ? i : i < 0.5 ? 0.5 * rs(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * as(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - ge.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? ge.easeInBounce(i * 2) * 0.5 : ge.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Li(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ls(i) {
  return Li(i) ? i : new _e(i);
}
function li(i) {
  return Li(i) ? i : new _e(i).saturate(0.5).darken(0.1).hexString();
}
const Fr = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Nr = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Hr(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: Nr
    },
    numbers: {
      type: "number",
      properties: Fr
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Wr(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const cs = /* @__PURE__ */ new Map();
function Br(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = cs.get(e);
  return s || (s = new Intl.NumberFormat(i, t), cs.set(e, s)), s;
}
function Fn(i, t, e) {
  return Br(t, e).format(i);
}
const zr = {
  values(i) {
    return q(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Vr(i, e);
    }
    const r = In(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Fn(i, s, l);
  }
};
function Vr(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Nn = {
  formatters: zr
};
function jr(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Nn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Vt = /* @__PURE__ */ Object.create(null), Si = /* @__PURE__ */ Object.create(null);
function pe(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ci(i, t, e) {
  return typeof t == "string" ? be(pe(i, t), e) : be(pe(i, ""), t);
}
class $r {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => li(n.backgroundColor), this.hoverBorderColor = (s, n) => li(n.borderColor), this.hoverColor = (s, n) => li(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ci(this, t, e);
  }
  get(t) {
    return pe(this, t);
  }
  describe(t, e) {
    return ci(Si, t, e);
  }
  override(t, e) {
    return ci(Vt, t, e);
  }
  route(t, e, s, n) {
    const o = pe(this, t), r = pe(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return N(l) ? Object.assign({}, c, l) : F(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var X = /* @__PURE__ */ new $r({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Hr,
  Wr,
  jr
]);
function Ur(i) {
  return !i || U(i.size) || U(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function hs(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Lt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function us(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function wi(i, t, e, s) {
  Hn(i, t, e, s, null);
}
function Hn(i, t, e, s, n) {
  let o, r, a, l, c, h, u, d;
  const f = t.pointStyle, m = t.rotation, g = t.radius;
  let p = (m || 0) * yr;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(p), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, g, 0, 0, _t) : i.arc(e, s, g, 0, _t), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : g, i.moveTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += is, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += is, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), i.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(p + Rt) * l, u = Math.cos(p + Rt) * (n ? n / 2 - c : l), a = Math.sin(p + Rt) * l, d = Math.sin(p + Rt) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, p - J, p - mt), i.arc(e + d, s - r, c, p - mt, p), i.arc(e + u, s + a, c, p, p + mt), i.arc(e - d, s + r, c, p + mt, p + J), i.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * g, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        p += Rt;
      /* falls through */
      case "rectRot":
        u = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, d = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - u, s - a), i.lineTo(e + d, s - r), i.lineTo(e + u, s + a), i.lineTo(e - d, s + r), i.closePath();
        break;
      case "crossRot":
        p += Rt;
      /* falls through */
      case "cross":
        u = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, d = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - r), i.lineTo(e - d, s + r);
        break;
      case "star":
        u = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, d = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - r), i.lineTo(e - d, s + r), p += Rt, u = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, d = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + d, s - r), i.lineTo(e - d, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(p) * g, a = Math.sin(p) * g, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(p) * (n ? n / 2 : g), s + Math.sin(p) * g);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function ve(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Je(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Ze(i) {
  i.restore();
}
function Gr(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Yr(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Xr(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), U(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Kr(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function qr(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function xe(i, t, e, s, n, o = {}) {
  const r = q(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Xr(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && qr(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), U(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Kr(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Ti(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * J, J, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, J, mt, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, mt, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -mt, !0), i.lineTo(e + r.topLeft, s);
}
const Jr = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Zr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Qr(i, t) {
  const e = ("" + i).match(Jr);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const ta = (i) => +i || 0;
function Wn(i, t) {
  const e = {}, s = N(t), n = s ? Object.keys(t) : t, o = N(i) ? s ? (r) => F(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = ta(o(r));
  return e;
}
function ea(i) {
  return Wn(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function me(i) {
  return Wn(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function pt(i) {
  const t = ea(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function st(i, t) {
  i = i || {}, t = t || X.font;
  let e = F(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = F(i.style, t.style);
  s && !("" + s).match(Zr) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: F(i.family, t.family),
    lineHeight: Qr(F(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: F(i.weight, t.weight),
    string: ""
  };
  return n.string = Ur(n), n;
}
function Oe(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function ia(i, t, e) {
  const { min: s, max: n } = i, o = dr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function jt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Fi(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = jn("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Fi([
      a,
      ...i
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return zn(a, l, () => ha(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return fs(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return fs(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function ee(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Bn(i, s),
    setContext: (o) => ee(i, o, e, s),
    override: (o) => ee(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return zn(o, r, () => na(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function Bn(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: At(e) ? e : () => e,
    isIndexable: At(s) ? s : () => s
  };
}
const sa = (i, t) => i ? i + Ai(t) : t, Ni = (i, t) => N(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function zn(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function na(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return At(a) && r.isScriptable(t) && (a = oa(t, a, i, e)), q(a) && a.length && (a = ra(t, a, i, r.isIndexable)), Ni(t, a) && (a = ee(a, n, o && o[t], r)), a;
}
function oa(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Ni(i, l) && (l = Hi(n._scopes, n, i, l)), l;
}
function ra(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (N(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = Hi(c, n, i, h);
      t.push(ee(u, o, r && r[i], a));
    }
  }
  return t;
}
function Vn(i, t, e) {
  return At(i) ? i(t, e) : i;
}
const aa = (i, t) => i === !0 ? t : typeof i == "string" ? je(t, i) : void 0;
function la(i, t, e, s, n) {
  for (const o of t) {
    const r = aa(e, o);
    if (r) {
      i.add(r);
      const a = Vn(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Hi(i, t, e, s) {
  const n = t._rootScopes, o = Vn(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = ds(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = ds(a, r, o, l, s), l === null) ? !1 : Fi(Array.from(a), [
    ""
  ], n, o, () => ca(t, e, s));
}
function ds(i, t, e, s, n) {
  for (; e; )
    e = la(i, t, e, s, n);
  return e;
}
function ca(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return q(n) && N(e) ? e : n || {};
}
function ha(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = jn(sa(o, i), e), typeof n < "u")
      return Ni(i, n) ? Hi(e, s, i, n) : n;
}
function jn(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function fs(i) {
  let t = i._keys;
  return t || (t = i._keys = ua(i._scopes)), t;
}
function ua(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
const da = Number.EPSILON || 1e-14, ie = (i, t) => t < i.length && !i[t].skip && i[t], $n = (i) => i === "x" ? "y" : "x";
function fa(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = xi(o, n), l = xi(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const u = s * c, d = s * h;
  return {
    previous: {
      x: o.x - u * (r.x - n.x),
      y: o.y - u * (r.y - n.y)
    },
    next: {
      x: o.x + d * (r.x - n.x),
      y: o.y + d * (r.y - n.y)
    }
  };
}
function ga(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = ie(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = ie(i, h + 1), !(!l || !c)) {
      if (fe(t[h], 0, da)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function pa(i, t, e = "x") {
  const s = $n(e), n = i.length;
  let o, r, a, l = ie(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = ie(i, c + 1), !a)
      continue;
    const h = a[e], u = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = u + o * t[c]);
  }
}
function ma(i, t = "x") {
  const e = $n(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = ie(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = ie(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? te(n[r - 1]) !== te(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  ga(i, n, o), pa(i, o, t);
}
function De(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function _a(i, t) {
  let e, s, n, o, r, a = ve(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && ve(i[e + 1], t), o && (n = i[e], r && (n.cp1x = De(n.cp1x, t.left, t.right), n.cp1y = De(n.cp1y, t.top, t.bottom)), a && (n.cp2x = De(n.cp2x, t.left, t.right), n.cp2y = De(n.cp2y, t.top, t.bottom)));
}
function ba(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    ma(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = fa(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && _a(i, e);
}
function Wi() {
  return typeof window < "u" && typeof document < "u";
}
function Bi(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ge(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Qe = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function ya(i, t) {
  return Qe(i).getPropertyValue(t);
}
const va = [
  "top",
  "right",
  "bottom",
  "left"
];
function zt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = va[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const xa = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Sa(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (xa(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Nt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Qe(e), o = n.boxSizing === "border-box", r = zt(n, "padding"), a = zt(n, "border", "width"), { x: l, y: c, box: h } = Sa(i, e), u = r.left + (h && a.left), d = r.top + (h && a.top);
  let { width: f, height: m } = t;
  return o && (f -= r.width + a.width, m -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - d) / m * e.height / s)
  };
}
function wa(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && Bi(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Qe(o), l = zt(a, "border", "width"), c = zt(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Ge(a.maxWidth, o, "clientWidth"), n = Ge(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ue,
    maxHeight: n || Ue
  };
}
const Dt = (i) => Math.round(i * 10) / 10;
function Ta(i, t, e, s) {
  const n = Qe(i), o = zt(n, "margin"), r = Ge(n.maxWidth, i, "clientWidth") || Ue, a = Ge(n.maxHeight, i, "clientHeight") || Ue, l = wa(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const d = zt(n, "border", "width"), f = zt(n, "padding");
    c -= f.width + d.width, h -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Dt(Math.min(c, r, l.maxWidth)), h = Dt(Math.min(h, a, l.maxHeight)), c && !h && (h = Dt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Dt(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function gs(i, t, e) {
  const s = t || 1, n = Dt(i.height * s), o = Dt(i.width * s);
  i.height = Dt(i.height), i.width = Dt(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Ea = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Wi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function ps(i, t) {
  const e = ya(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ht(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Ca(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function ka(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Ht(i, n, e), a = Ht(n, o, e), l = Ht(o, t, e), c = Ht(r, a, e), h = Ht(a, l, e);
  return Ht(c, h, e);
}
const Ma = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, Oa = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Qt(i, t, e) {
  return i ? Ma(t, e) : Oa();
}
function Un(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Gn(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Yn(i) {
  return i === "angle" ? {
    between: An,
    compare: Cr,
    normalize: St
  } : {
    between: Zt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function ms({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Da(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Yn(s), l = t.length;
  let { start: c, end: h, loop: u } = i, d, f;
  if (u) {
    for (c += l, h += l, d = 0, f = l; d < f && r(a(t[c % l][s]), n, o); ++d)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: u,
    style: i.style
  };
}
function Xn(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Yn(s), { start: h, end: u, loop: d, style: f } = Da(i, t, e), m = [];
  let g = !1, p = null, _, b, x;
  const w = () => l(n, x, _) && a(n, x) !== 0, y = () => a(o, _) === 0 || l(o, x, _), C = () => g || w(), E = () => !g || y();
  for (let S = h, D = h; S <= u; ++S)
    b = t[S % r], !b.skip && (_ = c(b[s]), _ !== x && (g = l(_, n, o), p === null && C() && (p = a(_, n) === 0 ? S : D), p !== null && E() && (m.push(ms({
      start: p,
      end: S,
      loop: d,
      count: r,
      style: f
    })), p = null), D = S, x = _));
  return p !== null && m.push(ms({
    start: p,
    end: u,
    loop: d,
    count: r,
    style: f
  })), m;
}
function Kn(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Xn(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Ia(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function Aa(i, t, e, s) {
  const n = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, o.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % n,
    end: r % n,
    loop: s
  }), o;
}
function Pa(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = Ia(e, n, o, s);
  if (s === !0)
    return _s(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return _s(i, Aa(e, r, l, c), e, t);
}
function _s(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Ra(i, t, e, s);
}
function Ra(i, t, e, s) {
  const n = i._chart.getContext(), o = bs(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, u = t[0].start, d = u;
  function f(m, g, p, _) {
    const b = a ? -1 : 1;
    if (m !== g) {
      for (m += l; e[m % l].skip; )
        m -= b;
      for (; e[g % l].skip; )
        g += b;
      m % l !== g % l && (c.push({
        start: m % l,
        end: g % l,
        loop: p,
        style: _
      }), h = _, u = g % l);
    }
  }
  for (const m of t) {
    u = a ? u : m.start;
    let g = e[u % l], p;
    for (d = u + 1; d <= m.end; d++) {
      const _ = e[d % l];
      p = bs(s.setContext(jt(n, {
        type: "segment",
        p0: g,
        p1: _,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), La(p, h) && f(u, d - 1, m.loop, h), g = _, h = p;
    }
    u < d - 1 && f(u, d - 1, m.loop, h);
  }
  return c;
}
function bs(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function La(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Li(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function Ie(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Fa(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Ie(e, t, "left"),
    right: Ie(e, t, "right"),
    top: Ie(s, t, "top"),
    bottom: Ie(s, t, "bottom")
  } : t;
}
function qn(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Fa(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : s.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : s.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : s.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : s.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Na {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Rn.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Et = /* @__PURE__ */ new Na();
const ys = "transparent", Ha = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = ls(i || ys), n = s.valid && ls(t || ys);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Wa {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Oe([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = Oe([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || Ha[t.type || typeof r], this._easing = ge[t.easing] || ge.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Oe([
        t.to,
        e,
        n,
        t.from
      ]), this._from = Oe([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class Jn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!N(t))
      return;
    const e = Object.keys(X.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!N(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (q(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = za(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Ba(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = o[c];
      const d = s.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, a);
          continue;
        } else
          u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      o[c] = u = new Wa(d, t, c, h), n.push(u);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return Et.add(this._chart, s), !0;
  }
}
function Ba(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function za(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function vs(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function Va(i, t, e) {
  if (e === !1)
    return !1;
  const s = vs(i, e), n = vs(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function ja(i) {
  let t, e, s, n;
  return N(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Zn(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function xs(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], nt(c) && (o || t === 0 || te(t) === te(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function $a(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function hi(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ua(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Ga(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Ya(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Ss(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function ws(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = Ua(o, r, s), u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const m = t[f], { [l]: g, [c]: p } = m, _ = m._stacks || (m._stacks = {});
    d = _[c] = Ya(n, h, g), d[a] = p, d._top = Ss(d, r, !0, s.type), d._bottom = Ss(d, r, !1, s.type);
    const b = d._visualValues || (d._visualValues = {});
    b[a] = p;
  }
}
function ui(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Xa(i, t) {
  return jt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Ka(i, t, e) {
  return jt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function ne(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e];
    }
  }
}
const di = (i) => i === "reset" || i === "none", Ts = (i, t) => t ? i : Object.assign({}, i), qa = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Zn(e, !0),
  values: null
};
class Qn {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = hi(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && ne(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, d, f, m) => u === "x" ? d : u === "r" ? m : f, o = e.xAxisID = F(s.xAxisID, ui(t, "x")), r = e.yAxisID = F(s.yAxisID, ui(t, "y")), a = e.rAxisID = F(s.rAxisID, ui(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && os(this._data, this), t._stacked && ne(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (N(e)) {
      const n = this._cachedMeta;
      this._data = $a(e, n);
    } else if (s !== e) {
      if (s) {
        os(s, this);
        const n = this._cachedMeta;
        ne(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Dr(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = hi(e.vScale, e), e.stack !== s.stack && (n = !0, ne(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (ws(this, e._parsed), e._stacked = hi(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, u, d;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, d = n;
    else {
      q(n[t]) ? d = this.parseArrayData(s, n, t, e) : N(n[t]) ? d = this.parseObjectData(s, n, t, e) : d = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = u = d[h], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    r && ws(this, d);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, u = new Array(n);
    let d, f, m;
    for (d = 0, f = n; d < f; ++d)
      m = d + s, u[d] = {
        [a]: h || o.parse(c[m], m),
        [l]: r.parse(e[m], m)
      };
    return u;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, u;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, u = e[h], a[l] = {
        x: o.parse(u[0], h),
        y: r.parse(u[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, u, d, f;
    for (h = 0, u = n; h < u; ++h)
      d = h + s, f = e[d], c[h] = {
        x: o.parse(je(f, a), d),
        y: r.parse(je(f, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Zn(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return xs(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = xs(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = qa(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: u } = Ga(a);
    let d, f;
    function m() {
      f = n[d];
      const g = f[a.axis];
      return !nt(f[t.axis]) || h > g || u < g;
    }
    for (d = 0; d < r && !(!m() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!m()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], nt(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = ja(F(this.options.clip, Va(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const u = n[h];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Ka(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Xa(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && $e(s);
    if (a)
      return Ts(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), u = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), h), f = Object.keys(X.elements[t]), m = () => this.getContext(s, n, e), g = c.resolveNamedOptions(d, f, m, u);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(Ts(g, l))), g;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, u = h.datasetAnimationScopeKeys(this._type, e), d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, s, e));
    }
    const c = new Jn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || di(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    di(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !di(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && ne(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
class Ja extends Qn {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Rr(e, n, r);
    this._drawStart = a, this._drawCount = l, Lr(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, n), d = r.axis, f = a.axis, { spanGaps: m, segment: g } = this.options, p = ye(m) ? m : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || n === "none", b = e + s, x = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let y = 0; y < x; ++y) {
      const C = t[y], E = _ ? C : {};
      if (y < e || y >= b) {
        E.skip = !0;
        continue;
      }
      const S = this.getParsed(y), D = U(S[f]), A = E[d] = r.getPixelForValue(S[d], y), P = E[f] = o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, S, l) : S[f], y);
      E.skip = isNaN(A) || isNaN(P) || D, E.stop = y > 0 && Math.abs(S[d] - w[d]) > p, g && (E.parsed = S, E.raw = c.data[y]), u && (E.options = h || this.resolveDataElementOptions(y, C.active ? "active" : n)), _ || this.updateElement(C, y, E, n), w = S;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
function Ft() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class zi {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(zi.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Ft();
  }
  parse() {
    return Ft();
  }
  format() {
    return Ft();
  }
  add() {
    return Ft();
  }
  diff() {
    return Ft();
  }
  startOf() {
    return Ft();
  }
  endOf() {
    return Ft();
  }
}
var Za = {
  _date: zi
};
function Qa(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Mr : Bt;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], u = typeof h.getRange == "function" && h.getRange(t);
        if (u) {
          const d = c(o, t, e - u), f = c(o, t, e + u);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: u } = n._cachedMeta, { _parsed: d } = i, f = d.slice(0, h.lo + 1).reverse().findIndex((g) => !U(g[u.axis]));
        h.lo -= Math.max(0, f);
        const m = d.slice(h.hi).findIndex((g) => !U(g[u.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function ti(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: u, hi: d } = Qa(o[a], t, r, n);
    for (let f = u; f <= d; ++f) {
      const m = h[f];
      m.skip || s(m, c, f);
    }
  }
}
function tl(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function fi(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || ti(i, e, t, function(a, l, c) {
    !n && !ve(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function el(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: u } = Er(r, {
      x: t.x,
      y: t.y
    });
    An(u, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return ti(i, e, t, o), n;
}
function il(i, t, e, s, n, o) {
  let r = [];
  const a = tl(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const m = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(m)) && !f)
      return;
    const p = a(t, m);
    p < l ? (r = [
      {
        element: h,
        datasetIndex: u,
        index: d
      }
    ], l = p) : p === l && r.push({
      element: h,
      datasetIndex: u,
      index: d
    });
  }
  return ti(i, e, t, c), r;
}
function gi(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? el(i, t, e, n) : il(i, t, e, s, n, o);
}
function Es(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return ti(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var sl = {
  modes: {
    index(i, t, e, s) {
      const n = Nt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? fi(i, n, o, s, r) : gi(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, u = c.data[h];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = Nt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? fi(i, n, o, s, r) : gi(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = Nt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return fi(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = Nt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return gi(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = Nt(t, i);
      return Es(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = Nt(t, i);
      return Es(i, n, "y", e.intersect, s);
    }
  }
};
const to = [
  "left",
  "top",
  "right",
  "bottom"
];
function oe(i, t) {
  return i.filter((e) => e.pos === t);
}
function Cs(i, t) {
  return i.filter((e) => to.indexOf(e.pos) === -1 && e.box.axis === t);
}
function re(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function nl(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function ol(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !to.includes(n))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function rl(i, t) {
  const e = ol(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function al(i) {
  const t = nl(i), e = re(t.filter((c) => c.box.fullSize), !0), s = re(oe(t, "left"), !0), n = re(oe(t, "right")), o = re(oe(t, "top"), !0), r = re(oe(t, "bottom")), a = Cs(t, "x"), l = Cs(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: oe(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function ks(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function eo(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function ll(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!N(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size;
  }
  o.getPadding && eo(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - ks(r, i, "left", "right")), l = Math.max(0, t.outerHeight - ks(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function cl(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function hl(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function he(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, hl(a.horizontal, t));
    const { same: u, other: d } = ll(t, e, a, s);
    c |= u && n.length, h = h || d, l.fullSize || n.push(a);
  }
  return c && he(n, t, e, s) || h;
}
function Ae(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Ms(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * h, d = c.size || l.height;
      $e(c.start) && (r = c.start), l.fullSize ? Ae(l, n.left, r, e.outerWidth - n.right - n.left, d) : Ae(l, t.left + c.placed, r, u, d), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * h, d = c.size || l.width;
      $e(c.start) && (o = c.start), l.fullSize ? Ae(l, o, n.top, d, e.outerHeight - n.bottom - n.top) : Ae(l, o, t.top + c.placed, d, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var gt = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = pt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = al(i.boxes), l = a.vertical, c = a.horizontal;
    j(i.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const h = l.reduce((g, p) => p.box.options && p.box.options.display === !1 ? g : g + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, n);
    eo(d, pt(s));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), m = rl(l.concat(c), u);
    he(a.fullSize, f, u, m), he(l, f, u, m), he(c, f, u, m) && he(l, f, u, m), cl(f), Ms(a.leftAndTop, f, u, m), f.x += f.w, f.y += f.h, Ms(a.rightAndBottom, f, u, m), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, j(a.chartArea, (g) => {
      const p = g.box;
      Object.assign(p, i.chartArea), p.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class io {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class ul extends io {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const We = "$chartjs", dl = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Os = (i) => i === null || i === "";
function fl(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[We] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Os(n)) {
    const o = ps(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Os(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = ps(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const so = Ea ? {
  passive: !0
} : !1;
function gl(i, t, e) {
  i && i.addEventListener(t, e, so);
}
function pl(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, so);
}
function ml(i, t) {
  const e = dl[i.type] || i.type, { x: s, y: n } = Nt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Ye(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function _l(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ye(a.addedNodes, s), r = r && !Ye(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function bl(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ye(a.removedNodes, s), r = r && !Ye(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Se = /* @__PURE__ */ new Map();
let Ds = 0;
function no() {
  const i = window.devicePixelRatio;
  i !== Ds && (Ds = i, Se.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function yl(i, t) {
  Se.size || window.addEventListener("resize", no), Se.set(i, t);
}
function vl(i) {
  Se.delete(i), Se.size || window.removeEventListener("resize", no);
}
function xl(i, t, e) {
  const s = i.canvas, n = s && Bi(s);
  if (!n)
    return;
  const o = Ln((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), yl(i, o), r;
}
function pi(i, t, e) {
  e && e.disconnect(), t === "resize" && vl(i);
}
function Sl(i, t, e) {
  const s = i.canvas, n = Ln((o) => {
    i.ctx !== null && e(ml(o, i));
  }, i);
  return gl(s, t, n), n;
}
class wl extends io {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (fl(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[We])
      return !1;
    const s = e[We].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      U(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[We], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: _l,
      detach: bl,
      resize: xl
    }[e] || Sl;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: pi,
      detach: pi,
      resize: pi
    }[e] || pl)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ta(t, e, s, n);
  }
  isAttached(t) {
    const e = t && Bi(t);
    return !!(e && e.isConnected);
  }
}
function Tl(i) {
  return !Wi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? ul : wl;
}
class $t {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return ye(this.x) && ye(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
function El(i, t) {
  const e = i.options.ticks, s = Cl(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Ml(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Ol(t, c, o, r / n), c;
  const h = kl(o, t, n);
  if (r > 0) {
    let u, d;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Pe(t, c, h, U(f) ? 0 : a - f, a), u = 0, d = r - 1; u < d; u++)
      Pe(t, c, h, o[u], o[u + 1]);
    return Pe(t, c, h, l, U(f) ? t.length : l + f), c;
  }
  return Pe(t, c, h), c;
}
function Cl(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function kl(i, t, e) {
  const s = Dl(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = vr(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Ml(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Ol(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Pe(i, t, e, s, n) {
  const o = F(s, 0), r = Math.min(F(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Dl(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Il = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Is = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, As = (i, t) => Math.min(t || i, i);
function Ps(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Al(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Pl(i, t) {
  j(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function ae(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Rs(i, t) {
  if (!i.display)
    return 0;
  const e = st(i.font, t), s = pt(i.padding);
  return (q(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Rl(i, t) {
  return jt(i, {
    scale: t,
    type: "scale"
  });
}
function Ll(i, t, e) {
  return jt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Fl(i, t, e) {
  let s = Ri(i);
  return (e && t !== "right" || !e && t === "right") && (s = Il(s)), s;
}
function Nl(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let u = 0, d, f, m;
  const g = r - n, p = a - o;
  if (i.isHorizontal()) {
    if (f = et(s, o, a), N(e)) {
      const _ = Object.keys(e)[0], b = e[_];
      m = h[_].getPixelForValue(b) + g - t;
    } else e === "center" ? m = (c.bottom + c.top) / 2 + g - t : m = Is(i, e, t);
    d = a - o;
  } else {
    if (N(e)) {
      const _ = Object.keys(e)[0], b = e[_];
      f = h[_].getPixelForValue(b) - p + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - p + t : f = Is(i, e, t);
    m = et(s, r, n), u = e === "left" ? -mt : mt;
  }
  return {
    titleX: f,
    titleY: m,
    maxWidth: d,
    rotation: u
  };
}
class se extends $t {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = yt(t, Number.POSITIVE_INFINITY), e = yt(e, Number.NEGATIVE_INFINITY), s = yt(s, Number.POSITIVE_INFINITY), n = yt(n, Number.NEGATIVE_INFINITY), {
      min: yt(t, s),
      max: yt(e, n),
      minDefined: nt(t),
      maxDefined: nt(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: yt(e, yt(s, e)),
      max: yt(s, yt(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    G(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ia(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ps(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = El(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    G(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    G(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    G(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), G(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    G(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = G(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    G(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    G(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = As(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), u = h.widest.width, d = h.highest.height, f = ft(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - ae(t.grid) - e.padding - Rs(t.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), r = Tr(Math.min(Math.asin(ft((h.highest.height + 6) / a, -1, 1)), Math.asin(ft(l / c, -1, 1)) - Math.asin(ft(d / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    G(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    G(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Rs(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = ae(o) + l) : (t.height = this.maxHeight, t.width = ae(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: u, highest: d } = this._getLabelSizes(), f = s.padding * 2, m = Wt(this.labelRotation), g = Math.cos(m), p = Math.sin(m);
        if (a) {
          const _ = s.mirror ? 0 : p * u.width + g * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = s.mirror ? 0 : g * u.width + p * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
        }
        this._calculatePadding(c, h, p, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = n * t.width, f = s * e.height) : (d = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((d - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - u + r) * this.width / (this.width - u), 0);
    } else {
      let h = e.height / 2, u = t.height / 2;
      o === "start" ? (h = 0, u = t.height) : o === "end" && (h = e.height, u = 0), this.paddingTop = h + r, this.paddingBottom = u + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    G(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      U(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Ps(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / As(e, s));
    let c = 0, h = 0, u, d, f, m, g, p, _, b, x, w, y;
    for (u = 0; u < e; u += l) {
      if (m = t[u].label, g = this._resolveTickFontOptions(u), n.font = p = g.string, _ = o[p] = o[p] || {
        data: {},
        gc: []
      }, b = g.lineHeight, x = w = 0, !U(m) && !q(m))
        x = hs(n, _.data, _.gc, x, m), w = b;
      else if (q(m))
        for (d = 0, f = m.length; d < f; ++d)
          y = m[d], !U(y) && !q(y) && (x = hs(n, _.data, _.gc, x, y), w += b);
      r.push(x), a.push(w), c = Math.max(x, c), h = Math.max(w, h);
    }
    Pl(o, e);
    const C = r.indexOf(c), E = a.indexOf(h), S = (D) => ({
      width: r[D] || 0,
      height: a[D] || 0
    });
    return {
      first: S(0),
      last: S(e - 1),
      widest: S(C),
      highest: S(E),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return kr(this._alignToPixels ? Lt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Ll(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Rl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Wt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), d = ae(o), f = [], m = a.setContext(this.getContext()), g = m.display ? m.width : 0, p = g / 2, _ = function(K) {
      return Lt(s, K, g);
    };
    let b, x, w, y, C, E, S, D, A, P, H, Q;
    if (r === "top")
      b = _(this.bottom), E = this.bottom - d, D = b - p, P = _(t.top) + p, Q = t.bottom;
    else if (r === "bottom")
      b = _(this.top), P = t.top, Q = _(t.bottom) - p, E = b + p, D = this.top + d;
    else if (r === "left")
      b = _(this.right), C = this.right - d, S = b - p, A = _(t.left) + p, H = t.right;
    else if (r === "right")
      b = _(this.left), A = t.left, H = _(t.right) - p, C = b + p, S = this.left + d;
    else if (e === "x") {
      if (r === "center")
        b = _((t.top + t.bottom) / 2 + 0.5);
      else if (N(r)) {
        const K = Object.keys(r)[0], ot = r[K];
        b = _(this.chart.scales[K].getPixelForValue(ot));
      }
      P = t.top, Q = t.bottom, E = b + p, D = E + d;
    } else if (e === "y") {
      if (r === "center")
        b = _((t.left + t.right) / 2);
      else if (N(r)) {
        const K = Object.keys(r)[0], ot = r[K];
        b = _(this.chart.scales[K].getPixelForValue(ot));
      }
      C = b - p, S = C - d, A = t.left, H = t.right;
    }
    const lt = F(n.ticks.maxTicksLimit, u), Y = Math.max(1, Math.ceil(u / lt));
    for (x = 0; x < u; x += Y) {
      const K = this.getContext(x), ot = o.setContext(K), Pt = a.setContext(K), Ut = ot.lineWidth, W = ot.color, Gt = Pt.dash || [], wt = Pt.dashOffset, bt = ot.tickWidth, T = ot.tickColor, O = ot.tickBorderDash || [], M = ot.tickBorderDashOffset;
      w = Al(this, x, l), w !== void 0 && (y = Lt(s, w, Ut), c ? C = S = A = H = y : E = D = P = Q = y, f.push({
        tx1: C,
        ty1: E,
        tx2: S,
        ty2: D,
        x1: A,
        y1: P,
        x2: H,
        y2: Q,
        width: Ut,
        color: W,
        borderDash: Gt,
        borderDashOffset: wt,
        tickWidth: bt,
        tickColor: T,
        tickBorderDash: O,
        tickBorderDashOffset: M
      }));
    }
    return this._ticksLength = u, this._borderValue = b, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: u } = o, d = ae(s.grid), f = d + h, m = u ? -h : f, g = -Wt(this.labelRotation), p = [];
    let _, b, x, w, y, C, E, S, D, A, P, H, Q = "middle";
    if (n === "top")
      C = this.bottom - m, E = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      C = this.top + m, E = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const Y = this._getYAxisLabelAlignment(d);
      E = Y.textAlign, y = Y.x;
    } else if (n === "right") {
      const Y = this._getYAxisLabelAlignment(d);
      E = Y.textAlign, y = Y.x;
    } else if (e === "x") {
      if (n === "center")
        C = (t.top + t.bottom) / 2 + f;
      else if (N(n)) {
        const Y = Object.keys(n)[0], K = n[Y];
        C = this.chart.scales[Y].getPixelForValue(K) + f;
      }
      E = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        y = (t.left + t.right) / 2 - f;
      else if (N(n)) {
        const Y = Object.keys(n)[0], K = n[Y];
        y = this.chart.scales[Y].getPixelForValue(K);
      }
      E = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" && (l === "start" ? Q = "top" : l === "end" && (Q = "bottom"));
    const lt = this._getLabelSizes();
    for (_ = 0, b = a.length; _ < b; ++_) {
      x = a[_], w = x.label;
      const Y = o.setContext(this.getContext(_));
      S = this.getPixelForTick(_) + o.labelOffset, D = this._resolveTickFontOptions(_), A = D.lineHeight, P = q(w) ? w.length : 1;
      const K = P / 2, ot = Y.color, Pt = Y.textStrokeColor, Ut = Y.textStrokeWidth;
      let W = E;
      r ? (y = S, E === "inner" && (_ === b - 1 ? W = this.options.reverse ? "left" : "right" : _ === 0 ? W = this.options.reverse ? "right" : "left" : W = "center"), n === "top" ? c === "near" || g !== 0 ? H = -P * A + A / 2 : c === "center" ? H = -lt.highest.height / 2 - K * A + A : H = -lt.highest.height + A / 2 : c === "near" || g !== 0 ? H = A / 2 : c === "center" ? H = lt.highest.height / 2 - K * A : H = lt.highest.height - P * A, u && (H *= -1), g !== 0 && !Y.showLabelBackdrop && (y += A / 2 * Math.sin(g))) : (C = S, H = (1 - P) * A / 2);
      let Gt;
      if (Y.showLabelBackdrop) {
        const wt = pt(Y.backdropPadding), bt = lt.heights[_], T = lt.widths[_];
        let O = H - wt.top, M = 0 - wt.left;
        switch (Q) {
          case "middle":
            O -= bt / 2;
            break;
          case "bottom":
            O -= bt;
            break;
        }
        switch (E) {
          case "center":
            M -= T / 2;
            break;
          case "right":
            M -= T;
            break;
          case "inner":
            _ === b - 1 ? M -= T : _ > 0 && (M -= T / 2);
            break;
        }
        Gt = {
          left: M,
          top: O,
          width: T + wt.width,
          height: bt + wt.height,
          color: Y.backdropColor
        };
      }
      p.push({
        label: w,
        font: D,
        textOffset: H,
        options: {
          rotation: g,
          color: ot,
          strokeColor: Pt,
          strokeWidth: Ut,
          textAlign: W,
          textBaseline: Q,
          translation: [
            y,
            C
          ],
          backdrop: Gt
        }
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Wt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal() ? (c = Lt(t, this.left, r) - r / 2, h = Lt(t, this.right, a) + a / 2, u = d = l) : (u = Lt(t, this.top, r) - r / 2, d = Lt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(h, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Je(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      xe(s, c, 0, h, l, a);
    }
    n && Ze(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = st(s.font), r = pt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || N(e) ? (l += r.bottom, q(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: u, rotation: d } = Nl(this, l, e, a);
    xe(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: d,
      textAlign: Fl(a, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = F(t.grid && t.grid.z, -1), n = F(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== se.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return st(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Re {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Bl(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, Hl(t, r, s), this.override && X.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in X[n] && (delete X[n][s], this.override && delete Vt[s]);
  }
}
function Hl(i, t, e) {
  const s = be(/* @__PURE__ */ Object.create(null), [
    e ? X.get(e) : {},
    X.get(t),
    i.defaults
  ]);
  X.set(t, s), i.defaultRoutes && Wl(t, i.defaultRoutes), i.descriptors && X.describe(t, i.descriptors);
}
function Wl(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    X.route(o, n, l, a);
  });
}
function Bl(i) {
  return "id" in i && "defaults" in i;
}
class zl {
  constructor() {
    this.controllers = new Re(Qn, "datasets", !0), this.elements = new Re($t, "elements"), this.plugins = new Re(Object, "plugins"), this.scales = new Re(se, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : j(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Ai(t);
    G(s["before" + n], [], s), e[t](s), G(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var xt = /* @__PURE__ */ new zl();
class Vl {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, s, n) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        e,
        n,
        o.options
      ];
      if (G(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    U(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = F(s.options && s.options.plugins, {}), o = jl(s);
    return n === !1 && !e ? [] : Ul(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function jl(i) {
  const t = {}, e = [], s = Object.keys(xt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(xt.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function $l(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Ul(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = $l(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: Gl(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Gl(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ei(i, t) {
  const e = X.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Yl(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Xl(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Ls(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Kl(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Ci(i, ...t) {
  if (Ls(i))
    return i;
  for (const e of t) {
    const s = e.axis || Kl(e.position) || i.length > 1 && Ls(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function Fs(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function ql(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return Fs(i, "x", e[0]) || Fs(i, "y", e[0]);
  }
  return {};
}
function Jl(i, t) {
  const e = Vt[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Ei(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!N(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Ci(r, a, ql(r, i), X.scales[a.type]), c = Xl(l, n), h = e.scales || {};
    o[r] = de(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Ei(a, t), h = (Vt[a] || {}).scales || {};
    Object.keys(h).forEach((u) => {
      const d = Yl(u, l), f = r[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), de(o[f], [
        {
          axis: d
        },
        s[f],
        h[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    de(a, [
      X.scales[a.type],
      X.scale
    ]);
  }), o;
}
function oo(i) {
  const t = i.options || (i.options = {});
  t.plugins = F(t.plugins, {}), t.scales = Jl(i, t);
}
function ro(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Zl(i) {
  return i = i || {}, i.data = ro(i.data), oo(i), i;
}
const Ns = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Set();
function Le(i, t) {
  let e = Ns.get(i);
  return e || (e = t(), Ns.set(i, e), ao.add(e)), e;
}
const le = (i, t, e) => {
  const s = je(t, e);
  s !== void 0 && i.add(s);
};
class Ql {
  constructor(t) {
    this._config = Zl(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = ro(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), oo(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Le(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Le(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Le(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Le(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((u) => le(l, t, u))), h.forEach((u) => le(l, n, u)), h.forEach((u) => le(l, Vt[o] || {}, u)), h.forEach((u) => le(l, X, u)), h.forEach((u) => le(l, Si, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), ao.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Vt[e] || {},
      X.datasets[e] || {},
      {
        type: e
      },
      X,
      Si
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Hs(this._resolverCache, t, n);
    let l = r;
    if (ec(r, e)) {
      o.$shared = !1, s = At(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = ee(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = Hs(this._resolverCache, t, s);
    return N(e) ? ee(o, e, void 0, n) : o;
  }
}
function Hs(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Fi(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const tc = (i) => N(i) && Object.getOwnPropertyNames(i).some((t) => At(i[t]));
function ec(i, t) {
  const { isScriptable: e, isIndexable: s } = Bn(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (At(a) || tc(a)) || r && q(a))
      return !0;
  }
  return !1;
}
var ic = "4.5.1";
const sc = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Ws(i, t) {
  return i === "top" || i === "bottom" || sc.indexOf(i) === -1 && t === "x";
}
function Bs(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function zs(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), G(e && e.onComplete, [
    i
  ], t);
}
function nc(i) {
  const t = i.chart, e = t.options.animation;
  G(e && e.onProgress, [
    i
  ], t);
}
function lo(i) {
  return Wi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Be = {}, Vs = (i) => {
  const t = lo(i);
  return Object.values(Be).filter((e) => e.canvas === t).pop();
};
function oc(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function rc(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let ei = class {
  static defaults = X;
  static instances = Be;
  static overrides = Vt;
  static registry = xt;
  static version = ic;
  static getChart = Vs;
  static register(...t) {
    xt.add(...t), js();
  }
  static unregister(...t) {
    xt.remove(...t), js();
  }
  constructor(t, e) {
    const s = this.config = new Ql(e), n = lo(t), o = Vs(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Tl(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = ur(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Vl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Ar((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Be[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Et.listen(this, "complete", zs), Et.listen(this, "progress", nc), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return U(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return xt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : gs(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return us(this.canvas, this.ctx), this;
  }
  stop() {
    return Et.stop(this), this;
  }
  resize(t, e) {
    Et.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, gs(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), G(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    j(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Ci(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), j(o, (r) => {
      const a = r.options, l = a.id, c = Ci(l, a), h = F(a.type, r.dtype);
      (a.position === void 0 || Ws(a.position, c) !== Ws(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === h)
        u = s[l];
      else {
        const d = xt.getScale(h);
        u = new d({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[u.id] = u;
      }
      u.init(a, t);
    }), j(n, (r, a) => {
      r || delete s[a];
    }), j(s, (r) => {
      gt.configure(this, r, r.options), gt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Bs("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Ei(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = xt.getController(a), { datasetElementType: c, dataElementType: h } = X.datasets[a];
        Object.assign(l, {
          dataElementType: xt.getElement(h),
          datasetElementType: c && xt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    j(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: u } = this.getDatasetMeta(c), d = !n && o.indexOf(u) === -1;
      u.buildOrUpdateElements(d), r = Math.max(+u.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || j(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Bs("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    j(this.scales, (t) => {
      gt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!es(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      oc(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!es(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    gt.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], j(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, At(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Et.has(this) ? this.attached && !Et.running(this) && Et.start(this) : (this.draw(), zs({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, n = qn(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && Je(e, n), t.controller.draw(), n && Ze(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return ve(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = sl.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = jt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    $e(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Et.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), us(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Be[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    j(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    j(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, j(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ze(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = _r(t), c = rc(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, G(o.onHover, [
      t,
      a,
      this
    ], this), l && G(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !ze(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
};
function js() {
  return j(ei.instances, (i) => i._plugins.invalidate());
}
function co(i, t, e = t) {
  i.lineCap = F(e.borderCapStyle, t.borderCapStyle), i.setLineDash(F(e.borderDash, t.borderDash)), i.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset), i.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = F(e.borderWidth, t.borderWidth), i.strokeStyle = F(e.borderColor, t.borderColor);
}
function ac(i, t, e) {
  i.lineTo(e.x, e.y);
}
function lc(i) {
  return i.stepped ? Gr : i.tension || i.cubicInterpolationMode === "monotone" ? Yr : ac;
}
function ho(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function cc(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = ho(n, e, s), h = lc(o);
  let { move: u = !0, reverse: d } = s || {}, f, m, g;
  for (f = 0; f <= c; ++f)
    m = n[(a + (d ? c - f : f)) % r], !m.skip && (u ? (i.moveTo(m.x, m.y), u = !1) : h(i, g, m, d, o.stepped), g = m);
  return l && (m = n[(a + (d ? c : 0)) % r], h(i, g, m, d, o.stepped)), !!l;
}
function hc(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = ho(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, u = 0, d, f, m, g, p, _;
  const b = (w) => (r + (c ? a - w : w)) % o, x = () => {
    g !== p && (i.lineTo(h, p), i.lineTo(h, g), i.lineTo(h, _));
  };
  for (l && (f = n[b(0)], i.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
    if (f = n[b(d)], f.skip)
      continue;
    const w = f.x, y = f.y, C = w | 0;
    C === m ? (y < g ? g = y : y > p && (p = y), h = (u * h + w) / ++u) : (x(), i.lineTo(w, y), m = C, u = 0, g = p = y), _ = y;
  }
  x();
}
function ki(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? hc : cc;
}
function uc(i) {
  return i.stepped ? Ca : i.tension || i.cubicInterpolationMode === "monotone" ? ka : Ht;
}
function dc(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), co(i, t.options), i.stroke(n);
}
function fc(i, t, e, s) {
  const { segments: n, options: o } = t, r = ki(t);
  for (const a of n)
    co(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const gc = typeof Path2D == "function";
function pc(i, t, e, s) {
  gc && !t.options.segment ? dc(i, t, e, s) : fc(i, t, e, s);
}
class ii extends $t {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill"
  };
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      ba(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Pa(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, r = Kn(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = uc(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: u, end: d } = r[c], f = o[u], m = o[d];
      if (f === m) {
        a.push(f);
        continue;
      }
      const g = Math.abs((n - f[e]) / (m[e] - f[e])), p = l(f, m, g, s.stepped);
      p[e] = t[e], a.push(p);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return ki(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = ki(this);
    let r = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      r &= o(t, this, a, {
        start: e,
        end: e + s - 1
      });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), pc(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function $s(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class mc extends $t {
  static id = "point";
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return $s(this, t, "x", e);
  }
  inYRange(t, e) {
    return $s(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !ve(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, wi(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function _c(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = si(l, c, n);
    const h = Mi(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Kn(t, h);
    for (const d of u) {
      const f = Mi(e, o[d.start], o[d.end], d.loop), m = Xn(a, n, f);
      for (const g of m)
        r.push({
          source: g,
          target: d,
          start: {
            [e]: Us(h, f, "start", Math.max)
          },
          end: {
            [e]: Us(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Mi(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = St(n), o = St(o)), {
    property: i,
    start: n,
    end: o
  };
}
function bc(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = si(r, a, n);
    const l = n[r], c = n[a];
    s !== null ? (o.push({
      x: l.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function si(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Us(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function uo(i, t) {
  let e = [], s = !1;
  return q(i) ? (s = !0, e = i) : e = bc(i, t), e.length ? new ii({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Gs(i) {
  return i && i.fill !== !1;
}
function yc(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!nt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function vc(i, t, e) {
  const s = Tc(i);
  if (N(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return nt(n) && Math.floor(n) === n ? xc(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function xc(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function Sc(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : N(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function wc(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : N(i) ? s = i.value : s = t.getBaseValue(), s;
}
function Tc(i) {
  const t = i.options, e = t.fill;
  let s = F(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function Ec(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = Cc(t, e);
  a.push(uo({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      kc(n, r[h], a);
  }
  return new ii({
    points: n,
    options: {}
  });
}
function Cc(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function kc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = Mc(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function Mc(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], u = r[h.start][e], d = r[h.end][e];
    if (Zt(n, u, d)) {
      a = n === u, l = n === d;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class fo {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: _t
    }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
}
function Oc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (nt(e))
    return Dc(t, e);
  if (e === "stack")
    return Ec(i);
  if (e === "shape")
    return !0;
  const n = Ic(i);
  return n instanceof fo ? n : uo(n, s);
}
function Dc(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function Ic(i) {
  return (i.scale || {}).getPointPositionForValue ? Pc(i) : Ac(i);
}
function Ac(i) {
  const { scale: t = {}, fill: e } = i, s = Sc(e, t);
  if (nt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function Pc(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = wc(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new fo({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function mi(i, t, e) {
  const s = Oc(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, u = c.backgroundColor, { above: d = u, below: f = u } = h || {}, m = n.getDatasetMeta(o), g = qn(n, m);
  s && r.points.length && (Je(i, e), Rc(i, {
    line: r,
    target: s,
    above: d,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: g
  }), Ze(i));
}
function Rc(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let h = o;
  o !== n && (c === "x" ? (Ys(i, s, r.top), _i(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), Ys(i, s, r.bottom)) : c === "y" && (Xs(i, s, r.left), _i(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), Xs(i, s, r.right), h = n)), _i(i, {
    line: e,
    target: s,
    color: h,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function Ys(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], u = n[si(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Xs(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], u = n[si(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, u.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function _i(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = _c(e, s, n);
  for (const { source: c, target: h, start: u, end: d } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, m = s !== !0;
    i.save(), i.fillStyle = f, Lc(i, r, a, m && Mi(n, u, d)), i.beginPath();
    const g = !!e.pathSegment(i, c);
    let p;
    if (m) {
      g ? i.closePath() : Ks(i, s, d, n);
      const _ = !!s.pathSegment(i, h, {
        move: g,
        reverse: !0
      });
      p = g && _, p || Ks(i, s, u, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function Lc(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, h, u;
    o === "x" ? (l = r, c = n.top, h = a, u = n.bottom) : (l = n.left, c = r, h = n.right, u = a), i.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), i.rect(l, c, h - l, u - c), i.clip();
  }
}
function Ks(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var Fc = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof ii && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: vc(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = yc(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && mi(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Gs(o) && mi(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Gs(s) || e.drawTime !== "beforeDatasetDraw" || mi(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const qs = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Nc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Js extends $t {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = G(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = st(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = qs(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -h;
    return this.legendItems.forEach((m, g) => {
      const p = s + e / 2 + o.measureText(m.text).width;
      (g === 0 || c[c.length - 1] + p + 2 * a > r) && (u += h, c[c.length - (g > 0 ? 0 : 1)] = 0, f += h, d++), l[g] = {
        left: 0,
        top: f,
        row: d,
        width: p,
        height: n
      }, c[c.length - 1] += p + a;
    }), u;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let u = a, d = 0, f = 0, m = 0, g = 0;
    return this.legendItems.forEach((p, _) => {
      const { itemWidth: b, itemHeight: x } = Hc(s, e, o, p, n);
      _ > 0 && f + x + 2 * a > h && (u += d + a, c.push({
        width: d,
        height: f
      }), m += d + a, g++, d = f = 0), l[_] = {
        left: m,
        top: f,
        col: g,
        width: b,
        height: x
      }, d = Math.max(d, b), f += x + a;
    }), u += d, c.push({
      width: d,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Qt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = et(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = et(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = et(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = et(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Je(t, this), this._draw(), Ze(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = X.color, l = Qt(t.rtl, this.left, this.width), c = st(r.font), { padding: h } = r, u = c.size, d = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: m, boxHeight: g, itemHeight: p } = qs(r, u), _ = function(C, E, S) {
      if (isNaN(m) || m <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const D = F(S.lineWidth, 1);
      if (n.fillStyle = F(S.fillStyle, a), n.lineCap = F(S.lineCap, "butt"), n.lineDashOffset = F(S.lineDashOffset, 0), n.lineJoin = F(S.lineJoin, "miter"), n.lineWidth = D, n.strokeStyle = F(S.strokeStyle, a), n.setLineDash(F(S.lineDash, [])), r.usePointStyle) {
        const A = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: S.pointStyle,
          rotation: S.rotation,
          borderWidth: D
        }, P = l.xPlus(C, m / 2), H = E + d;
        Hn(n, A, P, H, r.pointStyleWidth && m);
      } else {
        const A = E + Math.max((u - g) / 2, 0), P = l.leftForLtr(C, m), H = me(S.borderRadius);
        n.beginPath(), Object.values(H).some((Q) => Q !== 0) ? Ti(n, {
          x: P,
          y: A,
          w: m,
          h: g,
          radius: H
        }) : n.rect(P, A, m, g), n.fill(), D !== 0 && n.stroke();
      }
      n.restore();
    }, b = function(C, E, S) {
      xe(n, S.text, C, E + p / 2, c, {
        strikethrough: S.hidden,
        textAlign: l.textAlign(S.textAlign)
      });
    }, x = this.isHorizontal(), w = this._computeTitleHeight();
    x ? f = {
      x: et(o, this.left + h, this.right - s[0]),
      y: this.top + h + w,
      line: 0
    } : f = {
      x: this.left + h,
      y: et(o, this.top + w + h, this.bottom - e[0].height),
      line: 0
    }, Un(this.ctx, t.textDirection);
    const y = p + h;
    this.legendItems.forEach((C, E) => {
      n.strokeStyle = C.fontColor, n.fillStyle = C.fontColor;
      const S = n.measureText(C.text).width, D = l.textAlign(C.textAlign || (C.textAlign = r.textAlign)), A = m + d + S;
      let P = f.x, H = f.y;
      l.setWidth(this.width), x ? E > 0 && P + A + h > this.right && (H = f.y += y, f.line++, P = f.x = et(o, this.left + h, this.right - s[f.line])) : E > 0 && H + y > this.bottom && (P = f.x = P + e[f.line].width + h, f.line++, H = f.y = et(o, this.top + w + h, this.bottom - e[f.line].height));
      const Q = l.x(P);
      if (_(Q, H, C), P = Pr(D, P + m + d, x ? P + A : this.right, t.rtl), b(l.x(P), H, C), x)
        f.x += A + h;
      else if (typeof C.text != "string") {
        const lt = c.lineHeight;
        f.y += go(C, lt) + h;
      } else
        f.y += y;
    }), Gn(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = st(e.font), n = pt(e.padding);
    if (!e.display)
      return;
    const o = Qt(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, u = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), h = this.top + c, u = et(t.align, u, this.right - d);
    else {
      const m = this.columnSizes.reduce((g, p) => Math.max(g, p.height), 0);
      h = c + et(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const f = et(a, u, u + d);
    r.textAlign = o.textAlign(Ri(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, xe(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = st(t.font), s = pt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Zt(t, this.left, this.right) && Zt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Zt(t, n.left, n.left + n.width) && Zt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!zc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Nc(n, s);
      n && !o && G(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && G(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && G(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Hc(i, t, e, s, n) {
  const o = Wc(s, i, t, e), r = Bc(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Wc(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function Bc(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = go(t, e)), s;
}
function go(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function zc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Vc = {
  id: "legend",
  _element: Js,
  start(i, t, e) {
    const s = i.legend = new Js({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    gt.configure(i, s, e), gt.addBox(i, s);
  },
  stop(i) {
    gt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    gt.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = pt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class po extends $t {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = q(s.text) ? s.text.length : 1;
    this._padding = pt(s.padding);
    const o = n * st(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, u;
    return this.isHorizontal() ? (h = et(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (h = s + t, u = et(a, n, e), l = J * -0.5) : (h = o - t, u = et(a, e, n), l = J * 0.5), c = n - e), {
      titleX: h,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = st(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    xe(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ri(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function jc(i, t) {
  const e = new po({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  gt.configure(i, e, t), gt.addBox(i, e), i.titleBlock = e;
}
var $c = {
  id: "title",
  _element: po,
  start(i, t, e) {
    jc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    gt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    gt.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ue = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = xi(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function vt(i, t) {
  return t && (q(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Ct(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Uc(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function Zs(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = st(t.bodyFont), c = st(t.titleFont), h = st(t.footerFont), u = o.length, d = n.length, f = s.length, m = pt(t.padding);
  let g = m.height, p = 0, _ = s.reduce((w, y) => w + y.before.length + y.lines.length + y.after.length, 0);
  if (_ += i.beforeBody.length + i.afterBody.length, u && (g += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * w + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (g += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let b = 0;
  const x = function(w) {
    p = Math.max(p, e.measureText(w).width + b);
  };
  return e.save(), e.font = c.string, j(i.title, x), e.font = l.string, j(i.beforeBody.concat(i.afterBody), x), b = t.displayColors ? r + 2 + t.boxPadding : 0, j(s, (w) => {
    j(w.before, x), j(w.lines, x), j(w.after, x);
  }), b = 0, e.font = h.string, j(i.footer, x), e.restore(), p += m.width, {
    width: p,
    height: g
  };
}
function Gc(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Yc(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Xc(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Yc(c, i, t, e) && (c = "center"), c;
}
function Qs(i, t, e) {
  const s = e.yAlign || t.yAlign || Gc(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Xc(i, t, e, s),
    yAlign: s
  };
}
function Kc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function qc(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function tn(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = me(r);
  let m = Kc(t, a);
  const g = qc(t, l, c);
  return l === "center" ? a === "left" ? m += c : a === "right" && (m -= c) : a === "left" ? m -= Math.max(h, d) + n : a === "right" && (m += Math.max(u, f) + n), {
    x: ft(m, 0, s.width - t.width),
    y: ft(g, 0, s.height - t.height)
  };
}
function Fe(i, t, e) {
  const s = pt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function en(i) {
  return vt([], Ct(i));
}
function Jc(i, t, e) {
  return jt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function sn(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const mo = {
  beforeTitle: Tt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Tt,
  beforeBody: Tt,
  beforeLabel: Tt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return U(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Tt,
  afterBody: Tt,
  beforeFooter: Tt,
  footer: Tt,
  afterFooter: Tt
};
function rt(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? mo[t].call(e, s) : n;
}
class nn extends $t {
  static positioners = ue;
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Jn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Jc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = rt(s, "beforeTitle", this, t), o = rt(s, "title", this, t), r = rt(s, "afterTitle", this, t);
    let a = [];
    return a = vt(a, Ct(n)), a = vt(a, Ct(o)), a = vt(a, Ct(r)), a;
  }
  getBeforeBody(t, e) {
    return en(rt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return j(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = sn(s, o);
      vt(r.before, Ct(rt(a, "beforeLabel", this, o))), vt(r.lines, rt(a, "label", this, o)), vt(r.after, Ct(rt(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return en(rt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = rt(s, "beforeFooter", this, t), o = rt(s, "footer", this, t), r = rt(s, "afterFooter", this, t);
    let a = [];
    return a = vt(a, Ct(n)), a = vt(a, Ct(o)), a = vt(a, Ct(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Uc(this.chart, e[l]));
    return t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, s))), t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, s))), j(a, (h) => {
      const u = sn(t.callbacks, h);
      n.push(rt(u, "labelColor", this, h)), o.push(rt(u, "labelPointStyle", this, h)), r.push(rt(u, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = ue[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Zs(this, s), c = Object.assign({}, a, l), h = Qs(this.chart, s, c), u = tn(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = me(a), { x: d, y: f } = t, { width: m, height: g } = e;
    let p, _, b, x, w, y;
    return o === "center" ? (w = f + g / 2, n === "left" ? (p = d, _ = p - r, x = w + r, y = w - r) : (p = d + m, _ = p + r, x = w - r, y = w + r), b = p) : (n === "left" ? _ = d + Math.max(l, h) + r : n === "right" ? _ = d + m - Math.max(c, u) - r : _ = this.caretX, o === "top" ? (x = f, w = x - r, p = _ - r, b = _ + r) : (x = f + g, w = x + r, p = _ + r, b = _ - r), y = x), {
      x1: p,
      x2: _,
      x3: b,
      y1: x,
      y2: w,
      y3: y
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Qt(s.rtl, this.x, this.width);
      for (t.x = Fe(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = st(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = st(o.bodyFont), u = Fe(this, "left", o), d = n.x(u), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, m = e.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, p = n.leftForLtr(d, c) + c / 2, _ = m + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, wi(t, g, p, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, wi(t, g, p, _);
    } else {
      t.lineWidth = N(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = n.leftForLtr(d, c), p = n.leftForLtr(n.xPlus(d, 1), c - 2), _ = me(r.borderRadius);
      Object.values(_).some((b) => b !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ti(t, {
        x: g,
        y: m,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ti(t, {
        x: p,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, m, c, l), t.strokeRect(g, m, c, l), t.fillStyle = r.backgroundColor, t.fillRect(p, m + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, u = st(s.bodyFont);
    let d = u.lineHeight, f = 0;
    const m = Qt(s.rtl, this.x, this.width), g = function(S) {
      e.fillText(S, m.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, p = m.textAlign(r);
    let _, b, x, w, y, C, E;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = Fe(this, p, s), e.fillStyle = s.bodyColor, j(this.beforeBody, g), f = a && p !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, w = 0, C = n.length; w < C; ++w) {
      for (_ = n[w], b = this.labelTextColors[w], e.fillStyle = b, j(_.before, g), x = _.lines, a && x.length && (this._drawColorBox(e, t, w, m, s), d = Math.max(u.lineHeight, l)), y = 0, E = x.length; y < E; ++y)
        g(x[y]), d = u.lineHeight;
      j(_.after, g);
    }
    f = 0, d = u.lineHeight, j(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Qt(s.rtl, this.x, this.width);
      for (t.x = Fe(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = st(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: m } = me(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - d, l), e.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - m), e.quadraticCurveTo(a + c, l + h, a + c - m, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = ue[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Zs(this, t), l = Object.assign({}, r, this._size), c = Qs(e, t, l), h = tn(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = pt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Un(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Gn(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !ze(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !ze(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = ue[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Zc = {
  id: "tooltip",
  _element: nn,
  positioners: ue,
  afterInit(i, t, e) {
    e && (i.tooltip = new nn({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: mo
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const Qc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function th(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Qc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const eh = (i, t) => i === null ? null : ft(Math.round(i), 0, t);
function on(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class ih extends se {
  static id = "category";
  static defaults = {
    ticks: {
      callback: on
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (U(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : th(s, t, F(e, t), this._addedLabels), eh(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({
        value: r
      });
    return n;
  }
  getLabelForValue(t) {
    return on.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function sh(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: u, includeBounds: d } = i, f = o || 1, m = h - 1, { min: g, max: p } = t, _ = !U(r), b = !U(a), x = !U(c), w = (p - g) / (u + 1);
  let y = ss((p - g) / m / f) * f, C, E, S, D;
  if (y < 1e-14 && !_ && !b)
    return [
      {
        value: g
      },
      {
        value: p
      }
    ];
  D = Math.ceil(p / y) - Math.floor(g / y), D > m && (y = ss(D * y / m / f) * f), U(l) || (C = Math.pow(10, l), y = Math.ceil(y * C) / C), n === "ticks" ? (E = Math.floor(g / y) * y, S = Math.ceil(p / y) * y) : (E = g, S = p), _ && b && o && Sr((a - r) / o, y / 1e3) ? (D = Math.round(Math.min((a - r) / y, h)), y = (a - r) / D, E = r, S = a) : x ? (E = _ ? r : E, S = b ? a : S, D = c - 1, y = (S - E) / D) : (D = (S - E) / y, fe(D, Math.round(D), y / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const A = Math.max(ns(y), ns(E));
  C = Math.pow(10, U(l) ? A : l), E = Math.round(E * C) / C, S = Math.round(S * C) / C;
  let P = 0;
  for (_ && (d && E !== r ? (e.push({
    value: r
  }), E < r && P++, fe(Math.round((E + P * y) * C) / C, r, rn(r, w, i)) && P++) : E < r && P++); P < D; ++P) {
    const H = Math.round((E + P * y) * C) / C;
    if (b && H > a)
      break;
    e.push({
      value: H
    });
  }
  return b && d && S !== a ? e.length && fe(e[e.length - 1].value, a, rn(a, w, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!b || S === a) && e.push({
    value: S
  }), e;
}
function rn(i, t, { horizontal: e, minRotation: s }) {
  const n = Wt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class nh extends se {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return U(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = te(n), c = te(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = sh(n, o);
    return t.bounds === "ticks" && wr(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return Fn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class oh extends nh {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Nn.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = nt(t) ? t : 0, this.max = nt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = Wt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const ni = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, at = /* @__PURE__ */ Object.keys(ni);
function an(i, t) {
  return i - t;
}
function ln(i, t) {
  if (U(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), nt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ye(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function cn(i, t, e, s) {
  const n = at.length;
  for (let o = at.indexOf(i); o < n - 1; ++o) {
    const r = ni[at[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return at[o];
  }
  return at[n - 1];
}
function rh(i, t, e, s, n) {
  for (let o = at.length - 1; o >= at.indexOf(e); o--) {
    const r = at[o];
    if (ni[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return at[e ? at.indexOf(e) : 0];
}
function ah(i) {
  for (let t = at.indexOf(i) + 1, e = at.length; t < e; ++t)
    if (ni[at[t]].common)
      return at[t];
}
function hn(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Pi(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function lh(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function un(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : lh(i, s, n, e);
}
class dn extends se {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  };
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new Za._date(t.adapters.date);
    n.init(e), de(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : ln(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = nt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = nt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = Or(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? cn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : rh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : ah(this._unit), this.initOffsets(n), t.reverse && a.reverse(), un(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = ft(e, 0, r), s = ft(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || cn(o.minUnit, e, s, this._getLabelCapacity(e)), a = F(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ye(l) || l === !0, h = {};
    let u = e, d, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const m = n.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, f = 0; d < s; d = +t.add(d, a, r), f++)
      hn(h, d, m);
    return (d === s || n.bounds === "ticks" || f === 1) && hn(h, d, m), Object.keys(h).sort(an).map((g) => +g);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, r = e || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return G(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], u = c && a[c], d = s[e], f = c && u && d && d.major;
    return this._adapter.format(t, n || (f ? u : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = Wt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, un(this, [
      t
    ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(ln(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Ir(t.sort(an));
  }
}
function Ne(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = Bt(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = Bt(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Ju extends dn {
  static id = "timeseries";
  static defaults = dn.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ne(e, this.min), this._tableRange = Ne(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ne(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ne(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const _o = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, ch = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, hh = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ..._o,
  ...ch
}, uh = ko[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Kt(i) {
  return yn(i) ? yi(i) : i;
}
function dh(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return yn(t) ? new Proxy(i, {}) : i;
}
function fh(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function bo(i, t) {
  i.labels = t;
}
function yo(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function gh(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return bo(e, i.labels), yo(e, i.datasets, t), e;
}
const ph = we({
  props: hh,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = dt(null), o = mn(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: u, plugins: d, datasetIdKey: f } = i, m = gh(h, f), g = dh(m, h);
      o.value = new ei(n.value, {
        type: c,
        data: g,
        options: {
          ...u
        },
        plugins: d
      });
    }, a = () => {
      const c = yi(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ke(r), _n(a), Jt([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [u, d] = c, [f, m] = h;
      const g = yi(o.value);
      if (!g)
        return;
      let p = !1;
      if (u) {
        const _ = Kt(u), b = Kt(f);
        _ && _ !== b && (fh(g, _), p = !0);
      }
      if (d) {
        const _ = Kt(d.labels), b = Kt(m.labels), x = Kt(d.datasets), w = Kt(m.datasets);
        _ !== b && (bo(g.config.data, _), p = !0), x && x !== w && (yo(g.config.data, x, i.datasetIdKey), p = !0);
      }
      p && bn(() => {
        l(g);
      });
    }, {
      deep: !0
    }), () => bi("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      bi("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function mh(i, t) {
  return ei.register(t), we({
    props: _o,
    setup(e, s) {
      let { expose: n } = s;
      const o = mn(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => bi(ph, uh({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const _h = /* @__PURE__ */ mh("line", Ja), bh = { class: "chart-container" }, yh = {
  key: 1,
  class: "no-data"
}, vh = /* @__PURE__ */ we({
  __name: "ForecastChart",
  props: {
    data: {},
    parameter: {},
    color: {},
    fontColor: {},
    gridColor: {}
  },
  setup(i) {
    vn((_) => ({
      v0d0aeb29: f.value
    })), ei.register(
      ih,
      oh,
      mc,
      ii,
      $c,
      Zc,
      Vc,
      Fc
    );
    const t = i, { data: e, parameter: s, color: n, fontColor: o, gridColor: r } = xn(t), { t: a } = qe("weather"), l = it(
      () => a(`Widget.params.${s.value}`, {
        defaultValue: s.value.charAt(0).toUpperCase() + s.value.slice(1)
      })
    ), c = dt(), h = dt("#495057"), u = dt(0), d = () => {
      if (c.value) {
        const b = getComputedStyle(c.value).getPropertyValue("--title-color").trim();
        b && b !== h.value && (h.value = b, bn(() => {
          u.value++;
        }));
      }
    };
    Ke(() => {
      d();
      let _ = c.value;
      for (; _ && !_.classList?.contains("wrapper-container"); )
        _ = _.parentElement;
      _ && new MutationObserver(() => {
        d();
      }).observe(_, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    });
    const f = it(() => h.value), m = it(() => !e.value || e.value.length === 0 ? {
      labels: [],
      datasets: []
    } : {
      labels: e.value.map((_) => _.period),
      datasets: [
        {
          label: l.value,
          data: e.value.map((_) => _.value),
          borderColor: n.value,
          backgroundColor: g,
          borderWidth: 3,
          pointBackgroundColor: n.value,
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: !0,
          tension: 0.4
        }
      ]
    });
    function g(_) {
      const b = _.chart.canvas, x = _.chart.chartArea;
      if (!x)
        return n.value;
      const w = b.getContext("2d").createLinearGradient(0, x.top, 0, x.bottom);
      return w.addColorStop(0, n.value + "80"), w.addColorStop(1, n.value + "10"), w;
    }
    const p = it(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      interaction: {
        mode: "index",
        intersect: !1
      },
      scales: {
        x: {
          display: !0,
          grid: {
            color: r?.value || "#e0e0e0",
            lineWidth: 1
          },
          ticks: {
            color: f.value,
            font: {
              size: 12
            }
          }
        },
        y: {
          display: !0,
          grid: {
            color: r?.value || "#e0e0e0",
            lineWidth: 1
          },
          ticks: {
            color: f.value,
            font: {
              size: 12
            },
            maxTicksLimit: 5,
            callback: function(_) {
              const b = e.value[0]?.unit || "";
              return `${Math.round(_ * 10) / 10}${b}`;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: !1
        },
        title: {
          display: !1
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          borderColor: n.value,
          borderWidth: 1,
          cornerRadius: 6,
          displayColors: !1,
          callbacks: {
            label: function(_) {
              const b = e.value[_.dataIndex];
              return `${Math.round(b.value * 10) / 10}${b.unit}`;
            }
          }
        }
      },
      elements: {
        line: {
          borderCapStyle: "round",
          borderJoinStyle: "round"
        }
      },
      animation: {
        duration: 1e3,
        easing: "easeOutQuart"
      }
    }));
    return (_, b) => (z(), $("div", {
      class: "forecast-chart",
      ref_key: "chartContainer",
      ref: c
    }, [
      k("h4", null, I(V(a)("Widget.forecastOf", { name: l.value })), 1),
      k("div", bh, [
        V(e) && V(e).length > 0 ? (z(), Sn(V(_h), {
          key: u.value,
          data: m.value,
          options: p.value
        }, null, 8, ["data", "options"])) : (z(), $("div", yh, [
          k("p", null, I(V(a)("Widget.noForecast")), 1)
        ]))
      ])
    ], 512));
  }
}), Vi = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, xh = /* @__PURE__ */ Vi(vh, [["__scopeId", "data-v-97c7ece2"]]);
var Sh = Object.defineProperty, wh = Object.getOwnPropertyDescriptor, Th = (i, t, e, s) => {
  for (var n = wh(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Sh(t, e, n), n;
};
class ji extends xo {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Th([
  Ro({ eventType: "weather.refresh" })
], ji.prototype, "refresh");
const Eh = {
  key: 0,
  class: "weather-loading"
}, Ch = {
  key: 1,
  class: "weather-error"
}, kh = {
  key: 2,
  class: "weather-content"
}, Mh = {
  key: 0,
  class: "weather-header"
}, Oh = {
  key: 0,
  class: "location-desc"
}, Dh = {
  key: 1,
  class: "time-range"
}, Ih = { class: "weather-main" }, Ah = { class: "weather-icon-section" }, Ph = { class: "weather-icon" }, Rh = {
  key: 0,
  class: "temperature"
}, Lh = { class: "temp-value" }, Fh = {
  key: 0,
  class: "timestamp"
}, Nh = { class: "weather-details" }, Hh = {
  key: 0,
  class: "weather-item"
}, Wh = { class: "label" }, Bh = { class: "value" }, zh = {
  key: 1,
  class: "weather-item"
}, Vh = { class: "label" }, jh = { class: "value" }, $h = {
  key: 2,
  class: "weather-item"
}, Uh = { class: "label" }, Gh = { class: "value" }, Yh = { key: 0 }, Xh = {
  key: 3,
  class: "weather-item"
}, Kh = { class: "label" }, qh = { class: "value" }, Jh = {
  key: 4,
  class: "weather-item"
}, Zh = { class: "label" }, Qh = { class: "value" }, tu = {
  key: 5,
  class: "weather-item"
}, eu = { class: "label" }, iu = { class: "value" }, su = {
  key: 1,
  class: "forecast-section"
}, nu = { class: "forecast-title" }, ou = { class: "forecast-charts" }, ru = {
  key: 2,
  class: "refresh-info"
}, au = {
  key: 3,
  class: "weather-empty"
}, lu = /* @__PURE__ */ we({
  __name: "WeatherWidget",
  props: /* @__PURE__ */ Mo({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !1, default: () => ({}) },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    vn((T) => ({
      v66a67167: wt.value
    }));
    const e = i, { t: s } = qe("weather"), n = Cn(), { id: o } = xn(e), r = wn(i, "configv"), a = Xi(Po.TINY_EMITTER), l = Xi(So), h = Io().params.pageid || "";
    class u extends ji {
      refresh() {
        S();
      }
    }
    const d = new u();
    t(d);
    const f = () => {
      o?.value && a.emit("widget:WeatherWidget:click", {
        type: "widget:WeatherWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, m = () => {
      o?.value && a.emit("widget:WeatherWidget:right_click", {
        type: "widget:WeatherWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, g = dt(null), p = dt(!1), _ = dt(null), b = dt(null), { update: x, callEvent: w, getDataWithOptions: y } = Ao(it(() => e.datasourceId), "WeatherData", g), {
      formatTimeRange: C
    } = Vo(r.value, e.datasourceId), E = it(() => r.value.useTimeRange && (r.value.startTime || r.value.endTime)), S = async (T, O) => {
      if (e.datasourceId) {
        p.value = !0, _.value = null;
        try {
          T !== O && T && O ? x(T, O) : await y();
        } catch (M) {
          _.value = s("Widget.loadFailed"), console.error("Weather widget error:", M);
        } finally {
          p.value = !1;
        }
      }
    }, D = () => {
      b.value && clearInterval(b.value);
      const T = r.value.refreshInterval || 3e5;
      console.log("Weather widget refresh interval (ms):", T, "seconds:", T / 1e3), b.value = setInterval(() => {
        console.log("Weather widget auto-refresh triggered"), S();
      }, T);
    };
    Jt(() => e.datasourceId, (T, O) => {
      S(T, O);
    }), Jt(() => r.value.refreshInterval, D), Jt(() => [r.value.startTime, r.value.endTime], () => {
      E.value;
    }), Jt(() => r.value.thingId, () => {
      S();
    }), Ke(() => {
      l.registerInstance(o.value || "", d, "WeatherWidget", h), D(), S();
    }), _n(() => {
      l.unregisterInstance(o.value || ""), b.value && clearInterval(b.value);
    });
    const A = (T) => {
      if (T.value === null || T.value === void 0 || isNaN(T.value))
        return `--${T.unit || ""}`;
      let O = T.value, M = T.unit || "";
      return (M === "K" || M === "Kelvin") && (O = O - 273.15, M = "°C"), M === "m" && O >= 1e3 && (O = O / 1e3, M = "km"), M === "Pa" && (O = O / 1e3, M = "kPa"), `${Math.round(O * 10) / 10}${M}`;
    }, P = (T) => T == null || isNaN(T) ? "" : ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(T / 45) % 8], H = (T) => T ? n.date(T, { dateStyle: "short", timeStyle: "short" }) : "", Q = (T) => ({
      0: "☀️",
      // Clear sky
      1: "🌤️",
      // Mainly clear
      2: "⛅",
      // Partly cloudy
      3: "☁️",
      // Overcast
      45: "🌫️",
      // Fog
      48: "🌫️",
      // Depositing rime fog
      51: "🌦️",
      // Drizzle: Light
      53: "🌦️",
      // Drizzle: Moderate
      55: "🌧️",
      // Drizzle: Dense
      56: "🌨️",
      // Freezing drizzle: Light
      57: "🌨️",
      // Freezing drizzle: Dense
      61: "🌧️",
      // Rain: Slight
      63: "🌧️",
      // Rain: Moderate
      65: "⛈️",
      // Rain: Heavy
      66: "🌨️",
      // Freezing rain: Light
      67: "🌨️",
      // Freezing rain: Heavy
      71: "❄️",
      // Snow fall: Slight
      73: "❄️",
      // Snow fall: Moderate
      75: "🌨️",
      // Snow fall: Heavy
      77: "❄️",
      // Snow grains
      80: "🌦️",
      // Rain showers: Slight
      81: "🌧️",
      // Rain showers: Moderate
      82: "⛈️",
      // Rain showers: Violent
      85: "🌨️",
      // Snow showers: Slight
      86: "🌨️",
      // Snow showers: Heavy
      95: "⛈️",
      // Thunderstorm: Slight or moderate
      96: "⛈️",
      // Thunderstorm with slight hail
      99: "⛈️"
      // Thunderstorm with heavy hail
    })[T] || "🌤️", lt = (T) => {
      if (!T) return "🌤️";
      const O = T.weatherCode?.value || T.wmoCode?.value;
      if (O != null)
        return Q(O);
      const M = T.temperature?.value, B = T.humidity?.value, R = T.precipitation?.value, tt = T.cloudCover?.value;
      if (T.windSpeed?.value, R && R > 0)
        return M && M < 2 ? "❄️" : R > 5 ? "🌧️" : "🌦️";
      if (tt) {
        if (tt > 80) return "☁️";
        if (tt > 50) return "⛅";
      }
      return M ? M > 25 ? "☀️" : M > 15 ? "🌤️" : M > 0 ? "🌥️" : "🥶" : B && B > 85 ? "🌫️" : "🌤️";
    }, Y = ["forecast3h", "forecast6h", "forecast9h", "forecast12h", "forecast24h", "forecast36h", "forecast48h", "forecast60h", "forecast72h"], K = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"], ot = (T, O) => {
      const M = `${O}Forecast`, B = T[M];
      return B ? Y.filter((R) => B[R]).map((R) => {
        let tt = B[R].value, Mt = B[R].unit;
        return (Mt === "K" || Mt === "Kelvin") && (tt = tt - 273.15, Mt = "°C"), Mt === "m" && tt >= 1e3 && (tt = tt / 1e3, Mt = "km"), Mt === "Pa" && (tt = tt / 1e3, Mt = "kPa"), {
          period: R.replace("forecast", "").replace("h", " hours"),
          value: tt,
          unit: Mt
        };
      }) : [];
    }, Pt = it(() => W.value ? K.some((T) => {
      const O = `${T}Forecast`;
      return W.value[O] && Object.keys(W.value[O]).length > 0;
    }) : !1), Ut = it(() => r.value.selectedForecastParameters ? r.value.selectedForecastParameters : Pt.value ? ["temperature", "humidity", "pressure", "windSpeed"] : []), W = it(() => {
      if (!g.value) return null;
      if (Array.isArray(g.value) && g.value.length > 0) {
        let M = g.value[0];
        if (r.value.thingId) {
          const B = g.value.find(
            (R) => R.thingId == r.value.thingId || String(R.thingId) == String(r.value.thingId)
          );
          B && (M = B);
        }
        return M;
      }
      if (!g.value?.datastreams) return null;
      let T = g.value.datastreams;
      r.value.thingId && (T = T.filter((M) => M.thing && M.thing["@iot.id"] == r.value.thingId));
      const O = {};
      return T.forEach((M) => {
        if (M.observations && M.observations.length > 0) {
          const B = M.observations[0], R = M.name?.toLowerCase(), tt = M.description?.toLowerCase();
          R?.includes("temperature") || R?.includes("temp") || tt?.includes("temperatur") || R?.includes("lufttemperatur") ? O.temperature = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "°C",
            timestamp: B.phenomenonTime
          } : R?.includes("humidity") || R?.includes("feuchte") || tt?.includes("luftfeuchte") ? O.humidity = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "%",
            timestamp: B.phenomenonTime
          } : R?.includes("pressure") || R?.includes("luftdruck") || tt?.includes("pressure") ? O.pressure = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "hPa",
            timestamp: B.phenomenonTime
          } : R?.includes("wind") && R?.includes("speed") || R?.includes("windgeschwindigkeit") ? O.windSpeed = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "m/s",
            timestamp: B.phenomenonTime
          } : R?.includes("wind") && R?.includes("direction") || R?.includes("windrichtung") ? O.windDirection = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "°",
            timestamp: B.phenomenonTime
          } : R?.includes("precipitation") || R?.includes("niederschlag") || R?.includes("rain") || R?.includes("regen") ? O.precipitation = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "mm",
            timestamp: B.phenomenonTime
          } : R?.includes("visibility") || R?.includes("sicht") ? O.visibility = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "m",
            timestamp: B.phenomenonTime
          } : (R?.includes("cloud") || R?.includes("wolken") || R?.includes("bedeckung")) && (O.cloudCover = {
            value: B.result,
            unit: M.unitOfMeasurement?.symbol || "%",
            timestamp: B.phenomenonTime
          });
        }
      }), O;
    }), Gt = (T) => {
      const O = {
        temperature: "#e74c3c",
        humidity: "#3498db",
        pressure: "#2ecc71",
        windSpeed: "#f39c12",
        windDirection: "#9b59b6",
        precipitation: "#2980b9",
        visibility: "#1abc9c",
        cloudCover: "#95a5a6"
      };
      return r.value.chartColors?.[T] || O[T] || "#3498db";
    }, wt = it(() => "var(--title-color, #495057)"), bt = it(() => {
      if (!g.value?.things || g.value.things.length === 0) return null;
      let T = g.value.things[0];
      if (r.value.thingId) {
        const M = g.value.things.find((B) => B["@iot.id"] == r.value.thingId);
        M && (T = M);
      }
      const O = T.Locations?.[0];
      return {
        name: T.name || s("Widget.unknownLocation"),
        description: T.description,
        coordinates: O?.location ? {
          latitude: O.location.coordinates?.[1],
          longitude: O.location.coordinates?.[0]
        } : void 0
      };
    });
    return (T, O) => (z(), $("div", {
      class: "weather-widget",
      onClick: f,
      onContextmenu: Oo(m, ["prevent"])
    }, [
      p.value ? (z(), $("div", Eh, [
        O[0] || (O[0] = k("div", { class: "spinner" }, null, -1)),
        k("p", null, I(V(s)("Widget.loading")), 1)
      ])) : _.value ? (z(), $("div", Ch, [
        k("p", null, I(_.value), 1)
      ])) : W.value ? (z(), $("div", kh, [
        bt.value ? (z(), $("div", Mh, [
          k("h3", null, I(bt.value.name), 1),
          bt.value.description ? (z(), $("p", Oh, I(bt.value.description), 1)) : Z("", !0),
          E.value ? (z(), $("div", Dh, [
            k("small", null, I(V(C)()), 1)
          ])) : Z("", !0)
        ])) : Z("", !0),
        k("div", Ih, [
          k("div", Ah, [
            k("span", Ph, I(lt(W.value)), 1)
          ]),
          W.value.temperature ? (z(), $("div", Rh, [
            k("span", Lh, I(A(W.value.temperature)), 1),
            W.value.temperature.timestamp ? (z(), $("div", Fh, [
              k("small", null, I(H(W.value.temperature.timestamp)), 1)
            ])) : Z("", !0)
          ])) : Z("", !0),
          k("div", Nh, [
            W.value.humidity ? (z(), $("div", Hh, [
              k("span", Wh, I(V(s)("Widget.humidity")), 1),
              k("span", Bh, I(A(W.value.humidity)), 1)
            ])) : Z("", !0),
            W.value.pressure ? (z(), $("div", zh, [
              k("span", Vh, I(V(s)("Widget.pressure")), 1),
              k("span", jh, I(A(W.value.pressure)), 1)
            ])) : Z("", !0),
            W.value.windSpeed ? (z(), $("div", $h, [
              k("span", Uh, I(V(s)("Widget.wind")), 1),
              k("span", Gh, [
                He(I(A(W.value.windSpeed)) + " ", 1),
                W.value.windDirection ? (z(), $("span", Yh, I(P(W.value.windDirection.value)), 1)) : Z("", !0)
              ])
            ])) : Z("", !0),
            W.value.precipitation ? (z(), $("div", Xh, [
              k("span", Kh, I(V(s)("Widget.precipitation")), 1),
              k("span", qh, I(A(W.value.precipitation)), 1)
            ])) : Z("", !0),
            W.value.visibility ? (z(), $("div", Jh, [
              k("span", Zh, I(V(s)("Widget.visibility")), 1),
              k("span", Qh, I(A(W.value.visibility)), 1)
            ])) : Z("", !0),
            W.value.cloudCover ? (z(), $("div", tu, [
              k("span", eu, I(V(s)("Widget.cloudCover")), 1),
              k("span", iu, I(A(W.value.cloudCover)), 1)
            ])) : Z("", !0)
          ])
        ]),
        r.value.showForecast && Pt.value ? (z(), $("div", su, [
          k("h3", nu, I(V(s)("Widget.forecast")), 1),
          k("div", ou, [
            (z(!0), $(Tn, null, En(Ut.value, (M) => (z(), Sn(xh, {
              key: M,
              data: ot(W.value, M),
              parameter: M,
              color: Gt(M),
              fontColor: wt.value,
              gridColor: r.value.gridColor || "#e0e0e0"
            }, null, 8, ["data", "parameter", "color", "fontColor", "gridColor"]))), 128))
          ])
        ])) : Z("", !0),
        r.value.refreshInterval ? (z(), $("div", ru, [
          k("small", null, I(V(s)("Widget.autoRefresh", { count: Math.round(r.value.refreshInterval / 6e4) })), 1)
        ])) : Z("", !0)
      ])) : (z(), $("div", au, [
        k("p", null, I(V(s)("Widget.noData")), 1)
      ]))
    ], 32));
  }
}), cu = /* @__PURE__ */ Vi(lu, [["__scopeId", "data-v-b1212766"]]), hu = { class: "weather-settings" }, uu = { class: "settings-section" }, du = { class: "time-mode-selector" }, fu = {
  key: 0,
  class: "time-range-buttons"
}, gu = {
  key: 1,
  class: "time-inputs"
}, pu = { class: "form-group" }, mu = { for: "startTime" }, _u = { class: "form-group" }, bu = { for: "endTime" }, yu = {
  key: 0,
  class: "settings-section"
}, vu = { class: "color-settings" }, xu = ["for"], Su = ["id", "onUpdate:modelValue"], wu = { class: "form-text" }, Tu = /* @__PURE__ */ we({
  __name: "WeatherWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const { t } = qe("weather"), e = wn(i, "modelValue"), s = it(() => e.value), n = dt(
      s.value.manualTimeSelection ? "manual" : s.value.useTimeRange ? "range" : "auto"
    );
    Jt(n, (l) => {
      e.value.useTimeRange = l === "range", e.value.manualTimeSelection = l === "manual", l === "auto" && (e.value.startTime = "", e.value.endTime = "");
    });
    const o = () => {
      const l = /* @__PURE__ */ new Date();
      e.value.endTime = l.toISOString().slice(0, 16);
      const c = new Date(l.getTime() - 3600 * 1e3);
      e.value.startTime = c.toISOString().slice(0, 16);
    }, r = (l) => {
      const c = /* @__PURE__ */ new Date();
      e.value.endTime = c.toISOString().slice(0, 16);
      const h = new Date(c.getTime() - l * 60 * 60 * 1e3);
      e.value.startTime = h.toISOString().slice(0, 16);
    }, a = it(() => [
      { key: "temperature", label: t("Widget.params.temperature") },
      { key: "humidity", label: t("Widget.params.humidity") },
      { key: "pressure", label: t("Widget.params.pressure") },
      { key: "windSpeed", label: t("Widget.params.windSpeed") },
      { key: "windDirection", label: t("Widget.params.windDirection") },
      { key: "precipitation", label: t("Widget.params.precipitation") },
      { key: "visibility", label: t("Widget.params.visibility") },
      { key: "cloudCover", label: t("Widget.params.cloudCover") }
    ]);
    return Ke(() => {
      e.value.selectedForecastParameters || (e.value.selectedForecastParameters = ["temperature", "humidity", "pressure", "windSpeed"]), e.value.forecastPeriods || (e.value.forecastPeriods = ["forecast12h", "forecast24h", "forecast48h", "forecast72h"]), e.value.showForecast === void 0 && (e.value.showForecast = !1), e.value.chartColors || (e.value.chartColors = {
        temperature: "#e74c3c",
        humidity: "#3498db",
        pressure: "#2ecc71",
        windSpeed: "#f39c12",
        windDirection: "#9b59b6",
        precipitation: "#2980b9",
        visibility: "#1abc9c",
        cloudCover: "#95a5a6"
      }), e.value.gridColor || (e.value.gridColor = "#e0e0e0");
    }), (l, c) => (z(), $("div", hu, [
      k("div", uu, [
        k("h4", null, I(V(t)("Settings.range")), 1),
        k("div", du, [
          k("label", null, [
            Yt(k("input", {
              type: "radio",
              value: "auto",
              "onUpdate:modelValue": c[0] || (c[0] = (h) => n.value = h)
            }, null, 512), [
              [oi, n.value]
            ]),
            He(" " + I(V(t)("Settings.latest")), 1)
          ]),
          k("label", null, [
            Yt(k("input", {
              type: "radio",
              value: "range",
              "onUpdate:modelValue": c[1] || (c[1] = (h) => n.value = h)
            }, null, 512), [
              [oi, n.value]
            ]),
            He(" " + I(V(t)("Settings.timeRange")), 1)
          ]),
          k("label", null, [
            Yt(k("input", {
              type: "radio",
              value: "manual",
              "onUpdate:modelValue": c[2] || (c[2] = (h) => n.value = h)
            }, null, 512), [
              [oi, n.value]
            ]),
            He(" " + I(V(t)("Settings.manual")), 1)
          ])
        ]),
        n.value === "range" ? (z(), $("div", fu, [
          k("button", {
            type: "button",
            onClick: c[3] || (c[3] = (h) => r(1)),
            class: "btn btn-sm"
          }, I(V(t)("Settings.lastHour")), 1),
          k("button", {
            type: "button",
            onClick: c[4] || (c[4] = (h) => r(6)),
            class: "btn btn-sm"
          }, I(V(t)("Settings.last6Hours")), 1),
          k("button", {
            type: "button",
            onClick: c[5] || (c[5] = (h) => r(24)),
            class: "btn btn-sm"
          }, I(V(t)("Settings.last24Hours")), 1),
          k("button", {
            type: "button",
            onClick: c[6] || (c[6] = (h) => r(168)),
            class: "btn btn-sm"
          }, I(V(t)("Settings.lastWeek")), 1)
        ])) : Z("", !0),
        n.value === "manual" || n.value === "range" ? (z(), $("div", gu, [
          k("div", pu, [
            k("label", mu, I(V(t)("Settings.start")), 1),
            Yt(k("input", {
              id: "startTime",
              type: "datetime-local",
              "onUpdate:modelValue": c[7] || (c[7] = (h) => e.value.startTime = h),
              class: "form-control"
            }, null, 512), [
              [ri, e.value.startTime]
            ])
          ]),
          k("div", _u, [
            k("label", bu, I(V(t)("Settings.end")), 1),
            Yt(k("input", {
              id: "endTime",
              type: "datetime-local",
              "onUpdate:modelValue": c[8] || (c[8] = (h) => e.value.endTime = h),
              class: "form-control"
            }, null, 512), [
              [ri, e.value.endTime]
            ])
          ]),
          k("button", {
            type: "button",
            onClick: o,
            class: "btn btn-sm btn-secondary"
          }, I(V(t)("Settings.now")), 1)
        ])) : Z("", !0)
      ]),
      e.value.showForecast ? (z(), $("div", yu, [
        k("h4", null, I(V(t)("Settings.colors")), 1),
        k("div", vu, [
          (z(!0), $(Tn, null, En(a.value, (h) => (z(), $("div", {
            key: h.key,
            class: "color-setting-item"
          }, [
            k("label", {
              for: `color-${h.key}`
            }, I(h.label) + ":", 9, xu),
            Yt(k("input", {
              id: `color-${h.key}`,
              type: "color",
              "onUpdate:modelValue": (u) => e.value.chartColors[h.key] = u,
              class: "color-picker"
            }, null, 8, Su), [
              [ri, e.value.chartColors[h.key]]
            ]),
            k("span", {
              class: "color-preview",
              style: Do({ backgroundColor: e.value.chartColors?.[h.key] })
            }, null, 4)
          ]))), 128))
        ]),
        k("small", wu, I(V(t)("Settings.colorsHint")), 1)
      ])) : Z("", !0)
    ]));
  }
}), Eu = /* @__PURE__ */ Vi(Tu, [["__scopeId", "data-v-5a01b91f"]]);
class $i extends Lo {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new $i()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(L.eINSTANCE);
  }
  /**
   * Create a new WeatherSettings instance
   */
  createWeatherSettings() {
    return new v();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "WeatherSettings":
        return this.createWeatherSettings();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
class L extends Fo {
  static eNAME = "weathersettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.weather";
  static eNS_PREFIX = "weathersettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new L(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    WEATHER_SETTINGS: null,
    WEATHER_SETTINGS__THING_ID: null,
    WEATHER_SETTINGS__LOCATION: null,
    WEATHER_SETTINGS__USE_LOCATION: null,
    WEATHER_SETTINGS__START_TIME: null,
    WEATHER_SETTINGS__END_TIME: null,
    WEATHER_SETTINGS__USE_TIME_RANGE: null,
    WEATHER_SETTINGS__MANUAL_TIME_SELECTION: null,
    WEATHER_SETTINGS__REFRESH_INTERVAL: null,
    WEATHER_SETTINGS__SHOW_FORECAST: null,
    WEATHER_SETTINGS__SELECTED_FORECAST_PARAMETERS: null,
    WEATHER_SETTINGS__FORECAST_PERIODS: null,
    WEATHER_SETTINGS__GRID_COLOR: null
  };
  constructor() {
    super(), this.setName(L.eNAME), this.setNsURI(L.eNS_URI), this.setNsPrefix(L.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    No.INSTANCE.set(L.eNS_URI, this), this.setEFactoryInstance($i.eINSTANCE);
    const t = new Ho();
    t.setName("WeatherSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), L.Literals.WEATHER_SETTINGS = t;
    const e = new ct();
    e.setName("thingId"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), L.Literals.WEATHER_SETTINGS__THING_ID = e;
    const s = new ct();
    s.setName("location"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), L.Literals.WEATHER_SETTINGS__LOCATION = s;
    const n = new ct();
    n.setName("useLocation"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), L.Literals.WEATHER_SETTINGS__USE_LOCATION = n;
    const o = new ct();
    o.setName("startTime"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), L.Literals.WEATHER_SETTINGS__START_TIME = o;
    const r = new ct();
    r.setName("endTime"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), L.Literals.WEATHER_SETTINGS__END_TIME = r;
    const a = new ct();
    a.setName("useTimeRange"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), L.Literals.WEATHER_SETTINGS__USE_TIME_RANGE = a;
    const l = new ct();
    l.setName("manualTimeSelection"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), L.Literals.WEATHER_SETTINGS__MANUAL_TIME_SELECTION = l;
    const c = new ct();
    c.setName("refreshInterval"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), L.Literals.WEATHER_SETTINGS__REFRESH_INTERVAL = c;
    const h = new ct();
    h.setName("showForecast"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), L.Literals.WEATHER_SETTINGS__SHOW_FORECAST = h;
    const u = new ct();
    u.setName("selectedForecastParameters"), u.setLowerBound(0), u.setUpperBound(-1), t.getEStructuralFeatures().push(u), L.Literals.WEATHER_SETTINGS__SELECTED_FORECAST_PARAMETERS = u;
    const d = new ct();
    d.setName("forecastPeriods"), d.setLowerBound(0), d.setUpperBound(-1), t.getEStructuralFeatures().push(d), L.Literals.WEATHER_SETTINGS__FORECAST_PERIODS = d;
    const f = new ct();
    f.setName("gridColor"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), L.Literals.WEATHER_SETTINGS__GRID_COLOR = f, L.Literals.WEATHER_SETTINGS__THING_ID.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__LOCATION.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__USE_LOCATION.setEType(ht().getEClassifier("EBoolean")), L.Literals.WEATHER_SETTINGS__START_TIME.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__END_TIME.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__USE_TIME_RANGE.setEType(ht().getEClassifier("EBoolean")), L.Literals.WEATHER_SETTINGS__MANUAL_TIME_SELECTION.setEType(ht().getEClassifier("EBoolean")), L.Literals.WEATHER_SETTINGS__REFRESH_INTERVAL.setEType(ht().getEClassifier("EInt")), L.Literals.WEATHER_SETTINGS__SHOW_FORECAST.setEType(ht().getEClassifier("EBoolean")), L.Literals.WEATHER_SETTINGS__SELECTED_FORECAST_PARAMETERS.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__FORECAST_PERIODS.setEType(ht().getEClassifier("EString")), L.Literals.WEATHER_SETTINGS__GRID_COLOR.setEType(ht().getEClassifier("EString"));
  }
}
class v extends Wo {
  // Feature ID Constants (eLiterals)
  static THING_ID = 0;
  static LOCATION = 1;
  static USE_LOCATION = 2;
  static START_TIME = 3;
  static END_TIME = 4;
  static USE_TIME_RANGE = 5;
  static MANUAL_TIME_SELECTION = 6;
  static REFRESH_INTERVAL = 7;
  static SHOW_FORECAST = 8;
  static SELECTED_FORECAST_PARAMETERS = 9;
  static FORECAST_PERIODS = 10;
  static GRID_COLOR = 11;
  // Private fields
  _thingId;
  _location;
  _useLocation;
  _startTime;
  _endTime;
  _useTimeRange = !1;
  _manualTimeSelection = !1;
  _refreshInterval = 3e5;
  _showForecast = !1;
  _selectedForecastParameters;
  _forecastPeriods;
  _gridColor;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return L.Literals.WEATHER_SETTINGS;
  }
  // Getters and Setters
  get thingId() {
    return this._thingId;
  }
  set thingId(t) {
    const e = this._thingId;
    this._thingId = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.THING_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.THING_ID,
      merge: () => !1
    });
  }
  get location() {
    return this._location;
  }
  set location(t) {
    const e = this._location;
    this._location = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.LOCATION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.LOCATION,
      merge: () => !1
    });
  }
  get useLocation() {
    return this._useLocation;
  }
  set useLocation(t) {
    const e = this._useLocation;
    this._useLocation = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.USE_LOCATION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.USE_LOCATION,
      merge: () => !1
    });
  }
  get startTime() {
    return this._startTime;
  }
  set startTime(t) {
    const e = this._startTime;
    this._startTime = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.START_TIME),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.START_TIME,
      merge: () => !1
    });
  }
  get endTime() {
    return this._endTime;
  }
  set endTime(t) {
    const e = this._endTime;
    this._endTime = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.END_TIME),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.END_TIME,
      merge: () => !1
    });
  }
  get useTimeRange() {
    return this._useTimeRange;
  }
  set useTimeRange(t) {
    const e = this._useTimeRange;
    this._useTimeRange = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.USE_TIME_RANGE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.USE_TIME_RANGE,
      merge: () => !1
    });
  }
  get manualTimeSelection() {
    return this._manualTimeSelection;
  }
  set manualTimeSelection(t) {
    const e = this._manualTimeSelection;
    this._manualTimeSelection = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.MANUAL_TIME_SELECTION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.MANUAL_TIME_SELECTION,
      merge: () => !1
    });
  }
  get refreshInterval() {
    return this._refreshInterval;
  }
  set refreshInterval(t) {
    const e = this._refreshInterval;
    this._refreshInterval = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.REFRESH_INTERVAL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.REFRESH_INTERVAL,
      merge: () => !1
    });
  }
  get showForecast() {
    return this._showForecast;
  }
  set showForecast(t) {
    const e = this._showForecast;
    this._showForecast = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.SHOW_FORECAST),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.SHOW_FORECAST,
      merge: () => !1
    });
  }
  get selectedForecastParameters() {
    return this._selectedForecastParameters || (this._selectedForecastParameters = Ki(this, this.eClass().getEStructuralFeature("selectedForecastParameters"))), this._selectedForecastParameters;
  }
  get forecastPeriods() {
    return this._forecastPeriods || (this._forecastPeriods = Ki(this, this.eClass().getEStructuralFeature("forecastPeriods"))), this._forecastPeriods;
  }
  get gridColor() {
    return this._gridColor;
  }
  set gridColor(t) {
    const e = this._gridColor;
    this._gridColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.GRID_COLOR,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case v.THING_ID:
        return this.thingId;
      case v.LOCATION:
        return this.location;
      case v.USE_LOCATION:
        return this.useLocation;
      case v.START_TIME:
        return this.startTime;
      case v.END_TIME:
        return this.endTime;
      case v.USE_TIME_RANGE:
        return this.useTimeRange;
      case v.MANUAL_TIME_SELECTION:
        return this.manualTimeSelection;
      case v.REFRESH_INTERVAL:
        return this.refreshInterval;
      case v.SHOW_FORECAST:
        return this.showForecast;
      case v.SELECTED_FORECAST_PARAMETERS:
        return this.selectedForecastParameters;
      case v.FORECAST_PERIODS:
        return this.forecastPeriods;
      case v.GRID_COLOR:
        return this.gridColor;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, e) {
    switch (this.eClass().getFeatureID(t)) {
      case v.THING_ID:
        this.thingId = e, super.eSet(t, e);
        break;
      case v.LOCATION:
        this.location = e, super.eSet(t, e);
        break;
      case v.USE_LOCATION:
        this.useLocation = e, super.eSet(t, e);
        break;
      case v.START_TIME:
        this.startTime = e, super.eSet(t, e);
        break;
      case v.END_TIME:
        this.endTime = e, super.eSet(t, e);
        break;
      case v.USE_TIME_RANGE:
        this.useTimeRange = e, super.eSet(t, e);
        break;
      case v.MANUAL_TIME_SELECTION:
        this.manualTimeSelection = e, super.eSet(t, e);
        break;
      case v.REFRESH_INTERVAL:
        this.refreshInterval = e, super.eSet(t, e);
        break;
      case v.SHOW_FORECAST:
        this.showForecast = e, super.eSet(t, e);
        break;
      case v.SELECTED_FORECAST_PARAMETERS:
        this.selectedForecastParameters.clear(), this.selectedForecastParameters.addAll(e), super.eSet(t, e);
        break;
      case v.FORECAST_PERIODS:
        this.forecastPeriods.clear(), this.forecastPeriods.addAll(e), super.eSet(t, e);
        break;
      case v.GRID_COLOR:
        this.gridColor = e, super.eSet(t, e);
        break;
      default:
        super.eSet(t, e);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case v.THING_ID:
        return this._thingId !== void 0;
      case v.LOCATION:
        return this._location !== void 0;
      case v.USE_LOCATION:
        return this._useLocation !== void 0;
      case v.START_TIME:
        return this._startTime !== void 0;
      case v.END_TIME:
        return this._endTime !== void 0;
      case v.USE_TIME_RANGE:
        return this._useTimeRange !== !1;
      case v.MANUAL_TIME_SELECTION:
        return this._manualTimeSelection !== !1;
      case v.REFRESH_INTERVAL:
        return this._refreshInterval !== 3e5;
      case v.SHOW_FORECAST:
        return this._showForecast !== !1;
      case v.SELECTED_FORECAST_PARAMETERS:
        return this._selectedForecastParameters !== void 0 && !this._selectedForecastParameters.isEmpty();
      case v.FORECAST_PERIODS:
        return this._forecastPeriods !== void 0 && !this._forecastPeriods.isEmpty();
      case v.GRID_COLOR:
        return this._gridColor !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case v.THING_ID:
        this._thingId = void 0;
        return;
      case v.LOCATION:
        this._location = void 0;
        return;
      case v.USE_LOCATION:
        this._useLocation = void 0;
        return;
      case v.START_TIME:
        this._startTime = void 0;
        return;
      case v.END_TIME:
        this._endTime = void 0;
        return;
      case v.USE_TIME_RANGE:
        this._useTimeRange = !1;
        return;
      case v.MANUAL_TIME_SELECTION:
        this._manualTimeSelection = !1;
        return;
      case v.REFRESH_INTERVAL:
        this._refreshInterval = 3e5;
        return;
      case v.SHOW_FORECAST:
        this._showForecast = !1;
        return;
      case v.SELECTED_FORECAST_PARAMETERS:
        this._selectedForecastParameters && this._selectedForecastParameters.clear();
        return;
      case v.FORECAST_PERIODS:
        this._forecastPeriods && this._forecastPeriods.clear();
        return;
      case v.GRID_COLOR:
        this._gridColor = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      thingId: this.thingId,
      location: this.location,
      useLocation: this.useLocation,
      startTime: this.startTime,
      endTime: this.endTime,
      useTimeRange: this.useTimeRange,
      manualTimeSelection: this.manualTimeSelection,
      refreshInterval: this.refreshInterval,
      showForecast: this.showForecast,
      selectedForecastParameters: this.selectedForecastParameters?.toArray?.() ?? this.selectedForecastParameters,
      forecastPeriods: this.forecastPeriods?.toArray?.() ?? this.forecastPeriods,
      gridColor: this.gridColor
    };
  }
}
const Cu = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the weather widget.

How often it reads, and what the forecast shows. Which stretch of time it
reads and what colour each parameter is drawn in stay with the hand-written
component: the first is three modes with quick ranges and a "now" button,
the second is one colour per parameter keyed by the parameter.

The parameters and the periods are sets, so every choice is shown ticked or
not rather than hidden behind a dropdown - which of the eight are charted is
read by scanning them.

The interval is stored in milliseconds, which is what the widget hands to
setInterval; the labels say it in the units someone thinks in.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="WeatherSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings"/>

  <components xsi:type="uimodel:FormView" name="WeatherSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="refreshGroup" layout="VERTICAL" label="weather:Form.refreshGroup">
      <fields xsi:type="uimodel:SelectWidget" name="refreshInterval"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings/refreshInterval" label="weather:Form.refreshInterval">
        <values>60000</values>
        <values>300000</values>
        <values>600000</values>
        <values>1800000</values>
        <values>3600000</values>
        <optionLabel language="JS" body="({ '60000': 'weather:Options.refresh.m1', '300000': 'weather:Options.refresh.m5', '600000': 'weather:Options.refresh.m10', '1800000': 'weather:Options.refresh.m30', '3600000': 'weather:Options.refresh.h1' })[option] ?? option"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="forecastGroup" layout="VERTICAL" label="weather:Form.forecastGroup">
      <fields xsi:type="uimodel:CheckboxWidget" name="showForecast"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings/showForecast" label="weather:Form.showForecast"/>
      <fields xsi:type="uimodel:SelectWidget" name="selectedForecastParameters"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings/selectedForecastParameters"
          label="weather:Form.selectedForecastParameters" multiSelect="true">
        <values>temperature</values>
        <values>humidity</values>
        <values>pressure</values>
        <values>windSpeed</values>
        <values>windDirection</values>
        <values>precipitation</values>
        <values>visibility</values>
        <values>cloudCover</values>
        <optionLabel language="JS" body="({ temperature: 'weather:Widget.params.temperature', humidity: 'weather:Widget.params.humidity', pressure: 'weather:Widget.params.pressure', windSpeed: 'weather:Widget.params.windSpeed', windDirection: 'weather:Widget.params.windDirection', precipitation: 'weather:Widget.params.precipitation', visibility: 'weather:Widget.params.visibility', cloudCover: 'weather:Widget.params.cloudCover' })[option] ?? option"/>
        <visibilityCondition language="JS" body="self.showForecast === true || self.showForecast === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="forecastPeriods"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings/forecastPeriods"
          label="weather:Form.forecastPeriods" multiSelect="true">
        <values>forecast12h</values>
        <values>forecast24h</values>
        <values>forecast36h</values>
        <values>forecast48h</values>
        <values>forecast60h</values>
        <values>forecast72h</values>
        <optionLabel language="JS" body="({ forecast12h: 'weather:Options.period.h12', forecast24h: 'weather:Options.period.h24', forecast36h: 'weather:Options.period.h36', forecast48h: 'weather:Options.period.h48', forecast60h: 'weather:Options.period.h60', forecast72h: 'weather:Options.period.h72' })[option] ?? option"/>
        <visibilityCondition language="JS" body="self.showForecast === true || self.showForecast === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget" name="gridColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.weather#//WeatherSettings/gridColor" label="weather:Form.gridColor">
        <visibilityCondition language="JS" body="self.showForecast === true || self.showForecast === 'true'"/>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`, ku = [
  { name: "Weather Clicked", type: "click", description: "Triggered when the weather widget is clicked", payloadType: Gi },
  { name: "Weather Right Clicked", type: "right_click", description: "Triggered when the weather widget is right-clicked", payloadType: Gi }
], Mu = { name: "Wetter", loading: "Wetterdaten werden geladen…", loadFailed: "Wetterdaten konnten nicht geladen werden", noData: "Keine Wetterdaten vorhanden", unknownLocation: "Unbekannter Ort", from: "Ab: {{time}}", until: "Bis: {{time}}", humidity: "Luftfeuchte:", pressure: "Luftdruck:", wind: "Wind:", precipitation: "Niederschlag:", visibility: "Sichtweite:", cloudCover: "Bewölkung:", forecast: "Wettervorhersage", forecastOf: "Vorhersage {{name}}", noForecast: "Keine Vorhersagedaten vorhanden", autoRefresh_one: "Wird jede Minute aktualisiert", autoRefresh_other: "Wird alle {{count}} Minuten aktualisiert", params: { temperature: "Temperatur", humidity: "Luftfeuchte", pressure: "Luftdruck", windSpeed: "Windgeschwindigkeit", windDirection: "Windrichtung", precipitation: "Niederschlag", visibility: "Sichtweite", cloudCover: "Bewölkung" } }, Ou = { range: "Zeitraum", latest: "Neueste Daten", timeRange: "Zeitraum", manual: "Von Hand", lastHour: "Letzte Stunde", last6Hours: "Letzte 6 Stunden", last24Hours: "Letzte 24 Stunden", lastWeek: "Letzte Woche", start: "Beginn:", end: "Ende:", now: "Auf die aktuelle Zeit setzen", colors: "Farbe je Wert", colorsHint: "Farbe, in der jeder Wert in den Vorhersage-Diagrammen gezeichnet wird." }, Du = { refreshGroup: "Aktualisierung", refreshInterval: "Neu lesen", forecastGroup: "Vorhersage", showForecast: "Vorhersage zeigen", selectedForecastParameters: "Welche Werte", forecastPeriods: "Welche Zeiträume", gridColor: "Farbe der Gitterlinien" }, Iu = { refresh: { m1: "Jede Minute", m5: "Alle 5 Minuten", m10: "Alle 10 Minuten", m30: "Alle 30 Minuten", h1: "Jede Stunde" }, period: { h12: "12 Stunden", h24: "24 Stunden", h36: "36 Stunden", h48: "48 Stunden", h60: "60 Stunden", h72: "72 Stunden" } }, Au = {
  Widget: Mu,
  Settings: Ou,
  Form: Du,
  Options: Iu
}, Pu = { name: "Weather", loading: "Loading weather data…", loadFailed: "Failed to load weather data", noData: "No weather data available", unknownLocation: "Unknown location", from: "From: {{time}}", until: "Until: {{time}}", humidity: "Humidity:", pressure: "Pressure:", wind: "Wind:", precipitation: "Precipitation:", visibility: "Visibility:", cloudCover: "Cloud cover:", forecast: "Weather forecast", forecastOf: "{{name}} forecast", noForecast: "No forecast data available", autoRefresh_one: "Refreshes every minute", autoRefresh_other: "Refreshes every {{count}} minutes", params: { temperature: "Temperature", humidity: "Humidity", pressure: "Pressure", windSpeed: "Wind speed", windDirection: "Wind direction", precipitation: "Precipitation", visibility: "Visibility", cloudCover: "Cloud cover" } }, Ru = { range: "Time range", latest: "Latest data", timeRange: "Time range", manual: "Manual selection", lastHour: "Last hour", last6Hours: "Last 6 hours", last24Hours: "Last 24 hours", lastWeek: "Last week", start: "Start time:", end: "End time:", now: "Set to current time", colors: "Colour per value", colorsHint: "The colour each value is drawn in in the forecast charts." }, Lu = { refreshGroup: "Refresh", refreshInterval: "Read again", forecastGroup: "Forecast", showForecast: "Show forecast", selectedForecastParameters: "Which values", forecastPeriods: "Which periods", gridColor: "Grid line colour" }, Fu = { refresh: { m1: "Every minute", m5: "Every 5 minutes", m10: "Every 10 minutes", m30: "Every 30 minutes", h1: "Every hour" }, period: { h12: "12 hours", h24: "24 hours", h36: "36 hours", h48: "48 hours", h60: "60 hours", h72: "72 hours" } }, Nu = {
  Widget: Pu,
  Settings: Ru,
  Form: Lu,
  Options: Fu
};
var Hu = Object.getOwnPropertyDescriptor, Wu = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Hu(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(n) || n);
  return n;
};
const vo = "weather";
let fn = class {
  namespace = vo;
  resources = {
    de: Au,
    en: Nu
  };
};
fn = Wu([
  pn({
    service: ["Translations"],
    properties: { "i18n.namespace": vo }
  })
], fn);
var Bu = Object.defineProperty, zu = Object.getOwnPropertyDescriptor, Ui = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? zu(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Bu(t, e, n), n;
}, gn = (i, t) => (e, s) => t(e, s, i);
L.eINSTANCE;
const qt = "WeatherWidget";
let Xe = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = qt;
  component = cu;
  settingsComponent = Eu;
  supportedDSTypes = ["OGCSTAData"];
  icon = zo;
  name = "Weather";
  nameKey = "weather:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   *
   * The hand-written component keeps the two halves a form cannot state:
   * arriving at a stretch of time, and a colour per parameter. It has no
   * collapsible sections, so those are simply not in it twice rather than
   * being named here.
   */
  settingsForm = {
    xmi: Cu,
    uri: "/weather-settings.ui.xmi",
    ePackage: () => L.eINSTANCE,
    create: () => new v()
  };
  register() {
    this.events.registerWidget(qt, ku), this.actions.registerWidgetType(qt, ji, "widget");
  }
  unregister() {
    this.events.unregisterWidget(qt), this.actions.unregisterWidgetType(qt);
  }
};
Ui([
  Eo()
], Xe.prototype, "register", 1);
Ui([
  Co()
], Xe.prototype, "unregister", 1);
Xe = Ui([
  pn({
    service: [Bo],
    properties: { "widget.type": qt }
  }),
  gn(0, Yi(wo)),
  gn(1, Yi(To))
], Xe);
export {
  fn as WeatherTranslations,
  cu as WeatherWidget,
  Xe as WeatherWidgetProvider,
  Eu as WeatherWidgetSettings
};
