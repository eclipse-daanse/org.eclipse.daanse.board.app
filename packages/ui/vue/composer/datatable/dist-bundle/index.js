import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent, ref, watch, shallowRef, resolveComponent, createElementBlock, createCommentVNode, openBlock, createVNode, inject, computed, Fragment } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DataTableComposer } from "org.eclipse.daanse.board.app.lib.composer.datatable";
import { identifier } from "org.eclipse.daanse.board.app.lib.repository.datasource";
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
