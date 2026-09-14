(function(){var i="ui.vue.datasource.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".preview-container[data-v-99ea3482]{padding:8px;display:flex;flex-direction:column;gap:8px}.preview-item[data-v-99ea3482]{border:1px solid #000;border-radius:8px}.preview-item-title[data-v-99ea3482]{background-color:#f0f0f0;font-size:1.25rem;font-weight:700;padding:8px;border-radius:8px 8px 0 0}.preview-item-content[data-v-99ea3482]{padding:8px}\n";})();
import { DATASOURCE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as d, ref as c, shallowRef as g, watch as l, createElementBlock as a, createCommentVNode as f, openBlock as s, Fragment as w, renderList as S, createElementVNode as u, toDisplayString as h, computed as v, createBlock as y, unref as b } from "vue";
import { useTemporaryStore as R } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as _ } from "org.eclipse.daanse.board.app.ui.vue.controls";
const E = `<?xml version="1.0" encoding="UTF-8"?>
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
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="rssstore"
                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.rss" nsPrefix="rssstore">

    <eClassifiers xsi:type="ecore:EClass" name="IRssStoreConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents the configuration for an RSS data store, extending the base connection configuration."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="resourceUrl" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL of the RSS feed to fetch data from."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A reference or ID to an RSS connection configuration used to access the feed."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>

</ecore:EPackage>
`, x = {
  key: 0,
  class: "preview-container",
  style: { overflow: "auto", height: "100%" }
}, T = { class: "preview-item" }, k = { class: "preview-item-title" }, P = ["innerHTML"], C = /* @__PURE__ */ d({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const o = e, t = c(null), n = g(null), r = c(o.dataSource), { update: m } = R(o.dataSource.type, r, n);
    return l(o.dataSource, () => {
      m();
    }, { deep: !0 }), l(n, async () => {
      t.value = await n.value.getData("object");
    }, { deep: !0 }), (O, U) => n.value && t.value ? (s(), a("div", x, [
      (s(!0), a(w, null, S(t.value.items, (i) => (s(), a("div", T, [
        u("div", k, h(i.title), 1),
        u("div", {
          innerHTML: i.content,
          class: "preview-item-content"
        }, null, 8, P)
      ]))), 256))
    ])) : f("", !0);
  }
}), D = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, A = /* @__PURE__ */ D(C, [["__scopeId", "data-v-99ea3482"]]), F = /* @__PURE__ */ d({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const o = v(() => e.connections.filter((t) => t.type === "rss"));
    return (t, n) => (s(), y(b(_), {
      modelValue: e.config.connection,
      "onUpdate:modelValue": n[0] || (n[0] = (r) => e.config.connection = r),
      label: "Verbindung",
      options: o.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "options"]));
  }
}), I = Symbol.for("RssStoreFactory"), L = Symbol.for("RssPreview"), M = Symbol.for("RssSettings");
function q({ services: e }) {
  e.register("RssPreview", A), e.register("RssSettings", F), e.getRequired(p).registerDatasourceType("rss", {
    icon: "rss_feed",
    connections: ["rss"],
    Model: E,
    Store: I,
    Preview: L,
    Settings: M
  });
}
function H({ services: e }) {
  e.getRequired(p).unregisterDatasourceType("rss"), e.unregister("RssPreview"), e.unregister("RssSettings");
}
export {
  q as activate,
  H as deactivate
};
