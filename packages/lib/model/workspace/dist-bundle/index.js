import { BasicEObject as G, createContainmentEList as re, BasicEFactory as ce, BasicEPackage as ge, EPackageRegistry as le, BasicEClass as U, BasicEReference as O, BasicEAttribute as n, getEcorePackage as o } from "@emfts/core";
const { serviceId: Ee } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class E extends G {
  // Feature ID Constants (eLiterals)
  static CONNECTIONS = 0;
  static DATASOURCES = 1;
  static PAGES = 2;
  static DEFAULT_PAGE = 3;
  // Private fields
  _connections;
  _datasources;
  _pages;
  _defaultPage;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = re(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  get datasources() {
    return this._datasources || (this._datasources = re(this, this.eClass().getEStructuralFeature("datasources"))), this._datasources;
  }
  get pages() {
    return this._pages || (this._pages = re(this, this.eClass().getEStructuralFeature("pages"))), this._pages;
  }
  get defaultPage() {
    return this._defaultPage;
  }
  set defaultPage(e) {
    const t = this._defaultPage;
    this._defaultPage = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(E.DEFAULT_PAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.DEFAULT_PAGE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case E.CONNECTIONS:
        return this.connections;
      case E.DATASOURCES:
        return this.datasources;
      case E.PAGES:
        return this.pages;
      case E.DEFAULT_PAGE:
        return this.defaultPage;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case E.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
        break;
      case E.DATASOURCES:
        this.datasources.clear(), this.datasources.addAll(t), super.eSet(e, t);
        break;
      case E.PAGES:
        this.pages.clear(), this.pages.addAll(t), super.eSet(e, t);
        break;
      case E.DEFAULT_PAGE:
        this.defaultPage = t, super.eSet(e, t);
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
      case E.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case E.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      case E.PAGES:
        return this._pages !== void 0 && !this._pages.isEmpty();
      case E.DEFAULT_PAGE:
        return this._defaultPage !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case E.CONNECTIONS:
        this._connections && this._connections.clear();
        return;
      case E.DATASOURCES:
        this._datasources && this._datasources.clear();
        return;
      case E.PAGES:
        this._pages && this._pages.clear();
        return;
      case E.DEFAULT_PAGE:
        this._defaultPage = void 0;
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
      connections: this.connections?.toArray?.() ?? this.connections,
      datasources: this.datasources?.toArray?.() ?? this.datasources,
      pages: this.pages?.toArray?.() ?? this.pages,
      defaultPage: this.defaultPage
    };
  }
}
class i extends G {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static NAME = 1;
  static DESCRIPTION = 2;
  static ICON = 3;
  static VISIBLE_IN_NAVIGATION = 4;
  static LAYOUT_ID = 5;
  static LAYOUT_SETTINGS = 6;
  static BACKGROUND_COLOR = 7;
  static BACKGROUND_IMAGE = 8;
  static BACKGROUND_SIZE = 9;
  static BACKGROUND_POSITION = 10;
  static BACKGROUND_REPEAT = 11;
  static WIDGETS = 12;
  static LAYOUT = 13;
  // Private fields
  _id = "";
  _name;
  _description;
  _icon;
  _visibleInNavigation;
  _layoutId;
  _layoutSettings;
  _backgroundColor;
  _backgroundImage;
  _backgroundSize;
  _backgroundPosition;
  _backgroundRepeat;
  _widgets;
  _layout;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.PAGE;
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
      getFeature: () => this.eClass().getEStructuralFeature(i.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.ID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.NAME,
      merge: () => !1
    });
  }
  get description() {
    return this._description;
  }
  set description(e) {
    const t = this._description;
    this._description = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.DESCRIPTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.DESCRIPTION,
      merge: () => !1
    });
  }
  get icon() {
    return this._icon;
  }
  set icon(e) {
    const t = this._icon;
    this._icon = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.ICON,
      merge: () => !1
    });
  }
  get visibleInNavigation() {
    return this._visibleInNavigation;
  }
  set visibleInNavigation(e) {
    const t = this._visibleInNavigation;
    this._visibleInNavigation = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.VISIBLE_IN_NAVIGATION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VISIBLE_IN_NAVIGATION,
      merge: () => !1
    });
  }
  get layoutId() {
    return this._layoutId;
  }
  set layoutId(e) {
    const t = this._layoutId;
    this._layoutId = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.LAYOUT_ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.LAYOUT_ID,
      merge: () => !1
    });
  }
  get layoutSettings() {
    return this._layoutSettings;
  }
  set layoutSettings(e) {
    const t = this._layoutSettings;
    this._layoutSettings = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.LAYOUT_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.LAYOUT_SETTINGS,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const t = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get backgroundImage() {
    return this._backgroundImage;
  }
  set backgroundImage(e) {
    const t = this._backgroundImage;
    this._backgroundImage = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_IMAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_IMAGE,
      merge: () => !1
    });
  }
  get backgroundSize() {
    return this._backgroundSize;
  }
  set backgroundSize(e) {
    const t = this._backgroundSize;
    this._backgroundSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_SIZE,
      merge: () => !1
    });
  }
  get backgroundPosition() {
    return this._backgroundPosition;
  }
  set backgroundPosition(e) {
    const t = this._backgroundPosition;
    this._backgroundPosition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_POSITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_POSITION,
      merge: () => !1
    });
  }
  get backgroundRepeat() {
    return this._backgroundRepeat;
  }
  set backgroundRepeat(e) {
    const t = this._backgroundRepeat;
    this._backgroundRepeat = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_REPEAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_REPEAT,
      merge: () => !1
    });
  }
  get widgets() {
    return this._widgets || (this._widgets = re(this, this.eClass().getEStructuralFeature("widgets"))), this._widgets;
  }
  get layout() {
    return this._layout || (this._layout = re(this, this.eClass().getEStructuralFeature("layout"))), this._layout;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        return this.id;
      case i.NAME:
        return this.name;
      case i.DESCRIPTION:
        return this.description;
      case i.ICON:
        return this.icon;
      case i.VISIBLE_IN_NAVIGATION:
        return this.visibleInNavigation;
      case i.LAYOUT_ID:
        return this.layoutId;
      case i.LAYOUT_SETTINGS:
        return this.layoutSettings;
      case i.BACKGROUND_COLOR:
        return this.backgroundColor;
      case i.BACKGROUND_IMAGE:
        return this.backgroundImage;
      case i.BACKGROUND_SIZE:
        return this.backgroundSize;
      case i.BACKGROUND_POSITION:
        return this.backgroundPosition;
      case i.BACKGROUND_REPEAT:
        return this.backgroundRepeat;
      case i.WIDGETS:
        return this.widgets;
      case i.LAYOUT:
        return this.layout;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        this.id = t, super.eSet(e, t);
        break;
      case i.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case i.DESCRIPTION:
        this.description = t, super.eSet(e, t);
        break;
      case i.ICON:
        this.icon = t, super.eSet(e, t);
        break;
      case i.VISIBLE_IN_NAVIGATION:
        this.visibleInNavigation = t, super.eSet(e, t);
        break;
      case i.LAYOUT_ID:
        this.layoutId = t, super.eSet(e, t);
        break;
      case i.LAYOUT_SETTINGS:
        this.layoutSettings = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_IMAGE:
        this.backgroundImage = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_SIZE:
        this.backgroundSize = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_POSITION:
        this.backgroundPosition = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_REPEAT:
        this.backgroundRepeat = t, super.eSet(e, t);
        break;
      case i.WIDGETS:
        this.widgets.clear(), this.widgets.addAll(t), super.eSet(e, t);
        break;
      case i.LAYOUT:
        this.layout.clear(), this.layout.addAll(t), super.eSet(e, t);
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
      case i.ID:
        return this._id !== "";
      case i.NAME:
        return this._name !== void 0;
      case i.DESCRIPTION:
        return this._description !== void 0;
      case i.ICON:
        return this._icon !== void 0;
      case i.VISIBLE_IN_NAVIGATION:
        return this._visibleInNavigation !== void 0;
      case i.LAYOUT_ID:
        return this._layoutId !== void 0;
      case i.LAYOUT_SETTINGS:
        return this._layoutSettings !== void 0;
      case i.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case i.BACKGROUND_IMAGE:
        return this._backgroundImage !== void 0;
      case i.BACKGROUND_SIZE:
        return this._backgroundSize !== void 0;
      case i.BACKGROUND_POSITION:
        return this._backgroundPosition !== void 0;
      case i.BACKGROUND_REPEAT:
        return this._backgroundRepeat !== void 0;
      case i.WIDGETS:
        return this._widgets !== void 0 && !this._widgets.isEmpty();
      case i.LAYOUT:
        return this._layout !== void 0 && !this._layout.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        this._id = "";
        return;
      case i.NAME:
        this._name = void 0;
        return;
      case i.DESCRIPTION:
        this._description = void 0;
        return;
      case i.ICON:
        this._icon = void 0;
        return;
      case i.VISIBLE_IN_NAVIGATION:
        this._visibleInNavigation = void 0;
        return;
      case i.LAYOUT_ID:
        this._layoutId = void 0;
        return;
      case i.LAYOUT_SETTINGS:
        this._layoutSettings = void 0;
        return;
      case i.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case i.BACKGROUND_IMAGE:
        this._backgroundImage = void 0;
        return;
      case i.BACKGROUND_SIZE:
        this._backgroundSize = void 0;
        return;
      case i.BACKGROUND_POSITION:
        this._backgroundPosition = void 0;
        return;
      case i.BACKGROUND_REPEAT:
        this._backgroundRepeat = void 0;
        return;
      case i.WIDGETS:
        this._widgets && this._widgets.clear();
        return;
      case i.LAYOUT:
        this._layout && this._layout.clear();
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
      name: this.name,
      description: this.description,
      icon: this.icon,
      visibleInNavigation: this.visibleInNavigation,
      layoutId: this.layoutId,
      layoutSettings: this.layoutSettings,
      backgroundColor: this.backgroundColor,
      backgroundImage: this.backgroundImage,
      backgroundSize: this.backgroundSize,
      backgroundPosition: this.backgroundPosition,
      backgroundRepeat: this.backgroundRepeat,
      widgets: this.widgets?.toArray?.() ?? this.widgets,
      layout: this.layout?.toArray?.() ?? this.layout
    };
  }
}
class u extends G {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static TYPE = 1;
  static DATASOURCE = 2;
  static CONFIG = 3;
  static WRAPPER_CONFIG = 4;
  // Private fields
  _uid = "";
  _type;
  _datasource;
  _config;
  _wrapperConfig;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WIDGET;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(e) {
    const t = this._uid;
    this._uid = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.UID,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(e) {
    const t = this._type;
    this._type = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.TYPE,
      merge: () => !1
    });
  }
  get datasource() {
    return this._datasource;
  }
  set datasource(e) {
    const t = this._datasource;
    this._datasource = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.DATASOURCE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.DATASOURCE,
      merge: () => !1
    });
  }
  get config() {
    return this._config;
  }
  set config(e) {
    const t = this._config;
    this._config = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.CONFIG,
      merge: () => !1
    });
  }
  get wrapperConfig() {
    return this._wrapperConfig;
  }
  set wrapperConfig(e) {
    const t = this._wrapperConfig;
    this._wrapperConfig = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.WRAPPER_CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.WRAPPER_CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.UID:
        return this.uid;
      case u.TYPE:
        return this.type;
      case u.DATASOURCE:
        return this.datasource;
      case u.CONFIG:
        return this.config;
      case u.WRAPPER_CONFIG:
        return this.wrapperConfig;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case u.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case u.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case u.DATASOURCE:
        this.datasource = t, super.eSet(e, t);
        break;
      case u.CONFIG:
        this.config = t, super.eSet(e, t);
        break;
      case u.WRAPPER_CONFIG:
        this.wrapperConfig = t, super.eSet(e, t);
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
      case u.UID:
        return this._uid !== "";
      case u.TYPE:
        return this._type !== void 0;
      case u.DATASOURCE:
        return this._datasource !== void 0;
      case u.CONFIG:
        return this._config !== void 0;
      case u.WRAPPER_CONFIG:
        return this._wrapperConfig !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.UID:
        this._uid = "";
        return;
      case u.TYPE:
        this._type = void 0;
        return;
      case u.DATASOURCE:
        this._datasource = void 0;
        return;
      case u.CONFIG:
        this._config = void 0;
        return;
      case u.WRAPPER_CONFIG:
        this._wrapperConfig = void 0;
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
      uid: this.uid,
      type: this.type,
      datasource: this.datasource,
      config: this.config,
      wrapperConfig: this.wrapperConfig
    };
  }
}
class r extends G {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static X = 1;
  static Y = 2;
  static Z = 3;
  static WIDTH = 4;
  static HEIGHT = 5;
  static GROUP = 6;
  // Private fields
  _id = "";
  _x = 0;
  _y = 0;
  _z = 0;
  _width = 0;
  _height = 0;
  _group;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.LAYOUT_ITEM;
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
      getFeature: () => this.eClass().getEStructuralFeature(r.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.ID,
      merge: () => !1
    });
  }
  get x() {
    return this._x;
  }
  set x(e) {
    const t = this._x;
    this._x = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.X),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.X,
      merge: () => !1
    });
  }
  get y() {
    return this._y;
  }
  set y(e) {
    const t = this._y;
    this._y = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.Y),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.Y,
      merge: () => !1
    });
  }
  get z() {
    return this._z;
  }
  set z(e) {
    const t = this._z;
    this._z = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.Z),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.Z,
      merge: () => !1
    });
  }
  get width() {
    return this._width;
  }
  set width(e) {
    const t = this._width;
    this._width = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.WIDTH,
      merge: () => !1
    });
  }
  get height() {
    return this._height;
  }
  set height(e) {
    const t = this._height;
    this._height = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.HEIGHT,
      merge: () => !1
    });
  }
  get group() {
    return this._group;
  }
  set group(e) {
    const t = this._group;
    this._group = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.GROUP,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ID:
        return this.id;
      case r.X:
        return this.x;
      case r.Y:
        return this.y;
      case r.Z:
        return this.z;
      case r.WIDTH:
        return this.width;
      case r.HEIGHT:
        return this.height;
      case r.GROUP:
        return this.group;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ID:
        this.id = t, super.eSet(e, t);
        break;
      case r.X:
        this.x = t, super.eSet(e, t);
        break;
      case r.Y:
        this.y = t, super.eSet(e, t);
        break;
      case r.Z:
        this.z = t, super.eSet(e, t);
        break;
      case r.WIDTH:
        this.width = t, super.eSet(e, t);
        break;
      case r.HEIGHT:
        this.height = t, super.eSet(e, t);
        break;
      case r.GROUP:
        this.group = t, super.eSet(e, t);
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
      case r.ID:
        return this._id !== "";
      case r.X:
        return this._x !== 0;
      case r.Y:
        return this._y !== 0;
      case r.Z:
        return this._z !== 0;
      case r.WIDTH:
        return this._width !== 0;
      case r.HEIGHT:
        return this._height !== 0;
      case r.GROUP:
        return this._group !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ID:
        this._id = "";
        return;
      case r.X:
        this._x = 0;
        return;
      case r.Y:
        this._y = 0;
        return;
      case r.Z:
        this._z = 0;
        return;
      case r.WIDTH:
        this._width = 0;
        return;
      case r.HEIGHT:
        this._height = 0;
        return;
      case r.GROUP:
        this._group = void 0;
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
      x: this.x,
      y: this.y,
      z: this.z,
      width: this.width,
      height: this.height,
      group: this.group
    };
  }
}
class a extends G {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONNECTION = 3;
  static CONFIG = 4;
  // Private fields
  _uid = "";
  _name;
  _type;
  _connection;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.DATASOURCE;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(e) {
    const t = this._uid;
    this._uid = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.UID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.NAME,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(e) {
    const t = this._type;
    this._type = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.TYPE,
      merge: () => !1
    });
  }
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.CONNECTION,
      merge: () => !1
    });
  }
  get config() {
    return this._config;
  }
  set config(e) {
    const t = this._config;
    this._config = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.UID:
        return this.uid;
      case a.NAME:
        return this.name;
      case a.TYPE:
        return this.type;
      case a.CONNECTION:
        return this.connection;
      case a.CONFIG:
        return this.config;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case a.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case a.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case a.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case a.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case a.CONFIG:
        this.config = t, super.eSet(e, t);
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
      case a.UID:
        return this._uid !== "";
      case a.NAME:
        return this._name !== void 0;
      case a.TYPE:
        return this._type !== void 0;
      case a.CONNECTION:
        return this._connection !== void 0;
      case a.CONFIG:
        return this._config !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.UID:
        this._uid = "";
        return;
      case a.NAME:
        this._name = void 0;
        return;
      case a.TYPE:
        this._type = void 0;
        return;
      case a.CONNECTION:
        this._connection = void 0;
        return;
      case a.CONFIG:
        this._config = void 0;
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
      uid: this.uid,
      name: this.name,
      type: this.type,
      connection: this.connection,
      config: this.config
    };
  }
}
class h extends G {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONFIG = 3;
  // Private fields
  _uid = "";
  _name;
  _type;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.CONNECTION;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(e) {
    const t = this._uid;
    this._uid = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.UID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.NAME,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(e) {
    const t = this._type;
    this._type = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.TYPE,
      merge: () => !1
    });
  }
  get config() {
    return this._config;
  }
  set config(e) {
    const t = this._config;
    this._config = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case h.UID:
        return this.uid;
      case h.NAME:
        return this.name;
      case h.TYPE:
        return this.type;
      case h.CONFIG:
        return this.config;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case h.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case h.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case h.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case h.CONFIG:
        this.config = t, super.eSet(e, t);
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
      case h.UID:
        return this._uid !== "";
      case h.NAME:
        return this._name !== void 0;
      case h.TYPE:
        return this._type !== void 0;
      case h.CONFIG:
        return this._config !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case h.UID:
        this._uid = "";
        return;
      case h.NAME:
        this._name = void 0;
        return;
      case h.TYPE:
        this._type = void 0;
        return;
      case h.CONFIG:
        this._config = void 0;
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
      uid: this.uid,
      name: this.name,
      type: this.type,
      config: this.config
    };
  }
}
class ue extends ce {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new ue()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new E();
  }
  /**
   * Create a new Page instance
   */
  createPage() {
    return new i();
  }
  /**
   * Create a new Widget instance
   */
  createWidget() {
    return new u();
  }
  /**
   * Create a new LayoutItem instance
   */
  createLayoutItem() {
    return new r();
  }
  /**
   * Create a new Datasource instance
   */
  createDatasource() {
    return new a();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new h();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "Workspace":
        return this.createWorkspace();
      case "Page":
        return this.createPage();
      case "Widget":
        return this.createWidget();
      case "LayoutItem":
        return this.createLayoutItem();
      case "Datasource":
        return this.createDatasource();
      case "Connection":
        return this.createConnection();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class s extends ge {
  static eNAME = "workspace";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.model.workspace";
  static eNS_PREFIX = "workspace";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    WORKSPACE: null,
    WORKSPACE__CONNECTIONS: null,
    WORKSPACE__DATASOURCES: null,
    WORKSPACE__PAGES: null,
    WORKSPACE__DEFAULT_PAGE: null,
    PAGE: null,
    PAGE__ID: null,
    PAGE__NAME: null,
    PAGE__DESCRIPTION: null,
    PAGE__ICON: null,
    PAGE__VISIBLE_IN_NAVIGATION: null,
    PAGE__LAYOUT_ID: null,
    PAGE__LAYOUT_SETTINGS: null,
    PAGE__BACKGROUND_COLOR: null,
    PAGE__BACKGROUND_IMAGE: null,
    PAGE__BACKGROUND_SIZE: null,
    PAGE__BACKGROUND_POSITION: null,
    PAGE__BACKGROUND_REPEAT: null,
    PAGE__WIDGETS: null,
    PAGE__LAYOUT: null,
    WIDGET: null,
    WIDGET__UID: null,
    WIDGET__TYPE: null,
    WIDGET__DATASOURCE: null,
    WIDGET__CONFIG: null,
    WIDGET__WRAPPER_CONFIG: null,
    LAYOUT_ITEM: null,
    LAYOUT_ITEM__ID: null,
    LAYOUT_ITEM__X: null,
    LAYOUT_ITEM__Y: null,
    LAYOUT_ITEM__Z: null,
    LAYOUT_ITEM__WIDTH: null,
    LAYOUT_ITEM__HEIGHT: null,
    LAYOUT_ITEM__GROUP: null,
    DATASOURCE: null,
    DATASOURCE__UID: null,
    DATASOURCE__NAME: null,
    DATASOURCE__TYPE: null,
    DATASOURCE__CONNECTION: null,
    DATASOURCE__CONFIG: null,
    CONNECTION: null,
    CONNECTION__UID: null,
    CONNECTION__NAME: null,
    CONNECTION__TYPE: null,
    CONNECTION__CONFIG: null
  };
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    le.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(ue.eINSTANCE);
    const e = new U();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.WORKSPACE = e;
    const t = new O();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), s.Literals.WORKSPACE__CONNECTIONS = t;
    const l = new O();
    l.setContainment(!0), l.setName("datasources"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), s.Literals.WORKSPACE__DATASOURCES = l;
    const C = new O();
    C.setContainment(!0), C.setName("pages"), C.setLowerBound(0), C.setUpperBound(-1), e.getEStructuralFeatures().push(C), s.Literals.WORKSPACE__PAGES = C;
    const A = new O();
    A.setContainment(!1), A.setName("defaultPage"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), s.Literals.WORKSPACE__DEFAULT_PAGE = A;
    const c = new U();
    c.setName("Page"), c.setAbstract(!1), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), s.Literals.PAGE = c;
    const F = new n();
    F.setName("id"), F.setLowerBound(1), F.setUpperBound(1), c.getEStructuralFeatures().push(F), s.Literals.PAGE__ID = F;
    const R = new n();
    R.setName("name"), R.setLowerBound(0), R.setUpperBound(1), c.getEStructuralFeatures().push(R), s.Literals.PAGE__NAME = R;
    const y = new n();
    y.setName("description"), y.setLowerBound(0), y.setUpperBound(1), c.getEStructuralFeatures().push(y), s.Literals.PAGE__DESCRIPTION = y;
    const L = new n();
    L.setName("icon"), L.setLowerBound(0), L.setUpperBound(1), c.getEStructuralFeatures().push(L), s.Literals.PAGE__ICON = L;
    const w = new n();
    w.setName("visibleInNavigation"), w.setLowerBound(0), w.setUpperBound(1), c.getEStructuralFeatures().push(w), s.Literals.PAGE__VISIBLE_IN_NAVIGATION = w;
    const b = new n();
    b.setName("layoutId"), b.setLowerBound(0), b.setUpperBound(1), c.getEStructuralFeatures().push(b), s.Literals.PAGE__LAYOUT_ID = b;
    const B = new n();
    B.setName("layoutSettings"), B.setLowerBound(0), B.setUpperBound(1), c.getEStructuralFeatures().push(B), s.Literals.PAGE__LAYOUT_SETTINGS = B;
    const v = new n();
    v.setName("backgroundColor"), v.setLowerBound(0), v.setUpperBound(1), c.getEStructuralFeatures().push(v), s.Literals.PAGE__BACKGROUND_COLOR = v;
    const p = new n();
    p.setName("backgroundImage"), p.setLowerBound(0), p.setUpperBound(1), c.getEStructuralFeatures().push(p), s.Literals.PAGE__BACKGROUND_IMAGE = p;
    const Y = new n();
    Y.setName("backgroundSize"), Y.setLowerBound(0), Y.setUpperBound(1), c.getEStructuralFeatures().push(Y), s.Literals.PAGE__BACKGROUND_SIZE = Y;
    const P = new n();
    P.setName("backgroundPosition"), P.setLowerBound(0), P.setUpperBound(1), c.getEStructuralFeatures().push(P), s.Literals.PAGE__BACKGROUND_POSITION = P;
    const M = new n();
    M.setName("backgroundRepeat"), M.setLowerBound(0), M.setUpperBound(1), c.getEStructuralFeatures().push(M), s.Literals.PAGE__BACKGROUND_REPEAT = M;
    const f = new O();
    f.setContainment(!0), f.setName("widgets"), f.setLowerBound(0), f.setUpperBound(-1), c.getEStructuralFeatures().push(f), s.Literals.PAGE__WIDGETS = f;
    const _ = new O();
    _.setContainment(!0), _.setName("layout"), _.setLowerBound(0), _.setUpperBound(-1), c.getEStructuralFeatures().push(_), s.Literals.PAGE__LAYOUT = _;
    const d = new U();
    d.setName("Widget"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), s.Literals.WIDGET = d;
    const K = new n();
    K.setName("uid"), K.setLowerBound(1), K.setUpperBound(1), d.getEStructuralFeatures().push(K), s.Literals.WIDGET__UID = K;
    const V = new n();
    V.setName("type"), V.setLowerBound(0), V.setUpperBound(1), d.getEStructuralFeatures().push(V), s.Literals.WIDGET__TYPE = V;
    const D = new O();
    D.setContainment(!1), D.setName("datasource"), D.setLowerBound(0), D.setUpperBound(1), d.getEStructuralFeatures().push(D), s.Literals.WIDGET__DATASOURCE = D;
    const z = new n();
    z.setName("config"), z.setLowerBound(0), z.setUpperBound(1), d.getEStructuralFeatures().push(z), s.Literals.WIDGET__CONFIG = z;
    const H = new n();
    H.setName("wrapperConfig"), H.setLowerBound(0), H.setUpperBound(1), d.getEStructuralFeatures().push(H), s.Literals.WIDGET__WRAPPER_CONFIG = H;
    const g = new U();
    g.setName("LayoutItem"), g.setAbstract(!1), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), s.Literals.LAYOUT_ITEM = g;
    const x = new n();
    x.setName("id"), x.setLowerBound(1), x.setUpperBound(1), g.getEStructuralFeatures().push(x), s.Literals.LAYOUT_ITEM__ID = x;
    const Z = new n();
    Z.setName("x"), Z.setLowerBound(1), Z.setUpperBound(1), g.getEStructuralFeatures().push(Z), s.Literals.LAYOUT_ITEM__X = Z;
    const X = new n();
    X.setName("y"), X.setLowerBound(1), X.setUpperBound(1), g.getEStructuralFeatures().push(X), s.Literals.LAYOUT_ITEM__Y = X;
    const J = new n();
    J.setName("z"), J.setLowerBound(1), J.setUpperBound(1), g.getEStructuralFeatures().push(J), s.Literals.LAYOUT_ITEM__Z = J;
    const j = new n();
    j.setName("width"), j.setLowerBound(1), j.setUpperBound(1), g.getEStructuralFeatures().push(j), s.Literals.LAYOUT_ITEM__WIDTH = j;
    const $ = new n();
    $.setName("height"), $.setLowerBound(1), $.setUpperBound(1), g.getEStructuralFeatures().push($), s.Literals.LAYOUT_ITEM__HEIGHT = $;
    const q = new n();
    q.setName("group"), q.setLowerBound(0), q.setUpperBound(1), g.getEStructuralFeatures().push(q), s.Literals.LAYOUT_ITEM__GROUP = q;
    const N = new U();
    N.setName("Datasource"), N.setAbstract(!1), N.setInterface(!1), this.getEClassifiers().push(N), N.setEPackage(this), s.Literals.DATASOURCE = N;
    const Q = new n();
    Q.setName("uid"), Q.setLowerBound(1), Q.setUpperBound(1), N.getEStructuralFeatures().push(Q), s.Literals.DATASOURCE__UID = Q;
    const W = new n();
    W.setName("name"), W.setLowerBound(0), W.setUpperBound(1), N.getEStructuralFeatures().push(W), s.Literals.DATASOURCE__NAME = W;
    const k = new n();
    k.setName("type"), k.setLowerBound(0), k.setUpperBound(1), N.getEStructuralFeatures().push(k), s.Literals.DATASOURCE__TYPE = k;
    const I = new O();
    I.setContainment(!1), I.setName("connection"), I.setLowerBound(0), I.setUpperBound(1), N.getEStructuralFeatures().push(I), s.Literals.DATASOURCE__CONNECTION = I;
    const m = new n();
    m.setName("config"), m.setLowerBound(0), m.setUpperBound(1), N.getEStructuralFeatures().push(m), s.Literals.DATASOURCE__CONFIG = m;
    const T = new U();
    T.setName("Connection"), T.setAbstract(!1), T.setInterface(!1), this.getEClassifiers().push(T), T.setEPackage(this), s.Literals.CONNECTION = T;
    const ee = new n();
    ee.setName("uid"), ee.setLowerBound(1), ee.setUpperBound(1), T.getEStructuralFeatures().push(ee), s.Literals.CONNECTION__UID = ee;
    const te = new n();
    te.setName("name"), te.setLowerBound(0), te.setUpperBound(1), T.getEStructuralFeatures().push(te), s.Literals.CONNECTION__NAME = te;
    const se = new n();
    se.setName("type"), se.setLowerBound(0), se.setUpperBound(1), T.getEStructuralFeatures().push(se), s.Literals.CONNECTION__TYPE = se;
    const ie = new n();
    ie.setName("config"), ie.setLowerBound(0), ie.setUpperBound(1), T.getEStructuralFeatures().push(ie), s.Literals.CONNECTION__CONFIG = ie, s.Literals.WORKSPACE__CONNECTIONS.setEType(s.Literals.CONNECTION), s.Literals.WORKSPACE__DATASOURCES.setEType(s.Literals.DATASOURCE), s.Literals.WORKSPACE__PAGES.setEType(s.Literals.PAGE), s.Literals.WORKSPACE__DEFAULT_PAGE.setEType(s.Literals.PAGE), s.Literals.PAGE__ID.setEType(o().getEClassifier("EString")), s.Literals.PAGE__NAME.setEType(o().getEClassifier("EString")), s.Literals.PAGE__DESCRIPTION.setEType(o().getEClassifier("EString")), s.Literals.PAGE__ICON.setEType(o().getEClassifier("EString")), s.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(o().getEClassifier("EBoolean")), s.Literals.PAGE__LAYOUT_ID.setEType(o().getEClassifier("EString")), s.Literals.PAGE__LAYOUT_SETTINGS.setEType(o().getEClassifier("EJavaObject")), s.Literals.PAGE__BACKGROUND_COLOR.setEType(o().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_IMAGE.setEType(o().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_SIZE.setEType(o().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_POSITION.setEType(o().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_REPEAT.setEType(o().getEClassifier("EString")), s.Literals.PAGE__WIDGETS.setEType(s.Literals.WIDGET), s.Literals.PAGE__LAYOUT.setEType(s.Literals.LAYOUT_ITEM), s.Literals.WIDGET__UID.setEType(o().getEClassifier("EString")), s.Literals.WIDGET__TYPE.setEType(o().getEClassifier("EString")), s.Literals.WIDGET__DATASOURCE.setEType(s.Literals.DATASOURCE), s.Literals.WIDGET__CONFIG.setEType(o().getEClassifier("EJavaObject")), s.Literals.WIDGET__WRAPPER_CONFIG.setEType(o().getEClassifier("EJavaObject")), s.Literals.LAYOUT_ITEM__ID.setEType(o().getEClassifier("EString")), s.Literals.LAYOUT_ITEM__X.setEType(o().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Y.setEType(o().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Z.setEType(o().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__WIDTH.setEType(o().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__HEIGHT.setEType(o().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__GROUP.setEType(o().getEClassifier("EString")), s.Literals.DATASOURCE__UID.setEType(o().getEClassifier("EString")), s.Literals.DATASOURCE__NAME.setEType(o().getEClassifier("EString")), s.Literals.DATASOURCE__TYPE.setEType(o().getEClassifier("EString")), s.Literals.DATASOURCE__CONNECTION.setEType(s.Literals.CONNECTION), s.Literals.DATASOURCE__CONFIG.setEType(o().getEClassifier("EJavaObject")), s.Literals.CONNECTION__UID.setEType(o().getEClassifier("EString")), s.Literals.CONNECTION__NAME.setEType(o().getEClassifier("EString")), s.Literals.CONNECTION__TYPE.setEType(o().getEClassifier("EString")), s.Literals.CONNECTION__CONFIG.setEType(o().getEClassifier("EJavaObject"));
  }
}
s.eINSTANCE;
const ae = Ee("Workspace"), de = Symbol.for(ae);
function oe({ services: S }) {
  S.register(ae, new E());
}
function he({ services: S }) {
  S.unregister(ae);
}
const Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: h,
  DatasourceImpl: a,
  LayoutItemImpl: r,
  PageImpl: i,
  WORKSPACE: ae,
  WidgetImpl: u,
  WorkspaceFactory: ue,
  WorkspaceImpl: E,
  WorkspacePackage: s,
  activate: oe,
  deactivate: he,
  identifier: de
}, Symbol.toStringTag, { value: "Module" })), ne = "org.eclipse.daanse.board.app.lib.model.workspace", Te = "0.0.1-next.1";
async function Se(S) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${ne}: tsm runtime is not initialized`);
  e.register(ne, Ne, Te, "lib.model.workspace"), await oe?.(S);
}
async function Ce(S) {
  await he?.(S);
}
export {
  h as ConnectionImpl,
  a as DatasourceImpl,
  r as LayoutItemImpl,
  i as PageImpl,
  ae as WORKSPACE,
  u as WidgetImpl,
  ue as WorkspaceFactory,
  E as WorkspaceImpl,
  s as WorkspacePackage,
  Se as activate,
  Ce as deactivate,
  de as identifier
};
