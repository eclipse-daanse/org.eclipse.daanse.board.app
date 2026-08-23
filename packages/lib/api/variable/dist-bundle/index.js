const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const VARIABLE_REPOSITORY = serviceId("VariableRepository");
const identifier = Symbol.for(VARIABLE_REPOSITORY);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_REPOSITORY,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.variable";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.variable");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  VARIABLE_REPOSITORY,
  activate,
  deactivate,
  identifier
};
