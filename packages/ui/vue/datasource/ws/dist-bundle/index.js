import { DATASOURCE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as d, shallowRef as S, ref as l, watch as u, createElementBlock as g, createCommentVNode as b, openBlock as w, toDisplayString as h, computed as y, Fragment as v, createVNode as i, unref as s } from "vue";
import { useTemporaryStore as E, useTranslation as W } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as D, DSwitch as T, DInput as A } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { component as k } from "@eclipse-daanse/tsm";
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
`, C = {
  key: 0,
  style: { overflow: "hidden", height: "100%" }
}, P = /* @__PURE__ */ d({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, o = S(null), r = l(a.dataSource);
    u(a.dataSource, () => {
      n();
    }, { deep: !0 });
    const { update: n } = E(a.dataSource.type, r, o), t = l(null);
    return u(o, async () => {
      console.log("tempStore changed", o.value), t.value = await o.value.getData("object"), o.value.subscribe(async () => {
        const c = await o.value.getData("object");
        t.value = c;
      });
    }, { deep: !0 }), (c, _) => o.value && t.value ? (w(), g("div", C, h(t.value), 1)) : b("", !0);
  }
}), V = /* @__PURE__ */ d({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const { t: a } = W("datasourceWs"), o = y(() => e.connections.filter((r) => r.type === "ws" || r.type === "mqtt"));
    return (r, n) => (w(), g(v, null, [
      i(s(D), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.config.connection = t),
        label: s(a)("Settings.connection"),
        options: o.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      i(s(T), {
        modelValue: e.config.accumulate,
        "onUpdate:modelValue": n[1] || (n[1] = (t) => e.config.accumulate = t),
        label: s(a)("Ws.accumulate")
      }, null, 8, ["modelValue", "label"]),
      i(s(A), {
        modelValue: e.config.topic,
        "onUpdate:modelValue": n[2] || (n[2] = (t) => e.config.topic = t),
        label: s(a)("Ws.topic")
      }, null, 8, ["modelValue", "label"])
    ], 64));
  }
}), F = { connection: "Verbindung" }, R = { accumulate: "Nachrichten sammeln", topic: "Thema" }, I = {
  Settings: F,
  Ws: R
}, M = { connection: "Connection" }, O = { accumulate: "Collect messages", topic: "Topic" }, B = {
  Settings: M,
  Ws: O
};
var U = Object.getOwnPropertyDescriptor, L = (e, a, o, r) => {
  for (var n = r > 1 ? void 0 : r ? U(a, o) : a, t = e.length - 1, c; t >= 0; t--)
    (c = e[t]) && (n = c(n) || n);
  return n;
};
const f = "datasourceWs";
let p = class {
  namespace = f;
  resources = {
    de: I,
    en: B
  };
};
p = L([
  k({
    service: ["Translations"],
    properties: { "i18n.namespace": f }
  })
], p);
const q = Symbol.for("WSStoreFactory"), G = Symbol.for("WsPreview"), N = Symbol.for("WsSettings");
function H({ services: e }) {
  e.register("WsPreview", P), e.register("WsSettings", V), e.getRequired(m).registerDatasourceType("ws", {
    icon: "bolt",
    connections: ["ws"],
    Model: x,
    Store: q,
    Preview: G,
    Settings: N
  });
}
function J({ services: e }) {
  e.getRequired(m).unregisterDatasourceType("ws"), e.unregister("WsPreview"), e.unregister("WsSettings");
}
export {
  p as DatasourceWsTranslations,
  H as activate,
  J as deactivate
};
