import { I18NEXT as i } from "org.eclipse.daanse.board.app.lib.i18next";
const l = { title: "Text widget settings", label: "Title", fontSize: "Font Size", fontColor: "Font Color" }, s = {
  TextWidget: l
}, o = "en", a = "textBase";
function r({ services: e }) {
  e.getRequired(i).addResourceBundle(o, a, s);
}
function c({ services: e }) {
  e.getRequired(i).removeResourceBundle(o, a);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: r,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en", d = "0.0.1-next.1";
async function f(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${n}: tsm runtime is not initialized`);
  t.register(n, u, d, "ui.vue.lang.text.plain.en"), await r?.(e);
}
async function v(e) {
  await c?.(e);
}
export {
  f as activate,
  v as deactivate
};
