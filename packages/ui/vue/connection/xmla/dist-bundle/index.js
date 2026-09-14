import { CONNECTION_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.connection";
import { XmlaConnection as f, factorySymbol as w } from "org.eclipse.daanse.board.app.lib.connection.xmla";
import { defineComponent as y, ref as p, onMounted as b, watch as i, createElementBlock as E, openBlock as l, Fragment as h, createVNode as c, createBlock as u, createCommentVNode as m, unref as a } from "vue";
import { DInput as r, DSelect as g } from "org.eclipse.daanse.board.app.ui.vue.controls";
const C = `<?xml version="1.0" encoding="UTF-8"?>
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
`, A = /* @__PURE__ */ y({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(e) {
    const s = p([]);
    b(async () => {
      e.config.url && await o();
    });
    const o = async () => {
      s.value = await f.getCatalogs(e.config.url, {
        type: e.config.security,
        user: e.config.user,
        password: e.config.password
      });
    };
    return i(async () => e.config.url, async () => {
      await o();
    }), i(async () => e.config.security, async () => {
      await o();
    }), i(async () => e.config.user, async () => {
      await o();
    }), i(async () => e.config.password, async () => {
      await o();
    }), (x, n) => (l(), E(h, null, [
      c(a(r), {
        modelValue: e.config.url,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.config.url = t),
        label: "URL"
      }, null, 8, ["modelValue"]),
      c(a(g), {
        modelValue: e.config.catalogName,
        "onUpdate:modelValue": n[1] || (n[1] = (t) => e.config.catalogName = t),
        label: "Katalog",
        options: s.value,
        "label-key": "CATALOG_NAME",
        "value-key": "CATALOG_NAME"
      }, null, 8, ["modelValue", "options"]),
      c(a(g), {
        modelValue: e.config.security,
        "onUpdate:modelValue": n[2] || (n[2] = (t) => e.config.security = t),
        label: "Anmeldung",
        options: ["None", "Basic"]
      }, null, 8, ["modelValue"]),
      e.config.security === "Basic" ? (l(), u(a(r), {
        key: 0,
        modelValue: e.config.user,
        "onUpdate:modelValue": n[3] || (n[3] = (t) => e.config.user = t),
        label: "Benutzer"
      }, null, 8, ["modelValue"])) : m("", !0),
      e.config.security === "Basic" ? (l(), u(a(r), {
        key: 1,
        modelValue: e.config.password,
        "onUpdate:modelValue": n[4] || (n[4] = (t) => e.config.password = t),
        label: "Passwort",
        type: "password"
      }, null, 8, ["modelValue"])) : m("", !0)
    ], 64));
  }
}), S = Symbol.for("XmlaConnectionSettings");
function v({ services: e }) {
  e.register("XmlaConnectionSettings", A), e.getRequired(d).registerConnectionType("xmla", {
    icon: "deployed_code",
    Model: C,
    Connection: w,
    Settings: S
  });
}
function L({ services: e }) {
  e.getRequired(d).unregisterConnectionType("xmla"), e.unregister("XmlaConnectionSettings");
}
export {
  v as activate,
  L as deactivate
};
