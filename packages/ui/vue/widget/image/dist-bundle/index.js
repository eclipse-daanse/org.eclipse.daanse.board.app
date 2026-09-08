(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".slideshow-container[data-v-a566e6b2]{width:100%;height:100%;overflow:hidden;position:relative}.slideshow-track[data-v-a566e6b2]{width:100%;height:100%;overflow:visible;position:relative;transition:transform .3s ease-in-out}.slideshow-slide[data-v-a566e6b2]{width:100%;height:100%;position:absolute;top:0;left:0}.slideshow-nav[data-v-a566e6b2]{position:absolute;top:50%;width:32px;height:32px;transform:translateY(-50%);z-index:10;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center}.slideshow-nav--prev[data-v-a566e6b2]{left:40px}.slideshow-nav--next[data-v-a566e6b2]{right:40px}.image-settings-container[data-v-e2074a09]{display:flex;flex-direction:row;align-items:flex-end;gap:1rem;padding:.5rem;border-radius:.25rem}.image-settings-remove-button[data-v-e2074a09]{margin-bottom:.25rem}.image-settings-remove-input[data-v-e2074a09]{flex-grow:1}.settings-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:1rem}.image-list-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:.5rem;height:500px;overflow:auto;padding:.5rem;border-radius:.5rem}.loading[data-v-e2074a09]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { PayloadImpl as Q, EventsPackage as ge, EVENT_REGISTRY_ID as de } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as he, deactivate as me, component as Ie, inject as pe } from "@eclipse-daanse/tsm";
import { defineComponent as ee, mergeModels as Ee, toRefs as fe, useModel as te, inject as se, onMounted as $, computed as y, ref as ie, watch as W, resolveComponent as M, createElementBlock as G, openBlock as T, withModifiers as j, normalizeClass as z, createElementVNode as D, createVNode as L, normalizeStyle as J, Fragment as ae, renderList as ne, createBlock as Se, withCtx as q, createTextVNode as _e, toDisplayString as ve, unref as U } from "vue";
import { VariableWrapper as C, plainSettings as Z } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as Y, BasicEFactory as we, BasicEPackage as Ae, EPackageRegistry as re, BasicEClass as N, BasicEReference as b, BasicEAttribute as R, getEcorePackage as F, createContainmentEList as Le } from "@emfts/core";
import { WIDGET_SERVICE_ID as Ce } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Te } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ge = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
class g extends Y {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static URL = 1;
  // Private fields
  _id;
  _url;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.IMAGE_GALLERY_ITEM;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(e) {
    const t = this._id;
    this._id = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.ID,
      merge: () => !1
    });
  }
  get url() {
    return this._url;
  }
  set url(e) {
    const t = this._url;
    this._url = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.ID:
        return this.id;
      case g.URL:
        return this.url;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case g.ID:
        this.id = t, super.eSet(e, t);
        break;
      case g.URL:
        this.url = t, super.eSet(e, t);
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
      case g.ID:
        return this._id !== void 0;
      case g.URL:
        return this._url !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.ID:
        this._id = void 0;
        return;
      case g.URL:
        this._url = void 0;
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
      id: this.id,
      url: this.url
    };
  }
}
class d extends Y {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  static DIASHOW_INTERVAL = 1;
  // Private fields
  _fit = new C();
  _diashowInterval = new C();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.GALLERY_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(d.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.FIT,
      merge: () => !1
    });
  }
  get diashowInterval() {
    return this._diashowInterval;
  }
  set diashowInterval(e) {
    const t = this._diashowInterval;
    this._diashowInterval = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(d.DIASHOW_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.DIASHOW_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.FIT:
        return this.fit;
      case d.DIASHOW_INTERVAL:
        return this.diashowInterval;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case d.FIT:
        this.fit = t, super.eSet(e, t);
        break;
      case d.DIASHOW_INTERVAL:
        this.diashowInterval = t, super.eSet(e, t);
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
      case d.FIT:
        return this._fit !== new C();
      case d.DIASHOW_INTERVAL:
        return this._diashowInterval !== new C();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.FIT:
        this._fit = new C();
        return;
      case d.DIASHOW_INTERVAL:
        this._diashowInterval = new C();
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
      fit: this.fit,
      diashowInterval: this.diashowInterval
    };
  }
}
class v extends Q {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.IMAGE_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(e) {
    const t = this._imageUrl;
    this._imageUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(v.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.IMAGE_URL:
        return this.imageUrl;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case v.IMAGE_URL:
        this.imageUrl = t, super.eSet(e, t);
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
      case v.IMAGE_URL:
        return this._imageUrl !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.IMAGE_URL:
        this._imageUrl = void 0;
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
      imageUrl: this.imageUrl
    };
  }
}
class w extends Q {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.IMAGE_RIGHT_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(e) {
    const t = this._imageUrl;
    this._imageUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(w.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.IMAGE_URL:
        return this.imageUrl;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case w.IMAGE_URL:
        this.imageUrl = t, super.eSet(e, t);
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
      case w.IMAGE_URL:
        return this._imageUrl !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.IMAGE_URL:
        this._imageUrl = void 0;
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
      imageUrl: this.imageUrl
    };
  }
}
class P extends we {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new P()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(a.eINSTANCE);
  }
  /**
   * Create a new ImageSettings instance
   */
  createImageSettings() {
    return new h();
  }
  /**
   * Create a new ImageGalleryItem instance
   */
  createImageGalleryItem() {
    return new g();
  }
  /**
   * Create a new GallerySettings instance
   */
  createGallerySettings() {
    return new d();
  }
  /**
   * Create a new ImageClickPayload instance
   */
  createImageClickPayload() {
    return new v();
  }
  /**
   * Create a new ImageRightClickPayload instance
   */
  createImageRightClickPayload() {
    return new w();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ImageSettings":
        return this.createImageSettings();
      case "ImageGalleryItem":
        return this.createImageGalleryItem();
      case "GallerySettings":
        return this.createGallerySettings();
      case "ImageClickPayload":
        return this.createImageClickPayload();
      case "ImageRightClickPayload":
        return this.createImageRightClickPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function x(i) {
  const e = re.INSTANCE.getEPackage(i);
  if (!e)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ImagesettingsPackage.`);
  return e;
}
class a extends Ae {
  static eNAME = "imagesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.image";
  static eNS_PREFIX = "imagesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    IMAGE_SETTINGS: null,
    IMAGE_SETTINGS__IMAGES_SETTINGS: null,
    IMAGE_SETTINGS__IMAGES: null,
    IMAGE_GALLERY_ITEM: null,
    IMAGE_GALLERY_ITEM__ID: null,
    IMAGE_GALLERY_ITEM__URL: null,
    GALLERY_SETTINGS: null,
    GALLERY_SETTINGS__FIT: null,
    GALLERY_SETTINGS__DIASHOW_INTERVAL: null,
    IMAGE_CLICK_PAYLOAD: null,
    IMAGE_CLICK_PAYLOAD__IMAGE_URL: null,
    IMAGE_RIGHT_CLICK_PAYLOAD: null,
    IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL: null
  };
  constructor() {
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    re.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(P.eINSTANCE);
    const e = new N();
    e.setName("ImageSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.IMAGE_SETTINGS = e;
    const t = new b();
    t.setContainment(!0), t.setName("imagesSettings"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS = t;
    const s = new b();
    s.setContainment(!0), s.setName("images"), s.setLowerBound(0), s.setUpperBound(-1), e.getEStructuralFeatures().push(s), a.Literals.IMAGE_SETTINGS__IMAGES = s;
    const n = new N();
    n.setName("ImageGalleryItem"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), a.Literals.IMAGE_GALLERY_ITEM = n;
    const c = new R();
    c.setName("id"), c.setLowerBound(0), c.setUpperBound(1), n.getEStructuralFeatures().push(c), a.Literals.IMAGE_GALLERY_ITEM__ID = c;
    const l = new R();
    l.setName("url"), l.setLowerBound(0), l.setUpperBound(1), n.getEStructuralFeatures().push(l), a.Literals.IMAGE_GALLERY_ITEM__URL = l;
    const m = new N();
    m.setName("GallerySettings"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), a.Literals.GALLERY_SETTINGS = m;
    const E = new b();
    E.setContainment(!1), E.setName("fit"), E.setLowerBound(0), E.setUpperBound(1), m.getEStructuralFeatures().push(E), a.Literals.GALLERY_SETTINGS__FIT = E;
    const I = new b();
    I.setContainment(!1), I.setName("diashowInterval"), I.setLowerBound(0), I.setUpperBound(1), m.getEStructuralFeatures().push(I), a.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL = I;
    const p = new N();
    p.setName("ImageClickPayload"), p.setAbstract(!1), p.setInterface(!1), this.getEClassifiers().push(p), p.setEPackage(this), a.Literals.IMAGE_CLICK_PAYLOAD = p;
    const o = new R();
    o.setName("imageUrl"), o.setLowerBound(0), o.setUpperBound(1), p.getEStructuralFeatures().push(o), a.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL = o;
    const r = new N();
    r.setName("ImageRightClickPayload"), r.setAbstract(!1), r.setInterface(!1), this.getEClassifiers().push(r), r.setEPackage(this), a.Literals.IMAGE_RIGHT_CLICK_PAYLOAD = r;
    const S = new R();
    S.setName("imageUrl"), S.setLowerBound(0), S.setUpperBound(1), r.getEStructuralFeatures().push(S), a.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL = S, a.Literals.IMAGE_CLICK_PAYLOAD.getESuperTypes().push(x("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), a.Literals.IMAGE_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(x("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), a.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS.setEType(a.Literals.GALLERY_SETTINGS), a.Literals.IMAGE_SETTINGS__IMAGES.setEType(a.Literals.IMAGE_GALLERY_ITEM), a.Literals.IMAGE_GALLERY_ITEM__ID.setEType(F().getEClassifier("EString")), a.Literals.IMAGE_GALLERY_ITEM__URL.setEType(F().getEClassifier("EString")), a.Literals.GALLERY_SETTINGS__FIT.setEType(x("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL.setEType(x("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL.setEType(F().getEClassifier("EString")), a.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL.setEType(F().getEClassifier("EString"));
  }
}
class h extends Y {
  // Feature ID Constants (eLiterals)
  static IMAGES_SETTINGS = 0;
  static IMAGES = 1;
  // Private fields
  _imagesSettings;
  _images;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.IMAGE_SETTINGS;
  }
  // Getters and Setters
  get imagesSettings() {
    return this._imagesSettings;
  }
  set imagesSettings(e) {
    const t = this._imagesSettings;
    this._imagesSettings = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.IMAGES_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.IMAGES_SETTINGS,
      merge: () => !1
    });
  }
  get images() {
    return this._images || (this._images = Le(this, this.eClass().getEStructuralFeature("images"))), this._images;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case h.IMAGES_SETTINGS:
        return this.imagesSettings;
      case h.IMAGES:
        return this.images;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case h.IMAGES_SETTINGS:
        this.imagesSettings = t, super.eSet(e, t);
        break;
      case h.IMAGES:
        this.images.clear(), this.images.addAll(t), super.eSet(e, t);
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
      case h.IMAGES_SETTINGS:
        return this._imagesSettings !== void 0;
      case h.IMAGES:
        return this._images !== void 0 && !this._images.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case h.IMAGES_SETTINGS:
        this._imagesSettings = void 0;
        return;
      case h.IMAGES:
        this._images && this._images.clear();
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
      imagesSettings: this.imagesSettings,
      images: this.images?.toArray?.() ?? this.images
    };
  }
}
const De = ["src"], Ne = {
  key: 1,
  class: "slideshow-container"
}, Me = { class: "slideshow-nav slideshow-nav--prev" }, ye = ["src", "onClick", "onContextmenu"], Ue = { class: "slideshow-nav slideshow-nav--next" }, be = /* @__PURE__ */ ee({
  __name: "ImageWidget",
  props: /* @__PURE__ */ Ee({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i) {
    const e = i, { id: t } = fe(e), s = te(i, "configv"), n = se(Te.TINY_EMITTER), c = (f) => {
      t?.value && n.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: t.value,
        payload: { imageUrl: f, widgetId: t.value, timestamp: Date.now() }
      });
    }, l = (f) => {
      t?.value && n.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: t.value,
        payload: { imageUrl: f, widgetId: t.value, timestamp: Date.now() }
      });
    }, m = new h();
    $(() => {
      s.value && Object.assign(s.value, {
        ...Z(m),
        ...Z(s.value)
      });
    });
    const E = y(() => s.value.imagesSettings?.fit?.value), I = y(() => s.value.imagesSettings?.diashowInterval?.value), p = y(() => ({
      none: "",
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down"
    })[E.value?.toLowerCase() || "none"] || "");
    let o = null;
    const r = ie(0), S = () => {
      r.value < s.value.images.length - 1 && r.value++;
    }, oe = () => {
      r.value > 0 && r.value--;
    }, k = () => {
      o && clearInterval(o), (I.value ?? 0) > 0 && (o = setInterval(() => {
        if (r.value === s.value.images.length - 1) {
          r.value = 0;
          return;
        }
        S();
      }, (I.value ?? 1) * 1e3));
    };
    $(() => {
      k();
    }), W(() => I.value, k);
    const H = (f) => f;
    W(
      () => s.value.images?.length,
      (f, _) => {
        _ > f && r.value >= f && (r.value = f - 1);
      }
    );
    const X = y(() => s.value.images?.length > 0 ? s.value.images.length - 1 : 0);
    return W(X, () => {
      r.value = X.value;
    }), (f, _) => {
      const K = M("va-button");
      return s.value.images?.length <= 1 ? (T(), G("img", {
        key: 0,
        class: z(["w-full h-full cursor-pointer", p.value]),
        src: H(s.value.images[0]?.url ?? ""),
        onClick: _[0] || (_[0] = (A) => c(s.value.images[0]?.url ?? "")),
        onContextmenu: _[1] || (_[1] = j((A) => l(s.value.images[0]?.url ?? ""), ["prevent"]))
      }, null, 42, De)) : (T(), G("div", Ne, [
        D("div", Me, [
          L(K, {
            onClick: _[2] || (_[2] = (A) => oe()),
            icon: "chevron_left",
            preset: "plain",
            "text-color": "#ffffff",
            disabled: r.value === 0
          }, null, 8, ["disabled"])
        ]),
        D("div", {
          class: "slideshow-track",
          style: J({ transform: `translateX(-${100 * r.value}%)` })
        }, [
          (T(!0), G(ae, null, ne(s.value.images, (A, ue) => (T(), G("div", {
            key: A.id,
            class: "slideshow-slide",
            style: J({ transform: `translateX(${100 * ue}%)` })
          }, [
            D("img", {
              class: z(["w-full h-full cursor-pointer", p.value]),
              src: H(A.url ?? ""),
              onClick: (ce) => c(A.url ?? ""),
              onContextmenu: j((ce) => l(A.url ?? ""), ["prevent"])
            }, null, 42, ye)
          ], 4))), 128))
        ], 4),
        D("div", Ue, [
          L(K, {
            onClick: _[3] || (_[3] = (A) => S()),
            icon: "chevron_right",
            "text-color": "#ffffff",
            disabled: r.value === s.value.images?.length - 1,
            preset: "plain"
          }, null, 8, ["disabled"])
        ])
      ]));
    };
  }
}), le = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [s, n] of e)
    t[s] = n;
  return t;
}, Re = /* @__PURE__ */ le(be, [["__scopeId", "data-v-a566e6b2"]]), u = [];
for (let i = 0; i < 256; ++i)
  u.push((i + 256).toString(16).slice(1));
function Fe(i, e = 0) {
  return (u[i[e + 0]] + u[i[e + 1]] + u[i[e + 2]] + u[i[e + 3]] + "-" + u[i[e + 4]] + u[i[e + 5]] + "-" + u[i[e + 6]] + u[i[e + 7]] + "-" + u[i[e + 8]] + u[i[e + 9]] + "-" + u[i[e + 10]] + u[i[e + 11]] + u[i[e + 12]] + u[i[e + 13]] + u[i[e + 14]] + u[i[e + 15]]).toLowerCase();
}
const xe = new Uint8Array(16);
function Ve() {
  return crypto.getRandomValues(xe);
}
function Oe(i, e, t) {
  return crypto.randomUUID ? crypto.randomUUID() : We(i);
}
function We(i, e, t) {
  i = i || {};
  const s = i.random ?? i.rng?.() ?? Ve();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Fe(s);
}
const Ye = { class: "settings-container" }, Pe = { class: "image-list-container" }, Be = /* @__PURE__ */ ee({
  __name: "ImageWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const e = se("i18n"), t = ie({
      widgetSection: !1,
      storeSection: !1
    }), s = te(i, "modelValue"), n = () => {
      s.value.images || (s.value.images = []);
      const c = {
        id: Oe(),
        url: "Test"
      };
      s.value.images?.splice(
        s.value.images.length,
        0,
        c
      );
    };
    return (c, l) => {
      const m = M("va-button"), E = M("va-input"), I = M("va-select"), p = M("va-collapse");
      return T(), Se(p, {
        modelValue: t.value.widgetSection,
        "onUpdate:modelValue": l[2] || (l[2] = (o) => t.value.widgetSection = o),
        icon: "settings",
        header: "Image widget settings"
      }, {
        default: q(() => [
          D("div", Ye, [
            L(m, { onClick: n }, {
              default: q(() => [
                _e(ve(U(e)?.t("image:ImageWidget.addButton")), 1)
              ]),
              _: 1
            }),
            D("div", Pe, [
              (T(!0), G(ae, null, ne(s.value.images, (o, r) => (T(), G("div", {
                key: o.id,
                class: "image-settings-container"
              }, [
                L(E, {
                  modelValue: o.url,
                  "onUpdate:modelValue": (S) => o.url = S,
                  label: U(e)?.t("image:ImageWidget.imageUrl"),
                  class: "image-settings-remove-input"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                L(m, {
                  onClick: () => s.value.images.splice(r, 1),
                  icon: "clear",
                  class: "image-settings-remove-button"
                }, null, 8, ["onClick"])
              ]))), 128))
            ]),
            L(I, {
              modelValue: s.value.imagesSettings.fit,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value.imagesSettings.fit = o),
              label: U(e)?.t("image:ImageWidget.imageFit"),
              options: ["none", "contain", "cover", "fill", "scale-down"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"]),
            L(E, {
              modelValue: s.value.imagesSettings.diashowInterval,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => s.value.imagesSettings.diashowInterval = o),
              label: U(e)?.t("image:ImageWidget.imageDiashowInterval")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ke = /* @__PURE__ */ le(Be, [["__scopeId", "data-v-e2074a09"]]), He = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: v
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: w
  }
], Xe = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the image widget.

The pictures come first, because a gallery with no pictures shows nothing
and everything below it describes how those pictures are shown. The
interval only means something once there is more than one picture, but it
is left visible rather than conditional: adding the second picture is the
normal case, and a field that appears out of nowhere is harder to find than
one that was always there.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ImageSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings"/>

  <components xsi:type="uimodel:FormView" name="ImageSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="picturesGroup" layout="VERTICAL" label="Bilder">
      <!-- A list: each entry is a form of its own, built from
           ImageGalleryItem. -->
      <fields xsi:type="uimodel:InputWidget"
          name="images"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings/images"
          label="Bilder"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="displayGroup" layout="VERTICAL" label="Darstellung">
      <fields xsi:type="uimodel:InputWidget"
          name="imagesSettings"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings/imagesSettings"
          label="Anzeige"/>
    </fields>

  </components>
</uimodel:UIModel>
`, Ke = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for one picture in the gallery.

Only the address: the id identifies the entry for the list and for the
widget's own bookkeeping, and nobody types one.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ImageGalleryItemForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageGalleryItem"/>

  <components xsi:type="uimodel:FormView" name="ImageGalleryItemFormView">
    <fields xsi:type="uimodel:InputWidget"
        name="url"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageGalleryItem/url"
        label="Adresse"
        placeholder="https://…"/>
  </components>
</uimodel:UIModel>
`, $e = `<?xml version="1.0" encoding="UTF-8"?>
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

How the pictures are shown.

The fit is a choice from the five CSS object-fit values, not free text: a
mistyped one is ignored by the browser and the picture then sits at its own
size with no hint why.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="GallerySettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//GallerySettings"/>

  <components xsi:type="uimodel:FormView" name="GallerySettingsFormView">
    <fields xsi:type="uimodel:SelectWidget"
        name="fit"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//GallerySettings/fit"
        label="Einpassen">
      <values>none</values>
      <values>contain</values>
      <values>cover</values>
      <values>fill</values>
      <values>scale-down</values>
    </fields>
    <fields xsi:type="uimodel:NumberWidget"
        name="diashowInterval"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//GallerySettings/diashowInterval"
        label="Wechsel alle (Sekunden)" min="0" step="1"/>
  </components>
</uimodel:UIModel>
`;
var je = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, B = (i, e, t, s) => {
  for (var n = s > 1 ? void 0 : s ? ze(e, t) : e, c = i.length - 1, l; c >= 0; c--)
    (l = i[c]) && (n = (s ? l(e, t, n) : l(n)) || n);
  return s && n && je(e, t, n), n;
}, Je = (i, e) => (t, s) => e(t, s, i);
ge.eINSTANCE;
a.eINSTANCE;
const V = "ImageWidget";
let O = class {
  constructor(i) {
    this.events = i;
  }
  type = V;
  component = Re;
  settingsComponent = ke;
  supportedDSTypes = [];
  icon = Ge;
  name = "Image";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Xe,
    uri: "/image-settings.ui.xmi",
    ePackage: () => a.eINSTANCE,
    create: () => new h(),
    /* Forms for the classes that appear inside this one - the pictures of
     * the list, and the display options it contains. */
    entryForms: [
      { xmi: Ke, uri: "/image-item.ui.xmi" },
      { xmi: $e, uri: "/image-gallery.ui.xmi" }
    ]
  };
  register() {
    this.events.registerWidget(V, He);
  }
  unregister() {
    this.events.unregisterWidget(V);
  }
};
B([
  he()
], O.prototype, "register", 1);
B([
  me()
], O.prototype, "unregister", 1);
O = B([
  Ie({
    service: [Ce],
    properties: { "widget.type": V }
  }),
  Je(0, pe(de))
], O);
export {
  h as ImageSettingsImpl,
  Re as ImageWidget,
  O as ImageWidgetProvider,
  ke as ImageWidgetSettings,
  a as ImagesettingsPackage,
  $e as galleryFormXmi,
  Ke as imageItemFormXmi,
  Xe as imageSettingsFormXmi
};
