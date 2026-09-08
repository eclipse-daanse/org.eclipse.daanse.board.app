(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-82423c81]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-82423c81]{overflow:hidden;position:relative;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-82423c81]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-82423c81]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-82423c81]:hover{filter:brightness(1.1)}.range-strip[data-v-82423c81]:active{cursor:grabbing}.timeline-knob[data-v-82423c81]{position:absolute;top:50%;width:24px;height:24px;background:var(--va-primary);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-82423c81]:hover{background:var(--va-primary-dark);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-82423c81]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-82423c81]{left:0;z-index:4}.fixed-knob[data-v-82423c81]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-82423c81]:hover{transform:translate(-50%,-50%)!important;background:var(--va-background-border)!important}.end-knob[data-v-82423c81]{right:-24px;z-index:4}.time-axis[data-v-82423c81]{position:relative;height:30px;background:var(--va-background-secondary);border-top:1px solid var(--va-background-border);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-82423c81]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-82423c81]{width:1px;height:8px;background:var(--va-text-secondary);margin-top:2px}.tick-label[data-v-82423c81]{font-size:.7rem;color:var(--va-text-secondary);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-82423c81]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:6px;padding:.75rem}.time-display[data-v-82423c81]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-82423c81]{font-size:.8rem;font-weight:500;color:var(--va-text-secondary)}.time-value[data-v-82423c81]{font-size:.9rem;font-weight:600;color:var(--va-text-primary);word-wrap:break-word}.controls[data-v-82423c81]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-82423c81]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--va-primary));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-82423c81]:hover:not(:disabled){background:var(--va-primary-dark);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-82423c81]:disabled{background:var(--va-background-border);color:var(--va-text-secondary);cursor:not-allowed;transform:none}.play-button.playing[data-v-82423c81]{background:var(--play-button-playing, #ff6b35);animation:pulse-82423c81 2s infinite}.play-button.playing[data-v-82423c81]:hover{filter:brightness(.9)}@keyframes pulse-82423c81{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-82423c81]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-82423c81]{font-weight:500;color:var(--va-text-primary);min-width:fit-content}.speed-control select[data-v-82423c81]{padding:.5rem;border:1px solid var(--va-background-border);border-radius:4px;background:var(--va-background-primary);color:var(--va-text-primary);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-82423c81]{flex-direction:column;gap:.75rem}.time-display[data-v-82423c81]{text-align:left}.controls[data-v-82423c81]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-82423c81]{width:28px;height:28px}.tick-label[data-v-82423c81]{font-size:.6rem}.timeline-container[data-v-82423c81]{min-height:70px}.timeline-track[data-v-82423c81]{height:35px}}.settings-container[data-v-0a85bc8a]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-0a85bc8a]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-0a85bc8a]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.datetime-group[data-v-0a85bc8a]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-0a85bc8a]>*{flex:1;min-width:0}.relative-time-config[data-v-0a85bc8a]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--va-background-element);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-0a85bc8a]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-0a85bc8a]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-0a85bc8a]{flex:2;min-width:80px}.relative-time-preview[data-v-0a85bc8a]{font-size:.85rem;color:var(--va-primary);padding:.5rem;background:var(--va-background-secondary);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-0a85bc8a]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { WidgetActionInterfaceImpl as dt, EVENT_ACTIONS_REGISTRY as Et, PayloadImpl as je, EVENT_REGISTRY_ID as vt, EVENT_ACTIONS_REGISTRY_ID as gt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Tt, deactivate as St, component as ht, inject as Ze } from "@eclipse-daanse/tsm";
import { defineComponent as Qe, mergeModels as ft, inject as me, toRefs as _t, useModel as et, ref as p, computed as z, watch as Me, onMounted as tt, onUnmounted as mt, createElementBlock as $, openBlock as P, withModifiers as We, createElementVNode as S, createCommentVNode as ce, normalizeStyle as he, Fragment as at, renderList as pt, toDisplayString as Y, normalizeClass as It, withDirectives as Nt, createStaticVNode as bt, vModelSelect as Mt, resolveComponent as fe, createBlock as ze, withCtx as wt, createVNode as ee } from "vue";
import { useRoute as Rt } from "vue-router";
import { VariableWrapper as ye } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as st } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as Ce } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEObject as rt, BasicEFactory as Dt, BasicEPackage as At, EPackageRegistry as yt, BasicEClass as qe, BasicEAttribute as A, BasicEReference as Vt, getEcorePackage as y } from "@emfts/core";
import { WIDGET_SERVICE_ID as Ct } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Lt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var Ot = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, Oe = (V, e, t, g) => {
  for (var a = xt(e, t), v = V.length - 1, O; v >= 0; v--)
    (O = V[v]) && (a = O(e, t, a) || a);
  return a && Ot(e, t, a), a;
};
class pe extends dt {
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
Oe([
  Ce({ eventType: "timeline.zoomIn" })
], pe.prototype, "zoomIn");
Oe([
  Ce({ eventType: "timeline.zoomOut" })
], pe.prototype, "zoomOut");
Oe([
  Ce({ eventType: "timeline.setDateRange" })
], pe.prototype, "setDateRange");
Oe([
  Ce({ eventType: "timeline.jumpToNow" })
], pe.prototype, "jumpToNow");
const Ft = { class: "timeline-container" }, Gt = ["title"], Bt = {
  key: 1,
  class: "timeline-knob start-knob fixed-knob",
  title: "Startzeit (fixiert)"
}, kt = { class: "time-axis" }, Pt = { class: "tick-label" }, Ut = {
  key: 0,
  class: "time-info"
}, Wt = { class: "time-display" }, zt = { class: "time-value" }, Kt = { class: "time-display" }, Ht = { class: "time-value" }, Xt = { class: "time-display" }, $t = { class: "time-value" }, Yt = {
  key: 1,
  class: "controls"
}, jt = ["disabled"], Zt = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, qt = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, Jt = { class: "speed-control" }, Qt = /* @__PURE__ */ Qe({
  __name: "TimelineWidget",
  props: /* @__PURE__ */ ft({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(V, { expose: e }) {
    me("i18n");
    const t = V, { id: g } = _t(t), a = et(V, "configv"), v = me(Lt.TINY_EMITTER), O = me(Et), te = Rt().params.pageid || "";
    class ae extends pe {
      zoomIn() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), c = (E.getTime() - r.getTime()) * 0.25, h = new Date(r.getTime() + c), f = new Date(E.getTime() - c);
        f.getTime() - h.getTime() > 6e4 && (a.value = { ...a.value, rangeStart: h.toISOString(), rangeEnd: f.toISOString() });
      }
      zoomOut() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), c = (E.getTime() - r.getTime()) * 0.5, h = new Date(Math.max(
          r.getTime() - c,
          new Date(a.value.timelineMin || 0).getTime()
        )), f = new Date(Math.min(
          E.getTime() + c,
          new Date(a.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        a.value = { ...a.value, rangeStart: h.toISOString(), rangeEnd: f.toISOString() };
      }
      setDateRange(r, E) {
        a.value = { ...a.value, rangeStart: r, rangeEnd: E };
      }
      jumpToNow() {
        const r = /* @__PURE__ */ new Date(), E = new Date(a.value.rangeEnd || r).getTime() - new Date(a.value.rangeStart || r).getTime(), l = r, c = new Date(r.getTime() - E);
        a.value = { ...a.value, rangeStart: c.toISOString(), rangeEnd: l.toISOString() };
      }
    }
    const j = new ae();
    e(j);
    const se = () => {
      g?.value && v.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, i = () => {
      g?.value && v.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: g.value,
        payload: { widgetId: g.value, timestamp: Date.now() }
      });
    }, T = p(null), G = p(new ye("")), B = p(new ye("")), M = p(!1), C = p(a.value.playbackSpeed || 1), m = p(!1), k = p(), w = p(null), x = p(null), R = p(null);
    let ie = null, Ie = 0;
    const we = new Date(Date.now() - 720 * 60 * 60 * 1e3), Ne = new Date(Date.now() + 10080 * 60 * 1e3), Re = new Date(Date.now() - 1440 * 60 * 1e3), be = /* @__PURE__ */ new Date(), xe = (n, r) => {
      const E = /* @__PURE__ */ new Date(), l = new Date(E), c = Number(n) || 24;
      switch (typeof r == "object" && r !== null ? r.value : r) {
        case "hours":
          l.setHours(l.getHours() - c);
          break;
        case "days":
          l.setDate(l.getDate() - c);
          break;
        case "weeks":
          l.setDate(l.getDate() - c * 7);
          break;
        case "months":
          l.setMonth(l.getMonth() - c);
          break;
        case "years":
          l.setFullYear(l.getFullYear() - c);
          break;
        default:
          l.setHours(l.getHours() - c);
      }
      return { start: l, end: E };
    }, Fe = () => {
      if (!a.value.relativeTime?.enabled) return;
      const { start: n, end: r } = xe(
        a.value.relativeTime.offset,
        a.value.relativeTime.unit
      );
      a.value.timelineMin = n.toISOString(), a.value.timelineMax = r.toISOString();
      const l = (r.getTime() - n.getTime()) * 0.2, c = r, h = new Date(r.getTime() - l);
      if (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = c.toISOString(), a.value.rangeStartVariable && T.value) {
        const f = T.value.getVariable(a.value.rangeStartVariable);
        f && (f.value = h.toISOString());
      }
      if (a.value.rangeEndVariable && T.value) {
        const f = T.value.getVariable(a.value.rangeEndVariable);
        f && (f.value = c.toISOString());
      }
    }, Q = z(() => a.value.timelineMin ? new Date(a.value.timelineMin) : we), U = z(() => a.value.timelineMax ? new Date(a.value.timelineMax) : Ne), Z = z(() => {
      if (a.value.rangeStartVariable && T.value) {
        const n = T.value.getVariable(a.value.rangeStartVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeStart ? new Date(a.value.rangeStart) : Re;
    }), K = z(() => {
      if (a.value.rangeEndVariable && T.value) {
        const n = T.value.getVariable(a.value.rangeEndVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeEnd ? new Date(a.value.rangeEnd) : be;
    }), de = z(() => {
      if (a.value.fixStartKnob)
        return 0;
      if (w.value !== null)
        return w.value;
      const n = Q.value.getTime(), r = U.value.getTime(), E = Z.value.getTime();
      return Math.max(0, Math.min(100, (E - n) / (r - n) * 100));
    }), Le = z(() => {
      if (x.value !== null)
        return x.value;
      const n = Q.value.getTime(), r = U.value.getTime(), E = K.value.getTime();
      return Math.max(0, Math.min(100, (E - n) / (r - n) * 100));
    }), W = z(() => R.value ? {
      ...R.value,
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    } : {
      left: de.value + "%",
      width: Le.value - de.value + "%",
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    }), De = (n) => {
      const E = (a.value.rangeStripColor || "#d17600").replace("#", ""), l = parseInt(E.substr(0, 2), 16), c = parseInt(E.substr(2, 2), 16), h = parseInt(E.substr(4, 2), 16);
      return `rgba(${l}, ${c}, ${h}, ${n})`;
    }, Ge = z(() => {
      const n = a.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: Be(n)
      };
    }), Be = (n) => {
      const r = n.replace("#", ""), E = parseInt(r.substr(0, 2), 16), l = parseInt(r.substr(2, 2), 16), c = parseInt(r.substr(4, 2), 16), h = 0.6, f = Math.min(255, Math.round(E + (255 - E) * h)), N = Math.min(255, Math.round(l + (255 - l) * h)), D = Math.min(255, Math.round(c + (255 - c) * h));
      return `rgb(${f}, ${N}, ${D})`;
    }, d = () => {
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
    }, u = z(() => {
      const n = a.value.rangeStripColor || "#d17600", r = L(n);
      return {
        "--play-button-bg": n,
        "--play-button-playing": r
      };
    }), L = (n) => {
      const r = n.replace("#", ""), E = parseInt(r.substr(0, 2), 16), l = parseInt(r.substr(2, 2), 16), c = parseInt(r.substr(4, 2), 16), h = 0.8, N = Math.min(255, Math.round(E * h * 1.1)), D = Math.round(l * h), X = Math.round(c * h);
      return `rgb(${N}, ${D}, ${X})`;
    }, I = z(() => K.value.getTime() >= U.value.getTime()), F = z(() => Le.value - de.value >= 10 ? !1 : de.value > 50), le = z(() => {
      const n = [], r = Q.value.getTime(), l = U.value.getTime() - r, c = 8;
      for (let h = 0; h <= c; h++) {
        const f = r + l / c * h, N = new Date(f), D = h / c * 100, X = N.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        n.push({
          timestamp: N.toISOString(),
          position: D,
          label: X
        });
      }
      return n;
    }), H = (n) => n.toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), ke = () => {
      const n = K.value.getTime() - Z.value.getTime(), r = Math.floor(n / (1e3 * 60 * 60)), E = Math.floor(r / 24);
      return E > 0 ? `${E}d ${r % 24}h` : r > 0 ? `${r}h` : `${Math.floor(n / (1e3 * 60))}min`;
    }, _ = () => k.value?.getBoundingClientRect();
    let Ee = null;
    const Ae = (n, r, E = !1) => {
      const l = a.value.fixStartKnob ? Q.value : n || Z.value, c = r || K.value;
      if (!l || isNaN(l.getTime()) || !c || isNaN(c.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: l, actualEnd: c });
        return;
      }
      const h = () => {
        if (a.value = {
          ...a.value,
          rangeStart: l.toISOString(),
          rangeEnd: c.toISOString(),
          playbackSpeed: C.value
        }, a.value.rangeStartVariable && T.value) {
          const f = T.value.getVariable(a.value.rangeStartVariable);
          f && (f.value = l.toISOString());
        }
        if (a.value.rangeEndVariable && T.value) {
          const f = T.value.getVariable(a.value.rangeEndVariable);
          f && (f.value = c.toISOString());
        }
      };
      E ? (Ee && (clearTimeout(Ee), Ee = null), h()) : (Ee && clearTimeout(Ee), Ee = setTimeout(h, 300));
    }, it = (n) => {
      if (a.value.fixStartKnob)
        return;
      n.preventDefault(), m.value = !0;
      const r = _();
      if (!r) return;
      const E = n.clientX, l = Q.value.getTime(), c = U.value.getTime(), h = (c - l) / r.width, f = Z.value.getTime(), N = K.value.getTime(), D = c - l;
      let X = f;
      const re = (ve) => {
        if (!m.value) return;
        const ge = ve.clientX - E;
        let q = f + ge * h;
        q = Math.max(l, Math.min(q, N - 6e4)), X = q;
        const oe = Math.max(0, Math.min(100, (q - l) / D * 100)), Te = Math.max(0, Math.min(100, (N - l) / D * 100));
        w.value = oe, R.value = {
          left: oe + "%",
          width: Te - oe + "%"
        };
      }, ne = () => {
        m.value = !1, w.value = null, R.value = null, Ae(new Date(X), new Date(N), !0), document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", ne);
      };
      document.addEventListener("mousemove", re), document.addEventListener("mouseup", ne);
    }, Xe = (n) => {
      n.preventDefault(), m.value = !0;
      const r = _();
      if (!r) return;
      const E = n.clientX, l = Q.value.getTime(), c = U.value.getTime(), h = (c - l) / r.width, f = K.value.getTime(), N = Z.value.getTime(), D = c - l;
      let X = f;
      const re = (ve) => {
        if (!m.value) return;
        const ge = ve.clientX - E;
        let q = f + ge * h;
        q = Math.min(c, Math.max(q, N + 6e4)), X = q;
        const oe = Math.max(0, Math.min(100, (N - l) / D * 100)), Te = Math.max(0, Math.min(100, (q - l) / D * 100));
        x.value = Te, R.value = {
          left: oe + "%",
          width: Te - oe + "%"
        };
      }, ne = () => {
        m.value = !1, x.value = null, R.value = null, Ae(new Date(N), new Date(X), !0), document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", ne);
      };
      document.addEventListener("mousemove", re), document.addEventListener("mouseup", ne);
    }, lt = (n) => {
      if (a.value.fixStartKnob) {
        Xe(n);
        return;
      }
      n.preventDefault(), m.value = !0;
      const r = _();
      if (!r) return;
      const E = n.clientX, l = Q.value.getTime(), c = U.value.getTime(), h = (c - l) / r.width, f = Z.value.getTime(), N = K.value.getTime(), D = N - f, X = c - l;
      let re = f, ne = N;
      const ve = (q) => {
        if (!m.value) return;
        const Te = (q.clientX - E) * h;
        let ue = f + Te, Se = ue + D;
        ue < l && (ue = l, Se = ue + D), Se > c && (Se = c, ue = Se - D), re = ue, ne = Se;
        const Ue = Math.max(0, Math.min(100, (ue - l) / X * 100)), Ye = Math.max(0, Math.min(100, (Se - l) / X * 100));
        w.value = Ue, x.value = Ye, R.value = {
          left: Ue + "%",
          width: Ye - Ue + "%"
        };
      }, ge = () => {
        m.value = !1, w.value = null, x.value = null, R.value = null, Ae(new Date(re), new Date(ne), !0), document.removeEventListener("mousemove", ve), document.removeEventListener("mouseup", ge);
      };
      document.addEventListener("mousemove", ve), document.addEventListener("mouseup", ge);
    }, ot = () => {
      M.value = !M.value, M.value ? ut() : Pe();
    }, ut = () => {
      Ie = performance.now(), $e();
    }, Pe = () => {
      ie && (cancelAnimationFrame(ie), ie = null);
    }, $e = () => {
      if (!M.value) return;
      const n = performance.now(), r = n - Ie, E = 1e3 / C.value;
      if (r >= E) {
        const l = Z.value.getTime(), c = K.value.getTime(), h = c - l, f = d();
        console.log("Playback step:", {
          stepSize: a.value.stepSize,
          stepSizeMs: f,
          currentStart: new Date(l).toISOString(),
          currentEnd: new Date(c).toISOString(),
          rangeDuration: h
        });
        const N = l + f, D = N + h;
        if (console.log("New times:", {
          newStart: new Date(N).toISOString(),
          newEnd: new Date(D).toISOString(),
          timelineMax: U.value.toISOString()
        }), D >= U.value.getTime()) {
          Pe(), M.value = !1;
          return;
        }
        Ae(new Date(N), new Date(D)), Ie = n;
      }
      ie = requestAnimationFrame($e);
    };
    Me(() => a.value.rangeStartVariable, (n) => {
      if (n && T.value) {
        const r = T.value.getVariable(n);
        r && G.value.setTo(r);
      }
    }), Me(() => a.value.rangeEndVariable, (n) => {
      if (n && T.value) {
        const r = T.value.getVariable(n);
        r && B.value.setTo(r);
      }
    }), Me(() => G.value.value, (n) => {
      n && a.value.rangeStartVariable && new Date(n).getTime() !== Z.value.getTime() && (a.value.rangeStart = n);
    }), Me(() => B.value.value, (n) => {
      n && a.value.rangeEndVariable && new Date(n).getTime() !== K.value.getTime() && (a.value.rangeEnd = n);
    });
    const ct = me(st);
    return tt(() => {
      g?.value && O.registerInstance(g.value, j, "TimelineWidget", te);
      try {
        if (T.value = ct ?? null, !T.value) throw new Error("VariableRepository not provided");
      } catch (n) {
        console.warn("VariableRepository not found in container:", n);
      }
      if (a.value.timelineMin || (a.value.timelineMin = we.toISOString()), a.value.timelineMax || (a.value.timelineMax = Ne.toISOString()), a.value.rangeStart || (a.value.rangeStart = Re.toISOString()), a.value.rangeEnd || (a.value.rangeEnd = be.toISOString()), a.value.playbackSpeed ? C.value = a.value.playbackSpeed : (a.value.playbackSpeed = 1, C.value = 1), a.value.rangeStripColor || (a.value.rangeStripColor = "#d17600"), a.value.fixStartKnob === void 0 && (a.value.fixStartKnob = !1), a.value.showTimeInfo === void 0 && (a.value.showTimeInfo = !0), a.value.showControls === void 0 && (a.value.showControls = !0), a.value.stepSize === void 0 && (a.value.stepSize = "hour"), a.value.rangeStartVariable && T.value) {
        const n = T.value.getVariable(a.value.rangeStartVariable);
        n && G.value.setTo(n);
      }
      if (a.value.rangeEndVariable && T.value) {
        const n = T.value.getVariable(a.value.rangeEndVariable);
        n && B.value.setTo(n);
      }
      a.value.relativeTime?.enabled && Fe();
    }), mt(() => {
      g?.value && O.unregisterInstance(g.value), Pe();
    }), (n, r) => (P(), $("div", {
      class: "timeline-widget",
      onClick: se,
      onContextmenu: We(i, ["prevent"])
    }, [
      S("div", Ft, [
        S("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: k,
          style: he(Ge.value)
        }, [
          S("div", {
            class: "range-strip",
            style: he(W.value),
            onMousedown: lt,
            title: a.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
          }, [
            a.value.fixStartKnob ? (P(), $("div", Bt)) : (P(), $("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: he({ zIndex: F.value ? 5 : 4 }),
              onMousedown: We(it, ["stop"]),
              title: "Startzeit"
            }, null, 36)),
            S("div", {
              class: "timeline-knob end-knob",
              style: he({ zIndex: F.value ? 3 : 4 }),
              onMousedown: We(Xe, ["stop"]),
              title: "Endzeit"
            }, null, 36)
          ], 44, Gt)
        ], 4),
        S("div", kt, [
          (P(!0), $(at, null, pt(le.value, (E) => (P(), $("div", {
            key: E.timestamp,
            class: "time-tick",
            style: he({ left: E.position + "%" })
          }, [
            r[1] || (r[1] = S("div", { class: "tick-mark" }, null, -1)),
            S("div", Pt, Y(E.label), 1)
          ], 4))), 128))
        ])
      ]),
      a.value.showTimeInfo !== !1 ? (P(), $("div", Ut, [
        S("div", Wt, [
          r[2] || (r[2] = S("span", { class: "time-label" }, "Start:", -1)),
          S("span", zt, Y(H(Z.value)), 1)
        ]),
        S("div", Kt, [
          r[3] || (r[3] = S("span", { class: "time-label" }, "Ende:", -1)),
          S("span", Ht, Y(H(K.value)), 1)
        ]),
        S("div", Xt, [
          r[4] || (r[4] = S("span", { class: "time-label" }, "Dauer:", -1)),
          S("span", $t, Y(ke()), 1)
        ])
      ])) : ce("", !0),
      a.value.showControls !== !1 ? (P(), $("div", Yt, [
        S("button", {
          class: It(["play-button", { playing: M.value }]),
          style: he(u.value),
          onClick: ot,
          disabled: I.value
        }, [
          M.value ? (P(), $("svg", qt, [...r[6] || (r[6] = [
            S("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (P(), $("svg", Zt, [...r[5] || (r[5] = [
            S("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, jt),
        S("div", Jt, [
          r[8] || (r[8] = S("label", null, "Geschwindigkeit:", -1)),
          Nt(S("select", {
            "onUpdate:modelValue": r[0] || (r[0] = (E) => C.value = E)
          }, [...r[7] || (r[7] = [
            bt('<option value="0.25" data-v-82423c81>0.25x</option><option value="0.5" data-v-82423c81>0.5x</option><option value="1" data-v-82423c81>1x</option><option value="2" data-v-82423c81>2x</option><option value="4" data-v-82423c81>4x</option>', 5)
          ])], 512), [
            [Mt, C.value]
          ])
        ])
      ])) : ce("", !0)
    ], 32));
  }
}), nt = (V, e) => {
  const t = V.__vccOpts || V;
  for (const [g, a] of e)
    t[g] = a;
  return t;
}, ea = /* @__PURE__ */ nt(Qt, [["__scopeId", "data-v-82423c81"]]), ta = { class: "settings-container" }, aa = { class: "setting-group" }, sa = {
  key: 0,
  class: "setting-group"
}, ra = { class: "relative-time-config" }, na = { class: "relative-time-row" }, ia = { class: "relative-time-preview" }, la = { class: "setting-group" }, oa = { class: "datetime-group" }, ua = { class: "setting-group" }, ca = {
  key: 0,
  class: "datetime-group"
}, da = { class: "setting-group" }, Ea = { class: "variable-config" }, va = { class: "variable-config" }, ga = /* @__PURE__ */ Qe({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(V) {
    const e = me("i18n"), t = (d) => e ? e.t(d) : d, g = et(V, "modelValue"), a = p({
      /* The only section left, and the reason to open the tab */
      timelineSection: !0
    }), v = p("absolute"), O = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ], J = /* @__PURE__ */ new Date(), te = new Date(J.getTime() - 720 * 60 * 60 * 1e3), ae = new Date(J.getTime() + 10080 * 60 * 1e3), j = new Date(J.getTime() - 1440 * 60 * 1e3), se = /* @__PURE__ */ new Date(), i = p({
      timelineMin: te.toISOString(),
      timelineMax: ae.toISOString(),
      rangeStart: j.toISOString(),
      rangeEnd: se.toISOString(),
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
    }), T = p(!1), G = p(), B = p(), M = p(), C = p(), m = p(null), k = p(!1), w = p(!1), x = p(new ye("")), R = p(new ye("")), ie = z(() => m.value ? m.value.getAllVariables().map(([d, u]) => u).filter((d) => d.value && typeof d.value == "string").map((d) => ({ name: d.name, value: d.value })) : []), Ie = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ], we = () => {
      v.value === "relative" ? (i.value.relativeTime.enabled = !0, be()) : i.value.relativeTime.enabled = !1, W();
    }, Ne = () => {
      i.value.relativeTime?.enabled && be(), W();
    }, Re = (d, u) => {
      const L = /* @__PURE__ */ new Date(), I = new Date(L), F = Number(d) || 24;
      switch (typeof u == "object" && u !== null ? u.value : u) {
        case "hours":
          I.setHours(I.getHours() - F);
          break;
        case "days":
          I.setDate(I.getDate() - F);
          break;
        case "weeks":
          I.setDate(I.getDate() - F * 7);
          break;
        case "months":
          I.setMonth(I.getMonth() - F);
          break;
        case "years":
          I.setFullYear(I.getFullYear() - F);
          break;
        default:
          I.setHours(I.getHours() - F);
      }
      return { start: I, end: L };
    }, be = () => {
      if (!i.value.relativeTime?.enabled) return;
      const { start: d, end: u } = Re(
        i.value.relativeTime.offset,
        i.value.relativeTime.unit
      ), I = (u.getTime() - d.getTime()) * 0.2, F = u, le = new Date(u.getTime() - I);
      if (i.value.timelineMin = d.toISOString(), i.value.timelineMax = u.toISOString(), i.value.rangeStart = le.toISOString(), i.value.rangeEnd = F.toISOString(), g.value.timelineMin = i.value.timelineMin, g.value.timelineMax = i.value.timelineMax, g.value.rangeStart = i.value.rangeStart, g.value.rangeEnd = i.value.rangeEnd, i.value.rangeStartVariable && m.value) {
        const H = m.value.getVariable(i.value.rangeStartVariable);
        H && (H.value = i.value.rangeStart);
      }
      if (i.value.rangeEndVariable && m.value) {
        const H = m.value.getVariable(i.value.rangeEndVariable);
        H && (H.value = i.value.rangeEnd);
      }
    }, xe = () => {
      k.value || (i.value.rangeStartVariable = void 0), W();
    }, Fe = () => {
      w.value || (i.value.rangeEndVariable = void 0), W();
    }, Q = () => {
      if (i.value.rangeStartVariable && m.value) {
        const d = m.value.getVariable(i.value.rangeStartVariable);
        d && (x.value.setTo(d), i.value.rangeStart = x.value.value);
      }
      if (i.value.rangeEndVariable && m.value) {
        const d = m.value.getVariable(i.value.rangeEndVariable);
        d && (R.value.setTo(d), i.value.rangeEnd = R.value.value);
      }
      W();
    }, U = (d, u) => {
      if (!d) return;
      const L = new Date(d);
      return u && (L.setHours(u.getHours()), L.setMinutes(u.getMinutes()), L.setSeconds(u.getSeconds())), L.toISOString();
    }, Z = () => {
      i.value.timelineMin = U(G.value, B.value), W();
    }, K = () => {
      i.value.timelineMin = U(G.value, B.value), W();
    }, de = () => {
      i.value.timelineMax = U(M.value, C.value), W();
    }, Le = () => {
      i.value.timelineMax = U(M.value, C.value), W();
    }, W = () => {
      let d = i.value.rangeStart, u = i.value.rangeEnd;
      k.value && x.value.value && (d = x.value.value), w.value && R.value.value && (u = R.value.value);
      const L = {
        ...i.value,
        timelineMin: i.value.timelineMin,
        timelineMax: T.value ? (/* @__PURE__ */ new Date()).toISOString() : i.value.timelineMax,
        rangeStart: d,
        rangeEnd: u,
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
      Object.assign(g.value, L);
    }, De = () => {
      T.value || i.value.timelineMax || (i.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), W();
    }, Ge = () => {
      const d = /* @__PURE__ */ new Date(), u = new Date(d.getTime() - 720 * 60 * 60 * 1e3), L = new Date(d.getTime() + 10080 * 60 * 1e3), I = new Date(d.getTime() - 1440 * 60 * 1e3), F = /* @__PURE__ */ new Date();
      i.value = {
        timelineMin: u.toISOString(),
        timelineMax: L.toISOString(),
        rangeStart: I.toISOString(),
        rangeEnd: F.toISOString(),
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
      }, v.value = "absolute", T.value = !1, W();
    }, Be = me(st);
    return tt(() => {
      try {
        if (m.value = Be ?? null, !m.value) throw new Error("VariableRepository not provided");
      } catch (d) {
        console.warn("VariableRepository not found in container:", d);
      }
      if (g.value && g.value.timelineMin) {
        if (Object.assign(i.value, g.value), T.value = !g.value.timelineMax, k.value = !!g.value.rangeStartVariable, w.value = !!g.value.rangeEndVariable, i.value.relativeTime || (i.value.relativeTime = {
          enabled: !1,
          offset: 24,
          unit: "hours"
        }), v.value = i.value.relativeTime.enabled ? "relative" : "absolute", i.value.timelineMin) {
          const d = new Date(i.value.timelineMin);
          G.value = d, B.value = d;
        }
        if (i.value.timelineMax) {
          const d = new Date(i.value.timelineMax);
          M.value = d, C.value = d;
        }
      } else
        Ge();
      W();
    }), Me(() => g.value, (d) => {
      d && (Object.assign(i.value, d), T.value = !d.timelineMax, d.relativeTime && (v.value = d.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (d, u) => {
      const L = fe("va-select"), I = fe("va-input"), F = fe("va-date-input"), le = fe("va-time-input"), H = fe("va-checkbox"), ke = fe("va-collapse");
      return P(), ze(ke, {
        modelValue: a.value.timelineSection,
        "onUpdate:modelValue": u[12] || (u[12] = (_) => a.value.timelineSection = _),
        icon: "timeline",
        header: "Zeitraum"
      }, {
        default: wt(() => [
          S("div", ta, [
            S("div", aa, [
              ee(L, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  u[0] || (u[0] = (_) => v.value = _),
                  we
                ],
                label: t("Time Range Mode"),
                options: O,
                "text-by": "label",
                "value-by": "value"
              }, null, 8, ["modelValue", "label"])
            ]),
            v.value === "relative" && i.value.relativeTime ? (P(), $("div", sa, [
              S("label", null, Y(t("Relative Time Range")), 1),
              S("div", ra, [
                S("div", na, [
                  ee(I, {
                    modelValue: i.value.relativeTime.offset,
                    "onUpdate:modelValue": [
                      u[1] || (u[1] = (_) => i.value.relativeTime.offset = _),
                      Ne
                    ],
                    modelModifiers: { number: !0 },
                    label: t("Offset"),
                    type: "number",
                    min: 1,
                    max: 1e4,
                    class: "offset-input"
                  }, null, 8, ["modelValue", "label"]),
                  ee(L, {
                    modelValue: i.value.relativeTime.unit,
                    "onUpdate:modelValue": [
                      u[2] || (u[2] = (_) => i.value.relativeTime.unit = _),
                      Ne
                    ],
                    options: Ie,
                    label: t("Unit"),
                    "text-by": "text",
                    "value-by": "value",
                    class: "unit-select"
                  }, null, 8, ["modelValue", "label"])
                ]),
                S("div", ia, Y(t("Now")) + " - " + Y(i.value.relativeTime.offset) + " " + Y(t(i.value.relativeTime.unit)) + " → " + Y(t("Now")), 1)
              ])
            ])) : ce("", !0),
            v.value === "absolute" ? (P(), $(at, { key: 1 }, [
              S("div", la, [
                S("label", null, Y(t("Timeline Start")), 1),
                S("div", oa, [
                  ee(F, {
                    modelValue: G.value,
                    "onUpdate:modelValue": [
                      u[3] || (u[3] = (_) => G.value = _),
                      Z
                    ],
                    label: t("Date")
                  }, null, 8, ["modelValue", "label"]),
                  ee(le, {
                    modelValue: B.value,
                    "onUpdate:modelValue": [
                      u[4] || (u[4] = (_) => B.value = _),
                      K
                    ],
                    label: t("Time")
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              S("div", ua, [
                S("label", null, Y(t("Timeline End")), 1),
                ee(H, {
                  modelValue: T.value,
                  "onUpdate:modelValue": [
                    u[5] || (u[5] = (_) => T.value = _),
                    De
                  ],
                  label: t("Use current time")
                }, null, 8, ["modelValue", "label"]),
                T.value ? ce("", !0) : (P(), $("div", ca, [
                  ee(F, {
                    modelValue: M.value,
                    "onUpdate:modelValue": [
                      u[6] || (u[6] = (_) => M.value = _),
                      de
                    ],
                    label: t("Date")
                  }, null, 8, ["modelValue", "label"]),
                  ee(le, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      u[7] || (u[7] = (_) => C.value = _),
                      Le
                    ],
                    label: t("Time")
                  }, null, 8, ["modelValue", "label"])
                ]))
              ])
            ], 64)) : ce("", !0),
            S("div", da, [
              S("label", null, Y(t("Variable Binding")), 1),
              S("div", Ea, [
                ee(H, {
                  modelValue: k.value,
                  "onUpdate:modelValue": [
                    u[8] || (u[8] = (_) => k.value = _),
                    xe
                  ],
                  label: t("Start time from variable")
                }, null, 8, ["modelValue", "label"]),
                k.value ? (P(), ze(L, {
                  key: 0,
                  modelValue: i.value.rangeStartVariable,
                  "onUpdate:modelValue": [
                    u[9] || (u[9] = (_) => i.value.rangeStartVariable = _),
                    Q
                  ],
                  options: ie.value,
                  label: t("Start variable"),
                  "text-by": "name",
                  "value-by": "name"
                }, null, 8, ["modelValue", "options", "label"])) : ce("", !0)
              ]),
              S("div", va, [
                ee(H, {
                  modelValue: w.value,
                  "onUpdate:modelValue": [
                    u[10] || (u[10] = (_) => w.value = _),
                    Fe
                  ],
                  label: t("End time from variable")
                }, null, 8, ["modelValue", "label"]),
                w.value ? (P(), ze(L, {
                  key: 0,
                  modelValue: i.value.rangeEndVariable,
                  "onUpdate:modelValue": [
                    u[11] || (u[11] = (_) => i.value.rangeEndVariable = _),
                    Q
                  ],
                  options: ie.value,
                  label: t("End variable"),
                  "text-by": "name",
                  "value-by": "name"
                }, null, 8, ["modelValue", "options", "label"])) : ce("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Ta = /* @__PURE__ */ nt(ga, [["__scopeId", "data-v-0a85bc8a"]]), Sa = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", ha = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: je },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: je }
];
class b extends rt {
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
    return o.Literals.RELATIVE_TIME_CONFIG;
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
}
class Ke extends Dt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ke()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
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
    return new s();
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
class o extends At {
  static eNAME = "timelinesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.timeline";
  static eNS_PREFIX = "timelinesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
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
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    yt.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(Ke.eINSTANCE);
    const e = new qe();
    e.setName("RelativeTimeConfig"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.RELATIVE_TIME_CONFIG = e;
    const t = new A();
    t.setName("enabled"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), o.Literals.RELATIVE_TIME_CONFIG__ENABLED = t;
    const g = new A();
    g.setName("offset"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), o.Literals.RELATIVE_TIME_CONFIG__OFFSET = g;
    const a = new A();
    a.setName("unit"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), o.Literals.RELATIVE_TIME_CONFIG__UNIT = a;
    const v = new qe();
    v.setName("TimelineSettings"), v.setAbstract(!1), v.setInterface(!1), this.getEClassifiers().push(v), v.setEPackage(this), o.Literals.TIMELINE_SETTINGS = v;
    const O = new A();
    O.setName("timelineMin"), O.setLowerBound(0), O.setUpperBound(1), v.getEStructuralFeatures().push(O), o.Literals.TIMELINE_SETTINGS__TIMELINE_MIN = O;
    const J = new A();
    J.setName("timelineMax"), J.setLowerBound(0), J.setUpperBound(1), v.getEStructuralFeatures().push(J), o.Literals.TIMELINE_SETTINGS__TIMELINE_MAX = J;
    const te = new A();
    te.setName("rangeStart"), te.setLowerBound(0), te.setUpperBound(1), v.getEStructuralFeatures().push(te), o.Literals.TIMELINE_SETTINGS__RANGE_START = te;
    const ae = new A();
    ae.setName("rangeEnd"), ae.setLowerBound(0), ae.setUpperBound(1), v.getEStructuralFeatures().push(ae), o.Literals.TIMELINE_SETTINGS__RANGE_END = ae;
    const j = new Vt();
    j.setContainment(!0), j.setName("relativeTime"), j.setLowerBound(0), j.setUpperBound(1), v.getEStructuralFeatures().push(j), o.Literals.TIMELINE_SETTINGS__RELATIVE_TIME = j;
    const se = new A();
    se.setName("rangeStartVariable"), se.setLowerBound(0), se.setUpperBound(1), v.getEStructuralFeatures().push(se), o.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE = se;
    const i = new A();
    i.setName("rangeEndVariable"), i.setLowerBound(0), i.setUpperBound(1), v.getEStructuralFeatures().push(i), o.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE = i;
    const T = new A();
    T.setName("startTime"), T.setLowerBound(0), T.setUpperBound(1), v.getEStructuralFeatures().push(T), o.Literals.TIMELINE_SETTINGS__START_TIME = T;
    const G = new A();
    G.setName("endTime"), G.setLowerBound(0), G.setUpperBound(1), v.getEStructuralFeatures().push(G), o.Literals.TIMELINE_SETTINGS__END_TIME = G;
    const B = new A();
    B.setName("currentTime"), B.setLowerBound(0), B.setUpperBound(1), v.getEStructuralFeatures().push(B), o.Literals.TIMELINE_SETTINGS__CURRENT_TIME = B;
    const M = new A();
    M.setName("stepSize"), M.setLowerBound(0), M.setUpperBound(1), v.getEStructuralFeatures().push(M), o.Literals.TIMELINE_SETTINGS__STEP_SIZE = M;
    const C = new A();
    C.setName("playbackSpeed"), C.setLowerBound(0), C.setUpperBound(1), v.getEStructuralFeatures().push(C), o.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED = C;
    const m = new A();
    m.setName("autoPlay"), m.setLowerBound(0), m.setUpperBound(1), v.getEStructuralFeatures().push(m), o.Literals.TIMELINE_SETTINGS__AUTO_PLAY = m;
    const k = new A();
    k.setName("fixStartKnob"), k.setLowerBound(0), k.setUpperBound(1), v.getEStructuralFeatures().push(k), o.Literals.TIMELINE_SETTINGS__FIX_START_KNOB = k;
    const w = new A();
    w.setName("showControls"), w.setLowerBound(0), w.setUpperBound(1), v.getEStructuralFeatures().push(w), o.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS = w;
    const x = new A();
    x.setName("rangeStripColor"), x.setLowerBound(0), x.setUpperBound(1), v.getEStructuralFeatures().push(x), o.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR = x;
    const R = new A();
    R.setName("showTimeInfo"), R.setLowerBound(0), R.setUpperBound(1), v.getEStructuralFeatures().push(R), o.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO = R, o.Literals.RELATIVE_TIME_CONFIG__ENABLED.setEType(y().getEClassifier("EBoolean")), o.Literals.RELATIVE_TIME_CONFIG__OFFSET.setEType(y().getEClassifier("EInt")), o.Literals.RELATIVE_TIME_CONFIG__UNIT.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__TIMELINE_MIN.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__TIMELINE_MAX.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_START.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_END.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RELATIVE_TIME.setEType(o.Literals.RELATIVE_TIME_CONFIG), o.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__START_TIME.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__END_TIME.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__CURRENT_TIME.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__STEP_SIZE.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED.setEType(y().getEClassifier("EDouble")), o.Literals.TIMELINE_SETTINGS__AUTO_PLAY.setEType(y().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__FIX_START_KNOB.setEType(y().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS.setEType(y().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR.setEType(y().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO.setEType(y().getEClassifier("EBoolean"));
  }
}
class s extends rt {
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
    return o.Literals.TIMELINE_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(s.TIMELINE_MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TIMELINE_MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.TIMELINE_MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TIMELINE_MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RANGE_START),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RANGE_START,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RANGE_END),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RANGE_END,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RELATIVE_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RELATIVE_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RANGE_START_VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RANGE_START_VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RANGE_END_VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RANGE_END_VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.START_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.START_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.END_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.END_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CURRENT_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CURRENT_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.STEP_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.STEP_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.PLAYBACK_SPEED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.PLAYBACK_SPEED,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.AUTO_PLAY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.AUTO_PLAY,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.FIX_START_KNOB),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.FIX_START_KNOB,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_CONTROLS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_CONTROLS,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.RANGE_STRIP_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RANGE_STRIP_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_TIME_INFO),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_TIME_INFO,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.TIMELINE_MIN:
        return this.timelineMin;
      case s.TIMELINE_MAX:
        return this.timelineMax;
      case s.RANGE_START:
        return this.rangeStart;
      case s.RANGE_END:
        return this.rangeEnd;
      case s.RELATIVE_TIME:
        return this.relativeTime;
      case s.RANGE_START_VARIABLE:
        return this.rangeStartVariable;
      case s.RANGE_END_VARIABLE:
        return this.rangeEndVariable;
      case s.START_TIME:
        return this.startTime;
      case s.END_TIME:
        return this.endTime;
      case s.CURRENT_TIME:
        return this.currentTime;
      case s.STEP_SIZE:
        return this.stepSize;
      case s.PLAYBACK_SPEED:
        return this.playbackSpeed;
      case s.AUTO_PLAY:
        return this.autoPlay;
      case s.FIX_START_KNOB:
        return this.fixStartKnob;
      case s.SHOW_CONTROLS:
        return this.showControls;
      case s.RANGE_STRIP_COLOR:
        return this.rangeStripColor;
      case s.SHOW_TIME_INFO:
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
      case s.TIMELINE_MIN:
        this.timelineMin = t, super.eSet(e, t);
        break;
      case s.TIMELINE_MAX:
        this.timelineMax = t, super.eSet(e, t);
        break;
      case s.RANGE_START:
        this.rangeStart = t, super.eSet(e, t);
        break;
      case s.RANGE_END:
        this.rangeEnd = t, super.eSet(e, t);
        break;
      case s.RELATIVE_TIME:
        this.relativeTime = t, super.eSet(e, t);
        break;
      case s.RANGE_START_VARIABLE:
        this.rangeStartVariable = t, super.eSet(e, t);
        break;
      case s.RANGE_END_VARIABLE:
        this.rangeEndVariable = t, super.eSet(e, t);
        break;
      case s.START_TIME:
        this.startTime = t, super.eSet(e, t);
        break;
      case s.END_TIME:
        this.endTime = t, super.eSet(e, t);
        break;
      case s.CURRENT_TIME:
        this.currentTime = t, super.eSet(e, t);
        break;
      case s.STEP_SIZE:
        this.stepSize = t, super.eSet(e, t);
        break;
      case s.PLAYBACK_SPEED:
        this.playbackSpeed = t, super.eSet(e, t);
        break;
      case s.AUTO_PLAY:
        this.autoPlay = t, super.eSet(e, t);
        break;
      case s.FIX_START_KNOB:
        this.fixStartKnob = t, super.eSet(e, t);
        break;
      case s.SHOW_CONTROLS:
        this.showControls = t, super.eSet(e, t);
        break;
      case s.RANGE_STRIP_COLOR:
        this.rangeStripColor = t, super.eSet(e, t);
        break;
      case s.SHOW_TIME_INFO:
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
      case s.TIMELINE_MIN:
        return this._timelineMin !== void 0;
      case s.TIMELINE_MAX:
        return this._timelineMax !== void 0;
      case s.RANGE_START:
        return this._rangeStart !== void 0;
      case s.RANGE_END:
        return this._rangeEnd !== void 0;
      case s.RELATIVE_TIME:
        return this._relativeTime !== void 0;
      case s.RANGE_START_VARIABLE:
        return this._rangeStartVariable !== void 0;
      case s.RANGE_END_VARIABLE:
        return this._rangeEndVariable !== void 0;
      case s.START_TIME:
        return this._startTime !== void 0;
      case s.END_TIME:
        return this._endTime !== void 0;
      case s.CURRENT_TIME:
        return this._currentTime !== void 0;
      case s.STEP_SIZE:
        return this._stepSize !== "hour";
      case s.PLAYBACK_SPEED:
        return this._playbackSpeed !== 1;
      case s.AUTO_PLAY:
        return this._autoPlay !== !1;
      case s.FIX_START_KNOB:
        return this._fixStartKnob !== !1;
      case s.SHOW_CONTROLS:
        return this._showControls !== !0;
      case s.RANGE_STRIP_COLOR:
        return this._rangeStripColor !== "#d17600";
      case s.SHOW_TIME_INFO:
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
      case s.TIMELINE_MIN:
        this._timelineMin = void 0;
        return;
      case s.TIMELINE_MAX:
        this._timelineMax = void 0;
        return;
      case s.RANGE_START:
        this._rangeStart = void 0;
        return;
      case s.RANGE_END:
        this._rangeEnd = void 0;
        return;
      case s.RELATIVE_TIME:
        this._relativeTime = void 0;
        return;
      case s.RANGE_START_VARIABLE:
        this._rangeStartVariable = void 0;
        return;
      case s.RANGE_END_VARIABLE:
        this._rangeEndVariable = void 0;
        return;
      case s.START_TIME:
        this._startTime = void 0;
        return;
      case s.END_TIME:
        this._endTime = void 0;
        return;
      case s.CURRENT_TIME:
        this._currentTime = void 0;
        return;
      case s.STEP_SIZE:
        this._stepSize = "hour";
        return;
      case s.PLAYBACK_SPEED:
        this._playbackSpeed = 1;
        return;
      case s.AUTO_PLAY:
        this._autoPlay = !1;
        return;
      case s.FIX_START_KNOB:
        this._fixStartKnob = !1;
        return;
      case s.SHOW_CONTROLS:
        this._showControls = !0;
        return;
      case s.RANGE_STRIP_COLOR:
        this._rangeStripColor = "#d17600";
        return;
      case s.SHOW_TIME_INFO:
        this._showTimeInfo = !0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
const fa = `<?xml version="1.0" encoding="UTF-8"?>
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
var _a = Object.defineProperty, ma = Object.getOwnPropertyDescriptor, He = (V, e, t, g) => {
  for (var a = g > 1 ? void 0 : g ? ma(e, t) : e, v = V.length - 1, O; v >= 0; v--)
    (O = V[v]) && (a = (g ? O(e, t, a) : O(a)) || a);
  return g && a && _a(e, t, a), a;
}, Je = (V, e) => (t, g) => e(t, g, V);
o.eINSTANCE;
const _e = "TimelineWidget";
let Ve = class {
  constructor(V, e) {
    this.events = V, this.actions = e;
  }
  type = _e;
  component = ea;
  settingsComponent = Ta;
  supportedDSTypes = [];
  icon = Sa;
  name = "Timeline";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: fa,
    uri: "/timeline-settings.ui.xmi",
    ePackage: () => o.eINSTANCE,
    create: () => new s(),
    /*
     * Which stretch of time the timeline covers is not a field: it is two
     * moments or an offset from now, typed or taken from a variable, with
     * each end edited as a date and a time apart.
     */
    unmodelledSections: ["Zeitraum"]
  };
  register() {
    this.events.registerWidget(_e, ha), this.actions.registerWidgetType(_e, pe, "widget");
  }
  unregister() {
    this.events.unregisterWidget(_e), this.actions.unregisterWidgetType(_e);
  }
};
He([
  Tt()
], Ve.prototype, "register", 1);
He([
  St()
], Ve.prototype, "unregister", 1);
Ve = He([
  ht({
    service: [Ct],
    properties: { "widget.type": _e }
  }),
  Je(0, Ze(vt)),
  Je(1, Ze(gt))
], Ve);
export {
  s as TimelineSettingsImpl,
  ea as TimelineWidget,
  Ve as TimelineWidgetProvider,
  Ta as TimelineWidgetSettings,
  o as TimelinesettingsPackage,
  fa as timelineSettingsFormXmi
};
