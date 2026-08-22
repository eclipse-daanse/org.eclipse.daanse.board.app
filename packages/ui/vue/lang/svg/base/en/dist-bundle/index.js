const { I18NEXT } = __tsm__.require("org.eclipse.daanse.board.app.lib.i18next");
const SvgWidget = { "title": "SVG widget settings", "svgSrc": "SVG src", "addButton": "Add items" };
const en = {
  SvgWidget
};
const SPRACHE = "en";
const NAMENSRAUM = "svgBase";
function activate$1({ services }) {
  services.getRequired(I18NEXT).addResourceBundle(SPRACHE, NAMENSRAUM, en);
}
function deactivate$1({ services }) {
  services.getRequired(I18NEXT).removeResourceBundle(SPRACHE, NAMENSRAUM);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.svg.base.en");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
