(function(){var i="ui.vue.datasource.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".preview-container[data-v-99ea3482]{padding:8px;display:flex;flex-direction:column;gap:8px}.preview-item[data-v-99ea3482]{border:1px solid #000;border-radius:8px}.preview-item-title[data-v-99ea3482]{background-color:#f0f0f0;font-size:1.25rem;font-weight:700;padding:8px;border-radius:8px 8px 0 0}.preview-item-content[data-v-99ea3482]{padding:8px}\n";})();
import { DATASOURCE_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as m, ref as c, shallowRef as f, watch as l, createElementBlock as i, createCommentVNode as g, openBlock as s, Fragment as v, renderList as S, createElementVNode as u, toDisplayString as _, computed as y, createBlock as w, unref as R } from "vue";
import { useTemporaryStore as b } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as h } from "org.eclipse.daanse.board.app.ui.vue.controls";
const k = {
  key: 0,
  class: "preview-container",
  style: { overflow: "auto", height: "100%" }
}, D = { class: "preview-item" }, P = { class: "preview-item-title" }, T = ["innerHTML"], V = /* @__PURE__ */ m({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, t = c(null), o = f(null), r = c(n.dataSource), { update: p } = b(n.dataSource.type, r, o);
    return l(n.dataSource, () => {
      p();
    }, { deep: !0 }), l(o, async () => {
      t.value = await o.value.getData("object");
    }, { deep: !0 }), (I, L) => o.value && t.value ? (s(), i("div", k, [
      (s(!0), i(v, null, S(t.value.items, (a) => (s(), i("div", D, [
        u("div", P, _(a.title), 1),
        u("div", {
          innerHTML: a.content,
          class: "preview-item-content"
        }, null, 8, T)
      ]))), 256))
    ])) : g("", !0);
  }
}), x = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, E = /* @__PURE__ */ x(V, [["__scopeId", "data-v-99ea3482"]]), O = /* @__PURE__ */ m({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = y(() => e.connections.filter((t) => t.type === "rss"));
    return (t, o) => (s(), w(R(h), {
      modelValue: e.config.connection,
      "onUpdate:modelValue": o[0] || (o[0] = (r) => e.config.connection = r),
      label: "Verbindung",
      options: n.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "options"]));
  }
}), B = Symbol.for("RssStoreFactory"), C = Symbol.for("RssPreview"), F = Symbol.for("RssSettings");
function N({ services: e }) {
  e.register("RssPreview", E), e.register("RssSettings", O), e.getRequired(d).registerDatasourceType("rss", {
    Store: B,
    Preview: C,
    Settings: F
  });
}
function U({ services: e }) {
  e.getRequired(d).unregisterDatasourceType("rss"), e.unregister("RssPreview"), e.unregister("RssSettings");
}
export {
  N as activate,
  U as deactivate
};
