import { I18NEXT } from "org.eclipse.daanse.board.app.lib.i18next";
const RepeatableSvgWidget = { "title": "Repeatable SVG widget settings", "svgSrc": "Svg src", "repeations": "Repeations", "progress": "Progress", "activeItemFill": "Active item fill", "activeItemStroke": "Active item stroke", "defaultItemFill": "Default item fill", "defaultItemStroke": "Default item stroke" };
const en = {
  RepeatableSvgWidget
};
const SPRACHE = "en";
const NAMENSRAUM = "svgRepeat";
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
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.svg.repeat.en");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
