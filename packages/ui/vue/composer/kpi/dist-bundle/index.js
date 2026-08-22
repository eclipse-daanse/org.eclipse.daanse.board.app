import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { defineComponent, ref, watch, shallowRef, createElementBlock, createCommentVNode, openBlock, createVNode, unref, computed, resolveComponent, createBlock } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { KpiComposer } from "org.eclipse.daanse.board.app.lib.composer.kpi";
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
