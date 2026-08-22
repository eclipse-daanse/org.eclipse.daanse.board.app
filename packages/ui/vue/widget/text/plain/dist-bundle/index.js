(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.text-container[data-v-0c65fa06] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    gap: 1rem;\n    align-items: stretch;\n}\n.component[data-v-0c65fa06] {\n    font-size: var(--v7536b7d0);\n    color: var(--v150065d8);\n    text-align: var(--v3dd1aafe);\n    font-weight: var(--v1a4b6366);\n    font-style: var(--ad416e3c);\n    text-decoration: var(--v24dbbe63);\n    overflow: hidden;\n}\n\n.settings-container[data-v-86b279c5] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n.settings-block[data-v-86b279c5] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n}\n.text-title[data-v-86b279c5] {\n  width: 100%;\n}\n.text-size[data-v-86b279c5] {\n  width: 100%;\n  margin-left: 12px;\n}\n.text-weight[data-v-86b279c5] {\n  width: 100px;\n}\n.loading[data-v-86b279c5] {\n  height: 100%;\n  padding: 50px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background-color: var(--app-response-background);\n}\n.toolbar[data-v-86b279c5] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n}\n.toolbar-group[data-v-86b279c5] {\n  display: flex;\n  gap: 2px;\n  padding-right: 0.5rem;\n  margin-right: 0.25rem;\n  border-right: 1px solid #e5e7eb;\n}\n.toolbar-group[data-v-86b279c5]:last-child {\n  border-right: none;\n  padding-right: 0;\n  margin-right: 0;\n}\n.toolbar-btn[data-v-86b279c5] {\n  min-width: 28px !important;\n  height: 28px !important;\n  padding: 0 4px !important;\n  border: 1px solid transparent !important;\n  border-radius: 0.25rem !important;\n}\n.toolbar-btn[data-v-86b279c5]:hover {\n  background-color: #e5e7eb !important;\n}\n.is-active[data-v-86b279c5] {\n  background-color: #fff3e0 !important;\n  border-color: rgb(236, 156, 29) !important;\n  color: #c45e00 !important;\n}\n.toolbar-group--inputs[data-v-86b279c5] {\n  align-items: center;\n  gap: 0.25rem;\n}\n.toolbar-input[data-v-86b279c5] {\n  max-width: 70px;\n}\n";})();
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, useCssVars, useModel, computed, toRefs, inject, onMounted, onUnmounted, ref, watch, createElementBlock, openBlock, normalizeStyle, withModifiers, createElementVNode, toDisplayString, resolveComponent, createBlock, withCtx, createVNode, unref, normalizeClass } from "vue";
import { useRoute } from "vue-router";
const { VariableComplexStringWrapper, VariableWrapper, useDatasourceRepository, WrapperTypes } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const helpers = __tsm__.require("org.eclipse.daanse.board.app.lib.utils.helpers").default;
const { Reference, ModelClass } = __tsm__.require("org.eclipse.daanse.board.app.lib.annotations");
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.variable");
const { ComplexTextInput, VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
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
let TextSettings = class {
  text = new VariableComplexStringWrapper();
  fontSize = new VariableWrapper();
  fontColor = new VariableWrapper();
  fontWeight = new VariableWrapper();
  fontStyle = new VariableWrapper();
  textDecoration = new VariableWrapper();
  horizontalAlign = new VariableWrapper();
  verticalAlign = new VariableWrapper();
};
__decorateClass$2([
  Reference("VariableComplexStringWrapper")
], TextSettings.prototype, "text", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "fontSize", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "fontColor", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "fontWeight", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "fontStyle", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "textDecoration", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "horizontalAlign", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], TextSettings.prototype, "verticalAlign", 2);
TextSettings = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings" })
], TextSettings);
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
class TextWidgetInterface extends WidgetActionInterface {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "text.clearContent" })
], TextWidgetInterface.prototype, "clearContent");
__decorateClass$1([
  WidgetAction({ eventType: "text.copyContent" })
], TextWidgetInterface.prototype, "copyContent");
const _hoisted_1$1 = { class: "component" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props, { expose: __expose }) {
    useCssVars((_ctx) => ({
      "v7536b7d0": fontSizeStyle.value,
      "v150065d8": config.value.fontColor.value,
      "v3dd1aafe": config.value.horizontalAlign.value,
      "v1a4b6366": config.value.fontWeight.value,
      "ad416e3c": config.value.fontStyle.value,
      "v24dbbe63": config.value.textDecoration.value
    }));
    const props = __props;
    const { datasourceId, id: widgetId } = toRefs(props);
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class TextWidgetApi extends TextWidgetInterface {
      clearContent() {
        if (config.value?.text) config.value.text.value = "";
      }
      copyContent() {
        const text = calculatedString.value || "";
        navigator.clipboard?.writeText(text).catch(() => {
        });
      }
    }
    const api = new TextWidgetApi();
    __expose(api);
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "TextWidget", pageId);
    });
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitTextChange = (newText) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, text: newText, timestamp: Date.now() }
      });
    };
    const config = useModel(__props, "configv");
    const defaultConfig = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    };
    const data = ref(null);
    const { update } = useDatasourceRepository(datasourceId, "object", data);
    Object.keys(defaultConfig).forEach((key) => {
      if (config.value[key] === void 0 || config.value[key] === null) {
        const refTypeName = Reflect.getMetadata("Reference", TextSettings.prototype, key);
        const Constructor = WrapperTypes[refTypeName];
        const defaultValue = defaultConfig[key];
        config.value[key] = new Constructor(defaultValue);
      }
    });
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    const calculatedString = computed(() => {
      if (!config.value.text.value) {
        return "";
      }
      const { parts } = helpers.widget.extractValuesAndFullObject(config.value.text.value);
      let result = "";
      for (const part of parts) {
        if (part.path || part.path === null) {
          const value = helpers.widget.getValueByPath(data.value, part.path);
          result += value !== void 0 ? JSON.stringify(value) : part.text;
        } else {
          result += part.text;
        }
      }
      return result;
    });
    const fontSizeStyle = computed(() => {
      return (config.value?.fontSize?.value || 12) + "px";
    });
    watch(calculatedString, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        emitTextChange(newVal);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "text-container",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"]),
        style: normalizeStyle({
          "justify-content": config.value.verticalAlign?.value === "Top" ? "flex-start" : config.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
        })
      }, [
        createElementVNode("div", _hoisted_1$1, toDisplayString(calculatedString.value), 1)
      ], 36);
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
const TextWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c65fa06"]]);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "settings-block" };
const _hoisted_3 = { class: "toolbar" };
const _hoisted_4 = { class: "toolbar-group toolbar-group--inputs" };
const _hoisted_5 = { class: "toolbar-group" };
const _hoisted_6 = { class: "toolbar-group" };
const _hoisted_7 = { class: "toolbar-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    ref({});
    const opened = ref({
      widgetSection: false,
      storeSection: false
    });
    const widgetSettings = useModel(__props, "modelValue");
    console.log(widgetSettings);
    inject(identifier);
    const i18n = inject("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    return (_ctx, _cache) => {
      const _component_VaInput = resolveComponent("VaInput");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_VaButton = resolveComponent("VaButton");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: t("textBase:TextWidget.title")
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createVNode(unref(ComplexTextInput), {
                modelValue: widgetSettings.value.text,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.text = $event)
              }, {
                default: withCtx(({ value, change }) => [
                  createVNode(_component_VaInput, {
                    modelValue: value,
                    onInput: change,
                    label: t("textBase:TextWidget.label"),
                    placeholder: "Enter text with variables...",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createElementVNode("div", _hoisted_3, [
              createElementVNode("div", _hoisted_4, [
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.fontSize,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.fontSize = $event),
                  label: t("textBase:TextWidget.fontSize")
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_input, {
                      "model-value": value,
                      onInput: change,
                      placeholder: "Size",
                      class: "toolbar-input"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "label"]),
                createVNode(unref(VariableInput), {
                  modelValue: widgetSettings.value.fontColor,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.fontColor = $event),
                  label: t("textBase:TextWidget.fontColor")
                }, {
                  default: withCtx(({ value, change }) => [
                    createVNode(_component_va_color_input, {
                      "model-value": value,
                      onInput: change,
                      class: "toolbar-input"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "label"])
              ]),
              createElementVNode("div", _hoisted_5, [
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.fontWeight.value === "bold" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_bold",
                  onClick: _cache[3] || (_cache[3] = ($event) => widgetSettings.value.fontWeight.value = widgetSettings.value.fontWeight.value === "bold" ? "normal" : "bold"),
                  title: "Bold"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.fontStyle.value === "italic" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_italic",
                  onClick: _cache[4] || (_cache[4] = ($event) => widgetSettings.value.fontStyle.value = widgetSettings.value.fontStyle.value === "italic" ? "normal" : "italic"),
                  title: "Italic"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.textDecoration.value === "underline" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_underlined",
                  onClick: _cache[5] || (_cache[5] = ($event) => widgetSettings.value.textDecoration.value = widgetSettings.value.textDecoration.value === "underline" ? "None" : "underline"),
                  title: "Underline"
                }, null, 8, ["class"])
              ]),
              createElementVNode("div", _hoisted_6, [
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.horizontalAlign.value === "Left" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_left",
                  onClick: _cache[6] || (_cache[6] = ($event) => widgetSettings.value.horizontalAlign.value = "Left"),
                  title: "Left"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.horizontalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_center",
                  onClick: _cache[7] || (_cache[7] = ($event) => widgetSettings.value.horizontalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.horizontalAlign.value === "Right" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_right",
                  onClick: _cache[8] || (_cache[8] = ($event) => widgetSettings.value.horizontalAlign.value = "Right"),
                  title: "Right"
                }, null, 8, ["class"])
              ]),
              createElementVNode("div", _hoisted_7, [
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.verticalAlign.value === "Top" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_top",
                  onClick: _cache[9] || (_cache[9] = ($event) => widgetSettings.value.verticalAlign.value = "Top"),
                  title: "Top"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.verticalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_center",
                  onClick: _cache[10] || (_cache[10] = ($event) => widgetSettings.value.verticalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                createVNode(_component_VaButton, {
                  class: normalizeClass(["toolbar-btn", { "is-active": widgetSettings.value.verticalAlign.value === "Bottom" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_bottom",
                  onClick: _cache[11] || (_cache[11] = ($event) => widgetSettings.value.verticalAlign.value = "Bottom"),
                  title: "Bottom"
                }, null, 8, ["class"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const TextWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86b279c5"]]);
const TextWidgetEvents = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: Payload },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: Payload },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: Payload }
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
const WIDGET_TYPE = "TextWidget";
let TextWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = TextWidget;
  settingsComponent = TextWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "Text";
  register() {
    this.events.registerWidget(WIDGET_TYPE, TextWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, TextWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], TextWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], TextWidgetProvider.prototype, "unregister", 1);
TextWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], TextWidgetProvider);
export {
  TextWidget,
  TextWidgetProvider,
  TextWidgetSettings
};
