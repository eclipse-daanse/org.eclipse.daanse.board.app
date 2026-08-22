(function(){var i="ui.vue.widget.table.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.folder-row[data-v-876827aa] {\n  background-color: #f8f9fa;\n  font-weight: 500;\n}\n.expandable[data-v-876827aa] {\n  cursor: pointer;\n}\n.expandable[data-v-876827aa]:hover {\n  background-color: #f8f9fa;\n}\n.expanded[data-v-876827aa] {\n  background-color: #e3f2fd;\n}\n.expand-icon[data-v-876827aa] {\n  width: 16px;\n  margin-right: 8px;\n  font-size: 12px;\n}\n.folder-cell[data-v-876827aa] {\n  color: #6c757d;\n  text-align: right;\n  font-style: italic;\n}\n.child-count[data-v-876827aa] {\n  margin-left: 8px;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.selection-cell[data-v-876827aa] {\n  width: 40px;\n  text-align: center;\n  padding: 8px 4px;\n}\n.selected[data-v-876827aa] {\n  background-color: #e3f2fd;\n}\n\n.va-table[data-v-19bad148] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #ddd;\n}\n.kpi-table th[data-v-19bad148] {\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: left;\n  border-bottom: 2px solid #ddd;\n  font-weight: 600;\n}\n.kpi-table td[data-v-19bad148] {\n  padding: 8px 12px;\n  border-bottom: 1px solid #eee;\n}\n.kpi-table tr[data-v-19bad148]:hover {\n  background-color: #f9f9f9;\n}\n.selection-header[data-v-19bad148] {\n  width: 40px;\n  text-align: center;\n}\n\n.filters[data-v-c3bbb8e6] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 1rem;\n    padding: 1rem;\n    flex-grow: 0;\n}\n.table_container[data-v-c3bbb8e6] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.table_container .pagination[data-v-c3bbb8e6] {\n    flex-grow: 0;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n}\n.table_container .pagination .page_input[data-v-c3bbb8e6] {\n    justify-self: start;\n}\n.table_container .table[data-v-c3bbb8e6] {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.loading[data-v-c3bbb8e6] {\n    display: flex;\n    height: 100%;\n}\n\n.settings-container[data-v-21aafe5f] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n";})();
import { defineComponent, ref, computed, createElementBlock, openBlock, createElementVNode, createCommentVNode, Fragment, renderList, createBlock, resolveComponent, normalizeClass, withModifiers, normalizeStyle, toDisplayString, createVNode, inject as inject$1, unref, toRefs, onUnmounted, watch, onMounted, provide, useModel, markRaw, withCtx } from "vue";
const { useVariableRepository, useDatasourceRepository, VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
import { useRoute } from "vue-router";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
const { VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
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
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "KpiValueCell",
  props: {
    value: {}
  },
  setup(__props) {
    const props = __props;
    const formattedValue = computed(() => {
      if (props.value == null) return "-";
      return typeof props.value === "number" ? props.value.toLocaleString() : props.value.toString();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", null, [
        createElementVNode("span", null, toDisplayString(formattedValue.value), 1)
      ]);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "KpiGoalCell",
  props: {
    goal: {}
  },
  setup(__props) {
    const props = __props;
    const formattedGoal = computed(() => {
      if (props.goal == null) return "-";
      return typeof props.goal === "number" ? props.goal.toLocaleString() : props.goal.toString();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", null, [
        createElementVNode("span", null, toDisplayString(formattedGoal.value), 1)
      ]);
    };
  }
});
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "KpiStatusCell",
  props: {
    status: {}
  },
  setup(__props) {
    const props = __props;
    const statusValue = computed(() => {
      if (props.status == null) return null;
      return typeof props.status === "string" ? parseInt(props.status) : props.status;
    });
    const statusVisualType = inject$1("statusVisualType", "badge");
    return (_ctx, _cache) => {
      const _component_VaBadge = resolveComponent("VaBadge");
      return openBlock(), createElementBlock("td", null, [
        unref(statusVisualType) === "Lights" ? (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(statusValue.value > 0.5 ? "🟢" : "🛑"), 1)) : unref(statusVisualType) === "Emoji" ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(statusValue.value > 0.5 ? "😊" : "☹️"), 1)) : (openBlock(), createBlock(_component_VaBadge, {
          key: 2,
          color: statusValue.value > 0.5 ? "success" : "danger",
          text: statusValue.value
        }, null, 8, ["color", "text"]))
      ]);
    };
  }
});
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "KpiTrendCell",
  props: {
    trend: {}
  },
  setup(__props) {
    const props = __props;
    const trendValue = computed(() => {
      if (props.trend == null) return null;
      return typeof props.trend === "string" ? parseInt(props.trend) : props.trend;
    });
    const trendVisualType = inject$1("trendVisualType", "badge");
    return (_ctx, _cache) => {
      const _component_VaBadge = resolveComponent("VaBadge");
      return openBlock(), createElementBlock("td", null, [
        unref(trendVisualType) === "Chart" ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(trendValue.value > 0.5 ? "📈" : "📉"), 1)) : unref(trendVisualType) === "Emoji" ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(trendValue.value > 0.5 ? "😊" : "☹️"), 1)) : unref(trendVisualType) === "Arrow" ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(trendValue.value > 0.5 ? "⬆️" : "⬇️"), 1)) : (openBlock(), createBlock(_component_VaBadge, {
          key: 3,
          color: trendValue.value > 0.5 ? "success" : "danger",
          text: trendValue.value
        }, null, 8, ["color", "text"]))
      ]);
    };
  }
});
const _hoisted_1$1 = ["checked"];
const _hoisted_2$1 = {
  key: 0,
  class: "expand-icon"
};
const _hoisted_3$1 = {
  key: 1,
  class: "child-count"
};
const _hoisted_4 = ["colspan"];
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  __name: "KpiTableRow",
  props: {
    item: {},
    level: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isExpanded = ref(false);
    const isFolder = computed(() => props.item.type === "Folder");
    const hasChildren = computed(() => {
      var _a;
      return ((_a = props.item.children) == null ? void 0 : _a.length) > 0;
    });
    const children = computed(() => props.item.children || []);
    const displayName = computed(
      () => isFolder.value ? props.item.name : props.item.caption || props.item.name || "Unknown KPI"
    );
    const toggleExpand = () => {
      if (props.item.children && props.item.children.length > 0)
        isExpanded.value = !isExpanded.value;
    };
    const isSelected = computed(() => {
      const selected = props.selectedItems || [];
      return !isFolder.value && selected.includes(props.item.name);
    });
    const handleSelectionChange = () => {
      if (!isFolder.value) {
        emit("toggle-select", props.item.name);
      }
    };
    return (_ctx, _cache) => {
      const _component_KpiTableRow = resolveComponent("KpiTableRow", true);
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("tr", {
          class: normalizeClass({
            "folder-row": isFolder.value,
            "kpi-row": !isFolder.value,
            "expandable": hasChildren.value,
            "expanded": isExpanded.value,
            "selected": isSelected.value
          }),
          onClick: toggleExpand
        }, [
          __props.showSelection ? (openBlock(), createElementBlock("td", {
            key: 0,
            class: "selection-cell",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, [
            !isFolder.value ? (openBlock(), createElementBlock("input", {
              key: 0,
              type: "checkbox",
              checked: isSelected.value,
              onChange: handleSelectionChange
            }, null, 40, _hoisted_1$1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createElementVNode("td", {
            style: normalizeStyle({ paddingLeft: `${__props.level * 20 + 12}px` })
          }, [
            hasChildren.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(isExpanded.value ? "▼" : "▶"), 1)) : createCommentVNode("", true),
            createElementVNode("span", null, toDisplayString(displayName.value), 1),
            hasChildren.value && !isFolder.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, "(" + toDisplayString(children.value.length) + ")", 1)) : createCommentVNode("", true)
          ], 4),
          isFolder.value ? (openBlock(), createElementBlock("td", {
            key: 1,
            colspan: __props.showSelection ? 4 : 4,
            class: "folder-cell"
          }, toDisplayString(children.value.length) + " items", 9, _hoisted_4)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createVNode(_sfc_main$5, {
              value: props.item.value
            }, null, 8, ["value"]),
            createVNode(_sfc_main$4, {
              goal: props.item.goal
            }, null, 8, ["goal"]),
            createVNode(_sfc_main$3, {
              status: props.item.status
            }, null, 8, ["status"]),
            createVNode(_sfc_main$2, {
              trend: props.item.trend
            }, null, 8, ["trend"])
          ], 64))
        ], 2),
        hasChildren.value && isExpanded.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(children.value, (child, index) => {
          return openBlock(), createBlock(_component_KpiTableRow, {
            key: index,
            item: child,
            level: __props.level + 1,
            "selected-items": __props.selectedItems,
            "show-selection": __props.showSelection,
            onToggleSelect: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("toggle-select", $event))
          }, null, 8, ["item", "level", "selected-items", "show-selection"]);
        }), 128)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const KpiTableRow = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["__scopeId", "data-v-876827aa"]]);
