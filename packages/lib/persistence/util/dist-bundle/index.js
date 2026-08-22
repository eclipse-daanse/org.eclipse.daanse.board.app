class ValidityCheck {
  checkContent(json) {
    const keys = Object.keys(json);
    if (keys.includes("layout") && keys.includes("datasources") && keys.includes("conections") && keys.includes("widgets")) {
      return true;
    }
    return false;
  }
}
const VALIDITY_CHECK = "ValidityCheck";
const identifier = Symbol.for(VALIDITY_CHECK);
function activate$1({ services }) {
  services.register(VALIDITY_CHECK, new ValidityCheck());
}
function deactivate$1({ services }) {
  services.unregister(VALIDITY_CHECK);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VALIDITY_CHECK,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.persistence.util";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.persistence.util");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  VALIDITY_CHECK,
  activate,
  deactivate,
  identifier
};
