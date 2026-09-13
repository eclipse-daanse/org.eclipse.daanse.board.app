import { BasicEObject as D, createContainmentEList as F, BasicEFactory as Ge, BasicEPackage as Ue, EPackageRegistry as De, BasicEClass as _, BasicEReference as f, BasicEAttribute as a, getEcorePackage as n } from "@emfts/core";
const { serviceId: Re } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class E extends D {
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
      case E.VARIABLES:
        return this.variables;
      case E.EVENT_MAPPINGS:
        return this.eventMappings;
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
      case E.VARIABLES:
        this.variables.clear(), this.variables.addAll(t), super.eSet(e, t);
        break;
      case E.EVENT_MAPPINGS:
        this.eventMappings.clear(), this.eventMappings.addAll(t), super.eSet(e, t);
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
      case E.VARIABLES:
        return this._variables !== void 0 && !this._variables.isEmpty();
      case E.EVENT_MAPPINGS:
        return this._eventMappings !== void 0 && !this._eventMappings.isEmpty();
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
      case E.VARIABLES:
        this._variables && this._variables.clear();
        return;
      case E.EVENT_MAPPINGS:
        this._eventMappings && this._eventMappings.clear();
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
      variables: this.variables?.toArray?.() ?? this.variables,
      eventMappings: this.eventMappings?.toArray?.() ?? this.eventMappings,
      defaultPage: this.defaultPage
    };
  }
}
class i extends D {
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
class o extends D {
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
  get datasource() {
    return this._datasource;
  }
  set datasource(e) {
    const t = this._datasource;
    this._datasource = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(o.DATASOURCE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.DATASOURCE,
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
  get wrapperConfig() {
    return this._wrapperConfig;
  }
  set wrapperConfig(e) {
    const t = this._wrapperConfig;
    this._wrapperConfig = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(o.WRAPPER_CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.WRAPPER_CONFIG,
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
      case o.TYPE:
        return this.type;
      case o.DATASOURCE:
        return this.datasource;
      case o.CONFIG:
        return this.config;
      case o.WRAPPER_CONFIG:
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
      case o.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case o.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case o.DATASOURCE:
        this.datasource = t, super.eSet(e, t);
        break;
      case o.CONFIG:
        this.config = t, super.eSet(e, t);
        break;
      case o.WRAPPER_CONFIG:
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
      case o.UID:
        return this._uid !== "";
      case o.TYPE:
        return this._type !== void 0;
      case o.DATASOURCE:
        return this._datasource !== void 0;
      case o.CONFIG:
        return this._config !== void 0;
      case o.WRAPPER_CONFIG:
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
      case o.UID:
        this._uid = "";
        return;
      case o.TYPE:
        this._type = void 0;
        return;
      case o.DATASOURCE:
        this._datasource = void 0;
        return;
      case o.CONFIG:
        this._config = void 0;
        return;
      case o.WRAPPER_CONFIG:
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
class r extends D {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static SCOPE = 3;
  static ACCESS_MODE = 4;
  static PAGE = 5;
  static DEFINITION = 6;
  // Private fields
  _uid = "";
  _name = "";
  _type;
  _scope;
  _accessMode;
  _page;
  _definition;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.VARIABLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(r.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(r.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(r.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TYPE,
      merge: () => !1
    });
  }
  get scope() {
    return this._scope;
  }
  set scope(e) {
    const t = this._scope;
    this._scope = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SCOPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SCOPE,
      merge: () => !1
    });
  }
  get accessMode() {
    return this._accessMode;
  }
  set accessMode(e) {
    const t = this._accessMode;
    this._accessMode = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.ACCESS_MODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.ACCESS_MODE,
      merge: () => !1
    });
  }
  get page() {
    return this._page;
  }
  set page(e) {
    const t = this._page;
    this._page = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.PAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.PAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(r.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.DEFINITION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.UID:
        return this.uid;
      case r.NAME:
        return this.name;
      case r.TYPE:
        return this.type;
      case r.SCOPE:
        return this.scope;
      case r.ACCESS_MODE:
        return this.accessMode;
      case r.PAGE:
        return this.page;
      case r.DEFINITION:
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
      case r.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case r.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case r.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case r.SCOPE:
        this.scope = t, super.eSet(e, t);
        break;
      case r.ACCESS_MODE:
        this.accessMode = t, super.eSet(e, t);
        break;
      case r.PAGE:
        this.page = t, super.eSet(e, t);
        break;
      case r.DEFINITION:
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
      case r.UID:
        return this._uid !== "";
      case r.NAME:
        return this._name !== "";
      case r.TYPE:
        return this._type !== void 0;
      case r.SCOPE:
        return this._scope !== void 0;
      case r.ACCESS_MODE:
        return this._accessMode !== void 0;
      case r.PAGE:
        return this._page !== void 0;
      case r.DEFINITION:
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
      case r.UID:
        this._uid = "";
        return;
      case r.NAME:
        this._name = "";
        return;
      case r.TYPE:
        this._type = void 0;
        return;
      case r.SCOPE:
        this._scope = void 0;
        return;
      case r.ACCESS_MODE:
        this._accessMode = void 0;
        return;
      case r.PAGE:
        this._page = void 0;
        return;
      case r.DEFINITION:
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
      uid: this.uid,
      name: this.name,
      type: this.type,
      scope: this.scope,
      accessMode: this.accessMode,
      page: this.page,
      definition: this.definition
    };
  }
}
class l extends D {
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
  get definition() {
    return this._definition;
  }
  set definition(e) {
    const t = this._definition;
    this._definition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(l.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.DEFINITION,
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
      case l.DEFINITION:
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
      case l.ID:
        this.id = t, super.eSet(e, t);
        break;
      case l.DEFINITION:
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
      case l.ID:
        return this._id !== "";
      case l.DEFINITION:
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
      case l.ID:
        this._id = "";
        return;
      case l.DEFINITION:
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
class u extends D {
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
  get x() {
    return this._x;
  }
  set x(e) {
    const t = this._x;
    this._x = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(u.X),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.X,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.Y),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.Y,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.Z),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.Z,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.HEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.GROUP,
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
      case u.X:
        return this.x;
      case u.Y:
        return this.y;
      case u.Z:
        return this.z;
      case u.WIDTH:
        return this.width;
      case u.HEIGHT:
        return this.height;
      case u.GROUP:
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
      case u.ID:
        this.id = t, super.eSet(e, t);
        break;
      case u.X:
        this.x = t, super.eSet(e, t);
        break;
      case u.Y:
        this.y = t, super.eSet(e, t);
        break;
      case u.Z:
        this.z = t, super.eSet(e, t);
        break;
      case u.WIDTH:
        this.width = t, super.eSet(e, t);
        break;
      case u.HEIGHT:
        this.height = t, super.eSet(e, t);
        break;
      case u.GROUP:
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
      case u.ID:
        return this._id !== "";
      case u.X:
        return this._x !== 0;
      case u.Y:
        return this._y !== 0;
      case u.Z:
        return this._z !== 0;
      case u.WIDTH:
        return this._width !== 0;
      case u.HEIGHT:
        return this._height !== 0;
      case u.GROUP:
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
      case u.ID:
        this._id = "";
        return;
      case u.X:
        this._x = 0;
        return;
      case u.Y:
        this._y = 0;
        return;
      case u.Z:
        this._z = 0;
        return;
      case u.WIDTH:
        this._width = 0;
        return;
      case u.HEIGHT:
        this._height = 0;
        return;
      case u.GROUP:
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
class h extends D {
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
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.CONNECTION,
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
      case h.CONNECTION:
        return this.connection;
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
      case h.CONNECTION:
        this.connection = t, super.eSet(e, t);
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
      case h.CONNECTION:
        return this._connection !== void 0;
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
      case h.CONNECTION:
        this._connection = void 0;
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
      connection: this.connection,
      config: this.config
    };
  }
}
class c extends D {
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
      getFeature: () => this.eClass().getEStructuralFeature(c.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.UID:
        return this.uid;
      case c.NAME:
        return this.name;
      case c.TYPE:
        return this.type;
      case c.CONFIG:
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
      case c.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case c.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case c.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case c.CONFIG:
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
      case c.UID:
        return this._uid !== "";
      case c.NAME:
        return this._name !== void 0;
      case c.TYPE:
        return this._type !== void 0;
      case c.CONFIG:
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
      case c.UID:
        this._uid = "";
        return;
      case c.NAME:
        this._name = void 0;
        return;
      case c.TYPE:
        this._type = void 0;
        return;
      case c.CONFIG:
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
class Oe extends Ge {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Oe()), this._instance;
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
    return new o();
  }
  /**
   * Create a new Variable instance
   */
  createVariable() {
    return new r();
  }
  /**
   * Create a new EventMapping instance
   */
  createEventMapping() {
    return new l();
  }
  /**
   * Create a new LayoutItem instance
   */
  createLayoutItem() {
    return new u();
  }
  /**
   * Create a new Datasource instance
   */
  createDatasource() {
    return new h();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new c();
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
class s extends Ue {
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
    VARIABLE__UID: null,
    VARIABLE__NAME: null,
    VARIABLE__TYPE: null,
    VARIABLE__SCOPE: null,
    VARIABLE__ACCESS_MODE: null,
    VARIABLE__PAGE: null,
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
    De.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(Oe.eINSTANCE);
    const e = new _();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.WORKSPACE = e;
    const t = new f();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), s.Literals.WORKSPACE__CONNECTIONS = t;
    const d = new f();
    d.setContainment(!0), d.setName("datasources"), d.setLowerBound(0), d.setUpperBound(-1), e.getEStructuralFeatures().push(d), s.Literals.WORKSPACE__DATASOURCES = d;
    const G = new f();
    G.setContainment(!0), G.setName("pages"), G.setLowerBound(0), G.setUpperBound(-1), e.getEStructuralFeatures().push(G), s.Literals.WORKSPACE__PAGES = G;
    const U = new f();
    U.setContainment(!0), U.setName("variables"), U.setLowerBound(0), U.setUpperBound(-1), e.getEStructuralFeatures().push(U), s.Literals.WORKSPACE__VARIABLES = U;
    const R = new f();
    R.setContainment(!0), R.setName("eventMappings"), R.setLowerBound(0), R.setUpperBound(-1), e.getEStructuralFeatures().push(R), s.Literals.WORKSPACE__EVENT_MAPPINGS = R;
    const L = new f();
    L.setContainment(!1), L.setName("defaultPage"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), s.Literals.WORKSPACE__DEFAULT_PAGE = L;
    const g = new _();
    g.setName("Page"), g.setAbstract(!1), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), s.Literals.PAGE = g;
    const b = new a();
    b.setName("id"), b.setLowerBound(1), b.setUpperBound(1), g.getEStructuralFeatures().push(b), s.Literals.PAGE__ID = b;
    const M = new a();
    M.setName("name"), M.setLowerBound(0), M.setUpperBound(1), g.getEStructuralFeatures().push(M), s.Literals.PAGE__NAME = M;
    const P = new a();
    P.setName("description"), P.setLowerBound(0), P.setUpperBound(1), g.getEStructuralFeatures().push(P), s.Literals.PAGE__DESCRIPTION = P;
    const Y = new a();
    Y.setName("icon"), Y.setLowerBound(0), Y.setUpperBound(1), g.getEStructuralFeatures().push(Y), s.Literals.PAGE__ICON = Y;
    const K = new a();
    K.setName("visibleInNavigation"), K.setLowerBound(0), K.setUpperBound(1), g.getEStructuralFeatures().push(K), s.Literals.PAGE__VISIBLE_IN_NAVIGATION = K;
    const V = new a();
    V.setName("layoutId"), V.setLowerBound(0), V.setUpperBound(1), g.getEStructuralFeatures().push(V), s.Literals.PAGE__LAYOUT_ID = V;
    const z = new a();
    z.setName("layoutSettings"), z.setLowerBound(0), z.setUpperBound(1), g.getEStructuralFeatures().push(z), s.Literals.PAGE__LAYOUT_SETTINGS = z;
    const H = new a();
    H.setName("backgroundColor"), H.setLowerBound(0), H.setUpperBound(1), g.getEStructuralFeatures().push(H), s.Literals.PAGE__BACKGROUND_COLOR = H;
    const x = new a();
    x.setName("backgroundImage"), x.setLowerBound(0), x.setUpperBound(1), g.getEStructuralFeatures().push(x), s.Literals.PAGE__BACKGROUND_IMAGE = x;
    const Z = new a();
    Z.setName("backgroundSize"), Z.setLowerBound(0), Z.setUpperBound(1), g.getEStructuralFeatures().push(Z), s.Literals.PAGE__BACKGROUND_SIZE = Z;
    const J = new a();
    J.setName("backgroundPosition"), J.setLowerBound(0), J.setUpperBound(1), g.getEStructuralFeatures().push(J), s.Literals.PAGE__BACKGROUND_POSITION = J;
    const X = new a();
    X.setName("backgroundRepeat"), X.setLowerBound(0), X.setUpperBound(1), g.getEStructuralFeatures().push(X), s.Literals.PAGE__BACKGROUND_REPEAT = X;
    const y = new f();
    y.setContainment(!0), y.setName("widgets"), y.setLowerBound(0), y.setUpperBound(-1), g.getEStructuralFeatures().push(y), s.Literals.PAGE__WIDGETS = y;
    const w = new f();
    w.setContainment(!0), w.setName("layout"), w.setLowerBound(0), w.setUpperBound(-1), g.getEStructuralFeatures().push(w), s.Literals.PAGE__LAYOUT = w;
    const S = new _();
    S.setName("Widget"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), s.Literals.WIDGET = S;
    const j = new a();
    j.setName("uid"), j.setLowerBound(1), j.setUpperBound(1), S.getEStructuralFeatures().push(j), s.Literals.WIDGET__UID = j;
    const $ = new a();
    $.setName("type"), $.setLowerBound(0), $.setUpperBound(1), S.getEStructuralFeatures().push($), s.Literals.WIDGET__TYPE = $;
    const B = new f();
    B.setContainment(!1), B.setName("datasource"), B.setLowerBound(0), B.setUpperBound(1), S.getEStructuralFeatures().push(B), s.Literals.WIDGET__DATASOURCE = B;
    const q = new a();
    q.setName("config"), q.setLowerBound(0), q.setUpperBound(1), S.getEStructuralFeatures().push(q), s.Literals.WIDGET__CONFIG = q;
    const Q = new a();
    Q.setName("wrapperConfig"), Q.setLowerBound(0), Q.setUpperBound(1), S.getEStructuralFeatures().push(Q), s.Literals.WIDGET__WRAPPER_CONFIG = Q;
    const N = new _();
    N.setName("Variable"), N.setAbstract(!1), N.setInterface(!1), this.getEClassifiers().push(N), N.setEPackage(this), s.Literals.VARIABLE = N;
    const W = new a();
    W.setName("uid"), W.setLowerBound(1), W.setUpperBound(1), N.getEStructuralFeatures().push(W), s.Literals.VARIABLE__UID = W;
    const m = new a();
    m.setName("name"), m.setLowerBound(1), m.setUpperBound(1), N.getEStructuralFeatures().push(m), s.Literals.VARIABLE__NAME = m;
    const k = new a();
    k.setName("type"), k.setLowerBound(0), k.setUpperBound(1), N.getEStructuralFeatures().push(k), s.Literals.VARIABLE__TYPE = k;
    const ee = new a();
    ee.setName("scope"), ee.setLowerBound(0), ee.setUpperBound(1), N.getEStructuralFeatures().push(ee), s.Literals.VARIABLE__SCOPE = ee;
    const te = new a();
    te.setName("accessMode"), te.setLowerBound(0), te.setUpperBound(1), N.getEStructuralFeatures().push(te), s.Literals.VARIABLE__ACCESS_MODE = te;
    const v = new f();
    v.setContainment(!1), v.setName("page"), v.setLowerBound(0), v.setUpperBound(1), N.getEStructuralFeatures().push(v), s.Literals.VARIABLE__PAGE = v;
    const se = new a();
    se.setName("definition"), se.setLowerBound(0), se.setUpperBound(1), N.getEStructuralFeatures().push(se), s.Literals.VARIABLE__DEFINITION = se;
    const C = new _();
    C.setName("EventMapping"), C.setAbstract(!1), C.setInterface(!1), this.getEClassifiers().push(C), C.setEPackage(this), s.Literals.EVENT_MAPPING = C;
    const ie = new a();
    ie.setName("id"), ie.setLowerBound(1), ie.setUpperBound(1), C.getEStructuralFeatures().push(ie), s.Literals.EVENT_MAPPING__ID = ie;
    const re = new a();
    re.setName("definition"), re.setLowerBound(0), re.setUpperBound(1), C.getEStructuralFeatures().push(re), s.Literals.EVENT_MAPPING__DEFINITION = re;
    const A = new _();
    A.setName("LayoutItem"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), s.Literals.LAYOUT_ITEM = A;
    const ue = new a();
    ue.setName("id"), ue.setLowerBound(1), ue.setUpperBound(1), A.getEStructuralFeatures().push(ue), s.Literals.LAYOUT_ITEM__ID = ue;
    const ae = new a();
    ae.setName("x"), ae.setLowerBound(1), ae.setUpperBound(1), A.getEStructuralFeatures().push(ae), s.Literals.LAYOUT_ITEM__X = ae;
    const ne = new a();
    ne.setName("y"), ne.setLowerBound(1), ne.setUpperBound(1), A.getEStructuralFeatures().push(ne), s.Literals.LAYOUT_ITEM__Y = ne;
    const oe = new a();
    oe.setName("z"), oe.setLowerBound(1), oe.setUpperBound(1), A.getEStructuralFeatures().push(oe), s.Literals.LAYOUT_ITEM__Z = oe;
    const he = new a();
    he.setName("width"), he.setLowerBound(1), he.setUpperBound(1), A.getEStructuralFeatures().push(he), s.Literals.LAYOUT_ITEM__WIDTH = he;
    const Ee = new a();
    Ee.setName("height"), Ee.setLowerBound(1), Ee.setUpperBound(1), A.getEStructuralFeatures().push(Ee), s.Literals.LAYOUT_ITEM__HEIGHT = Ee;
    const ce = new a();
    ce.setName("group"), ce.setLowerBound(0), ce.setUpperBound(1), A.getEStructuralFeatures().push(ce), s.Literals.LAYOUT_ITEM__GROUP = ce;
    const T = new _();
    T.setName("Datasource"), T.setAbstract(!1), T.setInterface(!1), this.getEClassifiers().push(T), T.setEPackage(this), s.Literals.DATASOURCE = T;
    const ge = new a();
    ge.setName("uid"), ge.setLowerBound(1), ge.setUpperBound(1), T.getEStructuralFeatures().push(ge), s.Literals.DATASOURCE__UID = ge;
    const le = new a();
    le.setName("name"), le.setLowerBound(0), le.setUpperBound(1), T.getEStructuralFeatures().push(le), s.Literals.DATASOURCE__NAME = le;
    const de = new a();
    de.setName("type"), de.setLowerBound(0), de.setUpperBound(1), T.getEStructuralFeatures().push(de), s.Literals.DATASOURCE__TYPE = de;
    const p = new f();
    p.setContainment(!1), p.setName("connection"), p.setLowerBound(0), p.setUpperBound(1), T.getEStructuralFeatures().push(p), s.Literals.DATASOURCE__CONNECTION = p;
    const Ne = new a();
    Ne.setName("config"), Ne.setLowerBound(0), Ne.setUpperBound(1), T.getEStructuralFeatures().push(Ne), s.Literals.DATASOURCE__CONFIG = Ne;
    const O = new _();
    O.setName("Connection"), O.setAbstract(!1), O.setInterface(!1), this.getEClassifiers().push(O), O.setEPackage(this), s.Literals.CONNECTION = O;
    const Ae = new a();
    Ae.setName("uid"), Ae.setLowerBound(1), Ae.setUpperBound(1), O.getEStructuralFeatures().push(Ae), s.Literals.CONNECTION__UID = Ae;
    const Se = new a();
    Se.setName("name"), Se.setLowerBound(0), Se.setUpperBound(1), O.getEStructuralFeatures().push(Se), s.Literals.CONNECTION__NAME = Se;
    const Te = new a();
    Te.setName("type"), Te.setLowerBound(0), Te.setUpperBound(1), O.getEStructuralFeatures().push(Te), s.Literals.CONNECTION__TYPE = Te;
    const fe = new a();
    fe.setName("config"), fe.setLowerBound(0), fe.setUpperBound(1), O.getEStructuralFeatures().push(fe), s.Literals.CONNECTION__CONFIG = fe, s.Literals.WORKSPACE__CONNECTIONS.setEType(s.Literals.CONNECTION), s.Literals.WORKSPACE__DATASOURCES.setEType(s.Literals.DATASOURCE), s.Literals.WORKSPACE__PAGES.setEType(s.Literals.PAGE), s.Literals.WORKSPACE__VARIABLES.setEType(s.Literals.VARIABLE), s.Literals.WORKSPACE__EVENT_MAPPINGS.setEType(s.Literals.EVENT_MAPPING), s.Literals.WORKSPACE__DEFAULT_PAGE.setEType(s.Literals.PAGE), s.Literals.PAGE__ID.setEType(n().getEClassifier("EString")), s.Literals.PAGE__NAME.setEType(n().getEClassifier("EString")), s.Literals.PAGE__DESCRIPTION.setEType(n().getEClassifier("EString")), s.Literals.PAGE__ICON.setEType(n().getEClassifier("EString")), s.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(n().getEClassifier("EBoolean")), s.Literals.PAGE__LAYOUT_ID.setEType(n().getEClassifier("EString")), s.Literals.PAGE__LAYOUT_SETTINGS.setEType(n().getEClassifier("EJavaObject")), s.Literals.PAGE__BACKGROUND_COLOR.setEType(n().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_IMAGE.setEType(n().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_SIZE.setEType(n().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_POSITION.setEType(n().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_REPEAT.setEType(n().getEClassifier("EString")), s.Literals.PAGE__WIDGETS.setEType(s.Literals.WIDGET), s.Literals.PAGE__LAYOUT.setEType(s.Literals.LAYOUT_ITEM), s.Literals.WIDGET__UID.setEType(n().getEClassifier("EString")), s.Literals.WIDGET__TYPE.setEType(n().getEClassifier("EString")), s.Literals.WIDGET__DATASOURCE.setEType(s.Literals.DATASOURCE), s.Literals.WIDGET__CONFIG.setEType(n().getEClassifier("EJavaObject")), s.Literals.WIDGET__WRAPPER_CONFIG.setEType(n().getEClassifier("EJavaObject")), s.Literals.VARIABLE__UID.setEType(n().getEClassifier("EString")), s.Literals.VARIABLE__NAME.setEType(n().getEClassifier("EString")), s.Literals.VARIABLE__TYPE.setEType(n().getEClassifier("EString")), s.Literals.VARIABLE__SCOPE.setEType(n().getEClassifier("EString")), s.Literals.VARIABLE__ACCESS_MODE.setEType(n().getEClassifier("EString")), s.Literals.VARIABLE__PAGE.setEType(s.Literals.PAGE), s.Literals.VARIABLE__DEFINITION.setEType(n().getEClassifier("EJavaObject")), s.Literals.EVENT_MAPPING__ID.setEType(n().getEClassifier("EString")), s.Literals.EVENT_MAPPING__DEFINITION.setEType(n().getEClassifier("EJavaObject")), s.Literals.LAYOUT_ITEM__ID.setEType(n().getEClassifier("EString")), s.Literals.LAYOUT_ITEM__X.setEType(n().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Y.setEType(n().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Z.setEType(n().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__WIDTH.setEType(n().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__HEIGHT.setEType(n().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__GROUP.setEType(n().getEClassifier("EString")), s.Literals.DATASOURCE__UID.setEType(n().getEClassifier("EString")), s.Literals.DATASOURCE__NAME.setEType(n().getEClassifier("EString")), s.Literals.DATASOURCE__TYPE.setEType(n().getEClassifier("EString")), s.Literals.DATASOURCE__CONNECTION.setEType(s.Literals.CONNECTION), s.Literals.DATASOURCE__CONFIG.setEType(n().getEClassifier("EJavaObject")), s.Literals.CONNECTION__UID.setEType(n().getEClassifier("EString")), s.Literals.CONNECTION__NAME.setEType(n().getEClassifier("EString")), s.Literals.CONNECTION__TYPE.setEType(n().getEClassifier("EString")), s.Literals.CONNECTION__CONFIG.setEType(n().getEClassifier("EJavaObject"));
  }
}
s.eINSTANCE;
De.INSTANCE.registerPackage(s.eINSTANCE);
const Ce = Re("Workspace"), Le = Symbol.for(Ce);
function Ie({ services: I }) {
  I.register(Ce, new E());
}
function Fe({ services: I }) {
  I.unregister(Ce);
}
const ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: c,
  DatasourceImpl: h,
  EventMappingImpl: l,
  LayoutItemImpl: u,
  PageImpl: i,
  VariableImpl: r,
  WORKSPACE: Ce,
  WidgetImpl: o,
  WorkspaceFactory: Oe,
  WorkspaceImpl: E,
  WorkspacePackage: s,
  activate: Ie,
  deactivate: Fe,
  identifier: Le
}, Symbol.toStringTag, { value: "Module" })), _e = "org.eclipse.daanse.board.app.lib.model.workspace", we = "0.0.1-next.1";
async function ve(I) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${_e}: tsm runtime is not initialized`);
  e.register(_e, ye, we, "lib.model.workspace"), await Ie?.(I);
}
async function pe(I) {
  await Fe?.(I);
}
export {
  c as ConnectionImpl,
  h as DatasourceImpl,
  l as EventMappingImpl,
  u as LayoutItemImpl,
  i as PageImpl,
  r as VariableImpl,
  Ce as WORKSPACE,
  o as WidgetImpl,
  Oe as WorkspaceFactory,
  E as WorkspaceImpl,
  s as WorkspacePackage,
  ve as activate,
  pe as deactivate,
  Le as identifier
};
