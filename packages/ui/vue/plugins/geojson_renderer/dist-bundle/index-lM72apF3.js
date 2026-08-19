const { MapMarker, ConditionSettings, PointStyler, AreaStyler, useDataPointRegistry } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.widget.map");
const { defineComponent, ref, inject, onMounted, markRaw, nextTick, provide, onBeforeUnmount, h: h$1, watch, onUnmounted, reactive, computed, render, toRefs, createElementBlock, createCommentVNode, openBlock, Fragment, renderList, createBlock, unref, withCtx, createVNode, useModel, resolveComponent, createElementVNode, createTextVNode, toDisplayString } = __tsm__.require("vue");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
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
      function Type(x2) {
        if (x2 === null)
          return 1;
        switch (typeof x2) {
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
            return x2 === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x2) {
        return x2 === void 0;
      }
      function IsNull(x2) {
        return x2 === null;
      }
      function IsSymbol(x2) {
        return typeof x2 === "symbol";
      }
      function IsObject(x2) {
        return typeof x2 === "object" ? x2 !== null : typeof x2 === "function";
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
      function SameValueZero(x2, y) {
        return x2 === y || x2 !== x2 && y !== y;
      }
      function GetMethod(V2, P) {
        var func = V2[P];
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
        var f2 = iterator["return"];
        if (f2)
          f2.call(iterator);
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
          var k2 = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k2;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k2] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k2++;
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
const COMPONENT_KEY = Symbol.for("tsm:component");
const ACTIVATE_KEY = Symbol.for("tsm:component:activate");
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
const ce = (e, o) => {
  for (const t of Object.keys(o))
    e.on(t, o[t]);
}, ye = (e) => {
  for (const o of Object.keys(e)) {
    const t = e[o];
    t && k(t.cancel) && t.cancel();
  }
}, Je = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), k = (e) => typeof e == "function", L = (e, o, t) => {
  for (const n in t) {
    const s = "set" + Je(n);
    e[s] ? watch(
      () => t[n],
      (r, l) => {
        e[s](r, l);
      }
    ) : o[s] && watch(
      () => t[n],
      (r) => {
        o[s](r);
      }
    );
  }
}, f = (e, o, t = {}) => {
  const n = { ...t };
  for (const s in e) {
    const r = o[s], l = e[s];
    r && (r && r.custom === true || l !== void 0 && (n[s] = l));
  }
  return n;
}, T = (e) => {
  const o = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      o[s] = e[n];
    } else
      t[n] = e[n];
  return { listeners: o, attrs: t };
}, qe = async (e) => {
  const o = await Promise.all([
    import("./marker-icon-2x-DN7sBQTc.js"),
    import("./marker-icon-Dxo8DtlK.js"),
    import("./marker-shadow-BWlltkiu.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (e) => {
  const o = ref(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => o.value(...n);
  return t.wrapped = o, provide(e, t), t;
}, V = (e, o) => e.wrapped.value = o, b = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (e) => {
  const o = inject(e);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return o;
}, h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), me = Symbol(
  "registerLayerControl"
), ve = Symbol(
  "canSetParentHtml"
), be = Symbol("setParentHtml"), fe = Symbol("setIcon"), ge = Symbol("bindPopup"), Le = Symbol("bindTooltip"), he = Symbol("unbindPopup"), Oe = Symbol("unbindTooltip"), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true
  }
}, J = (e) => ({ options: e.options, methods: {} }), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: true
  },
  layerType: {
    type: String,
    custom: true
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
}, q = (e, o, t) => {
  const n = m(M), s = m(ee), { options: r, methods: l } = J(e), a = f(
    e,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => s({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(y) {
      u(), o.value.options.attribution = y, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(y) {
      o.value && (y ? i() : u());
    },
    bindPopup(y) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(y);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(y) {
      t.emit("update:visible", y);
    }
  };
  return provide(ge, d.bindPopup), provide(Le, d.bindTooltip), provide(he, d.unbindPopup), provide(Oe, d.unbindTooltip), onUnmounted(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, G = (e, o) => {
  if (e && o.default)
    return h$1("div", { style: { display: "none" } }, o.default());
}, Se = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ke = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  );
  return { options: f(
    e,
    Se,
    n
  ), methods: s };
}, ne = {
  ...Se,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, _e = (e, o, t) => {
  const { options: n, methods: s } = Ke(e, o, t), r = f(
    e,
    ne,
    n
  ), l = m(ee), a = {
    ...s,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return onBeforeUnmount(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: a };
}, re = {
  ...ne,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: true,
    custom: true
  }
}, je = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    re,
    n
  ), l = {
    ...s,
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  };
  return { options: r, methods: l };
}, Pe = {
  ...re,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (e, o, t) => {
  const { options: n, methods: s } = je(e, o, t), r = f(
    e,
    Pe,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LCircle",
  props: Pe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Qe(e, t, o);
    return onMounted(async () => {
      const { circle: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLng, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  name: "LCircleMarker",
  props: re,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = je(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { circleMarker: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const F = {
  ...W,
  position: {
    type: String
  }
}, K = (e, o) => {
  const { options: t, methods: n } = J(e), s = f(
    e,
    F,
    t
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return onUnmounted(() => {
    o.value && o.value.remove();
  }), { options: s, methods: r };
}, Xe = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null;
defineComponent({
  name: "LControl",
  props: {
    ...F,
    disableClickPropagation: {
      type: Boolean,
      custom: true,
      default: true
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(), s = inject(h), r = m(H), { options: l, methods: a } = K(e, t);
    return onMounted(async () => {
      const { Control: i, DomEvent: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = markRaw(new d(l)), L(a, t.value, e), r({ leafletObject: t.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return Xe(this.$slots);
  }
});
const Ce = {
  ...F,
  prefix: {
    type: String
  }
}, Ye = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  ), s = f(
    e,
    Ce,
    t
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: s, methods: r };
};
defineComponent({
  name: "LControlAttribution",
  props: Ce,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Ye(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.attribution(r)
      ), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Te = {
  ...F,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, Ve = (e, o) => {
  const { options: t } = K(e, o);
  return { options: f(
    e,
    Te,
    t
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
};
defineComponent({
  name: "LControlLayers",
  props: Te,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(me), { options: r, methods: l } = Ve(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.layers(void 0, void 0, r)
      ), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Me = {
  ...F,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, xe = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Me,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlScale",
  props: Me,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = xe(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.scale(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Be = {
  ...F,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, Re = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Be,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlZoom",
  props: Be,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Re(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.zoom(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const te = {
  ...D
}, se = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    te,
    n
  ), l = {
    ...s,
    addLayer(a) {
      o.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      o.value.removeLayer(a.leafletObject);
    }
  };
  return provide(M, l.addLayer), provide(ee, l.removeLayer), { options: r, methods: l };
}, we = {
  ...te
}, et = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    we,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  props: we,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = et(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { featureGroup: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(void 0, a)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const Ie = {
  ...te,
  geojson: {
    type: [Object, Array],
    custom: true
  },
  optionsStyle: {
    type: Function,
    custom: true
  }
}, tt = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (r.style = e.optionsStyle);
  const l = {
    ...s,
    setGeojson(a) {
      o.value.clearLayers(), o.value.addData(a);
    },
    setOptionsStyle(a) {
      o.value.setStyle(a);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, no = defineComponent({
  props: Ie,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = tt(e, t, o);
    return onMounted(async () => {
      const { geoJSON: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.geojson, a));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), ae = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ae,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var a;
      (a = o.value) == null || a.redraw();
    }
  };
  return onUnmounted(() => {
    o.value.off();
  }), { options: r, methods: l };
}, ot = (e, o, t, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = o.create("div");
    const l = h$1({ setup: n, props: ["coords"] }, { coords: s });
    return render(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
defineComponent({
  props: {
    ...ae,
    childRender: {
      type: Function,
      required: true
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(null), s = ref(false), r = inject(h), l = m(M), { options: a, methods: i } = Ae(e, t, o);
    return onMounted(async () => {
      const { GridLayer: u, DomUtil: d, Util: y } = r ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), w = ot(
        u,
        d,
        y,
        e.childRender
      );
      t.value = markRaw(new w(a));
      const { listeners: v } = T(o.attrs);
      t.value.on(v), L(i, t.value, e), l({
        ...e,
        ...i,
        leafletObject: t.value
      }), s.value = true, nextTick(() => o.emit("ready", t.value));
    }), { root: n, ready: s, leafletObject: t };
  },
  render() {
    return this.ready ? h$1("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const de = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
}, so = defineComponent({
  name: "LIcon",
  props: {
    ...de,
    ...W
  },
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(ve), r = m(be), l = m(fe);
    let a, i, u, d, y;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && y && s() && r(I);
        return;
      }
      const { listeners: E } = T(o.attrs);
      y && i(y, E);
      const { options: ue } = J(e), $ = f(
        e,
        de,
        ue
      );
      I && ($.html = I), y = $.html ? u($) : d($), a(y, E), l(y);
    }, v = () => {
      nextTick(() => w(t.value, true, false));
    }, z = () => {
      nextTick(() => w(t.value, false, true));
    }, Z = {
      setIconUrl: v,
      setIconRetinaUrl: v,
      setIconSize: v,
      setIconAnchor: v,
      setPopupAnchor: v,
      setTooltipAnchor: v,
      setShadowUrl: v,
      setShadowRetinaUrl: v,
      setShadowAnchor: v,
      setBgPos: v,
      setClassName: v,
      setHtml: v
    };
    return onMounted(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      a = N.on, i = N.off, u = P, d = B, L(Z, {}, e), new MutationObserver(z).observe(t.value, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      }), v();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return h$1("div", { ref: "root" }, e);
  }
}), Ge = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: true,
    custom: true
  },
  bounds: {
    type: [Array, Object],
    required: true,
    custom: true
  }
}, nt = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    Ge,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return o.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return o.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return o.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return o.value.setZIndex(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LImageOverlay",
  props: Ge,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = nt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { imageOverlay: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.url, e.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  props: te,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l } = se(e, t, o);
    return onMounted(async () => {
      const { layerGroup: a } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a(void 0, e.options)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
function rt(e, o, t) {
  var n, s, r;
  o === void 0 && (o = 50), t === void 0 && (t = {});
  var l = (n = t.isImmediate) != null && n, a = (s = t.callback) != null && s, i = t.maxWait, u = Date.now(), d = [];
  function y() {
    if (i !== void 0) {
      var v = Date.now() - u;
      if (v + o >= i)
        return i - v;
    }
    return o;
  }
  var w = function() {
    var v = [].slice.call(arguments), z = this;
    return new Promise(function(Z, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var I = e.apply(z, v);
          a && a(I), d.forEach(function(E) {
            return (0, E.resolve)(I);
          }), d = [];
        }
      }, y()), P) {
        var B = e.apply(z, v);
        return a && a(B), Z(B);
      }
      d.push({ resolve: Z, reject: N });
    });
  };
  return w.cancel = function(v) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(v);
    }), d = [];
  }, w;
}
const We = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: true,
    custom: true
  }
};
defineComponent({
  inheritAttrs: false,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: We,
  setup(e, o) {
    const t = ref(), n = reactive({
      ready: false,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = J(e), r = f(
      e,
      We,
      s
    ), { listeners: l, attrs: a } = T(o.attrs), i = Y(M), u = Y(ee), d = Y(H), y = Y(
      me
    );
    provide(h, e.useGlobalLeaflet);
    const w = computed(() => {
      const P = {};
      return e.noBlockingAnimations && (P.animate = false), P;
    }), v = computed(() => {
      const P = w.value;
      return e.padding && (P.padding = e.padding), e.paddingTopLeft && (P.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (P.paddingBottomRight = e.paddingBottomRight), P;
    }), z = {
      moveend: rt((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(true);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(false);
      }
    };
    onMounted(async () => {
      e.useGlobalLeaflet && (b.L = b.L || await import("./leaflet-src-Ds8hBCqW.js").then((n2) => n2.l));
      const { map: P, CRS: B, Icon: I, latLngBounds: E, latLng: ue, stamp: $ } = e.useGlobalLeaflet ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await qe(I);
      const yt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = yt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== false && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: false,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, v.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = E(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ue(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(u, Q.removeLayer), V(d, Q.registerControl), V(y, Q.registerLayerControl), n.leafletRef = markRaw(P(t.value, r)), L(Q, n.leafletRef, e), ce(n.leafletRef, z), ce(n.leafletRef, l), n.ready = true, nextTick(() => o.emit("ready", n.leafletRef));
    }), onBeforeUnmount(() => {
      ye(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const Z = computed(() => n.leafletRef), N = computed(() => n.ready);
    return { root: t, ready: N, leafletObject: Z, attrs: a };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), h$1(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
});
const Gt = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: true,
    required: true
  }
}, st = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ze,
    n
  ), l = {
    ...s,
    setDraggable(a) {
      o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(a) {
      t.emit("update:latLng", a.latlng), t.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(a)) && o.value.setLatLng(a);
      }
    }
  };
  return { options: r, methods: l };
}, at = (e, o) => {
  const t = o.slots.default && o.slots.default();
  return t && t.length && t.some(Nt);
};
function Nt(e) {
  return !(Gt.includes(e.type.toString()) || zt.includes(e.type.name));
}
const uo = defineComponent({
  name: "LMarker",
  props: ze,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M);
    provide(
      ve,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), provide(be, (u) => {
      var y, w;
      const d = k((y = t.value) == null ? void 0 : y.getElement) && ((w = t.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), provide(
      fe,
      (u) => {
        var d;
        return ((d = t.value) == null ? void 0 : d.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: l, methods: a } = st(e, t, o), i = {
      moveHandler: rt(a.latLngSync)
    };
    return onMounted(async () => {
      const { marker: u, divIcon: d } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      at(l, o) && (l.icon = d({ className: "" })), t.value = markRaw(u(e.latLng, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => ye(i)), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), le = {
  ...ne,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: true,
    custom: true
  }
}, Ne = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    le,
    n
  ), l = {
    ...s,
    setSmoothFactor(a) {
      o.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      o.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      o.value.addLatLng(a);
    }
  };
  return { options: r, methods: l };
}, x = {
  ...le
}, $e = (e, o, t) => {
  const { options: n, methods: s } = Ne(
    e,
    o,
    t
  ), r = f(
    e,
    x,
    n
  ), l = {
    ...s,
    toGeoJSON(a) {
      return o.value.toGeoJSON(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LPolygon",
  props: x,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = $e(e, t, o);
    return onMounted(async () => {
      const { polygon: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLngs, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  name: "LPolyline",
  props: le,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Ne(e, t, o);
    return onMounted(async () => {
      const { polyline: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ke = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, Ue = (e, o) => {
  const { options: t, methods: n } = J(e), s = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: t, methods: s };
}, De = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null, lt = {
  ...ke,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, it = (e, o) => {
  const { options: t, methods: n } = Ue(e, o);
  return { options: t, methods: n };
};
defineComponent({
  name: "LPopup",
  props: lt,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject(h), r = m(ge), l = m(he), { options: a, methods: i } = it(e, t);
    return onMounted(async () => {
      const { popup: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(u(a)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), L(i, t.value, e);
      const { listeners: d } = T(o.attrs);
      t.value.on(d), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => {
      l();
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
});
const Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: false
  },
  bounds: {
    type: Object,
    custom: true
  }
}, ut = (e, o, t) => {
  const { options: n, methods: s } = $e(
    e,
    o,
    t
  ), r = f(
    e,
    Fe,
    n
  ), l = {
    ...s,
    setBounds(a) {
      o.value.setBounds(a);
    },
    setLatLngs(a) {
      o.value.setBounds(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LRectangle",
  props: Fe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = ut(e, t, o);
    return onMounted(async () => {
      const { rectangle: i, latLngBounds: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = markRaw(i(d, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ie = {
  ...ae,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? true : Array.isArray(e) ? e.every((o) => typeof o == "string") : false
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: true,
    custom: true
  }
}, Ze = (e, o, t) => {
  const { options: n, methods: s } = Ae(e, o, t), r = f(
    e,
    ie,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  props: ie,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = Ze(e, t, o);
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a(e.url, r));
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ct = {
  ...ke
}, dt = (e, o) => {
  const { options: t, methods: n } = Ue(e, o), s = m(Oe);
  return onBeforeUnmount(() => {
    s();
  }), { options: t, methods: n };
};
defineComponent({
  name: "LTooltip",
  props: ct,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject(h), r = m(Le), { options: l, methods: a } = dt(e, t);
    return onMounted(async () => {
      const { tooltip: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(l)), L(a, t.value, e);
      const { listeners: u } = T(o.attrs);
      t.value.on(u), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
});
const Ee = {
  ...ie,
  layers: {
    type: String,
    required: true
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, pt = (e, o, t) => {
  const { options: n, methods: s } = Ze(e, o, t);
  return {
    options: f(
      e,
      Ee,
      n
    ),
    methods: {
      ...s
    }
  };
};
defineComponent({
  props: Ee,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = pt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.wms(e.url, r)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeoJsonDataRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const { config, data } = toRefs(props);
    const conditions = computed(() => config.value?.conditions || []);
    const areaStyle = computed(() => config.value?.renderer?.area || {});
    const renderer = computed(() => config.value?.renderer || {});
    const isPoint = (geometry) => {
      return geometry?.type === "Point" || geometry?.type === "MultiPoint";
    };
    const getPoint = (geometry) => {
      if (!geometry) return null;
      if (geometry.type === "Point") {
        return [geometry.coordinates[1], geometry.coordinates[0]];
      }
      return null;
    };
    const filterFeatures = (featureCollection) => {
      if (!conditions.value || conditions.value.length === 0) {
        return featureCollection.features;
      }
      const filteredFeatures = [];
      for (const feature of featureCollection.features) {
        for (const condition of conditions.value) {
          if (condition.value === "*") {
            filteredFeatures.push(feature);
            break;
          } else {
            const prop = getNestedProperty(feature.properties, condition.prop);
            if (!prop) {
              continue;
            }
            if (compareCondition(condition.comperator, prop, condition.value)) {
              filteredFeatures.push(feature);
              break;
            }
          }
        }
      }
      return filteredFeatures;
    };
    const getNestedProperty = (obj, path) => {
      if (!obj || !path) return void 0;
      return path.split(".").reduce((current, key) => current?.[key], obj);
    };
    const compareCondition = (comperator, prop, value) => {
      switch (comperator) {
        case "eq":
          return String(prop) === value;
        case "neq":
          return String(prop) !== value;
        case "gt":
          return Number(prop) > Number(value);
        case "gte":
          return Number(prop) >= Number(value);
        case "lt":
          return Number(prop) < Number(value);
        case "lte":
          return Number(prop) <= Number(value);
        default:
          return false;
      }
    };
    const processedData = computed(() => {
      if (!data.value) return null;
      if (data.value.type === "FeatureCollection") {
        const filteredFeatures = filterFeatures(data.value);
        return filteredFeatures;
      }
      return [data.value];
    });
    const isValidGeoJSON = computed(() => {
      if (!data.value) return false;
      const geoJsonTypes = ["Feature", "FeatureCollection", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection"];
      return data.value.type && geoJsonTypes.includes(data.value.type);
    });
    const geoJsonStyle = computed(() => ({
      fillColor: areaStyle.value?.fillColor || "#3388ff",
      fillOpacity: areaStyle.value?.fillOpacity !== void 0 ? areaStyle.value.fillOpacity : 0.2,
      color: areaStyle.value?.color || "#3388ff",
      weight: areaStyle.value?.weight !== void 0 ? areaStyle.value?.weight : 3,
      stroke: areaStyle.value?.stroke !== void 0 ? areaStyle.value?.stroke : true,
      opacity: areaStyle.value?.opacity !== void 0 ? areaStyle.value?.opacity : 1,
      fill: areaStyle.value?.fill !== void 0 ? areaStyle.value?.fill : true,
      className: areaStyle.value?.className || ""
    }));
    return (_ctx, _cache) => {
      return isValidGeoJSON.value && processedData.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(processedData.value, (feature, idx) => {
        return openBlock(), createElementBlock(Fragment, {
          key: feature.id || idx
        }, [
          !isPoint(feature.geometry) ? (openBlock(), createBlock(unref(no), {
            key: 0,
            geojson: feature,
            options: { pane: "overlayPane" },
            "options-style": () => geoJsonStyle.value
          }, null, 8, ["geojson", "options-style"])) : createCommentVNode("", true),
          getPoint(feature.geometry) ? (openBlock(), createBlock(unref(uo), {
            key: 1,
            "lat-lng": getPoint(feature.geometry),
            options: { pane: "markerPane" }
          }, {
            default: withCtx(() => [
              createVNode(unref(so), { "class-name": "someExtraClass" }, {
                default: withCtx(() => [
                  createVNode(unref(MapMarker), {
                    "render-as": renderer.value.point_render_as || "icon",
                    "background-color": renderer.value.pointPin?.color,
                    "icon-config": renderer.value.point,
                    "property-value": feature.properties?.[renderer.value.point_prop ?? ""],
                    "image-url": renderer.value.point_image_url,
                    "image-size": renderer.value.point_image_size || 32
                  }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["lat-lng"])) : createCommentVNode("", true)
        ], 64);
      }), 128)) : createCommentVNode("", true);
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
const GeoJsonDataRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ad1856d"]]);
const _hoisted_1 = { class: "geojson-settings" };
const _hoisted_2 = { class: "tab-content" };
const _hoisted_3 = {
  key: 0,
  class: "full"
};
const _hoisted_4 = {
  key: 1,
  class: "full"
};
const _hoisted_5 = {
  key: 2,
  class: "full"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GeoJsonDataRendererSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const tabNo = ref(0);
    if (!model.value) {
      model.value = {};
    }
    if (!model.value.conditions) {
      model.value.conditions = [];
    }
    if (!model.value.renderer) {
      model.value.renderer = {
        point_render_as: "icon",
        point_prop: "name",
        point: {
          currentIcon: "circle",
          iconColor: "#000000",
          iconSize: 24,
          isIconFilled: false,
          strokeWeight: 400,
          opticSize: 24,
          grade: 0
        },
        pointPin: { color: "#ccc" },
        area: {
          stroke: true,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          fill: true,
          fillOpacity: 0.2,
          fillColor: "#3388ff",
          className: ""
        }
      };
    }
    return (_ctx, _cache) => {
      const _component_VaTab = resolveComponent("VaTab");
      const _component_VaTabs = resolveComponent("VaTabs");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VaTabs, {
          modelValue: tabNo.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tabNo.value = $event)
        }, {
          tabs: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(["Conditions", "Points", "Areas"], (tab) => {
              return createVNode(_component_VaTab, { key: tab }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(tab), 1)
                ]),
                _: 2
              }, 1024);
            }), 64))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createElementVNode("div", _hoisted_2, [
          tabNo.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(unref(ConditionSettings), {
              modelValue: model.value.conditions,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.conditions = $event)
            }, null, 8, ["modelValue"])
          ])) : tabNo.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(unref(PointStyler), {
              modelValue: model.value.renderer,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.renderer = $event)
            }, null, 8, ["modelValue"])
          ])) : tabNo.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(unref(AreaStyler), {
              modelValue: model.value.renderer.area,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.renderer.area = $event)
            }, null, 8, ["modelValue"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const GeoJsonDataRendererSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11682d51"]]);
class GeoJsonDataRendererDescription {
  component = GeoJsonDataRenderer;
  setupComponent = GeoJsonDataRendererSettings;
  description = "Renders observations as GeoJSON features on the map";
  name = "GeoJSON Data Renderer";
  namespace = "geojson";
  qualifiedName = "GeoJsonDataRenderer";
  isLayerRenderer = true;
  example = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [11.587408017353823, 50.92828047934907]
    },
    properties: {
      name: "Example Point"
    }
  };
}
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
let GeoJsonRendererComponent = class {
  register() {
    useDataPointRegistry().registerDataPointRenderer(new GeoJsonDataRendererDescription());
  }
};
__decorateClass([
  activate()
], GeoJsonRendererComponent.prototype, "register", 1);
GeoJsonRendererComponent = __decorateClass([
  component({})
], GeoJsonRendererComponent);
export {
  GeoJsonRendererComponent as G,
  GeoJsonDataRendererDescription as a,
  getDefaultExportFromCjs as g
};
