(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-e6f250af]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-e6f250af]{overflow:hidden;position:relative;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-e6f250af]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-e6f250af]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-e6f250af]:hover{filter:brightness(1.1)}.range-strip[data-v-e6f250af]:active{cursor:grabbing}.timeline-knob[data-v-e6f250af]{position:absolute;top:50%;width:24px;height:24px;background:var(--va-primary);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-e6f250af]:hover{background:var(--va-primary-dark);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-e6f250af]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-e6f250af]{left:0;z-index:4}.fixed-knob[data-v-e6f250af]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-e6f250af]:hover{transform:translate(-50%,-50%)!important;background:var(--va-background-border)!important}.end-knob[data-v-e6f250af]{right:-24px;z-index:4}.time-axis[data-v-e6f250af]{position:relative;height:30px;background:var(--va-background-secondary);border-top:1px solid var(--va-background-border);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-e6f250af]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-e6f250af]{width:1px;height:8px;background:var(--va-text-secondary);margin-top:2px}.tick-label[data-v-e6f250af]{font-size:.7rem;color:var(--va-text-secondary);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-e6f250af]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:6px;padding:.75rem}.time-display[data-v-e6f250af]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-e6f250af]{font-size:.8rem;font-weight:500;color:var(--va-text-secondary)}.time-value[data-v-e6f250af]{font-size:.9rem;font-weight:600;color:var(--va-text-primary);word-wrap:break-word}.controls[data-v-e6f250af]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-e6f250af]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--va-primary));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-e6f250af]:hover:not(:disabled){background:var(--va-primary-dark);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-e6f250af]:disabled{background:var(--va-background-border);color:var(--va-text-secondary);cursor:not-allowed;transform:none}.play-button.playing[data-v-e6f250af]{background:var(--play-button-playing, #ff6b35);animation:pulse-e6f250af 2s infinite}.play-button.playing[data-v-e6f250af]:hover{filter:brightness(.9)}@keyframes pulse-e6f250af{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-e6f250af]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-e6f250af]{font-weight:500;color:var(--va-text-primary);min-width:fit-content}.speed-control select[data-v-e6f250af]{padding:.5rem;border:1px solid var(--va-background-border);border-radius:4px;background:var(--va-background-primary);color:var(--va-text-primary);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-e6f250af]{flex-direction:column;gap:.75rem}.time-display[data-v-e6f250af]{text-align:left}.controls[data-v-e6f250af]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-e6f250af]{width:28px;height:28px}.tick-label[data-v-e6f250af]{font-size:.6rem}.timeline-container[data-v-e6f250af]{min-height:70px}.timeline-track[data-v-e6f250af]{height:35px}}.settings-container[data-v-3d51581e]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-3d51581e]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-3d51581e]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.datetime-group[data-v-3d51581e]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-3d51581e]>*{flex:1;min-width:0}.relative-time-config[data-v-3d51581e]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--va-background-element);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-3d51581e]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-3d51581e]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-3d51581e]{flex:2;min-width:80px}.relative-time-preview[data-v-3d51581e]{font-size:.85rem;color:var(--va-primary);padding:.5rem;background:var(--va-background-secondary);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-3d51581e]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { WidgetActionInterfaceImpl as St, EVENT_ACTIONS_REGISTRY as ht, PayloadImpl as at, EVENT_REGISTRY_ID as ft, EVENT_ACTIONS_REGISTRY_ID as mt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as _t, deactivate as pt, component as It, inject as rt } from "@eclipse-daanse/tsm";
import { defineComponent as ot, mergeModels as Nt, inject as Me, toRefs as bt, useModel as ut, ref as p, computed as k, watch as De, onMounted as ct, onUnmounted as Mt, createElementBlock as H, openBlock as P, withModifiers as qe, createElementVNode as T, createCommentVNode as he, normalizeStyle as Ne, Fragment as dt, renderList as wt, toDisplayString as Y, normalizeClass as Rt, withDirectives as Dt, createStaticVNode as Lt, vModelSelect as yt, createVNode as ee, unref as B, isRef as xe, createBlock as st } from "vue";
import { useRoute as At } from "vue-router";
import { VariableWrapper as Be, plainSettings as nt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Et } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as Pe } from "org.eclipse.daanse.board.app.lib.events";
import { DSelect as Fe, DInput as Ct, DDateInput as Ge, DCheckbox as Je } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEPackage as Ot, EPackageRegistry as xt, BasicEClass as it, BasicEAttribute as R, BasicEReference as Ft, getEcorePackage as D, BasicEObject as vt, BasicEFactory as Gt } from "@emfts/core";
import { WIDGET_SERVICE_ID as Bt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Vt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var kt = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, Ue = (L, e, t, g) => {
  for (var a = Pt(e, t), S = L.length - 1, M; S >= 0; S--)
    (M = L[S]) && (a = M(e, t, a) || a);
  return a && kt(e, t, a), a;
};
class we extends St {
  zoomIn() {
    throw new Error("zoomIn not implemented");
  }
  zoomOut() {
    throw new Error("zoomOut not implemented");
  }
  setDateRange(e, t) {
    throw new Error("setDateRange not implemented");
  }
  jumpToNow() {
    throw new Error("jumpToNow not implemented");
  }
}
Ue([
  Pe({ eventType: "timeline.zoomIn" })
], we.prototype, "zoomIn");
Ue([
  Pe({ eventType: "timeline.zoomOut" })
], we.prototype, "zoomOut");
Ue([
  Pe({ eventType: "timeline.setDateRange" })
], we.prototype, "setDateRange");
Ue([
  Pe({ eventType: "timeline.jumpToNow" })
], we.prototype, "jumpToNow");
const Ut = { class: "timeline-container" }, Wt = ["title"], zt = {
  key: 1,
  class: "timeline-knob start-knob fixed-knob",
  title: "Startzeit (fixiert)"
}, Kt = { class: "time-axis" }, Ht = { class: "tick-label" }, $t = {
  key: 0,
  class: "time-info"
}, Xt = { class: "time-display" }, Yt = { class: "time-value" }, jt = { class: "time-display" }, Zt = { class: "time-value" }, qt = { class: "time-display" }, Jt = { class: "time-value" }, Qt = {
  key: 1,
  class: "controls"
}, ea = ["disabled"], ta = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, aa = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ra = { class: "speed-control" }, sa = /* @__PURE__ */ ot({
  __name: "TimelineWidget",
  props: /* @__PURE__ */ Nt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(L, { expose: e }) {
    Me("i18n");
    const t = L, { id: g } = bt(t), a = ut(L, "configv"), S = Me(Vt.TINY_EMITTER), M = Me(ht), te = At().params.pageid || "";
    class ae extends we {
      zoomIn() {
        const s = new Date(a.value.rangeStart || Date.now() - 864e5), v = new Date(a.value.rangeEnd || Date.now()), E = (v.getTime() - s.getTime()) * 0.25, h = new Date(s.getTime() + E), f = new Date(v.getTime() - E);
        f.getTime() - h.getTime() > 6e4 && (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString());
      }
      zoomOut() {
        const s = new Date(a.value.rangeStart || Date.now() - 864e5), v = new Date(a.value.rangeEnd || Date.now()), E = (v.getTime() - s.getTime()) * 0.5, h = new Date(Math.max(
          s.getTime() - E,
          new Date(a.value.timelineMin || 0).getTime()
        )), f = new Date(Math.min(
          v.getTime() + E,
          new Date(a.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString();
      }
      setDateRange(s, v) {
        a.value.rangeStart = s, a.value.rangeEnd = v;
      }
      jumpToNow() {
        const s = /* @__PURE__ */ new Date(), v = new Date(a.value.rangeEnd || s).getTime() - new Date(a.value.rangeStart || s).getTime(), u = s, E = new Date(s.getTime() - v);
        a.value.rangeStart = E.toISOString(), a.value.rangeEnd = u.toISOString();
      }
    }
    const j = new ae();
    e(j);
    const i = () => {
      g?.value && S.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, O = () => {
      g?.value && S.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, m = p(null), U = p(new Be("")), W = p(new Be("")), y = p(!1), C = p(a.value.playbackSpeed || 1), A = p(!1), Z = p(), x = p(null), F = p(null), V = p(null);
    let oe = null, G = 0;
    const re = new Date(Date.now() - 720 * 60 * 60 * 1e3), se = new Date(Date.now() + 10080 * 60 * 1e3), Ee = new Date(Date.now() - 1440 * 60 * 1e3), ve = /* @__PURE__ */ new Date(), Le = (n, s) => {
      const v = /* @__PURE__ */ new Date(), u = new Date(v), E = Number(n) || 24;
      switch (typeof s == "object" && s !== null ? s.value : s) {
        case "hours":
          u.setHours(u.getHours() - E);
          break;
        case "days":
          u.setDate(u.getDate() - E);
          break;
        case "weeks":
          u.setDate(u.getDate() - E * 7);
          break;
        case "months":
          u.setMonth(u.getMonth() - E);
          break;
        case "years":
          u.setFullYear(u.getFullYear() - E);
          break;
        default:
          u.setHours(u.getHours() - E);
      }
      return { start: u, end: v };
    }, ze = () => {
      if (!a.value.relativeTime?.enabled) return;
      const { start: n, end: s } = Le(
        a.value.relativeTime.offset,
        a.value.relativeTime.unit
      );
      a.value.timelineMin = n.toISOString(), a.value.timelineMax = s.toISOString();
      const u = (s.getTime() - n.getTime()) * 0.2, E = s, h = new Date(s.getTime() - u);
      if (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = E.toISOString(), a.value.rangeStartVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeStartVariable);
        f && (f.value = h.toISOString());
      }
      if (a.value.rangeEndVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeEndVariable);
        f && (f.value = E.toISOString());
      }
    }, ne = k(() => a.value.timelineMin ? new Date(a.value.timelineMin) : re), $ = k(() => a.value.timelineMax ? new Date(a.value.timelineMax) : se), q = k(() => {
      if (a.value.rangeStartVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeStartVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeStart ? new Date(a.value.rangeStart) : Ee;
    }), K = k(() => {
      if (a.value.rangeEndVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeEndVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeEnd ? new Date(a.value.rangeEnd) : ve;
    }), fe = k(() => {
      if (a.value.fixStartKnob)
        return 0;
      if (x.value !== null)
        return x.value;
      const n = ne.value.getTime(), s = $.value.getTime(), v = q.value.getTime();
      return Math.max(0, Math.min(100, (v - n) / (s - n) * 100));
    }), ye = k(() => {
      if (F.value !== null)
        return F.value;
      const n = ne.value.getTime(), s = $.value.getTime(), v = K.value.getTime();
      return Math.max(0, Math.min(100, (v - n) / (s - n) * 100));
    }), Ae = k(() => V.value ? {
      ...V.value,
      background: ge(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    } : {
      left: fe.value + "%",
      width: ye.value - fe.value + "%",
      background: ge(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    }), ge = (n) => {
      const v = (a.value.rangeStripColor || "#d17600").replace("#", ""), u = parseInt(v.substr(0, 2), 16), E = parseInt(v.substr(2, 2), 16), h = parseInt(v.substr(4, 2), 16);
      return `rgba(${u}, ${E}, ${h}, ${n})`;
    }, Ke = k(() => {
      const n = a.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: He(n)
      };
    }), He = (n) => {
      const s = n.replace("#", ""), v = parseInt(s.substr(0, 2), 16), u = parseInt(s.substr(2, 2), 16), E = parseInt(s.substr(4, 2), 16), h = 0.6, f = Math.min(255, Math.round(v + (255 - v) * h)), I = Math.min(255, Math.round(u + (255 - u) * h)), w = Math.min(255, Math.round(E + (255 - E) * h));
      return `rgb(${f}, ${I}, ${w})`;
    }, $e = () => {
      switch (a.value.stepSize || "hour") {
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
    }, Xe = k(() => {
      const n = a.value.rangeStripColor || "#d17600", s = z(n);
      return {
        "--play-button-bg": n,
        "--play-button-playing": s
      };
    }), z = (n) => {
      const s = n.replace("#", ""), v = parseInt(s.substr(0, 2), 16), u = parseInt(s.substr(2, 2), 16), E = parseInt(s.substr(4, 2), 16), h = 0.8, I = Math.min(255, Math.round(v * h * 1.1)), w = Math.round(u * h), X = Math.round(E * h);
      return `rgb(${I}, ${w}, ${X})`;
    }, Ve = k(() => K.value.getTime() >= $.value.getTime()), Ce = k(() => ye.value - fe.value >= 10 ? !1 : fe.value > 50), Ye = k(() => {
      const n = [], s = ne.value.getTime(), u = $.value.getTime() - s, E = 8;
      for (let h = 0; h <= E; h++) {
        const f = s + u / E * h, I = new Date(f), w = h / E * 100, X = I.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        n.push({
          timestamp: I.toISOString(),
          position: w,
          label: X
        });
      }
      return n;
    }), Oe = (n) => n.toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), je = () => {
      const n = K.value.getTime() - q.value.getTime(), s = Math.floor(n / (1e3 * 60 * 60)), v = Math.floor(s / 24);
      return v > 0 ? `${v}d ${s % 24}h` : s > 0 ? `${s}h` : `${Math.floor(n / (1e3 * 60))}min`;
    }, Re = () => Z.value?.getBoundingClientRect();
    let ue = null;
    const l = (n, s, v = !1) => {
      const u = a.value.fixStartKnob ? ne.value : n || q.value, E = s || K.value;
      if (!u || isNaN(u.getTime()) || !E || isNaN(E.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: u, actualEnd: E });
        return;
      }
      const h = () => {
        if (a.value.rangeStart = u.toISOString(), a.value.rangeEnd = E.toISOString(), a.value.playbackSpeed = C.value, a.value.rangeStartVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeStartVariable);
          f && (f.value = u.toISOString());
        }
        if (a.value.rangeEndVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeEndVariable);
          f && (f.value = E.toISOString());
        }
      };
      v ? (ue && (clearTimeout(ue), ue = null), h()) : (ue && clearTimeout(ue), ue = setTimeout(h, 300));
    }, o = (n) => {
      if (a.value.fixStartKnob)
        return;
      n.preventDefault(), A.value = !0;
      const s = Re();
      if (!s) return;
      const v = n.clientX, u = ne.value.getTime(), E = $.value.getTime(), h = (E - u) / s.width, f = q.value.getTime(), I = K.value.getTime(), w = E - u;
      let X = f;
      const ce = (me) => {
        if (!A.value) return;
        const _e = me.clientX - v;
        let J = f + _e * h;
        J = Math.max(u, Math.min(J, I - 6e4)), X = J;
        const Te = Math.max(0, Math.min(100, (J - u) / w * 100)), pe = Math.max(0, Math.min(100, (I - u) / w * 100));
        x.value = Te, V.value = {
          left: Te + "%",
          width: pe - Te + "%"
        };
      }, de = () => {
        A.value = !1, x.value = null, V.value = null, l(new Date(X), new Date(I), !0), document.removeEventListener("mousemove", ce), document.removeEventListener("mouseup", de);
      };
      document.addEventListener("mousemove", ce), document.addEventListener("mouseup", de);
    }, d = (n) => {
      n.preventDefault(), A.value = !0;
      const s = Re();
      if (!s) return;
      const v = n.clientX, u = ne.value.getTime(), E = $.value.getTime(), h = (E - u) / s.width, f = K.value.getTime(), I = q.value.getTime(), w = E - u;
      let X = f;
      const ce = (me) => {
        if (!A.value) return;
        const _e = me.clientX - v;
        let J = f + _e * h;
        J = Math.min(E, Math.max(J, I + 6e4)), X = J;
        const Te = Math.max(0, Math.min(100, (I - u) / w * 100)), pe = Math.max(0, Math.min(100, (J - u) / w * 100));
        F.value = pe, V.value = {
          left: Te + "%",
          width: pe - Te + "%"
        };
      }, de = () => {
        A.value = !1, F.value = null, V.value = null, l(new Date(I), new Date(X), !0), document.removeEventListener("mousemove", ce), document.removeEventListener("mouseup", de);
      };
      document.addEventListener("mousemove", ce), document.addEventListener("mouseup", de);
    }, _ = (n) => {
      if (a.value.fixStartKnob) {
        d(n);
        return;
      }
      n.preventDefault(), A.value = !0;
      const s = Re();
      if (!s) return;
      const v = n.clientX, u = ne.value.getTime(), E = $.value.getTime(), h = (E - u) / s.width, f = q.value.getTime(), I = K.value.getTime(), w = I - f, X = E - u;
      let ce = f, de = I;
      const me = (J) => {
        if (!A.value) return;
        const pe = (J.clientX - v) * h;
        let Se = f + pe, Ie = Se + w;
        Se < u && (Se = u, Ie = Se + w), Ie > E && (Ie = E, Se = Ie - w), ce = Se, de = Ie;
        const Ze = Math.max(0, Math.min(100, (Se - u) / X * 100)), tt = Math.max(0, Math.min(100, (Ie - u) / X * 100));
        x.value = Ze, F.value = tt, V.value = {
          left: Ze + "%",
          width: tt - Ze + "%"
        };
      }, _e = () => {
        A.value = !1, x.value = null, F.value = null, V.value = null, l(new Date(ce), new Date(de), !0), document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", _e);
      };
      document.addEventListener("mousemove", me), document.addEventListener("mouseup", _e);
    }, N = () => {
      y.value = !y.value, y.value ? Q() : ie();
    }, Q = () => {
      G = performance.now(), et();
    }, ie = () => {
      oe && (cancelAnimationFrame(oe), oe = null);
    }, et = () => {
      if (!y.value) return;
      const n = performance.now(), s = n - G, v = 1e3 / C.value;
      if (s >= v) {
        const u = q.value.getTime(), E = K.value.getTime(), h = E - u, f = $e();
        console.log("Playback step:", {
          stepSize: a.value.stepSize,
          stepSizeMs: f,
          currentStart: new Date(u).toISOString(),
          currentEnd: new Date(E).toISOString(),
          rangeDuration: h
        });
        const I = u + f, w = I + h;
        if (console.log("New times:", {
          newStart: new Date(I).toISOString(),
          newEnd: new Date(w).toISOString(),
          timelineMax: $.value.toISOString()
        }), w >= $.value.getTime()) {
          ie(), y.value = !1;
          return;
        }
        l(new Date(I), new Date(w)), G = n;
      }
      oe = requestAnimationFrame(et);
    };
    De(() => a.value.rangeStartVariable, (n) => {
      if (n && m.value) {
        const s = m.value.getVariable(n);
        s && U.value.setTo(s);
      }
    }), De(() => a.value.rangeEndVariable, (n) => {
      if (n && m.value) {
        const s = m.value.getVariable(n);
        s && W.value.setTo(s);
      }
    }), De(() => U.value.value, (n) => {
      n && a.value.rangeStartVariable && new Date(n).getTime() !== q.value.getTime() && (a.value.rangeStart = n);
    }), De(() => W.value.value, (n) => {
      n && a.value.rangeEndVariable && new Date(n).getTime() !== K.value.getTime() && (a.value.rangeEnd = n);
    });
    const Tt = Me(Et);
    return ct(() => {
      g?.value && M.registerInstance(g.value, j, "TimelineWidget", te);
      try {
        if (m.value = Tt ?? null, !m.value) throw new Error("VariableRepository not provided");
      } catch (n) {
        console.warn("VariableRepository not found in container:", n);
      }
      if (a.value.timelineMin || (a.value.timelineMin = re.toISOString()), a.value.timelineMax || (a.value.timelineMax = se.toISOString()), a.value.rangeStart || (a.value.rangeStart = Ee.toISOString()), a.value.rangeEnd || (a.value.rangeEnd = ve.toISOString()), a.value.playbackSpeed ? C.value = a.value.playbackSpeed : (a.value.playbackSpeed = 1, C.value = 1), a.value.rangeStripColor || (a.value.rangeStripColor = "#d17600"), a.value.fixStartKnob === void 0 && (a.value.fixStartKnob = !1), a.value.showTimeInfo === void 0 && (a.value.showTimeInfo = !0), a.value.showControls === void 0 && (a.value.showControls = !0), a.value.stepSize === void 0 && (a.value.stepSize = "hour"), a.value.rangeStartVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeStartVariable);
        n && U.value.setTo(n);
      }
      if (a.value.rangeEndVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeEndVariable);
        n && W.value.setTo(n);
      }
      a.value.relativeTime?.enabled && ze();
    }), Mt(() => {
      g?.value && M.unregisterInstance(g.value), ie();
    }), (n, s) => (P(), H("div", {
      class: "timeline-widget",
      onClick: i,
      onContextmenu: qe(O, ["prevent"])
    }, [
      T("div", Ut, [
        T("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: Z,
          style: Ne(Ke.value)
        }, [
          T("div", {
            class: "range-strip",
            style: Ne(Ae.value),
            onMousedown: _,
            title: a.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
          }, [
            a.value.fixStartKnob ? (P(), H("div", zt)) : (P(), H("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: Ne({ zIndex: Ce.value ? 5 : 4 }),
              onMousedown: qe(o, ["stop"]),
              title: "Startzeit"
            }, null, 36)),
            T("div", {
              class: "timeline-knob end-knob",
              style: Ne({ zIndex: Ce.value ? 3 : 4 }),
              onMousedown: qe(d, ["stop"]),
              title: "Endzeit"
            }, null, 36)
          ], 44, Wt)
        ], 4),
        T("div", Kt, [
          (P(!0), H(dt, null, wt(Ye.value, (v) => (P(), H("div", {
            key: v.timestamp,
            class: "time-tick",
            style: Ne({ left: v.position + "%" })
          }, [
            s[1] || (s[1] = T("div", { class: "tick-mark" }, null, -1)),
            T("div", Ht, Y(v.label), 1)
          ], 4))), 128))
        ])
      ]),
      a.value.showTimeInfo !== !1 ? (P(), H("div", $t, [
        T("div", Xt, [
          s[2] || (s[2] = T("span", { class: "time-label" }, "Start:", -1)),
          T("span", Yt, Y(Oe(q.value)), 1)
        ]),
        T("div", jt, [
          s[3] || (s[3] = T("span", { class: "time-label" }, "Ende:", -1)),
          T("span", Zt, Y(Oe(K.value)), 1)
        ]),
        T("div", qt, [
          s[4] || (s[4] = T("span", { class: "time-label" }, "Dauer:", -1)),
          T("span", Jt, Y(je()), 1)
        ])
      ])) : he("", !0),
      a.value.showControls !== !1 ? (P(), H("div", Qt, [
        T("button", {
          class: Rt(["play-button", { playing: y.value }]),
          style: Ne(Xe.value),
          onClick: N,
          disabled: Ve.value
        }, [
          y.value ? (P(), H("svg", aa, [...s[6] || (s[6] = [
            T("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (P(), H("svg", ta, [...s[5] || (s[5] = [
            T("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, ea),
        T("div", ra, [
          s[8] || (s[8] = T("label", null, "Geschwindigkeit:", -1)),
          Dt(T("select", {
            "onUpdate:modelValue": s[0] || (s[0] = (v) => C.value = v)
          }, [...s[7] || (s[7] = [
            Lt('<option value="0.25" data-v-e6f250af>0.25x</option><option value="0.5" data-v-e6f250af>0.5x</option><option value="1" data-v-e6f250af>1x</option><option value="2" data-v-e6f250af>2x</option><option value="4" data-v-e6f250af>4x</option>', 5)
          ])], 512), [
            [yt, C.value]
          ])
        ])
      ])) : he("", !0)
    ], 32));
  }
}), gt = (L, e) => {
  const t = L.__vccOpts || L;
  for (const [g, a] of e)
    t[g] = a;
  return t;
}, na = /* @__PURE__ */ gt(sa, [["__scopeId", "data-v-e6f250af"]]);
class c extends Ot {
  static eNAME = "timelinesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.timeline";
  static eNS_PREFIX = "timelinesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new c(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    RELATIVE_TIME_CONFIG: null,
    RELATIVE_TIME_CONFIG__ENABLED: null,
    RELATIVE_TIME_CONFIG__OFFSET: null,
    RELATIVE_TIME_CONFIG__UNIT: null,
    TIMELINE_SETTINGS: null,
    TIMELINE_SETTINGS__TIMELINE_MIN: null,
    TIMELINE_SETTINGS__TIMELINE_MAX: null,
    TIMELINE_SETTINGS__RANGE_START: null,
    TIMELINE_SETTINGS__RANGE_END: null,
    TIMELINE_SETTINGS__RELATIVE_TIME: null,
    TIMELINE_SETTINGS__RANGE_START_VARIABLE: null,
    TIMELINE_SETTINGS__RANGE_END_VARIABLE: null,
    TIMELINE_SETTINGS__START_TIME: null,
    TIMELINE_SETTINGS__END_TIME: null,
    TIMELINE_SETTINGS__CURRENT_TIME: null,
    TIMELINE_SETTINGS__STEP_SIZE: null,
    TIMELINE_SETTINGS__PLAYBACK_SPEED: null,
    TIMELINE_SETTINGS__AUTO_PLAY: null,
    TIMELINE_SETTINGS__FIX_START_KNOB: null,
    TIMELINE_SETTINGS__SHOW_CONTROLS: null,
    TIMELINE_SETTINGS__RANGE_STRIP_COLOR: null,
    TIMELINE_SETTINGS__SHOW_TIME_INFO: null
  };
  constructor() {
    super(), this.setName(c.eNAME), this.setNsURI(c.eNS_URI), this.setNsPrefix(c.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    xt.INSTANCE.set(c.eNS_URI, this), this.setEFactoryInstance(We.eINSTANCE);
    const e = new it();
    e.setName("RelativeTimeConfig"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.RELATIVE_TIME_CONFIG = e;
    const t = new R();
    t.setName("enabled"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), c.Literals.RELATIVE_TIME_CONFIG__ENABLED = t;
    const g = new R();
    g.setName("offset"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), c.Literals.RELATIVE_TIME_CONFIG__OFFSET = g;
    const a = new R();
    a.setName("unit"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), c.Literals.RELATIVE_TIME_CONFIG__UNIT = a;
    const S = new it();
    S.setName("TimelineSettings"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), c.Literals.TIMELINE_SETTINGS = S;
    const M = new R();
    M.setName("timelineMin"), M.setLowerBound(0), M.setUpperBound(1), S.getEStructuralFeatures().push(M), c.Literals.TIMELINE_SETTINGS__TIMELINE_MIN = M;
    const le = new R();
    le.setName("timelineMax"), le.setLowerBound(0), le.setUpperBound(1), S.getEStructuralFeatures().push(le), c.Literals.TIMELINE_SETTINGS__TIMELINE_MAX = le;
    const te = new R();
    te.setName("rangeStart"), te.setLowerBound(0), te.setUpperBound(1), S.getEStructuralFeatures().push(te), c.Literals.TIMELINE_SETTINGS__RANGE_START = te;
    const ae = new R();
    ae.setName("rangeEnd"), ae.setLowerBound(0), ae.setUpperBound(1), S.getEStructuralFeatures().push(ae), c.Literals.TIMELINE_SETTINGS__RANGE_END = ae;
    const j = new Ft();
    j.setContainment(!0), j.setName("relativeTime"), j.setLowerBound(0), j.setUpperBound(1), S.getEStructuralFeatures().push(j), c.Literals.TIMELINE_SETTINGS__RELATIVE_TIME = j;
    const i = new R();
    i.setName("rangeStartVariable"), i.setLowerBound(0), i.setUpperBound(1), S.getEStructuralFeatures().push(i), c.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE = i;
    const O = new R();
    O.setName("rangeEndVariable"), O.setLowerBound(0), O.setUpperBound(1), S.getEStructuralFeatures().push(O), c.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE = O;
    const m = new R();
    m.setName("startTime"), m.setLowerBound(0), m.setUpperBound(1), S.getEStructuralFeatures().push(m), c.Literals.TIMELINE_SETTINGS__START_TIME = m;
    const U = new R();
    U.setName("endTime"), U.setLowerBound(0), U.setUpperBound(1), S.getEStructuralFeatures().push(U), c.Literals.TIMELINE_SETTINGS__END_TIME = U;
    const W = new R();
    W.setName("currentTime"), W.setLowerBound(0), W.setUpperBound(1), S.getEStructuralFeatures().push(W), c.Literals.TIMELINE_SETTINGS__CURRENT_TIME = W;
    const y = new R();
    y.setName("stepSize"), y.setLowerBound(0), y.setUpperBound(1), S.getEStructuralFeatures().push(y), c.Literals.TIMELINE_SETTINGS__STEP_SIZE = y;
    const C = new R();
    C.setName("playbackSpeed"), C.setLowerBound(0), C.setUpperBound(1), S.getEStructuralFeatures().push(C), c.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED = C;
    const A = new R();
    A.setName("autoPlay"), A.setLowerBound(0), A.setUpperBound(1), S.getEStructuralFeatures().push(A), c.Literals.TIMELINE_SETTINGS__AUTO_PLAY = A;
    const Z = new R();
    Z.setName("fixStartKnob"), Z.setLowerBound(0), Z.setUpperBound(1), S.getEStructuralFeatures().push(Z), c.Literals.TIMELINE_SETTINGS__FIX_START_KNOB = Z;
    const x = new R();
    x.setName("showControls"), x.setLowerBound(0), x.setUpperBound(1), S.getEStructuralFeatures().push(x), c.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS = x;
    const F = new R();
    F.setName("rangeStripColor"), F.setLowerBound(0), F.setUpperBound(1), S.getEStructuralFeatures().push(F), c.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR = F;
    const V = new R();
    V.setName("showTimeInfo"), V.setLowerBound(0), V.setUpperBound(1), S.getEStructuralFeatures().push(V), c.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO = V, c.Literals.RELATIVE_TIME_CONFIG__ENABLED.setEType(D().getEClassifier("EBoolean")), c.Literals.RELATIVE_TIME_CONFIG__OFFSET.setEType(D().getEClassifier("EInt")), c.Literals.RELATIVE_TIME_CONFIG__UNIT.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__TIMELINE_MIN.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__TIMELINE_MAX.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__RANGE_START.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__RANGE_END.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__RELATIVE_TIME.setEType(c.Literals.RELATIVE_TIME_CONFIG), c.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__START_TIME.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__END_TIME.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__CURRENT_TIME.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__STEP_SIZE.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED.setEType(D().getEClassifier("EDouble")), c.Literals.TIMELINE_SETTINGS__AUTO_PLAY.setEType(D().getEClassifier("EBoolean")), c.Literals.TIMELINE_SETTINGS__FIX_START_KNOB.setEType(D().getEClassifier("EBoolean")), c.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS.setEType(D().getEClassifier("EBoolean")), c.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR.setEType(D().getEClassifier("EString")), c.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO.setEType(D().getEClassifier("EBoolean"));
  }
}
class b extends vt {
  // Feature ID Constants (eLiterals)
  static ENABLED = 0;
  static OFFSET = 1;
  static UNIT = 2;
  // Private fields
  _enabled = !1;
  _offset = 24;
  _unit = "hours";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return c.Literals.RELATIVE_TIME_CONFIG;
  }
  // Getters and Setters
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    const t = this._enabled;
    this._enabled = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.ENABLED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.ENABLED,
      merge: () => !1
    });
  }
  get offset() {
    return this._offset;
  }
  set offset(e) {
    const t = this._offset;
    this._offset = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.OFFSET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.OFFSET,
      merge: () => !1
    });
  }
  get unit() {
    return this._unit;
  }
  set unit(e) {
    const t = this._unit;
    this._unit = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.UNIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.UNIT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ENABLED:
        return this.enabled;
      case b.OFFSET:
        return this.offset;
      case b.UNIT:
        return this.unit;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ENABLED:
        this.enabled = t, super.eSet(e, t);
        break;
      case b.OFFSET:
        this.offset = t, super.eSet(e, t);
        break;
      case b.UNIT:
        this.unit = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ENABLED:
        return this._enabled !== !1;
      case b.OFFSET:
        return this._offset !== 24;
      case b.UNIT:
        return this._unit !== "hours";
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ENABLED:
        this._enabled = !1;
        return;
      case b.OFFSET:
        this._offset = 24;
        return;
      case b.UNIT:
        this._unit = "hours";
        return;
      default:
        super.eUnset(e);
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
      enabled: this.enabled,
      offset: this.offset,
      unit: this.unit
    };
  }
}
class r extends vt {
  // Feature ID Constants (eLiterals)
  static TIMELINE_MIN = 0;
  static TIMELINE_MAX = 1;
  static RANGE_START = 2;
  static RANGE_END = 3;
  static RELATIVE_TIME = 4;
  static RANGE_START_VARIABLE = 5;
  static RANGE_END_VARIABLE = 6;
  static START_TIME = 7;
  static END_TIME = 8;
  static CURRENT_TIME = 9;
  static STEP_SIZE = 10;
  static PLAYBACK_SPEED = 11;
  static AUTO_PLAY = 12;
  static FIX_START_KNOB = 13;
  static SHOW_CONTROLS = 14;
  static RANGE_STRIP_COLOR = 15;
  static SHOW_TIME_INFO = 16;
  // Private fields
  _timelineMin;
  _timelineMax;
  _rangeStart;
  _rangeEnd;
  _relativeTime;
  _rangeStartVariable;
  _rangeEndVariable;
  _startTime;
  _endTime;
  _currentTime;
  _stepSize = "hour";
  _playbackSpeed = 1;
  _autoPlay = !1;
  _fixStartKnob = !1;
  _showControls = !0;
  _rangeStripColor = "#d17600";
  _showTimeInfo = !0;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return c.Literals.TIMELINE_SETTINGS;
  }
  // Getters and Setters
  get timelineMin() {
    return this._timelineMin;
  }
  set timelineMin(e) {
    const t = this._timelineMin;
    this._timelineMin = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.TIMELINE_MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TIMELINE_MIN,
      merge: () => !1
    });
  }
  get timelineMax() {
    return this._timelineMax;
  }
  set timelineMax(e) {
    const t = this._timelineMax;
    this._timelineMax = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.TIMELINE_MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TIMELINE_MAX,
      merge: () => !1
    });
  }
  get rangeStart() {
    return this._rangeStart;
  }
  set rangeStart(e) {
    const t = this._rangeStart;
    this._rangeStart = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RANGE_START),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RANGE_START,
      merge: () => !1
    });
  }
  get rangeEnd() {
    return this._rangeEnd;
  }
  set rangeEnd(e) {
    const t = this._rangeEnd;
    this._rangeEnd = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RANGE_END),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RANGE_END,
      merge: () => !1
    });
  }
  get relativeTime() {
    return this._relativeTime;
  }
  set relativeTime(e) {
    const t = this._relativeTime;
    this._relativeTime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RELATIVE_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RELATIVE_TIME,
      merge: () => !1
    });
  }
  get rangeStartVariable() {
    return this._rangeStartVariable;
  }
  set rangeStartVariable(e) {
    const t = this._rangeStartVariable;
    this._rangeStartVariable = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RANGE_START_VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RANGE_START_VARIABLE,
      merge: () => !1
    });
  }
  get rangeEndVariable() {
    return this._rangeEndVariable;
  }
  set rangeEndVariable(e) {
    const t = this._rangeEndVariable;
    this._rangeEndVariable = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RANGE_END_VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RANGE_END_VARIABLE,
      merge: () => !1
    });
  }
  get startTime() {
    return this._startTime;
  }
  set startTime(e) {
    const t = this._startTime;
    this._startTime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.START_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.START_TIME,
      merge: () => !1
    });
  }
  get endTime() {
    return this._endTime;
  }
  set endTime(e) {
    const t = this._endTime;
    this._endTime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.END_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.END_TIME,
      merge: () => !1
    });
  }
  get currentTime() {
    return this._currentTime;
  }
  set currentTime(e) {
    const t = this._currentTime;
    this._currentTime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CURRENT_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CURRENT_TIME,
      merge: () => !1
    });
  }
  get stepSize() {
    return this._stepSize;
  }
  set stepSize(e) {
    const t = this._stepSize;
    this._stepSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.STEP_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.STEP_SIZE,
      merge: () => !1
    });
  }
  get playbackSpeed() {
    return this._playbackSpeed;
  }
  set playbackSpeed(e) {
    const t = this._playbackSpeed;
    this._playbackSpeed = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.PLAYBACK_SPEED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.PLAYBACK_SPEED,
      merge: () => !1
    });
  }
  get autoPlay() {
    return this._autoPlay;
  }
  set autoPlay(e) {
    const t = this._autoPlay;
    this._autoPlay = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.AUTO_PLAY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.AUTO_PLAY,
      merge: () => !1
    });
  }
  get fixStartKnob() {
    return this._fixStartKnob;
  }
  set fixStartKnob(e) {
    const t = this._fixStartKnob;
    this._fixStartKnob = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.FIX_START_KNOB),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.FIX_START_KNOB,
      merge: () => !1
    });
  }
  get showControls() {
    return this._showControls;
  }
  set showControls(e) {
    const t = this._showControls;
    this._showControls = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SHOW_CONTROLS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SHOW_CONTROLS,
      merge: () => !1
    });
  }
  get rangeStripColor() {
    return this._rangeStripColor;
  }
  set rangeStripColor(e) {
    const t = this._rangeStripColor;
    this._rangeStripColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RANGE_STRIP_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RANGE_STRIP_COLOR,
      merge: () => !1
    });
  }
  get showTimeInfo() {
    return this._showTimeInfo;
  }
  set showTimeInfo(e) {
    const t = this._showTimeInfo;
    this._showTimeInfo = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SHOW_TIME_INFO),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SHOW_TIME_INFO,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.TIMELINE_MIN:
        return this.timelineMin;
      case r.TIMELINE_MAX:
        return this.timelineMax;
      case r.RANGE_START:
        return this.rangeStart;
      case r.RANGE_END:
        return this.rangeEnd;
      case r.RELATIVE_TIME:
        return this.relativeTime;
      case r.RANGE_START_VARIABLE:
        return this.rangeStartVariable;
      case r.RANGE_END_VARIABLE:
        return this.rangeEndVariable;
      case r.START_TIME:
        return this.startTime;
      case r.END_TIME:
        return this.endTime;
      case r.CURRENT_TIME:
        return this.currentTime;
      case r.STEP_SIZE:
        return this.stepSize;
      case r.PLAYBACK_SPEED:
        return this.playbackSpeed;
      case r.AUTO_PLAY:
        return this.autoPlay;
      case r.FIX_START_KNOB:
        return this.fixStartKnob;
      case r.SHOW_CONTROLS:
        return this.showControls;
      case r.RANGE_STRIP_COLOR:
        return this.rangeStripColor;
      case r.SHOW_TIME_INFO:
        return this.showTimeInfo;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.TIMELINE_MIN:
        this.timelineMin = t, super.eSet(e, t);
        break;
      case r.TIMELINE_MAX:
        this.timelineMax = t, super.eSet(e, t);
        break;
      case r.RANGE_START:
        this.rangeStart = t, super.eSet(e, t);
        break;
      case r.RANGE_END:
        this.rangeEnd = t, super.eSet(e, t);
        break;
      case r.RELATIVE_TIME:
        this.relativeTime = t, super.eSet(e, t);
        break;
      case r.RANGE_START_VARIABLE:
        this.rangeStartVariable = t, super.eSet(e, t);
        break;
      case r.RANGE_END_VARIABLE:
        this.rangeEndVariable = t, super.eSet(e, t);
        break;
      case r.START_TIME:
        this.startTime = t, super.eSet(e, t);
        break;
      case r.END_TIME:
        this.endTime = t, super.eSet(e, t);
        break;
      case r.CURRENT_TIME:
        this.currentTime = t, super.eSet(e, t);
        break;
      case r.STEP_SIZE:
        this.stepSize = t, super.eSet(e, t);
        break;
      case r.PLAYBACK_SPEED:
        this.playbackSpeed = t, super.eSet(e, t);
        break;
      case r.AUTO_PLAY:
        this.autoPlay = t, super.eSet(e, t);
        break;
      case r.FIX_START_KNOB:
        this.fixStartKnob = t, super.eSet(e, t);
        break;
      case r.SHOW_CONTROLS:
        this.showControls = t, super.eSet(e, t);
        break;
      case r.RANGE_STRIP_COLOR:
        this.rangeStripColor = t, super.eSet(e, t);
        break;
      case r.SHOW_TIME_INFO:
        this.showTimeInfo = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.TIMELINE_MIN:
        return this._timelineMin !== void 0;
      case r.TIMELINE_MAX:
        return this._timelineMax !== void 0;
      case r.RANGE_START:
        return this._rangeStart !== void 0;
      case r.RANGE_END:
        return this._rangeEnd !== void 0;
      case r.RELATIVE_TIME:
        return this._relativeTime !== void 0;
      case r.RANGE_START_VARIABLE:
        return this._rangeStartVariable !== void 0;
      case r.RANGE_END_VARIABLE:
        return this._rangeEndVariable !== void 0;
      case r.START_TIME:
        return this._startTime !== void 0;
      case r.END_TIME:
        return this._endTime !== void 0;
      case r.CURRENT_TIME:
        return this._currentTime !== void 0;
      case r.STEP_SIZE:
        return this._stepSize !== "hour";
      case r.PLAYBACK_SPEED:
        return this._playbackSpeed !== 1;
      case r.AUTO_PLAY:
        return this._autoPlay !== !1;
      case r.FIX_START_KNOB:
        return this._fixStartKnob !== !1;
      case r.SHOW_CONTROLS:
        return this._showControls !== !0;
      case r.RANGE_STRIP_COLOR:
        return this._rangeStripColor !== "#d17600";
      case r.SHOW_TIME_INFO:
        return this._showTimeInfo !== !0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.TIMELINE_MIN:
        this._timelineMin = void 0;
        return;
      case r.TIMELINE_MAX:
        this._timelineMax = void 0;
        return;
      case r.RANGE_START:
        this._rangeStart = void 0;
        return;
      case r.RANGE_END:
        this._rangeEnd = void 0;
        return;
      case r.RELATIVE_TIME:
        this._relativeTime = void 0;
        return;
      case r.RANGE_START_VARIABLE:
        this._rangeStartVariable = void 0;
        return;
      case r.RANGE_END_VARIABLE:
        this._rangeEndVariable = void 0;
        return;
      case r.START_TIME:
        this._startTime = void 0;
        return;
      case r.END_TIME:
        this._endTime = void 0;
        return;
      case r.CURRENT_TIME:
        this._currentTime = void 0;
        return;
      case r.STEP_SIZE:
        this._stepSize = "hour";
        return;
      case r.PLAYBACK_SPEED:
        this._playbackSpeed = 1;
        return;
      case r.AUTO_PLAY:
        this._autoPlay = !1;
        return;
      case r.FIX_START_KNOB:
        this._fixStartKnob = !1;
        return;
      case r.SHOW_CONTROLS:
        this._showControls = !0;
        return;
      case r.RANGE_STRIP_COLOR:
        this._rangeStripColor = "#d17600";
        return;
      case r.SHOW_TIME_INFO:
        this._showTimeInfo = !0;
        return;
      default:
        super.eUnset(e);
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
      timelineMin: this.timelineMin,
      timelineMax: this.timelineMax,
      rangeStart: this.rangeStart,
      rangeEnd: this.rangeEnd,
      relativeTime: this.relativeTime,
      rangeStartVariable: this.rangeStartVariable,
      rangeEndVariable: this.rangeEndVariable,
      startTime: this.startTime,
      endTime: this.endTime,
      currentTime: this.currentTime,
      stepSize: this.stepSize,
      playbackSpeed: this.playbackSpeed,
      autoPlay: this.autoPlay,
      fixStartKnob: this.fixStartKnob,
      showControls: this.showControls,
      rangeStripColor: this.rangeStripColor,
      showTimeInfo: this.showTimeInfo
    };
  }
}
class We extends Gt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new We()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(c.eINSTANCE);
  }
  /**
   * Create a new RelativeTimeConfig instance
   */
  createRelativeTimeConfig() {
    return new b();
  }
  /**
   * Create a new TimelineSettings instance
   */
  createTimelineSettings() {
    return new r();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "RelativeTimeConfig":
        return this.createRelativeTimeConfig();
      case "TimelineSettings":
        return this.createTimelineSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
const ia = {
  class: "settings-section",
  "data-section": "Zeitraum"
}, la = { class: "settings-container" }, oa = { class: "setting-group" }, ua = {
  key: 0,
  class: "setting-group"
}, ca = { class: "relative-time-config" }, da = { class: "relative-time-row" }, Ea = { class: "relative-time-preview" }, va = { class: "setting-group" }, ga = { class: "datetime-group" }, Ta = { class: "setting-group" }, Sa = {
  key: 0,
  class: "datetime-group"
}, ha = { class: "setting-group" }, fa = { class: "variable-config" }, ma = { class: "variable-config" }, _a = /* @__PURE__ */ ot({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(L) {
    const e = Me("i18n"), t = (l) => e ? e.t(l) : l, g = ut(L, "modelValue"), a = p("absolute"), S = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ], M = /* @__PURE__ */ new Date(), le = new Date(M.getTime() - 720 * 60 * 60 * 1e3), te = new Date(M.getTime() + 10080 * 60 * 1e3), ae = new Date(M.getTime() - 1440 * 60 * 1e3), j = /* @__PURE__ */ new Date(), i = p({
      timelineMin: le.toISOString(),
      timelineMax: te.toISOString(),
      rangeStart: ae.toISOString(),
      rangeEnd: j.toISOString(),
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
    }), O = p(!1), m = p(), U = p(), W = p(), y = p(), C = (l) => String(l).padStart(2, "0"), A = (l) => k({
      get: () => {
        const o = l.value;
        return o ? `${o.getFullYear()}-${C(o.getMonth() + 1)}-${C(o.getDate())}` : "";
      },
      set: (o) => {
        if (!o) return void (l.value = void 0);
        const [d, _, N] = o.split("-").map(Number), Q = l.value ? new Date(l.value) : /* @__PURE__ */ new Date();
        Q.setFullYear(d, _ - 1, N), l.value = Q;
      }
    }), Z = (l) => k({
      get: () => {
        const o = l.value;
        return o ? `${C(o.getHours())}:${C(o.getMinutes())}` : "";
      },
      set: (o) => {
        if (!o) return void (l.value = void 0);
        const [d, _] = o.split(":").map(Number), N = l.value ? new Date(l.value) : /* @__PURE__ */ new Date();
        N.setHours(d, _, 0, 0), l.value = N;
      }
    }), x = A(m), F = Z(U), V = A(W), oe = Z(y), G = p(null), re = p(!1), se = p(!1), Ee = p(new Be("")), ve = p(new Be("")), Le = k(() => G.value ? G.value.getAllVariables().map(([l, o]) => o).filter((l) => l.value && typeof l.value == "string").map((l) => ({ name: l.name, value: l.value })) : []), ze = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ], ne = () => {
      a.value === "relative" ? (i.value.relativeTime.enabled = !0, K()) : i.value.relativeTime.enabled = !1, z();
    }, $ = () => {
      i.value.relativeTime?.enabled && K(), z();
    }, q = (l, o) => {
      const d = /* @__PURE__ */ new Date(), _ = new Date(d), N = Number(l) || 24;
      switch (typeof o == "object" && o !== null ? o.value : o) {
        case "hours":
          _.setHours(_.getHours() - N);
          break;
        case "days":
          _.setDate(_.getDate() - N);
          break;
        case "weeks":
          _.setDate(_.getDate() - N * 7);
          break;
        case "months":
          _.setMonth(_.getMonth() - N);
          break;
        case "years":
          _.setFullYear(_.getFullYear() - N);
          break;
        default:
          _.setHours(_.getHours() - N);
      }
      return { start: _, end: d };
    }, K = () => {
      if (!i.value.relativeTime?.enabled) return;
      const { start: l, end: o } = q(
        i.value.relativeTime.offset,
        i.value.relativeTime.unit
      ), _ = (o.getTime() - l.getTime()) * 0.2, N = o, Q = new Date(o.getTime() - _);
      if (i.value.timelineMin = l.toISOString(), i.value.timelineMax = o.toISOString(), i.value.rangeStart = Q.toISOString(), i.value.rangeEnd = N.toISOString(), g.value.timelineMin = i.value.timelineMin, g.value.timelineMax = i.value.timelineMax, g.value.rangeStart = i.value.rangeStart, g.value.rangeEnd = i.value.rangeEnd, i.value.rangeStartVariable && G.value) {
        const ie = G.value.getVariable(i.value.rangeStartVariable);
        ie && (ie.value = i.value.rangeStart);
      }
      if (i.value.rangeEndVariable && G.value) {
        const ie = G.value.getVariable(i.value.rangeEndVariable);
        ie && (ie.value = i.value.rangeEnd);
      }
    }, fe = () => {
      re.value || (i.value.rangeStartVariable = void 0), z();
    }, ye = () => {
      se.value || (i.value.rangeEndVariable = void 0), z();
    }, Ae = () => {
      if (i.value.rangeStartVariable && G.value) {
        const l = G.value.getVariable(i.value.rangeStartVariable);
        l && (Ee.value.setTo(l), i.value.rangeStart = Ee.value.value);
      }
      if (i.value.rangeEndVariable && G.value) {
        const l = G.value.getVariable(i.value.rangeEndVariable);
        l && (ve.value.setTo(l), i.value.rangeEnd = ve.value.value);
      }
      z();
    }, ge = (l, o) => {
      if (!l) return;
      const d = new Date(l);
      return o && (d.setHours(o.getHours()), d.setMinutes(o.getMinutes()), d.setSeconds(o.getSeconds())), d.toISOString();
    }, Ke = () => {
      i.value.timelineMin = ge(m.value, U.value), z();
    }, He = () => {
      i.value.timelineMin = ge(m.value, U.value), z();
    }, $e = () => {
      i.value.timelineMax = ge(W.value, y.value), z();
    }, Xe = () => {
      i.value.timelineMax = ge(W.value, y.value), z();
    }, z = () => {
      let l = i.value.rangeStart, o = i.value.rangeEnd;
      re.value && Ee.value.value && (l = Ee.value.value), se.value && ve.value.value && (o = ve.value.value);
      const d = {
        ...i.value,
        timelineMin: i.value.timelineMin,
        timelineMax: O.value ? (/* @__PURE__ */ new Date()).toISOString() : i.value.timelineMax,
        rangeStart: l,
        rangeEnd: o,
        relativeTime: i.value.relativeTime,
        rangeStartVariable: i.value.rangeStartVariable,
        rangeEndVariable: i.value.rangeEndVariable,
        stepSize: i.value.stepSize,
        playbackSpeed: i.value.playbackSpeed,
        autoPlay: i.value.autoPlay,
        rangeStripColor: i.value.rangeStripColor,
        fixStartKnob: i.value.fixStartKnob,
        showTimeInfo: i.value.showTimeInfo,
        showControls: i.value.showControls
      };
      Ye(d);
    };
    function Ve() {
      return i.value.relativeTime || (i.value.relativeTime = { enabled: !1, offset: 24, unit: "hours" }), i.value.relativeTime;
    }
    const Ce = [
      "timelineMin",
      "timelineMax",
      "rangeStart",
      "rangeEnd",
      "rangeStartVariable",
      "rangeEndVariable",
      "startTime",
      "endTime",
      "currentTime",
      "stepSize",
      "playbackSpeed",
      "autoPlay",
      "fixStartKnob",
      "showControls",
      "rangeStripColor",
      "showTimeInfo"
    ];
    function Ye(l) {
      const o = g.value;
      for (const N of Ce) {
        const Q = l[N];
        Q !== void 0 && (o[N] = Q);
      }
      const d = l.relativeTime;
      if (!d) return;
      const _ = Oe(o);
      _.enabled = d.enabled, _.offset = d.offset, _.unit = d.unit;
    }
    function Oe(l) {
      const o = l.relativeTime;
      if (o) return o;
      const _ = typeof l.eClass == "function" ? We.eINSTANCE.createRelativeTimeConfig() : { enabled: !1, offset: 24, unit: "hours" };
      return l.relativeTime = _, _;
    }
    const je = () => {
      O.value || i.value.timelineMax || (i.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), z();
    }, Re = () => {
      const l = /* @__PURE__ */ new Date(), o = new Date(l.getTime() - 720 * 60 * 60 * 1e3), d = new Date(l.getTime() + 10080 * 60 * 1e3), _ = new Date(l.getTime() - 1440 * 60 * 1e3), N = /* @__PURE__ */ new Date();
      i.value = {
        timelineMin: o.toISOString(),
        timelineMax: d.toISOString(),
        rangeStart: _.toISOString(),
        rangeEnd: N.toISOString(),
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
      }, a.value = "absolute", O.value = !1, z();
    }, ue = Me(Et);
    return ct(() => {
      try {
        if (G.value = ue ?? null, !G.value) throw new Error("VariableRepository not provided");
      } catch (l) {
        console.warn("VariableRepository not found in container:", l);
      }
      if (g.value && g.value.timelineMin) {
        if (Object.assign(i.value, nt(g.value)), O.value = !g.value.timelineMax, re.value = !!g.value.rangeStartVariable, se.value = !!g.value.rangeEndVariable, a.value = Ve().enabled ? "relative" : "absolute", i.value.timelineMin) {
          const l = new Date(i.value.timelineMin);
          m.value = l, U.value = l;
        }
        if (i.value.timelineMax) {
          const l = new Date(i.value.timelineMax);
          W.value = l, y.value = l;
        }
      } else
        Re();
      z();
    }), De(() => g.value, (l) => {
      l && (Object.assign(i.value, nt(l)), Ve(), O.value = !l.timelineMax, l.relativeTime && (a.value = l.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (l, o) => (P(), H("section", ia, [
      T("div", la, [
        T("div", oa, [
          ee(B(Fe), {
            modelValue: a.value,
            "onUpdate:modelValue": [
              o[0] || (o[0] = (d) => a.value = d),
              ne
            ],
            label: t("Time Range Mode"),
            options: S,
            "label-key": "label",
            "value-key": "value"
          }, null, 8, ["modelValue", "label"])
        ]),
        a.value === "relative" && i.value.relativeTime ? (P(), H("div", ua, [
          T("label", null, Y(t("Relative Time Range")), 1),
          T("div", ca, [
            T("div", da, [
              ee(B(Ct), {
                modelValue: i.value.relativeTime.offset,
                "onUpdate:modelValue": [
                  o[1] || (o[1] = (d) => i.value.relativeTime.offset = d),
                  $
                ],
                modelModifiers: { number: !0 },
                label: t("Offset"),
                type: "number",
                min: 1,
                max: 1e4,
                class: "offset-input"
              }, null, 8, ["modelValue", "label"]),
              ee(B(Fe), {
                modelValue: i.value.relativeTime.unit,
                "onUpdate:modelValue": [
                  o[2] || (o[2] = (d) => i.value.relativeTime.unit = d),
                  $
                ],
                options: ze,
                label: t("Unit"),
                "label-key": "text",
                "value-key": "value",
                class: "unit-select"
              }, null, 8, ["modelValue", "label"])
            ]),
            T("div", Ea, Y(t("Now")) + " - " + Y(i.value.relativeTime.offset) + " " + Y(t(i.value.relativeTime.unit)) + " → " + Y(t("Now")), 1)
          ])
        ])) : he("", !0),
        a.value === "absolute" ? (P(), H(dt, { key: 1 }, [
          T("div", va, [
            T("label", null, Y(t("Timeline Start")), 1),
            T("div", ga, [
              ee(B(Ge), {
                modelValue: B(x),
                "onUpdate:modelValue": [
                  o[3] || (o[3] = (d) => xe(x) ? x.value = d : null),
                  Ke
                ],
                mode: "date",
                label: t("Date")
              }, null, 8, ["modelValue", "label"]),
              ee(B(Ge), {
                modelValue: B(F),
                "onUpdate:modelValue": [
                  o[4] || (o[4] = (d) => xe(F) ? F.value = d : null),
                  He
                ],
                mode: "time",
                label: t("Time")
              }, null, 8, ["modelValue", "label"])
            ])
          ]),
          T("div", Ta, [
            T("label", null, Y(t("Timeline End")), 1),
            ee(B(Je), {
              modelValue: O.value,
              "onUpdate:modelValue": [
                o[5] || (o[5] = (d) => O.value = d),
                je
              ],
              label: t("Use current time")
            }, null, 8, ["modelValue", "label"]),
            O.value ? he("", !0) : (P(), H("div", Sa, [
              ee(B(Ge), {
                modelValue: B(V),
                "onUpdate:modelValue": [
                  o[6] || (o[6] = (d) => xe(V) ? V.value = d : null),
                  $e
                ],
                mode: "date",
                label: t("Date")
              }, null, 8, ["modelValue", "label"]),
              ee(B(Ge), {
                modelValue: B(oe),
                "onUpdate:modelValue": [
                  o[7] || (o[7] = (d) => xe(oe) ? oe.value = d : null),
                  Xe
                ],
                mode: "time",
                label: t("Time")
              }, null, 8, ["modelValue", "label"])
            ]))
          ])
        ], 64)) : he("", !0),
        T("div", ha, [
          T("label", null, Y(t("Variable Binding")), 1),
          T("div", fa, [
            ee(B(Je), {
              modelValue: re.value,
              "onUpdate:modelValue": [
                o[8] || (o[8] = (d) => re.value = d),
                fe
              ],
              label: t("Start time from variable")
            }, null, 8, ["modelValue", "label"]),
            re.value ? (P(), st(B(Fe), {
              key: 0,
              modelValue: i.value.rangeStartVariable,
              "onUpdate:modelValue": [
                o[9] || (o[9] = (d) => i.value.rangeStartVariable = d),
                Ae
              ],
              options: Le.value,
              label: t("Start variable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : he("", !0)
          ]),
          T("div", ma, [
            ee(B(Je), {
              modelValue: se.value,
              "onUpdate:modelValue": [
                o[10] || (o[10] = (d) => se.value = d),
                ye
              ],
              label: t("End time from variable")
            }, null, 8, ["modelValue", "label"]),
            se.value ? (P(), st(B(Fe), {
              key: 0,
              modelValue: i.value.rangeEndVariable,
              "onUpdate:modelValue": [
                o[11] || (o[11] = (d) => i.value.rangeEndVariable = d),
                Ae
              ],
              options: Le.value,
              label: t("End variable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : he("", !0)
          ])
        ])
      ])
    ]));
  }
}), pa = /* @__PURE__ */ gt(_a, [["__scopeId", "data-v-3d51581e"]]), Ia = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", Na = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: at },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: at }
], ba = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the timeline: playing it and drawing it.

Which stretch of time it covers stays with the hand-written component - it
is given either as two moments or as an offset from now, typed or taken
from a variable, and each end is edited as a date and a time apart. None of
that is a field.

The step and the speed store what the widget switches on; optionLabel gives
them the words. The speed is a factor, so its labels are the factors.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="TimelineSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings"/>

  <components xsi:type="uimodel:FormView" name="TimelineSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="playbackGroup" layout="VERTICAL" label="Wiedergabe">
      <fields xsi:type="uimodel:SelectWidget" name="stepSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/stepSize" label="Schrittweite">
        <values>minute</values>
        <values>hour</values>
        <values>day</values>
        <values>week</values>
        <values>month</values>
        <optionLabel language="JS" body="({ minute: 'Eine Minute', hour: 'Eine Stunde', day: 'Ein Tag', week: 'Eine Woche', month: 'Ein Monat' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="playbackSpeed"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/playbackSpeed" label="Geschwindigkeit">
        <values>0.25</values>
        <values>0.5</values>
        <values>1</values>
        <values>2</values>
        <values>4</values>
        <optionLabel language="JS" body="option + '-fach'"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget" name="autoPlay"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/autoPlay" label="Beim Laden starten"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="fixStartKnob"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/fixStartKnob" label="Anfang festhalten"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showControls"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/showControls" label="Bedienelemente zeigen"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="lookGroup" layout="VERTICAL" label="Darstellung">
      <fields xsi:type="uimodel:InputWidget" name="rangeStripColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/rangeStripColor" label="Farbe des Ausschnitts"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showTimeInfo"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/showTimeInfo" label="Zeitangaben zeigen"/>
    </fields>

  </components>
</uimodel:UIModel>
`;
var Ma = Object.defineProperty, wa = Object.getOwnPropertyDescriptor, Qe = (L, e, t, g) => {
  for (var a = g > 1 ? void 0 : g ? wa(e, t) : e, S = L.length - 1, M; S >= 0; S--)
    (M = L[S]) && (a = (g ? M(e, t, a) : M(a)) || a);
  return g && a && Ma(e, t, a), a;
}, lt = (L, e) => (t, g) => e(t, g, L);
c.eINSTANCE;
const be = "TimelineWidget";
let ke = class {
  constructor(L, e) {
    this.events = L, this.actions = e;
  }
  type = be;
  component = na;
  settingsComponent = pa;
  supportedDSTypes = [];
  icon = Ia;
  name = "Timeline";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: ba,
    uri: "/timeline-settings.ui.xmi",
    ePackage: () => c.eINSTANCE,
    create: () => new r(),
    /*
     * Which stretch of time the timeline covers is not a field: it is two
     * moments or an offset from now, typed or taken from a variable, with
     * each end edited as a date and a time apart.
     */
    unmodelledSections: ["Zeitraum"]
  };
  register() {
    this.events.registerWidget(be, Na), this.actions.registerWidgetType(be, we, "widget");
  }
  unregister() {
    this.events.unregisterWidget(be), this.actions.unregisterWidgetType(be);
  }
};
Qe([
  _t()
], ke.prototype, "register", 1);
Qe([
  pt()
], ke.prototype, "unregister", 1);
ke = Qe([
  It({
    service: [Bt],
    properties: { "widget.type": be }
  }),
  lt(0, rt(ft)),
  lt(1, rt(mt))
], ke);
export {
  r as TimelineSettingsImpl,
  na as TimelineWidget,
  ke as TimelineWidgetProvider,
  pa as TimelineWidgetSettings,
  c as TimelinesettingsPackage,
  ba as timelineSettingsFormXmi
};
