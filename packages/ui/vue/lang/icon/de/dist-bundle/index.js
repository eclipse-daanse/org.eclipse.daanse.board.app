import { I18NEXT } from "org.eclipse.daanse.board.app.lib.i18next";
const IconWidget = { "title": "Symbol-Widget einrichten", "iconSearch": "Symbol suchen", "iconFilled": "Gefüllt", "iconColor": "Farbe", "iconSize": "Größe", "strokeWeight": "Strichstärke", "opticSize": "Optische Größe", "grade": "Stärkegrad", "appearance": "Aussehen", "fontAxes": "Schriftachsen" };
const de = {
  IconWidget
};
const SPRACHE = "de";
const NAMENSRAUM = "icon";
function activate$1({ services }) {
  services.getRequired(I18NEXT).addResourceBundle(SPRACHE, NAMENSRAUM, de, true, true);
}
function deactivate$1({ services }) {
  services.getRequired(I18NEXT).removeResourceBundle(SPRACHE, NAMENSRAUM);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.icon.de";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.icon.de");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
