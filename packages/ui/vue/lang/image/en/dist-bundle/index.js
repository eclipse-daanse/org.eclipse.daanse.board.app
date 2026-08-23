import { I18NEXT as a } from "org.eclipse.daanse.board.app.lib.i18next";
const s = { title: "Image widget settings", imageUrl: "Image src", addButton: "Add image", imageFit: "Fit", imageDiashowInterval: "Diashow interval" }, g = {
  ImageWidget: s
}, n = "en", o = "image";
function r({ services: e }) {
  e.getRequired(a).addResourceBundle(n, o, g);
}
function c({ services: e }) {
  e.getRequired(a).removeResourceBundle(n, o);
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: r,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.image.en", u = "0.0.1-next.1";
async function m(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, d, u, "ui.vue.lang.image.en"), await r?.(e);
}
async function v(e) {
  await c?.(e);
}
export {
  m as activate,
  v as deactivate
};
