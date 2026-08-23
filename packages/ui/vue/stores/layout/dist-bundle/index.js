import { ref as n } from "vue";
import { defineStore as i } from "pinia";
const u = (t = "") => i("layout" + t, () => {
  const e = n([]);
  return {
    layout: e,
    updateLayout: (a) => {
      e.value.splice(0, e.value.length), e.value = a;
    }
  };
})(), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLayoutStore: u
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.ui.vue.stores.layout", l = "0.0.1-next.1";
async function f(t) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${r}: tsm runtime is not initialized`);
  o.register(r, s, l, "ui.vue.stores.layout"), await void 0;
}
async function p(t) {
  await void 0;
}
export {
  f as activate,
  p as deactivate,
  u as useLayoutStore
};
