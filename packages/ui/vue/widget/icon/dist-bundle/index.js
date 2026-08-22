(function(){var i="ui.vue.widget.icon",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.icon[data-v-7d23ee10] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.material-symbols-outlined[data-v-7d23ee10] {\n    font-family: \"Material Symbols Outlined\";\n    font-weight: normal;\n    font-style: normal;\n    font-size: var(--v02efff30);\n    color: var(--v78798a07);\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n.settings-container[data-v-bd264252] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n.icons-container[data-v-bd264252] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  max-height: 220px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px;\n}\n.material-symbols-outlined[data-v-bd264252] {\n  font-family: 'Material Symbols Outlined';\n  font-weight: normal;\n  font-style: inherit;\n  font-size: 40px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  transition:\n    border-color 0.5s ease,\n    transform 0.5s ease;\n}\n.material-symbols-outlined[data-v-bd264252]:hover {\n  transform: scale(1.1);\n}\n.active-icon[data-v-bd264252] {\n  border: 2px solid rgb(0, 121, 0);\n}\n.slider[data-v-bd264252] {\n  padding: 0 10px;\n}\n";})();
import { defineComponent, mergeModels, useCssVars, unref, toRefs, useModel, inject as inject$1, onMounted, computed, createElementBlock, openBlock, Fragment, createElementVNode, withModifiers, mergeProps, toDisplayString, ref, watch, markRaw, resolveComponent, createBlock, withCtx, createVNode, normalizeStyle, renderList, normalizeClass } from "vue";
const { useVariableRepository, VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { Documentation, Attribute, ModelClass } = __tsm__.require("org.eclipse.daanse.board.app.lib.annotations");
const { identifiers: identifiers$1 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
const { Payload } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
const INJECTABLE_KEY = Symbol.for("tsm:injectable");
const INJECT_KEY = Symbol.for("tsm:inject");
const INJECT_PROPERTY_KEY = Symbol.for("tsm:inject:property");
const COMPONENT_KEY = Symbol.for("tsm:component");
const ACTIVATE_KEY = Symbol.for("tsm:component:activate");
const DEACTIVATE_KEY = Symbol.for("tsm:component:deactivate");
function inject(serviceId, options) {
  return (target, propertyKey, parameterIndex) => {
    if (parameterIndex !== void 0) {
      const existing = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
      existing.push({
        index: parameterIndex,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_KEY, existing, target);
    } else {
      const ctor = target.constructor;
      const existing = Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, ctor) ?? [];
      existing.push({
        propertyKey,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_PROPERTY_KEY, existing, ctor);
    }
  };
}
function component(options = {}) {
  return (target) => {
    Reflect.defineMetadata(COMPONENT_KEY, options, target);
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);
  };
}
function activate() {
  return (target, propertyKey) => {
    Reflect.defineMetadata(ACTIVATE_KEY, propertyKey, target.constructor);
  };
}
function deactivate() {
  return (target, propertyKey) => {
    Reflect.defineMetadata(DEACTIVATE_KEY, propertyKey, target.constructor);
  };
}
var re = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports$1) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports$1 = module.exports = {};
    const re2 = exports$1.re = [];
    const safeRe = exports$1.safeRe = [];
    const src = exports$1.src = [];
    const safeSrc = exports$1.safeSrc = [];
    const t = exports$1.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports$1.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports$1.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports$1.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version.trim().match(options.loose ? re2[t.LOOSE] : re2[t.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re2[t.PRERELEASELOOSE] : re2[t.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver$1 = SemVer;
  return semver$1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver$1();
  const parse = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  const parse = requireParse();
  const valid2 = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  const parse = requireParse();
  const clean = (version, options) => {
    const s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  clean_1 = clean;
  return clean_1;
}
var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  const SemVer = requireSemver$1();
  const inc = (version, release, options, identifier, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier;
      identifier = options;
      options = void 0;
    }
    try {
      return new SemVer(
        version instanceof SemVer ? version.version : version,
        options
      ).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  const parse = requireParse();
  const diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  diff_1 = diff;
  return diff_1;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver$1();
  const major = (a, loose) => new SemVer(a, loose).major;
  major_1 = major;
  return major_1;
}
var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  const SemVer = requireSemver$1();
  const minor = (a, loose) => new SemVer(a, loose).minor;
  minor_1 = minor;
  return minor_1;
}
var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  const SemVer = requireSemver$1();
  const patch = (a, loose) => new SemVer(a, loose).patch;
  patch_1 = patch;
  return patch_1;
}
var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  const parse = requireParse();
  const prerelease = (version, options) => {
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  const SemVer = requireSemver$1();
  const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  compare_1 = compare;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare = requireCompare();
  const rcompare = (a, b, loose) => compare(b, a, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare = requireCompare();
  const compareLoose = (a, b) => compare(a, b, true);
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}
var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  const SemVer = requireSemver$1();
  const compareBuild = (a, b, loose) => {
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  const compareBuild = requireCompareBuild();
  const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  sort_1 = sort;
  return sort_1;
}
var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  const compareBuild = requireCompareBuild();
  const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  rsort_1 = rsort;
  return rsort_1;
}
var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  const compare = requireCompare();
  const gt = (a, b, loose) => compare(a, b, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare = requireCompare();
  const lt = (a, b, loose) => compare(a, b, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare = requireCompare();
  const eq = (a, b, loose) => compare(a, b, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare = requireCompare();
  const neq = (a, b, loose) => compare(a, b, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare = requireCompare();
  const gte = (a, b, loose) => compare(a, b, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare = requireCompare();
  const lte = (a, b, loose) => compare(a, b, loose) <= 0;
  lte_1 = lte;
  return lte_1;
}
var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  const eq = requireEq();
  const neq = requireNeq();
  const gt = requireGt();
  const gte = requireGte();
  const lt = requireLt();
  const lte = requireLte();
  const cmp = (a, op, b, loose) => {
    switch (op) {
      case "===":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a === b;
      case "!==":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}
var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  const SemVer = requireSemver$1();
  const parse = requireParse();
  const { safeRe: re2, t } = requireRe();
  const coerce = (version, options) => {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === "number") {
      version = String(version);
    }
    if (typeof version !== "string") {
      return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
      match = version.match(options.includePrerelease ? re2[t.COERCEFULL] : re2[t.COERCE]);
    } else {
      const coerceRtlRegex = options.includePrerelease ? re2[t.COERCERTLFULL] : re2[t.COERCERTL];
      let next;
      while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  coerce_1 = coerce;
  return coerce_1;
}
var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  class LRUCache {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      const value = this.map.get(key);
      if (value === void 0) {
        return void 0;
      } else {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
      }
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      const deleted = this.delete(key);
      if (!deleted && value !== void 0) {
        if (this.map.size >= this.max) {
          const firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  }
  lrucache = LRUCache;
  return lrucache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range {
    constructor(range2, options) {
      options = parseOptions(options);
      if (range2 instanceof Range) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t.HYPHENRANGELOOSE] : re2[t.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug("hyphen replace", range2);
      range2 = range2.replace(re2[t.COMPARATORTRIM], comparatorTrimReplace);
      debug("comparator trim", range2);
      range2 = range2.replace(re2[t.TILDETRIM], tildeTrimReplace);
      debug("tilde trim", range2);
      range2 = range2.replace(re2[t.CARETTRIM], caretTrimReplace);
      debug("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t.COMPARATORLOOSE]);
        });
      }
      debug("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLrucache();
  const cache = new LRU();
  const parseOptions = requireParseOptions();
  const Comparator = requireComparator();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const {
    safeRe: re2,
    t,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = requireRe();
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    comp = comp.replace(re2[t.BUILD], "");
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t.TILDELOOSE] : re2[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    const r = options.loose ? re2[t.CARETLOOSE] : re2[t.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t.XRANGELOOSE] : re2[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re2[t.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === Comparator.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t.COMPARATORLOOSE] : re2[t.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug("Comparator.test", version, this.options.loose);
      if (this.semver === ANY || version === ANY) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      options = parseOptions(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions = requireParseOptions();
  const { safeRe: re2, t } = requireRe();
  const cmp = requireCmp();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const Range = requireRange();
  return comparator;
}
var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  const Range = requireRange();
  const satisfies = (version, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}
var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  const Range = requireRange();
  const toComparators = (range2, options) => new Range(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  toComparators_1 = toComparators;
  return toComparators_1;
}
var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const maxSatisfying = (versions, range2, options) => {
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}
var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const minSatisfying = (versions, range2, options) => {
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}
var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const gt = requireGt();
  const minVersion = (range2, loose) => {
    range2 = new Range(range2, loose);
    let minver = new SemVer("0.0.0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let setMin = null;
      comparators.forEach((comparator2) => {
        const compver = new SemVer(comparator2.semver.version);
        switch (comparator2.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range2.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}
var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  const Range = requireRange();
  const validRange = (range2, options) => {
    try {
      return new Range(range2, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}
var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  const SemVer = requireSemver$1();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const gt = requireGt();
  const lt = requireLt();
  const lte = requireLte();
  const gte = requireGte();
  const outside = (version, range2, hilo, options) => {
    version = new SemVer(version, options);
    range2 = new Range(range2, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range2, options)) {
      return false;
    }
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let high = null;
      let low = null;
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY) {
          comparator2 = new Comparator(">=0.0.0");
        }
        high = high || comparator2;
        low = low || comparator2;
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2;
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}
var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  const outside = requireOutside();
  const gtr = (version, range2, options) => outside(version, range2, ">", options);
  gtr_1 = gtr;
  return gtr_1;
}
var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  const outside = requireOutside();
  const ltr = (version, range2, options) => outside(version, range2, "<", options);
  ltr_1 = ltr;
  return ltr_1;
}
var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  const Range = requireRange();
  const intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  simplify = (versions, range2, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b) => compare(a, b, options));
    for (const version of v) {
      const included = satisfies(version, range2, options);
      if (included) {
        prev = version;
        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set.push([first, null]);
    }
    const ranges = [];
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v[0]) {
        ranges.push("*");
      } else if (!max) {
        ranges.push(`>=${min}`);
      } else if (min === v[0]) {
        ranges.push(`<=${max}`);
      } else {
        ranges.push(`${min} - ${max}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range2.raw === "string" ? range2.raw : String(range2);
    return simplified.length < original.length ? simplified : range2;
  };
  return simplify;
}
var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  const Range = requireRange();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  const subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
    return true;
  };
  const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  const minimumVersion = [new Comparator(">=0.0.0")];
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = /* @__PURE__ */ new Set();
    let gt, lt;
    for (const c of sub) {
      if (c.operator === ">" || c.operator === ">=") {
        gt = higherGT(gt, c, options);
      } else if (c.operator === "<" || c.operator === "<=") {
        lt = lowerLT(lt, c, options);
      } else {
        eqSet.add(c.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c of dom) {
        if (!satisfies(eq, String(c), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c of dom) {
      hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
      hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c.operator === ">" || c.operator === ">=") {
          higher = higherGT(gt, c, options);
          if (higher === c && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c.operator === "<" || c.operator === "<=") {
          lower = lowerLT(lt, c, options);
          if (lower === c && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
          return false;
        }
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  const higherGT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
  };
  const lowerLT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
  };
  subset_1 = subset;
  return subset_1;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const internalRe = requireRe();
  const constants2 = requireConstants();
  const SemVer = requireSemver$1();
  const identifiers2 = requireIdentifiers();
  const parse = requireParse();
  const valid2 = requireValid$1();
  const clean = requireClean();
  const inc = requireInc();
  const diff = requireDiff();
  const major = requireMajor();
  const minor = requireMinor();
  const patch = requirePatch();
  const prerelease = requirePrerelease();
  const compare = requireCompare();
  const rcompare = requireRcompare();
  const compareLoose = requireCompareLoose();
  const compareBuild = requireCompareBuild();
  const sort = requireSort();
  const rsort = requireRsort();
  const gt = requireGt();
  const lt = requireLt();
  const eq = requireEq();
  const neq = requireNeq();
  const gte = requireGte();
  const lte = requireLte();
  const cmp = requireCmp();
  const coerce = requireCoerce();
  const Comparator = requireComparator();
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const toComparators = requireToComparators();
  const maxSatisfying = requireMaxSatisfying();
  const minSatisfying = requireMinSatisfying();
  const minVersion = requireMinVersion();
  const validRange = requireValid();
  const outside = requireOutside();
  const gtr = requireGtr();
  const ltr = requireLtr();
  const intersects = requireIntersects();
  const simplifyRange = requireSimplify();
  const subset = requireSubset();
  semver = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants2.RELEASE_TYPES,
    compareIdentifiers: identifiers2.compareIdentifiers,
    rcompareIdentifiers: identifiers2.rcompareIdentifiers
  };
  return semver;
}
var semverExports = requireSemver();
const sharedLibraries = /* @__PURE__ */ new Map();
const tsmRuntime = {
  require(moduleId) {
    const lib = sharedLibraries.get(moduleId);
    if (!lib) {
      const available = Array.from(sharedLibraries.keys());
      throw new Error(`[TSM] Shared library not found: '${moduleId}'
Available libraries: ${available.length > 0 ? available.join(", ") : "none"}
Make sure the host application has registered this library.`);
    }
    return lib.exports;
  },
  register(moduleId, exports$1, version, providedBy) {
    if (!semverExports.valid(version)) {
      throw new Error(`[TSM] Invalid version '${version}' for library '${moduleId}'. Must be valid semver (e.g., '3.4.0').`);
    }
    const existing = sharedLibraries.get(moduleId);
    if (existing) {
      console.warn(`[TSM] Overwriting shared library '${moduleId}' (${existing.version} → ${version})`);
    }
    sharedLibraries.set(moduleId, {
      exports: exports$1,
      version,
      providedBy
    });
    console.debug(`[TSM] Registered: ${moduleId}@${version}${providedBy ? ` (by ${providedBy})` : ""}`);
  },
  has(moduleId) {
    return sharedLibraries.has(moduleId);
  },
  getVersion(moduleId) {
    return sharedLibraries.get(moduleId)?.version;
  },
  satisfies(moduleId, versionRange) {
    const lib = sharedLibraries.get(moduleId);
    if (!lib)
      return false;
    return semverExports.satisfies(lib.version, versionRange);
  },
  getRegistered() {
    const result = /* @__PURE__ */ new Map();
    for (const [id, lib] of sharedLibraries) {
      result.set(id, { version: lib.version, providedBy: lib.providedBy });
    }
    return result;
  },
  validate(requirements) {
    const result = {
      valid: true,
      missing: [],
      incompatible: []
    };
    for (const req of requirements) {
      const lib = sharedLibraries.get(req.id);
      if (!lib) {
        result.valid = false;
        result.missing.push(req.id);
      } else if (!semverExports.satisfies(lib.version, req.versionRange)) {
        result.valid = false;
        result.incompatible.push({
          id: req.id,
          required: req.versionRange,
          available: lib.version
        });
      }
    }
    return result;
  }
};
function initTsmRuntime() {
  if (typeof window !== "undefined") {
    if (window.__tsm__) {
      console.warn("[TSM] Runtime already initialized, returning existing instance");
      return window.__tsm__;
    }
    window.__tsm__ = tsmRuntime;
  }
  return tsmRuntime;
}
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M39.9389%2066.162C39.4109%2066.162%2039.0029%2066.018%2038.7149%2065.73C38.4269%2065.43%2038.2829%2065.01%2038.2829%2064.47V54.84C38.2829%2054.288%2038.4269%2053.868%2038.7149%2053.58C39.0029%2053.292%2039.4109%2053.148%2039.9389%2053.148C40.4789%2053.148%2040.8869%2053.292%2041.1629%2053.58C41.4509%2053.868%2041.5949%2054.288%2041.5949%2054.84V64.47C41.5949%2065.01%2041.4569%2065.43%2041.1809%2065.73C40.9049%2066.018%2040.4909%2066.162%2039.9389%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M50.2983%2066.198C48.8943%2066.198%2047.6883%2065.928%2046.6803%2065.388C45.6723%2064.848%2044.8983%2064.086%2044.3583%2063.102C43.8303%2062.118%2043.5663%2060.966%2043.5663%2059.646C43.5663%2058.662%2043.7163%2057.768%2044.0163%2056.964C44.3283%2056.16%2044.7723%2055.47%2045.3483%2054.894C45.9363%2054.318%2046.6443%2053.88%2047.4723%2053.58C48.3123%2053.268%2049.2543%2053.112%2050.2983%2053.112C50.8503%2053.112%2051.4203%2053.178%2052.0083%2053.31C52.6083%2053.43%2053.1363%2053.616%2053.5923%2053.868C53.9283%2054.048%2054.1623%2054.276%2054.2943%2054.552C54.4263%2054.828%2054.4683%2055.11%2054.4203%2055.398C54.3843%2055.686%2054.2823%2055.944%2054.1143%2056.172C53.9463%2056.4%2053.7303%2056.556%2053.4663%2056.64C53.2023%2056.712%2052.9143%2056.67%2052.6023%2056.514C52.2423%2056.346%2051.8823%2056.22%2051.5223%2056.136C51.1743%2056.04%2050.8083%2055.992%2050.4243%2055.992C49.6803%2055.992%2049.0563%2056.136%2048.5523%2056.424C48.0603%2056.7%2047.6883%2057.108%2047.4363%2057.648C47.1843%2058.188%2047.0583%2058.854%2047.0583%2059.646C47.0583%2060.438%2047.1843%2061.11%2047.4363%2061.662C47.6883%2062.202%2048.0603%2062.616%2048.5523%2062.904C49.0563%2063.18%2049.6803%2063.318%2050.4243%2063.318C50.7363%2063.318%2051.0723%2063.282%2051.4323%2063.21C51.7923%2063.126%2052.1463%2063%2052.4943%2062.832C52.8543%2062.676%2053.1723%2062.634%2053.4483%2062.706C53.7363%2062.778%2053.9643%2062.922%2054.1323%2063.138C54.3123%2063.354%2054.4263%2063.606%2054.4743%2063.894C54.5223%2064.17%2054.4803%2064.446%2054.3483%2064.722C54.2283%2064.998%2054.0123%2065.22%2053.7003%2065.388C53.2803%2065.64%2052.7583%2065.838%2052.1343%2065.982C51.5223%2066.126%2050.9103%2066.198%2050.2983%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M61.981%2066.198C60.697%2066.198%2059.569%2065.928%2058.597%2065.388C57.625%2064.836%2056.869%2064.068%2056.329%2063.084C55.801%2062.1%2055.537%2060.954%2055.537%2059.646C55.537%2058.662%2055.687%2057.768%2055.987%2056.964C56.299%2056.16%2056.737%2055.47%2057.301%2054.894C57.877%2054.318%2058.561%2053.88%2059.353%2053.58C60.145%2053.268%2061.021%2053.112%2061.981%2053.112C63.265%2053.112%2064.387%2053.382%2065.347%2053.922C66.319%2054.462%2067.075%2055.224%2067.615%2056.208C68.155%2057.18%2068.425%2058.326%2068.425%2059.646C68.425%2060.63%2068.269%2061.524%2067.957%2062.328C67.657%2063.132%2067.219%2063.828%2066.643%2064.416C66.079%2064.992%2065.401%2065.436%2064.609%2065.748C63.817%2066.048%2062.941%2066.198%2061.981%2066.198ZM61.981%2063.426C62.617%2063.426%2063.157%2063.276%2063.601%2062.976C64.045%2062.676%2064.387%2062.244%2064.627%2061.68C64.867%2061.116%2064.987%2060.438%2064.987%2059.646C64.987%2058.458%2064.723%2057.534%2064.195%2056.874C63.667%2056.214%2062.929%2055.884%2061.981%2055.884C61.357%2055.884%2060.817%2056.034%2060.361%2056.334C59.917%2056.622%2059.575%2057.048%2059.335%2057.612C59.095%2058.164%2058.975%2058.842%2058.975%2059.646C58.975%2060.834%2059.239%2061.764%2059.767%2062.436C60.295%2063.096%2061.033%2063.426%2061.981%2063.426Z'%20fill='%23606060'/%3e%3cpath%20d='M71.9285%2066.162C71.4245%2066.162%2071.0405%2066.03%2070.7765%2065.766C70.5125%2065.502%2070.3805%2065.112%2070.3805%2064.596V54.786C70.3805%2054.258%2070.5125%2053.856%2070.7765%2053.58C71.0405%2053.292%2071.3885%2053.148%2071.8205%2053.148C72.2045%2053.148%2072.5045%2053.22%2072.7205%2053.364C72.9365%2053.508%2073.1765%2053.748%2073.4405%2054.084L79.1465%2061.212H78.6425V54.696C78.6425%2054.192%2078.7685%2053.808%2079.0205%2053.544C79.2845%2053.28%2079.6685%2053.148%2080.1725%2053.148C80.6765%2053.148%2081.0545%2053.28%2081.3065%2053.544C81.5705%2053.808%2081.7025%2054.192%2081.7025%2054.696V64.668C81.7025%2065.124%2081.5825%2065.49%2081.3425%2065.766C81.1025%2066.03%2080.7785%2066.162%2080.3705%2066.162C79.9625%2066.162%2079.6385%2066.09%2079.3985%2065.946C79.1705%2065.79%2078.9245%2065.55%2078.6605%2065.226L72.9545%2058.08H73.4585V64.596C73.4585%2065.112%2073.3265%2065.502%2073.0625%2065.766C72.8105%2066.03%2072.4325%2066.162%2071.9285%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2043.5C22.5%2042.6716%2023.1716%2042%2024%2042H96C96.8284%2042%2097.5%2042.6716%2097.5%2043.5C97.5%2044.3284%2096.8284%2045%2096%2045H24C23.1716%2045%2022.5%2044.3284%2022.5%2043.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2076.5C22.5%2075.6716%2023.1716%2075%2024%2075H96C96.8284%2075%2097.5%2075.6716%2097.5%2076.5C97.5%2077.3284%2096.8284%2078%2096%2078H24C23.1716%2078%2022.5%2077.3284%2022.5%2076.5Z'%20fill='%23606060'/%3e%3c/svg%3e";
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let IconSettings = class {
  iconColor;
  iconSize;
  isIconFilled;
  strokeWeight;
  opticSize;
  grade;
  currentIcon;
};
__decorateClass$3([
  Documentation("Color value (hex or CSS) used to render the icon."),
  Attribute()
], IconSettings.prototype, "iconColor", 2);
__decorateClass$3([
  Documentation("The size of the icon in pixels."),
  Attribute()
], IconSettings.prototype, "iconSize", 2);
__decorateClass$3([
  Documentation("Determines whether the icon is filled (true) or outlined (false)."),
  Attribute()
], IconSettings.prototype, "isIconFilled", 2);
__decorateClass$3([
  Documentation("Line thickness used to draw the icon."),
  Attribute()
], IconSettings.prototype, "strokeWeight", 2);
__decorateClass$3([
  Documentation("Optical size used for rendering adjustments or visual balance."),
  Attribute()
], IconSettings.prototype, "opticSize", 2);
__decorateClass$3([
  Documentation("Style variation (e.g., weight or contrast) within an icon family."),
  Attribute()
], IconSettings.prototype, "grade", 2);
__decorateClass$3([
  Documentation("Name or identifier of the currently selected icon."),
  Attribute()
], IconSettings.prototype, "currentIcon", 2);
IconSettings = __decorateClass$3([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings" })
], IconSettings);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconWidget",
  props: /* @__PURE__ */ mergeModels({
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "v02efff30": unref(iconSize) + "px",
      "v78798a07": unref(iconColor)
    }));
    const props = __props;
    const { id: widgetId } = toRefs(props);
    const { wrapParameters } = useVariableRepository();
    const config = useModel(__props, "configv");
    const defaultConfig = new IconSettings();
    const eventBus = inject$1(identifiers$1.TINY_EMITTER);
    onMounted(() => {
      if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
        if (!(config.value.iconColor instanceof VariableWrapper)) {
          const current = config.value.iconColor;
          if (typeof current === "object" && current !== null && "value" in current) {
            const v = new VariableWrapper(current.value);
            if ("variable" in current) v.variable = current.variable;
            config.value.iconColor = v;
          } else {
            config.value.iconColor = new VariableWrapper(current || "#000000");
          }
        }
      }
    });
    const handleClick = () => {
      if (!widgetId.value) return;
      const payload = {
        iconName: config.value?.currentIcon || "",
        widgetId: widgetId.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting click event", payload);
      eventBus.emit("widget:IconWidget:click", {
        type: "widget:IconWidget:click",
        widgetId: widgetId.value,
        payload
      });
    };
    const handleRightClick = () => {
      if (!widgetId.value) return;
      const payload = {
        iconName: config.value?.currentIcon || "",
        widgetId: widgetId.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting right-click event", payload);
      eventBus.emit("widget:IconWidget:right_click", {
        type: "widget:IconWidget:right_click",
        widgetId: widgetId.value,
        payload
      });
    };
    const {
      iconColor,
      iconSize
    } = wrapParameters({
      iconColor: computed(() => config.value.iconColor?.value || "#000000"),
      iconSize: computed(() => config.value.iconSize)
    });
    const iconStyle = computed(() => {
      if (!config.value) return;
      return `
        font-variation-settings:
            'FILL' ${config.value.isIconFilled ? 1 : 0},
            'wght' ${config.value.strokeWeight},
            'GRAD' ${config.value.grade},
            'opsz' ${config.value.opticSize};
        `;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createElementVNode("link", {
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
          rel: "stylesheet"
        }, null, -1)),
        createElementVNode("div", {
          class: "icon",
          onClick: handleClick,
          onContextmenu: withModifiers(handleRightClick, ["prevent"]),
          style: { "cursor": "pointer" }
        }, [
          createElementVNode("span", mergeProps(_ctx.$attrs, {
            style: iconStyle.value,
            class: "material-symbols-outlined"
          }), toDisplayString(config.value.currentIcon), 17)
        ], 32)
      ], 64);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const IconWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d23ee10"]]);
const MaterialIcons = /* @__PURE__ */ JSON.parse('["10k","10mp","11mp","123","12mp","13mp","14mp","15mp","16mp","17mp","18_up_rating","18mp","19mp","1k","1k_plus","1x_mobiledata","1x_mobiledata_badge","20mp","21mp","22mp","23mp","24mp","2d","2k","2k_plus","2mp","30fps","30fps_select","360","3d_rotation","3g_mobiledata","3g_mobiledata_badge","3k","3k_plus","3mp","3p","4g_mobiledata","4g_mobiledata_badge","4g_plus_mobiledata","4k","4k_plus","4mp","50mp","5g","5g_mobiledata_badge","5k","5k_plus","5mp","60fps","60fps_select","6_ft_apart","6k","6k_plus","6mp","7k","7k_plus","7mp","8k","8k_plus","8mp","9k","9k_plus","9mp","abc","ac_unit","access_alarm","access_alarms","access_time","access_time_filled","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_child","account_child_invert","account_circle","account_circle_off","account_tree","action_key","activity_zone","acute","ad","ad_group","ad_group_off","ad_off","ad_units","adb","add","add_a_photo","add_ad","add_alarm","add_alert","add_box","add_business","add_call","add_card","add_chart","add_circle","add_circle_outline","add_comment","add_home","add_home_work","add_ic_call","add_link","add_location","add_location_alt","add_moderator","add_notes","add_photo_alternate","add_reaction","add_road","add_shopping_cart","add_task","add_to_drive","add_to_home_screen","add_to_photos","add_to_queue","addchart","adf_scanner","adjust","admin_meds","admin_panel_settings","ads_click","agender","agriculture","air","air_freshener","air_purifier","air_purifier_gen","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airline_stops","airlines","airplane_ticket","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","airware","airwave","alarm","alarm_add","alarm_off","alarm_on","alarm_smart_wake","album","align_center","align_end","align_flex_center","align_flex_end","align_flex_start","align_horizontal_center","align_horizontal_left","align_horizontal_right","align_items_stretch","align_justify_center","align_justify_flex_end","align_justify_flex_start","align_justify_space_around","align_justify_space_between","align_justify_space_even","align_justify_stretch","align_self_stretch","align_space_around","align_space_between","align_space_even","align_start","align_stretch","align_vertical_bottom","align_vertical_center","align_vertical_top","all_inbox","all_inclusive","all_match","all_out","allergies","allergy","alt_route","alternate_email","altitude","ambulance","amend","amp_stories","analytics","anchor","android","animation","announcement","aod","aod_tablet","aod_watch","apartment","api","apk_document","apk_install","app_badging","app_blocking","app_promo","app_registration","app_settings_alt","app_shortcut","apparel","approval","approval_delegation","apps","apps_outage","aq","aq_indoor","ar_on_you","ar_stickers","architecture","archive","area_chart","arming_countdown","arrow_and_edge","arrow_back","arrow_back_ios","arrow_back_ios_new","arrow_circle_down","arrow_circle_left","arrow_circle_right","arrow_circle_up","arrow_downward","arrow_downward_alt","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_forward_ios","arrow_insert","arrow_left","arrow_left_alt","arrow_or_edge","arrow_outward","arrow_range","arrow_right","arrow_right_alt","arrow_selector_tool","arrow_split","arrow_top_left","arrow_top_right","arrow_upward","arrow_upward_alt","arrows_more_down","arrows_more_up","arrows_outward","art_track","article","article_shortcut","artist","aspect_ratio","assessment","assignment","assignment_add","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assist_walker","assistant","assistant_device","assistant_direction","assistant_navigation","assistant_on_hub","assistant_photo","assured_workload","asterisk","atm","atr","attach_email","attach_file","attach_file_add","attach_file_off","attach_money","attachment","attractions","attribution","audio_description","audio_file","audio_video_receiver","audiotrack","auto_awesome","auto_awesome_mosaic","auto_awesome_motion","auto_delete","auto_fix_high","auto_fix_normal","auto_fix_off","auto_graph","auto_mode","auto_read_pause","auto_read_play","auto_stories","auto_towing","auto_transmission","autofps_select","autopause","autoplay","autorenew","autostop","av_timer","avg_pace","avg_time","award_star","azm","baby_changing_station","back_hand","back_to_tab","background_dot_large","background_dot_small","background_grid_small","background_replace","backlight_high","backlight_high_off","backlight_low","backpack","backspace","backup","backup_table","badge","badge_critical_battery","bakery_dining","balance","balcony","ballot","bar_chart","bar_chart_4_bars","barcode","barcode_reader","barcode_scanner","barefoot","batch_prediction","bath_outdoor","bath_private","bath_public_large","bathroom","bathtub","battery_0_bar","battery_1_bar","battery_20","battery_2_bar","battery_30","battery_3_bar","battery_4_bar","battery_50","battery_5_bar","battery_60","battery_6_bar","battery_80","battery_90","battery_alert","battery_change","battery_charging_20","battery_charging_30","battery_charging_50","battery_charging_60","battery_charging_80","battery_charging_90","battery_charging_full","battery_error","battery_full","battery_full_alt","battery_horiz_000","battery_horiz_050","battery_horiz_075","battery_low","battery_plus","battery_profile","battery_saver","battery_share","battery_status_good","battery_std","battery_unknown","battery_very_low","beach_access","bed","bedroom_baby","bedroom_child","bedroom_parent","bedtime","bedtime_off","beenhere","bento","bia","bid_landscape","bid_landscape_disabled","bigtop_updates","bike_scooter","biotech","blanket","blender","blind","blinds","blinds_closed","block","block_flipped","blood_pressure","bloodtype","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_drive","bluetooth_searching","blur_circular","blur_linear","blur_medium","blur_off","blur_on","blur_short","body_fat","body_system","bolt","bomb","book","book_2","book_3","book_4","book_5","book_online","bookmark","bookmark_add","bookmark_added","bookmark_border","bookmark_manager","bookmark_remove","bookmarks","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","bottom_app_bar","bottom_drawer","bottom_navigation","bottom_panel_close","bottom_panel_open","bottom_right_click","bottom_sheets","box","box_add","box_edit","boy","brand_awareness","brand_family","branding_watermark","breakfast_dining","breaking_news","breaking_news_alt_1","breastfeeding","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_alert","brightness_auto","brightness_empty","brightness_high","brightness_low","brightness_medium","bring_your_own_ip","broadcast_on_home","broadcast_on_personal","broken_image","browse","browse_activity","browse_gallery","browser_not_supported","browser_updated","brunch_dining","brush","bubble","bubble_chart","bubbles","bug_report","build","build_circle","bungalow","burst_mode","bus_alert","business","business_center","business_chip","business_messages","buttons_alt","cabin","cable","cached","cake","cake_add","calculate","calendar_add_on","calendar_apps_script","calendar_clock","calendar_month","calendar_today","calendar_view_day","calendar_view_month","calendar_view_week","call","call_end","call_log","call_made","call_merge","call_missed","call_missed_outgoing","call_quality","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_indoor","camera_outdoor","camera_rear","camera_roll","camera_video","cameraswitch","campaign","camping","cancel","cancel_presentation","cancel_schedule_send","candle","candlestick_chart","captive_portal","capture","car_crash","car_rental","car_repair","car_tag","card_giftcard","card_membership","card_travel","cardiology","cards","carpenter","carry_on_bag","carry_on_bag_checked","carry_on_bag_inactive","carry_on_bag_question","cases","casino","cast","cast_connected","cast_for_education","cast_pause","cast_warning","castle","catching_pokemon","category","celebration","cell_merge","cell_tower","cell_wifi","center_focus_strong","center_focus_weak","chair","chair_alt","chalet","change_circle","change_history","charger","charging_station","chart_data","chat","chat_add_on","chat_apps_script","chat_bubble","chat_bubble_outline","chat_error","chat_info","chat_paste_go","check","check_box","check_box_outline_blank","check_circle","check_circle_outline","check_in_out","check_indeterminate_small","check_small","checkbook","checked_bag","checked_bag_question","checklist","checklist_rtl","checkroom","cheer","chess","chevron_left","chevron_right","child_care","child_friendly","chip_extraction","chips","chrome_reader_mode","chromecast_2","chromecast_device","chronic","church","cinematic_blur","circle","circle_notifications","circles","circles_ext","clarify","class","clean_hands","cleaning","cleaning_bucket","cleaning_services","clear","clear_all","clear_day","clear_night","climate_mini_split","clinical_notes","clock_loader_10","clock_loader_20","clock_loader_40","clock_loader_60","clock_loader_80","clock_loader_90","close","close_fullscreen","close_small","closed_caption","closed_caption_disabled","closed_caption_off","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_sync","cloud_upload","cloudy_snowing","co2","co_present","code","code_blocks","code_off","coffee","coffee_maker","cognition","collapse_all","collapse_content","collections","collections_bookmark","color_lens","colorize","colors","comedy_mask","comic_bubble","comment","comment_bank","comments_disabled","commit","communication","communities","commute","compare","compare_arrows","compass_calibration","component_exchange","compost","compress","computer","concierge","conditions","confirmation_number","congenital","connect_without_contact","connected_tv","connecting_airports","construction","contact_emergency","contact_mail","contact_page","contact_phone","contact_support","contactless","contactless_off","contacts","contacts_product","content_copy","content_cut","content_paste","content_paste_go","content_paste_off","content_paste_search","contract","contract_delete","contract_edit","contrast","contrast_rtl_off","control_camera","control_point","control_point_duplicate","controller_gen","conversion_path","conversion_path_off","conveyor_belt","cookie","cookie_off","cooking","cool_to_dry","copy_all","copyright","coronavirus","corporate_fare","cottage","counter_0","counter_1","counter_2","counter_3","counter_4","counter_5","counter_6","counter_7","counter_8","counter_9","countertops","create","create_new_folder","credit_card","credit_card_gear","credit_card_heart","credit_card_off","credit_score","crib","crisis_alert","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_9_16","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","crossword","crowdsource","cruelty_free","css","csv","currency_bitcoin","currency_exchange","currency_franc","currency_lira","currency_pound","currency_ruble","currency_rupee","currency_yen","currency_yuan","curtains","curtains_closed","custom_typography","cut","cycle","cyclone","dangerous","dark_mode","dashboard","dashboard_customize","data_alert","data_array","data_check","data_exploration","data_info_alert","data_loss_prevention","data_object","data_saver_off","data_saver_on","data_table","data_thresholding","data_usage","database","dataset","dataset_linked","date_range","deblur","deceased","decimal_decrease","decimal_increase","deck","dehaze","delete","delete_forever","delete_history","delete_outline","delete_sweep","delivery_dining","demography","density_large","density_medium","density_small","dentistry","departure_board","deployed_code","deployed_code_account","deployed_code_alert","deployed_code_history","deployed_code_update","dermatology","description","deselect","design_services","desk","deskphone","desktop_access_disabled","desktop_mac","desktop_windows","destruction","details","detection_and_zone","detector","detector_alarm","detector_battery","detector_co","detector_offline","detector_smoke","detector_status","developer_board","developer_board_off","developer_guide","developer_mode","developer_mode_tv","device_hub","device_reset","device_thermostat","device_unknown","devices","devices_fold","devices_off","devices_other","devices_wearables","dew_point","diagnosis","dialer_sip","dialogs","dialpad","diamond","dictionary","difference","digital_out_of_home","digital_wellbeing","dining","dinner_dining","directions","directions_alt","directions_alt_off","directions_bike","directions_boat","directions_boat_filled","directions_bus","directions_bus_filled","directions_car","directions_car_filled","directions_off","directions_railway","directions_railway_filled","directions_run","directions_subway","directions_subway_filled","directions_transit","directions_transit_filled","directions_walk","directory_sync","dirty_lens","disabled_by_default","disabled_visible","disc_full","discount","discover_tune","dishwasher","dishwasher_gen","display_external_input","display_settings","distance","diversity_1","diversity_2","diversity_3","diversity_4","dns","do_disturb","do_disturb_alt","do_disturb_off","do_disturb_on","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","do_not_disturb_on_total_silence","do_not_step","do_not_touch","dock","dock_to_bottom","dock_to_left","dock_to_right","docs_add_on","docs_apps_script","document_scanner","domain","domain_add","domain_disabled","domain_verification","domain_verification_off","domino_mask","done","done_all","done_outline","donut_large","donut_small","door_back","door_front","door_open","door_sensor","door_sliding","doorbell","doorbell_3p","doorbell_chime","double_arrow","downhill_skiing","download","download_2","download_done","download_for_offline","downloading","draft","draft_orders","drafts","drag_click","drag_handle","drag_indicator","drag_pan","draw","draw_abstract","draw_collage","dresser","drive_eta","drive_file_move","drive_file_move_outline","drive_file_move_rtl","drive_file_rename_outline","drive_folder_upload","dropdown","dry","dry_cleaning","dual_screen","duo","dvr","dynamic_feed","dynamic_form","e911_avatar","e911_emergency","e_mobiledata","e_mobiledata_badge","earbuds","earbuds_battery","early_on","earthquake","east","ecg","ecg_heart","eco","eda","edgesensor_high","edgesensor_low","edit","edit_attributes","edit_calendar","edit_document","edit_location","edit_location_alt","edit_note","edit_notifications","edit_off","edit_road","edit_square","editor_choice","egg","egg_alt","eject","elderly","elderly_woman","electric_bike","electric_bolt","electric_car","electric_meter","electric_moped","electric_rickshaw","electric_scooter","electrical_services","elevation","elevator","email","emergency","emergency_heat","emergency_heat_2","emergency_home","emergency_recording","emergency_share","emergency_share_off","emoji_emotions","emoji_events","emoji_flags","emoji_food_beverage","emoji_nature","emoji_objects","emoji_people","emoji_symbols","emoji_transportation","emoticon","empty_dashboard","enable","encrypted","endocrinology","energy","energy_program_saving","energy_program_time_used","energy_savings_leaf","engineering","enhanced_encryption","ent","enterprise","enterprise_off","equal","equalizer","error","error_med","error_outline","escalator","escalator_warning","euro","euro_symbol","ev_charger","ev_mobiledata_badge","ev_shadow","ev_shadow_add","ev_shadow_minus","ev_station","event","event_available","event_busy","event_list","event_note","event_repeat","event_seat","event_upcoming","exclamation","exercise","exit_to_app","expand","expand_all","expand_circle_down","expand_circle_right","expand_circle_up","expand_content","expand_less","expand_more","experiment","explicit","explore","explore_nearby","explore_off","explosion","export_notes","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","extension_off","eyeglasses","face","face_2","face_3","face_4","face_5","face_6","face_retouching_natural","face_retouching_off","face_unlock","fact_check","factory","falling","familiar_face_and_zone","family_history","family_home","family_link","family_restroom","family_star","farsight_digital","fast_forward","fast_rewind","fastfood","faucet","favorite","favorite_border","fax","feature_search","featured_play_list","featured_seasonal_and_gifts","featured_video","feed","feedback","female","femur","femur_alt","fence","fertile","festival","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_copy","file_copy_off","file_download","file_download_done","file_download_off","file_map","file_open","file_present","file_save","file_save_off","file_upload","file_upload_off","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_alt","filter_alt_off","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_list_alt","filter_list_off","filter_none","filter_retrolux","filter_tilt_shift","filter_vintage","finance","finance_chip","finance_mode","find_in_page","find_replace","fingerprint","fire_extinguisher","fire_hydrant","fire_hydrant_alt","fire_truck","fireplace","first_page","fit_page","fit_screen","fit_width","fitbit","fitness_center","flag","flag_circle","flaky","flare","flash_auto","flash_off","flash_on","flashlight_off","flashlight_on","flatware","flex_direction","flex_no_wrap","flex_wrap","flight","flight_class","flight_land","flight_takeoff","flights_and_hotels","flightsmode","flip","flip_camera_android","flip_camera_ios","flip_to_back","flip_to_front","flood","floor","floor_lamp","flowsheet","fluid","fluid_balance","fluid_med","fluorescent","flutter","flutter_dash","fmd_bad","fmd_good","foggy","folded_hands","folder","folder_copy","folder_data","folder_delete","folder_limited","folder_managed","folder_off","folder_open","folder_shared","folder_special","folder_supervised","folder_zip","follow_the_signs","font_download","font_download_off","food_bank","foot_bones","footprint","for_you","forest","fork_left","fork_right","forklift","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_h1","format_h2","format_h3","format_h4","format_h5","format_h6","format_image_left","format_image_right","format_indent_decrease","format_indent_increase","format_ink_highlighter","format_italic","format_letter_spacing","format_letter_spacing_2","format_letter_spacing_standard","format_letter_spacing_wide","format_letter_spacing_wider","format_line_spacing","format_list_bulleted","format_list_bulleted_add","format_list_numbered","format_list_numbered_rtl","format_overline","format_paint","format_paragraph","format_quote","format_shapes","format_size","format_strikethrough","format_text_clip","format_text_overflow","format_text_wrap","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","format_underlined_squiggle","forms_add_on","forms_apps_script","fort","forum","forward","forward_10","forward_30","forward_5","forward_circle","forward_media","forward_to_inbox","foundation","frame_inspect","frame_person","frame_person_off","frame_reload","frame_source","free_breakfast","free_cancellation","front_hand","front_loader","full_coverage","full_hd","full_stacked_bar_chart","fullscreen","fullscreen_exit","function","functions","g_mobiledata","g_mobiledata_badge","g_translate","gallery_thumbnail","gamepad","games","garage","garage_door","garage_home","garden_cart","gas_meter","gastroenterology","gate","gavel","general_device","generating_tokens","genetics","genres","gesture","gesture_select","get_app","gif","gif_box","girl","gite","glass_cup","globe","globe_asia","globe_uk","glucose","glyphs","go_to_line","golf_course","google_home_devices","google_tv_remote","google_wifi","gpp_bad","gpp_good","gpp_maybe","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grading","grain","graphic_eq","grass","grid_3x3","grid_3x3_off","grid_4x4","grid_goldenratio","grid_guides","grid_off","grid_on","grid_view","grocery","group","group_add","group_off","group_remove","group_work","grouped_bar_chart","groups","groups_2","groups_3","gynecology","h_mobiledata","h_mobiledata_badge","h_plus_mobiledata","h_plus_mobiledata_badge","hail","hallway","hand_bones","hand_gesture","handshake","handyman","hangout_video","hangout_video_off","hard_drive","hard_drive_2","hardware","hd","hdr_auto","hdr_auto_select","hdr_enhanced_select","hdr_off","hdr_off_select","hdr_on","hdr_on_select","hdr_plus","hdr_plus_off","hdr_strong","hdr_weak","headphones","headphones_battery","headset","headset_mic","headset_off","healing","health_and_beauty","health_and_safety","health_metrics","heap_snapshot_large","heap_snapshot_multiple","heap_snapshot_thumbnail","hearing","hearing_disabled","heart_broken","heart_check","heart_minus","heart_plus","heat","heat_pump","heat_pump_balance","height","helicopter","help","help_center","help_clinic","help_outline","hematology","hevc","hexagon","hide","hide_image","hide_source","high_density","high_quality","high_res","highlight","highlight_alt","highlight_keyboard_focus","highlight_mouse_cursor","highlight_off","highlight_text_cursor","highlighter_size_1","highlighter_size_2","highlighter_size_3","highlighter_size_4","highlighter_size_5","hiking","history","history_edu","history_off","history_toggle_off","hive","hls","hls_off","holiday_village","home","home_and_garden","home_app_logo","home_filled","home_health","home_improvement_and_tools","home_iot_device","home_max","home_max_dots","home_mini","home_pin","home_repair_service","home_speaker","home_storage","home_work","horizontal_distribute","horizontal_rule","horizontal_split","hot_tub","hotel","hotel_class","hourglass","hourglass_bottom","hourglass_disabled","hourglass_empty","hourglass_full","hourglass_top","house","house_siding","house_with_shield","houseboat","household_supplies","how_to_reg","how_to_vote","hr_resting","html","http","https","hub","humerus","humerus_alt","humidity_high","humidity_indoor","humidity_low","humidity_mid","humidity_percentage","hvac","ice_skating","icecream","ifl","iframe","iframe_off","image","image_aspect_ratio","image_not_supported","image_search","imagesearch_roller","imagesmode","immunology","import_contacts","import_export","important_devices","in_home_mode","inactive_order","inbox","inbox_customize","incomplete_circle","indeterminate_check_box","indeterminate_question_box","info","info_i","info_outline","infrared","ink_eraser","ink_eraser_off","ink_highlighter","ink_highlighter_move","ink_marker","ink_pen","inpatient","input","input_circle","insert_chart","insert_chart_outlined","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_page_break","insert_photo","insert_text","insights","install_desktop","install_mobile","instant_mix","integration_instructions","interactive_space","interests","interpreter_mode","inventory","inventory_2","invert_colors","invert_colors_off","ios","ios_share","iron","iso","jamboard_kiosk","javascript","join","join_full","join_inner","join_left","join_right","joystick","jump_to_element","kayaking","kebab_dining","kettle","key","key_off","key_vertical","key_visualizer","keyboard","keyboard_alt","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_capslock_badge","keyboard_command_key","keyboard_control_key","keyboard_double_arrow_down","keyboard_double_arrow_left","keyboard_double_arrow_right","keyboard_double_arrow_up","keyboard_external_input","keyboard_full","keyboard_hide","keyboard_keys","keyboard_off","keyboard_onscreen","keyboard_option_key","keyboard_previous_language","keyboard_return","keyboard_tab","keyboard_tab_rtl","keyboard_voice","kid_star","king_bed","kitchen","kitesurfing","lab_panel","lab_profile","lab_research","label","label_important","label_important_outline","label_off","labs","lan","landscape","landslide","language","language_chinese_array","language_chinese_cangjie","language_chinese_dayi","language_chinese_pinyin","language_chinese_quick","language_chinese_wubi","language_french","language_gb_english","language_international","language_japanese_kana","language_korean_latin","language_pinyin","language_spanish","language_us","language_us_colemak","language_us_dvorak","laps","laptop","laptop_chromebook","laptop_mac","laptop_windows","lasso_select","last_page","launch","laundry","layers","layers_clear","lda","leaderboard","leak_add","leak_remove","left_click","left_panel_close","left_panel_open","legend_toggle","lens","lens_blur","letter_switch","library_add","library_add_check","library_books","library_music","license","lift_to_talk","light","light_group","light_mode","light_off","lightbulb","lightbulb_circle","lightbulb_outline","lightning_stand","line_axis","line_curve","line_end","line_end_arrow","line_end_arrow_notch","line_end_circle","line_end_diamond","line_end_square","line_start","line_start_arrow","line_start_arrow_notch","line_start_circle","line_start_diamond","line_start_square","line_style","line_weight","linear_scale","link","link_off","linked_camera","linked_services","liquor","list","list_alt","list_alt_add","lists","live_help","live_tv","living","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_fire_department","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_police","local_post_office","local_printshop","local_see","local_shipping","local_taxi","location_away","location_chip","location_city","location_disabled","location_home","location_off","location_on","location_pin","location_searching","lock","lock_clock","lock_open","lock_open_right","lock_outline","lock_person","lock_reset","login","logo_dev","logout","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loop","loupe","low_density","low_priority","loyalty","lte_mobiledata","lte_mobiledata_badge","lte_plus_mobiledata","lte_plus_mobiledata_badge","luggage","lunch_dining","lyrics","macro_auto","macro_off","magnification_large","magnification_small","magnify_docked","magnify_fullscreen","mail","mail_lock","mail_outline","male","man","man_2","man_3","man_4","manage_accounts","manage_history","manage_search","manga","manufacturing","map","maps_home_work","maps_ugc","margin","mark_as_unread","mark_chat_read","mark_chat_unread","mark_email_read","mark_email_unread","mark_unread_chat_alt","markdown","markdown_copy","markdown_paste","markunread","markunread_mailbox","masked_transitions","masks","match_case","match_word","matter","maximize","measuring_tape","media_bluetooth_off","media_bluetooth_on","media_link","media_output","media_output_off","mediation","medical_information","medical_mask","medical_services","medication","medication_liquid","meeting_room","memory","memory_alt","menstrual_health","menu","menu_book","menu_open","merge","merge_type","message","metabolism","mfg_nest_yale_lock","mic","mic_double","mic_external_off","mic_external_on","mic_none","mic_off","microbiology","microwave","microwave_gen","military_tech","mimo","mimo_disconnect","mindfulness","minimize","minor_crash","mintmark","miscellaneous_services","missed_video_call","missing_controller","mist","mitre","mixture_med","mms","mobile_friendly","mobile_off","mobile_screen_share","mobiledata_off","mode","mode_comment","mode_cool","mode_cool_off","mode_dual","mode_edit","mode_edit_outline","mode_fan","mode_fan_off","mode_heat","mode_heat_cool","mode_heat_off","mode_night","mode_of_travel","mode_off_on","mode_standby","model_training","monetization_on","money","money_off","money_off_csred","monitor","monitor_heart","monitor_weight","monitor_weight_gain","monitor_weight_loss","monitoring","monochrome_photos","mood","mood_bad","mop","moped","more","more_down","more_horiz","more_time","more_up","more_vert","mosque","motion_blur","motion_mode","motion_photos_auto","motion_photos_off","motion_photos_on","motion_photos_pause","motion_photos_paused","motion_sensor_active","motion_sensor_alert","motion_sensor_idle","motion_sensor_urgent","motorcycle","mountain_flag","mouse","move","move_down","move_group","move_item","move_location","move_selection_down","move_selection_left","move_selection_right","move_selection_up","move_to_inbox","move_up","moved_location","movie","movie_creation","movie_edit","movie_filter","movie_info","moving","moving_beds","moving_ministry","mp","multicooker","multiline_chart","multiple_stop","museum","music_cast","music_note","music_off","music_video","my_location","mystery","nat","nature","nature_people","navigate_before","navigate_next","navigation","near_me","near_me_disabled","nearby","nearby_error","nearby_off","nephrology","nest_audio","nest_cam_floodlight","nest_cam_indoor","nest_cam_iq","nest_cam_iq_outdoor","nest_cam_magnet_mount","nest_cam_outdoor","nest_cam_stand","nest_cam_wall_mount","nest_cam_wired_stand","nest_clock_farsight_analog","nest_clock_farsight_digital","nest_connect","nest_detect","nest_display","nest_display_max","nest_doorbell_visitor","nest_eco_leaf","nest_farsight_weather","nest_found_savings","nest_gale_wifi","nest_heat_link_e","nest_heat_link_gen_3","nest_hello_doorbell","nest_mini","nest_multi_room","nest_protect","nest_remote","nest_remote_comfort_sensor","nest_secure_alarm","nest_sunblock","nest_tag","nest_thermostat","nest_thermostat_e_eu","nest_thermostat_gen_3","nest_thermostat_sensor","nest_thermostat_sensor_eu","nest_thermostat_zirconium_eu","nest_true_radiant","nest_wake_on_approach","nest_wake_on_press","nest_wifi_point","nest_wifi_pro","nest_wifi_pro_2","nest_wifi_router","network_cell","network_check","network_intelligence_history","network_intelligence_update","network_locked","network_manage","network_node","network_ping","network_wifi","network_wifi_1_bar","network_wifi_1_bar_locked","network_wifi_2_bar","network_wifi_2_bar_locked","network_wifi_3_bar","network_wifi_3_bar_locked","network_wifi_locked","neurology","new_label","new_releases","new_window","news","newsmode","newspaper","newsstand","next_plan","next_week","nfc","night_shelter","night_sight_auto","night_sight_auto_off","night_sight_max","nightlife","nightlight","nightlight_round","nights_stay","no_accounts","no_adult_content","no_backpack","no_cell","no_crash","no_drinks","no_encryption","no_encryption_gmailerrorred","no_flash","no_food","no_luggage","no_meals","no_meals_ouline","no_meeting_room","no_photography","no_sim","no_sound","no_stroller","no_transfer","noise_aware","noise_control_off","noise_control_on","nordic_walking","north","north_east","north_west","not_accessible","not_accessible_forward","not_interested","not_listed_location","not_started","note","note_add","note_alt","note_stack","note_stack_add","notes","notification_add","notification_important","notification_multiple","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","notifications_unread","numbers","nutrition","ods","odt","offline_bolt","offline_pin","offline_share","oil_barrel","on_device_training","on_hub_device","oncology","ondemand_video","online_prediction","onsen","opacity","open_in_browser","open_in_full","open_in_new","open_in_new_down","open_in_new_off","open_in_phone","open_jam","open_with","ophthalmology","oral_disease","order_approve","order_play","orders","orthopedics","other_admission","other_houses","outbound","outbox","outbox_alt","outdoor_garden","outdoor_grill","outgoing_mail","outlet","outlined_flag","outpatient","outpatient_med","output","output_circle","oven","oven_gen","overview","overview_key","oxygen_saturation","p2p","pace","pacemaker","package","package_2","padding","page_control","page_info","pageless","pages","pageview","paid","palette","pallet","pan_tool","pan_tool_alt","pan_zoom","panorama","panorama_fish_eye","panorama_horizontal","panorama_horizontal_select","panorama_photosphere","panorama_photosphere_select","panorama_vertical","panorama_vertical_select","panorama_wide_angle","panorama_wide_angle_select","paragliding","park","partly_cloudy_day","partly_cloudy_night","partner_exchange","partner_reports","party_mode","passkey","password","patient_list","pattern","pause","pause_circle","pause_circle_filled","pause_circle_outline","pause_presentation","payment","payments","pedal_bike","pediatrics","pen_size_1","pen_size_2","pen_size_3","pen_size_4","pen_size_5","pending","pending_actions","pentagon","people","people_alt","people_outline","percent","pergola","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","person","person_2","person_3","person_4","person_add","person_add_alt","person_add_alt_1","person_add_disabled","person_alert","person_apron","person_book","person_cancel","person_celebrate","person_check","person_edit","person_off","person_outline","person_pin","person_pin_circle","person_play","person_raised_hand","person_remove","person_remove_alt_1","person_search","personal_bag","personal_bag_off","personal_bag_question","personal_injury","personal_places","personal_video","pest_control","pest_control_rodent","pet_supplies","pets","phishing","phone","phone_android","phone_bluetooth_speaker","phone_callback","phone_disabled","phone_enabled","phone_forwarded","phone_in_talk","phone_iphone","phone_locked","phone_missed","phone_paused","phonelink","phonelink_erase","phonelink_lock","phonelink_off","phonelink_ring","phonelink_ring_off","phonelink_setup","photo","photo_album","photo_auto_merge","photo_camera","photo_camera_back","photo_camera_front","photo_filter","photo_frame","photo_library","photo_prints","photo_size_select_actual","photo_size_select_large","photo_size_select_small","php","physical_therapy","piano","piano_off","picture_as_pdf","picture_in_picture","picture_in_picture_alt","picture_in_picture_center","picture_in_picture_large","picture_in_picture_medium","picture_in_picture_mobile","picture_in_picture_off","picture_in_picture_small","pie_chart","pie_chart_outline","pie_chart_outlined","pill","pill_off","pin","pin_drop","pin_end","pin_invoke","pinch","pinch_zoom_in","pinch_zoom_out","pip","pip_exit","pivot_table_chart","pix","place","place_item","plagiarism","planner_banner_ad_pt","planner_review","play_arrow","play_circle","play_circle_filled","play_circle_outline","play_disabled","play_for_work","play_lesson","play_pause","play_shapes","playing_cards","playlist_add","playlist_add_check","playlist_add_check_circle","playlist_add_circle","playlist_play","playlist_remove","plumbing","plus_one","podcasts","podiatry","podium","point_of_sale","point_scan","policy","poll","polyline","polymer","pool","portable_wifi_off","portrait","position_bottom_left","position_bottom_right","position_top_right","post","post_add","potted_plant","power","power_input","power_off","power_settings_new","prayer_times","precision_manufacturing","pregnancy","pregnant_woman","preliminary","prescriptions","present_to_all","preview","preview_off","price_change","price_check","print","print_add","print_connect","print_disabled","print_error","print_lock","priority","priority_high","privacy","privacy_tip","private_connectivity","problem","procedure","process_chart","production_quantity_limits","productivity","progress_activity","prompt_suggestion","propane","propane_tank","psychiatry","psychology","psychology_alt","public","public_off","publish","published_with_changes","pulmonology","pulse_alert","punch_clock","push_pin","qr_code","qr_code_2","qr_code_2_add","qr_code_scanner","query_builder","query_stats","question_answer","question_exchange","question_mark","queue","queue_music","queue_play_next","quick_phrases","quick_reference","quick_reference_all","quick_reorder","quickreply","quiet_time","quiet_time_active","quiz","r_mobiledata","radar","radio","radio_button_checked","radio_button_partial","radio_button_unchecked","radiology","railway_alert","rainy","rainy_heavy","rainy_light","rainy_snow","ramen_dining","ramp_left","ramp_right","range_hood","rate_review","raven","raw_off","raw_on","read_more","readiness_score","real_estate_agent","rear_camera","rebase","rebase_edit","receipt","receipt_long","recent_actors","recent_patient","recommend","record_voice_over","rectangle","recycling","redeem","redo","reduce_capacity","refresh","regular_expression","relax","release_alert","remember_me","reminder","remote_gen","remove","remove_circle","remove_circle_outline","remove_done","remove_from_queue","remove_moderator","remove_red_eye","remove_road","remove_selection","remove_shopping_cart","reopen_window","reorder","repartition","repeat","repeat_on","repeat_one","repeat_one_on","replay","replay_10","replay_30","replay_5","replay_circle_filled","reply","reply_all","report","report_gmailerrorred","report_off","report_problem","request_page","request_quote","reset_image","reset_tv","reset_wrench","resize","respiratory_rate","responsive_layout","restart_alt","restaurant","restaurant_menu","restore","restore_from_trash","restore_page","resume","reviews","rewarded_ads","rheumatology","rib_cage","rice_bowl","right_click","right_panel_close","right_panel_open","ring_volume","ripples","robot","robot_2","rocket","rocket_launch","roller_shades","roller_shades_closed","roller_skating","roofing","room","room_preferences","room_service","rotate_90_degrees_ccw","rotate_90_degrees_cw","rotate_left","rotate_right","roundabout_left","roundabout_right","rounded_corner","route","router","routine","rowing","rss_feed","rsvp","rtt","rubric","rule","rule_folder","rule_settings","run_circle","running_with_errors","rv_hookup","safety_check","safety_check_off","safety_divider","sailing","salinity","sanitizer","satellite","satellite_alt","sauna","save","save_alt","save_as","saved_search","savings","scale","scan","scan_delete","scanner","scatter_plot","scene","schedule","schedule_send","schema","school","science","science_off","score","scoreboard","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_record","screen_rotation","screen_rotation_alt","screen_rotation_up","screen_search_desktop","screen_share","screenshot","screenshot_frame","screenshot_keyboard","screenshot_monitor","screenshot_region","screenshot_tablet","scrollable_header","scuba_diving","sd","sd_card","sd_card_alert","sd_storage","sdk","search","search_check","search_hands_free","search_off","security","security_key","security_update","security_update_good","security_update_warning","segment","select","select_all","select_check_box","select_to_speak","select_window","select_window_off","self_care","self_improvement","sell","send","send_and_archive","send_money","send_time_extension","send_to_mobile","sensor_door","sensor_occupied","sensor_window","sensors","sensors_krx","sensors_krx_off","sensors_off","sentiment_calm","sentiment_content","sentiment_dissatisfied","sentiment_excited","sentiment_extremely_dissatisfied","sentiment_frustrated","sentiment_neutral","sentiment_sad","sentiment_satisfied","sentiment_satisfied_alt","sentiment_stressed","sentiment_very_dissatisfied","sentiment_very_satisfied","sentiment_worried","service_toolbox","set_meal","settings","settings_accessibility","settings_account_box","settings_alert","settings_applications","settings_b_roll","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_cinematic_blur","settings_ethernet","settings_heart","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_motion_mode","settings_night_sight","settings_overscan","settings_panorama","settings_phone","settings_photo_camera","settings_power","settings_remote","settings_slow_motion","settings_suggest","settings_system_daydream","settings_timelapse","settings_video_camera","settings_voice","settop_component","severe_cold","shadow","shadow_add","shadow_minus","shape_line","shapes","share","share_location","share_off","share_reviews","share_windows","sheets_rtl","shelf_auto_hide","shelf_position","shelves","shield","shield_lock","shield_locked","shield_moon","shield_person","shield_question","shield_with_heart","shield_with_house","shift","shift_lock","shop","shop_2","shop_two","shopping_bag","shopping_basket","shopping_cart","shopping_cart_checkout","shopping_cart_off","shoppingmode","short_stay","short_text","shortcut","show_chart","shower","shuffle","shuffle_on","shutter_speed","shutter_speed_add","shutter_speed_minus","sick","side_navigation","sign_language","signal_cellular_0_bar","signal_cellular_1_bar","signal_cellular_2_bar","signal_cellular_3_bar","signal_cellular_4_bar","signal_cellular_add","signal_cellular_alt","signal_cellular_alt_1_bar","signal_cellular_alt_2_bar","signal_cellular_connected_no_internet_0_bar","signal_cellular_connected_no_internet_1_bar","signal_cellular_connected_no_internet_2_bar","signal_cellular_connected_no_internet_3_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_nodata","signal_cellular_null","signal_cellular_off","signal_cellular_pause","signal_disconnected","signal_wifi_0_bar","signal_wifi_1_bar","signal_wifi_1_bar_lock","signal_wifi_2_bar","signal_wifi_2_bar_lock","signal_wifi_3_bar","signal_wifi_3_bar_lock","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_bad","signal_wifi_connected_no_internet_0","signal_wifi_connected_no_internet_1","signal_wifi_connected_no_internet_2","signal_wifi_connected_no_internet_3","signal_wifi_connected_no_internet_4","signal_wifi_off","signal_wifi_statusbar_1_bar","signal_wifi_statusbar_2_bar","signal_wifi_statusbar_3_bar","signal_wifi_statusbar_4_bar","signal_wifi_statusbar_connected_no_internet","signal_wifi_statusbar_connected_no_internet_1","signal_wifi_statusbar_connected_no_internet_2","signal_wifi_statusbar_connected_no_internet_3","signal_wifi_statusbar_connected_no_internet_4","signal_wifi_statusbar_not_connected","signal_wifi_statusbar_null","signature","signpost","sim_card","sim_card_alert","sim_card_download","single_bed","sip","skateboarding","skeleton","skillet","skillet_cooktop","skip_next","skip_previous","skull","sledding","sleep_score","slide_library","sliders","slideshow","slow_motion_video","smart_button","smart_display","smart_outlet","smart_screen","smart_toy","smartphone","smb_share","smoke_free","smoking_rooms","sms","sms_failed","snippet_folder","snooze","snowboarding","snowing","snowing_heavy","snowmobile","snowshoeing","soap","social_distance","social_leaderboard","solar_power","sort","sort_by_alpha","sos","sound_detection_dog_barking","sound_detection_glass_break","sound_detection_loud_sound","sound_sampler","soup_kitchen","source","source_environment","source_notes","south","south_america","south_east","south_west","spa","space_bar","space_dashboard","spatial_audio","spatial_audio_off","spatial_tracking","speaker","speaker_group","speaker_notes","speaker_notes_off","speaker_phone","special_character","specific_gravity","speech_to_text","speed","speed_0_5","speed_1_2","speed_1_5","speed_2x","spellcheck","splitscreen","splitscreen_add","splitscreen_bottom","splitscreen_left","splitscreen_right","splitscreen_top","splitscreen_vertical_add","spo2","spoke","sports","sports_and_outdoors","sports_bar","sports_baseball","sports_basketball","sports_cricket","sports_esports","sports_football","sports_golf","sports_gymnastics","sports_handball","sports_hockey","sports_kabaddi","sports_martial_arts","sports_mma","sports_motorsports","sports_rugby","sports_score","sports_soccer","sports_tennis","sports_volleyball","sprinkler","sprint","square","square_foot","ssid_chart","stack","stack_off","stack_star","stacked_bar_chart","stacked_email","stacked_inbox","stacked_line_chart","stacks","stadia_controller","stadium","stairs","star","star_border","star_border_purple500","star_half","star_outline","star_purple500","star_rate","star_rate_half","stars","start","stat_0","stat_1","stat_2","stat_3","stat_minus_1","stat_minus_2","stat_minus_3","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","step","step_into","step_out","step_over","steppers","steps","stethoscope","stethoscope_arrow","stethoscope_check","sticky_note","sticky_note_2","stock_media","stockpot","stop","stop_circle","stop_screen_share","storage","store","store_mall_directory","storefront","storm","straight","straighten","strategy","stream","stream_apps","streetview","stress_management","strikethrough_s","stroke_full","stroke_partial","stroller","style","styler","stylus","stylus_laser_pointer","stylus_note","subdirectory_arrow_left","subdirectory_arrow_right","subheader","subject","subscript","subscriptions","subtitles","subtitles_off","subway","summarize","sunny","sunny_snowing","superscript","supervised_user_circle","supervised_user_circle_off","supervisor_account","support","support_agent","surfing","surgical","surround_sound","swap_calls","swap_driving_apps","swap_driving_apps_wheel","swap_horiz","swap_horizontal_circle","swap_vert","swap_vertical_circle","sweep","swipe","swipe_down","swipe_down_alt","swipe_left","swipe_left_alt","swipe_right","swipe_right_alt","swipe_up","swipe_up_alt","swipe_vertical","switch","switch_access","switch_access_2","switch_access_shortcut","switch_access_shortcut_add","switch_account","switch_camera","switch_left","switch_right","switch_video","switches","sword_rose","swords","symptoms","synagogue","sync","sync_alt","sync_disabled","sync_lock","sync_problem","sync_saved_locally","syringe","system_security_update","system_security_update_good","system_security_update_warning","system_update","system_update_alt","tab","tab_close","tab_close_right","tab_duplicate","tab_group","tab_move","tab_new_right","tab_recent","tab_unselected","table","table_bar","table_chart","table_chart_view","table_lamp","table_restaurant","table_rows","table_rows_narrow","table_view","tablet","tablet_android","tablet_mac","tabs","tactic","tag","tag_faces","takeout_dining","tamper_detection_off","tamper_detection_on","tap_and_play","tapas","target","task","task_alt","taunt","taxi_alert","team_dashboard","temp_preferences_eco","temple_buddhist","temple_hindu","tenancy","terminal","terrain","text_ad","text_decrease","text_fields","text_fields_alt","text_format","text_increase","text_rotate_up","text_rotate_vertical","text_rotation_angledown","text_rotation_angleup","text_rotation_down","text_rotation_none","text_select_end","text_select_jump_to_beginning","text_select_jump_to_end","text_select_move_back_character","text_select_move_back_word","text_select_move_down","text_select_move_forward_character","text_select_move_forward_word","text_select_move_up","text_select_start","text_snippet","text_to_speech","textsms","texture","texture_add","texture_minus","theater_comedy","theaters","thermometer","thermometer_add","thermometer_gain","thermometer_loss","thermometer_minus","thermostat","thermostat_auto","thermostat_carbon","things_to_do","thread_unread","thumb_down","thumb_down_alt","thumb_down_off_alt","thumb_up","thumb_up_alt","thumb_up_off_alt","thumbnail_bar","thumbs_up_down","thunderstorm","tibia","tibia_alt","time_auto","time_to_leave","timelapse","timeline","timer","timer_10","timer_10_alt_1","timer_10_select","timer_3","timer_3_alt_1","timer_3_select","timer_off","tips_and_updates","tire_repair","title","toast","toc","today","toggle_off","toggle_on","token","toll","tonality","toolbar","tools_flat_head","tools_installation_kit","tools_ladder","tools_level","tools_phillips","tools_pliers_wire_stripper","tools_power_drill","tooltip","top_panel_close","top_panel_open","topic","tornado","total_dissolved_solids","touch_app","touchpad_mouse","touchpad_mouse_off","tour","toys","toys_and_games","toys_fan","track_changes","traffic","trail_length","trail_length_medium","trail_length_short","train","tram","transcribe","transfer_within_a_station","transform","transgender","transit_enterexit","transition_chop","transition_dissolve","transition_fade","transition_push","transition_slide","translate","transportation","travel","travel_explore","travel_luggage_and_bags","trending_down","trending_flat","trending_up","trip","trip_origin","trolley","trophy","troubleshoot","try","tsunami","tsv","tty","tune","tungsten","turn_left","turn_right","turn_sharp_left","turn_sharp_right","turn_slight_left","turn_slight_right","turned_in","turned_in_not","tv","tv_gen","tv_guide","tv_off","tv_options_edit_channels","tv_options_input_settings","tv_remote","tv_signin","tv_with_assistant","two_pager","two_wheeler","type_specimen","u_turn_left","u_turn_right","ulna_radius","ulna_radius_alt","umbrella","unarchive","undo","unfold_less","unfold_less_double","unfold_more","unfold_more_double","ungroup","universal_currency","universal_currency_alt","universal_local","unknown_2","unknown_5","unknown_document","unknown_med","unlicense","unpublished","unsubscribe","upcoming","update","update_disabled","upgrade","upload","upload_2","upload_file","urology","usb","usb_off","user_attributes","vaccines","vacuum","valve","vape_free","vaping_rooms","variable_add","variable_insert","variable_remove","variables","ventilator","verified","verified_user","vertical_align_bottom","vertical_align_center","vertical_align_top","vertical_distribute","vertical_shades","vertical_shades_closed","vertical_split","vibration","video_call","video_camera_back","video_camera_front","video_camera_front_off","video_chat","video_file","video_label","video_library","video_search","video_settings","video_stable","videocam","videocam_off","videogame_asset","videogame_asset_off","view_agenda","view_array","view_carousel","view_column","view_column_2","view_comfy","view_comfy_alt","view_compact","view_compact_alt","view_cozy","view_day","view_headline","view_in_ar","view_in_ar_off","view_kanban","view_list","view_module","view_quilt","view_sidebar","view_stream","view_timeline","view_week","vignette","villa","visibility","visibility_lock","visibility_off","vital_signs","voice_chat","voice_over_off","voice_selection","voicemail","volcano","volume_down","volume_down_alt","volume_mute","volume_off","volume_up","volunteer_activism","voting_chip","vpn_key","vpn_key_alert","vpn_key_off","vpn_lock","vr180_create2d","vr180_create2d_off","vrpano","wall_art","wall_lamp","wallet","wallpaper","wallpaper_slideshow","ward","warehouse","warning","warning_amber","warning_off","wash","watch","watch_button_press","watch_later","watch_off","watch_screentime","watch_wake","water","water_bottle","water_bottle_large","water_damage","water_do","water_drop","water_ec","water_full","water_heater","water_lock","water_loss","water_lux","water_medium","water_orp","water_ph","water_pump","water_voc","waterfall_chart","waves","waving_hand","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_shade","wb_sunny","wb_twighlight","wb_twilight","wc","weather_hail","weather_mix","weather_snowy","web","web_asset","web_asset_off","web_stories","web_traffic","webhook","weekend","weight","west","whatshot","wheelchair_pickup","where_to_vote","widgets","width","width_full","width_normal","width_wide","wifi","wifi_1_bar","wifi_2_bar","wifi_add","wifi_calling","wifi_calling_1","wifi_calling_2","wifi_calling_3","wifi_channel","wifi_find","wifi_home","wifi_lock","wifi_notification","wifi_off","wifi_password","wifi_protected_setup","wifi_proxy","wifi_tethering","wifi_tethering_error","wifi_tethering_off","wind_power","window","window_closed","window_open","window_sensor","wine_bar","woman","woman_2","work","work_alert","work_history","work_off","work_outline","work_update","workspace_premium","workspaces","workspaces_filled","workspaces_outline","wounds_injuries","wrap_text","wrist","wrong_location","wysiwyg","yard","your_trips","youtube_activity","youtube_searched_for","zone_person_alert","zone_person_idle","zone_person_urgent","zoom_in","zoom_in_map","zoom_out","zoom_out_map"]');
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject$1("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const opened = ref({
      widgetSection: false,
      storeSection: false
    });
    const widgetSettings = useModel(__props, "modelValue");
    const isDarkTheme = ref(
      JSON.parse(localStorage.getItem("isDarkTheme") || "false")
    );
    const iconsList = ref([]);
    const searchQuery = ref("");
    const filteredIcons = computed(() => {
      return iconsList.value.filter(
        (icon) => icon.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const handleIconClick = (icon) => {
      if (icon) widgetSettings.value.currentIcon = icon;
    };
    onMounted(() => {
      iconsList.value = MaterialIcons;
    });
    watch(() => widgetSettings.value, (newVal) => {
      if (newVal) {
        if (!(newVal.iconColor instanceof VariableWrapper)) {
          newVal.iconColor = markRaw(new VariableWrapper(newVal.iconColor || "#000000"));
        }
      }
    }, { immediate: true, deep: true });
    const fontColor = computed(() => {
      return isDarkTheme.value ? "#ffffff" : "";
    });
    const iconStyle = computed(() => {
      return `font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 100, "opsz" 48;`;
    });
    return (_ctx, _cache) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_checkbox = resolveComponent("va-checkbox");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_slider = resolveComponent("va-slider");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: t("IconWidget.title")
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_va_input, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              placeholder: "Search icon...",
              label: t("icon:IconWidget.iconSearch")
            }, null, 8, ["modelValue", "label"]),
            createElementVNode("div", {
              class: "icons-container",
              style: normalizeStyle(iconStyle.value)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredIcons.value, (icon) => {
                return openBlock(), createElementBlock("span", {
                  key: icon,
                  onClick: ($event) => handleIconClick(icon),
                  class: normalizeClass(["material-symbols-outlined", { "active-icon": icon === widgetSettings.value.currentIcon }])
                }, toDisplayString(icon), 11, _hoisted_2);
              }), 128))
            ], 4),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.isIconFilled,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.isIconFilled = $event),
              label: t("icon:IconWidget.iconFilled")
            }, null, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.iconColor,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.iconColor = $event),
              label: t("icon:IconWidget.iconColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("icon:IconWidget.iconColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(_component_va_slider, {
              class: "slider",
              modelValue: widgetSettings.value.iconSize,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => widgetSettings.value.iconSize = $event),
              "label-color": fontColor.value,
              "track-label-visible": "",
              min: 10,
              max: 1e3,
              step: 10,
              label: t("icon:IconWidget.iconSize")
            }, null, 8, ["modelValue", "label-color", "label"]),
            createVNode(_component_va_slider, {
              class: "slider",
              modelValue: widgetSettings.value.strokeWeight,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.strokeWeight = $event),
              "label-color": fontColor.value,
              "track-label-visible": "",
              min: 100,
              max: 700,
              step: 100,
              label: t("icon:IconWidget.strokeWeight")
            }, null, 8, ["modelValue", "label-color", "label"]),
            createVNode(_component_va_slider, {
              class: "slider",
              modelValue: widgetSettings.value.opticSize,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => widgetSettings.value.opticSize = $event),
              "label-color": fontColor.value,
              "track-label-visible": "",
              min: 20,
              max: 48,
              label: t("icon:IconWidget.opticSize")
            }, null, 8, ["modelValue", "label-color", "label"]),
            createVNode(_component_va_slider, {
              class: "slider",
              modelValue: widgetSettings.value.grade,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => widgetSettings.value.grade = $event),
              "label-color": fontColor.value,
              "track-label-visible": "",
              min: -25,
              max: 200,
              step: 15,
              label: t("icon:IconWidget.grade")
            }, null, 8, ["modelValue", "label-color", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const IconWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd264252"]]);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
let IconClickPayload = class extends Payload {
  iconName;
};
__decorateClass$2([
  Documentation("Name of the clicked icon."),
  Attribute()
], IconClickPayload.prototype, "iconName", 2);
IconClickPayload = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconClickPayload" })
], IconClickPayload);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let IconRightClickPayload = class extends Payload {
  iconName = "";
};
__decorateClass$1([
  Documentation("Name of the right-clicked icon."),
  Attribute()
], IconRightClickPayload.prototype, "iconName", 2);
IconRightClickPayload = __decorateClass$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconRightClickPayload" })
], IconRightClickPayload);
const IconWidgetEvents = [
  {
    name: "Icon Clicked",
    type: "click",
    description: "Triggered when the icon is clicked",
    payloadType: IconClickPayload
  },
  {
    name: "Icon Right Clicked",
    type: "right_click",
    description: "Triggered when the icon is right-clicked",
    payloadType: IconRightClickPayload
  }
];
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
const WIDGET_SERVICE = "daanse.widget";
const WIDGET_TYPE = "IconWidget";
let IconWidgetProvider = class {
  constructor(events) {
    this.events = events;
  }
  type = WIDGET_TYPE;
  component = IconWidget;
  settingsComponent = IconWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "Icon";
  register() {
    this.events.registerWidget(WIDGET_TYPE, IconWidgetEvents);
    initTsmRuntime().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.icon",
      { IconWidget, IconWidgetSettings },
      "0.0.1-next.1",
      "ui.vue.widget.icon"
    );
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], IconWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], IconWidgetProvider.prototype, "unregister", 1);
IconWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject("EventRegistry"))
], IconWidgetProvider);
export {
  IconWidget,
  IconWidgetProvider,
  IconWidgetSettings
};
