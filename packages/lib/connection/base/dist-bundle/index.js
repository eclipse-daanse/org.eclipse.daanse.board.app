class BaseConnection {
  name = "";
  type = "";
  uid = "";
  constructor() {
  }
  init(configuration) {
    this.type = configuration.type;
    this.name = configuration.name;
    this.uid = configuration.uid;
  }
  subscribers = [];
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseConnection
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.base";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.base");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  BaseConnection,
  activate,
  deactivate
};
