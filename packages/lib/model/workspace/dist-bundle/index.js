import { BasicEObject as Y, createContainmentEList as Z, BasicEFactory as X, BasicEPackage as q, EPackageRegistry as H, BasicEClass as M, BasicEReference as P, BasicEAttribute as u, getEcorePackage as o } from "@emfts/core";
const { serviceId: $ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class n extends Y {
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
    return i.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = Z(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  get datasources() {
    return this._datasources || (this._datasources = Z(this, this.eClass().getEStructuralFeature("datasources"))), this._datasources;
  }
  get pages() {
    return this._pages || (this._pages = Z(this, this.eClass().getEStructuralFeature("pages"))), this._pages;
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
      getFeature: () => this.eClass().getEStructuralFeature(n.DEFAULT_PAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.DEFAULT_PAGE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.CONNECTIONS:
        return this.connections;
      case n.DATASOURCES:
        return this.datasources;
      case n.PAGES:
        return this.pages;
      case n.DEFAULT_PAGE:
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
      case n.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
        break;
      case n.DATASOURCES:
        this.datasources.clear(), this.datasources.addAll(t), super.eSet(e, t);
        break;
      case n.PAGES:
        this.pages.clear(), this.pages.addAll(t), super.eSet(e, t);
        break;
      case n.DEFAULT_PAGE:
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
      case n.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case n.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      case n.PAGES:
        return this._pages !== void 0 && !this._pages.isEmpty();
      case n.DEFAULT_PAGE:
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
      case n.CONNECTIONS:
        this._connections && this._connections.clear();
        return;
      case n.DATASOURCES:
        this._datasources && this._datasources.clear();
        return;
      case n.PAGES:
        this._pages && this._pages.clear();
        return;
      case n.DEFAULT_PAGE:
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
class s extends Y {
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
  // Private fields
  _id;
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
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.PAGE;
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
      getFeature: () => this.eClass().getEStructuralFeature(s.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.DESCRIPTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.DESCRIPTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.ICON,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.VISIBLE_IN_NAVIGATION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.VISIBLE_IN_NAVIGATION,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.LAYOUT_ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.LAYOUT_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.LAYOUT_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.LAYOUT_SETTINGS,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_IMAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_IMAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_POSITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_POSITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_REPEAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_REPEAT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.ID:
        return this.id;
      case s.NAME:
        return this.name;
      case s.DESCRIPTION:
        return this.description;
      case s.ICON:
        return this.icon;
      case s.VISIBLE_IN_NAVIGATION:
        return this.visibleInNavigation;
      case s.LAYOUT_ID:
        return this.layoutId;
      case s.LAYOUT_SETTINGS:
        return this.layoutSettings;
      case s.BACKGROUND_COLOR:
        return this.backgroundColor;
      case s.BACKGROUND_IMAGE:
        return this.backgroundImage;
      case s.BACKGROUND_SIZE:
        return this.backgroundSize;
      case s.BACKGROUND_POSITION:
        return this.backgroundPosition;
      case s.BACKGROUND_REPEAT:
        return this.backgroundRepeat;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case s.ID:
        this.id = t, super.eSet(e, t);
        break;
      case s.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case s.DESCRIPTION:
        this.description = t, super.eSet(e, t);
        break;
      case s.ICON:
        this.icon = t, super.eSet(e, t);
        break;
      case s.VISIBLE_IN_NAVIGATION:
        this.visibleInNavigation = t, super.eSet(e, t);
        break;
      case s.LAYOUT_ID:
        this.layoutId = t, super.eSet(e, t);
        break;
      case s.LAYOUT_SETTINGS:
        this.layoutSettings = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_IMAGE:
        this.backgroundImage = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_SIZE:
        this.backgroundSize = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_POSITION:
        this.backgroundPosition = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_REPEAT:
        this.backgroundRepeat = t, super.eSet(e, t);
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
      case s.ID:
        return this._id !== void 0;
      case s.NAME:
        return this._name !== void 0;
      case s.DESCRIPTION:
        return this._description !== void 0;
      case s.ICON:
        return this._icon !== void 0;
      case s.VISIBLE_IN_NAVIGATION:
        return this._visibleInNavigation !== void 0;
      case s.LAYOUT_ID:
        return this._layoutId !== void 0;
      case s.LAYOUT_SETTINGS:
        return this._layoutSettings !== void 0;
      case s.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case s.BACKGROUND_IMAGE:
        return this._backgroundImage !== void 0;
      case s.BACKGROUND_SIZE:
        return this._backgroundSize !== void 0;
      case s.BACKGROUND_POSITION:
        return this._backgroundPosition !== void 0;
      case s.BACKGROUND_REPEAT:
        return this._backgroundRepeat !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.ID:
        this._id = void 0;
        return;
      case s.NAME:
        this._name = void 0;
        return;
      case s.DESCRIPTION:
        this._description = void 0;
        return;
      case s.ICON:
        this._icon = void 0;
        return;
      case s.VISIBLE_IN_NAVIGATION:
        this._visibleInNavigation = void 0;
        return;
      case s.LAYOUT_ID:
        this._layoutId = void 0;
        return;
      case s.LAYOUT_SETTINGS:
        this._layoutSettings = void 0;
        return;
      case s.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case s.BACKGROUND_IMAGE:
        this._backgroundImage = void 0;
        return;
      case s.BACKGROUND_SIZE:
        this._backgroundSize = void 0;
        return;
      case s.BACKGROUND_POSITION:
        this._backgroundPosition = void 0;
        return;
      case s.BACKGROUND_REPEAT:
        this._backgroundRepeat = void 0;
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
      backgroundRepeat: this.backgroundRepeat
    };
  }
}
class r extends Y {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONNECTION = 3;
  static CONFIG = 4;
  // Private fields
  _uid;
  _name;
  _type;
  _connection;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.DATASOURCE;
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
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CONNECTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(r.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CONFIG,
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
      case r.CONNECTION:
        return this.connection;
      case r.CONFIG:
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
      case r.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case r.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case r.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case r.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case r.CONFIG:
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
      case r.UID:
        return this._uid !== void 0;
      case r.NAME:
        return this._name !== void 0;
      case r.TYPE:
        return this._type !== void 0;
      case r.CONNECTION:
        return this._connection !== void 0;
      case r.CONFIG:
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
      case r.UID:
        this._uid = void 0;
        return;
      case r.NAME:
        this._name = void 0;
        return;
      case r.TYPE:
        this._type = void 0;
        return;
      case r.CONNECTION:
        this._connection = void 0;
        return;
      case r.CONFIG:
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
class a extends Y {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONFIG = 3;
  // Private fields
  _uid;
  _name;
  _type;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.CONNECTION;
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
        return this._uid !== void 0;
      case a.NAME:
        return this._name !== void 0;
      case a.TYPE:
        return this._type !== void 0;
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
        this._uid = void 0;
        return;
      case a.NAME:
        this._name = void 0;
        return;
      case a.TYPE:
        this._type = void 0;
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
      config: this.config
    };
  }
}
class V extends X {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new V()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new n();
  }
  /**
   * Create a new Page instance
   */
  createPage() {
    return new s();
  }
  /**
   * Create a new Datasource instance
   */
  createDatasource() {
    return new r();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new a();
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
      case "Datasource":
        return this.createDatasource();
      case "Connection":
        return this.createConnection();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class i extends q {
  static eNAME = "workspace";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.model.workspace";
  static eNS_PREFIX = "workspace";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
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
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    H.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(V.eINSTANCE);
    const e = new M();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.WORKSPACE = e;
    const t = new P();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), i.Literals.WORKSPACE__CONNECTIONS = t;
    const h = new P();
    h.setContainment(!0), h.setName("datasources"), h.setLowerBound(0), h.setUpperBound(-1), e.getEStructuralFeatures().push(h), i.Literals.WORKSPACE__DATASOURCES = h;
    const l = new P();
    l.setContainment(!0), l.setName("pages"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), i.Literals.WORKSPACE__PAGES = l;
    const d = new P();
    d.setContainment(!1), d.setName("defaultPage"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), i.Literals.WORKSPACE__DEFAULT_PAGE = d;
    const E = new M();
    E.setName("Page"), E.setAbstract(!1), E.setInterface(!1), this.getEClassifiers().push(E), E.setEPackage(this), i.Literals.PAGE = E;
    const S = new u();
    S.setName("id"), S.setLowerBound(0), S.setUpperBound(1), E.getEStructuralFeatures().push(S), i.Literals.PAGE__ID = S;
    const A = new u();
    A.setName("name"), A.setLowerBound(0), A.setUpperBound(1), E.getEStructuralFeatures().push(A), i.Literals.PAGE__NAME = A;
    const C = new u();
    C.setName("description"), C.setLowerBound(0), C.setUpperBound(1), E.getEStructuralFeatures().push(C), i.Literals.PAGE__DESCRIPTION = C;
    const T = new u();
    T.setName("icon"), T.setLowerBound(0), T.setUpperBound(1), E.getEStructuralFeatures().push(T), i.Literals.PAGE__ICON = T;
    const _ = new u();
    _.setName("visibleInNavigation"), _.setLowerBound(0), _.setUpperBound(1), E.getEStructuralFeatures().push(_), i.Literals.PAGE__VISIBLE_IN_NAVIGATION = _;
    const f = new u();
    f.setName("layoutId"), f.setLowerBound(0), f.setUpperBound(1), E.getEStructuralFeatures().push(f), i.Literals.PAGE__LAYOUT_ID = f;
    const I = new u();
    I.setName("layoutSettings"), I.setLowerBound(0), I.setUpperBound(1), E.getEStructuralFeatures().push(I), i.Literals.PAGE__LAYOUT_SETTINGS = I;
    const D = new u();
    D.setName("backgroundColor"), D.setLowerBound(0), D.setUpperBound(1), E.getEStructuralFeatures().push(D), i.Literals.PAGE__BACKGROUND_COLOR = D;
    const R = new u();
    R.setName("backgroundImage"), R.setLowerBound(0), R.setUpperBound(1), E.getEStructuralFeatures().push(R), i.Literals.PAGE__BACKGROUND_IMAGE = R;
    const G = new u();
    G.setName("backgroundSize"), G.setLowerBound(0), G.setUpperBound(1), E.getEStructuralFeatures().push(G), i.Literals.PAGE__BACKGROUND_SIZE = G;
    const U = new u();
    U.setName("backgroundPosition"), U.setLowerBound(0), U.setUpperBound(1), E.getEStructuralFeatures().push(U), i.Literals.PAGE__BACKGROUND_POSITION = U;
    const F = new u();
    F.setName("backgroundRepeat"), F.setLowerBound(0), F.setUpperBound(1), E.getEStructuralFeatures().push(F), i.Literals.PAGE__BACKGROUND_REPEAT = F;
    const c = new M();
    c.setName("Datasource"), c.setAbstract(!1), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), i.Literals.DATASOURCE = c;
    const L = new u();
    L.setName("uid"), L.setLowerBound(0), L.setUpperBound(1), c.getEStructuralFeatures().push(L), i.Literals.DATASOURCE__UID = L;
    const y = new u();
    y.setName("name"), y.setLowerBound(0), y.setUpperBound(1), c.getEStructuralFeatures().push(y), i.Literals.DATASOURCE__NAME = y;
    const b = new u();
    b.setName("type"), b.setLowerBound(0), b.setUpperBound(1), c.getEStructuralFeatures().push(b), i.Literals.DATASOURCE__TYPE = b;
    const O = new P();
    O.setContainment(!1), O.setName("connection"), O.setLowerBound(0), O.setUpperBound(1), c.getEStructuralFeatures().push(O), i.Literals.DATASOURCE__CONNECTION = O;
    const B = new u();
    B.setName("config"), B.setLowerBound(0), B.setUpperBound(1), c.getEStructuralFeatures().push(B), i.Literals.DATASOURCE__CONFIG = B;
    const N = new M();
    N.setName("Connection"), N.setAbstract(!1), N.setInterface(!1), this.getEClassifiers().push(N), N.setEPackage(this), i.Literals.CONNECTION = N;
    const v = new u();
    v.setName("uid"), v.setLowerBound(0), v.setUpperBound(1), N.getEStructuralFeatures().push(v), i.Literals.CONNECTION__UID = v;
    const w = new u();
    w.setName("name"), w.setLowerBound(0), w.setUpperBound(1), N.getEStructuralFeatures().push(w), i.Literals.CONNECTION__NAME = w;
    const p = new u();
    p.setName("type"), p.setLowerBound(0), p.setUpperBound(1), N.getEStructuralFeatures().push(p), i.Literals.CONNECTION__TYPE = p;
    const K = new u();
    K.setName("config"), K.setLowerBound(0), K.setUpperBound(1), N.getEStructuralFeatures().push(K), i.Literals.CONNECTION__CONFIG = K, i.Literals.WORKSPACE__CONNECTIONS.setEType(i.Literals.CONNECTION), i.Literals.WORKSPACE__DATASOURCES.setEType(i.Literals.DATASOURCE), i.Literals.WORKSPACE__PAGES.setEType(i.Literals.PAGE), i.Literals.WORKSPACE__DEFAULT_PAGE.setEType(i.Literals.PAGE), i.Literals.PAGE__ID.setEType(o().getEClassifier("EString")), i.Literals.PAGE__NAME.setEType(o().getEClassifier("EString")), i.Literals.PAGE__DESCRIPTION.setEType(o().getEClassifier("EString")), i.Literals.PAGE__ICON.setEType(o().getEClassifier("EString")), i.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(o().getEClassifier("EBoolean")), i.Literals.PAGE__LAYOUT_ID.setEType(o().getEClassifier("EString")), i.Literals.PAGE__LAYOUT_SETTINGS.setEType(o().getEClassifier("EJavaObject")), i.Literals.PAGE__BACKGROUND_COLOR.setEType(o().getEClassifier("EString")), i.Literals.PAGE__BACKGROUND_IMAGE.setEType(o().getEClassifier("EString")), i.Literals.PAGE__BACKGROUND_SIZE.setEType(o().getEClassifier("EString")), i.Literals.PAGE__BACKGROUND_POSITION.setEType(o().getEClassifier("EString")), i.Literals.PAGE__BACKGROUND_REPEAT.setEType(o().getEClassifier("EString")), i.Literals.DATASOURCE__UID.setEType(o().getEClassifier("EString")), i.Literals.DATASOURCE__NAME.setEType(o().getEClassifier("EString")), i.Literals.DATASOURCE__TYPE.setEType(o().getEClassifier("EString")), i.Literals.DATASOURCE__CONNECTION.setEType(i.Literals.CONNECTION), i.Literals.DATASOURCE__CONFIG.setEType(o().getEClassifier("EJavaObject")), i.Literals.CONNECTION__UID.setEType(o().getEClassifier("EString")), i.Literals.CONNECTION__NAME.setEType(o().getEClassifier("EString")), i.Literals.CONNECTION__TYPE.setEType(o().getEClassifier("EString")), i.Literals.CONNECTION__CONFIG.setEType(o().getEClassifier("EJavaObject"));
  }
}
i.eINSTANCE;
const z = $("Workspace"), Q = Symbol.for(z);
function J({ services: g }) {
  g.register(z, new n());
}
function j({ services: g }) {
  g.unregister(z);
}
const m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: a,
  DatasourceImpl: r,
  PageImpl: s,
  WORKSPACE: z,
  WorkspaceFactory: V,
  WorkspaceImpl: n,
  WorkspacePackage: i,
  activate: J,
  deactivate: j,
  identifier: Q
}, Symbol.toStringTag, { value: "Module" })), x = "org.eclipse.daanse.board.app.lib.model.workspace", k = "0.0.1-next.1";
async function ee(g) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${x}: tsm runtime is not initialized`);
  e.register(x, m, k, "lib.model.workspace"), await J?.(g);
}
async function te(g) {
  await j?.(g);
}
export {
  a as ConnectionImpl,
  r as DatasourceImpl,
  s as PageImpl,
  z as WORKSPACE,
  V as WorkspaceFactory,
  n as WorkspaceImpl,
  i as WorkspacePackage,
  ee as activate,
  te as deactivate,
  Q as identifier
};
