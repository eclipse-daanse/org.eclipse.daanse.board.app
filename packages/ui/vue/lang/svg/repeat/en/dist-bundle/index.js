import { I18NEXT as a } from "org.eclipse.daanse.board.app.lib.i18next";
const c = { title: "Repeatable SVG widget settings", svgSrc: "Svg src", repeations: "Repeations", progress: "Progress", activeItemFill: "Active item fill", activeItemStroke: "Active item stroke", defaultItemFill: "Default item fill", defaultItemStroke: "Default item stroke" }, l = {
  RepeatableSvgWidget: c
}, n = "en", o = "svgRepeat";
function r({ services: e }) {
  e.getRequired(a).addResourceBundle(n, o, l);
}
function s({ services: e }) {
  e.getRequired(a).removeResourceBundle(n, o);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: r,
  deactivate: s
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en", g = "0.0.1-next.1";
async function d(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, u, g, "ui.vue.lang.svg.repeat.en"), await r?.(e);
}
async function m(e) {
  await s?.(e);
}
export {
  d as activate,
  m as deactivate
};
