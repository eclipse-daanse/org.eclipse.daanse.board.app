(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.text-container[data-v-3ef5a087] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  gap: 1rem;\n  align-items: stretch;\n}\n.component[data-v-3ef5a087] {\n  overflow: hidden;\n  padding: 16px;\n}\n\n.settings-container[data-v-fa6a53a1] {\n  padding: 16px;\n}\n.settings-block[data-v-fa6a53a1] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.settings-block[data-v-fa6a53a1]:last-child {\n  margin-bottom: 0;\n}\n.settings-block h3[data-v-fa6a53a1] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--va-primary);\n}\n.hint-text[data-v-fa6a53a1] {\n  margin: 0 0 16px 0;\n  color: var(--va-text-secondary);\n  font-size: 13px;\n}\n.level-header[data-v-fa6a53a1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  font-weight: 600;\n}\n.level-card[data-v-fa6a53a1] {\n  border: 1px solid #ddd;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n  background: #fafafa;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.level-card-header[data-v-fa6a53a1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.empty-state[data-v-fa6a53a1] {\n  padding: 20px;\n  text-align: center;\n  color: var(--va-text-secondary);\n  background: #f5f5f5;\n  border-radius: 4px;\n}\n.color-scale-row[data-v-fa6a53a1] {\n  display: flex;\n  gap: 12px;\n}\n.color-scale-row[data-v-fa6a53a1] > * {\n  flex: 1;\n}\n";})();
import { defineComponent, mergeModels, toRefs, inject as inject$1, useModel, onMounted, computed, ref, watch, createElementBlock, openBlock, withModifiers, createElementVNode, createBlock, createCommentVNode, unref, resolveComponent, Fragment, createVNode, withCtx, createTextVNode, renderList, toDisplayString } from "vue";
const { VariableWrapper, useVariableRepository, useDatasourceRepository } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { PivotTable: PivotTable$1 } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.common.xmla");
const { Reference, Documentation, Attribute, ModelClass } = __tsm__.require("org.eclipse.daanse.board.app.lib.annotations");
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
const { Payload, WidgetAction, WidgetActionInterface } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
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
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$6(target, key, result);
  return result;
};
let PivotTable = class {
  rows = [];
  columns = [];
  cells = [];
  tableState;
  headerBackgroundColor = new VariableWrapper();
  headerTextColor = new VariableWrapper();
  cellBackgroundColor = new VariableWrapper();
  cellTextColor = new VariableWrapper();
  borderColor = new VariableWrapper();
  defaultColumnWidth = new VariableWrapper();
  defaultRowHeight = new VariableWrapper();
  fontSize = new VariableWrapper();
  headerFontWeight = new VariableWrapper();
  cellTextAlign = "left";
  showRowsProperties = false;
  showColumnsProperties = false;
  showSingleMeasureHeader = false;
  rowLevelStyles = [];
  columnLevelStyles = [];
  conditionalFormats = [];
};
__decorateClass$6([
  Reference("JavaObject")
], PivotTable.prototype, "rows", 2);
__decorateClass$6([
  Reference("JavaObject")
], PivotTable.prototype, "columns", 2);
__decorateClass$6([
  Reference("JavaObject")
], PivotTable.prototype, "cells", 2);
__decorateClass$6([
  Documentation(""),
  Attribute()
], PivotTable.prototype, "tableState", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "headerBackgroundColor", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "headerTextColor", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "cellBackgroundColor", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "cellTextColor", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "borderColor", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "defaultColumnWidth", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "defaultRowHeight", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "fontSize", 2);
__decorateClass$6([
  Reference("VariableWrapper")
], PivotTable.prototype, "headerFontWeight", 2);
__decorateClass$6([
  Attribute()
], PivotTable.prototype, "cellTextAlign", 2);
__decorateClass$6([
  Attribute()
], PivotTable.prototype, "showRowsProperties", 2);
__decorateClass$6([
  Attribute()
], PivotTable.prototype, "showColumnsProperties", 2);
__decorateClass$6([
  Attribute()
], PivotTable.prototype, "showSingleMeasureHeader", 2);
__decorateClass$6([
  Reference("LevelStyle")
], PivotTable.prototype, "rowLevelStyles", 2);
__decorateClass$6([
  Reference("LevelStyle")
], PivotTable.prototype, "columnLevelStyles", 2);
__decorateClass$6([
  Reference("ConditionalFormat")
], PivotTable.prototype, "conditionalFormats", 2);
PivotTable = __decorateClass$6([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//PivotTable" })
], PivotTable);
const _hoisted_1$1 = { class: "component" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props) {
    const props = __props;
    const { datasourceId, id: widgetId } = toRefs(props);
    const eventBus = inject$1(identifiers.TINY_EMITTER);
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRowClick = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitRowRightClick = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitColumnClick = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitColumnRightClick = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitCellClick = (payloadObj) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId: payloadObj.rowId, colId: payloadObj.colId }
      });
    };
    const emitCellRightClick = (payloadObj) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId: payloadObj.rowId, colId: payloadObj.colId }
      });
    };
    const emitRowExpanded = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitRowCollapsed = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitColumnExpanded = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const emitColumnCollapsed = (uName) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
      });
    };
    const config = useModel(__props, "configv");
    const { wrapParameters } = useVariableRepository();
    const defaultConfig = new PivotTable();
    onMounted(() => {
      if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
      }
    });
    const wrappedConfig = wrapParameters({
      headerBackgroundColor: computed(() => config.value?.headerBackgroundColor?.value ?? defaultConfig.headerBackgroundColor),
      headerTextColor: computed(() => config.value?.headerTextColor?.value ?? defaultConfig.headerTextColor),
      cellBackgroundColor: computed(() => config.value?.cellBackgroundColor?.value ?? defaultConfig.cellBackgroundColor),
      cellTextColor: computed(() => config.value?.cellTextColor?.value ?? defaultConfig.cellTextColor),
      borderColor: computed(() => config.value?.borderColor?.value ?? defaultConfig.borderColor),
      defaultColumnWidth: computed(() => config.value?.defaultColumnWidth?.value ?? defaultConfig.defaultColumnWidth),
      defaultRowHeight: computed(() => config.value?.defaultRowHeight?.value ?? defaultConfig.defaultRowHeight),
      fontSize: computed(() => config.value?.fontSize?.value ?? defaultConfig.fontSize),
      headerFontWeight: computed(() => config.value?.headerFontWeight?.value ?? defaultConfig.headerFontWeight),
      jsonArrays: computed(() => {
        const payload = {
          rowLevelStyles: config.value?.rowLevelStyles?.map((s) => ({
            ...s,
            backgroundColor: s.backgroundColor?.value ?? s.backgroundColor,
            textColor: s.textColor?.value ?? s.textColor
          })),
          columnLevelStyles: config.value?.columnLevelStyles?.map((s) => ({
            ...s,
            backgroundColor: s.backgroundColor?.value ?? s.backgroundColor,
            textColor: s.textColor?.value ?? s.textColor
          })),
          conditionalFormats: config.value?.conditionalFormats?.map((s) => ({
            ...s,
            id: s.id ?? "",
            priority: s.priority ?? 0,
            backgroundColor: s.backgroundColor?.value ?? s.backgroundColor,
            textColor: s.textColor?.value ?? s.textColor,
            minColor: s.minColor?.value ?? s.minColor,
            maxColor: s.maxColor?.value ?? s.maxColor
          }))
        };
        return JSON.stringify(payload);
      })
    });
    const parsedNestedPivots = computed(() => {
      try {
        const str = wrappedConfig.jsonArrays.value;
        const parsed = JSON.parse(str || "{}");
        return {
          rowLevelStyles: parsed.rowLevelStyles || defaultConfig.rowLevelStyles,
          columnLevelStyles: parsed.columnLevelStyles || defaultConfig.columnLevelStyles,
          conditionalFormats: parsed.conditionalFormats || defaultConfig.conditionalFormats
        };
      } catch (e) {
        return {
          rowLevelStyles: defaultConfig.rowLevelStyles,
          columnLevelStyles: defaultConfig.columnLevelStyles,
          conditionalFormats: defaultConfig.conditionalFormats
        };
      }
    });
    const stylingProps = computed(() => ({
      headerBackgroundColor: wrappedConfig.headerBackgroundColor.value,
      headerTextColor: wrappedConfig.headerTextColor.value,
      cellBackgroundColor: wrappedConfig.cellBackgroundColor.value,
      cellTextColor: wrappedConfig.cellTextColor.value,
      borderColor: wrappedConfig.borderColor.value,
      defaultColumnWidth: wrappedConfig.defaultColumnWidth.value,
      defaultRowHeight: wrappedConfig.defaultRowHeight.value,
      fontSize: wrappedConfig.fontSize.value,
      headerFontWeight: wrappedConfig.headerFontWeight.value,
      cellTextAlign: config.value?.cellTextAlign || defaultConfig.cellTextAlign,
      rowLevelStyles: parsedNestedPivots.value.rowLevelStyles,
      columnLevelStyles: parsedNestedPivots.value.columnLevelStyles,
      conditionalFormats: parsedNestedPivots.value.conditionalFormats
    }));
    const dataProps = computed(() => ({
      showRowsProperties: config.value?.showRowsProperties || defaultConfig.showRowsProperties,
      showColumnsProperties: config.value?.showColumnsProperties || defaultConfig.showColumnsProperties,
      showSingleMeasureHeader: config.value?.showSingleMeasureHeader ?? defaultConfig.showSingleMeasureHeader
    }));
    const data = ref(null);
    const { callEvent, update } = useDatasourceRepository(datasourceId, "PivotTable", data, [], dataProps);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    watch(() => dataProps.value, () => {
      update();
    });
    const onExpand = (e) => {
      callEvent("expand", e, true);
      if (e.area === "rows") {
        emitRowExpanded(e.value?.UName || e.value?.UNAME);
      } else if (e.area === "columns") {
        emitColumnExpanded(e.value?.UName || e.value?.UNAME);
      }
    };
    const onCollapse = (e) => {
      callEvent("collapse", e, true);
      if (e.area === "rows") {
        emitRowCollapsed(e.value?.UName || e.value?.UNAME);
      } else if (e.area === "columns") {
        emitColumnCollapsed(e.value?.UName || e.value?.UNAME);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "text-container",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createElementVNode("div", _hoisted_1$1, [
          data.value ? (openBlock(), createBlock(unref(PivotTable$1), {
            "model-value": data.value,
            onOnExpand: onExpand,
            onOnCollapse: onCollapse,
            onRow_clicked: emitRowClick,
            onRow_right_clicked: emitRowRightClick,
            onColumn_clicked: emitColumnClick,
            onColumn_right_clicked: emitColumnRightClick,
            onCell_clicked: emitCellClick,
            onCell_right_clicked: emitCellRightClick,
            key: JSON.stringify(data.value).length,
            rowsExpandedMembers: data.value.tableState.rowsExpandedMembers,
            columnsExpandedMembers: data.value.tableState.columnsExpandedMembers,
            propertiesRows: data.value.propertiesRows,
            propertiesCols: data.value.propertiesCols,
            headerBackgroundColor: stylingProps.value.headerBackgroundColor,
            headerTextColor: stylingProps.value.headerTextColor,
            cellBackgroundColor: stylingProps.value.cellBackgroundColor,
            cellTextColor: stylingProps.value.cellTextColor,
            borderColor: stylingProps.value.borderColor,
            defaultColumnWidth: stylingProps.value.defaultColumnWidth,
            defaultRowHeight: stylingProps.value.defaultRowHeight,
            fontSize: stylingProps.value.fontSize,
            headerFontWeight: stylingProps.value.headerFontWeight,
            cellTextAlign: stylingProps.value.cellTextAlign,
            rowLevelStyles: stylingProps.value.rowLevelStyles,
            columnLevelStyles: stylingProps.value.columnLevelStyles,
            conditionalFormats: stylingProps.value.conditionalFormats
          }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : createCommentVNode("", true)
        ])
      ], 32);
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
const PivotTableWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ef5a087"]]);
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$5(target, key, result);
  return result;
};
let LevelStyle = class {
  level;
  backgroundColor = new VariableWrapper();
  textColor = new VariableWrapper();
  fontWeight = 600;
};
__decorateClass$5([
  Attribute()
], LevelStyle.prototype, "level", 2);
__decorateClass$5([
  Reference("VariableWrapper")
], LevelStyle.prototype, "backgroundColor", 2);
__decorateClass$5([
  Reference("VariableWrapper")
], LevelStyle.prototype, "textColor", 2);
__decorateClass$5([
  Attribute()
], LevelStyle.prototype, "fontWeight", 2);
LevelStyle = __decorateClass$5([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//LevelStyle" })
], LevelStyle);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
};
let ConditionalFormat = class {
  id;
  conditionType = "greaterThan";
  priority;
  value1 = "0";
  value2 = "100";
  backgroundColor = new VariableWrapper();
  textColor = new VariableWrapper();
  minColor = new VariableWrapper();
  maxColor = new VariableWrapper();
  fontWeight = 400;
};
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "id", 2);
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "conditionType", 2);
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "priority", 2);
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "value1", 2);
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "value2", 2);
__decorateClass$4([
  Reference("VariableWrapper")
], ConditionalFormat.prototype, "backgroundColor", 2);
__decorateClass$4([
  Reference("VariableWrapper")
], ConditionalFormat.prototype, "textColor", 2);
__decorateClass$4([
  Reference("VariableWrapper")
], ConditionalFormat.prototype, "minColor", 2);
__decorateClass$4([
  Reference("VariableWrapper")
], ConditionalFormat.prototype, "maxColor", 2);
__decorateClass$4([
  Attribute()
], ConditionalFormat.prototype, "fontWeight", 2);
ConditionalFormat = __decorateClass$4([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//ConditionalFormat" })
], ConditionalFormat);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "settings-container" };
const _hoisted_3 = { class: "settings-block" };
const _hoisted_4 = { class: "settings-block" };
const _hoisted_5 = { class: "settings-block" };
const _hoisted_6 = { class: "settings-container" };
const _hoisted_7 = { class: "settings-block" };
const _hoisted_8 = { class: "settings-container" };
const _hoisted_9 = { class: "settings-block" };
const _hoisted_10 = { class: "settings-container" };
const _hoisted_11 = { class: "level-header" };
const _hoisted_12 = { class: "level-card-header" };
const _hoisted_13 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_14 = { class: "settings-container" };
const _hoisted_15 = { class: "level-header" };
const _hoisted_16 = { class: "level-card-header" };
const _hoisted_17 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_18 = { class: "settings-container" };
const _hoisted_19 = { class: "level-header" };
const _hoisted_20 = { class: "level-card-header" };
const _hoisted_21 = {
  key: 3,
  class: "color-scale-row"
};
const _hoisted_22 = {
  key: 0,
  class: "empty-state"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PivotTableWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const widgetSettings = useModel(__props, "modelValue");
    const opened = ref({
      colorsSection: true,
      dimensionsSection: false,
      textSection: false,
      rowLevelsSection: false,
      columnLevelsSection: false,
      conditionalFormatSection: false,
      dataSettings: false
    });
    const textAlignOptions = [
      { value: "left", text: "Links" },
      { value: "center", text: "Zentriert" },
      { value: "right", text: "Rechts" }
    ];
    const addRowLevelStyle = () => {
      if (!widgetSettings.value.rowLevelStyles) {
        widgetSettings.value.rowLevelStyles = [];
      }
      const nextLevel = widgetSettings.value.rowLevelStyles.length;
      const newStyle = new LevelStyle();
      newStyle.level = nextLevel;
      widgetSettings.value.rowLevelStyles.push(newStyle);
    };
    const removeRowLevelStyle = (index) => {
      widgetSettings.value.rowLevelStyles?.splice(index, 1);
    };
    const addColumnLevelStyle = () => {
      if (!widgetSettings.value.columnLevelStyles) {
        widgetSettings.value.columnLevelStyles = [];
      }
      const nextLevel = widgetSettings.value.columnLevelStyles.length;
      const newStyle = new LevelStyle();
      newStyle.level = nextLevel;
      widgetSettings.value.columnLevelStyles.push(newStyle);
    };
    const removeColumnLevelStyle = (index) => {
      widgetSettings.value.columnLevelStyles?.splice(index, 1);
    };
    const conditionTypeOptions = [
      { value: "greaterThan", text: "Größer als" },
      { value: "lessThan", text: "Kleiner als" },
      { value: "equals", text: "Gleich" },
      { value: "notEquals", text: "Ungleich" },
      { value: "between", text: "Zwischen" },
      { value: "contains", text: "Enthält (Text)" },
      { value: "colorScale", text: "Farbskala (Min→Max)" },
      { value: "topN", text: "Top N Werte" },
      { value: "bottomN", text: "Bottom N Werte" }
    ];
    const generateId = () => Math.random().toString(36).substring(2, 9);
    const addConditionalFormat = () => {
      if (!widgetSettings.value.conditionalFormats) {
        widgetSettings.value.conditionalFormats = [];
      }
      const priority = widgetSettings.value.conditionalFormats.length;
      const newFormat = new ConditionalFormat();
      newFormat.id = generateId();
      newFormat.priority = priority;
      widgetSettings.value.conditionalFormats.push(newFormat);
    };
    const removeConditionalFormat = (index) => {
      widgetSettings.value.conditionalFormats?.splice(index, 1);
    };
    const needsSecondValue = (type) => {
      return type === "between";
    };
    const needsColorScale = (type) => {
      return type === "colorScale";
    };
    const needsTextValue = (type) => {
      return type === "contains";
    };
    const needsCountValue = (type) => {
      return type === "topN" || type === "bottomN";
    };
    const needsResultColors = (type) => {
      return type !== "colorScale";
    };
    return (_ctx, _cache) => {
      const _component_VaCheckbox = resolveComponent("VaCheckbox");
      const _component_va_collapse = resolveComponent("va-collapse");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_button = resolveComponent("va-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_va_collapse, {
          modelValue: opened.value.dataSettings,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => opened.value.dataSettings = $event),
          header: "Data settings",
          icon: "palette"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              createVNode(_component_VaCheckbox, {
                modelValue: widgetSettings.value.showRowsProperties,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.showRowsProperties = $event),
                label: "Show rows properties",
                style: { "margin": "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              createVNode(_component_VaCheckbox, {
                modelValue: widgetSettings.value.showColumnsProperties,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.showColumnsProperties = $event),
                label: "Show columns properties",
                style: { "margin": "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              createVNode(_component_VaCheckbox, {
                modelValue: widgetSettings.value.showSingleMeasureHeader,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.showSingleMeasureHeader = $event),
                label: "Show single measure header",
                style: { "margin": "0.5rem 0" }
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.colorsSection,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => opened.value.colorsSection = $event),
          header: "Farben",
          icon: "palette"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                _cache[20] || (_cache[20] = createElementVNode("h3", null, "Header", -1)),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.headerBackgroundColor,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.headerBackgroundColor = $event),
                  label: "Header Hintergrund"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      label: "Header Hintergrund",
                      "model-value": value,
                      onInput: change
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.headerTextColor,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => widgetSettings.value.headerTextColor = $event),
                  label: "Header Textfarbe"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      label: "Header Textfarbe",
                      "model-value": value,
                      onInput: change
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createElementVNode("div", _hoisted_4, [
                _cache[21] || (_cache[21] = createElementVNode("h3", null, "Zellen", -1)),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.cellBackgroundColor,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => widgetSettings.value.cellBackgroundColor = $event),
                  label: "Zellen Hintergrund"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      label: "Zellen Hintergrund",
                      "model-value": value,
                      onInput: change
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.cellTextColor,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => widgetSettings.value.cellTextColor = $event),
                  label: "Zellen Textfarbe"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      label: "Zellen Textfarbe",
                      "model-value": value,
                      onInput: change
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createElementVNode("div", _hoisted_5, [
                _cache[22] || (_cache[22] = createElementVNode("h3", null, "Rahmen", -1)),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.borderColor,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => widgetSettings.value.borderColor = $event),
                  label: "Rahmenfarbe"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      label: "Rahmenfarbe",
                      "model-value": value,
                      onInput: change
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.dimensionsSection,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => opened.value.dimensionsSection = $event),
          header: "Dimensionen",
          icon: "straighten"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_6, [
              createElementVNode("div", _hoisted_7, [
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.defaultColumnWidth,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => widgetSettings.value.defaultColumnWidth = $event),
                  label: "Standard Spaltenbreite (px)"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_input, {
                      label: "Standard Spaltenbreite (px)",
                      "model-value": value,
                      "onUpdate:modelValue": change,
                      type: "number",
                      min: 50,
                      max: 500
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.defaultRowHeight,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => widgetSettings.value.defaultRowHeight = $event),
                  label: "Standard Zeilenhöhe (px)"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_input, {
                      label: "Standard Zeilenhöhe (px)",
                      "model-value": value,
                      "onUpdate:modelValue": change,
                      type: "number",
                      min: 20,
                      max: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.textSection,
          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => opened.value.textSection = $event),
          header: "Text",
          icon: "text_fields"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_8, [
              createElementVNode("div", _hoisted_9, [
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.fontSize,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => widgetSettings.value.fontSize = $event),
                  label: "Schriftgröße (px)"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_input, {
                      label: "Schriftgröße (px)",
                      "model-value": value,
                      "onUpdate:modelValue": change,
                      type: "number",
                      min: 8,
                      max: 32
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.headerFontWeight,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => widgetSettings.value.headerFontWeight = $event),
                  label: "Header Font-Weight"
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_input, {
                      label: "Header Font-Weight",
                      "model-value": value,
                      "onUpdate:modelValue": change,
                      type: "number",
                      min: 100,
                      max: 900,
                      step: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_va_select, {
                  label: "Text-Ausrichtung (Zellen)",
                  modelValue: widgetSettings.value.cellTextAlign,
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => widgetSettings.value.cellTextAlign = $event),
                  options: textAlignOptions,
                  "value-by": "value"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.rowLevelsSection,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => opened.value.rowLevelsSection = $event),
          header: "Zeilen-Level Styles",
          icon: "table_rows"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_10, [
              _cache[26] || (_cache[26] = createElementVNode("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern. ", -1)),
              createElementVNode("div", _hoisted_11, [
                _cache[24] || (_cache[24] = createElementVNode("span", null, "Level-Konfiguration", -1)),
                createVNode(_component_va_button, {
                  size: "small",
                  onClick: addRowLevelStyle
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(widgetSettings.value.rowLevelStyles, (levelStyle, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `row_level_${index}`,
                  class: "level-card"
                }, [
                  createElementVNode("div", _hoisted_12, [
                    createElementVNode("strong", null, "Level " + toDisplayString(levelStyle.level), 1),
                    createVNode(_component_va_button, {
                      size: "small",
                      color: "danger",
                      onClick: ($event) => removeRowLevelStyle(index)
                    }, {
                      default: withCtx(() => [..._cache[25] || (_cache[25] = [
                        createTextVNode("Entfernen", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode(_component_va_input, {
                    label: "Level-Nummer",
                    modelValue: levelStyle.level,
                    "onUpdate:modelValue": ($event) => levelStyle.level = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: 0
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(VariableInput), {
                    modelValue: levelStyle.backgroundColor,
                    "onUpdate:modelValue": ($event) => levelStyle.backgroundColor = $event,
                    label: "Hintergrundfarbe"
                  }, {
                    default: withCtx(({ value, change }) => [
                      createVNode(_component_va_color_input, {
                        label: "Hintergrundfarbe",
                        "model-value": value,
                        onInput: change
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(VariableInput), {
                    modelValue: levelStyle.textColor,
                    "onUpdate:modelValue": ($event) => levelStyle.textColor = $event,
                    label: "Textfarbe"
                  }, {
                    default: withCtx(({ value, change }) => [
                      createVNode(_component_va_color_input, {
                        label: "Textfarbe",
                        "model-value": value,
                        onInput: change
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_va_input, {
                    label: "Font-Weight",
                    modelValue: levelStyle.fontWeight,
                    "onUpdate:modelValue": ($event) => levelStyle.fontWeight = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: 100,
                    max: 900,
                    step: 100
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]);
              }), 128)),
              !widgetSettings.value.rowLevelStyles?.length ? (openBlock(), createElementBlock("div", _hoisted_13, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. ')) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.columnLevelsSection,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => opened.value.columnLevelsSection = $event),
          header: "Spalten-Level Styles",
          icon: "view_column"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_14, [
              _cache[30] || (_cache[30] = createElementVNode("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern. ", -1)),
              createElementVNode("div", _hoisted_15, [
                _cache[28] || (_cache[28] = createElementVNode("span", null, "Level-Konfiguration", -1)),
                createVNode(_component_va_button, {
                  size: "small",
                  onClick: addColumnLevelStyle
                }, {
                  default: withCtx(() => [..._cache[27] || (_cache[27] = [
                    createTextVNode("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(widgetSettings.value.columnLevelStyles, (levelStyle, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `col_level_${index}`,
                  class: "level-card"
                }, [
                  createElementVNode("div", _hoisted_16, [
                    createElementVNode("strong", null, "Level " + toDisplayString(levelStyle.level), 1),
                    createVNode(_component_va_button, {
                      size: "small",
                      color: "danger",
                      onClick: ($event) => removeColumnLevelStyle(index)
                    }, {
                      default: withCtx(() => [..._cache[29] || (_cache[29] = [
                        createTextVNode("Entfernen", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode(_component_va_input, {
                    label: "Level-Nummer",
                    modelValue: levelStyle.level,
                    "onUpdate:modelValue": ($event) => levelStyle.level = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: 0
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(VariableInput), {
                    modelValue: levelStyle.backgroundColor,
                    "onUpdate:modelValue": ($event) => levelStyle.backgroundColor = $event,
                    label: "Hintergrundfarbe"
                  }, {
                    default: withCtx(({ value, change }) => [
                      createVNode(_component_va_color_input, {
                        label: "Hintergrundfarbe",
                        "model-value": value,
                        onInput: change
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(VariableInput), {
                    modelValue: levelStyle.textColor,
                    "onUpdate:modelValue": ($event) => levelStyle.textColor = $event,
                    label: "Textfarbe"
                  }, {
                    default: withCtx(({ value, change }) => [
                      createVNode(_component_va_color_input, {
                        label: "Textfarbe",
                        "model-value": value,
                        onInput: change
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_va_input, {
                    label: "Font-Weight",
                    modelValue: levelStyle.fontWeight,
                    "onUpdate:modelValue": ($event) => levelStyle.fontWeight = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: 100,
                    max: 900,
                    step: 100
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]);
              }), 128)),
              !widgetSettings.value.columnLevelStyles?.length ? (openBlock(), createElementBlock("div", _hoisted_17, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. ')) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.conditionalFormatSection,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => opened.value.conditionalFormatSection = $event),
          header: "Bedingte Formatierung",
          icon: "format_color_fill"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_18, [
              _cache[34] || (_cache[34] = createElementVNode("p", { class: "hint-text" }, " Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten. ", -1)),
              createElementVNode("div", _hoisted_19, [
                _cache[32] || (_cache[32] = createElementVNode("span", null, "Formatierungsregeln", -1)),
                createVNode(_component_va_button, {
                  size: "small",
                  onClick: addConditionalFormat
                }, {
                  default: withCtx(() => [..._cache[31] || (_cache[31] = [
                    createTextVNode("Regel hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(widgetSettings.value.conditionalFormats, (rule, index) => {
                return openBlock(), createElementBlock("div", {
                  key: rule.id,
                  class: "level-card"
                }, [
                  createElementVNode("div", _hoisted_20, [
                    createElementVNode("strong", null, "Regel " + toDisplayString(index + 1), 1),
                    createVNode(_component_va_button, {
                      size: "small",
                      color: "danger",
                      onClick: ($event) => removeConditionalFormat(index)
                    }, {
                      default: withCtx(() => [..._cache[33] || (_cache[33] = [
                        createTextVNode("Entfernen", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode(_component_va_select, {
                    label: "Bedingungstyp",
                    modelValue: rule.conditionType,
                    "onUpdate:modelValue": ($event) => rule.conditionType = $event,
                    options: conditionTypeOptions,
                    "value-by": "value"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  !needsTextValue(rule.conditionType) && !needsColorScale(rule.conditionType) ? (openBlock(), createBlock(_component_va_input, {
                    key: 0,
                    label: needsCountValue(rule.conditionType) ? "Anzahl (N)" : "Wert",
                    modelValue: rule.value1,
                    "onUpdate:modelValue": ($event) => rule.value1 = $event,
                    modelModifiers: { number: true },
                    type: "number"
                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  needsSecondValue(rule.conditionType) ? (openBlock(), createBlock(_component_va_input, {
                    key: 1,
                    label: "Bis Wert",
                    modelValue: rule.value2,
                    "onUpdate:modelValue": ($event) => rule.value2 = $event,
                    modelModifiers: { number: true },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  needsTextValue(rule.conditionType) ? (openBlock(), createBlock(_component_va_input, {
                    key: 2,
                    label: "Text",
                    modelValue: rule.value1,
                    "onUpdate:modelValue": ($event) => rule.value1 = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  needsColorScale(rule.conditionType) ? (openBlock(), createElementBlock("div", _hoisted_21, [
                    createVNode(_component_va_color_input, {
                      label: "Min-Farbe",
                      modelValue: rule.minColor,
                      "onUpdate:modelValue": ($event) => rule.minColor = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_va_color_input, {
                      label: "Max-Farbe",
                      modelValue: rule.maxColor,
                      "onUpdate:modelValue": ($event) => rule.maxColor = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true),
                  needsResultColors(rule.conditionType) ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                    createVNode(_component_va_color_input, {
                      label: "Hintergrundfarbe",
                      modelValue: rule.backgroundColor,
                      "onUpdate:modelValue": ($event) => rule.backgroundColor = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_va_color_input, {
                      label: "Textfarbe",
                      modelValue: rule.textColor,
                      "onUpdate:modelValue": ($event) => rule.textColor = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_va_input, {
                      label: "Font-Weight",
                      modelValue: rule.fontWeight,
                      "onUpdate:modelValue": ($event) => rule.fontWeight = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: 100,
                      max: 900,
                      step: 100
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ], 64)) : createCommentVNode("", true),
                  createVNode(_component_va_input, {
                    label: "Priorität (niedriger = höher)",
                    modelValue: rule.priority,
                    "onUpdate:modelValue": ($event) => rule.priority = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: 0
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]);
              }), 128)),
              !widgetSettings.value.conditionalFormats?.length ? (openBlock(), createElementBlock("div", _hoisted_22, ' Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen. ')) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const PivotTableWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa6a53a1"]]);
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
let HeaderExpandedPayload = class extends Payload {
  uniqueName;
};
__decorateClass$3([
  Documentation("Header Unique Name."),
  Attribute()
], HeaderExpandedPayload.prototype, "uniqueName", 2);
HeaderExpandedPayload = __decorateClass$3([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//HeaderExpandedPayload" })
], HeaderExpandedPayload);
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
let HeaderClickedPayload = class extends Payload {
  uniqueName;
};
__decorateClass$2([
  Documentation("Header Unique Name."),
  Attribute()
], HeaderClickedPayload.prototype, "uniqueName", 2);
HeaderClickedPayload = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//HeaderClickedPayload" })
], HeaderClickedPayload);
const PivotTableEvents = [
  {
    name: "Row Expanded",
    type: "row_expanded",
    description: "Triggered when a row is expanded in the pivot table",
    payloadType: HeaderExpandedPayload
  },
  {
    name: "Row Collapsed",
    type: "row_collapsed",
    description: "Triggered when a row is collapsed in the pivot table",
    payloadType: HeaderExpandedPayload
  },
  {
    name: "Column Expanded",
    type: "column_expanded",
    description: "Triggered when a column is expanded in the pivot table",
    payloadType: HeaderExpandedPayload
  },
  {
    name: "Column Collapsed",
    type: "column_collapsed",
    description: "Triggered when a column is collapsed in the pivot table",
    payloadType: HeaderExpandedPayload
  },
  {
    name: "Row Clicked",
    type: "row_clicked",
    description: "Triggered when a row is clicked in the pivot table",
    payloadType: HeaderClickedPayload
  },
  {
    name: "Column Clicked",
    type: "column_clicked",
    description: "Triggered when a column is clicked in the pivot table",
    payloadType: HeaderClickedPayload
  },
  {
    name: "Row Right Clicked",
    type: "row_right_clicked",
    description: "Triggered when a row is right-clicked in the pivot table",
    payloadType: HeaderClickedPayload
  },
  {
    name: "Column Right Clicked",
    type: "column_right_clicked",
    description: "Triggered when a column is right-clicked in the pivot table",
    payloadType: HeaderClickedPayload
  },
  {
    name: "Cell Clicked",
    type: "cell_clicked",
    description: "Triggered when a cell is clicked in the pivot table",
    payloadType: Payload
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: Payload
  }
];
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
let PivotTableInterface = class extends WidgetActionInterface {
  expandRow(rowUniqueName) {
    throw new Error("expandRow not implemented");
  }
};
__decorateClass$1([
  WidgetAction({ eventType: "pivotTable.expandRow" })
], PivotTableInterface.prototype, "expandRow", 1);
PivotTableInterface = __decorateClass$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//PivotTableInterface" })
], PivotTableInterface);
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
const WIDGET_TYPE = "PivotTableWidget";
let PivotTableWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = PivotTableWidget;
  settingsComponent = PivotTableWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "PivotTable";
  register() {
    this.events.registerWidget(WIDGET_TYPE, PivotTableEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, PivotTableInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], PivotTableWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], PivotTableWidgetProvider.prototype, "unregister", 1);
PivotTableWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject("EventRegistry")),
  __decorateParam(1, inject("EventActionsRegistry"))
], PivotTableWidgetProvider);
export {
  PivotTableWidget,
  PivotTableWidgetProvider,
  PivotTableWidgetSettings
};
