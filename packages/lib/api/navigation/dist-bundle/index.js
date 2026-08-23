const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const NAVIGATION_REGISTRY_ID = serviceId("NavigationRegistry");
const NAVIGATION_REGISTRY = Symbol.for(NAVIGATION_REGISTRY_ID);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAVIGATION_REGISTRY,
  NAVIGATION_REGISTRY_ID
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.navigation";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.navigation");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  NAVIGATION_REGISTRY,
  NAVIGATION_REGISTRY_ID,
  activate,
  deactivate
};
