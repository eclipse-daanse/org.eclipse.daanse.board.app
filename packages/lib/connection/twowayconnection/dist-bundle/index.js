class TwoWayConnection {
  ready = false;
  subscribers = [];
  constructor() {
  }
  onMessage(data, topic) {
    this.notify("message", data, topic);
  }
  onConnect() {
    this.ready = true;
    this.notify("connect");
  }
  onClose() {
    this.ready = false;
    this.notify("close");
  }
  onError(error) {
    this.ready = false;
    this.notify("error", error);
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify(event, data, topic) {
    this.subscribers.forEach((subscriber) => {
      subscriber(event, data, topic);
    });
  }
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TwoWayConnection
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.twowayconnection";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.twowayconnection");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  TwoWayConnection,
  activate,
  deactivate
};
