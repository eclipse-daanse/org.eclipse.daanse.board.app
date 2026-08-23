import { I18NEXT as a } from "org.eclipse.daanse.board.app.lib.i18next";
const i = { title: "Title", label: "Title", fontSize: "Title Font size", fontColor: "Font Color", background: "Background", backgroundColor: "Background Color", backgroundColorTrancparency: "Background Color Transparency", border: "Border", borderSize: "Border Size", borderColor: "Border Color", borderRadius: "Border Radius", fullScreen: "Full Screen", showFullScreen: "Show fullscreen button", shadow: "Shadow", shadowX: "Shadow x", shadowY: "Shadow y", shadowBlur: "Shadow blur", shadowTransparence: "Shadow Color Transparency", shadowColor: "Shadow Color", transparence: "Transparence", transparency: "Transparency", padding: "Padding", blur: "Blur" }, l = {
  WidgetWrapper: i
}, n = "en", t = "wrapper";
function d({ services: e }) {
  e.getRequired(a).addResourceBundle(n, t, l);
}
function c({ services: e }) {
  e.getRequired(a).removeResourceBundle(n, t);
}
const s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: d,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), o = "org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en", u = "0.0.1-next.1";
async function w(e) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error(`${o}: tsm runtime is not initialized`);
  r.register(o, s, u, "ui.vue.lang.wrapper.en"), await d?.(e);
}
async function g(e) {
  await c?.(e);
}
export {
  w as activate,
  g as deactivate
};
