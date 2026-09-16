import { BasicEObject as I, createContainmentEList as G, createBasicEList as be, BasicEFactory as Ye, BasicEPackage as Ke, EPackageRegistry as pe, BasicEClass as D, BasicEReference as C, BasicEAttribute as r, getEcorePackage as u } from "@emfts/core";
const { serviceId: Ve } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class c extends I {
  // Feature ID Constants (eLiterals)
  static CONNECTIONS = 0;
  static DATASOURCES = 1;
  static BOARD = 2;
  static VARIABLES = 3;
  static EVENT_MAPPINGS = 4;
  // Private fields
  _connections;
  _datasources;
  _board;
  _variables;
  _eventMappings;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = G(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  get datasources() {
    return this._datasources || (this._datasources = G(this, this.eClass().getEStructuralFeature("datasources"))), this._datasources;
  }
  get board() {
    return this._board;
  }
  set board(e) {
    const t = this._board;
    this._board = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.BOARD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.BOARD,
      merge: () => !1
    });
  }
  get variables() {
    return this._variables || (this._variables = G(this, this.eClass().getEStructuralFeature("variables"))), this._variables;
  }
  get eventMappings() {
    return this._eventMappings || (this._eventMappings = G(this, this.eClass().getEStructuralFeature("eventMappings"))), this._eventMappings;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.CONNECTIONS:
        return this.connections;
      case c.DATASOURCES:
        return this.datasources;
      case c.BOARD:
        return this.board;
      case c.VARIABLES:
        return this.variables;
      case c.EVENT_MAPPINGS:
        return this.eventMappings;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case c.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
        break;
      case c.DATASOURCES:
        this.datasources.clear(), this.datasources.addAll(t), super.eSet(e, t);
        break;
      case c.BOARD:
        this.board = t, super.eSet(e, t);
        break;
      case c.VARIABLES:
        this.variables.clear(), this.variables.addAll(t), super.eSet(e, t);
        break;
      case c.EVENT_MAPPINGS:
        this.eventMappings.clear(), this.eventMappings.addAll(t), super.eSet(e, t);
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
      case c.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case c.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      case c.BOARD:
        return this._board !== void 0;
      case c.VARIABLES:
        return this._variables !== void 0 && !this._variables.isEmpty();
      case c.EVENT_MAPPINGS:
        return this._eventMappings !== void 0 && !this._eventMappings.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.CONNECTIONS:
        this._connections && this._connections.clear();
        return;
      case c.DATASOURCES:
        this._datasources && this._datasources.clear();
        return;
      case c.BOARD:
        this._board = void 0;
        return;
      case c.VARIABLES:
        this._variables && this._variables.clear();
        return;
      case c.EVENT_MAPPINGS:
        this._eventMappings && this._eventMappings.clear();
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
      board: this.board,
      variables: this.variables?.toArray?.() ?? this.variables,
      eventMappings: this.eventMappings?.toArray?.() ?? this.eventMappings
    };
  }
}
class h extends I {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static NAME = 1;
  static DESCRIPTION = 2;
  static ICON = 3;
  static PAGES = 4;
  static DEFAULT_PAGE = 5;
  // Private fields
  _id = "";
  _name;
  _description;
  _icon;
  _pages;
  _defaultPage;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.BOARD;
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
      getFeature: () => this.eClass().getEStructuralFeature(h.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.ID,
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
  get description() {
    return this._description;
  }
  set description(e) {
    const t = this._description;
    this._description = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(h.DESCRIPTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.DESCRIPTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(h.ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => h.ICON,
      merge: () => !1
    });
  }
  get pages() {
    return this._pages || (this._pages = G(this, this.eClass().getEStructuralFeature("pages"))), this._pages;
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
      case h.ID:
        return this.id;
      case h.NAME:
        return this.name;
      case h.DESCRIPTION:
        return this.description;
      case h.ICON:
        return this.icon;
      case h.PAGES:
        return this.pages;
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
      case h.ID:
        this.id = t, super.eSet(e, t);
        break;
      case h.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case h.DESCRIPTION:
        this.description = t, super.eSet(e, t);
        break;
      case h.ICON:
        this.icon = t, super.eSet(e, t);
        break;
      case h.PAGES:
        this.pages.clear(), this.pages.addAll(t), super.eSet(e, t);
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
      case h.ID:
        return this._id !== "";
      case h.NAME:
        return this._name !== void 0;
      case h.DESCRIPTION:
        return this._description !== void 0;
      case h.ICON:
        return this._icon !== void 0;
      case h.PAGES:
        return this._pages !== void 0 && !this._pages.isEmpty();
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
      case h.ID:
        this._id = "";
        return;
      case h.NAME:
        this._name = void 0;
        return;
      case h.DESCRIPTION:
        this._description = void 0;
        return;
      case h.ICON:
        this._icon = void 0;
        return;
      case h.PAGES:
        this._pages && this._pages.clear();
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
      id: this.id,
      name: this.name,
      description: this.description,
      icon: this.icon,
      pages: this.pages?.toArray?.() ?? this.pages,
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
    return this._widgets || (this._widgets = G(this, this.eClass().getEStructuralFeature("widgets"))), this._widgets;
  }
  get layout() {
    return this._layout || (this._layout = G(this, this.eClass().getEStructuralFeature("layout"))), this._layout;
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
class g extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(g.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.UID,
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
  get datasource() {
    return this._datasource;
  }
  set datasource(e) {
    const t = this._datasource;
    this._datasource = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.DATASOURCE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.DATASOURCE,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.CONFIG,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.WRAPPER_CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.WRAPPER_CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.UID:
        return this.uid;
      case g.TYPE:
        return this.type;
      case g.DATASOURCE:
        return this.datasource;
      case g.CONFIG:
        return this.config;
      case g.WRAPPER_CONFIG:
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
      case g.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case g.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case g.DATASOURCE:
        this.datasource = t, super.eSet(e, t);
        break;
      case g.CONFIG:
        this.config = t, super.eSet(e, t);
        break;
      case g.WRAPPER_CONFIG:
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
      case g.UID:
        return this._uid !== "";
      case g.TYPE:
        return this._type !== void 0;
      case g.DATASOURCE:
        return this._datasource !== void 0;
      case g.CONFIG:
        return this._config !== void 0;
      case g.WRAPPER_CONFIG:
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
      case g.UID:
        this._uid = "";
        return;
      case g.TYPE:
        this._type = void 0;
        return;
      case g.DATASOURCE:
        this._datasource = void 0;
        return;
      case g.CONFIG:
        this._config = void 0;
        return;
      case g.WRAPPER_CONFIG:
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
class a extends I {
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
  get scope() {
    return this._scope;
  }
  set scope(e) {
    const t = this._scope;
    this._scope = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.SCOPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.SCOPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.ACCESS_MODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.ACCESS_MODE,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.PAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.PAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.DEFINITION,
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
      case a.SCOPE:
        return this.scope;
      case a.ACCESS_MODE:
        return this.accessMode;
      case a.PAGE:
        return this.page;
      case a.DEFINITION:
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
      case a.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case a.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case a.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case a.SCOPE:
        this.scope = t, super.eSet(e, t);
        break;
      case a.ACCESS_MODE:
        this.accessMode = t, super.eSet(e, t);
        break;
      case a.PAGE:
        this.page = t, super.eSet(e, t);
        break;
      case a.DEFINITION:
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
      case a.UID:
        return this._uid !== "";
      case a.NAME:
        return this._name !== "";
      case a.TYPE:
        return this._type !== void 0;
      case a.SCOPE:
        return this._scope !== void 0;
      case a.ACCESS_MODE:
        return this._accessMode !== void 0;
      case a.PAGE:
        return this._page !== void 0;
      case a.DEFINITION:
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
      case a.UID:
        this._uid = "";
        return;
      case a.NAME:
        this._name = "";
        return;
      case a.TYPE:
        this._type = void 0;
        return;
      case a.SCOPE:
        this._scope = void 0;
        return;
      case a.ACCESS_MODE:
        this._accessMode = void 0;
        return;
      case a.PAGE:
        this._page = void 0;
        return;
      case a.DEFINITION:
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
class d extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(d.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(d.DEFINITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.DEFINITION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.ID:
        return this.id;
      case d.DEFINITION:
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
      case d.ID:
        this.id = t, super.eSet(e, t);
        break;
      case d.DEFINITION:
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
      case d.ID:
        return this._id !== "";
      case d.DEFINITION:
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
      case d.ID:
        this._id = "";
        return;
      case d.DEFINITION:
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
class n extends I {
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
      getFeature: () => this.eClass().getEStructuralFeature(n.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.X),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.X,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.Y),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.Y,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.Z),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.Z,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.HEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.GROUP,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.ID:
        return this.id;
      case n.X:
        return this.x;
      case n.Y:
        return this.y;
      case n.Z:
        return this.z;
      case n.WIDTH:
        return this.width;
      case n.HEIGHT:
        return this.height;
      case n.GROUP:
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
      case n.ID:
        this.id = t, super.eSet(e, t);
        break;
      case n.X:
        this.x = t, super.eSet(e, t);
        break;
      case n.Y:
        this.y = t, super.eSet(e, t);
        break;
      case n.Z:
        this.z = t, super.eSet(e, t);
        break;
      case n.WIDTH:
        this.width = t, super.eSet(e, t);
        break;
      case n.HEIGHT:
        this.height = t, super.eSet(e, t);
        break;
      case n.GROUP:
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
      case n.ID:
        return this._id !== "";
      case n.X:
        return this._x !== 0;
      case n.Y:
        return this._y !== 0;
      case n.Z:
        return this._z !== 0;
      case n.WIDTH:
        return this._width !== 0;
      case n.HEIGHT:
        return this._height !== 0;
      case n.GROUP:
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
      case n.ID:
        this._id = "";
        return;
      case n.X:
        this._x = 0;
        return;
      case n.Y:
        this._y = 0;
        return;
      case n.Z:
        this._z = 0;
        return;
      case n.WIDTH:
        this._width = 0;
        return;
      case n.HEIGHT:
        this._height = 0;
        return;
      case n.GROUP:
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
  static ICON = 5;
  static TAGS = 6;
  // Private fields
  _uid = "";
  _name;
  _type;
  _connection;
  _config;
  _icon;
  _tags;
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
  get icon() {
    return this._icon;
  }
  set icon(e) {
    const t = this._icon;
    this._icon = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(o.ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.ICON,
      merge: () => !1
    });
  }
  get tags() {
    return this._tags || (this._tags = be(this, this.eClass().getEStructuralFeature("tags"))), this._tags;
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
      case o.ICON:
        return this.icon;
      case o.TAGS:
        return this.tags;
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
      case o.ICON:
        this.icon = t, super.eSet(e, t);
        break;
      case o.TAGS:
        this.tags.clear(), this.tags.addAll(t), super.eSet(e, t);
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
      case o.ICON:
        return this._icon !== void 0;
      case o.TAGS:
        return this._tags !== void 0 && !this._tags.isEmpty();
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
      case o.ICON:
        this._icon = void 0;
        return;
      case o.TAGS:
        this._tags && this._tags.clear();
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
      config: this.config,
      icon: this.icon,
      tags: this.tags?.toArray?.() ?? this.tags
    };
  }
}
class E extends I {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONFIG = 3;
  static ICON = 4;
  static TAGS = 5;
  // Private fields
  _uid = "";
  _name;
  _type;
  _config;
  _icon;
  _tags;
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
  get icon() {
    return this._icon;
  }
  set icon(e) {
    const t = this._icon;
    this._icon = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(E.ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => E.ICON,
      merge: () => !1
    });
  }
  get tags() {
    return this._tags || (this._tags = be(this, this.eClass().getEStructuralFeature("tags"))), this._tags;
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
      case E.ICON:
        return this.icon;
      case E.TAGS:
        return this.tags;
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
      case E.ICON:
        this.icon = t, super.eSet(e, t);
        break;
      case E.TAGS:
        this.tags.clear(), this.tags.addAll(t), super.eSet(e, t);
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
      case E.ICON:
        return this._icon !== void 0;
      case E.TAGS:
        return this._tags !== void 0 && !this._tags.isEmpty();
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
      case E.ICON:
        this._icon = void 0;
        return;
      case E.TAGS:
        this._tags && this._tags.clear();
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
      config: this.config,
      icon: this.icon,
      tags: this.tags?.toArray?.() ?? this.tags
    };
  }
}
class we extends Ye {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new we()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new c();
  }
  /**
   * Create a new Board instance
   */
  createBoard() {
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
    return new g();
  }
  /**
   * Create a new Variable instance
   */
  createVariable() {
    return new a();
  }
  /**
   * Create a new EventMapping instance
   */
  createEventMapping() {
    return new d();
  }
  /**
   * Create a new LayoutItem instance
   */
  createLayoutItem() {
    return new n();
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
      case "Board":
        return this.createBoard();
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
class s extends Ke {
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
    WORKSPACE__BOARD: null,
    WORKSPACE__VARIABLES: null,
    WORKSPACE__EVENT_MAPPINGS: null,
    BOARD: null,
    BOARD__ID: null,
    BOARD__NAME: null,
    BOARD__DESCRIPTION: null,
    BOARD__ICON: null,
    BOARD__PAGES: null,
    BOARD__DEFAULT_PAGE: null,
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
    DATASOURCE__ICON: null,
    DATASOURCE__TAGS: null,
    CONNECTION: null,
    CONNECTION__UID: null,
    CONNECTION__NAME: null,
    CONNECTION__TYPE: null,
    CONNECTION__CONFIG: null,
    CONNECTION__ICON: null,
    CONNECTION__TAGS: null
  };
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    pe.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(we.eINSTANCE);
    const e = new D();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.WORKSPACE = e;
    const t = new C();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), s.Literals.WORKSPACE__CONNECTIONS = t;
    const N = new C();
    N.setContainment(!0), N.setName("datasources"), N.setLowerBound(0), N.setUpperBound(-1), e.getEStructuralFeatures().push(N), s.Literals.WORKSPACE__DATASOURCES = N;
    const L = new C();
    L.setContainment(!0), L.setName("board"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), s.Literals.WORKSPACE__BOARD = L;
    const U = new C();
    U.setContainment(!0), U.setName("variables"), U.setLowerBound(0), U.setUpperBound(-1), e.getEStructuralFeatures().push(U), s.Literals.WORKSPACE__VARIABLES = U;
    const y = new C();
    y.setContainment(!0), y.setName("eventMappings"), y.setLowerBound(0), y.setUpperBound(-1), e.getEStructuralFeatures().push(y), s.Literals.WORKSPACE__EVENT_MAPPINGS = y;
    const O = new D();
    O.setName("Board"), O.setAbstract(!1), O.setInterface(!1), this.getEClassifiers().push(O), O.setEPackage(this), s.Literals.BOARD = O;
    const Y = new r();
    Y.setName("id"), Y.setLowerBound(1), Y.setUpperBound(1), O.getEStructuralFeatures().push(Y), s.Literals.BOARD__ID = Y;
    const K = new r();
    K.setName("name"), K.setLowerBound(0), K.setUpperBound(1), O.getEStructuralFeatures().push(K), s.Literals.BOARD__NAME = K;
    const V = new r();
    V.setName("description"), V.setLowerBound(0), V.setUpperBound(1), O.getEStructuralFeatures().push(V), s.Literals.BOARD__DESCRIPTION = V;
    const z = new r();
    z.setName("icon"), z.setLowerBound(0), z.setUpperBound(1), O.getEStructuralFeatures().push(z), s.Literals.BOARD__ICON = z;
    const w = new C();
    w.setContainment(!0), w.setName("pages"), w.setLowerBound(0), w.setUpperBound(-1), O.getEStructuralFeatures().push(w), s.Literals.BOARD__PAGES = w;
    const B = new C();
    B.setContainment(!1), B.setName("defaultPage"), B.setLowerBound(0), B.setUpperBound(1), O.getEStructuralFeatures().push(B), s.Literals.BOARD__DEFAULT_PAGE = B;
    const l = new D();
    l.setName("Page"), l.setAbstract(!1), l.setInterface(!1), this.getEClassifiers().push(l), l.setEPackage(this), s.Literals.PAGE = l;
    const H = new r();
    H.setName("id"), H.setLowerBound(1), H.setUpperBound(1), l.getEStructuralFeatures().push(H), s.Literals.PAGE__ID = H;
    const x = new r();
    x.setName("name"), x.setLowerBound(0), x.setUpperBound(1), l.getEStructuralFeatures().push(x), s.Literals.PAGE__NAME = x;
    const Z = new r();
    Z.setName("description"), Z.setLowerBound(0), Z.setUpperBound(1), l.getEStructuralFeatures().push(Z), s.Literals.PAGE__DESCRIPTION = Z;
    const J = new r();
    J.setName("icon"), J.setLowerBound(0), J.setUpperBound(1), l.getEStructuralFeatures().push(J), s.Literals.PAGE__ICON = J;
    const X = new r();
    X.setName("visibleInNavigation"), X.setLowerBound(0), X.setUpperBound(1), l.getEStructuralFeatures().push(X), s.Literals.PAGE__VISIBLE_IN_NAVIGATION = X;
    const j = new r();
    j.setName("layoutId"), j.setLowerBound(0), j.setUpperBound(1), l.getEStructuralFeatures().push(j), s.Literals.PAGE__LAYOUT_ID = j;
    const $ = new r();
    $.setName("layoutSettings"), $.setLowerBound(0), $.setUpperBound(1), l.getEStructuralFeatures().push($), s.Literals.PAGE__LAYOUT_SETTINGS = $;
    const q = new r();
    q.setName("backgroundColor"), q.setLowerBound(0), q.setUpperBound(1), l.getEStructuralFeatures().push(q), s.Literals.PAGE__BACKGROUND_COLOR = q;
    const Q = new r();
    Q.setName("backgroundImage"), Q.setLowerBound(0), Q.setUpperBound(1), l.getEStructuralFeatures().push(Q), s.Literals.PAGE__BACKGROUND_IMAGE = Q;
    const m = new r();
    m.setName("backgroundSize"), m.setLowerBound(0), m.setUpperBound(1), l.getEStructuralFeatures().push(m), s.Literals.PAGE__BACKGROUND_SIZE = m;
    const W = new r();
    W.setName("backgroundPosition"), W.setLowerBound(0), W.setUpperBound(1), l.getEStructuralFeatures().push(W), s.Literals.PAGE__BACKGROUND_POSITION = W;
    const k = new r();
    k.setName("backgroundRepeat"), k.setLowerBound(0), k.setUpperBound(1), l.getEStructuralFeatures().push(k), s.Literals.PAGE__BACKGROUND_REPEAT = k;
    const v = new C();
    v.setContainment(!0), v.setName("widgets"), v.setLowerBound(0), v.setUpperBound(-1), l.getEStructuralFeatures().push(v), s.Literals.PAGE__WIDGETS = v;
    const b = new C();
    b.setContainment(!0), b.setName("layout"), b.setLowerBound(0), b.setUpperBound(-1), l.getEStructuralFeatures().push(b), s.Literals.PAGE__LAYOUT = b;
    const _ = new D();
    _.setName("Widget"), _.setAbstract(!1), _.setInterface(!1), this.getEClassifiers().push(_), _.setEPackage(this), s.Literals.WIDGET = _;
    const ee = new r();
    ee.setName("uid"), ee.setLowerBound(1), ee.setUpperBound(1), _.getEStructuralFeatures().push(ee), s.Literals.WIDGET__UID = ee;
    const te = new r();
    te.setName("type"), te.setLowerBound(0), te.setUpperBound(1), _.getEStructuralFeatures().push(te), s.Literals.WIDGET__TYPE = te;
    const p = new C();
    p.setContainment(!1), p.setName("datasource"), p.setLowerBound(0), p.setUpperBound(1), _.getEStructuralFeatures().push(p), s.Literals.WIDGET__DATASOURCE = p;
    const se = new r();
    se.setName("config"), se.setLowerBound(0), se.setUpperBound(1), _.getEStructuralFeatures().push(se), s.Literals.WIDGET__CONFIG = se;
    const ie = new r();
    ie.setName("wrapperConfig"), ie.setLowerBound(0), ie.setUpperBound(1), _.getEStructuralFeatures().push(ie), s.Literals.WIDGET__WRAPPER_CONFIG = ie;
    const S = new D();
    S.setName("Variable"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), s.Literals.VARIABLE = S;
    const re = new r();
    re.setName("uid"), re.setLowerBound(1), re.setUpperBound(1), S.getEStructuralFeatures().push(re), s.Literals.VARIABLE__UID = re;
    const ue = new r();
    ue.setName("name"), ue.setLowerBound(1), ue.setUpperBound(1), S.getEStructuralFeatures().push(ue), s.Literals.VARIABLE__NAME = ue;
    const ae = new r();
    ae.setName("type"), ae.setLowerBound(0), ae.setUpperBound(1), S.getEStructuralFeatures().push(ae), s.Literals.VARIABLE__TYPE = ae;
    const ne = new r();
    ne.setName("scope"), ne.setLowerBound(0), ne.setUpperBound(1), S.getEStructuralFeatures().push(ne), s.Literals.VARIABLE__SCOPE = ne;
    const oe = new r();
    oe.setName("accessMode"), oe.setLowerBound(0), oe.setUpperBound(1), S.getEStructuralFeatures().push(oe), s.Literals.VARIABLE__ACCESS_MODE = oe;
    const M = new C();
    M.setContainment(!1), M.setName("page"), M.setLowerBound(0), M.setUpperBound(1), S.getEStructuralFeatures().push(M), s.Literals.VARIABLE__PAGE = M;
    const he = new r();
    he.setName("definition"), he.setLowerBound(0), he.setUpperBound(1), S.getEStructuralFeatures().push(he), s.Literals.VARIABLE__DEFINITION = he;
    const F = new D();
    F.setName("EventMapping"), F.setAbstract(!1), F.setInterface(!1), this.getEClassifiers().push(F), F.setEPackage(this), s.Literals.EVENT_MAPPING = F;
    const Ee = new r();
    Ee.setName("id"), Ee.setLowerBound(1), Ee.setUpperBound(1), F.getEStructuralFeatures().push(Ee), s.Literals.EVENT_MAPPING__ID = Ee;
    const ge = new r();
    ge.setName("definition"), ge.setLowerBound(0), ge.setUpperBound(1), F.getEStructuralFeatures().push(ge), s.Literals.EVENT_MAPPING__DEFINITION = ge;
    const A = new D();
    A.setName("LayoutItem"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), s.Literals.LAYOUT_ITEM = A;
    const ce = new r();
    ce.setName("id"), ce.setLowerBound(1), ce.setUpperBound(1), A.getEStructuralFeatures().push(ce), s.Literals.LAYOUT_ITEM__ID = ce;
    const le = new r();
    le.setName("x"), le.setLowerBound(1), le.setUpperBound(1), A.getEStructuralFeatures().push(le), s.Literals.LAYOUT_ITEM__X = le;
    const Ne = new r();
    Ne.setName("y"), Ne.setLowerBound(1), Ne.setUpperBound(1), A.getEStructuralFeatures().push(Ne), s.Literals.LAYOUT_ITEM__Y = Ne;
    const de = new r();
    de.setName("z"), de.setLowerBound(1), de.setUpperBound(1), A.getEStructuralFeatures().push(de), s.Literals.LAYOUT_ITEM__Z = de;
    const Se = new r();
    Se.setName("width"), Se.setLowerBound(1), Se.setUpperBound(1), A.getEStructuralFeatures().push(Se), s.Literals.LAYOUT_ITEM__WIDTH = Se;
    const Ae = new r();
    Ae.setName("height"), Ae.setLowerBound(1), Ae.setUpperBound(1), A.getEStructuralFeatures().push(Ae), s.Literals.LAYOUT_ITEM__HEIGHT = Ae;
    const Te = new r();
    Te.setName("group"), Te.setLowerBound(0), Te.setUpperBound(1), A.getEStructuralFeatures().push(Te), s.Literals.LAYOUT_ITEM__GROUP = Te;
    const T = new D();
    T.setName("Datasource"), T.setAbstract(!1), T.setInterface(!1), this.getEClassifiers().push(T), T.setEPackage(this), s.Literals.DATASOURCE = T;
    const Oe = new r();
    Oe.setName("uid"), Oe.setLowerBound(1), Oe.setUpperBound(1), T.getEStructuralFeatures().push(Oe), s.Literals.DATASOURCE__UID = Oe;
    const fe = new r();
    fe.setName("name"), fe.setLowerBound(0), fe.setUpperBound(1), T.getEStructuralFeatures().push(fe), s.Literals.DATASOURCE__NAME = fe;
    const Ce = new r();
    Ce.setName("type"), Ce.setLowerBound(0), Ce.setUpperBound(1), T.getEStructuralFeatures().push(Ce), s.Literals.DATASOURCE__TYPE = Ce;
    const P = new C();
    P.setContainment(!1), P.setName("connection"), P.setLowerBound(0), P.setUpperBound(1), T.getEStructuralFeatures().push(P), s.Literals.DATASOURCE__CONNECTION = P;
    const _e = new r();
    _e.setName("config"), _e.setLowerBound(0), _e.setUpperBound(1), T.getEStructuralFeatures().push(_e), s.Literals.DATASOURCE__CONFIG = _e;
    const De = new r();
    De.setName("icon"), De.setLowerBound(0), De.setUpperBound(1), T.getEStructuralFeatures().push(De), s.Literals.DATASOURCE__ICON = De;
    const Ie = new r();
    Ie.setName("tags"), Ie.setLowerBound(0), Ie.setUpperBound(-1), T.getEStructuralFeatures().push(Ie), s.Literals.DATASOURCE__TAGS = Ie;
    const f = new D();
    f.setName("Connection"), f.setAbstract(!1), f.setInterface(!1), this.getEClassifiers().push(f), f.setEPackage(this), s.Literals.CONNECTION = f;
    const Fe = new r();
    Fe.setName("uid"), Fe.setLowerBound(1), Fe.setUpperBound(1), f.getEStructuralFeatures().push(Fe), s.Literals.CONNECTION__UID = Fe;
    const Re = new r();
    Re.setName("name"), Re.setLowerBound(0), Re.setUpperBound(1), f.getEStructuralFeatures().push(Re), s.Literals.CONNECTION__NAME = Re;
    const Ge = new r();
    Ge.setName("type"), Ge.setLowerBound(0), Ge.setUpperBound(1), f.getEStructuralFeatures().push(Ge), s.Literals.CONNECTION__TYPE = Ge;
    const Le = new r();
    Le.setName("config"), Le.setLowerBound(0), Le.setUpperBound(1), f.getEStructuralFeatures().push(Le), s.Literals.CONNECTION__CONFIG = Le;
    const Ue = new r();
    Ue.setName("icon"), Ue.setLowerBound(0), Ue.setUpperBound(1), f.getEStructuralFeatures().push(Ue), s.Literals.CONNECTION__ICON = Ue;
    const ye = new r();
    ye.setName("tags"), ye.setLowerBound(0), ye.setUpperBound(-1), f.getEStructuralFeatures().push(ye), s.Literals.CONNECTION__TAGS = ye, s.Literals.WORKSPACE__CONNECTIONS.setEType(s.Literals.CONNECTION), s.Literals.WORKSPACE__DATASOURCES.setEType(s.Literals.DATASOURCE), s.Literals.WORKSPACE__BOARD.setEType(s.Literals.BOARD), s.Literals.WORKSPACE__VARIABLES.setEType(s.Literals.VARIABLE), s.Literals.WORKSPACE__EVENT_MAPPINGS.setEType(s.Literals.EVENT_MAPPING), s.Literals.BOARD__ID.setEType(u().getEClassifier("EString")), s.Literals.BOARD__NAME.setEType(u().getEClassifier("EString")), s.Literals.BOARD__DESCRIPTION.setEType(u().getEClassifier("EString")), s.Literals.BOARD__ICON.setEType(u().getEClassifier("EString")), s.Literals.BOARD__PAGES.setEType(s.Literals.PAGE), s.Literals.BOARD__DEFAULT_PAGE.setEType(s.Literals.PAGE), s.Literals.PAGE__ID.setEType(u().getEClassifier("EString")), s.Literals.PAGE__NAME.setEType(u().getEClassifier("EString")), s.Literals.PAGE__DESCRIPTION.setEType(u().getEClassifier("EString")), s.Literals.PAGE__ICON.setEType(u().getEClassifier("EString")), s.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(u().getEClassifier("EBoolean")), s.Literals.PAGE__LAYOUT_ID.setEType(u().getEClassifier("EString")), s.Literals.PAGE__LAYOUT_SETTINGS.setEType(u().getEClassifier("EJavaObject")), s.Literals.PAGE__BACKGROUND_COLOR.setEType(u().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_IMAGE.setEType(u().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_SIZE.setEType(u().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_POSITION.setEType(u().getEClassifier("EString")), s.Literals.PAGE__BACKGROUND_REPEAT.setEType(u().getEClassifier("EString")), s.Literals.PAGE__WIDGETS.setEType(s.Literals.WIDGET), s.Literals.PAGE__LAYOUT.setEType(s.Literals.LAYOUT_ITEM), s.Literals.WIDGET__UID.setEType(u().getEClassifier("EString")), s.Literals.WIDGET__TYPE.setEType(u().getEClassifier("EString")), s.Literals.WIDGET__DATASOURCE.setEType(s.Literals.DATASOURCE), s.Literals.WIDGET__CONFIG.setEType(u().getEClassifier("EJavaObject")), s.Literals.WIDGET__WRAPPER_CONFIG.setEType(u().getEClassifier("EJavaObject")), s.Literals.VARIABLE__UID.setEType(u().getEClassifier("EString")), s.Literals.VARIABLE__NAME.setEType(u().getEClassifier("EString")), s.Literals.VARIABLE__TYPE.setEType(u().getEClassifier("EString")), s.Literals.VARIABLE__SCOPE.setEType(u().getEClassifier("EString")), s.Literals.VARIABLE__ACCESS_MODE.setEType(u().getEClassifier("EString")), s.Literals.VARIABLE__PAGE.setEType(s.Literals.PAGE), s.Literals.VARIABLE__DEFINITION.setEType(u().getEClassifier("EJavaObject")), s.Literals.EVENT_MAPPING__ID.setEType(u().getEClassifier("EString")), s.Literals.EVENT_MAPPING__DEFINITION.setEType(u().getEClassifier("EJavaObject")), s.Literals.LAYOUT_ITEM__ID.setEType(u().getEClassifier("EString")), s.Literals.LAYOUT_ITEM__X.setEType(u().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Y.setEType(u().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__Z.setEType(u().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__WIDTH.setEType(u().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__HEIGHT.setEType(u().getEClassifier("EInt")), s.Literals.LAYOUT_ITEM__GROUP.setEType(u().getEClassifier("EString")), s.Literals.DATASOURCE__UID.setEType(u().getEClassifier("EString")), s.Literals.DATASOURCE__NAME.setEType(u().getEClassifier("EString")), s.Literals.DATASOURCE__TYPE.setEType(u().getEClassifier("EString")), s.Literals.DATASOURCE__CONNECTION.setEType(s.Literals.CONNECTION), s.Literals.DATASOURCE__CONFIG.setEType(u().getEClassifier("EJavaObject")), s.Literals.DATASOURCE__ICON.setEType(u().getEClassifier("EString")), s.Literals.DATASOURCE__TAGS.setEType(u().getEClassifier("EString")), s.Literals.CONNECTION__UID.setEType(u().getEClassifier("EString")), s.Literals.CONNECTION__NAME.setEType(u().getEClassifier("EString")), s.Literals.CONNECTION__TYPE.setEType(u().getEClassifier("EString")), s.Literals.CONNECTION__CONFIG.setEType(u().getEClassifier("EJavaObject")), s.Literals.CONNECTION__ICON.setEType(u().getEClassifier("EString")), s.Literals.CONNECTION__TAGS.setEType(u().getEClassifier("EString"));
  }
}
s.eINSTANCE;
pe.INSTANCE.registerPackage(s.eINSTANCE);
const Be = Ve("Workspace"), ze = Symbol.for(Be);
function Me({ services: R }) {
  R.register(Be, new c());
}
function Pe({ services: R }) {
  R.unregister(Be);
}
const He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BoardImpl: h,
  ConnectionImpl: E,
  DatasourceImpl: o,
  EventMappingImpl: d,
  LayoutItemImpl: n,
  PageImpl: i,
  VariableImpl: a,
  WORKSPACE: Be,
  WidgetImpl: g,
  WorkspaceFactory: we,
  WorkspaceImpl: c,
  WorkspacePackage: s,
  activate: Me,
  deactivate: Pe,
  identifier: ze
}, Symbol.toStringTag, { value: "Module" })), ve = "org.eclipse.daanse.board.app.lib.model.workspace", xe = "0.0.1-next.1";
async function Je(R) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${ve}: tsm runtime is not initialized`);
  e.register(ve, He, xe, "lib.model.workspace"), await Me?.(R);
}
async function Xe(R) {
  await Pe?.(R);
}
export {
  h as BoardImpl,
  E as ConnectionImpl,
  o as DatasourceImpl,
  d as EventMappingImpl,
  n as LayoutItemImpl,
  i as PageImpl,
  a as VariableImpl,
  Be as WORKSPACE,
  g as WidgetImpl,
  we as WorkspaceFactory,
  c as WorkspaceImpl,
  s as WorkspacePackage,
  Je as activate,
  Xe as deactivate,
  ze as identifier
};
