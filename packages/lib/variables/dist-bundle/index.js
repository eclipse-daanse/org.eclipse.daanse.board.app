class AccessError extends Error {
  name;
  message = "Access Error on Variable Scope";
  constructor(name) {
    super();
    this.name = name;
  }
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}
function v4(options, buf, offset) {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
var VariableScope = /* @__PURE__ */ ((VariableScope2) => {
  VariableScope2["Global"] = "global";
  VariableScope2["Page"] = "page";
  return VariableScope2;
})(VariableScope || {});
var VariableAccessMode = /* @__PURE__ */ ((VariableAccessMode2) => {
  VariableAccessMode2["ReadOnly"] = "readonly";
  VariableAccessMode2["PageOnly"] = "page-only";
  VariableAccessMode2["ExternalWritable"] = "external-writable";
  return VariableAccessMode2;
})(VariableAccessMode || {});
class Variable {
  subscribers = [];
  innerValue;
  intervalFn = () => {
  };
  description = "";
  refreshInterval = 0;
  refreshType = RefreshType.None;
  refreshIntervalId = 0;
  refreshTrigger = null;
  id = v4();
  type = null;
  name = null;
  scope = "global";
  accessMode = "external-writable";
  pageId;
  /*
   * Set by the factory right after construction (see this package's
   * activate) - plain properties, no container involved. Optional: a
   * variable works without an event bus or page context, with fewer
   * features.
   */
  eventBus;
  pageContextService;
  // Removed injection to break circular dependency
  storage;
  init(name, config) {
    this.name = name;
    this.scope = config.scope || "global";
    this.accessMode = config.accessMode || "external-writable";
    this.pageId = config.pageId;
    this.update(config);
  }
  rename(newName) {
    this.name = newName;
  }
  update(config) {
    this.description = config.description;
    this.refreshInterval = config.refreshInterval || 0;
    this.refreshInterval = Math.max(this.refreshInterval, 300);
    this.refreshType = config.refreshType || RefreshType.None;
    this.refreshTrigger = config.refreshTrigger || null;
    if (this.refreshType === RefreshType.Interval) {
      if (this.refreshInterval) {
        this.refreshIntervalId = setInterval(() => {
          this.intervalFn();
        }, this.refreshInterval);
      }
    } else if (this.refreshType === RefreshType.Trigger) {
      if (this.refreshTrigger) {
        this.eventBus?.on(this.refreshTrigger, () => {
          this.intervalFn();
        });
      }
    }
    this.eventBus?.emit(VariableEvents.VariableUpdated);
  }
  set onInterval(onInterval) {
    this.intervalFn = onInterval;
  }
  get value() {
    const currentPageId = this.pageContextService?.getCurrentPageId();
    if (this.scope == "page" && currentPageId != this.pageId && this.accessMode == "page-only") {
      throw new AccessError(this.name);
    }
    return this.innerValue;
  }
  set value(value) {
    const currentPageId = this.pageContextService?.getCurrentPageId();
    if (this.scope == "page" && currentPageId != this.pageId && this.accessMode == "page-only") {
      throw new AccessError(this.name);
    }
    if (this.accessMode == "readonly") {
      throw new AccessError(this.name);
    }
    console.log("Setting value, current page:", currentPageId);
    this.innerValue = value;
    console.log("Value changed");
    console.log(this.subscribers[0]);
    this.subscribers.forEach((subscriber) => subscriber());
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  getSubscriptions() {
    return this.subscribers;
  }
  notyfy() {
    this.eventBus?.emit(VariableEvents.VariableUpdated);
    this.subscribers.forEach((subscriber) => subscriber());
  }
  forceUpdate() {
  }
  clearInterval() {
    clearInterval(this.refreshIntervalId);
  }
  clearTrigger() {
    if (this.refreshTrigger) {
      this.eventBus?.off(this.refreshTrigger);
    }
  }
  canWriteFromPage() {
    return this.accessMode === "page-only" || this.accessMode === "external-writable";
  }
  canWriteFromExternal() {
    return this.accessMode === "external-writable";
  }
  serialize() {
    const ret = {
      id: this.id,
      name: this.name,
      description: this.description,
      refreshType: this.refreshType,
      refreshInterval: this.refreshInterval ?? void 0,
      type: this.type,
      scope: this.scope,
      accessMode: this.accessMode,
      pageId: this.pageId
    };
    return ret;
  }
}
const TYPE$3 = "ComputedVariable";
const symbol$5 = Symbol.for(TYPE$3);
class ComputedVariable extends Variable {
  innerExpression = "";
  type = TYPE$3;
  init(name, config) {
    super.init(name, config);
    this.innerExpression = config.expression;
    this.initSubscriptions();
  }
  update(config) {
    super.update(config);
    this.expression = config.expression;
    this.initSubscriptions();
  }
  get expression() {
    return this.innerExpression;
  }
  set expression(expression) {
    this.innerExpression = expression;
    this.initSubscriptions();
  }
  // TODO: Think if the inner value is necessary
  get value() {
    try {
      return this.computeValue();
    } catch (e) {
      return `Incorrect expression: ${this.innerExpression}`;
    }
  }
  getDependencies() {
    const regexp = /\$(\S+)*/gm;
    const dependencies = [];
    let m;
    while ((m = regexp.exec(this.innerExpression)) !== null) {
      if (m.index === regexp.lastIndex) {
        regexp.lastIndex++;
      }
      dependencies.push(m[1]);
    }
    return dependencies;
  }
  computeValue() {
    const dependencies = this.getDependencies();
    let result = this.innerExpression;
    dependencies.forEach((dep) => {
      result = result.replace(
        `$${dep}`,
        typeof this.storage?.getVariable(dep)?.value === "number" ? this.storage?.getVariable(dep)?.value : `'${this.storage?.getVariable(dep)?.value}'`
      );
    });
    const execFn = new Function(`return ${result}`);
    return execFn();
  }
  initSubscriptions() {
    const dependencies = this.getDependencies();
    dependencies.forEach((dep) => {
      console.log(dep);
      const depencencyVariable = this.storage?.getVariable(dep);
      if (depencencyVariable) {
        depencencyVariable.subscribe(() => {
          console.log("dep changed", dep);
          this.notyfy();
          console.log("Variable changed");
        });
      } else {
        console.log("dep pending:", dep);
      }
    });
  }
  serialize() {
    const ret = super.serialize();
    ret.value = this.value;
    ret.expression = this.innerExpression;
    ret.type = this.type;
    return ret;
  }
}
function createComputedVariableFactory(deps) {
  return (name, config) => {
    const variable = new ComputedVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
const TYPE$2 = "ConstantVariable";
const symbol$4 = Symbol.for(TYPE$2);
class ConstantVariable extends Variable {
  type = TYPE$2;
  init(name, config) {
    super.init(name, config);
    this.value = config.value;
  }
  update(config) {
    super.update(config);
    this.value = config.value;
  }
  get value() {
    return super.value;
  }
  set value(value) {
    super.value = value;
  }
  serialize() {
    const ret = super.serialize();
    ret.value = this.value;
    ret.type = this.type;
    return ret;
  }
}
function createConstantVariableFactory(deps) {
  return (name, config) => {
    const variable = new ConstantVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
const symbol$3 = Symbol.for("QueryVariable");
class QueryVariable extends Variable {
  innerQueryParam = "";
  type = "query";
  init(name, config) {
    super.init(name, config);
    this.parameter = config.queryParam;
  }
  get parameter() {
    return this.innerQueryParam;
  }
  set parameter(parameter) {
    this.innerQueryParam = parameter;
    const paramValue = new URLSearchParams(window.location.search).get(
      this.innerQueryParam
    );
    super.value = paramValue;
  }
  get value() {
    return super.value;
  }
}
function createQueryVariableFactory(deps) {
  return (name, config) => {
    const variable = new QueryVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
const symbol$2 = Symbol.for("RequestVariable");
class RequestVariable extends Variable {
  innerRequest = "";
  type = "request";
  time = 0;
  init(name, config) {
    super.init(name, config);
    this.request = config.request;
    super.onInterval = () => {
      this.request = config.request;
    };
  }
  get request() {
    return this.innerRequest;
  }
  set request(request) {
    this.innerRequest = request;
    fetch(this.innerRequest).then((response) => response.json()).then((data) => {
      super.value = data;
    });
  }
  get value() {
    return JSON.stringify(super.value);
  }
  set value(value) {
  }
}
function createRequestVariableFactory(deps) {
  return (name, config) => {
    const variable = new RequestVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
const symbol$1 = Symbol.for("TimeVariable");
class TimeVariable extends Variable {
  type = "time";
  init(name, config) {
    super.init(name, config);
    super.value = Date.now();
    super.onInterval = () => {
      super.value = Date.now();
    };
  }
  get value() {
    return super.value;
  }
  set value(value) {
  }
}
function createTimeVariableFactory(deps) {
  return (name, config) => {
    const variable = new TimeVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
const TYPE$1 = "DateTimePickerVariable";
const symbol = Symbol.for(TYPE$1);
class DateTimePickerVariable extends Variable {
  type = TYPE$1;
  innerDatetime = "";
  init(name, config) {
    super.init(name, config);
    this.innerDatetime = config.datetime || "";
  }
  update(config) {
    super.update(config);
    this.innerDatetime = config.datetime || "";
  }
  get datetime() {
    return this.innerDatetime;
  }
  set datetime(value) {
    this.innerDatetime = value;
    this.notyfy();
  }
  get value() {
    return this.innerDatetime;
  }
  set value(value) {
    this.innerDatetime = value;
    this.notyfy();
  }
  serialize() {
    const ret = super.serialize();
    ret.datetime = this.innerDatetime;
    ret.type = this.type;
    return ret;
  }
}
function createDateTimePickerVariableFactory(deps) {
  return (name, config) => {
    const variable = new DateTimePickerVariable();
    variable.eventBus = deps.eventBus;
    variable.pageContextService = deps.pageContextService;
    variable.init(name, config);
    return variable;
  };
}
let parameterFactory;
function provideComputedStoreParameterFactory(factory) {
  parameterFactory = factory;
}
function requireParameterFactory() {
  if (!parameterFactory) {
    throw new Error("ComputedStoreParameter factory not provided - is lib.variables active?");
  }
  return parameterFactory;
}
class UsesComputedVariable {
  updateCb = () => {
  };
  constructor() {
  }
  setUpdateCb(cb) {
    this.updateCb = cb;
  }
  initVariable(expression) {
    const computedStoreParameter = requireParameterFactory()();
    computedStoreParameter.init(expression, () => {
      this.updateCb();
    });
    return computedStoreParameter;
  }
}
class ComputedStoreParameter {
  innerExpression = "";
  currentSubscriptions = /* @__PURE__ */ new Map();
  refreshCb = () => {
  };
  /* Set by the provided factory (see UsesComputedVariable) - plain
   * properties, no container involved. */
  eventBus;
  storage;
  init(expression, refreshCb) {
    this.innerExpression = expression;
    this.refreshCb = refreshCb;
    this.eventBus?.on(VariableEvents.VariableCreated, () => {
      refreshCb();
    });
    this.eventBus?.on(VariableEvents.VariableRemoved, () => {
      refreshCb();
    });
    this.eventBus?.on(VariableEvents.VariableUpdated, () => {
      console.log("Variable updated");
      refreshCb();
    });
    this.eventBus?.on(VariableEvents.VariablesCleared, () => {
      refreshCb();
    });
    this.eventBus?.on(VariableEvents.VariableRemoved, () => {
      refreshCb();
    });
  }
  // Case 1: Static string
  // Case 2: Computed string with variables
  //      - updated when variables change
  //      - updated when variables are added or removed
  getDependencies() {
    const regexp = /\$([a-zA-Z_][\w]*)/g;
    const dependencies = [];
    let m;
    while ((m = regexp.exec(this.innerExpression)) !== null) {
      if (m.index === regexp.lastIndex) {
        regexp.lastIndex++;
      }
      dependencies.push(m[1]);
    }
    return dependencies;
  }
  computeValue() {
    const dependencies = this.getDependencies();
    let result = this.innerExpression;
    if (dependencies.length === 0) {
      return result;
    }
    this.currentSubscriptions.forEach((subFn, key) => {
      const variable = this.storage?.getVariable(key);
      if (variable) {
        variable.unsubscribe(subFn);
      }
    });
    this.currentSubscriptions.clear();
    dependencies.forEach((dep) => {
      const variable = this.storage?.getVariable(dep);
      if (variable) {
        const subFn = () => {
          this.refreshCb();
        };
        this.currentSubscriptions.set(dep, subFn);
        variable.subscribe(subFn);
      }
    });
    dependencies.forEach((dep) => {
      const variable = this.storage?.getVariable(dep);
      if (variable && variable.value !== void 0) {
        result = result.replace(
          `$${dep}`,
          typeof variable.value === "number" ? variable.value.toString() : `${variable.value}`
        );
      }
    });
    return result;
  }
  get value() {
    return this.computeValue();
  }
}
const TYPE = "VARIABLEWRAPPER";
class VariableWrapper {
  type = TYPE;
  _value = void 0;
  isSet = false;
  reference;
  variable = null;
  constructor(init_value = void 0) {
    this._value = init_value;
  }
  setTo(e) {
    this.reference = e;
    e.subscribe(() => {
      console.log("change value");
      if (this.reference) {
        this._value = this.reference.value;
      }
    });
    this._value = this.reference.value;
    this.variable = this.reference.name;
    this.isSet = true;
  }
  get value() {
    return this._value;
  }
  // TODO: Memory leak
  set value(isn) {
    this.reference = void 0;
    this.isSet = false;
    this._value = isn;
  }
}
var SourceType = /* @__PURE__ */ ((SourceType2) => {
  SourceType2["Constant"] = "Constant";
  SourceType2["QueryParameter"] = "Query parameter";
  SourceType2["SystemProperties"] = "System properties";
  SourceType2["EnvironmentVariables"] = "Environment variables";
  SourceType2["BrowserProperties"] = "Browser properties";
  SourceType2["Time"] = "Time";
  SourceType2["Expression"] = "Expression";
  SourceType2["AsyncParameters"] = "Async parameters";
  SourceType2["ComputedString"] = "Computed String";
  return SourceType2;
})(SourceType || {});
var VariableEvents = /* @__PURE__ */ ((VariableEvents2) => {
  VariableEvents2["VariableUpdated"] = "VariableUpdated";
  VariableEvents2["VariableDeleted"] = "VariableDeleted";
  VariableEvents2["VariableCreated"] = "VariableCreated";
  VariableEvents2["VariablesCleared"] = "VariablesCleared";
  VariableEvents2["VariableRemoved"] = "VariableRemoved";
  return VariableEvents2;
})(VariableEvents || {});
var RefreshType = /* @__PURE__ */ ((RefreshType2) => {
  RefreshType2["None"] = "None";
  RefreshType2["Reactive"] = "Reactive";
  RefreshType2["Interval"] = "Interval";
  RefreshType2["Trigger"] = "Trigger";
  return RefreshType2;
})(RefreshType || {});
function activate$1({ services }) {
  const deps = {
    eventBus: services.get("TINY_EMITTER"),
    pageContextService: services.get("PageContext")
  };
  services.register(TYPE$2, createConstantVariableFactory(deps));
  services.register(TYPE$3, createComputedVariableFactory(deps));
  services.register("QueryVariable", createQueryVariableFactory(deps));
  services.register("RequestVariable", createRequestVariableFactory(deps));
  services.register("TimeVariable", createTimeVariableFactory(deps));
  services.register(TYPE$1, createDateTimePickerVariableFactory(deps));
  provideComputedStoreParameterFactory(() => {
    const parameter = new ComputedStoreParameter();
    parameter.eventBus = deps.eventBus;
    parameter.storage = services.get("VariableRepository");
    return parameter;
  });
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COMPUTED_VARIABLE: TYPE$3,
  CONSTANT_VARIABLE: TYPE$2,
  ComputedStoreParameter,
  ComputedVariable,
  ComputedVariableSymbol: symbol$5,
  ConstantVariable,
  ConstantVariableSymbol: symbol$4,
  DATETIME_PICKER_VARIABLE: TYPE$1,
  DateTimePickerVariable,
  DateTimePickerVariableSymbol: symbol,
  QueryVariable,
  QueryVariableSymbol: symbol$3,
  RefreshType,
  RequestVariable,
  RequestVariableSymbol: symbol$2,
  SourceType,
  TimeVariable,
  TimeVariableSymbol: symbol$1,
  UsesComputedVariable,
  VARIABLEWRAPPER: TYPE,
  Variable,
  VariableAccessMode,
  VariableEvents,
  VariableScope,
  VariableWrapper,
  activate: activate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.variables";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.variables");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  TYPE$3 as COMPUTED_VARIABLE,
  TYPE$2 as CONSTANT_VARIABLE,
  ComputedStoreParameter,
  ComputedVariable,
  symbol$5 as ComputedVariableSymbol,
  ConstantVariable,
  symbol$4 as ConstantVariableSymbol,
  TYPE$1 as DATETIME_PICKER_VARIABLE,
  DateTimePickerVariable,
  symbol as DateTimePickerVariableSymbol,
  QueryVariable,
  symbol$3 as QueryVariableSymbol,
  RefreshType,
  RequestVariable,
  symbol$2 as RequestVariableSymbol,
  SourceType,
  TimeVariable,
  symbol$1 as TimeVariableSymbol,
  UsesComputedVariable,
  TYPE as VARIABLEWRAPPER,
  Variable,
  VariableAccessMode,
  VariableEvents,
  VariableScope,
  VariableWrapper,
  activate,
  deactivate
};
