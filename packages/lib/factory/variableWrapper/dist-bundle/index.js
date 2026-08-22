const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { injectable, inject } from "@eclipse-daanse/tsm";
import { VARIABLEWRAPPER, VariableWrapper } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.variable";
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
let VariableWrapperFactory = class {
  constructor(variables) {
    this.variables = variables;
    this.wrapperTypes = /* @__PURE__ */ new Map();
  }
  /**
   * Registriert einen zusaetzlichen Wrapper-Typ. Eine erneute Registrierung
   * desselben Typs ersetzt die vorherige.
   */
  registerWrapperType(wrapperType) {
    this.wrapperTypes.set(wrapperType.type, wrapperType);
  }
  initilazeVariableWrappers(json) {
    const results = this.findPropertyWithValue(json, "type", VARIABLEWRAPPER);
    if (results) {
      for (const result of results) {
        const short = result.path.split(".");
        short.pop();
        const upperPath = short.join(".");
        const originalValue = this.getValueAtPath(json, short.join("."));
        if (originalValue._value !== void 0 && originalValue._value !== null) {
          const var1 = new VariableWrapper(originalValue._value);
          if (originalValue.reference && originalValue.reference.name) {
            const ref = this.variables.getVariable(originalValue.reference.name);
            var1.setTo(ref);
          }
          this.setValueAtPath(json, upperPath, var1);
        }
      }
    }
    for (const wrapperType of this.wrapperTypes.values()) {
      const typeResults = this.findPropertyWithValue(json, "type", wrapperType.type);
      if (!typeResults) continue;
      for (const result of typeResults) {
        const short = result.path.split(".");
        short.pop();
        const upperPath = short.join(".");
        const originalValue = this.getValueAtPath(json, short.join("."));
        if (originalValue._value !== void 0 && originalValue._value !== null) {
          this.setValueAtPath(json, upperPath, wrapperType.create(originalValue._value));
        }
      }
    }
    return json;
  }
  findPropertyWithValue(obj, keyToFind, valueToMatch) {
    const results = [];
    const visited = /* @__PURE__ */ new WeakSet();
    function recurse(current, path) {
      if (Array.isArray(current)) {
        current.forEach((item, index) => recurse(item, `${path}[${index}]`));
      } else if (typeof current === "object" && current !== null) {
        if (visited.has(current)) {
          return;
        }
        visited.add(current);
        for (const key in current) {
          const newPath = path ? `${path}.${key}` : key;
          if (key === keyToFind && current[key] === valueToMatch) {
            results.push({ path: newPath, value: current[key] });
          }
          recurse(current[key], newPath);
        }
      }
    }
    recurse(obj, "");
    return results;
  }
  setValueAtPath(obj, path, newValue) {
    const pathParts = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split(".");
    let current = obj;
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      if (!(part in current)) {
        return false;
      }
      current = current[part];
      if (typeof current !== "object" || current === null) {
        return false;
      }
    }
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart in current) {
      current[lastPart] = newValue;
      return true;
    }
    return false;
  }
  getValueAtPath(obj, path) {
    const pathParts = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split(".");
    let current = obj;
    for (const part of pathParts) {
      if (current == null || !(part in current)) {
        return void 0;
      }
      current = current[part];
    }
    return current;
  }
};
VariableWrapperFactory = __decorateClass([
  injectable(),
  __decorateParam(0, inject(VARIABLE_REPOSITORY))
], VariableWrapperFactory);
const VARIABLE_WRAPPER_FACTORY = serviceId("VariableWrapperFactory");
const identifier = Symbol.for(VARIABLE_WRAPPER_FACTORY);
function activate$1({ services }) {
  services.register(VARIABLE_WRAPPER_FACTORY, services.construct(VariableWrapperFactory));
}
function deactivate$1({ services }) {
  services.unregister(VARIABLE_WRAPPER_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_WRAPPER_FACTORY,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.factory.variableWrapper");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  VARIABLE_WRAPPER_FACTORY,
  activate,
  deactivate,
  identifier
};
