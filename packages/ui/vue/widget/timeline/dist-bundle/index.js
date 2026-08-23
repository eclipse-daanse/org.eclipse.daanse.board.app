(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-82423c81]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-82423c81]{overflow:hidden;position:relative;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-82423c81]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-82423c81]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-82423c81]:hover{filter:brightness(1.1)}.range-strip[data-v-82423c81]:active{cursor:grabbing}.timeline-knob[data-v-82423c81]{position:absolute;top:50%;width:24px;height:24px;background:var(--va-primary);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-82423c81]:hover{background:var(--va-primary-dark);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-82423c81]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-82423c81]{left:0;z-index:4}.fixed-knob[data-v-82423c81]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-82423c81]:hover{transform:translate(-50%,-50%)!important;background:var(--va-background-border)!important}.end-knob[data-v-82423c81]{right:-24px;z-index:4}.time-axis[data-v-82423c81]{position:relative;height:30px;background:var(--va-background-secondary);border-top:1px solid var(--va-background-border);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-82423c81]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-82423c81]{width:1px;height:8px;background:var(--va-text-secondary);margin-top:2px}.tick-label[data-v-82423c81]{font-size:.7rem;color:var(--va-text-secondary);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-82423c81]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:6px;padding:.75rem}.time-display[data-v-82423c81]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-82423c81]{font-size:.8rem;font-weight:500;color:var(--va-text-secondary)}.time-value[data-v-82423c81]{font-size:.9rem;font-weight:600;color:var(--va-text-primary);word-wrap:break-word}.controls[data-v-82423c81]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-82423c81]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--va-primary));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-82423c81]:hover:not(:disabled){background:var(--va-primary-dark);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-82423c81]:disabled{background:var(--va-background-border);color:var(--va-text-secondary);cursor:not-allowed;transform:none}.play-button.playing[data-v-82423c81]{background:var(--play-button-playing, #ff6b35);animation:pulse-82423c81 2s infinite}.play-button.playing[data-v-82423c81]:hover{filter:brightness(.9)}@keyframes pulse-82423c81{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-82423c81]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-82423c81]{font-weight:500;color:var(--va-text-primary);min-width:fit-content}.speed-control select[data-v-82423c81]{padding:.5rem;border:1px solid var(--va-background-border);border-radius:4px;background:var(--va-background-primary);color:var(--va-text-primary);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-82423c81]{flex-direction:column;gap:.75rem}.time-display[data-v-82423c81]{text-align:left}.controls[data-v-82423c81]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-82423c81]{width:28px;height:28px}.tick-label[data-v-82423c81]{font-size:.6rem}.timeline-container[data-v-82423c81]{min-height:70px}.timeline-track[data-v-82423c81]{height:35px}}.settings-container[data-v-bf68db5d]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-bf68db5d]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-bf68db5d]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.datetime-group[data-v-bf68db5d]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-bf68db5d]>*{flex:1;min-width:0}.relative-time-config[data-v-bf68db5d]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--va-background-element);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-bf68db5d]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-bf68db5d]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-bf68db5d]{flex:2;min-width:80px}.relative-time-preview[data-v-bf68db5d]{font-size:.85rem;color:var(--va-primary);padding:.5rem;background:var(--va-background-secondary);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-bf68db5d]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { EVENT_ACTIONS_REGISTRY as lt, EVENT_REGISTRY_ID as it, EVENT_ACTIONS_REGISTRY_ID as ot } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as rt, deactivate as st, component as ut, inject as Fe } from "@eclipse-daanse/tsm";
import { defineComponent as Ge, mergeModels as vt, inject as de, toRefs as dt, useModel as qe, ref as f, computed as _, watch as pe, onMounted as Ze, onUnmounted as ct, createElementBlock as z, openBlock as C, withModifiers as We, createElementVNode as u, createCommentVNode as ae, normalizeStyle as ue, Fragment as je, renderList as mt, toDisplayString as N, normalizeClass as gt, withDirectives as pt, createStaticVNode as ft, vModelSelect as bt, resolveComponent as te, createVNode as V, withCtx as Ne, createBlock as Ae } from "vue";
import { useRoute as St } from "vue-router";
import { VariableWrapper as ye } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Je } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as De, WidgetActionInterface as Tt, Payload as Ye } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Mt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: wt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var ht = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, Ee = (D, h, v, g) => {
  for (var e = Vt(h, v), y = D.length - 1, j; y >= 0; y--)
    (j = D[y]) && (e = j(h, v, e) || e);
  return e && ht(h, v, e), e;
};
class ce extends Tt {
  zoomIn() {
    throw new Error("zoomIn not implemented");
  }
  zoomOut() {
    throw new Error("zoomOut not implemented");
  }
  setDateRange(h, v) {
    throw new Error("setDateRange not implemented");
  }
  jumpToNow() {
    throw new Error("jumpToNow not implemented");
  }
}
Ee([
  De({ eventType: "timeline.zoomIn" })
], ce.prototype, "zoomIn");
Ee([
  De({ eventType: "timeline.zoomOut" })
], ce.prototype, "zoomOut");
Ee([
  De({ eventType: "timeline.setDateRange" })
], ce.prototype, "setDateRange");
Ee([
  De({ eventType: "timeline.jumpToNow" })
], ce.prototype, "jumpToNow");
const yt = { class: "timeline-container" }, xt = ["title"], Dt = {
  key: 1,
  class: "timeline-knob start-knob fixed-knob",
  title: "Startzeit (fixiert)"
}, Et = { class: "time-axis" }, kt = { class: "tick-label" }, It = {
  key: 0,
  class: "time-info"
}, _t = { class: "time-display" }, Ct = { class: "time-value" }, Ot = { class: "time-display" }, Rt = { class: "time-value" }, Pt = { class: "time-display" }, zt = { class: "time-value" }, $t = {
  key: 1,
  class: "controls"
}, Ut = ["disabled"], Wt = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, Nt = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, jt = { class: "speed-control" }, Kt = /* @__PURE__ */ Ge({
  __name: "TimelineWidget",
  props: /* @__PURE__ */ vt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(D, { expose: h }) {
    de("i18n");
    const v = D, { id: g } = dt(v), e = qe(D, "configv"), y = de(wt.TINY_EMITTER), j = de(lt), ke = St().params.pageid || "";
    class Ie extends ce {
      zoomIn() {
        const a = new Date(e.value.rangeStart || Date.now() - 864e5), s = new Date(e.value.rangeEnd || Date.now()), o = (s.getTime() - a.getTime()) * 0.25, c = new Date(a.getTime() + o), m = new Date(s.getTime() - o);
        m.getTime() - c.getTime() > 6e4 && (e.value = { ...e.value, rangeStart: c.toISOString(), rangeEnd: m.toISOString() });
      }
      zoomOut() {
        const a = new Date(e.value.rangeStart || Date.now() - 864e5), s = new Date(e.value.rangeEnd || Date.now()), o = (s.getTime() - a.getTime()) * 0.5, c = new Date(Math.max(
          a.getTime() - o,
          new Date(e.value.timelineMin || 0).getTime()
        )), m = new Date(Math.min(
          s.getTime() + o,
          new Date(e.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        e.value = { ...e.value, rangeStart: c.toISOString(), rangeEnd: m.toISOString() };
      }
      setDateRange(a, s) {
        e.value = { ...e.value, rangeStart: a, rangeEnd: s };
      }
      jumpToNow() {
        const a = /* @__PURE__ */ new Date(), s = new Date(e.value.rangeEnd || a).getTime() - new Date(e.value.rangeStart || a).getTime(), i = a, o = new Date(a.getTime() - s);
        e.value = { ...e.value, rangeStart: o.toISOString(), rangeEnd: i.toISOString() };
      }
    }
    const be = new Ie();
    h(be);
    const _e = () => {
      g?.value && y.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, t = () => {
      g?.value && y.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, p = f(null), F = f(new ye("")), A = f(new ye("")), O = f(!1), $ = f(e.value.playbackSpeed || 1), b = f(!1), Y = f(), R = f(null), K = f(null), P = f(null);
    let Z = null, me = 0;
    const Se = new Date(Date.now() - 720 * 60 * 60 * 1e3), we = new Date(Date.now() + 10080 * 60 * 1e3), Te = new Date(Date.now() - 1440 * 60 * 1e3), ge = /* @__PURE__ */ new Date(), Ce = (n, a) => {
      const s = /* @__PURE__ */ new Date(), i = new Date(s), o = Number(n) || 24;
      switch (typeof a == "object" && a !== null ? a.value : a) {
        case "hours":
          i.setHours(i.getHours() - o);
          break;
        case "days":
          i.setDate(i.getDate() - o);
          break;
        case "weeks":
          i.setDate(i.getDate() - o * 7);
          break;
        case "months":
          i.setMonth(i.getMonth() - o);
          break;
        case "years":
          i.setFullYear(i.getFullYear() - o);
          break;
        default:
          i.setHours(i.getHours() - o);
      }
      return { start: i, end: s };
    }, Me = () => {
      if (!e.value.relativeTime?.enabled) return;
      const { start: n, end: a } = Ce(
        e.value.relativeTime.offset,
        e.value.relativeTime.unit
      );
      e.value.timelineMin = n.toISOString(), e.value.timelineMax = a.toISOString();
      const i = (a.getTime() - n.getTime()) * 0.2, o = a, c = new Date(a.getTime() - i);
      if (e.value.rangeStart = c.toISOString(), e.value.rangeEnd = o.toISOString(), e.value.rangeStartVariable && p.value) {
        const m = p.value.getVariable(e.value.rangeStartVariable);
        m && (m.value = c.toISOString());
      }
      if (e.value.rangeEndVariable && p.value) {
        const m = p.value.getVariable(e.value.rangeEndVariable);
        m && (m.value = o.toISOString());
      }
    }, X = _(() => e.value.timelineMin ? new Date(e.value.timelineMin) : Se), H = _(() => e.value.timelineMax ? new Date(e.value.timelineMax) : we), U = _(() => {
      if (e.value.rangeStartVariable && p.value) {
        const n = p.value.getVariable(e.value.rangeStartVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return e.value.rangeStart ? new Date(e.value.rangeStart) : Te;
    }), I = _(() => {
      if (e.value.rangeEndVariable && p.value) {
        const n = p.value.getVariable(e.value.rangeEndVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return e.value.rangeEnd ? new Date(e.value.rangeEnd) : ge;
    }), ne = _(() => {
      if (e.value.fixStartKnob)
        return 0;
      if (R.value !== null)
        return R.value;
      const n = X.value.getTime(), a = H.value.getTime(), s = U.value.getTime();
      return Math.max(0, Math.min(100, (s - n) / (a - n) * 100));
    }), he = _(() => {
      if (K.value !== null)
        return K.value;
      const n = X.value.getTime(), a = H.value.getTime(), s = I.value.getTime();
      return Math.max(0, Math.min(100, (s - n) / (a - n) * 100));
    }), Oe = _(() => P.value ? {
      ...P.value,
      background: Ve(0.5),
      borderColor: e.value.rangeStripColor || "#d17600"
    } : {
      left: ne.value + "%",
      width: he.value - ne.value + "%",
      background: Ve(0.5),
      borderColor: e.value.rangeStripColor || "#d17600"
    }), Ve = (n) => {
      const s = (e.value.rangeStripColor || "#d17600").replace("#", ""), i = parseInt(s.substr(0, 2), 16), o = parseInt(s.substr(2, 2), 16), c = parseInt(s.substr(4, 2), 16);
      return `rgba(${i}, ${o}, ${c}, ${n})`;
    }, w = _(() => {
      const n = e.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: Re(n)
      };
    }), Re = (n) => {
      const a = n.replace("#", ""), s = parseInt(a.substr(0, 2), 16), i = parseInt(a.substr(2, 2), 16), o = parseInt(a.substr(4, 2), 16), c = 0.6, m = Math.min(255, Math.round(s + (255 - s) * c)), M = Math.min(255, Math.round(i + (255 - i) * c)), x = Math.min(255, Math.round(o + (255 - o) * c));
      return `rgb(${m}, ${M}, ${x})`;
    }, Pe = () => {
      switch (e.value.stepSize || "hour") {
        case "minute":
          return 60 * 1e3;
        // 1 Minute = 60 Sekunden
        case "hour":
          return 3600 * 1e3;
        // 1 Stunde = 3600 Sekunden
        case "day":
          return 1440 * 60 * 1e3;
        // 1 Tag = 86400 Sekunden
        case "week":
          return 10080 * 60 * 1e3;
        // 1 Woche
        case "month":
          return 720 * 60 * 60 * 1e3;
        // 1 Monat (ca. 30 Tage)
        default:
          return 3600 * 1e3;
      }
    }, ze = _(() => {
      const n = e.value.rangeStripColor || "#d17600", a = r(n);
      return {
        "--play-button-bg": n,
        "--play-button-playing": a
      };
    }), r = (n) => {
      const a = n.replace("#", ""), s = parseInt(a.substr(0, 2), 16), i = parseInt(a.substr(2, 2), 16), o = parseInt(a.substr(4, 2), 16), c = 0.8, M = Math.min(255, Math.round(s * c * 1.1)), x = Math.round(i * c), W = Math.round(o * c);
      return `rgb(${M}, ${x}, ${W})`;
    }, l = _(() => I.value.getTime() >= H.value.getTime()), S = _(() => he.value - ne.value >= 10 ? !1 : ne.value > 50), T = _(() => {
      const n = [], a = X.value.getTime(), i = H.value.getTime() - a, o = 8;
      for (let c = 0; c <= o; c++) {
        const m = a + i / o * c, M = new Date(m), x = c / o * 100, W = M.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        n.push({
          timestamp: M.toISOString(),
          position: x,
          label: W
        });
      }
      return n;
    }), k = (n) => n.toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), J = () => {
      const n = I.value.getTime() - U.value.getTime(), a = Math.floor(n / (1e3 * 60 * 60)), s = Math.floor(a / 24);
      return s > 0 ? `${s}d ${a % 24}h` : a > 0 ? `${a}h` : `${Math.floor(n / (1e3 * 60))}min`;
    }, E = () => Y.value?.getBoundingClientRect();
    let B = null;
    const le = (n, a, s = !1) => {
      const i = e.value.fixStartKnob ? X.value : n || U.value, o = a || I.value;
      if (!i || isNaN(i.getTime()) || !o || isNaN(o.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: i, actualEnd: o });
        return;
      }
      const c = () => {
        if (e.value = {
          ...e.value,
          rangeStart: i.toISOString(),
          rangeEnd: o.toISOString(),
          playbackSpeed: $.value
        }, e.value.rangeStartVariable && p.value) {
          const m = p.value.getVariable(e.value.rangeStartVariable);
          m && (m.value = i.toISOString());
        }
        if (e.value.rangeEndVariable && p.value) {
          const m = p.value.getVariable(e.value.rangeEndVariable);
          m && (m.value = o.toISOString());
        }
      };
      s ? (B && (clearTimeout(B), B = null), c()) : (B && clearTimeout(B), B = setTimeout(c, 300));
    }, d = (n) => {
      if (e.value.fixStartKnob)
        return;
      n.preventDefault(), b.value = !0;
      const a = E();
      if (!a) return;
      const s = n.clientX, i = X.value.getTime(), o = H.value.getTime(), c = (o - i) / a.width, m = U.value.getTime(), M = I.value.getTime(), x = o - i;
      let W = m;
      const G = (ie) => {
        if (!b.value) return;
        const oe = ie.clientX - s;
        let L = m + oe * c;
        L = Math.max(i, Math.min(L, M - 6e4)), W = L;
        const Q = Math.max(0, Math.min(100, (L - i) / x * 100)), re = Math.max(0, Math.min(100, (M - i) / x * 100));
        R.value = Q, P.value = {
          left: Q + "%",
          width: re - Q + "%"
        };
      }, q = () => {
        b.value = !1, R.value = null, P.value = null, le(new Date(W), new Date(M), !0), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", q);
      };
      document.addEventListener("mousemove", G), document.addEventListener("mouseup", q);
    }, He = (n) => {
      n.preventDefault(), b.value = !0;
      const a = E();
      if (!a) return;
      const s = n.clientX, i = X.value.getTime(), o = H.value.getTime(), c = (o - i) / a.width, m = I.value.getTime(), M = U.value.getTime(), x = o - i;
      let W = m;
      const G = (ie) => {
        if (!b.value) return;
        const oe = ie.clientX - s;
        let L = m + oe * c;
        L = Math.min(o, Math.max(L, M + 6e4)), W = L;
        const Q = Math.max(0, Math.min(100, (M - i) / x * 100)), re = Math.max(0, Math.min(100, (L - i) / x * 100));
        K.value = re, P.value = {
          left: Q + "%",
          width: re - Q + "%"
        };
      }, q = () => {
        b.value = !1, K.value = null, P.value = null, le(new Date(M), new Date(W), !0), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", q);
      };
      document.addEventListener("mousemove", G), document.addEventListener("mouseup", q);
    }, et = (n) => {
      if (e.value.fixStartKnob) {
        He(n);
        return;
      }
      n.preventDefault(), b.value = !0;
      const a = E();
      if (!a) return;
      const s = n.clientX, i = X.value.getTime(), o = H.value.getTime(), c = (o - i) / a.width, m = U.value.getTime(), M = I.value.getTime(), x = M - m, W = o - i;
      let G = m, q = M;
      const ie = (L) => {
        if (!b.value) return;
        const re = (L.clientX - s) * c;
        let ee = m + re, se = ee + x;
        ee < i && (ee = i, se = ee + x), se > o && (se = o, ee = se - x), G = ee, q = se;
        const Ue = Math.max(0, Math.min(100, (ee - i) / W * 100)), Be = Math.max(0, Math.min(100, (se - i) / W * 100));
        R.value = Ue, K.value = Be, P.value = {
          left: Ue + "%",
          width: Be - Ue + "%"
        };
      }, oe = () => {
        b.value = !1, R.value = null, K.value = null, P.value = null, le(new Date(G), new Date(q), !0), document.removeEventListener("mousemove", ie), document.removeEventListener("mouseup", oe);
      };
      document.addEventListener("mousemove", ie), document.addEventListener("mouseup", oe);
    }, tt = () => {
      O.value = !O.value, O.value ? at() : $e();
    }, at = () => {
      me = performance.now(), Le();
    }, $e = () => {
      Z && (cancelAnimationFrame(Z), Z = null);
    }, Le = () => {
      if (!O.value) return;
      const n = performance.now(), a = n - me, s = 1e3 / $.value;
      if (a >= s) {
        const i = U.value.getTime(), o = I.value.getTime(), c = o - i, m = Pe();
        console.log("Playback step:", {
          stepSize: e.value.stepSize,
          stepSizeMs: m,
          currentStart: new Date(i).toISOString(),
          currentEnd: new Date(o).toISOString(),
          rangeDuration: c
        });
        const M = i + m, x = M + c;
        if (console.log("New times:", {
          newStart: new Date(M).toISOString(),
          newEnd: new Date(x).toISOString(),
          timelineMax: H.value.toISOString()
        }), x >= H.value.getTime()) {
          $e(), O.value = !1;
          return;
        }
        le(new Date(M), new Date(x)), me = n;
      }
      Z = requestAnimationFrame(Le);
    };
    pe(() => e.value.rangeStartVariable, (n) => {
      if (n && p.value) {
        const a = p.value.getVariable(n);
        a && F.value.setTo(a);
      }
    }), pe(() => e.value.rangeEndVariable, (n) => {
      if (n && p.value) {
        const a = p.value.getVariable(n);
        a && A.value.setTo(a);
      }
    }), pe(() => F.value.value, (n) => {
      n && e.value.rangeStartVariable && new Date(n).getTime() !== U.value.getTime() && (e.value.rangeStart = n);
    }), pe(() => A.value.value, (n) => {
      n && e.value.rangeEndVariable && new Date(n).getTime() !== I.value.getTime() && (e.value.rangeEnd = n);
    });
    const nt = de(Je);
    return Ze(() => {
      g?.value && j.registerInstance(g.value, be, "TimelineWidget", ke);
      try {
        if (p.value = nt ?? null, !p.value) throw new Error("VariableRepository not provided");
      } catch (n) {
        console.warn("VariableRepository not found in container:", n);
      }
      if (e.value.timelineMin || (e.value.timelineMin = Se.toISOString()), e.value.timelineMax || (e.value.timelineMax = we.toISOString()), e.value.rangeStart || (e.value.rangeStart = Te.toISOString()), e.value.rangeEnd || (e.value.rangeEnd = ge.toISOString()), e.value.playbackSpeed ? $.value = e.value.playbackSpeed : (e.value.playbackSpeed = 1, $.value = 1), e.value.rangeStripColor || (e.value.rangeStripColor = "#d17600"), e.value.fixStartKnob === void 0 && (e.value.fixStartKnob = !1), e.value.showTimeInfo === void 0 && (e.value.showTimeInfo = !0), e.value.showControls === void 0 && (e.value.showControls = !0), e.value.stepSize === void 0 && (e.value.stepSize = "hour"), e.value.rangeStartVariable && p.value) {
        const n = p.value.getVariable(e.value.rangeStartVariable);
        n && F.value.setTo(n);
      }
      if (e.value.rangeEndVariable && p.value) {
        const n = p.value.getVariable(e.value.rangeEndVariable);
        n && A.value.setTo(n);
      }
      e.value.relativeTime?.enabled && Me();
    }), ct(() => {
      g?.value && j.unregisterInstance(g.value), $e();
    }), (n, a) => (C(), z("div", {
      class: "timeline-widget",
      onClick: _e,
      onContextmenu: We(t, ["prevent"])
    }, [
      u("div", yt, [
        u("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: Y,
          style: ue(w.value)
        }, [
          u("div", {
            class: "range-strip",
            style: ue(Oe.value),
            onMousedown: et,
            title: e.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
          }, [
            e.value.fixStartKnob ? (C(), z("div", Dt)) : (C(), z("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: ue({ zIndex: S.value ? 5 : 4 }),
              onMousedown: We(d, ["stop"]),
              title: "Startzeit"
            }, null, 36)),
            u("div", {
              class: "timeline-knob end-knob",
              style: ue({ zIndex: S.value ? 3 : 4 }),
              onMousedown: We(He, ["stop"]),
              title: "Endzeit"
            }, null, 36)
          ], 44, xt)
        ], 4),
        u("div", Et, [
          (C(!0), z(je, null, mt(T.value, (s) => (C(), z("div", {
            key: s.timestamp,
            class: "time-tick",
            style: ue({ left: s.position + "%" })
          }, [
            a[1] || (a[1] = u("div", { class: "tick-mark" }, null, -1)),
            u("div", kt, N(s.label), 1)
          ], 4))), 128))
        ])
      ]),
      e.value.showTimeInfo !== !1 ? (C(), z("div", It, [
        u("div", _t, [
          a[2] || (a[2] = u("span", { class: "time-label" }, "Start:", -1)),
          u("span", Ct, N(k(U.value)), 1)
        ]),
        u("div", Ot, [
          a[3] || (a[3] = u("span", { class: "time-label" }, "Ende:", -1)),
          u("span", Rt, N(k(I.value)), 1)
        ]),
        u("div", Pt, [
          a[4] || (a[4] = u("span", { class: "time-label" }, "Dauer:", -1)),
          u("span", zt, N(J()), 1)
        ])
      ])) : ae("", !0),
      e.value.showControls !== !1 ? (C(), z("div", $t, [
        u("button", {
          class: gt(["play-button", { playing: O.value }]),
          style: ue(ze.value),
          onClick: tt,
          disabled: l.value
        }, [
          O.value ? (C(), z("svg", Nt, [...a[6] || (a[6] = [
            u("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (C(), z("svg", Wt, [...a[5] || (a[5] = [
            u("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, Ut),
        u("div", jt, [
          a[8] || (a[8] = u("label", null, "Geschwindigkeit:", -1)),
          pt(u("select", {
            "onUpdate:modelValue": a[0] || (a[0] = (s) => $.value = s)
          }, [...a[7] || (a[7] = [
            ft('<option value="0.25" data-v-82423c81>0.25x</option><option value="0.5" data-v-82423c81>0.5x</option><option value="1" data-v-82423c81>1x</option><option value="2" data-v-82423c81>2x</option><option value="4" data-v-82423c81>4x</option>', 5)
          ])], 512), [
            [bt, $.value]
          ])
        ])
      ])) : ae("", !0)
    ], 32));
  }
}), Qe = (D, h) => {
  const v = D.__vccOpts || D;
  for (const [g, e] of h)
    v[g] = e;
  return v;
}, Ht = /* @__PURE__ */ Qe(Kt, [["__scopeId", "data-v-82423c81"]]), Lt = { class: "settings-container" }, Bt = { class: "setting-group" }, Ft = {
  key: 0,
  class: "setting-group"
}, At = { class: "relative-time-config" }, Yt = { class: "relative-time-row" }, Xt = { class: "relative-time-preview" }, Gt = { class: "setting-group" }, qt = { class: "datetime-group" }, Zt = { class: "setting-group" }, Jt = {
  key: 0,
  class: "datetime-group"
}, Qt = { class: "setting-group" }, ea = { class: "variable-config" }, ta = { class: "variable-config" }, aa = { class: "settings-container" }, na = { class: "setting-group" }, la = { class: "setting-group" }, ia = { class: "setting-group" }, oa = { class: "setting-group" }, ra = { class: "setting-group" }, sa = { class: "settings-container" }, ua = { class: "setting-group" }, va = { class: "setting-group" }, da = /* @__PURE__ */ Ge({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(D) {
    const h = de("i18n"), v = (r) => h ? h.t(r) : r, g = qe(D, "modelValue"), e = f({
      timelineSection: !1,
      playbackSection: !1,
      stylingSection: !1
    }), y = f("absolute"), j = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ], fe = /* @__PURE__ */ new Date(), ke = new Date(fe.getTime() - 720 * 60 * 60 * 1e3), Ie = new Date(fe.getTime() + 10080 * 60 * 1e3), be = new Date(fe.getTime() - 1440 * 60 * 1e3), _e = /* @__PURE__ */ new Date(), t = f({
      timelineMin: ke.toISOString(),
      timelineMax: Ie.toISOString(),
      rangeStart: be.toISOString(),
      rangeEnd: _e.toISOString(),
      relativeTime: {
        enabled: !1,
        offset: 24,
        unit: "hours"
      },
      stepSize: "hour",
      playbackSpeed: 1,
      autoPlay: !1,
      rangeStripColor: "#d17600",
      fixStartKnob: !1,
      showTimeInfo: !0,
      showControls: !0
    }), p = f(!1), F = f(), A = f(), O = f(), $ = f(), b = f(null), Y = f(!1), R = f(!1), K = f(new ye("")), P = f(new ye("")), Z = _(() => b.value ? b.value.getAllVariables().map(([r, l]) => l).filter((r) => r.value && typeof r.value == "string").map((r) => ({ name: r.name, value: r.value })) : []), me = _(() => [
      { text: "1 Minute", value: "minute" },
      { text: "1 Hour", value: "hour" },
      { text: "1 Day", value: "day" },
      { text: "1 Week", value: "week" },
      { text: "1 Month", value: "month" }
    ]), Se = _(() => [
      { text: "0.25x", value: 0.25 },
      { text: "0.5x", value: 0.5 },
      { text: "1x", value: 1 },
      { text: "2x", value: 2 },
      { text: "4x", value: 4 }
    ]), we = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ], Te = () => {
      y.value === "relative" ? (t.value.relativeTime.enabled = !0, Me()) : t.value.relativeTime.enabled = !1, w();
    }, ge = () => {
      t.value.relativeTime?.enabled && Me(), w();
    }, Ce = (r, l) => {
      const S = /* @__PURE__ */ new Date(), T = new Date(S), k = Number(r) || 24;
      switch (typeof l == "object" && l !== null ? l.value : l) {
        case "hours":
          T.setHours(T.getHours() - k);
          break;
        case "days":
          T.setDate(T.getDate() - k);
          break;
        case "weeks":
          T.setDate(T.getDate() - k * 7);
          break;
        case "months":
          T.setMonth(T.getMonth() - k);
          break;
        case "years":
          T.setFullYear(T.getFullYear() - k);
          break;
        default:
          T.setHours(T.getHours() - k);
      }
      return { start: T, end: S };
    }, Me = () => {
      if (!t.value.relativeTime?.enabled) return;
      const { start: r, end: l } = Ce(
        t.value.relativeTime.offset,
        t.value.relativeTime.unit
      ), T = (l.getTime() - r.getTime()) * 0.2, k = l, J = new Date(l.getTime() - T);
      if (t.value.timelineMin = r.toISOString(), t.value.timelineMax = l.toISOString(), t.value.rangeStart = J.toISOString(), t.value.rangeEnd = k.toISOString(), g.value.timelineMin = t.value.timelineMin, g.value.timelineMax = t.value.timelineMax, g.value.rangeStart = t.value.rangeStart, g.value.rangeEnd = t.value.rangeEnd, t.value.rangeStartVariable && b.value) {
        const E = b.value.getVariable(t.value.rangeStartVariable);
        E && (E.value = t.value.rangeStart);
      }
      if (t.value.rangeEndVariable && b.value) {
        const E = b.value.getVariable(t.value.rangeEndVariable);
        E && (E.value = t.value.rangeEnd);
      }
    }, X = () => {
      Y.value || (t.value.rangeStartVariable = void 0), w();
    }, H = () => {
      R.value || (t.value.rangeEndVariable = void 0), w();
    }, U = () => {
      if (t.value.rangeStartVariable && b.value) {
        const r = b.value.getVariable(t.value.rangeStartVariable);
        r && (K.value.setTo(r), t.value.rangeStart = K.value.value);
      }
      if (t.value.rangeEndVariable && b.value) {
        const r = b.value.getVariable(t.value.rangeEndVariable);
        r && (P.value.setTo(r), t.value.rangeEnd = P.value.value);
      }
      w();
    }, I = (r, l) => {
      if (!r) return;
      const S = new Date(r);
      return l && (S.setHours(l.getHours()), S.setMinutes(l.getMinutes()), S.setSeconds(l.getSeconds())), S.toISOString();
    }, ne = () => {
      t.value.timelineMin = I(F.value, A.value), w();
    }, he = () => {
      t.value.timelineMin = I(F.value, A.value), w();
    }, Oe = () => {
      t.value.timelineMax = I(O.value, $.value), w();
    }, Ve = () => {
      t.value.timelineMax = I(O.value, $.value), w();
    }, w = () => {
      let r = t.value.rangeStart, l = t.value.rangeEnd;
      Y.value && K.value.value && (r = K.value.value), R.value && P.value.value && (l = P.value.value);
      const S = {
        ...t.value,
        timelineMin: t.value.timelineMin,
        timelineMax: p.value ? (/* @__PURE__ */ new Date()).toISOString() : t.value.timelineMax,
        rangeStart: r,
        rangeEnd: l,
        relativeTime: t.value.relativeTime,
        rangeStartVariable: t.value.rangeStartVariable,
        rangeEndVariable: t.value.rangeEndVariable,
        stepSize: t.value.stepSize,
        playbackSpeed: t.value.playbackSpeed,
        autoPlay: t.value.autoPlay,
        rangeStripColor: t.value.rangeStripColor,
        fixStartKnob: t.value.fixStartKnob,
        showTimeInfo: t.value.showTimeInfo,
        showControls: t.value.showControls
      };
      Object.assign(g.value, S);
    }, Re = () => {
      p.value || t.value.timelineMax || (t.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), w();
    }, Pe = () => {
      const r = /* @__PURE__ */ new Date(), l = new Date(r.getTime() - 720 * 60 * 60 * 1e3), S = new Date(r.getTime() + 10080 * 60 * 1e3), T = new Date(r.getTime() - 1440 * 60 * 1e3), k = /* @__PURE__ */ new Date();
      t.value = {
        timelineMin: l.toISOString(),
        timelineMax: S.toISOString(),
        rangeStart: T.toISOString(),
        rangeEnd: k.toISOString(),
        relativeTime: {
          enabled: !1,
          offset: 24,
          unit: "hours"
        },
        stepSize: "hour",
        playbackSpeed: 1,
        autoPlay: !1,
        rangeStripColor: "#d17600",
        fixStartKnob: !1,
        showTimeInfo: !0,
        showControls: !0
      }, y.value = "absolute", p.value = !1, w();
    }, ze = de(Je);
    return Ze(() => {
      try {
        if (b.value = ze ?? null, !b.value) throw new Error("VariableRepository not provided");
      } catch (r) {
        console.warn("VariableRepository not found in container:", r);
      }
      if (g.value && g.value.timelineMin) {
        if (Object.assign(t.value, g.value), p.value = !g.value.timelineMax, Y.value = !!g.value.rangeStartVariable, R.value = !!g.value.rangeEndVariable, t.value.relativeTime || (t.value.relativeTime = {
          enabled: !1,
          offset: 24,
          unit: "hours"
        }), y.value = t.value.relativeTime.enabled ? "relative" : "absolute", t.value.timelineMin) {
          const r = new Date(t.value.timelineMin);
          F.value = r, A.value = r;
        }
        if (t.value.timelineMax) {
          const r = new Date(t.value.timelineMax);
          O.value = r, $.value = r;
        }
      } else
        Pe();
      w();
    }), pe(() => g.value, (r) => {
      r && (Object.assign(t.value, r), p.value = !r.timelineMax, r.relativeTime && (y.value = r.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (r, l) => {
      const S = te("va-select"), T = te("va-input"), k = te("va-date-input"), J = te("va-time-input"), E = te("va-checkbox"), B = te("va-collapse"), le = te("va-color-input");
      return C(), z(je, null, [
        V(B, {
          modelValue: e.value.timelineSection,
          "onUpdate:modelValue": l[12] || (l[12] = (d) => e.value.timelineSection = d),
          icon: "timeline",
          header: v("Timeline Settings")
        }, {
          default: Ne(() => [
            u("div", Lt, [
              u("div", Bt, [
                V(S, {
                  modelValue: y.value,
                  "onUpdate:modelValue": [
                    l[0] || (l[0] = (d) => y.value = d),
                    Te
                  ],
                  label: v("Time Range Mode"),
                  options: j,
                  "text-by": "label",
                  "value-by": "value"
                }, null, 8, ["modelValue", "label"])
              ]),
              y.value === "relative" && t.value.relativeTime ? (C(), z("div", Ft, [
                u("label", null, N(v("Relative Time Range")), 1),
                u("div", At, [
                  u("div", Yt, [
                    V(T, {
                      modelValue: t.value.relativeTime.offset,
                      "onUpdate:modelValue": [
                        l[1] || (l[1] = (d) => t.value.relativeTime.offset = d),
                        ge
                      ],
                      modelModifiers: { number: !0 },
                      label: v("Offset"),
                      type: "number",
                      min: 1,
                      max: 1e4,
                      class: "offset-input"
                    }, null, 8, ["modelValue", "label"]),
                    V(S, {
                      modelValue: t.value.relativeTime.unit,
                      "onUpdate:modelValue": [
                        l[2] || (l[2] = (d) => t.value.relativeTime.unit = d),
                        ge
                      ],
                      options: we,
                      label: v("Unit"),
                      "text-by": "text",
                      "value-by": "value",
                      class: "unit-select"
                    }, null, 8, ["modelValue", "label"])
                  ]),
                  u("div", Xt, N(v("Now")) + " - " + N(t.value.relativeTime.offset) + " " + N(v(t.value.relativeTime.unit)) + " → " + N(v("Now")), 1)
                ])
              ])) : ae("", !0),
              y.value === "absolute" ? (C(), z(je, { key: 1 }, [
                u("div", Gt, [
                  u("label", null, N(v("Timeline Start")), 1),
                  u("div", qt, [
                    V(k, {
                      modelValue: F.value,
                      "onUpdate:modelValue": [
                        l[3] || (l[3] = (d) => F.value = d),
                        ne
                      ],
                      label: v("Date")
                    }, null, 8, ["modelValue", "label"]),
                    V(J, {
                      modelValue: A.value,
                      "onUpdate:modelValue": [
                        l[4] || (l[4] = (d) => A.value = d),
                        he
                      ],
                      label: v("Time")
                    }, null, 8, ["modelValue", "label"])
                  ])
                ]),
                u("div", Zt, [
                  u("label", null, N(v("Timeline End")), 1),
                  V(E, {
                    modelValue: p.value,
                    "onUpdate:modelValue": [
                      l[5] || (l[5] = (d) => p.value = d),
                      Re
                    ],
                    label: v("Use current time")
                  }, null, 8, ["modelValue", "label"]),
                  p.value ? ae("", !0) : (C(), z("div", Jt, [
                    V(k, {
                      modelValue: O.value,
                      "onUpdate:modelValue": [
                        l[6] || (l[6] = (d) => O.value = d),
                        Oe
                      ],
                      label: v("Date")
                    }, null, 8, ["modelValue", "label"]),
                    V(J, {
                      modelValue: $.value,
                      "onUpdate:modelValue": [
                        l[7] || (l[7] = (d) => $.value = d),
                        Ve
                      ],
                      label: v("Time")
                    }, null, 8, ["modelValue", "label"])
                  ]))
                ])
              ], 64)) : ae("", !0),
              u("div", Qt, [
                u("label", null, N(v("Variable Binding")), 1),
                u("div", ea, [
                  V(E, {
                    modelValue: Y.value,
                    "onUpdate:modelValue": [
                      l[8] || (l[8] = (d) => Y.value = d),
                      X
                    ],
                    label: v("Start time from variable")
                  }, null, 8, ["modelValue", "label"]),
                  Y.value ? (C(), Ae(S, {
                    key: 0,
                    modelValue: t.value.rangeStartVariable,
                    "onUpdate:modelValue": [
                      l[9] || (l[9] = (d) => t.value.rangeStartVariable = d),
                      U
                    ],
                    options: Z.value,
                    label: v("Start variable"),
                    "text-by": "name",
                    "value-by": "name"
                  }, null, 8, ["modelValue", "options", "label"])) : ae("", !0)
                ]),
                u("div", ta, [
                  V(E, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      l[10] || (l[10] = (d) => R.value = d),
                      H
                    ],
                    label: v("End time from variable")
                  }, null, 8, ["modelValue", "label"]),
                  R.value ? (C(), Ae(S, {
                    key: 0,
                    modelValue: t.value.rangeEndVariable,
                    "onUpdate:modelValue": [
                      l[11] || (l[11] = (d) => t.value.rangeEndVariable = d),
                      U
                    ],
                    options: Z.value,
                    label: v("End variable"),
                    "text-by": "name",
                    "value-by": "name"
                  }, null, 8, ["modelValue", "options", "label"])) : ae("", !0)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"]),
        V(B, {
          modelValue: e.value.playbackSection,
          "onUpdate:modelValue": l[18] || (l[18] = (d) => e.value.playbackSection = d),
          icon: "play_circle",
          header: v("Playback")
        }, {
          default: Ne(() => [
            u("div", aa, [
              u("div", na, [
                V(S, {
                  modelValue: t.value.stepSize,
                  "onUpdate:modelValue": [
                    l[13] || (l[13] = (d) => t.value.stepSize = d),
                    w
                  ],
                  label: v("Step Size"),
                  options: me.value,
                  "value-by": "value"
                }, null, 8, ["modelValue", "label", "options"])
              ]),
              u("div", la, [
                V(S, {
                  modelValue: t.value.playbackSpeed,
                  "onUpdate:modelValue": [
                    l[14] || (l[14] = (d) => t.value.playbackSpeed = d),
                    w
                  ],
                  label: v("Playback Speed"),
                  options: Se.value
                }, null, 8, ["modelValue", "label", "options"])
              ]),
              u("div", ia, [
                V(E, {
                  modelValue: t.value.autoPlay,
                  "onUpdate:modelValue": [
                    l[15] || (l[15] = (d) => t.value.autoPlay = d),
                    w
                  ],
                  label: v("Auto-play on load")
                }, null, 8, ["modelValue", "label"])
              ]),
              u("div", oa, [
                V(E, {
                  modelValue: t.value.fixStartKnob,
                  "onUpdate:modelValue": [
                    l[16] || (l[16] = (d) => t.value.fixStartKnob = d),
                    w
                  ],
                  label: v("Fix start knob at beginning")
                }, null, 8, ["modelValue", "label"])
              ]),
              u("div", ra, [
                V(E, {
                  modelValue: t.value.showControls,
                  "onUpdate:modelValue": [
                    l[17] || (l[17] = (d) => t.value.showControls = d),
                    w
                  ],
                  label: v("Show playback controls")
                }, null, 8, ["modelValue", "label"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"]),
        V(B, {
          modelValue: e.value.stylingSection,
          "onUpdate:modelValue": l[21] || (l[21] = (d) => e.value.stylingSection = d),
          icon: "palette",
          header: v("Styling")
        }, {
          default: Ne(() => [
            u("div", sa, [
              u("div", ua, [
                V(le, {
                  modelValue: t.value.rangeStripColor,
                  "onUpdate:modelValue": [
                    l[19] || (l[19] = (d) => t.value.rangeStripColor = d),
                    w
                  ],
                  label: v("Range Strip Color")
                }, null, 8, ["modelValue", "label"])
              ]),
              u("div", va, [
                V(E, {
                  modelValue: t.value.showTimeInfo,
                  "onUpdate:modelValue": [
                    l[20] || (l[20] = (d) => t.value.showTimeInfo = d),
                    w
                  ],
                  label: v("Show time information panel")
                }, null, 8, ["modelValue", "label"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"])
      ], 64);
    };
  }
}), ca = /* @__PURE__ */ Qe(da, [["__scopeId", "data-v-bf68db5d"]]), ma = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", ga = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: Ye },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: Ye }
];
var pa = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Ke = (D, h, v, g) => {
  for (var e = g > 1 ? void 0 : g ? fa(h, v) : h, y = D.length - 1, j; y >= 0; y--)
    (j = D[y]) && (e = (g ? j(h, v, e) : j(e)) || e);
  return g && e && pa(h, v, e), e;
}, Xe = (D, h) => (v, g) => h(v, g, D);
const ve = "TimelineWidget";
let xe = class {
  constructor(D, h) {
    this.events = D, this.actions = h;
  }
  type = ve;
  component = Ht;
  settingsComponent = ca;
  supportedDSTypes = [];
  icon = ma;
  name = "Timeline";
  register() {
    this.events.registerWidget(ve, ga), this.actions.registerWidgetType(ve, ce, "widget");
  }
  unregister() {
    this.events.unregisterWidget(ve), this.actions.unregisterWidgetType(ve);
  }
};
Ke([
  rt()
], xe.prototype, "register", 1);
Ke([
  st()
], xe.prototype, "unregister", 1);
xe = Ke([
  ut({
    service: [Mt],
    properties: { "widget.type": ve }
  }),
  Xe(0, Fe(it)),
  Xe(1, Fe(ot))
], xe);
export {
  Ht as TimelineWidget,
  xe as TimelineWidgetProvider,
  ca as TimelineWidgetSettings
};
