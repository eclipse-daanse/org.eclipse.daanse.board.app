(function(){var i="ui.vue.widget.video",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-0b9e0ac2]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.container video[data-v-0b9e0ac2]{width:100%;height:100%;border-radius:3px;object-fit:var(--v12332faa)}\n";})();
import { WidgetActionInterfaceImpl as J, EVENT_ACTIONS_REGISTRY as X, PayloadImpl as h, EVENT_REGISTRY_ID as Y, EVENT_ACTIONS_REGISTRY_ID as z } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as R, activate as H, deactivate as q, inject as C } from "@eclipse-daanse/tsm";
import { defineComponent as Z, mergeModels as K, useCssVars as Q, computed as O, toRefs as ee, useModel as te, inject as V, ref as ie, onMounted as se, onUnmounted as ne, createElementBlock as re, openBlock as oe, withModifiers as ae, createElementVNode as de, toDisplayString as le, unref as ue } from "vue";
import { useRoute as ce } from "vue-router";
import { BasicEObject as G, BasicEFactory as pe, BasicEPackage as ve, EPackageRegistry as P, BasicEClass as b, BasicEAttribute as ge, BasicEReference as U, getEcorePackage as he } from "@emfts/core";
import { VariableWrapper as m, useTranslation as me } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as f } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Te } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: fe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class v extends G {
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
class _ extends pe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new _()), this._instance;
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
    return new u();
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
function Ie(o) {
  const e = P.INSTANCE.getEPackage(o);
  if (!e)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing VideoSettingsPackage.`);
  return e;
}
class a extends ve {
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
    P.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(_.eINSTANCE);
    const e = new b();
    e.setName("ObjectFitSetting"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.OBJECT_FIT_SETTING = e;
    const t = new ge();
    t.setName("fit"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.OBJECT_FIT_SETTING__FIT = t;
    const n = new b();
    n.setName("VideoSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), a.Literals.VIDEO_SETTINGS = n;
    const i = new U();
    i.setContainment(!0), i.setName("videoFitSettings"), i.setLowerBound(0), i.setUpperBound(1), n.getEStructuralFeatures().push(i), a.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS = i;
    const s = new U();
    s.setContainment(!1), s.setName("videoUrl"), s.setLowerBound(0), s.setUpperBound(1), n.getEStructuralFeatures().push(s), a.Literals.VIDEO_SETTINGS__VIDEO_URL = s, a.Literals.OBJECT_FIT_SETTING__FIT.setEType(he().getEClassifier("EString")), a.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS.setEType(a.Literals.OBJECT_FIT_SETTING), a.Literals.VIDEO_SETTINGS__VIDEO_URL.setEType(Ie("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class u extends G {
  // Feature ID Constants (eLiterals)
  static VIDEO_FIT_SETTINGS = 0;
  static VIDEO_URL = 1;
  // Private fields
  _videoFitSettings;
  _videoUrl = new m();
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VIDEO_FIT_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VIDEO_FIT_SETTINGS,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VIDEO_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VIDEO_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.VIDEO_FIT_SETTINGS:
        return this.videoFitSettings;
      case u.VIDEO_URL:
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
      case u.VIDEO_FIT_SETTINGS:
        this.videoFitSettings = t, super.eSet(e, t);
        break;
      case u.VIDEO_URL:
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
      case u.VIDEO_FIT_SETTINGS:
        return this._videoFitSettings !== void 0;
      case u.VIDEO_URL:
        return this._videoUrl !== new m();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.VIDEO_FIT_SETTINGS:
        this._videoFitSettings = void 0;
        return;
      case u.VIDEO_URL:
        this._videoUrl = new m();
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
var Ee = Object.defineProperty, we = Object.getOwnPropertyDescriptor, T = (o, e, t, n) => {
  for (var i = we(e, t), s = o.length - 1, p; s >= 0; s--)
    (p = o[s]) && (i = p(e, t, i) || i);
  return i && Ee(e, t, i), i;
};
class g extends J {
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
  f({ eventType: "video.play" })
], g.prototype, "play");
T([
  f({ eventType: "video.pause" })
], g.prototype, "pause");
T([
  f({ eventType: "video.stop" })
], g.prototype, "stop");
T([
  f({ eventType: "video.seek" })
], g.prototype, "seek");
T([
  f({ eventType: "video.mute" })
], g.prototype, "mute");
T([
  f({ eventType: "video.unmute" })
], g.prototype, "unmute");
T([
  f({ eventType: "video.setVolume" })
], g.prototype, "setVolume");
const Se = ["src"], _e = /* @__PURE__ */ Z({
  __name: "VideoWidget",
  props: /* @__PURE__ */ K({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: e }) {
    Q((d) => ({
      v12332faa: j.value
    }));
    const t = o, { t: n } = me("video"), { id: i } = ee(t), s = te(o, "configv"), p = V(fe.TINY_EMITTER), y = V(X), A = ce().params.pageid || "", l = ie(null);
    class k extends g {
      play() {
        l.value && l.value.play();
      }
      pause() {
        l.value && l.value.pause();
      }
      stop() {
        l.value && (l.value.pause(), l.value.currentTime = 0);
      }
      seek(r) {
        l.value && (l.value.currentTime = r);
      }
      mute() {
        l.value && (l.value.muted = !0);
      }
      unmute() {
        l.value && (l.value.muted = !1);
      }
      setVolume(r) {
        l.value && (l.value.volume = Math.max(0, Math.min(1, r)));
      }
    }
    const D = new k();
    e(D);
    const B = () => {
      i?.value && p.emit("widget:VideoWidget:click", {
        type: "widget:VideoWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, M = () => {
      i?.value && p.emit("widget:VideoWidget:right_click", {
        type: "widget:VideoWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, E = (d, r) => {
      if (!i?.value) return;
      let c = { widgetId: i.value, timestamp: Date.now() };
      if (d === "timeupdate") {
        const w = r.target;
        c.currentTime = w.currentTime, c.duration = w.duration;
      } else if (d === "error") {
        const w = r.target;
        c.error = w.error?.message || w.error?.code || "Unknown Error";
      }
      p.emit(`widget:VideoWidget:${d}`, {
        type: `widget:VideoWidget:${d}`,
        widgetId: i.value,
        payload: c
      });
    };
    console.log(s);
    const N = {
      videoUrl: "",
      videoFitSettings: {
        fit: "cover"
      }
    };
    se(() => {
      i?.value && y.registerInstance(i.value, D, "VideoWidget", A), s.value || (s.value = new u());
      const d = s.value.videoUrl;
      if (d == null)
        s.value.videoUrl = new m(N.videoUrl);
      else if (!(d instanceof m)) if (typeof d == "object" && "value" in d) {
        const r = new m(d.value);
        "variable" in d && (r.variable = d.variable), s.value.videoUrl = r;
      } else
        s.value.videoUrl = new m(d);
      if (s.value && !s.value.videoFitSettings) {
        const r = new v();
        r.fit = N.videoFitSettings.fit, s.value.videoFitSettings = r;
      }
    }), ne(() => {
      i?.value && y.unregisterInstance(i.value);
    });
    const j = O(() => s.value.videoFitSettings?.fit), $ = O(() => s.value.videoUrl?.value);
    return (d, r) => (oe(), re("div", {
      class: "container",
      onClick: B,
      onContextmenu: ae(M, ["prevent"])
    }, [
      de("video", {
        controls: "",
        src: $.value,
        ref_key: "videoElement",
        ref: l,
        onPlay: r[0] || (r[0] = (c) => E("play", c)),
        onPause: r[1] || (r[1] = (c) => E("pause", c)),
        onTimeupdate: r[2] || (r[2] = (c) => E("timeupdate", c)),
        onEnded: r[3] || (r[3] = (c) => E("ended", c)),
        onError: r[4] || (r[4] = (c) => E("error", c))
      }, le(ue(n)("Widget.unsupported")), 41, Se)
    ], 32));
  }
}), Fe = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, ye = /* @__PURE__ */ Fe(_e, [["__scopeId", "data-v-0b9e0ac2"]]), De = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M78.75%2056.1029C81.75%2057.8349%2081.75%2062.1651%2078.75%2063.8971L47.25%2082.0836C44.25%2083.8157%2040.5%2081.6506%2040.5%2078.1865L40.5%2041.8135C40.5%2038.3494%2044.25%2036.1843%2047.25%2037.9164L78.75%2056.1029Z'%20fill='%23606060'/%3e%3c/svg%3e", Ne = [
  { name: "Video Clicked", type: "click", description: "Triggered when the video widget is clicked", payloadType: h },
  { name: "Video Right Clicked", type: "right_click", description: "Triggered when the video widget is right-clicked", payloadType: h },
  { name: "Video Played", type: "play", description: "Triggered when the video starts or resumes playing", payloadType: h },
  { name: "Video Paused", type: "pause", description: "Triggered when the video playback is paused", payloadType: h },
  { name: "Video Time Updated", type: "timeupdate", description: "Triggered when the video playback position changes", payloadType: h },
  { name: "Video Ended", type: "ended", description: "Triggered when the video reaches the end", payloadType: h },
  { name: "Video Error", type: "error", description: "Triggered when the video encounters an error", payloadType: h }
], Ce = `<?xml version="1.0" encoding="UTF-8"?>
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
        label="video:Form.videoUrl"
        placeholder="https://…"/>
    <fields xsi:type="uimodel:InputWidget"
        name="videoFitSettings"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings/videoFitSettings"
        label="video:Form.videoFitSettings"/>
  </components>
</uimodel:UIModel>
`, Oe = `<?xml version="1.0" encoding="UTF-8"?>
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
        label="video:FormFit.fit">
      <values>cover</values>
      <values>contain</values>
      <values>fill</values>
      <values>scale-down</values>
      <values>none</values>
      <optionLabel language="JS" body="({ cover: 'video:Options.fit.cover', contain: 'video:Options.fit.contain', fill: 'video:Options.fit.fill', 'scale-down': 'video:Options.fit.scaleDown', none: 'video:Options.fit.none' })[option] ?? option"/>
    </fields>
  </components>
</uimodel:UIModel>
`, Ve = { name: "Video", unsupported: "Dein Browser kann eingebettete Videos nicht abspielen." }, be = { fit: "Einpassen" }, Ue = { videoUrl: "Adresse", videoFitSettings: "Darstellung" }, xe = { fit: { cover: "Ausfüllen, Ränder beschneiden", contain: "Ganz zeigen, Ränder frei lassen", fill: "Auf den Rahmen verzerren", scaleDown: "Nur verkleinern", none: "Originalgröße" } }, Le = {
  Widget: Ve,
  FormFit: be,
  Form: Ue,
  Options: xe
}, Re = { name: "Video", unsupported: "Your browser does not support embedded videos." }, Ge = { fit: "Fit" }, Pe = { videoUrl: "Address", videoFitSettings: "Display" }, We = { fit: { cover: "Cover, crop the edges", contain: "Show whole, leave edges free", fill: "Stretch to the frame", scaleDown: "Only scale down", none: "Original size" } }, Ae = {
  Widget: Re,
  FormFit: Ge,
  Form: Pe,
  Options: We
};
var ke = Object.getOwnPropertyDescriptor, Be = (o, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ke(e, t) : e, s = o.length - 1, p; s >= 0; s--)
    (p = o[s]) && (i = p(i) || i);
  return i;
};
const W = "video";
let x = class {
  namespace = W;
  resources = {
    de: Le,
    en: Ae
  };
};
x = Be([
  R({
    service: ["Translations"],
    properties: { "i18n.namespace": W }
  })
], x);
var Me = Object.defineProperty, je = Object.getOwnPropertyDescriptor, F = (o, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? je(e, t) : e, s = o.length - 1, p; s >= 0; s--)
    (p = o[s]) && (i = (n ? p(e, t, i) : p(i)) || i);
  return n && i && Me(e, t, i), i;
}, L = (o, e) => (t, n) => e(t, n, o);
a.eINSTANCE;
const I = "VideoWidget";
let S = class {
  constructor(o, e) {
    this.events = o, this.actions = e;
  }
  type = I;
  component = ye;
  supportedDSTypes = [];
  icon = De;
  name = "Video";
  nameKey = "video:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Ce,
    uri: "/video-settings.ui.xmi",
    ePackage: () => a.eINSTANCE,
    create: () => new u(),
    /* The form for the class this one contains. */
    entryForms: [{ xmi: Oe, uri: "/video-fit.ui.xmi" }]
  };
  register() {
    this.events.registerWidget(I, Ne), this.actions.registerWidgetType(I, g, "widget");
  }
  unregister() {
    this.events.unregisterWidget(I), this.actions.unregisterWidgetType(I);
  }
};
F([
  H()
], S.prototype, "register", 1);
F([
  q()
], S.prototype, "unregister", 1);
S = F([
  R({
    service: [Te],
    properties: { "widget.type": I }
  }),
  L(0, C(Y)),
  L(1, C(z))
], S);
export {
  u as VideoSettingsImpl,
  a as VideoSettingsPackage,
  x as VideoTranslations,
  ye as VideoWidget,
  S as VideoWidgetProvider,
  Oe as videoFitFormXmi,
  Ce as videoSettingsFormXmi
};
