import { Reference as b, ModelClass as m, Documentation as l, Attribute as c } from "org.eclipse.daanse.board.app.lib.annotations";
const { serviceId: g } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, _ = (t, o, n, r) => {
  for (var e = r > 1 ? void 0 : r ? y(o, n) : o, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (e = (r ? a(o, n, e) : a(e)) || e);
  return r && e && d(o, n, e), e;
};
let u = class {
  routes = [];
  registerRoute(t) {
    throw new Error("registerRoute not implemented");
  }
  unregisterRoute(t) {
    throw new Error("unregisterRoute not implemented");
  }
  getRoute(t) {
    throw new Error("getRoute not implemented");
  }
  getAllRoutes() {
    throw new Error("getAllRoutes not implemented");
  }
};
_([
  b("RouteDefinition")
], u.prototype, "routes", 2);
u = _([
  m({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteRegistry" })
], u);
var v = Object.defineProperty, w = Object.getOwnPropertyDescriptor, s = (t, o, n, r) => {
  for (var e = r > 1 ? void 0 : r ? w(o, n) : o, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (e = (r ? a(o, n, e) : a(e)) || e);
  return r && e && v(o, n, e), e;
};
let p = class {
  path;
  name;
  component;
  meta;
};
s([
  l("Route path (e.g., '/events', '/configuration')"),
  c()
], p.prototype, "path", 2);
s([
  l("Route name for navigation"),
  c()
], p.prototype, "name", 2);
s([
  l("Vue component to render for this route"),
  c()
], p.prototype, "component", 2);
s([
  l("Optional route metadata"),
  c()
], p.prototype, "meta", 2);
p = s([
  m({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteDefinition" })
], p);
const f = g("RouteRegistry"), h = Symbol.for(f), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROUTE_REGISTRY: h,
  ROUTE_REGISTRY_ID: f,
  get RouteDefinition() {
    return p;
  },
  get RouteRegistry() {
    return u;
  }
}, Symbol.toStringTag, { value: "Module" })), R = "org.eclipse.daanse.board.app.lib.api.route", D = "0.0.1-next.1";
async function P(t) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${R}: tsm runtime is not initialized`);
  o.register(R, O, D, "lib.api.route"), await void 0;
}
async function I(t) {
  await void 0;
}
export {
  h as ROUTE_REGISTRY,
  f as ROUTE_REGISTRY_ID,
  p as RouteDefinition,
  u as RouteRegistry,
  P as activate,
  I as deactivate
};
