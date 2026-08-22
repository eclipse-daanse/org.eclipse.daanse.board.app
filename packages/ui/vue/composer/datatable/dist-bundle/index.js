const { identifier, DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
import { defineComponent, ref, watch, shallowRef, resolveComponent, createElementBlock, createCommentVNode, openBlock, createVNode, inject, computed, Fragment } from "vue";
const { useTemporaryStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
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
      const _component_VaDataTable = resolveComponent("VaDataTable");
      return tempStore.value && data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VaDataTable, {
          items: data.value.items,
          stickyHeader: true,
          style: { "height": "100%" }
        }, null, 8, ["items"])
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
class DataTableComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    __publicField(this, "connectedDatasources", []);
    __publicField(this, "composeBy", "");
    this.datasourceRepository = datasourceRepository;
  }
  destroy() {
    console.log("Destroying DataTableComposer");
  }
  init(configuration) {
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    const updateFn = async () => {
      await this.getData("DataTable");
      this.notify();
    };
    const datasourceRepository = this.datasourceRepository;
    this.connectedDatasources.filter((datasourceId) => datasourceId).forEach(function(ds) {
      const datasource = datasourceRepository.getDatasource(ds);
      datasource.subscribe(updateFn);
    });
    this.composeBy = configuration.composeBy;
  }
  async getData(type) {
    if (!this.composeBy) return null;
    const datasourceRepository = this.datasourceRepository;
    const data = await Promise.all(
      this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    if (type === "DataTable") {
      return this.composeArrays(data);
    } else {
      console.warn("Invalid data type");
      return;
    }
  }
  async getOriginalData() {
    return [];
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for this type of store`, params);
  }
  static async getHeaders(connectedDatasources, datasourceRepository) {
    console.log("Composing headers from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
  }
  composeArrays(data) {
    const resultingDataTable = {
      headers: [],
      rows: [],
      items: [],
      rowProperties: {}
    };
    const rowMap = /* @__PURE__ */ new Map();
    data.forEach((table) => {
      table.items.forEach((row) => {
        const key = row[this.composeBy];
        if (!rowMap.has(key)) {
          rowMap.set(key, {});
        }
        rowMap.set(key, {
          ...rowMap.get(key),
          ...row
        });
      });
      Object.keys(table.rowProperties).forEach((key) => {
        const prop = table.rowProperties[key];
        resultingDataTable.rowProperties[key] = {
          ...resultingDataTable.rowProperties[key],
          ...prop
        };
      });
    });
    resultingDataTable.items = Array.from(rowMap.values());
    resultingDataTable.headers = data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
    const rows = [];
    resultingDataTable.items.forEach((row) => {
      const newRow = resultingDataTable.headers.map((header) => {
        return row[header];
      });
      rows.push(newRow);
    });
    resultingDataTable.rows = rows;
    return resultingDataTable;
  }
  static validateConfiguration(config) {
    if (!config.connectedDatasources) return false;
    return true;
  }
}
__publicField(DataTableComposer, "availableTypes", ["rest", "csv", "xmla"]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(__props) {
    const dsRepository = inject(identifier);
    const datasourcesFiltered = computed(() => {
      return __props.dataSources.filter((ds) => DataTableComposer.availableTypes.includes(ds.type));
    });
    const composeByOptions = ref([]);
    watch(() => __props.config.connectedDatasources, async (newValue) => {
      console.log("newValue", newValue);
      composeByOptions.value = await DataTableComposer.getHeaders(
        newValue,
        dsRepository
      );
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connectedDatasources,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connectedDatasources = $event),
          label: "Sources",
          options: datasourcesFiltered.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.composeBy,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.composeBy = $event),
          label: "Compose By",
          options: composeByOptions.value
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
});
const DatatableComposerIdentifier = Symbol.for("DataTableComposer");
const previewSymbol = Symbol.for("DatatablePreview");
const settingsSymbol = Symbol.for("DatatableSettings");
function activate({ services }) {
  services.register("DatatablePreview", _sfc_main$1);
  services.register("DatatableSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("datatable", {
    Store: DatatableComposerIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("datatable");
  services.unregister("DatatablePreview");
  services.unregister("DatatableSettings");
}
export {
  activate,
  deactivate
};
