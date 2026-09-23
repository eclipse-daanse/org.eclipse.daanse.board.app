(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".slideshow-container[data-v-9d924243]{width:100%;height:100%;overflow:hidden;position:relative}.slideshow-track[data-v-9d924243]{width:100%;height:100%;overflow:visible;position:relative;transition:transform .3s ease-in-out}.slideshow-slide[data-v-9d924243]{width:100%;height:100%;position:absolute;top:0;left:0}.slideshow-nav[data-v-9d924243]{position:absolute;top:50%;width:32px;height:32px;transform:translateY(-50%);z-index:10;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center}.slideshow-nav--prev[data-v-9d924243]{left:40px}.slideshow-nav--next[data-v-9d924243]{right:40px}.slideshow-nav__button[data-v-9d924243]{width:100%;height:100%;min-width:0;padding:0;color:#fff}.slideshow-nav__button[data-v-9d924243]:hover:not(:disabled){color:#fff;background:#ffffff26}\n";})();
import { PayloadImpl as ee, EventsPackage as le, EVENT_REGISTRY_ID as oe } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as te, activate as ue, deactivate as ce, inject as ge } from "@eclipse-daanse/tsm";
import { defineComponent as de, mergeModels as he, toRefs as me, useModel as Ie, inject as pe, onMounted as $, computed as G, ref as Ee, watch as O, createElementBlock as C, openBlock as D, withModifiers as X, normalizeClass as K, createElementVNode as N, createVNode as M, unref as A, withCtx as j, normalizeStyle as q, Fragment as fe, renderList as Se } from "vue";
import { VariableWrapper as L, useTranslation as _e, plainSettings as z } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as W, BasicEFactory as ve, BasicEPackage as we, EPackageRegistry as se, BasicEClass as T, BasicEReference as y, BasicEAttribute as F, getEcorePackage as R, createContainmentEList as Ae } from "@emfts/core";
import { DButton as J, DIcon as Z } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as Te } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Le } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ge = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
class u extends W {
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
    return i.Literals.IMAGE_GALLERY_ITEM;
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
      getFeature: () => this.eClass().getEStructuralFeature(u.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.ID:
        return this.id;
      case u.URL:
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
      case u.ID:
        this.id = t, super.eSet(e, t);
        break;
      case u.URL:
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
      case u.ID:
        return this._id !== void 0;
      case u.URL:
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
      case u.ID:
        this._id = void 0;
        return;
      case u.URL:
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
class c extends W {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  static DIASHOW_INTERVAL = 1;
  // Private fields
  _fit = new L();
  _diashowInterval = new L();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.GALLERY_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(c.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.FIT,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.DIASHOW_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.DIASHOW_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.FIT:
        return this.fit;
      case c.DIASHOW_INTERVAL:
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
      case c.FIT:
        this.fit = t, super.eSet(e, t);
        break;
      case c.DIASHOW_INTERVAL:
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
      case c.FIT:
        return this._fit !== new L();
      case c.DIASHOW_INTERVAL:
        return this._diashowInterval !== new L();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.FIT:
        this._fit = new L();
        return;
      case c.DIASHOW_INTERVAL:
        this._diashowInterval = new L();
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
class E extends ee {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.IMAGE_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(E.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case E.IMAGE_URL:
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
      case E.IMAGE_URL:
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
      case E.IMAGE_URL:
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
      case E.IMAGE_URL:
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
class f extends ee {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.IMAGE_RIGHT_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(f.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case f.IMAGE_URL:
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
      case f.IMAGE_URL:
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
      case f.IMAGE_URL:
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
      case f.IMAGE_URL:
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
class P extends ve {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new P()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new ImageSettings instance
   */
  createImageSettings() {
    return new g();
  }
  /**
   * Create a new ImageGalleryItem instance
   */
  createImageGalleryItem() {
    return new u();
  }
  /**
   * Create a new GallerySettings instance
   */
  createGallerySettings() {
    return new c();
  }
  /**
   * Create a new ImageClickPayload instance
   */
  createImageClickPayload() {
    return new E();
  }
  /**
   * Create a new ImageRightClickPayload instance
   */
  createImageRightClickPayload() {
    return new f();
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
function U(r) {
  const e = se.INSTANCE.getEPackage(r);
  if (!e)
    throw new Error(`EPackage '${r}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ImagesettingsPackage.`);
  return e;
}
class i extends we {
  static eNAME = "imagesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.image";
  static eNS_PREFIX = "imagesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
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
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    se.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(P.eINSTANCE);
    const e = new T();
    e.setName("ImageSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.IMAGE_SETTINGS = e;
    const t = new y();
    t.setContainment(!0), t.setName("imagesSettings"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), i.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS = t;
    const a = new y();
    a.setContainment(!0), a.setName("images"), a.setLowerBound(0), a.setUpperBound(-1), e.getEStructuralFeatures().push(a), i.Literals.IMAGE_SETTINGS__IMAGES = a;
    const s = new T();
    s.setName("ImageGalleryItem"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), i.Literals.IMAGE_GALLERY_ITEM = s;
    const l = new F();
    l.setName("id"), l.setLowerBound(0), l.setUpperBound(1), s.getEStructuralFeatures().push(l), i.Literals.IMAGE_GALLERY_ITEM__ID = l;
    const o = new F();
    o.setName("url"), o.setLowerBound(0), o.setUpperBound(1), s.getEStructuralFeatures().push(o), i.Literals.IMAGE_GALLERY_ITEM__URL = o;
    const d = new T();
    d.setName("GallerySettings"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), i.Literals.GALLERY_SETTINGS = d;
    const S = new y();
    S.setContainment(!1), S.setName("fit"), S.setLowerBound(0), S.setUpperBound(1), d.getEStructuralFeatures().push(S), i.Literals.GALLERY_SETTINGS__FIT = S;
    const _ = new y();
    _.setContainment(!1), _.setName("diashowInterval"), _.setLowerBound(0), _.setUpperBound(1), d.getEStructuralFeatures().push(_), i.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL = _;
    const h = new T();
    h.setName("ImageClickPayload"), h.setAbstract(!1), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), i.Literals.IMAGE_CLICK_PAYLOAD = h;
    const v = new F();
    v.setName("imageUrl"), v.setLowerBound(0), v.setUpperBound(1), h.getEStructuralFeatures().push(v), i.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL = v;
    const m = new T();
    m.setName("ImageRightClickPayload"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), i.Literals.IMAGE_RIGHT_CLICK_PAYLOAD = m;
    const n = new F();
    n.setName("imageUrl"), n.setLowerBound(0), n.setUpperBound(1), m.getEStructuralFeatures().push(n), i.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL = n, i.Literals.IMAGE_CLICK_PAYLOAD.getESuperTypes().push(U("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), i.Literals.IMAGE_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(U("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), i.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS.setEType(i.Literals.GALLERY_SETTINGS), i.Literals.IMAGE_SETTINGS__IMAGES.setEType(i.Literals.IMAGE_GALLERY_ITEM), i.Literals.IMAGE_GALLERY_ITEM__ID.setEType(R().getEClassifier("EString")), i.Literals.IMAGE_GALLERY_ITEM__URL.setEType(R().getEClassifier("EString")), i.Literals.GALLERY_SETTINGS__FIT.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL.setEType(R().getEClassifier("EString")), i.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL.setEType(R().getEClassifier("EString"));
  }
}
class g extends W {
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
    return i.Literals.IMAGE_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(g.IMAGES_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.IMAGES_SETTINGS,
      merge: () => !1
    });
  }
  get images() {
    return this._images || (this._images = Ae(this, this.eClass().getEStructuralFeature("images"))), this._images;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.IMAGES_SETTINGS:
        return this.imagesSettings;
      case g.IMAGES:
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
      case g.IMAGES_SETTINGS:
        this.imagesSettings = t, super.eSet(e, t);
        break;
      case g.IMAGES:
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
      case g.IMAGES_SETTINGS:
        return this._imagesSettings !== void 0;
      case g.IMAGES:
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
      case g.IMAGES_SETTINGS:
        this._imagesSettings = void 0;
        return;
      case g.IMAGES:
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
const Ce = ["src"], De = {
  key: 1,
  class: "slideshow-container"
}, Ne = { class: "slideshow-nav slideshow-nav--prev" }, Me = ["src", "onClick", "onContextmenu"], ye = { class: "slideshow-nav slideshow-nav--next" }, Fe = /* @__PURE__ */ de({
  __name: "ImageWidget",
  props: /* @__PURE__ */ he({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(r) {
    const e = r, { t } = _e("image"), { id: a } = me(e), s = Ie(r, "configv"), l = pe(Le.TINY_EMITTER), o = (I) => {
      a?.value && l.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: a.value,
        payload: { imageUrl: I, widgetId: a.value, timestamp: Date.now() }
      });
    }, d = (I) => {
      a?.value && l.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: a.value,
        payload: { imageUrl: I, widgetId: a.value, timestamp: Date.now() }
      });
    }, S = new g();
    $(() => {
      s.value && Object.assign(s.value, {
        ...z(S),
        ...z(s.value)
      });
    });
    const _ = G(() => s.value.imagesSettings?.fit?.value), h = G(() => s.value.imagesSettings?.diashowInterval?.value), v = G(() => ({
      none: "",
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down"
    })[_.value?.toLowerCase() || "none"] || "");
    let m = null;
    const n = Ee(0), Y = () => {
      n.value < s.value.images.length - 1 && n.value++;
    }, ae = () => {
      n.value > 0 && n.value--;
    }, B = () => {
      m && clearInterval(m), (h.value ?? 0) > 0 && (m = setInterval(() => {
        if (n.value === s.value.images.length - 1) {
          n.value = 0;
          return;
        }
        Y();
      }, (h.value ?? 1) * 1e3));
    };
    $(() => {
      B();
    }), O(() => h.value, B);
    const H = (I) => I;
    O(
      () => s.value.images?.length,
      (I, p) => {
        p > I && n.value >= I && (n.value = I - 1);
      }
    );
    const k = G(() => s.value.images?.length > 0 ? s.value.images.length - 1 : 0);
    return O(k, () => {
      n.value = k.value;
    }), (I, p) => s.value.images?.length <= 1 ? (D(), C("img", {
      key: 0,
      class: K(["w-full h-full cursor-pointer", v.value]),
      src: H(s.value.images[0]?.url ?? ""),
      onClick: p[0] || (p[0] = (w) => o(s.value.images[0]?.url ?? "")),
      onContextmenu: p[1] || (p[1] = X((w) => d(s.value.images[0]?.url ?? ""), ["prevent"]))
    }, null, 42, Ce)) : (D(), C("div", De, [
      N("div", Ne, [
        M(A(J), {
          intent: "quiet",
          class: "slideshow-nav__button",
          title: A(t)("Widget.previous"),
          disabled: n.value === 0,
          onClick: p[2] || (p[2] = (w) => ae())
        }, {
          default: j(() => [
            M(A(Z), { name: "chevron_left" })
          ]),
          _: 1
        }, 8, ["title", "disabled"])
      ]),
      N("div", {
        class: "slideshow-track",
        style: q({ transform: `translateX(-${100 * n.value}%)` })
      }, [
        (D(!0), C(fe, null, Se(s.value.images, (w, re) => (D(), C("div", {
          key: w.id,
          class: "slideshow-slide",
          style: q({ transform: `translateX(${100 * re}%)` })
        }, [
          N("img", {
            class: K(["w-full h-full cursor-pointer", v.value]),
            src: H(w.url ?? ""),
            onClick: (ne) => o(w.url ?? ""),
            onContextmenu: X((ne) => d(w.url ?? ""), ["prevent"])
          }, null, 42, Me)
        ], 4))), 128))
      ], 4),
      N("div", ye, [
        M(A(J), {
          intent: "quiet",
          class: "slideshow-nav__button",
          title: A(t)("Widget.next"),
          disabled: n.value === s.value.images?.length - 1,
          onClick: p[3] || (p[3] = (w) => Y())
        }, {
          default: j(() => [
            M(A(Z), { name: "chevron_right" })
          ]),
          _: 1
        }, 8, ["title", "disabled"])
      ])
    ]));
  }
}), Re = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [a, s] of e)
    t[a] = s;
  return t;
}, Ue = /* @__PURE__ */ Re(Fe, [["__scopeId", "data-v-9d924243"]]), be = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: E
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: f
  }
], xe = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="picturesGroup" layout="VERTICAL" label="image:Form.picturesGroup">
      <!-- A list: each entry is a form of its own, built from
           ImageGalleryItem. -->
      <fields xsi:type="uimodel:InputWidget"
          name="images"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings/images"
          label="image:Form.images"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="displayGroup" layout="VERTICAL" label="image:Form.displayGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="imagesSettings"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings/imagesSettings"
          label="image:Form.imagesSettings"/>
    </fields>

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
        label="image:FormItem.url"
        placeholder="https://…"/>
  </components>
</uimodel:UIModel>
`, We = `<?xml version="1.0" encoding="UTF-8"?>
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
        label="image:FormGallery.fit">
      <values>none</values>
      <values>contain</values>
      <values>cover</values>
      <values>fill</values>
      <values>scale-down</values>
    </fields>
    <fields xsi:type="uimodel:NumberWidget"
        name="diashowInterval"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.image#//GallerySettings/diashowInterval"
        label="image:FormGallery.diashowInterval" min="0" step="1"/>
  </components>
</uimodel:UIModel>
`, Pe = { name: "Bild", previous: "Vorheriges Bild", next: "Nächstes Bild" }, Ve = { fit: "Einpassen", diashowInterval: "Wechsel alle (Sekunden)" }, Ye = { url: "Adresse" }, Be = { picturesGroup: "Bilder", images: "Bilder", displayGroup: "Darstellung", imagesSettings: "Anzeige" }, He = {
  Widget: Pe,
  FormGallery: Ve,
  FormItem: Ye,
  Form: Be
}, ke = { name: "Image", previous: "Previous image", next: "Next image" }, $e = { fit: "Fit", diashowInterval: "Change every (seconds)" }, Xe = { url: "Address" }, Ke = { picturesGroup: "Images", images: "Images", displayGroup: "Display", imagesSettings: "Display" }, je = {
  Widget: ke,
  FormGallery: $e,
  FormItem: Xe,
  Form: Ke
};
var qe = Object.getOwnPropertyDescriptor, ze = (r, e, t, a) => {
  for (var s = a > 1 ? void 0 : a ? qe(e, t) : e, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (s = o(s) || s);
  return s;
};
const ie = "image";
let Q = class {
  namespace = ie;
  resources = {
    de: He,
    en: je
  };
};
Q = ze([
  te({
    service: ["Translations"],
    properties: { "i18n.namespace": ie }
  })
], Q);
var Je = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, V = (r, e, t, a) => {
  for (var s = a > 1 ? void 0 : a ? Ze(e, t) : e, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (s = (a ? o(e, t, s) : o(s)) || s);
  return a && s && Je(e, t, s), s;
}, Qe = (r, e) => (t, a) => e(t, a, r);
le.eINSTANCE;
i.eINSTANCE;
const b = "ImageWidget";
let x = class {
  constructor(r) {
    this.events = r;
  }
  type = b;
  component = Ue;
  supportedDSTypes = [];
  icon = Ge;
  name = "Image";
  nameKey = "image:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: xe,
    uri: "/image-settings.ui.xmi",
    ePackage: () => i.eINSTANCE,
    create: () => new g(),
    /* Forms for the classes that appear inside this one - the pictures of
     * the list, and the display options it contains. */
    entryForms: [
      { xmi: Oe, uri: "/image-item.ui.xmi" },
      { xmi: We, uri: "/image-gallery.ui.xmi" }
    ]
  };
  register() {
    this.events.registerWidget(b, be);
  }
  unregister() {
    this.events.unregisterWidget(b);
  }
};
V([
  ue()
], x.prototype, "register", 1);
V([
  ce()
], x.prototype, "unregister", 1);
x = V([
  te({
    service: [Te],
    properties: { "widget.type": b }
  }),
  Qe(0, ge(oe))
], x);
export {
  g as ImageSettingsImpl,
  Q as ImageTranslations,
  Ue as ImageWidget,
  x as ImageWidgetProvider,
  i as ImagesettingsPackage,
  We as galleryFormXmi,
  Oe as imageItemFormXmi,
  xe as imageSettingsFormXmi
};
