const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const WIDGET_SERVICE_ID = serviceId("daanse.widget");
const WIDGET_REPOSITORY = serviceId("WidgetRepository");
const identifier = Symbol.for(WIDGET_REPOSITORY);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.widget";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.widget");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  activate,
  deactivate,
  identifier
};
