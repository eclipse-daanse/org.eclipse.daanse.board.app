const { I18NEXT } = __tsm__.require("org.eclipse.daanse.board.app.lib.i18next");
const WidgetWrapper = { "title": "Title", "label": "Title", "fontSize": "Title Font size", "fontColor": "Font Color", "background": "Background", "backgroundColor": "Background Color", "backgroundColorTrancparency": "Background Color Transparency", "border": "Border", "borderSize": "Border Size", "borderColor": "Border Color", "borderRadius": "Border Radius", "fullScreen": "Full Screen", "showFullScreen": "Show fullscreen button", "shadow": "Shadow", "shadowX": "Shadow x", "shadowY": "Shadow y", "shadowBlur": "Shadow blur", "shadowTransparence": "Shadow Color Transparency", "shadowColor": "Shadow Color", "transparence": "Transparence", "transparency": "Transparency", "padding": "Padding", "blur": "Blur" };
const en = {
  WidgetWrapper
};
const SPRACHE = "en";
const NAMENSRAUM = "wrapper";
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
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.wrapper.en");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
