(function(){var i="ui.vue.widget.video",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-c454c467]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.container video[data-v-c454c467]{width:100%;height:100%;border-radius:3px;object-fit:var(--v02309664)}.settings-container[data-v-71904cee]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}\n";})();
import { WidgetActionInterfaceImpl as J, EVENT_ACTIONS_REGISTRY as K, PayloadImpl as c, EVENT_REGISTRY_ID as Q, EVENT_ACTIONS_REGISTRY_ID as X } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ee, deactivate as te, component as oe, inject as R } from "@eclipse-daanse/tsm";
import { defineComponent as $, mergeModels as ie, useCssVars as re, computed as j, toRefs as ne, useModel as M, inject as W, ref as k, onMounted as de, onUnmounted as ae, createElementBlock as le, openBlock as N, withModifiers as se, createElementVNode as A, resolveComponent as I, createBlock as pe, withCtx as x, createVNode as S, unref as ue } from "vue";
import { useRoute as ve } from "vue-router";
import { Documentation as h, Attribute as ce, ModelClass as Y, Reference as B } from "org.eclipse.daanse.board.app.lib.annotations";
import { VariableWrapper as _ } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as g } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as me } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as fe } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ge } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var we = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, G = (r, o, i, t) => {
  for (var e = t > 1 ? void 0 : t ? ye(o, i) : o, d = r.length - 1, n; d >= 0; d--)
    (n = r[d]) && (e = (t ? n(o, i, e) : n(e)) || e);
  return t && e && we(o, i, e), e;
};
let b = class {
  fit;
};
G([
  h("The CSS 'object-fit' property value (e.g., 'fill', 'contain', 'cover', 'none', 'scale-down')."),
  ce()
], b.prototype, "fit", 2);
b = G([
  h("Defines how the content of a replaced element (like a video or image) should be fitted into its container's box."),
  Y({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.video#//ObjectFitSetting" })
], b);
var _e = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, P = (r, o, i, t) => {
  for (var e = t > 1 ? void 0 : t ? Ve(o, i) : o, d = r.length - 1, n; d >= 0; d--)
    (n = r[d]) && (e = (t ? n(o, i, e) : n(e)) || e);
  return t && e && _e(o, i, e), e;
};
let V = class {
  videoFitSettings = new b();
  videoUrl = new _();
};
P([
  h("The settings for how the video content should be fitted into its container."),
  B("ObjectFitSetting")
], V.prototype, "videoFitSettings", 2);
P([
  h("The URL or path to the video file."),
  B("VariableWrapper")
], V.prototype, "videoUrl", 2);
V = P([
  h("Represents the settings for displaying a video, including its URL and how it should fit into its container."),
  Y({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings" })
], V);
var he = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, m = (r, o, i, t) => {
  for (var e = Te(o, i), d = r.length - 1, n; d >= 0; d--)
    (n = r[d]) && (e = n(o, i, e) || e);
  return e && he(o, i, e), e;
};
class v extends J {
  play() {
    throw new Error("play not implemented");
  }
  pause() {
    throw new Error("pause not implemented");
  }
  stop() {
    throw new Error("stop not implemented");
  }
  seek(o) {
    throw new Error("seek not implemented");
  }
  mute() {
    throw new Error("mute not implemented");
  }
  unmute() {
    throw new Error("unmute not implemented");
  }
  setVolume(o) {
    throw new Error("setVolume not implemented");
  }
}
m([
  g({ eventType: "video.play" })
], v.prototype, "play");
m([
  g({ eventType: "video.pause" })
], v.prototype, "pause");
m([
  g({ eventType: "video.stop" })
], v.prototype, "stop");
m([
  g({ eventType: "video.seek" })
], v.prototype, "seek");
m([
  g({ eventType: "video.mute" })
], v.prototype, "mute");
m([
  g({ eventType: "video.unmute" })
], v.prototype, "unmute");
m([
  g({ eventType: "video.setVolume" })
], v.prototype, "setVolume");
const be = ["src"], Ce = /* @__PURE__ */ $({
  __name: "VideoWidget",
  props: /* @__PURE__ */ ie({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(r, { expose: o }) {
    re((s) => ({
      v02309664: Z.value
    }));
    const i = r, { id: t } = ne(i), e = M(r, "configv"), d = W(ge.TINY_EMITTER), n = W(K), E = ve().params.pageid || "", l = k(null);
    class u extends v {
      play() {
        l.value && l.value.play();
      }
      pause() {
        l.value && l.value.pause();
      }
      stop() {
        l.value && (l.value.pause(), l.value.currentTime = 0);
      }
      seek(a) {
        l.value && (l.value.currentTime = a);
      }
      mute() {
        l.value && (l.value.muted = !0);
      }
      unmute() {
        l.value && (l.value.muted = !1);
      }
      setVolume(a) {
        l.value && (l.value.volume = Math.max(0, Math.min(1, a)));
      }
    }
    const T = new u();
    o(T);
    const H = () => {
      t?.value && d.emit("widget:VideoWidget:click", {
        type: "widget:VideoWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, q = () => {
      t?.value && d.emit("widget:VideoWidget:right_click", {
        type: "widget:VideoWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, w = (s, a) => {
      if (!t?.value) return;
      let p = { widgetId: t.value, timestamp: Date.now() };
      if (s === "timeupdate") {
        const y = a.target;
        p.currentTime = y.currentTime, p.duration = y.duration;
      } else if (s === "error") {
        const y = a.target;
        p.error = y.error?.message || y.error?.code || "Unknown Error";
      }
      d.emit(`widget:VideoWidget:${s}`, {
        type: `widget:VideoWidget:${s}`,
        widgetId: t.value,
        payload: p
      });
    };
    console.log(e);
    const D = {
      videoUrl: "",
      videoFitSettings: {
        fit: "cover"
      }
    };
    de(() => {
      t?.value && n.registerInstance(t.value, T, "VideoWidget", E), e.value || (e.value = new V());
      const s = e.value.videoUrl;
      if (s == null)
        e.value.videoUrl = new _(D.videoUrl);
      else if (!(s instanceof _)) if (typeof s == "object" && "value" in s) {
        const a = new _(s.value);
        "variable" in s && (a.variable = s.variable), e.value.videoUrl = a;
      } else
        e.value.videoUrl = new _(s);
      e.value && !e.value.videoFitSettings && (e.value.videoFitSettings = D.videoFitSettings);
    }), ae(() => {
      t?.value && n.unregisterInstance(t.value);
    });
    const Z = j(() => e.value.videoFitSettings?.fit), z = j(() => e.value.videoUrl?.value);
    return (s, a) => (N(), le("div", {
      class: "container",
      onClick: H,
      onContextmenu: se(q, ["prevent"])
    }, [
      A("video", {
        controls: "",
        src: z.value,
        ref_key: "videoElement",
        ref: l,
        onPlay: a[0] || (a[0] = (p) => w("play", p)),
        onPause: a[1] || (a[1] = (p) => w("pause", p)),
        onTimeupdate: a[2] || (a[2] = (p) => w("timeupdate", p)),
        onEnded: a[3] || (a[3] = (p) => w("ended", p)),
        onError: a[4] || (a[4] = (p) => w("error", p))
      }, " Your browser does not support embedded videos. ", 40, be)
    ], 32));
  }
}), L = (r, o) => {
  const i = r.__vccOpts || r;
  for (const [t, e] of o)
    i[t] = e;
  return i;
}, Ee = /* @__PURE__ */ L(Ce, [["__scopeId", "data-v-c454c467"]]), Ie = { class: "settings-container" }, Se = /* @__PURE__ */ $({
  __name: "VideoWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(r) {
    const o = W("i18n"), i = (d) => o ? o.t(d) : d, t = M(r, "modelValue"), e = k({
      widgetSection: !1,
      storeSection: !1
    });
    return (d, n) => {
      const O = I("va-input"), E = I("va-select"), l = I("va-collapse");
      return N(), pe(l, {
        modelValue: e.value.widgetSection,
        "onUpdate:modelValue": n[2] || (n[2] = (u) => e.value.widgetSection = u),
        icon: "settings",
        header: i("video:VideoWidget.title")
      }, {
        default: x(() => [
          A("div", Ie, [
            S(ue(me), {
              modelValue: t.value.videoUrl,
              "onUpdate:modelValue": n[0] || (n[0] = (u) => t.value.videoUrl = u),
              label: i("video:VideoWidget.videoUrl")
            }, {
              default: x(({ value: u, change: T }) => [
                S(O, {
                  "model-value": u,
                  onInput: T,
                  label: i("video:VideoWidget.videoUrl")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            S(E, {
              class: "mt-2",
              modelValue: t.value.videoFitSettings.fit,
              "onUpdate:modelValue": n[1] || (n[1] = (u) => t.value.videoFitSettings.fit = u),
              label: i("video:VideoWidget.videoFit"),
              options: ["Cover", "Contain", "Stretch", "Fill", "None"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), We = /* @__PURE__ */ L(Se, [["__scopeId", "data-v-71904cee"]]), Pe = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M78.75%2056.1029C81.75%2057.8349%2081.75%2062.1651%2078.75%2063.8971L47.25%2082.0836C44.25%2083.8157%2040.5%2081.6506%2040.5%2078.1865L40.5%2041.8135C40.5%2038.3494%2044.25%2036.1843%2047.25%2037.9164L78.75%2056.1029Z'%20fill='%23606060'/%3e%3c/svg%3e", Ue = [
  { name: "Video Clicked", type: "click", description: "Triggered when the video widget is clicked", payloadType: c },
  { name: "Video Right Clicked", type: "right_click", description: "Triggered when the video widget is right-clicked", payloadType: c },
  { name: "Video Played", type: "play", description: "Triggered when the video starts or resumes playing", payloadType: c },
  { name: "Video Paused", type: "pause", description: "Triggered when the video playback is paused", payloadType: c },
  { name: "Video Time Updated", type: "timeupdate", description: "Triggered when the video playback position changes", payloadType: c },
  { name: "Video Ended", type: "ended", description: "Triggered when the video reaches the end", payloadType: c },
  { name: "Video Error", type: "error", description: "Triggered when the video encounters an error", payloadType: c }
];
var Oe = Object.defineProperty, De = Object.getOwnPropertyDescriptor, U = (r, o, i, t) => {
  for (var e = t > 1 ? void 0 : t ? De(o, i) : o, d = r.length - 1, n; d >= 0; d--)
    (n = r[d]) && (e = (t ? n(o, i, e) : n(e)) || e);
  return t && e && Oe(o, i, e), e;
}, F = (r, o) => (i, t) => o(i, t, r);
const f = "VideoWidget";
let C = class {
  constructor(r, o) {
    this.events = r, this.actions = o;
  }
  type = f;
  component = Ee;
  settingsComponent = We;
  supportedDSTypes = [];
  icon = Pe;
  name = "Video";
  register() {
    this.events.registerWidget(f, Ue), this.actions.registerWidgetType(f, v, "widget");
  }
  unregister() {
    this.events.unregisterWidget(f), this.actions.unregisterWidgetType(f);
  }
};
U([
  ee()
], C.prototype, "register", 1);
U([
  te()
], C.prototype, "unregister", 1);
C = U([
  oe({
    service: [fe],
    properties: { "widget.type": f }
  }),
  F(0, R(Q)),
  F(1, R(X))
], C);
export {
  Ee as VideoWidget,
  C as VideoWidgetProvider,
  We as VideoWidgetSettings
};
