(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.tree[data-v-ca19b849] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.node__row[data-v-ca19b849] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  width: 100%;\n  padding: 3px 4px;\n  border: 0;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n}\n.node__row[data-v-ca19b849]:hover {\n  background-color: color-mix(in srgb, var(--color-pane) 70%, transparent);\n}\n.node__row[data-v-ca19b849]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n\n/* Keeps a leaf's label on the same edge as a branch's. */\n.node__leaf[data-v-ca19b849] {\n  width: 14px;\n  flex: none;\n}\n.node__label[data-v-ca19b849] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.explorer[data-v-5294ffcf] {\n  display: flex;\n  gap: 16px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.explorer__schema[data-v-5294ffcf] {\n  width: 320px;\n  flex: none;\n  overflow: auto;\n  border-right: 1px solid var(--color-divider);\n  padding-right: 8px;\n}\n.explorer__title[data-v-5294ffcf] {\n  margin: 0 0 6px;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  color: var(--color-dim);\n}\n.explorer__work[data-v-5294ffcf] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n}\n.explorer__result[data-v-5294ffcf] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.explorer__pane[data-v-5294ffcf] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n}\n.messages[data-v-5294ffcf] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n}\n.message[data-v-5294ffcf] {\n  padding: 7px 8px;\n  border-bottom: 1px solid var(--color-divider);\n}\n";})();
import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent, ref, resolveComponent, createElementBlock, openBlock, Fragment, renderList, createElementVNode, createBlock, createCommentVNode, normalizeStyle, unref, toDisplayString, shallowRef, watch, createVNode, withCtx, createTextVNode, computed } from "vue";
import { DIcon, DButton, DTabs, DTable, DSelect } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { MonacoEditor } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
const MODEL_ECORE = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n/*********************************************************************\n* Copyright (c) 2024 Contributors to the Eclipse Foundation.\n*\n* This program and the accompanying materials are made\n* available under the terms of the Eclipse Public License 2.0\n* which is available at https://www.eclipse.org/legal/epl-2.0/\n*\n* SPDX-License-Identifier: EPL-2.0\n**********************************************************************/\n-->\n<ecore:EPackage xmi:version="2.0"\n                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="sqlxmlastore"\n                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.sql_xmla" nsPrefix="sqlxmlastore">\n\n    <eClassifiers xsi:type="ecore:EClass" name="ISqlXmlaStoreConfiguration">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n            <details key="documentation" value="Represents the configuration for a SQL XMLA data store, extending the base connection configuration."/>\n        </eAnnotations>\n        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>\n\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="A reference or ID to a SQL XMLA connection configuration used to access the data source."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="sql" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="The SQL query to be executed to retrieve data from the XMLA source."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="pollingInterval" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" lowerBound="0">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="The optional interval in milliseconds to poll the SQL XMLA resource for updates. If not specified, polling might be disabled or use a default value."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n    </eClassifiers>\n\n    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>\n\n</ecore:EPackage>\n';
const _hoisted_1$1 = { class: "tree" };
const _hoisted_2$1 = ["aria-expanded", "onClick"];
const _hoisted_3$1 = {
  key: 1,
  class: "node__leaf"
};
const _hoisted_4$1 = { class: "node__label" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SchemaTree",
  props: {
    nodes: {},
    depth: {}
  },
  setup(__props) {
    const open = ref({});
    return (_ctx, _cache) => {
      const _component_SchemaTree = resolveComponent("SchemaTree", true);
      return openBlock(), createElementBlock("ul", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nodes, (node) => {
          return openBlock(), createElementBlock("li", {
            key: node.label,
            class: "node"
          }, [
            createElementVNode("button", {
              type: "button",
              class: "node__row",
              style: normalizeStyle({ paddingLeft: `${(__props.depth ?? 0) * 14 + 4}px` }),
              "aria-expanded": node.children?.length ? !!open.value[node.label] : void 0,
              onClick: ($event) => node.children?.length && (open.value[node.label] = !open.value[node.label])
            }, [
              node.children?.length ? (openBlock(), createBlock(unref(DIcon), {
                key: 0,
                name: open.value[node.label] ? "expand_more" : "chevron_right",
                size: "sm",
                tone: "color-dim"
              }, null, 8, ["name"])) : (openBlock(), createElementBlock("span", _hoisted_3$1)),
              node.icon ? (openBlock(), createBlock(unref(DIcon), {
                key: 2,
                name: node.icon,
                size: "sm",
                tone: "color-dim"
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_4$1, toDisplayString(node.label), 1)
            ], 12, _hoisted_2$1),
            node.children?.length && open.value[node.label] ? (openBlock(), createBlock(_component_SchemaTree, {
              key: 0,
              nodes: node.children,
              depth: (__props.depth ?? 0) + 1
            }, null, 8, ["nodes", "depth"])) : createCommentVNode("", true)
          ]);
        }), 128))
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
const SchemaTree = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ca19b849"]]);
const _hoisted_1 = { class: "explorer" };
const _hoisted_2 = { class: "explorer__schema" };
const _hoisted_3 = { class: "explorer__work" };
const _hoisted_4 = { class: "explorer__result" };
const _hoisted_5 = { class: "explorer__pane" };
const _hoisted_6 = {
  key: 1,
  class: "messages"
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
      metadata.value = transformToSchema(treeData.value);
      messages.value.push({ type: "success", text: `Schema gelesen um ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}` });
    }, { deep: true });
    watch(() => query, async () => {
      emit("updateConfig", {
        ...props.dataSource.config,
        sql: query.value
      });
    }, { deep: true });
    const tabs = [
      { id: "data", label: "Ergebnis" },
      { id: "messages", label: "Meldungen" }
    ];
    const currentTab = ref(tabs[0].id);
    const run = async () => {
      tempStore.value.sql = query.value;
      try {
        const startTime = /* @__PURE__ */ new Date();
        data.value = (await tempStore.value.getData("DataTable")).items;
        const now = /* @__PURE__ */ new Date();
        messages.value.push({ type: "success", text: `${data.value.length} Zeilen in ${now.getTime() - startTime.getTime()} ms.` });
      } catch (e) {
        messages.value.push({ type: "error", text: `Abfrage fehlgeschlagen: ${e.message}` });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("aside", _hoisted_2, [
          _cache[2] || (_cache[2] = createElementVNode("h4", { class: "explorer__title" }, "Schema", -1)),
          createVNode(SchemaTree, { nodes: treeData.value }, null, 8, ["nodes"])
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
              createVNode(unref(DButton), {
                intent: "primary",
                size: "sm",
                onClick: run
              }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("Ausführen", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "metadata"]),
          createElementVNode("div", _hoisted_4, [
            createVNode(unref(DTabs), {
              modelValue: currentTab.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTab.value = $event),
              tabs,
              label: "Ergebnis oder Meldungen"
            }, null, 8, ["modelValue"]),
            createElementVNode("div", _hoisted_5, [
              currentTab.value === "data" ? (openBlock(), createBlock(unref(DTable), {
                key: 0,
                items: data.value,
                empty: "Noch nichts ausgeführt"
              }, null, 8, ["items"])) : (openBlock(), createElementBlock("ul", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (message, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: index,
                    class: "message",
                    style: normalizeStyle({ color: message.type === "error" ? "var(--color-err)" : "var(--color-fg)" })
                  }, toDisplayString(message.text), 5);
                }), 128))
              ]))
            ])
          ])
        ])
      ]);
    };
  }
});
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5294ffcf"]]);
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
      return openBlock(), createBlock(unref(DSelect), {
        modelValue: __props.config.connection,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
        label: "Verbindung",
        options: connectionsFiltered.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const SqlXmlaDatasourceIdentifier = Symbol.for("SqlXmlaStoreFactory");
const previewSymbol = Symbol.for("SqlXmlaPreview");
const settingsSymbol = Symbol.for("SqlXmlaSettings");
function activate({ services }) {
  services.register("SqlXmlaPreview", Preview);
  services.register("SqlXmlaSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("sql_xmla", {
    connections: ["xmla"],
    Model: MODEL_ECORE,
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
