(function(){var i="ui.vue.widget.video",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-c8b707a4]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.container video[data-v-c8b707a4]{width:100%;height:100%;border-radius:3px;object-fit:var(--v67adbbd0)}.settings-container[data-v-9a8eca2e]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}\n";})();
import { WidgetActionInterfaceImpl as Z, EVENT_ACTIONS_REGISTRY as K, PayloadImpl as h, EVENT_REGISTRY_ID as Q, EVENT_ACTIONS_REGISTRY_ID as ee } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as te, deactivate as ie, component as se, inject as x } from "@eclipse-daanse/tsm";
import { defineComponent as k, mergeModels as ne, useCssVars as oe, computed as L, toRefs as re, useModel as A, inject as D, ref as B, onMounted as ae, onUnmounted as le, createElementBlock as de, openBlock as M, withModifiers as ue, createElementVNode as j, resolveComponent as N, createBlock as ce, withCtx as R, createVNode as V, unref as pe } from "vue";
import { useRoute as ge } from "vue-router";
import { BasicEObject as J, BasicEFactory as ve, BasicEPackage as me, EPackageRegistry as X, BasicEClass as G, BasicEAttribute as he, BasicEReference as W, getEcorePackage as fe } from "@emfts/core";
import { VariableWrapper as f } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as I } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as Te } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Ee } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ie } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class v extends J {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  // Private fields
  _fit;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.OBJECT_FIT_SETTING;
  }
  // Getters and Setters
  get fit() {
    return this._fit;
  }
  set fit(e) {
    const t = this._fit;
    this._fit = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.FIT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.FIT:
        return this.fit;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case v.FIT:
        this.fit = t, super.eSet(e, t);
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
      case v.FIT:
        return this._fit !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.FIT:
        this._fit = void 0;
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
      fit: this.fit
    };
  }
}
class C extends ve {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new C()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(a.eINSTANCE);
  }
  /**
   * Create a new ObjectFitSetting instance
   */
  createObjectFitSetting() {
    return new v();
  }
  /**
   * Create a new VideoSettings instance
   */
  createVideoSettings() {
    return new c();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ObjectFitSetting":
        return this.createObjectFitSetting();
      case "VideoSettings":
        return this.createVideoSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function we(r) {
  const e = X.INSTANCE.getEPackage(r);
  if (!e)
    throw new Error(`EPackage '${r}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing VideoSettingsPackage.`);
  return e;
}
class a extends me {
  static eNAME = "videoSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.video";
  static eNS_PREFIX = "videoSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    OBJECT_FIT_SETTING: null,
    OBJECT_FIT_SETTING__FIT: null,
    VIDEO_SETTINGS: null,
    VIDEO_SETTINGS__VIDEO_FIT_SETTINGS: null,
    VIDEO_SETTINGS__VIDEO_URL: null
  };
  constructor() {
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    X.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(C.eINSTANCE);
    const e = new G();
    e.setName("ObjectFitSetting"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.OBJECT_FIT_SETTING = e;
    const t = new he();
    t.setName("fit"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.OBJECT_FIT_SETTING__FIT = t;
    const i = new G();
    i.setName("VideoSettings"), i.setAbstract(!1), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), a.Literals.VIDEO_SETTINGS = i;
    const s = new W();
    s.setContainment(!0), s.setName("videoFitSettings"), s.setLowerBound(0), s.setUpperBound(1), i.getEStructuralFeatures().push(s), a.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS = s;
    const o = new W();
    o.setContainment(!1), o.setName("videoUrl"), o.setLowerBound(0), o.setUpperBound(1), i.getEStructuralFeatures().push(o), a.Literals.VIDEO_SETTINGS__VIDEO_URL = o, a.Literals.OBJECT_FIT_SETTING__FIT.setEType(fe().getEClassifier("EString")), a.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS.setEType(a.Literals.OBJECT_FIT_SETTING), a.Literals.VIDEO_SETTINGS__VIDEO_URL.setEType(we("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class c extends J {
  // Feature ID Constants (eLiterals)
  static VIDEO_FIT_SETTINGS = 0;
  static VIDEO_URL = 1;
  // Private fields
  _videoFitSettings;
  _videoUrl = new f();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.VIDEO_SETTINGS;
  }
  // Getters and Setters
  get videoFitSettings() {
    return this._videoFitSettings;
  }
  set videoFitSettings(e) {
    const t = this._videoFitSettings;
    this._videoFitSettings = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.VIDEO_FIT_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.VIDEO_FIT_SETTINGS,
      merge: () => !1
    });
  }
  get videoUrl() {
    return this._videoUrl;
  }
  set videoUrl(e) {
    const t = this._videoUrl;
    this._videoUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.VIDEO_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.VIDEO_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.VIDEO_FIT_SETTINGS:
        return this.videoFitSettings;
      case c.VIDEO_URL:
        return this.videoUrl;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case c.VIDEO_FIT_SETTINGS:
        this.videoFitSettings = t, super.eSet(e, t);
        break;
      case c.VIDEO_URL:
        this.videoUrl = t, super.eSet(e, t);
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
      case c.VIDEO_FIT_SETTINGS:
        return this._videoFitSettings !== void 0;
      case c.VIDEO_URL:
        return this._videoUrl !== new f();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.VIDEO_FIT_SETTINGS:
        this._videoFitSettings = void 0;
        return;
      case c.VIDEO_URL:
        this._videoUrl = new f();
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
      videoFitSettings: this.videoFitSettings,
      videoUrl: this.videoUrl
    };
  }
}
var Se = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, T = (r, e, t, i) => {
  for (var s = _e(e, t), o = r.length - 1, u; o >= 0; o--)
    (u = r[o]) && (s = u(e, t, s) || s);
  return s && Se(e, t, s), s;
};
class m extends Z {
  play() {
    throw new Error("play not implemented");
  }
  pause() {
    throw new Error("pause not implemented");
  }
  stop() {
    throw new Error("stop not implemented");
  }
  seek(e) {
    throw new Error("seek not implemented");
  }
  mute() {
    throw new Error("mute not implemented");
  }
  unmute() {
    throw new Error("unmute not implemented");
  }
  setVolume(e) {
    throw new Error("setVolume not implemented");
  }
}
T([
  I({ eventType: "video.play" })
], m.prototype, "play");
T([
  I({ eventType: "video.pause" })
], m.prototype, "pause");
T([
  I({ eventType: "video.stop" })
], m.prototype, "stop");
T([
  I({ eventType: "video.seek" })
], m.prototype, "seek");
T([
  I({ eventType: "video.mute" })
], m.prototype, "mute");
T([
  I({ eventType: "video.unmute" })
], m.prototype, "unmute");
T([
  I({ eventType: "video.setVolume" })
], m.prototype, "setVolume");
const Fe = ["src"], ye = /* @__PURE__ */ k({
  __name: "VideoWidget",
  props: /* @__PURE__ */ ne({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(r, { expose: e }) {
    oe((d) => ({
      v67adbbd0: q.value
    }));
    const t = r, { id: i } = re(t), s = A(r, "configv"), o = D(Ie.TINY_EMITTER), u = D(K), y = ge().params.pageid || "", l = B(null);
    class g extends m {
      play() {
        l.value && l.value.play();
      }
      pause() {
        l.value && l.value.pause();
      }
      stop() {
        l.value && (l.value.pause(), l.value.currentTime = 0);
      }
      seek(n) {
        l.value && (l.value.currentTime = n);
      }
      mute() {
        l.value && (l.value.muted = !0);
      }
      unmute() {
        l.value && (l.value.muted = !1);
      }
      setVolume(n) {
        l.value && (l.value.volume = Math.max(0, Math.min(1, n)));
      }
    }
    const _ = new g();
    e(_);
    const Y = () => {
      i?.value && o.emit("widget:VideoWidget:click", {
        type: "widget:VideoWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, H = () => {
      i?.value && o.emit("widget:VideoWidget:right_click", {
        type: "widget:VideoWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, w = (d, n) => {
      if (!i?.value) return;
      let p = { widgetId: i.value, timestamp: Date.now() };
      if (d === "timeupdate") {
        const S = n.target;
        p.currentTime = S.currentTime, p.duration = S.duration;
      } else if (d === "error") {
        const S = n.target;
        p.error = S.error?.message || S.error?.code || "Unknown Error";
      }
      o.emit(`widget:VideoWidget:${d}`, {
        type: `widget:VideoWidget:${d}`,
        widgetId: i.value,
        payload: p
      });
    };
    console.log(s);
    const O = {
      videoUrl: "",
      videoFitSettings: {
        fit: "cover"
      }
    };
    ae(() => {
      i?.value && u.registerInstance(i.value, _, "VideoWidget", y), s.value || (s.value = new c());
      const d = s.value.videoUrl;
      if (d == null)
        s.value.videoUrl = new f(O.videoUrl);
      else if (!(d instanceof f)) if (typeof d == "object" && "value" in d) {
        const n = new f(d.value);
        "variable" in d && (n.variable = d.variable), s.value.videoUrl = n;
      } else
        s.value.videoUrl = new f(d);
      if (s.value && !s.value.videoFitSettings) {
        const n = new v();
        n.fit = O.videoFitSettings.fit, s.value.videoFitSettings = n;
      }
    }), le(() => {
      i?.value && u.unregisterInstance(i.value);
    });
    const q = L(() => s.value.videoFitSettings?.fit), z = L(() => s.value.videoUrl?.value);
    return (d, n) => (M(), de("div", {
      class: "container",
      onClick: Y,
      onContextmenu: ue(H, ["prevent"])
    }, [
      j("video", {
        controls: "",
        src: z.value,
        ref_key: "videoElement",
        ref: l,
        onPlay: n[0] || (n[0] = (p) => w("play", p)),
        onPause: n[1] || (n[1] = (p) => w("pause", p)),
        onTimeupdate: n[2] || (n[2] = (p) => w("timeupdate", p)),
        onEnded: n[3] || (n[3] = (p) => w("ended", p)),
        onError: n[4] || (n[4] = (p) => w("error", p))
      }, " Your browser does not support embedded videos. ", 40, Fe)
    ], 32));
  }
}), $ = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [i, s] of e)
    t[i] = s;
  return t;
}, Ne = /* @__PURE__ */ $(ye, [["__scopeId", "data-v-c8b707a4"]]), Ve = { class: "settings-container" }, De = /* @__PURE__ */ k({
  __name: "VideoWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(r) {
    const e = D("i18n"), t = (o) => e ? e.t(o) : o, i = A(r, "modelValue"), s = B({
      widgetSection: !1,
      storeSection: !1
    });
    return (o, u) => {
      const U = N("va-input"), y = N("va-select"), l = N("va-collapse");
      return M(), ce(l, {
        modelValue: s.value.widgetSection,
        "onUpdate:modelValue": u[2] || (u[2] = (g) => s.value.widgetSection = g),
        icon: "settings",
        header: t("video:VideoWidget.title")
      }, {
        default: R(() => [
          j("div", Ve, [
            V(pe(Te), {
              modelValue: i.value.videoUrl,
              "onUpdate:modelValue": u[0] || (u[0] = (g) => i.value.videoUrl = g),
              label: t("video:VideoWidget.videoUrl")
            }, {
              default: R(({ value: g, change: _ }) => [
                V(U, {
                  "model-value": g,
                  onInput: _,
                  label: t("video:VideoWidget.videoUrl")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            V(y, {
              class: "mt-2",
              modelValue: i.value.videoFitSettings.fit,
              "onUpdate:modelValue": u[1] || (u[1] = (g) => i.value.videoFitSettings.fit = g),
              label: t("video:VideoWidget.videoFit"),
              options: ["Cover", "Contain", "Stretch", "Fill", "None"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), Ce = /* @__PURE__ */ $(De, [["__scopeId", "data-v-9a8eca2e"]]), be = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M78.75%2056.1029C81.75%2057.8349%2081.75%2062.1651%2078.75%2063.8971L47.25%2082.0836C44.25%2083.8157%2040.5%2081.6506%2040.5%2078.1865L40.5%2041.8135C40.5%2038.3494%2044.25%2036.1843%2047.25%2037.9164L78.75%2056.1029Z'%20fill='%23606060'/%3e%3c/svg%3e", Ue = [
  { name: "Video Clicked", type: "click", description: "Triggered when the video widget is clicked", payloadType: h },
  { name: "Video Right Clicked", type: "right_click", description: "Triggered when the video widget is right-clicked", payloadType: h },
  { name: "Video Played", type: "play", description: "Triggered when the video starts or resumes playing", payloadType: h },
  { name: "Video Paused", type: "pause", description: "Triggered when the video playback is paused", payloadType: h },
  { name: "Video Time Updated", type: "timeupdate", description: "Triggered when the video playback position changes", payloadType: h },
  { name: "Video Ended", type: "ended", description: "Triggered when the video reaches the end", payloadType: h },
  { name: "Video Error", type: "error", description: "Triggered when the video encounters an error", payloadType: h }
], Oe = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the video widget.

The address first - without one there is nothing to fit - then how the
picture sits in the frame. The address is a wrapper, so a board can play
whatever a variable points at rather than one fixed file.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="VideoSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings"/>

  <components xsi:type="uimodel:FormView" name="VideoSettingsFormView">
    <fields xsi:type="uimodel:InputWidget"
        name="videoUrl"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings/videoUrl"
        label="Adresse"
        placeholder="https://…"/>
    <fields xsi:type="uimodel:InputWidget"
        name="videoFitSettings"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings/videoFitSettings"
        label="Darstellung"/>
  </components>
</uimodel:UIModel>
`, xe = `<?xml version="1.0" encoding="UTF-8"?>
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

How the picture sits in the frame.

The values are the CSS object-fit ones, because that is where they end up;
optionLabel says what each one does to the picture, which is the thing being
chosen between.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ObjectFitSettingForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//ObjectFitSetting"/>

  <components xsi:type="uimodel:FormView" name="ObjectFitSettingFormView">
    <fields xsi:type="uimodel:SelectWidget"
        name="fit"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//ObjectFitSetting/fit"
        label="Einpassen">
      <values>cover</values>
      <values>contain</values>
      <values>fill</values>
      <values>scale-down</values>
      <values>none</values>
      <optionLabel language="JS" body="({ cover: 'Ausfüllen, Ränder beschneiden', contain: 'Ganz zeigen, Ränder frei lassen', fill: 'Auf den Rahmen verzerren', 'scale-down': 'Nur verkleinern', none: 'Originalgröße' })[option] ?? option"/>
    </fields>
  </components>
</uimodel:UIModel>
`;
var Le = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, b = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Re(e, t) : e, o = r.length - 1, u; o >= 0; o--)
    (u = r[o]) && (s = (i ? u(e, t, s) : u(s)) || s);
  return i && s && Le(e, t, s), s;
}, P = (r, e) => (t, i) => e(t, i, r);
a.eINSTANCE;
const E = "VideoWidget";
let F = class {
  constructor(r, e) {
    this.events = r, this.actions = e;
  }
  type = E;
  component = Ne;
  settingsComponent = Ce;
  supportedDSTypes = [];
  icon = be;
  name = "Video";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Oe,
    uri: "/video-settings.ui.xmi",
    ePackage: () => a.eINSTANCE,
    create: () => new c(),
    /* The form for the class this one contains. */
    entryForms: [{ xmi: xe, uri: "/video-fit.ui.xmi" }]
  };
  register() {
    this.events.registerWidget(E, Ue), this.actions.registerWidgetType(E, m, "widget");
  }
  unregister() {
    this.events.unregisterWidget(E), this.actions.unregisterWidgetType(E);
  }
};
b([
  te()
], F.prototype, "register", 1);
b([
  ie()
], F.prototype, "unregister", 1);
F = b([
  se({
    service: [Ee],
    properties: { "widget.type": E }
  }),
  P(0, x(Q)),
  P(1, x(ee))
], F);
export {
  c as VideoSettingsImpl,
  a as VideoSettingsPackage,
  Ne as VideoWidget,
  F as VideoWidgetProvider,
  Ce as VideoWidgetSettings,
  xe as videoFitFormXmi,
  Oe as videoSettingsFormXmi
};
