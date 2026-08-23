import { BaseDatasource as d } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as b } from "@eclipse-daanse/tsm";
const { serviceId: g } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var y = Object.defineProperty, w = (n, t, e, i) => {
  for (var r = void 0, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = a(t, e, r) || r);
  return r && y(t, e, r), r;
};
class l extends d {
  connection;
  accumulatedData = [];
  lastMessage = null;
  accumulate = !1;
  topic = "";
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection, this.accumulate = t.accumulate ?? !1;
    const e = this.connectionRepository.getConnection(
      this.connection
    );
    t.topic && e.hasTopics() && (this.topic = t.topic, e.connectStore(this, t.topic)), e.subscribe((i, r, o) => {
      switch (i) {
        case "connect":
          this.onConnect();
          break;
        case "message":
          this.onMessage(r, o);
          break;
        case "close":
          this.onClose();
          break;
        case "error":
          this.onError(r);
          break;
      }
    });
  }
  onError(t) {
  }
  onClose() {
  }
  onMessage(t, e) {
    this.topic && e !== this.topic || (this.accumulate ? this.accumulatedData.push({
      message: t,
      timestamp: new Date(Date.now()).toTimeString(),
      topic: e || "default"
    }) : this.lastMessage = {
      message: t,
      timestamp: new Date(Date.now()).toTimeString(),
      topic: e || "default"
    }, this.notify());
  }
  onConnect() {
  }
  parseToDataTable() {
    let t = [this.lastMessage];
    if (this.accumulate && (t = this.accumulatedData), !Array.isArray(t)) return { items: [], headers: [], rows: [] };
    const e = ["index"], i = [], r = t.map((o, a) => {
      if (typeof o != "object") return {};
      const c = {
        index: a
      };
      for (const s in o)
        typeof o[s] == "object" || Array.isArray(o[s]) || (e.includes(s) || e.push(s), c[s] = o[s]);
      return c;
    });
    return r.forEach((o, a) => {
      i[a] = [], e.forEach((c) => {
        i[a].push(o[c]);
      });
    }), { items: r, headers: e, rows: i };
  }
  destroy() {
    console.log("Destroying WSStore");
    const t = this.connectionRepository.getConnection(
      this.connection
    );
    t && t.hasTopics() && t.disconnectStore(this);
  }
  getData(t) {
    let e = this.lastMessage;
    if (this.accumulate && (e = this.accumulatedData), t === "DataTable")
      return this.parseToDataTable();
    if (t === "object" || t === "string")
      return JSON.stringify(e);
    throw new Error("Method not implemented.");
  }
  getOriginalData() {
    throw new Error("Method not implemented.");
  }
  callEvent(t, e) {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(t) {
    return !!t?.connection;
  }
}
w([
  b(m)
], l.prototype, "connectionRepository");
const u = g("WSStoreFactory"), S = Symbol.for(u);
function f({ services: n }) {
  n.register(u, (t) => {
    if (!l.validateConfiguration(t))
      throw new Error(
        "Invalid WSStore configuration. Please provide a valid configuration."
      );
    const e = n.construct(l);
    return e.init(t), e;
  });
}
function p({ services: n }) {
  n.unregister(u);
}
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WSStore: l,
  WS_STORE_FACTORY: u,
  activate: f,
  deactivate: p,
  factorySymbol: S
}, Symbol.toStringTag, { value: "Module" })), h = "org.eclipse.daanse.board.app.lib.datasource.websocket", v = "0.0.1-next.1";
async function O(n) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${h}: tsm runtime is not initialized`);
  t.register(h, _, v, "lib.datasource.websocket"), await f?.(n);
}
async function C(n) {
  await p?.(n);
}
export {
  l as WSStore,
  u as WS_STORE_FACTORY,
  O as activate,
  C as deactivate,
  S as factorySymbol
};
