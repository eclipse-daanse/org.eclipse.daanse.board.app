import { DATASOURCE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as m, shallowRef as w, ref as l, watch as u, createElementBlock as d, createCommentVNode as f, openBlock as g, toDisplayString as S, computed as h, Fragment as b, createVNode as i, unref as s } from "vue";
import { useTemporaryStore as y } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as v, DSwitch as E, DInput as k } from "org.eclipse.daanse.board.app.ui.vue.controls";
const x = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="wsstore"
                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.websocket" nsPrefix="wsstore">

    <eClassifiers xsi:type="ecore:EClass" name="IWSStoreConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents the configuration for a WebSocket (WS) data store, extending the base connection configuration."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A reference or ID to a WebSocket connection configuration."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="topic" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="An optional topic to subscribe to or publish on the WebSocket connection."/>
            </eAnnotations>
        </eStructuralFeatures>
            <eStructuralFeatures xsi:type="ecore:EAttribute" name="accumulate" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Whether every message is kept, or only the last one that arrived."/>
            </eAnnotations>
        </eStructuralFeatures>
</eClassifiers>

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>

</ecore:EPackage>
`, D = {
  key: 0,
  style: { overflow: "hidden", height: "100%" }
}, A = /* @__PURE__ */ m({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, t = w(null), n = l(a.dataSource);
    u(a.dataSource, () => {
      o();
    }, { deep: !0 });
    const { update: o } = y(a.dataSource.type, n, t), r = l(null);
    return u(t, async () => {
      console.log("tempStore changed", t.value), r.value = await t.value.getData("object"), t.value.subscribe(async () => {
        const c = await t.value.getData("object");
        r.value = c;
      });
    }, { deep: !0 }), (c, V) => t.value && r.value ? (g(), d("div", D, S(r.value), 1)) : f("", !0);
  }
}), T = /* @__PURE__ */ m({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const a = h(() => e.connections.filter((t) => t.type === "ws" || t.type === "mqtt"));
    return (t, n) => (g(), d(b, null, [
      i(s(v), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => e.config.connection = o),
        label: "Verbindung",
        options: a.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      i(s(E), {
        modelValue: e.config.accumulate,
        "onUpdate:modelValue": n[1] || (n[1] = (o) => e.config.accumulate = o),
        label: "Nachrichten sammeln"
      }, null, 8, ["modelValue"]),
      i(s(k), {
        modelValue: e.config.topic,
        "onUpdate:modelValue": n[2] || (n[2] = (o) => e.config.topic = o),
        label: "Thema"
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), W = Symbol.for("WSStoreFactory"), C = Symbol.for("WsPreview"), P = Symbol.for("WsSettings");
function B({ services: e }) {
  e.register("WsPreview", A), e.register("WsSettings", T), e.getRequired(p).registerDatasourceType("ws", {
    icon: "bolt",
    connections: ["ws"],
    Model: x,
    Store: W,
    Preview: C,
    Settings: P
  });
}
function U({ services: e }) {
  e.getRequired(p).unregisterDatasourceType("ws"), e.unregister("WsPreview"), e.unregister("WsSettings");
}
export {
  B as activate,
  U as deactivate
};
