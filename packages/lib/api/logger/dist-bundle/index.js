const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const LOGGER_FACTORY = serviceId("LoggerFactory");
const identifier = Symbol.for(LOGGER_FACTORY);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LOGGER_FACTORY,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.logger";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.logger");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  LOGGER_FACTORY,
  activate,
  deactivate,
  identifier
};
