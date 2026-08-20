(function(){var i="ui.vue.composer.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.folder-row[data-v-876827aa] {\n  background-color: #f8f9fa;\n  font-weight: 500;\n}\n.expandable[data-v-876827aa] {\n  cursor: pointer;\n}\n.expandable[data-v-876827aa]:hover {\n  background-color: #f8f9fa;\n}\n.expanded[data-v-876827aa] {\n  background-color: #e3f2fd;\n}\n.expand-icon[data-v-876827aa] {\n  width: 16px;\n  margin-right: 8px;\n  font-size: 12px;\n}\n.folder-cell[data-v-876827aa] {\n  color: #6c757d;\n  text-align: right;\n  font-style: italic;\n}\n.child-count[data-v-876827aa] {\n  margin-left: 8px;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.selection-cell[data-v-876827aa] {\n  width: 40px;\n  text-align: center;\n  padding: 8px 4px;\n}\n.selected[data-v-876827aa] {\n  background-color: #e3f2fd;\n}\n\n.va-table[data-v-19bad148] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #ddd;\n}\n.kpi-table th[data-v-19bad148] {\n  background-color: #f5f5f5;\n  padding: 12px;\n  text-align: left;\n  border-bottom: 2px solid #ddd;\n  font-weight: 600;\n}\n.kpi-table td[data-v-19bad148] {\n  padding: 8px 12px;\n  border-bottom: 1px solid #eee;\n}\n.kpi-table tr[data-v-19bad148]:hover {\n  background-color: #f9f9f9;\n}\n.selection-header[data-v-19bad148] {\n  width: 40px;\n  text-align: center;\n}\n";})();
const { DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
const { defineComponent, ref, computed, createElementBlock, openBlock, createElementVNode, createCommentVNode, Fragment, renderList, createBlock, resolveComponent, normalizeClass, withModifiers, normalizeStyle, toDisplayString, createVNode, inject, unref, watch, shallowRef } = __tsm__.require("vue");
const { useTemporaryStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
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
    const statusVisualType = inject("statusVisualType", "badge");
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
    const trendVisualType = inject("trendVisualType", "badge");
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const KpiTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$1$1, [["__scopeId", "data-v-876827aa"]]);
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
const KpiTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-19bad148"]]);
const _hoisted_1 = {
  key: 0,
  style: { "overflow": "hidden", "height": "100%", "width": "100%" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const data = ref(null);
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    watch(tempStore, async () => {
      console.log("tempStore changed", tempStore.value);
      data.value = await tempStore.value.getData("DataTable");
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value && data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(KpiTable), { tableData: data.value }, null, 8, ["tableData"])
      ])) : createCommentVNode("", true);
    };
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var ReflectLite = {};
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
var hasRequiredReflectLite;
function requireReflectLite() {
  if (hasRequiredReflectLite) return ReflectLite;
  hasRequiredReflectLite = 1;
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
      function sloppyModeThis() {
        throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
      }
    })(function(exporter, root) {
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
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
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
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
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O2, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P);
        if (hasOwn)
          return true;
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O2, P) {
        var provider = GetMetadataProvider(
          O2,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O2, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O2, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P);
        if (hasOwn)
          return OrdinaryGetOwnMetadata(MetadataKey, O2, P);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O2, P) {
        var provider = GetMetadataProvider(
          O2,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O2, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P) {
        var provider = GetMetadataProvider(
          O2,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P);
      }
      function OrdinaryMetadataKeys(O2, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O2, P);
        var parent = OrdinaryGetPrototypeOf(O2);
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
      function OrdinaryOwnMetadataKeys(O2, P) {
        var provider = GetMetadataProvider(
          O2,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O2, P);
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
      function OrdinaryToPrimitive(O2, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O2.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O2);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O2.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O2);
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
        var f2 = iterator["return"];
        if (f2)
          f2.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O2) {
        var proto = Object.getPrototypeOf(O2);
        if (typeof O2 !== "function" || O2 === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O2.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O2)
          return proto;
        return constructor;
      }
      function fail(e) {
        throw e;
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
        function getProviderNoCache(O2, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O2, P))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O2, P))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O2, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O2, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O2, P) {
          var providerMap = targetProviderMap.get(O2);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O2, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
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
        function setProvider(O2, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O2, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O2);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
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
          isProviderFor: function(O2, P) {
            var targetMetadata = metadata2.get(O2);
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
        function GetOrCreateMetadataMap(O2, P, Create) {
          var targetMetadata = metadata2.get(O2);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O2, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O2, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O2);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O2, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O2, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O2, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O2, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O2,
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
        function OrdinaryDeleteMetadata(MetadataKey, O2, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O2);
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
          isProviderFor: function(O2, P) {
            var metadataPropertySet = metadataOwner.get(O2);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O2, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O2, metadataPropertySet);
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
      function GetMetadataProvider(O2, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O2, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O2, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return ReflectLite;
}
requireReflectLite();
function c(t, n, e) {
  return Reflect.getOwnMetadata(n, t, e);
}
function a(t, n, e, u) {
  Reflect.defineMetadata(n, e, t, u);
}
function i(t, n, e, u, f2) {
  const r = u(c(t, n, f2) ?? e());
  Reflect.defineMetadata(n, r, t, f2);
}
var f;
!(function(e) {
  e.moduleId = "moduleId", e.serviceId = "serviceId";
})(f || (f = {}));
const h = "@inversifyjs/core/classMetadataReflectKey";
function g() {
  return { constructorArguments: [], lifecycle: { postConstructMethodNames: /* @__PURE__ */ new Set(), preDestroyMethodNames: /* @__PURE__ */ new Set() }, properties: /* @__PURE__ */ new Map(), scope: void 0 };
}
const y = Symbol.for("@inversifyjs/core/InversifyCoreError");
class M extends Error {
  [y];
  kind;
  constructor(e, t, n) {
    super(t, n), this[y] = true, this.kind = e;
  }
  static is(e) {
    return "object" == typeof e && null !== e && true === e[y];
  }
  static isErrorOfKind(e, t) {
    return M.is(e) && e.kind === t;
  }
}
var I, b, w, C, S;
!(function(e) {
  e[e.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", e[e.missingInjectionDecorator = 1] = "missingInjectionDecorator", e[e.planning = 2] = "planning", e[e.resolution = 3] = "resolution", e[e.unknown = 4] = "unknown";
})(I || (I = {})), (function(e) {
  e[e.unknown = 32] = "unknown";
})(b || (b = {})), (function(e) {
  e.id = "id", e.moduleId = "moduleId", e.serviceId = "serviceId";
})(w || (w = {}));
!(function(e) {
  e.moduleId = "moduleId", e.serviceId = "serviceId";
})(C || (C = {}));
!(function(e) {
  e[e.multipleInjection = 0] = "multipleInjection", e[e.singleInjection = 1] = "singleInjection", e[e.unmanaged = 2] = "unmanaged";
})(S || (S = {}));
var E;
!(function(e) {
  e[e.method = 0] = "method", e[e.parameter = 1] = "parameter", e[e.property = 2] = "property";
})(E || (E = {}));
const K = "@inversifyjs/core/classIsInjectableFlagReflectKey";
const q = [Array, BigInt, Boolean, Function, Number, Object, String];
function G(t) {
  const i$1 = c(t, "design:paramtypes");
  void 0 !== i$1 && i(t, h, g, /* @__PURE__ */ (function(e) {
    return (t2) => (e.forEach((e2, n) => {
      var i2;
      void 0 !== t2.constructorArguments[n] || (i2 = e2, q.includes(i2)) || (t2.constructorArguments[n] = (function(e3) {
        return { isFromTypescriptParamType: true, kind: S.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e3 };
      })(e2));
    }), t2);
  })(i$1));
}
function W(i$1) {
  return (o) => {
    !(function(n) {
      if (void 0 !== c(n, K)) throw new M(I.injectionDecoratorConflict, `Cannot apply @injectable decorator multiple times at class "${n.name}"`);
      a(n, K, true);
    })(o), G(o);
  };
}
var fe;
!(function(e) {
  e[e.multipleInjection = 0] = "multipleInjection", e[e.singleInjection = 1] = "singleInjection";
})(fe || (fe = {}));
var We;
!(function(e) {
  e.bindingAdded = "bindingAdded", e.bindingRemoved = "bindingRemoved";
})(We || (We = {}));
var O;
!(function(e) {
  e[e.invalidOperation = 0] = "invalidOperation";
})(O || (O = {}));
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, key + "", value);
function requireParameterFactory() {
  {
    throw new Error("ComputedStoreParameter factory not provided - is lib.variables active?");
  }
}
class UsesComputedVariable {
  constructor() {
    __publicField$1(this, "updateCb", () => {
    });
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
class BaseDatasource extends UsesComputedVariable {
  constructor() {
    super(...arguments);
    this.subscribers = [];
    this.pollingInterval = 5e3;
    this.pollingActive = false;
    this.pollingIntervalId = null;
    this.name = "";
    this.type = "";
    this.uid = "";
  }
  init(configuration) {
    this.type = configuration.type;
    this.name = configuration.name;
    this.uid = configuration.uid;
    this.setUpdateCb(() => {
      console.log("Test notify");
      this.notify();
    });
    this.pollingEnabled = configuration.pollingEnabled ?? false;
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return () => {
      this.unsubscribe(subscriber);
    };
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }
  startPolling(interval) {
    this.stopPolling();
    if (this.pollingActive) return;
    this.pollingActive = true;
    this.pollingInterval = interval;
    this.pollingIntervalId = window.setInterval(async () => {
      if (!this.pollingActive) return;
      try {
        const resp = await this.getOriginalData();
        console.log(resp);
        this.notify();
      } catch (error) {
        console.warn("Polling error", error);
      }
    }, this.pollingInterval);
    console.log("Started polling", this.pollingIntervalId);
  }
  stopPolling() {
    console.log("Stopping polling", this.pollingIntervalId);
    this.pollingActive = false;
    if (this.pollingIntervalId !== null) {
      window.clearInterval(this.pollingIntervalId);
      this.pollingIntervalId = null;
    }
  }
  static validateConfiguration(config) {
    return true;
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
var __publicField2 = (obj, key, value) => __defNormalProp2(obj, key + "", value);
let KpiComposer = class extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    __publicField(this, "configuration");
    __publicField(this, "connectedDatasources", []);
    this.datasourceRepository = datasourceRepository;
  }
  init(configuration) {
    this.configuration = configuration;
    this.connectedDatasources = configuration.connectedDatasources || [];
  }
  async getData(type) {
    if (this.connectedDatasources.length === 0) return [];
    const datasourceRepository = this.datasourceRepository;
    const dataPromises = this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
      if (!datasourceRepository) {
        throw new Error("DatasourceRepository is not provided to DataSource Classes");
      }
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
      return await datasourceInstance.getOriginalData();
    });
    const datasourceResults = await Promise.all(dataPromises);
    console.log("Datasource results:", datasourceResults);
    const mergedData = this.mergeKpiData(datasourceResults);
    console.log("Merged KPI data:", mergedData);
    return mergedData;
  }
  async getOriginalData() {
    return this.getData("KPI");
  }
  mergeKpiData(dataArrays) {
    const merged = [];
    const folderMap = /* @__PURE__ */ new Map();
    dataArrays.forEach((data) => {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          console.log("Processing item:", item);
          if (item.type === "Folder") {
            const folderKey = item.displayFolder || item.name || "Default";
            if (folderMap.has(folderKey)) {
              const existingFolder = folderMap.get(folderKey);
              existingFolder.children = [...existingFolder.children || [], ...item.children || []];
            } else {
              folderMap.set(folderKey, { ...item });
              merged.push(item);
            }
          } else {
            if (item.displayFolder && typeof item.displayFolder === "string" && item.displayFolder.trim() !== "") {
              let folder = Array.from(folderMap.values()).find((f2) => f2.displayFolder === item.displayFolder);
              if (!folder) {
                folder = {
                  type: "Folder",
                  name: item.displayFolder,
                  displayFolder: item.displayFolder,
                  children: []
                };
                folderMap.set(item.displayFolder, folder);
                merged.push(folder);
              }
              folder.children.push(item);
            } else {
              merged.push(item);
            }
          }
        });
      }
    });
    return merged;
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for this type of store`, params);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(configuration) {
    if (typeof configuration !== "object" || configuration === null) {
      return false;
    }
    if (configuration.connectedDatasources !== void 0 && !Array.isArray(configuration.connectedDatasources)) {
      return false;
    }
    return true;
  }
};
__publicField2(KpiComposer, "availableTypes", ["KPI"]);
KpiComposer = __decorateClass([
  W()
], KpiComposer);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(__props) {
    const datasourcesFiltered = computed(() => {
      return __props.dataSources.filter((ds) => KpiComposer.availableTypes.includes(ds.type));
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createBlock(_component_VaSelect, {
        modelValue: __props.config.connectedDatasources,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connectedDatasources = $event),
        label: "KPI Sources",
        options: datasourcesFiltered.value,
        multiple: "",
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const KpiComposerIdentifier = Symbol.for("KpiComposer");
const previewSymbol = Symbol.for("KpiComposerPreview");
const settingsSymbol = Symbol.for("KpiComposerSettings");
function activate({ services }) {
  services.register("KpiComposerPreview", _sfc_main$1);
  services.register("KpiComposerSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("KpiComposer", {
    Store: KpiComposerIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("KpiComposer");
  services.unregister("KpiComposerPreview");
  services.unregister("KpiComposerSettings");
}
export {
  activate,
  deactivate
};
