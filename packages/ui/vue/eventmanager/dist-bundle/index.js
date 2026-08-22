(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.event-manager-ui[data-v-95cfeca1] {\n  padding: 1.5rem;\n  margin-left: 75px;\n  width: 100%;\n  min-height: 100vh;\n  background: var(--color-backgroundPrimary, #f6f6f6);\n}\n.header-section[data-v-95cfeca1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.page-title[data-v-95cfeca1] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: #262824;\n  margin: 0;\n}\n.ice[data-v-95cfeca1] {\n  background: rgb(247 243 243 / 85%);\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.space-y-4[data-v-95cfeca1] > * + * {\n  margin-top: 1rem;\n}\n.space-y-2[data-v-95cfeca1] > * + * {\n  margin-top: 0.5rem;\n}\n.space-y-3[data-v-95cfeca1] > * + * {\n  margin-top: 0.75rem;\n}\n.card-section[data-v-95cfeca1] {\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 12px;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(213, 213, 213, 0.3);\n}\n[data-v-95cfeca1] .card-section.va-card {\n  box-shadow: none !important;\n}\n[data-v-95cfeca1] .card-section .va-card__inner {\n  box-shadow: none !important;\n}\n.section-title[data-v-95cfeca1] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #262824;\n}\n.condition-row[data-v-95cfeca1] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.parameter-wrapper[data-v-95cfeca1] {\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  border: 1px solid rgba(213, 213, 213, 0.4);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.parameter-header[data-v-95cfeca1] {\n  margin-bottom: 0.75rem;\n}\n.parameter-info[data-v-95cfeca1] {\n  font-family: 'Monaco', 'Courier New', monospace;\n  font-size: 0.9rem;\n}\n.parameter-name[data-v-95cfeca1] {\n  /*font-weight: 600;\n  color: #cc9100;*/\n}\n.parameter-optional[data-v-95cfeca1] {\n  color: #666;\n}\n.parameter-separator[data-v-95cfeca1] {\n  margin: 0 0.25rem;\n  color: #666;\n}\n.parameter-type[data-v-95cfeca1] {\n  color: #008080;\n  font-weight: 500;\n}\n\n/* Modal overlay styling to match feature_menustrckt */\n[data-v-95cfeca1] .va-modal__overlay {\n  opacity: 1 !important;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  background: rgb(204 204 204 / 55%) !important;\n}\n[data-v-95cfeca1] .va-modal {\n  z-index: 3000000 !important;\n}\n[data-v-95cfeca1] .va-modal__inner {\n  background: rgb(247 243 243 / 85%) !important;\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n[data-v-95cfeca1] .va-modal__dialog {\n  background: transparent !important;\n}\n[data-v-95cfeca1] .va-modal__container {\n  background: transparent !important;\n}\n\n/* Table header styling */\n.table-header[data-v-95cfeca1] {\n  display: flex;\n  width: 100%;\n  padding: 1rem;\n  border-bottom: 1px solid rgba(213, 213, 213, 0.4);\n  background: rgba(255, 255, 255, 0.4);\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #262824;\n}\n.header-cell[data-v-95cfeca1] {\n  padding: 0 0.5rem;\n  text-align: left;\n}\n.table-content[data-v-95cfeca1] {\n  background: white;\n}\n[data-v-95cfeca1] .table-content .va-data-table {\n  background: transparent;\n}\n[data-v-95cfeca1] .table-content .va-data-table__table {\n  background: white;\n}\n\n/* Event Mapping Grid Layout */\n.event-mapping-grid[data-v-95cfeca1] {\n  display: grid;\n  grid-template-columns: 200px 120px 150px 120px 180px 150px 80px;\n}\n\n/* VaDataTable header styling */\n[data-v-95cfeca1] .va-data-table__table-thead {\n  background: #f9fafb;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n/* Table wrapper - constrain height */\n.table-wrapper[data-v-95cfeca1] {\n  height: calc(100vh - 130px);\n  background: #fff;\n}\n\n/* Actions list in table */\n.actions-list[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.action-item[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.875rem;\n}\n.mapping-id[data-v-95cfeca1] {\n  font-size: 0.8rem;\n  color: #374151;\n  font-family: 'Monaco', 'Courier New', monospace;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n}\n.uid-badge[data-v-95cfeca1] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-family: 'Monaco', 'Courier New', monospace;\n  color: #1e40af;\n  background-color: #dbeafe;\n  padding: 0.1rem 0.4rem;\n  border-radius: 0.25rem;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  margin-left: 0.25rem;\n}\n.action-context[data-v-95cfeca1] {\n  color: #6b7280;\n  font-size: 0.8rem;\n}\n.action-separator[data-v-95cfeca1] {\n  color: #9ca3af;\n}\n.action-name[data-v-95cfeca1] {\n  /*font-weight: 500;\n  color: #cc9100;*/\n}\n\n/* Action tabs styling */\n.actions-tabs[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.action-tabs-header[data-v-95cfeca1] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(213, 213, 213, 0.4);\n}\n.action-tab[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px solid rgba(213, 213, 213, 0.4);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n}\n.action-tab[data-v-95cfeca1]:hover {\n  background: rgba(255, 255, 255, 0.9);\n  border-color: rgba(205, 145, 0, 0.3);\n}\n.action-tab.active[data-v-95cfeca1] {\n  background: rgba(0, 102, 204, 0.1);\n  border-color: #cc9100;\n  color: #cc9100;\n}\n.action-tab-label[data-v-95cfeca1] {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.action-tab-remove[data-v-95cfeca1] {\n  margin-left: 0.25rem;\n}\n.action-editor[data-v-95cfeca1] {\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 8px;\n  border: 1px solid rgba(213, 213, 213, 0.3);\n}\n\n/* New compact layout styles */\n.event-source-grid[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* Action cards list */\n.actions-list-editor[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.action-card[data-v-95cfeca1] {\n  /* border: 1px solid rgba(213, 213, 213, 0.4);*/\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 1px 1px 5px #cccccc69;\n}\n.action-card[data-v-95cfeca1]:hover {\n  border-color: rgba(149, 149, 149, 0.3);\n}\n.action-card.active[data-v-95cfeca1] {\n  border-color: rgba(149, 149, 149, 0.3);\n}\n.action-card-header[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n.action-number[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  /* background: #cc9100; */\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n  border: 1px solid #cc9100;\n  color: #cc9100;\n}\n.action-summary[data-v-95cfeca1] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.action-context-badge[data-v-95cfeca1] {\n  padding: 0.125rem 0.5rem;\n  background: #e5e7eb;\n  color: #4b5563;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.action-name-text[data-v-95cfeca1] {\n  font-weight: 500;\n  /*color: #cc9100;*/\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.action-empty[data-v-95cfeca1] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.action-card-body[data-v-95cfeca1] {\n  padding: 0 1rem 1rem 1rem;\n  border-top: 1px solid rgba(213, 213, 213, 0.3);\n  margin-top: 0;\n}\n.action-settings-row[data-v-95cfeca1] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr;\n  gap: 0.75rem;\n  padding-top: 0.75rem;\n}\n.context-select[data-v-95cfeca1] {\n  min-width: 100px;\n}\n.target-select[data-v-95cfeca1] {\n  min-width: 120px;\n}\n.action-select[data-v-95cfeca1] {\n  min-width: 180px;\n}\n\n/* Inline parameters */\n.action-parameters[data-v-95cfeca1] {\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px dashed rgba(213, 213, 213, 0.5);\n}\n.parameters-title[data-v-95cfeca1] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.5rem;\n}\n.parameters-list[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.parameter-item[data-v-95cfeca1] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  /*background: rgba(248, 250, 252, 0.8);\n  border-radius: 6px;\n  border: 1px solid rgba(213, 213, 213, 0.3);*/\n}\n.parameter-label[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n}\n.parameter-label .parameter-name[data-v-95cfeca1] {\n  font-weight: 600;\n  /*color: #cc9100;*/\n}\n.parameter-label .parameter-optional[data-v-95cfeca1] {\n  color: #9ca3af;\n}\n.parameter-type-badge[data-v-95cfeca1] {\n  margin-left: 0.25rem;\n  padding: 0.0625rem 0.375rem;\n  /* background: #dbeafe; */\n  /* color: #cc9100; */\n  border-radius: 3px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  /* border-color: #d9d9d9; */\n  border: 1px solid #ddd;\n}\n.parameter-input-row[data-v-95cfeca1] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.source-toggle[data-v-95cfeca1] {\n  display: flex;\n  border: 1px solid rgba(213, 213, 213, 0.5);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.toggle-btn[data-v-95cfeca1] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.7rem;\n  background: white;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: #6b7280;\n}\n.toggle-btn[data-v-95cfeca1]:first-child {\n  border-right: 1px solid rgba(213, 213, 213, 0.5);\n}\n.toggle-btn[data-v-95cfeca1]:hover {\n  background: #f3f4f6;\n}\n.toggle-btn.active[data-v-95cfeca1] {\n  background: #6767676e;\n  color: white;\n}\n.parameter-value-input[data-v-95cfeca1] {\n  flex: 1;\n  min-width: 150px;\n}\n";})();
const { defineComponent, ref, computed, inject, onMounted, resolveComponent, createElementBlock, openBlock, createElementVNode, createVNode, withCtx, createTextVNode, toDisplayString, Fragment, renderList, createCommentVNode, createBlock, normalizeClass, withModifiers } = __tsm__.require("vue");
const { Comperator, EVENT_MANAGER, EVENT_REGISTRY, EVENT_ACTIONS_REGISTRY, Condition } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.page");
const { NAVIGATION_REGISTRY_ID, NavigationItem } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.navigation");
const { ROUTE_REGISTRY_ID, RouteDefinition } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.route");
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
  var Reflect;
  (function(Reflect2) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect2);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect2;
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
  })(Reflect || (Reflect = {}));
  return _Reflect;
}
require_Reflect();
const _hoisted_1 = { class: "event-manager-ui" };
const _hoisted_2 = { class: "header-section" };
const _hoisted_3 = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full table-wrapper" };
const _hoisted_4 = { class: "w-full overflow-auto flex flex-col bg-white" };
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = { class: "actions-list" };
const _hoisted_8 = { class: "action-context" };
const _hoisted_9 = ["title"];
const _hoisted_10 = { class: "action-name" };
const _hoisted_11 = { class: "text-xs" };
const _hoisted_12 = { class: "flex gap-2" };
const _hoisted_13 = { class: "space-y-4" };
const _hoisted_14 = { class: "event-source-grid" };
const _hoisted_15 = {
  key: 0,
  class: "space-y-2"
};
const _hoisted_16 = {
  key: 1,
  class: "text-gray-500 italic text-sm"
};
const _hoisted_17 = {
  key: 0,
  class: "actions-list-editor"
};
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "action-card-header" };
const _hoisted_20 = { class: "action-number" };
const _hoisted_21 = { class: "action-summary" };
const _hoisted_22 = { class: "action-context-badge" };
const _hoisted_23 = {
  key: 0,
  class: "action-name-text"
};
const _hoisted_24 = {
  key: 1,
  class: "action-empty"
};
const _hoisted_25 = {
  key: 0,
  class: "action-card-body"
};
const _hoisted_26 = { class: "action-settings-row" };
const _hoisted_27 = {
  key: 0,
  class: "action-parameters"
};
const _hoisted_28 = { class: "parameters-list" };
const _hoisted_29 = { class: "parameter-label" };
const _hoisted_30 = { class: "parameter-name" };
const _hoisted_31 = {
  key: 0,
  class: "parameter-optional"
};
const _hoisted_32 = { class: "parameter-type-badge" };
const _hoisted_33 = { class: "parameter-input-row" };
const _hoisted_34 = { class: "source-toggle" };
const _hoisted_35 = ["onClick"];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = { class: "space-y-4" };
const _hoisted_38 = { class: "event-source-grid" };
const _hoisted_39 = {
  key: 0,
  class: "space-y-2"
};
const _hoisted_40 = {
  key: 1,
  class: "text-gray-500 italic text-sm"
};
const _hoisted_41 = {
  key: 0,
  class: "actions-list-editor"
};
const _hoisted_42 = ["onClick"];
const _hoisted_43 = { class: "action-card-header" };
const _hoisted_44 = { class: "action-number" };
const _hoisted_45 = { class: "action-summary" };
const _hoisted_46 = { class: "action-context-badge" };
const _hoisted_47 = {
  key: 0,
  class: "action-name-text"
};
const _hoisted_48 = {
  key: 1,
  class: "action-empty"
};
const _hoisted_49 = {
  key: 0,
  class: "action-card-body"
};
const _hoisted_50 = { class: "action-settings-row" };
const _hoisted_51 = {
  key: 0,
  class: "action-parameters"
};
const _hoisted_52 = { class: "parameters-list" };
const _hoisted_53 = { class: "parameter-label" };
const _hoisted_54 = { class: "parameter-name" };
const _hoisted_55 = {
  key: 0,
  class: "parameter-optional"
};
const _hoisted_56 = { class: "parameter-type-badge" };
const _hoisted_57 = { class: "parameter-input-row" };
const _hoisted_58 = { class: "source-toggle" };
const _hoisted_59 = ["onClick"];
const _hoisted_60 = ["onClick"];
const _hoisted_61 = { style: { "text-align": "center", "padding": "1rem" } };
const _hoisted_62 = { style: { "display": "flex", "justify-content": "flex-end", "gap": "0.5rem" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventManagerUI",
  setup(__props) {
    let eventManager;
    let eventRegistry;
    let actionsRegistry;
    let pageRegistry;
    const mappings = ref([]);
    const availableEvents = ref([]);
    const availableWidgetTypes = ref([]);
    const availablePages = ref([]);
    const showAddDialog = ref(false);
    const showEditDialog = ref(false);
    const editingMappingId = ref(null);
    const currentActionIndex = ref(0);
    const newMapping = ref({
      context: "widget",
      conditions: [],
      actions: [{
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }]
    });
    const contextOptions = [
      { text: "System", value: "system" },
      { text: "Page", value: "page" },
      { text: "Widget", value: "widget" }
    ];
    const comperatorOptions = [
      { text: "==", value: Comperator.eq },
      { text: "!=", value: Comperator.neq },
      { text: "<", value: Comperator.lt },
      { text: "<=", value: Comperator.lte },
      { text: ">", value: Comperator.gt },
      { text: ">=", value: Comperator.gte }
    ];
    const columns = [
      { key: "id", label: "ID", sortable: true },
      { key: "context", label: "Event Context", sortable: true },
      { key: "eventType", label: "Event Type", sortable: true },
      { key: "actionsCount", label: "Actions", sortable: true },
      { key: "conditions", label: "Conditions" },
      { key: "tableActions", label: "", width: 100 }
    ];
    const currentAction = computed(() => {
      if (!newMapping.value.actions || newMapping.value.actions.length === 0) {
        return null;
      }
      return newMapping.value.actions[currentActionIndex.value];
    });
    const addAction = () => {
      if (!newMapping.value.actions) {
        newMapping.value.actions = [];
      }
      newMapping.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      });
      currentActionIndex.value = newMapping.value.actions.length - 1;
      parameterValueSources.value.clear();
      manualParameterValues.value.clear();
    };
    const removeAction = (index) => {
      if (!newMapping.value.actions) return;
      newMapping.value.actions.splice(index, 1);
      if (currentActionIndex.value >= newMapping.value.actions.length) {
        currentActionIndex.value = Math.max(0, newMapping.value.actions.length - 1);
      }
      parameterValueSources.value.clear();
      manualParameterValues.value.clear();
    };
    const selectAction = (index) => {
      currentActionIndex.value = index;
      parameterValueSources.value.clear();
      manualParameterValues.value.clear();
      const action = newMapping.value.actions?.[index];
      if (action) {
        if (action.payloadMapping) {
          action.payloadMapping.forEach((pm) => {
            parameterValueSources.value.set(pm.argIndex, "payload");
          });
        }
        if (action.actionArgs) {
          action.actionArgs.forEach((arg, idx) => {
            if (arg !== void 0 && !action.payloadMapping?.some((pm) => pm.argIndex === idx)) {
              parameterValueSources.value.set(idx, "manual");
              manualParameterValues.value.set(idx, String(arg));
            }
          });
        }
      }
    };
    const loadMappings = () => {
      mappings.value = eventManager.getAllMappings();
    };
    const loadEvents = () => {
      availableEvents.value = eventRegistry.getAllEvents();
    };
    const loadWidgetTypes = () => {
      availableWidgetTypes.value = actionsRegistry.getWidgetTypes();
      console.log("📋 Loaded widget types:", availableWidgetTypes.value);
    };
    const loadPages = () => {
      availablePages.value = pageRegistry.getAllPageIds();
      console.log("📄 Loaded pages:", availablePages.value);
    };
    const availablePayloadProperties = computed(() => {
      if (!newMapping.value.eventType) return [];
      try {
        const properties = eventRegistry.extractPayloadPropertiesForEvent(newMapping.value.eventType);
        console.log("📦 Payload properties from Ecore model:", properties);
        return properties.map((prop) => ({
          text: `${prop.name}: ${prop.type}${prop.optional ? "?" : ""}`,
          value: prop.name
        }));
      } catch (e) {
        console.error("❌ Error extracting properties from Ecore:", e);
        return [];
      }
    });
    const availableActions = computed(() => {
      if (!currentAction.value?.targetContext) return [];
      const targetContext = currentAction.value.targetContext;
      const actions = [];
      for (const widgetType of availableWidgetTypes.value) {
        const hasExplicitContext = widgetType.context !== void 0;
        const typeContext = widgetType.context || "widget";
        let matches = false;
        if (hasExplicitContext) {
          matches = typeContext === targetContext;
        } else {
          matches = targetContext === "system" && widgetType.widgetType.includes("System") || targetContext === "page" && widgetType.widgetType.includes("Page") || targetContext === "widget" && !widgetType.widgetType.includes("System") && !widgetType.widgetType.includes("Page");
        }
        if (matches) {
          for (const action of widgetType.actions) {
            const prefix = targetContext === "widget" ? `${widgetType.widgetType}.` : "";
            actions.push({
              text: `${prefix}${action.methodName}`,
              value: action.methodName,
              parameters: action.parameters,
              widgetType: widgetType.widgetType
            });
          }
        }
      }
      return actions;
    });
    const availableInstances = computed(() => {
      if (!currentAction.value?.actionName) return [];
      const selectedAction = availableActions.value.find((a) => a.value === currentAction.value?.actionName);
      if (!selectedAction?.widgetType) return [];
      const instances = actionsRegistry?.getRegisteredInstances(selectedAction.widgetType) || [];
      return [
        { text: "All instances", value: "" },
        ...instances.map((inst) => ({
          text: `${inst.instanceId} (${inst.widgetType})`,
          value: inst.instanceId
        }))
      ];
    });
    const selectedActionParameters = computed(() => {
      if (!currentAction.value?.actionName || !currentAction.value?.targetContext) return [];
      const targetContext = currentAction.value.targetContext;
      const searchWidgetTypes = availableWidgetTypes.value.filter((wt) => {
        const hasExplicitContext = wt.context !== void 0;
        const typeContext = wt.context || "widget";
        if (hasExplicitContext) {
          return typeContext === targetContext;
        } else {
          return targetContext === "system" && wt.widgetType.includes("System") || targetContext === "page" && wt.widgetType.includes("Page") || targetContext === "widget" && !wt.widgetType.includes("System") && !wt.widgetType.includes("Page");
        }
      });
      for (const widgetType of searchWidgetTypes) {
        const action = widgetType.actions.find((a) => a.methodName === currentAction.value?.actionName);
        console.log("🎯 Looking for action:", currentAction.value?.actionName, "in", widgetType.widgetType);
        console.log("   Found action:", action);
        if (action && action.parameters) {
          console.log("   Action parameters:", action.parameters);
          return action.parameters.map((param, index) => {
            const match = param.match(/^(\w+)(\?)?:\s*(.+)$/);
            console.log("   Parsing param:", param, "Match:", match);
            if (match) {
              return {
                name: match[1],
                optional: !!match[2],
                type: match[3],
                index
              };
            }
            return {
              name: `arg${index}`,
              optional: false,
              type: "any",
              index
            };
          });
        }
      }
      return [];
    });
    const getMappingActions = (mapping) => {
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
    };
    const addMapping = () => {
      if (!newMapping.value.eventType) {
        return;
      }
      const validActions = newMapping.value.actions?.filter((a) => a.actionName) || [];
      if (validActions.length === 0) {
        return;
      }
      const mapping = {
        id: editingMappingId.value || `mapping-${Date.now()}`,
        context: newMapping.value.context,
        contextId: newMapping.value.contextId,
        eventType: newMapping.value.eventType,
        conditions: newMapping.value.conditions || [],
        actions: validActions
      };
      if (editingMappingId.value) {
        eventManager.unregisterMapping(editingMappingId.value);
      }
      eventManager.registerMapping(mapping);
      loadMappings();
      resetForm();
      showAddDialog.value = false;
      showEditDialog.value = false;
      editingMappingId.value = null;
    };
    const editMapping = (mapping) => {
      editingMappingId.value = mapping.id;
      const actions = getMappingActions(mapping);
      newMapping.value = {
        context: mapping.context,
        contextId: mapping.contextId,
        eventType: mapping.eventType,
        conditions: mapping.conditions || [],
        actions: actions.length > 0 ? actions : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      };
      currentActionIndex.value = 0;
      parameterValueSources.value.clear();
      manualParameterValues.value.clear();
      const firstAction = newMapping.value.actions?.[0];
      if (firstAction) {
        if (firstAction.payloadMapping) {
          firstAction.payloadMapping.forEach((pm) => {
            parameterValueSources.value.set(pm.argIndex, "payload");
          });
        }
        if (firstAction.actionArgs) {
          firstAction.actionArgs.forEach((arg, index) => {
            if (arg !== void 0 && !firstAction.payloadMapping?.some((pm) => pm.argIndex === index)) {
              parameterValueSources.value.set(index, "manual");
              manualParameterValues.value.set(index, String(arg));
            }
          });
        }
      }
      showEditDialog.value = true;
    };
    const showDeleteConfirm = ref(false);
    const mappingToDelete = ref(null);
    const removeMapping = (mappingId) => {
      mappingToDelete.value = mappingId;
      showDeleteConfirm.value = true;
    };
    const confirmRemoveMapping = () => {
      if (mappingToDelete.value) {
        eventManager.unregisterMapping(mappingToDelete.value);
        loadMappings();
      }
      showDeleteConfirm.value = false;
      mappingToDelete.value = null;
    };
    const resetForm = () => {
      newMapping.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      };
      editingMappingId.value = null;
      currentActionIndex.value = 0;
      parameterValueSources.value.clear();
      manualParameterValues.value.clear();
    };
    const addCondition = () => {
      if (!newMapping.value.conditions) {
        newMapping.value.conditions = [];
      }
      newMapping.value.conditions.push(new Condition());
    };
    const removeCondition = (index) => {
      newMapping.value.conditions?.splice(index, 1);
    };
    const parameterValueSources = ref(/* @__PURE__ */ new Map());
    const manualParameterValues = ref(/* @__PURE__ */ new Map());
    const updateParameterMapping = (paramIndex, payloadPath) => {
      const action = currentAction.value;
      if (!action) return;
      if (!action.payloadMapping) {
        action.payloadMapping = [];
      }
      action.payloadMapping = action.payloadMapping.filter(
        (pm) => pm.argIndex !== paramIndex
      );
      if (payloadPath) {
        action.payloadMapping.push({
          payloadPath,
          argIndex: paramIndex
        });
      }
    };
    const updateManualParameterValue = (paramIndex, value) => {
      manualParameterValues.value.set(paramIndex, value);
      const action = currentAction.value;
      if (!action) return;
      if (!action.actionArgs) {
        action.actionArgs = [];
      }
      while (action.actionArgs.length <= paramIndex) {
        action.actionArgs.push(void 0);
      }
      const param = selectedActionParameters.value.find((p) => p.index === paramIndex);
      if (param) {
        if (param.type === "number" || param.type.includes("number")) {
          action.actionArgs[paramIndex] = parseFloat(value) || 0;
        } else if (param.type === "boolean") {
          action.actionArgs[paramIndex] = value === "true";
        } else {
          action.actionArgs[paramIndex] = value;
        }
      }
    };
    const getParameterValueSource = (paramIndex) => {
      return parameterValueSources.value.get(paramIndex) || "payload";
    };
    const setParameterValueSource = (paramIndex, source) => {
      parameterValueSources.value.set(paramIndex, source);
      const action = currentAction.value;
      if (!action) return;
      if (source === "manual") {
        if (action.payloadMapping) {
          action.payloadMapping = action.payloadMapping.filter(
            (pm) => pm.argIndex !== paramIndex
          );
        }
      } else {
        manualParameterValues.value.delete(paramIndex);
        if (action.actionArgs && action.actionArgs[paramIndex] !== void 0) {
          action.actionArgs[paramIndex] = void 0;
        }
      }
    };
    const getPayloadPathForParameter = (paramIndex) => {
      const action = currentAction.value;
      if (!action?.payloadMapping) return "";
      const mapping = action.payloadMapping.find((pm) => pm.argIndex === paramIndex);
      return mapping?.payloadPath || "";
    };
    const getManualValueForParameter = (paramIndex) => {
      return manualParameterValues.value.get(paramIndex) || "";
    };
    const formatConditions = (conditions) => {
      if (!conditions || conditions.length === 0) return "-";
      return conditions.map((c) => `${c.prop} ${c.comperator} ${c.value}`).join(" AND ");
    };
    const injectedEventManager = inject(EVENT_MANAGER);
    const injectedEventRegistry = inject(EVENT_REGISTRY);
    const injectedActionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const injectedPageRegistry = inject(identifier);
    onMounted(() => {
      eventManager = injectedEventManager;
      eventRegistry = injectedEventRegistry;
      actionsRegistry = injectedActionsRegistry;
      pageRegistry = injectedPageRegistry;
      loadMappings();
      loadEvents();
      loadWidgetTypes();
      loadPages();
    });
    return (_ctx, _cache) => {
      const _component_VaButton = resolveComponent("VaButton");
      const _component_VaDataTable = resolveComponent("VaDataTable");
      const _component_VaCardTitle = resolveComponent("VaCardTitle");
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaCardContent = resolveComponent("VaCardContent");
      const _component_VaCard = resolveComponent("VaCard");
      const _component_VaModal = resolveComponent("VaModal");
      const _component_VaIcon = resolveComponent("VaIcon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _cache[15] || (_cache[15] = createElementVNode("h2", { class: "page-title" }, "Event Manager", -1)),
          createVNode(_component_VaButton, {
            onClick: _cache[0] || (_cache[0] = ($event) => showAddDialog.value = true),
            icon: "add"
          }, {
            default: withCtx(() => [..._cache[14] || (_cache[14] = [
              createTextVNode("Add Mapping", -1)
            ])]),
            _: 1
          })
        ]),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            createVNode(_component_VaDataTable, {
              items: mappings.value,
              columns,
              hoverable: true,
              class: "w-full"
            }, {
              "cell(id)": withCtx(({ rowData }) => [
                createElementVNode("span", {
                  class: "mapping-id",
                  title: rowData.id
                }, toDisplayString(rowData.id), 9, _hoisted_5)
              ]),
              "cell(context)": withCtx(({ rowData }) => [
                createElementVNode("span", null, toDisplayString(rowData.context), 1),
                rowData.contextId ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "uid-badge",
                  title: rowData.contextId
                }, toDisplayString(rowData.contextId), 9, _hoisted_6)) : createCommentVNode("", true)
              ]),
              "cell(actionsCount)": withCtx(({ rowData }) => [
                createElementVNode("div", _hoisted_7, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getMappingActions(rowData), (action, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: idx,
                      class: "action-item"
                    }, [
                      createElementVNode("span", _hoisted_8, toDisplayString(action.targetContext), 1),
                      action.targetContextId ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: "uid-badge",
                        title: action.targetContextId
                      }, toDisplayString(action.targetContextId), 9, _hoisted_9)) : createCommentVNode("", true),
                      _cache[16] || (_cache[16] = createElementVNode("span", { class: "action-separator" }, "→", -1)),
                      createElementVNode("span", _hoisted_10, toDisplayString(action.actionName), 1)
                    ]);
                  }), 128))
                ])
              ]),
              "cell(conditions)": withCtx(({ rowData }) => [
                createElementVNode("span", _hoisted_11, toDisplayString(formatConditions(rowData.conditions)), 1)
              ]),
              "cell(tableActions)": withCtx(({ rowData }) => [
                createElementVNode("div", _hoisted_12, [
                  createVNode(_component_VaButton, {
                    onClick: ($event) => editMapping(rowData),
                    preset: "plain",
                    icon: "edit",
                    size: "small"
                  }, null, 8, ["onClick"]),
                  createVNode(_component_VaButton, {
                    onClick: ($event) => removeMapping(rowData.id),
                    preset: "plain",
                    icon: "delete",
                    color: "danger",
                    size: "small"
                  }, null, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["items"])
          ])
        ]),
        createVNode(_component_VaModal, {
          modelValue: showAddDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showAddDialog.value = $event),
          title: "Add Event-Action Mapping",
          size: "large",
          class: "event-manager-ui_modal",
          onOk: addMapping,
          onCancel: resetForm,
          "ok-text": "Add",
          "cancel-text": "Cancel"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_13, [
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "section-title" }, {
                    default: withCtx(() => [..._cache[17] || (_cache[17] = [
                      createTextVNode("1. Event Source", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      createElementVNode("div", _hoisted_14, [
                        createVNode(_component_VaSelect, {
                          modelValue: newMapping.value.context,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newMapping.value.context = $event),
                          label: "Context",
                          options: contextOptions,
                          "text-by": "text",
                          "value-by": "value"
                        }, null, 8, ["modelValue"]),
                        newMapping.value.context === "page" ? (openBlock(), createBlock(_component_VaSelect, {
                          key: 0,
                          modelValue: newMapping.value.contextId,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => newMapping.value.contextId = $event),
                          label: "Page ID",
                          options: [{ text: "Any page", value: "" }, ...availablePages.value.map((p) => ({ text: p, value: p }))],
                          "text-by": "text",
                          "value-by": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "options"])) : newMapping.value.context === "widget" ? (openBlock(), createBlock(_component_VaInput, {
                          key: 1,
                          modelValue: newMapping.value.contextId,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newMapping.value.contextId = $event),
                          label: "Widget ID (optional)",
                          placeholder: "e.g., specific widgetId",
                          clearable: ""
                        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                        createVNode(_component_VaSelect, {
                          modelValue: newMapping.value.eventType,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newMapping.value.eventType = $event),
                          label: "Event Type",
                          options: availableEvents.value,
                          "text-by": "type",
                          "value-by": "type"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "flex justify-between items-center" }, {
                    default: withCtx(() => [
                      _cache[19] || (_cache[19] = createElementVNode("span", { class: "section-title" }, "2. Conditions", -1)),
                      createVNode(_component_VaButton, {
                        onClick: addCondition,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: withCtx(() => [..._cache[18] || (_cache[18] = [
                          createTextVNode("Add", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      newMapping.value.conditions && newMapping.value.conditions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(newMapping.value.conditions, (condition, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: index,
                            class: "condition-row"
                          }, [
                            createVNode(_component_VaSelect, {
                              modelValue: condition.prop,
                              "onUpdate:modelValue": ($event) => condition.prop = $event,
                              placeholder: "Property",
                              options: availablePayloadProperties.value,
                              "text-by": "text",
                              "value-by": "value",
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                            createVNode(_component_VaSelect, {
                              modelValue: condition.comperator,
                              "onUpdate:modelValue": ($event) => condition.comperator = $event,
                              options: comperatorOptions,
                              "text-by": "text",
                              "value-by": "value",
                              class: "w-20"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_VaInput, {
                              modelValue: condition.value,
                              "onUpdate:modelValue": ($event) => condition.value = $event,
                              placeholder: "Value",
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_VaButton, {
                              onClick: ($event) => removeCondition(index),
                              preset: "plain",
                              icon: "delete",
                              color: "danger",
                              size: "small"
                            }, null, 8, ["onClick"])
                          ]);
                        }), 128))
                      ])) : (openBlock(), createElementBlock("div", _hoisted_16, " No conditions - action will always execute "))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "flex justify-between items-center" }, {
                    default: withCtx(() => [
                      _cache[21] || (_cache[21] = createElementVNode("span", { class: "section-title" }, "3. Actions", -1)),
                      createVNode(_component_VaButton, {
                        onClick: addAction,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: withCtx(() => [..._cache[20] || (_cache[20] = [
                          createTextVNode("Add Action", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      newMapping.value.actions && newMapping.value.actions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(newMapping.value.actions, (action, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: normalizeClass(["action-card", { active: currentActionIndex.value === idx }]),
                            onClick: ($event) => selectAction(idx)
                          }, [
                            createElementVNode("div", _hoisted_19, [
                              createElementVNode("span", _hoisted_20, toDisplayString(idx + 1), 1),
                              createElementVNode("span", _hoisted_21, [
                                createElementVNode("span", _hoisted_22, toDisplayString(action.targetContext), 1),
                                action.actionName ? (openBlock(), createElementBlock("span", _hoisted_23, toDisplayString(action.actionName), 1)) : (openBlock(), createElementBlock("span", _hoisted_24, "(select action)"))
                              ]),
                              newMapping.value.actions.length > 1 ? (openBlock(), createBlock(_component_VaButton, {
                                key: 0,
                                onClick: withModifiers(($event) => removeAction(idx), ["stop"]),
                                preset: "plain",
                                icon: "close",
                                color: "danger",
                                size: "small"
                              }, null, 8, ["onClick"])) : createCommentVNode("", true)
                            ]),
                            currentActionIndex.value === idx ? (openBlock(), createElementBlock("div", _hoisted_25, [
                              createElementVNode("div", _hoisted_26, [
                                createVNode(_component_VaSelect, {
                                  modelValue: action.targetContext,
                                  "onUpdate:modelValue": ($event) => action.targetContext = $event,
                                  label: "Context",
                                  options: contextOptions,
                                  "text-by": "text",
                                  "value-by": "value",
                                  class: "context-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                action.targetContext === "page" ? (openBlock(), createBlock(_component_VaSelect, {
                                  key: 0,
                                  modelValue: action.targetContextId,
                                  "onUpdate:modelValue": ($event) => action.targetContextId = $event,
                                  label: "Target Page",
                                  options: [{ text: "Any", value: "" }, ...availablePages.value.map((p) => ({ text: p, value: p }))],
                                  "text-by": "text",
                                  "value-by": "value",
                                  clearable: "",
                                  class: "target-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : action.targetContext === "widget" || action.targetContext === "system" ? (openBlock(), createBlock(_component_VaSelect, {
                                  key: 1,
                                  modelValue: action.targetContextId,
                                  "onUpdate:modelValue": ($event) => action.targetContextId = $event,
                                  label: "Target Instance",
                                  options: availableInstances.value,
                                  "text-by": "text",
                                  "value-by": "value",
                                  clearable: "",
                                  class: "target-select",
                                  placeholder: availableInstances.value.length > 1 ? "Select instance" : "All instances"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : createCommentVNode("", true),
                                createVNode(_component_VaSelect, {
                                  modelValue: action.actionName,
                                  "onUpdate:modelValue": ($event) => action.actionName = $event,
                                  label: "Action",
                                  options: availableActions.value,
                                  "text-by": "text",
                                  "value-by": "value",
                                  class: "action-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              selectedActionParameters.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
                                _cache[22] || (_cache[22] = createElementVNode("div", { class: "parameters-title" }, "Parameters", -1)),
                                createElementVNode("div", _hoisted_28, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedActionParameters.value, (param) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: param.index,
                                      class: "parameter-item"
                                    }, [
                                      createElementVNode("div", _hoisted_29, [
                                        createElementVNode("span", _hoisted_30, toDisplayString(param.name), 1),
                                        param.optional ? (openBlock(), createElementBlock("span", _hoisted_31, "?")) : createCommentVNode("", true),
                                        createElementVNode("span", _hoisted_32, toDisplayString(param.type), 1)
                                      ]),
                                      createElementVNode("div", _hoisted_33, [
                                        createElementVNode("div", _hoisted_34, [
                                          createElementVNode("button", {
                                            class: normalizeClass(["toggle-btn", { active: getParameterValueSource(param.index) === "payload" }]),
                                            onClick: withModifiers(($event) => setParameterValueSource(param.index, "payload"), ["stop"]),
                                            type: "button"
                                          }, "Payload", 10, _hoisted_35),
                                          createElementVNode("button", {
                                            class: normalizeClass(["toggle-btn", { active: getParameterValueSource(param.index) === "manual" }]),
                                            onClick: withModifiers(($event) => setParameterValueSource(param.index, "manual"), ["stop"]),
                                            type: "button"
                                          }, "Manual", 10, _hoisted_36)
                                        ]),
                                        getParameterValueSource(param.index) === "payload" ? (openBlock(), createBlock(_component_VaSelect, {
                                          key: 0,
                                          "model-value": getPayloadPathForParameter(param.index),
                                          "onUpdate:modelValue": ($event) => updateParameterMapping(param.index, $event),
                                          placeholder: param.optional ? "(optional)" : "Select property",
                                          options: availablePayloadProperties.value,
                                          "text-by": "text",
                                          "value-by": "value",
                                          clearable: "",
                                          class: "parameter-value-input"
                                        }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (openBlock(), createBlock(_component_VaInput, {
                                          key: 1,
                                          "model-value": getManualValueForParameter(param.index),
                                          "onUpdate:modelValue": ($event) => updateManualParameterValue(param.index, $event),
                                          placeholder: `Enter ${param.type}`,
                                          class: "parameter-value-input"
                                        }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ], 10, _hoisted_18);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_VaModal, {
          modelValue: showEditDialog.value,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => showEditDialog.value = $event),
          title: "Edit Event-Action Mapping",
          size: "large",
          onOk: addMapping,
          onCancel: resetForm,
          "ok-text": "Save",
          "cancel-text": "Cancel"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_37, [
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "section-title" }, {
                    default: withCtx(() => [..._cache[23] || (_cache[23] = [
                      createTextVNode("1. Event Source", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      createElementVNode("div", _hoisted_38, [
                        createVNode(_component_VaSelect, {
                          modelValue: newMapping.value.context,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => newMapping.value.context = $event),
                          label: "Context",
                          options: contextOptions,
                          "text-by": "text",
                          "value-by": "value"
                        }, null, 8, ["modelValue"]),
                        newMapping.value.context === "page" ? (openBlock(), createBlock(_component_VaSelect, {
                          key: 0,
                          modelValue: newMapping.value.contextId,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newMapping.value.contextId = $event),
                          label: "Page ID",
                          options: [{ text: "Any page", value: "" }, ...availablePages.value.map((p) => ({ text: p, value: p }))],
                          "text-by": "text",
                          "value-by": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "options"])) : newMapping.value.context === "widget" ? (openBlock(), createBlock(_component_VaInput, {
                          key: 1,
                          modelValue: newMapping.value.contextId,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => newMapping.value.contextId = $event),
                          label: "Widget ID (optional)",
                          placeholder: "e.g., specific widgetId",
                          clearable: ""
                        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                        createVNode(_component_VaSelect, {
                          modelValue: newMapping.value.eventType,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => newMapping.value.eventType = $event),
                          label: "Event Type",
                          options: availableEvents.value,
                          "text-by": "type",
                          "value-by": "type"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "flex justify-between items-center" }, {
                    default: withCtx(() => [
                      _cache[25] || (_cache[25] = createElementVNode("span", { class: "section-title" }, "2. Conditions", -1)),
                      createVNode(_component_VaButton, {
                        onClick: addCondition,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: withCtx(() => [..._cache[24] || (_cache[24] = [
                          createTextVNode("Add", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      newMapping.value.conditions && newMapping.value.conditions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_39, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(newMapping.value.conditions, (condition, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: index,
                            class: "condition-row"
                          }, [
                            createVNode(_component_VaSelect, {
                              modelValue: condition.prop,
                              "onUpdate:modelValue": ($event) => condition.prop = $event,
                              placeholder: "Property",
                              options: availablePayloadProperties.value,
                              "text-by": "text",
                              "value-by": "value",
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                            createVNode(_component_VaSelect, {
                              modelValue: condition.comperator,
                              "onUpdate:modelValue": ($event) => condition.comperator = $event,
                              options: comperatorOptions,
                              "text-by": "text",
                              "value-by": "value",
                              class: "w-20"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_VaInput, {
                              modelValue: condition.value,
                              "onUpdate:modelValue": ($event) => condition.value = $event,
                              placeholder: "Value",
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_VaButton, {
                              onClick: ($event) => removeCondition(index),
                              preset: "plain",
                              icon: "delete",
                              color: "danger",
                              size: "small"
                            }, null, 8, ["onClick"])
                          ]);
                        }), 128))
                      ])) : (openBlock(), createElementBlock("div", _hoisted_40, " No conditions - action will always execute "))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VaCard, { class: "card-section" }, {
                default: withCtx(() => [
                  createVNode(_component_VaCardTitle, { class: "flex justify-between items-center" }, {
                    default: withCtx(() => [
                      _cache[27] || (_cache[27] = createElementVNode("span", { class: "section-title" }, "3. Actions", -1)),
                      createVNode(_component_VaButton, {
                        onClick: addAction,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: withCtx(() => [..._cache[26] || (_cache[26] = [
                          createTextVNode("Add Action", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VaCardContent, null, {
                    default: withCtx(() => [
                      newMapping.value.actions && newMapping.value.actions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_41, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(newMapping.value.actions, (action, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: normalizeClass(["action-card", { active: currentActionIndex.value === idx }]),
                            onClick: ($event) => selectAction(idx)
                          }, [
                            createElementVNode("div", _hoisted_43, [
                              createElementVNode("span", _hoisted_44, toDisplayString(idx + 1), 1),
                              createElementVNode("span", _hoisted_45, [
                                createElementVNode("span", _hoisted_46, toDisplayString(action.targetContext), 1),
                                action.actionName ? (openBlock(), createElementBlock("span", _hoisted_47, toDisplayString(action.actionName), 1)) : (openBlock(), createElementBlock("span", _hoisted_48, "(select action)"))
                              ]),
                              newMapping.value.actions.length > 1 ? (openBlock(), createBlock(_component_VaButton, {
                                key: 0,
                                onClick: withModifiers(($event) => removeAction(idx), ["stop"]),
                                preset: "plain",
                                icon: "close",
                                color: "danger",
                                size: "small"
                              }, null, 8, ["onClick"])) : createCommentVNode("", true)
                            ]),
                            currentActionIndex.value === idx ? (openBlock(), createElementBlock("div", _hoisted_49, [
                              createElementVNode("div", _hoisted_50, [
                                createVNode(_component_VaSelect, {
                                  modelValue: action.targetContext,
                                  "onUpdate:modelValue": ($event) => action.targetContext = $event,
                                  label: "Context",
                                  options: contextOptions,
                                  "text-by": "text",
                                  "value-by": "value",
                                  class: "context-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                action.targetContext === "page" ? (openBlock(), createBlock(_component_VaSelect, {
                                  key: 0,
                                  modelValue: action.targetContextId,
                                  "onUpdate:modelValue": ($event) => action.targetContextId = $event,
                                  label: "Target Page",
                                  options: [{ text: "Any", value: "" }, ...availablePages.value.map((p) => ({ text: p, value: p }))],
                                  "text-by": "text",
                                  "value-by": "value",
                                  clearable: "",
                                  class: "target-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : action.targetContext === "widget" || action.targetContext === "system" ? (openBlock(), createBlock(_component_VaSelect, {
                                  key: 1,
                                  modelValue: action.targetContextId,
                                  "onUpdate:modelValue": ($event) => action.targetContextId = $event,
                                  label: "Target Instance",
                                  options: availableInstances.value,
                                  "text-by": "text",
                                  "value-by": "value",
                                  clearable: "",
                                  class: "target-select",
                                  placeholder: availableInstances.value.length > 1 ? "Select instance" : "All instances"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : createCommentVNode("", true),
                                createVNode(_component_VaSelect, {
                                  modelValue: action.actionName,
                                  "onUpdate:modelValue": ($event) => action.actionName = $event,
                                  label: "Action",
                                  options: availableActions.value,
                                  "text-by": "text",
                                  "value-by": "value",
                                  class: "action-select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              selectedActionParameters.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_51, [
                                _cache[28] || (_cache[28] = createElementVNode("div", { class: "parameters-title" }, "Parameters", -1)),
                                createElementVNode("div", _hoisted_52, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedActionParameters.value, (param) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: param.index,
                                      class: "parameter-item"
                                    }, [
                                      createElementVNode("div", _hoisted_53, [
                                        createElementVNode("span", _hoisted_54, toDisplayString(param.name), 1),
                                        param.optional ? (openBlock(), createElementBlock("span", _hoisted_55, "?")) : createCommentVNode("", true),
                                        createElementVNode("span", _hoisted_56, toDisplayString(param.type), 1)
                                      ]),
                                      createElementVNode("div", _hoisted_57, [
                                        createElementVNode("div", _hoisted_58, [
                                          createElementVNode("button", {
                                            class: normalizeClass(["toggle-btn", { active: getParameterValueSource(param.index) === "payload" }]),
                                            onClick: withModifiers(($event) => setParameterValueSource(param.index, "payload"), ["stop"]),
                                            type: "button"
                                          }, "Payload", 10, _hoisted_59),
                                          createElementVNode("button", {
                                            class: normalizeClass(["toggle-btn", { active: getParameterValueSource(param.index) === "manual" }]),
                                            onClick: withModifiers(($event) => setParameterValueSource(param.index, "manual"), ["stop"]),
                                            type: "button"
                                          }, "Manual", 10, _hoisted_60)
                                        ]),
                                        getParameterValueSource(param.index) === "payload" ? (openBlock(), createBlock(_component_VaSelect, {
                                          key: 0,
                                          "model-value": getPayloadPathForParameter(param.index),
                                          "onUpdate:modelValue": ($event) => updateParameterMapping(param.index, $event),
                                          placeholder: param.optional ? "(optional)" : "Select property",
                                          options: availablePayloadProperties.value,
                                          "text-by": "text",
                                          "value-by": "value",
                                          clearable: "",
                                          class: "parameter-value-input"
                                        }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (openBlock(), createBlock(_component_VaInput, {
                                          key: 1,
                                          "model-value": getManualValueForParameter(param.index),
                                          "onUpdate:modelValue": ($event) => updateManualParameterValue(param.index, $event),
                                          placeholder: `Enter ${param.type}`,
                                          class: "parameter-value-input"
                                        }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ], 10, _hoisted_42);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_VaModal, {
          modelValue: showDeleteConfirm.value,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => showDeleteConfirm.value = $event),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: withCtx(() => [
            createElementVNode("div", _hoisted_62, [
              createVNode(_component_VaButton, {
                preset: "secondary",
                onClick: _cache[11] || (_cache[11] = ($event) => {
                  showDeleteConfirm.value = false;
                  mappingToDelete.value = null;
                })
              }, {
                default: withCtx(() => [..._cache[31] || (_cache[31] = [
                  createTextVNode(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_VaButton, {
                color: "danger",
                icon: "delete",
                onClick: _cache[12] || (_cache[12] = ($event) => confirmRemoveMapping())
              }, {
                default: withCtx(() => [..._cache[32] || (_cache[32] = [
                  createTextVNode(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_61, [
              createVNode(_component_VaIcon, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              _cache[29] || (_cache[29] = createElementVNode("h5", { style: { "margin": "0.5rem 0" } }, "Event-Mapping löschen", -1)),
              _cache[30] || (_cache[30] = createElementVNode("p", null, "Möchtest du dieses Event-Mapping wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
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
const EventManagerUI = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95cfeca1"]]);
const ROUTE_NAME = "events";
const NAV_ID = "events";
function activate$1({ services }) {
  const routeRegistry = services.getRequired(ROUTE_REGISTRY_ID);
  const eventRoute = new RouteDefinition();
  eventRoute.path = "/events";
  eventRoute.name = ROUTE_NAME;
  eventRoute.component = EventManagerUI;
  routeRegistry.registerRoute(eventRoute);
  const navRegistry = services.getRequired(NAVIGATION_REGISTRY_ID);
  const eventManagerNav = new NavigationItem();
  eventManagerNav.id = NAV_ID;
  eventManagerNav.label = "Event Manager";
  eventManagerNav.icon = "event";
  eventManagerNav.route = "/events";
  eventManagerNav.routeName = ROUTE_NAME;
  eventManagerNav.order = 15;
  eventManagerNav.visible = true;
  navRegistry.registerNavigationItem(eventManagerNav);
}
function deactivate$1({ services }) {
  services.getRequired(ROUTE_REGISTRY_ID).unregisterRoute(ROUTE_NAME);
  services.getRequired(NAVIGATION_REGISTRY_ID).unregisterNavigationItem(NAV_ID);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.eventmanager";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.eventmanager");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  EventManagerUI,
  activate,
  deactivate
};
