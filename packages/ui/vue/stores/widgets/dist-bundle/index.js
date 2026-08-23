import { ref as u } from "vue";
import { defineStore as c } from "pinia";
const g = (o = "") => c(`widget-${o}`, () => {
  const i = u([]);
  return { widgets: i, createWidget: (n, e = {}, t = {}) => {
    const r = "li_" + Math.random().toString(36).substring(7), d = "widget_" + r;
    return i.value.push({
      uid: r,
      type: n,
      wrapperConfig: t,
      config: {
        datasourceId: e.datasourceId,
        settings: { name: d }
      }
    }), r;
  }, removeWidget: (n) => {
    const e = i.value.findIndex((t) => t.uid === n);
    e > -1 && i.value.splice(e, 1);
  }, updateWidget: (n, e) => {
    const t = i.value.find((r) => r.uid === n);
    t && (t.uid = e.uid, t.type = e.type, t.wrapperConfig = e.wrapperConfig, t.config = e.config);
  }, updateWidgets: (n) => {
    i.value.splice(0), n.forEach((e) => {
      i.value.push(e);
    });
  } };
})(), l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useWidgetsStore: g
}, Symbol.toStringTag, { value: "Module" })), a = "org.eclipse.daanse.board.app.ui.vue.stores.widgets", p = "0.0.1-next.1";
async function b(o) {
  const s = globalThis.__tsm__;
  if (!s)
    throw new Error(`${a}: tsm runtime is not initialized`);
  s.register(a, l, p, "ui.vue.stores.widgets"), await void 0;
}
async function h(o) {
  await void 0;
}
export {
  b as activate,
  h as deactivate,
  g as useWidgetsStore
};
