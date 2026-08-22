(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.va-tabs__wrapper {\n  overflow: visible;\n}\n.va-tabs__content {\n  overflow: hidden;\n}\n";})();
import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { defineComponent, shallowRef, ref, watch, resolveComponent, createElementBlock, openBlock, createElementVNode, createVNode, unref, withCtx, createTextVNode, createBlock, createCommentVNode, Fragment, renderList, normalizeStyle, toDisplayString, computed } from "vue";
import { MonacoEditor } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
const _hoisted_1 = {
  class: "flex gap-4",
  style: { "overflow": "hidden", "height": "100%", "width": "100%" }
};
const _hoisted_2 = {
  class: "flex flex-col gap-4 overflow-auto",
  style: { "width": "550px", "flex-grow": "0" }
};
const _hoisted_3 = {
  class: "flex flex-col gap-4",
  style: { "overflow": "hidden", "height": "100%", "width": "100%" }
};
const _hoisted_4 = { class: "h-full" };
const _hoisted_5 = { style: { "padding-top": "4px", "height": "100%" } };
const _hoisted_6 = {
  key: 1,
  class: "flex flex-col",
  style: { "width": "100%", "height": "100%", "overflow": "auto", "border": "1px solid silver", "padding": "0px" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  emits: ["updateConfig"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    const treeData = ref([]);
    const query = ref(props.dataSource.config.sql || "");
    const metadata = ref(null);
    const data = ref([]);
    const messages = ref([]);
    watch(props.dataSource.config, () => {
      update();
    }, { deep: true });
    const emit = __emit;
    const mapDataType = (type) => {
      const types = {
        "130": "VARCHAR",
        // WChar
        "5": "NUMERIC",
        // Double
        "3": "INT",
        // Integer
        "11": "BOOLEAN"
        // Boolean
      };
      return types[String(type)] || "VARCHAR";
    };
    function transformToSchema(rawData) {
      const schema = {};
      rawData.forEach((catalog) => {
        const tablesFolder = catalog.children?.find((c) => c.label === "Tables");
        if (!tablesFolder) return;
        tablesFolder.children.forEach((table) => {
          if (table.TABLE_TYPE === "SYSTEM TABLE") return;
          const tableName = table.TABLE_NAME;
          const columnsFolder = table.children?.find((c) => c.label === "Columns");
          if (columnsFolder && columnsFolder.children) {
            schema[tableName] = {
              name: tableName,
              description: table.DESCRIPTION || "",
              columns: columnsFolder.children.map((col) => ({
                name: col.COLUMN_NAME,
                type: mapDataType(col.DATA_TYPE)
              }))
            };
          }
        });
      });
      return schema;
    }
    watch(tempStore, async () => {
      const { tables } = await tempStore.value.getTables();
      const catalogs = await tempStore.value.getCatalogs();
      const columns = await tempStore.value.getColumns();
      catalogs.map((catalog) => {
        catalog.label = catalog.CATALOG_NAME;
        catalog.id = catalog.CATALOG_NAME;
        catalog.icon = "storage";
        return catalog;
      });
      for (const table of tables) {
        table.label = table.TABLE_NAME;
        table.id = table.TABLE_NAME;
        table.icon = "table_chart";
        if (table.children == null) {
          table.children = [{
            label: "Columns",
            icon: "view_column",
            children: []
          }];
        }
        table.children[0].children = columns.filter((column) => column.TABLE_NAME === table.TABLE_NAME && column.TABLE_CATALOG === table.TABLE_CATALOG).map((column) => {
          column.label = column.COLUMN_NAME;
          column.id = column.COLUMN_NAME;
          column.icon = "view_array";
          return column;
        });
      }
      for (const catalog of catalogs) {
        if (catalog.children == null) {
          catalog.children = [{
            label: "Tables",
            icon: "backup_table",
            children: []
          }];
        }
        catalog.children[0].children = tables.filter((table) => table.TABLE_CATALOG === catalog.CATALOG_NAME);
      }
      console.log("catalogs", catalogs);
      treeData.value = catalogs;
      console.log("treeData", treeData.value);
      metadata.value = transformToSchema(treeData.value);
      console.log("metadata for autocomplete", metadata.value);
      messages.value.push({ type: "success", text: `Metadata refreshed at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}` });
    }, { deep: true });
    watch(() => query, async () => {
      emit("updateConfig", {
        ...props.dataSource.config,
        sql: query.value
      });
    }, { deep: true });
    const tabs = [
      {
        title: "Data",
        icon: "table_chart"
      },
      {
        title: "Messages",
        icon: "message"
      }
    ];
    const currentTab = ref(tabs[0].title);
    const run = async () => {
      console.log(tempStore.value);
      tempStore.value.sql = query.value;
      try {
        const startTime = /* @__PURE__ */ new Date();
        data.value = (await tempStore.value.getData("DataTable")).items;
        const now = /* @__PURE__ */ new Date();
        messages.value.push({ type: "success", text: `Query executed successfully in ${now.getTime() - startTime.getTime()}ms. Returned ${data.value.length} rows.` });
      } catch (e) {
        messages.value.push({ type: "error", text: `Query failed: ${e.message}` });
      }
    };
    return (_ctx, _cache) => {
      const _component_VaTreeView = resolveComponent("VaTreeView");
      const _component_va_button = resolveComponent("va-button");
      const _component_VaTab = resolveComponent("VaTab");
      const _component_VaDataTable = resolveComponent("VaDataTable");
      const _component_VaTabs = resolveComponent("VaTabs");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createElementVNode("h4", { class: "" }, "Explorer", -1)),
          createVNode(_component_VaTreeView, { nodes: treeData.value }, null, 8, ["nodes"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(unref(MonacoEditor), {
            class: "h-full",
            supportedLanguages: ["sql"],
            language: "sql",
            modelValue: query.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
            metadata: metadata.value
          }, {
            actions: withCtx(() => [
              createVNode(_component_va_button, {
                color: "primary",
                onClick: run
              }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Run Query", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "metadata"]),
          createElementVNode("div", _hoisted_4, [
            createVNode(_component_VaTabs, {
              modelValue: currentTab.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTab.value = $event),
              color: "rgb(33, 150, 243)"
            }, {
              tabs: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createVNode(_component_VaTab, {
                    key: tab.title,
                    name: tab.title
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tab.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["name"]);
                }), 64))
              ]),
              default: withCtx(() => [
                createElementVNode("div", _hoisted_5, [
                  currentTab.value === "Data" ? (openBlock(), createBlock(_component_VaDataTable, {
                    key: 0,
                    items: data.value,
                    stickyHeader: true,
                    style: { "height": "100%" }
                  }, null, 8, ["items"])) : currentTab.value === "Messages" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (message) => {
                      return openBlock(), createElementBlock("p", {
                        key: message,
                        style: normalizeStyle([{ "border-bottom": "1px solid silver", "padding": "8px" }, {
                          color: message.type === "error" ? "#f00" : message.type === "success" ? "#0f0" : "#000"
                        }])
                      }, toDisplayString(message.text), 5);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]);
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
    const connectionsFiltered = computed(() => {
      return __props.connections.filter((c) => c.type === "xmla");
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createBlock(_component_VaSelect, {
        modelValue: __props.config.connection,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
        label: "Connection",
        options: connectionsFiltered.value,
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const SqlXmlaDatasourceIdentifier = Symbol.for("SqlXmlaStoreFactory");
const previewSymbol = Symbol.for("SqlXmlaPreview");
const settingsSymbol = Symbol.for("SqlXmlaSettings");
function activate({ services }) {
  services.register("SqlXmlaPreview", _sfc_main$1);
  services.register("SqlXmlaSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("sql_xmla", {
    Store: SqlXmlaDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("sql_xmla");
  services.unregister("SqlXmlaPreview");
  services.unregister("SqlXmlaSettings");
}
export {
  activate,
  deactivate
};
