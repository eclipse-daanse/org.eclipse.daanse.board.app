import { I18NEXT as o } from "org.eclipse.daanse.board.app.lib.i18next";
const d = { title: "Video widget settings", videoUrl: "Video url", videoFit: "Fit" }, s = {
  VideoWidget: d
}, n = "en", a = "video";
function r({ services: e }) {
  e.getRequired(o).addResourceBundle(n, a, s);
}
function c({ services: e }) {
  e.getRequired(o).removeResourceBundle(n, a);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: r,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.video.en", l = "0.0.1-next.1";
async function g(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, u, l, "ui.vue.lang.video.en"), await r?.(e);
}
async function R(e) {
  await c?.(e);
}
export {
  g as activate,
  R as deactivate
};
