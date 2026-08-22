import { I18NEXT } from "org.eclipse.daanse.board.app.lib.i18next";
function activate$1({ services }) {
  const i18n = services.getRequired(I18NEXT);
  const app = services.getRequired("App");
  const I18nextVuePlugin = {
    install(app2) {
      app2.provide("i18n", i18n);
    }
  };
  app.use(I18nextVuePlugin);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.plugins.i18next";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.plugins.i18next");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate
};
