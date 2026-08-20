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
class KpiComposer extends BaseDatasource {
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
              let folder = Array.from(folderMap.values()).find((f) => f.displayFolder === item.displayFolder);
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
}
__publicField(KpiComposer, "availableTypes", ["KPI"]);
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
