import { I18NEXT as i } from "org.eclipse.daanse.board.app.lib.i18next";
const r = { title: "SVG widget settings", svgSrc: "SVG src", addButton: "Add items" }, d = {
  SvgWidget: r
}, a = "en", o = "svgBase";
function s({ services: e }) {
  e.getRequired(i).addResourceBundle(a, o, d);
}
function c({ services: e }) {
  e.getRequired(i).removeResourceBundle(a, o);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: s,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en", g = "0.0.1-next.1";
async function v(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${n}: tsm runtime is not initialized`);
  t.register(n, u, g, "ui.vue.lang.svg.base.en"), await s?.(e);
}
async function m(e) {
  await c?.(e);
}
export {
  v as activate,
  m as deactivate
};
