import { CONNECTION_REPOSITORY as y } from "org.eclipse.daanse.board.app.lib.api.connection";
import { XmlaConnection as C, factorySymbol as E } from "org.eclipse.daanse.board.app.lib.connection.xmla";
import { defineComponent as h, ref as A, computed as S, onMounted as X, watch as r, createElementBlock as T, openBlock as u, Fragment as v, createVNode as m, createBlock as d, createCommentVNode as f, unref as o } from "vue";
import { DInput as g, DSelect as p } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as x } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { component as V } from "@eclipse-daanse/tsm";
const M = `<?xml version="1.0" encoding="UTF-8"?>
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
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="xmlaconnection"
                nsURI="http://org.eclipse.daanse.board.app.lib.connection.xmla" nsPrefix="xmlaconn">

    <eClassifiers xsi:type="ecore:EClass" name="IXmlaConnectionConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="A connection to an XMLA endpoint, the protocol OLAP servers answer on. Data sources built on it run MDX queries against a catalogue and cube."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.connection.base#//BaseConnectionConfig"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL endpoint for the XMLA service."/>
            </eAnnotations>
        </eStructuralFeatures>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="cubeName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The name of the OLAP cube to connect to."/>
            </eAnnotations>
        </eStructuralFeatures>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="catalogName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The name of the catalog containing the cube."/>
            </eAnnotations>
        </eStructuralFeatures>

    </eClassifiers>

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.connection.base#/"/>

</ecore:EPackage>
`, N = /* @__PURE__ */ h({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(e) {
    const l = A([]), { t: i } = x("connectionXmla"), c = S(() => [
      { uid: "None", name: i("Xmla.security.none") },
      { uid: "Basic", name: i("Xmla.security.basic") }
    ]);
    X(async () => {
      e.config.url && await t();
    });
    const t = async () => {
      l.value = await C.getCatalogs(e.config.url, {
        type: e.config.security,
        user: e.config.user,
        password: e.config.password
      });
    };
    return r(async () => e.config.url, async () => {
      await t();
    }), r(async () => e.config.security, async () => {
      await t();
    }), r(async () => e.config.user, async () => {
      await t();
    }), r(async () => e.config.password, async () => {
      await t();
    }), (s, n) => (u(), T(v, null, [
      m(o(g), {
        modelValue: e.config.url,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => e.config.url = a),
        label: "URL"
      }, null, 8, ["modelValue"]),
      m(o(p), {
        modelValue: e.config.catalogName,
        "onUpdate:modelValue": n[1] || (n[1] = (a) => e.config.catalogName = a),
        label: o(i)("Xmla.catalog"),
        options: l.value,
        "label-key": "CATALOG_NAME",
        "value-key": "CATALOG_NAME"
      }, null, 8, ["modelValue", "label", "options"]),
      m(o(p), {
        modelValue: e.config.security,
        "onUpdate:modelValue": n[2] || (n[2] = (a) => e.config.security = a),
        label: o(i)("Xmla.security.label"),
        options: c.value
      }, null, 8, ["modelValue", "label", "options"]),
      e.config.security === "Basic" ? (u(), d(o(g), {
        key: 0,
        modelValue: e.config.user,
        "onUpdate:modelValue": n[3] || (n[3] = (a) => e.config.user = a),
        label: o(i)("Xmla.user")
      }, null, 8, ["modelValue", "label"])) : f("", !0),
      e.config.security === "Basic" ? (u(), d(o(g), {
        key: 1,
        modelValue: e.config.password,
        "onUpdate:modelValue": n[4] || (n[4] = (a) => e.config.password = a),
        label: o(i)("Xmla.password"),
        type: "password"
      }, null, 8, ["modelValue", "label"])) : f("", !0)
    ], 64));
  }
}), O = { catalog: "Katalog", security: { label: "Anmeldung", none: "Keine", basic: "Basic" }, user: "Benutzer", password: "Passwort" }, P = {
  Xmla: O
}, k = { catalog: "Catalogue", security: { label: "Authentication", none: "None", basic: "Basic" }, user: "User", password: "Password" }, L = {
  Xmla: k
};
var D = Object.getOwnPropertyDescriptor, B = (e, l, i, c) => {
  for (var t = c > 1 ? void 0 : c ? D(l, i) : l, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (t = n(t) || t);
  return t;
};
const b = "connectionXmla";
let w = class {
  namespace = b;
  resources = {
    de: P,
    en: L
  };
};
w = B([
  V({
    service: ["Translations"],
    properties: { "i18n.namespace": b }
  })
], w);
const U = Symbol.for("XmlaConnectionSettings");
function j({ services: e }) {
  e.register("XmlaConnectionSettings", N), e.getRequired(y).registerConnectionType("xmla", {
    icon: "dataset",
    Model: M,
    Connection: E,
    Settings: U
  });
}
function z({ services: e }) {
  e.getRequired(y).unregisterConnectionType("xmla"), e.unregister("XmlaConnectionSettings");
}
export {
  w as ConnectionXmlaTranslations,
  j as activate,
  z as deactivate
};
