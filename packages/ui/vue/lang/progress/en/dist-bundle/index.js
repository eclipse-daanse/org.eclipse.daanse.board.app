import { I18NEXT as r } from "org.eclipse.daanse.board.app.lib.i18next";
const c = { title: "Progress widget settings", progress: "Progress", fillColor: "Progress fill color", backgroundColor: "Progress background color", isVertical: "Vertical", isGradient: "Gradient", addButton: "Add color", rotation: "Rotation", removeButton: "Remove color" }, l = {
  ProgressWidget: c
}, i = "en", n = "progress";
function s({ services: e }) {
  e.getRequired(r).addResourceBundle(i, n, l);
}
function a({ services: e }) {
  e.getRequired(r).removeResourceBundle(i, n);
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: s,
  deactivate: a
}, Symbol.toStringTag, { value: "Module" })), o = "org.eclipse.daanse.board.app.ui.vue.lang.progress.en", g = "0.0.1-next.1";
async function v(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${o}: tsm runtime is not initialized`);
  t.register(o, d, g, "ui.vue.lang.progress.en"), await s?.(e);
}
async function p(e) {
  await a?.(e);
}
export {
  v as activate,
  p as deactivate
};
