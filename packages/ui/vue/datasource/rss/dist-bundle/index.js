(function(){var i="ui.vue.datasource.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".preview-container[data-v-99ea3482]{padding:8px;display:flex;flex-direction:column;gap:8px}.preview-item[data-v-99ea3482]{border:1px solid #000;border-radius:8px}.preview-item-title[data-v-99ea3482]{background-color:#f0f0f0;font-size:1.25rem;font-weight:700;padding:8px;border-radius:8px 8px 0 0}.preview-item-content[data-v-99ea3482]{padding:8px}\n";})();
import { DATASOURCE_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as w, ref as u, shallowRef as h, watch as p, createElementBlock as c, createCommentVNode as v, openBlock as a, Fragment as y, renderList as _, createElementVNode as d, toDisplayString as b, computed as R, createBlock as E, unref as m } from "vue";
import { useTemporaryStore as T, useTranslation as x } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as P } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { component as C } from "@eclipse-daanse/tsm";
const D = `<?xml version="1.0" encoding="UTF-8"?>
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
`, A = {
  key: 0,
  class: "preview-container",
  style: { overflow: "auto", height: "100%" }
}, k = { class: "preview-item" }, M = { class: "preview-item-title" }, F = ["innerHTML"], I = /* @__PURE__ */ w({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const o = e, s = u(null), t = h(null), n = u(o.dataSource), { update: r } = T(o.dataSource.type, n, t);
    return p(o.dataSource, () => {
      r();
    }, { deep: !0 }), p(t, async () => {
      s.value = await t.value.getData("object");
    }, { deep: !0 }), (i, Y) => t.value && s.value ? (a(), c("div", A, [
      (a(!0), c(y, null, _(s.value.items, (l) => (a(), c("div", k, [
        d("div", M, b(l.title), 1),
        d("div", {
          innerHTML: l.content,
          class: "preview-item-content"
        }, null, 8, F)
      ]))), 256))
    ])) : v("", !0);
  }
}), L = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [t, n] of o)
    s[t] = n;
  return s;
}, O = /* @__PURE__ */ L(I, [["__scopeId", "data-v-99ea3482"]]), U = /* @__PURE__ */ w({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const { t: o } = x("datasourceRss"), s = R(() => e.connections.filter((t) => t.type === "rss"));
    return (t, n) => (a(), E(m(P), {
      modelValue: e.config.connection,
      "onUpdate:modelValue": n[0] || (n[0] = (r) => e.config.connection = r),
      label: m(o)("Settings.connection"),
      options: s.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "label", "options"]));
  }
}), V = { connection: "Verbindung" }, B = {
  Settings: V
}, G = { connection: "Connection" }, N = {
  Settings: G
};
var X = Object.getOwnPropertyDescriptor, j = (e, o, s, t) => {
  for (var n = t > 1 ? void 0 : t ? X(o, s) : o, r = e.length - 1, i; r >= 0; r--)
    (i = e[r]) && (n = i(n) || n);
  return n;
};
const S = "datasourceRss";
let g = class {
  namespace = S;
  resources = {
    de: B,
    en: N
  };
};
g = j([
  C({
    service: ["Translations"],
    properties: { "i18n.namespace": S }
  })
], g);
const q = Symbol.for("RssStoreFactory"), H = Symbol.for("RssPreview"), $ = Symbol.for("RssSettings");
function Z({ services: e }) {
  e.register("RssPreview", O), e.register("RssSettings", U), e.getRequired(f).registerDatasourceType("rss", {
    icon: "rss_feed",
    connections: ["rss"],
    Model: D,
    Store: q,
    Preview: H,
    Settings: $
  });
}
function ee({ services: e }) {
  e.getRequired(f).unregisterDatasourceType("rss"), e.unregister("RssPreview"), e.unregister("RssSettings");
}
export {
  g as DatasourceRssTranslations,
  Z as activate,
  ee as deactivate
};