const _hoisted_1$4 = { class: "va-table" };
const _hoisted_2 = {
  key: 0,
  class: "selection-header"
};
const _hoisted_3 = ["checked", "indeterminate"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "KpiTable",
  props: {
    tableData: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["update:selectedItems"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const expandedItems = ref(/* @__PURE__ */ new Set());
    const getAllKpiNames = (items) => {
      console.log("Extracting KPI names from items:", items);
      const kpiNames = [];
      const traverse = (nodes) => {
        nodes.forEach((node) => {
          var _a;
          if (node.type === "KPI") {
            kpiNames.push(node.name);
          }
          if (((_a = node.children) == null ? void 0 : _a.length) > 0) {
            traverse(node.children);
          }
        });
      };
      if (items && items.length > 0) {
        traverse(items);
      }
      return kpiNames;
    };
    const allKpiNames = computed(() => getAllKpiNames(props.tableData));
    const isAllSelected = computed(() => {
      const selected = props.selectedItems || [];
      return allKpiNames.value.length > 0 && allKpiNames.value.every((name) => selected.includes(name));
    });
    const isIndeterminate = computed(() => {
      console.log("All KPI Names:", allKpiNames.value);
      const selected = props.selectedItems || [];
      const selectedCount = allKpiNames.value.filter((name) => selected.includes(name)).length;
      return selectedCount > 0 && selectedCount < allKpiNames.value.length;
    });
    const handleToggleExpand = (itemKey) => {
      if (expandedItems.value.has(itemKey)) {
        expandedItems.value.delete(itemKey);
      } else {
        expandedItems.value.add(itemKey);
      }
    };
    const handleToggleSelect = (kpiName) => {
      const currentSelection = props.selectedItems || [];
      const newSelection = [...currentSelection];
      const index = newSelection.indexOf(kpiName);
      if (index === -1) {
        newSelection.push(kpiName);
      } else {
        newSelection.splice(index, 1);
      }
      emit("update:selectedItems", newSelection);
    };
    const toggleSelectAll = () => {
      if (isAllSelected.value) {
        emit("update:selectedItems", []);
      } else {
        emit("update:selectedItems", [...allKpiNames.value]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$4, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            __props.showSelection ? (openBlock(), createElementBlock("th", _hoisted_2, [
              createElementVNode("input", {
                type: "checkbox",
                checked: isAllSelected.value,
                indeterminate: isIndeterminate.value,
                onChange: toggleSelectAll
              }, null, 40, _hoisted_3)
            ])) : createCommentVNode("", true),
            _cache[0] || (_cache[0] = createElementVNode("th", null, "Name", -1)),
            _cache[1] || (_cache[1] = createElementVNode("th", null, "Value", -1)),
            _cache[2] || (_cache[2] = createElementVNode("th", null, "Goal", -1)),
            _cache[3] || (_cache[3] = createElementVNode("th", null, "Status", -1)),
            _cache[4] || (_cache[4] = createElementVNode("th", null, "Trend", -1))
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tableData, (item, index) => {
            return openBlock(), createBlock(KpiTableRow, {
              key: index,
              item,
              level: 0,
              "selected-items": __props.selectedItems,
              "show-selection": __props.showSelection,
              onToggleExpand: handleToggleExpand,
              onToggleSelect: handleToggleSelect
            }, null, 8, ["item", "selected-items", "show-selection"]);
          }), 128))
        ])
      ]);
    };
  }
});
const KpiTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-19bad148"]]);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$1(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
class KpiTableWidgetInterface extends WidgetActionInterface {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "kpiTable.refresh" })
], KpiTableWidgetInterface.prototype, "refresh");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KpiTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(__props, { expose: __expose }) {
    const { wrapParameters } = useVariableRepository();
    const props = __props;
    const { datasourceId, config, id: widgetId } = toRefs(props);
    const eventBus = inject$1(identifiers.TINY_EMITTER);
    const actionsRegistry = inject$1(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class KpiTableWidgetApi extends KpiTableWidgetInterface {
      refresh() {
        update(datasourceId.value, datasourceId.value);
      }
    }
    const api = new KpiTableWidgetApi();
    __expose(api);
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:KpiTableWidget:click", {
        type: "widget:KpiTableWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:KpiTableWidget:right_click", {
        type: "widget:KpiTableWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const data = ref(null);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "KpiTableWidget", pageId);
      if (!config.value) return;
      const upgradeFields = {
        headerBackground: "#f0f0f0"
      };
      for (const [key, defaultVal] of Object.entries(upgradeFields)) {
        const current = config.value[key];
        let valToUse = current;
        if (Array.isArray(current)) {
          valToUse = current[0] || defaultVal;
        }
        if (valToUse === void 0 || valToUse === null) {
          config.value[key] = new VariableWrapper(defaultVal);
        } else if (valToUse instanceof VariableWrapper) ;
        else if (typeof valToUse === "object" && "value" in valToUse) {
          const v = new VariableWrapper(valToUse.value);
          if ("variable" in valToUse) v.variable = valToUse.variable;
          config.value[key] = v;
        } else {
          config.value[key] = new VariableWrapper(valToUse);
        }
      }
    });
    const {
      showParentChild,
      showFolders
    } = wrapParameters({
      showParentChild: computed(() => config.value.showParentChild ?? false),
      showFolders: computed(() => config.value.showFolders ?? false)
    });
    const statusVisualType = computed(() => {
      const val = config.value.statusVisualType;
      return Array.isArray(val) ? val[0] || "Badge" : val || "Badge";
    });
    const trendVisualType = computed(() => {
      const val = config.value.trendVisualType;
      return Array.isArray(val) ? val[0] || "Badge" : val || "Badge";
    });
    provide("statusVisualType", statusVisualType);
    provide("trendVisualType", trendVisualType);
    const { update } = useDatasourceRepository(datasourceId, "DataTable", data);
    const parsedTableData = computed(() => {
      if (!data.value) return null;
      let result = data.value;
      if (!(config.value.showFolders ?? false)) {
        result = flattenFolders(result);
      }
      if (!(config.value.showParentChild ?? false)) {
        result = flattenParentChild(result);
      }
      return result;
    });
    function flattenFolders(items) {
      const flattened = [];
      function extractItems(items2) {
        items2.forEach((item) => {
          if (item.type === "Folder") {
            extractItems(item.children || []);
          } else {
            flattened.push(item);
          }
        });
      }
      extractItems(items);
      return flattened;
    }
    function flattenParentChild(items) {
      const flattened = [];
      function extractItems(items2) {
        items2.forEach((item) => {
          if (item.type === "Folder") {
            flattened.push({
              ...item,
              children: item.children ? extractItemsFromChildren(item.children) : []
            });
          } else {
            flattened.push({
              ...item,
              children: []
              // Remove children to flatten hierarchy
            });
            if (item.children && item.children.length > 0) {
              flattened.push(...extractItemsFromChildren(item.children));
            }
          }
        });
      }
      function extractItemsFromChildren(children) {
        const result = [];
        children.forEach((child) => {
          result.push({
            ...child,
            children: []
            // Remove children to flatten hierarchy
          });
          if (child.children && child.children.length > 0) {
            result.push(...extractItemsFromChildren(child.children));
          }
        });
        return result;
      }
      extractItems(items);
      return flattened;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "w-full h-full",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createVNode(unref(KpiTable), { tableData: parsedTableData.value }, null, 8, ["tableData"])
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
const KpiTableWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3bbb8e6"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KpiTableWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject$1("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const widgetSettings = useModel(__props, "modelValue");
    const trendVisualTypes = ["Emoji", "Arrow", "Chart", "Badge"];
    const statusVisualTypes = ["Emoji", "Lights", "Badge"];
    const opened = ref(false);
    watch(() => widgetSettings.value, (newVal) => {
      if (newVal) {
        if (!(newVal.headerBackground instanceof VariableWrapper)) {
          newVal.headerBackground = markRaw(new VariableWrapper(newVal.headerBackground || "#f0f0f0"));
        }
      }
    }, { immediate: true, deep: true });
    return (_ctx, _cache) => {
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_checkbox = resolveComponent("va-checkbox");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => opened.value = $event),
        header: "Kpi Table Settings",
        icon: "settings"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.headerBackground,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.headerBackground = $event),
              label: "Header Color"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  class: "text-color",
                  label: "Header Color",
                  "model-value": value,
                  onInput: change
                }, null, 8, ["model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.trendVisualType,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.trendVisualType = $event),
              options: trendVisualTypes,
              placeholder: "Trend Visual Type"
            }, null, 8, ["modelValue"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.statusVisualType,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.statusVisualType = $event),
              options: statusVisualTypes,
              placeholder: "Status Visual Type"
            }, null, 8, ["modelValue"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.showFolders,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => widgetSettings.value.showFolders = $event),
              label: t("Show Folders")
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.showParentChild,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.showParentChild = $event),
              label: t("Show Parent-Child")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const KpiTableWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21aafe5f"]]);
const KpiTableWidgetEvents = [
  { name: "KpiTable Clicked", type: "click", description: "Triggered when the kpi table widget is clicked", payloadType: Payload },
  { name: "KpiTable Right Clicked", type: "right_click", description: "Triggered when the kpi table widget is right-clicked", payloadType: Payload }
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
const WIDGET_TYPE = "KpiTableWidget";
let KpiTableWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = KpiTableWidget;
  settingsComponent = KpiTableWidgetSettings;
  supportedDSTypes = ["csv", "rest"];
  icon = Icon;
  name = "KpiTable";
  register() {
    this.events.registerWidget(WIDGET_TYPE, KpiTableWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, KpiTableWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], KpiTableWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], KpiTableWidgetProvider.prototype, "unregister", 1);
KpiTableWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject("EventRegistry")),
  __decorateParam(1, inject("EventActionsRegistry"))
], KpiTableWidgetProvider);
export {
  KpiTableWidget,
  KpiTableWidgetProvider,
  KpiTableWidgetSettings
};
