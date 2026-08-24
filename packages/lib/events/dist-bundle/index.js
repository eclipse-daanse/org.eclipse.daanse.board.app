import { Documentation, Attribute, ModelClass } from "org.eclipse.daanse.board.app.lib.annotations";
import { EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID, EVENT_MANAGER_ID, EVENT_BUS_BRIDGE_ID, ECORE_METADATA_SERVICE_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { EVENT_ACTIONS_REGISTRY_ID as EVENT_ACTIONS_REGISTRY_ID2, EVENT_REGISTRY_ID as EVENT_REGISTRY_ID2 } from "org.eclipse.daanse.board.app.lib.api.events";
import { loggerFactory } from "org.eclipse.daanse.board.app.lib.logger";
import { injectable, inject } from "@eclipse-daanse/tsm";
const { TINY_EMITTER } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var __defProp = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let Payload = class {
};
__decorateClass$5([
  Documentation("Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."),
  Attribute()
], Payload.prototype, "eventType", 2);
__decorateClass$5([
  Documentation("ID of the widget that emitted this event."),
  Attribute()
], Payload.prototype, "widgetId", 2);
__decorateClass$5([
  Documentation("Unix timestamp when the event was emitted."),
  Attribute()
], Payload.prototype, "timestamp", 2);
__decorateClass$5([
  Documentation("Optional metadata object for additional context."),
  Attribute()
], Payload.prototype, "metadata", 2);
Payload = __decorateClass$5([
  Documentation("Abstract base class for all event payloads."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//Payload" })
], Payload);
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let WidgetActionInterface = class {
};
WidgetActionInterface = __decorateClass$4([
  Documentation("Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//WidgetActionInterface" })
], WidgetActionInterface);
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let SystemActionInterface = class extends WidgetActionInterface {
};
SystemActionInterface = __decorateClass$3([
  Documentation("Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface" })
], SystemActionInterface);
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let PageActionInterface = class extends WidgetActionInterface {
};
PageActionInterface = __decorateClass$2([
  Documentation("Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface" })
], PageActionInterface);
var Comperator = /* @__PURE__ */ ((Comperator2) => {
  Comperator2["eq"] = "eq";
  Comperator2["lt"] = "lt";
  Comperator2["gt"] = "gt";
  Comperator2["lte"] = "lte";
  Comperator2["gte"] = "gte";
  Comperator2["neq"] = "neq";
  return Comperator2;
})(Comperator || {});
class Condition {
  constructor() {
    this.comperator = Comperator.eq;
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var _Reflect = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var hasRequired_Reflect;
function require_Reflect() {
  if (hasRequired_Reflect) return _Reflect;
  hasRequired_Reflect = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_) {
        }
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_) {
        }
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null)
          return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x, y) {
        return x === y || x !== x && y !== y;
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
          f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          (function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })()
        );
        var Map2 = (
          /** @class */
          (function() {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map3.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map3.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map3.prototype._find = function(key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i = 0; i < this._keys.length; i++) {
                  if (SameValueZero(this._keys[i], key)) {
                    this._cacheIndex = i;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })()
        );
        return Map2;
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set2 = (
          /** @class */
          (function() {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set3.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set3.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function() {
              this._map.clear();
            };
            Set3.prototype.keys = function() {
              return this._map.keys();
            };
            Set3.prototype.values = function() {
              return this._map.keys();
            };
            Set3.prototype.entries = function() {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set3;
          })()
        );
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i)
            buffer[i] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect;
}
require_Reflect();
class EventRegistry {
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.widgetTypeMap = /* @__PURE__ */ new Map();
  }
  // EcoreMetadataService instance
  /**
   * Set EcoreMetadataService instance for Ecore-based metadata extraction
   */
  setEcoreMetadataService(service) {
    this.ecoreMetadataService = service;
  }
  /**
   * Registriert alle Events eines Widgets
   */
  registerWidget(widgetType, events) {
    for (const event of events) {
      const key = `${widgetType}:${event.type}`;
      this.widgetTypeMap.set(key, widgetType);
      this.events.set(key, {
        ...event,
        type: key
        // z.B. "MapWidget:click_on_datastream"
      });
    }
  }
  /**
   * Gibt alle registrierten Events zurück (mit vollständigem widgetType:eventType)
   */
  getAllEvents() {
    return Array.from(this.events.values());
  }
  /**
   * Gibt ein Event zurück
   */
  getEvent(widgetType, eventType) {
    return this.events.get(`${widgetType}:${eventType}`);
  }
  /**
   * Gibt alle Events für einen Widget-Typ zurück
   */
  getWidgetEvents(widgetType) {
    return Array.from(this.events.entries()).filter(([key]) => key.startsWith(`${widgetType}:`)).map(([, event]) => event);
  }
  /**
   * Extrahiert alle Metadaten aus einem Payload-Typ
   */
  extractPayloadMetadata(target) {
    const proto = target.prototype ?? target;
    const result = {};
    const ownKeys = Reflect.getMetadataKeys(proto);
    result["__class"] = ownKeys.map((key) => ({
      key,
      value: Reflect.getMetadata(key, proto)
    }));
    const protoPropertyNames = Object.getOwnPropertyNames(proto);
    const propertyNamesSet = new Set(protoPropertyNames);
    try {
      const instance = new target();
      Object.keys(instance).forEach((key) => propertyNamesSet.add(key));
    } catch (e) {
    }
    for (const property of propertyNamesSet) {
      if (property === "constructor") continue;
      const metaKeys = Reflect.getMetadataKeys(proto, property);
      if (metaKeys.length === 0) continue;
      result[property] = metaKeys.map((key) => ({
        key,
        value: Reflect.getMetadata(key, proto, property)
      }));
    }
    return result;
  }
  /**
   * Extract payload properties with type information from Ecore model
   * Falls back to decorator-based extraction if Ecore model is not available
   */
  extractPayloadPropertiesForEvent(eventType) {
    const widgetType = this.widgetTypeMap.get(eventType);
    if (!widgetType || !this.ecoreMetadataService) {
      console.warn(`No widget type or EcoreMetadataService for event: ${eventType}`);
      return [];
    }
    const event = this.events.get(eventType);
    if (!event || !event.payloadType) {
      console.warn(`No event or payload type found for: ${eventType}`);
      return [];
    }
    const payloadClassName = event.payloadType.name;
    const ecoreMetadata = this.ecoreMetadataService.extractPayloadMetadata(widgetType, payloadClassName);
    if (ecoreMetadata && ecoreMetadata.properties) {
      console.log(`✅ Extracted ${ecoreMetadata.properties.length} properties from Ecore model for ${payloadClassName}`);
      return ecoreMetadata.properties;
    }
    console.warn(`No Ecore metadata found for ${payloadClassName}, returning empty array`);
    return [];
  }
  /**
   * Extract payload properties with type information (legacy method for backward compatibility)
   * @deprecated Use extractPayloadPropertiesForEvent instead
   */
  extractPayloadProperties(target) {
    console.warn("extractPayloadProperties() called - this method is deprecated, use extractPayloadPropertiesForEvent() instead");
    return [];
  }
  /**
   * Löscht alle registrierten Events
   */
  clear() {
    this.events.clear();
  }
  /**
   * Entfernt alle Events eines Widget-Typs
   */
  unregisterWidget(widgetType) {
    const keysToDelete = [];
    for (const key of this.events.keys()) {
      if (key.startsWith(`${widgetType}:`)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.events.delete(key);
    }
  }
}
const EVENT_REGISTRY = Symbol.for(EVENT_REGISTRY_ID);
const log$2 = loggerFactory.createLogger("daanse:events:decorator");
const WIDGET_ACTION_METADATA_KEY = Symbol.for("daanse:widgetAction");
const ACTION_PARAMETER_METADATA_KEY = Symbol.for("daanse:actionParameter");
function WidgetAction(metadata) {
  return function(target, propertyKey, descriptor) {
    const existingMetadata = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, target.constructor) || [];
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey) || [];
    let parameters = metadata.parameters;
    if (!parameters && descriptor.value) {
      const funcStr = descriptor.value.toString();
      const paramMatch = funcStr.match(/\(([^)]*)\)/);
      if (paramMatch && paramMatch[1].trim()) {
        const paramNames = paramMatch[1].split(",").map((p) => p.trim());
        parameters = paramNames.map((paramName, index) => {
          const nameMatch = paramName.match(/^(\w+)(\?)?:\s*(\w+)/);
          if (nameMatch) {
            const [, name, optional, type] = nameMatch;
            return `${name}${optional || ""}: ${type}`;
          }
          const typeName = paramTypes[index]?.name || "any";
          return `${paramName}: ${typeName}`;
        });
      }
    }
    Reflect.defineMetadata(
      WIDGET_ACTION_METADATA_KEY,
      [
        ...existingMetadata,
        {
          methodName: propertyKey,
          ...metadata,
          parameters
        }
      ],
      target.constructor
    );
    return descriptor;
  };
}
function ActionParameter(metadata) {
  return function(target, propertyKey, parameterIndex) {
    const key = String(propertyKey);
    const existingParams = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, target, key) || [];
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, key) || [];
    const paramType = paramTypes[parameterIndex];
    let paramName = metadata?.name;
    let paramTypeStr = metadata?.type;
    let isOptional = metadata?.optional;
    if (!paramName || !paramTypeStr) {
      const func = Object.getOwnPropertyDescriptor(target, key)?.value || target[key];
      if (func) {
        const fnStr = func.toString().replace(/\s+/g, " ");
        const paramMatch = fnStr.match(/^[^(]*\(([^)]*)\)/);
        if (paramMatch && paramMatch[1].trim()) {
          const params = paramMatch[1].split(",").map((p) => p.replace(/\/\*.*\*\//, "").trim()).filter((p) => p.length > 0 && !p.startsWith("@"));
          const param = params[parameterIndex];
          if (param) {
            const match = param.match(/^(\w+)(\?)?(?::\s*(.+?))?(?:\s*=|$)/);
            if (match) {
              if (!paramName) paramName = match[1];
              if (!isOptional) isOptional = !!match[2];
              if (!paramTypeStr && match[3]) paramTypeStr = match[3].trim();
            }
          }
        }
      }
    }
    let finalType = paramTypeStr;
    if (!finalType && paramType) {
      const typeMap = {
        "String": "string",
        "Number": "number",
        "Boolean": "boolean",
        "Array": "Array<any>",
        "Object": "object"
      };
      finalType = typeMap[paramType.name] || paramType.name || "any";
    }
    existingParams.push({
      index: parameterIndex,
      name: paramName || `arg${parameterIndex}`,
      type: finalType || "any",
      optional: isOptional
    });
    Reflect.defineMetadata(ACTION_PARAMETER_METADATA_KEY, existingParams, target, key);
    log$2(
      "ActionParameter: %s[%d] = %s: %s%s",
      key,
      parameterIndex,
      paramName || `arg${parameterIndex}`,
      paramTypeStr || paramType?.name || "any",
      isOptional ? "?" : ""
    );
  };
}
function getWidgetActions(target) {
  const constructor = typeof target === "function" ? target : target.constructor;
  log$2("getWidgetActions called with target: %o", target);
  log$2("  constructor: %o", constructor);
  log$2("  constructor.name: %s", constructor?.name);
  const allKeys = Reflect.getMetadataKeys(constructor);
  log$2("  All metadata keys: %o", allKeys);
  let actions = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, constructor) || [];
  actions = actions.map((action) => {
    const paramMetadata = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, constructor.prototype, action.methodName) || [];
    if (paramMetadata.length > 0 && !action.parameters) {
      const sortedParams = [...paramMetadata].sort((a, b) => a.index - b.index);
      action.parameters = sortedParams.map(
        (p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`
      );
    }
    return action;
  });
  log$2("  Actions found: %o", actions);
  return actions;
}
class EventActionsRegistry {
  constructor() {
    this.actions = /* @__PURE__ */ new Map();
    this.widgetTypes = /* @__PURE__ */ new Map();
    this.widgetInstances = /* @__PURE__ */ new Map();
    this.instanceTypes = /* @__PURE__ */ new Map();
    this.instancePages = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen eindeutigen Key für die Registry
   */
  createKey(context, eventType, contextId) {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }
  /**
   * Registriert eine Aktion für ein Event in einem Kontext
   */
  register(context, eventType, action, contextId) {
    const key = this.createKey(context, eventType, contextId);
    if (!this.actions.has(key)) {
      this.actions.set(key, []);
    }
    this.actions.get(key).push({
      context,
      contextId,
      eventType,
      action
    });
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Kontext
   */
  unregister(context, eventType, contextId) {
    const key = this.createKey(context, eventType, contextId);
    this.actions.delete(key);
  }
  /**
   * Führt alle registrierten Aktionen für ein Event aus
   */
  async execute(context, eventType, ...args) {
    const key = this.createKey(context, eventType);
    const actions = this.actions.get(key) || [];
    for (const action of actions) {
      try {
        await action.action(...args);
      } catch (error) {
        console.error(`Error executing action for ${key}:`, error);
      }
    }
  }
  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(context, eventType, contextId) {
    if (eventType) {
      const key = this.createKey(context, eventType, contextId);
      return this.actions.get(key) || [];
    }
    const result = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;
    for (const [key, actions] of this.actions.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...actions);
      }
    }
    return result;
  }
  /**
   * Löscht alle registrierten Aktionen
   */
  clear() {
    this.actions.clear();
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Context-ID (z.B. beim Unmount eines Widgets)
   */
  clearContext(context, contextId) {
    const keysToDelete = [];
    const prefix = `${context}:${contextId}:`;
    for (const key of this.actions.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.actions.delete(key);
    }
    if (context === "widget") {
      this.widgetInstances.delete(contextId);
    }
  }
  /**
   * Set the EcoreMetadataService (injected manually to avoid circular dependency)
   */
  setEcoreMetadataService(service) {
    this.ecoreMetadataService = service;
  }
  /**
   * Registriert einen Widget-Typ mit seinen Actions (aus @WidgetAction Decorators)
   * Wird beim Package-Import aufgerufen
   * @param widgetType - Widget type identifier
   * @param baseClass - Die abstrakte Basis-Klasse mit @WidgetAction Decorators
   * @param context - Optional: Kontext für diese Actions (default: 'widget')
   */
  registerWidgetType(widgetType, baseClass, context) {
    const actions = getWidgetActions(baseClass);
    this.widgetTypes.set(widgetType, {
      widgetType,
      baseClass,
      actions,
      context: context || "widget"
    });
    console.log(`📝 Registered widget type "${widgetType}" (context: ${context || "widget"}) with ${actions.length} actions:`);
    actions.forEach((action) => {
      console.log(`  - ${action.methodName}(${action.parameters?.join(", ") || ""})`, action);
    });
  }
  /**
   * Nimmt die Registrierung eines Widget-Typs zurück.
   *
   * Gegenstück zu registerWidgetType, damit ein Widget-Modul seine
   * Registrierung in deactivate() wieder aufheben kann.
   *
   * @param widgetType - Widget type identifier
   * @returns ob der Typ registriert war
   */
  unregisterWidgetType(widgetType) {
    return this.widgetTypes.delete(widgetType);
  }
  /**
   * Registriert Actions aus einem Ecore-Modell
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
   * @param context - Kontext für diese Actions (default: 'widget')
   */
  async registerActionsFromEcore(name, ecoreUri, context) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModel(name, ecoreUri);
      const ecoreActions = this.ecoreMetadataService.extractActions(name);
      const actions = ecoreActions.map((ecoreAction) => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(
          (p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`
        )
      }));
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null,
        // No base class for Ecore-based actions
        actions,
        context: context || "widget"
      });
      console.log(`📝 Registered actions "${name}" (context: ${context || "widget"}) from Ecore with ${actions.length} actions:`);
      actions.forEach((action) => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(", ") || ""})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore:`, error);
      throw error;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcore instead
   */
  async registerWidgetTypeFromEcore(widgetType, ecoreUri) {
    console.warn("registerWidgetTypeFromEcore is deprecated. Use registerActionsFromEcore instead.");
    return this.registerActionsFromEcore(widgetType, ecoreUri, "widget");
  }
  /**
   * Registriert Actions aus einem Ecore-Modell-String
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreContent - Ecore model as string
   * @param context - Kontext für diese Actions (default: 'widget')
   * @param uri - Optional URI for the model
   */
  async registerActionsFromEcoreString(name, ecoreContent, context, uri) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModelFromString(name, ecoreContent, uri);
      const ecoreActions = this.ecoreMetadataService.extractActions(name);
      const actions = ecoreActions.map((ecoreAction) => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(
          (p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`
        )
      }));
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null,
        // No base class for Ecore-based actions
        actions,
        context: context || "widget"
      });
      console.log(`📝 Registered actions "${name}" (context: ${context || "widget"}) from Ecore string with ${actions.length} actions:`);
      actions.forEach((action) => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(", ") || ""})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore string:`, error);
      throw error;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcoreString instead
   */
  async registerWidgetTypeFromEcoreString(widgetType, ecoreContent, uri) {
    console.warn("registerWidgetTypeFromEcoreString is deprecated. Use registerActionsFromEcoreString instead.");
    return this.registerActionsFromEcoreString(widgetType, ecoreContent, "widget", uri);
  }
  /**
   * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
   * Wird beim Mount/Init aufgerufen
   * @param instanceId - Eindeutige ID der Instanz
   * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
   * @param widgetType - Optional: Widget-Typ für die Instanz (z.B. "OGCSTAToChartComposer")
   * @param pageId - Optional: Page ID auf der die Instanz lebt
   */
  registerInstance(instanceId, instanceRef, widgetType, pageId) {
    this.widgetInstances.set(instanceId, instanceRef);
    if (widgetType) {
      this.instanceTypes.set(instanceId, widgetType);
    }
    if (pageId) {
      this.instancePages.set(instanceId, pageId);
    }
    console.log(`Registered instance "${instanceId}"${widgetType ? ` (type: ${widgetType})` : ""}${pageId ? ` (page: ${pageId})` : ""}`);
  }
  /**
   * Gibt die pageId für eine Instanz zurück
   * Prüft zuerst die manuelle Registrierung, dann die Lookup-Funktion
   */
  getInstancePageId(instanceId) {
    const manualPageId = this.instancePages.get(instanceId);
    if (manualPageId) return manualPageId;
    if (this.pageIdLookupFn) {
      return this.pageIdLookupFn(instanceId);
    }
    return void 0;
  }
  /**
   * Setzt eine Funktion die pageId von widgetId ableiten kann
   * Diese Funktion wird von der Vue-App gesetzt um Zugriff auf die Pinia Stores zu haben
   */
  setPageIdLookup(fn) {
    this.pageIdLookupFn = fn;
    console.log("📝 PageId lookup function registered");
  }
  /**
   * @deprecated Use registerInstance instead
   */
  registerWidgetInstance(widgetInstanceId, widgetRef) {
    this.registerInstance(widgetInstanceId, widgetRef);
  }
  /**
   * Entfernt eine Instanz
   * Wird beim Unmount/Dispose aufgerufen
   * @param instanceId - ID der Instanz
   */
  unregisterInstance(instanceId) {
    this.widgetInstances.delete(instanceId);
    this.instanceTypes.delete(instanceId);
    this.instancePages.delete(instanceId);
    console.log(`Unregistered instance "${instanceId}"`);
  }
  /**
   * Gibt alle registrierten Instanzen zurück
   * @param widgetType - Optional: Filter nach Widget-Typ
   */
  getRegisteredInstances(widgetType) {
    const result = [];
    for (const [instanceId, instanceRef] of this.widgetInstances.entries()) {
      const type = this.instanceTypes.get(instanceId) || "unknown";
      if (!widgetType || type === widgetType) {
        result.push({
          instanceId,
          widgetType: type,
          instanceRef
        });
      }
    }
    return result;
  }
  /**
   * Gibt alle Instanz-IDs zurück
   */
  getInstanceIds() {
    return Array.from(this.widgetInstances.keys());
  }
  /**
   * @deprecated Use unregisterInstance instead
   */
  unregisterWidgetInstance(widgetInstanceId) {
    this.unregisterInstance(widgetInstanceId);
  }
  /**
   * Führt eine Action auf einer Instanz aus
   * @param instanceId - ID der Instanz
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing', 'switchThingByName')
   * @param args - Argumente für die Action
   */
  async executeInstanceAction(instanceId, actionName, ...args) {
    const instanceRef = this.widgetInstances.get(instanceId);
    if (!instanceRef) {
      console.warn(`Instance "${instanceId}" not found.`);
      return;
    }
    if (typeof instanceRef[actionName] !== "function") {
      console.warn(`Action "${actionName}" not found on instance "${instanceId}".`);
      return;
    }
    try {
      await instanceRef[actionName](...args);
    } catch (error) {
      console.error(`Error executing action "${actionName}" on "${instanceId}":`, error);
    }
  }
  /**
   * @deprecated Use executeInstanceAction instead
   */
  async executeWidgetAction(widgetInstanceId, actionName, ...args) {
    return this.executeInstanceAction(widgetInstanceId, actionName, ...args);
  }
  /**
   * Führt eine Action auf allen registrierten Instanzen aus
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeActionOnAll(actionName, ...args) {
    console.log(`🎯 executeActionOnAll: "${actionName}" with args:`, args);
    console.log(`🎯 Registered instances: ${this.widgetInstances.size}`);
    if (this.widgetInstances.size === 0) {
      console.warn(`❌ No instances registered to execute action "${actionName}".`);
      return;
    }
    let executedCount = 0;
    for (const [instanceId, instanceRef] of this.widgetInstances.entries()) {
      const instanceType = this.instanceTypes.get(instanceId);
      console.log(`🎯 Checking instance "${instanceId}" (type: ${instanceType}), has ${actionName}: ${typeof instanceRef[actionName]}`);
      if (typeof instanceRef[actionName] === "function") {
        try {
          console.log(`🎯 Calling ${actionName} on "${instanceId}"...`);
          await instanceRef[actionName](...args);
          executedCount++;
          console.log(`✅ Executed action "${actionName}" on instance "${instanceId}"`);
        } catch (error) {
          console.error(`❌ Error executing action "${actionName}" on "${instanceId}":`, error);
        }
      }
    }
    if (executedCount === 0) {
      console.warn(`❌ Action "${actionName}" not found on any instances.`);
    } else {
      console.log(`✅ Executed action "${actionName}" on ${executedCount} instance(s)`);
    }
  }
  /**
   * @deprecated Use executeActionOnAll instead
   */
  async executeWidgetActionOnAll(actionName, ...args) {
    return this.executeActionOnAll(actionName, ...args);
  }
  /**
   * Gibt alle registrierten Widget-Typen zurück
   */
  getWidgetTypes() {
    return Array.from(this.widgetTypes.values());
  }
  /**
   * Gibt die Registrierung für einen Widget-Typ zurück
   */
  getWidgetType(widgetType) {
    return this.widgetTypes.get(widgetType);
  }
}
const EVENT_ACTIONS_REGISTRY = Symbol.for(EVENT_ACTIONS_REGISTRY_ID);
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
var __decorateParam$1 = (index, decorator) => (target, key) => decorator(target, key, index);
const log$1 = loggerFactory.createLogger("daanse:events:manager");
let EventManager = class {
  constructor(actionsRegistry) {
    this.actionsRegistry = actionsRegistry;
    this.mappings = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  createMappingKey(context, eventType, contextId) {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }
  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(mapping) {
    const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);
    if (!this.mappings.has(key)) {
      this.mappings.set(key, []);
    }
    this.mappings.get(key).push(mapping);
    log$1("Registered event-action mapping: %s -> %s", key, mapping.actionName);
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
    }
  }
  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(mappingId) {
    for (const [key, mappings] of this.mappings.entries()) {
      const index = mappings.findIndex((m) => m.id === mappingId);
      if (index !== -1) {
        mappings.splice(index, 1);
        if (mappings.length === 0) {
          this.mappings.delete(key);
        }
        log$1("Unregistered event-action mapping: %s", mappingId);
        return;
      }
    }
  }
  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(callback) {
    this.onMappingsChangedCallback = callback;
  }
  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(mappings) {
    this.mappings.clear();
    for (const mapping of mappings) {
      const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);
      if (!this.mappings.has(key)) {
        this.mappings.set(key, []);
      }
      this.mappings.get(key).push(mapping);
    }
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
      log$1("Notified listeners about %d loaded mappings", mappings.length);
    }
  }
  /**
   * Wertet Conditions gegen ein Payload aus
   */
  evaluateConditions(conditions, payload) {
    if (!conditions || conditions.length === 0) {
      return true;
    }
    return conditions.every((condition) => {
      if (!condition.prop) {
        return true;
      }
      const payloadValue = this.getNestedProperty(payload, condition.prop);
      const conditionValue = condition.value;
      return this.evaluateComparison(payloadValue, condition.comperator, conditionValue);
    });
  }
  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  getNestedProperty(obj, path) {
    return path.split(".").reduce((current, prop) => {
      return current?.[prop];
    }, obj);
  }
  /**
   * Wertet einen Vergleich aus
   */
  evaluateComparison(payloadValue, comperator, conditionValue) {
    const numPayload = Number(payloadValue);
    const numCondition = Number(conditionValue);
    const isNumeric = !isNaN(numPayload) && !isNaN(numCondition);
    switch (comperator) {
      case Comperator.eq:
        return isNumeric ? numPayload === numCondition : payloadValue == conditionValue;
      case Comperator.neq:
        return isNumeric ? numPayload !== numCondition : payloadValue != conditionValue;
      case Comperator.lt:
        return isNumeric ? numPayload < numCondition : payloadValue < conditionValue;
      case Comperator.lte:
        return isNumeric ? numPayload <= numCondition : payloadValue <= conditionValue;
      case Comperator.gt:
        return isNumeric ? numPayload > numCondition : payloadValue > conditionValue;
      case Comperator.gte:
        return isNumeric ? numPayload >= numCondition : payloadValue >= conditionValue;
      default:
        console.warn(`Unknown comperator: ${comperator}`);
        return false;
    }
  }
  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  buildActionArgs(action, payload) {
    const args = [...action.actionArgs || []];
    if (action.payloadMapping && action.payloadMapping.length > 0) {
      for (const pm of action.payloadMapping) {
        const value = this.getNestedProperty(payload, pm.payloadPath);
        args[pm.argIndex] = value;
        log$1("  Mapped payload.%s -> arg[%d] = %o", pm.payloadPath, pm.argIndex, value);
      }
    }
    return args;
  }
  /**
   * Führt eine einzelne Action aus
   */
  async executeAction(action, payload) {
    const args = this.buildActionArgs(action, payload);
    if (!action.targetContextId) {
      log$1("No targetContextId specified, executing action on all instances");
      await this.actionsRegistry.executeActionOnAll(
        action.actionName,
        ...args
      );
    } else {
      await this.actionsRegistry.executeInstanceAction(
        action.targetContextId,
        action.actionName,
        ...args
      );
    }
  }
  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  getActionsFromMapping(mapping) {
    if (mapping.actions && mapping.actions.length > 0) {
      return mapping.actions;
    }
    if (mapping.actionName) {
      return [{
        targetContext: mapping.targetContext,
        targetContextId: mapping.targetContextId,
        actionName: mapping.actionName,
        actionArgs: mapping.actionArgs,
        payloadMapping: mapping.payloadMapping
      }];
    }
    return [];
  }
  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(context, eventType, payload, contextId) {
    const keyWithContext = this.createMappingKey(context, eventType, contextId);
    let mappings = this.mappings.get(keyWithContext) || [];
    if (mappings.length === 0 && contextId) {
      const keyWithoutContext = this.createMappingKey(context, eventType);
      mappings = this.mappings.get(keyWithoutContext) || [];
      log$1("📨 Handling event: %s, no specific mappings, using general mappings: %d", keyWithContext, mappings.length);
    } else {
      log$1("📨 Handling event: %s, found %d mapping(s)", keyWithContext, mappings.length);
    }
    log$1("  Payload: %o", payload);
    for (const mapping of mappings) {
      try {
        if (!this.evaluateConditions(mapping.conditions || [], payload)) {
          log$1("⏭️  Conditions not met for mapping %s, skipping", mapping.id);
          continue;
        }
        const actions = this.getActionsFromMapping(mapping);
        if (actions.length === 0) {
          log$1("⚠️  No actions defined for mapping %s", mapping.id);
          continue;
        }
        log$1("▶️  Executing %d action(s) for mapping %s", actions.length, mapping.id);
        for (const action of actions) {
          log$1("  → Action: %s on %s", action.actionName, action.targetContextId || "all instances");
          await this.executeAction(action, payload);
        }
      } catch (error) {
        log$1("❌ Error executing actions for mapping %s: %o", mapping.id, error);
      }
    }
  }
  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings() {
    const result = [];
    for (const mappings of this.mappings.values()) {
      result.push(...mappings);
    }
    return result;
  }
  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(context, eventType, contextId) {
    if (eventType) {
      const key = this.createMappingKey(context, eventType, contextId);
      return this.mappings.get(key) || [];
    }
    const result = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;
    for (const [key, mappings] of this.mappings.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...mappings);
      }
    }
    return result;
  }
  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(context, contextId) {
    const keysToDelete = [];
    const prefix = `${context}:${contextId}:`;
    for (const key of this.mappings.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.mappings.delete(key);
    }
    console.log(`Cleared event mappings for context ${context}:${contextId}`);
  }
  /**
   * Löscht alle Mappings
   */
  clear() {
    this.mappings.clear();
  }
};
EventManager = __decorateClass$1([
  injectable(),
  __decorateParam$1(0, inject("EventActionsRegistry"))
], EventManager);
const EVENT_MANAGER = Symbol.for(EVENT_MANAGER_ID);
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
const log = loggerFactory.createLogger("daanse:events:bridge");
let EventBusBridge = class {
  constructor(eventManager, eventRegistry, actionsRegistry) {
    this.eventManager = eventManager;
    this.eventRegistry = eventRegistry;
    this.actionsRegistry = actionsRegistry;
    this.isSetup = false;
    this.registeredListeners = /* @__PURE__ */ new Set();
  }
  /**
   * Richtet die Bridge ein (muss nach Container-Initialisierung aufgerufen werden)
   */
  /**
   * Verbindet die Bruecke mit dem Ereignisbus.
   *
   * Nimmt die ServiceRegistry statt des Inversify-Containers: gebraucht wird
   * daraus nur der Emitter, und ueber die Registry ist er unter seiner
   * String-ID erreichbar.
   */
  setup(services) {
    if (this.isSetup) {
      log("Bridge already setup, skipping");
      return;
    }
    try {
      this.eventBus = services.getRequired(TINY_EMITTER);
      this.eventManager.onMappingsChanged(() => {
        log("📢 EventManager notified about mapping changes, refreshing listeners");
        this.refreshListeners();
      });
      this.setupListeners();
      this.isSetup = true;
      log("✅ EventBus Bridge setup complete");
    } catch (error) {
      log("❌ Failed to setup EventBus Bridge:", error);
    }
  }
  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  setupListeners() {
    const mappings = this.eventManager.getAllMappings();
    const eventTypes = /* @__PURE__ */ new Set();
    for (const mapping of mappings) {
      if (mapping.context === "widget") {
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === "page") {
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === "system") {
        const fullEventType = `system:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      }
    }
    for (const fullEventType of eventTypes) {
      if (this.registeredListeners.has(fullEventType)) {
        continue;
      }
      this.eventBus.on(fullEventType, (data) => {
        log("📨 Received event via EventBus: %s", fullEventType);
        this.handleEvent(fullEventType, data);
      });
      this.registeredListeners.add(fullEventType);
      log("Registered listener for: %s", fullEventType);
    }
    log("✅ Bridge listening to %d event types", this.registeredListeners.size);
  }
  /**
   * Aktualisiert die Listener basierend auf aktuellen Mappings
   * Wird aufgerufen wenn neue Mappings hinzugefügt werden
   */
  refreshListeners() {
    if (!this.isSetup) return;
    this.setupListeners();
  }
  /**
   * Verarbeitet ein Event und leitet es an den EventManager weiter
   * Unterstützt widget, page und system Events
   */
  async handleEvent(fullEventType, data) {
    try {
      const parts = fullEventType.split(":");
      if (parts.length < 2) {
        log("Invalid event format: %s", fullEventType);
        return;
      }
      const context = parts[0];
      if (context === "widget") {
        if (parts.length < 3) {
          log("Invalid widget event format: %s", fullEventType);
          return;
        }
        const widgetType = parts[1];
        const eventType = parts[2];
        const widgetId = data.widgetId;
        const payload = data.payload;
        log("📨 Widget event received: %s from widget %s", fullEventType, widgetId);
        log("  Payload: %o", payload);
        await this.eventManager.handleEvent(
          "widget",
          `${widgetType}:${eventType}`,
          payload,
          widgetId
        );
        const widgetPageId = this.actionsRegistry.getInstancePageId(widgetId);
        if (widgetPageId) {
          log("📨 Also handling as page event for page: %s", widgetPageId);
          await this.eventManager.handleEvent(
            "page",
            `${widgetType}:${eventType}`,
            payload,
            widgetPageId
          );
        }
      } else if (context === "system") {
        const eventType = parts.slice(1).join(":");
        const payload = data.payload || data;
        log("📨 System event received: %s", fullEventType);
        log("  Payload: %o", payload);
        await this.eventManager.handleEvent(
          "system",
          eventType,
          payload
        );
      } else {
        log("Unknown event context: %s", context);
      }
    } catch (error) {
      log("❌ Error handling event:", error);
    }
  }
};
EventBusBridge = __decorateClass([
  injectable(),
  __decorateParam(0, inject("EventManager")),
  __decorateParam(1, inject("EventRegistry")),
  __decorateParam(2, inject("EventActionsRegistry"))
], EventBusBridge);
const EVENT_BUS_BRIDGE = Symbol.for(EVENT_BUS_BRIDGE_ID);
function isInternalEObject(obj) {
  return obj && typeof obj.eProxyURI === "function" && typeof obj.eSetProxyURI === "function";
}
const NotificationType = {
  /** A feature has been set */
  SET: 1,
  /** A feature has been unset */
  UNSET: 2,
  /** A value has been added to a list */
  ADD: 3,
  /** A value has been removed from a list */
  REMOVE: 4,
  /** Multiple values have been added to a list */
  ADD_MANY: 5,
  /** Multiple values have been removed from a list */
  REMOVE_MANY: 6,
  /** A value has been moved within a list */
  MOVE: 7,
  /** An adapter is being removed */
  REMOVING_ADAPTER: 8,
  /** A proxy has been resolved */
  RESOLVE: 9
};
const NO_INDEX = -1;
const NO_FEATURE_ID = -1;
class NotificationImpl {
  constructor(notifier, eventType, feature, oldValue, newValue, position = NO_INDEX, wasSet = true) {
    this.notifier = notifier;
    this.eventType = eventType;
    this.feature = feature;
    this.featureID = NO_FEATURE_ID;
    this.oldValue = oldValue;
    this.newValue = newValue;
    this.position = position;
    this.wasSetFlag = wasSet;
  }
  getNotifier() {
    return this.notifier;
  }
  getEventType() {
    return this.eventType;
  }
  getFeature() {
    return this.feature;
  }
  getFeatureID() {
    return this.featureID;
  }
  getOldValue() {
    return this.oldValue;
  }
  getNewValue() {
    return this.newValue;
  }
  wasSet() {
    return this.wasSetFlag;
  }
  isTouch() {
    switch (this.eventType) {
      case NotificationType.RESOLVE:
      case NotificationType.REMOVING_ADAPTER:
        return true;
      case NotificationType.ADD:
      case NotificationType.ADD_MANY:
      case NotificationType.REMOVE:
      case NotificationType.REMOVE_MANY:
      case NotificationType.MOVE:
        return false;
      case NotificationType.SET:
      case NotificationType.UNSET:
        if (this.oldValue === this.newValue) {
          return true;
        }
        if (this.oldValue === null || this.newValue === null) {
          return false;
        }
        return this.oldValue === this.newValue;
      default:
        return false;
    }
  }
  isReset() {
    if (this.feature) {
      const defaultValue = this.feature.getDefaultValue();
      return this.newValue === defaultValue;
    }
    return false;
  }
  getPosition() {
    return this.position;
  }
  merge(notification) {
    return false;
  }
  toString() {
    const eventNames = {
      [NotificationType.SET]: "SET",
      [NotificationType.UNSET]: "UNSET",
      [NotificationType.ADD]: "ADD",
      [NotificationType.REMOVE]: "REMOVE",
      [NotificationType.ADD_MANY]: "ADD_MANY",
      [NotificationType.REMOVE_MANY]: "REMOVE_MANY",
      [NotificationType.MOVE]: "MOVE",
      [NotificationType.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [NotificationType.RESOLVE]: "RESOLVE"
    };
    const featureName = this.feature?.getName() || "unknown";
    return `Notification(${eventNames[this.eventType]}, feature=${featureName}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const INDEX_KEY = /^(?:0|[1-9]\d*)$/;
const IS_INDEXED = Symbol.for("emfts.indexedList");
const INDEX_ACCESS_HANDLER = {
  get(target, prop, receiver) {
    if (prop === IS_INDEXED) {
      return true;
    }
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      const index = Number(prop);
      const data = target.data;
      if (data !== void 0) {
        return data[index];
      }
      return index < target.size() ? target.get(index) : void 0;
    }
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === "length") {
      const newLength = typeof value === "number" ? value : parseInt(value, 10);
      if (isNaN(newLength) || newLength < 0) {
        throw new RangeError(`Invalid list length: ${String(value)}`);
      }
      if (newLength === 0) {
        target.clear();
      } else {
        while (target.size() > newLength) {
          target.removeAt(target.size() - 1);
        }
      }
      return true;
    }
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      const index = Number(prop);
      const size = target.size();
      if (index < size) {
        target.set(index, value);
      } else if (index === size) {
        target.add(value);
      } else {
        throw new RangeError(`Index ${index} out of bounds for list of size ${size}. ELists do not support sparse assignment - use add() or push().`);
      }
      return true;
    }
    return Reflect.set(target, prop, value, receiver);
  },
  has(target, prop) {
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      return Number(prop) < target.size();
    }
    return Reflect.has(target, prop);
  }
};
class BasicEList {
  constructor(owner = null, feature = null) {
    this.data = [];
    this.owner = owner;
    this.feature = feature;
    return new Proxy(this, INDEX_ACCESS_HANDLER);
  }
  // ===== Array-compatible properties and methods =====
  /**
   * Array-compatible length property.
   */
  get length() {
    return this.data.length;
  }
  /**
   * Array-compatible push method. Adds elements to the end of the list.
   * Sends ADD or ADD_MANY notification.
   */
  push(...items) {
    if (items.length === 0) {
      return this.data.length;
    }
    if (items.length === 1) {
      this.add(items[0]);
    } else {
      this.addAll(items);
    }
    return this.data.length;
  }
  /**
   * Array-compatible pop method. Removes and returns the last element.
   * Sends REMOVE notification.
   */
  pop() {
    if (this.data.length === 0) {
      return void 0;
    }
    return this.removeAt(this.data.length - 1);
  }
  /**
   * Array-compatible shift method. Removes and returns the first element.
   * Sends REMOVE notification.
   */
  shift() {
    if (this.data.length === 0) {
      return void 0;
    }
    return this.removeAt(0);
  }
  /**
   * Array-compatible unshift method. Adds elements to the beginning of the list.
   * Sends ADD or ADD_MANY notification.
   */
  unshift(...items) {
    if (items.length === 0) {
      return this.data.length;
    }
    if (items.length === 1) {
      this.addAt(0, items[0]);
    } else {
      this.addAllAt(0, items);
    }
    return this.data.length;
  }
  /**
   * Array-compatible splice method.
   * Removes elements and/or inserts new elements.
   * Sends appropriate notifications.
   */
  splice(start, deleteCount, ...items) {
    const actualStart = start < 0 ? Math.max(this.data.length + start, 0) : Math.min(start, this.data.length);
    const actualDeleteCount = deleteCount === void 0 ? this.data.length - actualStart : Math.min(Math.max(deleteCount, 0), this.data.length - actualStart);
    const removed = [];
    for (let i = 0; i < actualDeleteCount; i++) {
      if (actualStart < this.data.length) {
        removed.push(this.removeAt(actualStart));
      }
    }
    for (let i = 0; i < items.length; i++) {
      this.addAt(actualStart + i, items[i]);
    }
    return removed;
  }
  /**
   * Array-compatible forEach method.
   */
  forEach(callback, thisArg) {
    this.data.forEach((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible map method.
   */
  map(callback, thisArg) {
    return this.data.map((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible filter method.
   */
  filter(callback, thisArg) {
    return this.data.filter((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible find method.
   */
  find(callback, thisArg) {
    return this.data.find((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible findIndex method.
   */
  findIndex(callback, thisArg) {
    return this.data.findIndex((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible some method.
   */
  some(callback, thisArg) {
    return this.data.some((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible every method.
   */
  every(callback, thisArg) {
    return this.data.every((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible reduce method.
   */
  reduce(callback, initialValue) {
    return this.data.reduce((prev, curr, idx) => callback(prev, curr, idx, this.data), initialValue);
  }
  /**
   * Array-compatible includes method.
   */
  includes(element) {
    return this.contains(element);
  }
  /**
   * Array-compatible slice method. Returns a shallow copy.
   */
  slice(start, end) {
    return this.data.slice(start, end);
  }
  /**
   * Array-compatible concat method. Returns a new array, list is unchanged.
   * Accepts single values, arrays and other ELists as arguments.
   */
  concat(...items) {
    const result = [...this.data];
    for (const item of items) {
      if (Array.isArray(item)) {
        result.push(...item);
      } else if (item instanceof BasicEList) {
        result.push(...item.data);
      } else {
        result.push(item);
      }
    }
    return result;
  }
  /**
   * Array-compatible sort method. Sorts in place and returns the list.
   *
   * The reordering is applied through move(), so each relocated element emits a
   * MOVE notification. This mirrors ECollections.sort() in Java EMF rather than
   * silently rewriting the backing array.
   */
  sort(compareFn) {
    this.reorderTo([...this.data].sort(compareFn));
    return this;
  }
  /**
   * Array-compatible reverse method. Reverses in place and returns the list.
   * Emits MOVE notifications, see {@link sort}.
   */
  reverse() {
    this.reorderTo([...this.data].reverse());
    return this;
  }
  /**
   * Rearranges the list to match the given order using move(), so that every
   * relocation is observable. The order must be a permutation of the list.
   */
  reorderTo(order) {
    for (let i = 0; i < order.length; i++) {
      if (this.data[i] === order[i]) {
        continue;
      }
      const from = this.data.indexOf(order[i], i);
      if (from > i) {
        this.move(i, from);
      }
    }
  }
  /**
   * Array-compatible join method.
   */
  join(separator) {
    return this.data.join(separator);
  }
  /**
   * Array-compatible at method. Negative indices count from the end.
   * Implemented directly rather than via Array.prototype.at, which the ES2020
   * target of this project does not provide.
   */
  at(index) {
    const resolved = index < 0 ? this.data.length + index : index;
    return resolved >= 0 && resolved < this.data.length ? this.data[resolved] : void 0;
  }
  /**
   * Array-compatible lastIndexOf method.
   */
  lastIndexOf(element) {
    return this.data.lastIndexOf(element);
  }
  /**
   * Array-compatible flatMap method.
   */
  flatMap(callback, thisArg) {
    return this.data.flatMap((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Makes JSON.stringify(list) produce a plain array. Without this the internal
   * fields would be serialized, and `owner` would drag the whole model along.
   */
  toJSON() {
    return [...this.data];
  }
  // ===== End Array-compatible methods =====
  getOwner() {
    return this.owner;
  }
  getFeature() {
    return this.feature;
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  contains(element) {
    return this.data.indexOf(element) !== -1;
  }
  indexOf(element) {
    return this.data.indexOf(element);
  }
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    return this.data[index];
  }
  set(index, element) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    const oldElement = this.data[index];
    if (oldElement === element) {
      return oldElement;
    }
    this.data[index] = element;
    this.didSet(index, element, oldElement);
    return oldElement;
  }
  add(element) {
    const index = this.data.length;
    this.data.push(element);
    this.didAdd(index, element);
    return true;
  }
  addAt(index, element) {
    if (index < 0 || index > this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    this.data.splice(index, 0, element);
    this.didAdd(index, element);
  }
  addAll(elements) {
    if (elements.length === 0) {
      return false;
    }
    const index = this.data.length;
    this.data.push(...elements);
    this.didAddMany(index, elements);
    return true;
  }
  addAllAt(index, elements) {
    if (elements.length === 0) {
      return false;
    }
    if (index < 0 || index > this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    this.data.splice(index, 0, ...elements);
    this.didAddMany(index, elements);
    return true;
  }
  remove(element) {
    const index = this.data.indexOf(element);
    if (index === -1) {
      return false;
    }
    this.removeAt(index);
    return true;
  }
  removeAt(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    const removed = this.data.splice(index, 1)[0];
    this.didRemove(index, removed);
    return removed;
  }
  clear() {
    if (this.data.length === 0) {
      return;
    }
    const oldData = [...this.data];
    this.data.length = 0;
    this.didClear(oldData);
  }
  move(toIndex, fromIndex) {
    if (fromIndex < 0 || fromIndex >= this.data.length) {
      throw new RangeError(`fromIndex ${fromIndex} out of bounds for list of size ${this.data.length}`);
    }
    if (toIndex < 0 || toIndex >= this.data.length) {
      throw new RangeError(`toIndex ${toIndex} out of bounds for list of size ${this.data.length}`);
    }
    const element = this.data[fromIndex];
    if (fromIndex === toIndex) {
      return element;
    }
    this.data.splice(fromIndex, 1);
    this.data.splice(toIndex, 0, element);
    this.didMove(toIndex, element, fromIndex);
    return element;
  }
  toArray() {
    return [...this.data];
  }
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  // ===== Notification hooks =====
  didAdd(index, element) {
    this.dispatchNotification(NotificationType.ADD, null, element, index);
  }
  didAddMany(index, elements) {
    this.dispatchNotification(NotificationType.ADD_MANY, null, elements, index);
  }
  didRemove(index, element) {
    this.dispatchNotification(NotificationType.REMOVE, element, null, index);
  }
  didClear(oldData) {
    if (oldData.length === 1) {
      this.dispatchNotification(NotificationType.REMOVE, oldData[0], null, 0);
    } else {
      this.dispatchNotification(NotificationType.REMOVE_MANY, oldData, null, NO_INDEX);
    }
  }
  didSet(index, newElement, oldElement) {
    this.dispatchNotification(NotificationType.SET, oldElement, newElement, index);
  }
  didMove(toIndex, element, fromIndex) {
    this.dispatchNotification(NotificationType.MOVE, fromIndex, element, toIndex);
  }
  dispatchNotification(eventType, oldValue, newValue, position) {
    const feature = this.getFeature();
    if (!this.owner || !feature) {
      return;
    }
    if ("eDeliver" in this.owner && !this.owner.eDeliver()) {
      return;
    }
    if ("eAdapters" in this.owner) {
      const adapters = this.owner.eAdapters();
      if (!adapters || adapters.length === 0) {
        return;
      }
    } else {
      return;
    }
    const notification = new NotificationImpl(this.owner, eventType, feature, oldValue, newValue, position);
    if ("eNotify" in this.owner) {
      this.owner.eNotify(notification);
    }
  }
}
class EObjectContainmentEList extends BasicEList {
  constructor(owner, feature) {
    super(owner, feature);
  }
  didAdd(index, element) {
    this.setContainer(element);
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.setContainer(element);
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    this.unsetContainer(element);
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.unsetContainer(element);
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    this.unsetContainer(oldElement);
    this.setContainer(newElement);
    super.didSet(index, newElement, oldElement);
  }
  add(element) {
    this.removeFromOldContainer(element);
    return super.add(element);
  }
  addAt(index, element) {
    this.removeFromOldContainer(element);
    super.addAt(index, element);
  }
  addAll(elements) {
    for (const element of elements) {
      this.removeFromOldContainer(element);
    }
    return super.addAll(elements);
  }
  addAllAt(index, elements) {
    for (const element of elements) {
      this.removeFromOldContainer(element);
    }
    return super.addAllAt(index, elements);
  }
  set(index, element) {
    this.removeFromOldContainer(element);
    return super.set(index, element);
  }
  setContainer(element) {
    const feature = this.getFeature();
    if (element && "eSetContainer" in element && this.owner) {
      element.eSetContainer(this.owner, feature);
    }
  }
  unsetContainer(element) {
    if (element && "eSetContainer" in element) {
      element.eSetContainer(null, null);
    }
  }
  removeFromOldContainer(element) {
    const oldContainer = element.eContainer();
    if (oldContainer && oldContainer !== this.owner) {
      const oldFeature = element.eContainmentFeature();
      if (oldFeature && oldFeature.isMany()) {
        const oldList = oldContainer.eGet(oldFeature);
        if (oldList && "remove" in oldList) {
          oldList.remove(element);
        } else if (Array.isArray(oldList)) {
          const idx = oldList.indexOf(element);
          if (idx >= 0) {
            oldList.splice(idx, 1);
          }
        }
      }
    }
  }
}
class EObjectContainmentWithInverseEListLazy extends EObjectContainmentEList {
  constructor(owner, featureResolver, inverseSetter) {
    super(owner, null);
    this.resolvedFeature = void 0;
    this.featureResolver = featureResolver;
    this.inverseSetter = inverseSetter;
  }
  getFeature() {
    if (this.resolvedFeature === void 0) {
      this.resolvedFeature = this.featureResolver();
    }
    return this.resolvedFeature;
  }
  didAdd(index, element) {
    this.inverseSetter(element, this.owner);
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.inverseSetter(element, this.owner);
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    this.inverseSetter(element, null);
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.inverseSetter(element, null);
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    this.inverseSetter(oldElement, null);
    this.inverseSetter(newElement, this.owner);
    super.didSet(index, newElement, oldElement);
  }
  /**
   * This list holds EClass.eStructuralFeatures, which every derived feature list
   * is assembled from, so each change has to invalidate those caches.
   */
  dispatchNotification(eventType, oldValue, newValue, position) {
    bumpMetamodelRevision();
    super.dispatchNotification(eventType, oldValue, newValue, position);
  }
}
class EObjectEList extends BasicEList {
  constructor(owner, feature) {
    super(owner, feature);
  }
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    let element = this.data[index];
    if (element && isInternalEObject(element) && element.eIsProxy()) {
      if (this.owner && "eResolveProxy" in this.owner) {
        const resolved = this.owner.eResolveProxy(element);
        if (resolved !== element) {
          this.data[index] = resolved;
          element = resolved;
        }
      }
    }
    return element;
  }
  [Symbol.iterator]() {
    const self2 = this;
    let index = 0;
    return {
      next() {
        if (index >= self2.data.length) {
          return { done: true, value: void 0 };
        }
        const value = self2.get(index++);
        return { done: false, value };
      }
    };
  }
}
function isEList(obj) {
  return obj && typeof obj.add === "function" && typeof obj.size === "function" && typeof obj.get === "function";
}
function replaceListContents(list, value) {
  let items;
  if (Array.isArray(value)) {
    items = value;
  } else if (isEList(value)) {
    items = value.toArray();
  } else if (value !== null && typeof value === "object" && typeof value[Symbol.iterator] === "function") {
    items = [...value];
  } else {
    return false;
  }
  const snapshot = [...items];
  list.clear();
  list.addAll(snapshot);
  return true;
}
class UnmodifiableEList extends BasicEList {
  /**
   * @param data the computed contents; used as backing store, not copied
   * @param accessorName name of the accessor, used in the error message
   */
  constructor(data, accessorName) {
    super(null, null);
    this.data = data;
    this.accessorName = accessorName;
  }
  /**
   * Raises the error every mutating method funnels through.
   */
  refuse(operation) {
    throw new Error(`Cannot call ${operation}() on the result of ${this.accessorName}: it is a derived list and cannot be modified. Modify the owning list instead (e.g. getEStructuralFeatures()).`);
  }
  set(_index, _element) {
    this.refuse("set");
  }
  add(_element) {
    this.refuse("add");
  }
  addAt(_index, _element) {
    this.refuse("addAt");
  }
  addAll(_elements) {
    this.refuse("addAll");
  }
  addAllAt(_index, _elements) {
    this.refuse("addAllAt");
  }
  remove(_element) {
    this.refuse("remove");
  }
  removeAt(_index) {
    this.refuse("removeAt");
  }
  clear() {
    this.refuse("clear");
  }
  move(_toIndex, _fromIndex) {
    this.refuse("move");
  }
  push(..._items) {
    this.refuse("push");
  }
  pop() {
    this.refuse("pop");
  }
  shift() {
    this.refuse("shift");
  }
  unshift(..._items) {
    this.refuse("unshift");
  }
  splice(_start, _deleteCount, ..._items) {
    this.refuse("splice");
  }
  sort(_compareFn) {
    this.refuse("sort");
  }
  reverse() {
    this.refuse("reverse");
  }
}
function createUnmodifiableEList(data, accessorName) {
  return createIndexedProxy(new UnmodifiableEList(data, accessorName));
}
let metamodelRevision = 0;
function bumpMetamodelRevision() {
  metamodelRevision++;
}
function currentMetamodelRevision() {
  return metamodelRevision;
}
function cachedDerivedList(cache, accessorName, compute) {
  const revision = currentMetamodelRevision();
  if (cache.value !== null && cache.value.revision === revision) {
    return cache.value.list;
  }
  const list = createUnmodifiableEList(compute(), accessorName);
  cache.value = { revision, list };
  return list;
}
class MetamodelEList extends BasicEList {
  constructor(owner, featureResolver) {
    super(owner, null);
    this.featureResolver = featureResolver ?? null;
  }
  getFeature() {
    if (this.feature === null && this.featureResolver !== null) {
      this.feature = this.featureResolver();
    }
    return this.feature;
  }
  dispatchNotification(eventType, oldValue, newValue, position) {
    bumpMetamodelRevision();
    super.dispatchNotification(eventType, oldValue, newValue, position);
  }
}
function createMetamodelEList(owner, featureResolver) {
  return createIndexedProxy(new MetamodelEList(owner, featureResolver));
}
function createIndexedProxy(list) {
  if (list[IS_INDEXED]) {
    return list;
  }
  return new Proxy(list, INDEX_ACCESS_HANDLER);
}
function createContainmentEList(owner, feature) {
  return createIndexedProxy(new EObjectContainmentEList(owner, feature));
}
function createEObjectEList(owner, feature) {
  return createIndexedProxy(new EObjectEList(owner, feature));
}
function createBasicEList(owner, feature) {
  return createIndexedProxy(new BasicEList(owner, feature));
}
class ResourceContentsEList extends BasicEList {
  constructor(resource) {
    super(null, null);
    this.resource = resource;
  }
  didAdd(index, element) {
    this.setResource(element);
    this.dispatchResourceNotification(NotificationType.ADD, null, element, index);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.setResource(element);
    }
    this.dispatchResourceNotification(NotificationType.ADD_MANY, null, elements, index);
  }
  didRemove(index, element) {
    this.unsetResource(element);
    this.dispatchResourceNotification(NotificationType.REMOVE, element, null, index);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.unsetResource(element);
    }
    if (oldData.length === 1) {
      this.dispatchResourceNotification(NotificationType.REMOVE, oldData[0], null, 0);
    } else if (oldData.length > 1) {
      this.dispatchResourceNotification(NotificationType.REMOVE_MANY, oldData, null, NO_INDEX);
    }
  }
  didSet(index, newElement, oldElement) {
    this.unsetResource(oldElement);
    this.setResource(newElement);
    this.dispatchResourceNotification(NotificationType.SET, oldElement, newElement, index);
  }
  setResource(element) {
    if (element && "eSetResource" in element) {
      element.eSetResource(this.resource);
    }
  }
  unsetResource(element) {
    if (element && "eSetResource" in element) {
      element.eSetResource(null);
    }
  }
  /**
   * Dispatch notification to the Resource (which is a Notifier).
   * Uses a synthetic 'contents' feature for the notification.
   */
  dispatchResourceNotification(eventType, oldValue, newValue, position) {
    if (!this.resource)
      return;
    if ("eDeliver" in this.resource && !this.resource.eDeliver()) {
      return;
    }
    if ("eAdapters" in this.resource) {
      const adapters = this.resource.eAdapters();
      if (!adapters || adapters.length === 0) {
        return;
      }
    } else {
      return;
    }
    const contentsFeature = { getName: () => "contents" };
    const notification = new NotificationImpl(this.resource, eventType, contentsFeature, oldValue, newValue, position);
    if ("eNotify" in this.resource) {
      this.resource.eNotify(notification);
    }
  }
}
function createResourceContentsEList(resource) {
  return createIndexedProxy(new ResourceContentsEList(resource));
}
var EPackageRegistry;
(function(EPackageRegistry2) {
  EPackageRegistry2.INSTANCE = createGlobalRegistry();
})(EPackageRegistry || (EPackageRegistry = {}));
function registerSubpackages(map, pkg) {
  for (const subPkg of pkg.getESubpackages()) {
    const subNsURI = subPkg.getNsURI();
    if (subNsURI) {
      map.set(subNsURI, subPkg);
    }
    registerSubpackages(map, subPkg);
  }
}
function requireNsURI(ePackage) {
  const nsURI = ePackage.getNsURI();
  if (!nsURI) {
    throw new Error(`Cannot register package '${ePackage.getName() ?? "<unnamed>"}': it has no nsURI.`);
  }
  return nsURI;
}
function createGlobalRegistry() {
  const map = /* @__PURE__ */ new Map();
  return {
    getEPackage(nsURI) {
      const value = map.get(nsURI);
      if (!value)
        return null;
      if ("getEPackage" in value) {
        return value.getEPackage();
      }
      return value;
    },
    getEFactory(nsURI) {
      const value = map.get(nsURI);
      if (!value)
        return null;
      if ("getEFactory" in value) {
        return value.getEFactory();
      }
      return value.getEFactoryInstance();
    },
    get(nsURI) {
      return map.get(nsURI) || null;
    },
    set(nsURI, value) {
      map.set(nsURI, value);
      if (!("getEPackage" in value)) {
        registerSubpackages(map, value);
      }
    },
    registerPackage(ePackage) {
      this.set(requireNsURI(ePackage), ePackage);
    },
    delete(nsURI) {
      return map.delete(nsURI);
    },
    has(nsURI) {
      return map.has(nsURI);
    },
    keys() {
      return map.keys();
    },
    values() {
      return map.values();
    }
  };
}
class URI {
  constructor(_scheme, _authority, _path, _query, _fragment) {
    this._scheme = _scheme;
    this._authority = _authority;
    this._path = _path;
    this._query = _query;
    this._fragment = _fragment;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(uriString) {
    if (!uriString) {
      return new URI(null, null, "", null, null);
    }
    let scheme = null;
    let authority = null;
    let path = null;
    let query = null;
    let fragment = null;
    let i = 0;
    uriString.length;
    const hashIndex = uriString.indexOf("#");
    if (hashIndex >= 0) {
      fragment = uriString.substring(hashIndex + 1);
      uriString = uriString.substring(0, hashIndex);
    }
    const questionIndex = uriString.indexOf("?");
    if (questionIndex >= 0) {
      query = uriString.substring(questionIndex + 1);
      uriString = uriString.substring(0, questionIndex);
    }
    const colonIndex = uriString.indexOf(":");
    if (colonIndex > 0) {
      let isScheme = true;
      for (let j = 0; j < colonIndex; j++) {
        const c = uriString.charAt(j);
        if (c === "/") {
          isScheme = false;
          break;
        }
      }
      if (isScheme) {
        scheme = uriString.substring(0, colonIndex);
        i = colonIndex + 1;
      }
    }
    if (uriString.startsWith("//", i)) {
      const authorityStart = i + 2;
      let authorityEnd = authorityStart;
      while (authorityEnd < uriString.length && uriString.charAt(authorityEnd) !== "/") {
        authorityEnd++;
      }
      authority = uriString.substring(authorityStart, authorityEnd);
      i = authorityEnd;
    }
    if (i < uriString.length) {
      path = uriString.substring(i);
    } else if (authority !== null) {
      path = "";
    }
    return new URI(scheme, authority, path, query, fragment);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(path) {
    return new URI("file", null, path, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(path, encode = true) {
    return new URI("platform", null, "/resource" + path, null, null);
  }
  /**
   * Returns the scheme, or null.
   */
  scheme() {
    return this._scheme;
  }
  /**
   * Returns the authority, or null.
   */
  authority() {
    return this._authority;
  }
  /**
   * Returns the path, or null.
   */
  path() {
    return this._path;
  }
  /**
   * Returns the query, or null.
   */
  query() {
    return this._query;
  }
  /**
   * Returns the fragment, or null.
   */
  fragment() {
    return this._fragment;
  }
  /**
   * Returns the host part of the authority, or null.
   */
  host() {
    if (!this._authority)
      return null;
    let auth = this._authority;
    const atIndex = auth.indexOf("@");
    if (atIndex >= 0) {
      auth = auth.substring(atIndex + 1);
    }
    const colonIndex = auth.lastIndexOf(":");
    if (colonIndex >= 0) {
      auth = auth.substring(0, colonIndex);
    }
    return auth;
  }
  /**
   * Returns the port part of the authority, or null.
   */
  port() {
    if (!this._authority)
      return null;
    let auth = this._authority;
    const atIndex = auth.indexOf("@");
    if (atIndex >= 0) {
      auth = auth.substring(atIndex + 1);
    }
    const colonIndex = auth.lastIndexOf(":");
    if (colonIndex >= 0) {
      return auth.substring(colonIndex + 1);
    }
    return null;
  }
  /**
   * Returns the userinfo part of the authority, or null.
   */
  userInfo() {
    if (!this._authority)
      return null;
    const atIndex = this._authority.indexOf("@");
    if (atIndex >= 0) {
      return this._authority.substring(0, atIndex);
    }
    return null;
  }
  /**
   * Returns the file extension, or null.
   */
  fileExtension() {
    if (!this._path)
      return null;
    const lastDot = this._path.lastIndexOf(".");
    const lastSlash = this._path.lastIndexOf("/");
    if (lastDot > lastSlash && lastDot > 0) {
      return this._path.substring(lastDot + 1);
    }
    return null;
  }
  /**
   * Returns a new URI with the given fragment.
   */
  appendFragment(fragment) {
    return new URI(this._scheme, this._authority, this._path, this._query, fragment);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(segment) {
    let newPath = this._path || "";
    if (!newPath && this._authority) {
      newPath = "/";
    }
    if (newPath && !newPath.endsWith("/")) {
      newPath += "/";
    }
    newPath += segment;
    return new URI(this._scheme, this._authority, newPath, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(count) {
    if (!this._path || count <= 0)
      return this;
    const segments = this._path.split("/").filter((s) => s.length > 0);
    const newSegments = segments.slice(0, Math.max(0, segments.length - count));
    let newPath = this._path.startsWith("/") ? "/" : "";
    newPath += newSegments.join("/");
    if (this._path.endsWith("/") && newPath.length > 0) {
      newPath += "/";
    }
    return new URI(this._scheme, this._authority, newPath, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new URI(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new URI(this._scheme, this._authority, this._path, this._query, null);
  }
  /**
   * Resolves this URI against a base URI (RFC 3986 with EMF modifications).
   */
  resolve(base) {
    if (this._scheme !== null) {
      return this;
    }
    let scheme = base._scheme;
    let authority = this._authority;
    let path = this._path;
    let query = this._query;
    if (authority !== null) {
      path = this.removeDotSegments(path || "");
    } else {
      authority = base._authority;
      if (!path || path === "") {
        if (this._query !== null) {
          path = base._path;
          if (path) {
            const lastSlash = path.lastIndexOf("/");
            if (lastSlash >= 0) {
              path = path.substring(0, lastSlash + 1);
            }
          }
        } else {
          path = base._path;
        }
        query = this._query !== null ? this._query : base._query;
      } else {
        if (path.startsWith("/")) ;
        else {
          path = this.mergePaths(base._path, path);
          path = this.removeDotSegments(path);
        }
      }
    }
    return new URI(scheme, authority, path, query, this._fragment);
  }
  /**
   * Deresolves this URI against a base URI.
   */
  deresolve(base) {
    if (this._scheme !== base._scheme) {
      return this;
    }
    if (this._authority === null !== (base._authority === null)) {
      return this;
    }
    if (this._authority !== null && base._authority !== null && this._authority !== base._authority) {
      return new URI(null, this._authority, this._path, this._query, this._fragment);
    }
    const thisPath = this._path || "";
    const basePath = base._path || "";
    if (thisPath === basePath) {
      if (this._query === base._query) {
        return new URI(null, null, null, null, this._fragment);
      }
      return new URI(null, null, "", this._query, this._fragment);
    }
    const thisSegments = thisPath.split("/");
    const baseSegments = basePath.split("/");
    let commonLength = 0;
    const minLength = Math.min(thisSegments.length, baseSegments.length);
    for (let i = 0; i < minLength - 1; i++) {
      if (thisSegments[i] === baseSegments[i]) {
        commonLength++;
      } else {
        break;
      }
    }
    const upCount = baseSegments.length - commonLength - 1;
    const containsDots = thisPath.includes("/./") || thisPath.includes("/../") || thisPath.endsWith("/.") || thisPath.endsWith("/..");
    if (thisPath.startsWith("/") && (upCount >= 3 || containsDots && upCount > 0)) {
      return new URI(null, null, thisPath, this._query, this._fragment);
    }
    const relativeSegments = [];
    for (let i = 0; i < upCount; i++) {
      relativeSegments.push("..");
    }
    for (let i = commonLength; i < thisSegments.length; i++) {
      relativeSegments.push(thisSegments[i]);
    }
    let relativePath = relativeSegments.join("/");
    if (relativePath === "" && thisPath.endsWith("/")) {
      relativePath = "./";
    }
    return new URI(null, null, relativePath, this._query, this._fragment);
  }
  /**
   * Merges a relative path with a base path.
   */
  mergePaths(basePath, relativePath) {
    if (!basePath) {
      return "/" + relativePath;
    }
    const lastSlash = basePath.lastIndexOf("/");
    if (lastSlash >= 0) {
      return basePath.substring(0, lastSlash + 1) + relativePath;
    }
    return relativePath;
  }
  /**
   * Removes dot segments from a path (RFC 3986).
   */
  removeDotSegments(path) {
    const output = [];
    const segments = path.split("/");
    const hasTrailingDot = segments.length > 0 && (segments[segments.length - 1] === "." || segments[segments.length - 1] === "..");
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (segment === "..") {
        if (output.length > 0 && output[output.length - 1] !== "") {
          output.pop();
        }
      } else if (segment !== "." && !(segment === "" && i > 0 && i < segments.length - 1)) {
        output.push(segment);
      }
    }
    if (hasTrailingDot && output.length > 0) {
      output.push("");
    }
    return output.join("/");
  }
  /**
   * Returns the string representation.
   */
  toString() {
    let result = "";
    if (this._scheme)
      result += this._scheme + ":";
    if (this._authority)
      result += "//" + this._authority;
    if (this._path)
      result += this._path;
    if (this._query)
      result += "?" + this._query;
    if (this._fragment)
      result += "#" + this._fragment;
    return result;
  }
  /**
   * Returns whether this URI is hierarchical.
   */
  isHierarchical() {
    return this._authority !== null || this._path !== null && this._path.startsWith("/");
  }
  /**
   * Returns whether this URI is a file URI.
   */
  isFile() {
    return this._scheme === "file";
  }
  /**
   * Returns whether this URI is a platform resource URI.
   */
  isPlatformResource() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/resource");
  }
  /**
   * Returns whether this URI is a platform plugin URI.
   */
  isPlatformPlugin() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/plugin");
  }
  /**
   * Returns whether this URI is an archive URI.
   */
  isArchive() {
    return this._scheme === "archive" || this._scheme === "jar" || this._scheme === "zip";
  }
  /**
   * Returns whether this URI is relative (no scheme).
   */
  isRelative() {
    return this._scheme === null;
  }
}
function isAdapterInternal(adapter) {
  return "unsetTarget" in adapter && typeof adapter.unsetTarget === "function";
}
class BasicEObject {
  constructor() {
    this._eResource = null;
    this._eContainer = null;
    this._eContainerFeature = null;
    this._eProxyURI = null;
    this._eAdapters = [];
    this._eDeliver = true;
    this.eSettings = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the containing resource
   */
  eResource() {
    return this._eContainer ? this._eContainer.eResource() : this._eResource;
  }
  /**
   * Sets the resource (internal use)
   */
  eSetResource(resource) {
    this._eResource = resource;
  }
  /**
   * Returns the containing object
   */
  eContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container (internal use)
   */
  eSetContainer(container, feature) {
    this._eContainer = container;
    this._eContainerFeature = feature;
  }
  /**
   * Returns the containing feature
   */
  eContainingFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns the containment feature
   */
  eContainmentFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns all direct contents
   */
  eContents() {
    const contents = [];
    const eClass = this.eClass();
    const features = eClass.getEAllContainments();
    for (const feature of features) {
      const value = this.eGet(feature);
      if (value) {
        if (Array.isArray(value) || isEList(value)) {
          for (const item of value) {
            contents.push(item);
          }
        } else {
          contents.push(value);
        }
      }
    }
    return contents;
  }
  /**
   * Returns an iterator over all contents
   */
  eAllContents() {
    const contents = this.eContents();
    const allContents = [...contents];
    for (const content of contents) {
      const iterator = content.eAllContents();
      let result = iterator.next();
      while (!result.done) {
        allContents.push(result.value);
        result = iterator.next();
      }
    }
    return allContents[Symbol.iterator]();
  }
  /**
   * Returns whether this object is a proxy
   */
  eIsProxy() {
    return this._eProxyURI !== null;
  }
  /**
   * Returns the proxy URI if this object is a proxy
   */
  eProxyURI() {
    return this._eProxyURI;
  }
  /**
   * Sets the proxy URI
   */
  eSetProxyURI(uri) {
    this._eProxyURI = uri;
  }
  /**
   * Resolves a proxy to the actual object
   */
  eResolveProxy(proxy) {
    const proxyURI = proxy.eProxyURI();
    if (!proxyURI) {
      return proxy;
    }
    const resource = this.eResource();
    if (!resource) {
      return proxy;
    }
    const resourceSet = resource.getResourceSet();
    if (!resourceSet) {
      return proxy;
    }
    const uriStr = proxyURI.toString();
    const hashIndex = uriStr.indexOf("#");
    if (hashIndex > 0) {
      const resourceURIStr = uriStr.substring(0, hashIndex);
      const fragment = uriStr.substring(hashIndex + 1);
      let resourceURI;
      const currentURI = resource.getURI();
      if (currentURI && !resourceURIStr.includes("://")) {
        resourceURI = currentURI.resolve(URI.createURI(resourceURIStr));
      } else {
        resourceURI = URI.createURI(resourceURIStr);
      }
      const targetResource = resourceSet.getResource(resourceURI, true);
      if (targetResource) {
        const resolved2 = targetResource.getEObject(fragment);
        if (resolved2) {
          return resolved2;
        }
      }
      const packageRegistry = resourceSet.getPackageRegistry();
      const resolved = this.resolveFragmentViaPackageRegistry(packageRegistry, resourceURIStr, fragment, resourceSet);
      if (resolved) {
        return resolved;
      }
    } else if (hashIndex === 0) {
      const fragment = uriStr.substring(1);
      const resolved = resource.getEObject(fragment);
      if (resolved) {
        return resolved;
      }
    } else {
      const resolved = resource.getEObject(uriStr);
      if (resolved) {
        return resolved;
      }
    }
    return proxy;
  }
  /**
   * Resolve a fragment via the package registry.
   * When a proxy like foaf.ecore#//Agent can't be resolved through the resource
   * (e.g., because the resource is empty after package registration), try to
   * find the correct package in the registry.
   */
  resolveFragmentViaPackageRegistry(packageRegistry, resourceURIStr, fragment, resourceSet) {
    const directPkg = packageRegistry.getEPackage(resourceURIStr);
    if (directPkg) {
      const resolved = this.resolveFragmentInPackage(directPkg, fragment);
      if (resolved)
        return resolved;
    }
    let baseName = resourceURIStr;
    const lastSlash = baseName.lastIndexOf("/");
    if (lastSlash >= 0)
      baseName = baseName.substring(lastSlash + 1);
    const dotIndex = baseName.indexOf(".");
    if (dotIndex > 0)
      baseName = baseName.substring(0, dotIndex);
    if (baseName) {
      for (const nsKey of packageRegistry.keys()) {
        const pkg = packageRegistry.getEPackage(nsKey);
        if (pkg && pkg.getName() === baseName) {
          const resolved = this.resolveFragmentInPackage(pkg, fragment);
          if (resolved)
            return resolved;
        }
      }
    }
    return null;
  }
  /**
   * Resolve a fragment path (e.g., //Agent or //sub/Agent) within an EPackage.
   */
  resolveFragmentInPackage(pkg, fragment) {
    let path = fragment;
    while (path.startsWith("/"))
      path = path.substring(1);
    if (!path)
      return null;
    const segments = path.split("/");
    let currentPkg = pkg;
    for (let i = 0; i < segments.length - 1; i++) {
      const subPackages = currentPkg.getESubpackages();
      let found = null;
      for (let j = 0; j < subPackages.length; j++) {
        if (subPackages.get(j).getName() === segments[i]) {
          found = subPackages.get(j);
          break;
        }
      }
      if (!found)
        return null;
      currentPkg = found;
    }
    const classifierName = segments[segments.length - 1];
    const classifier = currentPkg.getEClassifier(classifierName);
    return classifier ?? null;
  }
  /**
   * Returns the internal resource (bypassing container navigation)
   */
  eInternalResource() {
    return this._eResource;
  }
  /**
   * Returns the internal container
   */
  eInternalContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container without notification
   */
  eBasicSetContainer(container, containerFeatureID) {
    this._eContainer = container;
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns list of the adapters associated with this notifier.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this notifier will deliver notifications to the adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this notifier will deliver notifications to the adapters.
   */
  eSetDeliver(deliver) {
    this._eDeliver = deliver;
  }
  /**
   * Notifies a change to a feature of this notifier as described by the notification.
   */
  eNotify(notification) {
    if (this._eDeliver && this._eAdapters.length > 0) {
      for (const adapter of this._eAdapters) {
        adapter.notifyChanged(notification);
      }
    }
  }
  /**
   * Adds an adapter to this notifier.
   */
  eAdapterAdd(adapter) {
    this._eAdapters.push(adapter);
    adapter.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   */
  eAdapterRemove(adapter) {
    const index = this._eAdapters.indexOf(adapter);
    if (index !== -1) {
      if (this._eDeliver) {
        const notification = new NotificationImpl(this, NotificationType.REMOVING_ADAPTER, null, adapter, null);
        adapter.notifyChanged(notification);
      }
      this._eAdapters.splice(index, 1);
      if (isAdapterInternal(adapter)) {
        adapter.unsetTarget(this);
      } else {
        adapter.setTarget(null);
      }
      return true;
    }
    return false;
  }
  // ===== End Notifier interface =====
  /**
   * Returns all cross references
   */
  eCrossReferences() {
    const refs = [];
    const eClass = this.eClass();
    const references = eClass.getEAllReferences();
    for (const ref of references) {
      if (!ref.isContainment()) {
        const value = this.eGet(ref);
        if (value) {
          if (Array.isArray(value) || isEList(value)) {
            for (const item of value) {
              refs.push(item);
            }
          } else {
            refs.push(value);
          }
        }
      }
    }
    return refs;
  }
  /**
   * Reflective get (default implementation)
   */
  eGet(feature) {
    const featureName = feature.getName() || "";
    return this.eSettings.get(featureName);
  }
  /**
   * Reflective set (default implementation)
   */
  eSet(feature, newValue) {
    const featureName = feature.getName() || "";
    const oldValue = this.eSettings.get(featureName);
    this.eSettings.set(featureName, newValue);
    if (feature instanceof Object && "isContainment" in feature) {
      const ref = feature;
      if (ref.isContainment()) {
        if (oldValue && typeof oldValue === "object" && "eSetContainer" in oldValue) {
          oldValue.eSetContainer(null, null);
        }
        if (newValue && typeof newValue === "object" && "eSetContainer" in newValue) {
          if (Array.isArray(newValue)) {
            for (const obj of newValue) {
              if (obj && "eSetContainer" in obj) {
                obj.eSetContainer(this, ref);
              }
            }
          } else {
            newValue.eSetContainer(this, ref);
          }
        }
      }
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const notification = new NotificationImpl(this, NotificationType.SET, feature, oldValue, newValue);
      this.eNotify(notification);
    }
  }
  /**
   * Reflective isSet
   */
  eIsSet(feature) {
    const featureName = feature.getName() || "";
    return this.eSettings.has(featureName);
  }
  /**
   * Reflective unset
   */
  eUnset(feature) {
    const featureName = feature.getName() || "";
    const oldValue = this.eSettings.get(featureName);
    this.eSettings.delete(featureName);
    if (feature instanceof Object && "isContainment" in feature) {
      const ref = feature;
      if (ref.isContainment() && oldValue) {
        if (Array.isArray(oldValue)) {
          for (const obj of oldValue) {
            if (obj && "eSetContainer" in obj) {
              obj.eSetContainer(null, null);
            }
          }
        } else if (typeof oldValue === "object" && "eSetContainer" in oldValue) {
          oldValue.eSetContainer(null, null);
        }
      }
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const notification = new NotificationImpl(this, NotificationType.UNSET, feature, oldValue, feature.getDefaultValue());
      this.eNotify(notification);
    }
  }
  /**
   * Invoke operation
   */
  eInvoke(operation, arguments_) {
    throw new Error(`Operation ${operation.getName()} not implemented`);
  }
  /**
   * Get direct class (for generated code)
   */
  eStaticClass() {
    return this.eClass();
  }
  /**
   * Get feature by ID
   */
  eFeature(featureID) {
    const eClass = this.eClass();
    return eClass.getEStructuralFeature(featureID);
  }
  /**
   * String representation
   */
  toString() {
    const eClass = this.eClass();
    const className = eClass?.getName() || "UnknownClass";
    return `${className}@${this.hashCode()}`;
  }
  /**
   * Simple hash code
   */
  hashCode() {
    return Math.random().toString(36).substring(7);
  }
}
class DynamicEObject extends BasicEObject {
  constructor(_eClass) {
    super();
    this._eClass = _eClass;
  }
  eClass() {
    return this._eClass;
  }
  /**
   * Override eGet to handle dynamic features and proxy resolution.
   * Returns EList for multi-valued features.
   */
  eGet(feature) {
    const featureName = feature.getName() || "";
    if (this.eSettings.has(featureName)) {
      let value = this.eSettings.get(featureName);
      if (!feature.isMany() && value && isInternalEObject(value) && value.eIsProxy()) {
        const resolved = this.eResolveProxy(value);
        if (resolved !== value) {
          this.eSettings.set(featureName, resolved);
          return resolved;
        }
      }
      return value;
    }
    if (feature.isMany()) {
      let list;
      if ("isContainment" in feature) {
        const ref = feature;
        if (ref.isContainment()) {
          list = createContainmentEList(this, ref);
        } else {
          list = createEObjectEList(this, ref);
        }
      } else {
        list = createBasicEList(this, feature);
      }
      this.eSettings.set(featureName, list);
      return list;
    }
    const defaultValue = feature.getDefaultValue();
    return defaultValue !== void 0 ? defaultValue : null;
  }
}
class EMapContainmentEList extends EObjectContainmentEList {
  constructor(owner, feature, eMap) {
    super(owner, feature);
    this.eMap = eMap;
  }
  didAdd(index, element) {
    super.didAdd(index, element);
    this.eMap.entryAdded(element);
  }
  didAddMany(index, elements) {
    super.didAddMany(index, elements);
    for (const element of elements) {
      this.eMap.entryAdded(element);
    }
  }
  didRemove(index, element) {
    super.didRemove(index, element);
    this.eMap.entryRemoved(element);
  }
  didClear(oldData) {
    super.didClear(oldData);
    this.eMap.entriesCleared();
  }
  didSet(index, newElement, oldElement) {
    super.didSet(index, newElement, oldElement);
    this.eMap.entryRemoved(oldElement);
    this.eMap.entryAdded(newElement);
  }
}
class BasicEMap {
  constructor(owner, feature, entryEClass) {
    this.mapIndex = null;
    this._owner = owner;
    this.entryEClass = entryEClass;
    this.delegateList = new EMapContainmentEList(owner, feature, this);
    const keyF = entryEClass.getEStructuralFeature("key");
    const valueF = entryEClass.getEStructuralFeature("value");
    if (!keyF || !valueF) {
      throw new Error(`Entry EClass '${entryEClass.getName()}' must have 'key' and 'value' features`);
    }
    this.keyFeature = keyF;
    this.valueFeature = valueF;
    return createIndexedProxy(this);
  }
  /**
   * Rebuild map index from the delegate list contents.
   * Entries may have been added before their key/value were set (e.g. by XMI loader),
   * so we rebuild on every map-method access.
   */
  ensureIndex() {
    if (this.mapIndex === null) {
      this.mapIndex = /* @__PURE__ */ new Map();
    }
    this.mapIndex.clear();
    for (let i = 0; i < this.delegateList.size(); i++) {
      const entry = this.delegateList.get(i);
      const key = entry.eGet(this.keyFeature);
      if (key != null) {
        this.mapIndex.set(key, entry);
      }
    }
    return this.mapIndex;
  }
  // ===== Map methods =====
  getByKey(key) {
    const index = this.ensureIndex();
    const entry = index.get(key);
    if (!entry)
      return void 0;
    return entry.eGet(this.valueFeature);
  }
  putByKey(key, value) {
    const index = this.ensureIndex();
    const existing = index.get(key);
    if (existing) {
      const oldValue = existing.eGet(this.valueFeature);
      existing.eSet(this.valueFeature, value);
      return oldValue;
    }
    const pkg = this.entryEClass.getEPackage();
    let entry;
    if (pkg && pkg.getEFactoryInstance()) {
      entry = pkg.getEFactoryInstance().create(this.entryEClass);
    } else {
      entry = new DynamicEObject(this.entryEClass);
    }
    entry.eSet(this.keyFeature, key);
    entry.eSet(this.valueFeature, value);
    this.delegateList.add(entry);
    return void 0;
  }
  removeByKey(key) {
    const index = this.ensureIndex();
    const entry = index.get(key);
    if (!entry)
      return void 0;
    const oldValue = entry.eGet(this.valueFeature);
    this.delegateList.remove(entry);
    return oldValue;
  }
  containsKey(key) {
    return this.ensureIndex().has(key);
  }
  containsValue(value) {
    for (const entry of this.ensureIndex().values()) {
      if (entry.eGet(this.valueFeature) === value) {
        return true;
      }
    }
    return false;
  }
  keys() {
    return Array.from(this.ensureIndex().keys());
  }
  mapValues() {
    const result = [];
    for (const entry of this.ensureIndex().values()) {
      result.push(entry.eGet(this.valueFeature));
    }
    return result;
  }
  toMap() {
    const result = /* @__PURE__ */ new Map();
    for (const [key, entry] of this.ensureIndex()) {
      result.set(key, entry.eGet(this.valueFeature));
    }
    return result;
  }
  // ===== Index management callbacks (called by EMapContainmentEList) =====
  entryAdded(entry) {
    this.mapIndex = null;
  }
  entryRemoved(entry) {
    this.mapIndex = null;
  }
  entriesCleared() {
    this.mapIndex = null;
  }
  // ===== EList delegation =====
  size() {
    return this.delegateList.size();
  }
  get length() {
    return this.delegateList.length;
  }
  isEmpty() {
    return this.delegateList.isEmpty();
  }
  contains(element) {
    return this.delegateList.contains(element);
  }
  indexOf(element) {
    return this.delegateList.indexOf(element);
  }
  get(index) {
    return this.delegateList.get(index);
  }
  set(index, element) {
    return this.delegateList.set(index, element);
  }
  add(element) {
    return this.delegateList.add(element);
  }
  addAt(index, element) {
    this.delegateList.addAt(index, element);
  }
  addAll(elements) {
    return this.delegateList.addAll(elements);
  }
  addAllAt(index, elements) {
    return this.delegateList.addAllAt(index, elements);
  }
  remove(element) {
    return this.delegateList.remove(element);
  }
  removeAt(index) {
    return this.delegateList.removeAt(index);
  }
  clear() {
    this.delegateList.clear();
  }
  move(toIndex, fromIndex) {
    return this.delegateList.move(toIndex, fromIndex);
  }
  toArray() {
    return this.delegateList.toArray();
  }
  [Symbol.iterator]() {
    return this.delegateList[Symbol.iterator]();
  }
  push(...items) {
    return this.delegateList.push(...items);
  }
  filter(callback, thisArg) {
    return this.delegateList.filter(callback, thisArg);
  }
  map(callback, thisArg) {
    return this.delegateList.map(callback, thisArg);
  }
  forEach(callback, thisArg) {
    this.delegateList.forEach(callback, thisArg);
  }
  find(callback, thisArg) {
    return this.delegateList.find(callback, thisArg);
  }
  findIndex(callback, thisArg) {
    return this.delegateList.findIndex(callback, thisArg);
  }
  some(callback, thisArg) {
    return this.delegateList.some(callback, thisArg);
  }
  every(callback, thisArg) {
    return this.delegateList.every(callback, thisArg);
  }
  includes(element) {
    return this.delegateList.includes(element);
  }
  slice(start, end) {
    return this.delegateList.slice(start, end);
  }
  concat(...items) {
    return this.delegateList.concat(...items);
  }
  sort(compareFn) {
    this.delegateList.sort(compareFn);
    return this;
  }
  reverse() {
    this.delegateList.reverse();
    return this;
  }
  join(separator) {
    return this.delegateList.join(separator);
  }
  at(index) {
    return this.delegateList.at(index);
  }
  lastIndexOf(element) {
    return this.delegateList.lastIndexOf(element);
  }
  flatMap(callback, thisArg) {
    return this.delegateList.flatMap(callback, thisArg);
  }
  toJSON() {
    return this.delegateList.toJSON();
  }
}
function createEMap(owner, feature, entryEClass) {
  return new BasicEMap(owner, feature, entryEClass);
}
var Resource;
(function(Resource2) {
  Resource2.INSTANCE_FACTORY_REGISTRY = createGlobalFactoryRegistry();
})(Resource || (Resource = {}));
function createGlobalFactoryRegistry() {
  const extensionMap2 = /* @__PURE__ */ new Map();
  const protocolMap = /* @__PURE__ */ new Map();
  const contentTypeMap = /* @__PURE__ */ new Map();
  return {
    getFactory(uri) {
      const protocol = uri.scheme();
      if (protocol && protocolMap.has(protocol)) {
        return protocolMap.get(protocol);
      }
      const extension = uri.fileExtension();
      if (extension && extensionMap2.has(extension)) {
        return extensionMap2.get(extension);
      }
      return null;
    },
    getExtensionToFactoryMap() {
      return extensionMap2;
    },
    getProtocolToFactoryMap() {
      return protocolMap;
    },
    getContentTypeToFactoryMap() {
      return contentTypeMap;
    }
  };
}
class BasicResource {
  constructor(uri) {
    this.resourceSet = null;
    this.loaded = false;
    this.modified = false;
    this.errors = [];
    this.warnings = [];
    this._eAdapters = [];
    this._eDeliver = true;
    this.uri = uri || null;
    this.contents = createResourceContentsEList(this);
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns the list of adapters associated with this resource.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this resource will deliver notifications to adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this resource will deliver notifications to adapters.
   */
  eSetDeliver(deliver) {
    this._eDeliver = deliver;
  }
  /**
   * Notifies all adapters of a change.
   */
  eNotify(notification) {
    if (this._eDeliver && this._eAdapters.length > 0) {
      for (const adapter of this._eAdapters) {
        adapter.notifyChanged(notification);
      }
    }
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(resourceSet) {
    this.resourceSet = resourceSet;
  }
  getURI() {
    return this.uri;
  }
  setURI(uri) {
    this.uri = uri;
  }
  getContents() {
    return this.contents;
  }
  getAllContents() {
    const allContents = [...this.contents];
    for (const root of this.contents) {
      const iterator = root.eAllContents();
      let result = iterator.next();
      while (!result.done) {
        allContents.push(result.value);
        result = iterator.next();
      }
    }
    return allContents[Symbol.iterator]();
  }
  getEObject(uriFragment) {
    if (uriFragment.startsWith("/")) {
      const allParts = uriFragment.split("/");
      const isDoubleSlash = allParts.length >= 2 && allParts[0] === "" && allParts[1] === "";
      const parts = allParts.filter((p) => p.length > 0);
      if (parts.length === 0) {
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      }
      let current = null;
      let startIndex = 0;
      if (isDoubleSlash) {
        current = this.contents.size() > 0 ? this.contents.get(0) : null;
        if (!current) {
          return null;
        }
        if (parts[0].startsWith("@")) {
          current = this.eObjectForURIFragmentSegment(current, parts[0]);
        } else {
          current = this.findByNameInContents(current, parts[0]);
        }
        startIndex = 1;
        if (!current) {
          return null;
        }
      }
      for (let i = startIndex; i < parts.length; i++) {
        const part = parts[i];
        const index = parseInt(part, 10);
        if (current === null) {
          if (!isNaN(index)) {
            current = index < this.contents.size() ? this.contents.get(index) : null;
          } else {
            current = this.findByName(this.contents.toArray(), part);
            if (!current && this.contents.size() > 0) {
              current = this.findByNameInContents(this.contents.get(0), part);
            }
          }
        } else {
          if (!isNaN(index)) {
            const children = current.eContents();
            current = children[index] || null;
          } else {
            current = this.navigateByNameOrFeature(current, part);
          }
        }
        if (!current) {
          return null;
        }
      }
      return current;
    }
    return this.getEObjectByID(uriFragment);
  }
  /**
   * Find a named element in an object's eContents().
   * This is used for EMF-style fragment navigation like //SortOrder
   * which searches for named elements within a container (e.g., EPackage's eClassifiers).
   */
  findByNameInContents(container, name) {
    const contents = container.eContents();
    return this.findByName(contents, name);
  }
  /**
   * Find an object by name in a list of objects.
   * Looks for 'name' via:
   * 1. getName() method (for static typed objects)
   * 2. eGet(nameFeature) (for dynamic objects loaded from XMI)
   * 3. Direct name property
   */
  findByName(objects, name) {
    for (const obj of objects) {
      if ("getName" in obj && typeof obj.getName === "function") {
        if (obj.getName() === name) {
          return obj;
        }
      }
      try {
        const eClass = obj.eClass();
        if (eClass) {
          const nameFeature = eClass.getEStructuralFeature("name");
          if (nameFeature) {
            const nameValue = obj.eGet(nameFeature);
            if (nameValue === name) {
              return obj;
            }
          }
        }
      } catch {
      }
      if ("name" in obj && obj.name === name) {
        return obj;
      }
    }
    return null;
  }
  /**
   * Navigate from an object to a child by name or feature.
   */
  navigateByNameOrFeature(obj, nameOrFeature) {
    if (nameOrFeature.startsWith("@")) {
      return this.eObjectForURIFragmentSegment(obj, nameOrFeature);
    }
    const contents = obj.eContents();
    const byName = this.findByName(contents, nameOrFeature);
    if (byName) {
      return byName;
    }
    const eClass = obj.eClass();
    const feature = eClass.getEStructuralFeature(nameOrFeature);
    if (feature) {
      const value = obj.eGet(feature);
      if (value && typeof value === "object" && "eClass" in value) {
        return value;
      }
      if (Array.isArray(value) && value.length > 0) {
        return value[0];
      }
    }
    return null;
  }
  /**
   * Resolve a @feature.index URI fragment segment (Java EMF format).
   * Formats:
   * - @featureName.index → eGet(feature)[index] (multi-valued)
   * - @featureName → eGet(feature) (single-valued)
   */
  eObjectForURIFragmentSegment(obj, segment) {
    const body = segment.substring(1);
    const eClass = obj.eClass();
    const lastChar = body.charAt(body.length - 1);
    let featureName;
    let index = -1;
    if (lastChar >= "0" && lastChar <= "9") {
      const dotIndex = body.lastIndexOf(".");
      if (dotIndex > 0) {
        const possibleIndex = parseInt(body.substring(dotIndex + 1), 10);
        if (!isNaN(possibleIndex)) {
          featureName = body.substring(0, dotIndex);
          index = possibleIndex;
        } else {
          featureName = body;
        }
      } else {
        featureName = body;
      }
    } else {
      featureName = body;
    }
    const feature = eClass.getEStructuralFeature(featureName);
    if (!feature)
      return null;
    const value = obj.eGet(feature);
    if (value === null || value === void 0)
      return null;
    if (index >= 0) {
      if (Array.isArray(value)) {
        return value[index] ?? null;
      }
      if (typeof value === "object" && "get" in value && typeof value.get === "function") {
        return value.get(index) ?? null;
      }
      return null;
    }
    if (typeof value === "object" && "eClass" in value) {
      return value;
    }
    return null;
  }
  getURIFragment(eObject) {
    const path = [];
    let current = eObject;
    while (current) {
      const container = current.eContainer();
      if (!container) {
        const index2 = this.contents.indexOf(current);
        if (index2 >= 0) {
          path.unshift(index2);
        }
        break;
      }
      const siblings = container.eContents();
      const index = siblings.indexOf(current);
      if (index >= 0) {
        path.unshift(index);
      }
      current = container;
    }
    return "/" + path.join("/");
  }
  async save(options) {
    this.errors = [];
    this.warnings = [];
    try {
      const data = this.serialize();
      this.modified = false;
    } catch (err) {
      this.errors.push({
        message: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }
  async load(options) {
    this.errors = [];
    this.warnings = [];
    try {
      this.loaded = true;
    } catch (err) {
      this.errors.push({
        message: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }
  isLoaded() {
    return this.loaded;
  }
  unload() {
    this.contents.clear();
    this.loaded = false;
    this.modified = false;
    this.errors = [];
    this.warnings = [];
  }
  isModified() {
    return this.modified;
  }
  setModified(isModified) {
    this.modified = isModified;
  }
  getErrors() {
    return this.errors;
  }
  getWarnings() {
    return this.warnings;
  }
  /**
   * Helper to find object by ID attribute
   */
  getEObjectByID(id) {
    const iterator = this.getAllContents();
    let result = iterator.next();
    while (!result.done) {
      const obj = result.value;
      const eClass = obj.eClass();
      const idAttr = eClass.getEIDAttribute();
      if (idAttr) {
        const value = obj.eGet(idAttr);
        if (value === id) {
          return obj;
        }
      }
      result = iterator.next();
    }
    return null;
  }
  /**
   * Simple JSON serialization
   */
  serialize() {
    return {
      uri: this.uri?.toString(),
      contents: this.contents.toArray().map((obj) => this.serializeObject(obj))
    };
  }
  serializeObject(obj) {
    const eClass = obj.eClass();
    const data = {
      eClass: eClass.getName()
    };
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if (feature.isTransient())
        continue;
      const value = obj.eGet(feature);
      if (value !== null && value !== void 0) {
        if (feature.isMany() && Array.isArray(value)) {
          data[feature.getName()] = value.map((v) => typeof v === "object" && "eClass" in v ? this.serializeObject(v) : v);
        } else {
          data[feature.getName()] = typeof value === "object" && "eClass" in value ? this.serializeObject(value) : value;
        }
      }
    }
    return data;
  }
}
var sax$1 = {};
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasRequiredSax;
function requireSax() {
  if (hasRequiredSax) return sax$1;
  hasRequiredSax = 1;
  (function(exports$1) {
    (function(sax2) {
      sax2.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax2.SAXParser = SAXParser;
      sax2.SAXStream = SAXStream;
      sax2.createStream = createStream;
      sax2.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax2.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax2.MAX_BUFFER_LENGTH;
        parser.encoding = null;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.opt.maxEntityCount = parser.opt.maxEntityCount || 512;
        parser.opt.maxEntityDepth = parser.opt.maxEntityDepth || 4;
        parser.entityCount = parser.entityDepth = 0;
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax2.XML_ENTITIES) : Object.create(sax2.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        if (parser.opt.unquotedAttributeValues === void 0) {
          parser.opt.unquotedAttributeValues = !strict;
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o) {
          function F() {
          }
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o) {
          var a = [];
          for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
          return a;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax2.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
          var len = parser[buffers[i]].length;
          if (len > maxAllowed) {
            switch (buffers[i]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m = sax2.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
      }
      function clearBuffers(parser) {
        for (var i = 0, l = buffers.length; i < l; i++) {
          parser[buffers[i]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require$$0.Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream) Stream = function() {
      };
      var streamWraps = sax2.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function determineBufferEncoding(data, isEnd) {
        if (data.length >= 2) {
          if (data[0] === 255 && data[1] === 254) {
            return "utf-16le";
          }
          if (data[0] === 254 && data[1] === 255) {
            return "utf-16be";
          }
        }
        if (data.length >= 3 && data[0] === 239 && data[1] === 187 && data[2] === 191) {
          return "utf8";
        }
        if (data.length >= 4) {
          if (data[0] === 60 && data[1] === 0 && data[2] === 63 && data[3] === 0) {
            return "utf-16le";
          }
          if (data[0] === 0 && data[1] === 60 && data[2] === 0 && data[3] === 63) {
            return "utf-16be";
          }
          return "utf8";
        }
        return isEnd ? "utf8" : null;
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        this._decoderBuffer = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h) {
              if (!h) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h;
                return h;
              }
              me.on(ev, h);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype._decodeBuffer = function(data, isEnd) {
        if (this._decoderBuffer) {
          data = Buffer.concat([this._decoderBuffer, data]);
          this._decoderBuffer = null;
        }
        if (!this._decoder) {
          var encoding = determineBufferEncoding(data, isEnd);
          if (!encoding) {
            this._decoderBuffer = data;
            return "";
          }
          this._parser.encoding = encoding;
          this._decoder = new TextDecoder(encoding);
        }
        return this._decoder.decode(data, { stream: !isEnd });
      };
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          data = this._decodeBuffer(data, false);
        } else if (this._decoderBuffer) {
          var remaining = this._decodeBuffer(Buffer.alloc(0), true);
          if (remaining) {
            this._parser.write(remaining);
            this.emit("data", remaining);
          }
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        if (this._decoderBuffer) {
          var finalChunk = this._decodeBuffer(Buffer.alloc(0), true);
          if (finalChunk) {
            this._parser.write(finalChunk);
            this.emit("data", finalChunk);
          }
        } else if (this._decoder) {
          var remaining = this._decoder.decode();
          if (remaining) {
            this._parser.write(remaining);
            this.emit("data", remaining);
          }
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler);
      };
      var CDATAre = /^\[CDATA\[$/i;
      var DOCTYPEre = /^DOCTYPE$/i;
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "	";
      }
      function isQuote(c) {
        return c === '"' || c === "'";
      }
      function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
      }
      function isMatch(regex, c) {
        return regex.test(c);
      }
      function notMatch(regex, c) {
        return !isMatch(regex, c);
      }
      var S = 0;
      sax2.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      };
      sax2.XML_ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      });
      sax2.ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      });
      Object.keys(sax2.ENTITIES).forEach(function(key) {
        var e = sax2.ENTITIES[key];
        var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
        sax2.ENTITIES[key] = s2;
      });
      for (var s in sax2.STATE) {
        sax2.STATE[sax2.STATE[s]] = s;
      }
      S = sax2.STATE;
      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function getDeclaredEncoding(body) {
        var match = body && body.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return match ? match[2] : null;
      }
      function normalizeEncodingName(encoding) {
        if (!encoding) {
          return null;
        }
        return encoding.toLowerCase().replace(/[^a-z0-9]/g, "");
      }
      function encodingsMatch(detectedEncoding, declaredEncoding) {
        const detected = normalizeEncodingName(detectedEncoding);
        const declared = normalizeEncodingName(declaredEncoding);
        if (!detected || !declared) {
          return true;
        }
        if (declared === "utf16") {
          return detected === "utf16le" || detected === "utf16be";
        }
        return detected === declared;
      }
      function validateXmlDeclarationEncoding(parser, data) {
        if (!parser.strict || !parser.encoding || !data || data.name !== "xml") {
          return;
        }
        var declaredEncoding = getDeclaredEncoding(data.body);
        if (declaredEncoding && !encodingsMatch(parser.encoding, declaredEncoding)) {
          strictFail(
            parser,
            "XML declaration encoding " + declaredEncoding + " does not match detected stream encoding " + parser.encoding.toUpperCase()
          );
        }
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot)
          strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(
              parser,
              "Unbound namespace prefix: " + JSON.stringify(parser.tagName)
            );
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              emitNode(parser, "onopennamespace", {
                prefix: p,
                uri: tag.ns[p]
              });
            });
          }
          for (var i = 0, l = parser.attribList.length; i < l; i++) {
            var nv = parser.attribList[i];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(
                parser,
                "Unbound namespace prefix: " + JSON.stringify(prefix)
              );
              a.uri = prefix;
            }
            parser.tag.attributes[name] = a;
            emitNode(parser, "onattribute", a);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S.SCRIPT;
          } else {
            parser.state = S.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
          var close = parser.tags[t];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s2 = parser.tags.length;
        while (s2-- > t) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x = {};
          for (var i in tag.ns) {
            x[i] = tag.ns[i];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              var n = tag.ns[p];
              emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
            });
          }
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity || num < 0 || num > 1114111 || !isXmlChar(num)) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function isXmlChar(num) {
        return num === 9 || num === 10 || num === 13 || num >= 32 && num <= 55295 || num >= 57344 && num <= 65533 || num >= 65536 && num <= 1114111;
      }
      function beginWhiteSpace(parser, c) {
        if (c === "<") {
          parser.state = S.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c;
          parser.state = S.TEXT;
        }
      }
      function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) {
          result = chunk.charAt(i);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i = 0;
        var c = "";
        while (true) {
          c = charAt(chunk, i++);
          parser.c = c;
          if (!c) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S.BEGIN:
              parser.state = S.BEGIN_WHITESPACE;
              if (c === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c);
              continue;
            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c);
              continue;
            case S.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i - 1;
                while (c && c !== "<" && c !== "&") {
                  c = charAt(chunk, i++);
                  if (c && parser.trackPosition) {
                    parser.position++;
                    if (c === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i - 1);
              }
              if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c === "&") {
                  parser.state = S.TEXT_ENTITY;
                } else {
                  parser.textNode += c;
                }
              }
              continue;
            case S.SCRIPT:
              if (c === "<") {
                parser.state = S.SCRIPT_ENDING;
              } else {
                parser.script += c;
              }
              continue;
            case S.SCRIPT_ENDING:
              if (c === "/") {
                parser.state = S.CLOSE_TAG;
              } else {
                parser.script += "<" + c;
                parser.state = S.SCRIPT;
              }
              continue;
            case S.OPEN_WAKA:
              if (c === "!") {
                parser.state = S.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c)) ;
              else if (isMatch(nameStart, c)) {
                parser.state = S.OPEN_TAG;
                parser.tagName = c;
              } else if (c === "/") {
                parser.state = S.CLOSE_TAG;
                parser.tagName = "";
              } else if (c === "?") {
                parser.state = S.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c = new Array(pad).join(" ") + c;
                }
                parser.textNode += "<" + c;
                parser.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (parser.sgmlDecl + c === "--") {
                parser.state = S.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
                continue;
              }
              if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                parser.state = S.DOCTYPE_DTD;
                parser.doctype += "<!" + parser.sgmlDecl + c;
                parser.sgmlDecl = "";
              } else if (CDATAre.test(parser.sgmlDecl + c)) {
                emitNode(parser, "onopencdata");
                parser.state = S.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if (DOCTYPEre.test(parser.sgmlDecl + c)) {
                parser.state = S.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S.TEXT;
              } else if (isQuote(c)) {
                parser.state = S.SGML_DECL_QUOTED;
                parser.sgmlDecl += c;
              } else {
                parser.sgmlDecl += c;
              }
              continue;
            case S.SGML_DECL_QUOTED:
              if (c === parser.q) {
                parser.state = S.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c;
              continue;
            case S.DOCTYPE:
              if (c === ">") {
                parser.state = S.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c;
                if (c === "[") {
                  parser.state = S.DOCTYPE_DTD;
                } else if (isQuote(c)) {
                  parser.state = S.DOCTYPE_QUOTED;
                  parser.q = c;
                }
              }
              continue;
            case S.DOCTYPE_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.q = "";
                parser.state = S.DOCTYPE;
              }
              continue;
            case S.DOCTYPE_DTD:
              if (c === "]") {
                parser.doctype += c;
                parser.state = S.DOCTYPE;
              } else if (c === "<") {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else if (isQuote(c)) {
                parser.doctype += c;
                parser.state = S.DOCTYPE_DTD_QUOTED;
                parser.q = c;
              } else {
                parser.doctype += c;
              }
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.state = S.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S.COMMENT:
              if (c === "-") {
                parser.state = S.COMMENT_ENDING;
              } else {
                parser.comment += c;
              }
              continue;
            case S.COMMENT_ENDING:
              if (c === "-") {
                parser.state = S.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c;
                parser.state = S.COMMENT;
              }
              continue;
            case S.COMMENT_ENDED:
              if (c !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c;
                parser.state = S.COMMENT;
              } else if (parser.doctype && parser.doctype !== true) {
                parser.state = S.DOCTYPE_DTD;
              } else {
                parser.state = S.TEXT;
              }
              continue;
            case S.CDATA:
              var starti = i - 1;
              while (c && c !== "]") {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.cdata += chunk.substring(starti, i - 1);
              if (c === "]") {
                parser.state = S.CDATA_ENDING;
              }
              continue;
            case S.CDATA_ENDING:
              if (c === "]") {
                parser.state = S.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.CDATA_ENDING_2:
              if (c === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S.TEXT;
              } else if (c === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.PROC_INST:
              if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c)) {
                parser.state = S.PROC_INST_BODY;
              } else {
                parser.procInstName += c;
              }
              continue;
            case S.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c)) {
                continue;
              } else if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c;
              }
              continue;
            case S.PROC_INST_ENDING:
              if (c === ">") {
                const procInstEndData = {
                  name: parser.procInstName,
                  body: parser.procInstBody
                };
                validateXmlDeclarationEncoding(parser, procInstEndData);
                emitNode(parser, "onprocessinginstruction", procInstEndData);
                parser.procInstName = parser.procInstBody = "";
                parser.state = S.TEXT;
              } else {
                parser.procInstBody += "?" + c;
                parser.state = S.PROC_INST_BODY;
              }
              continue;
            case S.OPEN_TAG:
              if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else {
                newTag(parser);
                if (c === ">") {
                  openTag(parser);
                } else if (c === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.OPEN_TAG_SLASH:
              if (c === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(
                  parser,
                  "Forward-slash in opening tag not followed by >"
                );
                parser.state = S.ATTRIB;
              }
              continue;
            case S.ATTRIB:
              if (isWhitespace(c)) {
                continue;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (c === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c)) {
                parser.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c)) {
                parser.attribName += c;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c)) {
                  parser.attribName = c;
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.ATTRIB_VALUE:
              if (isWhitespace(c)) {
                continue;
              } else if (isQuote(c)) {
                parser.q = c;
                parser.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                if (!parser.opt.unquotedAttributeValues) {
                  error(parser, "Unquoted attribute value");
                }
                parser.state = S.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c;
              }
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (c !== parser.q) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c)) {
                parser.state = S.ATTRIB;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c)) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              if (c === ">") {
                openTag(parser);
              } else {
                parser.state = S.ATTRIB;
              }
              continue;
            case S.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c)) {
                  continue;
                } else if (notMatch(nameStart, c)) {
                  if (parser.script) {
                    parser.script += "</" + c;
                    parser.state = S.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c;
                }
              } else if (c === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName + c;
                parser.tagName = "";
                parser.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c)) {
                continue;
              }
              if (c === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = "attribValue";
                  break;
              }
              if (c === ";") {
                var parsedEntity = parseEntity(parser);
                if (parser.opt.unparsedEntities && !Object.values(sax2.XML_ENTITIES).includes(parsedEntity)) {
                  if ((parser.entityCount += 1) > parser.opt.maxEntityCount) {
                    error(
                      parser,
                      "Parsed entity count exceeds max entity count"
                    );
                  }
                  if ((parser.entityDepth += 1) > parser.opt.maxEntityDepth) {
                    error(
                      parser,
                      "Parsed entity depth exceeds max entity depth"
                    );
                  }
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                  parser.entityDepth -= 1;
                } else {
                  parser[buffer] += parsedEntity;
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                parser.entity += c;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer] += "&" + parser.entity + c;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(exports$1);
  })(sax$1);
  return sax$1;
}
var saxExports = requireSax();
const sax = /* @__PURE__ */ getDefaultExportFromCjs(saxExports);
const ANNOTATION_URI = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData";
const UNSPECIFIED_CONTENT = 0;
const EMPTY_CONTENT = 1;
const SIMPLE_CONTENT = 2;
const MIXED_CONTENT = 3;
const ELEMENT_ONLY_CONTENT = 4;
const UNSPECIFIED_FEATURE = 0;
const SIMPLE_FEATURE = 1;
const ELEMENT_FEATURE = 2;
const ATTRIBUTE_FEATURE = 3;
const ELEMENT_WILDCARD_FEATURE = 4;
const ATTRIBUTE_WILDCARD_FEATURE = 5;
const GROUP_FEATURE = 6;
class ExtendedMetaData {
  constructor() {
    this.contentKindCache = /* @__PURE__ */ new Map();
    this.featureKindCache = /* @__PURE__ */ new Map();
    this.nameCache = /* @__PURE__ */ new Map();
    this.namespaceCache = /* @__PURE__ */ new Map();
    this.simpleContentFeatureCache = /* @__PURE__ */ new Map();
  }
  /**
   * Get the content kind for a class (class-level annotation).
   */
  getContentKind(eClass) {
    let kind = this.contentKindCache.get(eClass);
    if (kind !== void 0)
      return kind;
    kind = UNSPECIFIED_CONTENT;
    const kindStr = this.getAnnotationDetail(eClass, "kind");
    if (kindStr) {
      switch (kindStr) {
        case "simple":
          kind = SIMPLE_CONTENT;
          break;
        case "mixed":
          kind = MIXED_CONTENT;
          break;
        case "empty":
          kind = EMPTY_CONTENT;
          break;
        case "elementOnly":
          kind = ELEMENT_ONLY_CONTENT;
          break;
      }
    }
    this.contentKindCache.set(eClass, kind);
    return kind;
  }
  /**
   * Get the feature kind (element, attribute, simple, etc.)
   */
  getFeatureKind(feature) {
    let kind = this.featureKindCache.get(feature);
    if (kind !== void 0)
      return kind;
    kind = UNSPECIFIED_FEATURE;
    const kindStr = this.getAnnotationDetail(feature, "kind");
    if (kindStr) {
      switch (kindStr) {
        case "simple":
          kind = SIMPLE_FEATURE;
          break;
        case "element":
          kind = ELEMENT_FEATURE;
          break;
        case "attribute":
          kind = ATTRIBUTE_FEATURE;
          break;
        case "elementWildcard":
          kind = ELEMENT_WILDCARD_FEATURE;
          break;
        case "attributeWildcard":
          kind = ATTRIBUTE_WILDCARD_FEATURE;
          break;
        case "group":
          kind = GROUP_FEATURE;
          break;
      }
    }
    this.featureKindCache.set(feature, kind);
    return kind;
  }
  /**
   * Get the XML name for a feature from its EMD annotation.
   * Returns null if no annotation is present.
   */
  getName(feature) {
    if (this.nameCache.has(feature))
      return this.nameCache.get(feature);
    const name = this.getAnnotationDetail(feature, "name") ?? null;
    this.nameCache.set(feature, name);
    return name;
  }
  /**
   * Get the namespace URI for a feature from its EMD annotation.
   * Resolves special values:
   * - `##targetNamespace` → owning EPackage's nsURI
   * - `##local` → null (no namespace)
   */
  getNamespace(feature) {
    if (this.namespaceCache.has(feature))
      return this.namespaceCache.get(feature);
    const rawNs = this.getAnnotationDetail(feature, "namespace") ?? null;
    let ns = rawNs;
    if (ns === "##targetNamespace") {
      const eClass = feature.getEContainingClass?.();
      const pkg = eClass?.getEPackage?.();
      ns = pkg?.getNsURI?.() ?? null;
      if (ns === null)
        return null;
    } else if (ns === "##local") {
      ns = null;
    }
    this.namespaceCache.set(feature, ns);
    return ns;
  }
  /**
   * Find the feature that represents simple text content (name=":0", kind="simple").
   */
  getSimpleContentFeature(eClass) {
    if (this.simpleContentFeatureCache.has(eClass)) {
      return this.simpleContentFeatureCache.get(eClass);
    }
    let result = null;
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const name = this.getName(feature);
      if (name === ":0") {
        result = feature;
        break;
      }
    }
    this.simpleContentFeatureCache.set(eClass, result);
    return result;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "element".
   */
  getElementFeature(eClass, namespace, name) {
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const fKind = this.getFeatureKind(feature);
      if (fKind !== ELEMENT_FEATURE)
        continue;
      const fName = this.getName(feature) ?? feature.getName();
      if (fName !== name)
        continue;
      const fNs = this.getNamespace(feature);
      if (namespace && fNs && fNs === namespace)
        return feature;
      if (!namespace && !fNs)
        return feature;
      if (!fNs && fName === name)
        return feature;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(eClass, namespace, name) {
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const fKind = this.getFeatureKind(feature);
      if (fKind !== ATTRIBUTE_FEATURE)
        continue;
      const fName = this.getName(feature) ?? feature.getName();
      if (fName !== name)
        continue;
      const fNs = this.getNamespace(feature);
      if (namespace && fNs && fNs === namespace)
        return feature;
      if (!namespace && !fNs)
        return feature;
      if (!fNs && fName === name)
        return feature;
    }
    return null;
  }
  /**
   * Find any feature by EMD namespace and name (element or attribute).
   */
  getFeature(eClass, namespace, name, isElement) {
    if (isElement) {
      return this.getElementFeature(eClass, namespace, name);
    }
    return this.getAttributeFeature(eClass, namespace, name);
  }
  /**
   * Read a detail value from the ExtendedMetaData annotation on a model element.
   */
  getAnnotationDetail(element, key) {
    if (!element || typeof element.getEAnnotation !== "function")
      return void 0;
    const annotation = element.getEAnnotation(ANNOTATION_URI);
    if (!annotation)
      return void 0;
    const details = annotation.getDetails();
    if (!details || typeof details.getByKey !== "function")
      return void 0;
    return details.getByKey(key);
  }
  /**
   * Read the ExtendedMetaData annotation details as a Map.
   */
  getAnnotation(element) {
    if (!element || typeof element.getEAnnotation !== "function")
      return null;
    const annotation = element.getEAnnotation(ANNOTATION_URI);
    if (!annotation)
      return null;
    const details = annotation.getDetails();
    if (!details)
      return null;
    if (typeof details.getByKey === "function") {
      return details.toMap();
    }
    return null;
  }
}
const OPTION_FEATURE_NAME_MAP = "FEATURE_NAME_MAP";
const OPTION_EXTENDED_META_DATA = "EXTENDED_META_DATA";
const DATATYPE_SINGLE = 1;
const DATATYPE_IS_MANY = 2;
const IS_MANY_ADD = 3;
const IS_MANY_MOVE = 4;
const OTHER = 5;
class NamespaceSupport {
  constructor() {
    this.contexts = [];
    this.currentContext = /* @__PURE__ */ new Map();
  }
  pushContext() {
    this.contexts.push(new Map(this.currentContext));
  }
  popContext() {
    const previous = this.contexts.pop();
    const popped = /* @__PURE__ */ new Map();
    if (previous) {
      for (const [prefix, uri] of this.currentContext) {
        if (!previous.has(prefix) || previous.get(prefix) !== uri) {
          popped.set(prefix, uri);
        }
      }
      this.currentContext = previous;
    }
    return popped;
  }
  declarePrefix(prefix, uri) {
    this.currentContext.set(prefix, uri);
  }
  getURI(prefix) {
    return this.currentContext.get(prefix) ?? null;
  }
  getPrefix(uri) {
    for (const [prefix, nsUri] of this.currentContext) {
      if (nsUri === uri) {
        return prefix;
      }
    }
    return null;
  }
}
class XMLHelperImpl {
  constructor(resource) {
    this.noNamespacePackage = null;
    this.resource = null;
    this.xmlResource = null;
    this.resourceURI = null;
    this.packageRegistry = EPackageRegistry.INSTANCE;
    this.packages = /* @__PURE__ */ new Map();
    this.featuresToKinds = /* @__PURE__ */ new Map();
    this.prefixesToURIs = /* @__PURE__ */ new Map();
    this.urisToPrefixes = /* @__PURE__ */ new Map();
    this.namespaceSupport = new NamespaceSupport();
    this.allPrefixToURI = [];
    this.featureNameMap = /* @__PURE__ */ new Map();
    this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
    this.extendedMetaData = null;
    if (resource) {
      this.setResource(resource);
    }
  }
  setResource(resource) {
    this.resource = resource;
    this.xmlResource = resource && "getID" in resource ? resource : null;
    if (resource) {
      this.resourceURI = resource.getURI();
      const resourceSet = resource.getResourceSet();
      if (resourceSet) {
        this.packageRegistry = resourceSet.getPackageRegistry();
      } else {
        this.packageRegistry = EPackageRegistry.INSTANCE;
      }
    }
  }
  setOptions(options) {
    const nameMap = options.get(OPTION_FEATURE_NAME_MAP);
    if (nameMap) {
      this.featureNameMap = new Map(nameMap);
      this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [featureName, xmlName] of nameMap) {
        this.reverseFeatureNameMap.set(xmlName, featureName);
      }
    }
    const emd = options.get(OPTION_EXTENDED_META_DATA);
    if (emd instanceof ExtendedMetaData) {
      this.extendedMetaData = emd;
    } else if (emd === true) {
      this.extendedMetaData = new ExtendedMetaData();
    }
  }
  getExtendedMetaData() {
    return this.extendedMetaData;
  }
  setNoNamespacePackage(pkg) {
    this.noNamespacePackage = pkg;
  }
  getNoNamespacePackage() {
    return this.noNamespacePackage;
  }
  getResource() {
    return this.resource;
  }
  getName(element) {
    return element.getName() || "";
  }
  getQName(classifier) {
    const ePackage = classifier.getEPackage();
    if (ePackage) {
      const prefix = this.getPrefixForPackage(ePackage);
      if (prefix && prefix.length > 0) {
        return prefix + ":" + classifier.getName();
      }
    }
    return classifier.getName() || "";
  }
  getPrefix(namespaceURI) {
    if (namespaceURI === null) {
      return null;
    }
    const prefixes = this.urisToPrefixes.get(namespaceURI);
    return prefixes && prefixes.length > 0 ? prefixes[0] : null;
  }
  getPrefixForPackage(ePackage) {
    let prefix = this.packages.get(ePackage);
    if (prefix === void 0) {
      const nsURI = ePackage.getNsURI();
      if (nsURI) {
        const foundPrefix = this.getPrefix(nsURI);
        prefix = foundPrefix !== null ? foundPrefix : ePackage.getNsPrefix() || "";
      } else {
        prefix = ePackage.getNsPrefix() || "";
      }
      this.packages.set(ePackage, prefix || "");
    }
    return prefix || null;
  }
  getNamespaceURI(prefix) {
    return this.prefixesToURIs.get(prefix) ?? null;
  }
  getURI(prefix) {
    return this.namespaceSupport.getURI(prefix);
  }
  addPrefix(prefix, uri) {
    this.namespaceSupport.declarePrefix(prefix, uri);
    this.prefixesToURIs.set(prefix, uri);
    let prefixes = this.urisToPrefixes.get(uri);
    if (!prefixes) {
      prefixes = [];
      this.urisToPrefixes.set(uri, prefixes);
    }
    if (!prefixes.includes(prefix)) {
      prefixes.push(prefix);
    }
    this.allPrefixToURI.push(prefix, uri);
  }
  pushContext() {
    this.namespaceSupport.pushContext();
  }
  popContext() {
    this.namespaceSupport.popContext();
  }
  popContextWithFactories(prefixesToFactories) {
    const popped = this.namespaceSupport.popContext();
    for (const [prefix] of popped) {
      prefixesToFactories.delete(prefix);
    }
  }
  recordPrefixToURIMapping() {
  }
  getPrefixToNamespaceMap() {
    return new Map(this.prefixesToURIs);
  }
  createObject(eFactory, type) {
    if (type && "getESuperTypes" in type) {
      return eFactory.create(type);
    }
    return null;
  }
  getType(eFactory, typeName) {
    const ePackage = eFactory.getEPackage();
    if (ePackage) {
      return ePackage.getEClassifier(typeName);
    }
    return null;
  }
  getFeature(eClass, namespaceURI, name) {
    if (this.extendedMetaData) {
      const emdFeature = this.extendedMetaData.getAttributeFeature(eClass, namespaceURI, name);
      if (emdFeature) {
        this.computeFeatureKind(emdFeature);
        return emdFeature;
      }
    }
    let feature = eClass.getEStructuralFeature(name);
    if (!feature && this.reverseFeatureNameMap.size > 0) {
      const featureName = this.reverseFeatureNameMap.get(name);
      if (featureName) {
        feature = eClass.getEStructuralFeature(featureName);
      }
    }
    if (feature) {
      this.computeFeatureKind(feature);
    }
    return feature;
  }
  getFeatureWithElement(eClass, namespaceURI, name, isElement) {
    if (this.extendedMetaData) {
      const emdFeature = this.extendedMetaData.getFeature(eClass, namespaceURI, name, isElement);
      if (emdFeature) {
        this.computeFeatureKind(emdFeature);
        return emdFeature;
      }
    }
    return this.getFeature(eClass, namespaceURI, name);
  }
  getSerializedFeatureName(feature) {
    if (this.extendedMetaData) {
      const emdName = this.extendedMetaData.getName(feature);
      if (emdName && !emdName.startsWith(":")) {
        return emdName;
      }
    }
    const name = feature.getName() || "";
    if (this.featureNameMap.size > 0) {
      const mapped = this.featureNameMap.get(name);
      if (mapped !== void 0) {
        return mapped;
      }
    }
    return name;
  }
  getFeatureKind(feature) {
    let kind = this.featuresToKinds.get(feature);
    if (kind === void 0) {
      this.computeFeatureKind(feature);
      kind = this.featuresToKinds.get(feature);
    }
    return kind ?? OTHER;
  }
  computeFeatureKind(feature) {
    const eClassifier = feature.getEType();
    const isReference = "isContainment" in feature && typeof feature.isContainment === "function";
    if (!isReference && (!eClassifier || !("getESuperTypes" in eClassifier))) {
      if (feature.isMany()) {
        this.featuresToKinds.set(feature, DATATYPE_IS_MANY);
      } else {
        this.featuresToKinds.set(feature, DATATYPE_SINGLE);
      }
    } else {
      if (feature.isMany()) {
        if ("getEOpposite" in feature && typeof feature.getEOpposite === "function") {
          const reference = feature;
          const opposite = reference.getEOpposite();
          if (!opposite || typeof opposite.isTransient !== "function" || opposite.isTransient() || !opposite.isMany()) {
            this.featuresToKinds.set(feature, IS_MANY_ADD);
          } else {
            this.featuresToKinds.set(feature, IS_MANY_MOVE);
          }
        } else {
          this.featuresToKinds.set(feature, IS_MANY_ADD);
        }
      } else {
        this.featuresToKinds.set(feature, OTHER);
      }
    }
  }
  setValue(eObject, feature, value, position) {
    if (feature.isMany()) {
      let list = eObject.eGet(feature);
      if (!list) {
        list = [];
        eObject.eSet(feature, list);
      }
      if (position === -1) {
        list.push(value);
      } else if (position === -2) {
        list.unshift(value);
      } else {
        list.splice(position, 0, value);
      }
    } else {
      eObject.eSet(feature, value);
    }
    if (value && typeof value === "object") {
      const featureName = feature.getName();
      if (featureName === "eClassifiers" && "setEPackage" in value) {
        value.setEPackage(eObject);
      }
      if (featureName === "eStructuralFeatures" && "setEContainingClass" in value) {
        value.setEContainingClass(eObject);
      }
      if (featureName === "eOperations" && "setEContainingClass" in value) {
        value.setEContainingClass(eObject);
      }
    }
  }
  setManyReference(reference, location) {
    const errors = [];
    const eObject = reference.getObject();
    const feature = reference.getFeature();
    const values = reference.getValues();
    const positions = reference.getPositions();
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      const position = positions[i];
      try {
        this.setValue(eObject, feature, value, position);
      } catch (e) {
        errors.push(e instanceof Error ? e : new Error(String(e)));
      }
    }
    return errors;
  }
  deresolve(uri) {
    if (this.resourceURI && !uri.isRelative()) {
      return uri.deresolve(this.resourceURI);
    }
    return uri;
  }
  resolve(relative, base) {
    return relative.resolve(base);
  }
  getID(obj) {
    return this.xmlResource ? this.xmlResource.getID(obj) : null;
  }
  convertToString(factory, dataType, data) {
    return factory.convertToString(dataType, data);
  }
}
class EProxyImpl {
  constructor(proxyURI, eClass) {
    this._proxyURI = null;
    this._eClass = null;
    this._resource = null;
    this._proxyURI = proxyURI;
    this._eClass = eClass || null;
  }
  // --- Proxy-specific methods ---
  eProxyURI() {
    return this._proxyURI;
  }
  eSetProxyURI(uri) {
    this._proxyURI = uri;
  }
  eIsProxy() {
    return this._proxyURI !== null;
  }
  eResolveProxy(proxy) {
    const resource = this._resource || this.eResource();
    if (resource) {
      const resourceSet = resource.getResourceSet();
      if (resourceSet && proxy.eProxyURI()) {
        const proxyURI = proxy.eProxyURI();
        const uriStr = proxyURI.toString();
        const hashIndex = uriStr.indexOf("#");
        if (hashIndex > 0) {
          const resourceURI = URI.createURI(uriStr.substring(0, hashIndex));
          const fragment = uriStr.substring(hashIndex + 1);
          const targetResource = resourceSet.getResource(resourceURI, true);
          if (targetResource) {
            const resolved = targetResource.getEObject(fragment);
            if (resolved) {
              return resolved;
            }
          }
        } else if (hashIndex === 0) {
          const fragment = uriStr.substring(1);
          const resolved = resource.getEObject(fragment);
          if (resolved) {
            return resolved;
          }
        }
      }
    }
    return proxy;
  }
  // --- InternalEObject methods ---
  eInternalResource() {
    return this._resource;
  }
  eSetResource(resource) {
    this._resource = resource;
  }
  eInternalContainer() {
    return null;
  }
  eBasicSetContainer(container, containerFeatureID) {
  }
  // --- EObject interface (minimal implementation) ---
  eClass() {
    if (this._eClass) {
      return this._eClass;
    }
    throw new Error("Proxy has no EClass - must be resolved first");
  }
  eResource() {
    return this._resource;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eCrossReferences() {
    return [];
  }
  eGet(feature) {
    throw new Error(`Cannot get feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eSet(feature, newValue) {
    throw new Error(`Cannot set feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eIsSet(feature) {
    return false;
  }
  eUnset(feature) {
    throw new Error(`Cannot unset feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eInvoke(operation, arguments_) {
    throw new Error(`Cannot invoke operation '${operation.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  toString() {
    return `EProxy(${this._proxyURI?.toString() || "null"})`;
  }
}
function resolveClassifierInPackage(pkg, fragment) {
  let path = fragment;
  while (path.startsWith("/")) {
    path = path.substring(1);
  }
  if (!path)
    return null;
  const segments = path.split("/");
  if (segments.length === 1) {
    return pkg.getEClassifier(segments[0]);
  }
  const classifierName = segments[segments.length - 1];
  let currentPkg = pkg;
  for (let i = 0; i < segments.length - 1; i++) {
    const subPkgName = segments[i];
    const subPackages = currentPkg.getESubpackages();
    currentPkg = null;
    for (let j = 0; j < subPackages.length; j++) {
      const sp = subPackages.get(j);
      if (sp.getName() === subPkgName) {
        currentPkg = sp;
        break;
      }
    }
    if (!currentPkg)
      return null;
  }
  return currentPkg.getEClassifier(classifierName);
}
const ERROR_TYPE = "error";
const OBJECT_TYPE = "object";
const REFERENCE_TYPE = "reference";
const XMI_WRAPPER_TYPE = "xmiWrapper";
const DEFERRED_TYPE = "deferredType";
class AttributesImpl {
  constructor() {
    this.attrs = [];
  }
  add(qName, localName, uri, value) {
    this.attrs.push({ qName, localName, uri, value });
  }
  clear() {
    this.attrs = [];
  }
  getLength() {
    return this.attrs.length;
  }
  getQName(index) {
    return this.attrs[index]?.qName || "";
  }
  getValue(index) {
    return this.attrs[index]?.value || "";
  }
  getLocalName(index) {
    return this.attrs[index]?.localName || "";
  }
  getURI(index) {
    return this.attrs[index]?.uri || "";
  }
  getValueByQName(qName) {
    const attr = this.attrs.find((a) => a.qName === qName);
    return attr?.value ?? null;
  }
  getValueByName(uri, localName) {
    const attr = this.attrs.find((a) => a.uri === uri && a.localName === localName);
    return attr?.value ?? null;
  }
}
const XSI_URI = "http://www.w3.org/2001/XMLSchema-instance";
const XMI_URI = "http://www.omg.org/XMI";
const XML_NS = "xmlns";
const TYPE_ATTRIB = "type";
const NIL_ATTRIB = "nil";
const SCHEMA_LOCATION_ATTRIB = "schemaLocation";
const HREF_ATTRIB = "href";
const ID_ATTRIB = "id";
class XMLHandler {
  constructor(resource, helper, options) {
    this.elements = [];
    this.objects = [];
    this.types = [];
    this.prefixesToFactories = /* @__PURE__ */ new Map();
    this.urisToLocations = /* @__PURE__ */ new Map();
    this.forwardSingleReferences = [];
    this.sameDocumentProxies = [];
    this.attribs = null;
    this.text = null;
    this.isRoot = true;
    this.isNamespaceAware = false;
    this.needsPushContext = false;
    this.deferredFeature = null;
    this.deferredParent = null;
    this.deferredExtent = null;
    this.resolve = true;
    this.useNewMethods = true;
    this.errors = [];
    this.lineNumber = 0;
    this.columnNumber = 0;
    this.resource = resource;
    this.helper = helper;
    this.packageRegistry = resource.getResourceSet()?.getPackageRegistry() || EPackageRegistry.INSTANCE;
    this.extent = resource.getContents();
    if (options) {
      this.processOptions(options);
    }
  }
  processOptions(options) {
    this.helper.setOptions(options);
  }
  /**
   * Set attributes for current element
   */
  setAttributes(attribs) {
    this.attribs = attribs;
  }
  /**
   * Handle start of element
   */
  startElement(uri, localName, qName, attributes) {
    this.setAttributes(attributes);
    this.startElementInternal(uri, localName, qName);
  }
  startElementInternal(uri, localName, qName) {
    if (this.needsPushContext) {
      this.helper.pushContext();
    }
    this.needsPushContext = true;
    this.elements.push(qName);
    let prefix = "";
    if (this.useNewMethods) {
      if (this.isRoot) {
        this.handleSchemaLocation();
      }
      prefix = this.helper.getPrefix(uri.length === 0 ? null : uri) || "";
    } else {
      this.handleNamespaceAttribs();
      const index = qName.indexOf(":");
      if (index !== -1) {
        prefix = qName.substring(0, index);
        localName = qName.substring(index + 1);
      }
    }
    this.processElement(qName, prefix, localName);
  }
  processElement(name, prefix, localName) {
    if (this.isRoot) {
      this.isRoot = false;
      this.recordHeaderInformation();
    }
    if (prefix === "xmi" && localName === "XMI") {
      this.objects.push(null);
      this.types.push(XMI_WRAPPER_TYPE);
      return;
    }
    const isTopLevel = this.objects.length === 0 || this.objects.length === 1 && this.types[0] === XMI_WRAPPER_TYPE;
    if (isTopLevel) {
      this.createTopObject(prefix, localName);
    } else {
      this.handleFeature(prefix, localName);
    }
  }
  /**
   * Handle end of element
   */
  endElement(uri, localName, qName) {
    this.elements.pop();
    const type = this.types.pop();
    if (type === OBJECT_TYPE) {
      const object = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && object) {
        const trimmed = this.text.trim();
        if (trimmed.length > 0) {
          const emd = this.helper.getExtendedMetaData();
          if (emd) {
            const eClass = object.eClass();
            if (emd.getContentKind(eClass) === SIMPLE_CONTENT) {
              const simpleFeature = emd.getSimpleContentFeature(eClass);
              if (simpleFeature) {
                this.setFeatureValue(object, simpleFeature, trimmed);
              }
            }
          }
          this.handleProxy(object, trimmed);
        }
      }
      this.text = null;
    } else if (type === ERROR_TYPE) {
      this.objects.pop();
      this.text = null;
    } else if (type === REFERENCE_TYPE) {
      this.objects.pop();
      this.text = null;
    } else if (type === DEFERRED_TYPE) {
      this.objects.pop();
      this.deferredParent = null;
      this.deferredFeature = null;
      this.text = null;
    } else if (type === XMI_WRAPPER_TYPE) {
      this.objects.pop();
    } else if (type !== void 0) {
      const eObject = this.objects.pop() || this.objects[this.objects.length - 1];
      if (eObject && type) {
        this.setFeatureValue(eObject, type, this.text);
      }
      this.text = null;
    }
    this.helper.popContextWithFactories(this.prefixesToFactories);
  }
  /**
   * Handle character data
   */
  characters(ch) {
    if (this.text === null) {
      this.text = ch;
    } else {
      this.text += ch;
    }
  }
  /**
   * Handle start of prefix mapping
   */
  startPrefixMapping(prefix, uri) {
    this.isNamespaceAware = true;
    if (this.needsPushContext) {
      this.helper.pushContext();
      this.needsPushContext = false;
    }
    this.helper.addPrefix(prefix, uri);
    this.prefixesToFactories.delete(prefix);
  }
  /**
   * Handle end of document
   */
  endDocument() {
    if (this.deferredExtent !== null) {
      this.extent.push(...this.deferredExtent);
    }
    this.helper.recordPrefixToURIMapping();
    this.helper.popContext();
    this.handleForwardReferences();
  }
  /**
   * Handle namespace attributes
   */
  handleNamespaceAttribs() {
    if (this.attribs) {
      for (let i = 0; i < this.attribs.getLength(); i++) {
        const qName = this.attribs.getQName(i);
        if (qName.startsWith(XML_NS)) {
          const prefix = qName.length > 5 ? qName.substring(6) : "";
          const value = this.attribs.getValue(i);
          this.startPrefixMapping(prefix, value);
        }
      }
    }
  }
  /**
   * Handle schema location
   */
  handleSchemaLocation() {
    if (!this.attribs)
      return;
    const schemaLocation = this.attribs.getValueByName(XSI_URI, SCHEMA_LOCATION_ATTRIB);
    if (schemaLocation) {
      this.handleXSISchemaLocation(schemaLocation);
    }
  }
  handleXSISchemaLocation(schemaLocation) {
    const tokens = schemaLocation.trim().split(/\s+/);
    for (let i = 0; i + 1 < tokens.length; i += 2) {
      const nsURI = tokens[i];
      const location = tokens[i + 1];
      this.urisToLocations.set(nsURI, URI.createURI(location));
    }
  }
  /**
   * Record header information
   */
  recordHeaderInformation() {
  }
  /**
   * Create top-level object
   */
  createTopObject(prefix, localName) {
    const eFactory = this.getFactoryForPrefix(prefix);
    if (!eFactory) {
      this.error(`Package not found for prefix '${prefix}'`);
      this.processObject(null);
      return;
    }
    const eType = this.getXSIType();
    let eObject = null;
    if (eType) {
      eObject = this.createObjectByType(prefix, eType, true);
    } else {
      const type = this.helper.getType(eFactory, localName);
      if (type) {
        eObject = this.helper.createObject(eFactory, type);
      }
    }
    if (eObject) {
      this.processTopObject(eObject);
      this.handleObjectAttribs(eObject);
    } else {
      this.error(`Cannot create object for '${localName}'`);
      this.processObject(null);
    }
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    if (!this.attribs)
      return null;
    return this.attribs.getValueByName(XSI_URI, TYPE_ATTRIB);
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(prefix, typeName, isTopObject) {
    let typePrefix = prefix;
    let localType = typeName;
    const colonIndex = typeName.indexOf(":");
    if (colonIndex !== -1) {
      typePrefix = typeName.substring(0, colonIndex);
      localType = typeName.substring(colonIndex + 1);
    }
    const eFactory = this.getFactoryForPrefix(typePrefix);
    if (!eFactory) {
      this.error(`Factory not found for type '${typeName}'`);
      return null;
    }
    const type = this.helper.getType(eFactory, localType);
    if (!type) {
      this.error(`Type '${localType}' not found`);
      return null;
    }
    return this.helper.createObject(eFactory, type);
  }
  /**
   * Process top-level object
   */
  processTopObject(object) {
    if (object) {
      if (this.deferredExtent !== null) {
        this.deferredExtent.push(object);
      } else {
        this.extent.push(object);
      }
    }
    this.processObject(object);
  }
  /**
   * Push object onto stack
   */
  processObject(object) {
    this.objects.push(object);
    this.types.push(object ? OBJECT_TYPE : ERROR_TYPE);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(obj) {
    if (!this.attribs)
      return;
    for (let i = 0; i < this.attribs.getLength(); i++) {
      const qName = this.attribs.getQName(i);
      const value = this.attribs.getValue(i);
      const uri = this.attribs.getURI(i);
      const localName = this.attribs.getLocalName(i);
      if (qName.startsWith(XML_NS))
        continue;
      if (uri === XSI_URI)
        continue;
      if (uri === XMI_URI) {
        if (localName === ID_ATTRIB) {
          this.handleId(obj, value);
        }
        continue;
      }
      this.setAttribValue(obj, localName || qName, value, uri || null);
    }
  }
  /**
   * Handle ID attribute
   */
  handleId(obj, id) {
  }
  /**
   * Set attribute value on object
   */
  setAttribValue(obj, name, value, namespaceURI) {
    const eClass = obj.eClass();
    const feature = this.helper.getFeature(eClass, namespaceURI ?? null, name);
    if (feature) {
      this.setFeatureValue(obj, feature, value, -2);
    }
  }
  /**
   * Handle feature (nested element)
   */
  handleFeature(prefix, localName) {
    const peekObject = this.objects[this.objects.length - 1];
    if (!peekObject) {
      if (this.deferredParent && this.deferredFeature) {
        this.handleDeferredType(prefix, localName);
        return;
      }
      this.objects.push(null);
      this.types.push(ERROR_TYPE);
      this.error(`Feature '${localName}' has no parent object`);
      return;
    }
    const eClass = peekObject.eClass();
    const namespaceURI = prefix ? this.helper.getURI(prefix) || null : null;
    const feature = this.helper.getFeatureWithElement(eClass, namespaceURI, localName, true);
    if (feature) {
      const kind = this.helper.getFeatureKind(feature);
      if (kind === DATATYPE_SINGLE || kind === DATATYPE_IS_MANY) {
        this.objects.push(null);
        this.types.push(feature);
        if (!this.isNull()) {
          this.text = "";
        }
      } else {
        this.createObject(peekObject, feature);
      }
    } else {
      this.handleUnknownFeature(prefix, localName, peekObject);
    }
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    if (!this.attribs)
      return false;
    const nil = this.attribs.getValueByName(XSI_URI, NIL_ATTRIB);
    return nil === "true";
  }
  /**
   * Create child object for reference
   */
  createObject(parent, feature) {
    const href = this.attribs?.getValueByQName(HREF_ATTRIB) || this.attribs?.getValueByName("", HREF_ATTRIB);
    if (href) {
      this.setValueFromId(parent, feature, href, -1);
      this.objects.push(null);
      this.types.push(REFERENCE_TYPE);
      return;
    }
    const xsiType = this.getXSIType();
    let eObject = null;
    if (xsiType) {
      eObject = this.createObjectByType("", xsiType, false);
    } else {
      let eType = feature.getEType();
      if (eType && !("getESuperTypes" in eType) && typeof eType.eIsProxy === "function" && eType.eIsProxy()) {
        const proxyURI = eType.eProxyURI();
        if (proxyURI) {
          const uriStr = proxyURI.toString();
          const hashIndex = uriStr.indexOf("#");
          if (hashIndex > 0) {
            const nsURI = uriStr.substring(0, hashIndex);
            const fragment = uriStr.substring(hashIndex + 1);
            const pkg = this.packageRegistry.getEPackage(nsURI);
            if (pkg) {
              const resolved = resolveClassifierInPackage(pkg, fragment);
              if (resolved) {
                eType = resolved;
                if (typeof feature.setEType === "function") {
                  feature.setEType(resolved);
                }
              }
            }
          }
        }
      }
      if (eType && "getESuperTypes" in eType) {
        const eClass = eType;
        if (!eClass.isAbstract()) {
          const eFactory = eClass.getEPackage()?.getEFactoryInstance();
          if (eFactory) {
            eObject = eFactory.create(eClass);
          }
        } else {
          this.deferredParent = parent;
          this.deferredFeature = feature;
          this.objects.push(null);
          this.types.push(DEFERRED_TYPE);
          return;
        }
      }
    }
    if (eObject) {
      this.helper.setValue(parent, feature, eObject, -1);
      this.handleObjectAttribs(eObject);
    }
    this.processObject(eObject);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(prefix, name, parent) {
    const nsURI = prefix ? this.helper.getURI(prefix) || null : null;
    const emd = this.helper.getExtendedMetaData();
    if (emd && nsURI) {
      const eClass = parent.eClass();
      const feature = emd.getElementFeature(eClass, nsURI, name);
      if (feature) {
        const kind = this.helper.getFeatureKind(feature);
        if (kind === DATATYPE_SINGLE || kind === DATATYPE_IS_MANY) {
          this.objects.push(null);
          this.types.push(feature);
          if (!this.isNull()) {
            this.text = "";
          }
        } else {
          this.createObject(parent, feature);
        }
        return;
      }
    }
    if (nsURI) {
      const pkg = this.packageRegistry.getEPackage(nsURI);
      if (pkg) {
        const classifier = pkg.getEClassifier(name);
        if (classifier && "getESuperTypes" in classifier) {
          const eClass = classifier;
          const parentClass = parent.eClass();
          if (eClass === parentClass) {
            this.handleObjectAttribs(parent);
            this.objects.push(parent);
            this.types.push(OBJECT_TYPE);
            return;
          }
          if (parentClass.isSuperTypeOf(eClass) && !eClass.isAbstract()) {
            const eFactory = eClass.getEPackage()?.getEFactoryInstance();
            if (eFactory) {
              const concreteObject = eFactory.create(eClass);
              for (const f of parentClass.getEAllStructuralFeatures()) {
                if (f.isTransient() || f.isDerived())
                  continue;
                const v = parent.eGet(f);
                if (v !== null && v !== void 0) {
                  try {
                    concreteObject.eSet(f, v);
                  } catch {
                  }
                }
              }
              this.replaceInParentContainment(parent, concreteObject);
              const parentIndex = this.objects.length - 1;
              this.objects[parentIndex] = concreteObject;
              this.handleObjectAttribs(concreteObject);
              this.objects.push(concreteObject);
              this.types.push(OBJECT_TYPE);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null);
    this.types.push(ERROR_TYPE);
    this.error(`Unknown feature '${name}' for type '${parent.eClass().getName()}'`);
  }
  /**
   * Replace an object in the grandparent's containment reference.
   */
  replaceInParentContainment(oldObj, newObj) {
    const parentIndex = this.objects.length - 1;
    if (parentIndex < 1)
      return;
    const grandParent = this.objects[parentIndex - 1];
    if (!grandParent)
      return;
    const gpClass = grandParent.eClass();
    for (const feature of gpClass.getEAllStructuralFeatures()) {
      if (!("isContainment" in feature))
        continue;
      const ref = feature;
      if (!ref.isContainment())
        continue;
      if (ref.isMany()) {
        const list = grandParent.eGet(ref);
        if (list) {
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] === oldObj) {
              list[i] = newObj;
              return;
            }
          }
        }
      } else {
        if (grandParent.eGet(ref) === oldObj) {
          grandParent.eSet(ref, newObj);
          return;
        }
      }
    }
  }
  /**
   * Handle deferred type resolution (RDF/XML wrapping pattern).
   * When a containment feature has an abstract type, the inner element
   * specifies the concrete type to instantiate.
   */
  handleDeferredType(prefix, localName) {
    const parent = this.deferredParent;
    const feature = this.deferredFeature;
    this.deferredParent = null;
    this.deferredFeature = null;
    const nsURI = prefix ? this.helper.getURI(prefix) || null : null;
    let eObject = null;
    if (nsURI) {
      const pkg = this.packageRegistry.getEPackage(nsURI);
      if (pkg) {
        const classifier = pkg.getEClassifier(localName);
        if (classifier && "getESuperTypes" in classifier) {
          const eClass = classifier;
          if (!eClass.isAbstract()) {
            const eFactory = eClass.getEPackage()?.getEFactoryInstance();
            if (eFactory) {
              eObject = eFactory.create(eClass);
            }
          }
        }
      }
    }
    if (eObject) {
      this.helper.setValue(parent, feature, eObject, -1);
      this.handleObjectAttribs(eObject);
      this.objects[this.objects.length - 1] = eObject;
      this.types[this.types.length - 1] = OBJECT_TYPE;
      this.objects.push(eObject);
      this.types.push(OBJECT_TYPE);
    } else {
      this.objects.push(null);
      this.types.push(ERROR_TYPE);
      this.error(`Cannot resolve type '${localName}' for deferred containment`);
    }
  }
  /**
   * Set feature value
   */
  setFeatureValue(eObject, feature, value, position = -1) {
    if (value === null || value === void 0)
      return;
    const isReference = "isContainment" in feature;
    if (!isReference) {
      const eType = feature.getEType();
      const dataType = eType;
      let eFactory = null;
      if (dataType && typeof dataType.getEPackage === "function") {
        eFactory = dataType.getEPackage()?.getEFactoryInstance() ?? null;
      } else if (dataType && typeof dataType.eGet === "function" && typeof dataType.eClass === "function") {
        const dtClass = dataType.eClass();
        if (dtClass) {
          const pkgFeature = dtClass.getEStructuralFeature?.("ePackage");
          if (pkgFeature) {
            const pkg = dataType.eGet(pkgFeature);
            if (pkg?.getEFactoryInstance) {
              eFactory = pkg.getEFactoryInstance();
            }
          }
        }
      }
      try {
        if (eFactory && dataType) {
          const convertedValue = eFactory.createFromString(dataType, value);
          this.helper.setValue(eObject, feature, convertedValue, position);
        } else {
          this.helper.setValue(eObject, feature, value, position);
        }
      } catch (e) {
        const reason = e instanceof Error ? e.message : String(e);
        this.error(`Invalid value for feature '${feature.getName()}': ${reason}`);
      }
    } else {
      if (feature.isMany()) {
        const ids = value.trim().split(/\s+/);
        for (const id of ids) {
          if (id) {
            this.setValueFromId(eObject, feature, id, -1);
          }
        }
      } else {
        this.setValueFromId(eObject, feature, value, position);
      }
    }
  }
  /**
   * Set reference value from ID
   */
  setValueFromId(eObject, feature, idValue, position = -1) {
    this.forwardSingleReferences.push({
      object: eObject,
      feature,
      value: idValue,
      position,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber
    });
  }
  /**
   * Handle forward references
   */
  handleForwardReferences() {
    for (const ref of this.forwardSingleReferences) {
      const resolved = this.resolveReference(ref.value);
      if (resolved) {
        this.helper.setValue(ref.object, ref.feature, resolved, ref.position);
      } else {
        console.warn(`[XMLHandler] Forward ref UNRESOLVED: '${ref.value}' on feature '${ref.feature?.getName?.()}'`);
        const proxy = this.createProxy(ref.feature, ref.value);
        if (proxy) {
          this.helper.setValue(ref.object, ref.feature, proxy, ref.position);
        } else {
          this.error(`Unresolved reference '${ref.value}'`);
        }
      }
    }
    this.forwardSingleReferences = [];
  }
  /**
   * Creates a proxy for an unresolved reference.
   * The proxy will be resolved when accessed.
   */
  createProxy(feature, uriValue) {
    let proxyURI;
    const resourceURI = this.resource.getURI();
    const spaceIndex = uriValue.indexOf(" ");
    if (spaceIndex > 0) {
      uriValue = uriValue.substring(spaceIndex + 1);
    }
    const hashIndex = uriValue.indexOf("#");
    if (hashIndex > 0) {
      const baseUriStr = uriValue.substring(0, hashIndex);
      const fragment = uriValue.substring(hashIndex + 1);
      if (resourceURI && !baseUriStr.includes("://")) {
        const currentStr = resourceURI.toString();
        if (baseUriStr === currentStr || currentStr.endsWith(baseUriStr) || currentStr.endsWith("/" + baseUriStr)) {
          proxyURI = URI.createURI(currentStr + "#" + fragment);
        } else {
          const resolved = URI.createURI(baseUriStr).resolve(resourceURI);
          proxyURI = URI.createURI(resolved.toString() + "#" + fragment);
        }
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else if (hashIndex === 0) {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + uriValue);
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else if (uriValue.startsWith("/")) {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    } else {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    }
    const eType = feature.getEType();
    const eClass = eType && "getESuperTypes" in eType ? eType : null;
    const proxy = new EProxyImpl(proxyURI, eClass || void 0);
    proxy.eSetResource(this.resource);
    return proxy;
  }
  /**
   * Resolve a reference string.
   * Supports:
   * - Fragment references: #//EString or //EString
   * - External URIs: http://www.eclipse.org/emf/2002/Ecore#//EString
   * - Typed references: ecore:EClass audiogram.ecore#//HIMSAAudiometricStandardType
   * - Local IDs: someId
   */
  resolveReference(ref) {
    const spaceIndex = ref.indexOf(" ");
    if (spaceIndex > 0) {
      ref = ref.substring(spaceIndex + 1);
    }
    const hashIndex = ref.indexOf("#");
    if (hashIndex > 0) {
      const baseURI = ref.substring(0, hashIndex);
      const fragment = ref.substring(hashIndex + 1);
      const currentURI = this.resource.getURI();
      const currentStr = currentURI?.toString();
      if (currentStr && (currentStr === baseURI || currentStr.endsWith(baseURI) || currentStr.endsWith("/" + baseURI) || baseURI.endsWith(currentStr))) {
        return this.resource.getEObject(fragment);
      }
      const ePackage = this.packageRegistry.getEPackage(baseURI);
      if (ePackage) {
        return this.resolveFragmentInPackage(ePackage, fragment);
      }
      const contents = this.resource.getContents();
      for (let i = 0; i < contents.length; i++) {
        const root = contents.get(i);
        if (root && typeof root.getNsURI === "function") {
          const rootPkg = root;
          if (rootPkg.getNsURI() === baseURI) {
            return this.resolveFragmentInPackage(rootPkg, fragment);
          }
        }
      }
      const resourceSet = this.resource.getResourceSet();
      if (resourceSet) {
        const uri = URI.createURI(baseURI);
        const externalResource = resourceSet.getResource(uri, true);
        if (externalResource) {
          return externalResource.getEObject(fragment);
        }
      }
      return null;
    }
    if (ref.startsWith("#")) {
      return this.resource.getEObject(ref.substring(1));
    }
    if (ref.startsWith("/")) {
      return this.resource.getEObject(ref);
    }
    return this.resource.getEObject(ref);
  }
  /**
   * Resolve a fragment path within an EPackage.
   * Handles paths like //EString, //EClass, etc.
   */
  resolveFragmentInPackage(ePackage, fragment) {
    let path = fragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return ePackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(ePackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = ePackage;
      for (let i = 0; i < segments.length - 2; i++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j = 0; j < subPackages.length; j++) {
          if (subPackages.get(j).getName() === segments[i]) {
            found = subPackages.get(j);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  /**
   * Handle proxy reference
   */
  handleProxy(object, text) {
  }
  /**
   * Get factory for prefix
   */
  getFactoryForPrefix(prefix) {
    let factory = this.prefixesToFactories.get(prefix);
    if (factory) {
      return factory;
    }
    const nsURI = this.helper.getURI(prefix);
    if (nsURI) {
      const ePackage = this.packageRegistry.getEPackage(nsURI);
      if (ePackage) {
        factory = ePackage.getEFactoryInstance();
        if (factory) {
          this.prefixesToFactories.set(prefix, factory);
          return factory;
        }
      }
    }
    return null;
  }
  /**
   * Report error
   */
  error(message) {
    const error = new Error(`[Line ${this.lineNumber}, Col ${this.columnNumber}] ${message}`);
    this.errors.push(error);
    console.error(error.message);
  }
  /**
   * Get errors
   */
  getErrors() {
    return this.errors;
  }
}
class XMLLoad {
  constructor(helper) {
    this.helper = helper || new XMLHelperImpl();
  }
  /**
   * Load resource from string
   */
  load(resource, xmlString, options) {
    const opts = options || /* @__PURE__ */ new Map();
    const handler = this.makeDefaultHandler(resource, opts);
    const parser = sax.parser(true, {
      xmlns: true,
      position: true,
      trim: false
    });
    const attribs = new AttributesImpl();
    parser.onprocessinginstruction = (node) => {
      if (node.name === "xml") ;
    };
    parser.onopentag = (tag) => {
      attribs.clear();
      const qualifiedTag = tag;
      for (const [key, attr] of Object.entries(qualifiedTag.attributes)) {
        const qualifiedAttr = attr;
        const qName = qualifiedAttr.prefix ? `${qualifiedAttr.prefix}:${qualifiedAttr.local}` : qualifiedAttr.local;
        if (qualifiedAttr.prefix === "xmlns" || qualifiedAttr.name === "xmlns") {
          const prefix = qualifiedAttr.prefix === "xmlns" ? qualifiedAttr.local : "";
          handler.startPrefixMapping(prefix, qualifiedAttr.value);
        }
        attribs.add(qName, qualifiedAttr.local, qualifiedAttr.uri, qualifiedAttr.value);
      }
      handler.lineNumber = parser.line;
      handler.columnNumber = parser.column;
      handler.startElement(qualifiedTag.uri, qualifiedTag.local, qualifiedTag.name, attribs);
    };
    parser.onclosetag = (tagName) => {
      const colonIndex = tagName.indexOf(":");
      const localName = colonIndex >= 0 ? tagName.substring(colonIndex + 1) : tagName;
      handler.endElement("", localName, tagName);
    };
    parser.ontext = (text) => {
      if (text.trim()) {
        handler.characters(text);
      }
    };
    parser.oncdata = (cdata) => {
      handler.characters(cdata);
    };
    parser.onerror = (err) => {
      console.error("XML Parse Error:", err.message);
      handler.error(err.message);
    };
    parser.write(xmlString).close();
    handler.endDocument();
    const handlerErrors = handler.getErrors();
    if (handlerErrors.length > 0 && resource.getErrors) {
      const resourceErrors = resource.getErrors();
      for (const err of handlerErrors) {
        const match = err.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        if (match) {
          resourceErrors.push({
            message: match[3] || err.message,
            line: parseInt(match[1], 10),
            column: parseInt(match[2], 10)
          });
        } else {
          resourceErrors.push({ message: err.message });
        }
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(resource, options) {
    return new XMLHandler(resource, this.helper, options);
  }
}
class XMILoad extends XMLLoad {
  constructor(helper) {
    super(helper || new XMIHelperImpl());
  }
  makeDefaultHandler(resource, options) {
    return new XMIHandler(resource, this.helper, options);
  }
}
class XMIHelperImpl extends XMLHelperImpl {
}
class XMIHandler extends XMLHandler {
  constructor(resource, helper, options) {
    super(resource, helper, options);
    this.xmiVersion = "2.0";
  }
  recordHeaderInformation() {
    if (this.attribs) {
      const version = this.attribs.getValueByQName("xmi:version");
      if (version) {
        this.xmiVersion = version;
      }
    }
  }
  getXSIType() {
    let type = super.getXSIType();
    if (!type && this.attribs) {
      type = this.attribs.getValueByQName("xmi:type");
    }
    return type;
  }
  handleId(obj, id) {
    if (this.resource && "setID" in this.resource) {
      this.resource.setID(obj, id);
    }
  }
}
function isEClass(classifier) {
  return classifier !== null && classifier !== void 0 && typeof classifier.getESuperTypes === "function" && typeof classifier.getEAllStructuralFeatures === "function";
}
function isEEnum(classifier) {
  return classifier !== null && classifier !== void 0 && typeof classifier.getELiterals === "function" && typeof classifier.getEEnumLiteral === "function";
}
class XMLSave {
  constructor(helper) {
    this.declaredNamespaces = /* @__PURE__ */ new Map();
    this.output = [];
    this.indent = 0;
    this.indentString = "  ";
    this.idAttributeName = "id";
    this.helper = helper || new XMLHelperImpl();
    this.resource = null;
  }
  /**
   * Save resource to string
   */
  save(resource, options) {
    return this.saveObjects(resource, resource.getContents(), options);
  }
  /**
   * Save a specific set of objects using the given resource for reference resolution.
   */
  saveObjects(resource, objects, options) {
    this.resource = resource;
    this.output = [];
    this.declaredNamespaces.clear();
    this.indent = 0;
    if (options) {
      this.helper.setOptions(options);
    }
    this.output.push('<?xml version="1.0" encoding="UTF-8"?>\n');
    const objectArray = Array.isArray(objects) ? objects : [...objects];
    if (objectArray.length > 1) {
      this.saveMultipleRoots(objectArray);
    } else {
      for (const root of objectArray) {
        this.saveObject(root, true);
      }
    }
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(contents) {
    const allPackages = /* @__PURE__ */ new Set();
    for (const root of contents) {
      for (const pkg of this.collectPackages(root)) {
        allPackages.add(pkg);
      }
    }
    this.output.push(`<xmi:XMI`);
    this.output.push(` xmlns:xmi="${XMI_URI}"`);
    this.output.push(` xmi:version="2.0"`);
    this.output.push(` xmlns:xsi="${XSI_URI}"`);
    const writtenPrefixes = /* @__PURE__ */ new Set();
    for (const pkg of allPackages) {
      const nsURI = pkg.getNsURI();
      const prefix = this.getPrefix(pkg);
      if (nsURI && prefix && !writtenPrefixes.has(prefix)) {
        this.output.push(` xmlns:${prefix}="${nsURI}"`);
        this.declaredNamespaces.set(nsURI, prefix);
        writtenPrefixes.add(prefix);
      }
    }
    this.output.push(">\n");
    this.indent++;
    for (const root of contents) {
      this.saveObject(root, false);
    }
    this.indent--;
    this.output.push("</xmi:XMI>\n");
  }
  /**
   * Save a single object
   */
  saveObject(obj, isRoot) {
    const eClass = obj.eClass();
    const ePackage = eClass.getEPackage();
    const prefix = ePackage ? this.getPrefix(ePackage) : "";
    const localName = eClass.getName() || "Object";
    const qName = prefix ? `${prefix}:${localName}` : localName;
    this.writeIndent();
    this.output.push(`<${qName}`);
    if (isRoot) {
      this.writeNamespaces(obj);
    }
    if (!isRoot) {
      this.writeTypeAttribute(obj);
    }
    this.saveID(obj);
    this.writeAttributes(obj);
    const emd = this.helper.getExtendedMetaData();
    const simpleText = this.getSimpleContentText(obj, emd);
    const hasContent = this.hasElementContent(obj);
    if (simpleText !== null) {
      this.output.push(`>${this.escapeXml(simpleText)}`);
      if (hasContent) {
        this.output.push("\n");
        this.indent++;
        this.writeElements(obj);
        this.indent--;
        this.writeIndent();
      }
      this.output.push(`</${qName}>
`);
    } else if (hasContent) {
      this.output.push(">\n");
      this.indent++;
      this.writeElements(obj);
      this.indent--;
      this.writeIndent();
      this.output.push(`</${qName}>
`);
    } else {
      this.output.push("/>\n");
    }
  }
  /**
   * Write xmi:id attribute if the resource tracks an ID for this object
   */
  saveID(obj) {
    const id = this.helper.getID(obj);
    if (id) {
      this.output.push(` ${this.idAttributeName}="${this.escapeXml(id)}"`);
    }
  }
  /**
   * Write namespace declarations
   */
  writeNamespaces(obj) {
    const packages = this.collectPackages(obj);
    this.output.push(` xmlns:xmi="${XMI_URI}"`);
    this.output.push(` xmi:version="2.0"`);
    this.output.push(` xmlns:xsi="${XSI_URI}"`);
    const writtenPrefixes = /* @__PURE__ */ new Set();
    for (const pkg of packages) {
      const nsURI = pkg.getNsURI();
      const prefix = this.getPrefix(pkg);
      if (nsURI && prefix && !writtenPrefixes.has(prefix)) {
        this.output.push(` xmlns:${prefix}="${nsURI}"`);
        this.declaredNamespaces.set(nsURI, prefix);
        writtenPrefixes.add(prefix);
      }
    }
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      this.collectEMDNamespaces(obj, emd, writtenPrefixes);
    }
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(obj, emd, writtenPrefixes) {
    const collectFromObject = (o) => {
      const eClass = o.eClass();
      for (const feature of eClass.getEAllStructuralFeatures()) {
        const ns = emd.getNamespace(feature);
        if (ns && !this.declaredNamespaces.has(ns) && ns !== "http://www.w3.org/XML/1998/namespace") {
          const prefix = this.generatePrefix(ns, writtenPrefixes);
          if (prefix) {
            this.output.push(` xmlns:${prefix}="${ns}"`);
            this.declaredNamespaces.set(ns, prefix);
            writtenPrefixes.add(prefix);
          }
        }
      }
      for (const content of o.eContents()) {
        collectFromObject(content);
      }
    };
    collectFromObject(obj);
  }
  /**
   * Generate a namespace prefix for a URI.
   */
  generatePrefix(nsURI, usedPrefixes) {
    const lastSlash = nsURI.lastIndexOf("/");
    let candidate = lastSlash >= 0 ? nsURI.substring(lastSlash + 1) : nsURI;
    candidate = candidate.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (!candidate)
      candidate = "ns";
    if (candidate.length > 10)
      candidate = candidate.substring(0, 10);
    if (!usedPrefixes.has(candidate))
      return candidate;
    for (let i = 1; i < 100; i++) {
      const prefixed = `${candidate}${i}`;
      if (!usedPrefixes.has(prefixed))
        return prefixed;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(obj) {
    const packages = /* @__PURE__ */ new Set();
    const collectFromObject = (o) => {
      const eClass = o.eClass();
      const pkg = eClass.getEPackage();
      if (pkg) {
        packages.add(pkg);
      }
      for (const content of o.eContents()) {
        collectFromObject(content);
      }
    };
    collectFromObject(obj);
    return packages;
  }
  /**
   * Get prefix for package
   */
  getPrefix(pkg) {
    return pkg.getNsPrefix() || pkg.getName() || "ns";
  }
  /**
   * Write xsi:type attribute if needed
   */
  writeTypeAttribute(obj) {
  }
  /**
   * Write attribute values and non-containment references
   */
  writeAttributes(obj) {
    const eClass = obj.eClass();
    const emd = this.helper.getExtendedMetaData();
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if (feature.isTransient() || feature.isDerived())
        continue;
      if (emd) {
        const emdName = emd.getName(feature);
        if (emdName === ":0")
          continue;
      }
      if (this.isAttribute(feature)) {
        if (emd && emd.getFeatureKind(feature) === ELEMENT_FEATURE)
          continue;
        const attr = feature;
        let value = obj.eGet(attr);
        if (value !== null && value !== void 0) {
          value = this.resolveValue(value, obj);
          if (value !== null && value !== void 0) {
            let defaultValue = null;
            try {
              defaultValue = attr.getDefaultValue();
            } catch {
            }
            if (value !== defaultValue) {
              const stringValue = this.convertToString(attr, value);
              const attrName = this.getSerializedAttributeName(attr, emd);
              this.output.push(` ${attrName}="${this.escapeXml(stringValue)}"`);
            }
          }
        }
      } else if ("isContainment" in feature) {
        const ref = feature;
        if (!ref.isContainment()) {
          let value = obj.eGet(ref);
          if (value !== null && value !== void 0) {
            const serializedRefName = this.helper.getSerializedFeatureName(ref);
            if (!feature.isMany()) {
              value = this.resolveValue(value, obj);
              if (value !== null && value !== void 0) {
                if (typeof value === "string") {
                  this.output.push(` ${serializedRefName}="${this.escapeXml(value)}"`);
                } else if (typeof value === "boolean") {
                  this.output.push(` ${serializedRefName}="${value ? "true" : "false"}"`);
                } else if (typeof value === "number") {
                  this.output.push(` ${serializedRefName}="${String(value)}"`);
                } else {
                  const href = this.getTypePrefixedHref(ref, value);
                  if (href) {
                    this.output.push(` ${serializedRefName}="${this.escapeXml(href)}"`);
                  }
                }
              }
            } else if (Array.isArray(value) || isEList(value)) {
              const sameDocHrefs = [];
              for (const refObj of value) {
                const resolved = this.resolveValue(refObj, obj);
                if (resolved === null || resolved === void 0)
                  continue;
                if (typeof resolved === "string")
                  continue;
                const refResource = resolved.eResource?.();
                if (refResource && refResource === this.resource) {
                  const href = this.getHref(resolved);
                  if (href)
                    sameDocHrefs.push(href);
                }
              }
              if (sameDocHrefs.length > 0) {
                this.output.push(` ${serializedRefName}="${this.escapeXml(sameDocHrefs.join(" "))}"`);
              }
            }
          }
        }
      }
    }
  }
  /**
   * Get href for cross-reference
   */
  getHref(obj) {
    if (isInternalEObject(obj) && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI();
      if (!proxyURI)
        return null;
      return this.helper.deresolve(proxyURI).toString();
    }
    const intraFragment = this.getIntraResourceFragment(obj);
    if (intraFragment) {
      return intraFragment;
    }
    const resource = obj.eResource?.();
    if (resource) {
      const fragment = resource.getURIFragment(obj);
      if (fragment) {
        if (resource === this.resource) {
          return fragment;
        }
        const uri = resource.getURI();
        if (uri) {
          return `${uri.toString()}#${fragment}`;
        }
        return `#${fragment}`;
      }
    }
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (containingClass) {
        const pkg = containingClass.getEPackage?.();
        const className = containingClass.getName?.();
        const featureName = obj.getName?.();
        if (pkg && className && featureName) {
          const nsURI = pkg.getNsURI?.();
          if (nsURI) {
            return `${nsURI}#//${className}/${featureName}`;
          }
        }
      }
    }
    if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const pkg = obj.getEPackage();
      if (pkg) {
        const nsURI = pkg.getNsURI?.();
        const name = obj.getName?.();
        if (nsURI && name) {
          return `${nsURI}#//${name}`;
        }
      }
    }
    if ("getName" in obj) {
      const name = obj.getName?.();
      if (name) {
        return `//${name}`;
      }
    }
    return null;
  }
  /**
   * For Ecore objects (EClassifier, EStructuralFeature) that lack eResource()
   * because the eContainer chain is not set, walk up the Ecore-specific
   * hierarchy (ePackage/eSuperPackage) to find the root package. If that root
   * is in this.resource, build a hierarchical fragment path like
   * "//service/base/Service" or "//service/base/Service/id".
   */
  getIntraResourceFragment(obj) {
    if (!this.resource)
      return null;
    const pathSegments = [];
    let pkg = null;
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (!containingClass)
        return null;
      const featureName = obj.getName?.();
      const className = containingClass.getName?.();
      if (!featureName || !className)
        return null;
      pathSegments.push(className, featureName);
      pkg = containingClass.getEPackage?.() ?? null;
    } else if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const name = obj.getName?.();
      if (!name)
        return null;
      pathSegments.push(name);
      pkg = obj.getEPackage();
    }
    if (!pkg)
      return null;
    while (pkg) {
      const superPkg = typeof pkg.getESuperPackage === "function" ? pkg.getESuperPackage() : null;
      if (!superPkg)
        break;
      const pkgName = pkg.getName?.();
      if (pkgName)
        pathSegments.unshift(pkgName);
      pkg = superPkg;
    }
    const contents = this.resource.getContents();
    for (const root of contents) {
      if (root === pkg) {
        return "#//" + pathSegments.join("/");
      }
    }
    return null;
  }
  /**
   * Get href with type prefix for cross-document references when the declared
   * type is abstract and differs from the actual type.
   * Java EMF format: "prefix:TypeName URI#fragment"
   */
  getTypePrefixedHref(ref, value) {
    const href = this.getHref(value);
    if (!href)
      return null;
    const valueResource = value.eResource?.();
    if (valueResource && valueResource === this.resource)
      return href;
    if (href.startsWith("/") || href.startsWith("#"))
      return href;
    const declaredType = ref.getEType();
    const actualType = value.eClass();
    if (declaredType && actualType && actualType !== declaredType && "isAbstract" in declaredType && declaredType.isAbstract()) {
      const actualPkg = actualType.getEPackage();
      if (actualPkg) {
        const prefix = this.getPrefix(actualPkg);
        const typeName = actualType.getName();
        if (prefix && typeName) {
          return `${prefix}:${typeName} ${href}`;
        }
      }
    }
    return href;
  }
  /**
   * Check if feature is an attribute (not a reference)
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
  /**
   * Check if object has element content (containments, multi-valued non-containment refs, or EMD element features)
   */
  hasElementContent(obj) {
    const eClass = obj.eClass();
    const features = eClass.getEAllStructuralFeatures();
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      for (const feature of features) {
        if (feature.isTransient() || feature.isDerived())
          continue;
        if (!this.isAttribute(feature))
          continue;
        if (emd.getFeatureKind(feature) !== ELEMENT_FEATURE)
          continue;
        const value = obj.eGet(feature);
        if (value !== null && value !== void 0)
          return true;
      }
    }
    for (const feature of features) {
      if ("isContainment" in feature) {
        const ref = feature;
        if (feature.isTransient())
          continue;
        const value = obj.eGet(ref);
        if (value === null || value === void 0)
          continue;
        if (ref.isContainment()) {
          if ((Array.isArray(value) || isEList(value)) && value.length > 0)
            return true;
          if (!Array.isArray(value) && !isEList(value))
            return true;
        } else if (feature.isMany() && (Array.isArray(value) || isEList(value)) && value.length > 0) {
          for (const refObj of value) {
            const refResource = refObj.eResource?.();
            if (!refResource || refResource !== this.resource) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  /**
   * Write element content (containments and multi-valued non-containment references)
   */
  writeElements(obj) {
    const eClass = obj.eClass();
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      for (const feature of eClass.getEAllStructuralFeatures()) {
        if (feature.isTransient() || feature.isDerived())
          continue;
        if (!this.isAttribute(feature))
          continue;
        const fKind = emd.getFeatureKind(feature);
        if (fKind !== ELEMENT_FEATURE)
          continue;
        const value = obj.eGet(feature);
        if (value === null || value === void 0)
          continue;
        const elemName = this.getSerializedElementName(feature, emd);
        const attr = feature;
        if (feature.isMany() && (Array.isArray(value) || isEList(value))) {
          for (const item of value) {
            if (item !== null && item !== void 0) {
              this.writeIndent();
              const strVal = this.convertSingleValueToString(attr, item);
              this.output.push(`<${elemName}>${this.escapeXml(strVal)}</${elemName}>
`);
            }
          }
        } else {
          this.writeIndent();
          const strVal = this.convertToString(attr, value);
          this.output.push(`<${elemName}>${this.escapeXml(strVal)}</${elemName}>
`);
        }
      }
    }
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if ("isContainment" in feature) {
        const ref = feature;
        if (feature.isTransient())
          continue;
        const value = obj.eGet(ref);
        if (value === null || value === void 0)
          continue;
        if (ref.isContainment()) {
          if (Array.isArray(value) || isEList(value)) {
            for (const child of value) {
              this.writeElement(ref, child);
            }
          } else {
            this.writeElement(ref, value);
          }
        } else if (feature.isMany() && (Array.isArray(value) || isEList(value)) && value.length > 0) {
          for (const refObj of value) {
            const resolved = this.resolveValue(refObj, obj);
            if (resolved === null || resolved === void 0)
              continue;
            const refResource = typeof resolved !== "string" ? resolved.eResource?.() : null;
            if (refResource && refResource === this.resource)
              continue;
            const href = typeof resolved === "string" ? resolved : this.getHref(resolved);
            if (href) {
              this.writeIndent();
              this.output.push(`<${this.helper.getSerializedFeatureName(ref)} href="${this.escapeXml(href)}"/>
`);
            }
          }
        }
      }
    }
  }
  /**
   * Write a single element
   */
  writeElement(feature, value) {
    const emd = this.helper.getExtendedMetaData();
    const featureName = this.getSerializedElementName(feature, emd) || "element";
    this.writeIndent();
    this.output.push(`<${featureName}`);
    const declaredType = feature.getEType();
    const actualType = value.eClass();
    if (declaredType && actualType && actualType !== declaredType) {
      const pkg = actualType.getEPackage();
      const prefix = pkg ? this.getPrefix(pkg) : "";
      const typeName = prefix ? `${prefix}:${actualType.getName()}` : actualType.getName();
      this.output.push(` xsi:type="${typeName}"`);
    }
    this.saveID(value);
    this.writeAttributes(value);
    const simpleText = this.getSimpleContentText(value, emd);
    const hasContent = this.hasElementContent(value);
    if (simpleText !== null) {
      this.output.push(`>${this.escapeXml(simpleText)}`);
      if (hasContent) {
        this.output.push("\n");
        this.indent++;
        this.writeElements(value);
        this.indent--;
        this.writeIndent();
      }
      this.output.push(`</${featureName}>
`);
    } else if (hasContent) {
      this.output.push(">\n");
      this.indent++;
      this.writeElements(value);
      this.indent--;
      this.writeIndent();
      this.output.push(`</${featureName}>
`);
    } else {
      this.output.push("/>\n");
    }
  }
  /**
   * Resolve a value if it's a proxy.
   * Returns the resolved value or the original value if not a proxy or cannot be resolved.
   */
  resolveValue(value, owner) {
    if (value === null || value === void 0) {
      return value;
    }
    if (isInternalEObject(value) && value.eIsProxy()) {
      if ("eResolveProxy" in owner && typeof owner.eResolveProxy === "function") {
        const resolved = owner.eResolveProxy(value);
        if (resolved !== value && !(isInternalEObject(resolved) && resolved.eIsProxy())) {
          return resolved;
        }
      }
      const proxyURI = value.eProxyURI();
      if (proxyURI && this.resource) {
        const resourceSet = this.resource.getResourceSet();
        if (resourceSet) {
          const uriStr = proxyURI.toString();
          const hashIndex = uriStr.indexOf("#");
          if (hashIndex >= 0) {
            const fragment = uriStr.substring(hashIndex + 1);
            let targetResource = this.resource;
            if (hashIndex > 0) {
              const resourceURI = URI.createURI(uriStr.substring(0, hashIndex));
              targetResource = resourceSet.getResource(resourceURI, true) || this.resource;
            }
            if (targetResource) {
              const resolved = targetResource.getEObject(fragment);
              if (resolved) {
                return resolved;
              }
            }
          }
        }
      }
      return proxyURI?.toString() || null;
    }
    return value;
  }
  /**
   * Convert value to string
   */
  convertToString(attr, value) {
    if (value === null || value === void 0)
      return "";
    if (Array.isArray(value) || isEList(value)) {
      const items = [];
      for (const item of value) {
        if (item !== null && item !== void 0) {
          items.push(this.convertSingleValueToString(attr, item));
        }
      }
      return items.join(" ");
    }
    if (isEEnum(attr.getEType())) {
      return this.convertSingleValueToString(attr, value);
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    if (typeof value === "number") {
      return String(value);
    }
    if (value && typeof value === "object" && "eClass" in value) {
      if ("getName" in value && typeof value.getName === "function") {
        return value.getName() || "";
      }
      return "";
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Convert a single value to string (helper for arrays)
   */
  convertSingleValueToString(attr, value) {
    if (value === null || value === void 0)
      return "";
    const isEnum = isEEnum(attr.getEType());
    if (!isEnum) {
      if (typeof value === "string")
        return value;
      if (typeof value === "boolean")
        return value ? "true" : "false";
      if (typeof value === "number")
        return String(value);
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Get the text content for a simple-content class, or null if not applicable.
   */
  getSimpleContentText(obj, emd) {
    if (!emd)
      return null;
    const eClass = obj.eClass();
    if (emd.getContentKind(eClass) !== SIMPLE_CONTENT)
      return null;
    const simpleFeature = emd.getSimpleContentFeature(eClass);
    if (!simpleFeature)
      return null;
    const value = obj.eGet(simpleFeature);
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string")
      return value;
    if (typeof value === "boolean")
      return value ? "true" : "false";
    if (typeof value === "number")
      return String(value);
    return String(value);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(feature, emd) {
    if (emd) {
      const ns = emd.getNamespace(feature);
      const name = emd.getName(feature) ?? feature.getName() ?? "";
      if (ns) {
        const prefix = this.getNamespacePrefix(ns);
        if (prefix) {
          return `${prefix}:${name}`;
        }
      }
      if (name && !name.startsWith(":")) {
        return name;
      }
    }
    return this.helper.getSerializedFeatureName(feature);
  }
  /**
   * Get the serialized element name, including namespace prefix if EMD specifies one.
   */
  getSerializedElementName(feature, emd) {
    if (emd) {
      const ns = emd.getNamespace(feature);
      const name = emd.getName(feature) ?? feature.getName() ?? "";
      if (ns) {
        const prefix = this.getNamespacePrefix(ns);
        if (prefix) {
          return `${prefix}:${name}`;
        }
      }
      if (name && !name.startsWith(":")) {
        return name;
      }
    }
    return this.helper.getSerializedFeatureName(feature);
  }
  /**
   * Get or create a namespace prefix for the given URI.
   */
  getNamespacePrefix(nsURI) {
    const existing = this.declaredNamespaces.get(nsURI);
    if (existing)
      return existing;
    if (nsURI === "http://www.w3.org/XML/1998/namespace")
      return "xml";
    return null;
  }
  /**
   * Escape XML special characters
   */
  escapeXml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /**
   * Write indentation
   */
  writeIndent() {
    for (let i = 0; i < this.indent; i++) {
      this.output.push(this.indentString);
    }
  }
}
class XMISave extends XMLSave {
  constructor(helper) {
    super(helper);
    this.idAttributeName = "xmi:id";
  }
  writeNamespaces(obj) {
    super.writeNamespaces(obj);
  }
}
class XMLResource extends BasicResource {
  constructor(uri) {
    super(uri);
    this.idToEObjectMap = /* @__PURE__ */ new Map();
    this.eObjectToIDMap = /* @__PURE__ */ new Map();
    this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new XMLHelperImpl(this);
  }
  /**
   * Get EObject by ID
   */
  getEObject(uriFragment) {
    const byId = this.idToEObjectMap.get(uriFragment);
    if (byId) {
      return byId;
    }
    return super.getEObject(uriFragment);
  }
  /**
   * Get URI fragment for an object
   */
  getURIFragment(eObject) {
    const id = this.eObjectToIDMap.get(eObject);
    if (id) {
      return id;
    }
    return super.getURIFragment(eObject);
  }
  /**
   * Set ID for an object
   */
  setID(eObject, id) {
    if (id) {
      this.idToEObjectMap.set(id, eObject);
      this.eObjectToIDMap.set(eObject, id);
    }
  }
  /**
   * Get ID for an object
   */
  getID(eObject) {
    return this.eObjectToIDMap.get(eObject) ?? null;
  }
  /**
   * Clear ID maps
   */
  clearIdMaps() {
    this.idToEObjectMap.clear();
    this.eObjectToIDMap.clear();
  }
  /**
   * Load resource using URIConverter if available, otherwise no-op.
   * For direct string loading, use loadFromString().
   */
  async load(options) {
    const rs = this.getResourceSet();
    const converter = rs?.getURIConverter();
    const uri = this.getURI();
    if (converter && uri) {
      try {
        const stream = await converter.createInputStream(uri);
        const content = await streamToString(stream);
        this.loadFromString(content, options);
      } catch (err) {
        this.loaded = true;
      }
    } else {
      this.loaded = true;
    }
  }
  /**
   * Load from XML string
   */
  loadFromString(xmlString, options) {
    this.clearIdMaps();
    const opts = options || /* @__PURE__ */ new Map();
    const loader = this.createXMLLoad();
    loader.load(this, xmlString, opts);
    this.loaded = true;
  }
  /**
   * Create the XML loader
   */
  createXMLLoad() {
    return new XMLLoad(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new XMLSave(this.xmlHelper);
  }
  /**
   * Save to XML string
   */
  saveToString(options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createXMLSave();
    return saver.save(this, opts);
  }
  /**
   * Save a subset of objects to XML string.
   * Uses this resource's context (IDs, reference resolution) but only
   * serializes the given objects as root elements.
   */
  saveContents(objects, options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createXMLSave();
    return saver.saveObjects(this, objects, opts);
  }
  /**
   * Unload resource
   */
  unload() {
    super.unload();
    this.clearIdMaps();
  }
}
class XMIResource extends XMLResource {
  createXMLLoad() {
    return new XMILoad(this.xmlHelper);
  }
  createXMLSave() {
    return new XMISave(this.xmlHelper);
  }
}
async function streamToString(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode();
  return result;
}
class XMLResourceFactory {
  createResource(uri) {
    return new XMLResource(uri);
  }
}
class XMIResourceFactory {
  createResource(uri) {
    return new XMIResource(uri);
  }
}
const extensionMap$1 = Resource.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
if (!extensionMap$1.has("xml")) {
  extensionMap$1.set("xml", new XMLResourceFactory());
}
if (!extensionMap$1.has("xmi")) {
  extensionMap$1.set("xmi", new XMIResourceFactory());
}
if (!extensionMap$1.has("ecore")) {
  extensionMap$1.set("ecore", new XMIResourceFactory());
}
class JSONLoad {
  constructor() {
    this.forwardReferences = [];
    this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(resource, jsonString, options) {
    this.resource = resource;
    this.packageRegistry = resource.getResourceSet()?.getPackageRegistry() || EPackageRegistry.INSTANCE;
    this.forwardReferences = [];
    this.errors = [];
    let json;
    try {
      json = JSON.parse(jsonString);
    } catch (e) {
      this.error(`Invalid JSON: ${e instanceof Error ? e.message : String(e)}`);
      return;
    }
    if (Array.isArray(json)) {
      for (const item of json) {
        const obj = this.loadObject(item);
        if (obj) {
          resource.getContents().push(obj);
        }
      }
    } else if (json && typeof json === "object") {
      const obj = this.loadObject(json);
      if (obj) {
        resource.getContents().push(obj);
      }
    }
    this.handleForwardReferences();
  }
  /**
   * Load a single JSON object into an EObject.
   */
  loadObject(json, expectedType) {
    const eClass = this.resolveEClass(json, expectedType);
    if (!eClass) {
      this.error(`Cannot determine type for object: ${JSON.stringify(json).substring(0, 100)}`);
      return null;
    }
    const pkg = eClass.getEPackage();
    if (!pkg) {
      this.error(`No package for class '${eClass.getName()}'`);
      return null;
    }
    const factory = pkg.getEFactoryInstance();
    const obj = factory.create(eClass);
    for (const [key, value] of Object.entries(json)) {
      if (key === "eClass")
        continue;
      if (value === null || value === void 0)
        continue;
      const feature = eClass.getEStructuralFeature(key);
      if (!feature) {
        this.error(`Unknown feature '${key}' for type '${eClass.getName()}'`);
        continue;
      }
      if (this.isAttribute(feature)) {
        this.loadAttribute(obj, feature, value);
      } else {
        const ref = feature;
        if (ref.isContainment()) {
          this.loadContainment(obj, ref, value);
        } else {
          this.loadCrossReference(obj, ref, value);
        }
      }
    }
    return obj;
  }
  /**
   * Resolve the EClass for a JSON object.
   * Uses `eClass` property if present, otherwise falls back to expectedType.
   */
  resolveEClass(json, expectedType) {
    const eClassURI = json["eClass"];
    if (eClassURI) {
      return this.resolveType(eClassURI);
    }
    return expectedType || null;
  }
  /**
   * Resolve an eClass type URI (`nsURI#//ClassName`) to an EClass.
   */
  resolveType(eClassURI) {
    const hashIndex = eClassURI.indexOf("#");
    if (hashIndex < 0) {
      this.error(`Invalid eClass URI (no '#'): ${eClassURI}`);
      return null;
    }
    const nsURI = eClassURI.substring(0, hashIndex);
    let fragment = eClassURI.substring(hashIndex + 1);
    while (fragment.startsWith("/")) {
      fragment = fragment.substring(1);
    }
    const pkg = this.packageRegistry.getEPackage(nsURI);
    if (!pkg) {
      this.error(`Package not found for nsURI: ${nsURI}`);
      return null;
    }
    const classifier = pkg.getEClassifier(fragment);
    if (!classifier) {
      this.error(`Classifier '${fragment}' not found in package '${nsURI}'`);
      return null;
    }
    if (!("getESuperTypes" in classifier)) {
      this.error(`'${fragment}' is not an EClass`);
      return null;
    }
    return classifier;
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(obj, attr, value) {
    if (attr.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      const list = obj.eGet(attr);
      if (list && (Array.isArray(list) || isEList(list))) {
        for (const item of items) {
          list.push(this.convertAttributeValue(attr, item));
        }
      } else {
        obj.eSet(attr, items.map((v) => this.convertAttributeValue(attr, v)));
      }
    } else {
      obj.eSet(attr, this.convertAttributeValue(attr, value));
    }
  }
  /**
   * Convert a JSON value to the appropriate attribute type using EFactory.createFromString.
   */
  convertAttributeValue(attr, value) {
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (typeof value === "string") {
        const eType = attr.getEType();
        if (eType && "getEPackage" in eType) {
          const pkg = eType.getEPackage();
          if (pkg) {
            const factory = pkg.getEFactoryInstance();
            if (factory) {
              try {
                return factory.createFromString(eType, value);
              } catch {
              }
            }
          }
        }
      }
      return value;
    }
    return value;
  }
  /**
   * Load a containment reference value (nested objects).
   */
  loadContainment(obj, ref, value) {
    const expectedType = ref.getEType() && "getESuperTypes" in ref.getEType() ? ref.getEType() : void 0;
    if (ref.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      const list = obj.eGet(ref);
      for (const item of items) {
        if (item && typeof item === "object") {
          const child = this.loadObject(item, expectedType);
          if (child) {
            if (list && (Array.isArray(list) || isEList(list))) {
              list.push(child);
            }
          }
        }
      }
    } else {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const child = this.loadObject(value, expectedType);
        if (child) {
          obj.eSet(ref, child);
        }
      }
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(obj, ref, value) {
    if (ref.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      for (const item of items) {
        if (item && typeof item === "object" && "$ref" in item) {
          this.forwardReferences.push({
            object: obj,
            feature: ref,
            value: item["$ref"]
          });
        }
      }
    } else {
      if (value && typeof value === "object" && "$ref" in value) {
        this.forwardReferences.push({
          object: obj,
          feature: ref,
          value: value["$ref"]
        });
      }
    }
  }
  /**
   * Resolve all forward references collected during loading.
   */
  handleForwardReferences() {
    for (const fwdRef of this.forwardReferences) {
      const resolved = this.resolveReference(fwdRef.value);
      if (resolved) {
        this.setReferenceValue(fwdRef.object, fwdRef.feature, resolved);
      } else {
        const proxy = this.createProxy(fwdRef.feature, fwdRef.value);
        if (proxy) {
          this.setReferenceValue(fwdRef.object, fwdRef.feature, proxy);
        } else {
          this.error(`Unresolved reference: ${fwdRef.value}`);
        }
      }
    }
    this.forwardReferences = [];
  }
  /**
   * Set a reference value on an object (handles single and multi-valued).
   */
  setReferenceValue(obj, feature, value) {
    if (feature.isMany()) {
      const list = obj.eGet(feature);
      if (list && (Array.isArray(list) || isEList(list))) {
        list.push(value);
      }
    } else {
      obj.eSet(feature, value);
    }
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(ref) {
    const hashIndex = ref.indexOf("#");
    if (hashIndex > 0) {
      const baseURI = ref.substring(0, hashIndex);
      const fragment = ref.substring(hashIndex + 1);
      const currentURI = this.resource.getURI();
      if (currentURI && currentURI.toString() === baseURI) {
        return this.resource.getEObject(fragment);
      }
      const ePackage = this.packageRegistry.getEPackage(baseURI);
      if (ePackage) {
        return this.resolveFragmentInPackage(ePackage, fragment);
      }
      const resourceSet = this.resource.getResourceSet();
      if (resourceSet) {
        const uri = URI.createURI(baseURI);
        const externalResource = resourceSet.getResource(uri, true);
        if (externalResource) {
          return externalResource.getEObject(fragment);
        }
      }
      return null;
    }
    if (ref.startsWith("#")) {
      return this.resource.getEObject(ref.substring(1));
    }
    if (ref.startsWith("/")) {
      return this.resource.getEObject(ref);
    }
    return this.resource.getEObject(ref);
  }
  /**
   * Resolve a fragment path within an EPackage.
   */
  resolveFragmentInPackage(ePackage, fragment) {
    let path = fragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return ePackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(ePackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = ePackage;
      for (let i = 0; i < segments.length - 2; i++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j = 0; j < subPackages.length; j++) {
          if (subPackages.get(j).getName() === segments[i]) {
            found = subPackages.get(j);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  /**
   * Create a proxy for an unresolved reference.
   */
  createProxy(feature, uriValue) {
    let proxyURI;
    const hashIndex = uriValue.indexOf("#");
    if (hashIndex > 0) {
      proxyURI = URI.createURI(uriValue);
    } else if (hashIndex === 0) {
      const resourceURI = this.resource.getURI();
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + uriValue);
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else {
      const resourceURI = this.resource.getURI();
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    }
    const eType = feature.getEType();
    const eClass = eType && "getESuperTypes" in eType ? eType : null;
    const proxy = new EProxyImpl(proxyURI, eClass || void 0);
    proxy.eSetResource(this.resource);
    return proxy;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
  /**
   * Report an error.
   */
  error(message) {
    this.errors.push(new Error(message));
  }
  /**
   * Get accumulated errors.
   */
  getErrors() {
    return this.errors;
  }
}
const OPTION_SERIALIZE_TYPE = "SERIALIZE_TYPE";
const OPTION_INDENT = "INDENT";
const SERIALIZE_TYPE_ALWAYS = "always";
const SERIALIZE_TYPE_POLYMORPHIC = "polymorphic";
class JSONSave {
  constructor() {
    this.serializeType = SERIALIZE_TYPE_POLYMORPHIC;
    this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(resource, options) {
    this.resource = resource;
    if (options) {
      if (options.has(OPTION_SERIALIZE_TYPE)) {
        this.serializeType = options.get(OPTION_SERIALIZE_TYPE);
      }
      if (options.has(OPTION_INDENT)) {
        this.indent = options.get(OPTION_INDENT);
      }
    }
    const contents = resource.getContents();
    if (contents.size() === 0) {
      return "{}";
    }
    if (contents.size() === 1) {
      const obj = this.saveObject(contents.get(0), void 0, true);
      return JSON.stringify(obj, null, this.indent);
    }
    const arr = [];
    for (const root of contents) {
      arr.push(this.saveObject(root, void 0, true));
    }
    return JSON.stringify(arr, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(obj, feature, isRoot = false) {
    const result = {};
    const eClass = obj.eClass();
    if (this.shouldSaveType(obj, feature, isRoot)) {
      result["eClass"] = this.getEClassURI(eClass);
    }
    for (const feat of eClass.getEAllStructuralFeatures()) {
      if (feat.isTransient() || feat.isDerived())
        continue;
      const value = obj.eGet(feat);
      if (value === null || value === void 0)
        continue;
      if (this.isAttribute(feat)) {
        this.saveAttribute(result, obj, feat, value);
      } else {
        const ref = feat;
        if (ref.isContainment()) {
          this.saveContainment(result, obj, ref, value);
        } else {
          this.saveCrossReference(result, obj, ref, value);
        }
      }
    }
    return result;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(result, obj, attr, value) {
    try {
      const defaultValue = attr.getDefaultValue();
      if (value === defaultValue)
        return;
    } catch {
    }
    const name = attr.getName();
    if (attr.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      result[name] = items.map((v) => this.convertAttributeValue(attr, v));
    } else {
      result[name] = this.convertAttributeValue(attr, value);
    }
  }
  /**
   * Convert a single attribute value to a JSON-compatible value.
   */
  convertAttributeValue(attr, value) {
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return value;
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(result, obj, ref, value) {
    const name = ref.getName();
    if (ref.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      result[name] = items.map((child) => this.saveContainedChild(child, ref));
    } else {
      result[name] = this.saveContainedChild(value, ref);
    }
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(child, ref) {
    if (isInternalEObject(child) && child.eIsProxy()) {
      const href = child.eProxyURI()?.toString();
      if (href) {
        return { "$ref": href };
      }
    }
    return this.saveObject(child, ref);
  }
  /**
   * Serialize a cross-reference (non-containment) as `{ "$ref": "uri#fragment" }`.
   */
  saveCrossReference(result, obj, ref, value) {
    const name = ref.getName();
    if (ref.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      const refs = [];
      for (const item of items) {
        const href = this.getHref(item);
        if (href) {
          refs.push({ "$ref": href });
        }
      }
      if (refs.length > 0) {
        result[name] = refs;
      }
    } else {
      const href = this.getHref(value);
      if (href) {
        result[name] = { "$ref": href };
      }
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(obj, feature, isRoot = false) {
    if (this.serializeType === SERIALIZE_TYPE_ALWAYS) {
      return true;
    }
    if (isRoot) {
      return true;
    }
    if (feature && "isContainment" in feature) {
      const ref = feature;
      const declaredType = ref.getEType();
      const actualType = obj.eClass();
      if (declaredType && actualType && declaredType !== actualType) {
        return true;
      }
      return false;
    }
    return false;
  }
  /**
   * Get the emfjson-style type URI for an EClass: `nsURI#//ClassName`
   */
  getEClassURI(eClass) {
    const pkg = eClass.getEPackage();
    const nsURI = pkg?.getNsURI();
    const name = eClass.getName();
    if (nsURI && name) {
      return `${nsURI}#//${name}`;
    }
    return name || "Unknown";
  }
  /**
   * Get href for a cross-referenced object.
   * Reuses the pattern from XMLSave.getHref().
   */
  getHref(obj) {
    if (isInternalEObject(obj) && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI();
      return proxyURI?.toString() || null;
    }
    const resource = obj.eResource?.();
    if (resource) {
      const fragment = resource.getURIFragment(obj);
      const uri = resource.getURI();
      if (uri && fragment) {
        return `${uri.toString()}#${fragment}`;
      }
      if (fragment) {
        return `#${fragment}`;
      }
    }
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (containingClass) {
        const pkg = containingClass.getEPackage?.();
        const className = containingClass.getName?.();
        const featureName = obj.getName?.();
        if (pkg && className && featureName) {
          const nsURI = pkg.getNsURI?.();
          if (nsURI) {
            return `${nsURI}#//${className}/${featureName}`;
          }
        }
      }
    }
    if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const pkg = obj.getEPackage();
      if (pkg) {
        const nsURI = pkg.getNsURI?.();
        const name = obj.getName?.();
        if (nsURI && name) {
          return `${nsURI}#//${name}`;
        }
      }
    }
    if ("getName" in obj) {
      const name = obj.getName?.();
      if (name) {
        return `//${name}`;
      }
    }
    return null;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
}
class JSONResource extends BasicResource {
  constructor(uri) {
    super(uri);
    this.idToEObjectMap = /* @__PURE__ */ new Map();
    this.eObjectToIDMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get EObject by ID or path fragment.
   */
  getEObject(uriFragment) {
    const byId = this.idToEObjectMap.get(uriFragment);
    if (byId) {
      return byId;
    }
    return super.getEObject(uriFragment);
  }
  /**
   * Get URI fragment for an object.
   */
  getURIFragment(eObject) {
    const id = this.eObjectToIDMap.get(eObject);
    if (id) {
      return id;
    }
    return super.getURIFragment(eObject);
  }
  /**
   * Set ID for an object.
   */
  setID(eObject, id) {
    if (id) {
      this.idToEObjectMap.set(id, eObject);
      this.eObjectToIDMap.set(eObject, id);
    }
  }
  /**
   * Get ID for an object.
   */
  getID(eObject) {
    return this.eObjectToIDMap.get(eObject) ?? null;
  }
  clearIdMaps() {
    this.idToEObjectMap.clear();
    this.eObjectToIDMap.clear();
  }
  /**
   * Load from a JSON string.
   */
  loadFromString(jsonString, options) {
    this.clearIdMaps();
    const opts = options || /* @__PURE__ */ new Map();
    const loader = this.createJSONLoad();
    loader.load(this, jsonString, opts);
    const loaderErrors = loader.getErrors();
    if (loaderErrors.length > 0) {
      const resourceErrors = this.getErrors();
      for (const err of loaderErrors) {
        resourceErrors.push({ message: err.message });
      }
    }
    this.loaded = true;
  }
  /**
   * Save to a JSON string.
   */
  saveToString(options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createJSONSave();
    return saver.save(this, opts);
  }
  /**
   * Create the JSON loader.
   */
  createJSONLoad() {
    return new JSONLoad();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new JSONSave();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload();
    this.clearIdMaps();
  }
}
class JSONResourceFactory {
  createResource(uri) {
    return new JSONResource(uri);
  }
}
const extensionMap = Resource.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
if (!extensionMap.has("json")) {
  extensionMap.set("json", new JSONResourceFactory());
}
class EcoreClassRegistry {
  constructor() {
    this._getEcorePackage = null;
  }
  /**
   * Register the getEcorePackage function
   */
  register(getEcorePackage2) {
    this._getEcorePackage = getEcorePackage2;
  }
  /**
   * Get the EClass for EObject
   */
  getEObjectClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEObjectClass();
  }
  /**
   * Get the EClass for EClass
   */
  getEClassClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEClassClass();
  }
  /**
   * Get the EClass for EPackage
   */
  getEPackageClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEPackageClass();
  }
  /**
   * Get the EClass for EFactory
   */
  getEFactoryClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEFactoryClass();
  }
  /**
   * Get the EClass for EAttribute
   */
  getEAttributeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEAttributeClass();
  }
  /**
   * Get the EClass for EReference
   */
  getEReferenceClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEReferenceClass();
  }
  /**
   * Get the EClass for EStructuralFeature
   */
  getEStructuralFeatureClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEStructuralFeatureClass();
  }
  /**
   * Get the EClass for EDataType
   */
  getEDataTypeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEDataTypeClass();
  }
  /**
   * Get the EClass for EOperation
   */
  getEOperationClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEOperationClass();
  }
  /**
   * Get the EClass for EParameter
   */
  getEParameterClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEParameterClass();
  }
  /**
   * Get the EClass for EGenericType
   */
  getEGenericTypeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEGenericTypeClass();
  }
  /**
   * Get the EClass for ETypeParameter
   */
  getETypeParameterClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getETypeParameterClass();
  }
  /**
   * Get the EClass for EAnnotation
   */
  getEAnnotationClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEAnnotationClass();
  }
  /**
   * Get the EClass for EStringToStringMapEntry
   */
  getEStringToStringMapEntryClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEStringToStringMapEntryClass();
  }
  /**
   * Get the EClass for EEnum
   */
  getEEnumClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEEnumClass();
  }
  /**
   * Get the EClass for EEnumLiteral
   */
  getEEnumLiteralClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEEnumLiteralClass();
  }
  /**
   * Check if registry is initialized
   */
  isRegistered() {
    return this._getEcorePackage !== null;
  }
}
const ecoreRegistry = new EcoreClassRegistry();
class BasicEClass extends BasicEObject {
  constructor() {
    super(...arguments);
    this._name = null;
    this.abstract_ = false;
    this.interface_ = false;
    this._eSuperTypes = null;
    this._eStructuralFeatures = null;
    this._eOperations = null;
    this.ePackage = null;
    this.instanceClassName = null;
    this.instanceClass = null;
    this.featureID = 0;
    this.eTypeParameters = createMetamodelEList(this);
    this.eGenericSuperTypes = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
    this.xmlNameToFeature = /* @__PURE__ */ new Map();
    this.allSuperTypesCache = { value: null };
    this.allFeaturesCache = { value: null };
    this.attributesCache = { value: null };
    this.allAttributesCache = { value: null };
    this.referencesCache = { value: null };
    this.allReferencesCache = { value: null };
    this.allContainmentsCache = { value: null };
    this.allOperationsCache = { value: null };
  }
  // Public getter for PrimeVue compatibility (optionLabel="name")
  get name() {
    return this._name;
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }
  isAbstract() {
    return this.abstract_;
  }
  setAbstract(value) {
    this.abstract_ = value;
  }
  isInterface() {
    return this.interface_;
  }
  setInterface(value) {
    this.interface_ = value;
  }
  getESuperTypes() {
    if (this._eSuperTypes === null) {
      this._eSuperTypes = createMetamodelEList(this, () => this.resolveOwnFeature("eSuperTypes"));
    }
    return this._eSuperTypes;
  }
  getEAllSuperTypes() {
    return cachedDerivedList(this.allSuperTypesCache, "getEAllSuperTypes", () => {
      const all = [];
      const visited = /* @__PURE__ */ new Set();
      const collect = (eClass) => {
        for (const superType of eClass.getESuperTypes()) {
          if (!visited.has(superType)) {
            visited.add(superType);
            collect(superType);
            all.push(superType);
          }
        }
      };
      collect(this);
      return all;
    });
  }
  getEIDAttribute() {
    for (const attr of this.getEAllAttributes()) {
      if (attr.isID()) {
        return attr;
      }
    }
    return null;
  }
  getEStructuralFeatures() {
    if (this._eStructuralFeatures === null) {
      const self2 = this;
      const list = new EObjectContainmentWithInverseEListLazy(this, () => {
        if (ecoreRegistry.isRegistered()) {
          try {
            const eClassClass = ecoreRegistry.getEClassClass();
            if (eClassClass !== self2 && eClassClass instanceof BasicEClass && eClassClass._eStructuralFeatures !== null) {
              return eClassClass.getEStructuralFeature("eStructuralFeatures");
            }
          } catch {
          }
        }
        return null;
      }, (element, owner) => {
        if ("setEContainingClass" in element) {
          element.setEContainingClass(owner);
        }
        if (owner && "setFeatureID" in element) {
          element.setFeatureID(this.featureID++);
        }
      });
      this._eStructuralFeatures = createIndexedProxy(list);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    return cachedDerivedList(this.allFeaturesCache, "getEAllStructuralFeatures", () => {
      const all = [];
      for (const superType of this.getEAllSuperTypes()) {
        all.push(...superType.getEStructuralFeatures());
      }
      all.push(...this.getEStructuralFeatures());
      return all;
    });
  }
  getEAttributes() {
    return cachedDerivedList(this.attributesCache, "getEAttributes", () => this.getEStructuralFeatures().filter((f) => this.isAttribute(f)));
  }
  getEAllAttributes() {
    return cachedDerivedList(this.allAttributesCache, "getEAllAttributes", () => this.getEAllStructuralFeatures().filter((f) => this.isAttribute(f)));
  }
  getEReferences() {
    return cachedDerivedList(this.referencesCache, "getEReferences", () => this.getEStructuralFeatures().filter((f) => this.isReference(f)));
  }
  getEAllReferences() {
    return cachedDerivedList(this.allReferencesCache, "getEAllReferences", () => this.getEAllStructuralFeatures().filter((f) => this.isReference(f)));
  }
  getEAllContainments() {
    return cachedDerivedList(this.allContainmentsCache, "getEAllContainments", () => this.getEAllReferences().filter((ref) => ref.isContainment()));
  }
  getEOperations() {
    if (this._eOperations === null) {
      this._eOperations = createMetamodelEList(this, () => this.resolveOwnFeature("eOperations"));
    }
    return this._eOperations;
  }
  getEAllOperations() {
    return cachedDerivedList(this.allOperationsCache, "getEAllOperations", () => {
      const all = [...this.getEOperations()];
      for (const superType of this.getEAllSuperTypes()) {
        all.push(...superType.getEOperations());
      }
      return all;
    });
  }
  /**
   * Resolves one of this class's own metamodel features (eSuperTypes,
   * eOperations, ...) on the Ecore EClass descriptor, for notifications.
   *
   * Returns null while the Ecore package is still bootstrapping, which is why
   * the lists resolve their feature lazily rather than in the constructor.
   */
  resolveOwnFeature(name) {
    if (!ecoreRegistry.isRegistered()) {
      return null;
    }
    try {
      const eClassClass = ecoreRegistry.getEClassClass();
      if (eClassClass !== this && eClassClass instanceof BasicEClass && eClassClass._eStructuralFeatures !== null) {
        return eClassClass.getEStructuralFeature(name);
      }
    } catch {
    }
    return null;
  }
  getEStructuralFeature(featureNameOrID) {
    if (typeof featureNameOrID === "string") {
      const byName = this.getEAllStructuralFeatures().find((f) => f.getName() === featureNameOrID);
      if (byName)
        return byName;
      const byXmlName = this.xmlNameToFeature.get(featureNameOrID);
      if (byXmlName)
        return byXmlName;
      for (const superType of this.getEAllSuperTypes()) {
        if (superType instanceof BasicEClass) {
          const fromSuper = superType.xmlNameToFeature.get(featureNameOrID);
          if (fromSuper)
            return fromSuper;
        }
      }
      return null;
    } else {
      return this.getEAllStructuralFeatures()[featureNameOrID] || null;
    }
  }
  /**
   * Register an XML serialization name for a feature (from ExtendedMetaData annotations)
   */
  registerXmlName(xmlName, feature) {
    this.xmlNameToFeature.set(xmlName, feature);
  }
  isSuperTypeOf(someClass) {
    return someClass.getEAllSuperTypes().includes(this);
  }
  getFeatureCount() {
    return this.getEAllStructuralFeatures().length;
  }
  getFeatureID(feature) {
    const features = this.getEAllStructuralFeatures();
    return features.indexOf(feature);
  }
  getEOperation(operationID) {
    return this.getEAllOperations()[operationID] || null;
  }
  getOperationCount() {
    return this.getEAllOperations().length;
  }
  getOperationID(operation) {
    return this.getEAllOperations().indexOf(operation);
  }
  // EClassifier methods
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(value) {
    this.instanceClassName = value;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(value) {
    this.instanceClass = value;
  }
  getDefaultValue() {
    return null;
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(value) {
    this.instanceClassName = value;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(pkg) {
    this.ePackage = pkg;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(object) {
    if (!object || typeof object !== "object")
      return false;
    if (!("eClass" in object))
      return false;
    const objectClass = object.eClass();
    return objectClass === this || this.isSuperTypeOf(objectClass);
  }
  getClassifierID() {
    if (!this.ePackage)
      return -1;
    return this.ePackage.getEClassifiers().indexOf(this);
  }
  // Helpers
  isAttribute(feature) {
    return "getEAttributeType" in feature;
  }
  isReference(feature) {
    return "getEReferenceType" in feature;
  }
  /**
   * Add feature to this class.
   * Uses the EList's add() method which automatically:
   * - Sets the container (eSetContainer)
   * - Sets the inverse reference (eContainingClass)
   * - Fires notifications for adapters
   * - Assigns a featureID
   */
  addFeature(feature) {
    this.getEStructuralFeatures().add(feature);
  }
  /**
   * Add operation to this class
   */
  addOperation(operation) {
    this.getEOperations().add(operation);
  }
  /**
   * Add super type
   */
  addSuperType(superType) {
    this.getESuperTypes().add(superType);
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEClassClass();
  }
  /**
   * Override eGet to handle class-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "abstract":
        return this.abstract_;
      case "interface":
        return this.interface_;
      case "eSuperTypes":
        return this.getESuperTypes();
      case "eStructuralFeatures":
        return this.getEStructuralFeatures();
      case "eOperations":
        return this.getEOperations();
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eGenericSuperTypes":
        return this.eGenericSuperTypes;
      case "eAnnotations":
        return this.eAnnotations;
      case "instanceClassName":
        return this.instanceClassName;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle class-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this._name = newValue;
        super.eSet(feature, newValue);
        break;
      case "abstract":
        this.abstract_ = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "interface":
        this.interface_ = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eSuperTypes":
        replaceListContents(this.getESuperTypes(), newValue);
        break;
      case "eStructuralFeatures":
        replaceListContents(this.getEStructuralFeatures(), newValue);
        break;
      case "eOperations":
        replaceListContents(this.getEOperations(), newValue);
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      case "eGenericSuperTypes":
        replaceListContents(this.eGenericSuperTypes, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "instanceClassName":
        this.instanceClassName = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class DataTypeRegistryImpl {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map();
    this.convertersByName = /* @__PURE__ */ new Map();
    this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const booleanConverter = {
      fromString: (s) => s.toLowerCase() === "true",
      toString: (v) => String(v)
    };
    this.registerByClassName("boolean", booleanConverter);
    this.registerByClassName("java.lang.Boolean", booleanConverter);
    this.registerByName("EBoolean", booleanConverter);
    this.registerByName("EBooleanObject", booleanConverter);
    const intConverter = {
      fromString: (s) => parseInt(s, 10),
      toString: (v) => String(v)
    };
    this.registerByClassName("int", intConverter);
    this.registerByClassName("java.lang.Integer", intConverter);
    this.registerByClassName("short", intConverter);
    this.registerByClassName("java.lang.Short", intConverter);
    this.registerByClassName("byte", intConverter);
    this.registerByClassName("java.lang.Byte", intConverter);
    this.registerByName("EInt", intConverter);
    this.registerByName("EIntegerObject", intConverter);
    this.registerByName("EShort", intConverter);
    this.registerByName("EShortObject", intConverter);
    this.registerByName("EByte", intConverter);
    this.registerByName("EByteObject", intConverter);
    const longConverter = {
      fromString: (s) => {
        const n = parseInt(s, 10);
        if (Math.abs(n) > Number.MAX_SAFE_INTEGER) {
          return BigInt(s);
        }
        return n;
      },
      toString: (v) => String(v)
    };
    this.registerByClassName("long", longConverter);
    this.registerByClassName("java.lang.Long", longConverter);
    this.registerByName("ELong", longConverter);
    this.registerByName("ELongObject", longConverter);
    const floatConverter = {
      fromString: (s) => parseFloat(s),
      toString: (v) => String(v)
    };
    this.registerByClassName("float", floatConverter);
    this.registerByClassName("java.lang.Float", floatConverter);
    this.registerByClassName("double", floatConverter);
    this.registerByClassName("java.lang.Double", floatConverter);
    this.registerByName("EFloat", floatConverter);
    this.registerByName("EFloatObject", floatConverter);
    this.registerByName("EDouble", floatConverter);
    this.registerByName("EDoubleObject", floatConverter);
    const stringConverter = {
      fromString: (s) => s,
      toString: (v) => v ?? ""
    };
    this.registerByClassName("java.lang.String", stringConverter);
    this.registerByClassName("java.lang.Object", stringConverter);
    this.registerByName("EString", stringConverter);
    const charConverter = {
      fromString: (s) => s.charAt(0) || "",
      toString: (v) => v ?? ""
    };
    this.registerByClassName("char", charConverter);
    this.registerByClassName("java.lang.Character", charConverter);
    this.registerByName("EChar", charConverter);
    this.registerByName("ECharacterObject", charConverter);
    const dateConverter = {
      fromString: (s) => new Date(s),
      toString: (v) => v?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", dateConverter);
    this.registerByName("EDate", dateConverter);
    const bigDecimalConverter = {
      fromString: (s) => s,
      // Keep as string to preserve precision
      toString: (v) => v ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", bigDecimalConverter);
    this.registerByClassName("java.math.BigInteger", bigDecimalConverter);
    this.registerByName("EBigDecimal", bigDecimalConverter);
    this.registerByName("EBigInteger", bigDecimalConverter);
    const byteArrayConverter = {
      fromString: (s) => {
        if (typeof atob === "function") {
          const binary = atob(s);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          return bytes;
        }
        return new Uint8Array(Buffer.from(s, "base64"));
      },
      toString: (v) => {
        if (typeof btoa === "function") {
          return btoa(String.fromCharCode(...v));
        }
        return Buffer.from(v).toString("base64");
      }
    };
    this.registerByClassName("byte[]", byteArrayConverter);
    this.registerByName("EByteArray", byteArrayConverter);
    const featureMapConverter = {
      fromString: (s) => s,
      toString: (v) => String(v ?? "")
    };
    this.registerByName("EFeatureMapEntry", featureMapConverter);
  }
  /**
   * Register a converter by instanceClassName
   */
  registerByClassName(className, converter) {
    this.convertersByClassName.set(className, converter);
  }
  /**
   * Register a converter by DataType name
   */
  registerByName(name, converter) {
    this.convertersByName.set(name, converter);
  }
  /**
   * Get converter for a DataType
   */
  getConverter(dataType) {
    const className = dataType.getInstanceClassName();
    if (className) {
      const converter = this.convertersByClassName.get(className);
      if (converter) {
        return converter;
      }
    }
    const name = dataType.getName();
    if (name) {
      const converter = this.convertersByName.get(name);
      if (converter) {
        return converter;
      }
    }
    return null;
  }
  /**
   * Convert a string literal to a value using the DataType's converter.
   *
   * For an EEnum the string is resolved to the matching EEnumLiteral, and an
   * invalid value throws - same as EFactoryImpl.createFromString in Java EMF.
   * The XMI loader turns that throw into a resource error, so a single bad
   * attribute does not abort the document (see XMLHandler.setFeatureValue).
   */
  createFromString(dataType, literal) {
    if (isEEnum(dataType)) {
      if (literal === null || literal === void 0) {
        return null;
      }
      const eEnumLiteral = this.resolveEEnumLiteral(dataType, literal);
      if (!eEnumLiteral) {
        throw new Error(`The value '${literal}' is not a valid enumerator of '${dataType.getName()}'`);
      }
      return eEnumLiteral.getInstance() ?? eEnumLiteral;
    }
    const converter = this.getConverter(dataType);
    if (converter) {
      return converter.fromString(literal);
    }
    return literal;
  }
  /**
   * Convert a value to a string literal using the DataType's converter.
   *
   * For an EEnum the literal string is written, not the name - Java EMF
   * serializes enum values via EEnumLiteralImpl.toString(), which is getLiteral().
   */
  convertToString(dataType, value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (isEEnum(dataType)) {
      const eEnumLiteral = this.findEEnumLiteral(dataType, value);
      if (eEnumLiteral) {
        return eEnumLiteral.getLiteral() ?? "";
      }
    }
    const converter = this.getConverter(dataType);
    if (converter) {
      return converter.toString(value);
    }
    return String(value);
  }
  /**
   * Resolve a serialized enum value to its EEnumLiteral.
   *
   * Java EMF only ever looks up by literal. We additionally accept the name
   * and the ordinal, because both are unambiguous and both occur in files
   * written by non-conforming serializers - rejecting them would make those
   * models unloadable for no gain. Saving always writes the literal back, so
   * a load/save cycle normalizes the file.
   */
  resolveEEnumLiteral(eEnum, literal) {
    const byLiteral = eEnum.getEEnumLiteralByLiteral(literal);
    if (byLiteral) {
      return byLiteral;
    }
    const byName = eEnum.getEEnumLiteral(literal);
    if (byName) {
      return byName;
    }
    const trimmed = literal.trim();
    if (/^-?\d+$/.test(trimmed)) {
      return eEnum.getEEnumLiteral(Number(trimmed));
    }
    return null;
  }
  /**
   * Resolve an enum value to its EEnumLiteral. Accepts the literal itself as
   * well as the `instance` a generated enum carries.
   */
  findEEnumLiteral(eEnum, value) {
    if (value && typeof value === "object" && typeof value.getLiteral === "function") {
      return value;
    }
    for (const eEnumLiteral of eEnum.getELiterals()) {
      if (eEnumLiteral.getInstance() === value) {
        return eEnumLiteral;
      }
    }
    return null;
  }
  /**
   * Check if a converter is registered for a DataType
   */
  hasConverter(dataType) {
    return this.getConverter(dataType) !== null;
  }
  /**
   * Get all registered classNames
   */
  getRegisteredClassNames() {
    return Array.from(this.convertersByClassName.keys());
  }
  /**
   * Get all registered names
   */
  getRegisteredNames() {
    return Array.from(this.convertersByName.keys());
  }
}
const dataTypeRegistry = new DataTypeRegistryImpl();
class BasicEFactory {
  constructor() {
    this.ePackage = null;
    this.creators = /* @__PURE__ */ new Map();
    this.eAnnotations = createMetamodelEList(this);
  }
  getEPackage() {
    if (!this.ePackage) {
      throw new Error("EPackage not set on factory");
    }
    return this.ePackage;
  }
  setEPackage(value) {
    this.ePackage = value;
    if (value && typeof value.setEFactoryInstance === "function") {
      value.setEFactoryInstance(this);
    }
  }
  create(eClass) {
    const creator = this.creators.get(eClass);
    if (creator) {
      return creator();
    }
    return this.createDynamic(eClass);
  }
  /**
   * Create a dynamic EObject instance
   */
  createDynamic(eClass) {
    if (eClass.isAbstract()) {
      throw new Error(`Cannot instantiate abstract class: ${eClass.getName()}`);
    }
    if (eClass.isInterface()) {
      throw new Error(`Cannot instantiate interface: ${eClass.getName()}`);
    }
    return new DynamicEObject(eClass);
  }
  createFromString(eDataType, literalValue) {
    return dataTypeRegistry.createFromString(eDataType, literalValue);
  }
  convertToString(eDataType, instanceValue) {
    return dataTypeRegistry.convertToString(eDataType, instanceValue);
  }
  /**
   * Register a creator function for a specific EClass
   */
  registerCreator(eClass, creator) {
    this.creators.set(eClass, creator);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return null;
  }
  // EObject methods
  eClass() {
    return ecoreRegistry.getEFactoryClass();
  }
  eResource() {
    return null;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eIsProxy() {
    return false;
  }
  eCrossReferences() {
    return [];
  }
  eGet(feature) {
    return null;
  }
  eSet(feature, newValue) {
  }
  eIsSet(feature) {
    return false;
  }
  eUnset(feature) {
  }
  eInvoke(operation, arguments_) {
    return null;
  }
}
class EClassifiersEList extends BasicEList {
  constructor(pkg) {
    super(pkg, null);
    this.pkg = pkg;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature) {
      const isReg = ecoreRegistry.isRegistered();
      if (isReg) {
        const ePackageClass = ecoreRegistry.getEPackageClass();
        this.feature = ePackageClass.getEStructuralFeature("eClassifiers");
      }
    }
    return this.feature;
  }
  didAdd(index, element) {
    if ("setEPackage" in element && typeof element.setEPackage === "function") {
      element.setEPackage(this.pkg);
    }
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      if ("setEPackage" in element && typeof element.setEPackage === "function") {
        element.setEPackage(this.pkg);
      }
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    if ("setEPackage" in element && typeof element.setEPackage === "function") {
      element.setEPackage(null);
    }
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      if ("setEPackage" in element && typeof element.setEPackage === "function") {
        element.setEPackage(null);
      }
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    if ("setEPackage" in oldElement && typeof oldElement.setEPackage === "function") {
      oldElement.setEPackage(null);
    }
    if ("setEPackage" in newElement && typeof newElement.setEPackage === "function") {
      newElement.setEPackage(this.pkg);
    }
    super.didSet(index, newElement, oldElement);
  }
}
class ESubpackagesEList extends BasicEList {
  constructor(pkg) {
    super(pkg, null);
    this.pkg = pkg;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && ecoreRegistry.isRegistered()) {
      const ePackageClass = ecoreRegistry.getEPackageClass();
      this.feature = ePackageClass.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(index, element) {
    if (element instanceof BasicEPackage) {
      element.eSuperPackage = this.pkg;
    }
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      if (element instanceof BasicEPackage) {
        element.eSuperPackage = this.pkg;
      }
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    if (element instanceof BasicEPackage) {
      element.eSuperPackage = null;
    }
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      if (element instanceof BasicEPackage) {
        element.eSuperPackage = null;
      }
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    if (oldElement instanceof BasicEPackage) {
      oldElement.eSuperPackage = null;
    }
    if (newElement instanceof BasicEPackage) {
      newElement.eSuperPackage = this.pkg;
    }
    super.didSet(index, newElement, oldElement);
  }
}
class BasicEPackage extends BasicEObject {
  /**
   * Constructor
   */
  constructor(nsURI, eFactoryInstance) {
    super();
    this.name = null;
    this.nsURI = null;
    this.nsPrefix = null;
    this.eFactoryInstance = null;
    this._eClassifiers = null;
    this._eSubpackages = null;
    this.eSuperPackage = null;
    this.eAnnotations = createMetamodelEList(this);
    if (nsURI)
      this.nsURI = nsURI;
    if (eFactoryInstance)
      this.eFactoryInstance = eFactoryInstance;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getNsURI() {
    return this.nsURI;
  }
  setNsURI(value) {
    this.nsURI = value;
  }
  getNsPrefix() {
    return this.nsPrefix;
  }
  setNsPrefix(value) {
    this.nsPrefix = value;
  }
  getEFactoryInstance() {
    if (!this.eFactoryInstance) {
      const factory = new BasicEFactory();
      factory.setEPackage(this);
      this.eFactoryInstance = factory;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(value) {
    this.eFactoryInstance = value;
  }
  getEClassifiers() {
    if (!this._eClassifiers) {
      this._eClassifiers = createIndexedProxy(new EClassifiersEList(this));
    }
    return this._eClassifiers;
  }
  getESubpackages() {
    if (!this._eSubpackages) {
      this._eSubpackages = createIndexedProxy(new ESubpackagesEList(this));
    }
    return this._eSubpackages;
  }
  getESuperPackage() {
    return this.eSuperPackage;
  }
  getEClassifier(name) {
    const classifiers = this.getEClassifiers();
    for (const c of classifiers) {
      if (typeof c.getName === "function") {
        if (c.getName() === name)
          return c;
      } else if (typeof c.eGet === "function" && typeof c.eClass === "function") {
        const eClass = c.eClass();
        if (eClass) {
          const nameFeature = eClass.getEStructuralFeature?.("name");
          if (nameFeature && c.eGet(nameFeature) === name) {
            return c;
          }
        }
      }
    }
    return null;
  }
  /**
   * Add classifier to this package
   */
  addClassifier(classifier) {
    this.getEClassifiers().add(classifier);
  }
  /**
   * Add subpackage
   */
  addSubpackage(pkg) {
    this.getESubpackages().add(pkg);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return null;
  }
  eClass() {
    return ecoreRegistry.getEPackageClass();
  }
  /**
   * Override eGet to handle package-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "nsURI":
        return this.nsURI;
      case "nsPrefix":
        return this.nsPrefix;
      case "eClassifiers":
        return this.getEClassifiers();
      case "eSubpackages":
        return this.getESubpackages();
      case "eSuperPackage":
        return this.eSuperPackage;
      case "eFactoryInstance":
        return this.eFactoryInstance;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle package-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "nsURI":
        this.nsURI = newValue;
        super.eSet(feature, newValue);
        break;
      case "nsPrefix":
        this.nsPrefix = newValue;
        super.eSet(feature, newValue);
        break;
      case "eClassifiers":
        if (Array.isArray(newValue) || newValue && typeof newValue[Symbol.iterator] === "function") {
          const list = this.getEClassifiers();
          list.clear();
          for (const item of newValue) {
            list.add(item);
          }
        }
        break;
      case "eSubpackages":
        if (Array.isArray(newValue) || newValue && typeof newValue[Symbol.iterator] === "function") {
          const list = this.getESubpackages();
          list.clear();
          for (const item of newValue) {
            list.add(item);
          }
        }
        break;
      case "eSuperPackage":
        this.eSuperPackage = newValue;
        super.eSet(feature, newValue);
        break;
      case "eFactoryInstance":
        this.eFactoryInstance = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEStructuralFeature extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.changeable = true;
    this.volatile = false;
    this.transient = false;
    this.defaultValueLiteral = null;
    this.unsettable = false;
    this.derived = false;
    this.eType = null;
    this.eGenericType = null;
    this.eContainingClass = null;
    this.lowerBound = 0;
    this.upperBound = 1;
    this.featureID = -1;
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  isChangeable() {
    return this.changeable;
  }
  setChangeable(value) {
    this.changeable = value;
  }
  isVolatile() {
    return this.volatile;
  }
  setVolatile(value) {
    this.volatile = value;
  }
  isTransient() {
    return this.transient;
  }
  setTransient(value) {
    this.transient = value;
  }
  getDefaultValueLiteral() {
    return this.defaultValueLiteral;
  }
  setDefaultValueLiteral(value) {
    this.defaultValueLiteral = value;
  }
  isUnsettable() {
    return this.unsettable;
  }
  setUnsettable(value) {
    this.unsettable = value;
  }
  isDerived() {
    return this.derived;
  }
  setDerived(value) {
    this.derived = value;
  }
  getEType() {
    if (this.eType && isInternalEObject(this.eType) && this.eType.eIsProxy()) {
      const proxy = this.eType;
      const proxyURI = proxy.eProxyURI();
      if (proxyURI) {
        const resolved = this.eResolveProxy(proxy);
        if (resolved !== proxy) {
          this.eType = resolved;
          return this.eType;
        }
        const uriStr = proxyURI.toString();
        const hashIndex = uriStr.indexOf("#");
        if (hashIndex > 0) {
          const baseURI = uriStr.substring(0, hashIndex);
          const fragment = uriStr.substring(hashIndex + 1);
          const registries = [EPackageRegistry.INSTANCE];
          let rs = this.eResource()?.getResourceSet();
          if (!rs) {
            let container = this.eContainingClass;
            while (container) {
              if (typeof container.eResource === "function") {
                const res = container.eResource();
                if (res) {
                  rs = res.getResourceSet();
                  break;
                }
              }
              container = container.getEPackage?.() ?? container.getESuperPackage?.() ?? container.eContainer?.();
            }
          }
          if (rs)
            registries.push(rs.getPackageRegistry());
          for (const registry of registries) {
            const pkg = registry.getEPackage(baseURI);
            if (pkg) {
              const classifier = resolveClassifierInPackage(pkg, fragment);
              if (classifier) {
                this.eType = classifier;
                return this.eType;
              }
            }
            let baseName = baseURI;
            const lastSlash = baseName.lastIndexOf("/");
            if (lastSlash >= 0)
              baseName = baseName.substring(lastSlash + 1);
            const dotIndex = baseName.indexOf(".");
            if (dotIndex > 0)
              baseName = baseName.substring(0, dotIndex);
            if (baseName) {
              for (const nsKey of registry.keys()) {
                const regPkg = registry.getEPackage(nsKey);
                if (regPkg && regPkg.getName() === baseName) {
                  const classifier = resolveClassifierInPackage(regPkg, fragment);
                  if (classifier) {
                    this.eType = classifier;
                    return this.eType;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  setEType(value) {
    this.eType = value;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(value) {
    this.eContainingClass = value;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getFeatureID() {
    return this.featureID;
  }
  setFeatureID(value) {
    this.featureID = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEStructuralFeatureClass();
  }
  /**
   * Override eGet to handle feature-specific properties
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "changeable":
        return this.changeable;
      case "volatile":
        return this.volatile;
      case "transient":
        return this.transient;
      case "defaultValueLiteral":
        return this.defaultValueLiteral;
      case "unsettable":
        return this.unsettable;
      case "derived":
        return this.derived;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle feature-specific properties
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "changeable":
        this.changeable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "volatile":
        this.volatile = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "transient":
        this.transient = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "defaultValueLiteral":
        this.defaultValueLiteral = newValue;
        super.eSet(feature, newValue);
        break;
      case "unsettable":
        this.unsettable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "derived":
        this.derived = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eType":
        this.eType = newValue;
        super.eSet(feature, newValue);
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        super.eSet(feature, newValue);
        break;
      case "lowerBound":
        this.lowerBound = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "upperBound":
        this.upperBound = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEAttribute extends BasicEStructuralFeature {
  constructor() {
    super(...arguments);
    this.id = false;
  }
  isID() {
    return this.id;
  }
  setID(value) {
    this.id = value;
  }
  getEAttributeType() {
    const type = this.getEType();
    if (!type) {
      return null;
    }
    if (!("isSerializable" in type)) {
      return null;
    }
    return type;
  }
  getDefaultValue() {
    const literal = this.getDefaultValueLiteral();
    const dataType = this.getEAttributeType();
    if (!dataType) {
      return null;
    }
    if (literal === null) {
      return dataType.getDefaultValue();
    }
    const factory = dataType.getEPackage()?.getEFactoryInstance();
    if (!factory) {
      return literal;
    }
    return factory.createFromString(dataType, literal);
  }
  eClass() {
    return ecoreRegistry.getEAttributeClass();
  }
  /**
   * Override eGet to handle attribute-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "iD":
        return this.id;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle attribute-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "iD":
        this.id = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEReference extends BasicEStructuralFeature {
  constructor() {
    super(...arguments);
    this.containment = false;
    this.resolveProxies = true;
    this.eOpposite = null;
    this.eKeys = createMetamodelEList(this);
  }
  isContainment() {
    return this.containment;
  }
  setContainment(value) {
    this.containment = value;
  }
  isContainer() {
    if (this.eOpposite) {
      return this.eOpposite.isContainment();
    }
    return false;
  }
  isResolveProxies() {
    return this.resolveProxies;
  }
  setResolveProxies(value) {
    this.resolveProxies = value;
  }
  getEOpposite() {
    return this.eOpposite;
  }
  setEOpposite(value) {
    if (this.eOpposite === value) {
      return;
    }
    if (this.eOpposite && this.eOpposite.getEOpposite() === this) {
      this.eOpposite.eOpposite = null;
    }
    this.eOpposite = value;
    if (value && value.getEOpposite() !== this) {
      value.setEOpposite(this);
    }
  }
  getEReferenceType() {
    const type = this.getEType();
    if (!type) {
      throw new Error("Reference type not set");
    }
    if (!("getEStructuralFeatures" in type)) {
      throw new Error("Reference type must be EClass");
    }
    return type;
  }
  getEKeys() {
    return this.eKeys;
  }
  addEKey(key) {
    this.eKeys.add(key);
  }
  getDefaultValue() {
    return null;
  }
  eClass() {
    return ecoreRegistry.getEReferenceClass();
  }
  /**
   * Override eGet to handle reference-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "containment":
        return this.containment;
      case "resolveProxies":
        return this.resolveProxies;
      case "eOpposite":
        return this.eOpposite;
      case "eKeys":
        return this.eKeys;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle reference-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "containment":
        this.containment = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "resolveProxies":
        this.resolveProxies = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eOpposite":
        this.eOpposite = newValue;
        super.eSet(feature, newValue);
        break;
      case "eKeys":
        replaceListContents(this.eKeys, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEDataType extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.instanceClassName = null;
    this.instanceClass = null;
    this.ePackage = null;
    this.serializable = true;
    this.eAnnotations = createMetamodelEList(this);
    this.eTypeParameters = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(value) {
    this.instanceClassName = value;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(value) {
    this.instanceClass = value;
  }
  getDefaultValue() {
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return false;
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
        return 0;
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return 0;
      case "java.lang.String":
        return null;
      default:
        return null;
    }
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(value) {
    this.instanceClassName = value;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(pkg) {
    this.ePackage = pkg;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(object) {
    const type = typeof object;
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return type === "boolean";
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return type === "number";
      case "java.lang.String":
        return type === "string";
      default:
        return false;
    }
  }
  getClassifierID() {
    if (!this.ePackage)
      return -1;
    return this.ePackage.getEClassifiers().indexOf(this);
  }
  isSerializable() {
    return this.serializable;
  }
  setSerializable(value) {
    this.serializable = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEDataTypeClass();
  }
  /**
   * Override eGet to handle datatype-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "instanceClassName":
        return this.instanceClassName;
      case "serializable":
        return this.serializable;
      case "eAnnotations":
        return this.eAnnotations;
      case "eTypeParameters":
        return this.eTypeParameters;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle datatype-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "instanceClassName":
        this.instanceClassName = newValue;
        super.eSet(feature, newValue);
        break;
      case "serializable":
        this.serializable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
(() => {
  const dt = new BasicEDataType();
  dt.setName("EString");
  dt.setInstanceClassName("java.lang.String");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EInt");
  dt.setInstanceClassName("int");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EBoolean");
  dt.setInstanceClassName("boolean");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EFloat");
  dt.setInstanceClassName("float");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EDouble");
  dt.setInstanceClassName("double");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("ELong");
  dt.setInstanceClassName("long");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EDate");
  dt.setInstanceClassName("java.util.Date");
  return dt;
})();
class BasicResourceSet {
  constructor(packageRegistry, factoryRegistry) {
    this.resources = new BasicEList();
    this.packageRegistry = packageRegistry || this.createDefaultPackageRegistry();
    this.resourceFactoryRegistry = factoryRegistry || Resource.INSTANCE_FACTORY_REGISTRY;
    this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(uri, loadOnDemand) {
    const existing = this.resources.find((r) => {
      const resUri = r.getURI();
      return resUri && resUri.toString() === uri.toString();
    });
    if (existing) {
      return existing;
    }
    const delegated = this.delegatedGetResource(uri, loadOnDemand);
    if (delegated) {
      return delegated;
    }
    if (!loadOnDemand) {
      return null;
    }
    const resource = this.createResource(uri);
    if (resource) {
      resource.load().catch((err) => {
        console.error(`Failed to load resource ${uri}:`, err);
      });
    }
    return resource;
  }
  /**
   * Returns a resolved resource available outside of the resource set.
   * Looks up the URI in the package registry.
   * This is called by getResource when the URI cannot be resolved
   * based on the existing contents of the resource set.
   */
  delegatedGetResource(uri, loadOnDemand) {
    const uriString = uri.toString();
    const ePackage = this.packageRegistry.getEPackage(uriString);
    if (ePackage) {
      if ("eResource" in ePackage && typeof ePackage.eResource === "function") {
        const existingResource = ePackage.eResource();
        if (existingResource) {
          return existingResource;
        }
      }
      return this.createSyntheticResourceForPackage(ePackage, uri);
    }
    return null;
  }
  /**
   * Creates a synthetic resource for a package that doesn't have one.
   * This allows resolving fragment references like //EString within the package.
   */
  createSyntheticResourceForPackage(ePackage, uri) {
    const existing = this.resources.find((r) => {
      if ("_syntheticPackage" in r) {
        return r._syntheticPackage === ePackage;
      }
      return false;
    });
    if (existing) {
      return existing;
    }
    const resource = new SyntheticPackageResource(uri, ePackage);
    resource.setResourceSet(this);
    this.resources.push(resource);
    return resource;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(uri, loadOnDemand) {
    const existing = this.resources.find((r) => {
      const resUri = r.getURI();
      return resUri && resUri.toString() === uri.toString();
    });
    if (existing)
      return existing;
    const delegated = this.delegatedGetResource(uri, loadOnDemand);
    if (delegated)
      return delegated;
    if (!loadOnDemand)
      return null;
    const resource = this.createResource(uri);
    if (resource) {
      await resource.load();
    }
    return resource;
  }
  createResource(uri) {
    const factory = this.resourceFactoryRegistry.getFactory(uri);
    let resource;
    if (factory) {
      resource = factory.createResource(uri);
    } else {
      resource = new BasicResource(uri);
    }
    if ("setResourceSet" in resource) {
      resource.setResourceSet(this);
    }
    this.resources.push(resource);
    return resource;
  }
  getEObject(uri, loadOnDemand) {
    const fragment = uri.fragment();
    if (!fragment) {
      return null;
    }
    const resourceURI = URI.createURI(uri.toString().split("#")[0]);
    const resource = this.getResource(resourceURI, loadOnDemand);
    if (!resource) {
      return null;
    }
    return resource.getEObject(fragment);
  }
  getPackageRegistry() {
    return this.packageRegistry;
  }
  setPackageRegistry(registry) {
    this.packageRegistry = registry;
  }
  getResourceFactoryRegistry() {
    return this.resourceFactoryRegistry;
  }
  setResourceFactoryRegistry(registry) {
    this.resourceFactoryRegistry = registry;
  }
  getURIConverter() {
    return this.uriConverter;
  }
  setURIConverter(converter) {
    this.uriConverter = converter;
  }
  /**
   * Iteratively resolves proxy references by loading packages via getResourceAsync.
   * Loops until no more progress is made or maxDepth is reached.
   */
  async resolveProxiesAsync(maxDepth = -1) {
    let totalResolved = 0;
    let progress = true;
    let depth = 0;
    while (progress) {
      if (maxDepth >= 0 && depth >= maxDepth)
        break;
      progress = false;
      const proxyNsURIs = this.collectUnresolvedNsURIs();
      if (proxyNsURIs.size === 0)
        break;
      for (const nsURI of proxyNsURIs) {
        try {
          const uri = URI.createURI(nsURI);
          const resource = await this.getResourceAsync(uri, true);
          if (resource?.isLoaded()) {
            totalResolved++;
            progress = true;
          }
        } catch (err) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${nsURI}:`, err);
        }
      }
      depth++;
    }
    return totalResolved;
  }
  /**
   * Collects nsURIs from unresolved proxy references across all resources.
   */
  collectUnresolvedNsURIs() {
    const nsURIs = /* @__PURE__ */ new Set();
    for (const resource of this.resources) {
      for (const content of resource.getContents()) {
        this.collectProxyURIs(content, nsURIs);
      }
    }
    return nsURIs;
  }
  /**
   * Recursively walks EObject tree and collects nsURIs from proxy references.
   */
  collectProxyURIs(obj, nsURIs) {
    const eClass = obj.eClass();
    if (!eClass)
      return;
    for (const ref of eClass.getEAllReferences()) {
      try {
        const value = obj.eGet(ref);
        if (!value)
          continue;
        if (ref.isMany() && Array.isArray(value)) {
          for (const item of value) {
            this.checkProxy(item, nsURIs);
          }
        } else if (typeof value === "object" && "eClass" in value) {
          this.checkProxy(value, nsURIs);
        }
      } catch {
      }
    }
    for (const child of obj.eContents()) {
      this.collectProxyURIs(child, nsURIs);
    }
  }
  /**
   * Checks if an EObject is a proxy and extracts the nsURI.
   */
  checkProxy(obj, nsURIs) {
    if (typeof obj.eIsProxy === "function" && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI?.();
      if (proxyURI) {
        const uriStr = typeof proxyURI === "string" ? proxyURI : proxyURI.toString();
        const baseUri = uriStr.split("#")[0];
        if (baseUri && !this.packageRegistry.has(baseUri)) {
          nsURIs.add(baseUri);
        }
      }
    }
  }
  /**
   * Create default package registry that delegates to global EPackageRegistry.INSTANCE
   */
  createDefaultPackageRegistry() {
    const map = /* @__PURE__ */ new Map();
    function registerSubpackages2(pkg) {
      for (const subPkg of pkg.getESubpackages()) {
        const subNsURI = subPkg.getNsURI();
        if (subNsURI) {
          map.set(subNsURI, subPkg);
        }
        registerSubpackages2(subPkg);
      }
    }
    return {
      getEPackage(nsURI) {
        const value = map.get(nsURI);
        if (value) {
          if ("getEPackage" in value)
            return value.getEPackage();
          return value;
        }
        return EPackageRegistry.INSTANCE.getEPackage(nsURI);
      },
      getEFactory(nsURI) {
        const pkg = this.getEPackage(nsURI);
        return pkg ? pkg.getEFactoryInstance() : null;
      },
      get(nsURI) {
        return map.get(nsURI) || EPackageRegistry.INSTANCE.get(nsURI);
      },
      set(nsURI, value) {
        map.set(nsURI, value);
        if (value && !("getEPackage" in value) && typeof value.getESubpackages === "function") {
          registerSubpackages2(value);
        }
      },
      registerPackage(ePackage) {
        this.set(requireNsURI(ePackage), ePackage);
      },
      delete(nsURI) {
        return map.delete(nsURI);
      },
      has(nsURI) {
        return map.has(nsURI) || EPackageRegistry.INSTANCE.has(nsURI);
      },
      keys() {
        return map.keys();
      },
      values() {
        return map.values();
      }
    };
  }
  /**
   * Create default URI converter
   */
  createDefaultURIConverter() {
    const uriMap = /* @__PURE__ */ new Map();
    return {
      normalize(uri) {
        for (const [source, target] of uriMap.entries()) {
          const sourceStr = source.toString();
          const uriStr = uri.toString();
          if (uriStr.startsWith(sourceStr)) {
            const remainder = uriStr.substring(sourceStr.length);
            return URI.createURI(target.toString() + remainder);
          }
        }
        return uri;
      },
      async createInputStream(uri) {
        throw new Error("createInputStream not implemented");
      },
      async createOutputStream(uri) {
        throw new Error("createOutputStream not implemented");
      },
      async exists(uri) {
        return false;
      },
      async delete(uri) {
        throw new Error("delete not implemented");
      },
      getURIMap() {
        return uriMap;
      }
    };
  }
}
class SyntheticPackageResource {
  constructor(uri, ePackage) {
    this.resourceSet = null;
    this.uri = uri;
    this._syntheticPackage = ePackage;
    const list = new BasicEList(null, null);
    list.add(ePackage);
    this._contents = createIndexedProxy(list);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(resourceSet) {
    this.resourceSet = resourceSet;
  }
  getURI() {
    return this.uri;
  }
  setURI(uri) {
    if (uri)
      this.uri = uri;
  }
  getContents() {
    return this._contents;
  }
  getAllContents() {
    const contents = this._contents.toArray();
    return contents[Symbol.iterator]();
  }
  getEObject(uriFragment) {
    let path = uriFragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return this._syntheticPackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(this._syntheticPackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = this._syntheticPackage;
      for (let i = 0; i < segments.length - 2; i++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j = 0; j < subPackages.length; j++) {
          if (subPackages.get(j).getName() === segments[i]) {
            found = subPackages.get(j);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  getURIFragment(eObject) {
    if (eObject === this._syntheticPackage) {
      return "/";
    }
    for (const classifier of this._syntheticPackage.getEClassifiers()) {
      if (classifier === eObject) {
        return "//" + classifier.getName();
      }
    }
    return "";
  }
  async save(options) {
  }
  async load(options) {
  }
  isLoaded() {
    return true;
  }
  unload() {
  }
  isModified() {
    return false;
  }
  setModified(isModified) {
  }
  getErrors() {
    return [];
  }
  getWarnings() {
    return [];
  }
}
class BasicEAnnotation extends BasicEObject {
  constructor() {
    super(...arguments);
    this.source = null;
    this._detailsMap = null;
    this.eModelElement = null;
    this.contents = createMetamodelEList(this);
    this.references = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const eAnnotationClass = ecoreRegistry.getEAnnotationClass();
      const detailsFeature = eAnnotationClass.getEStructuralFeature("details");
      const entryEClass = ecoreRegistry.getEStringToStringMapEntryClass();
      this._detailsMap = createEMap(this, detailsFeature, entryEClass);
    }
    return this._detailsMap;
  }
  getSource() {
    return this.source;
  }
  setSource(value) {
    this.source = value;
  }
  getDetails() {
    return this.getOrCreateDetailsMap();
  }
  getEModelElement() {
    return this.eModelElement;
  }
  setEModelElement(value) {
    this.eModelElement = value;
  }
  getContents() {
    return this.contents;
  }
  getReferences() {
    return this.references;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEAnnotationClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "source":
        return this.source;
      case "details":
        return this.getOrCreateDetailsMap();
      case "eModelElement":
        return this.eModelElement;
      case "contents":
        return this.contents;
      case "references":
        return this.references;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "source":
        this.source = newValue;
        super.eSet(feature, newValue);
        break;
      case "details":
        if (newValue instanceof Map) {
          const map = this.getOrCreateDetailsMap();
          map.clear();
          for (const [k, v] of newValue) {
            map.putByKey(k, v);
          }
        }
        super.eSet(feature, newValue);
        break;
      case "eModelElement":
        this.eModelElement = newValue;
        super.eSet(feature, newValue);
        break;
      case "contents":
        replaceListContents(this.contents, newValue);
        break;
      case "references":
        replaceListContents(this.references, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEEnumLiteral extends BasicEObject {
  constructor() {
    super(...arguments);
    this._name = null;
    this._value = 0;
    this.instance = null;
    this.literal = null;
    this.eEnum = null;
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
  }
  getInstance() {
    return this.instance;
  }
  setInstance(value) {
    this.instance = value;
  }
  /**
   * Returns the literal string, falling back to the name when no explicit
   * literal is set. In .ecore files the `literal` attribute is usually
   * omitted, so without this fallback lookups by literal would never match.
   */
  getLiteral() {
    return this.literal ?? this._name;
  }
  setLiteral(value) {
    this.literal = value;
  }
  getEEnum() {
    return this.eEnum;
  }
  setEEnum(value) {
    this.eEnum = value;
  }
  // EModelElement methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEEnumLiteralClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this._name;
      case "value":
        return this._value;
      case "instance":
        return this.instance;
      case "literal":
        return this.literal;
      case "eEnum":
        return this.eEnum;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this._name = newValue;
        super.eSet(feature, newValue);
        break;
      case "value":
        this._value = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "instance":
        this.instance = newValue;
        super.eSet(feature, newValue);
        break;
      case "literal":
        this.literal = newValue;
        super.eSet(feature, newValue);
        break;
      case "eEnum":
        this.eEnum = newValue;
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEEnum extends BasicEDataType {
  constructor() {
    super(...arguments);
    this.eLiterals = createMetamodelEList(this);
  }
  getELiterals() {
    return this.eLiterals;
  }
  /**
   * Returns the literal with the given name or ordinal value.
   */
  getEEnumLiteral(nameOrValue) {
    if (typeof nameOrValue === "string") {
      return this.eLiterals.find((l) => l.getName() === nameOrValue) || null;
    } else {
      return this.eLiterals.find((l) => l.getValue() === nameOrValue) || null;
    }
  }
  /**
   * Returns the literal with the given literal string.
   */
  getEEnumLiteralByLiteral(literal) {
    return this.eLiterals.find((l) => l.getLiteral() === literal) || null;
  }
  /**
   * Add a literal to this enum.
   */
  addLiteral(literal) {
    literal.setEEnum(this);
    this.eLiterals.push(literal);
  }
  eClass() {
    return ecoreRegistry.getEEnumClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "eLiterals":
        return this.eLiterals;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "eLiterals":
        if (replaceListContents(this.eLiterals, newValue)) {
          for (const lit of this.eLiterals) {
            if (lit instanceof BasicEEnumLiteral) {
              lit.setEEnum(this);
            }
          }
        }
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEOperation extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eContainingClass = null;
    this.eType = null;
    this.eParameters = createMetamodelEList(this);
    this.eExceptions = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
    this.eGenericType = null;
    this.eTypeParameters = createMetamodelEList(this);
    this.ordered = true;
    this.unique = true;
    this.lowerBound = 0;
    this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(value) {
    this.eContainingClass = value;
  }
  getEType() {
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  setEType(value) {
    this.eType = value;
  }
  getEParameters() {
    return this.eParameters;
  }
  addParameter(parameter) {
    this.eParameters.add(parameter);
  }
  getEExceptions() {
    return this.eExceptions;
  }
  addException(exception) {
    this.eExceptions.add(exception);
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getOperationID() {
    if (!this.eContainingClass)
      return -1;
    return this.eContainingClass.getOperationID(this);
  }
  isOverrideOf(someOperation) {
    if (this.name !== someOperation.getName()) {
      return false;
    }
    const myParams = this.eParameters;
    const otherParams = someOperation.getEParameters();
    if (myParams.length !== otherParams.length) {
      return false;
    }
    for (let i = 0; i < myParams.length; i++) {
      const myParamType = myParams[i].getEType();
      const otherParamType = otherParams[i].getEType();
      if (myParamType !== otherParamType) {
        return false;
      }
    }
    if (!this.eContainingClass || !someOperation.getEContainingClass()) {
      return false;
    }
    return this.eContainingClass.getEAllSuperTypes().includes(someOperation.getEContainingClass());
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(value) {
    this.ordered = value;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(value) {
    this.unique = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEOperationClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eParameters":
        return this.eParameters;
      case "eExceptions":
        return this.eExceptions;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eType":
        this.eType = newValue;
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      case "eParameters":
        replaceListContents(this.eParameters, newValue);
        break;
      case "eExceptions":
        replaceListContents(this.eExceptions, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "ordered":
        this.ordered = newValue === true || newValue === "true";
        break;
      case "unique":
        this.unique = newValue === true || newValue === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(newValue);
        break;
      case "upperBound":
        this.upperBound = Number(newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicEParameter extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eType = null;
    this.eOperation = null;
    this.eAnnotations = createMetamodelEList(this);
    this.eGenericType = null;
    this.ordered = true;
    this.unique = true;
    this.lowerBound = 0;
    this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEType() {
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  setEType(value) {
    this.eType = value;
  }
  getEOperation() {
    return this.eOperation;
  }
  setEOperation(value) {
    this.eOperation = value;
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(value) {
    this.ordered = value;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(value) {
    this.unique = value;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEParameterClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eType":
        this.eType = newValue;
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "ordered":
        this.ordered = newValue === true || newValue === "true";
        break;
      case "unique":
        this.unique = newValue === true || newValue === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(newValue);
        break;
      case "upperBound":
        this.upperBound = Number(newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicEGenericType extends BasicEObject {
  constructor() {
    super(...arguments);
    this.eClassifier = null;
    this.eTypeParameter = null;
    this.eTypeArguments = createMetamodelEList(this);
    this.eUpperBound = null;
    this.eLowerBound = null;
  }
  getEClassifier() {
    return this.eClassifier;
  }
  setEClassifier(value) {
    this.eClassifier = value;
  }
  getETypeParameter() {
    return this.eTypeParameter;
  }
  setETypeParameter(value) {
    this.eTypeParameter = value;
  }
  getETypeArguments() {
    return this.eTypeArguments;
  }
  getEUpperBound() {
    return this.eUpperBound;
  }
  setEUpperBound(value) {
    this.eUpperBound = value;
  }
  getELowerBound() {
    return this.eLowerBound;
  }
  setELowerBound(value) {
    this.eLowerBound = value;
  }
  /**
   * The erasure of this generic type. For a classifier reference that is the
   * classifier itself; for a type parameter it is the erasure of its first
   * bound, mirroring Java EMF's EGenericTypeImpl.getERawType().
   */
  getERawType() {
    if (this.eClassifier) {
      return this.eClassifier;
    }
    if (this.eTypeParameter) {
      const bounds = this.eTypeParameter.getEBounds();
      if (bounds.length > 0) {
        return bounds[0].getERawType();
      }
    }
    if (this.eUpperBound) {
      return this.eUpperBound.getERawType();
    }
    return ecoreRegistry.getEObjectClass();
  }
  eClass() {
    return ecoreRegistry.getEGenericTypeClass();
  }
  eGet(feature) {
    switch (feature.getName()) {
      case "eClassifier":
        return this.eClassifier;
      case "eTypeParameter":
        return this.eTypeParameter;
      case "eTypeArguments":
        return this.eTypeArguments;
      case "eUpperBound":
        return this.eUpperBound;
      case "eLowerBound":
        return this.eLowerBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "eClassifier":
        this.eClassifier = newValue;
        break;
      case "eTypeParameter":
        this.eTypeParameter = newValue;
        break;
      case "eTypeArguments":
        replaceListContents(this.eTypeArguments, newValue);
        break;
      case "eUpperBound":
        this.eUpperBound = newValue;
        break;
      case "eLowerBound":
        this.eLowerBound = newValue;
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicETypeParameter extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eBounds = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEBounds() {
    return this.eBounds;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a) => a.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getETypeParameterClass();
  }
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eBounds":
        return this.eBounds;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eBounds":
        replaceListContents(this.eBounds, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
const XML_TYPE_NS_PREFIX = "ecore.xml.type";
let xmlTypePackageInstance = null;
function getXMLTypePackage() {
  if (!xmlTypePackageInstance) {
    xmlTypePackageInstance = new XMLTypePackageImpl();
    xmlTypePackageInstance.initialize();
    EPackageRegistry.INSTANCE.set(XML_TYPE_NS_URI, xmlTypePackageInstance);
  }
  return xmlTypePackageInstance;
}
const DATA_TYPE_DEFS = [
  // Commonly used
  ["AnySimpleType", "java.lang.Object"],
  ["AnyURI", "java.lang.String"],
  ["Base64Binary", "byte[]"],
  ["Boolean", "boolean"],
  ["BooleanObject", "java.lang.Boolean"],
  ["Byte", "byte"],
  ["ByteObject", "java.lang.Byte"],
  ["Date", "javax.xml.datatype.XMLGregorianCalendar"],
  ["DateTime", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Decimal", "java.math.BigDecimal"],
  ["Double", "double"],
  ["DoubleObject", "java.lang.Double"],
  ["Duration", "javax.xml.datatype.Duration"],
  ["ENTITIES", "java.util.List"],
  ["ENTITIESBase", "java.util.List"],
  ["ENTITY", "java.lang.String"],
  ["Float", "float"],
  ["FloatObject", "java.lang.Float"],
  ["GDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonthDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYear", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYearMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["HexBinary", "byte[]"],
  ["ID", "java.lang.String"],
  ["IDREF", "java.lang.String"],
  ["IDREFS", "java.util.List"],
  ["IDREFSBase", "java.util.List"],
  ["Int", "int"],
  ["Integer", "java.math.BigInteger"],
  ["IntObject", "java.lang.Integer"],
  ["Language", "java.lang.String"],
  ["Long", "long"],
  ["LongObject", "java.lang.Long"],
  ["Name", "java.lang.String"],
  ["NCName", "java.lang.String"],
  ["NegativeInteger", "java.math.BigInteger"],
  ["NMTOKEN", "java.lang.String"],
  ["NMTOKENS", "java.util.List"],
  ["NMTOKENSBase", "java.util.List"],
  ["NonNegativeInteger", "java.math.BigInteger"],
  ["NonPositiveInteger", "java.math.BigInteger"],
  ["NormalizedString", "java.lang.String"],
  ["NOTATION", "javax.xml.namespace.QName"],
  ["PositiveInteger", "java.math.BigInteger"],
  ["QName", "javax.xml.namespace.QName"],
  ["Short", "short"],
  ["ShortObject", "java.lang.Short"],
  ["String", "java.lang.String"],
  ["Time", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Token", "java.lang.String"],
  ["UnsignedByte", "short"],
  ["UnsignedByteObject", "java.lang.Short"],
  ["UnsignedInt", "long"],
  ["UnsignedIntObject", "java.lang.Long"],
  ["UnsignedLong", "java.math.BigInteger"],
  ["UnsignedShort", "int"],
  ["UnsignedShortObject", "java.lang.Integer"]
];
class XMLTypePackageImpl extends BasicEPackage {
  constructor() {
    super();
    this._dataTypes = /* @__PURE__ */ new Map();
    this._initialized = false;
    this.setName("type");
    this.setNsURI(XML_TYPE_NS_URI);
    this.setNsPrefix(XML_TYPE_NS_PREFIX);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = true;
    for (const [name, instanceClassName] of DATA_TYPE_DEFS) {
      const dt = new BasicEDataType();
      dt.setName(name);
      dt.setInstanceClassName(instanceClassName);
      this.getEClassifiers().push(dt);
      this._dataTypes.set(name, dt);
    }
    for (const classifier of this.getEClassifiers()) {
      if ("setEPackage" in classifier) {
        classifier.setEPackage(this);
      }
    }
    const factory = new XMLTypeFactory(this);
    this.setEFactoryInstance(factory);
    this.registerConverters();
  }
  registerConverters() {
    const boolConv = { fromString: (s) => s.toLowerCase() === "true" || s === "1", toString: (v) => String(v) };
    dataTypeRegistry.registerByName("Boolean", boolConv);
    dataTypeRegistry.registerByName("BooleanObject", boolConv);
    const intConv = { fromString: (s) => parseInt(s, 10), toString: (v) => String(v) };
    dataTypeRegistry.registerByName("Int", intConv);
    dataTypeRegistry.registerByName("IntObject", intConv);
    dataTypeRegistry.registerByName("Short", intConv);
    dataTypeRegistry.registerByName("ShortObject", intConv);
    dataTypeRegistry.registerByName("Byte", intConv);
    dataTypeRegistry.registerByName("ByteObject", intConv);
    dataTypeRegistry.registerByName("UnsignedByte", intConv);
    dataTypeRegistry.registerByName("UnsignedByteObject", intConv);
    dataTypeRegistry.registerByName("UnsignedShort", intConv);
    dataTypeRegistry.registerByName("UnsignedShortObject", intConv);
    dataTypeRegistry.registerByName("UnsignedInt", intConv);
    dataTypeRegistry.registerByName("UnsignedIntObject", intConv);
    const longConv = {
      fromString: (s) => {
        const n = parseInt(s, 10);
        return Math.abs(n) > Number.MAX_SAFE_INTEGER ? BigInt(s) : n;
      },
      toString: (v) => String(v)
    };
    dataTypeRegistry.registerByName("Long", longConv);
    dataTypeRegistry.registerByName("LongObject", longConv);
    const floatConv = { fromString: (s) => parseFloat(s), toString: (v) => String(v) };
    dataTypeRegistry.registerByName("Float", floatConv);
    dataTypeRegistry.registerByName("FloatObject", floatConv);
    dataTypeRegistry.registerByName("Double", floatConv);
    dataTypeRegistry.registerByName("DoubleObject", floatConv);
    const bigConv = { fromString: (s) => s, toString: (v) => v ?? "0" };
    dataTypeRegistry.registerByName("Decimal", bigConv);
    dataTypeRegistry.registerByName("Integer", bigConv);
    dataTypeRegistry.registerByName("NonNegativeInteger", bigConv);
    dataTypeRegistry.registerByName("NonPositiveInteger", bigConv);
    dataTypeRegistry.registerByName("NegativeInteger", bigConv);
    dataTypeRegistry.registerByName("PositiveInteger", bigConv);
    dataTypeRegistry.registerByName("UnsignedLong", bigConv);
    const strConv = { fromString: (s) => s, toString: (v) => v ?? "" };
    dataTypeRegistry.registerByName("String", strConv);
    dataTypeRegistry.registerByName("AnySimpleType", strConv);
    dataTypeRegistry.registerByName("AnyURI", strConv);
    dataTypeRegistry.registerByName("NormalizedString", strConv);
    dataTypeRegistry.registerByName("Token", strConv);
    dataTypeRegistry.registerByName("Name", strConv);
    dataTypeRegistry.registerByName("NCName", strConv);
    dataTypeRegistry.registerByName("Language", strConv);
    dataTypeRegistry.registerByName("ID", strConv);
    dataTypeRegistry.registerByName("IDREF", strConv);
    dataTypeRegistry.registerByName("ENTITY", strConv);
    dataTypeRegistry.registerByName("NMTOKEN", strConv);
    dataTypeRegistry.registerByName("Date", strConv);
    dataTypeRegistry.registerByName("DateTime", strConv);
    dataTypeRegistry.registerByName("Time", strConv);
    dataTypeRegistry.registerByName("Duration", strConv);
    dataTypeRegistry.registerByName("GDay", strConv);
    dataTypeRegistry.registerByName("GMonth", strConv);
    dataTypeRegistry.registerByName("GMonthDay", strConv);
    dataTypeRegistry.registerByName("GYear", strConv);
    dataTypeRegistry.registerByName("GYearMonth", strConv);
    dataTypeRegistry.registerByName("QName", strConv);
    dataTypeRegistry.registerByName("NOTATION", strConv);
  }
  getDataType(name) {
    return this._dataTypes.get(name) ?? null;
  }
}
class XMLTypeFactory extends BasicEFactory {
  constructor(ePackage) {
    super();
    this._ePackage = ePackage;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(eClass) {
    return super.create(eClass);
  }
}
const ECORE_NS_URI = "http://www.eclipse.org/emf/2002/Ecore";
const ECORE_NS_PREFIX = "ecore";
const XML_TYPE_NS_URI = "http://www.eclipse.org/emf/2003/XMLType";
let ecorePackageInstance = null;
function getEcorePackage() {
  if (!ecorePackageInstance) {
    ecorePackageInstance = new EcorePackageImpl();
    ecorePackageInstance.initialize();
    registerEcorePackage();
    ecoreRegistry.register(getEcorePackage);
  }
  return ecorePackageInstance;
}
function registerEcorePackage() {
  if (ecorePackageInstance) {
    EPackageRegistry.INSTANCE.set(ECORE_NS_URI, ecorePackageInstance);
    getXMLTypePackage();
  }
}
class EcorePackageImpl extends BasicEPackage {
  constructor() {
    super();
    this._initialized = false;
    this.setName("ecore");
    this.setNsURI(ECORE_NS_URI);
    this.setNsPrefix(ECORE_NS_PREFIX);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = true;
    this.createDataTypes();
    this.createClasses();
    this.createAttributes();
    this.createReferences();
    this.initializeClassifierPackages();
    const factory = new EcoreFactory(this);
    this.setEFactoryInstance(factory);
  }
  /**
   * Set the ePackage reference on all classifiers
   */
  initializeClassifierPackages() {
    for (const classifier of this.getEClassifiers()) {
      if ("setEPackage" in classifier) {
        classifier.setEPackage(this);
      }
    }
  }
  createDataTypes() {
    this._eBooleanDataType = new BasicEDataType();
    this._eBooleanDataType.setName("EBoolean");
    this._eBooleanDataType.setInstanceClassName("boolean");
    this.getEClassifiers().push(this._eBooleanDataType);
    this._eIntDataType = new BasicEDataType();
    this._eIntDataType.setName("EInt");
    this._eIntDataType.setInstanceClassName("int");
    this.getEClassifiers().push(this._eIntDataType);
    this._eStringDataType = new BasicEDataType();
    this._eStringDataType.setName("EString");
    this._eStringDataType.setInstanceClassName("java.lang.String");
    this.getEClassifiers().push(this._eStringDataType);
    this._eDoubleDataType = new BasicEDataType();
    this._eDoubleDataType.setName("EDouble");
    this._eDoubleDataType.setInstanceClassName("double");
    this.getEClassifiers().push(this._eDoubleDataType);
    this._eFloatDataType = new BasicEDataType();
    this._eFloatDataType.setName("EFloat");
    this._eFloatDataType.setInstanceClassName("float");
    this.getEClassifiers().push(this._eFloatDataType);
    this._eLongDataType = new BasicEDataType();
    this._eLongDataType.setName("ELong");
    this._eLongDataType.setInstanceClassName("long");
    this.getEClassifiers().push(this._eLongDataType);
    this._eShortDataType = new BasicEDataType();
    this._eShortDataType.setName("EShort");
    this._eShortDataType.setInstanceClassName("short");
    this.getEClassifiers().push(this._eShortDataType);
    this._eByteDataType = new BasicEDataType();
    this._eByteDataType.setName("EByte");
    this._eByteDataType.setInstanceClassName("byte");
    this.getEClassifiers().push(this._eByteDataType);
    this._eCharDataType = new BasicEDataType();
    this._eCharDataType.setName("EChar");
    this._eCharDataType.setInstanceClassName("char");
    this.getEClassifiers().push(this._eCharDataType);
    this._eDateDataType = new BasicEDataType();
    this._eDateDataType.setName("EDate");
    this._eDateDataType.setInstanceClassName("java.util.Date");
    this.getEClassifiers().push(this._eDateDataType);
    this._eBigIntegerDataType = new BasicEDataType();
    this._eBigIntegerDataType.setName("EBigInteger");
    this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger");
    this.getEClassifiers().push(this._eBigIntegerDataType);
    this._eBigDecimalDataType = new BasicEDataType();
    this._eBigDecimalDataType.setName("EBigDecimal");
    this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal");
    this.getEClassifiers().push(this._eBigDecimalDataType);
    this._eFeatureMapEntryDataType = new BasicEDataType();
    this._eFeatureMapEntryDataType.setName("EFeatureMapEntry");
    this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry");
    this.getEClassifiers().push(this._eFeatureMapEntryDataType);
    this._eJavaObjectDataType = new BasicEDataType();
    this._eJavaObjectDataType.setName("EJavaObject");
    this._eJavaObjectDataType.setInstanceClassName("java.lang.Object");
    this.getEClassifiers().push(this._eJavaObjectDataType);
    this._eJavaClassDataType = new BasicEDataType();
    this._eJavaClassDataType.setName("EJavaClass");
    this._eJavaClassDataType.setInstanceClassName("java.lang.Class");
    this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new BasicEClass();
    this._eObjectClass.setName("EObject");
    this.getEClassifiers().push(this._eObjectClass);
    this._eModelElementClass = new BasicEClass();
    this._eModelElementClass.setName("EModelElement");
    this._eModelElementClass.setAbstract(true);
    this._eModelElementClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eModelElementClass);
    this._eNamedElementClass = new BasicEClass();
    this._eNamedElementClass.setName("ENamedElement");
    this._eNamedElementClass.setAbstract(true);
    this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eNamedElementClass);
    this._eTypedElementClass = new BasicEClass();
    this._eTypedElementClass.setName("ETypedElement");
    this._eTypedElementClass.setAbstract(true);
    this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eTypedElementClass);
    this._eClassifierClass = new BasicEClass();
    this._eClassifierClass.setName("EClassifier");
    this._eClassifierClass.setAbstract(true);
    this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eClassifierClass);
    this._eClassClass = new BasicEClass();
    this._eClassClass.setName("EClass");
    this._eClassClass.getESuperTypes().push(this._eClassifierClass);
    this.getEClassifiers().push(this._eClassClass);
    this._eDataTypeClass = new BasicEClass();
    this._eDataTypeClass.setName("EDataType");
    this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass);
    this.getEClassifiers().push(this._eDataTypeClass);
    this._eEnumClass = new BasicEClass();
    this._eEnumClass.setName("EEnum");
    this._eEnumClass.getESuperTypes().push(this._eDataTypeClass);
    this.getEClassifiers().push(this._eEnumClass);
    this._eEnumLiteralClass = new BasicEClass();
    this._eEnumLiteralClass.setName("EEnumLiteral");
    this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eEnumLiteralClass);
    this._ePackageClass = new BasicEClass();
    this._ePackageClass.setName("EPackage");
    this._ePackageClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._ePackageClass);
    this._eFactoryClass = new BasicEClass();
    this._eFactoryClass.setName("EFactory");
    this._eFactoryClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eFactoryClass);
    this._eStructuralFeatureClass = new BasicEClass();
    this._eStructuralFeatureClass.setName("EStructuralFeature");
    this._eStructuralFeatureClass.setAbstract(true);
    this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eStructuralFeatureClass);
    this._eAttributeClass = new BasicEClass();
    this._eAttributeClass.setName("EAttribute");
    this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass);
    this.getEClassifiers().push(this._eAttributeClass);
    this._eReferenceClass = new BasicEClass();
    this._eReferenceClass.setName("EReference");
    this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass);
    this.getEClassifiers().push(this._eReferenceClass);
    this._eOperationClass = new BasicEClass();
    this._eOperationClass.setName("EOperation");
    this._eOperationClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eOperationClass);
    this._eParameterClass = new BasicEClass();
    this._eParameterClass.setName("EParameter");
    this._eParameterClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eParameterClass);
    this._eAnnotationClass = new BasicEClass();
    this._eAnnotationClass.setName("EAnnotation");
    this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eAnnotationClass);
    this._eTypeParameterClass = new BasicEClass();
    this._eTypeParameterClass.setName("ETypeParameter");
    this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eTypeParameterClass);
    this._eGenericTypeClass = new BasicEClass();
    this._eGenericTypeClass.setName("EGenericType");
    this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eGenericTypeClass);
    this._eStringToStringMapEntryClass = new BasicEClass();
    this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry");
    this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const nameAttr = new BasicEAttribute();
    nameAttr.setName("name");
    nameAttr.setEType(this._eStringDataType);
    this._eNamedElementClass.getEStructuralFeatures().push(nameAttr);
    const orderedAttr = new BasicEAttribute();
    orderedAttr.setName("ordered");
    orderedAttr.setEType(this._eBooleanDataType);
    orderedAttr.setDefaultValueLiteral("true");
    this._eTypedElementClass.getEStructuralFeatures().push(orderedAttr);
    const uniqueAttr = new BasicEAttribute();
    uniqueAttr.setName("unique");
    uniqueAttr.setEType(this._eBooleanDataType);
    uniqueAttr.setDefaultValueLiteral("true");
    this._eTypedElementClass.getEStructuralFeatures().push(uniqueAttr);
    const lowerBoundAttr = new BasicEAttribute();
    lowerBoundAttr.setName("lowerBound");
    lowerBoundAttr.setEType(this._eIntDataType);
    lowerBoundAttr.setDefaultValueLiteral("0");
    this._eTypedElementClass.getEStructuralFeatures().push(lowerBoundAttr);
    const upperBoundAttr = new BasicEAttribute();
    upperBoundAttr.setName("upperBound");
    upperBoundAttr.setEType(this._eIntDataType);
    upperBoundAttr.setDefaultValueLiteral("1");
    this._eTypedElementClass.getEStructuralFeatures().push(upperBoundAttr);
    const instanceClassNameAttr = new BasicEAttribute();
    instanceClassNameAttr.setName("instanceClassName");
    instanceClassNameAttr.setEType(this._eStringDataType);
    this._eClassifierClass.getEStructuralFeatures().push(instanceClassNameAttr);
    const abstractAttr = new BasicEAttribute();
    abstractAttr.setName("abstract");
    abstractAttr.setEType(this._eBooleanDataType);
    abstractAttr.setDefaultValueLiteral("false");
    this._eClassClass.getEStructuralFeatures().push(abstractAttr);
    const interfaceAttr = new BasicEAttribute();
    interfaceAttr.setName("interface");
    interfaceAttr.setEType(this._eBooleanDataType);
    interfaceAttr.setDefaultValueLiteral("false");
    this._eClassClass.getEStructuralFeatures().push(interfaceAttr);
    const nsURIAttr = new BasicEAttribute();
    nsURIAttr.setName("nsURI");
    nsURIAttr.setEType(this._eStringDataType);
    this._ePackageClass.getEStructuralFeatures().push(nsURIAttr);
    const nsPrefixAttr = new BasicEAttribute();
    nsPrefixAttr.setName("nsPrefix");
    nsPrefixAttr.setEType(this._eStringDataType);
    this._ePackageClass.getEStructuralFeatures().push(nsPrefixAttr);
    const changeableAttr = new BasicEAttribute();
    changeableAttr.setName("changeable");
    changeableAttr.setEType(this._eBooleanDataType);
    changeableAttr.setDefaultValueLiteral("true");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(changeableAttr);
    const volatileAttr = new BasicEAttribute();
    volatileAttr.setName("volatile");
    volatileAttr.setEType(this._eBooleanDataType);
    volatileAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(volatileAttr);
    const transientAttr = new BasicEAttribute();
    transientAttr.setName("transient");
    transientAttr.setEType(this._eBooleanDataType);
    transientAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(transientAttr);
    const defaultValueLiteralAttr = new BasicEAttribute();
    defaultValueLiteralAttr.setName("defaultValueLiteral");
    defaultValueLiteralAttr.setEType(this._eStringDataType);
    this._eStructuralFeatureClass.getEStructuralFeatures().push(defaultValueLiteralAttr);
    const unsettableAttr = new BasicEAttribute();
    unsettableAttr.setName("unsettable");
    unsettableAttr.setEType(this._eBooleanDataType);
    unsettableAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(unsettableAttr);
    const derivedAttr = new BasicEAttribute();
    derivedAttr.setName("derived");
    derivedAttr.setEType(this._eBooleanDataType);
    derivedAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(derivedAttr);
    const idAttr = new BasicEAttribute();
    idAttr.setName("iD");
    idAttr.setEType(this._eBooleanDataType);
    idAttr.setDefaultValueLiteral("false");
    this._eAttributeClass.getEStructuralFeatures().push(idAttr);
    const containmentAttr = new BasicEAttribute();
    containmentAttr.setName("containment");
    containmentAttr.setEType(this._eBooleanDataType);
    containmentAttr.setDefaultValueLiteral("false");
    this._eReferenceClass.getEStructuralFeatures().push(containmentAttr);
    const resolveProxiesAttr = new BasicEAttribute();
    resolveProxiesAttr.setName("resolveProxies");
    resolveProxiesAttr.setEType(this._eBooleanDataType);
    resolveProxiesAttr.setDefaultValueLiteral("true");
    this._eReferenceClass.getEStructuralFeatures().push(resolveProxiesAttr);
    const valueAttr = new BasicEAttribute();
    valueAttr.setName("value");
    valueAttr.setEType(this._eIntDataType);
    valueAttr.setDefaultValueLiteral("0");
    this._eEnumLiteralClass.getEStructuralFeatures().push(valueAttr);
    const literalAttr = new BasicEAttribute();
    literalAttr.setName("literal");
    literalAttr.setEType(this._eStringDataType);
    this._eEnumLiteralClass.getEStructuralFeatures().push(literalAttr);
    const sourceAttr = new BasicEAttribute();
    sourceAttr.setName("source");
    sourceAttr.setEType(this._eStringDataType);
    this._eAnnotationClass.getEStructuralFeatures().push(sourceAttr);
    const keyAttr = new BasicEAttribute();
    keyAttr.setName("key");
    keyAttr.setEType(this._eStringDataType);
    this._eStringToStringMapEntryClass.getEStructuralFeatures().push(keyAttr);
    const mapValueAttr = new BasicEAttribute();
    mapValueAttr.setName("value");
    mapValueAttr.setEType(this._eStringDataType);
    this._eStringToStringMapEntryClass.getEStructuralFeatures().push(mapValueAttr);
    const serializableAttr = new BasicEAttribute();
    serializableAttr.setName("serializable");
    serializableAttr.setEType(this._eBooleanDataType);
    serializableAttr.setDefaultValueLiteral("true");
    this._eDataTypeClass.getEStructuralFeatures().push(serializableAttr);
  }
  createReferences() {
    const eAnnotationsRef = new BasicEReference();
    eAnnotationsRef.setName("eAnnotations");
    eAnnotationsRef.setEType(this._eAnnotationClass);
    eAnnotationsRef.setContainment(true);
    eAnnotationsRef.setUpperBound(-1);
    this._eModelElementClass.getEStructuralFeatures().push(eAnnotationsRef);
    const eTypeRef = new BasicEReference();
    eTypeRef.setName("eType");
    eTypeRef.setEType(this._eClassifierClass);
    this._eTypedElementClass.getEStructuralFeatures().push(eTypeRef);
    const eSuperTypesRef = new BasicEReference();
    eSuperTypesRef.setName("eSuperTypes");
    eSuperTypesRef.setEType(this._eClassClass);
    eSuperTypesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eSuperTypesRef);
    const eStructuralFeaturesRef = new BasicEReference();
    eStructuralFeaturesRef.setName("eStructuralFeatures");
    eStructuralFeaturesRef.setEType(this._eStructuralFeatureClass);
    eStructuralFeaturesRef.setContainment(true);
    eStructuralFeaturesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eStructuralFeaturesRef);
    const eOperationsRef = new BasicEReference();
    eOperationsRef.setName("eOperations");
    eOperationsRef.setEType(this._eOperationClass);
    eOperationsRef.setContainment(true);
    eOperationsRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eOperationsRef);
    const eClassifiersRef = new BasicEReference();
    eClassifiersRef.setName("eClassifiers");
    eClassifiersRef.setEType(this._eClassifierClass);
    eClassifiersRef.setContainment(true);
    eClassifiersRef.setUpperBound(-1);
    this._ePackageClass.getEStructuralFeatures().push(eClassifiersRef);
    const eSubpackagesRef = new BasicEReference();
    eSubpackagesRef.setName("eSubpackages");
    eSubpackagesRef.setEType(this._ePackageClass);
    eSubpackagesRef.setContainment(true);
    eSubpackagesRef.setUpperBound(-1);
    this._ePackageClass.getEStructuralFeatures().push(eSubpackagesRef);
    const eFactoryInstanceRef = new BasicEReference();
    eFactoryInstanceRef.setName("eFactoryInstance");
    eFactoryInstanceRef.setEType(this._eFactoryClass);
    this._ePackageClass.getEStructuralFeatures().push(eFactoryInstanceRef);
    const eLiteralsRef = new BasicEReference();
    eLiteralsRef.setName("eLiterals");
    eLiteralsRef.setEType(this._eEnumLiteralClass);
    eLiteralsRef.setContainment(true);
    eLiteralsRef.setUpperBound(-1);
    this._eEnumClass.getEStructuralFeatures().push(eLiteralsRef);
    const eOppositeRef = new BasicEReference();
    eOppositeRef.setName("eOpposite");
    eOppositeRef.setEType(this._eReferenceClass);
    this._eReferenceClass.getEStructuralFeatures().push(eOppositeRef);
    const eParametersRef = new BasicEReference();
    eParametersRef.setName("eParameters");
    eParametersRef.setEType(this._eParameterClass);
    eParametersRef.setContainment(true);
    eParametersRef.setUpperBound(-1);
    this._eOperationClass.getEStructuralFeatures().push(eParametersRef);
    const detailsRef = new BasicEReference();
    detailsRef.setName("details");
    detailsRef.setEType(this._eStringToStringMapEntryClass);
    detailsRef.setContainment(true);
    detailsRef.setUpperBound(-1);
    this._eAnnotationClass.getEStructuralFeatures().push(detailsRef);
    const eGenericTypeRef = new BasicEReference();
    eGenericTypeRef.setName("eGenericType");
    eGenericTypeRef.setEType(this._eGenericTypeClass);
    eGenericTypeRef.setContainment(true);
    this._eTypedElementClass.getEStructuralFeatures().push(eGenericTypeRef);
    const eTypeParametersRef = new BasicEReference();
    eTypeParametersRef.setName("eTypeParameters");
    eTypeParametersRef.setEType(this._eTypeParameterClass);
    eTypeParametersRef.setContainment(true);
    eTypeParametersRef.setUpperBound(-1);
    this._eClassifierClass.getEStructuralFeatures().push(eTypeParametersRef);
    const eGenericSuperTypesRef = new BasicEReference();
    eGenericSuperTypesRef.setName("eGenericSuperTypes");
    eGenericSuperTypesRef.setEType(this._eGenericTypeClass);
    eGenericSuperTypesRef.setContainment(true);
    eGenericSuperTypesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eGenericSuperTypesRef);
    const eOperationTypeParametersRef = new BasicEReference();
    eOperationTypeParametersRef.setName("eTypeParameters");
    eOperationTypeParametersRef.setEType(this._eTypeParameterClass);
    eOperationTypeParametersRef.setContainment(true);
    eOperationTypeParametersRef.setUpperBound(-1);
    this._eOperationClass.getEStructuralFeatures().push(eOperationTypeParametersRef);
    const eBoundsRef = new BasicEReference();
    eBoundsRef.setName("eBounds");
    eBoundsRef.setEType(this._eGenericTypeClass);
    eBoundsRef.setContainment(true);
    eBoundsRef.setUpperBound(-1);
    this._eTypeParameterClass.getEStructuralFeatures().push(eBoundsRef);
    const eClassifierRef = new BasicEReference();
    eClassifierRef.setName("eClassifier");
    eClassifierRef.setEType(this._eClassifierClass);
    this._eGenericTypeClass.getEStructuralFeatures().push(eClassifierRef);
    const eTypeParameterRef = new BasicEReference();
    eTypeParameterRef.setName("eTypeParameter");
    eTypeParameterRef.setEType(this._eTypeParameterClass);
    this._eGenericTypeClass.getEStructuralFeatures().push(eTypeParameterRef);
    const eTypeArgumentsRef = new BasicEReference();
    eTypeArgumentsRef.setName("eTypeArguments");
    eTypeArgumentsRef.setEType(this._eGenericTypeClass);
    eTypeArgumentsRef.setContainment(true);
    eTypeArgumentsRef.setUpperBound(-1);
    this._eGenericTypeClass.getEStructuralFeatures().push(eTypeArgumentsRef);
    const eUpperBoundRef = new BasicEReference();
    eUpperBoundRef.setName("eUpperBound");
    eUpperBoundRef.setEType(this._eGenericTypeClass);
    eUpperBoundRef.setContainment(true);
    this._eGenericTypeClass.getEStructuralFeatures().push(eUpperBoundRef);
    const eLowerBoundRef = new BasicEReference();
    eLowerBoundRef.setName("eLowerBound");
    eLowerBoundRef.setEType(this._eGenericTypeClass);
    eLowerBoundRef.setContainment(true);
    this._eGenericTypeClass.getEStructuralFeatures().push(eLowerBoundRef);
  }
  // Getters for EClasses
  getEObjectClass() {
    return this._eObjectClass;
  }
  getEModelElementClass() {
    return this._eModelElementClass;
  }
  getENamedElementClass() {
    return this._eNamedElementClass;
  }
  getEClassifierClass() {
    return this._eClassifierClass;
  }
  getEClassClass() {
    return this._eClassClass;
  }
  getEDataTypeClass() {
    return this._eDataTypeClass;
  }
  getEEnumClass() {
    return this._eEnumClass;
  }
  getEEnumLiteralClass() {
    return this._eEnumLiteralClass;
  }
  getEPackageClass() {
    return this._ePackageClass;
  }
  getEFactoryClass() {
    return this._eFactoryClass;
  }
  getEStructuralFeatureClass() {
    return this._eStructuralFeatureClass;
  }
  getEAttributeClass() {
    return this._eAttributeClass;
  }
  getEReferenceClass() {
    return this._eReferenceClass;
  }
  getEOperationClass() {
    return this._eOperationClass;
  }
  getEParameterClass() {
    return this._eParameterClass;
  }
  getEAnnotationClass() {
    return this._eAnnotationClass;
  }
  getEGenericTypeClass() {
    return this._eGenericTypeClass;
  }
  getETypeParameterClass() {
    return this._eTypeParameterClass;
  }
  getEStringToStringMapEntryClass() {
    return this._eStringToStringMapEntryClass;
  }
  // Getters for EDataTypes
  getEBoolean() {
    return this._eBooleanDataType;
  }
  getEInt() {
    return this._eIntDataType;
  }
  getEString() {
    return this._eStringDataType;
  }
  getEDouble() {
    return this._eDoubleDataType;
  }
  getEFloat() {
    return this._eFloatDataType;
  }
  getELong() {
    return this._eLongDataType;
  }
  getEDate() {
    return this._eDateDataType;
  }
  getEShort() {
    return this._eShortDataType;
  }
  getEByte() {
    return this._eByteDataType;
  }
  getEChar() {
    return this._eCharDataType;
  }
  getEBigInteger() {
    return this._eBigIntegerDataType;
  }
  getEBigDecimal() {
    return this._eBigDecimalDataType;
  }
  getEJavaObject() {
    return this._eJavaObjectDataType;
  }
}
class EcoreFactory extends BasicEFactory {
  constructor(ePackage) {
    super();
    this._ePackage = ePackage;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(eClass) {
    const className = eClass.getName();
    switch (className) {
      case "EClass":
        return new BasicEClass();
      case "EAttribute":
        return new BasicEAttribute();
      case "EReference":
        return new BasicEReference();
      case "EDataType":
        return new BasicEDataType();
      case "EEnum":
        return new BasicEEnum();
      case "EEnumLiteral":
        return new BasicEEnumLiteral();
      case "EAnnotation":
        return new BasicEAnnotation();
      case "EPackage":
        return new BasicEPackage();
      case "EOperation":
        return new BasicEOperation();
      case "EParameter":
        return new BasicEParameter();
      case "EGenericType":
        return new BasicEGenericType();
      case "ETypeParameter":
        return new BasicETypeParameter();
      default:
        return super.create(eClass);
    }
  }
}
getEcorePackage();
class EResourceSetImpl extends BasicResourceSet {
  constructor() {
    super();
    this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new XMIResourceFactory());
    this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new XMIResourceFactory());
    this.getPackageRegistry().set(ECORE_NS_URI, getEcorePackage());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(uri) {
    const resource = super.createResource(uri);
    return resource;
  }
}
const eventModelContent = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="Events"
                nsURI="http://org.eclipse.daanse.board.app.lib.events" nsPrefix="Events">

    <!-- Abstract Base Payload -->
    <eClassifiers xsi:type="ecore:EClass" name="Payload" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all event payloads."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="widgetId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the widget that emitted this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="timestamp" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//ELong">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unix timestamp when the event was emitted."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="metadata" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional metadata object for additional context."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Abstract Widget Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="WidgetActionInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract System Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="SystemActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract Page Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="PageActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

</ecore:EPackage>`;
const EVENTS_NS_URI = "http://org.eclipse.daanse.board.app.lib.events";
class EcoreMetadataService {
  constructor() {
    this.modelCache = /* @__PURE__ */ new Map();
    this.resourceSet = this.createResourceSet();
    this.loadEventsModelSync();
  }
  /**
   * Creates a ResourceSet with registered Ecore package
   *
   * EResourceSetImpl registers the Ecore package and the XMI resource
   * factory for the `.ecore` extension in its constructor.
   */
  createResourceSet() {
    return new EResourceSetImpl();
  }
  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  loadEventsModelSync() {
    try {
      const resource = this.createLoadedResource(
        `${EVENTS_NS_URI}/EventModel.ecore`,
        eventModelContent
      );
      const contents = resource.getContents();
      if (contents.size() > 0) {
        const eventsPackage = contents.get(0);
        this.registerPackage(eventsPackage);
        console.log("✅ Loaded and registered Events model package with nsURI:", eventsPackage.getNsURI());
      }
    } catch (error) {
      console.error("❌ Failed to load Events model:", error);
    }
  }
  /**
   * Create a resource for the given URI and load the XMI content into it.
   *
   * `loadFromString` is optional on the Resource interface — only the XMI
   * resource implementation provides it. The resource factory registered for
   * `.ecore` returns one, so a missing method means the URI did not resolve to
   * an XMI resource and the caller needs to know.
   */
  createLoadedResource(uri, content) {
    const resource = this.resourceSet.createResource(URI.createURI(uri));
    if (typeof resource.loadFromString !== "function") {
      throw new Error(
        `Resource for "${uri}" does not support loading from a string; expected an XMI resource.`
      );
    }
    resource.loadFromString(content);
    return resource;
  }
  /**
   * Register an EPackage in the ResourceSet's package registry under its nsURI
   */
  registerPackage(pkg) {
    const nsURI = pkg.getNsURI();
    if (nsURI) {
      this.resourceSet.getPackageRegistry().set(nsURI, pkg);
    }
  }
  /**
   * Get the ResourceSet instance
   */
  getResourceSet() {
    return this.resourceSet;
  }
  /**
   * Load an Ecore model from a URI string
   */
  async loadModel(widgetType, ecoreUri) {
    try {
      const data = await fetch(ecoreUri);
      const dataAsText = await data.text();
      await this.loadModelFromString(widgetType, dataAsText, ecoreUri);
    } catch (error) {
      console.error(`Failed to load Ecore model from ${ecoreUri}:`, error);
      throw error;
    }
  }
  /**
   * Load an Ecore model from a string
   */
  async loadModelFromString(widgetType, ecoreContent, uri = "model.ecore") {
    try {
      const resource = this.createLoadedResource(uri, ecoreContent);
      const contents = resource.getContents();
      if (contents.size() > 0) {
        const pkg = contents.get(0);
        this.modelCache.set(widgetType, pkg);
        console.log(`✅ Loaded Ecore model for widget type "${widgetType}" from ${uri}`);
      }
    } catch (error) {
      console.error(`Failed to parse Ecore model for ${widgetType}:`, error);
      throw error;
    }
  }
  /**
   * Register an already loaded EPackage for a widget type
   */
  registerModel(widgetType, ecorePackage) {
    this.modelCache.set(widgetType, ecorePackage);
  }
  /**
   * Extract action metadata from an Ecore model
   */
  extractActions(widgetType) {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return [];
    }
    const actions = [];
    const classifiers = pkg.getEClassifiers();
    for (let i = 0; i < classifiers.size(); i++) {
      const classifier = classifiers.get(i);
      if (isEClass(classifier)) {
        const eClass = classifier;
        const isWidgetActionInterface = this.extendsWidgetActionInterface(eClass);
        if (!isWidgetActionInterface) {
          continue;
        }
        const operations = eClass.getEOperations();
        for (let j = 0; j < operations.length; j++) {
          const operation = operations[j];
          const operationName = operation.getName();
          const widgetActionAnnotation = operation.getEAnnotation(
            "org.eclipse.daanse.board.app.lib.events/WidgetAction"
          );
          if (widgetActionAnnotation) {
            const eventType = this.getAnnotationDetail(widgetActionAnnotation, "eventType");
            const parameters = [];
            const eParameters = operation.getEParameters();
            for (let k = 0; k < eParameters.length; k++) {
              const param = eParameters[k];
              const paramType = param.getEType();
              const tsType = this.mapEcoreTypeToTS(paramType);
              const actionParamAnnotation = param.getEAnnotation(
                "org.eclipse.daanse.board.app.lib.events/ActionParameter"
              );
              const lowerBound = param.getLowerBound();
              let optional = lowerBound === 0;
              if (actionParamAnnotation) {
                const optionalDetail = this.getAnnotationDetail(actionParamAnnotation, "optional");
                if (optionalDetail === "true") {
                  optional = true;
                }
              }
              parameters.push({
                name: param.getName() || `arg${k}`,
                type: tsType,
                optional,
                index: k
              });
            }
            actions.push({
              methodName: operationName || `action${j}`,
              eventType: eventType || `${widgetType}.${operationName}`,
              parameters
            });
          }
        }
      }
    }
    console.log(`📝 Extracted ${actions.length} actions from Ecore model for "${widgetType}":`, actions);
    return actions;
  }
  /**
   * Get annotation detail value by key
   */
  getAnnotationDetail(annotation, key) {
    return annotation.getDetails().getByKey(key) || void 0;
  }
  /**
   * Extract payload metadata from an Ecore model by class name
   */
  extractPayloadMetadata(widgetType, payloadClassName) {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return null;
    }
    const classifiers = pkg.getEClassifiers();
    for (let i = 0; i < classifiers.size(); i++) {
      const classifier = classifiers.get(i);
      if (isEClass(classifier)) {
        const eClass = classifier;
        if (eClass.getName() === payloadClassName) {
          const properties = [];
          const features = eClass.getEAllStructuralFeatures();
          for (let j = 0; j < features.length; j++) {
            const feature = features[j];
            const featureName = feature.getName();
            const featureType = feature.getEType();
            const lowerBound = feature.getLowerBound();
            const upperBound = feature.getUpperBound();
            let tsType = this.mapEcoreTypeToTS(featureType);
            if (upperBound > 1 || upperBound === -1) {
              tsType += "[]";
            }
            const optional = lowerBound === 0;
            properties.push({
              name: featureName,
              type: tsType,
              optional
            });
          }
          return {
            className: payloadClassName,
            properties
          };
        }
      }
    }
    console.warn(`Payload class "${payloadClassName}" not found in Ecore model for "${widgetType}"`);
    return null;
  }
  /**
   * Check if an EClass extends WidgetActionInterface
   */
  extendsWidgetActionInterface(eClass) {
    const superTypes = eClass.getESuperTypes();
    for (let i = 0; i < superTypes.length; i++) {
      const superType = superTypes[i];
      const superTypeName = superType.getName();
      const superTypeNsURI = superType.getEPackage()?.getNsURI() ?? null;
      if (superTypeName === "WidgetActionInterface" && superTypeNsURI === EVENTS_NS_URI) {
        return true;
      }
      if (this.extendsWidgetActionInterface(superType)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Map Ecore data types to TypeScript types
   */
  mapEcoreTypeToTS(eType) {
    if (!eType) return "any";
    const name = eType.getName();
    const typeName = name ? name : String(eType);
    const typeMap = {
      "EString": "string",
      "EInt": "number",
      "EDouble": "number",
      "EFloat": "number",
      "EBoolean": "boolean",
      "EDate": "Date",
      "EBigInteger": "number",
      "EBigDecimal": "number",
      "ELong": "number",
      "EShort": "number",
      "EByte": "number",
      "EChar": "string",
      "EByteArray": "Uint8Array",
      "EJavaObject": "any"
    };
    return typeMap[typeName] || typeName;
  }
  /**
   * Clear all cached models
   */
  clear() {
    this.modelCache.clear();
  }
}
const ECORE_METADATA_SERVICE = Symbol.for(ECORE_METADATA_SERVICE_ID);
const SystemActions = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n  Copyright (c) 2025 Contributors to the Eclipse Foundation.\n\n  This program and the accompanying materials are made\n  available under the terms of the Eclipse Public License 2.0\n  which is available at https://www.eclipse.org/legal/epl-2.0/\n\n  SPDX-License-Identifier: EPL-2.0\n\n  Contributors:\n    Smart City Jena\n-->\n<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="systemactions" nsURI="http://org.eclipse.daanse.board.app.lib.events.systemactions"\n    nsPrefix="systemactions">\n\n  <eClassifiers xsi:type="ecore:EClass" name="SystemActions" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">\n    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n      <details key="documentation" value="System-level actions that can be triggered by events"/>\n    </eAnnotations>\n\n    <eOperations name="changePage">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Navigate to a different page"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="system.changePage"/>\n      </eAnnotations>\n      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="ID of the page to navigate to"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n\n    <eOperations name="setGlobalVariable">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Set or update a global variable"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="system.setGlobalVariable"/>\n      </eAnnotations>\n      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the variable to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Value to set"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n  </eClassifiers>\n\n  <eClassifiers xsi:type="ecore:EClass" name="PageActions">\n    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n      <details key="documentation" value="Page-level actions that can be triggered by events"/>\n    </eAnnotations>\n\n    <eOperations name="setPageVariable">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Set or update a page-scoped variable"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="page.setPageVariable"/>\n      </eAnnotations>\n      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the variable to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Value to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Optional page ID (defaults to current page)"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n  </eClassifiers>\n</ecore:EPackage>';
loggerFactory.createLogger("daanse:events:registry");
const identifier = EVENT_REGISTRY;
const actionsIdentifier = EVENT_ACTIONS_REGISTRY;
const managerIdentifier = EVENT_MANAGER;
const bridgeIdentifier = EVENT_BUS_BRIDGE;
const ecoreServiceIdentifier = ECORE_METADATA_SERVICE;
function activate$1({ services, log: ausgabe }) {
  const eventRegistry = new EventRegistry();
  services.register(EVENT_REGISTRY_ID, eventRegistry);
  const actionsRegistry = new EventActionsRegistry();
  services.register(EVENT_ACTIONS_REGISTRY_ID, actionsRegistry);
  const eventManager = services.construct(EventManager);
  services.register(EVENT_MANAGER_ID, eventManager);
  const bridge = services.construct(EventBusBridge);
  services.register(EVENT_BUS_BRIDGE_ID, bridge);
  bridge.setup(services);
  const ecoreService = new EcoreMetadataService();
  services.register(ECORE_METADATA_SERVICE_ID, ecoreService);
  actionsRegistry.setEcoreMetadataService(ecoreService);
  eventRegistry.setEcoreMetadataService(ecoreService);
  ausgabe.info("Ereignis-Registries bereit");
}
function deactivate$1({ services }) {
  for (const id of [
    ECORE_METADATA_SERVICE_ID,
    EVENT_BUS_BRIDGE_ID,
    EVENT_MANAGER_ID,
    EVENT_ACTIONS_REGISTRY_ID,
    EVENT_REGISTRY_ID
  ]) {
    services.unregister(id);
  }
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionParameter,
  Comperator,
  Condition,
  ECORE_METADATA_SERVICE,
  EVENT_ACTIONS_REGISTRY,
  EVENT_ACTIONS_REGISTRY_ID,
  EVENT_BUS_BRIDGE,
  EVENT_MANAGER,
  EVENT_REGISTRY,
  EVENT_REGISTRY_ID,
  EcoreMetadataService,
  EventActionsRegistry,
  get EventBusBridge() {
    return EventBusBridge;
  },
  get EventManager() {
    return EventManager;
  },
  EventRegistry,
  get PageActionInterface() {
    return PageActionInterface;
  },
  get Payload() {
    return Payload;
  },
  get SystemActionInterface() {
    return SystemActionInterface;
  },
  SystemActionsEcoreContent: SystemActions,
  WidgetAction,
  get WidgetActionInterface() {
    return WidgetActionInterface;
  },
  actionsIdentifier,
  activate: activate$1,
  bridgeIdentifier,
  deactivate: deactivate$1,
  ecoreServiceIdentifier,
  getWidgetActions,
  identifier,
  managerIdentifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.events";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.events");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  ActionParameter,
  Comperator,
  Condition,
  ECORE_METADATA_SERVICE,
  EVENT_ACTIONS_REGISTRY,
  EVENT_ACTIONS_REGISTRY_ID2 as EVENT_ACTIONS_REGISTRY_ID,
  EVENT_BUS_BRIDGE,
  EVENT_MANAGER,
  EVENT_REGISTRY,
  EVENT_REGISTRY_ID2 as EVENT_REGISTRY_ID,
  EcoreMetadataService,
  EventActionsRegistry,
  EventBusBridge,
  EventManager,
  EventRegistry,
  PageActionInterface,
  Payload,
  SystemActionInterface,
  SystemActions as SystemActionsEcoreContent,
  WidgetAction,
  WidgetActionInterface,
  actionsIdentifier,
  activate,
  bridgeIdentifier,
  deactivate,
  ecoreServiceIdentifier,
  getWidgetActions,
  identifier,
  managerIdentifier
};
