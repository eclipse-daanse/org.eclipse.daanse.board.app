import { TwoWayConnection as a } from "org.eclipse.daanse.board.app.lib.connection.twowayconnection";
const { serviceId: l } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class i extends a {
  socket = null;
  constructor() {
    super();
  }
  init(t) {
    this.socket = new WebSocket(t.url), this.socket.onopen = () => {
      super.onConnect();
    }, this.socket.onmessage = (n) => {
      super.onMessage(n.data);
    }, this.socket.onclose = () => {
      super.onClose();
    }, this.socket.onerror = (n) => {
      super.onError(n);
    };
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(t) {
    return !!t.url;
  }
  hasTopics() {
    return !1;
  }
}
const o = l("WSConnectionFactory"), u = Symbol.for(o);
function d(e) {
  if (!i.validateConfiguration(e))
    throw new Error(
      "Invalid WSConnection configuration. Please provide a valid configuration."
    );
  const t = new i();
  return t.init(e), t;
}
function c({ services: e }) {
  e.register(o, d);
}
function s({ services: e }) {
  e.unregister(o);
}
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WSCONNECTION_FACTORY: o,
  WSConnection: i,
  activate: c,
  deactivate: s,
  factorySymbol: u
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.lib.connection.websocket", p = "0.0.1-next.1";
async function g(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${r}: tsm runtime is not initialized`);
  t.register(r, f, p, "lib.connection.websocket"), await c?.(e);
}
async function _(e) {
  await s?.(e);
}
export {
  o as WSCONNECTION_FACTORY,
  i as WSConnection,
  g as activate,
  _ as deactivate,
  u as factorySymbol
};
