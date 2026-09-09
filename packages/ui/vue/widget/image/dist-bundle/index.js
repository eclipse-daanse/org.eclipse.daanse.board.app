(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".slideshow-container[data-v-a4f596a6]{width:100%;height:100%;overflow:hidden;position:relative}.slideshow-track[data-v-a4f596a6]{width:100%;height:100%;overflow:visible;position:relative;transition:transform .3s ease-in-out}.slideshow-slide[data-v-a4f596a6]{width:100%;height:100%;position:absolute;top:0;left:0}.slideshow-nav[data-v-a4f596a6]{position:absolute;top:50%;width:32px;height:32px;transform:translateY(-50%);z-index:10;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center}.slideshow-nav--prev[data-v-a4f596a6]{left:40px}.slideshow-nav--next[data-v-a4f596a6]{right:40px}.slideshow-nav__button[data-v-a4f596a6]{width:100%;height:100%;min-width:0;padding:0;color:#fff}.slideshow-nav__button[data-v-a4f596a6]:hover:not(:disabled){color:#fff;background:#ffffff26}\n";})();
import { PayloadImpl as Z, EventsPackage as ie, EVENT_REGISTRY_ID as ae } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as re, deactivate as ne, component as le, inject as oe } from "@eclipse-daanse/tsm";
import { defineComponent as ue, mergeModels as ce, toRefs as he, useModel as ge, inject as de, onMounted as k, computed as T, ref as Ie, watch as O, createElementBlock as C, openBlock as G, withModifiers as X, normalizeClass as K, createElementVNode as D, createVNode as N, unref as M, withCtx as j, normalizeStyle as $, Fragment as Ee, renderList as me } from "vue";
import { VariableWrapper as A, plainSettings as q } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as Y, BasicEFactory as pe, BasicEPackage as fe, EPackageRegistry as Q, BasicEClass as L, BasicEReference as y, BasicEAttribute as R, getEcorePackage as U, createContainmentEList as Se } from "@emfts/core";
import { DButton as z, DIcon as J } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as ve } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: _e } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), we = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
class l extends Y {
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
    return s.Literals.IMAGE_GALLERY_ITEM;
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
      getFeature: () => this.eClass().getEStructuralFeature(l.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case l.ID:
        return this.id;
      case l.URL:
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
      case l.ID:
        this.id = t, super.eSet(e, t);
        break;
      case l.URL:
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
      case l.ID:
        return this._id !== void 0;
      case l.URL:
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
      case l.ID:
        this._id = void 0;
        return;
      case l.URL:
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
class o extends Y {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  static DIASHOW_INTERVAL = 1;
  // Private fields
  _fit = new A();
  _diashowInterval = new A();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.GALLERY_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(o.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.FIT,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.DIASHOW_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.DIASHOW_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case o.FIT:
        return this.fit;
      case o.DIASHOW_INTERVAL:
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
      case o.FIT:
        this.fit = t, super.eSet(e, t);
        break;
      case o.DIASHOW_INTERVAL:
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
      case o.FIT:
        return this._fit !== new A();
      case o.DIASHOW_INTERVAL:
        return this._diashowInterval !== new A();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case o.FIT:
        this._fit = new A();
        return;
      case o.DIASHOW_INTERVAL:
        this._diashowInterval = new A();
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
class f extends Z {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.IMAGE_CLICK_PAYLOAD;
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
class S extends Z {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.IMAGE_RIGHT_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(S.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case S.IMAGE_URL:
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
      case S.IMAGE_URL:
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
      case S.IMAGE_URL:
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
      case S.IMAGE_URL:
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
class V extends pe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new V()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new ImageSettings instance
   */
  createImageSettings() {
    return new u();
  }
  /**
   * Create a new ImageGalleryItem instance
   */
  createImageGalleryItem() {
    return new l();
  }
  /**
   * Create a new GallerySettings instance
   */
  createGallerySettings() {
    return new o();
  }
  /**
   * Create a new ImageClickPayload instance
   */
  createImageClickPayload() {
    return new f();
  }
  /**
   * Create a new ImageRightClickPayload instance
   */
  createImageRightClickPayload() {
    return new S();
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
function F(n) {
  const e = Q.INSTANCE.getEPackage(n);
  if (!e)
    throw new Error(`EPackage '${n}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ImagesettingsPackage.`);
  return e;
}
class s extends fe {
  static eNAME = "imagesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.image";
  static eNS_PREFIX = "imagesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
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
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Q.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(V.eINSTANCE);
    const e = new L();
    e.setName("ImageSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.IMAGE_SETTINGS = e;
    const t = new y();
    t.setContainment(!0), t.setName("imagesSettings"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS = t;
    const i = new y();
    i.setContainment(!0), i.setName("images"), i.setLowerBound(0), i.setUpperBound(-1), e.getEStructuralFeatures().push(i), s.Literals.IMAGE_SETTINGS__IMAGES = i;
    const a = new L();
    a.setName("ImageGalleryItem"), a.setAbstract(!1), a.setInterface(!1), this.getEClassifiers().push(a), a.setEPackage(this), s.Literals.IMAGE_GALLERY_ITEM = a;
    const c = new R();
    c.setName("id"), c.setLowerBound(0), c.setUpperBound(1), a.getEStructuralFeatures().push(c), s.Literals.IMAGE_GALLERY_ITEM__ID = c;
    const h = new R();
    h.setName("url"), h.setLowerBound(0), h.setUpperBound(1), a.getEStructuralFeatures().push(h), s.Literals.IMAGE_GALLERY_ITEM__URL = h;
    const d = new L();
    d.setName("GallerySettings"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), s.Literals.GALLERY_SETTINGS = d;
    const _ = new y();
    _.setContainment(!1), _.setName("fit"), _.setLowerBound(0), _.setUpperBound(1), d.getEStructuralFeatures().push(_), s.Literals.GALLERY_SETTINGS__FIT = _;
    const I = new y();
    I.setContainment(!1), I.setName("diashowInterval"), I.setLowerBound(0), I.setUpperBound(1), d.getEStructuralFeatures().push(I), s.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL = I;
    const E = new L();
    E.setName("ImageClickPayload"), E.setAbstract(!1), E.setInterface(!1), this.getEClassifiers().push(E), E.setEPackage(this), s.Literals.IMAGE_CLICK_PAYLOAD = E;
    const p = new R();
    p.setName("imageUrl"), p.setLowerBound(0), p.setUpperBound(1), E.getEStructuralFeatures().push(p), s.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL = p;
    const r = new L();
    r.setName("ImageRightClickPayload"), r.setAbstract(!1), r.setInterface(!1), this.getEClassifiers().push(r), r.setEPackage(this), s.Literals.IMAGE_RIGHT_CLICK_PAYLOAD = r;
    const v = new R();
    v.setName("imageUrl"), v.setLowerBound(0), v.setUpperBound(1), r.getEStructuralFeatures().push(v), s.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL = v, s.Literals.IMAGE_CLICK_PAYLOAD.getESuperTypes().push(F("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), s.Literals.IMAGE_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(F("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), s.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS.setEType(s.Literals.GALLERY_SETTINGS), s.Literals.IMAGE_SETTINGS__IMAGES.setEType(s.Literals.IMAGE_GALLERY_ITEM), s.Literals.IMAGE_GALLERY_ITEM__ID.setEType(U().getEClassifier("EString")), s.Literals.IMAGE_GALLERY_ITEM__URL.setEType(U().getEClassifier("EString")), s.Literals.GALLERY_SETTINGS__FIT.setEType(F("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), s.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL.setEType(F("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), s.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL.setEType(U().getEClassifier("EString")), s.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL.setEType(U().getEClassifier("EString"));
  }
}
class u extends Y {
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
    return s.Literals.IMAGE_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(u.IMAGES_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.IMAGES_SETTINGS,
      merge: () => !1
    });
  }
  get images() {
    return this._images || (this._images = Se(this, this.eClass().getEStructuralFeature("images"))), this._images;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.IMAGES_SETTINGS:
        return this.imagesSettings;
      case u.IMAGES:
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
      case u.IMAGES_SETTINGS:
        this.imagesSettings = t, super.eSet(e, t);
        break;
      case u.IMAGES:
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
      case u.IMAGES_SETTINGS:
        return this._imagesSettings !== void 0;
      case u.IMAGES:
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
      case u.IMAGES_SETTINGS:
        this._imagesSettings = void 0;
        return;
      case u.IMAGES:
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
const Ae = ["src"], Le = {
  key: 1,
  class: "slideshow-container"
}, Te = { class: "slideshow-nav slideshow-nav--prev" }, Ce = ["src", "onClick", "onContextmenu"], Ge = { class: "slideshow-nav slideshow-nav--next" }, De = /* @__PURE__ */ ue({
  __name: "ImageWidget",
  props: /* @__PURE__ */ ce({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(n) {
    const e = n, { id: t } = he(e), i = ge(n, "configv"), a = de(_e.TINY_EMITTER), c = (g) => {
      t?.value && a.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: t.value,
        payload: { imageUrl: g, widgetId: t.value, timestamp: Date.now() }
      });
    }, h = (g) => {
      t?.value && a.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: t.value,
        payload: { imageUrl: g, widgetId: t.value, timestamp: Date.now() }
      });
    }, d = new u();
    k(() => {
      i.value && Object.assign(i.value, {
        ...q(d),
        ...q(i.value)
      });
    });
    const _ = T(() => i.value.imagesSettings?.fit?.value), I = T(() => i.value.imagesSettings?.diashowInterval?.value), E = T(() => ({
      none: "",
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down"
    })[_.value?.toLowerCase() || "none"] || "");
    let p = null;
    const r = Ie(0), v = () => {
      r.value < i.value.images.length - 1 && r.value++;
    }, ee = () => {
      r.value > 0 && r.value--;
    }, W = () => {
      p && clearInterval(p), (I.value ?? 0) > 0 && (p = setInterval(() => {
        if (r.value === i.value.images.length - 1) {
          r.value = 0;
          return;
        }
        v();
      }, (I.value ?? 1) * 1e3));
    };
    k(() => {
      W();
    }), O(() => I.value, W);
    const B = (g) => g;
    O(
      () => i.value.images?.length,
      (g, m) => {
        m > g && r.value >= g && (r.value = g - 1);
      }
    );
    const H = T(() => i.value.images?.length > 0 ? i.value.images.length - 1 : 0);
    return O(H, () => {
      r.value = H.value;
    }), (g, m) => i.value.images?.length <= 1 ? (G(), C("img", {
      key: 0,
      class: K(["w-full h-full cursor-pointer", E.value]),
      src: B(i.value.images[0]?.url ?? ""),
      onClick: m[0] || (m[0] = (w) => c(i.value.images[0]?.url ?? "")),
      onContextmenu: m[1] || (m[1] = X((w) => h(i.value.images[0]?.url ?? ""), ["prevent"]))
    }, null, 42, Ae)) : (G(), C("div", Le, [
      D("div", Te, [
        N(M(z), {
          intent: "quiet",
          class: "slideshow-nav__button",
          title: "Previous image",
          disabled: r.value === 0,
          onClick: m[2] || (m[2] = (w) => ee())
        }, {
          default: j(() => [
            N(M(J), { name: "chevron_left" })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      D("div", {
        class: "slideshow-track",
        style: $({ transform: `translateX(-${100 * r.value}%)` })
      }, [
        (G(!0), C(Ee, null, me(i.value.images, (w, te) => (G(), C("div", {
          key: w.id,
          class: "slideshow-slide",
          style: $({ transform: `translateX(${100 * te}%)` })
        }, [
          D("img", {
            class: K(["w-full h-full cursor-pointer", E.value]),
            src: B(w.url ?? ""),
            onClick: (se) => c(w.url ?? ""),
            onContextmenu: X((se) => h(w.url ?? ""), ["prevent"])
          }, null, 42, Ce)
        ], 4))), 128))
      ], 4),
      D("div", Ge, [
        N(M(z), {
          intent: "quiet",
          class: "slideshow-nav__button",
          title: "Next image",
          disabled: r.value === i.value.images?.length - 1,
          onClick: m[3] || (m[3] = (w) => v())
        }, {
          default: j(() => [
            N(M(J), { name: "chevron_right" })
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ne = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, a] of e)
    t[i] = a;
  return t;
}, Me = /* @__PURE__ */ Ne(De, [["__scopeId", "data-v-a4f596a6"]]), ye = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: f
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: S
  }
], Re = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Ue = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Fe = `<?xml version="1.0" encoding="UTF-8"?>
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
var be = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, P = (n, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? xe(e, t) : e, c = n.length - 1, h; c >= 0; c--)
    (h = n[c]) && (a = (i ? h(e, t, a) : h(a)) || a);
  return i && a && be(e, t, a), a;
}, Oe = (n, e) => (t, i) => e(t, i, n);
ie.eINSTANCE;
s.eINSTANCE;
const b = "ImageWidget";
let x = class {
  constructor(n) {
    this.events = n;
  }
  type = b;
  component = Me;
  supportedDSTypes = [];
  icon = we;
  name = "Image";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Re,
    uri: "/image-settings.ui.xmi",
    ePackage: () => s.eINSTANCE,
    create: () => new u(),
    /* Forms for the classes that appear inside this one - the pictures of
     * the list, and the display options it contains. */
    entryForms: [
      { xmi: Ue, uri: "/image-item.ui.xmi" },
      { xmi: Fe, uri: "/image-gallery.ui.xmi" }
    ]
  };
  register() {
    this.events.registerWidget(b, ye);
  }
  unregister() {
    this.events.unregisterWidget(b);
  }
};
P([
  re()
], x.prototype, "register", 1);
P([
  ne()
], x.prototype, "unregister", 1);
x = P([
  le({
    service: [ve],
    properties: { "widget.type": b }
  }),
  Oe(0, oe(ae))
], x);
export {
  u as ImageSettingsImpl,
  Me as ImageWidget,
  x as ImageWidgetProvider,
  s as ImagesettingsPackage,
  Fe as galleryFormXmi,
  Ue as imageItemFormXmi,
  Re as imageSettingsFormXmi
};
