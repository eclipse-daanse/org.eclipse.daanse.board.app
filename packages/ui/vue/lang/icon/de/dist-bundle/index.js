import { I18NEXT as o } from "org.eclipse.daanse.board.app.lib.i18next";
const d = { title: "Symbol-Widget einrichten", iconSearch: "Symbol suchen", iconFilled: "Gefüllt", iconColor: "Farbe", iconSize: "Größe", strokeWeight: "Strichstärke", opticSize: "Optische Größe", grade: "Stärkegrad" }, s = {
  IconWidget: d
}, n = "de", c = "icon";
function r({ services: e }) {
  e.getRequired(o).addResourceBundle(n, c, s, !0, !0);
}
function a({ services: e }) {
  e.getRequired(o).removeResourceBundle(n, c);
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: r,
  deactivate: a
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.icon.de", u = "0.0.1-next.1";
async function S(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, l, u, "ui.vue.lang.icon.de"), await r?.(e);
}
async function m(e) {
  await a?.(e);
}
export {
  S as activate,
  m as deactivate
};
