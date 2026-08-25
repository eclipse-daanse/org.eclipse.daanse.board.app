class r {
  ready = !1;
  subscribers = [];
  constructor() {
  }
  onMessage(e, t) {
    this.notify("message", e, t);
  }
  onConnect() {
    this.ready = !0, this.notify("connect");
  }
  onClose() {
    this.ready = !1, this.notify("close");
  }
  onError(e) {
    this.ready = !1, this.notify("error", e);
  }
  subscribe(e) {
    this.subscribers.push(e);
  }
  unsubscribe(e) {
    this.subscribers = this.subscribers.filter((t) => t !== e);
  }
  notify(e, t, i) {
    this.subscribers.forEach((o) => {
      o(e, t, i);
    });
  }
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TwoWayConnection: r
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.lib.connection.twowayconnection", a = "0.0.1-next.1";
async function b(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${n}: tsm runtime is not initialized`);
  e.register(n, c, a, "lib.connection.twowayconnection"), await void 0;
}
async function u(s) {
  await void 0;
}
export {
  r as TwoWayConnection,
  b as activate,
  u as deactivate
};
