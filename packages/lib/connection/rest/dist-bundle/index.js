import { BaseConnection as b } from "org.eclipse.daanse.board.app.lib.connection.base";
const { serviceId: m } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class l extends b {
  url = "";
  cacheEnabled = !1;
  cacheTTL = 3e4;
  // 30 seconds default
  cache = /* @__PURE__ */ new Map();
  pendingRequests = /* @__PURE__ */ new Map();
  constructor() {
    super();
  }
  init(e) {
    super.init(e), this.url = e.url, this.cacheEnabled = e.cacheEnabled ?? !1, this.cacheTTL = e.cacheTTL ?? 3e4;
  }
  getCacheKey(e, s) {
    const i = s?.method || "GET", c = s?.body ? JSON.stringify(s.body) : "";
    return `${i}:${e}:${c}`;
  }
  isValidCacheEntry(e) {
    return Date.now() - e.timestamp < this.cacheTTL;
  }
  cleanExpiredCache() {
    const e = Date.now();
    for (const [s, i] of this.cache.entries())
      e - i.timestamp >= this.cacheTTL && this.cache.delete(s);
  }
  clearCache() {
    this.cache.clear();
  }
  fetch(e, s) {
    const i = this.url + e.url, c = this.getCacheKey(i, s), p = s?.method || "GET", h = this.cacheEnabled && p === "GET";
    if (h) {
      const n = this.cache.get(c);
      if (n && this.isValidCacheEntry(n)) {
        const a = new Response(JSON.stringify(n.body), {
          status: n.response.status,
          statusText: n.response.statusText,
          headers: n.response.headers
        });
        return Promise.resolve(a);
      }
      const o = this.pendingRequests.get(c);
      if (o)
        return o.then((a) => a.clone());
    }
    const d = fetch(i, s).then(async (n) => {
      if (h && n.ok) {
        const o = n.clone();
        try {
          const a = await o.json();
          this.cache.set(c, {
            response: n.clone(),
            body: a,
            timestamp: Date.now()
          });
        } catch {
        }
      }
      return n;
    }).finally(() => {
      this.pendingRequests.delete(c), this.cache.size > 100 && this.cleanExpiredCache();
    });
    return h && this.pendingRequests.set(c, d), d;
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(e) {
    return !!e.url;
  }
}
const r = m("RestConnectionFactory"), g = Symbol.for(r);
function T(t) {
  if (!l.validateConfiguration(t))
    throw new Error(
      "Invalid RestConnection configuration. Please provide a valid configuration."
    );
  const e = new l();
  return e.init(t), e;
}
function f({ services: t }) {
  t.register(r, T);
}
function y({ services: t }) {
  t.unregister(r);
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REST_CONNECTION_FACTORY: r,
  RestConnection: l,
  activate: f,
  deactivate: y,
  factorySymbol: g
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.connection.rest", E = "0.0.1-next.1";
async function R(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${u}: tsm runtime is not initialized`);
  e.register(u, C, E, "lib.connection.rest"), await f?.(t);
}
async function _(t) {
  await y?.(t);
}
export {
  r as REST_CONNECTION_FACTORY,
  l as RestConnection,
  R as activate,
  _ as deactivate,
  g as factorySymbol
};
