import { I18NEXT as n } from "org.eclipse.daanse.board.app.lib.i18next";
const g = { title: "Page Settings", id: "ID", name: "Name", icon: "Icon", description: "Description", layout: "Layout", backgroundColor: "Background Color", backgroundImage: "Background Image", backgroundSize: "Background Size", backgroundRepeat: "Background Repeat", backgroundPosition: "Background Position", visibleInNavigation: "Visible in Navigation" }, u = { title: "Page Widget Settings", selectPage: "Select Page", selectPagePlaceholder: "Choose a page...", selfReferenceWarning: "A page cannot reference itself.", backgroundColor: "Background Color", manualPath: "Manual Path", path: "Path" }, s = {
  PageSettings: g,
  pageWidget: u
}, o = "en", i = "page";
function c({ services: e }) {
  e.getRequired(n).addResourceBundle(o, i, s);
}
function r({ services: e }) {
  e.getRequired(n).removeResourceBundle(o, i);
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: c,
  deactivate: r
}, Symbol.toStringTag, { value: "Module" })), t = "org.eclipse.daanse.board.app.ui.vue.lang.page.en", d = "0.0.1-next.1";
async function b(e) {
  const a = globalThis.__tsm__;
  if (!a)
    throw new Error(`${t}: tsm runtime is not initialized`);
  a.register(t, l, d, "ui.vue.lang.page.en"), await c?.(e);
}
async function P(e) {
  await r?.(e);
}
export {
  b as activate,
  P as deactivate
};
