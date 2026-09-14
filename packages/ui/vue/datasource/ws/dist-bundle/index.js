import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent, shallowRef, ref, watch, createElementBlock, createCommentVNode, openBlock, toDisplayString, computed, Fragment, createVNode, unref } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect, DSwitch, DInput } from "org.eclipse.daanse.board.app.ui.vue.controls";
const MODEL_ECORE = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n/*********************************************************************\n* Copyright (c) 2024 Contributors to the Eclipse Foundation.\n*\n* This program and the accompanying materials are made\n* available under the terms of the Eclipse Public License 2.0\n* which is available at https://www.eclipse.org/legal/epl-2.0/\n*\n* SPDX-License-Identifier: EPL-2.0\n**********************************************************************/\n-->\n<ecore:EPackage xmi:version="2.0"\n                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="wsstore"\n                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.websocket" nsPrefix="wsstore">\n\n    <eClassifiers xsi:type="ecore:EClass" name="IWSStoreConfiguration">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n            <details key="documentation" value="Represents the configuration for a WebSocket (WS) data store, extending the base connection configuration."/>\n        </eAnnotations>\n        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>\n\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="A reference or ID to a WebSocket connection configuration."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="topic" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="An optional topic to subscribe to or publish on the WebSocket connection."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n            <eStructuralFeatures xsi:type="ecore:EAttribute" name="accumulate" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" lowerBound="0">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="Whether every message is kept, or only the last one that arrived."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n</eClassifiers>\n\n    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>\n\n</ecore:EPackage>\n';
const _hoisted_1 = {
  key: 0,
  style: { "overflow": "hidden", "height": "100%" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    const data = ref(null);
    watch(tempStore, async () => {
      console.log("tempStore changed", tempStore.value);
      data.value = await tempStore.value.getData("object");
      tempStore.value.subscribe(async () => {
        const req = await tempStore.value.getData("object");
        data.value = req;
      });
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value && data.value ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(data.value), 1)) : createCommentVNode("", true);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(__props) {
    const connectionsFiltered = computed(() => {
      return __props.connections.filter((c) => c.type === "ws" || c.type === "mqtt");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(DSelect), {
          modelValue: __props.config.connection,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
          label: "Verbindung",
          options: connectionsFiltered.value,
          "label-key": "name",
          "value-key": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(unref(DSwitch), {
          modelValue: __props.config.accumulate,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.accumulate = $event),
          label: "Nachrichten sammeln"
        }, null, 8, ["modelValue"]),
        createVNode(unref(DInput), {
          modelValue: __props.config.topic,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.topic = $event),
          label: "Thema"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
const WSDatasourceIdentifier = Symbol.for("WSStoreFactory");
const previewSymbol = Symbol.for("WsPreview");
const settingsSymbol = Symbol.for("WsSettings");
function activate({ services }) {
  services.register("WsPreview", _sfc_main$1);
  services.register("WsSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("ws", {
    connections: ["ws"],
    Model: MODEL_ECORE,
    Store: WSDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("ws");
  services.unregister("WsPreview");
  services.unregister("WsSettings");
}
export {
  activate,
  deactivate
};
