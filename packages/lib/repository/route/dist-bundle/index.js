import { RouteRegistry as n, RouteDefinition as r, ROUTE_REGISTRY as a, ROUTE_REGISTRY_ID as o } from "org.eclipse.daanse.board.app.lib.api.route";
import { ROUTE_REGISTRY as h, ROUTE_REGISTRY_ID as v, RouteDefinition as w, RouteRegistry as E } from "org.eclipse.daanse.board.app.lib.api.route";
class u extends n {
  constructor() {
    super(...arguments), this.routesMap = /* @__PURE__ */ new Map();
  }
  registerRoute(e) {
    return e.name ? (this.routesMap.set(e.name, e), this.routes = Array.from(this.routesMap.values()), console.log(`Registered route: ${e.name} (${e.path})`), !0) : (console.warn("Cannot register route without name"), !1);
  }
  unregisterRoute(e) {
    if (!e)
      return !1;
    const s = this.routesMap.delete(e);
    return s && (this.routes = Array.from(this.routesMap.values()), console.log(`Unregistered route: ${e}`)), s;
  }
  getRoute(e) {
    return e ? this.routesMap.get(e) || new r() : new r();
  }
  getAllRoutes() {
    return Array.from(this.routesMap.values());
  }
  // Correct typed method for actual use
  getAllRoutesArray() {
    return Array.from(this.routesMap.values());
  }
}
function l({ services: t }) {
  t.register(o, new u());
}
function R({ services: t }) {
  t.unregister(o);
}
const c = a, f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROUTE_REGISTRY: a,
  ROUTE_REGISTRY_ID: o,
  RouteDefinition: r,
  RouteRegistry: n,
  RouteRegistryImpl: u,
  activate: l,
  deactivate: R,
  identifier: c
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.repository.route", g = "0.0.1-next.1";
async function m(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${i}: tsm runtime is not initialized`);
  e.register(i, f, g, "lib.repository.route"), await l?.(t);
}
async function y(t) {
  await R?.(t);
}
export {
  h as ROUTE_REGISTRY,
  v as ROUTE_REGISTRY_ID,
  w as RouteDefinition,
  E as RouteRegistry,
  u as RouteRegistryImpl,
  m as activate,
  y as deactivate,
  c as identifier
};
