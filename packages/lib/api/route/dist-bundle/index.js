import { Reference as y, Documentation as r, ModelClass as m, Attribute as g } from "org.eclipse.daanse.board.app.lib.annotations";
const { serviceId: _ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var d = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (t, o, a, n) => {
  for (var e = n > 1 ? void 0 : n ? b(o, a) : o, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (e = (n ? p(o, a, e) : p(e)) || e);
  return n && e && d(o, a, e), e;
};
let i = class {
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
l([
  y("RouteDefinition")
], i.prototype, "routes", 2);
l([
  r("Register a route definition")
], i.prototype, "registerRoute", 1);
l([
  r("Unregister a route by name")
], i.prototype, "unregisterRoute", 1);
l([
  r("Get a route by name")
], i.prototype, "getRoute", 1);
l([
  r("Get all registered routes")
], i.prototype, "getAllRoutes", 1);
i = l([
  r("Registry for managing Vue Router routes"),
  m({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteRegistry" })
], i);
var v = Object.defineProperty, w = Object.getOwnPropertyDescriptor, R = (t, o, a, n) => {
  for (var e = n > 1 ? void 0 : n ? w(o, a) : o, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (e = (n ? p(o, a, e) : p(e)) || e);
  return n && e && v(o, a, e), e;
};
let u = class {
  path;
  name;
  component;
  meta;
};
R([
  r("Route path (e.g., '/events', '/configuration')"),
  g()
], u.prototype, "path", 2);
R([
  r("Route name for navigation"),
  g()
], u.prototype, "name", 2);
R([
  r("Vue component to render for this route"),
  g()
], u.prototype, "component", 2);
R([
  r("Optional route metadata"),
  g()
], u.prototype, "meta", 2);
u = R([
  r("Represents a Vue Router route definition"),
  m({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteDefinition" })
], u);
const f = _("RouteRegistry"), h = Symbol.for(f), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROUTE_REGISTRY: h,
  ROUTE_REGISTRY_ID: f,
  get RouteDefinition() {
    return u;
  },
  get RouteRegistry() {
    return i;
  }
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.api.route", D = "0.0.1-next.1";
async function P(t) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${c}: tsm runtime is not initialized`);
  o.register(c, O, D, "lib.api.route"), await void 0;
}
async function I(t) {
  await void 0;
}
export {
  h as ROUTE_REGISTRY,
  f as ROUTE_REGISTRY_ID,
  u as RouteDefinition,
  i as RouteRegistry,
  P as activate,
  I as deactivate
};
