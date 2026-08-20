(function(){var i="ui.vue.widget.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.widget[data-v-cc472b41] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.preview-container[data-v-cc472b41] {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.preview-item[data-v-cc472b41] {\n  border: 1px solid #000;\n  border-radius: 8px;\n}\n.preview-item-title[data-v-cc472b41] {\n  background-color: #f0f0f0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 8px;\n  border-radius: 8px 8px 0 0;\n}\n.preview-item-content[data-v-cc472b41] {\n  padding: 8px;\n}\n";})();
const { defineComponent, toRefs, inject: inject$1, onMounted, onUnmounted, ref, watch, createElementBlock, openBlock, withModifiers, createCommentVNode, Fragment, renderList, createElementVNode, toDisplayString } = __tsm__.require("vue");
const { useDatasourceRepository } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { useRoute } = __tsm__.require("vue-router");
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
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
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M28.3826%2066.198C27.9026%2066.198%2027.3986%2066.162%2026.8706%2066.09C26.3546%2066.03%2025.8626%2065.934%2025.3946%2065.802C24.9266%2065.67%2024.5066%2065.514%2024.1346%2065.334C23.8106%2065.178%2023.5826%2064.974%2023.4506%2064.722C23.3186%2064.458%2023.2706%2064.182%2023.3066%2063.894C23.3426%2063.606%2023.4446%2063.354%2023.6126%2063.138C23.7806%2062.91%2024.0026%2062.76%2024.2786%2062.688C24.5546%2062.604%2024.8666%2062.64%2025.2146%2062.796C25.6706%2063.012%2026.1866%2063.18%2026.7626%2063.3C27.3386%2063.42%2027.8786%2063.48%2028.3826%2063.48C29.1746%2063.48%2029.7266%2063.378%2030.0386%2063.174C30.3626%2062.958%2030.5246%2062.694%2030.5246%2062.382C30.5246%2062.106%2030.4106%2061.884%2030.1826%2061.716C29.9666%2061.548%2029.5766%2061.404%2029.0126%2061.284L26.9066%2060.834C25.7546%2060.594%2024.8966%2060.174%2024.3326%2059.574C23.7686%2058.974%2023.4866%2058.2%2023.4866%2057.252C23.4866%2056.628%2023.6126%2056.064%2023.8646%2055.56C24.1286%2055.044%2024.4946%2054.606%2024.9626%2054.246C25.4426%2053.886%2026.0066%2053.61%2026.6546%2053.418C27.3146%2053.214%2028.0466%2053.112%2028.8506%2053.112C29.4746%2053.112%2030.1047%2053.184%2030.7407%2053.328C31.3887%2053.46%2031.9466%2053.664%2032.4146%2053.94C32.6906%2054.084%2032.8886%2054.282%2033.0086%2054.534C33.1286%2054.786%2033.1767%2055.05%2033.1526%2055.326C33.1287%2055.59%2033.0327%2055.824%2032.8647%2056.028C32.7087%2056.232%2032.4926%2056.37%2032.2166%2056.442C31.9526%2056.502%2031.6346%2056.454%2031.2626%2056.298C30.9146%2056.142%2030.5186%2056.028%2030.0746%2055.956C29.6426%2055.872%2029.2226%2055.83%2028.8146%2055.83C28.3706%2055.83%2027.9926%2055.884%2027.6806%2055.992C27.3686%2056.088%2027.1286%2056.232%2026.9606%2056.424C26.8046%2056.616%2026.7266%2056.838%2026.7266%2057.09C26.7266%2057.342%2026.8286%2057.558%2027.0326%2057.738C27.2487%2057.906%2027.6386%2058.05%2028.2026%2058.17L30.2906%2058.62C31.4546%2058.872%2032.3246%2059.286%2032.9006%2059.862C33.4766%2060.438%2033.7646%2061.188%2033.7646%2062.112C33.7646%2062.736%2033.6386%2063.3%2033.3867%2063.804C33.1346%2064.308%2032.7746%2064.74%2032.3066%2065.1C31.8386%2065.448%2031.2746%2065.718%2030.6146%2065.91C29.9546%2066.102%2029.2106%2066.198%2028.3826%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M35.8446%2066.162C35.4726%2066.162%2035.1606%2066.078%2034.9086%2065.91C34.6566%2065.73%2034.5006%2065.49%2034.4406%2065.19C34.3806%2064.878%2034.4346%2064.53%2034.6026%2064.146L39.0846%2054.498C39.3006%2054.03%2039.5646%2053.688%2039.8766%2053.472C40.2006%2053.256%2040.5666%2053.148%2040.9746%2053.148C41.3826%2053.148%2041.7366%2053.256%2042.0366%2053.472C42.3486%2053.688%2042.6186%2054.03%2042.8466%2054.498L47.3286%2064.146C47.5206%2064.53%2047.5866%2064.878%2047.5266%2065.19C47.4786%2065.502%2047.3286%2065.742%2047.0766%2065.91C46.8366%2066.078%2046.5366%2066.162%2046.1766%2066.162C45.6966%2066.162%2045.3246%2066.054%2045.0606%2065.838C44.8086%2065.622%2044.5806%2065.274%2044.3766%2064.794L43.4046%2062.508L44.6646%2063.426H37.2486L38.5266%2062.508L37.5546%2064.794C37.3386%2065.274%2037.1166%2065.622%2036.8886%2065.838C36.6606%2066.054%2036.3126%2066.162%2035.8446%2066.162ZM40.9386%2056.766L38.8506%2061.752L38.3466%2060.888H43.5846L43.0806%2061.752L40.9746%2056.766H40.9386Z'%20fill='%23606060'/%3e%3cpath%20d='M50.5091%2066.162C50.0291%2066.162%2049.6571%2066.03%2049.3931%2065.766C49.1411%2065.502%2049.0151%2065.13%2049.0151%2064.65V54.66C49.0151%2054.168%2049.1531%2053.796%2049.4291%2053.544C49.7051%2053.28%2050.0951%2053.148%2050.5991%2053.148C51.0191%2053.148%2051.3491%2053.232%2051.5891%2053.4C51.8411%2053.556%2052.0691%2053.82%2052.2731%2054.192L56.1431%2061.14H55.5131L59.3652%2054.192C59.5812%2053.82%2059.8091%2053.556%2060.0491%2053.4C60.3011%2053.232%2060.6371%2053.148%2061.0571%2053.148C61.5371%2053.148%2061.9032%2053.28%2062.1552%2053.544C62.4192%2053.796%2062.5512%2054.168%2062.5512%2054.66V64.65C62.5512%2065.13%2062.4251%2065.502%2062.1731%2065.766C61.9211%2066.03%2061.5491%2066.162%2061.0571%2066.162C60.5771%2066.162%2060.2051%2066.03%2059.9411%2065.766C59.6891%2065.502%2059.5632%2065.13%2059.5632%2064.65V58.458H59.9411L57.0431%2063.498C56.8751%2063.762%2056.6951%2063.96%2056.5031%2064.092C56.3231%2064.224%2056.0771%2064.29%2055.7651%2064.29C55.4651%2064.29%2055.2191%2064.224%2055.0271%2064.092C54.8351%2063.96%2054.6611%2063.762%2054.5051%2063.498L51.5891%2058.44H52.0031V64.65C52.0031%2065.13%2051.8772%2065.502%2051.6252%2065.766C51.3732%2066.03%2051.0011%2066.162%2050.5091%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M66.5434%2066.162C66.0154%2066.162%2065.6074%2066.018%2065.3194%2065.73C65.0314%2065.43%2064.8874%2065.016%2064.8874%2064.488V54.984C64.8874%2054.444%2065.0314%2054.03%2065.3194%2053.742C65.6194%2053.454%2066.0333%2053.31%2066.5613%2053.31H70.9893C72.4293%2053.31%2073.5394%2053.682%2074.3194%2054.426C75.1114%2055.158%2075.5074%2056.172%2075.5074%2057.468C75.5074%2058.764%2075.1114%2059.784%2074.3194%2060.528C73.5394%2061.26%2072.4293%2061.626%2070.9893%2061.626H68.1994V64.488C68.1994%2065.016%2068.0614%2065.43%2067.7854%2065.73C67.5094%2066.018%2067.0954%2066.162%2066.5434%2066.162ZM68.1994%2059.088H70.4134C71.0374%2059.088%2071.5173%2058.956%2071.8533%2058.692C72.1893%2058.416%2072.3574%2058.008%2072.3574%2057.468C72.3574%2056.916%2072.1893%2056.508%2071.8533%2056.244C71.5173%2055.98%2071.0374%2055.848%2070.4134%2055.848H68.1994V59.088Z'%20fill='%23606060'/%3e%3cpath%20d='M78.7254%2066C78.1974%2066%2077.7834%2065.856%2077.4834%2065.568C77.1954%2065.268%2077.0514%2064.854%2077.0514%2064.326V54.966C77.0514%2054.426%2077.1954%2054.012%2077.4834%2053.724C77.7714%2053.436%2078.1794%2053.292%2078.7074%2053.292C79.2474%2053.292%2079.6554%2053.436%2079.9314%2053.724C80.2194%2054.012%2080.3634%2054.426%2080.3634%2054.966V63.246H84.7554C85.2114%2063.246%2085.5594%2063.366%2085.7994%2063.606C86.0514%2063.834%2086.1774%2064.17%2086.1774%2064.614C86.1774%2065.058%2086.0514%2065.4%2085.7994%2065.64C85.5594%2065.88%2085.2114%2066%2084.7554%2066H78.7254Z'%20fill='%23606060'/%3e%3cpath%20d='M89.3087%2066C88.7447%2066%2088.3127%2065.856%2088.0127%2065.568C87.7247%2065.268%2087.5807%2064.842%2087.5807%2064.29V55.02C87.5807%2054.468%2087.7247%2054.048%2088.0127%2053.76C88.3127%2053.46%2088.7447%2053.31%2089.3087%2053.31H95.4107C95.8427%2053.31%2096.1667%2053.418%2096.3827%2053.634C96.5987%2053.85%2096.7067%2054.162%2096.7067%2054.57C96.7067%2054.99%2096.5987%2055.314%2096.3827%2055.542C96.1667%2055.758%2095.8427%2055.866%2095.4107%2055.866H90.7487V58.278H95.0147C95.4347%2058.278%2095.7527%2058.386%2095.9687%2058.602C96.1967%2058.818%2096.3107%2059.136%2096.3107%2059.556C96.3107%2059.976%2096.1967%2060.294%2095.9687%2060.51C95.7527%2060.726%2095.4347%2060.834%2095.0147%2060.834H90.7487V63.444H95.4107C95.8427%2063.444%2096.1667%2063.558%2096.3827%2063.786C96.5987%2064.002%2096.7067%2064.314%2096.7067%2064.722C96.7067%2065.142%2096.5987%2065.46%2096.3827%2065.676C96.1667%2065.892%2095.8427%2066%2095.4107%2066H89.3087Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2043.5C22.5%2042.6716%2023.1716%2042%2024%2042H96C96.8284%2042%2097.5%2042.6716%2097.5%2043.5C97.5%2044.3284%2096.8284%2045%2096%2045H24C23.1716%2045%2022.5%2044.3284%2022.5%2043.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2076.5C22.5%2075.6716%2023.1716%2075%2024%2075H96C96.8284%2075%2097.5%2075.6716%2097.5%2076.5C97.5%2077.3284%2096.8284%2078%2096%2078H24C23.1716%2078%2022.5%2077.3284%2022.5%2076.5Z'%20fill='%23606060'/%3e%3c/svg%3e";
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
class RssWidgetInterface extends WidgetActionInterface {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "rss.refresh" })
], RssWidgetInterface.prototype, "refresh");
const _hoisted_1 = { class: "preview-item" };
const _hoisted_2 = { class: "preview-item-title" };
const _hoisted_3 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RssWidget",
  props: {
    datasourceId: {},
    id: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { datasourceId, id: widgetId } = toRefs(props);
    const eventBus = inject$1(identifiers.TINY_EMITTER);
    const actionsRegistry = inject$1(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class RssWidgetApi extends RssWidgetInterface {
      refresh() {
        update(datasourceId.value, datasourceId.value);
      }
    }
    const api = new RssWidgetApi();
    __expose(api);
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "RssWidget", pageId);
    });
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:RssWidget:click", {
        type: "widget:RssWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:RssWidget:right_click", {
        type: "widget:RssWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const data = ref(null);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    const { update } = useDatasourceRepository(datasourceId, "object", data);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "widget",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        data.value && data.value.items ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(data.value.items, (item) => {
          return openBlock(), createElementBlock("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, toDisplayString(item.title), 1),
            createElementVNode("div", {
              innerHTML: item.content,
              class: "preview-item-content"
            }, null, 8, _hoisted_3)
          ]);
        }), 256)) : createCommentVNode("", true)
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
const RssWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cc472b41"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return null;
}
const RssWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const RssWidgetEvents = [
  { name: "RSS Clicked", type: "click", description: "Triggered when the RSS widget is clicked", payloadType: Payload },
  { name: "RSS Right Clicked", type: "right_click", description: "Triggered when the RSS widget is right-clicked", payloadType: Payload }
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
const WIDGET_TYPE = "RssWidget";
let RssWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = RssWidget;
  settingsComponent = RssWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "RSS";
  register() {
    this.events.registerWidget(WIDGET_TYPE, RssWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, RssWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], RssWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], RssWidgetProvider.prototype, "unregister", 1);
RssWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject("EventRegistry")),
  __decorateParam(1, inject("EventActionsRegistry"))
], RssWidgetProvider);
export {
  RssWidget,
  RssWidgetProvider,
  RssWidgetSettings
};
