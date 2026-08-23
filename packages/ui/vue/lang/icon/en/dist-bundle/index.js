import { I18NEXT as n } from "org.eclipse.daanse.board.app.lib.i18next";
const s = { title: "Icon widget settings", iconSearch: "Search icon", iconFilled: "Icon filled", iconColor: "Icon color", iconSize: "Icon size", strokeWeight: "Stroke weight", opticSize: "Optic size", grade: "Grade" }, l = {
  IconWidget: s
}, o = "en", c = "icon";
function a({ services: e }) {
  e.getRequired(n).addResourceBundle(o, c, l);
}
function r({ services: e }) {
  e.getRequired(n).removeResourceBundle(o, c);
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: a,
  deactivate: r
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.icon.en", u = "0.0.1-next.1";
async function v(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, d, u, "ui.vue.lang.icon.en"), await a?.(e);
}
async function S(e) {
  await r?.(e);
}
export {
  v as activate,
  S as deactivate
};
