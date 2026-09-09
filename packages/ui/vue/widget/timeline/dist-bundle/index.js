(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-e6f250af]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-e6f250af]{overflow:hidden;position:relative;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-e6f250af]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-e6f250af]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-e6f250af]:hover{filter:brightness(1.1)}.range-strip[data-v-e6f250af]:active{cursor:grabbing}.timeline-knob[data-v-e6f250af]{position:absolute;top:50%;width:24px;height:24px;background:var(--va-primary);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-e6f250af]:hover{background:var(--va-primary-dark);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-e6f250af]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-e6f250af]{left:0;z-index:4}.fixed-knob[data-v-e6f250af]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-e6f250af]:hover{transform:translate(-50%,-50%)!important;background:var(--va-background-border)!important}.end-knob[data-v-e6f250af]{right:-24px;z-index:4}.time-axis[data-v-e6f250af]{position:relative;height:30px;background:var(--va-background-secondary);border-top:1px solid var(--va-background-border);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-e6f250af]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-e6f250af]{width:1px;height:8px;background:var(--va-text-secondary);margin-top:2px}.tick-label[data-v-e6f250af]{font-size:.7rem;color:var(--va-text-secondary);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-e6f250af]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:6px;padding:.75rem}.time-display[data-v-e6f250af]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-e6f250af]{font-size:.8rem;font-weight:500;color:var(--va-text-secondary)}.time-value[data-v-e6f250af]{font-size:.9rem;font-weight:600;color:var(--va-text-primary);word-wrap:break-word}.controls[data-v-e6f250af]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-e6f250af]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--va-primary));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-e6f250af]:hover:not(:disabled){background:var(--va-primary-dark);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-e6f250af]:disabled{background:var(--va-background-border);color:var(--va-text-secondary);cursor:not-allowed;transform:none}.play-button.playing[data-v-e6f250af]{background:var(--play-button-playing, #ff6b35);animation:pulse-e6f250af 2s infinite}.play-button.playing[data-v-e6f250af]:hover{filter:brightness(.9)}@keyframes pulse-e6f250af{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-e6f250af]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-e6f250af]{font-weight:500;color:var(--va-text-primary);min-width:fit-content}.speed-control select[data-v-e6f250af]{padding:.5rem;border:1px solid var(--va-background-border);border-radius:4px;background:var(--va-background-primary);color:var(--va-text-primary);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-e6f250af]{flex-direction:column;gap:.75rem}.time-display[data-v-e6f250af]{text-align:left}.controls[data-v-e6f250af]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-e6f250af]{width:28px;height:28px}.tick-label[data-v-e6f250af]{font-size:.6rem}.timeline-container[data-v-e6f250af]{min-height:70px}.timeline-track[data-v-e6f250af]{height:35px}}.settings-container[data-v-e90998f7]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-e90998f7]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-e90998f7]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.datetime-group[data-v-e90998f7]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-e90998f7]>*{flex:1;min-width:0}.relative-time-config[data-v-e90998f7]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--va-background-element);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-e90998f7]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-e90998f7]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-e90998f7]{flex:2;min-width:80px}.relative-time-preview[data-v-e90998f7]{font-size:.85rem;color:var(--va-primary);padding:.5rem;background:var(--va-background-secondary);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-e90998f7]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { WidgetActionInterfaceImpl as Et, EVENT_ACTIONS_REGISTRY as vt, PayloadImpl as $e, EVENT_REGISTRY_ID as gt, EVENT_ACTIONS_REGISTRY_ID as Tt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as St, deactivate as ht, component as ft, inject as Ye } from "@eclipse-daanse/tsm";
import { defineComponent as Qe, mergeModels as _t, inject as _e, toRefs as mt, useModel as et, ref as I, computed as z, watch as Me, onMounted as tt, onUnmounted as pt, createElementBlock as K, openBlock as W, withModifiers as Ue, createElementVNode as g, createCommentVNode as ue, normalizeStyle as he, Fragment as at, renderList as It, toDisplayString as Y, normalizeClass as Nt, withDirectives as bt, createStaticVNode as Mt, vModelSelect as wt, resolveComponent as be, createVNode as ee, createBlock as je } from "vue";
import { useRoute as Rt } from "vue-router";
import { VariableWrapper as Ae, plainSettings as Ze } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as st } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as Ce } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEObject as rt, BasicEFactory as Dt, BasicEPackage as yt, EPackageRegistry as At, BasicEClass as qe, BasicEAttribute as y, BasicEReference as Vt, getEcorePackage as A } from "@emfts/core";
import { WIDGET_SERVICE_ID as Ct } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Lt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var Ot = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, Oe = (V, e, t, v) => {
  for (var a = xt(e, t), T = V.length - 1, w; T >= 0; T--)
    (w = V[T]) && (a = w(e, t, a) || a);
  return a && Ot(e, t, a), a;
};
class me extends Et {
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
], me.prototype, "zoomIn");
Oe([
  Ce({ eventType: "timeline.zoomOut" })
], me.prototype, "zoomOut");
Oe([
  Ce({ eventType: "timeline.setDateRange" })
], me.prototype, "setDateRange");
Oe([
  Ce({ eventType: "timeline.jumpToNow" })
], me.prototype, "jumpToNow");
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
  props: /* @__PURE__ */ _t({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(V, { expose: e }) {
    _e("i18n");
    const t = V, { id: v } = mt(t), a = et(V, "configv"), T = _e(Lt.TINY_EMITTER), w = _e(vt), te = Rt().params.pageid || "";
    class ae extends me {
      zoomIn() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), u = (E.getTime() - r.getTime()) * 0.25, S = new Date(r.getTime() + u), f = new Date(E.getTime() - u);
        f.getTime() - S.getTime() > 6e4 && (a.value.rangeStart = S.toISOString(), a.value.rangeEnd = f.toISOString());
      }
      zoomOut() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), u = (E.getTime() - r.getTime()) * 0.5, S = new Date(Math.max(
          r.getTime() - u,
          new Date(a.value.timelineMin || 0).getTime()
        )), f = new Date(Math.min(
          E.getTime() + u,
          new Date(a.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        a.value.rangeStart = S.toISOString(), a.value.rangeEnd = f.toISOString();
      }
      setDateRange(r, E) {
        a.value.rangeStart = r, a.value.rangeEnd = E;
      }
      jumpToNow() {
        const r = /* @__PURE__ */ new Date(), E = new Date(a.value.rangeEnd || r).getTime() - new Date(a.value.rangeStart || r).getTime(), l = r, u = new Date(r.getTime() - E);
        a.value.rangeStart = u.toISOString(), a.value.rangeEnd = l.toISOString();
      }
    }
    const j = new ae();
    e(j);
    const i = () => {
      v?.value && T.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: v.value,
        payload: { widgetId: v.value, timestamp: Date.now() }
      });
    }, F = () => {
      v?.value && T.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: v.value,
        payload: { widgetId: v.value, timestamp: Date.now() }
      });
    }, h = I(null), G = I(new Ae("")), B = I(new Ae("")), R = I(!1), m = I(a.value.playbackSpeed || 1), p = I(!1), k = I(), C = I(null), O = I(null), x = I(null);
    let ce = null, pe = 0;
    const Ie = new Date(Date.now() - 720 * 60 * 60 * 1e3), we = new Date(Date.now() + 10080 * 60 * 1e3), Ne = new Date(Date.now() - 1440 * 60 * 1e3), Re = /* @__PURE__ */ new Date(), xe = (n, r) => {
      const E = /* @__PURE__ */ new Date(), l = new Date(E), u = Number(n) || 24;
      switch (typeof r == "object" && r !== null ? r.value : r) {
        case "hours":
          l.setHours(l.getHours() - u);
          break;
        case "days":
          l.setDate(l.getDate() - u);
          break;
        case "weeks":
          l.setDate(l.getDate() - u * 7);
          break;
        case "months":
          l.setMonth(l.getMonth() - u);
          break;
        case "years":
          l.setFullYear(l.getFullYear() - u);
          break;
        default:
          l.setHours(l.getHours() - u);
      }
      return { start: l, end: E };
    }, Le = () => {
      if (!a.value.relativeTime?.enabled) return;
      const { start: n, end: r } = xe(
        a.value.relativeTime.offset,
        a.value.relativeTime.unit
      );
      a.value.timelineMin = n.toISOString(), a.value.timelineMax = r.toISOString();
      const l = (r.getTime() - n.getTime()) * 0.2, u = r, S = new Date(r.getTime() - l);
      if (a.value.rangeStart = S.toISOString(), a.value.rangeEnd = u.toISOString(), a.value.rangeStartVariable && h.value) {
        const f = h.value.getVariable(a.value.rangeStartVariable);
        f && (f.value = S.toISOString());
      }
      if (a.value.rangeEndVariable && h.value) {
        const f = h.value.getVariable(a.value.rangeEndVariable);
        f && (f.value = u.toISOString());
      }
    }, H = z(() => a.value.timelineMin ? new Date(a.value.timelineMin) : Ie), Z = z(() => a.value.timelineMax ? new Date(a.value.timelineMax) : we), q = z(() => {
      if (a.value.rangeStartVariable && h.value) {
        const n = h.value.getVariable(a.value.rangeStartVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeStart ? new Date(a.value.rangeStart) : Ne;
    }), X = z(() => {
      if (a.value.rangeEndVariable && h.value) {
        const n = h.value.getVariable(a.value.rangeEndVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeEnd ? new Date(a.value.rangeEnd) : Re;
    }), de = z(() => {
      if (a.value.fixStartKnob)
        return 0;
      if (C.value !== null)
        return C.value;
      const n = H.value.getTime(), r = Z.value.getTime(), E = q.value.getTime();
      return Math.max(0, Math.min(100, (E - n) / (r - n) * 100));
    }), P = z(() => {
      if (O.value !== null)
        return O.value;
      const n = H.value.getTime(), r = Z.value.getTime(), E = X.value.getTime();
      return Math.max(0, Math.min(100, (E - n) / (r - n) * 100));
    }), Fe = z(() => x.value ? {
      ...x.value,
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    } : {
      left: de.value + "%",
      width: P.value - de.value + "%",
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    }), De = (n) => {
      const E = (a.value.rangeStripColor || "#d17600").replace("#", ""), l = parseInt(E.substr(0, 2), 16), u = parseInt(E.substr(2, 2), 16), S = parseInt(E.substr(4, 2), 16);
      return `rgba(${l}, ${u}, ${S}, ${n})`;
    }, Ge = z(() => {
      const n = a.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: d(n)
      };
    }), d = (n) => {
      const r = n.replace("#", ""), E = parseInt(r.substr(0, 2), 16), l = parseInt(r.substr(2, 2), 16), u = parseInt(r.substr(4, 2), 16), S = 0.6, f = Math.min(255, Math.round(E + (255 - E) * S)), b = Math.min(255, Math.round(l + (255 - l) * S)), D = Math.min(255, Math.round(u + (255 - u) * S));
      return `rgb(${f}, ${b}, ${D})`;
    }, c = () => {
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
    }, L = z(() => {
      const n = a.value.rangeStripColor || "#d17600", r = N(n);
      return {
        "--play-button-bg": n,
        "--play-button-playing": r
      };
    }), N = (n) => {
      const r = n.replace("#", ""), E = parseInt(r.substr(0, 2), 16), l = parseInt(r.substr(2, 2), 16), u = parseInt(r.substr(4, 2), 16), S = 0.8, b = Math.min(255, Math.round(E * S * 1.1)), D = Math.round(l * S), $ = Math.round(u * S);
      return `rgb(${b}, ${D}, ${$})`;
    }, U = z(() => X.value.getTime() >= Z.value.getTime()), re = z(() => P.value - de.value >= 10 ? !1 : de.value > 50), J = z(() => {
      const n = [], r = H.value.getTime(), l = Z.value.getTime() - r, u = 8;
      for (let S = 0; S <= u; S++) {
        const f = r + l / u * S, b = new Date(f), D = S / u * 100, $ = b.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        n.push({
          timestamp: b.toISOString(),
          position: D,
          label: $
        });
      }
      return n;
    }), _ = (n) => n.toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), it = () => {
      const n = X.value.getTime() - q.value.getTime(), r = Math.floor(n / (1e3 * 60 * 60)), E = Math.floor(r / 24);
      return E > 0 ? `${E}d ${r % 24}h` : r > 0 ? `${r}h` : `${Math.floor(n / (1e3 * 60))}min`;
    }, Be = () => k.value?.getBoundingClientRect();
    let Ee = null;
    const ye = (n, r, E = !1) => {
      const l = a.value.fixStartKnob ? H.value : n || q.value, u = r || X.value;
      if (!l || isNaN(l.getTime()) || !u || isNaN(u.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: l, actualEnd: u });
        return;
      }
      const S = () => {
        if (a.value.rangeStart = l.toISOString(), a.value.rangeEnd = u.toISOString(), a.value.playbackSpeed = m.value, a.value.rangeStartVariable && h.value) {
          const f = h.value.getVariable(a.value.rangeStartVariable);
          f && (f.value = l.toISOString());
        }
        if (a.value.rangeEndVariable && h.value) {
          const f = h.value.getVariable(a.value.rangeEndVariable);
          f && (f.value = u.toISOString());
        }
      };
      E ? (Ee && (clearTimeout(Ee), Ee = null), S()) : (Ee && clearTimeout(Ee), Ee = setTimeout(S, 300));
    }, lt = (n) => {
      if (a.value.fixStartKnob)
        return;
      n.preventDefault(), p.value = !0;
      const r = Be();
      if (!r) return;
      const E = n.clientX, l = H.value.getTime(), u = Z.value.getTime(), S = (u - l) / r.width, f = q.value.getTime(), b = X.value.getTime(), D = u - l;
      let $ = f;
      const ne = (ve) => {
        if (!p.value) return;
        const ge = ve.clientX - E;
        let Q = f + ge * S;
        Q = Math.max(l, Math.min(Q, b - 6e4)), $ = Q;
        const le = Math.max(0, Math.min(100, (Q - l) / D * 100)), Te = Math.max(0, Math.min(100, (b - l) / D * 100));
        C.value = le, x.value = {
          left: le + "%",
          width: Te - le + "%"
        };
      }, ie = () => {
        p.value = !1, C.value = null, x.value = null, ye(new Date($), new Date(b), !0), document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", ie);
      };
      document.addEventListener("mousemove", ne), document.addEventListener("mouseup", ie);
    }, Ke = (n) => {
      n.preventDefault(), p.value = !0;
      const r = Be();
      if (!r) return;
      const E = n.clientX, l = H.value.getTime(), u = Z.value.getTime(), S = (u - l) / r.width, f = X.value.getTime(), b = q.value.getTime(), D = u - l;
      let $ = f;
      const ne = (ve) => {
        if (!p.value) return;
        const ge = ve.clientX - E;
        let Q = f + ge * S;
        Q = Math.min(u, Math.max(Q, b + 6e4)), $ = Q;
        const le = Math.max(0, Math.min(100, (b - l) / D * 100)), Te = Math.max(0, Math.min(100, (Q - l) / D * 100));
        O.value = Te, x.value = {
          left: le + "%",
          width: Te - le + "%"
        };
      }, ie = () => {
        p.value = !1, O.value = null, x.value = null, ye(new Date(b), new Date($), !0), document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", ie);
      };
      document.addEventListener("mousemove", ne), document.addEventListener("mouseup", ie);
    }, ot = (n) => {
      if (a.value.fixStartKnob) {
        Ke(n);
        return;
      }
      n.preventDefault(), p.value = !0;
      const r = Be();
      if (!r) return;
      const E = n.clientX, l = H.value.getTime(), u = Z.value.getTime(), S = (u - l) / r.width, f = q.value.getTime(), b = X.value.getTime(), D = b - f, $ = u - l;
      let ne = f, ie = b;
      const ve = (Q) => {
        if (!p.value) return;
        const Te = (Q.clientX - E) * S;
        let oe = f + Te, Se = oe + D;
        oe < l && (oe = l, Se = oe + D), Se > u && (Se = u, oe = Se - D), ne = oe, ie = Se;
        const Pe = Math.max(0, Math.min(100, (oe - l) / $ * 100)), Xe = Math.max(0, Math.min(100, (Se - l) / $ * 100));
        C.value = Pe, O.value = Xe, x.value = {
          left: Pe + "%",
          width: Xe - Pe + "%"
        };
      }, ge = () => {
        p.value = !1, C.value = null, O.value = null, x.value = null, ye(new Date(ne), new Date(ie), !0), document.removeEventListener("mousemove", ve), document.removeEventListener("mouseup", ge);
      };
      document.addEventListener("mousemove", ve), document.addEventListener("mouseup", ge);
    }, ut = () => {
      R.value = !R.value, R.value ? ct() : ke();
    }, ct = () => {
      pe = performance.now(), He();
    }, ke = () => {
      ce && (cancelAnimationFrame(ce), ce = null);
    }, He = () => {
      if (!R.value) return;
      const n = performance.now(), r = n - pe, E = 1e3 / m.value;
      if (r >= E) {
        const l = q.value.getTime(), u = X.value.getTime(), S = u - l, f = c();
        console.log("Playback step:", {
          stepSize: a.value.stepSize,
          stepSizeMs: f,
          currentStart: new Date(l).toISOString(),
          currentEnd: new Date(u).toISOString(),
          rangeDuration: S
        });
        const b = l + f, D = b + S;
        if (console.log("New times:", {
          newStart: new Date(b).toISOString(),
          newEnd: new Date(D).toISOString(),
          timelineMax: Z.value.toISOString()
        }), D >= Z.value.getTime()) {
          ke(), R.value = !1;
          return;
        }
        ye(new Date(b), new Date(D)), pe = n;
      }
      ce = requestAnimationFrame(He);
    };
    Me(() => a.value.rangeStartVariable, (n) => {
      if (n && h.value) {
        const r = h.value.getVariable(n);
        r && G.value.setTo(r);
      }
    }), Me(() => a.value.rangeEndVariable, (n) => {
      if (n && h.value) {
        const r = h.value.getVariable(n);
        r && B.value.setTo(r);
      }
    }), Me(() => G.value.value, (n) => {
      n && a.value.rangeStartVariable && new Date(n).getTime() !== q.value.getTime() && (a.value.rangeStart = n);
    }), Me(() => B.value.value, (n) => {
      n && a.value.rangeEndVariable && new Date(n).getTime() !== X.value.getTime() && (a.value.rangeEnd = n);
    });
    const dt = _e(st);
    return tt(() => {
      v?.value && w.registerInstance(v.value, j, "TimelineWidget", te);
      try {
        if (h.value = dt ?? null, !h.value) throw new Error("VariableRepository not provided");
      } catch (n) {
        console.warn("VariableRepository not found in container:", n);
      }
      if (a.value.timelineMin || (a.value.timelineMin = Ie.toISOString()), a.value.timelineMax || (a.value.timelineMax = we.toISOString()), a.value.rangeStart || (a.value.rangeStart = Ne.toISOString()), a.value.rangeEnd || (a.value.rangeEnd = Re.toISOString()), a.value.playbackSpeed ? m.value = a.value.playbackSpeed : (a.value.playbackSpeed = 1, m.value = 1), a.value.rangeStripColor || (a.value.rangeStripColor = "#d17600"), a.value.fixStartKnob === void 0 && (a.value.fixStartKnob = !1), a.value.showTimeInfo === void 0 && (a.value.showTimeInfo = !0), a.value.showControls === void 0 && (a.value.showControls = !0), a.value.stepSize === void 0 && (a.value.stepSize = "hour"), a.value.rangeStartVariable && h.value) {
        const n = h.value.getVariable(a.value.rangeStartVariable);
        n && G.value.setTo(n);
      }
      if (a.value.rangeEndVariable && h.value) {
        const n = h.value.getVariable(a.value.rangeEndVariable);
        n && B.value.setTo(n);
      }
      a.value.relativeTime?.enabled && Le();
    }), pt(() => {
      v?.value && w.unregisterInstance(v.value), ke();
    }), (n, r) => (W(), K("div", {
      class: "timeline-widget",
      onClick: i,
      onContextmenu: Ue(F, ["prevent"])
    }, [
      g("div", Ft, [
        g("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: k,
          style: he(Ge.value)
        }, [
          g("div", {
            class: "range-strip",
            style: he(Fe.value),
            onMousedown: ot,
            title: a.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
          }, [
            a.value.fixStartKnob ? (W(), K("div", Bt)) : (W(), K("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: he({ zIndex: re.value ? 5 : 4 }),
              onMousedown: Ue(lt, ["stop"]),
              title: "Startzeit"
            }, null, 36)),
            g("div", {
              class: "timeline-knob end-knob",
              style: he({ zIndex: re.value ? 3 : 4 }),
              onMousedown: Ue(Ke, ["stop"]),
              title: "Endzeit"
            }, null, 36)
          ], 44, Gt)
        ], 4),
        g("div", kt, [
          (W(!0), K(at, null, It(J.value, (E) => (W(), K("div", {
            key: E.timestamp,
            class: "time-tick",
            style: he({ left: E.position + "%" })
          }, [
            r[1] || (r[1] = g("div", { class: "tick-mark" }, null, -1)),
            g("div", Pt, Y(E.label), 1)
          ], 4))), 128))
        ])
      ]),
      a.value.showTimeInfo !== !1 ? (W(), K("div", Ut, [
        g("div", Wt, [
          r[2] || (r[2] = g("span", { class: "time-label" }, "Start:", -1)),
          g("span", zt, Y(_(q.value)), 1)
        ]),
        g("div", Kt, [
          r[3] || (r[3] = g("span", { class: "time-label" }, "Ende:", -1)),
          g("span", Ht, Y(_(X.value)), 1)
        ]),
        g("div", Xt, [
          r[4] || (r[4] = g("span", { class: "time-label" }, "Dauer:", -1)),
          g("span", $t, Y(it()), 1)
        ])
      ])) : ue("", !0),
      a.value.showControls !== !1 ? (W(), K("div", Yt, [
        g("button", {
          class: Nt(["play-button", { playing: R.value }]),
          style: he(L.value),
          onClick: ut,
          disabled: U.value
        }, [
          R.value ? (W(), K("svg", qt, [...r[6] || (r[6] = [
            g("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (W(), K("svg", Zt, [...r[5] || (r[5] = [
            g("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, jt),
        g("div", Jt, [
          r[8] || (r[8] = g("label", null, "Geschwindigkeit:", -1)),
          bt(g("select", {
            "onUpdate:modelValue": r[0] || (r[0] = (E) => m.value = E)
          }, [...r[7] || (r[7] = [
            Mt('<option value="0.25" data-v-e6f250af>0.25x</option><option value="0.5" data-v-e6f250af>0.5x</option><option value="1" data-v-e6f250af>1x</option><option value="2" data-v-e6f250af>2x</option><option value="4" data-v-e6f250af>4x</option>', 5)
          ])], 512), [
            [wt, m.value]
          ])
        ])
      ])) : ue("", !0)
    ], 32));
  }
}), nt = (V, e) => {
  const t = V.__vccOpts || V;
  for (const [v, a] of e)
    t[v] = a;
  return t;
}, ea = /* @__PURE__ */ nt(Qt, [["__scopeId", "data-v-e6f250af"]]), ta = {
  class: "settings-section",
  "data-section": "Zeitraum"
}, aa = { class: "settings-container" }, sa = { class: "setting-group" }, ra = {
  key: 0,
  class: "setting-group"
}, na = { class: "relative-time-config" }, ia = { class: "relative-time-row" }, la = { class: "relative-time-preview" }, oa = { class: "setting-group" }, ua = { class: "datetime-group" }, ca = { class: "setting-group" }, da = {
  key: 0,
  class: "datetime-group"
}, Ea = { class: "setting-group" }, va = { class: "variable-config" }, ga = { class: "variable-config" }, Ta = /* @__PURE__ */ Qe({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(V) {
    const e = _e("i18n"), t = (d) => e ? e.t(d) : d, v = et(V, "modelValue"), a = I("absolute"), T = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ], w = /* @__PURE__ */ new Date(), se = new Date(w.getTime() - 720 * 60 * 60 * 1e3), te = new Date(w.getTime() + 10080 * 60 * 1e3), ae = new Date(w.getTime() - 1440 * 60 * 1e3), j = /* @__PURE__ */ new Date(), i = I({
      timelineMin: se.toISOString(),
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
    }), F = I(!1), h = I(), G = I(), B = I(), R = I(), m = I(null), p = I(!1), k = I(!1), C = I(new Ae("")), O = I(new Ae("")), x = z(() => m.value ? m.value.getAllVariables().map(([d, c]) => c).filter((d) => d.value && typeof d.value == "string").map((d) => ({ name: d.name, value: d.value })) : []), ce = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ], pe = () => {
      a.value === "relative" ? (i.value.relativeTime.enabled = !0, Ne()) : i.value.relativeTime.enabled = !1, P();
    }, Ie = () => {
      i.value.relativeTime?.enabled && Ne(), P();
    }, we = (d, c) => {
      const L = /* @__PURE__ */ new Date(), N = new Date(L), U = Number(d) || 24;
      switch (typeof c == "object" && c !== null ? c.value : c) {
        case "hours":
          N.setHours(N.getHours() - U);
          break;
        case "days":
          N.setDate(N.getDate() - U);
          break;
        case "weeks":
          N.setDate(N.getDate() - U * 7);
          break;
        case "months":
          N.setMonth(N.getMonth() - U);
          break;
        case "years":
          N.setFullYear(N.getFullYear() - U);
          break;
        default:
          N.setHours(N.getHours() - U);
      }
      return { start: N, end: L };
    }, Ne = () => {
      if (!i.value.relativeTime?.enabled) return;
      const { start: d, end: c } = we(
        i.value.relativeTime.offset,
        i.value.relativeTime.unit
      ), N = (c.getTime() - d.getTime()) * 0.2, U = c, re = new Date(c.getTime() - N);
      if (i.value.timelineMin = d.toISOString(), i.value.timelineMax = c.toISOString(), i.value.rangeStart = re.toISOString(), i.value.rangeEnd = U.toISOString(), v.value.timelineMin = i.value.timelineMin, v.value.timelineMax = i.value.timelineMax, v.value.rangeStart = i.value.rangeStart, v.value.rangeEnd = i.value.rangeEnd, i.value.rangeStartVariable && m.value) {
        const J = m.value.getVariable(i.value.rangeStartVariable);
        J && (J.value = i.value.rangeStart);
      }
      if (i.value.rangeEndVariable && m.value) {
        const J = m.value.getVariable(i.value.rangeEndVariable);
        J && (J.value = i.value.rangeEnd);
      }
    }, Re = () => {
      p.value || (i.value.rangeStartVariable = void 0), P();
    }, xe = () => {
      k.value || (i.value.rangeEndVariable = void 0), P();
    }, Le = () => {
      if (i.value.rangeStartVariable && m.value) {
        const d = m.value.getVariable(i.value.rangeStartVariable);
        d && (C.value.setTo(d), i.value.rangeStart = C.value.value);
      }
      if (i.value.rangeEndVariable && m.value) {
        const d = m.value.getVariable(i.value.rangeEndVariable);
        d && (O.value.setTo(d), i.value.rangeEnd = O.value.value);
      }
      P();
    }, H = (d, c) => {
      if (!d) return;
      const L = new Date(d);
      return c && (L.setHours(c.getHours()), L.setMinutes(c.getMinutes()), L.setSeconds(c.getSeconds())), L.toISOString();
    }, Z = () => {
      i.value.timelineMin = H(h.value, G.value), P();
    }, q = () => {
      i.value.timelineMin = H(h.value, G.value), P();
    }, X = () => {
      i.value.timelineMax = H(B.value, R.value), P();
    }, de = () => {
      i.value.timelineMax = H(B.value, R.value), P();
    }, P = () => {
      let d = i.value.rangeStart, c = i.value.rangeEnd;
      p.value && C.value.value && (d = C.value.value), k.value && O.value.value && (c = O.value.value);
      const L = {
        ...i.value,
        timelineMin: i.value.timelineMin,
        timelineMax: F.value ? (/* @__PURE__ */ new Date()).toISOString() : i.value.timelineMax,
        rangeStart: d,
        rangeEnd: c,
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
      Object.assign(v.value, L);
    }, Fe = () => {
      F.value || i.value.timelineMax || (i.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), P();
    }, De = () => {
      const d = /* @__PURE__ */ new Date(), c = new Date(d.getTime() - 720 * 60 * 60 * 1e3), L = new Date(d.getTime() + 10080 * 60 * 1e3), N = new Date(d.getTime() - 1440 * 60 * 1e3), U = /* @__PURE__ */ new Date();
      i.value = {
        timelineMin: c.toISOString(),
        timelineMax: L.toISOString(),
        rangeStart: N.toISOString(),
        rangeEnd: U.toISOString(),
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
      }, a.value = "absolute", F.value = !1, P();
    }, Ge = _e(st);
    return tt(() => {
      try {
        if (m.value = Ge ?? null, !m.value) throw new Error("VariableRepository not provided");
      } catch (d) {
        console.warn("VariableRepository not found in container:", d);
      }
      if (v.value && v.value.timelineMin) {
        if (Object.assign(i.value, Ze(v.value)), F.value = !v.value.timelineMax, p.value = !!v.value.rangeStartVariable, k.value = !!v.value.rangeEndVariable, i.value.relativeTime || (i.value.relativeTime = {
          enabled: !1,
          offset: 24,
          unit: "hours"
        }), a.value = i.value.relativeTime.enabled ? "relative" : "absolute", i.value.timelineMin) {
          const d = new Date(i.value.timelineMin);
          h.value = d, G.value = d;
        }
        if (i.value.timelineMax) {
          const d = new Date(i.value.timelineMax);
          B.value = d, R.value = d;
        }
      } else
        De();
      P();
    }), Me(() => v.value, (d) => {
      d && (Object.assign(i.value, Ze(d)), F.value = !d.timelineMax, d.relativeTime && (a.value = d.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (d, c) => {
      const L = be("va-select"), N = be("va-input"), U = be("va-date-input"), re = be("va-time-input"), J = be("va-checkbox");
      return W(), K("section", ta, [
        g("div", aa, [
          g("div", sa, [
            ee(L, {
              modelValue: a.value,
              "onUpdate:modelValue": [
                c[0] || (c[0] = (_) => a.value = _),
                pe
              ],
              label: t("Time Range Mode"),
              options: T,
              "text-by": "label",
              "value-by": "value"
            }, null, 8, ["modelValue", "label"])
          ]),
          a.value === "relative" && i.value.relativeTime ? (W(), K("div", ra, [
            g("label", null, Y(t("Relative Time Range")), 1),
            g("div", na, [
              g("div", ia, [
                ee(N, {
                  modelValue: i.value.relativeTime.offset,
                  "onUpdate:modelValue": [
                    c[1] || (c[1] = (_) => i.value.relativeTime.offset = _),
                    Ie
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
                    c[2] || (c[2] = (_) => i.value.relativeTime.unit = _),
                    Ie
                  ],
                  options: ce,
                  label: t("Unit"),
                  "text-by": "text",
                  "value-by": "value",
                  class: "unit-select"
                }, null, 8, ["modelValue", "label"])
              ]),
              g("div", la, Y(t("Now")) + " - " + Y(i.value.relativeTime.offset) + " " + Y(t(i.value.relativeTime.unit)) + " → " + Y(t("Now")), 1)
            ])
          ])) : ue("", !0),
          a.value === "absolute" ? (W(), K(at, { key: 1 }, [
            g("div", oa, [
              g("label", null, Y(t("Timeline Start")), 1),
              g("div", ua, [
                ee(U, {
                  modelValue: h.value,
                  "onUpdate:modelValue": [
                    c[3] || (c[3] = (_) => h.value = _),
                    Z
                  ],
                  label: t("Date")
                }, null, 8, ["modelValue", "label"]),
                ee(re, {
                  modelValue: G.value,
                  "onUpdate:modelValue": [
                    c[4] || (c[4] = (_) => G.value = _),
                    q
                  ],
                  label: t("Time")
                }, null, 8, ["modelValue", "label"])
              ])
            ]),
            g("div", ca, [
              g("label", null, Y(t("Timeline End")), 1),
              ee(J, {
                modelValue: F.value,
                "onUpdate:modelValue": [
                  c[5] || (c[5] = (_) => F.value = _),
                  Fe
                ],
                label: t("Use current time")
              }, null, 8, ["modelValue", "label"]),
              F.value ? ue("", !0) : (W(), K("div", da, [
                ee(U, {
                  modelValue: B.value,
                  "onUpdate:modelValue": [
                    c[6] || (c[6] = (_) => B.value = _),
                    X
                  ],
                  label: t("Date")
                }, null, 8, ["modelValue", "label"]),
                ee(re, {
                  modelValue: R.value,
                  "onUpdate:modelValue": [
                    c[7] || (c[7] = (_) => R.value = _),
                    de
                  ],
                  label: t("Time")
                }, null, 8, ["modelValue", "label"])
              ]))
            ])
          ], 64)) : ue("", !0),
          g("div", Ea, [
            g("label", null, Y(t("Variable Binding")), 1),
            g("div", va, [
              ee(J, {
                modelValue: p.value,
                "onUpdate:modelValue": [
                  c[8] || (c[8] = (_) => p.value = _),
                  Re
                ],
                label: t("Start time from variable")
              }, null, 8, ["modelValue", "label"]),
              p.value ? (W(), je(L, {
                key: 0,
                modelValue: i.value.rangeStartVariable,
                "onUpdate:modelValue": [
                  c[9] || (c[9] = (_) => i.value.rangeStartVariable = _),
                  Le
                ],
                options: x.value,
                label: t("Start variable"),
                "text-by": "name",
                "value-by": "name"
              }, null, 8, ["modelValue", "options", "label"])) : ue("", !0)
            ]),
            g("div", ga, [
              ee(J, {
                modelValue: k.value,
                "onUpdate:modelValue": [
                  c[10] || (c[10] = (_) => k.value = _),
                  xe
                ],
                label: t("End time from variable")
              }, null, 8, ["modelValue", "label"]),
              k.value ? (W(), je(L, {
                key: 0,
                modelValue: i.value.rangeEndVariable,
                "onUpdate:modelValue": [
                  c[11] || (c[11] = (_) => i.value.rangeEndVariable = _),
                  Le
                ],
                options: x.value,
                label: t("End variable"),
                "text-by": "name",
                "value-by": "name"
              }, null, 8, ["modelValue", "options", "label"])) : ue("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), Sa = /* @__PURE__ */ nt(Ta, [["__scopeId", "data-v-e90998f7"]]), ha = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", fa = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: $e },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: $e }
];
class M extends rt {
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
      getFeature: () => this.eClass().getEStructuralFeature(M.ENABLED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.ENABLED,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.OFFSET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.OFFSET,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.UNIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.UNIT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case M.ENABLED:
        return this.enabled;
      case M.OFFSET:
        return this.offset;
      case M.UNIT:
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
      case M.ENABLED:
        this.enabled = t, super.eSet(e, t);
        break;
      case M.OFFSET:
        this.offset = t, super.eSet(e, t);
        break;
      case M.UNIT:
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
      case M.ENABLED:
        return this._enabled !== !1;
      case M.OFFSET:
        return this._offset !== 24;
      case M.UNIT:
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
      case M.ENABLED:
        this._enabled = !1;
        return;
      case M.OFFSET:
        this._offset = 24;
        return;
      case M.UNIT:
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
class We extends Dt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new We()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new RelativeTimeConfig instance
   */
  createRelativeTimeConfig() {
    return new M();
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
class o extends yt {
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
    At.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(We.eINSTANCE);
    const e = new qe();
    e.setName("RelativeTimeConfig"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.RELATIVE_TIME_CONFIG = e;
    const t = new y();
    t.setName("enabled"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), o.Literals.RELATIVE_TIME_CONFIG__ENABLED = t;
    const v = new y();
    v.setName("offset"), v.setLowerBound(0), v.setUpperBound(1), e.getEStructuralFeatures().push(v), o.Literals.RELATIVE_TIME_CONFIG__OFFSET = v;
    const a = new y();
    a.setName("unit"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), o.Literals.RELATIVE_TIME_CONFIG__UNIT = a;
    const T = new qe();
    T.setName("TimelineSettings"), T.setAbstract(!1), T.setInterface(!1), this.getEClassifiers().push(T), T.setEPackage(this), o.Literals.TIMELINE_SETTINGS = T;
    const w = new y();
    w.setName("timelineMin"), w.setLowerBound(0), w.setUpperBound(1), T.getEStructuralFeatures().push(w), o.Literals.TIMELINE_SETTINGS__TIMELINE_MIN = w;
    const se = new y();
    se.setName("timelineMax"), se.setLowerBound(0), se.setUpperBound(1), T.getEStructuralFeatures().push(se), o.Literals.TIMELINE_SETTINGS__TIMELINE_MAX = se;
    const te = new y();
    te.setName("rangeStart"), te.setLowerBound(0), te.setUpperBound(1), T.getEStructuralFeatures().push(te), o.Literals.TIMELINE_SETTINGS__RANGE_START = te;
    const ae = new y();
    ae.setName("rangeEnd"), ae.setLowerBound(0), ae.setUpperBound(1), T.getEStructuralFeatures().push(ae), o.Literals.TIMELINE_SETTINGS__RANGE_END = ae;
    const j = new Vt();
    j.setContainment(!0), j.setName("relativeTime"), j.setLowerBound(0), j.setUpperBound(1), T.getEStructuralFeatures().push(j), o.Literals.TIMELINE_SETTINGS__RELATIVE_TIME = j;
    const i = new y();
    i.setName("rangeStartVariable"), i.setLowerBound(0), i.setUpperBound(1), T.getEStructuralFeatures().push(i), o.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE = i;
    const F = new y();
    F.setName("rangeEndVariable"), F.setLowerBound(0), F.setUpperBound(1), T.getEStructuralFeatures().push(F), o.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE = F;
    const h = new y();
    h.setName("startTime"), h.setLowerBound(0), h.setUpperBound(1), T.getEStructuralFeatures().push(h), o.Literals.TIMELINE_SETTINGS__START_TIME = h;
    const G = new y();
    G.setName("endTime"), G.setLowerBound(0), G.setUpperBound(1), T.getEStructuralFeatures().push(G), o.Literals.TIMELINE_SETTINGS__END_TIME = G;
    const B = new y();
    B.setName("currentTime"), B.setLowerBound(0), B.setUpperBound(1), T.getEStructuralFeatures().push(B), o.Literals.TIMELINE_SETTINGS__CURRENT_TIME = B;
    const R = new y();
    R.setName("stepSize"), R.setLowerBound(0), R.setUpperBound(1), T.getEStructuralFeatures().push(R), o.Literals.TIMELINE_SETTINGS__STEP_SIZE = R;
    const m = new y();
    m.setName("playbackSpeed"), m.setLowerBound(0), m.setUpperBound(1), T.getEStructuralFeatures().push(m), o.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED = m;
    const p = new y();
    p.setName("autoPlay"), p.setLowerBound(0), p.setUpperBound(1), T.getEStructuralFeatures().push(p), o.Literals.TIMELINE_SETTINGS__AUTO_PLAY = p;
    const k = new y();
    k.setName("fixStartKnob"), k.setLowerBound(0), k.setUpperBound(1), T.getEStructuralFeatures().push(k), o.Literals.TIMELINE_SETTINGS__FIX_START_KNOB = k;
    const C = new y();
    C.setName("showControls"), C.setLowerBound(0), C.setUpperBound(1), T.getEStructuralFeatures().push(C), o.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS = C;
    const O = new y();
    O.setName("rangeStripColor"), O.setLowerBound(0), O.setUpperBound(1), T.getEStructuralFeatures().push(O), o.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR = O;
    const x = new y();
    x.setName("showTimeInfo"), x.setLowerBound(0), x.setUpperBound(1), T.getEStructuralFeatures().push(x), o.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO = x, o.Literals.RELATIVE_TIME_CONFIG__ENABLED.setEType(A().getEClassifier("EBoolean")), o.Literals.RELATIVE_TIME_CONFIG__OFFSET.setEType(A().getEClassifier("EInt")), o.Literals.RELATIVE_TIME_CONFIG__UNIT.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__TIMELINE_MIN.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__TIMELINE_MAX.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_START.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_END.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RELATIVE_TIME.setEType(o.Literals.RELATIVE_TIME_CONFIG), o.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__START_TIME.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__END_TIME.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__CURRENT_TIME.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__STEP_SIZE.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED.setEType(A().getEClassifier("EDouble")), o.Literals.TIMELINE_SETTINGS__AUTO_PLAY.setEType(A().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__FIX_START_KNOB.setEType(A().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS.setEType(A().getEClassifier("EBoolean")), o.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR.setEType(A().getEClassifier("EString")), o.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO.setEType(A().getEClassifier("EBoolean"));
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
const _a = `<?xml version="1.0" encoding="UTF-8"?>
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
var ma = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, ze = (V, e, t, v) => {
  for (var a = v > 1 ? void 0 : v ? pa(e, t) : e, T = V.length - 1, w; T >= 0; T--)
    (w = V[T]) && (a = (v ? w(e, t, a) : w(a)) || a);
  return v && a && ma(e, t, a), a;
}, Je = (V, e) => (t, v) => e(t, v, V);
o.eINSTANCE;
const fe = "TimelineWidget";
let Ve = class {
  constructor(V, e) {
    this.events = V, this.actions = e;
  }
  type = fe;
  component = ea;
  settingsComponent = Sa;
  supportedDSTypes = [];
  icon = ha;
  name = "Timeline";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: _a,
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
    this.events.registerWidget(fe, fa), this.actions.registerWidgetType(fe, me, "widget");
  }
  unregister() {
    this.events.unregisterWidget(fe), this.actions.unregisterWidgetType(fe);
  }
};
ze([
  St()
], Ve.prototype, "register", 1);
ze([
  ht()
], Ve.prototype, "unregister", 1);
Ve = ze([
  ft({
    service: [Ct],
    properties: { "widget.type": fe }
  }),
  Je(0, Ye(gt)),
  Je(1, Ye(Tt))
], Ve);
export {
  s as TimelineSettingsImpl,
  ea as TimelineWidget,
  Ve as TimelineWidgetProvider,
  Sa as TimelineWidgetSettings,
  o as TimelinesettingsPackage,
  _a as timelineSettingsFormXmi
};
