(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-22341954]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-22341954]{overflow:hidden;position:relative;background:var(--color-bg);border:1px solid var(--color-divider);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-22341954]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-22341954]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-22341954]:hover{filter:brightness(1.1)}.range-strip[data-v-22341954]:active{cursor:grabbing}.timeline-knob[data-v-22341954]{position:absolute;top:50%;width:24px;height:24px;background:var(--color-accent);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-22341954]:hover{background:var(--color-accent);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-22341954]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-22341954]{left:0;z-index:4}.fixed-knob[data-v-22341954]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-22341954]:hover{transform:translate(-50%,-50%)!important;background:var(--color-divider)!important}.end-knob[data-v-22341954]{right:-24px;z-index:4}.time-axis[data-v-22341954]{position:relative;height:30px;background:var(--color-pane);border-top:1px solid var(--color-divider);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-22341954]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-22341954]{width:1px;height:8px;background:var(--color-dim);margin-top:2px}.tick-label[data-v-22341954]{font-size:.7rem;color:var(--color-dim);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-22341954]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--color-bg);border:1px solid var(--color-divider);border-radius:6px;padding:.75rem}.time-display[data-v-22341954]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-22341954]{font-size:.8rem;font-weight:500;color:var(--color-dim)}.time-value[data-v-22341954]{font-size:.9rem;font-weight:600;color:var(--color-fg);word-wrap:break-word}.controls[data-v-22341954]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-22341954]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--color-accent));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-22341954]:hover:not(:disabled){background:var(--color-accent);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-22341954]:disabled{background:var(--color-divider);color:var(--color-dim);cursor:not-allowed;transform:none}.play-button.playing[data-v-22341954]{background:var(--play-button-playing, #ff6b35);animation:pulse-22341954 2s infinite}.play-button.playing[data-v-22341954]:hover{filter:brightness(.9)}@keyframes pulse-22341954{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-22341954]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-22341954]{font-weight:500;color:var(--color-fg);min-width:fit-content}.speed-control select[data-v-22341954]{padding:.5rem;border:1px solid var(--color-divider);border-radius:4px;background:var(--color-bg);color:var(--color-fg);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-22341954]{flex-direction:column;gap:.75rem}.time-display[data-v-22341954]{text-align:left}.controls[data-v-22341954]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-22341954]{width:28px;height:28px}.tick-label[data-v-22341954]{font-size:.6rem}.timeline-container[data-v-22341954]{min-height:70px}.timeline-track[data-v-22341954]{height:35px}}.settings-container[data-v-3deaaa09]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-3deaaa09]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-3deaaa09]{font-weight:600;color:var(--color-fg);font-size:.9rem}.datetime-group[data-v-3deaaa09]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-3deaaa09]>*{flex:1;min-width:0}.relative-time-config[data-v-3deaaa09]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--color-raised);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-3deaaa09]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-3deaaa09]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-3deaaa09]{flex:2;min-width:80px}.relative-time-preview[data-v-3deaaa09]{font-size:.85rem;color:var(--color-accent);padding:.5rem;background:var(--color-pane);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-3deaaa09]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { WidgetActionInterfaceImpl as It, EVENT_ACTIONS_REGISTRY as Nt, PayloadImpl as at, EVENT_REGISTRY_ID as bt, EVENT_ACTIONS_REGISTRY_ID as Mt } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as ut, activate as wt, deactivate as yt, inject as st } from "@eclipse-daanse/tsm";
import { defineComponent as dt, mergeModels as Rt, toRefs as Dt, useModel as ct, inject as Fe, ref as N, computed as C, watch as be, onMounted as Et, onUnmounted as Lt, createElementBlock as z, openBlock as k, withModifiers as Je, createElementVNode as T, createCommentVNode as Se, normalizeStyle as pe, unref as S, Fragment as gt, renderList as At, toDisplayString as $, normalizeClass as Vt, withDirectives as Ct, createStaticVNode as Ot, vModelSelect as xt, createVNode as ne, isRef as Ce, createBlock as it } from "vue";
import { useRoute as Ft } from "vue-router";
import { useTranslation as vt, useFormat as Gt, VariableWrapper as Ge, plainSettings as nt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as St } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as ke } from "org.eclipse.daanse.board.app.lib.events";
import { DSelect as Oe, DInput as kt, DDateInput as xe, DCheckbox as qe } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEPackage as Pt, EPackageRegistry as Ut, BasicEClass as rt, BasicEAttribute as A, BasicEReference as Wt, getEcorePackage as V, BasicEObject as Tt, BasicEFactory as Kt } from "@emfts/core";
import { WIDGET_SERVICE_ID as zt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Bt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var $t = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Pe = (b, e, t, _) => {
  for (var I = Ht(e, t), E = b.length - 1, a; E >= 0; E--)
    (a = b[E]) && (I = a(e, t, I) || I);
  return I && $t(e, t, I), I;
};
class Ie extends It {
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
Pe([
  ke({ eventType: "timeline.zoomIn" })
], Ie.prototype, "zoomIn");
Pe([
  ke({ eventType: "timeline.zoomOut" })
], Ie.prototype, "zoomOut");
Pe([
  ke({ eventType: "timeline.setDateRange" })
], Ie.prototype, "setDateRange");
Pe([
  ke({ eventType: "timeline.jumpToNow" })
], Ie.prototype, "jumpToNow");
const Xt = { class: "timeline-container" }, Yt = ["title"], Zt = ["title"], jt = ["title"], Jt = ["title"], qt = { class: "time-axis" }, Qt = { class: "tick-label" }, ea = {
  key: 0,
  class: "time-info"
}, ta = { class: "time-display" }, aa = { class: "time-label" }, sa = { class: "time-value" }, ia = { class: "time-display" }, na = { class: "time-label" }, ra = { class: "time-value" }, oa = { class: "time-display" }, la = { class: "time-label" }, ua = { class: "time-value" }, da = {
  key: 1,
  class: "controls"
}, ca = ["disabled"], Ea = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ga = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, va = { class: "speed-control" }, Sa = /* @__PURE__ */ dt({
  __name: "TimelineWidget",
  props: /* @__PURE__ */ Rt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(b, { expose: e }) {
    const { t } = vt("timeline"), _ = Gt(), I = b, { id: E } = Dt(I), a = ct(b, "configv"), ae = Fe(Bt.TINY_EMITTER), se = Fe(Nt), i = Ft().params.pageid || "";
    class O extends Ie {
      zoomIn() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), v = new Date(a.value.rangeEnd || Date.now()), g = (v.getTime() - r.getTime()) * 0.25, h = new Date(r.getTime() + g), f = new Date(v.getTime() - g);
        f.getTime() - h.getTime() > 6e4 && (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString());
      }
      zoomOut() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), v = new Date(a.value.rangeEnd || Date.now()), g = (v.getTime() - r.getTime()) * 0.5, h = new Date(Math.max(
          r.getTime() - g,
          new Date(a.value.timelineMin || 0).getTime()
        )), f = new Date(Math.min(
          v.getTime() + g,
          new Date(a.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString();
      }
      setDateRange(r, v) {
        a.value.rangeStart = r, a.value.rangeEnd = v;
      }
      jumpToNow() {
        const r = /* @__PURE__ */ new Date(), v = new Date(a.value.rangeEnd || r).getTime() - new Date(a.value.rangeStart || r).getTime(), u = r, g = new Date(r.getTime() - v);
        a.value.rangeStart = g.toISOString(), a.value.rangeEnd = u.toISOString();
      }
    }
    const W = new O();
    e(W);
    const H = () => {
      E?.value && ae.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: E.value,
        payload: { widgetId: E.value, timestamp: Date.now() }
      });
    }, X = () => {
      E?.value && ae.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: E.value,
        payload: { widgetId: E.value, timestamp: Date.now() }
      });
    }, m = N(null), P = N(new Ge("")), Y = N(new Ge("")), x = N(!1), F = N(a.value.playbackSpeed || 1), R = N(!1), Z = N(), G = N(null), D = N(null), B = N(null);
    let J = null, le = 0;
    const ce = new Date(Date.now() - 720 * 60 * 60 * 1e3), Ne = new Date(Date.now() + 10080 * 60 * 1e3), Me = new Date(Date.now() - 1440 * 60 * 1e3), we = /* @__PURE__ */ new Date(), ye = (n, r) => {
      const v = /* @__PURE__ */ new Date(), u = new Date(v), g = Number(n) || 24;
      switch (typeof r == "object" && r !== null ? r.value : r) {
        case "hours":
          u.setHours(u.getHours() - g);
          break;
        case "days":
          u.setDate(u.getDate() - g);
          break;
        case "weeks":
          u.setDate(u.getDate() - g * 7);
          break;
        case "months":
          u.setMonth(u.getMonth() - g);
          break;
        case "years":
          u.setFullYear(u.getFullYear() - g);
          break;
        default:
          u.setHours(u.getHours() - g);
      }
      return { start: u, end: v };
    }, We = () => {
      if (!a.value.relativeTime?.enabled) return;
      const { start: n, end: r } = ye(
        a.value.relativeTime.offset,
        a.value.relativeTime.unit
      );
      a.value.timelineMin = n.toISOString(), a.value.timelineMax = r.toISOString();
      const u = (r.getTime() - n.getTime()) * 0.2, g = r, h = new Date(r.getTime() - u);
      if (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = g.toISOString(), a.value.rangeStartVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeStartVariable);
        f && (f.value = h.toISOString());
      }
      if (a.value.rangeEndVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeEndVariable);
        f && (f.value = g.toISOString());
      }
    }, ie = C(() => a.value.timelineMin ? new Date(a.value.timelineMin) : ce), q = C(() => a.value.timelineMax ? new Date(a.value.timelineMax) : Ne), Q = C(() => {
      if (a.value.rangeStartVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeStartVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeStart ? new Date(a.value.rangeStart) : Me;
    }), K = C(() => {
      if (a.value.rangeEndVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeEndVariable);
        if (n && n.value)
          return new Date(n.value);
      }
      return a.value.rangeEnd ? new Date(a.value.rangeEnd) : we;
    }), re = C(() => {
      if (a.value.fixStartKnob)
        return 0;
      if (G.value !== null)
        return G.value;
      const n = ie.value.getTime(), r = q.value.getTime(), v = Q.value.getTime();
      return Math.max(0, Math.min(100, (v - n) / (r - n) * 100));
    }), Re = C(() => {
      if (D.value !== null)
        return D.value;
      const n = ie.value.getTime(), r = q.value.getTime(), v = K.value.getTime();
      return Math.max(0, Math.min(100, (v - n) / (r - n) * 100));
    }), Ke = C(() => B.value ? {
      ...B.value,
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    } : {
      left: re.value + "%",
      width: Re.value - re.value + "%",
      background: De(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    }), De = (n) => {
      const v = (a.value.rangeStripColor || "#d17600").replace("#", ""), u = parseInt(v.substr(0, 2), 16), g = parseInt(v.substr(2, 2), 16), h = parseInt(v.substr(4, 2), 16);
      return `rgba(${u}, ${g}, ${h}, ${n})`;
    }, ze = C(() => {
      const n = a.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: U(n)
      };
    }), U = (n) => {
      const r = n.replace("#", ""), v = parseInt(r.substr(0, 2), 16), u = parseInt(r.substr(2, 2), 16), g = parseInt(r.substr(4, 2), 16), h = 0.6, f = Math.min(255, Math.round(v + (255 - v) * h)), M = Math.min(255, Math.round(u + (255 - u) * h)), L = Math.min(255, Math.round(g + (255 - g) * h));
      return `rgb(${f}, ${M}, ${L})`;
    }, Le = () => {
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
    }, $e = C(() => {
      const n = a.value.rangeStripColor || "#d17600", r = He(n);
      return {
        "--play-button-bg": n,
        "--play-button-playing": r
      };
    }), He = (n) => {
      const r = n.replace("#", ""), v = parseInt(r.substr(0, 2), 16), u = parseInt(r.substr(2, 2), 16), g = parseInt(r.substr(4, 2), 16), h = 0.8, M = Math.min(255, Math.round(v * h * 1.1)), L = Math.round(u * h), j = Math.round(g * h);
      return `rgb(${M}, ${L}, ${j})`;
    }, Xe = C(() => K.value.getTime() >= q.value.getTime()), Ae = C(() => Re.value - re.value >= 10 ? !1 : re.value > 50), Ye = C(() => {
      const n = [], r = ie.value.getTime(), u = q.value.getTime() - r, g = 8;
      for (let h = 0; h <= g; h++) {
        const f = r + u / g * h, M = new Date(f), L = h / g * 100, j = _.date(M, {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        n.push({
          timestamp: M.toISOString(),
          position: L,
          label: j
        });
      }
      return n;
    }), Ve = (n) => _.date(n, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), l = () => {
      const n = K.value.getTime() - Q.value.getTime(), r = Math.floor(n / (1e3 * 60 * 60)), v = Math.floor(r / 24);
      return v > 0 ? `${v}d ${r % 24}h` : r > 0 ? `${r}h` : `${Math.floor(n / (1e3 * 60))}min`;
    }, o = () => Z.value?.getBoundingClientRect();
    let c = null;
    const p = (n, r, v = !1) => {
      const u = a.value.fixStartKnob ? ie.value : n || Q.value, g = r || K.value;
      if (!u || isNaN(u.getTime()) || !g || isNaN(g.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: u, actualEnd: g });
        return;
      }
      const h = () => {
        if (a.value.rangeStart = u.toISOString(), a.value.rangeEnd = g.toISOString(), a.value.playbackSpeed = F.value, a.value.rangeStartVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeStartVariable);
          f && (f.value = u.toISOString());
        }
        if (a.value.rangeEndVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeEndVariable);
          f && (f.value = g.toISOString());
        }
      };
      v ? (c && (clearTimeout(c), c = null), h()) : (c && clearTimeout(c), c = setTimeout(h, 300));
    }, w = (n) => {
      if (a.value.fixStartKnob)
        return;
      n.preventDefault(), R.value = !0;
      const r = o();
      if (!r) return;
      const v = n.clientX, u = ie.value.getTime(), g = q.value.getTime(), h = (g - u) / r.width, f = Q.value.getTime(), M = K.value.getTime(), L = g - u;
      let j = f;
      const ue = (Te) => {
        if (!R.value) return;
        const he = Te.clientX - v;
        let te = f + he * h;
        te = Math.max(u, Math.min(te, M - 6e4)), j = te;
        const ge = Math.max(0, Math.min(100, (te - u) / L * 100)), fe = Math.max(0, Math.min(100, (M - u) / L * 100));
        G.value = ge, B.value = {
          left: ge + "%",
          width: fe - ge + "%"
        };
      }, de = () => {
        R.value = !1, G.value = null, B.value = null, p(new Date(j), new Date(M), !0), document.removeEventListener("mousemove", ue), document.removeEventListener("mouseup", de);
      };
      document.addEventListener("mousemove", ue), document.addEventListener("mouseup", de);
    }, ee = (n) => {
      n.preventDefault(), R.value = !0;
      const r = o();
      if (!r) return;
      const v = n.clientX, u = ie.value.getTime(), g = q.value.getTime(), h = (g - u) / r.width, f = K.value.getTime(), M = Q.value.getTime(), L = g - u;
      let j = f;
      const ue = (Te) => {
        if (!R.value) return;
        const he = Te.clientX - v;
        let te = f + he * h;
        te = Math.min(g, Math.max(te, M + 6e4)), j = te;
        const ge = Math.max(0, Math.min(100, (M - u) / L * 100)), fe = Math.max(0, Math.min(100, (te - u) / L * 100));
        D.value = fe, B.value = {
          left: ge + "%",
          width: fe - ge + "%"
        };
      }, de = () => {
        R.value = !1, D.value = null, B.value = null, p(new Date(M), new Date(j), !0), document.removeEventListener("mousemove", ue), document.removeEventListener("mouseup", de);
      };
      document.addEventListener("mousemove", ue), document.addEventListener("mouseup", de);
    }, Ee = (n) => {
      if (a.value.fixStartKnob) {
        ee(n);
        return;
      }
      n.preventDefault(), R.value = !0;
      const r = o();
      if (!r) return;
      const v = n.clientX, u = ie.value.getTime(), g = q.value.getTime(), h = (g - u) / r.width, f = Q.value.getTime(), M = K.value.getTime(), L = M - f, j = g - u;
      let ue = f, de = M;
      const Te = (te) => {
        if (!R.value) return;
        const fe = (te.clientX - v) * h;
        let ve = f + fe, me = ve + L;
        ve < u && (ve = u, me = ve + L), me > g && (me = g, ve = me - L), ue = ve, de = me;
        const je = Math.max(0, Math.min(100, (ve - u) / j * 100)), tt = Math.max(0, Math.min(100, (me - u) / j * 100));
        G.value = je, D.value = tt, B.value = {
          left: je + "%",
          width: tt - je + "%"
        };
      }, he = () => {
        R.value = !1, G.value = null, D.value = null, B.value = null, p(new Date(ue), new Date(de), !0), document.removeEventListener("mousemove", Te), document.removeEventListener("mouseup", he);
      };
      document.addEventListener("mousemove", Te), document.addEventListener("mouseup", he);
    }, mt = () => {
      x.value = !x.value, x.value ? pt() : Ze();
    }, pt = () => {
      le = performance.now(), et();
    }, Ze = () => {
      J && (cancelAnimationFrame(J), J = null);
    }, et = () => {
      if (!x.value) return;
      const n = performance.now(), r = n - le, v = 1e3 / F.value;
      if (r >= v) {
        const u = Q.value.getTime(), g = K.value.getTime(), h = g - u, f = Le();
        console.log("Playback step:", {
          stepSize: a.value.stepSize,
          stepSizeMs: f,
          currentStart: new Date(u).toISOString(),
          currentEnd: new Date(g).toISOString(),
          rangeDuration: h
        });
        const M = u + f, L = M + h;
        if (console.log("New times:", {
          newStart: new Date(M).toISOString(),
          newEnd: new Date(L).toISOString(),
          timelineMax: q.value.toISOString()
        }), L >= q.value.getTime()) {
          Ze(), x.value = !1;
          return;
        }
        p(new Date(M), new Date(L)), le = n;
      }
      J = requestAnimationFrame(et);
    };
    be(() => a.value.rangeStartVariable, (n) => {
      if (n && m.value) {
        const r = m.value.getVariable(n);
        r && P.value.setTo(r);
      }
    }), be(() => a.value.rangeEndVariable, (n) => {
      if (n && m.value) {
        const r = m.value.getVariable(n);
        r && Y.value.setTo(r);
      }
    }), be(() => P.value.value, (n) => {
      n && a.value.rangeStartVariable && new Date(n).getTime() !== Q.value.getTime() && (a.value.rangeStart = n);
    }), be(() => Y.value.value, (n) => {
      n && a.value.rangeEndVariable && new Date(n).getTime() !== K.value.getTime() && (a.value.rangeEnd = n);
    });
    const _t = Fe(St);
    return Et(() => {
      E?.value && se.registerInstance(E.value, W, "TimelineWidget", i);
      try {
        if (m.value = _t ?? null, !m.value) throw new Error("VariableRepository not provided");
      } catch (n) {
        console.warn("VariableRepository not found in container:", n);
      }
      if (a.value.timelineMin || (a.value.timelineMin = ce.toISOString()), a.value.timelineMax || (a.value.timelineMax = Ne.toISOString()), a.value.rangeStart || (a.value.rangeStart = Me.toISOString()), a.value.rangeEnd || (a.value.rangeEnd = we.toISOString()), a.value.playbackSpeed ? F.value = a.value.playbackSpeed : (a.value.playbackSpeed = 1, F.value = 1), a.value.rangeStripColor || (a.value.rangeStripColor = "#d17600"), a.value.fixStartKnob === void 0 && (a.value.fixStartKnob = !1), a.value.showTimeInfo === void 0 && (a.value.showTimeInfo = !0), a.value.showControls === void 0 && (a.value.showControls = !0), a.value.stepSize === void 0 && (a.value.stepSize = "hour"), a.value.rangeStartVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeStartVariable);
        n && P.value.setTo(n);
      }
      if (a.value.rangeEndVariable && m.value) {
        const n = m.value.getVariable(a.value.rangeEndVariable);
        n && Y.value.setTo(n);
      }
      a.value.relativeTime?.enabled && We();
    }), Lt(() => {
      E?.value && se.unregisterInstance(E.value), Ze();
    }), (n, r) => (k(), z("div", {
      class: "timeline-widget",
      onClick: H,
      onContextmenu: Je(X, ["prevent"])
    }, [
      T("div", Xt, [
        T("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: Z,
          style: pe(ze.value)
        }, [
          T("div", {
            class: "range-strip",
            style: pe(Ke.value),
            onMousedown: Ee,
            title: a.value.fixStartKnob ? S(t)("Widget.rangeFixed") : S(t)("Widget.range")
          }, [
            a.value.fixStartKnob ? (k(), z("div", {
              key: 1,
              class: "timeline-knob start-knob fixed-knob",
              title: S(t)("Widget.startKnobFixed")
            }, null, 8, jt)) : (k(), z("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: pe({ zIndex: Ae.value ? 5 : 4 }),
              onMousedown: Je(w, ["stop"]),
              title: S(t)("Widget.startKnob")
            }, null, 44, Zt)),
            T("div", {
              class: "timeline-knob end-knob",
              style: pe({ zIndex: Ae.value ? 3 : 4 }),
              onMousedown: Je(ee, ["stop"]),
              title: S(t)("Widget.endKnob")
            }, null, 44, Jt)
          ], 44, Yt)
        ], 4),
        T("div", qt, [
          (k(!0), z(gt, null, At(Ye.value, (v) => (k(), z("div", {
            key: v.timestamp,
            class: "time-tick",
            style: pe({ left: v.position + "%" })
          }, [
            r[1] || (r[1] = T("div", { class: "tick-mark" }, null, -1)),
            T("div", Qt, $(v.label), 1)
          ], 4))), 128))
        ])
      ]),
      a.value.showTimeInfo !== !1 ? (k(), z("div", ea, [
        T("div", ta, [
          T("span", aa, $(S(t)("Widget.start")), 1),
          T("span", sa, $(Ve(Q.value)), 1)
        ]),
        T("div", ia, [
          T("span", na, $(S(t)("Widget.end")), 1),
          T("span", ra, $(Ve(K.value)), 1)
        ]),
        T("div", oa, [
          T("span", la, $(S(t)("Widget.duration")), 1),
          T("span", ua, $(l()), 1)
        ])
      ])) : Se("", !0),
      a.value.showControls !== !1 ? (k(), z("div", da, [
        T("button", {
          class: Vt(["play-button", { playing: x.value }]),
          style: pe($e.value),
          onClick: mt,
          disabled: Xe.value
        }, [
          x.value ? (k(), z("svg", ga, [...r[3] || (r[3] = [
            T("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (k(), z("svg", Ea, [...r[2] || (r[2] = [
            T("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, ca),
        T("div", va, [
          T("label", null, $(S(t)("Widget.speed")), 1),
          Ct(T("select", {
            "onUpdate:modelValue": r[0] || (r[0] = (v) => F.value = v)
          }, [...r[4] || (r[4] = [
            Ot('<option value="0.25" data-v-22341954>0.25x</option><option value="0.5" data-v-22341954>0.5x</option><option value="1" data-v-22341954>1x</option><option value="2" data-v-22341954>2x</option><option value="4" data-v-22341954>4x</option>', 5)
          ])], 512), [
            [xt, F.value]
          ])
        ])
      ])) : Se("", !0)
    ], 32));
  }
}), ht = (b, e) => {
  const t = b.__vccOpts || b;
  for (const [_, I] of e)
    t[_] = I;
  return t;
}, Ta = /* @__PURE__ */ ht(Sa, [["__scopeId", "data-v-22341954"]]);
class d extends Pt {
  static eNAME = "timelinesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.timeline";
  static eNS_PREFIX = "timelinesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new d(), this._instance.init()), this._instance;
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
    super(), this.setName(d.eNAME), this.setNsURI(d.eNS_URI), this.setNsPrefix(d.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Ut.INSTANCE.set(d.eNS_URI, this), this.setEFactoryInstance(Ue.eINSTANCE);
    const e = new rt();
    e.setName("RelativeTimeConfig"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), d.Literals.RELATIVE_TIME_CONFIG = e;
    const t = new A();
    t.setName("enabled"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), d.Literals.RELATIVE_TIME_CONFIG__ENABLED = t;
    const _ = new A();
    _.setName("offset"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), d.Literals.RELATIVE_TIME_CONFIG__OFFSET = _;
    const I = new A();
    I.setName("unit"), I.setLowerBound(0), I.setUpperBound(1), e.getEStructuralFeatures().push(I), d.Literals.RELATIVE_TIME_CONFIG__UNIT = I;
    const E = new rt();
    E.setName("TimelineSettings"), E.setAbstract(!1), E.setInterface(!1), this.getEClassifiers().push(E), E.setEPackage(this), d.Literals.TIMELINE_SETTINGS = E;
    const a = new A();
    a.setName("timelineMin"), a.setLowerBound(0), a.setUpperBound(1), E.getEStructuralFeatures().push(a), d.Literals.TIMELINE_SETTINGS__TIMELINE_MIN = a;
    const ae = new A();
    ae.setName("timelineMax"), ae.setLowerBound(0), ae.setUpperBound(1), E.getEStructuralFeatures().push(ae), d.Literals.TIMELINE_SETTINGS__TIMELINE_MAX = ae;
    const se = new A();
    se.setName("rangeStart"), se.setLowerBound(0), se.setUpperBound(1), E.getEStructuralFeatures().push(se), d.Literals.TIMELINE_SETTINGS__RANGE_START = se;
    const oe = new A();
    oe.setName("rangeEnd"), oe.setLowerBound(0), oe.setUpperBound(1), E.getEStructuralFeatures().push(oe), d.Literals.TIMELINE_SETTINGS__RANGE_END = oe;
    const i = new Wt();
    i.setContainment(!0), i.setName("relativeTime"), i.setLowerBound(0), i.setUpperBound(1), E.getEStructuralFeatures().push(i), d.Literals.TIMELINE_SETTINGS__RELATIVE_TIME = i;
    const O = new A();
    O.setName("rangeStartVariable"), O.setLowerBound(0), O.setUpperBound(1), E.getEStructuralFeatures().push(O), d.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE = O;
    const W = new A();
    W.setName("rangeEndVariable"), W.setLowerBound(0), W.setUpperBound(1), E.getEStructuralFeatures().push(W), d.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE = W;
    const H = new A();
    H.setName("startTime"), H.setLowerBound(0), H.setUpperBound(1), E.getEStructuralFeatures().push(H), d.Literals.TIMELINE_SETTINGS__START_TIME = H;
    const X = new A();
    X.setName("endTime"), X.setLowerBound(0), X.setUpperBound(1), E.getEStructuralFeatures().push(X), d.Literals.TIMELINE_SETTINGS__END_TIME = X;
    const m = new A();
    m.setName("currentTime"), m.setLowerBound(0), m.setUpperBound(1), E.getEStructuralFeatures().push(m), d.Literals.TIMELINE_SETTINGS__CURRENT_TIME = m;
    const P = new A();
    P.setName("stepSize"), P.setLowerBound(0), P.setUpperBound(1), E.getEStructuralFeatures().push(P), d.Literals.TIMELINE_SETTINGS__STEP_SIZE = P;
    const Y = new A();
    Y.setName("playbackSpeed"), Y.setLowerBound(0), Y.setUpperBound(1), E.getEStructuralFeatures().push(Y), d.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED = Y;
    const x = new A();
    x.setName("autoPlay"), x.setLowerBound(0), x.setUpperBound(1), E.getEStructuralFeatures().push(x), d.Literals.TIMELINE_SETTINGS__AUTO_PLAY = x;
    const F = new A();
    F.setName("fixStartKnob"), F.setLowerBound(0), F.setUpperBound(1), E.getEStructuralFeatures().push(F), d.Literals.TIMELINE_SETTINGS__FIX_START_KNOB = F;
    const R = new A();
    R.setName("showControls"), R.setLowerBound(0), R.setUpperBound(1), E.getEStructuralFeatures().push(R), d.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS = R;
    const Z = new A();
    Z.setName("rangeStripColor"), Z.setLowerBound(0), Z.setUpperBound(1), E.getEStructuralFeatures().push(Z), d.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR = Z;
    const G = new A();
    G.setName("showTimeInfo"), G.setLowerBound(0), G.setUpperBound(1), E.getEStructuralFeatures().push(G), d.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO = G, d.Literals.RELATIVE_TIME_CONFIG__ENABLED.setEType(V().getEClassifier("EBoolean")), d.Literals.RELATIVE_TIME_CONFIG__OFFSET.setEType(V().getEClassifier("EInt")), d.Literals.RELATIVE_TIME_CONFIG__UNIT.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__TIMELINE_MIN.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__TIMELINE_MAX.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__RANGE_START.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__RANGE_END.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__RELATIVE_TIME.setEType(d.Literals.RELATIVE_TIME_CONFIG), d.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__RANGE_END_VARIABLE.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__START_TIME.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__END_TIME.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__CURRENT_TIME.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__STEP_SIZE.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__PLAYBACK_SPEED.setEType(V().getEClassifier("EDouble")), d.Literals.TIMELINE_SETTINGS__AUTO_PLAY.setEType(V().getEClassifier("EBoolean")), d.Literals.TIMELINE_SETTINGS__FIX_START_KNOB.setEType(V().getEClassifier("EBoolean")), d.Literals.TIMELINE_SETTINGS__SHOW_CONTROLS.setEType(V().getEClassifier("EBoolean")), d.Literals.TIMELINE_SETTINGS__RANGE_STRIP_COLOR.setEType(V().getEClassifier("EString")), d.Literals.TIMELINE_SETTINGS__SHOW_TIME_INFO.setEType(V().getEClassifier("EBoolean"));
  }
}
class y extends Tt {
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
    return d.Literals.RELATIVE_TIME_CONFIG;
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
      getFeature: () => this.eClass().getEStructuralFeature(y.ENABLED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.ENABLED,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.OFFSET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.OFFSET,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.UNIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.UNIT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.ENABLED:
        return this.enabled;
      case y.OFFSET:
        return this.offset;
      case y.UNIT:
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
      case y.ENABLED:
        this.enabled = t, super.eSet(e, t);
        break;
      case y.OFFSET:
        this.offset = t, super.eSet(e, t);
        break;
      case y.UNIT:
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
      case y.ENABLED:
        return this._enabled !== !1;
      case y.OFFSET:
        return this._offset !== 24;
      case y.UNIT:
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
      case y.ENABLED:
        this._enabled = !1;
        return;
      case y.OFFSET:
        this._offset = 24;
        return;
      case y.UNIT:
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
class s extends Tt {
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
    return d.Literals.TIMELINE_SETTINGS;
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
class Ue extends Kt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ue()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(d.eINSTANCE);
  }
  /**
   * Create a new RelativeTimeConfig instance
   */
  createRelativeTimeConfig() {
    return new y();
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
const ha = ["data-section"], fa = { class: "settings-container" }, ma = { class: "setting-group" }, pa = {
  key: 0,
  class: "setting-group"
}, _a = { class: "relative-time-config" }, Ia = { class: "relative-time-row" }, Na = { class: "relative-time-preview" }, ba = { class: "setting-group" }, Ma = { class: "datetime-group" }, wa = { class: "setting-group" }, ya = {
  key: 0,
  class: "datetime-group"
}, Ra = { class: "setting-group" }, Da = { class: "variable-config" }, La = { class: "variable-config" }, Aa = /* @__PURE__ */ dt({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(b) {
    const { t: e } = vt("timeline"), t = ct(b, "modelValue"), _ = N("absolute"), I = C(() => [
      { label: e("Settings.modes.relative"), value: "relative" },
      { label: e("Settings.modes.absolute"), value: "absolute" }
    ]), E = /* @__PURE__ */ new Date(), a = new Date(E.getTime() - 720 * 60 * 60 * 1e3), ae = new Date(E.getTime() + 10080 * 60 * 1e3), se = new Date(E.getTime() - 1440 * 60 * 1e3), oe = /* @__PURE__ */ new Date(), i = N({
      timelineMin: a.toISOString(),
      timelineMax: ae.toISOString(),
      rangeStart: se.toISOString(),
      rangeEnd: oe.toISOString(),
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
    }), O = N(!1), W = N(), H = N(), X = N(), m = N(), P = (l) => String(l).padStart(2, "0"), Y = (l) => C({
      get: () => {
        const o = l.value;
        return o ? `${o.getFullYear()}-${P(o.getMonth() + 1)}-${P(o.getDate())}` : "";
      },
      set: (o) => {
        if (!o) return void (l.value = void 0);
        const [c, p, w] = o.split("-").map(Number), ee = l.value ? new Date(l.value) : /* @__PURE__ */ new Date();
        ee.setFullYear(c, p - 1, w), l.value = ee;
      }
    }), x = (l) => C({
      get: () => {
        const o = l.value;
        return o ? `${P(o.getHours())}:${P(o.getMinutes())}` : "";
      },
      set: (o) => {
        if (!o) return void (l.value = void 0);
        const [c, p] = o.split(":").map(Number), w = l.value ? new Date(l.value) : /* @__PURE__ */ new Date();
        w.setHours(c, p, 0, 0), l.value = w;
      }
    }), F = Y(W), R = x(H), Z = Y(X), G = x(m), D = N(null), B = N(!1), J = N(!1), le = N(new Ge("")), ce = N(new Ge("")), Ne = C(() => D.value ? D.value.getAllVariables().map(([l, o]) => o).filter((l) => l.value && typeof l.value == "string").map((l) => ({ name: l.name, value: l.value })) : []), Me = C(
      () => ["hours", "days", "weeks", "months", "years"].map((l) => ({ text: e(`Settings.units.${l}`), value: l }))
    ), we = () => {
      _.value === "relative" ? (i.value.relativeTime.enabled = !0, ie()) : i.value.relativeTime.enabled = !1, U();
    }, ye = () => {
      i.value.relativeTime?.enabled && ie(), U();
    }, We = (l, o) => {
      const c = /* @__PURE__ */ new Date(), p = new Date(c), w = Number(l) || 24;
      switch (typeof o == "object" && o !== null ? o.value : o) {
        case "hours":
          p.setHours(p.getHours() - w);
          break;
        case "days":
          p.setDate(p.getDate() - w);
          break;
        case "weeks":
          p.setDate(p.getDate() - w * 7);
          break;
        case "months":
          p.setMonth(p.getMonth() - w);
          break;
        case "years":
          p.setFullYear(p.getFullYear() - w);
          break;
        default:
          p.setHours(p.getHours() - w);
      }
      return { start: p, end: c };
    }, ie = () => {
      if (!i.value.relativeTime?.enabled) return;
      const { start: l, end: o } = We(
        i.value.relativeTime.offset,
        i.value.relativeTime.unit
      ), p = (o.getTime() - l.getTime()) * 0.2, w = o, ee = new Date(o.getTime() - p);
      if (i.value.timelineMin = l.toISOString(), i.value.timelineMax = o.toISOString(), i.value.rangeStart = ee.toISOString(), i.value.rangeEnd = w.toISOString(), t.value.timelineMin = i.value.timelineMin, t.value.timelineMax = i.value.timelineMax, t.value.rangeStart = i.value.rangeStart, t.value.rangeEnd = i.value.rangeEnd, i.value.rangeStartVariable && D.value) {
        const Ee = D.value.getVariable(i.value.rangeStartVariable);
        Ee && (Ee.value = i.value.rangeStart);
      }
      if (i.value.rangeEndVariable && D.value) {
        const Ee = D.value.getVariable(i.value.rangeEndVariable);
        Ee && (Ee.value = i.value.rangeEnd);
      }
    }, q = () => {
      B.value || (i.value.rangeStartVariable = void 0), U();
    }, Q = () => {
      J.value || (i.value.rangeEndVariable = void 0), U();
    }, K = () => {
      if (i.value.rangeStartVariable && D.value) {
        const l = D.value.getVariable(i.value.rangeStartVariable);
        l && (le.value.setTo(l), i.value.rangeStart = le.value.value);
      }
      if (i.value.rangeEndVariable && D.value) {
        const l = D.value.getVariable(i.value.rangeEndVariable);
        l && (ce.value.setTo(l), i.value.rangeEnd = ce.value.value);
      }
      U();
    }, re = (l, o) => {
      if (!l) return;
      const c = new Date(l);
      return o && (c.setHours(o.getHours()), c.setMinutes(o.getMinutes()), c.setSeconds(o.getSeconds())), c.toISOString();
    }, Re = () => {
      i.value.timelineMin = re(W.value, H.value), U();
    }, Ke = () => {
      i.value.timelineMin = re(W.value, H.value), U();
    }, De = () => {
      i.value.timelineMax = re(X.value, m.value), U();
    }, ze = () => {
      i.value.timelineMax = re(X.value, m.value), U();
    }, U = () => {
      let l = i.value.rangeStart, o = i.value.rangeEnd;
      B.value && le.value.value && (l = le.value.value), J.value && ce.value.value && (o = ce.value.value);
      const c = {
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
      He(c);
    };
    function Le() {
      return i.value.relativeTime || (i.value.relativeTime = { enabled: !1, offset: 24, unit: "hours" }), i.value.relativeTime;
    }
    const $e = [
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
    function He(l) {
      const o = t.value;
      for (const w of $e) {
        const ee = l[w];
        ee !== void 0 && (o[w] = ee);
      }
      const c = l.relativeTime;
      if (!c) return;
      const p = Xe(o);
      p.enabled = c.enabled, p.offset = c.offset, p.unit = c.unit;
    }
    function Xe(l) {
      const o = l.relativeTime;
      if (o) return o;
      const p = typeof l.eClass == "function" ? Ue.eINSTANCE.createRelativeTimeConfig() : { enabled: !1, offset: 24, unit: "hours" };
      return l.relativeTime = p, p;
    }
    const Ae = () => {
      O.value || i.value.timelineMax || (i.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), U();
    }, Ye = () => {
      const l = /* @__PURE__ */ new Date(), o = new Date(l.getTime() - 720 * 60 * 60 * 1e3), c = new Date(l.getTime() + 10080 * 60 * 1e3), p = new Date(l.getTime() - 1440 * 60 * 1e3), w = /* @__PURE__ */ new Date();
      i.value = {
        timelineMin: o.toISOString(),
        timelineMax: c.toISOString(),
        rangeStart: p.toISOString(),
        rangeEnd: w.toISOString(),
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
      }, _.value = "absolute", O.value = !1, U();
    }, Ve = Fe(St);
    return Et(() => {
      try {
        if (D.value = Ve ?? null, !D.value) throw new Error("VariableRepository not provided");
      } catch (l) {
        console.warn("VariableRepository not found in container:", l);
      }
      if (t.value && t.value.timelineMin) {
        if (Object.assign(i.value, nt(t.value)), O.value = !t.value.timelineMax, B.value = !!t.value.rangeStartVariable, J.value = !!t.value.rangeEndVariable, _.value = Le().enabled ? "relative" : "absolute", i.value.timelineMin) {
          const l = new Date(i.value.timelineMin);
          W.value = l, H.value = l;
        }
        if (i.value.timelineMax) {
          const l = new Date(i.value.timelineMax);
          X.value = l, m.value = l;
        }
      } else
        Ye();
      U();
    }), be(() => t.value, (l) => {
      l && (Object.assign(i.value, nt(l)), Le(), O.value = !l.timelineMax, l.relativeTime && (_.value = l.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (l, o) => (k(), z("section", {
      class: "settings-section",
      "data-section-id": "range",
      "data-section": S(e)("Settings.section")
    }, [
      T("div", fa, [
        T("div", ma, [
          ne(S(Oe), {
            modelValue: _.value,
            "onUpdate:modelValue": [
              o[0] || (o[0] = (c) => _.value = c),
              we
            ],
            label: S(e)("Settings.mode"),
            options: I.value,
            "label-key": "label",
            "value-key": "value"
          }, null, 8, ["modelValue", "label", "options"])
        ]),
        _.value === "relative" && i.value.relativeTime ? (k(), z("div", pa, [
          T("label", null, $(S(e)("Settings.relative")), 1),
          T("div", _a, [
            T("div", Ia, [
              ne(S(kt), {
                modelValue: i.value.relativeTime.offset,
                "onUpdate:modelValue": [
                  o[1] || (o[1] = (c) => i.value.relativeTime.offset = c),
                  ye
                ],
                modelModifiers: { number: !0 },
                label: S(e)("Settings.offset"),
                type: "number",
                min: 1,
                max: 1e4,
                class: "offset-input"
              }, null, 8, ["modelValue", "label"]),
              ne(S(Oe), {
                modelValue: i.value.relativeTime.unit,
                "onUpdate:modelValue": [
                  o[2] || (o[2] = (c) => i.value.relativeTime.unit = c),
                  ye
                ],
                options: Me.value,
                label: S(e)("Settings.unit"),
                "label-key": "text",
                "value-key": "value",
                class: "unit-select"
              }, null, 8, ["modelValue", "options", "label"])
            ]),
            T("div", Na, $(S(e)("Settings.relativePreview", { offset: i.value.relativeTime.offset, unit: S(e)(`Settings.units.${i.value.relativeTime.unit}`) })), 1)
          ])
        ])) : Se("", !0),
        _.value === "absolute" ? (k(), z(gt, { key: 1 }, [
          T("div", ba, [
            T("label", null, $(S(e)("Settings.start")), 1),
            T("div", Ma, [
              ne(S(xe), {
                modelValue: S(F),
                "onUpdate:modelValue": [
                  o[3] || (o[3] = (c) => Ce(F) ? F.value = c : null),
                  Re
                ],
                mode: "date",
                label: S(e)("Settings.date")
              }, null, 8, ["modelValue", "label"]),
              ne(S(xe), {
                modelValue: S(R),
                "onUpdate:modelValue": [
                  o[4] || (o[4] = (c) => Ce(R) ? R.value = c : null),
                  Ke
                ],
                mode: "time",
                label: S(e)("Settings.time")
              }, null, 8, ["modelValue", "label"])
            ])
          ]),
          T("div", wa, [
            T("label", null, $(S(e)("Settings.end")), 1),
            ne(S(qe), {
              modelValue: O.value,
              "onUpdate:modelValue": [
                o[5] || (o[5] = (c) => O.value = c),
                Ae
              ],
              label: S(e)("Settings.useNow")
            }, null, 8, ["modelValue", "label"]),
            O.value ? Se("", !0) : (k(), z("div", ya, [
              ne(S(xe), {
                modelValue: S(Z),
                "onUpdate:modelValue": [
                  o[6] || (o[6] = (c) => Ce(Z) ? Z.value = c : null),
                  De
                ],
                mode: "date",
                label: S(e)("Settings.date")
              }, null, 8, ["modelValue", "label"]),
              ne(S(xe), {
                modelValue: S(G),
                "onUpdate:modelValue": [
                  o[7] || (o[7] = (c) => Ce(G) ? G.value = c : null),
                  ze
                ],
                mode: "time",
                label: S(e)("Settings.time")
              }, null, 8, ["modelValue", "label"])
            ]))
          ])
        ], 64)) : Se("", !0),
        T("div", Ra, [
          T("label", null, $(S(e)("Settings.variables")), 1),
          T("div", Da, [
            ne(S(qe), {
              modelValue: B.value,
              "onUpdate:modelValue": [
                o[8] || (o[8] = (c) => B.value = c),
                q
              ],
              label: S(e)("Settings.startFromVariable")
            }, null, 8, ["modelValue", "label"]),
            B.value ? (k(), it(S(Oe), {
              key: 0,
              modelValue: i.value.rangeStartVariable,
              "onUpdate:modelValue": [
                o[9] || (o[9] = (c) => i.value.rangeStartVariable = c),
                K
              ],
              options: Ne.value,
              label: S(e)("Settings.startVariable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : Se("", !0)
          ]),
          T("div", La, [
            ne(S(qe), {
              modelValue: J.value,
              "onUpdate:modelValue": [
                o[10] || (o[10] = (c) => J.value = c),
                Q
              ],
              label: S(e)("Settings.endFromVariable")
            }, null, 8, ["modelValue", "label"]),
            J.value ? (k(), it(S(Oe), {
              key: 0,
              modelValue: i.value.rangeEndVariable,
              "onUpdate:modelValue": [
                o[11] || (o[11] = (c) => i.value.rangeEndVariable = c),
                K
              ],
              options: Ne.value,
              label: S(e)("Settings.endVariable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : Se("", !0)
          ])
        ])
      ])
    ], 8, ha));
  }
}), Va = /* @__PURE__ */ ht(Aa, [["__scopeId", "data-v-3deaaa09"]]), Ca = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", Oa = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: at },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: at }
], xa = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="playbackGroup" layout="VERTICAL" label="timeline:Form.playbackGroup">
      <fields xsi:type="uimodel:SelectWidget" name="stepSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/stepSize" label="timeline:Form.stepSize">
        <values>minute</values>
        <values>hour</values>
        <values>day</values>
        <values>week</values>
        <values>month</values>
        <optionLabel language="JS" body="({ minute: 'timeline:Options.step.minute', hour: 'timeline:Options.step.hour', day: 'timeline:Options.step.day', week: 'timeline:Options.step.week', month: 'timeline:Options.step.month' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="playbackSpeed"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/playbackSpeed" label="timeline:Form.playbackSpeed">
        <values>0.25</values>
        <values>0.5</values>
        <values>1</values>
        <values>2</values>
        <values>4</values>
        <optionLabel language="JS" body="({ '0.25': 'timeline:Options.speed.x025', '0.5': 'timeline:Options.speed.x05', '1': 'timeline:Options.speed.x1', '2': 'timeline:Options.speed.x2', '4': 'timeline:Options.speed.x4' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget" name="autoPlay"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/autoPlay" label="timeline:Form.autoPlay"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="fixStartKnob"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/fixStartKnob" label="timeline:Form.fixStartKnob"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showControls"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/showControls" label="timeline:Form.showControls"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="lookGroup" layout="VERTICAL" label="timeline:Form.lookGroup">
      <fields xsi:type="uimodel:InputWidget" name="rangeStripColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/rangeStripColor" label="timeline:Form.rangeStripColor"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showTimeInfo"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.timeline#//TimelineSettings/showTimeInfo" label="timeline:Form.showTimeInfo"/>
    </fields>

  </components>
</uimodel:UIModel>
`, Fa = { name: "Zeitleiste", range: "Zeitleisten-Bereich - ziehen zum Verschieben", rangeFixed: "Zeitleisten-Bereich (Beginn fixiert)", startKnob: "Beginn", startKnobFixed: "Beginn (fixiert)", endKnob: "Ende", start: "Beginn:", end: "Ende:", duration: "Dauer:", speed: "Geschwindigkeit:" }, Ga = { section: "Zeitraum", mode: "Art des Zeitraums", modes: { relative: "Relativ", absolute: "Absolut" }, relative: "Relativer Zeitraum", offset: "Abstand", unit: "Einheit", units: { hours: "Stunden", days: "Tage", weeks: "Wochen", months: "Monate", years: "Jahre" }, relativePreview: "Jetzt - {{offset}} {{unit}} → Jetzt", start: "Beginn der Zeitleiste", end: "Ende der Zeitleiste", useNow: "Aktuelle Zeit verwenden", date: "Datum", time: "Uhrzeit", variables: "Bindung an Variablen", startFromVariable: "Beginn aus einer Variable", startVariable: "Variable für den Beginn", endFromVariable: "Ende aus einer Variable", endVariable: "Variable für das Ende" }, Ba = { playbackGroup: "Wiedergabe", stepSize: "Schrittweite", playbackSpeed: "Geschwindigkeit", autoPlay: "Beim Laden starten", fixStartKnob: "Anfang festhalten", showControls: "Bedienelemente zeigen", lookGroup: "Darstellung", rangeStripColor: "Farbe des Ausschnitts", showTimeInfo: "Zeitangaben zeigen" }, ka = { step: { minute: "Eine Minute", hour: "Eine Stunde", day: "Ein Tag", week: "Eine Woche", month: "Ein Monat" }, speed: { x025: "0,25-fach", x05: "0,5-fach", x1: "1-fach", x2: "2-fach", x4: "4-fach" } }, Pa = {
  Widget: Fa,
  Settings: Ga,
  Form: Ba,
  Options: ka
}, Ua = { name: "Timeline", range: "Timeline range - drag to move", rangeFixed: "Timeline range (start fixed)", startKnob: "Start time", startKnobFixed: "Start time (fixed)", endKnob: "End time", start: "Start:", end: "End:", duration: "Duration:", speed: "Speed:" }, Wa = { section: "Time range", mode: "Time range mode", modes: { relative: "Relative", absolute: "Absolute" }, relative: "Relative time range", offset: "Offset", unit: "Unit", units: { hours: "hours", days: "days", weeks: "weeks", months: "months", years: "years" }, relativePreview: "Now - {{offset}} {{unit}} → Now", start: "Timeline start", end: "Timeline end", useNow: "Use current time", date: "Date", time: "Time", variables: "Variable binding", startFromVariable: "Start time from variable", startVariable: "Start variable", endFromVariable: "End time from variable", endVariable: "End variable" }, Ka = { playbackGroup: "Playback", stepSize: "Step size", playbackSpeed: "Speed", autoPlay: "Start on load", fixStartKnob: "Fix the start", showControls: "Show controls", lookGroup: "Appearance", rangeStripColor: "Range colour", showTimeInfo: "Show time information" }, za = { step: { minute: "One minute", hour: "One hour", day: "One day", week: "One week", month: "One month" }, speed: { x025: "0.25×", x05: "0.5×", x1: "1×", x2: "2×", x4: "4×" } }, $a = {
  Widget: Ua,
  Settings: Wa,
  Form: Ka,
  Options: za
};
var Ha = Object.getOwnPropertyDescriptor, Xa = (b, e, t, _) => {
  for (var I = _ > 1 ? void 0 : _ ? Ha(e, t) : e, E = b.length - 1, a; E >= 0; E--)
    (a = b[E]) && (I = a(I) || I);
  return I;
};
const ft = "timeline";
let ot = class {
  namespace = ft;
  resources = {
    de: Pa,
    en: $a
  };
};
ot = Xa([
  ut({
    service: ["Translations"],
    properties: { "i18n.namespace": ft }
  })
], ot);
var Ya = Object.defineProperty, Za = Object.getOwnPropertyDescriptor, Qe = (b, e, t, _) => {
  for (var I = _ > 1 ? void 0 : _ ? Za(e, t) : e, E = b.length - 1, a; E >= 0; E--)
    (a = b[E]) && (I = (_ ? a(e, t, I) : a(I)) || I);
  return _ && I && Ya(e, t, I), I;
}, lt = (b, e) => (t, _) => e(t, _, b);
d.eINSTANCE;
const _e = "TimelineWidget";
let Be = class {
  constructor(b, e) {
    this.events = b, this.actions = e;
  }
  type = _e;
  component = Ta;
  settingsComponent = Va;
  supportedDSTypes = [];
  icon = Ca;
  name = "Timeline";
  nameKey = "timeline:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: xa,
    uri: "/timeline-settings.ui.xmi",
    ePackage: () => d.eINSTANCE,
    create: () => new s(),
    /*
     * Which stretch of time the timeline covers is not a field: it is two
     * moments or an offset from now, typed or taken from a variable, with
     * each end edited as a date and a time apart.
     */
    unmodelledSections: ["Zeitraum"]
  };
  register() {
    this.events.registerWidget(_e, Oa), this.actions.registerWidgetType(_e, Ie, "widget");
  }
  unregister() {
    this.events.unregisterWidget(_e), this.actions.unregisterWidgetType(_e);
  }
};
Qe([
  wt()
], Be.prototype, "register", 1);
Qe([
  yt()
], Be.prototype, "unregister", 1);
Be = Qe([
  ut({
    service: [zt],
    properties: { "widget.type": _e }
  }),
  lt(0, st(bt)),
  lt(1, st(Mt))
], Be);
export {
  s as TimelineSettingsImpl,
  ot as TimelineTranslations,
  Ta as TimelineWidget,
  Be as TimelineWidgetProvider,
  Va as TimelineWidgetSettings,
  d as TimelinesettingsPackage,
  xa as timelineSettingsFormXmi
};
