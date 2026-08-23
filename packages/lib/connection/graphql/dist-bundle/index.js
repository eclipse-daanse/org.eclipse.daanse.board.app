import { BaseConnection as q } from "org.eclipse.daanse.board.app.lib.connection.base";
const { serviceId: W } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var Q = Object.defineProperty, z = Object.defineProperties, Z = Object.getOwnPropertyDescriptors, R = Object.getOwnPropertySymbols, K = Object.prototype.hasOwnProperty, ee = Object.prototype.propertyIsEnumerable, A = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), j = (e, t, n) => t in e ? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, h = (e, t) => {
  for (var n in t || (t = {}))
    K.call(t, n) && j(e, n, t[n]);
  if (R)
    for (var n of R(t))
      ee.call(t, n) && j(e, n, t[n]);
  return e;
}, te = (e, t) => z(e, Z(t)), g = function(e, t) {
  this[0] = e, this[1] = t;
}, ne = (e, t, n) => {
  var i = (a, u, c, s) => {
    try {
      var l = n[a](u), f = (u = l.value) instanceof g, y = l.done;
      Promise.resolve(f ? u[0] : u).then((d) => f ? i(a === "return" ? a : "next", u[1] ? { done: d.done, value: d.value } : d, c, s) : c({ value: d, done: y })).catch((d) => i("throw", d, c, s));
    } catch (d) {
      s(d);
    }
  }, o = (a) => r[a] = (u) => new Promise((c, s) => i(a, u, c, s)), r = {};
  return n = n.apply(e, t), r[A("asyncIterator")] = () => r, o("next"), o("throw"), o("return"), r;
}, ie = (e, t, n) => (t = e[A("asyncIterator")]) ? t.call(e) : (e = e[A("iterator")](), t = {}, n = (i, o) => (o = e[i]) && (t[i] = (r) => new Promise((a, u, c) => (r = o.call(e, r), c = r.done, Promise.resolve(r.value).then((s) => a({ value: s, done: c }), u)))), n("next"), n("return"), t);
function re(e, t) {
  if (!!!e)
    throw new Error(t);
}
const k = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "description",
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: [
    "description",
    "variable",
    "type",
    "defaultValue",
    "directives"
  ],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "description",
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"],
  TypeCoordinate: ["name"],
  MemberCoordinate: ["name", "memberName"],
  ArgumentCoordinate: ["name", "fieldName", "argumentName"],
  DirectiveCoordinate: ["name"],
  DirectiveArgumentCoordinate: ["name", "argumentName"]
}, oe = new Set(Object.keys(k));
function x(e) {
  const t = e?.kind;
  return typeof t == "string" && oe.has(t);
}
var U;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(U || (U = {}));
var C;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(C || (C = {}));
const ae = 10, B = 2;
function se(e) {
  return D(e, []);
}
function D(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return ce(e, t);
    default:
      return String(e);
  }
}
function ce(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (le(e)) {
    const i = e.toJSON();
    if (i !== e)
      return typeof i == "string" ? i : D(i, n);
  } else if (Array.isArray(e))
    return fe(e, n);
  return ue(e, n);
}
function le(e) {
  return typeof e.toJSON == "function";
}
function ue(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > B ? "[" + de(e) + "]" : "{ " + n.map(
    ([o, r]) => o + ": " + D(r, t)
  ).join(", ") + " }";
}
function fe(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > B)
    return "[Array]";
  const n = Math.min(ae, e.length), i = e.length - n, o = [];
  for (let r = 0; r < n; ++r)
    o.push(D(e[r], t));
  return i === 1 ? o.push("... 1 more item") : i > 1 && o.push(`... ${i} more items`), "[" + o.join(", ") + "]";
}
function de(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const pe = Object.freeze({});
function ye(e, t, n = k) {
  const i = /* @__PURE__ */ new Map();
  for (const m of Object.values(C))
    i.set(m, me(t, m));
  let o, r = Array.isArray(e), a = [e], u = -1, c = [], s = e, l, f;
  const y = [], d = [];
  do {
    u++;
    const m = u === a.length, v = m && c.length !== 0;
    if (m) {
      if (l = d.length === 0 ? void 0 : y[y.length - 1], s = f, f = d.pop(), v)
        if (r) {
          s = s.slice();
          let p = 0;
          for (const [O, b] of c) {
            const _ = O - p;
            b === null ? (s.splice(_, 1), p++) : s[_] = b;
          }
        } else {
          s = { ...s };
          for (const [p, O] of c)
            s[p] = O;
        }
      u = o.index, a = o.keys, c = o.edits, r = o.inArray, o = o.prev;
    } else if (f) {
      if (l = r ? u : a[u], s = f[l], s == null)
        continue;
      y.push(l);
    }
    let I;
    if (!Array.isArray(s)) {
      var N, E;
      x(s) || re(!1, `Invalid AST Node: ${se(s)}.`);
      const p = m ? (N = i.get(s.kind)) === null || N === void 0 ? void 0 : N.leave : (E = i.get(s.kind)) === null || E === void 0 ? void 0 : E.enter;
      if (I = p?.call(t, s, l, f, y, d), I === pe)
        break;
      if (I === !1) {
        if (!m) {
          y.pop();
          continue;
        }
      } else if (I !== void 0 && (c.push([l, I]), !m))
        if (x(I))
          s = I;
        else {
          y.pop();
          continue;
        }
    }
    if (I === void 0 && v && c.push([l, s]), m)
      y.pop();
    else {
      var T;
      o = {
        inArray: r,
        index: u,
        keys: a,
        edits: c,
        prev: o
      }, r = Array.isArray(s), a = r ? s : (T = n[s.kind]) !== null && T !== void 0 ? T : [], u = -1, c = [], f && d.push(f), f = s;
    }
  } while (o !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : e;
}
function me(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
async function Ee(e, t) {
  if (!e.ok || !e.body || e.bodyUsed) return e;
  let n = e.headers.get("content-type");
  if (!n || !~n.indexOf("multipart/")) return e;
  let i = n.indexOf("boundary="), o = "-";
  if (~i) {
    let r = i + 9, a = n.indexOf(";", r);
    o = n.slice(r, a > -1 ? a : void 0).trim().replace(/"/g, "");
  }
  return (async function* (r, a, u) {
    let c, s, l, f = new TextDecoder("utf8"), y = r.getReader(), d = !u || !1, N = a.length, E = "", T = [];
    try {
      let m;
      e: for (; !(m = await y.read()).done; ) {
        let v = f.decode(m.value, { stream: !0 });
        c = E.length, E += v;
        let I = v.indexOf(a);
        for (~I ? c += I : c = E.indexOf(a), T = []; ~c; ) {
          let p = E.slice(0, c), O = E.slice(c + N);
          if (s) {
            let b = p.indexOf(`\r
\r
`) + 4, _ = p.lastIndexOf(`\r
`, b), P = !1, w = p.slice(b, _ > -1 ? void 0 : _), V = String(p.slice(0, b)).trim().split(`\r
`), S = {}, H = V.length;
            for (; l = V[--H]; l = l.split(": "), S[l.shift().toLowerCase()] = l.join(": ")) ;
            if (l = S["content-type"], l && ~l.indexOf("application/json")) try {
              w = JSON.parse(w), P = !0;
            } catch {
            }
            if (l = { headers: S, body: w, json: P }, d ? yield l : T.push(l), O.slice(0, 2) === "--") break e;
          } else a = `\r
` + a, s = N += 2;
          E = O, c = E.indexOf(a);
        }
        T.length && (yield T);
      }
    } finally {
      T.length && (yield T), await y.cancel();
    }
  })(e.body, `--${o}`, t);
}
function Ie(e, t, n) {
  const i = (async function* () {
    yield* e;
  })(), o = i.return.bind(i);
  if (t && (i.return = (...r) => (t(), o(...r))), n) {
    const r = i.throw.bind(i);
    i.throw = (a) => (n(a), r(a));
  }
  return i;
}
function L() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Te() {
  let e = {
    type: "running"
    /* running */
  }, t = L();
  const n = [];
  function i(a) {
    e.type === "running" && (n.push(a), t.resolve(), t = L());
  }
  const o = (async function* () {
    for (; ; )
      if (n.length > 0)
        yield n.shift();
      else {
        if (e.type === "error")
          throw e.error;
        if (e.type === "finished")
          return;
        await t.promise;
      }
  })(), r = Ie(o, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, t.resolve());
  }, (a) => {
    e.type === "running" && (e = {
      type: "error",
      error: a
    }, t.resolve());
  });
  return {
    pushValue: i,
    asyncIterableIterator: r
  };
}
const G = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Te(), i = e({
    next: (a) => {
      t(a);
    },
    complete: () => {
      n.return();
    },
    error: (a) => {
      n.throw(a);
    }
  }), o = n.return;
  let r;
  return n.return = () => (r === void 0 && (i(), r = o()), r), n;
};
function he(e) {
  return typeof e == "object" && e !== null && // The AsyncGenerator check is for Safari on iOS which currently does not have
  // Symbol.asyncIterator implemented
  // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction (async function * () {})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e[Symbol.toStringTag] === "AsyncGenerator" || Symbol.asyncIterator && Symbol.asyncIterator in e);
}
const Ne = (e) => typeof e == "object" && e !== null && "code" in e, Oe = (e, t) => {
  let n = !1;
  return ye(e, {
    OperationDefinition(i) {
      var o;
      t === ((o = i.name) == null ? void 0 : o.value) && i.operation === "subscription" && (n = !0);
    }
  }), n;
}, be = (e, t) => async (n, i) => (await t(e.url, {
  method: "POST",
  body: JSON.stringify(n),
  headers: h(h({
    "content-type": "application/json"
  }, e.headers), i?.headers)
})).json();
async function ve(e, t) {
  let n;
  try {
    const { createClient: i } = await import("./toolkit-l0sNRNKZ.js");
    return n = i({ url: e, connectionParams: t }), J(n);
  } catch (i) {
    if (Ne(i) && i.code === "MODULE_NOT_FOUND")
      throw new Error(
        "You need to install the 'graphql-ws' package to use websockets when passing a 'subscriptionUrl'"
      );
    console.error(`Error creating websocket client for ${e}`, i);
  }
}
const J = (e) => (t) => G(
  (n) => e.subscribe(t, te(h({}, n), {
    error(i) {
      i instanceof CloseEvent ? n.error(
        new Error(
          `Socket closed with event ${i.code} ${i.reason || ""}`.trim()
        )
      ) : n.error(i);
    }
  }))
), _e = (e) => (t) => {
  const n = e.request(t);
  return G(
    // @ts-ignore
    (i) => n.subscribe(i).unsubscribe
  );
}, ge = (e, t) => function(n, i) {
  return ne(this, null, function* () {
    const o = yield new g(t(e.url, {
      method: "POST",
      body: JSON.stringify(n),
      headers: h(h({
        "content-type": "application/json",
        accept: "application/json, multipart/mixed"
      }, e.headers), i?.headers)
    }).then(
      (s) => Ee(s, {})
    ));
    if (!he(o))
      return yield o.json();
    try {
      for (var r = ie(o), a, u, c; a = !(u = yield new g(r.next())).done; a = !1) {
        const s = u.value;
        if (s.some((l) => !l.json)) {
          const l = s.map(
            (f) => `Headers::
${f.headers}

Body::
${f.body}`
          );
          throw new Error(
            `Expected multipart chunks to be of json type. got:
${l}`
          );
        }
        yield s.map((l) => l.body);
      }
    } catch (s) {
      c = [s];
    } finally {
      try {
        a && (u = r.return) && (yield new g(u.call(r)));
      } finally {
        if (c)
          throw c[0];
      }
    }
  });
};
async function De(e, t) {
  if (e.wsClient)
    return J(e.wsClient);
  if (e.subscriptionUrl)
    return ve(e.subscriptionUrl, h(h({}, e.wsConnectionParams), t?.headers));
  const n = e.legacyClient || e.legacyWsClient;
  if (n)
    return _e(n);
}
function we(e) {
  const t = e.fetch || typeof window < "u" && window.fetch;
  if (!t)
    throw new Error("No valid fetcher implementation available");
  e.enableIncrementalDelivery = e.enableIncrementalDelivery !== !1;
  const n = be(e, t), i = e.enableIncrementalDelivery ? ge(e, t) : n;
  return async (o, r) => {
    if (o.operationName === "IntrospectionQuery")
      return (e.schemaFetcher || n)(
        o,
        r
      );
    if (r != null && r.documentAST && Oe(
      r.documentAST,
      o.operationName || void 0
    )) {
      const a = await De(e, r);
      if (!a)
        throw new Error(
          `Your GraphiQL createFetcher is not properly configured for websocket subscriptions yet. ${e.subscriptionUrl ? `Provided URL ${e.subscriptionUrl} failed` : "Please provide subscriptionUrl, wsClient or legacyClient option first."}`
        );
      return a(o);
    }
    return i(o, r);
  };
}
class M extends q {
  url;
  fetcher = null;
  constructor() {
    super();
  }
  init(t) {
    super.init(t), this.url = t.url, typeof window > "u" ? this.fetcher = null : this.fetcher = we({
      // url: this.url.value
      url: this.url
    });
  }
  fetch(t) {
    throw new Error("Method not implemented.");
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(t) {
    return !!t.url;
  }
}
const F = W("GraphQLConnectionFactory"), Se = Symbol.for(F);
function $({ services: e }) {
  e.register(F, (t) => {
    if (!M.validateConfiguration(t))
      throw new Error(
        "Invalid GraphQLConnection configuration. Please provide a valid configuration."
      );
    const n = new M();
    return n.init(t), n;
  });
}
function X({ services: e }) {
  e.unregister(F);
}
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: $,
  deactivate: X,
  factorySymbol: Se
}, Symbol.toStringTag, { value: "Module" })), Y = "org.eclipse.daanse.board.app.lib.connection.graphql", Ce = "0.0.1-next.1";
async function Ve(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${Y}: tsm runtime is not initialized`);
  t.register(Y, Ae, Ce, "lib.connection.graphql"), await $?.(e);
}
async function Re(e) {
  await X?.(e);
}
export {
  Ve as activate,
  Re as deactivate,
  Se as factorySymbol
};
