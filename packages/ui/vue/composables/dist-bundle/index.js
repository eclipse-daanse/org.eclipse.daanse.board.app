import { identifier } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref, computed, inject, onMounted, onUnmounted, watch, onBeforeUnmount, shallowRef, toValue, triggerRef, getCurrentScope, onScopeDispose } from "vue";
import { identifier as identifier$1 } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as identifier$2 } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter, NotificationType, BasicEObject, BasicEFactory, BasicEPackage, EPackageRegistry, BasicEClass, BasicEAttribute, getEcorePackage } from "@emfts/core";
import { identifier as identifier$3 } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper, VARIABLEWRAPPER } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as VARIABLEWRAPPER2, VariableWrapper as VariableWrapper2 } from "org.eclipse.daanse.board.app.lib.variables";
const activeLoadingCount = ref(0);
function useGlobalLoading() {
  const isLoading = computed(() => activeLoadingCount.value > 0);
  const startLoading = () => {
    activeLoadingCount.value++;
  };
  const stopLoading = () => {
    if (activeLoadingCount.value > 0) {
      activeLoadingCount.value--;
    }
  };
  return {
    isLoading,
    activeLoadingCount,
    startLoading,
    stopLoading
  };
}
function useDatasourceRepository(dataSourceId, type, data, subscriptions = [], requestConfig) {
  const datasourceRepository = inject(identifier);
  if (!datasourceRepository) {
    throw new Error("DatasourceRepository not provided");
  }
  const { startLoading, stopLoading } = useGlobalLoading();
  const getData = async () => {
    if (!dataSourceId.value) {
      data.value = null;
      return;
    }
    console.log("getData", dataSourceId.value);
    console.log("type", type);
    startLoading();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, requestConfig?.value || {});
      if (type === "PivotTable") {
        data.value = JSON.parse(JSON.stringify(dataRaw));
      } else {
        data.value = structuredClone(dataRaw);
      }
    } catch (e) {
      data.value = null;
      console.warn(e);
    } finally {
      stopLoading();
    }
  };
  const callEvent = async (event, params, shouldUpdate = true) => {
    if (dataSourceId.value) {
      try {
        const dataSource = datasourceRepository.getDatasource(
          dataSourceId.value
        );
        const result = dataSource.callEvent(event, params, shouldUpdate);
        if (!shouldUpdate && result instanceof Promise) {
          await result;
          const dataRaw = await dataSource.getData(type);
          data.value = structuredClone(dataRaw);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  };
  const getDataWithOptions = async (options) => {
    if (!dataSourceId.value) {
      data.value = null;
      return;
    }
    console.log("getDataWithOptions", dataSourceId.value, options);
    console.log("type", type);
    startLoading();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, options);
      data.value = structuredClone(dataRaw);
    } catch (e) {
      data.value = null;
      console.warn(e);
    } finally {
      stopLoading();
    }
  };
  const update = (newVal, oldVal) => {
    try {
      getData();
    } catch (e) {
      console.warn(e);
    }
    if (!newVal || !oldVal || newVal === oldVal) return;
    try {
      const oldDataSource = datasourceRepository.getDatasource(oldVal);
      oldDataSource.unsubscribe(getData);
      subscriptions.forEach((fn) => {
        oldDataSource.unsubscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
    try {
      const dataSource = datasourceRepository.getDatasource(newVal);
      dataSource.subscribe(() => getData());
      subscriptions.forEach((fn) => {
        dataSource.subscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  };
  const getDatasourceInstance = () => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      return dataSource;
    } catch (e) {
      console.warn(e);
      return null;
    }
  };
  onMounted(() => {
    getData();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      dataSource.subscribe(getData);
      subscriptions.forEach((fn) => {
        dataSource.subscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  });
  onUnmounted(() => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      dataSource.unsubscribe(getData);
      subscriptions.forEach((fn) => {
        dataSource.unsubscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  });
  return {
    data,
    callEvent,
    update,
    getDataWithOptions,
    getDatasourceInstance
  };
}
function useTemporaryStore(type, settings, tempStore) {
  const datasourceRepository = inject(identifier);
  if (!datasourceRepository) {
    throw new Error("DatasourceRepository not provided");
  }
  const identifiers = datasourceRepository.getDatasourceIdentifiers(type);
  console.log("Identifiers for datasource type", type, identifiers);
  onMounted(async () => {
    console.log(
      "Creating temporary store for type",
      type,
      "with settings",
      settings.value
    );
    const factory = datasourceRepository.resolveIdentifier(identifiers.Store);
    tempStore.value = factory({ ...settings.value.config, _isTemporaryPreview: true });
  });
  const update = async () => {
    tempStore.value?.destroy();
    tempStore.value = null;
    const factory = datasourceRepository.resolveIdentifier(identifiers.Store);
    const newStore = factory({ ...settings.value.config, _isTemporaryPreview: true });
    if (newStore.initPromise) {
      await newStore.initPromise;
      tempStore.value = newStore;
      return newStore;
    } else {
      tempStore.value = newStore;
      return newStore;
    }
  };
  watch(
    () => settings,
    async () => {
    },
    { deep: true }
  );
  onBeforeUnmount(() => {
    console.log("Destroying temporary store");
    tempStore.value?.destroy();
  });
  return {
    update
  };
}
function usePromisifiedModal(resetFn, opened = () => {
}) {
  const isOpened = ref(false);
  let resolveFunction = (_val) => {
  };
  let runPromise = new Promise((res) => {
    resolveFunction = res;
  });
  const run = (data) => {
    isOpened.value = true;
    opened(data);
    return runPromise;
  };
  const close = (data) => {
    resolveFunction(data);
    runPromise = new Promise((res) => {
      resolveFunction = res;
    });
    isOpened.value = false;
    resetFn();
  };
  return { isOpened, run, close };
}
function useVariableRepository() {
  const updateTimestamp = ref(Date.now());
  const connectedVariables = [];
  const variableRepository = inject(identifier$1);
  if (!variableRepository) {
    throw new Error("VariableRepository not provided");
  }
  let pageContextService = null;
  try {
    pageContextService = inject(identifier$2);
  } catch (e) {
    console.warn("PageContextService not available for variable resolution");
  }
  const subscriptionFn = () => {
    updateTimestamp.value = Date.now();
  };
  const calculateValue = (templateValue, subscription = () => {
  }) => {
    const regex = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const variable of connectedVariables) {
      variable.unsubscribe(subscriptionFn);
      variable.unsubscribe(subscription);
    }
    connectedVariables.length = 0;
    const matches = [...templateValue.matchAll(regex)];
    const listOfVariables = matches.map((match) => match[1]);
    let result = templateValue;
    for (const varName of listOfVariables) {
      try {
        let variable = void 0;
        try {
          const currentPageId = pageContextService?.getCurrentPageId();
          variable = variableRepository.getVariableWithContext ? variableRepository.getVariableWithContext(varName, currentPageId) : variableRepository.getVariable(varName);
        } catch (e) {
          console.error(e);
        }
        if (variable) {
          variable.subscribe(subscriptionFn);
          variable.subscribe(subscription);
          connectedVariables.push(variable);
          const value = variable.value;
          const variableRegex = new RegExp(
            `\\{\\s*${varName}\\s*\\}`,
            "g"
          );
          result = result.replace(variableRegex, String(value));
        }
      } catch (error) {
        console.warn(`Error resolving variable ${varName}:`, error);
      }
    }
    return result;
  };
  const wrapParameters = (parameters) => {
    const wrappedParameters = {};
    for (const [key, value] of Object.entries(parameters)) {
      try {
        const computedValue = computed(() => {
          updateTimestamp.value;
          if (value) {
            return calculateValue(value.value + "");
          } else {
            return value;
          }
        });
        wrappedParameters[key] = computedValue;
      } catch (r) {
        console.log(r);
      }
    }
    return wrappedParameters;
  };
  return {
    calculateValue,
    wrapParameters
  };
}
function plainSettings(settings) {
  if (!settings || typeof settings !== "object") return {};
  const held = settings;
  return typeof held.toJSON === "function" ? held.toJSON() : settings;
}
function isAdaptable(object) {
  return typeof object?.eAdapterAdd === "function" && typeof object?.eAdapterRemove === "function";
}
function useChangeCount(target) {
  const count = ref(0);
  class CountingAdapter extends EContentAdapter {
    notifyChanged(notification) {
      super.notifyChanged(notification);
      if (notification.isTouch()) return;
      if (notification.getEventType() === NotificationType.REMOVING_ADAPTER) return;
      count.value += 1;
    }
  }
  let adapter;
  let attached;
  const detach = () => {
    if (attached && adapter) attached.eAdapterRemove(adapter);
    attached = void 0;
    adapter = void 0;
  };
  const attach = (object) => {
    detach();
    if (!isAdaptable(object)) return;
    adapter = new CountingAdapter();
    object.eAdapterAdd(adapter);
    attached = object;
  };
  watch(target, attach, { immediate: true });
  if (getCurrentScope()) onScopeDispose(detach);
  return count;
}
function useEObject(source) {
  const read = () => toValue(source);
  const held = shallowRef(read());
  const count = useChangeCount(read);
  watch(
    [count, read],
    ([, object]) => {
      if (held.value === object) triggerRef(held);
      else held.value = object;
    }
  );
  return held;
}
function useEList(owner, select) {
  const read = () => toValue(owner);
  const count = useChangeCount(read);
  return computed(() => {
    void count.value;
    const object = read();
    if (!object) return [];
    return select(object)?.toArray() ?? [];
  });
}
function useFeature(object, key) {
  const read = () => toValue(object);
  const count = useChangeCount(read);
  return computed({
    get: () => {
      void count.value;
      return read()?.[key];
    },
    set: (value) => {
      const held = read();
      if (held) held[key] = value;
    }
  });
}
function useBoard(pageId) {
  const pages = inject(identifier$3);
  const id = () => toValue(pageId) ?? "";
  const held = useEObject(() => id() ? pages.getPage(id()) : void 0);
  const page = computed(() => held.value);
  const widgets = useEList(page, (p) => p.widgets);
  const layout = useEList(page, (p) => p.layout);
  return {
    page,
    widgets,
    layout,
    addWidget(widget, placement) {
      const uid = widget.uid || "li_" + Math.random().toString(36).substring(7);
      pages.addWidget(id(), { ...widget, uid }, placement);
      return uid;
    },
    removeWidget(widgetUid) {
      pages.removeWidget(id(), widgetUid);
    },
    saveWidget(widget) {
      pages.saveWidget(id(), widget);
    },
    setBoard(widgets2, layout2) {
      pages.setBoard(id(), widgets2, layout2);
    },
    clear() {
      pages.setBoard(id(), [], []);
    }
  };
}
const TYPE = "VARIABLECOMPLEXSTRINGWRAPPER";
class VariableComplexStringWrapper {
  type = TYPE;
  _value = void 0;
  _computedValue = null;
  constructor(initValue = "") {
    this._value = initValue;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const substituted = this.substitute(this._value || "");
    if (substituted !== null) this._computedValue = substituted;
  }
  /**
   * The text with the variables it names filled in.
   *
   * Falls back to the text as written when the variables cannot be reached.
   * Resolving them goes through inject, which only answers inside a
   * component - and this is read from outside one more often than it looks:
   * Vue reads a property before writing it, so assigning to this threw from
   * inside the reactivity and the new text was never stored at all.
   *
   * Showing the text unsubstituted is the right failure: it is what was
   * written, and it is what gets stored either way. The last substitution
   * is not reused for it - that one was made from an older text, and
   * handing it back would show the previous value as if it were current.
   */
  get value() {
    const substituted = this.substitute(this._value || "", this.updateFn.bind(this));
    if (substituted === null) return this._value ?? "";
    this._computedValue = substituted;
    return substituted;
  }
  /** The substituted text, or null when the variables are out of reach. */
  substitute(text, subscription) {
    try {
      const { calculateValue } = useVariableRepository();
      return subscription ? calculateValue(text, subscription) : calculateValue(text);
    } catch {
      return null;
    }
  }
  set value(newValue) {
    this._value = newValue;
  }
}
class VariableWrapperImpl extends BasicEObject {
  // Feature ID Constants (eLiterals)
  static VALUE = 0;
  static VARIABLE = 1;
  static IS_SET = 2;
  static TYPE = 3;
  // Private fields
  _value;
  _variable;
  _isSet = false;
  _type = "VARIABLEWRAPPER";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return ComposablesPackage.Literals.VARIABLE_WRAPPER;
  }
  // Getters and Setters
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    this._value = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableWrapperImpl.VALUE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableWrapperImpl.VALUE,
        merge: () => false
      });
    }
  }
  get variable() {
    return this._variable;
  }
  set variable(value) {
    const oldValue = this._variable;
    this._variable = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableWrapperImpl.VARIABLE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableWrapperImpl.VARIABLE,
        merge: () => false
      });
    }
  }
  get isSet() {
    return this._isSet;
  }
  set isSet(value) {
    const oldValue = this._isSet;
    this._isSet = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableWrapperImpl.IS_SET),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableWrapperImpl.IS_SET,
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
        getFeature: () => this.eClass().getEStructuralFeature(VariableWrapperImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableWrapperImpl.TYPE,
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
      case VariableWrapperImpl.VALUE:
        return this.value;
      case VariableWrapperImpl.VARIABLE:
        return this.variable;
      case VariableWrapperImpl.IS_SET:
        return this.isSet;
      case VariableWrapperImpl.TYPE:
        return this.type;
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
      case VariableWrapperImpl.VALUE:
        this.value = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableWrapperImpl.VARIABLE:
        this.variable = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableWrapperImpl.IS_SET:
        this.isSet = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableWrapperImpl.TYPE:
        this.type = newValue;
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
      case VariableWrapperImpl.VALUE:
        return this._value !== void 0;
      case VariableWrapperImpl.VARIABLE:
        return this._variable !== void 0;
      case VariableWrapperImpl.IS_SET:
        return this._isSet !== false;
      case VariableWrapperImpl.TYPE:
        return this._type !== "VARIABLEWRAPPER";
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
      case VariableWrapperImpl.VALUE:
        this._value = void 0;
        return;
      case VariableWrapperImpl.VARIABLE:
        this._variable = void 0;
        return;
      case VariableWrapperImpl.IS_SET:
        this._isSet = false;
        return;
      case VariableWrapperImpl.TYPE:
        this._type = "VARIABLEWRAPPER";
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
      value: this.value,
      variable: this.variable,
      isSet: this.isSet,
      type: this.type
    };
  }
}
class VariableComplexStringWrapperImpl extends BasicEObject {
  // Feature ID Constants (eLiterals)
  static VALUE = 0;
  static TYPE = 1;
  // Private fields
  _value;
  _type = "VARIABLECOMPLEXSTRINGWRAPPER";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
  }
  // Getters and Setters
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    this._value = value;
    if (this.eDeliver()) {
      this.eNotify({
        getNotifier: () => this,
        getEventType: () => 1,
        // SET
        getFeature: () => this.eClass().getEStructuralFeature(VariableComplexStringWrapperImpl.VALUE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableComplexStringWrapperImpl.VALUE,
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
        getFeature: () => this.eClass().getEStructuralFeature(VariableComplexStringWrapperImpl.TYPE),
        getOldValue: () => oldValue,
        getNewValue: () => value,
        getPosition: () => -1,
        wasSet: () => true,
        isTouch: () => false,
        isReset: () => false,
        getFeatureID: () => VariableComplexStringWrapperImpl.TYPE,
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
      case VariableComplexStringWrapperImpl.VALUE:
        return this.value;
      case VariableComplexStringWrapperImpl.TYPE:
        return this.type;
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
      case VariableComplexStringWrapperImpl.VALUE:
        this.value = newValue;
        super.eSet(feature, newValue);
        break;
      case VariableComplexStringWrapperImpl.TYPE:
        this.type = newValue;
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
      case VariableComplexStringWrapperImpl.VALUE:
        return this._value !== void 0;
      case VariableComplexStringWrapperImpl.TYPE:
        return this._type !== "VARIABLECOMPLEXSTRINGWRAPPER";
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
      case VariableComplexStringWrapperImpl.VALUE:
        this._value = void 0;
        return;
      case VariableComplexStringWrapperImpl.TYPE:
        this._type = "VARIABLECOMPLEXSTRINGWRAPPER";
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
      value: this.value,
      type: this.type
    };
  }
}
class ComposablesFactory extends BasicEFactory {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    if (!this._instance) {
      this._instance = new ComposablesFactory();
    }
    return this._instance;
  }
  constructor() {
    super();
    this.setEPackage(ComposablesPackage.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new VariableWrapperImpl();
  }
  /**
   * Create a new VariableComplexStringWrapper instance
   */
  createVariableComplexStringWrapper() {
    return new VariableComplexStringWrapperImpl();
  }
  /**
   * Create an instance of the given class
   */
  create(eClass) {
    switch (eClass.getName()) {
      case "VariableWrapper":
        return this.createVariableWrapper();
      case "VariableComplexStringWrapper":
        return this.createVariableComplexStringWrapper();
      default:
        throw new Error(`Unknown class: ${eClass.getName()}`);
    }
  }
}
class ComposablesPackage extends BasicEPackage {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    if (!this._instance) {
      this._instance = new ComposablesPackage();
      this._instance.init();
    }
    return this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    VARIABLE_WRAPPER: null,
    VARIABLE_WRAPPER__VALUE: null,
    VARIABLE_WRAPPER__VARIABLE: null,
    VARIABLE_WRAPPER__IS_SET: null,
    VARIABLE_WRAPPER__TYPE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__VALUE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__TYPE: null
  };
  constructor() {
    super();
    this.setName(ComposablesPackage.eNAME);
    this.setNsURI(ComposablesPackage.eNS_URI);
    this.setNsPrefix(ComposablesPackage.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    EPackageRegistry.INSTANCE.set(ComposablesPackage.eNS_URI, this);
    this.setEFactoryInstance(ComposablesFactory.eINSTANCE);
    const variableWrapperClass = new BasicEClass();
    variableWrapperClass.setName("VariableWrapper");
    variableWrapperClass.setAbstract(false);
    variableWrapperClass.setInterface(false);
    this.getEClassifiers().push(variableWrapperClass);
    variableWrapperClass.setEPackage(this);
    ComposablesPackage.Literals.VARIABLE_WRAPPER = variableWrapperClass;
    const variableWrapper_value = new BasicEAttribute();
    variableWrapper_value.setName("value");
    variableWrapper_value.setLowerBound(0);
    variableWrapper_value.setUpperBound(1);
    variableWrapperClass.getEStructuralFeatures().push(variableWrapper_value);
    ComposablesPackage.Literals.VARIABLE_WRAPPER__VALUE = variableWrapper_value;
    const variableWrapper_variable = new BasicEAttribute();
    variableWrapper_variable.setName("variable");
    variableWrapper_variable.setLowerBound(0);
    variableWrapper_variable.setUpperBound(1);
    variableWrapperClass.getEStructuralFeatures().push(variableWrapper_variable);
    ComposablesPackage.Literals.VARIABLE_WRAPPER__VARIABLE = variableWrapper_variable;
    const variableWrapper_isSet = new BasicEAttribute();
    variableWrapper_isSet.setName("isSet");
    variableWrapper_isSet.setLowerBound(0);
    variableWrapper_isSet.setUpperBound(1);
    variableWrapperClass.getEStructuralFeatures().push(variableWrapper_isSet);
    ComposablesPackage.Literals.VARIABLE_WRAPPER__IS_SET = variableWrapper_isSet;
    const variableWrapper_type = new BasicEAttribute();
    variableWrapper_type.setName("type");
    variableWrapper_type.setLowerBound(0);
    variableWrapper_type.setUpperBound(1);
    variableWrapperClass.getEStructuralFeatures().push(variableWrapper_type);
    ComposablesPackage.Literals.VARIABLE_WRAPPER__TYPE = variableWrapper_type;
    const variableComplexStringWrapperClass = new BasicEClass();
    variableComplexStringWrapperClass.setName("VariableComplexStringWrapper");
    variableComplexStringWrapperClass.setAbstract(false);
    variableComplexStringWrapperClass.setInterface(false);
    this.getEClassifiers().push(variableComplexStringWrapperClass);
    variableComplexStringWrapperClass.setEPackage(this);
    ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = variableComplexStringWrapperClass;
    const variableComplexStringWrapper_value = new BasicEAttribute();
    variableComplexStringWrapper_value.setName("value");
    variableComplexStringWrapper_value.setLowerBound(0);
    variableComplexStringWrapper_value.setUpperBound(1);
    variableComplexStringWrapperClass.getEStructuralFeatures().push(variableComplexStringWrapper_value);
    ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = variableComplexStringWrapper_value;
    const variableComplexStringWrapper_type = new BasicEAttribute();
    variableComplexStringWrapper_type.setName("type");
    variableComplexStringWrapper_type.setLowerBound(0);
    variableComplexStringWrapper_type.setUpperBound(1);
    variableComplexStringWrapperClass.getEStructuralFeatures().push(variableComplexStringWrapper_type);
    ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = variableComplexStringWrapper_type;
    ComposablesPackage.Literals.VARIABLE_WRAPPER__VALUE.setEType(getEcorePackage().getEClassifier("EObject"));
    ComposablesPackage.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(getEcorePackage().getEClassifier("EString"));
    ComposablesPackage.Literals.VARIABLE_WRAPPER__IS_SET.setEType(getEcorePackage().getEClassifier("EBoolean"));
    ComposablesPackage.Literals.VARIABLE_WRAPPER__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
    ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(getEcorePackage().getEClassifier("EObject"));
    ComposablesPackage.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(getEcorePackage().getEClassifier("EString"));
  }
}
function adaptable(value) {
  const held = value;
  return typeof held?.eAdapterAdd === "function" ? held : void 0;
}
const DEPTH = 50;
const current = shallowRef();
function useCurrentHistory() {
  return current;
}
function useHistory(root) {
  const undoable = shallowRef([]);
  const redoable = shallowRef([]);
  let recording = true;
  let open;
  let gesture = false;
  let flushing = false;
  function push(step) {
    if (!step.changes.length) return;
    const next = [...undoable.value, step];
    undoable.value = next.length > DEPTH ? next.slice(next.length - DEPTH) : next;
    redoable.value = [];
  }
  function remember(notification) {
    if (!recording || notification.isTouch()) return;
    if (notification.getEventType() === NotificationType.REMOVING_ADAPTER) return;
    const change = {
      notifier: notification.getNotifier(),
      feature: notification.getFeature(),
      eventType: notification.getEventType(),
      oldValue: notification.getOldValue(),
      newValue: notification.getNewValue(),
      position: notification.getPosition()
    };
    if (!open) {
      open = { label: "Änderung", changes: [] };
      if (!gesture && !flushing) {
        flushing = true;
        queueMicrotask(() => {
          flushing = false;
          if (!gesture && open) {
            push(open);
            open = void 0;
          }
        });
      }
    }
    if (change.eventType === NotificationType.SET) {
      const earlier = open.changes.find(
        (held) => held.eventType === NotificationType.SET && held.notifier === change.notifier && held.feature === change.feature
      );
      if (earlier) {
        earlier.newValue = change.newValue;
        return;
      }
    }
    open.changes.push(change);
  }
  class Recorder extends EContentAdapter {
    notifyChanged(notification) {
      super.notifyChanged(notification);
      remember(notification);
    }
  }
  const recorder = new Recorder();
  let attachedTo;
  watch(
    () => toValue(root),
    (next) => {
      attachedTo?.eAdapterRemove(recorder);
      attachedTo = adaptable(next);
      attachedTo?.eAdapterAdd(recorder);
      undoable.value = [];
      redoable.value = [];
      open = void 0;
    },
    { immediate: true }
  );
  if (getCurrentScope()) {
    onScopeDispose(() => {
      attachedTo?.eAdapterRemove(recorder);
      if (current.value === api) current.value = void 0;
    });
  }
  function invert(change) {
    const { notifier, feature, eventType, oldValue, newValue, position } = change;
    if (!feature) return void 0;
    switch (eventType) {
      case NotificationType.SET:
      case NotificationType.UNSET: {
        notifier.eSet(feature, oldValue);
        return { ...change, oldValue: newValue, newValue: oldValue };
      }
      case NotificationType.ADD: {
        const list = notifier.eGet(feature);
        const at = position >= 0 ? position : list.indexOf(newValue);
        if (at >= 0) list.removeAt(at);
        return { ...change, eventType: NotificationType.REMOVE, oldValue: newValue, position: at };
      }
      case NotificationType.REMOVE: {
        const list = notifier.eGet(feature);
        const at = position >= 0 ? Math.min(position, list.size()) : list.size();
        list.addAt(at, oldValue);
        return { ...change, eventType: NotificationType.ADD, newValue: oldValue, position: at };
      }
      case NotificationType.ADD_MANY: {
        const list = notifier.eGet(feature);
        for (const value of newValue ?? []) {
          const at = list.indexOf(value);
          if (at >= 0) list.removeAt(at);
        }
        return { ...change, eventType: NotificationType.REMOVE_MANY, oldValue: newValue };
      }
      case NotificationType.REMOVE_MANY: {
        const list = notifier.eGet(feature);
        for (const value of oldValue ?? []) list.add(value);
        return { ...change, eventType: NotificationType.ADD_MANY, newValue: oldValue };
      }
      case NotificationType.MOVE: {
        const list = notifier.eGet(feature);
        list.move(oldValue, position);
        return { ...change, oldValue: position, position: oldValue };
      }
      default:
        return void 0;
    }
  }
  function apply(step) {
    recording = false;
    const back = [];
    try {
      for (let i = step.changes.length - 1; i >= 0; i -= 1) {
        const inverse = invert(step.changes[i]);
        if (inverse) back.push(inverse);
      }
    } finally {
      recording = true;
    }
    return { label: step.label, changes: back };
  }
  function begin(label) {
    if (gesture) return;
    gesture = true;
    open = { label, changes: [] };
  }
  function end() {
    if (!gesture) return;
    gesture = false;
    if (open) push(open);
    open = void 0;
  }
  const api = {
    canUndo: computed(() => undoable.value.length > 0),
    canRedo: computed(() => redoable.value.length > 0),
    undoLabel: computed(() => undoable.value[undoable.value.length - 1]?.label),
    redoLabel: computed(() => redoable.value[redoable.value.length - 1]?.label),
    undo() {
      const step = undoable.value[undoable.value.length - 1];
      if (!step) return;
      undoable.value = undoable.value.slice(0, -1);
      redoable.value = [...redoable.value, apply(step)];
    },
    redo() {
      const step = redoable.value[redoable.value.length - 1];
      if (!step) return;
      redoable.value = redoable.value.slice(0, -1);
      undoable.value = [...undoable.value, apply(step)];
    },
    begin,
    end,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(label, change) {
      begin(label);
      try {
        return change();
      } finally {
        end();
      }
    },
    clear() {
      undoable.value = [];
      redoable.value = [];
      open = void 0;
      gesture = false;
    }
  };
  current.value = api;
  return api;
}
const GEN_MODEL = "http://www.eclipse.org/emf/2002/GenModel";
const PRIMITIVES = {
  EString: "string",
  EInt: "number",
  EIntegerObject: "number",
  ELong: "number",
  EFloat: "number",
  EDouble: "number",
  EBoolean: "boolean",
  EBooleanObject: "boolean",
  EDate: "string"
};
const models = /* @__PURE__ */ new Map();
function documentationOf(element) {
  for (const annotation of Array.from(element.children)) {
    if (annotation.tagName !== "eAnnotations") continue;
    if (annotation.getAttribute("source") !== GEN_MODEL) continue;
    for (const detail of Array.from(annotation.children)) {
      if (detail.getAttribute("key") !== "documentation") continue;
      const value = detail.getAttribute("value");
      if (value) return value.split(/\s+/).filter(Boolean).join(" ");
    }
  }
  return void 0;
}
function typeOf(feature) {
  const raw = feature.getAttribute("eType") ?? "";
  const name = raw.split("#//").pop() ?? raw;
  return PRIMITIVES[name] ?? name;
}
function splitHref(href) {
  const at = href.indexOf("#//");
  if (at < 0) return void 0;
  return { nsURI: href.slice(0, at), name: href.slice(at + 3) };
}
function registerModelDocs(ecore) {
  let document;
  try {
    document = new DOMParser().parseFromString(ecore, "application/xml");
  } catch {
    return void 0;
  }
  const root = document.documentElement;
  if (!root || root.getElementsByTagName("parsererror").length) return void 0;
  const nsURI = root.getAttribute("nsURI");
  if (!nsURI) return void 0;
  if (models.has(nsURI)) return nsURI;
  const classes = /* @__PURE__ */ new Map();
  for (const classifier of Array.from(root.children)) {
    if (classifier.tagName !== "eClassifiers") continue;
    const name = classifier.getAttribute("name");
    if (name) classes.set(name, classifier);
  }
  models.set(nsURI, { nsURI, classes });
  return nsURI;
}
function hasModelDocs(nsURI) {
  return models.has(nsURI);
}
function featuresOf(element, owner) {
  const features = [];
  for (const feature of Array.from(element.children)) {
    if (feature.tagName !== "eStructuralFeatures") continue;
    const name = feature.getAttribute("name");
    if (!name) continue;
    const upper = feature.getAttribute("upperBound");
    features.push({
      name,
      documentation: documentationOf(feature),
      type: typeOf(feature),
      /* Ecore's default lowerBound is 0; a field is required only when the
         model says so. */
      optional: (feature.getAttribute("lowerBound") ?? "0") === "0",
      many: upper === "-1" || Number(upper ?? "1") > 1,
      declaredBy: owner
    });
  }
  return features;
}
function describeClass(nsURI, className) {
  const model = models.get(nsURI);
  const element = model?.classes.get(className);
  if (!model || !element) return void 0;
  const inherited = [];
  const seen = /* @__PURE__ */ new Set([`${nsURI}#//${className}`]);
  const walk = (uri, name) => {
    const at = models.get(uri)?.classes.get(name);
    if (!at) return;
    for (const superType of Array.from(at.children)) {
      if (superType.tagName !== "eSuperTypes") continue;
      const href = superType.getAttribute("href");
      const split = href ? splitHref(href) : void 0;
      if (!split || seen.has(href)) continue;
      seen.add(href);
      walk(split.nsURI, split.name);
      const parent = models.get(split.nsURI)?.classes.get(split.name);
      if (parent) inherited.push(...featuresOf(parent, split.name));
    }
  };
  walk(nsURI, className);
  const own = featuresOf(element, className);
  const byName = /* @__PURE__ */ new Map();
  for (const feature of [...inherited, ...own]) byName.set(feature.name, feature);
  return {
    name: className,
    documentation: documentationOf(element),
    features: [...byName.values()]
  };
}
function describeConfiguration(nsURI) {
  const model = models.get(nsURI);
  if (!model) return void 0;
  const names = [...model.classes.keys()];
  const named = names.filter((name) => /config(uration)?$/i.test(name));
  const pick = named.length === 1 ? named[0] : named.length > 1 ? named[0] : names.length === 1 ? names[0] : void 0;
  return pick ? describeClass(nsURI, pick) : void 0;
}
function describeModel(ecore) {
  if (!ecore) return void 0;
  const nsURI = registerModelDocs(ecore);
  return nsURI ? describeConfiguration(nsURI) : void 0;
}
function resetModelDocs() {
  models.clear();
}
const PROVIDED$1 = "i18n";
function useTranslation(namespace) {
  const i18n = inject(PROVIDED$1, void 0);
  const changed = ref(0);
  const language = ref(i18n?.language);
  const onChange = () => {
    changed.value += 1;
    language.value = i18n?.language;
  };
  i18n?.on?.("languageChanged", onChange);
  i18n?.store?.on?.("added", onChange);
  i18n?.store?.on?.("removed", onChange);
  if (getCurrentScope()) {
    onScopeDispose(() => {
      i18n?.off?.("languageChanged", onChange);
      i18n?.store?.off?.("added", onChange);
      i18n?.store?.off?.("removed", onChange);
    });
  }
  const t = (key, options) => {
    void changed.value;
    if (!i18n) return key;
    const full = namespace && !key.includes(":") ? `${namespace}:${key}` : key;
    return i18n.t(full, options);
  };
  return { t, language, revision: changed, available: !!i18n };
}
const PROVIDED = "i18n";
const REMEMBERED = "daanse.board.language";
function nameOf(tag) {
  try {
    const display = new Intl.DisplayNames([tag], { type: "language" });
    const name = display.of(tag);
    if (name && name !== tag) return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {
  }
  return tag.toUpperCase();
}
function useLanguage() {
  const i18n = inject(PROVIDED, void 0);
  const { language, revision } = useTranslation();
  const available = computed(() => {
    void revision.value;
    const held = Object.keys(i18n?.store?.data ?? {});
    return held.sort().map((tag) => ({ tag, label: nameOf(tag) }));
  });
  function choose(tag) {
    try {
      localStorage.setItem(REMEMBERED, tag);
    } catch {
    }
    i18n?.changeLanguage?.(tag);
  }
  onMounted(() => {
    let remembered = null;
    try {
      remembered = localStorage.getItem(REMEMBERED);
    } catch {
      remembered = null;
    }
    if (remembered && remembered !== i18n?.language) i18n?.changeLanguage?.(remembered);
  });
  return { available, current: language, choose };
}
const WrapperTypes = {
  "VariableWrapper": VariableWrapper,
  "VariableComplexStringWrapper": VariableComplexStringWrapper
};
EPackageRegistry.INSTANCE.registerPackage(ComposablesPackage.eINSTANCE);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage,
  VARIABLECOMPLEXSTRINGWRAPPER: TYPE,
  VARIABLEWRAPPER,
  VariableComplexStringWrapper,
  VariableWrapper,
  WrapperTypes,
  describeClass,
  describeConfiguration,
  describeModel,
  hasModelDocs,
  plainSettings,
  registerModelDocs,
  resetModelDocs,
  useBoard,
  useCurrentHistory,
  useDatasourceRepository,
  useEList,
  useEObject,
  useFeature,
  useGlobalLoading,
  useHistory,
  useLanguage,
  usePromisifiedModal,
  useTemporaryStore,
  useTranslation,
  useVariableRepository
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.composables";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.composables");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  ComposablesPackage,
  TYPE as VARIABLECOMPLEXSTRINGWRAPPER,
  VARIABLEWRAPPER2 as VARIABLEWRAPPER,
  VariableComplexStringWrapper,
  VariableWrapper2 as VariableWrapper,
  WrapperTypes,
  activate,
  deactivate,
  describeClass,
  describeConfiguration,
  describeModel,
  hasModelDocs,
  plainSettings,
  registerModelDocs,
  resetModelDocs,
  useBoard,
  useCurrentHistory,
  useDatasourceRepository,
  useEList,
  useEObject,
  useFeature,
  useGlobalLoading,
  useHistory,
  useLanguage,
  usePromisifiedModal,
  useTemporaryStore,
  useTranslation,
  useVariableRepository
};
