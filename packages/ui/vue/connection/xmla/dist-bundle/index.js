import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import { XmlaConnection, factorySymbol } from "org.eclipse.daanse.board.app.lib.connection.xmla";
import { defineComponent, ref, onMounted, watch, createElementBlock, openBlock, Fragment, createVNode, createBlock, createCommentVNode, unref } from "vue";
import { DInput, DSelect } from "org.eclipse.daanse.board.app.ui.vue.controls";
const MODEL_ECORE = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n/*********************************************************************\n* Copyright (c) 2024 Contributors to the Eclipse Foundation.\n*\n* This program and the accompanying materials are made\n* available under the terms of the Eclipse Public License 2.0\n* which is available at https://www.eclipse.org/legal/epl-2.0/\n*\n* SPDX-License-Identifier: EPL-2.0\n**********************************************************************/\n-->\n<ecore:EPackage xmi:version="2.0"\n                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="xmlaconnection"\n                nsURI="http://org.eclipse.daanse.board.app.lib.connection.xmla" nsPrefix="xmlaconn">\n\n    <eClassifiers xsi:type="ecore:EClass" name="IXmlaConnectionConfiguration">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n            <details key="documentation" value="A connection to an XMLA endpoint, the protocol OLAP servers answer on. Data sources built on it run MDX queries against a catalogue and cube."/>\n        </eAnnotations>\n        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.connection.base#//BaseConnectionConfig"/>\n\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="The URL endpoint for the XMLA service."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="cubeName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="The name of the OLAP cube to connect to."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n\n        <eStructuralFeatures xsi:type="ecore:EAttribute" name="catalogName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n                <details key="documentation" value="The name of the catalog containing the cube."/>\n            </eAnnotations>\n        </eStructuralFeatures>\n\n    </eClassifiers>\n\n    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.connection.base#/"/>\n\n</ecore:EPackage>\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(__props) {
    const catalogs = ref([]);
    onMounted(async () => {
      if (__props.config.url) {
        await fetchCatalogs();
      }
    });
    const fetchCatalogs = async () => {
      catalogs.value = await XmlaConnection.getCatalogs(__props.config.url, {
        type: __props.config.security,
        user: __props.config.user,
        password: __props.config.password
      });
    };
    watch(async () => __props.config.url, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.security, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.user, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.password, async () => {
      await fetchCatalogs();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(DInput), {
          modelValue: __props.config.url,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.url = $event),
          label: "URL"
        }, null, 8, ["modelValue"]),
        createVNode(unref(DSelect), {
          modelValue: __props.config.catalogName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.catalogName = $event),
          label: "Katalog",
          options: catalogs.value,
          "label-key": "CATALOG_NAME",
          "value-key": "CATALOG_NAME"
        }, null, 8, ["modelValue", "options"]),
        createVNode(unref(DSelect), {
          modelValue: __props.config.security,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.security = $event),
          label: "Anmeldung",
          options: ["None", "Basic"]
        }, null, 8, ["modelValue"]),
        __props.config.security === "Basic" ? (openBlock(), createBlock(unref(DInput), {
          key: 0,
          modelValue: __props.config.user,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => __props.config.user = $event),
          label: "Benutzer"
        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
        __props.config.security === "Basic" ? (openBlock(), createBlock(unref(DInput), {
          key: 1,
          modelValue: __props.config.password,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => __props.config.password = $event),
          label: "Passwort",
          type: "password"
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const settingsSymbol = Symbol.for("XmlaConnectionSettings");
function activate({ services }) {
  services.register("XmlaConnectionSettings", _sfc_main);
  services.getRequired(CONNECTION_REPOSITORY).registerConnectionType("xmla", {
    icon: "dataset",
    Model: MODEL_ECORE,
    Connection: factorySymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(CONNECTION_REPOSITORY).unregisterConnectionType("xmla");
  services.unregister("XmlaConnectionSettings");
}
export {
  activate,
  deactivate
};
