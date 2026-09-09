(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".timeline-widget[data-v-e6f250af]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.timeline-container[data-v-e6f250af]{overflow:hidden;position:relative;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:8px;padding:1rem;min-height:80px}.timeline-track[data-v-e6f250af]{position:relative;height:40px;border-radius:20px;margin-bottom:1rem;cursor:pointer;transition:background-color .2s ease}.range-strip[data-v-e6f250af]{position:absolute;top:0;height:100%;border-width:1px;border-style:solid;border-radius:20px;cursor:grab;transition:background-color .2s ease,border-color .2s ease;z-index:1}.range-strip[data-v-e6f250af]:hover{filter:brightness(1.1)}.range-strip[data-v-e6f250af]:active{cursor:grabbing}.timeline-knob[data-v-e6f250af]{position:absolute;top:50%;width:24px;height:24px;background:var(--va-primary);border:3px solid white;border-radius:50%;cursor:grab;transform:translate(-50%,-50%);box-shadow:0 2px 8px #0003;transition:all .2s ease;z-index:3}.timeline-knob[data-v-e6f250af]:hover{background:var(--va-primary-dark);transform:translate(-50%,-50%) scale(1.1);box-shadow:0 4px 12px #0000004d}.timeline-knob[data-v-e6f250af]:active{cursor:grabbing;transform:translate(-50%,-50%) scale(1.2)}.start-knob[data-v-e6f250af]{left:0;z-index:4}.fixed-knob[data-v-e6f250af]{cursor:not-allowed!important;opacity:.7}.fixed-knob[data-v-e6f250af]:hover{transform:translate(-50%,-50%)!important;background:var(--va-background-border)!important}.end-knob[data-v-e6f250af]{right:-24px;z-index:4}.time-axis[data-v-e6f250af]{position:relative;height:30px;background:var(--va-background-secondary);border-top:1px solid var(--va-background-border);border-radius:0 0 8px 8px;margin:0 -1rem -1rem;padding:0 1rem}.time-tick[data-v-e6f250af]{position:absolute;top:0;height:100%;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);pointer-events:none;z-index:2}.tick-mark[data-v-e6f250af]{width:1px;height:8px;background:var(--va-text-secondary);margin-top:2px}.tick-label[data-v-e6f250af]{font-size:.7rem;color:var(--va-text-secondary);margin-top:4px;white-space:nowrap;user-select:none}.time-info[data-v-e6f250af]{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;background:var(--va-background-primary);border:1px solid var(--va-background-border);border-radius:6px;padding:.75rem}.time-display[data-v-e6f250af]{display:flex;flex-direction:column;gap:.25rem;flex:1;text-align:center}.time-label[data-v-e6f250af]{font-size:.8rem;font-weight:500;color:var(--va-text-secondary)}.time-value[data-v-e6f250af]{font-size:.9rem;font-weight:600;color:var(--va-text-primary);word-wrap:break-word}.controls[data-v-e6f250af]{display:flex;align-items:center;gap:1rem;justify-content:center;flex-wrap:wrap}.play-button[data-v-e6f250af]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:none;border-radius:50%;background:var(--play-button-bg, var(--va-primary));color:#fff;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px #0003}.play-button[data-v-e6f250af]:hover:not(:disabled){background:var(--va-primary-dark);transform:scale(1.05);box-shadow:0 4px 12px #0000004d}.play-button[data-v-e6f250af]:disabled{background:var(--va-background-border);color:var(--va-text-secondary);cursor:not-allowed;transform:none}.play-button.playing[data-v-e6f250af]{background:var(--play-button-playing, #ff6b35);animation:pulse-e6f250af 2s infinite}.play-button.playing[data-v-e6f250af]:hover{filter:brightness(.9)}@keyframes pulse-e6f250af{0%{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}50%{box-shadow:0 4px 16px var(--play-button-bg, rgba(255, 107, 53, .8))}to{box-shadow:0 2px 8px var(--play-button-bg, rgba(255, 107, 53, .4))}}.speed-control[data-v-e6f250af]{display:flex;align-items:center;gap:.5rem;font-size:.9rem}.speed-control label[data-v-e6f250af]{font-weight:500;color:var(--va-text-primary);min-width:fit-content}.speed-control select[data-v-e6f250af]{padding:.5rem;border:1px solid var(--va-background-border);border-radius:4px;background:var(--va-background-primary);color:var(--va-text-primary);font-size:.9rem;cursor:pointer}@media(max-width:768px){.time-info[data-v-e6f250af]{flex-direction:column;gap:.75rem}.time-display[data-v-e6f250af]{text-align:left}.controls[data-v-e6f250af]{flex-direction:column;gap:.75rem}.timeline-knob[data-v-e6f250af]{width:28px;height:28px}.tick-label[data-v-e6f250af]{font-size:.6rem}.timeline-container[data-v-e6f250af]{min-height:70px}.timeline-track[data-v-e6f250af]{height:35px}}.settings-container[data-v-ad663afe]{display:flex;flex-direction:column;gap:1rem;padding:1rem;overflow-x:hidden}.setting-group[data-v-ad663afe]{display:flex;flex-direction:column;gap:.5rem;min-width:0}.setting-group>label[data-v-ad663afe]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.datetime-group[data-v-ad663afe]{display:flex;flex-direction:row;gap:.5rem;align-items:flex-start}.datetime-group[data-v-ad663afe]>*{flex:1;min-width:0}.relative-time-config[data-v-ad663afe]{display:flex;flex-direction:column;gap:.75rem;padding:.75rem;background:var(--va-background-element);border-radius:4px;min-width:0;overflow:hidden}.relative-time-row[data-v-ad663afe]{display:flex;gap:.5rem;align-items:flex-end;min-width:0}.offset-input[data-v-ad663afe]{flex:1;min-width:60px;max-width:100px}.unit-select[data-v-ad663afe]{flex:2;min-width:80px}.relative-time-preview[data-v-ad663afe]{font-size:.85rem;color:var(--va-primary);padding:.5rem;background:var(--va-background-secondary);border-radius:4px;text-align:center;word-break:break-word}.variable-config[data-v-ad663afe]{display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem}\n";})();
import { WidgetActionInterfaceImpl as St, EVENT_ACTIONS_REGISTRY as ht, PayloadImpl as Qe, EVENT_REGISTRY_ID as ft, EVENT_ACTIONS_REGISTRY_ID as mt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as _t, deactivate as pt, component as It, inject as et } from "@eclipse-daanse/tsm";
import { defineComponent as it, mergeModels as Nt, inject as be, toRefs as bt, useModel as nt, ref as p, computed as k, watch as we, onMounted as lt, onUnmounted as Mt, createElementBlock as H, openBlock as P, withModifiers as Xe, createElementVNode as T, createCommentVNode as Se, normalizeStyle as Ie, Fragment as ot, renderList as wt, toDisplayString as Y, normalizeClass as Rt, withDirectives as Dt, createStaticVNode as Lt, vModelSelect as yt, createVNode as Q, unref as B, isRef as Ae, createBlock as tt } from "vue";
import { useRoute as At } from "vue-router";
import { VariableWrapper as Oe, plainSettings as at } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as ut } from "org.eclipse.daanse.board.app.lib.api.variable";
import { WidgetAction as Fe } from "org.eclipse.daanse.board.app.lib.events";
import { DSelect as Ve, DInput as Ct, DDateInput as Ce, DCheckbox as Ye } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEObject as ct, BasicEFactory as Ot, BasicEPackage as xt, EPackageRegistry as Ft, BasicEClass as st, BasicEAttribute as R, BasicEReference as Gt, getEcorePackage as D } from "@emfts/core";
import { WIDGET_SERVICE_ID as Bt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Vt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var kt = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, Ge = (L, e, t, g) => {
  for (var a = Pt(e, t), S = L.length - 1, M; S >= 0; S--)
    (M = L[S]) && (a = M(e, t, a) || a);
  return a && kt(e, t, a), a;
};
class Me extends St {
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
Ge([
  Fe({ eventType: "timeline.zoomIn" })
], Me.prototype, "zoomIn");
Ge([
  Fe({ eventType: "timeline.zoomOut" })
], Me.prototype, "zoomOut");
Ge([
  Fe({ eventType: "timeline.setDateRange" })
], Me.prototype, "setDateRange");
Ge([
  Fe({ eventType: "timeline.jumpToNow" })
], Me.prototype, "jumpToNow");
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
}, sa = { class: "speed-control" }, ra = /* @__PURE__ */ it({
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
    be("i18n");
    const t = L, { id: g } = bt(t), a = nt(L, "configv"), S = be(Vt.TINY_EMITTER), M = be(ht), ee = At().params.pageid || "";
    class te extends Me {
      zoomIn() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), d = (E.getTime() - r.getTime()) * 0.25, h = new Date(r.getTime() + d), f = new Date(E.getTime() - d);
        f.getTime() - h.getTime() > 6e4 && (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString());
      }
      zoomOut() {
        const r = new Date(a.value.rangeStart || Date.now() - 864e5), E = new Date(a.value.rangeEnd || Date.now()), d = (E.getTime() - r.getTime()) * 0.5, h = new Date(Math.max(
          r.getTime() - d,
          new Date(a.value.timelineMin || 0).getTime()
        )), f = new Date(Math.min(
          E.getTime() + d,
          new Date(a.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        a.value.rangeStart = h.toISOString(), a.value.rangeEnd = f.toISOString();
      }
      setDateRange(r, E) {
        a.value.rangeStart = r, a.value.rangeEnd = E;
      }
      jumpToNow() {
        const r = /* @__PURE__ */ new Date(), E = new Date(a.value.rangeEnd || r).getTime() - new Date(a.value.rangeStart || r).getTime(), u = r, d = new Date(r.getTime() - E);
        a.value.rangeStart = d.toISOString(), a.value.rangeEnd = u.toISOString();
      }
    }
    const j = new te();
    e(j);
    const n = () => {
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
    }, m = p(null), U = p(new Oe("")), W = p(new Oe("")), y = p(!1), C = p(a.value.playbackSpeed || 1), A = p(!1), Z = p(), x = p(null), F = p(null), V = p(null);
    let ne = null, G = 0;
    const ae = new Date(Date.now() - 720 * 60 * 60 * 1e3), se = new Date(Date.now() + 10080 * 60 * 1e3), ce = new Date(Date.now() - 1440 * 60 * 1e3), de = /* @__PURE__ */ new Date(), Re = (i, r) => {
      const E = /* @__PURE__ */ new Date(), u = new Date(E), d = Number(i) || 24;
      switch (typeof r == "object" && r !== null ? r.value : r) {
        case "hours":
          u.setHours(u.getHours() - d);
          break;
        case "days":
          u.setDate(u.getDate() - d);
          break;
        case "weeks":
          u.setDate(u.getDate() - d * 7);
          break;
        case "months":
          u.setMonth(u.getMonth() - d);
          break;
        case "years":
          u.setFullYear(u.getFullYear() - d);
          break;
        default:
          u.setHours(u.getHours() - d);
      }
      return { start: u, end: E };
    }, Be = () => {
      if (!a.value.relativeTime?.enabled) return;
      const { start: i, end: r } = Re(
        a.value.relativeTime.offset,
        a.value.relativeTime.unit
      );
      a.value.timelineMin = i.toISOString(), a.value.timelineMax = r.toISOString();
      const u = (r.getTime() - i.getTime()) * 0.2, d = r, h = new Date(r.getTime() - u);
      if (a.value.rangeStart = h.toISOString(), a.value.rangeEnd = d.toISOString(), a.value.rangeStartVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeStartVariable);
        f && (f.value = h.toISOString());
      }
      if (a.value.rangeEndVariable && m.value) {
        const f = m.value.getVariable(a.value.rangeEndVariable);
        f && (f.value = d.toISOString());
      }
    }, re = k(() => a.value.timelineMin ? new Date(a.value.timelineMin) : ae), $ = k(() => a.value.timelineMax ? new Date(a.value.timelineMax) : se), q = k(() => {
      if (a.value.rangeStartVariable && m.value) {
        const i = m.value.getVariable(a.value.rangeStartVariable);
        if (i && i.value)
          return new Date(i.value);
      }
      return a.value.rangeStart ? new Date(a.value.rangeStart) : ce;
    }), K = k(() => {
      if (a.value.rangeEndVariable && m.value) {
        const i = m.value.getVariable(a.value.rangeEndVariable);
        if (i && i.value)
          return new Date(i.value);
      }
      return a.value.rangeEnd ? new Date(a.value.rangeEnd) : de;
    }), he = k(() => {
      if (a.value.fixStartKnob)
        return 0;
      if (x.value !== null)
        return x.value;
      const i = re.value.getTime(), r = $.value.getTime(), E = q.value.getTime();
      return Math.max(0, Math.min(100, (E - i) / (r - i) * 100));
    }), De = k(() => {
      if (F.value !== null)
        return F.value;
      const i = re.value.getTime(), r = $.value.getTime(), E = K.value.getTime();
      return Math.max(0, Math.min(100, (E - i) / (r - i) * 100));
    }), Le = k(() => V.value ? {
      ...V.value,
      background: Ee(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    } : {
      left: he.value + "%",
      width: De.value - he.value + "%",
      background: Ee(0.5),
      borderColor: a.value.rangeStripColor || "#d17600"
    }), Ee = (i) => {
      const E = (a.value.rangeStripColor || "#d17600").replace("#", ""), u = parseInt(E.substr(0, 2), 16), d = parseInt(E.substr(2, 2), 16), h = parseInt(E.substr(4, 2), 16);
      return `rgba(${u}, ${d}, ${h}, ${i})`;
    }, ke = k(() => {
      const i = a.value.rangeStripColor || "#d17600";
      return {
        backgroundColor: Pe(i)
      };
    }), Pe = (i) => {
      const r = i.replace("#", ""), E = parseInt(r.substr(0, 2), 16), u = parseInt(r.substr(2, 2), 16), d = parseInt(r.substr(4, 2), 16), h = 0.6, f = Math.min(255, Math.round(E + (255 - E) * h)), I = Math.min(255, Math.round(u + (255 - u) * h)), w = Math.min(255, Math.round(d + (255 - d) * h));
      return `rgb(${f}, ${I}, ${w})`;
    }, Ue = () => {
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
    }, We = k(() => {
      const i = a.value.rangeStripColor || "#d17600", r = z(i);
      return {
        "--play-button-bg": i,
        "--play-button-playing": r
      };
    }), z = (i) => {
      const r = i.replace("#", ""), E = parseInt(r.substr(0, 2), 16), u = parseInt(r.substr(2, 2), 16), d = parseInt(r.substr(4, 2), 16), h = 0.8, I = Math.min(255, Math.round(E * h * 1.1)), w = Math.round(u * h), X = Math.round(d * h);
      return `rgb(${I}, ${w}, ${X})`;
    }, ze = k(() => K.value.getTime() >= $.value.getTime()), ye = k(() => De.value - he.value >= 10 ? !1 : he.value > 50), Ke = k(() => {
      const i = [], r = re.value.getTime(), u = $.value.getTime() - r, d = 8;
      for (let h = 0; h <= d; h++) {
        const f = r + u / d * h, I = new Date(f), w = h / d * 100, X = I.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        i.push({
          timestamp: I.toISOString(),
          position: w,
          label: X
        });
      }
      return i;
    }), o = (i) => i.toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }), l = () => {
      const i = K.value.getTime() - q.value.getTime(), r = Math.floor(i / (1e3 * 60 * 60)), E = Math.floor(r / 24);
      return E > 0 ? `${E}d ${r % 24}h` : r > 0 ? `${r}h` : `${Math.floor(i / (1e3 * 60))}min`;
    }, v = () => Z.value?.getBoundingClientRect();
    let _ = null;
    const N = (i, r, E = !1) => {
      const u = a.value.fixStartKnob ? re.value : i || q.value, d = r || K.value;
      if (!u || isNaN(u.getTime()) || !d || isNaN(d.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart: u, actualEnd: d });
        return;
      }
      const h = () => {
        if (a.value.rangeStart = u.toISOString(), a.value.rangeEnd = d.toISOString(), a.value.playbackSpeed = C.value, a.value.rangeStartVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeStartVariable);
          f && (f.value = u.toISOString());
        }
        if (a.value.rangeEndVariable && m.value) {
          const f = m.value.getVariable(a.value.rangeEndVariable);
          f && (f.value = d.toISOString());
        }
      };
      E ? (_ && (clearTimeout(_), _ = null), h()) : (_ && clearTimeout(_), _ = setTimeout(h, 300));
    }, ve = (i) => {
      if (a.value.fixStartKnob)
        return;
      i.preventDefault(), A.value = !0;
      const r = v();
      if (!r) return;
      const E = i.clientX, u = re.value.getTime(), d = $.value.getTime(), h = (d - u) / r.width, f = q.value.getTime(), I = K.value.getTime(), w = d - u;
      let X = f;
      const oe = (fe) => {
        if (!A.value) return;
        const me = fe.clientX - E;
        let J = f + me * h;
        J = Math.max(u, Math.min(J, I - 6e4)), X = J;
        const ge = Math.max(0, Math.min(100, (J - u) / w * 100)), _e = Math.max(0, Math.min(100, (I - u) / w * 100));
        x.value = ge, V.value = {
          left: ge + "%",
          width: _e - ge + "%"
        };
      }, ue = () => {
        A.value = !1, x.value = null, V.value = null, N(new Date(X), new Date(I), !0), document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", ue);
      };
      document.addEventListener("mousemove", oe), document.addEventListener("mouseup", ue);
    }, le = (i) => {
      i.preventDefault(), A.value = !0;
      const r = v();
      if (!r) return;
      const E = i.clientX, u = re.value.getTime(), d = $.value.getTime(), h = (d - u) / r.width, f = K.value.getTime(), I = q.value.getTime(), w = d - u;
      let X = f;
      const oe = (fe) => {
        if (!A.value) return;
        const me = fe.clientX - E;
        let J = f + me * h;
        J = Math.min(d, Math.max(J, I + 6e4)), X = J;
        const ge = Math.max(0, Math.min(100, (I - u) / w * 100)), _e = Math.max(0, Math.min(100, (J - u) / w * 100));
        F.value = _e, V.value = {
          left: ge + "%",
          width: _e - ge + "%"
        };
      }, ue = () => {
        A.value = !1, F.value = null, V.value = null, N(new Date(I), new Date(X), !0), document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", ue);
      };
      document.addEventListener("mousemove", oe), document.addEventListener("mouseup", ue);
    }, Et = (i) => {
      if (a.value.fixStartKnob) {
        le(i);
        return;
      }
      i.preventDefault(), A.value = !0;
      const r = v();
      if (!r) return;
      const E = i.clientX, u = re.value.getTime(), d = $.value.getTime(), h = (d - u) / r.width, f = q.value.getTime(), I = K.value.getTime(), w = I - f, X = d - u;
      let oe = f, ue = I;
      const fe = (J) => {
        if (!A.value) return;
        const _e = (J.clientX - E) * h;
        let Te = f + _e, pe = Te + w;
        Te < u && (Te = u, pe = Te + w), pe > d && (pe = d, Te = pe - w), oe = Te, ue = pe;
        const $e = Math.max(0, Math.min(100, (Te - u) / X * 100)), Je = Math.max(0, Math.min(100, (pe - u) / X * 100));
        x.value = $e, F.value = Je, V.value = {
          left: $e + "%",
          width: Je - $e + "%"
        };
      }, me = () => {
        A.value = !1, x.value = null, F.value = null, V.value = null, N(new Date(oe), new Date(ue), !0), document.removeEventListener("mousemove", fe), document.removeEventListener("mouseup", me);
      };
      document.addEventListener("mousemove", fe), document.addEventListener("mouseup", me);
    }, vt = () => {
      y.value = !y.value, y.value ? gt() : He();
    }, gt = () => {
      G = performance.now(), qe();
    }, He = () => {
      ne && (cancelAnimationFrame(ne), ne = null);
    }, qe = () => {
      if (!y.value) return;
      const i = performance.now(), r = i - G, E = 1e3 / C.value;
      if (r >= E) {
        const u = q.value.getTime(), d = K.value.getTime(), h = d - u, f = Ue();
        console.log("Playback step:", {
          stepSize: a.value.stepSize,
          stepSizeMs: f,
          currentStart: new Date(u).toISOString(),
          currentEnd: new Date(d).toISOString(),
          rangeDuration: h
        });
        const I = u + f, w = I + h;
        if (console.log("New times:", {
          newStart: new Date(I).toISOString(),
          newEnd: new Date(w).toISOString(),
          timelineMax: $.value.toISOString()
        }), w >= $.value.getTime()) {
          He(), y.value = !1;
          return;
        }
        N(new Date(I), new Date(w)), G = i;
      }
      ne = requestAnimationFrame(qe);
    };
    we(() => a.value.rangeStartVariable, (i) => {
      if (i && m.value) {
        const r = m.value.getVariable(i);
        r && U.value.setTo(r);
      }
    }), we(() => a.value.rangeEndVariable, (i) => {
      if (i && m.value) {
        const r = m.value.getVariable(i);
        r && W.value.setTo(r);
      }
    }), we(() => U.value.value, (i) => {
      i && a.value.rangeStartVariable && new Date(i).getTime() !== q.value.getTime() && (a.value.rangeStart = i);
    }), we(() => W.value.value, (i) => {
      i && a.value.rangeEndVariable && new Date(i).getTime() !== K.value.getTime() && (a.value.rangeEnd = i);
    });
    const Tt = be(ut);
    return lt(() => {
      g?.value && M.registerInstance(g.value, j, "TimelineWidget", ee);
      try {
        if (m.value = Tt ?? null, !m.value) throw new Error("VariableRepository not provided");
      } catch (i) {
        console.warn("VariableRepository not found in container:", i);
      }
      if (a.value.timelineMin || (a.value.timelineMin = ae.toISOString()), a.value.timelineMax || (a.value.timelineMax = se.toISOString()), a.value.rangeStart || (a.value.rangeStart = ce.toISOString()), a.value.rangeEnd || (a.value.rangeEnd = de.toISOString()), a.value.playbackSpeed ? C.value = a.value.playbackSpeed : (a.value.playbackSpeed = 1, C.value = 1), a.value.rangeStripColor || (a.value.rangeStripColor = "#d17600"), a.value.fixStartKnob === void 0 && (a.value.fixStartKnob = !1), a.value.showTimeInfo === void 0 && (a.value.showTimeInfo = !0), a.value.showControls === void 0 && (a.value.showControls = !0), a.value.stepSize === void 0 && (a.value.stepSize = "hour"), a.value.rangeStartVariable && m.value) {
        const i = m.value.getVariable(a.value.rangeStartVariable);
        i && U.value.setTo(i);
      }
      if (a.value.rangeEndVariable && m.value) {
        const i = m.value.getVariable(a.value.rangeEndVariable);
        i && W.value.setTo(i);
      }
      a.value.relativeTime?.enabled && Be();
    }), Mt(() => {
      g?.value && M.unregisterInstance(g.value), He();
    }), (i, r) => (P(), H("div", {
      class: "timeline-widget",
      onClick: n,
      onContextmenu: Xe(O, ["prevent"])
    }, [
      T("div", Ut, [
        T("div", {
          class: "timeline-track",
          ref_key: "trackRef",
          ref: Z,
          style: Ie(ke.value)
        }, [
          T("div", {
            class: "range-strip",
            style: Ie(Le.value),
            onMousedown: Et,
            title: a.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
          }, [
            a.value.fixStartKnob ? (P(), H("div", zt)) : (P(), H("div", {
              key: 0,
              class: "timeline-knob start-knob",
              style: Ie({ zIndex: ye.value ? 5 : 4 }),
              onMousedown: Xe(ve, ["stop"]),
              title: "Startzeit"
            }, null, 36)),
            T("div", {
              class: "timeline-knob end-knob",
              style: Ie({ zIndex: ye.value ? 3 : 4 }),
              onMousedown: Xe(le, ["stop"]),
              title: "Endzeit"
            }, null, 36)
          ], 44, Wt)
        ], 4),
        T("div", Kt, [
          (P(!0), H(ot, null, wt(Ke.value, (E) => (P(), H("div", {
            key: E.timestamp,
            class: "time-tick",
            style: Ie({ left: E.position + "%" })
          }, [
            r[1] || (r[1] = T("div", { class: "tick-mark" }, null, -1)),
            T("div", Ht, Y(E.label), 1)
          ], 4))), 128))
        ])
      ]),
      a.value.showTimeInfo !== !1 ? (P(), H("div", $t, [
        T("div", Xt, [
          r[2] || (r[2] = T("span", { class: "time-label" }, "Start:", -1)),
          T("span", Yt, Y(o(q.value)), 1)
        ]),
        T("div", jt, [
          r[3] || (r[3] = T("span", { class: "time-label" }, "Ende:", -1)),
          T("span", Zt, Y(o(K.value)), 1)
        ]),
        T("div", qt, [
          r[4] || (r[4] = T("span", { class: "time-label" }, "Dauer:", -1)),
          T("span", Jt, Y(l()), 1)
        ])
      ])) : Se("", !0),
      a.value.showControls !== !1 ? (P(), H("div", Qt, [
        T("button", {
          class: Rt(["play-button", { playing: y.value }]),
          style: Ie(We.value),
          onClick: vt,
          disabled: ze.value
        }, [
          y.value ? (P(), H("svg", aa, [...r[6] || (r[6] = [
            T("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
          ])])) : (P(), H("svg", ta, [...r[5] || (r[5] = [
            T("path", { d: "M8 5v14l11-7z" }, null, -1)
          ])]))
        ], 14, ea),
        T("div", sa, [
          r[8] || (r[8] = T("label", null, "Geschwindigkeit:", -1)),
          Dt(T("select", {
            "onUpdate:modelValue": r[0] || (r[0] = (E) => C.value = E)
          }, [...r[7] || (r[7] = [
            Lt('<option value="0.25" data-v-e6f250af>0.25x</option><option value="0.5" data-v-e6f250af>0.5x</option><option value="1" data-v-e6f250af>1x</option><option value="2" data-v-e6f250af>2x</option><option value="4" data-v-e6f250af>4x</option>', 5)
          ])], 512), [
            [yt, C.value]
          ])
        ])
      ])) : Se("", !0)
    ], 32));
  }
}), dt = (L, e) => {
  const t = L.__vccOpts || L;
  for (const [g, a] of e)
    t[g] = a;
  return t;
}, ia = /* @__PURE__ */ dt(ra, [["__scopeId", "data-v-e6f250af"]]), na = {
  class: "settings-section",
  "data-section": "Zeitraum"
}, la = { class: "settings-container" }, oa = { class: "setting-group" }, ua = {
  key: 0,
  class: "setting-group"
}, ca = { class: "relative-time-config" }, da = { class: "relative-time-row" }, Ea = { class: "relative-time-preview" }, va = { class: "setting-group" }, ga = { class: "datetime-group" }, Ta = { class: "setting-group" }, Sa = {
  key: 0,
  class: "datetime-group"
}, ha = { class: "setting-group" }, fa = { class: "variable-config" }, ma = { class: "variable-config" }, _a = /* @__PURE__ */ it({
  __name: "TimelineWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(L) {
    const e = be("i18n"), t = (o) => e ? e.t(o) : o, g = nt(L, "modelValue"), a = p("absolute"), S = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ], M = /* @__PURE__ */ new Date(), ie = new Date(M.getTime() - 720 * 60 * 60 * 1e3), ee = new Date(M.getTime() + 10080 * 60 * 1e3), te = new Date(M.getTime() - 1440 * 60 * 1e3), j = /* @__PURE__ */ new Date(), n = p({
      timelineMin: ie.toISOString(),
      timelineMax: ee.toISOString(),
      rangeStart: te.toISOString(),
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
    }), O = p(!1), m = p(), U = p(), W = p(), y = p(), C = (o) => String(o).padStart(2, "0"), A = (o) => k({
      get: () => {
        const l = o.value;
        return l ? `${l.getFullYear()}-${C(l.getMonth() + 1)}-${C(l.getDate())}` : "";
      },
      set: (l) => {
        if (!l) return void (o.value = void 0);
        const [v, _, N] = l.split("-").map(Number), ve = o.value ? new Date(o.value) : /* @__PURE__ */ new Date();
        ve.setFullYear(v, _ - 1, N), o.value = ve;
      }
    }), Z = (o) => k({
      get: () => {
        const l = o.value;
        return l ? `${C(l.getHours())}:${C(l.getMinutes())}` : "";
      },
      set: (l) => {
        if (!l) return void (o.value = void 0);
        const [v, _] = l.split(":").map(Number), N = o.value ? new Date(o.value) : /* @__PURE__ */ new Date();
        N.setHours(v, _, 0, 0), o.value = N;
      }
    }), x = A(m), F = Z(U), V = A(W), ne = Z(y), G = p(null), ae = p(!1), se = p(!1), ce = p(new Oe("")), de = p(new Oe("")), Re = k(() => G.value ? G.value.getAllVariables().map(([o, l]) => l).filter((o) => o.value && typeof o.value == "string").map((o) => ({ name: o.name, value: o.value })) : []), Be = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ], re = () => {
      a.value === "relative" ? (n.value.relativeTime.enabled = !0, K()) : n.value.relativeTime.enabled = !1, z();
    }, $ = () => {
      n.value.relativeTime?.enabled && K(), z();
    }, q = (o, l) => {
      const v = /* @__PURE__ */ new Date(), _ = new Date(v), N = Number(o) || 24;
      switch (typeof l == "object" && l !== null ? l.value : l) {
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
      return { start: _, end: v };
    }, K = () => {
      if (!n.value.relativeTime?.enabled) return;
      const { start: o, end: l } = q(
        n.value.relativeTime.offset,
        n.value.relativeTime.unit
      ), _ = (l.getTime() - o.getTime()) * 0.2, N = l, ve = new Date(l.getTime() - _);
      if (n.value.timelineMin = o.toISOString(), n.value.timelineMax = l.toISOString(), n.value.rangeStart = ve.toISOString(), n.value.rangeEnd = N.toISOString(), g.value.timelineMin = n.value.timelineMin, g.value.timelineMax = n.value.timelineMax, g.value.rangeStart = n.value.rangeStart, g.value.rangeEnd = n.value.rangeEnd, n.value.rangeStartVariable && G.value) {
        const le = G.value.getVariable(n.value.rangeStartVariable);
        le && (le.value = n.value.rangeStart);
      }
      if (n.value.rangeEndVariable && G.value) {
        const le = G.value.getVariable(n.value.rangeEndVariable);
        le && (le.value = n.value.rangeEnd);
      }
    }, he = () => {
      ae.value || (n.value.rangeStartVariable = void 0), z();
    }, De = () => {
      se.value || (n.value.rangeEndVariable = void 0), z();
    }, Le = () => {
      if (n.value.rangeStartVariable && G.value) {
        const o = G.value.getVariable(n.value.rangeStartVariable);
        o && (ce.value.setTo(o), n.value.rangeStart = ce.value.value);
      }
      if (n.value.rangeEndVariable && G.value) {
        const o = G.value.getVariable(n.value.rangeEndVariable);
        o && (de.value.setTo(o), n.value.rangeEnd = de.value.value);
      }
      z();
    }, Ee = (o, l) => {
      if (!o) return;
      const v = new Date(o);
      return l && (v.setHours(l.getHours()), v.setMinutes(l.getMinutes()), v.setSeconds(l.getSeconds())), v.toISOString();
    }, ke = () => {
      n.value.timelineMin = Ee(m.value, U.value), z();
    }, Pe = () => {
      n.value.timelineMin = Ee(m.value, U.value), z();
    }, Ue = () => {
      n.value.timelineMax = Ee(W.value, y.value), z();
    }, We = () => {
      n.value.timelineMax = Ee(W.value, y.value), z();
    }, z = () => {
      let o = n.value.rangeStart, l = n.value.rangeEnd;
      ae.value && ce.value.value && (o = ce.value.value), se.value && de.value.value && (l = de.value.value);
      const v = {
        ...n.value,
        timelineMin: n.value.timelineMin,
        timelineMax: O.value ? (/* @__PURE__ */ new Date()).toISOString() : n.value.timelineMax,
        rangeStart: o,
        rangeEnd: l,
        relativeTime: n.value.relativeTime,
        rangeStartVariable: n.value.rangeStartVariable,
        rangeEndVariable: n.value.rangeEndVariable,
        stepSize: n.value.stepSize,
        playbackSpeed: n.value.playbackSpeed,
        autoPlay: n.value.autoPlay,
        rangeStripColor: n.value.rangeStripColor,
        fixStartKnob: n.value.fixStartKnob,
        showTimeInfo: n.value.showTimeInfo,
        showControls: n.value.showControls
      };
      Object.assign(g.value, v);
    }, ze = () => {
      O.value || n.value.timelineMax || (n.value.timelineMax = new Date(Date.now() + 10080 * 60 * 1e3).toISOString()), z();
    }, ye = () => {
      const o = /* @__PURE__ */ new Date(), l = new Date(o.getTime() - 720 * 60 * 60 * 1e3), v = new Date(o.getTime() + 10080 * 60 * 1e3), _ = new Date(o.getTime() - 1440 * 60 * 1e3), N = /* @__PURE__ */ new Date();
      n.value = {
        timelineMin: l.toISOString(),
        timelineMax: v.toISOString(),
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
    }, Ke = be(ut);
    return lt(() => {
      try {
        if (G.value = Ke ?? null, !G.value) throw new Error("VariableRepository not provided");
      } catch (o) {
        console.warn("VariableRepository not found in container:", o);
      }
      if (g.value && g.value.timelineMin) {
        if (Object.assign(n.value, at(g.value)), O.value = !g.value.timelineMax, ae.value = !!g.value.rangeStartVariable, se.value = !!g.value.rangeEndVariable, n.value.relativeTime || (n.value.relativeTime = {
          enabled: !1,
          offset: 24,
          unit: "hours"
        }), a.value = n.value.relativeTime.enabled ? "relative" : "absolute", n.value.timelineMin) {
          const o = new Date(n.value.timelineMin);
          m.value = o, U.value = o;
        }
        if (n.value.timelineMax) {
          const o = new Date(n.value.timelineMax);
          W.value = o, y.value = o;
        }
      } else
        ye();
      z();
    }), we(() => g.value, (o) => {
      o && (Object.assign(n.value, at(o)), O.value = !o.timelineMax, o.relativeTime && (a.value = o.relativeTime.enabled ? "relative" : "absolute"));
    }, { deep: !0 }), (o, l) => (P(), H("section", na, [
      T("div", la, [
        T("div", oa, [
          Q(B(Ve), {
            modelValue: a.value,
            "onUpdate:modelValue": [
              l[0] || (l[0] = (v) => a.value = v),
              re
            ],
            label: t("Time Range Mode"),
            options: S,
            "label-key": "label",
            "value-key": "value"
          }, null, 8, ["modelValue", "label"])
        ]),
        a.value === "relative" && n.value.relativeTime ? (P(), H("div", ua, [
          T("label", null, Y(t("Relative Time Range")), 1),
          T("div", ca, [
            T("div", da, [
              Q(B(Ct), {
                modelValue: n.value.relativeTime.offset,
                "onUpdate:modelValue": [
                  l[1] || (l[1] = (v) => n.value.relativeTime.offset = v),
                  $
                ],
                modelModifiers: { number: !0 },
                label: t("Offset"),
                type: "number",
                min: 1,
                max: 1e4,
                class: "offset-input"
              }, null, 8, ["modelValue", "label"]),
              Q(B(Ve), {
                modelValue: n.value.relativeTime.unit,
                "onUpdate:modelValue": [
                  l[2] || (l[2] = (v) => n.value.relativeTime.unit = v),
                  $
                ],
                options: Be,
                label: t("Unit"),
                "label-key": "text",
                "value-key": "value",
                class: "unit-select"
              }, null, 8, ["modelValue", "label"])
            ]),
            T("div", Ea, Y(t("Now")) + " - " + Y(n.value.relativeTime.offset) + " " + Y(t(n.value.relativeTime.unit)) + " → " + Y(t("Now")), 1)
          ])
        ])) : Se("", !0),
        a.value === "absolute" ? (P(), H(ot, { key: 1 }, [
          T("div", va, [
            T("label", null, Y(t("Timeline Start")), 1),
            T("div", ga, [
              Q(B(Ce), {
                modelValue: B(x),
                "onUpdate:modelValue": [
                  l[3] || (l[3] = (v) => Ae(x) ? x.value = v : null),
                  ke
                ],
                mode: "date",
                label: t("Date")
              }, null, 8, ["modelValue", "label"]),
              Q(B(Ce), {
                modelValue: B(F),
                "onUpdate:modelValue": [
                  l[4] || (l[4] = (v) => Ae(F) ? F.value = v : null),
                  Pe
                ],
                mode: "time",
                label: t("Time")
              }, null, 8, ["modelValue", "label"])
            ])
          ]),
          T("div", Ta, [
            T("label", null, Y(t("Timeline End")), 1),
            Q(B(Ye), {
              modelValue: O.value,
              "onUpdate:modelValue": [
                l[5] || (l[5] = (v) => O.value = v),
                ze
              ],
              label: t("Use current time")
            }, null, 8, ["modelValue", "label"]),
            O.value ? Se("", !0) : (P(), H("div", Sa, [
              Q(B(Ce), {
                modelValue: B(V),
                "onUpdate:modelValue": [
                  l[6] || (l[6] = (v) => Ae(V) ? V.value = v : null),
                  Ue
                ],
                mode: "date",
                label: t("Date")
              }, null, 8, ["modelValue", "label"]),
              Q(B(Ce), {
                modelValue: B(ne),
                "onUpdate:modelValue": [
                  l[7] || (l[7] = (v) => Ae(ne) ? ne.value = v : null),
                  We
                ],
                mode: "time",
                label: t("Time")
              }, null, 8, ["modelValue", "label"])
            ]))
          ])
        ], 64)) : Se("", !0),
        T("div", ha, [
          T("label", null, Y(t("Variable Binding")), 1),
          T("div", fa, [
            Q(B(Ye), {
              modelValue: ae.value,
              "onUpdate:modelValue": [
                l[8] || (l[8] = (v) => ae.value = v),
                he
              ],
              label: t("Start time from variable")
            }, null, 8, ["modelValue", "label"]),
            ae.value ? (P(), tt(B(Ve), {
              key: 0,
              modelValue: n.value.rangeStartVariable,
              "onUpdate:modelValue": [
                l[9] || (l[9] = (v) => n.value.rangeStartVariable = v),
                Le
              ],
              options: Re.value,
              label: t("Start variable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : Se("", !0)
          ]),
          T("div", ma, [
            Q(B(Ye), {
              modelValue: se.value,
              "onUpdate:modelValue": [
                l[10] || (l[10] = (v) => se.value = v),
                De
              ],
              label: t("End time from variable")
            }, null, 8, ["modelValue", "label"]),
            se.value ? (P(), tt(B(Ve), {
              key: 0,
              modelValue: n.value.rangeEndVariable,
              "onUpdate:modelValue": [
                l[11] || (l[11] = (v) => n.value.rangeEndVariable = v),
                Le
              ],
              options: Re.value,
              label: t("End variable"),
              "label-key": "name",
              "value-key": "name"
            }, null, 8, ["modelValue", "options", "label"])) : Se("", !0)
          ])
        ])
      ])
    ]));
  }
}), pa = /* @__PURE__ */ dt(_a, [["__scopeId", "data-v-ad663afe"]]), Ia = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e", Na = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: Qe },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: Qe }
];
class b extends ct {
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
class je extends Ot {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new je()), this._instance;
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
class c extends xt {
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
    Ft.INSTANCE.set(c.eNS_URI, this), this.setEFactoryInstance(je.eINSTANCE);
    const e = new st();
    e.setName("RelativeTimeConfig"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.RELATIVE_TIME_CONFIG = e;
    const t = new R();
    t.setName("enabled"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), c.Literals.RELATIVE_TIME_CONFIG__ENABLED = t;
    const g = new R();
    g.setName("offset"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), c.Literals.RELATIVE_TIME_CONFIG__OFFSET = g;
    const a = new R();
    a.setName("unit"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), c.Literals.RELATIVE_TIME_CONFIG__UNIT = a;
    const S = new st();
    S.setName("TimelineSettings"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), c.Literals.TIMELINE_SETTINGS = S;
    const M = new R();
    M.setName("timelineMin"), M.setLowerBound(0), M.setUpperBound(1), S.getEStructuralFeatures().push(M), c.Literals.TIMELINE_SETTINGS__TIMELINE_MIN = M;
    const ie = new R();
    ie.setName("timelineMax"), ie.setLowerBound(0), ie.setUpperBound(1), S.getEStructuralFeatures().push(ie), c.Literals.TIMELINE_SETTINGS__TIMELINE_MAX = ie;
    const ee = new R();
    ee.setName("rangeStart"), ee.setLowerBound(0), ee.setUpperBound(1), S.getEStructuralFeatures().push(ee), c.Literals.TIMELINE_SETTINGS__RANGE_START = ee;
    const te = new R();
    te.setName("rangeEnd"), te.setLowerBound(0), te.setUpperBound(1), S.getEStructuralFeatures().push(te), c.Literals.TIMELINE_SETTINGS__RANGE_END = te;
    const j = new Gt();
    j.setContainment(!0), j.setName("relativeTime"), j.setLowerBound(0), j.setUpperBound(1), S.getEStructuralFeatures().push(j), c.Literals.TIMELINE_SETTINGS__RELATIVE_TIME = j;
    const n = new R();
    n.setName("rangeStartVariable"), n.setLowerBound(0), n.setUpperBound(1), S.getEStructuralFeatures().push(n), c.Literals.TIMELINE_SETTINGS__RANGE_START_VARIABLE = n;
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
class s extends ct {
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
const ba = `<?xml version="1.0" encoding="UTF-8"?>
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
var Ma = Object.defineProperty, wa = Object.getOwnPropertyDescriptor, Ze = (L, e, t, g) => {
  for (var a = g > 1 ? void 0 : g ? wa(e, t) : e, S = L.length - 1, M; S >= 0; S--)
    (M = L[S]) && (a = (g ? M(e, t, a) : M(a)) || a);
  return g && a && Ma(e, t, a), a;
}, rt = (L, e) => (t, g) => e(t, g, L);
c.eINSTANCE;
const Ne = "TimelineWidget";
let xe = class {
  constructor(L, e) {
    this.events = L, this.actions = e;
  }
  type = Ne;
  component = ia;
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
    create: () => new s(),
    /*
     * Which stretch of time the timeline covers is not a field: it is two
     * moments or an offset from now, typed or taken from a variable, with
     * each end edited as a date and a time apart.
     */
    unmodelledSections: ["Zeitraum"]
  };
  register() {
    this.events.registerWidget(Ne, Na), this.actions.registerWidgetType(Ne, Me, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Ne), this.actions.unregisterWidgetType(Ne);
  }
};
Ze([
  _t()
], xe.prototype, "register", 1);
Ze([
  pt()
], xe.prototype, "unregister", 1);
xe = Ze([
  It({
    service: [Bt],
    properties: { "widget.type": Ne }
  }),
  rt(0, et(ft)),
  rt(1, et(mt))
], xe);
export {
  s as TimelineSettingsImpl,
  ia as TimelineWidget,
  xe as TimelineWidgetProvider,
  pa as TimelineWidgetSettings,
  c as TimelinesettingsPackage,
  ba as timelineSettingsFormXmi
};
