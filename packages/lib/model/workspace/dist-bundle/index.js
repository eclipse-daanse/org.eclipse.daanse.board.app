import { BasicEObject as I, createContainmentEList as F, BasicEFactory as _e, BasicEPackage as Ie, EPackageRegistry as fe, BasicEClass as _, BasicEReference as f, BasicEAttribute as u, getEcorePackage as a } from "@emfts/core";
const { serviceId: De } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class h extends I {
  // Feature ID Constants (eLiterals)
  static CONNECTIONS = 0;
  static DATASOURCES = 1;
  static PAGES = 2;
  static VARIABLES = 3;
  static EVENT_MAPPINGS = 4;
  static DEFAULT_PAGE = 5;
  // Private fields
  _connections;
  _datasources;
  _pages;
  _variables;
  _eventMappings;
  _defaultPage;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = F(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  get datasources() {
    return this._datasources || (this._datasources = F(this, this.eClass().getEStructuralFeature("datasources"))), this._datasources;
  }
  get pages() {
    return this._pages || (this._pages = F(this, this.eClass().getEStructuralFeature("pages"))), this._pages;
  }
  get variables() {
    return this._variables || (this._variables = F(this, this.eClass().getEStructuralFeature("variables"))), this._variables;
  }
  get eventMappings() {
    return this._eventMappings || (this._eventMappings = F(this, this.eClass().getEStructuralFeature("eventMappings"))), this._eventMappings;
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
      getFeature: () => this.eClass().getEStructuralFeature(h.DEFAULT_PAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.DEFAULT_PAGE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case h.CONNECTIONS:
        return this.connections;
      case h.DATASOURCES:
        return this.datasources;
      case h.PAGES:
        return this.pages;
      case h.VARIABLES:
        return this.variables;
      case h.EVENT_MAPPINGS:
        return this.eventMappings;
      case h.DEFAULT_PAGE:
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
      case h.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
        break;
      case h.DATASOURCES:
        this.datasources.clear(), this.datasources.addAll(t), super.eSet(e, t);
        break;
      case h.PAGES:
        this.pages.clear(), this.pages.addAll(t), super.eSet(e, t);
        break;
      case h.VARIABLES:
        this.variables.clear(), this.variables.addAll(t), super.eSet(e, t);
        break;
      case h.EVENT_MAPPINGS:
        this.eventMappings.clear(), this.eventMappings.addAll(t), super.eSet(e, t);
        break;
      case h.DEFAULT_PAGE:
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
      case h.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case h.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      case h.PAGES:
        return this._pages !== void 0 && !this._pages.isEmpty();
      case h.VARIABLES:
        return this._variables !== void 0 && !this._variables.isEmpty();
      case h.EVENT_MAPPINGS:
        return this._eventMappings !== void 0 && !this._eventMappings.isEmpty();
      case h.DEFAULT_PAGE:
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
      case h.CONNECTIONS:
        this._connections && this._connections.clear();
        return;
      case h.DATASOURCES:
        this._datasources && this._datasources.clear();
        return;
      case h.PAGES:
        this._pages && this._pages.clear();
        return;
      case h.VARIABLES:
        this._variables && this._variables.clear();
        return;
      case h.EVENT_MAPPINGS:
        this._eventMappings && this._eventMappings.clear();
        return;
      case h.DEFAULT_PAGE:
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
      variables: this.variables?.toArray?.() ?? this.variables,
      eventMappings: this.eventMappings?.toArray?.() ?? this.eventMappings,
      defaultPage: this.defaultPage
    };
  }
}
class i extends I {
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
    return this._widgets || (this._widgets = F(this, this.eClass().getEStructuralFeature("widgets"))), this._widgets;
  }
  get layout() {
    return this._layout || (this._layout = F(this, this.eClass().getEStructuralFeature("layout"))), this._layout;
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
class n extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(n.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.DATASOURCE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.DATASOURCE,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.CONFIG,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.WRAPPER_CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.WRAPPER_CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.UID:
        return this.uid;
      case n.TYPE:
        return this.type;
      case n.DATASOURCE:
        return this.datasource;
      case n.CONFIG:
        return this.config;
      case n.WRAPPER_CONFIG:
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
      case n.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case n.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case n.DATASOURCE:
        this.datasource = t, super.eSet(e, t);
        break;
      case n.CONFIG:
        this.config = t, super.eSet(e, t);
        break;
      case n.WRAPPER_CONFIG:
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
      case n.UID:
        return this._uid !== "";
      case n.TYPE:
        return this._type !== void 0;
      case n.DATASOURCE:
        return this._datasource !== void 0;
      case n.CONFIG:
        return this._config !== void 0;
      case n.WRAPPER_CONFIG:
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
      case n.UID:
        this._uid = "";
        return;
      case n.TYPE:
        this._type = void 0;
        return;
      case n.DATASOURCE:
        this._datasource = void 0;
        return;
      case n.CONFIG:
        this._config = void 0;
        return;
      case n.WRAPPER_CONFIG:
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
class g extends I {
  // Feature ID Constants (eLiterals)
  static NAME = 0;
  static TYPE = 1;
  static DEFINITION = 2;
  // Private fields
  _name = "";
  _type;
  _definition;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.VARIABLE;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.TYPE,
      merge: () => !1
    });
  }
  get definition() {
    return this._definition;
  }
  set definition(e) {
    const t = this._definition;
    this._definition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.DEFINITION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.NAME:
        return this.name;
      case g.TYPE:
        return this.type;
      case g.DEFINITION:
        return this.definition;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case g.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case g.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case g.DEFINITION:
        this.definition = t, super.eSet(e, t);
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
      case g.NAME:
        return this._name !== "";
      case g.TYPE:
        return this._type !== void 0;
      case g.DEFINITION:
        return this._definition !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.NAME:
        this._name = "";
        return;
      case g.TYPE:
        this._type = void 0;
        return;
      case g.DEFINITION:
        this._definition = void 0;
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
      name: this.name,
      type: this.type,
      definition: this.definition
    };
  }
}
class c extends I {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static DEFINITION = 1;
  // Private fields
  _id = "";
  _definition;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.EVENT_MAPPING;
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
      getFeature: () => this.eClass().getEStructuralFeature(c.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.ID,
      merge: () => !1
    });
  }
  get definition() {
    return this._definition;
  }
  set definition(e) {
    const t = this._definition;
    this._definition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.DEFINITION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.ID:
        return this.id;
      case c.DEFINITION:
        return this.definition;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case c.ID:
        this.id = t, super.eSet(e, t);
        break;
      case c.DEFINITION:
        this.definition = t, super.eSet(e, t);
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
      case c.ID:
        return this._id !== "";
      case c.DEFINITION:
        return this._definition !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.ID:
        this._id = "";
        return;
      case c.DEFINITION:
        this._definition = void 0;
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
      definition: this.definition
    };
  }
}
class r extends I {
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
class o extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(o.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.CONNECTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case o.UID:
        return this.uid;
      case o.NAME:
        return this.name;
      case o.TYPE:
        return this.type;
      case o.CONNECTION:
        return this.connection;
      case o.CONFIG:
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
      case o.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case o.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case o.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case o.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case o.CONFIG:
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
      case o.UID:
        return this._uid !== "";
      case o.NAME:
        return this._name !== void 0;
      case o.TYPE:
        return this._type !== void 0;
      case o.CONNECTION:
        return this._connection !== void 0;
      case o.CONFIG:
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
      case o.UID:
        this._uid = "";
        return;
      case o.NAME:
        this._name = void 0;
        return;
      case o.TYPE:
        this._type = void 0;
        return;
      case o.CONNECTION:
        this._connection = void 0;
        return;
      case o.CONFIG:
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
class E extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(E.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(E.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(E.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(E.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case E.UID:
        return this.uid;
      case E.NAME:
        return this.name;
      case E.TYPE:
        return this.type;
      case E.CONFIG:
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
      case E.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case E.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case E.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case E.CONFIG:
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
      case E.UID:
        return this._uid !== "";
      case E.NAME:
        return this._name !== void 0;
      case E.TYPE:
        return this._type !== void 0;
      case E.CONFIG:
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
      case E.UID:
        this._uid = "";
        return;
      case E.NAME:
        this._name = void 0;
        return;
      case E.TYPE:
        this._type = void 0;
        return;
      case E.CONFIG:
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
class Te extends _e {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Te()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new h();
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
    return new n();
  }
  /**
   * Create a new Variable instance
   */
  createVariable() {
    return new g();
  }
  /**
   * Create a new EventMapping instance
   */
  createEventMapping() {
    return new c();
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
    return new o();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new E();
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
      case "Variable":
        return this.createVariable();
      case "EventMapping":
        return this.createEventMapping();
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
class s extends Ie {
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
    WORKSPACE__VARIABLES: null,
    WORKSPACE__EVENT_MAPPINGS: null,
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
    VARIABLE: null,
    VARIABLE__NAME: null,
    VARIABLE__TYPE: null,
    VARIABLE__DEFINITION: null,
    EVENT_MAPPING: null,
    EVENT_MAPPING__ID: null,
    EVENT_MAPPING__DEFINITION: null,
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
    fe.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(Te.eINSTANCE);
    const e = new _();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.WORKSPACE = e;
    const t = new f();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), s.Literals.WORKSPACE__CONNECTIONS = t;
    const N = new f();
    N.setContainment(!0), N.setName("datasources"), N.setLowerBound(0), N.setUpperBound(-1), e.getEStructuralFeatures().push(N), s.Literals.WORKSPACE__DATASOURCES = N;
    const G = new f();
    G.setContainment(!0), G.setName("pages"), G.setLowerBound(0), G.setUpperBound(-1), e.getEStructuralFeatures().push(G), s.Literals.WORKSPACE__PAGES = G;
    const U = new f();
    U.setContainment(!0), U.setName("variables"), U.setLowerBound(0), U.setUpperBound(-1), e.getEStructuralFeatures().push(U), s.Literals.WORKSPACE__VARIABLES = U;
    const R = new f();
    R.setContainment(!0), R.setName("eventMappings"), R.setLowerBound(0), R.setUpperBound(-1), e.getEStructuralFeatures().push(R), s.Literals.WORKSPACE__EVENT_MAPPINGS = R;
    const y = new f();
    y.setContainment(!1), y.setName("defaultPage"), y.setLowerBound(0), y.setUpperBound(1), e.getEStructuralFeatures().push(y), s.Literals.WORKSPACE__DEFAULT_PAGE = y;
    const l = new _();
    l.setName("Page"), l.setAbstract(!1), l.setInterface(!1), this.getEClassifiers().push(l), l.setEPackage(this), s.Literals.PAGE = l;
    const b = new u();
    b.setName("id"), b.setLowerBound(1), b.setUpperBound(1), l.getEStructuralFeatures().push(b), s.Literals.PAGE__ID = b;
    const p = new u();
    p.setName("name"), p.setLowerBound(0), p.setUpperBound(1), l.getEStructuralFeatures().push(p), s.Literals.PAGE__NAME = p;
    const P = new u();
    P.setName("description"), P.setLowerBound(0), P.setUpperBound(1), l.getEStructuralFeatures().push(P), s.Literals.PAGE__DESCRIPTION = P;
    const M = new u();
    M.setName("icon"), M.setLowerBound(0), M.setUpperBound(1), l.getEStructuralFeatures().push(M), s.Literals.PAGE__ICON = M;
    const Y = new u();
    Y.setName("visibleInNavigation"), Y.setLowerBound(0), Y.setUpperBound(1), l.getEStructuralFeatures().push(Y), s.Literals.PAGE__VISIBLE_IN_NAVIGATION = Y;
    const K = new u();
    K.setName("layoutId"), K.setLowerBound(0), K.setUpperBound(1), l.getEStructuralFeatures().push(K), s.Literals.PAGE__LAYOUT_ID = K;
    const V = new u();
    V.setName("layoutSettings"), V.setLowerBound(0), V.setUpperBound(1), l.getEStructuralFeatures().push(V), s.Literals.PAGE__LAYOUT_SETTINGS = V;
    const z = new u();
    z.setName("backgroundColor"), z.setLowerBound(0), z.setUpperBound(1), l.getEStructuralFeatures().push(z), s.Literals.PAGE__BACKGROUND_COLOR = z;
    const H = new u();
    H.setName("backgroundImage"), H.setLowerBound(0), H.setUpperBound(1), l.getEStructuralFeatures().push(H), s.Literals.PAGE__BACKGROUND_IMAGE = H;
    const x = new u();
    x.setName("backgroundSize"), x.setLowerBound(0), x.setUpperBound(1), l.getEStructuralFeatures().push(x), s.Literals.PAGE__BACKGROUND_SIZE = x;
    const Z = new u();
    Z.setName("backgroundPosition"), Z.setLowerBound(0), Z.setUpperBound(1), l.getEStructuralFeatures().push(Z), s.Literals.PAGE__BACKGROUND_POSITION = Z;
    const J = new u();
    J.setName("backgroundRepeat"), J.setLowerBound(0), J.setUpperBound(1), l.getEStructuralFeatures().push(J), s.Literals.PAGE__BACKGROUND_REPEAT = J;
    const L = new f();
    L.setContainment(!0), L.setName("widgets"), L.setLowerBound(0), L.setUpperBound(-1), l.getEStructuralFeatures().push(L), s.Literals.PAGE__WIDGETS = L;
    const w = new f();
    w.setContainment(!0), w.setName("layout"), w.setLowerBound(0), w.setUpperBound(-1), l.getEStructuralFeatures().push(w), s.Literals.PAGE__LAYOUT = w;
    const T = new _();
    T.setName("Widget"), T.setAbstract(!1), T.setInterface(!1), this.getEClassifiers().push(T), T.setEPackage(this), s.Literals.WIDGET = T;
    const X = new u();
    X.setName("uid"), X.setLowerBound(1), X.setUpperBound(1), T.getEStructuralFeatures().push(X), s.Literals.WIDGET__UID = X;
    const j = new u();
    j.setName("type"), j.setLowerBound(0), j.setUpperBound(1), T.getEStructuralFeatures().push(j), s.Literals.WIDGET__TYPE = j;
    const B = new f();
    B.setContainment(!1), B.setName("datasource"), B.setLowerBound(0), B.setUpperBound(1), T.getEStructuralFeatures().push(B), s.Literals.WIDGET__DATASOURCE = B;
    const $ = new u();
    $.setName("config"), $.setLowerBound(0), $.setUpperBound(1), T.getEStructuralFeatures().push($), s.Literals.WIDGET__CONFIG = $;
    const q = new u();
    q.setName("wrapperConfig"), q.setLowerBound(0), q.setUpperBound(1), T.getEStructuralFeatures().push(q), s.Literals.WIDGET__WRAPPER_CONFIG = q;
    const O = new _();
    O.setName("Variable"), O.setAbstract(!1), O.setInterface(!1), this.getEClassifiers().push(O), O.setEPackage(this), s.Literals.VARIABLE = O;
    const Q = new u();
    Q.setName("name"), Q.setLowerBound(1), Q.setUpperBound(1), O.getEStructuralFeatures().push(Q), s.Literals.VARIABLE__NAME = Q;
    const m = new u();
    m.setName("type"), m.setLowerBound(0), m.setUpperBound(1), O.getEStructuralFeatures().push(m), s.Literals.VARIABLE__TYPE = m;
    const W = new u();
    W.setName("definition"), W.setLowerBound(0), W.setUpperBound(1), O.getEStructuralFeatures().push(W), s.Literals.VARIABLE__DEFINITION = W;
    const C = new _();
    C.setName("EventMapping"), C.setAbstract(!1), C.setInterface(!1), this.getEClassifiers().push(C), C.setEPackage(this), s.Literals.EVENT_MAPPING = C;
    const k = new u();
    k.setName("id"), k.setLowerBound(1), k.setUpperBound(1), C.getEStructuralFeatures().push(k), s.Literals.EVENT_MAPPING__ID = k;
    const ee = new u();
    ee.setName("definition"), ee.setLowerBound(0), ee.setUpperBound(1), C.getEStructuralFeatures().push(ee), s.Literals.EVENT_MAPPING__DEFINITION = ee;
    const d = new _();
    d.setName("LayoutItem"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), s.Literals.LAYOUT_ITEM = d;
    const te = new u();
    te.setName("id"), te.setLowerBound(1), te.setUpperBound(1), d.getEStructuralFeatures().push(te), s.Literals.LAYOUT_ITEM__ID = te;
    const se = new u();
    se.setName("x"), se.setLowerBound(1), se.setUpperBound(1), d.getEStructuralFeatures().push(se), s.Literals.LAYOUT_ITEM__X = se;
    const ie = new u();
    ie.setName("y"), ie.setLowerBound(1), ie.setUpperBound(1), d.getEStructuralFeatures().push(ie), s.Literals.LAYOUT_ITEM__Y = ie;
    const re = new u();
    re.setName("z"), re.setLowerBound(1), re.setUpperBound(1), d.getEStructuralFeatures().push(re), s.Literals.LAYOUT_ITEM__Z = re;
    const ue = new u();
    ue.setName("width"), ue.setLowerBound(1), ue.setUpperBound(1), d.getEStructuralFeatures().push(ue), s.Literals.LAYOUT_ITEM__WIDTH = ue;
    const ae = new u();
    ae.setName("height"), ae.setLowerBound(1), ae.setUpperBound(1), d.getEStructuralFeatures().push(ae), s.Literals.LAYOUT_ITEM__HEIGHT = ae;
    const ne = new u();
    ne.setName("group"), ne.setLowerBound(0), ne.setUpperBound(1), d.getEStructuralFeatures().push(ne), s.Literals.LAYOUT_ITEM__GROUP = ne;
    const A = new _();
    A.setName("Datasource"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), s.Literals.DATASOURCE = A;
    const oe = new u();
    oe.setName("uid"), oe.setLowerBound(1), oe.setUpperBound(1), A.getEStructuralFeatures().push(oe), s.Literals.DATASOURCE__UID = oe;
    const he = new u();
    he.setName("name"), he.setLowerBound(0), he.setUpperBound(1), A.getEStructuralFeatures().push(he), s.Literals.DATASOURCE__NAME = he;
    const Ee = new u();
    Ee.setName("type"), Ee.setLowerBound(0), Ee.setUpperBound(1), A.getEStructuralFeatures().push(Ee), s.Literals.DATASOURCE__TYPE = Ee;
    const v = new f();
    v.setContainment(!1), v.setName("connection"), v.setLowerBound(0), v.setUpperBound(1), A.getEStructuralFeatures().push(v), s.Literals.DATASOURCE__CONNECTION = v;
    const ge = new u();
    ge.setName("config"), ge.setLowerBound(0), ge.setUpperBound(1), A.getEStructuralFeatures().push(ge), s.Literals.DATASOURCE__CONFIG = ge;
    const S = new _();
    S.setName("Connection"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), s.Literals.CONNECTION = S;
    const le = new u();
    le.setName("uid"), le.setLowerBound(1), le.setUpperBound(1), S.getEStructuralFeatures().push(le), s.Literals.CONNECTION__UID = le;
    const ce = new u();
    ce.setName("name"), ce.setLowerBound(0), ce.setUpperBound(1), S.getEStructuralFeatures().push(ce), s.Literals.CONNECTION__NAME = ce;
    const Ne = new u();
    Ne.setName("type"), Ne.setLowerBound(0), Ne.setUpperBound(1), S.getEStructuralFeatures().push(Ne), s.Literals.CONNECTION__TYPE = Ne;
    const de = new u();
    de.setName("config"), de.setLowerBound(0), de.setUpperBound(1), S.getEStructuralFeatures().push(de), s.Literals.CONNECTION__CONFIG = de, s.Literals.WORKSPACE__CONNECTIONS.setEType(s.Literals.CONNECTION), s.Literals.WORKSPACE__DATASOURCES.setEType(s.Literals.DATASOURCE), s.Literals.WORKSPACE__PAGES.setEType(s.Literals.PAGE), s.Literals.WORKSPACE__VARIABLES.setEType(s.Literals.VARIABLE), s.Literals.WORKSPACE__EVENT_MAPPINGS.setEType(s.Literals.EVENT_MAPPING), s.Literals.WORKSPACE__DEFAULT_PAGE.setEType(s.Literals.PAGE), s.Literals.PAGE__ID.setEType(a().getEClassifier("EString")), s.Literals.PAGE__NAME.setEType(a().getEClassifier("EString")), s.Literals.PAGE__DESCRIPTION.setEType(a().getEClassifier("EString")), s.Literals.PAGE__ICON.setEType(a().getEClassifier("EString")), s.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(a().getEClassifier("EBoolean")), s.Literals.PAGE__LAYOUT_ID.setEType(a().getEClassifier("EString")), s.Literals.PAGE__LAYOUT_SETTINGS.setEType(a().getEClassifier("EJavaObject")), s.Literals.PAGE__BACKGROUND_COLOR.setEType(a().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_IMAGE.setEType(a().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_SIZE.setEType(a().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_POSITION.setEType(a().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_REPEAT.setEType(a().getEClassifier("EString")), s.Literals.PAGE__WIDGETS.setEType(s.Literals.WIDGET), s.Literals.PAGE__LAYOUT.setEType(s.Literals.LAYOUT_ITEM), s.Literals.WIDGET__UID.setEType(a().getEClassifier("EString")), s.Literals.WIDGET__TYPE.setEType(a().getEClassifier("EString")), s.Literals.WIDGET__DATASOURCE.setEType(s.Literals.DATASOURCE), s.Literals.WIDGET__CONFIG.setEType(a().getEClassifier("EJavaObject")), s.Literals.WIDGET__WRAPPER_CONFIG.setEType(a().getEClassifier("EJavaObject")), s.Literals.VARIABLE__NAME.setEType(a().getEClassifier("EString")), s.Literals.VARIABLE__TYPE.setEType(a().getEClassifier("EString")), s.Literals.VARIABLE__DEFINITION.setEType(a().getEClassifier("EJavaObject")), s.Literals.EVENT_MAPPING__ID.setEType(a().getEClassifier("EString")), s.Literals.EVENT_MAPPING__DEFINITION.setEType(a().getEClassifier("EJavaObject")), s.Literals.LAYOUT_ITEM__ID.setEType(a().getEClassifier("EString")), s.Literals.LAYOUT_ITEM__X.setEType(a().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Y.setEType(a().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Z.setEType(a().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__WIDTH.setEType(a().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__HEIGHT.setEType(a().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__GROUP.setEType(a().getEClassifier("EString")), s.Literals.DATASOURCE__UID.setEType(a().getEClassifier("EString")), s.Literals.DATASOURCE__NAME.setEType(a().getEClassifier("EString")), s.Literals.DATASOURCE__TYPE.setEType(a().getEClassifier("EString")), s.Literals.DATASOURCE__CONNECTION.setEType(s.Literals.CONNECTION), s.Literals.DATASOURCE__CONFIG.setEType(a().getEClassifier("EJavaObject")), s.Literals.CONNECTION__UID.setEType(a().getEClassifier("EString")), s.Literals.CONNECTION__NAME.setEType(a().getEClassifier("EString")), s.Literals.CONNECTION__TYPE.setEType(a().getEClassifier("EString")), s.Literals.CONNECTION__CONFIG.setEType(a().getEClassifier("EJavaObject"));
  }
}
s.eINSTANCE;
fe.INSTANCE.registerPackage(s.eINSTANCE);
const Ae = De("Workspace"), Fe = Symbol.for(Ae);
function Oe({ services: D }) {
  D.register(Ae, new h());
}
function Ce({ services: D }) {
  D.unregister(Ae);
}
const Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: E,
  DatasourceImpl: o,
  EventMappingImpl: c,
  LayoutItemImpl: r,
  PageImpl: i,
  VariableImpl: g,
  WORKSPACE: Ae,
  WidgetImpl: n,
  WorkspaceFactory: Te,
  WorkspaceImpl: h,
  WorkspacePackage: s,
  activate: Oe,
  deactivate: Ce,
  identifier: Fe
}, Symbol.toStringTag, { value: "Module" })), Se = "org.eclipse.daanse.board.app.lib.model.workspace", Ue = "0.0.1-next.1";
async function ye(D) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Se}: tsm runtime is not initialized`);
  e.register(Se, Ge, Ue, "lib.model.workspace"), await Oe?.(D);
}
async function Le(D) {
  await Ce?.(D);
}
export {
  E as ConnectionImpl,
  o as DatasourceImpl,
  c as EventMappingImpl,
  r as LayoutItemImpl,
  i as PageImpl,
  g as VariableImpl,
  Ae as WORKSPACE,
  n as WidgetImpl,
  Te as WorkspaceFactory,
  h as WorkspaceImpl,
  s as WorkspacePackage,
  ye as activate,
  Le as deactivate,
  Fe as identifier
};
