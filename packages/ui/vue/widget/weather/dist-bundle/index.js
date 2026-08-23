(function(){var i="ui.vue.widget.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".forecast-chart[data-v-73b640b9]{padding:16px}.forecast-chart h4[data-v-73b640b9]{margin:0 0 16px;color:var(--v36d633cf);font-size:1.1em;text-align:center}.chart-container[data-v-73b640b9]{position:relative;height:200px;padding:0}.no-data[data-v-73b640b9]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--v36d633cf);font-style:italic}.no-data p[data-v-73b640b9]{margin:0}@media(max-width:480px){.chart-container[data-v-73b640b9]{height:150px;padding:5px}.forecast-chart h4[data-v-73b640b9]{font-size:1em}}.weather-widget[data-v-27ce0413]{padding:16px;border-radius:8px;font-family:Arial,sans-serif;height:100%;display:flex;flex-direction:column}.weather-loading[data-v-27ce0413]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;color:#6c757d}.spinner[data-v-27ce0413]{width:24px;height:24px;border:2px solid #e9ecef;border-top:2px solid #007bff;border-radius:50%;animation:spin-27ce0413 1s linear infinite;margin-bottom:8px}@keyframes spin-27ce0413{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.weather-error[data-v-27ce0413]{color:#dc3545;text-align:center;flex:1;display:flex;align-items:center;justify-content:center}.weather-content[data-v-27ce0413]{flex:1;display:flex;flex-direction:column}.weather-header[data-v-27ce0413]{margin-bottom:16px;border-bottom:1px solid #dee2e6;padding-bottom:12px}.weather-header h3[data-v-27ce0413]{margin:0 0 4px;color:var(--v71b427be);font-size:1.2em}.location-desc[data-v-27ce0413]{margin:0;color:var(--v71b427be);font-size:.9em;opacity:.7}.weather-main[data-v-27ce0413]{flex:1}.weather-icon-section[data-v-27ce0413]{text-align:center;margin-bottom:16px}.weather-icon[data-v-27ce0413]{font-size:5em;line-height:1}.temperature[data-v-27ce0413]{text-align:center;margin-bottom:24px}.temp-value[data-v-27ce0413]{font-size:2.5em;font-weight:200;color:var(--v71b427be)}.weather-details[data-v-27ce0413]{display:grid;gap:12px}.weather-item[data-v-27ce0413]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#fff3;border-radius:6px}.weather-item .label[data-v-27ce0413]{color:var(--v71b427be);opacity:.7;font-weight:500}.weather-item .value[data-v-27ce0413]{color:var(--v71b427be);font-weight:600}.weather-empty[data-v-27ce0413]{text-align:center;color:#6c757d;flex:1;display:flex;align-items:center;justify-content:center}.time-range[data-v-27ce0413]{margin-top:8px;color:var(--v71b427be);opacity:.7;font-style:italic}.timestamp[data-v-27ce0413]{margin-top:8px;text-align:center}.timestamp small[data-v-27ce0413]{color:var(--v71b427be);opacity:.7;font-size:.8em}.refresh-info[data-v-27ce0413]{margin-top:16px;text-align:center;color:var(--v71b427be);opacity:.7;border-top:1px solid #dee2e6;padding-top:12px}.forecast-section[data-v-27ce0413]{margin-top:20px;border-top:2px solid #dee2e6;padding-top:16px}.forecast-title[data-v-27ce0413]{margin:0 0 20px;color:var(--v71b427be);font-size:1.3em;text-align:center}.forecast-charts[data-v-27ce0413]{display:flex;flex-direction:column;gap:20px}@media(max-width:480px){.weather-widget[data-v-27ce0413]{padding:12px}.temp-value[data-v-27ce0413]{font-size:2em}.weather-item[data-v-27ce0413]{flex-direction:column;align-items:flex-start;gap:4px}.forecast-charts[data-v-27ce0413]{gap:15px}.forecast-title[data-v-27ce0413]{font-size:1.1em}}.weather-settings[data-v-b9894535]{padding:16px;max-width:600px}.settings-section[data-v-b9894535]{margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e9ecef}.settings-section[data-v-b9894535]:last-child{border-bottom:none}.settings-section h4[data-v-b9894535]{margin:0 0 16px;color:#495057;font-size:1.1em}.input-mode-selector[data-v-b9894535],.time-mode-selector[data-v-b9894535]{display:flex;gap:16px;margin-bottom:16px}.input-mode-selector label[data-v-b9894535],.time-mode-selector label[data-v-b9894535]{display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:500}.form-group[data-v-b9894535]{margin-bottom:16px}.form-group label[data-v-b9894535]{display:block;margin-bottom:4px;font-weight:600;color:#495057}.form-control[data-v-b9894535]{width:100%;padding:8px 12px;border:1px solid #ced4da;border-radius:4px;font-size:14px}.form-control[data-v-b9894535]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px #007bff40}.form-text[data-v-b9894535]{color:#6c757d;font-size:.875em;margin-top:4px;display:block}.time-range-buttons[data-v-b9894535]{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}.time-inputs[data-v-b9894535]{display:grid;gap:16px}.btn[data-v-b9894535]{padding:6px 12px;border:1px solid #ced4da;border-radius:4px;background:#f8f9fa;cursor:pointer;font-size:14px}.btn[data-v-b9894535]:hover{background:#e9ecef}.btn-sm[data-v-b9894535]{padding:4px 8px;font-size:12px}.btn-secondary[data-v-b9894535]{background:#6c757d;color:#fff;border-color:#6c757d}.btn-secondary[data-v-b9894535]:hover{background:#5a6268}.settings-validation .error[data-v-b9894535]{color:#dc3545;background:#f8d7da;border:1px solid #f5c6cb;border-radius:4px;padding:12px;margin:0}.forecast-configuration[data-v-b9894535]{margin-top:16px;padding:16px;background:#f8f9fa;border-radius:6px;border:1px solid #e9ecef}.checkbox-grid[data-v-b9894535]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:8px 0}.checkbox-item[data-v-b9894535]{display:flex;align-items:center;gap:8px;font-weight:400!important;margin-bottom:0;cursor:pointer}.checkbox-item input[type=checkbox][data-v-b9894535]{width:auto;padding:0}.color-settings[data-v-b9894535]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0}.color-setting-item[data-v-b9894535]{display:flex;align-items:center;gap:8px}.color-setting-item label[data-v-b9894535]{font-weight:500;color:#495057;min-width:80px;margin-bottom:0}.color-picker[data-v-b9894535]{width:40px;height:30px;border:1px solid #ced4da;border-radius:4px;cursor:pointer;padding:0}.color-picker[data-v-b9894535]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px #007bff40}.color-preview[data-v-b9894535]{width:20px;height:20px;border-radius:50%;border:2px solid #ffffff;box-shadow:0 0 0 1px #ced4da}@media(max-width:480px){.input-mode-selector[data-v-b9894535],.time-mode-selector[data-v-b9894535]{flex-direction:column;gap:8px}.time-range-buttons[data-v-b9894535]{flex-direction:column}.btn[data-v-b9894535]{width:100%}}\n";})();
import { EVENT_ACTIONS_REGISTRY as co, EVENT_REGISTRY_ID as ho, EVENT_ACTIONS_REGISTRY_ID as uo } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as fo, deactivate as go, component as po, inject as Ni } from "@eclipse-daanse/tsm";
import { ref as at, computed as et, defineComponent as _e, shallowRef as cn, h as gi, onMounted as Ye, onUnmounted as hn, watch as Yt, toRaw as pi, nextTick as dn, version as mo, isProxy as un, useCssVars as fn, toRefs as gn, createElementBlock as W, openBlock as z, createElementVNode as _, toDisplayString as Y, unref as jt, createBlock as pn, mergeModels as bo, useModel as mn, inject as Vi, withModifiers as _o, createCommentVNode as K, createTextVNode as Lt, Fragment as Fe, renderList as Re, withDirectives as dt, vModelRadio as ei, vModelText as xe, vModelSelect as yo, vModelCheckbox as ii, normalizeStyle as $i } from "vue";
import { useRoute as xo } from "vue-router";
import { useDatasourceRepository as vo } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as ko, WidgetActionInterface as So, Payload as ji } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Mo } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: wo } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Co = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='currentColor'%3e%3cpath%20d='M12.5%206.5C10.8%206.5%209.5%207.8%209.5%209.5c0%20.3.1.6.2.9C7.6%2011.2%206%2012.9%206%2015c0%202.2%201.8%204%204%204h8c1.7%200%203-1.3%203-3%200-1.4-1-2.6-2.4-2.9.1-.4.4-.6.4-1.1%200-1.9-1.6-3.5-3.5-3.5-.8%200-1.5.3-2.1.7-.4-1.8-2-3.2-3.9-3.2v.5zm0%201c1.4%200%202.5%201.1%202.5%202.5%200%20.3-.1.6-.2.9l-.2.4.4.2c.3.2.6.3%201%20.3%201.4%200%202.5%201.1%202.5%202.5%200%20.3-.1.6-.2.9l-.1.3.3.1c1%20.3%201.8%201.2%201.8%202.3%200%201.4-1.1%202.5-2.5%202.5H10c-1.9%200-3.5-1.6-3.5-3.5s1.6-3.5%203.5-3.5c.3%200%20.6%200%20.9.1l.4.1.1-.4c.1-.3.2-.6.2-.9%200-1.4%201.1-2.5%202.5-2.5z'/%3e%3ccircle%20cx='7'%20cy='8'%20r='1'/%3e%3ccircle%20cx='17'%20cy='7'%20r='1'/%3e%3ccircle%20cx='14'%20cy='4'%20r='1'/%3e%3c/svg%3e";
function To(i, t) {
  const e = at(null), s = at(!1), n = at(null), o = et(() => {
    if (!e.value?.datastreams) return [];
    let h = e.value.datastreams;
    return i.useTimeRange && (i.startTime || i.endTime) && (h = h.filter((d) => {
      if (!d.observations || d.observations.length === 0) return !1;
      const u = new Date(d.observations[0].phenomenonTime);
      if (i.startTime) {
        const f = new Date(i.startTime);
        if (u < f) return !1;
      }
      if (i.endTime) {
        const f = new Date(i.endTime);
        if (u > f) return !1;
      }
      return !0;
    })), h;
  }), r = et(() => {
    const h = o.value;
    if (!h || h.length === 0) return null;
    const d = {};
    return h.forEach((u) => {
      if (u.observations && u.observations.length > 0) {
        const f = u.observations[0], p = u.name?.toLowerCase(), g = u.description?.toLowerCase();
        p?.includes("temperature") || p?.includes("temp") || g?.includes("temperatur") || p?.includes("lufttemperatur") ? d.temperature = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "°C",
          timestamp: f.phenomenonTime
        } : p?.includes("humidity") || p?.includes("feuchte") || g?.includes("luftfeuchte") ? d.humidity = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "%",
          timestamp: f.phenomenonTime
        } : p?.includes("pressure") || p?.includes("luftdruck") || g?.includes("pressure") ? d.pressure = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "hPa",
          timestamp: f.phenomenonTime
        } : p?.includes("wind") && p?.includes("speed") || p?.includes("windgeschwindigkeit") ? d.windSpeed = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "m/s",
          timestamp: f.phenomenonTime
        } : p?.includes("wind") && p?.includes("direction") || p?.includes("windrichtung") ? d.windDirection = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "°",
          timestamp: f.phenomenonTime
        } : p?.includes("precipitation") || p?.includes("niederschlag") || p?.includes("rain") || p?.includes("regen") ? d.precipitation = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "mm",
          timestamp: f.phenomenonTime
        } : p?.includes("visibility") || p?.includes("sicht") ? d.visibility = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "m",
          timestamp: f.phenomenonTime
        } : (p?.includes("cloud") || p?.includes("wolken") || p?.includes("bedeckung")) && (d.cloudCover = {
          value: f.result,
          unit: u.unitOfMeasurement?.symbol || "%",
          timestamp: f.phenomenonTime
        });
      }
    }), d;
  }), a = et(() => {
    if (!e.value?.things || e.value.things.length === 0) return null;
    const h = e.value.things[0], d = h.Locations?.[0];
    return {
      name: h.name || "Unknown Location",
      description: h.description,
      coordinates: d?.location ? {
        latitude: d.location.coordinates?.[1],
        longitude: d.location.coordinates?.[0]
      } : void 0
    };
  });
  return {
    weatherData: e,
    loading: s,
    error: n,
    currentWeather: r,
    locationInfo: a,
    filteredDatastreams: o,
    findThingByLocation: async (h) => (console.log(`Searching for weather station near: ${h}`), null),
    formatTimeRange: () => {
      if (!i.useTimeRange) return "";
      const h = i.startTime ? new Date(i.startTime).toLocaleString() : "", d = i.endTime ? new Date(i.endTime).toLocaleString() : "";
      return h && d ? `${h} - ${d}` : h ? `From: ${h}` : d ? `Until: ${d}` : "";
    }
  };
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ye(i) {
  return i + 0.5 | 0;
}
const Mt = (i, t, e) => Math.max(Math.min(i, e), t);
function ne(i) {
  return Mt(ye(i * 2.55), 0, 255);
}
function Tt(i) {
  return Mt(ye(i * 255), 0, 255);
}
function kt(i) {
  return Mt(ye(i / 2.55) / 100, 0, 1);
}
function Ui(i) {
  return Mt(ye(i * 100), 0, 100);
}
const rt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, mi = [..."0123456789ABCDEF"], Do = (i) => mi[i & 15], Po = (i) => mi[(i & 240) >> 4] + mi[i & 15], ve = (i) => (i & 240) >> 4 === (i & 15), Oo = (i) => ve(i.r) && ve(i.g) && ve(i.b) && ve(i.a);
function Io(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & rt[i[1]] * 17,
    g: 255 & rt[i[2]] * 17,
    b: 255 & rt[i[3]] * 17,
    a: t === 5 ? rt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: rt[i[1]] << 4 | rt[i[2]],
    g: rt[i[3]] << 4 | rt[i[4]],
    b: rt[i[5]] << 4 | rt[i[6]],
    a: t === 9 ? rt[i[7]] << 4 | rt[i[8]] : 255
  })), e;
}
const Lo = (i, t) => i < 255 ? t(i) : "";
function Ao(i) {
  var t = Oo(i) ? Do : Po;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Lo(i.a, t) : void 0;
}
const Fo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function bn(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function Ro(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function Eo(i, t, e) {
  const s = bn(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function zo(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Mi(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = zo(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Ci(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Tt);
}
function Ti(i, t, e) {
  return Ci(bn, i, t, e);
}
function Wo(i, t, e) {
  return Ci(Eo, i, t, e);
}
function Bo(i, t, e) {
  return Ci(Ro, i, t, e);
}
function _n(i) {
  return (i % 360 + 360) % 360;
}
function Ho(i) {
  const t = Fo.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? ne(+t[5]) : Tt(+t[5]));
  const n = _n(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = Wo(n, o, r) : t[1] === "hsv" ? s = Bo(n, o, r) : s = Ti(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function No(i, t) {
  var e = Mi(i);
  e[0] = _n(e[0] + t), e = Ti(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Vo(i) {
  if (!i)
    return;
  const t = Mi(i), e = t[0], s = Ui(t[1]), n = Ui(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${kt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const Yi = {
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
}, Xi = {
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
function $o() {
  const i = {}, t = Object.keys(Xi), e = Object.keys(Yi);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, Yi[o]);
    o = parseInt(Xi[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let we;
function jo(i) {
  we || (we = $o(), we.transparent = [0, 0, 0, 0]);
  const t = we[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Uo = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Yo(i) {
  const t = Uo.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? ne(r) : Mt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? ne(s) : Mt(s, 0, 255)), n = 255 & (t[4] ? ne(n) : Mt(n, 0, 255)), o = 255 & (t[6] ? ne(o) : Mt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Xo(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${kt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const si = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Vt = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Ko(i, t, e) {
  const s = Vt(kt(i.r)), n = Vt(kt(i.g)), o = Vt(kt(i.b));
  return {
    r: Tt(si(s + e * (Vt(kt(t.r)) - s))),
    g: Tt(si(n + e * (Vt(kt(t.g)) - n))),
    b: Tt(si(o + e * (Vt(kt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ke(i, t, e) {
  if (i) {
    let s = Mi(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ti(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function yn(i, t) {
  return i && Object.assign(t || {}, i);
}
function Ki(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Tt(i[3]))) : (t = yn(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Tt(t.a)), t;
}
function qo(i) {
  return i.charAt(0) === "r" ? Yo(i) : Ho(i);
}
class ue {
  constructor(t) {
    if (t instanceof ue)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Ki(t) : e === "string" && (s = Io(t) || jo(t) || qo(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = yn(this._rgb);
    return t && (t.a = kt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Ki(t);
  }
  rgbString() {
    return this._valid ? Xo(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ao(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Vo(this._rgb) : void 0;
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
    return t && (this._rgb = Ko(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ue(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Tt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ye(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return No(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function xt() {
}
const Go = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function N(i) {
  return i == null;
}
function X(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function F(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function tt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function gt(i, t) {
  return tt(i) ? i : t;
}
function A(i, t) {
  return typeof i > "u" ? t : i;
}
const Zo = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function V(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function H(i, t, e, s) {
  let n, o, r;
  if (X(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (F(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function We(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Be(i) {
  if (X(i))
    return i.map(Be);
  if (F(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Be(i[e[n]]);
    return t;
  }
  return i;
}
function xn(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function Qo(i, t, e, s) {
  if (!xn(i))
    return;
  const n = t[i], o = e[i];
  F(n) && F(o) ? fe(n, o, s) : t[i] = Be(o);
}
function fe(i, t, e) {
  const s = X(t) ? t : [
    t
  ], n = s.length;
  if (!F(i))
    return i;
  e = e || {};
  const o = e.merger || Qo;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !F(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function ae(i, t) {
  return fe(i, t, {
    merger: Jo
  });
}
function Jo(i, t, e) {
  if (!xn(i))
    return;
  const s = t[i], n = e[i];
  F(s) && F(n) ? ae(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Be(n));
}
const qi = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function tr(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function er(i) {
  const t = tr(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function He(i, t) {
  return (qi[t] || (qi[t] = er(t)))(i);
}
function Di(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Ne = (i) => typeof i < "u", Dt = (i) => typeof i == "function", Gi = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function ir(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const q = Math.PI, ft = 2 * q, sr = ft + q, Ve = Number.POSITIVE_INFINITY, nr = q / 180, ut = q / 2, Pt = q / 4, Zi = q * 2 / 3, vn = Math.log10, qt = Math.sign;
function le(i, t, e) {
  return Math.abs(i - t) < e;
}
function Qi(i) {
  const t = Math.round(i);
  i = le(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(vn(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function or(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function rr(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function ge(i) {
  return !rr(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function ar(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function lr(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Rt(i) {
  return i * (q / 180);
}
function cr(i) {
  return i * (180 / q);
}
function Ji(i) {
  if (!tt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function hr(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * q && (o += ft), {
    angle: o,
    distance: n
  };
}
function bi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function dr(i, t) {
  return (i - t + sr) % ft - q;
}
function bt(i) {
  return (i % ft + ft) % ft;
}
function wn(i, t, e, s) {
  const n = bt(i), o = bt(t), r = bt(e), a = bt(o - n), l = bt(r - n), c = bt(n - o), h = bt(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function lt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ur(i) {
  return lt(i, -32768, 32767);
}
function Xt(i, t, e, s = 1e-6) {
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
const Et = (i, t, e, s) => Pi(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), fr = (i, t, e) => Pi(i, e, (s) => i[s][t] >= e);
function gr(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const kn = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function pr(i, t) {
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
  }), kn.forEach((e) => {
    const s = "_onData" + Di(e), n = i[e];
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
function ts(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (kn.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function mr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Sn = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function Mn(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Sn.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function br(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Oi = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", Q = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, _r = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function yr(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: u, minDefined: f, maxDefined: p } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        Et(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : Et(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((m) => !N(m[a.axis]));
        n -= Math.max(0, g);
      }
      n = lt(n, 0, s - 1);
    }
    if (p) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        Et(l, r.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Et(t, h, r.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const m = l.slice(g - 1).findIndex((b) => !N(b[a.axis]));
        g += Math.max(0, m);
      }
      o = lt(g, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function xr(i) {
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
const Se = (i) => i === 0 || i === 1, es = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * ft / e)), is = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * ft / e) + 1, ce = {
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
  easeInSine: (i) => -Math.cos(i * ut) + 1,
  easeOutSine: (i) => Math.sin(i * ut),
  easeInOutSine: (i) => -0.5 * (Math.cos(q * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => Se(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => Se(i) ? i : es(i, 0.075, 0.3),
  easeOutElastic: (i) => Se(i) ? i : is(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return Se(i) ? i : i < 0.5 ? 0.5 * es(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * is(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - ce.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? ce.easeInBounce(i * 2) * 0.5 : ce.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Ii(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ss(i) {
  return Ii(i) ? i : new ue(i);
}
function ni(i) {
  return Ii(i) ? i : new ue(i).saturate(0.5).darken(0.1).hexString();
}
const vr = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], wr = [
  "color",
  "borderColor",
  "backgroundColor"
];
function kr(i) {
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
      properties: wr
    },
    numbers: {
      type: "number",
      properties: vr
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
function Sr(i) {
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
const ns = /* @__PURE__ */ new Map();
function Mr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = ns.get(e);
  return s || (s = new Intl.NumberFormat(i, t), ns.set(e, s)), s;
}
function Cn(i, t, e) {
  return Mr(t, e).format(i);
}
const Cr = {
  values(i) {
    return X(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Tr(i, e);
    }
    const r = vn(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Cn(i, s, l);
  }
};
function Tr(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Tn = {
  formatters: Cr
};
function Dr(i) {
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
      callback: Tn.formatters.values,
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
const Wt = /* @__PURE__ */ Object.create(null), _i = /* @__PURE__ */ Object.create(null);
function he(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function oi(i, t, e) {
  return typeof t == "string" ? fe(he(i, t), e) : fe(he(i, ""), t);
}
class Pr {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => ni(n.backgroundColor), this.hoverBorderColor = (s, n) => ni(n.borderColor), this.hoverColor = (s, n) => ni(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return oi(this, t, e);
  }
  get(t) {
    return he(this, t);
  }
  describe(t, e) {
    return oi(_i, t, e);
  }
  override(t, e) {
    return oi(Wt, t, e);
  }
  route(t, e, s, n) {
    const o = he(this, t), r = he(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return F(l) ? Object.assign({}, c, l) : A(l, c);
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
var j = /* @__PURE__ */ new Pr({
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
  kr,
  Sr,
  Dr
]);
function Or(i) {
  return !i || N(i.size) || N(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function os(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Ot(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function rs(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function yi(i, t, e, s) {
  Dn(i, t, e, s, null);
}
function Dn(i, t, e, s, n) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * nr;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, g, 0, 0, ft) : i.arc(e, s, g, 0, ft), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : g, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * g), m += Zi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g), m += Zi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g), i.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + Pt) * l, d = Math.cos(m + Pt) * (n ? n / 2 - c : l), a = Math.sin(m + Pt) * l, u = Math.sin(m + Pt) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, m - q, m - ut), i.arc(e + u, s - r, c, m - ut, m), i.arc(e + d, s + a, c, m, m + ut), i.arc(e - u, s + r, c, m + ut, m + q), i.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        m += Pt;
      /* falls through */
      case "rectRot":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + u, s - r), i.lineTo(e + d, s + a), i.lineTo(e - u, s + r), i.closePath();
        break;
      case "crossRot":
        m += Pt;
      /* falls through */
      case "cross":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "star":
        d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r), m += Pt, d = Math.cos(m) * (n ? n / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(m) * g, a = Math.sin(m) * g, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : g), s + Math.sin(m) * g);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function pe(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Xe(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Ke(i) {
  i.restore();
}
function Ir(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Lr(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Ar(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), N(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Fr(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function Rr(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function me(i, t, e, s, n, o = {}) {
  const r = X(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Ar(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Rr(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), N(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Fr(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function xi(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * q, q, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, q, ut, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ut, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -ut, !0), i.lineTo(e + r.topLeft, s);
}
const Er = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, zr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Wr(i, t) {
  const e = ("" + i).match(Er);
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
const Br = (i) => +i || 0;
function Pn(i, t) {
  const e = {}, s = F(t), n = s ? Object.keys(t) : t, o = F(i) ? s ? (r) => A(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = Br(o(r));
  return e;
}
function Hr(i) {
  return Pn(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function de(i) {
  return Pn(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ht(i) {
  const t = Hr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function J(i, t) {
  i = i || {}, t = t || j.font;
  let e = A(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = A(i.style, t.style);
  s && !("" + s).match(zr) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: A(i.family, t.family),
    lineHeight: Wr(A(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: A(i.weight, t.weight),
    string: ""
  };
  return n.string = Or(n), n;
}
function Me(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function Nr(i, t, e) {
  const { min: s, max: n } = i, o = Zo(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function Bt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Li(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = An("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Li([
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
      return In(a, l, () => qr(l, t, i, a));
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
      return ls(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return ls(a);
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
function Gt(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: On(i, s),
    setContext: (o) => Gt(i, o, e, s),
    override: (o) => Gt(i.override(o), t, e, s)
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
      return In(o, r, () => $r(o, r, a));
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
function On(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: Dt(e) ? e : () => e,
    isIndexable: Dt(s) ? s : () => s
  };
}
const Vr = (i, t) => i ? i + Di(t) : t, Ai = (i, t) => F(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function In(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function $r(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return Dt(a) && r.isScriptable(t) && (a = jr(t, a, i, e)), X(a) && a.length && (a = Ur(t, a, i, r.isIndexable)), Ai(t, a) && (a = Gt(a, n, o && o[t], r)), a;
}
function jr(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Ai(i, l) && (l = Fi(n._scopes, n, i, l)), l;
}
function Ur(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (F(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Fi(c, n, i, h);
      t.push(Gt(d, o, r && r[i], a));
    }
  }
  return t;
}
function Ln(i, t, e) {
  return Dt(i) ? i(t, e) : i;
}
const Yr = (i, t) => i === !0 ? t : typeof i == "string" ? He(t, i) : void 0;
function Xr(i, t, e, s, n) {
  for (const o of t) {
    const r = Yr(e, o);
    if (r) {
      i.add(r);
      const a = Ln(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Fi(i, t, e, s) {
  const n = t._rootScopes, o = Ln(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = as(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = as(a, r, o, l, s), l === null) ? !1 : Li(Array.from(a), [
    ""
  ], n, o, () => Kr(t, e, s));
}
function as(i, t, e, s, n) {
  for (; e; )
    e = Xr(i, t, e, s, n);
  return e;
}
function Kr(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return X(n) && F(e) ? e : n || {};
}
function qr(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = An(Vr(o, i), e), typeof n < "u")
      return Ai(i, n) ? Fi(e, s, i, n) : n;
}
function An(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function ls(i) {
  let t = i._keys;
  return t || (t = i._keys = Gr(i._scopes)), t;
}
function Gr(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
const Zr = Number.EPSILON || 1e-14, Zt = (i, t) => t < i.length && !i[t].skip && i[t], Fn = (i) => i === "x" ? "y" : "x";
function Qr(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = bi(o, n), l = bi(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, u = s * h;
  return {
    previous: {
      x: o.x - d * (r.x - n.x),
      y: o.y - d * (r.y - n.y)
    },
    next: {
      x: o.x + u * (r.x - n.x),
      y: o.y + u * (r.y - n.y)
    }
  };
}
function Jr(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Zt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Zt(i, h + 1), !(!l || !c)) {
      if (le(t[h], 0, Zr)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function ta(i, t, e = "x") {
  const s = Fn(e), n = i.length;
  let o, r, a, l = Zt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Zt(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function ea(i, t = "x") {
  const e = Fn(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Zt(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Zt(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? qt(n[r - 1]) !== qt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  Jr(i, n, o), ta(i, o, t);
}
function Ce(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function ia(i, t) {
  let e, s, n, o, r, a = pe(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && pe(i[e + 1], t), o && (n = i[e], r && (n.cp1x = Ce(n.cp1x, t.left, t.right), n.cp1y = Ce(n.cp1y, t.top, t.bottom)), a && (n.cp2x = Ce(n.cp2x, t.left, t.right), n.cp2y = Ce(n.cp2y, t.top, t.bottom)));
}
function sa(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    ea(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = Qr(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && ia(i, e);
}
function Ri() {
  return typeof window < "u" && typeof document < "u";
}
function Ei(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function $e(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const qe = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function na(i, t) {
  return qe(i).getPropertyValue(t);
}
const oa = [
  "top",
  "right",
  "bottom",
  "left"
];
function zt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = oa[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const ra = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function aa(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (ra(n, o, i.target))
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
function At(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = qe(e), o = n.boxSizing === "border-box", r = zt(n, "padding"), a = zt(n, "border", "width"), { x: l, y: c, box: h } = aa(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / p * e.height / s)
  };
}
function la(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && Ei(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = qe(o), l = zt(a, "border", "width"), c = zt(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = $e(a.maxWidth, o, "clientWidth"), n = $e(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ve,
    maxHeight: n || Ve
  };
}
const Ct = (i) => Math.round(i * 10) / 10;
function ca(i, t, e, s) {
  const n = qe(i), o = zt(n, "margin"), r = $e(n.maxWidth, i, "clientWidth") || Ve, a = $e(n.maxHeight, i, "clientHeight") || Ve, l = la(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const u = zt(n, "border", "width"), f = zt(n, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Ct(Math.min(c, r, l.maxWidth)), h = Ct(Math.min(h, a, l.maxHeight)), c && !h && (h = Ct(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Ct(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function cs(i, t, e) {
  const s = t || 1, n = Ct(i.height * s), o = Ct(i.width * s);
  i.height = Ct(i.height), i.width = Ct(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const ha = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Ri() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function hs(i, t) {
  const e = na(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ft(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function da(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function ua(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Ft(i, n, e), a = Ft(n, o, e), l = Ft(o, t, e), c = Ft(r, a, e), h = Ft(a, l, e);
  return Ft(c, h, e);
}
const fa = function(i, t) {
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
}, ga = function() {
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
function Kt(i, t, e) {
  return i ? fa(t, e) : ga();
}
function Rn(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function En(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function zn(i) {
  return i === "angle" ? {
    between: wn,
    compare: dr,
    normalize: bt
  } : {
    between: Xt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function ds({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function pa(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = zn(s), l = t.length;
  let { start: c, end: h, loop: d } = i, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: i.style
  };
}
function Wn(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = zn(s), { start: h, end: d, loop: u, style: f } = pa(i, t, e), p = [];
  let g = !1, m = null, b, x, k;
  const S = () => l(n, k, b) && a(n, k) !== 0, y = () => a(o, b) === 0 || l(o, k, b), M = () => g || S(), T = () => !g || y();
  for (let v = h, O = h; v <= d; ++v)
    x = t[v % r], !x.skip && (b = c(x[s]), b !== k && (g = l(b, n, o), m === null && M() && (m = a(b, n) === 0 ? v : O), m !== null && T() && (p.push(ds({
      start: m,
      end: v,
      loop: u,
      count: r,
      style: f
    })), m = null), O = v, k = b));
  return m !== null && p.push(ds({
    start: m,
    end: d,
    loop: u,
    count: r,
    style: f
  })), p;
}
function Bn(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Wn(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function ma(i, t, e, s) {
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
function ba(i, t, e, s) {
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
function _a(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = ma(e, n, o, s);
  if (s === !0)
    return us(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return us(i, ba(e, r, l, c), e, t);
}
function us(i, t, e, s) {
  return !s || !s.setContext || !e ? t : ya(i, t, e, s);
}
function ya(i, t, e, s) {
  const n = i._chart.getContext(), o = fs(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(p, g, m, b) {
    const x = a ? -1 : 1;
    if (p !== g) {
      for (p += l; e[p % l].skip; )
        p -= x;
      for (; e[g % l].skip; )
        g += x;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: b
      }), h = b, d = g % l);
    }
  }
  for (const p of t) {
    d = a ? d : p.start;
    let g = e[d % l], m;
    for (u = d + 1; u <= p.end; u++) {
      const b = e[u % l];
      m = fs(s.setContext(Bt(n, {
        type: "segment",
        p0: g,
        p1: b,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), xa(m, h) && f(d, u - 1, p.loop, h), g = b, h = m;
    }
    d < u - 1 && f(d, u - 1, p.loop, h);
  }
  return c;
}
function fs(i) {
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
function xa(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Ii(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function Te(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function va(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Te(e, t, "left"),
    right: Te(e, t, "right"),
    top: Te(s, t, "top"),
    bottom: Te(s, t, "bottom")
  } : t;
}
function Hn(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = va(t, i.chartArea);
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
class wa {
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
    this._request || (this._running = !0, this._request = Sn.call(window, () => {
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
var vt = /* @__PURE__ */ new wa();
const gs = "transparent", ka = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = ss(i || gs), n = s.valid && ss(t || gs);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Sa {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Me([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = Me([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || ka[t.type || typeof r], this._easing = ce[t.easing] || ce.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Me([
        t.to,
        e,
        n,
        t.from
      ]), this._from = Me([
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
class Nn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!F(t))
      return;
    const e = Object.keys(j.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!F(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (X(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = Ca(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Ma(t.options.$animations, s).then(() => {
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
      let d = o[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new Sa(u, t, c, h), n.push(d);
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
      return vt.add(this._chart, s), !0;
  }
}
function Ma(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Ca(i, t) {
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
function ps(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function Ta(i, t, e) {
  if (e === !1)
    return !1;
  const s = ps(i, e), n = ps(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Da(i) {
  let t, e, s, n;
  return F(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Vn(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function ms(i, t, e, s = {}) {
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
    c = i.values[l], tt(c) && (o || t === 0 || qt(t) === qt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function Pa(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function ri(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Oa(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Ia(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function La(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function bs(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function _s(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = Oa(o, r, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, b = p._stacks || (p._stacks = {});
    u = b[c] = La(n, h, g), u[a] = m, u._top = bs(u, r, !0, s.type), u._bottom = bs(u, r, !1, s.type);
    const x = u._visualValues || (u._visualValues = {});
    x[a] = m;
  }
}
function ai(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Aa(i, t) {
  return Bt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Fa(i, t, e) {
  return Bt(i, {
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
function Jt(i, t) {
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
const li = (i) => i === "reset" || i === "none", ys = (i, t) => t ? i : Object.assign({}, i), Ra = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Vn(e, !0),
  values: null
};
class $n {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ri(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Jt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, p) => d === "x" ? u : d === "r" ? p : f, o = e.xAxisID = A(s.xAxisID, ai(t, "x")), r = e.yAxisID = A(s.yAxisID, ai(t, "y")), a = e.rAxisID = A(s.rAxisID, ai(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
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
    this._data && ts(this._data, this), t._stacked && Jt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (F(e)) {
      const n = this._cachedMeta;
      this._data = Pa(e, n);
    } else if (s !== e) {
      if (s) {
        ts(s, this);
        const n = this._cachedMeta;
        Jt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && pr(e, this), this._syncList = [], this._data = e;
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
    e._stacked = ri(e.vScale, e), e.stack !== s.stack && (n = !0, Jt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (_s(this, e._parsed), e._stacked = ri(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, u = n;
    else {
      X(n[t]) ? u = this.parseArrayData(s, n, t, e) : F(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      s._sorted = l;
    }
    r && _s(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let u, f, p;
    for (u = 0, f = n; u < f; ++u)
      p = u + s, d[u] = {
        [a]: h || o.parse(c[p], p),
        [l]: r.parse(e[p], p)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, u, f;
    for (h = 0, d = n; h < d; ++h)
      u = h + s, f = e[u], c[h] = {
        x: o.parse(He(f, a), u),
        y: r.parse(He(f, l), u)
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
      keys: Vn(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return ms(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = ms(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Ra(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = Ia(a);
    let u, f;
    function p() {
      f = n[u];
      const g = f[a.axis];
      return !tt(f[t.axis]) || h > g || d < g;
    }
    for (u = 0; u < r && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!p()) {
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
      r = e[n][t.axis], tt(r) && s.push(r);
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
    this.update(t || "default"), e._clip = Da(A(this.options.clip, Ta(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
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
      o = r.$context || (r.$context = Fa(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Aa(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Ne(s);
    if (a)
      return ys(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(j.elements[t]), p = () => this.getContext(s, n, e), g = c.resolveNamedOptions(u, f, p, d);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(ys(g, l))), g;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, s, e));
    }
    const c = new Nn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || li(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    li(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !li(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Jt(s, n);
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
class Ea extends $n {
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
    let { start: a, count: l } = yr(e, n, r);
    this._drawStart = a, this._drawCount = l, xr(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = ge(p) ? p : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", x = e + s, k = t.length;
    let S = e > 0 && this.getParsed(e - 1);
    for (let y = 0; y < k; ++y) {
      const M = t[y], T = b ? M : {};
      if (y < e || y >= x) {
        T.skip = !0;
        continue;
      }
      const v = this.getParsed(y), O = N(v[f]), R = T[u] = r.getPixelForValue(v[u], y), I = T[f] = o || O ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, v, l) : v[f], y);
      T.skip = isNaN(R) || isNaN(I) || O, T.stop = y > 0 && Math.abs(v[u] - S[u]) > m, g && (T.parsed = v, T.raw = c.data[y]), d && (T.options = h || this.resolveDataElementOptions(y, M.active ? "active" : n)), b || this.updateElement(M, y, T, n), S = v;
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
function It() {
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
    return It();
  }
  parse() {
    return It();
  }
  format() {
    return It();
  }
  add() {
    return It();
  }
  diff() {
    return It();
  }
  startOf() {
    return It();
  }
  endOf() {
    return It();
  }
}
var za = {
  _date: zi
};
function Wa(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? fr : Et;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const u = c(o, t, e - d), f = c(o, t, e + d);
          return {
            lo: u.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: u } = i, f = u.slice(0, h.lo + 1).reverse().findIndex((g) => !N(g[d.axis]));
        h.lo -= Math.max(0, f);
        const p = u.slice(h.hi).findIndex((g) => !N(g[d.axis]));
        h.hi += Math.max(0, p);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ge(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = Wa(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const p = h[f];
      p.skip || s(p, c, f);
    }
  }
}
function Ba(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ci(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Ge(i, e, t, function(a, l, c) {
    !n && !pe(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Ha(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = hr(r, {
      x: t.x,
      y: t.y
    });
    wn(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Ge(i, e, t, o), n;
}
function Na(i, t, e, s, n, o) {
  let r = [];
  const a = Ba(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const p = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(p)) && !f)
      return;
    const m = a(t, p);
    m < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], l = m) : m === l && r.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return Ge(i, e, t, c), r;
}
function hi(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Ha(i, t, e, n) : Na(i, t, e, s, n, o);
}
function xs(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Ge(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Va = {
  modes: {
    index(i, t, e, s) {
      const n = At(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ci(i, n, o, s, r) : hi(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ci(i, n, o, s, r) : hi(i, n, o, !1, s, r);
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
      const n = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ci(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return hi(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = At(t, i);
      return xs(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = At(t, i);
      return xs(i, n, "y", e.intersect, s);
    }
  }
};
const jn = [
  "left",
  "top",
  "right",
  "bottom"
];
function te(i, t) {
  return i.filter((e) => e.pos === t);
}
function vs(i, t) {
  return i.filter((e) => jn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function ee(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function $a(i) {
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
function ja(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !jn.includes(n))
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
function Ua(i, t) {
  const e = ja(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Ya(i) {
  const t = $a(i), e = ee(t.filter((c) => c.box.fullSize), !0), s = ee(te(t, "left"), !0), n = ee(te(t, "right")), o = ee(te(t, "top"), !0), r = ee(te(t, "bottom")), a = vs(t, "x"), l = vs(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: te(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function ws(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Un(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Xa(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!F(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Un(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - ws(r, i, "left", "right")), l = Math.max(0, t.outerHeight - ws(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Ka(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function qa(i, t) {
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
function oe(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, qa(a.horizontal, t));
    const { same: d, other: u } = Xa(t, e, a, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(a);
  }
  return c && oe(n, t, e, s) || h;
}
function De(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function ks(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      Ne(c.start) && (r = c.start), l.fullSize ? De(l, n.left, r, e.outerWidth - n.right - n.left, u) : De(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      Ne(c.start) && (o = c.start), l.fullSize ? De(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : De(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var ct = {
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
    const n = ht(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Ya(i.boxes), l = a.vertical, c = a.horizontal;
    H(i.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const h = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, n);
    Un(u, ht(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), p = Ua(l.concat(c), d);
    oe(a.fullSize, f, d, p), oe(l, f, d, p), oe(c, f, d, p) && oe(l, f, d, p), Ka(f), ks(a.leftAndTop, f, d, p), f.x += f.w, f.y += f.h, ks(a.rightAndBottom, f, d, p), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, H(a.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, i.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Yn {
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
class Ga extends Yn {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ee = "$chartjs", Za = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Ss = (i) => i === null || i === "";
function Qa(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ee] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Ss(n)) {
    const o = hs(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Ss(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = hs(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Xn = ha ? {
  passive: !0
} : !1;
function Ja(i, t, e) {
  i && i.addEventListener(t, e, Xn);
}
function tl(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Xn);
}
function el(i, t) {
  const e = Za[i.type] || i.type, { x: s, y: n } = At(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function je(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function il(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.addedNodes, s), r = r && !je(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function sl(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.removedNodes, s), r = r && !je(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const be = /* @__PURE__ */ new Map();
let Ms = 0;
function Kn() {
  const i = window.devicePixelRatio;
  i !== Ms && (Ms = i, be.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function nl(i, t) {
  be.size || window.addEventListener("resize", Kn), be.set(i, t);
}
function ol(i) {
  be.delete(i), be.size || window.removeEventListener("resize", Kn);
}
function rl(i, t, e) {
  const s = i.canvas, n = s && Ei(s);
  if (!n)
    return;
  const o = Mn((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), nl(i, o), r;
}
function di(i, t, e) {
  e && e.disconnect(), t === "resize" && ol(i);
}
function al(i, t, e) {
  const s = i.canvas, n = Mn((o) => {
    i.ctx !== null && e(el(o, i));
  }, i);
  return Ja(s, t, n), n;
}
class ll extends Yn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Qa(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ee])
      return !1;
    const s = e[Ee].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      N(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ee], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: il,
      detach: sl,
      resize: rl
    }[e] || al;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: di,
      detach: di,
      resize: di
    }[e] || tl)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return ca(t, e, s, n);
  }
  isAttached(t) {
    const e = t && Ei(t);
    return !!(e && e.isConnected);
  }
}
function cl(i) {
  return !Ri() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Ga : ll;
}
class Ht {
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
    return ge(this.x) && ge(this.y);
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
function hl(i, t) {
  const e = i.options.ticks, s = dl(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? fl(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return gl(t, c, o, r / n), c;
  const h = ul(o, t, n);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Pe(t, c, h, N(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      Pe(t, c, h, o[d], o[d + 1]);
    return Pe(t, c, h, l, N(f) ? t.length : l + f), c;
  }
  return Pe(t, c, h), c;
}
function dl(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function ul(i, t, e) {
  const s = pl(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = or(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function fl(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function gl(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Pe(i, t, e, s, n) {
  const o = A(s, 0), r = Math.min(A(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function pl(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const ml = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Cs = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Ts = (i, t) => Math.min(t || i, i);
function Ds(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function bl(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function _l(i, t) {
  H(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function ie(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Ps(i, t) {
  if (!i.display)
    return 0;
  const e = J(i.font, t), s = ht(i.padding);
  return (X(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function yl(i, t) {
  return Bt(i, {
    scale: t,
    type: "scale"
  });
}
function xl(i, t, e) {
  return Bt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function vl(i, t, e) {
  let s = Oi(i);
  return (e && t !== "right" || !e && t === "right") && (s = ml(s)), s;
}
function wl(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, p;
  const g = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (f = Q(s, o, a), F(e)) {
      const b = Object.keys(e)[0], x = e[b];
      p = h[b].getPixelForValue(x) + g - t;
    } else e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = Cs(i, e, t);
    u = a - o;
  } else {
    if (F(e)) {
      const b = Object.keys(e)[0], x = e[b];
      f = h[b].getPixelForValue(x) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Cs(i, e, t);
    p = Q(s, r, n), d = e === "left" ? -ut : ut;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: u,
    rotation: d
  };
}
class Qt extends Ht {
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
    return t = gt(t, Number.POSITIVE_INFINITY), e = gt(e, Number.NEGATIVE_INFINITY), s = gt(s, Number.POSITIVE_INFINITY), n = gt(n, Number.NEGATIVE_INFINITY), {
      min: gt(t, s),
      max: gt(e, n),
      minDefined: tt(t),
      maxDefined: tt(e)
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
      min: gt(e, gt(s, e)),
      max: gt(s, gt(e, s))
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
    V(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Nr(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ds(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = hl(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    V(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    V(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    V(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), V(this.options[t], [
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
    V(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = V(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    V(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    V(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Ts(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = lt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - ie(t.grid) - e.padding - Ps(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = cr(Math.min(Math.asin(lt((h.highest.height + 6) / a, -1, 1)), Math.asin(lt(l / c, -1, 1)) - Math.asin(lt(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    V(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    V(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ps(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = ie(o) + l) : (t.height = this.maxHeight, t.width = ie(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, p = Rt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const b = s.mirror ? 0 : m * d.width + g * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = s.mirror ? 0 : g * d.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    V(this.options.afterFit, [
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
      N(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Ds(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Ts(e, s));
    let c = 0, h = 0, d, u, f, p, g, m, b, x, k, S, y;
    for (d = 0; d < e; d += l) {
      if (p = t[d].label, g = this._resolveTickFontOptions(d), n.font = m = g.string, b = o[m] = o[m] || {
        data: {},
        gc: []
      }, x = g.lineHeight, k = S = 0, !N(p) && !X(p))
        k = os(n, b.data, b.gc, k, p), S = x;
      else if (X(p))
        for (u = 0, f = p.length; u < f; ++u)
          y = p[u], !N(y) && !X(y) && (k = os(n, b.data, b.gc, k, y), S += x);
      r.push(k), a.push(S), c = Math.max(k, c), h = Math.max(S, h);
    }
    _l(o, e);
    const M = r.indexOf(c), T = a.indexOf(h), v = (O) => ({
      width: r[O] || 0,
      height: a[O] || 0
    });
    return {
      first: v(0),
      last: v(e - 1),
      widest: v(M),
      highest: v(T),
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
    return ur(this._alignToPixels ? Ot(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = xl(this.getContext(), t, s));
    }
    return this.$context || (this.$context = yl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Rt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = ie(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, b = function(U) {
      return Ot(s, U, g);
    };
    let x, k, S, y, M, T, v, O, R, I, E, G;
    if (r === "top")
      x = b(this.bottom), T = this.bottom - u, O = x - m, I = b(t.top) + m, G = t.bottom;
    else if (r === "bottom")
      x = b(this.top), I = t.top, G = b(t.bottom) - m, T = x + m, O = this.top + u;
    else if (r === "left")
      x = b(this.right), M = this.right - u, v = x - m, R = b(t.left) + m, E = t.right;
    else if (r === "right")
      x = b(this.left), R = t.left, E = b(t.right) - m, M = x + m, v = this.left + u;
    else if (e === "x") {
      if (r === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (F(r)) {
        const U = Object.keys(r)[0], it = r[U];
        x = b(this.chart.scales[U].getPixelForValue(it));
      }
      I = t.top, G = t.bottom, T = x + m, O = T + u;
    } else if (e === "y") {
      if (r === "center")
        x = b((t.left + t.right) / 2);
      else if (F(r)) {
        const U = Object.keys(r)[0], it = r[U];
        x = b(this.chart.scales[U].getPixelForValue(it));
      }
      M = x - m, v = M - u, R = t.left, E = t.right;
    }
    const ot = A(n.ticks.maxTicksLimit, d), $ = Math.max(1, Math.ceil(d / ot));
    for (k = 0; k < d; k += $) {
      const U = this.getContext(k), it = o.setContext(U), B = a.setContext(U), Nt = it.lineWidth, _t = it.color, yt = B.dash || [], C = B.dashOffset, w = it.tickWidth, D = it.tickColor, L = it.tickBorderDash || [], P = it.tickBorderDashOffset;
      S = bl(this, k, l), S !== void 0 && (y = Ot(s, S, Nt), c ? M = v = R = E = y : T = O = I = G = y, f.push({
        tx1: M,
        ty1: T,
        tx2: v,
        ty2: O,
        x1: R,
        y1: I,
        x2: E,
        y2: G,
        width: Nt,
        color: _t,
        borderDash: yt,
        borderDashOffset: C,
        tickWidth: w,
        tickColor: D,
        tickBorderDash: L,
        tickBorderDashOffset: P
      }));
    }
    return this._ticksLength = d, this._borderValue = x, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = ie(s.grid), f = u + h, p = d ? -h : f, g = -Rt(this.labelRotation), m = [];
    let b, x, k, S, y, M, T, v, O, R, I, E, G = "middle";
    if (n === "top")
      M = this.bottom - p, T = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      M = this.top + p, T = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const $ = this._getYAxisLabelAlignment(u);
      T = $.textAlign, y = $.x;
    } else if (n === "right") {
      const $ = this._getYAxisLabelAlignment(u);
      T = $.textAlign, y = $.x;
    } else if (e === "x") {
      if (n === "center")
        M = (t.top + t.bottom) / 2 + f;
      else if (F(n)) {
        const $ = Object.keys(n)[0], U = n[$];
        M = this.chart.scales[$].getPixelForValue(U) + f;
      }
      T = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        y = (t.left + t.right) / 2 - f;
      else if (F(n)) {
        const $ = Object.keys(n)[0], U = n[$];
        y = this.chart.scales[$].getPixelForValue(U);
      }
      T = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? G = "top" : l === "end" && (G = "bottom"));
    const ot = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      k = a[b], S = k.label;
      const $ = o.setContext(this.getContext(b));
      v = this.getPixelForTick(b) + o.labelOffset, O = this._resolveTickFontOptions(b), R = O.lineHeight, I = X(S) ? S.length : 1;
      const U = I / 2, it = $.color, B = $.textStrokeColor, Nt = $.textStrokeWidth;
      let _t = T;
      r ? (y = v, T === "inner" && (b === x - 1 ? _t = this.options.reverse ? "left" : "right" : b === 0 ? _t = this.options.reverse ? "right" : "left" : _t = "center"), n === "top" ? c === "near" || g !== 0 ? E = -I * R + R / 2 : c === "center" ? E = -ot.highest.height / 2 - U * R + R : E = -ot.highest.height + R / 2 : c === "near" || g !== 0 ? E = R / 2 : c === "center" ? E = ot.highest.height / 2 - U * R : E = ot.highest.height - I * R, d && (E *= -1), g !== 0 && !$.showLabelBackdrop && (y += R / 2 * Math.sin(g))) : (M = v, E = (1 - I) * R / 2);
      let yt;
      if ($.showLabelBackdrop) {
        const C = ht($.backdropPadding), w = ot.heights[b], D = ot.widths[b];
        let L = E - C.top, P = 0 - C.left;
        switch (G) {
          case "middle":
            L -= w / 2;
            break;
          case "bottom":
            L -= w;
            break;
        }
        switch (T) {
          case "center":
            P -= D / 2;
            break;
          case "right":
            P -= D;
            break;
          case "inner":
            b === x - 1 ? P -= D : b > 0 && (P -= D / 2);
            break;
        }
        yt = {
          left: P,
          top: L,
          width: D + C.width,
          height: w + C.height,
          color: $.backdropColor
        };
      }
      m.push({
        label: S,
        font: O,
        textOffset: E,
        options: {
          rotation: g,
          color: it,
          strokeColor: B,
          strokeWidth: Nt,
          textAlign: _t,
          textBaseline: G,
          translation: [
            y,
            M
          ],
          backdrop: yt
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Rt(this.labelRotation))
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
    let c, h, d, u;
    this.isHorizontal() ? (c = Ot(t, this.left, r) - r / 2, h = Ot(t, this.right, a) + a / 2, d = u = l) : (d = Ot(t, this.top, r) - r / 2, u = Ot(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Xe(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      me(s, c, 0, h, l, a);
    }
    n && Ke(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = J(s.font), r = ht(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || F(e) ? (l += r.bottom, X(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = wl(this, l, e, a);
    me(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: vl(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = A(t.grid && t.grid.z, -1), n = A(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Qt.prototype.draw ? [
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
    return J(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Oe {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Ml(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, kl(t, r, s), this.override && j.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in j[n] && (delete j[n][s], this.override && delete Wt[s]);
  }
}
function kl(i, t, e) {
  const s = fe(/* @__PURE__ */ Object.create(null), [
    e ? j.get(e) : {},
    j.get(t),
    i.defaults
  ]);
  j.set(t, s), i.defaultRoutes && Sl(t, i.defaultRoutes), i.descriptors && j.describe(t, i.descriptors);
}
function Sl(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    j.route(o, n, l, a);
  });
}
function Ml(i) {
  return "id" in i && "defaults" in i;
}
class Cl {
  constructor() {
    this.controllers = new Oe($n, "datasets", !0), this.elements = new Oe(Ht, "elements"), this.plugins = new Oe(Object, "plugins"), this.scales = new Oe(Qt, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : H(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Di(t);
    V(s["before" + n], [], s), e[t](s), V(s["after" + n], [], s);
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
var mt = /* @__PURE__ */ new Cl();
class Tl {
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
      if (V(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    N(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = A(s.options && s.options.plugins, {}), o = Dl(s);
    return n === !1 && !e ? [] : Ol(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function Dl(i) {
  const t = {}, e = [], s = Object.keys(mt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(mt.getPlugin(s[o]));
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
function Pl(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Ol(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = Pl(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: Il(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Il(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function vi(i, t) {
  const e = j.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Ll(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Al(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Os(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Fl(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function wi(i, ...t) {
  if (Os(i))
    return i;
  for (const e of t) {
    const s = e.axis || Fl(e.position) || i.length > 1 && Os(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function Is(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function Rl(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return Is(i, "x", e[0]) || Is(i, "y", e[0]);
  }
  return {};
}
function El(i, t) {
  const e = Wt[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = vi(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!F(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = wi(r, a, Rl(r, i), j.scales[a.type]), c = Al(l, n), h = e.scales || {};
    o[r] = ae(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || vi(a, t), h = (Wt[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = Ll(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), ae(o[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    ae(a, [
      j.scales[a.type],
      j.scale
    ]);
  }), o;
}
function qn(i) {
  const t = i.options || (i.options = {});
  t.plugins = A(t.plugins, {}), t.scales = El(i, t);
}
function Gn(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function zl(i) {
  return i = i || {}, i.data = Gn(i.data), qn(i), i;
}
const Ls = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Set();
function Ie(i, t) {
  let e = Ls.get(i);
  return e || (e = t(), Ls.set(i, e), Zn.add(e)), e;
}
const se = (i, t, e) => {
  const s = He(t, e);
  s !== void 0 && i.add(s);
};
class Wl {
  constructor(t) {
    this._config = zl(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Gn(t);
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
    this.clearCache(), qn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ie(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ie(`${t}.transition.${e}`, () => [
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
    return Ie(`${t}-${e}`, () => [
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
    return Ie(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), h.forEach((d) => se(l, t, d))), h.forEach((d) => se(l, n, d)), h.forEach((d) => se(l, Wt[o] || {}, d)), h.forEach((d) => se(l, j, d)), h.forEach((d) => se(l, _i, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Zn.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Wt[e] || {},
      j.datasets[e] || {},
      {
        type: e
      },
      j,
      _i
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = As(this._resolverCache, t, n);
    let l = r;
    if (Hl(r, e)) {
      o.$shared = !1, s = Dt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Gt(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = As(this._resolverCache, t, s);
    return F(e) ? Gt(o, e, void 0, n) : o;
  }
}
function As(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Li(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const Bl = (i) => F(i) && Object.getOwnPropertyNames(i).some((t) => Dt(i[t]));
function Hl(i, t) {
  const { isScriptable: e, isIndexable: s } = On(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (Dt(a) || Bl(a)) || r && X(a))
      return !0;
  }
  return !1;
}
var Nl = "4.5.1";
const Vl = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Fs(i, t) {
  return i === "top" || i === "bottom" || Vl.indexOf(i) === -1 && t === "x";
}
function Rs(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function Es(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), V(e && e.onComplete, [
    i
  ], t);
}
function $l(i) {
  const t = i.chart, e = t.options.animation;
  V(e && e.onProgress, [
    i
  ], t);
}
function Qn(i) {
  return Ri() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const ze = {}, zs = (i) => {
  const t = Qn(i);
  return Object.values(ze).filter((e) => e.canvas === t).pop();
};
function jl(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Ul(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let Ze = class {
  static defaults = j;
  static instances = ze;
  static overrides = Wt;
  static registry = mt;
  static version = Nl;
  static getChart = zs;
  static register(...t) {
    mt.add(...t), Ws();
  }
  static unregister(...t) {
    mt.remove(...t), Ws();
  }
  constructor(t, e) {
    const s = this.config = new Wl(e), n = Qn(t), o = zs(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || cl(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Go(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Tl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = br((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], ze[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    vt.listen(this, "complete", Es), vt.listen(this, "progress", $l), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return N(t) ? e && o ? o : n ? s / n : null : t;
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
    return mt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : cs(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return rs(this.canvas, this.ctx), this;
  }
  stop() {
    return vt.stop(this), this;
  }
  resize(t, e) {
    vt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, cs(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), V(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    H(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = wi(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), H(o, (r) => {
      const a = r.options, l = a.id, c = wi(l, a), h = A(a.type, r.dtype);
      (a.position === void 0 || Fs(a.position, c) !== Fs(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = mt.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), H(n, (r, a) => {
      r || delete s[a];
    }), H(s, (r) => {
      ct.configure(this, r, r.options), ct.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Rs("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || vi(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = mt.getController(a), { datasetElementType: c, dataElementType: h } = j.datasets[a];
        Object.assign(l, {
          dataElementType: mt.getElement(h),
          datasetElementType: c && mt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    H(this.data.datasets, (t, e) => {
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
      const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || H(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Rs("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    H(this.scales, (t) => {
      ct.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Gi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      jl(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Gi(n, s(o)))
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
    ct.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], H(this.boxes, (n) => {
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
        this._updateDataset(e, Dt(t) ? t({
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
    }) !== !1 && (vt.has(this) ? this.attached && !vt.running(this) && vt.start(this) : (this.draw(), Es({
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
    }, n = Hn(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && Xe(e, n), t.controller.draw(), n && Ke(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return pe(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Va.modes[e];
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
    return this.$context || (this.$context = Bt(null, {
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
    Ne(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), vt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), rs(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete ze[this.id], this.notifyPlugins("afterDestroy");
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
    H(this.options.events, (o) => s(o, n));
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
    H(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, H(this._responsiveListeners, (t, e) => {
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
    !We(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = ir(t), c = Ul(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, V(o.onHover, [
      t,
      a,
      this
    ], this), l && V(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !We(a, n);
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
function Ws() {
  return H(Ze.instances, (i) => i._plugins.invalidate());
}
function Jn(i, t, e = t) {
  i.lineCap = A(e.borderCapStyle, t.borderCapStyle), i.setLineDash(A(e.borderDash, t.borderDash)), i.lineDashOffset = A(e.borderDashOffset, t.borderDashOffset), i.lineJoin = A(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = A(e.borderWidth, t.borderWidth), i.strokeStyle = A(e.borderColor, t.borderColor);
}
function Yl(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Xl(i) {
  return i.stepped ? Ir : i.tension || i.cubicInterpolationMode === "monotone" ? Lr : Yl;
}
function to(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Kl(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = to(n, e, s), h = Xl(o);
  let { move: d = !0, reverse: u } = s || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = n[(a + (u ? c - f : f)) % r], !p.skip && (d ? (i.moveTo(p.x, p.y), d = !1) : h(i, g, p, u, o.stepped), g = p);
  return l && (p = n[(a + (u ? c : 0)) % r], h(i, g, p, u, o.stepped)), !!l;
}
function ql(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = to(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, p, g, m, b;
  const x = (S) => (r + (c ? a - S : S)) % o, k = () => {
    g !== m && (i.lineTo(h, m), i.lineTo(h, g), i.lineTo(h, b));
  };
  for (l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = n[x(u)], f.skip)
      continue;
    const S = f.x, y = f.y, M = S | 0;
    M === p ? (y < g ? g = y : y > m && (m = y), h = (d * h + S) / ++d) : (k(), i.lineTo(S, y), p = M, d = 0, g = m = y), b = y;
  }
  k();
}
function ki(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? ql : Kl;
}
function Gl(i) {
  return i.stepped ? da : i.tension || i.cubicInterpolationMode === "monotone" ? ua : Ft;
}
function Zl(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Jn(i, t.options), i.stroke(n);
}
function Ql(i, t, e, s) {
  const { segments: n, options: o } = t, r = ki(t);
  for (const a of n)
    Jn(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Jl = typeof Path2D == "function";
function tc(i, t, e, s) {
  Jl && !t.options.segment ? Zl(i, t, e, s) : Ql(i, t, e, s);
}
class Qe extends Ht {
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
      sa(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = _a(this, this.options.segment));
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
    const s = this.options, n = t[e], o = this.points, r = Bn(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Gl(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], p = o[u];
      if (f === p) {
        a.push(f);
        continue;
      }
      const g = Math.abs((n - f[e]) / (p[e] - f[e])), m = l(f, p, g, s.stepped);
      m[e] = t[e], a.push(m);
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
    (this.points || []).length && o.borderWidth && (t.save(), tc(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function Bs(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class ec extends Ht {
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
    return Bs(this, t, "x", e);
  }
  inYRange(t, e) {
    return Bs(this, t, "y", e);
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
    this.skip || s.radius < 0.1 || !pe(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, yi(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function ic(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Je(l, c, n);
    const h = Si(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Bn(t, h);
    for (const u of d) {
      const f = Si(e, o[u.start], o[u.end], u.loop), p = Wn(a, n, f);
      for (const g of p)
        r.push({
          source: g,
          target: u,
          start: {
            [e]: Hs(h, f, "start", Math.max)
          },
          end: {
            [e]: Hs(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Si(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = bt(n), o = bt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function sc(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Je(r, a, n);
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
function Je(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Hs(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function eo(i, t) {
  let e = [], s = !1;
  return X(i) ? (s = !0, e = i) : e = sc(i, t), e.length ? new Qe({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Ns(i) {
  return i && i.fill !== !1;
}
function nc(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!tt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function oc(i, t, e) {
  const s = cc(i);
  if (F(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return tt(n) && Math.floor(n) === n ? rc(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function rc(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function ac(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : F(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function lc(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : F(i) ? s = i.value : s = t.getBaseValue(), s;
}
function cc(i) {
  const t = i.options, e = t.fill;
  let s = A(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function hc(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = dc(t, e);
  a.push(eo({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      uc(n, r[h], a);
  }
  return new Qe({
    points: n,
    options: {}
  });
}
function dc(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function uc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = fc(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function fc(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], u = r[h.end][e];
    if (Xt(n, d, u)) {
      a = n === d, l = n === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class io {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: ft
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
function gc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (tt(e))
    return pc(t, e);
  if (e === "stack")
    return hc(i);
  if (e === "shape")
    return !0;
  const n = mc(i);
  return n instanceof io ? n : eo(n, s);
}
function pc(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function mc(i) {
  return (i.scale || {}).getPointPositionForValue ? _c(i) : bc(i);
}
function bc(i) {
  const { scale: t = {}, fill: e } = i, s = ac(e, t);
  if (tt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function _c(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = lc(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new io({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function ui(i, t, e) {
  const s = gc(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, d = c.backgroundColor, { above: u = d, below: f = d } = h || {}, p = n.getDatasetMeta(o), g = Hn(n, p);
  s && r.points.length && (Xe(i, e), yc(i, {
    line: r,
    target: s,
    above: u,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: g
  }), Ke(i));
}
function yc(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let h = o;
  o !== n && (c === "x" ? (Vs(i, s, r.top), fi(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), Vs(i, s, r.bottom)) : c === "y" && ($s(i, s, r.left), fi(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), $s(i, s, r.right), h = n)), fi(i, {
    line: e,
    target: s,
    color: h,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function Vs(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Je(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function $s(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Je(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, d.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function fi(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = ic(e, s, n);
  for (const { source: c, target: h, start: d, end: u } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, p = s !== !0;
    i.save(), i.fillStyle = f, xc(i, r, a, p && Si(n, d, u)), i.beginPath();
    const g = !!e.pathSegment(i, c);
    let m;
    if (p) {
      g ? i.closePath() : js(i, s, u, n);
      const b = !!s.pathSegment(i, h, {
        move: g,
        reverse: !0
      });
      m = g && b, m || js(i, s, d, n);
    }
    i.closePath(), i.fill(m ? "evenodd" : "nonzero"), i.restore();
  }
}
function xc(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, h, d;
    o === "x" ? (l = r, c = n.top, h = a, d = n.bottom) : (l = n.left, c = r, h = n.right, d = a), i.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), d = Math.min(d, e.bottom)), i.rect(l, c, h - l, d - c), i.clip();
  }
}
function js(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var vc = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Qe && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: oc(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = nc(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && ui(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Ns(o) && ui(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Ns(s) || e.drawTime !== "beforeDatasetDraw" || ui(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Us = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, wc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Ys extends Ht {
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
    let e = V(t.generateLabels, [
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
    const s = t.labels, n = J(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Us(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((p, g) => {
      const m = s + e / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (g > 0 ? 0 : 1)] = 0, f += h, u++), l[g] = {
        left: 0,
        top: f,
        row: u,
        width: m,
        height: n
      }, c[c.length - 1] += m + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: x, itemHeight: k } = kc(s, e, o, m, n);
      b > 0 && f + k + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), p += u + a, g++, u = f = 0), l[b] = {
        left: p,
        top: f,
        col: g,
        width: x,
        height: k
      }, u = Math.max(u, x), f += k + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Kt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Q(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = Q(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = Q(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = Q(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xe(t, this), this._draw(), Ke(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = j.color, l = Kt(t.rtl, this.left, this.width), c = J(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = Us(r, d), b = function(M, T, v) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const O = A(v.lineWidth, 1);
      if (n.fillStyle = A(v.fillStyle, a), n.lineCap = A(v.lineCap, "butt"), n.lineDashOffset = A(v.lineDashOffset, 0), n.lineJoin = A(v.lineJoin, "miter"), n.lineWidth = O, n.strokeStyle = A(v.strokeStyle, a), n.setLineDash(A(v.lineDash, [])), r.usePointStyle) {
        const R = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: v.pointStyle,
          rotation: v.rotation,
          borderWidth: O
        }, I = l.xPlus(M, p / 2), E = T + u;
        Dn(n, R, I, E, r.pointStyleWidth && p);
      } else {
        const R = T + Math.max((d - g) / 2, 0), I = l.leftForLtr(M, p), E = de(v.borderRadius);
        n.beginPath(), Object.values(E).some((G) => G !== 0) ? xi(n, {
          x: I,
          y: R,
          w: p,
          h: g,
          radius: E
        }) : n.rect(I, R, p, g), n.fill(), O !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(M, T, v) {
      me(n, v.text, M, T + m / 2, c, {
        strikethrough: v.hidden,
        textAlign: l.textAlign(v.textAlign)
      });
    }, k = this.isHorizontal(), S = this._computeTitleHeight();
    k ? f = {
      x: Q(o, this.left + h, this.right - s[0]),
      y: this.top + h + S,
      line: 0
    } : f = {
      x: this.left + h,
      y: Q(o, this.top + S + h, this.bottom - e[0].height),
      line: 0
    }, Rn(this.ctx, t.textDirection);
    const y = m + h;
    this.legendItems.forEach((M, T) => {
      n.strokeStyle = M.fontColor, n.fillStyle = M.fontColor;
      const v = n.measureText(M.text).width, O = l.textAlign(M.textAlign || (M.textAlign = r.textAlign)), R = p + u + v;
      let I = f.x, E = f.y;
      l.setWidth(this.width), k ? T > 0 && I + R + h > this.right && (E = f.y += y, f.line++, I = f.x = Q(o, this.left + h, this.right - s[f.line])) : T > 0 && E + y > this.bottom && (I = f.x = I + e[f.line].width + h, f.line++, E = f.y = Q(o, this.top + S + h, this.bottom - e[f.line].height));
      const G = l.x(I);
      if (b(G, E, M), I = _r(O, I + p + u, k ? I + R : this.right, t.rtl), x(l.x(I), E, M), k)
        f.x += R + h;
      else if (typeof M.text != "string") {
        const ot = c.lineHeight;
        f.y += so(M, ot) + h;
      } else
        f.y += y;
    }), En(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = J(e.font), n = ht(e.padding);
    if (!e.display)
      return;
    const o = Kt(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = Q(t.align, d, this.right - u);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      h = c + Q(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = Q(a, d, d + u);
    r.textAlign = o.textAlign(Oi(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, me(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = J(t.font), s = ht(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Xt(t, this.left, this.right) && Xt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Xt(t, n.left, n.left + n.width) && Xt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Cc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = wc(n, s);
      n && !o && V(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && V(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && V(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function kc(i, t, e, s, n) {
  const o = Sc(s, i, t, e), r = Mc(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Sc(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function Mc(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = so(t, e)), s;
}
function so(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Cc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Tc = {
  id: "legend",
  _element: Ys,
  start(i, t, e) {
    const s = i.legend = new Ys({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    ct.configure(i, s, e), ct.addBox(i, s);
  },
  stop(i) {
    ct.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    ct.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), h = ht(c.borderWidth);
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
class no extends Ht {
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
    const n = X(s.text) ? s.text.length : 1;
    this._padding = ht(s.padding);
    const o = n * J(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = Q(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = Q(a, n, e), l = q * -0.5) : (h = o - t, d = Q(a, e, n), l = q * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = J(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    me(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Oi(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function Dc(i, t) {
  const e = new no({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  ct.configure(i, e, t), ct.addBox(i, e), i.titleBlock = e;
}
var Pc = {
  id: "title",
  _element: no,
  start(i, t, e) {
    Dc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    ct.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    ct.configure(i, s, e), s.options = e;
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
const re = {
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
        const c = l.getCenterPoint(), h = bi(t, c);
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
function pt(i, t) {
  return t && (X(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function wt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Oc(i, t) {
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
function Xs(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = J(t.bodyFont), c = J(t.titleFont), h = J(t.footerFont), d = o.length, u = n.length, f = s.length, p = ht(t.padding);
  let g = p.height, m = 0, b = s.reduce((S, y) => S + y.before.length + y.lines.length + y.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const S = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * S + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (g += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const k = function(S) {
    m = Math.max(m, e.measureText(S).width + x);
  };
  return e.save(), e.font = c.string, H(i.title, k), e.font = l.string, H(i.beforeBody.concat(i.afterBody), k), x = t.displayColors ? r + 2 + t.boxPadding : 0, H(s, (S) => {
    H(S.before, k), H(S.lines, k), H(S.after, k);
  }), x = 0, e.font = h.string, H(i.footer, k), e.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function Ic(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Lc(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Ac(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Lc(c, i, t, e) && (c = "center"), c;
}
function Ks(i, t, e) {
  const s = e.yAlign || t.yAlign || Ic(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Ac(i, t, e, s),
    yAlign: s
  };
}
function Fc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Rc(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function qs(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = de(r);
  let p = Fc(t, a);
  const g = Rc(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(h, u) + n : a === "right" && (p += Math.max(d, f) + n), {
    x: lt(p, 0, s.width - t.width),
    y: lt(g, 0, s.height - t.height)
  };
}
function Le(i, t, e) {
  const s = ht(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Gs(i) {
  return pt([], wt(i));
}
function Ec(i, t, e) {
  return Bt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Zs(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const oo = {
  beforeTitle: xt,
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
  afterTitle: xt,
  beforeBody: xt,
  beforeLabel: xt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return N(e) || (t += e), t;
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
  afterLabel: xt,
  afterBody: xt,
  beforeFooter: xt,
  footer: xt,
  afterFooter: xt
};
function st(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? oo[t].call(e, s) : n;
}
class Qs extends Ht {
  static positioners = re;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Nn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Ec(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = st(s, "beforeTitle", this, t), o = st(s, "title", this, t), r = st(s, "afterTitle", this, t);
    let a = [];
    return a = pt(a, wt(n)), a = pt(a, wt(o)), a = pt(a, wt(r)), a;
  }
  getBeforeBody(t, e) {
    return Gs(st(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return H(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Zs(s, o);
      pt(r.before, wt(st(a, "beforeLabel", this, o))), pt(r.lines, st(a, "label", this, o)), pt(r.after, wt(st(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Gs(st(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = st(s, "beforeFooter", this, t), o = st(s, "footer", this, t), r = st(s, "afterFooter", this, t);
    let a = [];
    return a = pt(a, wt(n)), a = pt(a, wt(o)), a = pt(a, wt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Oc(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), H(a, (h) => {
      const d = Zs(t.callbacks, h);
      n.push(st(d, "labelColor", this, h)), o.push(st(d, "labelPointStyle", this, h)), r.push(st(d, "labelTextColor", this, h));
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
      const a = re[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Xs(this, s), c = Object.assign({}, a, l), h = Ks(this.chart, s, c), d = qs(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = de(a), { x: u, y: f } = t, { width: p, height: g } = e;
    let m, b, x, k, S, y;
    return o === "center" ? (S = f + g / 2, n === "left" ? (m = u, b = m - r, k = S + r, y = S - r) : (m = u + p, b = m + r, k = S - r, y = S + r), x = m) : (n === "left" ? b = u + Math.max(l, h) + r : n === "right" ? b = u + p - Math.max(c, d) - r : b = this.caretX, o === "top" ? (k = f, S = k - r, m = b - r, x = b + r) : (k = f + g, S = k + r, m = b + r, x = b - r), y = k), {
      x1: m,
      x2: b,
      x3: x,
      y1: k,
      y2: S,
      y3: y
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Kt(s.rtl, this.x, this.width);
      for (t.x = Le(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = J(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = J(o.bodyFont), d = Le(this, "left", o), u = n.x(d), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, p = e.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(u, c) + c / 2, b = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, yi(t, g, m, b), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, yi(t, g, m, b);
    } else {
      t.lineWidth = F(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = n.leftForLtr(u, c), m = n.leftForLtr(n.xPlus(u, 1), c - 2), b = de(r.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, xi(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), xi(t, {
        x: m,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = J(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const p = Kt(s.rtl, this.x, this.width), g = function(v) {
      e.fillText(v, p.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = p.textAlign(r);
    let b, x, k, S, y, M, T;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Le(this, m, s), e.fillStyle = s.bodyColor, H(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, S = 0, M = n.length; S < M; ++S) {
      for (b = n[S], x = this.labelTextColors[S], e.fillStyle = x, H(b.before, g), k = b.lines, a && k.length && (this._drawColorBox(e, t, S, p, s), u = Math.max(d.lineHeight, l)), y = 0, T = k.length; y < T; ++y)
        g(k[y]), u = d.lineHeight;
      H(b.after, g);
    }
    f = 0, u = d.lineHeight, H(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Kt(s.rtl, this.x, this.width);
      for (t.x = Le(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = J(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: p } = de(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - p), e.quadraticCurveTo(a + c, l + h, a + c - p, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = re[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Xs(this, t), l = Object.assign({}, r, this._size), c = Ks(e, t, l), h = qs(t, l, c, e);
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
    const r = ht(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Rn(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), En(t, e.textDirection), t.restore());
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
    }), o = !We(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !We(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = re[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var zc = {
  id: "tooltip",
  _element: Qs,
  positioners: re,
  afterInit(i, t, e) {
    e && (i.tooltip = new Qs({
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
    callbacks: oo
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
const Wc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Bc(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Wc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Hc = (i, t) => i === null ? null : lt(Math.round(i), 0, t);
function Js(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Nc extends Qt {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Js
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
    if (N(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Bc(s, t, A(e, t), this._addedLabels), Hc(e, s.length - 1);
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
    return Js.call(this, t);
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
function Vc(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, p = h - 1, { min: g, max: m } = t, b = !N(r), x = !N(a), k = !N(c), S = (m - g) / (d + 1);
  let y = Qi((m - g) / p / f) * f, M, T, v, O;
  if (y < 1e-14 && !b && !x)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  O = Math.ceil(m / y) - Math.floor(g / y), O > p && (y = Qi(O * y / p / f) * f), N(l) || (M = Math.pow(10, l), y = Math.ceil(y * M) / M), n === "ticks" ? (T = Math.floor(g / y) * y, v = Math.ceil(m / y) * y) : (T = g, v = m), b && x && o && ar((a - r) / o, y / 1e3) ? (O = Math.round(Math.min((a - r) / y, h)), y = (a - r) / O, T = r, v = a) : k ? (T = b ? r : T, v = x ? a : v, O = c - 1, y = (v - T) / O) : (O = (v - T) / y, le(O, Math.round(O), y / 1e3) ? O = Math.round(O) : O = Math.ceil(O));
  const R = Math.max(Ji(y), Ji(T));
  M = Math.pow(10, N(l) ? R : l), T = Math.round(T * M) / M, v = Math.round(v * M) / M;
  let I = 0;
  for (b && (u && T !== r ? (e.push({
    value: r
  }), T < r && I++, le(Math.round((T + I * y) * M) / M, r, tn(r, S, i)) && I++) : T < r && I++); I < O; ++I) {
    const E = Math.round((T + I * y) * M) / M;
    if (x && E > a)
      break;
    e.push({
      value: E
    });
  }
  return x && u && v !== a ? e.length && le(e[e.length - 1].value, a, tn(a, S, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || v === a) && e.push({
    value: v
  }), e;
}
function tn(i, t, { horizontal: e, minRotation: s }) {
  const n = Rt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class $c extends Qt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return N(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = qt(n), c = qt(o);
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
    }, o = this._range || this, r = Vc(n, o);
    return t.bounds === "ticks" && lr(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Cn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class jc extends $c {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Tn.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = tt(t) ? t : 0, this.max = tt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = Rt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const ti = {
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
}, nt = /* @__PURE__ */ Object.keys(ti);
function en(i, t) {
  return i - t;
}
function sn(i, t) {
  if (N(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), tt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ge(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function nn(i, t, e, s) {
  const n = nt.length;
  for (let o = nt.indexOf(i); o < n - 1; ++o) {
    const r = ti[nt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return nt[o];
  }
  return nt[n - 1];
}
function Uc(i, t, e, s, n) {
  for (let o = nt.length - 1; o >= nt.indexOf(e); o--) {
    const r = nt[o];
    if (ti[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return nt[e ? nt.indexOf(e) : 0];
}
function Yc(i) {
  for (let t = nt.indexOf(i) + 1, e = nt.length; t < e; ++t)
    if (ti[nt[t]].common)
      return nt[t];
}
function on(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Pi(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Xc(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function rn(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : Xc(i, s, n, e);
}
class an extends Qt {
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
    const s = t.time || (t.time = {}), n = this._adapter = new za._date(t.adapters.date);
    n.init(e), ae(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : sn(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = tt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = tt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = gr(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? nn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Uc(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Yc(this._unit), this.initOffsets(n), t.reverse && a.reverse(), rn(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = lt(e, 0, r), s = lt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || nn(o.minUnit, e, s, this._getLabelCapacity(e)), a = A(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ge(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, a, r), f++)
      on(h, u, p);
    return (u === s || n.bounds === "ticks" || f === 1) && on(h, u, p), Object.keys(h).sort(en).map((g) => +g);
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
      return V(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], u = s[e], f = c && d && u && u.major;
    return this._adapter.format(t, n || (f ? d : h));
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = Rt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, rn(this, [
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
      t.push(sn(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return mr(t.sort(en));
  }
}
function Ae(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = Et(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = Et(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Sd extends an {
  static id = "timeseries";
  static defaults = an.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ae(e, this.min), this._tableRange = Ae(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Ae(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ae(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const ro = {
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
}, Kc = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, qc = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...ro,
  ...Kc
}, Gc = mo[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function $t(i) {
  return un(i) ? pi(i) : i;
}
function Zc(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return un(t) ? new Proxy(i, {}) : i;
}
function Qc(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function ao(i, t) {
  i.labels = t;
}
function lo(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function Jc(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return ao(e, i.labels), lo(e, i.datasets, t), e;
}
const th = _e({
  props: qc,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = at(null), o = cn(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: u, datasetIdKey: f } = i, p = Jc(h, f), g = Zc(p, h);
      o.value = new Ze(n.value, {
        type: c,
        data: g,
        options: {
          ...d
        },
        plugins: u
      });
    }, a = () => {
      const c = pi(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ye(r), hn(a), Yt([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, u] = c, [f, p] = h;
      const g = pi(o.value);
      if (!g)
        return;
      let m = !1;
      if (d) {
        const b = $t(d), x = $t(f);
        b && b !== x && (Qc(g, b), m = !0);
      }
      if (u) {
        const b = $t(u.labels), x = $t(p.labels), k = $t(u.datasets), S = $t(p.datasets);
        b !== x && (ao(g.config.data, b), m = !0), k && k !== S && (lo(g.config.data, k, i.datasetIdKey), m = !0);
      }
      m && dn(() => {
        l(g);
      });
    }, {
      deep: !0
    }), () => gi("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      gi("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function eh(i, t) {
  return Ze.register(t), _e({
    props: ro,
    setup(e, s) {
      let { expose: n } = s;
      const o = cn(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => gi(th, Gc({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const ih = /* @__PURE__ */ eh("line", Ea), sh = { class: "chart-container" }, nh = {
  key: 1,
  class: "no-data"
}, oh = /* @__PURE__ */ _e({
  __name: "ForecastChart",
  props: {
    data: {},
    parameter: {},
    color: {},
    fontColor: {},
    gridColor: {}
  },
  setup(i) {
    fn((g) => ({
      v36d633cf: d.value
    })), Ze.register(
      Nc,
      jc,
      ec,
      Qe,
      Pc,
      zc,
      Tc,
      vc
    );
    const t = i, { data: e, parameter: s, color: n, fontColor: o, gridColor: r } = gn(t), a = at(), l = at("#495057"), c = at(0), h = () => {
      if (a.value) {
        const m = getComputedStyle(a.value).getPropertyValue("--title-color").trim();
        m && m !== l.value && (l.value = m, dn(() => {
          c.value++;
        }));
      }
    };
    Ye(() => {
      h();
      let g = a.value;
      for (; g && !g.classList?.contains("wrapper-container"); )
        g = g.parentElement;
      g && new MutationObserver(() => {
        h();
      }).observe(g, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    });
    const d = et(() => l.value), u = et(() => !e.value || e.value.length === 0 ? {
      labels: [],
      datasets: []
    } : {
      labels: e.value.map((g) => g.period),
      datasets: [
        {
          label: `${s.value.charAt(0).toUpperCase() + s.value.slice(1)}`,
          data: e.value.map((g) => g.value),
          borderColor: n.value,
          backgroundColor: f,
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
    function f(g) {
      const m = g.chart.canvas, b = g.chart.chartArea;
      if (!b)
        return n.value;
      const x = m.getContext("2d").createLinearGradient(0, b.top, 0, b.bottom);
      return x.addColorStop(0, n.value + "80"), x.addColorStop(1, n.value + "10"), x;
    }
    const p = et(() => ({
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
            color: d.value,
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
            color: d.value,
            font: {
              size: 12
            },
            maxTicksLimit: 5,
            callback: function(g) {
              const m = e.value[0]?.unit || "";
              return `${Math.round(g * 10) / 10}${m}`;
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
            label: function(g) {
              const m = e.value[g.dataIndex];
              return `${Math.round(m.value * 10) / 10}${m.unit}`;
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
    return (g, m) => (z(), W("div", {
      class: "forecast-chart",
      ref_key: "chartContainer",
      ref: a
    }, [
      _("h4", null, Y(jt(s).charAt(0).toUpperCase() + jt(s).slice(1)) + " Forecast", 1),
      _("div", sh, [
        jt(e) && jt(e).length > 0 ? (z(), pn(jt(ih), {
          key: c.value,
          data: u.value,
          options: p.value
        }, null, 8, ["data", "options"])) : (z(), W("div", nh, [...m[0] || (m[0] = [
          _("p", null, "No forecast data available", -1)
        ])]))
      ])
    ], 512));
  }
}), Wi = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, rh = /* @__PURE__ */ Wi(oh, [["__scopeId", "data-v-73b640b9"]]);
var ah = Object.defineProperty, lh = Object.getOwnPropertyDescriptor, ch = (i, t, e, s) => {
  for (var n = lh(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && ah(t, e, n), n;
};
class Bi extends So {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
ch([
  ko({ eventType: "weather.refresh" })
], Bi.prototype, "refresh");
const hh = {
  key: 0,
  class: "weather-loading"
}, dh = {
  key: 1,
  class: "weather-error"
}, uh = {
  key: 2,
  class: "weather-content"
}, fh = {
  key: 0,
  class: "weather-header"
}, gh = {
  key: 0,
  class: "location-desc"
}, ph = {
  key: 1,
  class: "time-range"
}, mh = { class: "weather-main" }, bh = { class: "weather-icon-section" }, _h = { class: "weather-icon" }, yh = {
  key: 0,
  class: "temperature"
}, xh = { class: "temp-value" }, vh = {
  key: 0,
  class: "timestamp"
}, wh = { class: "weather-details" }, kh = {
  key: 0,
  class: "weather-item"
}, Sh = { class: "value" }, Mh = {
  key: 1,
  class: "weather-item"
}, Ch = { class: "value" }, Th = {
  key: 2,
  class: "weather-item"
}, Dh = { class: "value" }, Ph = { key: 0 }, Oh = {
  key: 3,
  class: "weather-item"
}, Ih = { class: "value" }, Lh = {
  key: 4,
  class: "weather-item"
}, Ah = { class: "value" }, Fh = {
  key: 5,
  class: "weather-item"
}, Rh = { class: "value" }, Eh = {
  key: 1,
  class: "forecast-section"
}, zh = { class: "forecast-charts" }, Wh = {
  key: 2,
  class: "refresh-info"
}, Bh = {
  key: 3,
  class: "weather-empty"
}, Hh = /* @__PURE__ */ _e({
  __name: "WeatherWidget",
  props: /* @__PURE__ */ bo({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !1, default: () => ({}) },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    fn((C) => ({
      v71b427be: _t.value
    }));
    const e = i, { id: s } = gn(e), n = mn(i, "configv"), o = Vi(wo.TINY_EMITTER), r = Vi(co), l = xo().params.pageid || "";
    class c extends Bi {
      refresh() {
        M();
      }
    }
    const h = new c();
    t(h);
    const d = () => {
      s?.value && o.emit("widget:WeatherWidget:click", {
        type: "widget:WeatherWidget:click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, u = () => {
      s?.value && o.emit("widget:WeatherWidget:right_click", {
        type: "widget:WeatherWidget:right_click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, f = at(null), p = at(!1), g = at(null), m = at(null), { update: b, callEvent: x, getDataWithOptions: k } = vo(et(() => e.datasourceId), "WeatherData", f), {
      formatTimeRange: S
    } = To(n.value, e.datasourceId), y = et(() => n.value.useTimeRange && (n.value.startTime || n.value.endTime)), M = async (C, w) => {
      if (e.datasourceId) {
        p.value = !0, g.value = null;
        try {
          C !== w && C && w ? b(C, w) : await k();
        } catch (D) {
          g.value = "Failed to load weather data", console.error("Weather widget error:", D);
        } finally {
          p.value = !1;
        }
      }
    }, T = () => {
      m.value && clearInterval(m.value);
      const C = n.value.refreshInterval || 3e5;
      console.log("Weather widget refresh interval (ms):", C, "seconds:", C / 1e3), m.value = setInterval(() => {
        console.log("Weather widget auto-refresh triggered"), M();
      }, C);
    };
    Yt(() => e.datasourceId, (C, w) => {
      M(C, w);
    }), Yt(() => n.value.refreshInterval, T), Yt(() => [n.value.startTime, n.value.endTime], () => {
      y.value;
    }), Yt(() => n.value.thingId, () => {
      M();
    }), Ye(() => {
      r.registerInstance(s.value || "", h, "WeatherWidget", l), T(), M();
    }), hn(() => {
      r.unregisterInstance(s.value || ""), m.value && clearInterval(m.value);
    });
    const v = (C) => {
      if (C.value === null || C.value === void 0 || isNaN(C.value))
        return `--${C.unit || ""}`;
      let w = C.value, D = C.unit || "";
      return (D === "K" || D === "Kelvin") && (w = w - 273.15, D = "°C"), D === "m" && w >= 1e3 && (w = w / 1e3, D = "km"), D === "Pa" && (w = w / 1e3, D = "kPa"), `${Math.round(w * 10) / 10}${D}`;
    }, O = (C) => C == null || isNaN(C) ? "" : ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(C / 45) % 8], R = (C) => C ? new Date(C).toLocaleString() : "", I = (C) => ({
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
    })[C] || "🌤️", E = (C) => {
      if (!C) return "🌤️";
      const w = C.weatherCode?.value || C.wmoCode?.value;
      if (w != null)
        return I(w);
      const D = C.temperature?.value, L = C.humidity?.value, P = C.precipitation?.value, Z = C.cloudCover?.value;
      if (C.windSpeed?.value, P && P > 0)
        return D && D < 2 ? "❄️" : P > 5 ? "🌧️" : "🌦️";
      if (Z) {
        if (Z > 80) return "☁️";
        if (Z > 50) return "⛅";
      }
      return D ? D > 25 ? "☀️" : D > 15 ? "🌤️" : D > 0 ? "🌥️" : "🥶" : L && L > 85 ? "🌫️" : "🌤️";
    }, G = ["forecast3h", "forecast6h", "forecast9h", "forecast12h", "forecast24h", "forecast36h", "forecast48h", "forecast60h", "forecast72h"], ot = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"], $ = (C, w) => {
      const D = `${w}Forecast`, L = C[D];
      return L ? G.filter((P) => L[P]).map((P) => {
        let Z = L[P].value, St = L[P].unit;
        return (St === "K" || St === "Kelvin") && (Z = Z - 273.15, St = "°C"), St === "m" && Z >= 1e3 && (Z = Z / 1e3, St = "km"), St === "Pa" && (Z = Z / 1e3, St = "kPa"), {
          period: P.replace("forecast", "").replace("h", " hours"),
          value: Z,
          unit: St
        };
      }) : [];
    }, U = et(() => B.value ? ot.some((C) => {
      const w = `${C}Forecast`;
      return B.value[w] && Object.keys(B.value[w]).length > 0;
    }) : !1), it = et(() => n.value.selectedForecastParameters ? n.value.selectedForecastParameters : U.value ? ["temperature", "humidity", "pressure", "windSpeed"] : []), B = et(() => {
      if (!f.value) return null;
      if (Array.isArray(f.value) && f.value.length > 0) {
        let D = f.value[0];
        if (n.value.thingId) {
          const L = f.value.find(
            (P) => P.thingId == n.value.thingId || String(P.thingId) == String(n.value.thingId)
          );
          L && (D = L);
        }
        return D;
      }
      if (!f.value?.datastreams) return null;
      let C = f.value.datastreams;
      n.value.thingId && (C = C.filter((D) => D.thing && D.thing["@iot.id"] == n.value.thingId));
      const w = {};
      return C.forEach((D) => {
        if (D.observations && D.observations.length > 0) {
          const L = D.observations[0], P = D.name?.toLowerCase(), Z = D.description?.toLowerCase();
          P?.includes("temperature") || P?.includes("temp") || Z?.includes("temperatur") || P?.includes("lufttemperatur") ? w.temperature = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "°C",
            timestamp: L.phenomenonTime
          } : P?.includes("humidity") || P?.includes("feuchte") || Z?.includes("luftfeuchte") ? w.humidity = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "%",
            timestamp: L.phenomenonTime
          } : P?.includes("pressure") || P?.includes("luftdruck") || Z?.includes("pressure") ? w.pressure = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "hPa",
            timestamp: L.phenomenonTime
          } : P?.includes("wind") && P?.includes("speed") || P?.includes("windgeschwindigkeit") ? w.windSpeed = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "m/s",
            timestamp: L.phenomenonTime
          } : P?.includes("wind") && P?.includes("direction") || P?.includes("windrichtung") ? w.windDirection = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "°",
            timestamp: L.phenomenonTime
          } : P?.includes("precipitation") || P?.includes("niederschlag") || P?.includes("rain") || P?.includes("regen") ? w.precipitation = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "mm",
            timestamp: L.phenomenonTime
          } : P?.includes("visibility") || P?.includes("sicht") ? w.visibility = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "m",
            timestamp: L.phenomenonTime
          } : (P?.includes("cloud") || P?.includes("wolken") || P?.includes("bedeckung")) && (w.cloudCover = {
            value: L.result,
            unit: D.unitOfMeasurement?.symbol || "%",
            timestamp: L.phenomenonTime
          });
        }
      }), w;
    }), Nt = (C) => {
      const w = {
        temperature: "#e74c3c",
        humidity: "#3498db",
        pressure: "#2ecc71",
        windSpeed: "#f39c12",
        windDirection: "#9b59b6",
        precipitation: "#2980b9",
        visibility: "#1abc9c",
        cloudCover: "#95a5a6"
      };
      return n.value.chartColors?.[C] || w[C] || "#3498db";
    }, _t = et(() => "var(--title-color, #495057)"), yt = et(() => {
      if (!f.value?.things || f.value.things.length === 0) return null;
      let C = f.value.things[0];
      if (n.value.thingId) {
        const D = f.value.things.find((L) => L["@iot.id"] == n.value.thingId);
        D && (C = D);
      }
      const w = C.Locations?.[0];
      return {
        name: C.name || "Unknown Location",
        description: C.description,
        coordinates: w?.location ? {
          latitude: w.location.coordinates?.[1],
          longitude: w.location.coordinates?.[0]
        } : void 0
      };
    });
    return (C, w) => (z(), W("div", {
      class: "weather-widget",
      onClick: d,
      onContextmenu: _o(u, ["prevent"])
    }, [
      p.value ? (z(), W("div", hh, [...w[0] || (w[0] = [
        _("div", { class: "spinner" }, null, -1),
        _("p", null, "Loading weather data...", -1)
      ])])) : g.value ? (z(), W("div", dh, [
        _("p", null, Y(g.value), 1)
      ])) : B.value ? (z(), W("div", uh, [
        yt.value ? (z(), W("div", fh, [
          _("h3", null, Y(yt.value.name), 1),
          yt.value.description ? (z(), W("p", gh, Y(yt.value.description), 1)) : K("", !0),
          y.value ? (z(), W("div", ph, [
            _("small", null, Y(jt(S)()), 1)
          ])) : K("", !0)
        ])) : K("", !0),
        _("div", mh, [
          _("div", bh, [
            _("span", _h, Y(E(B.value)), 1)
          ]),
          B.value.temperature ? (z(), W("div", yh, [
            _("span", xh, Y(v(B.value.temperature)), 1),
            B.value.temperature.timestamp ? (z(), W("div", vh, [
              _("small", null, Y(R(B.value.temperature.timestamp)), 1)
            ])) : K("", !0)
          ])) : K("", !0),
          _("div", wh, [
            B.value.humidity ? (z(), W("div", kh, [
              w[1] || (w[1] = _("span", { class: "label" }, "Humidity:", -1)),
              _("span", Sh, Y(v(B.value.humidity)), 1)
            ])) : K("", !0),
            B.value.pressure ? (z(), W("div", Mh, [
              w[2] || (w[2] = _("span", { class: "label" }, "Pressure:", -1)),
              _("span", Ch, Y(v(B.value.pressure)), 1)
            ])) : K("", !0),
            B.value.windSpeed ? (z(), W("div", Th, [
              w[3] || (w[3] = _("span", { class: "label" }, "Wind:", -1)),
              _("span", Dh, [
                Lt(Y(v(B.value.windSpeed)) + " ", 1),
                B.value.windDirection ? (z(), W("span", Ph, Y(O(B.value.windDirection.value)), 1)) : K("", !0)
              ])
            ])) : K("", !0),
            B.value.precipitation ? (z(), W("div", Oh, [
              w[4] || (w[4] = _("span", { class: "label" }, "Precipitation:", -1)),
              _("span", Ih, Y(v(B.value.precipitation)), 1)
            ])) : K("", !0),
            B.value.visibility ? (z(), W("div", Lh, [
              w[5] || (w[5] = _("span", { class: "label" }, "Visibility:", -1)),
              _("span", Ah, Y(v(B.value.visibility)), 1)
            ])) : K("", !0),
            B.value.cloudCover ? (z(), W("div", Fh, [
              w[6] || (w[6] = _("span", { class: "label" }, "Cloud Cover:", -1)),
              _("span", Rh, Y(v(B.value.cloudCover)), 1)
            ])) : K("", !0)
          ])
        ]),
        n.value.showForecast && U.value ? (z(), W("div", Eh, [
          w[7] || (w[7] = _("h3", { class: "forecast-title" }, "Weather Forecast", -1)),
          _("div", zh, [
            (z(!0), W(Fe, null, Re(it.value, (D) => (z(), pn(rh, {
              key: D,
              data: $(B.value, D),
              parameter: D,
              color: Nt(D),
              fontColor: _t.value,
              gridColor: n.value.gridColor || "#e0e0e0"
            }, null, 8, ["data", "parameter", "color", "fontColor", "gridColor"]))), 128))
          ])
        ])) : K("", !0),
        n.value.refreshInterval ? (z(), W("div", Wh, [
          _("small", null, "Auto-refresh every " + Y(Math.round(n.value.refreshInterval / 6e4)) + " minutes", 1)
        ])) : K("", !0)
      ])) : (z(), W("div", Bh, [...w[8] || (w[8] = [
        _("p", null, "No weather data available", -1)
      ])]))
    ], 32));
  }
}), Nh = /* @__PURE__ */ Wi(Hh, [["__scopeId", "data-v-27ce0413"]]), Vh = { class: "weather-settings" }, $h = { class: "settings-section" }, jh = { class: "time-mode-selector" }, Uh = {
  key: 0,
  class: "time-range-buttons"
}, Yh = {
  key: 1,
  class: "time-inputs"
}, Xh = { class: "form-group" }, Kh = { class: "form-group" }, qh = { class: "settings-section" }, Gh = { class: "form-group" }, Zh = { class: "settings-section" }, Qh = { class: "form-group" }, Jh = {
  key: 0,
  class: "forecast-configuration"
}, td = { class: "form-group" }, ed = { class: "checkbox-grid" }, id = ["value"], sd = { class: "form-group" }, nd = { class: "checkbox-grid" }, od = ["value"], rd = {
  key: 0,
  class: "settings-section"
}, ad = { class: "color-settings" }, ld = ["for"], cd = ["id", "onUpdate:modelValue"], hd = { class: "color-setting-item" }, dd = /* @__PURE__ */ _e({
  __name: "WeatherWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = mn(i, "modelValue"), e = et(() => t.value), s = at(
      e.value.manualTimeSelection ? "manual" : e.value.useTimeRange ? "range" : "auto"
    );
    Yt(s, (l) => {
      t.value.useTimeRange = l === "range", t.value.manualTimeSelection = l === "manual", l === "auto" && (t.value.startTime = "", t.value.endTime = "");
    }), et(() => (e.value.thingId || "").trim() !== "");
    const n = () => {
      const l = /* @__PURE__ */ new Date();
      t.value.endTime = l.toISOString().slice(0, 16);
      const c = new Date(l.getTime() - 3600 * 1e3);
      t.value.startTime = c.toISOString().slice(0, 16);
    }, o = (l) => {
      const c = /* @__PURE__ */ new Date();
      t.value.endTime = c.toISOString().slice(0, 16);
      const h = new Date(c.getTime() - l * 60 * 60 * 1e3);
      t.value.startTime = h.toISOString().slice(0, 16);
    }, r = [
      { key: "temperature", label: "Temperature" },
      { key: "humidity", label: "Humidity" },
      { key: "pressure", label: "Pressure" },
      { key: "windSpeed", label: "Wind Speed" },
      { key: "windDirection", label: "Wind Direction" },
      { key: "precipitation", label: "Precipitation" },
      { key: "visibility", label: "Visibility" },
      { key: "cloudCover", label: "Cloud Cover" }
    ], a = [
      { key: "forecast12h", label: "12 hours" },
      { key: "forecast24h", label: "24 hours" },
      { key: "forecast36h", label: "36 hours" },
      { key: "forecast48h", label: "48 hours" },
      { key: "forecast60h", label: "60 hours" },
      { key: "forecast72h", label: "72 hours" }
    ];
    return Ye(() => {
      t.value.selectedForecastParameters || (t.value.selectedForecastParameters = ["temperature", "humidity", "pressure", "windSpeed"]), t.value.forecastPeriods || (t.value.forecastPeriods = ["forecast12h", "forecast24h", "forecast48h", "forecast72h"]), t.value.showForecast === void 0 && (t.value.showForecast = !1), t.value.chartColors || (t.value.chartColors = {
        temperature: "#e74c3c",
        humidity: "#3498db",
        pressure: "#2ecc71",
        windSpeed: "#f39c12",
        windDirection: "#9b59b6",
        precipitation: "#2980b9",
        visibility: "#1abc9c",
        cloudCover: "#95a5a6"
      }), t.value.gridColor || (t.value.gridColor = "#e0e0e0");
    }), (l, c) => (z(), W("div", Vh, [
      c[33] || (c[33] = _("div", { class: "settings-section" }, [
        _("h4", null, "Data Source Configuration")
      ], -1)),
      _("div", $h, [
        c[19] || (c[19] = _("h4", null, "Time Range Configuration", -1)),
        _("div", jh, [
          _("label", null, [
            dt(_("input", {
              type: "radio",
              value: "auto",
              "onUpdate:modelValue": c[0] || (c[0] = (h) => s.value = h)
            }, null, 512), [
              [ei, s.value]
            ]),
            c[14] || (c[14] = Lt(" Latest Data ", -1))
          ]),
          _("label", null, [
            dt(_("input", {
              type: "radio",
              value: "range",
              "onUpdate:modelValue": c[1] || (c[1] = (h) => s.value = h)
            }, null, 512), [
              [ei, s.value]
            ]),
            c[15] || (c[15] = Lt(" Time Range ", -1))
          ]),
          _("label", null, [
            dt(_("input", {
              type: "radio",
              value: "manual",
              "onUpdate:modelValue": c[2] || (c[2] = (h) => s.value = h)
            }, null, 512), [
              [ei, s.value]
            ]),
            c[16] || (c[16] = Lt(" Manual Selection ", -1))
          ])
        ]),
        s.value === "range" ? (z(), W("div", Uh, [
          _("button", {
            type: "button",
            onClick: c[3] || (c[3] = (h) => o(1)),
            class: "btn btn-sm"
          }, " Last Hour "),
          _("button", {
            type: "button",
            onClick: c[4] || (c[4] = (h) => o(6)),
            class: "btn btn-sm"
          }, " Last 6 Hours "),
          _("button", {
            type: "button",
            onClick: c[5] || (c[5] = (h) => o(24)),
            class: "btn btn-sm"
          }, " Last 24 Hours "),
          _("button", {
            type: "button",
            onClick: c[6] || (c[6] = (h) => o(168)),
            class: "btn btn-sm"
          }, " Last Week ")
        ])) : K("", !0),
        s.value === "manual" || s.value === "range" ? (z(), W("div", Yh, [
          _("div", Xh, [
            c[17] || (c[17] = _("label", { for: "startTime" }, "Start Time:", -1)),
            dt(_("input", {
              id: "startTime",
              type: "datetime-local",
              "onUpdate:modelValue": c[7] || (c[7] = (h) => t.value.startTime = h),
              class: "form-control"
            }, null, 512), [
              [xe, t.value.startTime]
            ])
          ]),
          _("div", Kh, [
            c[18] || (c[18] = _("label", { for: "endTime" }, "End Time:", -1)),
            dt(_("input", {
              id: "endTime",
              type: "datetime-local",
              "onUpdate:modelValue": c[8] || (c[8] = (h) => t.value.endTime = h),
              class: "form-control"
            }, null, 512), [
              [xe, t.value.endTime]
            ])
          ]),
          _("button", {
            type: "button",
            onClick: n,
            class: "btn btn-sm btn-secondary"
          }, " Set to Current Time ")
        ])) : K("", !0)
      ]),
      _("div", qh, [
        c[22] || (c[22] = _("h4", null, "Refresh Settings", -1)),
        _("div", Gh, [
          c[21] || (c[21] = _("label", { for: "refreshInterval" }, "Refresh Interval (seconds):", -1)),
          dt(_("select", {
            id: "refreshInterval",
            "onUpdate:modelValue": c[9] || (c[9] = (h) => t.value.refreshInterval = h),
            class: "form-control"
          }, [...c[20] || (c[20] = [
            _("option", { value: 6e4 }, "1 minute", -1),
            _("option", { value: 3e5 }, "5 minutes", -1),
            _("option", { value: 6e5 }, "10 minutes", -1),
            _("option", { value: 18e5 }, "30 minutes", -1),
            _("option", { value: 36e5 }, "1 hour", -1)
          ])], 512), [
            [yo, t.value.refreshInterval]
          ])
        ])
      ]),
      _("div", Zh, [
        c[29] || (c[29] = _("h4", null, "Forecast Settings", -1)),
        _("div", Qh, [
          _("label", null, [
            dt(_("input", {
              type: "checkbox",
              "onUpdate:modelValue": c[10] || (c[10] = (h) => t.value.showForecast = h)
            }, null, 512), [
              [ii, t.value.showForecast]
            ]),
            c[23] || (c[23] = Lt(" Show Forecast Data ", -1))
          ]),
          c[24] || (c[24] = _("small", { class: "form-text" }, " Enable forecast tabs to display weather predictions for different time periods ", -1))
        ]),
        t.value.showForecast ? (z(), W("div", Jh, [
          _("div", td, [
            c[25] || (c[25] = _("label", null, "Forecast Parameters:", -1)),
            _("div", ed, [
              (z(), W(Fe, null, Re(r, (h) => _("label", {
                key: h.key,
                class: "checkbox-item"
              }, [
                dt(_("input", {
                  type: "checkbox",
                  value: h.key,
                  "onUpdate:modelValue": c[11] || (c[11] = (d) => t.value.selectedForecastParameters = d)
                }, null, 8, id), [
                  [ii, t.value.selectedForecastParameters]
                ]),
                Lt(" " + Y(h.label), 1)
              ])), 64))
            ]),
            c[26] || (c[26] = _("small", { class: "form-text" }, " Select which weather parameters to show in forecast tabs ", -1))
          ]),
          _("div", sd, [
            c[27] || (c[27] = _("label", null, "Forecast Periods:", -1)),
            _("div", nd, [
              (z(), W(Fe, null, Re(a, (h) => _("label", {
                key: h.key,
                class: "checkbox-item"
              }, [
                dt(_("input", {
                  type: "checkbox",
                  value: h.key,
                  "onUpdate:modelValue": c[12] || (c[12] = (d) => t.value.forecastPeriods = d)
                }, null, 8, od), [
                  [ii, t.value.forecastPeriods]
                ]),
                Lt(" " + Y(h.label), 1)
              ])), 64))
            ]),
            c[28] || (c[28] = _("small", { class: "form-text" }, " Select which forecast time periods to include in charts ", -1))
          ])
        ])) : K("", !0)
      ]),
      t.value.showForecast ? (z(), W("div", rd, [
        c[31] || (c[31] = _("h4", null, "Chart Colors", -1)),
        _("div", ad, [
          (z(), W(Fe, null, Re(r, (h) => _("div", {
            key: h.key,
            class: "color-setting-item"
          }, [
            _("label", {
              for: `color-${h.key}`
            }, Y(h.label) + ":", 9, ld),
            dt(_("input", {
              id: `color-${h.key}`,
              type: "color",
              "onUpdate:modelValue": (d) => t.value.chartColors[h.key] = d,
              class: "color-picker"
            }, null, 8, cd), [
              [xe, t.value.chartColors[h.key]]
            ]),
            _("span", {
              class: "color-preview",
              style: $i({ backgroundColor: t.value.chartColors?.[h.key] })
            }, null, 4)
          ])), 64)),
          _("div", hd, [
            c[30] || (c[30] = _("label", { for: "grid-color" }, "Grid Color:", -1)),
            dt(_("input", {
              id: "grid-color",
              type: "color",
              "onUpdate:modelValue": c[13] || (c[13] = (h) => t.value.gridColor = h),
              class: "color-picker"
            }, null, 512), [
              [xe, t.value.gridColor]
            ]),
            _("span", {
              class: "color-preview",
              style: $i({ backgroundColor: t.value.gridColor })
            }, null, 4)
          ])
        ]),
        c[32] || (c[32] = _("small", { class: "form-text" }, " Choose colors for each weather parameter in forecast charts and grid lines ", -1))
      ])) : K("", !0)
    ]));
  }
}), ud = /* @__PURE__ */ Wi(dd, [["__scopeId", "data-v-b9894535"]]), fd = [
  { name: "Weather Clicked", type: "click", description: "Triggered when the weather widget is clicked", payloadType: ji },
  { name: "Weather Right Clicked", type: "right_click", description: "Triggered when the weather widget is right-clicked", payloadType: ji }
];
var gd = Object.defineProperty, pd = Object.getOwnPropertyDescriptor, Hi = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? pd(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && gd(t, e, n), n;
}, ln = (i, t) => (e, s) => t(e, s, i);
const Ut = "WeatherWidget";
let Ue = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Ut;
  component = Nh;
  settingsComponent = ud;
  supportedDSTypes = ["OGCSTAData"];
  icon = Co;
  name = "Weather";
  register() {
    this.events.registerWidget(Ut, fd), this.actions.registerWidgetType(Ut, Bi, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Ut), this.actions.unregisterWidgetType(Ut);
  }
};
Hi([
  fo()
], Ue.prototype, "register", 1);
Hi([
  go()
], Ue.prototype, "unregister", 1);
Ue = Hi([
  po({
    service: [Mo],
    properties: { "widget.type": Ut }
  }),
  ln(0, Ni(ho)),
  ln(1, Ni(uo))
], Ue);
export {
  Nh as WeatherWidget,
  Ue as WeatherWidgetProvider,
  ud as WeatherWidgetSettings
};
