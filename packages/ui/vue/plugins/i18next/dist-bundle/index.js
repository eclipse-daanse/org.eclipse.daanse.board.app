import { I18NEXT as u } from "org.eclipse.daanse.board.app.lib.i18next";
function n({ services: t }) {
  const e = t.getRequired(u), o = t.getRequired("App"), a = {
    install(r) {
      r.provide("i18n", e);
    }
  };
  o.use(a);
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: n
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.plugins.i18next", s = "0.0.1-next.1";
async function p(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${i}: tsm runtime is not initialized`);
  e.register(i, c, s, "ui.vue.plugins.i18next"), await n?.(t);
}
async function d(t) {
  await void 0;
}
export {
  p as activate,
  d as deactivate
};
