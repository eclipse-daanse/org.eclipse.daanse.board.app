import { DATASOURCE_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as b, ref as i, watch as u, shallowRef as v, createElementBlock as S, createCommentVNode as w, openBlock as y, createVNode as m, unref as l, inject as T, computed as C, Fragment as h } from "vue";
import { DTable as P, DSelect as p } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTemporaryStore as B, useTranslation as R } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DataTableComposer as d } from "org.eclipse.daanse.board.app.lib.composer.datatable";
import { identifier as V } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { component as _ } from "@eclipse-daanse/tsm";
const O = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, k = /* @__PURE__ */ b({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, s = i(null);
    u(n.dataSource, () => {
      t();
    }, { deep: !0 });
    const o = v(null), a = i(n.dataSource), { update: t } = B(n.dataSource.type, a, o);
    return u(o, async () => {
      console.log("tempStore changed", o.value), s.value = await o.value.getData("DataTable");
    }, { deep: !0 }), (r, c) => o.value && s.value ? (y(), S("div", O, [
      m(l(P), {
        items: s.value.items
      }, null, 8, ["items"])
    ])) : w("", !0);
  }
}), E = /* @__PURE__ */ b({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = T(V), { t: s } = R("composerDatatable"), o = C(() => e.dataSources.filter((t) => d.availableTypes.includes(t.type))), a = i([]);
    return u(() => e.config.connectedDatasources, async (t) => {
      console.log("newValue", t), a.value = await d.getHeaders(
        t,
        n
      );
    }), (t, r) => (y(), S(h, null, [
      m(l(p), {
        modelValue: e.config.connectedDatasources,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => e.config.connectedDatasources = c),
        label: l(s)("Settings.sources"),
        options: o.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      m(l(p), {
        modelValue: e.config.composeBy,
        "onUpdate:modelValue": r[1] || (r[1] = (c) => e.config.composeBy = c),
        label: l(s)("Settings.composeBy"),
        options: a.value
      }, null, 8, ["modelValue", "label", "options"])
    ], 64));
  }
}), A = { sources: "Quellen", composeBy: "Zusammensetzen nach" }, x = {
  Settings: A
}, N = { sources: "Sources", composeBy: "Compose by" }, U = {
  Settings: N
};
var j = Object.getOwnPropertyDescriptor, q = (e, n, s, o) => {
  for (var a = o > 1 ? void 0 : o ? j(n, s) : n, t = e.length - 1, r; t >= 0; t--)
    (r = e[t]) && (a = r(a) || a);
  return a;
};
const D = "composerDatatable";
let g = class {
  namespace = D;
  resources = {
    de: x,
    en: U
  };
};
g = q([
  _({
    service: ["Translations"],
    properties: { "i18n.namespace": D }
  })
], g);
const F = Symbol.for("DataTableComposer"), I = Symbol.for("DatatablePreview"), $ = Symbol.for("DatatableSettings");
function J({ services: e }) {
  e.register("DatatablePreview", k), e.register("DatatableSettings", E), e.getRequired(f).registerDatasourceType("datatable", {
    icon: "table_chart",
    kind: "composer",
    Store: F,
    Preview: I,
    Settings: $
  });
}
function K({ services: e }) {
  e.getRequired(f).unregisterDatasourceType("datatable"), e.unregister("DatatablePreview"), e.unregister("DatatableSettings");
}
export {
  g as ComposerDatatableTranslations,
  J as activate,
  K as deactivate
};
