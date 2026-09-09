(function(){var i="ui.vue.widget.video",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-c8b707a4]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.container video[data-v-c8b707a4]{width:100%;height:100%;border-radius:3px;object-fit:var(--v67adbbd0)}\n";})();
import { WidgetActionInterfaceImpl as B, EVENT_ACTIONS_REGISTRY as M, PayloadImpl as h, EVENT_REGISTRY_ID as j, EVENT_ACTIONS_REGISTRY_ID as J } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as X, deactivate as $, component as Y, inject as D } from "@eclipse-daanse/tsm";
import { defineComponent as H, mergeModels as z, useCssVars as q, computed as C, toRefs as Z, useModel as K, inject as V, ref as Q, onMounted as ee, onUnmounted as te, createElementBlock as ie, openBlock as se, withModifiers as re, createElementVNode as ne } from "vue";
import { useRoute as oe } from "vue-router";
import { BasicEObject as x, BasicEFactory as ae, BasicEPackage as le, EPackageRegistry as L, BasicEClass as b, BasicEAttribute as de, BasicEReference as O, getEcorePackage as ue } from "@emfts/core";
import { VariableWrapper as m } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as f } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as pe } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ce } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class g extends x {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  // Private fields
  _fit;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return n.Literals.OBJECT_FIT_SETTING;
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
      getFeature: () => this.eClass().getEStructuralFeature(g.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.FIT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.FIT:
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
      case g.FIT:
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
      case g.FIT:
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
      case g.FIT:
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
class _ extends ae {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new _()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(n.eINSTANCE);
  }
  /**
   * Create a new ObjectFitSetting instance
   */
  createObjectFitSetting() {
    return new g();
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
function ge(o) {
  const e = L.INSTANCE.getEPackage(o);
  if (!e)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing VideoSettingsPackage.`);
  return e;
}
class n extends le {
  static eNAME = "videoSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.video";
  static eNS_PREFIX = "videoSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new n(), this._instance.init()), this._instance;
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
    super(), this.setName(n.eNAME), this.setNsURI(n.eNS_URI), this.setNsPrefix(n.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    L.INSTANCE.set(n.eNS_URI, this), this.setEFactoryInstance(_.eINSTANCE);
    const e = new b();
    e.setName("ObjectFitSetting"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), n.Literals.OBJECT_FIT_SETTING = e;
    const t = new de();
    t.setName("fit"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), n.Literals.OBJECT_FIT_SETTING__FIT = t;
    const s = new b();
    s.setName("VideoSettings"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), n.Literals.VIDEO_SETTINGS = s;
    const i = new O();
    i.setContainment(!0), i.setName("videoFitSettings"), i.setLowerBound(0), i.setUpperBound(1), s.getEStructuralFeatures().push(i), n.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS = i;
    const a = new O();
    a.setContainment(!1), a.setName("videoUrl"), a.setLowerBound(0), a.setUpperBound(1), s.getEStructuralFeatures().push(a), n.Literals.VIDEO_SETTINGS__VIDEO_URL = a, n.Literals.OBJECT_FIT_SETTING__FIT.setEType(ue().getEClassifier("EString")), n.Literals.VIDEO_SETTINGS__VIDEO_FIT_SETTINGS.setEType(n.Literals.OBJECT_FIT_SETTING), n.Literals.VIDEO_SETTINGS__VIDEO_URL.setEType(ge("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class u extends x {
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
    return n.Literals.VIDEO_SETTINGS;
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
var ve = Object.defineProperty, he = Object.getOwnPropertyDescriptor, I = (o, e, t, s) => {
  for (var i = he(e, t), a = o.length - 1, p; a >= 0; a--)
    (p = o[a]) && (i = p(e, t, i) || i);
  return i && ve(e, t, i), i;
};
class v extends B {
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
I([
  f({ eventType: "video.play" })
], v.prototype, "play");
I([
  f({ eventType: "video.pause" })
], v.prototype, "pause");
I([
  f({ eventType: "video.stop" })
], v.prototype, "stop");
I([
  f({ eventType: "video.seek" })
], v.prototype, "seek");
I([
  f({ eventType: "video.mute" })
], v.prototype, "mute");
I([
  f({ eventType: "video.unmute" })
], v.prototype, "unmute");
I([
  f({ eventType: "video.setVolume" })
], v.prototype, "setVolume");
const me = ["src"], fe = /* @__PURE__ */ H({
  __name: "VideoWidget",
  props: /* @__PURE__ */ z({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: e }) {
    q((l) => ({
      v67adbbd0: k.value
    }));
    const t = o, { id: s } = Z(t), i = K(o, "configv"), a = V(ce.TINY_EMITTER), p = V(M), R = oe().params.pageid || "", d = Q(null);
    class G extends v {
      play() {
        d.value && d.value.play();
      }
      pause() {
        d.value && d.value.pause();
      }
      stop() {
        d.value && (d.value.pause(), d.value.currentTime = 0);
      }
      seek(r) {
        d.value && (d.value.currentTime = r);
      }
      mute() {
        d.value && (d.value.muted = !0);
      }
      unmute() {
        d.value && (d.value.muted = !1);
      }
      setVolume(r) {
        d.value && (d.value.volume = Math.max(0, Math.min(1, r)));
      }
    }
    const y = new G();
    e(y);
    const P = () => {
      s?.value && a.emit("widget:VideoWidget:click", {
        type: "widget:VideoWidget:click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, W = () => {
      s?.value && a.emit("widget:VideoWidget:right_click", {
        type: "widget:VideoWidget:right_click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, E = (l, r) => {
      if (!s?.value) return;
      let c = { widgetId: s.value, timestamp: Date.now() };
      if (l === "timeupdate") {
        const w = r.target;
        c.currentTime = w.currentTime, c.duration = w.duration;
      } else if (l === "error") {
        const w = r.target;
        c.error = w.error?.message || w.error?.code || "Unknown Error";
      }
      a.emit(`widget:VideoWidget:${l}`, {
        type: `widget:VideoWidget:${l}`,
        widgetId: s.value,
        payload: c
      });
    };
    console.log(i);
    const N = {
      videoUrl: "",
      videoFitSettings: {
        fit: "cover"
      }
    };
    ee(() => {
      s?.value && p.registerInstance(s.value, y, "VideoWidget", R), i.value || (i.value = new u());
      const l = i.value.videoUrl;
      if (l == null)
        i.value.videoUrl = new m(N.videoUrl);
      else if (!(l instanceof m)) if (typeof l == "object" && "value" in l) {
        const r = new m(l.value);
        "variable" in l && (r.variable = l.variable), i.value.videoUrl = r;
      } else
        i.value.videoUrl = new m(l);
      if (i.value && !i.value.videoFitSettings) {
        const r = new g();
        r.fit = N.videoFitSettings.fit, i.value.videoFitSettings = r;
      }
    }), te(() => {
      s?.value && p.unregisterInstance(s.value);
    });
    const k = C(() => i.value.videoFitSettings?.fit), A = C(() => i.value.videoUrl?.value);
    return (l, r) => (se(), ie("div", {
      class: "container",
      onClick: P,
      onContextmenu: re(W, ["prevent"])
    }, [
      ne("video", {
        controls: "",
        src: A.value,
        ref_key: "videoElement",
        ref: d,
        onPlay: r[0] || (r[0] = (c) => E("play", c)),
        onPause: r[1] || (r[1] = (c) => E("pause", c)),
        onTimeupdate: r[2] || (r[2] = (c) => E("timeupdate", c)),
        onEnded: r[3] || (r[3] = (c) => E("ended", c)),
        onError: r[4] || (r[4] = (c) => E("error", c))
      }, " Your browser does not support embedded videos. ", 40, me)
    ], 32));
  }
}), Ie = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [s, i] of e)
    t[s] = i;
  return t;
}, Te = /* @__PURE__ */ Ie(fe, [["__scopeId", "data-v-c8b707a4"]]), Ee = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M78.75%2056.1029C81.75%2057.8349%2081.75%2062.1651%2078.75%2063.8971L47.25%2082.0836C44.25%2083.8157%2040.5%2081.6506%2040.5%2078.1865L40.5%2041.8135C40.5%2038.3494%2044.25%2036.1843%2047.25%2037.9164L78.75%2056.1029Z'%20fill='%23606060'/%3e%3c/svg%3e", we = [
  { name: "Video Clicked", type: "click", description: "Triggered when the video widget is clicked", payloadType: h },
  { name: "Video Right Clicked", type: "right_click", description: "Triggered when the video widget is right-clicked", payloadType: h },
  { name: "Video Played", type: "play", description: "Triggered when the video starts or resumes playing", payloadType: h },
  { name: "Video Paused", type: "pause", description: "Triggered when the video playback is paused", payloadType: h },
  { name: "Video Time Updated", type: "timeupdate", description: "Triggered when the video playback position changes", payloadType: h },
  { name: "Video Ended", type: "ended", description: "Triggered when the video reaches the end", payloadType: h },
  { name: "Video Error", type: "error", description: "Triggered when the video encounters an error", payloadType: h }
], Se = `<?xml version="1.0" encoding="UTF-8"?>
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
`, _e = `<?xml version="1.0" encoding="UTF-8"?>
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
var Fe = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, F = (o, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? ye(e, t) : e, a = o.length - 1, p; a >= 0; a--)
    (p = o[a]) && (i = (s ? p(e, t, i) : p(i)) || i);
  return s && i && Fe(e, t, i), i;
}, U = (o, e) => (t, s) => e(t, s, o);
n.eINSTANCE;
const T = "VideoWidget";
let S = class {
  constructor(o, e) {
    this.events = o, this.actions = e;
  }
  type = T;
  component = Te;
  supportedDSTypes = [];
  icon = Ee;
  name = "Video";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Se,
    uri: "/video-settings.ui.xmi",
    ePackage: () => n.eINSTANCE,
    create: () => new u(),
    /* The form for the class this one contains. */
    entryForms: [{ xmi: _e, uri: "/video-fit.ui.xmi" }]
  };
  register() {
    this.events.registerWidget(T, we), this.actions.registerWidgetType(T, v, "widget");
  }
  unregister() {
    this.events.unregisterWidget(T), this.actions.unregisterWidgetType(T);
  }
};
F([
  X()
], S.prototype, "register", 1);
F([
  $()
], S.prototype, "unregister", 1);
S = F([
  Y({
    service: [pe],
    properties: { "widget.type": T }
  }),
  U(0, D(j)),
  U(1, D(J))
], S);
export {
  u as VideoSettingsImpl,
  n as VideoSettingsPackage,
  Te as VideoWidget,
  S as VideoWidgetProvider,
  _e as videoFitFormXmi,
  Se as videoSettingsFormXmi
};
