(function(){var i="ui.vue.datasource.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.add_kpi[data-v-869dc0ea] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 10px;\n  align-items: end;\n}\n.added_kpis[data-v-869dc0ea] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n}\n";})();
import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { defineComponent, shallowRef, ref, computed, watch, createElementBlock, createCommentVNode, openBlock, createElementVNode, createVNode, unref, onMounted, resolveComponent, Fragment } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { XmlaStore } from "org.eclipse.daanse.board.app.lib.datasource.xmla";
const _hoisted_1 = {
  key: 0,
  style: { "overflow": "hidden", "height": "100%", "width": "100%" },
  class: "flex flex-col gap-4"
};
const _hoisted_2 = { class: "h-full" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    computed(() => {
      if (!settingsRef.value.config.kpis) {
        return [];
      }
      return data.value.items.filter((item) => settingsRef.value.config.kpis.includes(item.name));
    });
    watch(() => props.dataSource.config, () => {
      update();
    }, { deep: true });
    const data = ref(null);
    const selectedKpis = computed({
      get: () => settingsRef.value.config.kpis || [],
      set: (value) => {
        settingsRef.value.config.kpis = value;
        console.log("Updated selected KPIs:", value);
      }
    });
    watch(tempStore, async () => {
      data.value = await tempStore.value.getOriginalData("DataTable");
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(KpiTable), {
            tableData: data.value,
            selectedItems: selectedKpis.value,
            "onUpdate:selectedItems": _cache[0] || (_cache[0] = ($event) => selectedKpis.value = $event),
            "show-selection": true
          }, null, 8, ["tableData", "selectedItems"])
        ])
      ])) : createCommentVNode("", true);
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
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-869dc0ea"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(__props) {
    const cubes = ref([]);
    const connectionsFiltered = computed(() => {
      return __props.connections.filter((c) => c.type === "xmla");
    });
    watch(async () => __props.config.connection, async () => {
      if (__props.config.connection) {
        cubes.value = await XmlaStore.fetchCubes(__props.config.connection);
      }
    });
    onMounted(async () => {
      if (__props.config.connection) {
        cubes.value = await XmlaStore.fetchCubes(__props.config.connection);
      }
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connection,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
          label: "Connection",
          options: connectionsFiltered.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.cube,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.cube = $event),
          label: "Cube",
          options: cubes.value,
          "text-by": "CUBE_NAME",
          "value-by": "CUBE_NAME"
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
});
const KpiTmpDatasourceIdentifier = Symbol.for("KpiStoreFactory");
const previewSymbol = Symbol.for("KpiPreview");
const settingsSymbol = Symbol.for("KpiSettings");
function activate({ services }) {
  services.register("KpiPreview", Preview);
  services.register("KpiSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("KPI", {
    Store: KpiTmpDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("KPI");
  services.unregister("KpiPreview");
  services.unregister("KpiSettings");
}
export {
  activate,
  deactivate
};
