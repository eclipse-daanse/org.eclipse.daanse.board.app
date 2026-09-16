import { BasicEObject, createContainmentEList, createBasicEList, BasicEFactory, BasicEPackage, EPackageRegistry, BasicEClass, BasicEReference, BasicEAttribute, getEcorePackage } from "@emfts/core";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class WorkspaceImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    if (!this._connections) {
      this._connections = createContainmentEList(this, this.eClass().getEStructuralFeature("connections"));
    }
    return this._connections;
  }
  get datasources() {
    if (!this._datasources) {
      this._datasources = createContainmentEList(this, this.eClass().getEStructuralFeature("datasources"));
    }
    return this._datasources;
  }
  get board() {
    return this._board;
  }
  set board(value) {
    const oldValue = this._board;
    this._board = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WorkspaceImpl.BOARD),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WorkspaceImpl.BOARD,
        merge: () => false
      });
    }
  }
  get variables() {
    if (!this._variables) {
      this._variables = createContainmentEList(this, this.eClass().getEStructuralFeature("variables"));
    }
    return this._variables;
  }
  get eventMappings() {
    if (!this._eventMappings) {
      this._eventMappings = createContainmentEList(this, this.eClass().getEStructuralFeature("eventMappings"));
    }
    return this._eventMappings;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WorkspaceImpl.CONNECTIONS:
        return this.connections;
      case WorkspaceImpl.DATASOURCES:
        return this.datasources;
      case WorkspaceImpl.BOARD:
        return this.board;
      case WorkspaceImpl.VARIABLES:
        return this.variables;
      case WorkspaceImpl.EVENT_MAPPINGS:
        return this.eventMappings;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WorkspaceImpl.CONNECTIONS:
        this.connections.clear();
        this.connections.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      case WorkspaceImpl.DATASOURCES:
        this.datasources.clear();
        this.datasources.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      case WorkspaceImpl.BOARD:
        this.board = newValue;
        super.eSet(feature, newValue);
        break;
      case WorkspaceImpl.VARIABLES:
        this.variables.clear();
        this.variables.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      case WorkspaceImpl.EVENT_MAPPINGS:
        this.eventMappings.clear();
        this.eventMappings.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WorkspaceImpl.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case WorkspaceImpl.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      case WorkspaceImpl.BOARD:
        return this._board !== void 0;
      case WorkspaceImpl.VARIABLES:
        return this._variables !== void 0 && !this._variables.isEmpty();
      case WorkspaceImpl.EVENT_MAPPINGS:
        return this._eventMappings !== void 0 && !this._eventMappings.isEmpty();
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WorkspaceImpl.CONNECTIONS:
        if (this._connections) this._connections.clear();
        return;
      case WorkspaceImpl.DATASOURCES:
        if (this._datasources) this._datasources.clear();
        return;
      case WorkspaceImpl.BOARD:
        this._board = void 0;
        return;
      case WorkspaceImpl.VARIABLES:
        if (this._variables) this._variables.clear();
        return;
      case WorkspaceImpl.EVENT_MAPPINGS:
        if (this._eventMappings) this._eventMappings.clear();
        return;
      default:
        super.eUnset(feature);
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
class BoardImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.BOARD;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    const oldValue = this._id;
    this._id = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(BoardImpl.ID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => BoardImpl.ID,
        merge: () => false
      });
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(BoardImpl.NAME),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => BoardImpl.NAME,
        merge: () => false
      });
    }
  }
  get description() {
    return this._description;
  }
  set description(value) {
    const oldValue = this._description;
    this._description = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(BoardImpl.DESCRIPTION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => BoardImpl.DESCRIPTION,
        merge: () => false
      });
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    const oldValue = this._icon;
    this._icon = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(BoardImpl.ICON),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => BoardImpl.ICON,
        merge: () => false
      });
    }
  }
  get pages() {
    if (!this._pages) {
      this._pages = createContainmentEList(this, this.eClass().getEStructuralFeature("pages"));
    }
    return this._pages;
  }
  get defaultPage() {
    return this._defaultPage;
  }
  set defaultPage(value) {
    const oldValue = this._defaultPage;
    this._defaultPage = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(BoardImpl.DEFAULT_PAGE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => BoardImpl.DEFAULT_PAGE,
        merge: () => false
      });
    }
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case BoardImpl.ID:
        return this.id;
      case BoardImpl.NAME:
        return this.name;
      case BoardImpl.DESCRIPTION:
        return this.description;
      case BoardImpl.ICON:
        return this.icon;
      case BoardImpl.PAGES:
        return this.pages;
      case BoardImpl.DEFAULT_PAGE:
        return this.defaultPage;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case BoardImpl.ID:
        this.id = newValue;
        super.eSet(feature, newValue);
        break;
      case BoardImpl.NAME:
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case BoardImpl.DESCRIPTION:
        this.description = newValue;
        super.eSet(feature, newValue);
        break;
      case BoardImpl.ICON:
        this.icon = newValue;
        super.eSet(feature, newValue);
        break;
      case BoardImpl.PAGES:
        this.pages.clear();
        this.pages.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      case BoardImpl.DEFAULT_PAGE:
        this.defaultPage = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case BoardImpl.ID:
        return this._id !== "";
      case BoardImpl.NAME:
        return this._name !== void 0;
      case BoardImpl.DESCRIPTION:
        return this._description !== void 0;
      case BoardImpl.ICON:
        return this._icon !== void 0;
      case BoardImpl.PAGES:
        return this._pages !== void 0 && !this._pages.isEmpty();
      case BoardImpl.DEFAULT_PAGE:
        return this._defaultPage !== void 0;
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case BoardImpl.ID:
        this._id = "";
        return;
      case BoardImpl.NAME:
        this._name = void 0;
        return;
      case BoardImpl.DESCRIPTION:
        this._description = void 0;
        return;
      case BoardImpl.ICON:
        this._icon = void 0;
        return;
      case BoardImpl.PAGES:
        if (this._pages) this._pages.clear();
        return;
      case BoardImpl.DEFAULT_PAGE:
        this._defaultPage = void 0;
        return;
      default:
        super.eUnset(feature);
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
class PageImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.PAGE;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    const oldValue = this._id;
    this._id = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.ID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.ID,
        merge: () => false
      });
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.NAME),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.NAME,
        merge: () => false
      });
    }
  }
  get description() {
    return this._description;
  }
  set description(value) {
    const oldValue = this._description;
    this._description = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.DESCRIPTION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.DESCRIPTION,
        merge: () => false
      });
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    const oldValue = this._icon;
    this._icon = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.ICON),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.ICON,
        merge: () => false
      });
    }
  }
  get visibleInNavigation() {
    return this._visibleInNavigation;
  }
  set visibleInNavigation(value) {
    const oldValue = this._visibleInNavigation;
    this._visibleInNavigation = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.VISIBLE_IN_NAVIGATION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.VISIBLE_IN_NAVIGATION,
        merge: () => false
      });
    }
  }
  get layoutId() {
    return this._layoutId;
  }
  set layoutId(value) {
    const oldValue = this._layoutId;
    this._layoutId = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.LAYOUT_ID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.LAYOUT_ID,
        merge: () => false
      });
    }
  }
  get layoutSettings() {
    return this._layoutSettings;
  }
  set layoutSettings(value) {
    const oldValue = this._layoutSettings;
    this._layoutSettings = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.LAYOUT_SETTINGS),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.LAYOUT_SETTINGS,
        merge: () => false
      });
    }
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const oldValue = this._backgroundColor;
    this._backgroundColor = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.BACKGROUND_COLOR),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.BACKGROUND_COLOR,
        merge: () => false
      });
    }
  }
  get backgroundImage() {
    return this._backgroundImage;
  }
  set backgroundImage(value) {
    const oldValue = this._backgroundImage;
    this._backgroundImage = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.BACKGROUND_IMAGE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.BACKGROUND_IMAGE,
        merge: () => false
      });
    }
  }
  get backgroundSize() {
    return this._backgroundSize;
  }
  set backgroundSize(value) {
    const oldValue = this._backgroundSize;
    this._backgroundSize = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.BACKGROUND_SIZE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.BACKGROUND_SIZE,
        merge: () => false
      });
    }
  }
  get backgroundPosition() {
    return this._backgroundPosition;
  }
  set backgroundPosition(value) {
    const oldValue = this._backgroundPosition;
    this._backgroundPosition = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.BACKGROUND_POSITION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.BACKGROUND_POSITION,
        merge: () => false
      });
    }
  }
  get backgroundRepeat() {
    return this._backgroundRepeat;
  }
  set backgroundRepeat(value) {
    const oldValue = this._backgroundRepeat;
    this._backgroundRepeat = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(PageImpl.BACKGROUND_REPEAT),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => PageImpl.BACKGROUND_REPEAT,
        merge: () => false
      });
    }
  }
  get widgets() {
    if (!this._widgets) {
      this._widgets = createContainmentEList(this, this.eClass().getEStructuralFeature("widgets"));
    }
    return this._widgets;
  }
  get layout() {
    if (!this._layout) {
      this._layout = createContainmentEList(this, this.eClass().getEStructuralFeature("layout"));
    }
    return this._layout;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case PageImpl.ID:
        return this.id;
      case PageImpl.NAME:
        return this.name;
      case PageImpl.DESCRIPTION:
        return this.description;
      case PageImpl.ICON:
        return this.icon;
      case PageImpl.VISIBLE_IN_NAVIGATION:
        return this.visibleInNavigation;
      case PageImpl.LAYOUT_ID:
        return this.layoutId;
      case PageImpl.LAYOUT_SETTINGS:
        return this.layoutSettings;
      case PageImpl.BACKGROUND_COLOR:
        return this.backgroundColor;
      case PageImpl.BACKGROUND_IMAGE:
        return this.backgroundImage;
      case PageImpl.BACKGROUND_SIZE:
        return this.backgroundSize;
      case PageImpl.BACKGROUND_POSITION:
        return this.backgroundPosition;
      case PageImpl.BACKGROUND_REPEAT:
        return this.backgroundRepeat;
      case PageImpl.WIDGETS:
        return this.widgets;
      case PageImpl.LAYOUT:
        return this.layout;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case PageImpl.ID:
        this.id = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.NAME:
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.DESCRIPTION:
        this.description = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.ICON:
        this.icon = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.VISIBLE_IN_NAVIGATION:
        this.visibleInNavigation = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.LAYOUT_ID:
        this.layoutId = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.LAYOUT_SETTINGS:
        this.layoutSettings = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.BACKGROUND_COLOR:
        this.backgroundColor = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.BACKGROUND_IMAGE:
        this.backgroundImage = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.BACKGROUND_SIZE:
        this.backgroundSize = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.BACKGROUND_POSITION:
        this.backgroundPosition = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.BACKGROUND_REPEAT:
        this.backgroundRepeat = newValue;
        super.eSet(feature, newValue);
        break;
      case PageImpl.WIDGETS:
        this.widgets.clear();
        this.widgets.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      case PageImpl.LAYOUT:
        this.layout.clear();
        this.layout.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case PageImpl.ID:
        return this._id !== "";
      case PageImpl.NAME:
        return this._name !== void 0;
      case PageImpl.DESCRIPTION:
        return this._description !== void 0;
      case PageImpl.ICON:
        return this._icon !== void 0;
      case PageImpl.VISIBLE_IN_NAVIGATION:
        return this._visibleInNavigation !== void 0;
      case PageImpl.LAYOUT_ID:
        return this._layoutId !== void 0;
      case PageImpl.LAYOUT_SETTINGS:
        return this._layoutSettings !== void 0;
      case PageImpl.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case PageImpl.BACKGROUND_IMAGE:
        return this._backgroundImage !== void 0;
      case PageImpl.BACKGROUND_SIZE:
        return this._backgroundSize !== void 0;
      case PageImpl.BACKGROUND_POSITION:
        return this._backgroundPosition !== void 0;
      case PageImpl.BACKGROUND_REPEAT:
        return this._backgroundRepeat !== void 0;
      case PageImpl.WIDGETS:
        return this._widgets !== void 0 && !this._widgets.isEmpty();
      case PageImpl.LAYOUT:
        return this._layout !== void 0 && !this._layout.isEmpty();
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case PageImpl.ID:
        this._id = "";
        return;
      case PageImpl.NAME:
        this._name = void 0;
        return;
      case PageImpl.DESCRIPTION:
        this._description = void 0;
        return;
      case PageImpl.ICON:
        this._icon = void 0;
        return;
      case PageImpl.VISIBLE_IN_NAVIGATION:
        this._visibleInNavigation = void 0;
        return;
      case PageImpl.LAYOUT_ID:
        this._layoutId = void 0;
        return;
      case PageImpl.LAYOUT_SETTINGS:
        this._layoutSettings = void 0;
        return;
      case PageImpl.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case PageImpl.BACKGROUND_IMAGE:
        this._backgroundImage = void 0;
        return;
      case PageImpl.BACKGROUND_SIZE:
        this._backgroundSize = void 0;
        return;
      case PageImpl.BACKGROUND_POSITION:
        this._backgroundPosition = void 0;
        return;
      case PageImpl.BACKGROUND_REPEAT:
        this._backgroundRepeat = void 0;
        return;
      case PageImpl.WIDGETS:
        if (this._widgets) this._widgets.clear();
        return;
      case PageImpl.LAYOUT:
        if (this._layout) this._layout.clear();
        return;
      default:
        super.eUnset(feature);
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
class WidgetImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.WIDGET;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(value) {
    const oldValue = this._uid;
    this._uid = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WidgetImpl.UID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WidgetImpl.UID,
        merge: () => false
      });
    }
  }
  get type() {
    return this._type;
  }
  set type(value) {
    const oldValue = this._type;
    this._type = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WidgetImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WidgetImpl.TYPE,
        merge: () => false
      });
    }
  }
  get datasource() {
    return this._datasource;
  }
  set datasource(value) {
    const oldValue = this._datasource;
    this._datasource = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WidgetImpl.DATASOURCE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WidgetImpl.DATASOURCE,
        merge: () => false
      });
    }
  }
  get config() {
    return this._config;
  }
  set config(value) {
    const oldValue = this._config;
    this._config = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WidgetImpl.CONFIG),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WidgetImpl.CONFIG,
        merge: () => false
      });
    }
  }
  get wrapperConfig() {
    return this._wrapperConfig;
  }
  set wrapperConfig(value) {
    const oldValue = this._wrapperConfig;
    this._wrapperConfig = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(WidgetImpl.WRAPPER_CONFIG),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => WidgetImpl.WRAPPER_CONFIG,
        merge: () => false
      });
    }
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WidgetImpl.UID:
        return this.uid;
      case WidgetImpl.TYPE:
        return this.type;
      case WidgetImpl.DATASOURCE:
        return this.datasource;
      case WidgetImpl.CONFIG:
        return this.config;
      case WidgetImpl.WRAPPER_CONFIG:
        return this.wrapperConfig;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WidgetImpl.UID:
        this.uid = newValue;
        super.eSet(feature, newValue);
        break;
      case WidgetImpl.TYPE:
        this.type = newValue;
        super.eSet(feature, newValue);
        break;
      case WidgetImpl.DATASOURCE:
        this.datasource = newValue;
        super.eSet(feature, newValue);
        break;
      case WidgetImpl.CONFIG:
        this.config = newValue;
        super.eSet(feature, newValue);
        break;
      case WidgetImpl.WRAPPER_CONFIG:
        this.wrapperConfig = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WidgetImpl.UID:
        return this._uid !== "";
      case WidgetImpl.TYPE:
        return this._type !== void 0;
      case WidgetImpl.DATASOURCE:
        return this._datasource !== void 0;
      case WidgetImpl.CONFIG:
        return this._config !== void 0;
      case WidgetImpl.WRAPPER_CONFIG:
        return this._wrapperConfig !== void 0;
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case WidgetImpl.UID:
        this._uid = "";
        return;
      case WidgetImpl.TYPE:
        this._type = void 0;
        return;
      case WidgetImpl.DATASOURCE:
        this._datasource = void 0;
        return;
      case WidgetImpl.CONFIG:
        this._config = void 0;
        return;
      case WidgetImpl.WRAPPER_CONFIG:
        this._wrapperConfig = void 0;
        return;
      default:
        super.eUnset(feature);
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
class VariableImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.VARIABLE;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(value) {
    const oldValue = this._uid;
    this._uid = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.UID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.UID,
        merge: () => false
      });
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.NAME),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.NAME,
        merge: () => false
      });
    }
  }
  get type() {
    return this._type;
  }
  set type(value) {
    const oldValue = this._type;
    this._type = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.TYPE,
        merge: () => false
      });
    }
  }
  get scope() {
    return this._scope;
  }
  set scope(value) {
    const oldValue = this._scope;
    this._scope = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.SCOPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.SCOPE,
        merge: () => false
      });
    }
  }
  get accessMode() {
    return this._accessMode;
  }
  set accessMode(value) {
    const oldValue = this._accessMode;
    this._accessMode = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.ACCESS_MODE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.ACCESS_MODE,
        merge: () => false
      });
    }
  }
  get page() {
    return this._page;
  }
  set page(value) {
    const oldValue = this._page;
    this._page = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.PAGE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.PAGE,
        merge: () => false
      });
    }
  }
  get definition() {
    return this._definition;
  }
  set definition(value) {
    const oldValue = this._definition;
    this._definition = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableImpl.DEFINITION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableImpl.DEFINITION,
        merge: () => false
      });
    }
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case VariableImpl.UID:
        return this.uid;
      case VariableImpl.NAME:
        return this.name;
      case VariableImpl.TYPE:
        return this.type;
      case VariableImpl.SCOPE:
        return this.scope;
      case VariableImpl.ACCESS_MODE:
        return this.accessMode;
      case VariableImpl.PAGE:
        return this.page;
      case VariableImpl.DEFINITION:
        return this.definition;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case VariableImpl.UID:
        this.uid = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.NAME:
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.TYPE:
        this.type = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.SCOPE:
        this.scope = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.ACCESS_MODE:
        this.accessMode = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.PAGE:
        this.page = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableImpl.DEFINITION:
        this.definition = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case VariableImpl.UID:
        return this._uid !== "";
      case VariableImpl.NAME:
        return this._name !== "";
      case VariableImpl.TYPE:
        return this._type !== void 0;
      case VariableImpl.SCOPE:
        return this._scope !== void 0;
      case VariableImpl.ACCESS_MODE:
        return this._accessMode !== void 0;
      case VariableImpl.PAGE:
        return this._page !== void 0;
      case VariableImpl.DEFINITION:
        return this._definition !== void 0;
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case VariableImpl.UID:
        this._uid = "";
        return;
      case VariableImpl.NAME:
        this._name = "";
        return;
      case VariableImpl.TYPE:
        this._type = void 0;
        return;
      case VariableImpl.SCOPE:
        this._scope = void 0;
        return;
      case VariableImpl.ACCESS_MODE:
        this._accessMode = void 0;
        return;
      case VariableImpl.PAGE:
        this._page = void 0;
        return;
      case VariableImpl.DEFINITION:
        this._definition = void 0;
        return;
      default:
        super.eUnset(feature);
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
class EventMappingImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.EVENT_MAPPING;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    const oldValue = this._id;
    this._id = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(EventMappingImpl.ID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => EventMappingImpl.ID,
        merge: () => false
      });
    }
  }
  get definition() {
    return this._definition;
  }
  set definition(value) {
    const oldValue = this._definition;
    this._definition = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(EventMappingImpl.DEFINITION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => EventMappingImpl.DEFINITION,
        merge: () => false
      });
    }
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case EventMappingImpl.ID:
        return this.id;
      case EventMappingImpl.DEFINITION:
        return this.definition;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case EventMappingImpl.ID:
        this.id = newValue;
        super.eSet(feature, newValue);
        break;
      case EventMappingImpl.DEFINITION:
        this.definition = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case EventMappingImpl.ID:
        return this._id !== "";
      case EventMappingImpl.DEFINITION:
        return this._definition !== void 0;
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case EventMappingImpl.ID:
        this._id = "";
        return;
      case EventMappingImpl.DEFINITION:
        this._definition = void 0;
        return;
      default:
        super.eUnset(feature);
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
class LayoutItemImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.LAYOUT_ITEM;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    const oldValue = this._id;
    this._id = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.ID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.ID,
        merge: () => false
      });
    }
  }
  get x() {
    return this._x;
  }
  set x(value) {
    const oldValue = this._x;
    this._x = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.X),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.X,
        merge: () => false
      });
    }
  }
  get y() {
    return this._y;
  }
  set y(value) {
    const oldValue = this._y;
    this._y = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.Y),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.Y,
        merge: () => false
      });
    }
  }
  get z() {
    return this._z;
  }
  set z(value) {
    const oldValue = this._z;
    this._z = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.Z),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.Z,
        merge: () => false
      });
    }
  }
  get width() {
    return this._width;
  }
  set width(value) {
    const oldValue = this._width;
    this._width = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.WIDTH),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.WIDTH,
        merge: () => false
      });
    }
  }
  get height() {
    return this._height;
  }
  set height(value) {
    const oldValue = this._height;
    this._height = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.HEIGHT),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.HEIGHT,
        merge: () => false
      });
    }
  }
  get group() {
    return this._group;
  }
  set group(value) {
    const oldValue = this._group;
    this._group = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(LayoutItemImpl.GROUP),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => LayoutItemImpl.GROUP,
        merge: () => false
      });
    }
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case LayoutItemImpl.ID:
        return this.id;
      case LayoutItemImpl.X:
        return this.x;
      case LayoutItemImpl.Y:
        return this.y;
      case LayoutItemImpl.Z:
        return this.z;
      case LayoutItemImpl.WIDTH:
        return this.width;
      case LayoutItemImpl.HEIGHT:
        return this.height;
      case LayoutItemImpl.GROUP:
        return this.group;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case LayoutItemImpl.ID:
        this.id = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.X:
        this.x = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.Y:
        this.y = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.Z:
        this.z = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.WIDTH:
        this.width = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.HEIGHT:
        this.height = newValue;
        super.eSet(feature, newValue);
        break;
      case LayoutItemImpl.GROUP:
        this.group = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case LayoutItemImpl.ID:
        return this._id !== "";
      case LayoutItemImpl.X:
        return this._x !== 0;
      case LayoutItemImpl.Y:
        return this._y !== 0;
      case LayoutItemImpl.Z:
        return this._z !== 0;
      case LayoutItemImpl.WIDTH:
        return this._width !== 0;
      case LayoutItemImpl.HEIGHT:
        return this._height !== 0;
      case LayoutItemImpl.GROUP:
        return this._group !== void 0;
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case LayoutItemImpl.ID:
        this._id = "";
        return;
      case LayoutItemImpl.X:
        this._x = 0;
        return;
      case LayoutItemImpl.Y:
        this._y = 0;
        return;
      case LayoutItemImpl.Z:
        this._z = 0;
        return;
      case LayoutItemImpl.WIDTH:
        this._width = 0;
        return;
      case LayoutItemImpl.HEIGHT:
        this._height = 0;
        return;
      case LayoutItemImpl.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(feature);
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
class DatasourceImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.DATASOURCE;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(value) {
    const oldValue = this._uid;
    this._uid = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.UID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.UID,
        merge: () => false
      });
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.NAME),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.NAME,
        merge: () => false
      });
    }
  }
  get type() {
    return this._type;
  }
  set type(value) {
    const oldValue = this._type;
    this._type = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.TYPE,
        merge: () => false
      });
    }
  }
  get connection() {
    return this._connection;
  }
  set connection(value) {
    const oldValue = this._connection;
    this._connection = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.CONNECTION),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.CONNECTION,
        merge: () => false
      });
    }
  }
  get config() {
    return this._config;
  }
  set config(value) {
    const oldValue = this._config;
    this._config = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.CONFIG),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.CONFIG,
        merge: () => false
      });
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    const oldValue = this._icon;
    this._icon = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(DatasourceImpl.ICON),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => DatasourceImpl.ICON,
        merge: () => false
      });
    }
  }
  get tags() {
    if (!this._tags) {
      this._tags = createBasicEList(this, this.eClass().getEStructuralFeature("tags"));
    }
    return this._tags;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case DatasourceImpl.UID:
        return this.uid;
      case DatasourceImpl.NAME:
        return this.name;
      case DatasourceImpl.TYPE:
        return this.type;
      case DatasourceImpl.CONNECTION:
        return this.connection;
      case DatasourceImpl.CONFIG:
        return this.config;
      case DatasourceImpl.ICON:
        return this.icon;
      case DatasourceImpl.TAGS:
        return this.tags;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case DatasourceImpl.UID:
        this.uid = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.NAME:
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.TYPE:
        this.type = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.CONNECTION:
        this.connection = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.CONFIG:
        this.config = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.ICON:
        this.icon = newValue;
        super.eSet(feature, newValue);
        break;
      case DatasourceImpl.TAGS:
        this.tags.clear();
        this.tags.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case DatasourceImpl.UID:
        return this._uid !== "";
      case DatasourceImpl.NAME:
        return this._name !== void 0;
      case DatasourceImpl.TYPE:
        return this._type !== void 0;
      case DatasourceImpl.CONNECTION:
        return this._connection !== void 0;
      case DatasourceImpl.CONFIG:
        return this._config !== void 0;
      case DatasourceImpl.ICON:
        return this._icon !== void 0;
      case DatasourceImpl.TAGS:
        return this._tags !== void 0 && !this._tags.isEmpty();
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case DatasourceImpl.UID:
        this._uid = "";
        return;
      case DatasourceImpl.NAME:
        this._name = void 0;
        return;
      case DatasourceImpl.TYPE:
        this._type = void 0;
        return;
      case DatasourceImpl.CONNECTION:
        this._connection = void 0;
        return;
      case DatasourceImpl.CONFIG:
        this._config = void 0;
        return;
      case DatasourceImpl.ICON:
        this._icon = void 0;
        return;
      case DatasourceImpl.TAGS:
        if (this._tags) this._tags.clear();
        return;
      default:
        super.eUnset(feature);
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
class ConnectionImpl extends BasicEObject {
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
    return WorkspacePackage.Literals.CONNECTION;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(value) {
    const oldValue = this._uid;
    this._uid = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(ConnectionImpl.UID),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => ConnectionImpl.UID,
        merge: () => false
      });
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(ConnectionImpl.NAME),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => ConnectionImpl.NAME,
        merge: () => false
      });
    }
  }
  get type() {
    return this._type;
  }
  set type(value) {
    const oldValue = this._type;
    this._type = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(ConnectionImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => ConnectionImpl.TYPE,
        merge: () => false
      });
    }
  }
  get config() {
    return this._config;
  }
  set config(value) {
    const oldValue = this._config;
    this._config = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(ConnectionImpl.CONFIG),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => ConnectionImpl.CONFIG,
        merge: () => false
      });
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    const oldValue = this._icon;
    this._icon = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(ConnectionImpl.ICON),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => ConnectionImpl.ICON,
        merge: () => false
      });
    }
  }
  get tags() {
    if (!this._tags) {
      this._tags = createBasicEList(this, this.eClass().getEStructuralFeature("tags"));
    }
    return this._tags;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case ConnectionImpl.UID:
        return this.uid;
      case ConnectionImpl.NAME:
        return this.name;
      case ConnectionImpl.TYPE:
        return this.type;
      case ConnectionImpl.CONFIG:
        return this.config;
      case ConnectionImpl.ICON:
        return this.icon;
      case ConnectionImpl.TAGS:
        return this.tags;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(feature, newValue) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case ConnectionImpl.UID:
        this.uid = newValue;
        super.eSet(feature, newValue);
        break;
      case ConnectionImpl.NAME:
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case ConnectionImpl.TYPE:
        this.type = newValue;
        super.eSet(feature, newValue);
        break;
      case ConnectionImpl.CONFIG:
        this.config = newValue;
        super.eSet(feature, newValue);
        break;
      case ConnectionImpl.ICON:
        this.icon = newValue;
        super.eSet(feature, newValue);
        break;
      case ConnectionImpl.TAGS:
        this.tags.clear();
        this.tags.addAll(newValue);
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case ConnectionImpl.UID:
        return this._uid !== "";
      case ConnectionImpl.NAME:
        return this._name !== void 0;
      case ConnectionImpl.TYPE:
        return this._type !== void 0;
      case ConnectionImpl.CONFIG:
        return this._config !== void 0;
      case ConnectionImpl.ICON:
        return this._icon !== void 0;
      case ConnectionImpl.TAGS:
        return this._tags !== void 0 && !this._tags.isEmpty();
      default:
        return super.eIsSet(feature);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(feature) {
    const featureID = this.eClass().getFeatureID(feature);
    switch (featureID) {
      case ConnectionImpl.UID:
        this._uid = "";
        return;
      case ConnectionImpl.NAME:
        this._name = void 0;
        return;
      case ConnectionImpl.TYPE:
        this._type = void 0;
        return;
      case ConnectionImpl.CONFIG:
        this._config = void 0;
        return;
      case ConnectionImpl.ICON:
        this._icon = void 0;
        return;
      case ConnectionImpl.TAGS:
        if (this._tags) this._tags.clear();
        return;
      default:
        super.eUnset(feature);
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
class WorkspaceFactory extends BasicEFactory {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    if (!this._instance) {
      this._instance = new WorkspaceFactory();
    }
    return this._instance;
  }
  constructor() {
    super();
    this.setEPackage(WorkspacePackage.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new WorkspaceImpl();
  }
  /**
   * Create a new Board instance
   */
  createBoard() {
    return new BoardImpl();
  }
  /**
   * Create a new Page instance
   */
  createPage() {
    return new PageImpl();
  }
  /**
   * Create a new Widget instance
   */
  createWidget() {
    return new WidgetImpl();
  }
  /**
   * Create a new Variable instance
   */
  createVariable() {
    return new VariableImpl();
  }
  /**
   * Create a new EventMapping instance
   */
  createEventMapping() {
    return new EventMappingImpl();
  }
  /**
   * Create a new LayoutItem instance
   */
  createLayoutItem() {
    return new LayoutItemImpl();
  }
  /**
   * Create a new Datasource instance
   */
  createDatasource() {
    return new DatasourceImpl();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new ConnectionImpl();
  }
  /**
   * Create an instance of the given class
   */
  create(eClass) {
    switch (eClass.getName()) {
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
        throw new Error(`Unknown class: ${eClass.getName()}`);
    }
  }
}
class WorkspacePackage extends BasicEPackage {
  static eNAME = "workspace";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.model.workspace";
  static eNS_PREFIX = "workspace";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    if (!this._instance) {
      this._instance = new WorkspacePackage();
      this._instance.init();
    }
    return this._instance;
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
    super();
    this.setName(WorkspacePackage.eNAME);
    this.setNsURI(WorkspacePackage.eNS_URI);
    this.setNsPrefix(WorkspacePackage.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    EPackageRegistry.INSTANCE.set(WorkspacePackage.eNS_URI, this);
    this.setEFactoryInstance(WorkspaceFactory.eINSTANCE);
    const workspaceClass = new BasicEClass();
    workspaceClass.setName("Workspace");
    workspaceClass.setAbstract(false);
    workspaceClass.setInterface(false);
    this.getEClassifiers().push(workspaceClass);
    workspaceClass.setEPackage(this);
    WorkspacePackage.Literals.WORKSPACE = workspaceClass;
    const workspace_connections = new BasicEReference();
    workspace_connections.setContainment(true);
    workspace_connections.setName("connections");
    workspace_connections.setLowerBound(0);
    workspace_connections.setUpperBound(-1);
    workspaceClass.getEStructuralFeatures().push(workspace_connections);
    WorkspacePackage.Literals.WORKSPACE__CONNECTIONS = workspace_connections;
    const workspace_datasources = new BasicEReference();
    workspace_datasources.setContainment(true);
    workspace_datasources.setName("datasources");
    workspace_datasources.setLowerBound(0);
    workspace_datasources.setUpperBound(-1);
    workspaceClass.getEStructuralFeatures().push(workspace_datasources);
    WorkspacePackage.Literals.WORKSPACE__DATASOURCES = workspace_datasources;
    const workspace_board = new BasicEReference();
    workspace_board.setContainment(true);
    workspace_board.setName("board");
    workspace_board.setLowerBound(0);
    workspace_board.setUpperBound(1);
    workspaceClass.getEStructuralFeatures().push(workspace_board);
    WorkspacePackage.Literals.WORKSPACE__BOARD = workspace_board;
    const workspace_variables = new BasicEReference();
    workspace_variables.setContainment(true);
    workspace_variables.setName("variables");
    workspace_variables.setLowerBound(0);
    workspace_variables.setUpperBound(-1);
    workspaceClass.getEStructuralFeatures().push(workspace_variables);
    WorkspacePackage.Literals.WORKSPACE__VARIABLES = workspace_variables;
    const workspace_eventMappings = new BasicEReference();
    workspace_eventMappings.setContainment(true);
    workspace_eventMappings.setName("eventMappings");
    workspace_eventMappings.setLowerBound(0);
    workspace_eventMappings.setUpperBound(-1);
    workspaceClass.getEStructuralFeatures().push(workspace_eventMappings);
    WorkspacePackage.Literals.WORKSPACE__EVENT_MAPPINGS = workspace_eventMappings;
    const boardClass = new BasicEClass();
    boardClass.setName("Board");
    boardClass.setAbstract(false);
    boardClass.setInterface(false);
    this.getEClassifiers().push(boardClass);
    boardClass.setEPackage(this);
    WorkspacePackage.Literals.BOARD = boardClass;
    const board_id = new BasicEAttribute();
    board_id.setName("id");
    board_id.setLowerBound(1);
    board_id.setUpperBound(1);
    boardClass.getEStructuralFeatures().push(board_id);
    WorkspacePackage.Literals.BOARD__ID = board_id;
    const board_name = new BasicEAttribute();
    board_name.setName("name");
    board_name.setLowerBound(0);
    board_name.setUpperBound(1);
    boardClass.getEStructuralFeatures().push(board_name);
    WorkspacePackage.Literals.BOARD__NAME = board_name;
    const board_description = new BasicEAttribute();
    board_description.setName("description");
    board_description.setLowerBound(0);
    board_description.setUpperBound(1);
    boardClass.getEStructuralFeatures().push(board_description);
    WorkspacePackage.Literals.BOARD__DESCRIPTION = board_description;
    const board_icon = new BasicEAttribute();
    board_icon.setName("icon");
    board_icon.setLowerBound(0);
    board_icon.setUpperBound(1);
    boardClass.getEStructuralFeatures().push(board_icon);
    WorkspacePackage.Literals.BOARD__ICON = board_icon;
    const board_pages = new BasicEReference();
    board_pages.setContainment(true);
    board_pages.setName("pages");
    board_pages.setLowerBound(0);
    board_pages.setUpperBound(-1);
    boardClass.getEStructuralFeatures().push(board_pages);
    WorkspacePackage.Literals.BOARD__PAGES = board_pages;
    const board_defaultPage = new BasicEReference();
    board_defaultPage.setContainment(false);
    board_defaultPage.setName("defaultPage");
    board_defaultPage.setLowerBound(0);
    board_defaultPage.setUpperBound(1);
    boardClass.getEStructuralFeatures().push(board_defaultPage);
    WorkspacePackage.Literals.BOARD__DEFAULT_PAGE = board_defaultPage;
    const pageClass = new BasicEClass();
    pageClass.setName("Page");
    pageClass.setAbstract(false);
    pageClass.setInterface(false);
    this.getEClassifiers().push(pageClass);
    pageClass.setEPackage(this);
    WorkspacePackage.Literals.PAGE = pageClass;
    const page_id = new BasicEAttribute();
    page_id.setName("id");
    page_id.setLowerBound(1);
    page_id.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_id);
    WorkspacePackage.Literals.PAGE__ID = page_id;
    const page_name = new BasicEAttribute();
    page_name.setName("name");
    page_name.setLowerBound(0);
    page_name.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_name);
    WorkspacePackage.Literals.PAGE__NAME = page_name;
    const page_description = new BasicEAttribute();
    page_description.setName("description");
    page_description.setLowerBound(0);
    page_description.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_description);
    WorkspacePackage.Literals.PAGE__DESCRIPTION = page_description;
    const page_icon = new BasicEAttribute();
    page_icon.setName("icon");
    page_icon.setLowerBound(0);
    page_icon.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_icon);
    WorkspacePackage.Literals.PAGE__ICON = page_icon;
    const page_visibleInNavigation = new BasicEAttribute();
    page_visibleInNavigation.setName("visibleInNavigation");
    page_visibleInNavigation.setLowerBound(0);
    page_visibleInNavigation.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_visibleInNavigation);
    WorkspacePackage.Literals.PAGE__VISIBLE_IN_NAVIGATION = page_visibleInNavigation;
    const page_layoutId = new BasicEAttribute();
    page_layoutId.setName("layoutId");
    page_layoutId.setLowerBound(0);
    page_layoutId.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_layoutId);
    WorkspacePackage.Literals.PAGE__LAYOUT_ID = page_layoutId;
    const page_layoutSettings = new BasicEAttribute();
    page_layoutSettings.setName("layoutSettings");
    page_layoutSettings.setLowerBound(0);
    page_layoutSettings.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_layoutSettings);
    WorkspacePackage.Literals.PAGE__LAYOUT_SETTINGS = page_layoutSettings;
    const page_backgroundColor = new BasicEAttribute();
    page_backgroundColor.setName("backgroundColor");
    page_backgroundColor.setLowerBound(0);
    page_backgroundColor.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_backgroundColor);
    WorkspacePackage.Literals.PAGE__BACKGROUND_COLOR = page_backgroundColor;
    const page_backgroundImage = new BasicEAttribute();
    page_backgroundImage.setName("backgroundImage");
    page_backgroundImage.setLowerBound(0);
    page_backgroundImage.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_backgroundImage);
    WorkspacePackage.Literals.PAGE__BACKGROUND_IMAGE = page_backgroundImage;
    const page_backgroundSize = new BasicEAttribute();
    page_backgroundSize.setName("backgroundSize");
    page_backgroundSize.setLowerBound(0);
    page_backgroundSize.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_backgroundSize);
    WorkspacePackage.Literals.PAGE__BACKGROUND_SIZE = page_backgroundSize;
    const page_backgroundPosition = new BasicEAttribute();
    page_backgroundPosition.setName("backgroundPosition");
    page_backgroundPosition.setLowerBound(0);
    page_backgroundPosition.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_backgroundPosition);
    WorkspacePackage.Literals.PAGE__BACKGROUND_POSITION = page_backgroundPosition;
    const page_backgroundRepeat = new BasicEAttribute();
    page_backgroundRepeat.setName("backgroundRepeat");
    page_backgroundRepeat.setLowerBound(0);
    page_backgroundRepeat.setUpperBound(1);
    pageClass.getEStructuralFeatures().push(page_backgroundRepeat);
    WorkspacePackage.Literals.PAGE__BACKGROUND_REPEAT = page_backgroundRepeat;
    const page_widgets = new BasicEReference();
    page_widgets.setContainment(true);
    page_widgets.setName("widgets");
    page_widgets.setLowerBound(0);
    page_widgets.setUpperBound(-1);
    pageClass.getEStructuralFeatures().push(page_widgets);
    WorkspacePackage.Literals.PAGE__WIDGETS = page_widgets;
    const page_layout = new BasicEReference();
    page_layout.setContainment(true);
    page_layout.setName("layout");
    page_layout.setLowerBound(0);
    page_layout.setUpperBound(-1);
    pageClass.getEStructuralFeatures().push(page_layout);
    WorkspacePackage.Literals.PAGE__LAYOUT = page_layout;
    const widgetClass = new BasicEClass();
    widgetClass.setName("Widget");
    widgetClass.setAbstract(false);
    widgetClass.setInterface(false);
    this.getEClassifiers().push(widgetClass);
    widgetClass.setEPackage(this);
    WorkspacePackage.Literals.WIDGET = widgetClass;
    const widget_uid = new BasicEAttribute();
    widget_uid.setName("uid");
    widget_uid.setLowerBound(1);
    widget_uid.setUpperBound(1);
    widgetClass.getEStructuralFeatures().push(widget_uid);
    WorkspacePackage.Literals.WIDGET__UID = widget_uid;
    const widget_type = new BasicEAttribute();
    widget_type.setName("type");
    widget_type.setLowerBound(0);
    widget_type.setUpperBound(1);
    widgetClass.getEStructuralFeatures().push(widget_type);
    WorkspacePackage.Literals.WIDGET__TYPE = widget_type;
    const widget_datasource = new BasicEReference();
    widget_datasource.setContainment(false);
    widget_datasource.setName("datasource");
    widget_datasource.setLowerBound(0);
    widget_datasource.setUpperBound(1);
    widgetClass.getEStructuralFeatures().push(widget_datasource);
    WorkspacePackage.Literals.WIDGET__DATASOURCE = widget_datasource;
    const widget_config = new BasicEAttribute();
    widget_config.setName("config");
    widget_config.setLowerBound(0);
    widget_config.setUpperBound(1);
    widgetClass.getEStructuralFeatures().push(widget_config);
    WorkspacePackage.Literals.WIDGET__CONFIG = widget_config;
    const widget_wrapperConfig = new BasicEAttribute();
    widget_wrapperConfig.setName("wrapperConfig");
    widget_wrapperConfig.setLowerBound(0);
    widget_wrapperConfig.setUpperBound(1);
    widgetClass.getEStructuralFeatures().push(widget_wrapperConfig);
    WorkspacePackage.Literals.WIDGET__WRAPPER_CONFIG = widget_wrapperConfig;
    const variableClass = new BasicEClass();
    variableClass.setName("Variable");
    variableClass.setAbstract(false);
    variableClass.setInterface(false);
    this.getEClassifiers().push(variableClass);
    variableClass.setEPackage(this);
    WorkspacePackage.Literals.VARIABLE = variableClass;
    const variable_uid = new BasicEAttribute();
    variable_uid.setName("uid");
    variable_uid.setLowerBound(1);
    variable_uid.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_uid);
    WorkspacePackage.Literals.VARIABLE__UID = variable_uid;
    const variable_name = new BasicEAttribute();
    variable_name.setName("name");
    variable_name.setLowerBound(1);
    variable_name.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_name);
    WorkspacePackage.Literals.VARIABLE__NAME = variable_name;
    const variable_type = new BasicEAttribute();
    variable_type.setName("type");
    variable_type.setLowerBound(0);
    variable_type.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_type);
    WorkspacePackage.Literals.VARIABLE__TYPE = variable_type;
    const variable_scope = new BasicEAttribute();
    variable_scope.setName("scope");
    variable_scope.setLowerBound(0);
    variable_scope.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_scope);
    WorkspacePackage.Literals.VARIABLE__SCOPE = variable_scope;
    const variable_accessMode = new BasicEAttribute();
    variable_accessMode.setName("accessMode");
    variable_accessMode.setLowerBound(0);
    variable_accessMode.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_accessMode);
    WorkspacePackage.Literals.VARIABLE__ACCESS_MODE = variable_accessMode;
    const variable_page = new BasicEReference();
    variable_page.setContainment(false);
    variable_page.setName("page");
    variable_page.setLowerBound(0);
    variable_page.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_page);
    WorkspacePackage.Literals.VARIABLE__PAGE = variable_page;
    const variable_definition = new BasicEAttribute();
    variable_definition.setName("definition");
    variable_definition.setLowerBound(0);
    variable_definition.setUpperBound(1);
    variableClass.getEStructuralFeatures().push(variable_definition);
    WorkspacePackage.Literals.VARIABLE__DEFINITION = variable_definition;
    const eventMappingClass = new BasicEClass();
    eventMappingClass.setName("EventMapping");
    eventMappingClass.setAbstract(false);
    eventMappingClass.setInterface(false);
    this.getEClassifiers().push(eventMappingClass);
    eventMappingClass.setEPackage(this);
    WorkspacePackage.Literals.EVENT_MAPPING = eventMappingClass;
    const eventMapping_id = new BasicEAttribute();
    eventMapping_id.setName("id");
    eventMapping_id.setLowerBound(1);
    eventMapping_id.setUpperBound(1);
    eventMappingClass.getEStructuralFeatures().push(eventMapping_id);
    WorkspacePackage.Literals.EVENT_MAPPING__ID = eventMapping_id;
    const eventMapping_definition = new BasicEAttribute();
    eventMapping_definition.setName("definition");
    eventMapping_definition.setLowerBound(0);
    eventMapping_definition.setUpperBound(1);
    eventMappingClass.getEStructuralFeatures().push(eventMapping_definition);
    WorkspacePackage.Literals.EVENT_MAPPING__DEFINITION = eventMapping_definition;
    const layoutItemClass = new BasicEClass();
    layoutItemClass.setName("LayoutItem");
    layoutItemClass.setAbstract(false);
    layoutItemClass.setInterface(false);
    this.getEClassifiers().push(layoutItemClass);
    layoutItemClass.setEPackage(this);
    WorkspacePackage.Literals.LAYOUT_ITEM = layoutItemClass;
    const layoutItem_id = new BasicEAttribute();
    layoutItem_id.setName("id");
    layoutItem_id.setLowerBound(1);
    layoutItem_id.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_id);
    WorkspacePackage.Literals.LAYOUT_ITEM__ID = layoutItem_id;
    const layoutItem_x = new BasicEAttribute();
    layoutItem_x.setName("x");
    layoutItem_x.setLowerBound(1);
    layoutItem_x.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_x);
    WorkspacePackage.Literals.LAYOUT_ITEM__X = layoutItem_x;
    const layoutItem_y = new BasicEAttribute();
    layoutItem_y.setName("y");
    layoutItem_y.setLowerBound(1);
    layoutItem_y.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_y);
    WorkspacePackage.Literals.LAYOUT_ITEM__Y = layoutItem_y;
    const layoutItem_z = new BasicEAttribute();
    layoutItem_z.setName("z");
    layoutItem_z.setLowerBound(1);
    layoutItem_z.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_z);
    WorkspacePackage.Literals.LAYOUT_ITEM__Z = layoutItem_z;
    const layoutItem_width = new BasicEAttribute();
    layoutItem_width.setName("width");
    layoutItem_width.setLowerBound(1);
    layoutItem_width.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_width);
    WorkspacePackage.Literals.LAYOUT_ITEM__WIDTH = layoutItem_width;
    const layoutItem_height = new BasicEAttribute();
    layoutItem_height.setName("height");
    layoutItem_height.setLowerBound(1);
    layoutItem_height.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_height);
    WorkspacePackage.Literals.LAYOUT_ITEM__HEIGHT = layoutItem_height;
    const layoutItem_group = new BasicEAttribute();
    layoutItem_group.setName("group");
    layoutItem_group.setLowerBound(0);
    layoutItem_group.setUpperBound(1);
    layoutItemClass.getEStructuralFeatures().push(layoutItem_group);
    WorkspacePackage.Literals.LAYOUT_ITEM__GROUP = layoutItem_group;
    const datasourceClass = new BasicEClass();
    datasourceClass.setName("Datasource");
    datasourceClass.setAbstract(false);
    datasourceClass.setInterface(false);
    this.getEClassifiers().push(datasourceClass);
    datasourceClass.setEPackage(this);
    WorkspacePackage.Literals.DATASOURCE = datasourceClass;
    const datasource_uid = new BasicEAttribute();
    datasource_uid.setName("uid");
    datasource_uid.setLowerBound(1);
    datasource_uid.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_uid);
    WorkspacePackage.Literals.DATASOURCE__UID = datasource_uid;
    const datasource_name = new BasicEAttribute();
    datasource_name.setName("name");
    datasource_name.setLowerBound(0);
    datasource_name.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_name);
    WorkspacePackage.Literals.DATASOURCE__NAME = datasource_name;
    const datasource_type = new BasicEAttribute();
    datasource_type.setName("type");
    datasource_type.setLowerBound(0);
    datasource_type.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_type);
    WorkspacePackage.Literals.DATASOURCE__TYPE = datasource_type;
    const datasource_connection = new BasicEReference();
    datasource_connection.setContainment(false);
    datasource_connection.setName("connection");
    datasource_connection.setLowerBound(0);
    datasource_connection.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_connection);
    WorkspacePackage.Literals.DATASOURCE__CONNECTION = datasource_connection;
    const datasource_config = new BasicEAttribute();
    datasource_config.setName("config");
    datasource_config.setLowerBound(0);
    datasource_config.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_config);
    WorkspacePackage.Literals.DATASOURCE__CONFIG = datasource_config;
    const datasource_icon = new BasicEAttribute();
    datasource_icon.setName("icon");
    datasource_icon.setLowerBound(0);
    datasource_icon.setUpperBound(1);
    datasourceClass.getEStructuralFeatures().push(datasource_icon);
    WorkspacePackage.Literals.DATASOURCE__ICON = datasource_icon;
    const datasource_tags = new BasicEAttribute();
    datasource_tags.setName("tags");
    datasource_tags.setLowerBound(0);
    datasource_tags.setUpperBound(-1);
    datasourceClass.getEStructuralFeatures().push(datasource_tags);
    WorkspacePackage.Literals.DATASOURCE__TAGS = datasource_tags;
    const connectionClass = new BasicEClass();
    connectionClass.setName("Connection");
    connectionClass.setAbstract(false);
    connectionClass.setInterface(false);
    this.getEClassifiers().push(connectionClass);
    connectionClass.setEPackage(this);
    WorkspacePackage.Literals.CONNECTION = connectionClass;
    const connection_uid = new BasicEAttribute();
    connection_uid.setName("uid");
    connection_uid.setLowerBound(1);
    connection_uid.setUpperBound(1);
    connectionClass.getEStructuralFeatures().push(connection_uid);
    WorkspacePackage.Literals.CONNECTION__UID = connection_uid;
    const connection_name = new BasicEAttribute();
    connection_name.setName("name");
    connection_name.setLowerBound(0);
    connection_name.setUpperBound(1);
    connectionClass.getEStructuralFeatures().push(connection_name);
    WorkspacePackage.Literals.CONNECTION__NAME = connection_name;
    const connection_type = new BasicEAttribute();
    connection_type.setName("type");
    connection_type.setLowerBound(0);
    connection_type.setUpperBound(1);
    connectionClass.getEStructuralFeatures().push(connection_type);
    WorkspacePackage.Literals.CONNECTION__TYPE = connection_type;
    const connection_config = new BasicEAttribute();
    connection_config.setName("config");
    connection_config.setLowerBound(0);
    connection_config.setUpperBound(1);
    connectionClass.getEStructuralFeatures().push(connection_config);
    WorkspacePackage.Literals.CONNECTION__CONFIG = connection_config;
    const connection_icon = new BasicEAttribute();
    connection_icon.setName("icon");
    connection_icon.setLowerBound(0);
    connection_icon.setUpperBound(1);
    connectionClass.getEStructuralFeatures().push(connection_icon);
    WorkspacePackage.Literals.CONNECTION__ICON = connection_icon;
    const connection_tags = new BasicEAttribute();
    connection_tags.setName("tags");
    connection_tags.setLowerBound(0);
    connection_tags.setUpperBound(-1);
    connectionClass.getEStructuralFeatures().push(connection_tags);
    WorkspacePackage.Literals.CONNECTION__TAGS = connection_tags;
    WorkspacePackage.Literals.WORKSPACE__CONNECTIONS.setEType(WorkspacePackage.Literals.CONNECTION);
    WorkspacePackage.Literals.WORKSPACE__DATASOURCES.setEType(WorkspacePackage.Literals.DATASOURCE);
    WorkspacePackage.Literals.WORKSPACE__BOARD.setEType(WorkspacePackage.Literals.BOARD);
    WorkspacePackage.Literals.WORKSPACE__VARIABLES.setEType(WorkspacePackage.Literals.VARIABLE);
    WorkspacePackage.Literals.WORKSPACE__EVENT_MAPPINGS.setEType(WorkspacePackage.Literals.EVENT_MAPPING);
    WorkspacePackage.Literals.BOARD__ID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.BOARD__NAME.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.BOARD__DESCRIPTION.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.BOARD__ICON.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.BOARD__PAGES.setEType(WorkspacePackage.Literals.PAGE);
    WorkspacePackage.Literals.BOARD__DEFAULT_PAGE.setEType(WorkspacePackage.Literals.PAGE);
    WorkspacePackage.Literals.PAGE__ID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__NAME.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__DESCRIPTION.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__ICON.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__VISIBLE_IN_NAVIGATION.setEType(getEcorePackage().getEClassifier("EBoolean"));
    WorkspacePackage.Literals.PAGE__LAYOUT_ID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__LAYOUT_SETTINGS.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.PAGE__BACKGROUND_COLOR.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__BACKGROUND_IMAGE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__BACKGROUND_SIZE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__BACKGROUND_POSITION.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__BACKGROUND_REPEAT.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.PAGE__WIDGETS.setEType(WorkspacePackage.Literals.WIDGET);
    WorkspacePackage.Literals.PAGE__LAYOUT.setEType(WorkspacePackage.Literals.LAYOUT_ITEM);
    WorkspacePackage.Literals.WIDGET__UID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.WIDGET__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.WIDGET__DATASOURCE.setEType(WorkspacePackage.Literals.DATASOURCE);
    WorkspacePackage.Literals.WIDGET__CONFIG.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.WIDGET__WRAPPER_CONFIG.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.VARIABLE__UID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.VARIABLE__NAME.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.VARIABLE__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.VARIABLE__SCOPE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.VARIABLE__ACCESS_MODE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.VARIABLE__PAGE.setEType(WorkspacePackage.Literals.PAGE);
    WorkspacePackage.Literals.VARIABLE__DEFINITION.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.EVENT_MAPPING__ID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.EVENT_MAPPING__DEFINITION.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.LAYOUT_ITEM__ID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.LAYOUT_ITEM__X.setEType(getEcorePackage().getEClassifier("EInt"));
    WorkspacePackage.Literals.LAYOUT_ITEM__Y.setEType(getEcorePackage().getEClassifier("EInt"));
    WorkspacePackage.Literals.LAYOUT_ITEM__Z.setEType(getEcorePackage().getEClassifier("EInt"));
    WorkspacePackage.Literals.LAYOUT_ITEM__WIDTH.setEType(getEcorePackage().getEClassifier("EInt"));
    WorkspacePackage.Literals.LAYOUT_ITEM__HEIGHT.setEType(getEcorePackage().getEClassifier("EInt"));
    WorkspacePackage.Literals.LAYOUT_ITEM__GROUP.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.DATASOURCE__UID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.DATASOURCE__NAME.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.DATASOURCE__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.DATASOURCE__CONNECTION.setEType(WorkspacePackage.Literals.CONNECTION);
    WorkspacePackage.Literals.DATASOURCE__CONFIG.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.DATASOURCE__ICON.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.DATASOURCE__TAGS.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.CONNECTION__UID.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.CONNECTION__NAME.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.CONNECTION__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.CONNECTION__CONFIG.setEType(getEcorePackage().getEClassifier("EJavaObject"));
    WorkspacePackage.Literals.CONNECTION__ICON.setEType(getEcorePackage().getEClassifier("EString"));
    WorkspacePackage.Literals.CONNECTION__TAGS.setEType(getEcorePackage().getEClassifier("EString"));
  }
}
void WorkspacePackage.eINSTANCE;
EPackageRegistry.INSTANCE.registerPackage(WorkspacePackage.eINSTANCE);
const WORKSPACE = serviceId("Workspace");
const identifier = Symbol.for(WORKSPACE);
function activate$1({ services }) {
  services.register(WORKSPACE, new WorkspaceImpl());
}
function deactivate$1({ services }) {
  services.unregister(WORKSPACE);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BoardImpl,
  ConnectionImpl,
  DatasourceImpl,
  EventMappingImpl,
  LayoutItemImpl,
  PageImpl,
  VariableImpl,
  WORKSPACE,
  WidgetImpl,
  WorkspaceFactory,
  WorkspaceImpl,
  WorkspacePackage,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.model.workspace";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.model.workspace");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  BoardImpl,
  ConnectionImpl,
  DatasourceImpl,
  EventMappingImpl,
  LayoutItemImpl,
  PageImpl,
  VariableImpl,
  WORKSPACE,
  WidgetImpl,
  WorkspaceFactory,
  WorkspaceImpl,
  WorkspacePackage,
  activate,
  deactivate,
  identifier
};
