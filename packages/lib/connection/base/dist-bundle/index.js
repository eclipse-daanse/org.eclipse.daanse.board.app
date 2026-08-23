class n {
  name = "";
  type = "";
  uid = "";
  constructor() {
  }
  init(e) {
    this.type = e.type, this.name = e.name, this.uid = e.uid;
  }
  subscribers = [];
  subscribe(e) {
    this.subscribers.push(e);
  }
  unsubscribe(e) {
    this.subscribers = this.subscribers.filter((t) => t !== e);
  }
  notify() {
    this.subscribers.forEach((e) => {
      e();
    });
  }
}
const r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseConnection: n
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.connection.base", c = "0.0.1-next.1";
async function a(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${i}: tsm runtime is not initialized`);
  e.register(i, r, c, "lib.connection.base"), await void 0;
}
async function o(s) {
  await void 0;
}
export {
  n as BaseConnection,
  a as activate,
  o as deactivate
};
