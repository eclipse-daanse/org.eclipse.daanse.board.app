const { I18NEXT } = __tsm__.require("org.eclipse.daanse.board.app.lib.i18next");
const PageSettings = { "title": "Page Settings", "id": "ID", "name": "Name", "icon": "Icon", "description": "Description", "layout": "Layout", "backgroundColor": "Background Color", "backgroundImage": "Background Image", "backgroundSize": "Background Size", "backgroundRepeat": "Background Repeat", "backgroundPosition": "Background Position", "visibleInNavigation": "Visible in Navigation" };
const pageWidget = { "title": "Page Widget Settings", "selectPage": "Select Page", "selectPagePlaceholder": "Choose a page...", "selfReferenceWarning": "A page cannot reference itself.", "backgroundColor": "Background Color", "manualPath": "Manual Path", "path": "Path" };
const en = {
  PageSettings,
  pageWidget
};
const SPRACHE = "en";
const NAMENSRAUM = "page";
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
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.page.en";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.page.en");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
