import { REPOSITORY_REGISTRY as Vr } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { BaseRepository as Wr } from "org.eclipse.daanse.board.app.lib.repository.persistence";
const { serviceId: zr } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function he() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
function mr(e, r, t, o) {
  if (typeof t != "function")
    throw new Error("method for before hook must be a function");
  return o || (o = {}), Array.isArray(r) ? r.reverse().reduce((i, n) => mr.bind(null, e, n, i, o), t)() : Promise.resolve().then(() => e.registry[r] ? e.registry[r].reduce((i, n) => n.hook.bind(null, i, o), t)() : t(o));
}
function Nr(e, r, t, o) {
  const i = o;
  e.registry[t] || (e.registry[t] = []), r === "before" && (o = (n, c) => Promise.resolve().then(i.bind(null, c)).then(n.bind(null, c))), r === "after" && (o = (n, c) => {
    let l;
    return Promise.resolve().then(n.bind(null, c)).then((g) => (l = g, i(l, c))).then(() => l);
  }), r === "error" && (o = (n, c) => Promise.resolve().then(n.bind(null, c)).catch((l) => i(l, c))), e.registry[t].push({
    hook: o,
    orig: i
  });
}
function Mr(e, r, t) {
  if (!e.registry[r])
    return;
  const o = e.registry[r].map((i) => i.orig).indexOf(t);
  o !== -1 && e.registry[r].splice(o, 1);
}
const Je = Function.bind, Qe = Je.bind(Je);
function Kr(e, r, t) {
  const o = Qe(Mr, null).apply(
    null,
    [r]
  );
  e.api = { remove: o }, e.remove = o, ["before", "error", "after", "wrap"].forEach((i) => {
    const n = [r, i];
    e[i] = e.api[i] = Qe(Nr, null).apply(null, n);
  });
}
function Jr() {
  const e = {
    registry: {}
  }, r = mr.bind(null, e);
  return Kr(r, e), r;
}
const Qr = { Collection: Jr };
var Yr = "0.0.0-development", Xr = `octokit-endpoint.js/${Yr} ${he()}`, Zr = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": Xr
  },
  mediaType: {
    format: ""
  }
};
function et(e) {
  return e ? Object.keys(e).reduce((r, t) => (r[t.toLowerCase()] = e[t], r), {}) : {};
}
function rt(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return !1;
  const r = Object.getPrototypeOf(e);
  if (r === null) return !0;
  const t = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Function.prototype.call(t) === Function.prototype.call(e);
}
function hr(e, r) {
  const t = Object.assign({}, e);
  return Object.keys(r).forEach((o) => {
    rt(r[o]) ? o in e ? t[o] = hr(e[o], r[o]) : Object.assign(t, { [o]: r[o] }) : Object.assign(t, { [o]: r[o] });
  }), t;
}
function Ye(e) {
  for (const r in e)
    e[r] === void 0 && delete e[r];
  return e;
}
function ke(e, r, t) {
  if (typeof r == "string") {
    let [i, n] = r.split(" ");
    t = Object.assign(n ? { method: i, url: n } : { url: i }, t);
  } else
    t = Object.assign({}, r);
  t.headers = et(t.headers), Ye(t), Ye(t.headers);
  const o = hr(e || {}, t);
  return t.url === "/graphql" && (e && e.mediaType.previews?.length && (o.mediaType.previews = e.mediaType.previews.filter(
    (i) => !o.mediaType.previews.includes(i)
  ).concat(o.mediaType.previews)), o.mediaType.previews = (o.mediaType.previews || []).map((i) => i.replace(/-preview/, ""))), o;
}
function tt(e, r) {
  const t = /\?/.test(e) ? "&" : "?", o = Object.keys(r);
  return o.length === 0 ? e : e + t + o.map((i) => i === "q" ? "q=" + r.q.split("+").map(encodeURIComponent).join("+") : `${i}=${encodeURIComponent(r[i])}`).join("&");
}
var st = /\{[^{}}]+\}/g;
function ot(e) {
  return e.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function it(e) {
  const r = e.match(st);
  return r ? r.map(ot).reduce((t, o) => t.concat(o), []) : [];
}
function Xe(e, r) {
  const t = { __proto__: null };
  for (const o of Object.keys(e))
    r.indexOf(o) === -1 && (t[o] = e[o]);
  return t;
}
function fr(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(r) {
    return /%[0-9A-Fa-f]/.test(r) || (r = encodeURI(r).replace(/%5B/g, "[").replace(/%5D/g, "]")), r;
  }).join("");
}
function J(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(r) {
    return "%" + r.charCodeAt(0).toString(16).toUpperCase();
  });
}
function se(e, r, t) {
  return r = e === "+" || e === "#" ? fr(r) : J(r), t ? J(t) + "=" + r : r;
}
function M(e) {
  return e != null;
}
function ye(e) {
  return e === ";" || e === "&" || e === "?";
}
function nt(e, r, t, o) {
  var i = e[t], n = [];
  if (M(i) && i !== "")
    if (typeof i == "string" || typeof i == "number" || typeof i == "boolean")
      i = i.toString(), o && o !== "*" && (i = i.substring(0, parseInt(o, 10))), n.push(
        se(r, i, ye(r) ? t : "")
      );
    else if (o === "*")
      Array.isArray(i) ? i.filter(M).forEach(function(c) {
        n.push(
          se(r, c, ye(r) ? t : "")
        );
      }) : Object.keys(i).forEach(function(c) {
        M(i[c]) && n.push(se(r, i[c], c));
      });
    else {
      const c = [];
      Array.isArray(i) ? i.filter(M).forEach(function(l) {
        c.push(se(r, l));
      }) : Object.keys(i).forEach(function(l) {
        M(i[l]) && (c.push(J(l)), c.push(se(r, i[l].toString())));
      }), ye(r) ? n.push(J(t) + "=" + c.join(",")) : c.length !== 0 && n.push(c.join(","));
    }
  else
    r === ";" ? M(i) && n.push(J(t)) : i === "" && (r === "&" || r === "?") ? n.push(J(t) + "=") : i === "" && n.push("");
  return n;
}
function at(e) {
  return {
    expand: ct.bind(null, e)
  };
}
function ct(e, r) {
  var t = ["+", "#", ".", "/", ";", "?", "&"];
  return e = e.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(o, i, n) {
      if (i) {
        let l = "";
        const g = [];
        if (t.indexOf(i.charAt(0)) !== -1 && (l = i.charAt(0), i = i.substr(1)), i.split(/,/g).forEach(function(f) {
          var E = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f);
          g.push(nt(r, l, E[1], E[2] || E[3]));
        }), l && l !== "+") {
          var c = ",";
          return l === "?" ? c = "&" : l !== "#" && (c = l), (g.length !== 0 ? l : "") + g.join(c);
        } else
          return g.join(",");
      } else
        return fr(n);
    }
  ), e === "/" ? e : e.replace(/\/$/, "");
}
function Er(e) {
  let r = e.method.toUpperCase(), t = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), o = Object.assign({}, e.headers), i, n = Xe(e, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const c = it(t);
  t = at(t).expand(n), /^http/.test(t) || (t = e.baseUrl + t);
  const l = Object.keys(e).filter((E) => c.includes(E)).concat("baseUrl"), g = Xe(n, l);
  if (!/application\/octet-stream/i.test(o.accept) && (e.mediaType.format && (o.accept = o.accept.split(/,/).map(
    (E) => E.replace(
      /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
      `application/vnd$1$2.${e.mediaType.format}`
    )
  ).join(",")), t.endsWith("/graphql") && e.mediaType.previews?.length)) {
    const E = o.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
    o.accept = E.concat(e.mediaType.previews).map((m) => {
      const T = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${m}-preview${T}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(r) ? t = tt(t, g) : "data" in g ? i = g.data : Object.keys(g).length && (i = g), !o["content-type"] && typeof i < "u" && (o["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(r) && typeof i > "u" && (i = ""), Object.assign(
    { method: r, url: t, headers: o },
    typeof i < "u" ? { body: i } : null,
    e.request ? { request: e.request } : null
  );
}
function ut(e, r, t) {
  return Er(ke(e, r, t));
}
function Tr(e, r) {
  const t = ke(e, r), o = ut.bind(null, t);
  return Object.assign(o, {
    DEFAULTS: t,
    defaults: Tr.bind(null, t),
    merge: ke.bind(null, t),
    parse: Er
  });
}
var lt = Tr(null, Zr), Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _r(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var K = {}, er;
function pt() {
  if (er) return K;
  er = 1;
  const e = function() {
  };
  e.prototype = /* @__PURE__ */ Object.create(null);
  const r = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu, t = /\\([\v\u0020-\u00ff])/gu, o = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u, i = { type: "", parameters: new e() };
  Object.freeze(i.parameters), Object.freeze(i);
  function n(l) {
    if (typeof l != "string")
      throw new TypeError("argument header is required and must be a string");
    let g = l.indexOf(";");
    const f = g !== -1 ? l.slice(0, g).trim() : l.trim();
    if (o.test(f) === !1)
      throw new TypeError("invalid media type");
    const E = {
      type: f.toLowerCase(),
      parameters: new e()
    };
    if (g === -1)
      return E;
    let m, T, b;
    for (r.lastIndex = g; T = r.exec(l); ) {
      if (T.index !== g)
        throw new TypeError("invalid parameter format");
      g += T[0].length, m = T[1].toLowerCase(), b = T[2], b[0] === '"' && (b = b.slice(1, b.length - 1), t.test(b) && (b = b.replace(t, "$1"))), E.parameters[m] = b;
    }
    if (g !== l.length)
      throw new TypeError("invalid parameter format");
    return E;
  }
  function c(l) {
    if (typeof l != "string")
      return i;
    let g = l.indexOf(";");
    const f = g !== -1 ? l.slice(0, g).trim() : l.trim();
    if (o.test(f) === !1)
      return i;
    const E = {
      type: f.toLowerCase(),
      parameters: new e()
    };
    if (g === -1)
      return E;
    let m, T, b;
    for (r.lastIndex = g; T = r.exec(l); ) {
      if (T.index !== g)
        return i;
      g += T[0].length, m = T[1].toLowerCase(), b = T[2], b[0] === '"' && (b = b.slice(1, b.length - 1), t.test(b) && (b = b.replace(t, "$1"))), E.parameters[m] = b;
    }
    return g !== l.length ? i : E;
  }
  return K.default = { parse: n, safeParse: c }, K.parse = n, K.safeParse = c, K.defaultContentType = i, K;
}
var gt = pt();
class ne extends Error {
  name;
  /**
   * http status code
   */
  status;
  /**
   * Request options that lead to the error.
   */
  request;
  /**
   * Response object if a response was received
   */
  response;
  constructor(r, t, o) {
    super(r), this.name = "HttpError", this.status = Number.parseInt(t), Number.isNaN(this.status) && (this.status = 0), "response" in o && (this.response = o.response);
    const i = Object.assign({}, o.request);
    o.request.headers.authorization && (i.headers = Object.assign({}, o.request.headers, {
      authorization: o.request.headers.authorization.replace(
        /(?<! ) .*$/,
        " [REDACTED]"
      )
    })), i.url = i.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = i;
  }
}
var dt = "10.0.6", mt = {
  headers: {
    "user-agent": `octokit-request.js/${dt} ${he()}`
  }
};
function ht(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return !1;
  const r = Object.getPrototypeOf(e);
  if (r === null) return !0;
  const t = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Function.prototype.call(t) === Function.prototype.call(e);
}
async function rr(e) {
  const r = e.request?.fetch || globalThis.fetch;
  if (!r)
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  const t = e.request?.log || console, o = e.request?.parseSuccessResponseBody !== !1, i = ht(e.body) || Array.isArray(e.body) ? JSON.stringify(e.body) : e.body, n = Object.fromEntries(
    Object.entries(e.headers).map(([m, T]) => [
      m,
      String(T)
    ])
  );
  let c;
  try {
    c = await r(e.url, {
      method: e.method,
      body: i,
      redirect: e.request?.redirect,
      headers: n,
      signal: e.request?.signal,
      // duplex must be set if request.body is ReadableStream or Async Iterables.
      // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
      ...e.body && { duplex: "half" }
    });
  } catch (m) {
    let T = "Unknown Error";
    if (m instanceof Error) {
      if (m.name === "AbortError")
        throw m.status = 500, m;
      T = m.message, m.name === "TypeError" && "cause" in m && (m.cause instanceof Error ? T = m.cause.message : typeof m.cause == "string" && (T = m.cause));
    }
    const b = new ne(T, 500, {
      request: e
    });
    throw b.cause = m, b;
  }
  const l = c.status, g = c.url, f = {};
  for (const [m, T] of c.headers)
    f[m] = T;
  const E = {
    url: g,
    status: l,
    headers: f,
    data: ""
  };
  if ("deprecation" in f) {
    const m = f.link && f.link.match(/<([^<>]+)>; rel="deprecation"/), T = m && m.pop();
    t.warn(
      `[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${f.sunset}${T ? `. See ${T}` : ""}`
    );
  }
  if (l === 204 || l === 205)
    return E;
  if (e.method === "HEAD") {
    if (l < 400)
      return E;
    throw new ne(c.statusText, l, {
      response: E,
      request: e
    });
  }
  if (l === 304)
    throw E.data = await ve(c), new ne("Not modified", l, {
      response: E,
      request: e
    });
  if (l >= 400)
    throw E.data = await ve(c), new ne(Et(E.data), l, {
      response: E,
      request: e
    });
  return E.data = o ? await ve(c) : c.body, E;
}
async function ve(e) {
  const r = e.headers.get("content-type");
  if (!r)
    return e.text().catch(() => "");
  const t = gt.safeParse(r);
  if (ft(t)) {
    let o = "";
    try {
      return o = await e.text(), JSON.parse(o);
    } catch {
      return o;
    }
  } else return t.type.startsWith("text/") || t.parameters.charset?.toLowerCase() === "utf-8" ? e.text().catch(() => "") : e.arrayBuffer().catch(() => new ArrayBuffer(0));
}
function ft(e) {
  return e.type === "application/json" || e.type === "application/scim+json";
}
function Et(e) {
  if (typeof e == "string")
    return e;
  if (e instanceof ArrayBuffer)
    return "Unknown error";
  if ("message" in e) {
    const r = "documentation_url" in e ? ` - ${e.documentation_url}` : "";
    return Array.isArray(e.errors) ? `${e.message}: ${e.errors.map((t) => JSON.stringify(t)).join(", ")}${r}` : `${e.message}${r}`;
  }
  return `Unknown error: ${JSON.stringify(e)}`;
}
function Re(e, r) {
  const t = e.defaults(r);
  return Object.assign(function(i, n) {
    const c = t.merge(i, n);
    if (!c.request || !c.request.hook)
      return rr(t.parse(c));
    const l = (g, f) => rr(
      t.parse(t.merge(g, f))
    );
    return Object.assign(l, {
      endpoint: t,
      defaults: Re.bind(null, t)
    }), c.request.hook(l, c);
  }, {
    endpoint: t,
    defaults: Re.bind(null, t)
  });
}
var Ae = Re(lt, mt), Tt = "0.0.0-development";
function _t(e) {
  return `Request failed due to following response errors:
` + e.errors.map((r) => ` - ${r.message}`).join(`
`);
}
var wt = class extends Error {
  constructor(e, r, t) {
    super(_t(t)), this.request = e, this.headers = r, this.response = t, this.errors = t.errors, this.data = t.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  name = "GraphqlResponseError";
  errors;
  data;
}, bt = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType",
  "operationName"
], yt = ["query", "method", "url"], tr = /\/api\/v3\/?$/;
function vt(e, r, t) {
  if (t) {
    if (typeof r == "string" && "query" in t)
      return Promise.reject(
        new Error('[@octokit/graphql] "query" cannot be used as variable name')
      );
    for (const c in t)
      if (yt.includes(c))
        return Promise.reject(
          new Error(
            `[@octokit/graphql] "${c}" cannot be used as variable name`
          )
        );
  }
  const o = typeof r == "string" ? Object.assign({ query: r }, t) : r, i = Object.keys(
    o
  ).reduce((c, l) => bt.includes(l) ? (c[l] = o[l], c) : (c.variables || (c.variables = {}), c.variables[l] = o[l], c), {}), n = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return tr.test(n) && (i.url = n.replace(tr, "/api/graphql")), e(i).then((c) => {
    if (c.data.errors) {
      const l = {};
      for (const g of Object.keys(c.headers))
        l[g] = c.headers[g];
      throw new wt(
        i,
        l,
        c.data
      );
    }
    return c.data.data;
  });
}
function Fe(e, r) {
  const t = e.defaults(r);
  return Object.assign((i, n) => vt(t, i, n), {
    defaults: Fe.bind(null, t),
    endpoint: t.endpoint
  });
}
Fe(Ae, {
  headers: {
    "user-agent": `octokit-graphql.js/${Tt} ${he()}`
  },
  method: "POST",
  url: "/graphql"
});
function Pt(e) {
  return Fe(e, {
    method: "POST",
    url: "/graphql"
  });
}
var Pe = "(?:[a-zA-Z0-9_-]+)", sr = "\\.", or = new RegExp(`^${Pe}${sr}${Pe}${sr}${Pe}$`), Gt = or.test.bind(or);
async function Ot(e) {
  const r = Gt(e), t = e.startsWith("v1.") || e.startsWith("ghs_"), o = e.startsWith("ghu_");
  return {
    type: "token",
    token: e,
    tokenType: r ? "app" : t ? "installation" : o ? "user-to-server" : "oauth"
  };
}
function kt(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function Rt(e, r, t, o) {
  const i = r.endpoint.merge(
    t,
    o
  );
  return i.headers.authorization = kt(e), r(i);
}
var At = function(r) {
  if (!r)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof r != "string")
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  return r = r.replace(/^(token|bearer) +/i, ""), Object.assign(Ot.bind(null, r), {
    hook: Rt.bind(null, r)
  });
};
const wr = "7.0.6", ir = () => {
}, St = console.warn.bind(console), Ft = console.error.bind(console);
function Ct(e = {}) {
  return typeof e.debug != "function" && (e.debug = ir), typeof e.info != "function" && (e.info = ir), typeof e.warn != "function" && (e.warn = St), typeof e.error != "function" && (e.error = Ft), e;
}
const nr = `octokit-core.js/${wr} ${he()}`;
let Dt = class {
  static VERSION = wr;
  static defaults(r) {
    return class extends this {
      constructor(...o) {
        const i = o[0] || {};
        if (typeof r == "function") {
          super(r(i));
          return;
        }
        super(
          Object.assign(
            {},
            r,
            i,
            i.userAgent && r.userAgent ? {
              userAgent: `${i.userAgent} ${r.userAgent}`
            } : null
          )
        );
      }
    };
  }
  static plugins = [];
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin(...r) {
    const t = this.plugins;
    return class extends this {
      static plugins = t.concat(
        r.filter((i) => !t.includes(i))
      );
    };
  }
  constructor(r = {}) {
    const t = new Qr.Collection(), o = {
      baseUrl: Ae.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, r.request, {
        // @ts-ignore internal usage only, no need to type
        hook: t.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    if (o.headers["user-agent"] = r.userAgent ? `${r.userAgent} ${nr}` : nr, r.baseUrl && (o.baseUrl = r.baseUrl), r.previews && (o.mediaType.previews = r.previews), r.timeZone && (o.headers["time-zone"] = r.timeZone), this.request = Ae.defaults(o), this.graphql = Pt(this.request).defaults(o), this.log = Ct(r.log), this.hook = t, r.authStrategy) {
      const { authStrategy: n, ...c } = r, l = n(
        Object.assign(
          {
            request: this.request,
            log: this.log,
            // we pass the current octokit instance as well as its constructor options
            // to allow for authentication strategies that return a new octokit instance
            // that shares the same internal state as the current one. The original
            // requirement for this was the "event-octokit" authentication strategy
            // of https://github.com/probot/octokit-auth-probot.
            octokit: this,
            octokitOptions: c
          },
          r.auth
        )
      );
      t.wrap("request", l.hook), this.auth = l;
    } else if (!r.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const n = At(r.auth);
      t.wrap("request", n.hook), this.auth = n;
    }
    const i = this.constructor;
    for (let n = 0; n < i.plugins.length; ++n)
      Object.assign(this, i.plugins[n](this, r));
  }
  // assigned during constructor
  request;
  graphql;
  log;
  hook;
  // TODO: type `octokit.auth` based on passed options.authStrategy
  auth;
};
var Ut = "0.0.0-development";
function Lt(e) {
  if (!e.data)
    return {
      ...e,
      data: []
    };
  if (!(("total_count" in e.data || "total_commits" in e.data) && !("url" in e.data))) return e;
  const t = e.data.incomplete_results, o = e.data.repository_selection, i = e.data.total_count, n = e.data.total_commits;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count, delete e.data.total_commits;
  const c = Object.keys(e.data)[0], l = e.data[c];
  return e.data = l, typeof t < "u" && (e.data.incomplete_results = t), typeof o < "u" && (e.data.repository_selection = o), e.data.total_count = i, e.data.total_commits = n, e;
}
function Ce(e, r, t) {
  const o = typeof r == "function" ? r.endpoint(t) : e.request.endpoint(r, t), i = typeof r == "function" ? r : e.request, n = o.method, c = o.headers;
  let l = o.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!l) return { done: !0 };
        try {
          const g = await i({ method: n, url: l, headers: c }), f = Lt(g);
          if (l = ((f.headers.link || "").match(
            /<([^<>]+)>;\s*rel="next"/
          ) || [])[1], !l && "total_commits" in f.data) {
            const E = new URL(f.url), m = E.searchParams, T = parseInt(m.get("page") || "1", 10), b = parseInt(m.get("per_page") || "250", 10);
            T * b < f.data.total_commits && (m.set("page", String(T + 1)), l = E.toString());
          }
          return { value: f };
        } catch (g) {
          if (g.status !== 409) throw g;
          return l = "", {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }
    })
  };
}
function br(e, r, t, o) {
  return typeof t == "function" && (o = t, t = void 0), yr(
    e,
    [],
    Ce(e, r, t)[Symbol.asyncIterator](),
    o
  );
}
function yr(e, r, t, o) {
  return t.next().then((i) => {
    if (i.done)
      return r;
    let n = !1;
    function c() {
      n = !0;
    }
    return r = r.concat(
      o ? o(i.value, c) : i.value.data
    ), n ? r : yr(e, r, t, o);
  });
}
Object.assign(br, {
  iterator: Ce
});
function vr(e) {
  return {
    paginate: Object.assign(br.bind(null, e), {
      iterator: Ce.bind(null, e)
    })
  };
}
vr.VERSION = Ut;
var It = (e, r) => `The cursor at "${e.join(
  ","
)}" did not change its value "${r}" after a page transition. Please make sure your that your query is set up correctly.`, qt = class extends Error {
  constructor(e, r) {
    super(It(e.pathInQuery, r)), this.pageInfo = e, this.cursorValue = r, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  name = "MissingCursorChangeError";
}, jt = class extends Error {
  constructor(e) {
    super(
      `No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(
        e,
        null,
        2
      )}`
    ), this.response = e, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  name = "MissingPageInfo";
}, xt = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Pr(e) {
  const r = Gr(
    e,
    "pageInfo"
  );
  if (r.length === 0)
    throw new jt(e);
  return r;
}
var Gr = (e, r, t = []) => {
  for (const o of Object.keys(e)) {
    const i = [...t, o], n = e[o];
    if (xt(n)) {
      if (n.hasOwnProperty(r))
        return i;
      const c = Gr(
        n,
        r,
        i
      );
      if (c.length > 0)
        return c;
    }
  }
  return [];
}, ae = (e, r) => r.reduce((t, o) => t[o], e), Ge = (e, r, t) => {
  const o = r[r.length - 1], i = [...r].slice(0, -1), n = ae(e, i);
  typeof t == "function" ? n[o] = t(n[o]) : n[o] = t;
}, $t = (e) => {
  const r = Pr(e);
  return {
    pathInQuery: r,
    pageInfo: ae(e, [...r, "pageInfo"])
  };
}, Or = (e) => e.hasOwnProperty("hasNextPage"), Bt = (e) => Or(e) ? e.endCursor : e.startCursor, Ht = (e) => Or(e) ? e.hasNextPage : e.hasPreviousPage, kr = (e) => (r, t = {}) => {
  let o = !0, i = { ...t };
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!o) return { done: !0, value: {} };
        const n = await e.graphql(
          r,
          i
        ), c = $t(n), l = Bt(c.pageInfo);
        if (o = Ht(c.pageInfo), o && l === i.cursor)
          throw new qt(c, l);
        return i = {
          ...i,
          cursor: l
        }, { done: !1, value: n };
      }
    })
  };
}, Vt = (e, r) => {
  if (Object.keys(e).length === 0)
    return Object.assign(e, r);
  const t = Pr(e), o = [...t, "nodes"], i = ae(r, o);
  i && Ge(e, o, (g) => [...g, ...i]);
  const n = [...t, "edges"], c = ae(r, n);
  c && Ge(e, n, (g) => [...g, ...c]);
  const l = [...t, "pageInfo"];
  return Ge(e, l, ae(r, l)), e;
}, Wt = (e) => {
  const r = kr(e);
  return async (t, o = {}) => {
    let i = {};
    for await (const n of r(
      t,
      o
    ))
      i = Vt(i, n);
    return i;
  };
};
function zt(e) {
  return {
    graphql: Object.assign(e.graphql, {
      paginate: Object.assign(Wt(e), {
        iterator: kr(e)
      })
    })
  };
}
const Nt = "17.0.0", Mt = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addRepoAccessToSelfHostedRunnerGroupInOrg: [
      "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    createHostedRunnerForOrg: ["POST /orgs/{org}/actions/hosted-runners"],
    createOrUpdateEnvironmentSecret: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteCustomImageFromOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}"
    ],
    deleteCustomImageVersionFromOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    deleteHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    forceCancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getCustomImageForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}"
    ],
    getCustomImageVersionForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}"
    ],
    getCustomOidcSubClaimForRepo: [
      "GET /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    getEnvironmentPublicKey: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    getHostedRunnersGithubOwnedImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/github-owned"
    ],
    getHostedRunnersLimitsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/limits"
    ],
    getHostedRunnersMachineSpecsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/machine-sizes"
    ],
    getHostedRunnersPartnerImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/partner"
    ],
    getHostedRunnersPlatformsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/platforms"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listCustomImageVersionsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions"
    ],
    listCustomImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/custom"
    ],
    listEnvironmentSecrets: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    listGithubHostedRunnersInGroupForOrg: [
      "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners"
    ],
    listHostedRunnersForOrg: ["GET /orgs/{org}/actions/hosted-runners"],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    updateHostedRunnerForOrg: [
      "PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubBillingPremiumRequestUsageReportOrg: [
      "GET /organizations/{org}/settings/billing/premium_request/usage"
    ],
    getGithubBillingPremiumRequestUsageReportUser: [
      "GET /users/{username}/settings/billing/premium_request/usage"
    ],
    getGithubBillingUsageReportOrg: [
      "GET /organizations/{org}/settings/billing/usage"
    ],
    getGithubBillingUsageReportUser: [
      "GET /users/{username}/settings/billing/usage"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  campaigns: {
    createCampaign: ["POST /orgs/{org}/campaigns"],
    deleteCampaign: ["DELETE /orgs/{org}/campaigns/{campaign_number}"],
    getCampaignSummary: ["GET /orgs/{org}/campaigns/{campaign_number}"],
    listOrgCampaigns: ["GET /orgs/{org}/campaigns"],
    updateCampaign: ["PATCH /orgs/{org}/campaigns/{campaign_number}"]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    commitAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"
    ],
    createAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    createVariantAnalysis: [
      "POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"
    ],
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    deleteCodeqlDatabase: [
      "DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getAutofix: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    getVariantAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"
    ],
    getVariantAnalysisRepoTask: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"
    ],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codeSecurity: {
    attachConfiguration: [
      "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"
    ],
    attachEnterpriseConfiguration: [
      "POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"
    ],
    createConfiguration: ["POST /orgs/{org}/code-security/configurations"],
    createConfigurationForEnterprise: [
      "POST /enterprises/{enterprise}/code-security/configurations"
    ],
    deleteConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    deleteConfigurationForEnterprise: [
      "DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    detachConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/detach"
    ],
    getConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    getConfigurationForRepository: [
      "GET /repos/{owner}/{repo}/code-security-configuration"
    ],
    getConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations"
    ],
    getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"],
    getDefaultConfigurations: [
      "GET /orgs/{org}/code-security/configurations/defaults"
    ],
    getDefaultConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/defaults"
    ],
    getRepositoriesForConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"
    ],
    getRepositoriesForEnterpriseConfiguration: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"
    ],
    getSingleConfigurationForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    setConfigurationAsDefault: [
      "PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"
    ],
    setConfigurationAsDefaultForEnterprise: [
      "PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"
    ],
    updateConfiguration: [
      "PATCH /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    updateEnterpriseConfiguration: [
      "PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    checkPermissionsForDevcontainer: [
      "GET /repos/{owner}/{repo}/codespaces/permissions_check"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  copilot: {
    addCopilotSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotSeatsForUsers: [
      "POST /orgs/{org}/copilot/billing/selected_users"
    ],
    cancelCopilotSeatAssignmentForTeams: [
      "DELETE /orgs/{org}/copilot/billing/selected_teams"
    ],
    cancelCopilotSeatAssignmentForUsers: [
      "DELETE /orgs/{org}/copilot/billing/selected_users"
    ],
    copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"],
    copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"],
    getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
    getCopilotSeatDetailsForUser: [
      "GET /orgs/{org}/members/{username}/copilot"
    ],
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"]
  },
  credentials: { revoke: ["POST /credentials/revoke"] },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repositoryAccessForOrg: [
      "GET /organizations/{org}/dependabot/repository-access"
    ],
    setRepositoryAccessDefaultLevel: [
      "PUT /organizations/{org}/dependabot/repository-access/default-level"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ],
    updateRepositoryAccessForOrg: [
      "PATCH /organizations/{org}/dependabot/repository-access"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  enterpriseTeamMemberships: {
    add: [
      "PUT /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ],
    bulkAdd: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/add"
    ],
    bulkRemove: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove"
    ],
    get: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ],
    list: ["GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships"],
    remove: [
      "DELETE /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}"
    ]
  },
  enterpriseTeamOrganizations: {
    add: [
      "PUT /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    bulkAdd: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/add"
    ],
    bulkRemove: [
      "POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/remove"
    ],
    delete: [
      "DELETE /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    getAssignment: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}"
    ],
    getAssignments: [
      "GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations"
    ]
  },
  enterpriseTeams: {
    create: ["POST /enterprises/{enterprise}/teams"],
    delete: ["DELETE /enterprises/{enterprise}/teams/{team_slug}"],
    get: ["GET /enterprises/{enterprise}/teams/{team_slug}"],
    list: ["GET /enterprises/{enterprise}/teams"],
    update: ["PATCH /enterprises/{enterprise}/teams/{team_slug}"]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  hostedCompute: {
    createNetworkConfigurationForOrg: [
      "POST /orgs/{org}/settings/network-configurations"
    ],
    deleteNetworkConfigurationFromOrg: [
      "DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkConfigurationForOrg: [
      "GET /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkSettingsForOrg: [
      "GET /orgs/{org}/settings/network-settings/{network_settings_id}"
    ],
    listNetworkConfigurationsForOrg: [
      "GET /orgs/{org}/settings/network-configurations"
    ],
    updateNetworkConfigurationForOrg: [
      "PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addBlockedByDependency: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    addSubIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    getParent: ["GET /repos/{owner}/{repo}/issues/{issue_number}/parent"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listDependenciesBlockedBy: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by"
    ],
    listDependenciesBlocking: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking"
    ],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    listSubIssues: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeDependencyBlockedBy: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    removeSubIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"
    ],
    reprioritizeSubIssue: [
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ]
  },
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/{org}/actions/oidc/customization/sub"
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/{org}/actions/oidc/customization/sub"
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team"
      }
    ],
    assignTeamToOrgRole: [
      "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    assignUserToOrgRole: [
      "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createArtifactStorageRecord: [
      "POST /orgs/{org}/artifacts/metadata/storage-record"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createIssueType: ["POST /orgs/{org}/issue-types"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    customPropertiesForOrgsCreateOrUpdateOrganizationValues: [
      "PATCH /organizations/{org}/org-properties/values"
    ],
    customPropertiesForOrgsGetOrganizationValues: [
      "GET /organizations/{org}/org-properties/values"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationDefinition: [
      "PUT /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationDefinitions: [
      "PATCH /orgs/{org}/properties/schema"
    ],
    customPropertiesForReposCreateOrUpdateOrganizationValues: [
      "PATCH /orgs/{org}/properties/values"
    ],
    customPropertiesForReposDeleteOrganizationDefinition: [
      "DELETE /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposGetOrganizationDefinition: [
      "GET /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    customPropertiesForReposGetOrganizationDefinitions: [
      "GET /orgs/{org}/properties/schema"
    ],
    customPropertiesForReposGetOrganizationValues: [
      "GET /orgs/{org}/properties/values"
    ],
    delete: ["DELETE /orgs/{org}"],
    deleteAttestationsBulk: ["POST /orgs/{org}/attestations/delete-request"],
    deleteAttestationsById: [
      "DELETE /orgs/{org}/attestations/{attestation_id}"
    ],
    deleteAttestationsBySubjectDigest: [
      "DELETE /orgs/{org}/attestations/digest/{subject_digest}"
    ],
    deleteIssueType: ["DELETE /orgs/{org}/issue-types/{issue_type_id}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    disableSelectedRepositoryImmutableReleasesOrganization: [
      "DELETE /orgs/{org}/settings/immutable-releases/repositories/{repository_id}"
    ],
    enableSelectedRepositoryImmutableReleasesOrganization: [
      "PUT /orgs/{org}/settings/immutable-releases/repositories/{repository_id}"
    ],
    get: ["GET /orgs/{org}"],
    getImmutableReleasesSettings: [
      "GET /orgs/{org}/settings/immutable-releases"
    ],
    getImmutableReleasesSettingsRepositories: [
      "GET /orgs/{org}/settings/immutable-releases/repositories"
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
    getOrgRulesetHistory: ["GET /orgs/{org}/rulesets/{ruleset_id}/history"],
    getOrgRulesetVersion: [
      "GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listArtifactStorageRecords: [
      "GET /orgs/{org}/artifacts/{subject_digest}/metadata/storage-records"
    ],
    listAttestationRepositories: ["GET /orgs/{org}/attestations/repositories"],
    listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"],
    listAttestationsBulk: [
      "POST /orgs/{org}/attestations/bulk-list{?per_page,before,after}"
    ],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listIssueTypes: ["GET /orgs/{org}/issue-types"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"],
    listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"],
    listOrgRoles: ["GET /orgs/{org}/organization-roles"],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/{org}/organization-fine-grained-permissions"
    ],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"],
    listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: [
      "GET /orgs/{org}/security-managers",
      {},
      {
        deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams"
      }
    ],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team"
      }
    ],
    reviewPatGrantRequest: [
      "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /orgs/{org}/personal-access-token-requests"
    ],
    revokeAllOrgRolesTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}"
    ],
    revokeAllOrgRolesUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}"
    ],
    revokeOrgRoleTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    revokeOrgRoleUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    setImmutableReleasesSettings: [
      "PUT /orgs/{org}/settings/immutable-releases"
    ],
    setImmutableReleasesSettingsRepositories: [
      "PUT /orgs/{org}/settings/immutable-releases/repositories"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateIssueType: ["PUT /orgs/{org}/issue-types/{issue_type_id}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
    updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  privateRegistries: {
    createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"],
    deleteOrgPrivateRegistry: [
      "DELETE /orgs/{org}/private-registries/{secret_name}"
    ],
    getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"],
    listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"],
    updateOrgPrivateRegistry: [
      "PATCH /orgs/{org}/private-registries/{secret_name}"
    ]
  },
  projects: {
    addItemForOrg: ["POST /orgs/{org}/projectsV2/{project_number}/items"],
    addItemForUser: [
      "POST /users/{username}/projectsV2/{project_number}/items"
    ],
    deleteItemForOrg: [
      "DELETE /orgs/{org}/projectsV2/{project_number}/items/{item_id}"
    ],
    deleteItemForUser: [
      "DELETE /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ],
    getFieldForOrg: [
      "GET /orgs/{org}/projectsV2/{project_number}/fields/{field_id}"
    ],
    getFieldForUser: [
      "GET /users/{username}/projectsV2/{project_number}/fields/{field_id}"
    ],
    getForOrg: ["GET /orgs/{org}/projectsV2/{project_number}"],
    getForUser: ["GET /users/{username}/projectsV2/{project_number}"],
    getOrgItem: ["GET /orgs/{org}/projectsV2/{project_number}/items/{item_id}"],
    getUserItem: [
      "GET /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ],
    listFieldsForOrg: ["GET /orgs/{org}/projectsV2/{project_number}/fields"],
    listFieldsForUser: [
      "GET /users/{username}/projectsV2/{project_number}/fields"
    ],
    listForOrg: ["GET /orgs/{org}/projectsV2"],
    listForUser: ["GET /users/{username}/projectsV2"],
    listItemsForOrg: ["GET /orgs/{org}/projectsV2/{project_number}/items"],
    listItemsForUser: [
      "GET /users/{username}/projectsV2/{project_number}/items"
    ],
    updateItemForOrg: [
      "PATCH /orgs/{org}/projectsV2/{project_number}/items/{item_id}"
    ],
    updateItemForUser: [
      "PATCH /users/{username}/projectsV2/{project_number}/items/{item_id}"
    ]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    cancelPagesDeployment: [
      "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"
    ],
    checkAutomatedSecurityFixes: [
      "GET /repos/{owner}/{repo}/automated-security-fixes"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkImmutableReleases: ["GET /repos/{owner}/{repo}/immutable-releases"],
    checkPrivateVulnerabilityReporting: [
      "GET /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAttestation: ["POST /repos/{owner}/{repo}/attestations"],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    customPropertiesForReposCreateOrUpdateRepositoryValues: [
      "PATCH /repos/{owner}/{repo}/properties/values"
    ],
    customPropertiesForReposGetRepositoryValues: [
      "GET /repos/{owner}/{repo}/properties/values"
    ],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disableImmutableReleases: [
      "DELETE /repos/{owner}/{repo}/immutable-releases"
    ],
    disablePrivateVulnerabilityReporting: [
      "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enableImmutableReleases: ["PUT /repos/{owner}/{repo}/immutable-releases"],
    enablePrivateVulnerabilityReporting: [
      "PUT /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],
    getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesDeployment: [
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"
    ],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleSuite: [
      "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"
    ],
    getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesetHistory: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history"
    ],
    getRepoRulesetVersion: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listActivities: ["GET /repos/{owner}/{repo}/activity"],
    listAttestations: [
      "GET /repos/{owner}/{repo}/attestations/{subject_digest}"
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    createPushProtectionBypass: [
      "POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    listOrgPatternConfigs: [
      "GET /orgs/{org}/secret-scanning/pattern-configurations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    updateOrgPatternConfigs: [
      "PATCH /orgs/{org}/secret-scanning/pattern-configurations"
    ]
  },
  securityAdvisories: {
    createFork: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"
    ],
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    createRepositoryAdvisoryCveRequest: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"
    ],
    getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listGlobalAdvisories: ["GET /advisories"],
    listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
    listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteAttestationsBulk: [
      "POST /users/{username}/attestations/delete-request"
    ],
    deleteAttestationsById: [
      "DELETE /users/{username}/attestations/{attestation_id}"
    ],
    deleteAttestationsBySubjectDigest: [
      "DELETE /users/{username}/attestations/digest/{subject_digest}"
    ],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getById: ["GET /user/{account_id}"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listAttestations: ["GET /users/{username}/attestations/{subject_digest}"],
    listAttestationsBulk: [
      "POST /users/{username}/attestations/bulk-list{?per_page,before,after}"
    ],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};
var Kt = Mt;
const V = /* @__PURE__ */ new Map();
for (const [e, r] of Object.entries(Kt))
  for (const [t, o] of Object.entries(r)) {
    const [i, n, c] = o, [l, g] = i.split(/ /), f = Object.assign(
      {
        method: l,
        url: g
      },
      n
    );
    V.has(e) || V.set(e, /* @__PURE__ */ new Map()), V.get(e).set(t, {
      scope: e,
      methodName: t,
      endpointDefaults: f,
      decorations: c
    });
  }
const Jt = {
  has({ scope: e }, r) {
    return V.get(e).has(r);
  },
  getOwnPropertyDescriptor(e, r) {
    return {
      value: this.get(e, r),
      // ensures method is in the cache
      configurable: !0,
      writable: !0,
      enumerable: !0
    };
  },
  defineProperty(e, r, t) {
    return Object.defineProperty(e.cache, r, t), !0;
  },
  deleteProperty(e, r) {
    return delete e.cache[r], !0;
  },
  ownKeys({ scope: e }) {
    return [...V.get(e).keys()];
  },
  set(e, r, t) {
    return e.cache[r] = t;
  },
  get({ octokit: e, scope: r, cache: t }, o) {
    if (t[o])
      return t[o];
    const i = V.get(r).get(o);
    if (!i)
      return;
    const { endpointDefaults: n, decorations: c } = i;
    return c ? t[o] = Yt(
      e,
      r,
      o,
      n,
      c
    ) : t[o] = e.request.defaults(n), t[o];
  }
};
function Qt(e) {
  const r = {};
  for (const t of V.keys())
    r[t] = new Proxy({ octokit: e, scope: t, cache: {} }, Jt);
  return r;
}
function Yt(e, r, t, o, i) {
  const n = e.request.defaults(o);
  function c(...l) {
    let g = n.endpoint.merge(...l);
    if (i.mapToData)
      return g = Object.assign({}, g, {
        data: g[i.mapToData],
        [i.mapToData]: void 0
      }), n(g);
    if (i.renamed) {
      const [f, E] = i.renamed;
      e.log.warn(
        `octokit.${r}.${t}() has been renamed to octokit.${f}.${E}()`
      );
    }
    if (i.deprecated && e.log.warn(i.deprecated), i.renamedParameters) {
      const f = n.endpoint.merge(...l);
      for (const [E, m] of Object.entries(
        i.renamedParameters
      ))
        E in f && (e.log.warn(
          `"${E}" parameter is deprecated for "octokit.${r}.${t}()". Use "${m}" instead`
        ), m in f || (f[m] = f[E]), delete f[E]);
      return n(f);
    }
    return n(...l);
  }
  return Object.assign(c, n);
}
function Rr(e) {
  return {
    rest: Qt(e)
  };
}
Rr.VERSION = Nt;
var ge = { exports: {} }, Xt = ge.exports, ar;
function Zt() {
  return ar || (ar = 1, (function(e, r) {
    (function(t, o) {
      e.exports = o();
    })(Xt, (function() {
      var t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ze < "u" ? Ze : typeof self < "u" ? self : {};
      function o(w) {
        return w && w.default || w;
      }
      var i = function(w, a, s = {}) {
        var u, p, d;
        for (u in a)
          d = a[u], s[u] = (p = w[u]) != null ? p : d;
        return s;
      }, n = function(w, a, s = {}) {
        var u, p;
        for (u in w)
          p = w[u], a[u] !== void 0 && (s[u] = p);
        return s;
      }, c = {
        load: i,
        overwrite: n
      }, l;
      l = class {
        constructor(a, s) {
          this.incr = a, this.decr = s, this._first = null, this._last = null, this.length = 0;
        }
        push(a) {
          var s;
          this.length++, typeof this.incr == "function" && this.incr(), s = {
            value: a,
            prev: this._last,
            next: null
          }, this._last != null ? (this._last.next = s, this._last = s) : this._first = this._last = s;
        }
        shift() {
          var a;
          if (this._first != null)
            return this.length--, typeof this.decr == "function" && this.decr(), a = this._first.value, (this._first = this._first.next) != null ? this._first.prev = null : this._last = null, a;
        }
        first() {
          if (this._first != null)
            return this._first.value;
        }
        getArray() {
          var a, s, u;
          for (a = this._first, u = []; a != null; )
            u.push((s = a, a = a.next, s.value));
          return u;
        }
        forEachShift(a) {
          var s;
          for (s = this.shift(); s != null; )
            a(s), s = this.shift();
        }
        debug() {
          var a, s, u, p, d;
          for (a = this._first, d = []; a != null; )
            d.push((s = a, a = a.next, {
              value: s.value,
              prev: (u = s.prev) != null ? u.value : void 0,
              next: (p = s.next) != null ? p.value : void 0
            }));
          return d;
        }
      };
      var g = l, f;
      f = class {
        constructor(a) {
          if (this.instance = a, this._events = {}, this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null)
            throw new Error("An Emitter already exists for this object");
          this.instance.on = (s, u) => this._addListener(s, "many", u), this.instance.once = (s, u) => this._addListener(s, "once", u), this.instance.removeAllListeners = (s = null) => s != null ? delete this._events[s] : this._events = {};
        }
        _addListener(a, s, u) {
          var p;
          return (p = this._events)[a] == null && (p[a] = []), this._events[a].push({ cb: u, status: s }), this.instance;
        }
        listenerCount(a) {
          return this._events[a] != null ? this._events[a].length : 0;
        }
        async trigger(a, ...s) {
          var u, p;
          try {
            return a !== "debug" && this.trigger("debug", `Event triggered: ${a}`, s), this._events[a] == null ? void 0 : (this._events[a] = this._events[a].filter(function(d) {
              return d.status !== "none";
            }), p = this._events[a].map(async (d) => {
              var h, _;
              if (d.status !== "none") {
                d.status === "once" && (d.status = "none");
                try {
                  return _ = typeof d.cb == "function" ? d.cb(...s) : void 0, typeof _?.then == "function" ? await _ : _;
                } catch (y) {
                  return h = y, this.trigger("error", h), null;
                }
              }
            }), (await Promise.all(p)).find(function(d) {
              return d != null;
            }));
          } catch (d) {
            return u = d, this.trigger("error", u), null;
          }
        }
      };
      var E = f, m, T, b;
      m = g, T = E, b = class {
        constructor(a) {
          this.Events = new T(this), this._length = 0, this._lists = (function() {
            var s, u, p;
            for (p = [], s = 1, u = a; 1 <= u ? s <= u : s >= u; 1 <= u ? ++s : --s)
              p.push(new m((() => this.incr()), (() => this.decr())));
            return p;
          }).call(this);
        }
        incr() {
          if (this._length++ === 0)
            return this.Events.trigger("leftzero");
        }
        decr() {
          if (--this._length === 0)
            return this.Events.trigger("zero");
        }
        push(a) {
          return this._lists[a.options.priority].push(a);
        }
        queued(a) {
          return a != null ? this._lists[a].length : this._length;
        }
        shiftAll(a) {
          return this._lists.forEach(function(s) {
            return s.forEachShift(a);
          });
        }
        getFirst(a = this._lists) {
          var s, u, p;
          for (s = 0, u = a.length; s < u; s++)
            if (p = a[s], p.length > 0)
              return p;
          return [];
        }
        shiftLastFrom(a) {
          return this.getFirst(this._lists.slice(a).reverse()).shift();
        }
      };
      var k = b, R;
      R = class extends Error {
      };
      var L = R, j, D, z, I, S;
      I = 10, D = 5, S = c, j = L, z = class {
        constructor(a, s, u, p, d, h, _, y) {
          this.task = a, this.args = s, this.rejectOnDrop = d, this.Events = h, this._states = _, this.Promise = y, this.options = S.load(u, p), this.options.priority = this._sanitizePriority(this.options.priority), this.options.id === p.id && (this.options.id = `${this.options.id}-${this._randomIndex()}`), this.promise = new this.Promise((v, P) => {
            this._resolve = v, this._reject = P;
          }), this.retryCount = 0;
        }
        _sanitizePriority(a) {
          var s;
          return s = ~~a !== a ? D : a, s < 0 ? 0 : s > I - 1 ? I - 1 : s;
        }
        _randomIndex() {
          return Math.random().toString(36).slice(2);
        }
        doDrop({ error: a, message: s = "This job has been dropped by Bottleneck" } = {}) {
          return this._states.remove(this.options.id) ? (this.rejectOnDrop && this._reject(a ?? new j(s)), this.Events.trigger("dropped", { args: this.args, options: this.options, task: this.task, promise: this.promise }), !0) : !1;
        }
        _assertStatus(a) {
          var s;
          if (s = this._states.jobStatus(this.options.id), !(s === a || a === "DONE" && s === null))
            throw new j(`Invalid job status ${s}, expected ${a}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
        }
        doReceive() {
          return this._states.start(this.options.id), this.Events.trigger("received", { args: this.args, options: this.options });
        }
        doQueue(a, s) {
          return this._assertStatus("RECEIVED"), this._states.next(this.options.id), this.Events.trigger("queued", { args: this.args, options: this.options, reachedHWM: a, blocked: s });
        }
        doRun() {
          return this.retryCount === 0 ? (this._assertStatus("QUEUED"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), this.Events.trigger("scheduled", { args: this.args, options: this.options });
        }
        async doExecute(a, s, u, p) {
          var d, h, _;
          this.retryCount === 0 ? (this._assertStatus("RUNNING"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), h = { args: this.args, options: this.options, retryCount: this.retryCount }, this.Events.trigger("executing", h);
          try {
            if (_ = await (a != null ? a.schedule(this.options, this.task, ...this.args) : this.task(...this.args)), s())
              return this.doDone(h), await p(this.options, h), this._assertStatus("DONE"), this._resolve(_);
          } catch (y) {
            return d = y, this._onFailure(d, h, s, u, p);
          }
        }
        doExpire(a, s, u) {
          var p, d;
          return this._states.jobStatus(this.options.id === "RUNNING") && this._states.next(this.options.id), this._assertStatus("EXECUTING"), d = { args: this.args, options: this.options, retryCount: this.retryCount }, p = new j(`This job timed out after ${this.options.expiration} ms.`), this._onFailure(p, d, a, s, u);
        }
        async _onFailure(a, s, u, p, d) {
          var h, _;
          if (u())
            return h = await this.Events.trigger("failed", a, s), h != null ? (_ = ~~h, this.Events.trigger("retry", `Retrying ${this.options.id} after ${_} ms`, s), this.retryCount++, p(_)) : (this.doDone(s), await d(this.options, s), this._assertStatus("DONE"), this._reject(a));
        }
        doDone(a) {
          return this._assertStatus("EXECUTING"), this._states.next(this.options.id), this.Events.trigger("done", a);
        }
      };
      var q = z, G, Q, N;
      N = c, G = L, Q = class {
        constructor(a, s, u) {
          this.instance = a, this.storeOptions = s, this.clientId = this.instance._randomIndex(), N.load(u, u, this), this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now(), this._running = 0, this._done = 0, this._unblockTime = 0, this.ready = this.Promise.resolve(), this.clients = {}, this._startHeartbeat();
        }
        _startHeartbeat() {
          var a;
          return this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null) ? typeof (a = this.heartbeat = setInterval(() => {
            var s, u, p, d, h;
            if (d = Date.now(), this.storeOptions.reservoirRefreshInterval != null && d >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval && (this._lastReservoirRefresh = d, this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount, this.instance._drainAll(this.computeCapacity())), this.storeOptions.reservoirIncreaseInterval != null && d >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval && ({
              reservoirIncreaseAmount: s,
              reservoirIncreaseMaximum: p,
              reservoir: h
            } = this.storeOptions, this._lastReservoirIncrease = d, u = p != null ? Math.min(s, p - h) : s, u > 0))
              return this.storeOptions.reservoir += u, this.instance._drainAll(this.computeCapacity());
          }, this.heartbeatInterval)).unref == "function" ? a.unref() : void 0 : clearInterval(this.heartbeat);
        }
        async __publish__(a) {
          return await this.yieldLoop(), this.instance.Events.trigger("message", a.toString());
        }
        async __disconnect__(a) {
          return await this.yieldLoop(), clearInterval(this.heartbeat), this.Promise.resolve();
        }
        yieldLoop(a = 0) {
          return new this.Promise(function(s, u) {
            return setTimeout(s, a);
          });
        }
        computePenalty() {
          var a;
          return (a = this.storeOptions.penalty) != null ? a : 15 * this.storeOptions.minTime || 5e3;
        }
        async __updateSettings__(a) {
          return await this.yieldLoop(), N.overwrite(a, a, this.storeOptions), this._startHeartbeat(), this.instance._drainAll(this.computeCapacity()), !0;
        }
        async __running__() {
          return await this.yieldLoop(), this._running;
        }
        async __queued__() {
          return await this.yieldLoop(), this.instance.queued();
        }
        async __done__() {
          return await this.yieldLoop(), this._done;
        }
        async __groupCheck__(a) {
          return await this.yieldLoop(), this._nextRequest + this.timeout < a;
        }
        computeCapacity() {
          var a, s;
          return { maxConcurrent: a, reservoir: s } = this.storeOptions, a != null && s != null ? Math.min(a - this._running, s) : a != null ? a - this._running : s ?? null;
        }
        conditionsCheck(a) {
          var s;
          return s = this.computeCapacity(), s == null || a <= s;
        }
        async __incrementReservoir__(a) {
          var s;
          return await this.yieldLoop(), s = this.storeOptions.reservoir += a, this.instance._drainAll(this.computeCapacity()), s;
        }
        async __currentReservoir__() {
          return await this.yieldLoop(), this.storeOptions.reservoir;
        }
        isBlocked(a) {
          return this._unblockTime >= a;
        }
        check(a, s) {
          return this.conditionsCheck(a) && this._nextRequest - s <= 0;
        }
        async __check__(a) {
          var s;
          return await this.yieldLoop(), s = Date.now(), this.check(a, s);
        }
        async __register__(a, s, u) {
          var p, d;
          return await this.yieldLoop(), p = Date.now(), this.conditionsCheck(s) ? (this._running += s, this.storeOptions.reservoir != null && (this.storeOptions.reservoir -= s), d = Math.max(this._nextRequest - p, 0), this._nextRequest = p + d + this.storeOptions.minTime, {
            success: !0,
            wait: d,
            reservoir: this.storeOptions.reservoir
          }) : {
            success: !1
          };
        }
        strategyIsBlock() {
          return this.storeOptions.strategy === 3;
        }
        async __submit__(a, s) {
          var u, p, d;
          if (await this.yieldLoop(), this.storeOptions.maxConcurrent != null && s > this.storeOptions.maxConcurrent)
            throw new G(`Impossible to add a job having a weight of ${s} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);
          return p = Date.now(), d = this.storeOptions.highWater != null && a === this.storeOptions.highWater && !this.check(s, p), u = this.strategyIsBlock() && (d || this.isBlocked(p)), u && (this._unblockTime = p + this.computePenalty(), this._nextRequest = this._unblockTime + this.storeOptions.minTime, this.instance._dropAllQueued()), {
            reachedHWM: d,
            blocked: u,
            strategy: this.storeOptions.strategy
          };
        }
        async __free__(a, s) {
          return await this.yieldLoop(), this._running -= s, this._done += s, this.instance._drainAll(this.computeCapacity()), {
            running: this._running
          };
        }
      };
      var ce = Q, O, Y;
      O = L, Y = class {
        constructor(a) {
          this.status = a, this._jobs = {}, this.counts = this.status.map(function() {
            return 0;
          });
        }
        next(a) {
          var s, u;
          if (s = this._jobs[a], u = s + 1, s != null && u < this.status.length)
            return this.counts[s]--, this.counts[u]++, this._jobs[a]++;
          if (s != null)
            return this.counts[s]--, delete this._jobs[a];
        }
        start(a) {
          var s;
          return s = 0, this._jobs[a] = s, this.counts[s]++;
        }
        remove(a) {
          var s;
          return s = this._jobs[a], s != null && (this.counts[s]--, delete this._jobs[a]), s != null;
        }
        jobStatus(a) {
          var s;
          return (s = this.status[this._jobs[a]]) != null ? s : null;
        }
        statusJobs(a) {
          var s, u, p, d, h;
          if (a != null) {
            if (u = this.status.indexOf(a), u < 0)
              throw new O(`status must be one of ${this.status.join(", ")}`);
            p = this._jobs, d = [];
            for (s in p)
              h = p[s], h === u && d.push(s);
            return d;
          } else
            return Object.keys(this._jobs);
        }
        statusCounts() {
          return this.counts.reduce(((a, s, u) => (a[this.status[u]] = s, a)), {});
        }
      };
      var ue = Y, X, x;
      X = g, x = class {
        constructor(a, s) {
          this.schedule = this.schedule.bind(this), this.name = a, this.Promise = s, this._running = 0, this._queue = new X();
        }
        isEmpty() {
          return this._queue.length === 0;
        }
        async _tryToRun() {
          var a, s, u, p, d, h, _;
          if (this._running < 1 && this._queue.length > 0)
            return this._running++, { task: _, args: a, resolve: d, reject: p } = this._queue.shift(), s = await (async function() {
              try {
                return h = await _(...a), function() {
                  return d(h);
                };
              } catch (y) {
                return u = y, function() {
                  return p(u);
                };
              }
            })(), this._running--, this._tryToRun(), s();
        }
        schedule(a, ...s) {
          var u, p, d;
          return d = p = null, u = new this.Promise(function(h, _) {
            return d = h, p = _;
          }), this._queue.push({ task: a, args: s, resolve: d, reject: p }), this._tryToRun(), u;
        }
      };
      var Ee = x, Z = "2.19.5", ee = {
        version: Z
      }, U = /* @__PURE__ */ Object.freeze({
        version: Z,
        default: ee
      }), A = () => console.log("You must import the full version of Bottleneck in order to use this feature."), $ = () => console.log("You must import the full version of Bottleneck in order to use this feature."), re = () => console.log("You must import the full version of Bottleneck in order to use this feature."), B, le, Ue, Le, Ie, pe;
      pe = c, B = E, Le = A, Ue = $, Ie = re, le = (function() {
        class w {
          constructor(s = {}) {
            this.deleteKey = this.deleteKey.bind(this), this.limiterOptions = s, pe.load(this.limiterOptions, this.defaults, this), this.Events = new B(this), this.instances = {}, this.Bottleneck = Me, this._startAutoCleanup(), this.sharedConnection = this.connection != null, this.connection == null && (this.limiterOptions.datastore === "redis" ? this.connection = new Le(Object.assign({}, this.limiterOptions, { Events: this.Events })) : this.limiterOptions.datastore === "ioredis" && (this.connection = new Ue(Object.assign({}, this.limiterOptions, { Events: this.Events }))));
          }
          key(s = "") {
            var u;
            return (u = this.instances[s]) != null ? u : (() => {
              var p;
              return p = this.instances[s] = new this.Bottleneck(Object.assign(this.limiterOptions, {
                id: `${this.id}-${s}`,
                timeout: this.timeout,
                connection: this.connection
              })), this.Events.trigger("created", p, s), p;
            })();
          }
          async deleteKey(s = "") {
            var u, p;
            return p = this.instances[s], this.connection && (u = await this.connection.__runCommand__(["del", ...Ie.allKeys(`${this.id}-${s}`)])), p != null && (delete this.instances[s], await p.disconnect()), p != null || u > 0;
          }
          limiters() {
            var s, u, p, d;
            u = this.instances, p = [];
            for (s in u)
              d = u[s], p.push({
                key: s,
                limiter: d
              });
            return p;
          }
          keys() {
            return Object.keys(this.instances);
          }
          async clusterKeys() {
            var s, u, p, d, h, _, y, v, P;
            if (this.connection == null)
              return this.Promise.resolve(this.keys());
            for (_ = [], s = null, P = `b_${this.id}-`.length, u = 9; s !== 0; )
              for ([v, p] = await this.connection.__runCommand__(["scan", s ?? 0, "match", `b_${this.id}-*_settings`, "count", 1e4]), s = ~~v, d = 0, y = p.length; d < y; d++)
                h = p[d], _.push(h.slice(P, -u));
            return _;
          }
          _startAutoCleanup() {
            var s;
            return clearInterval(this.interval), typeof (s = this.interval = setInterval(async () => {
              var u, p, d, h, _, y;
              _ = Date.now(), d = this.instances, h = [];
              for (p in d) {
                y = d[p];
                try {
                  await y._store.__groupCheck__(_) ? h.push(this.deleteKey(p)) : h.push(void 0);
                } catch (v) {
                  u = v, h.push(y.Events.trigger("error", u));
                }
              }
              return h;
            }, this.timeout / 2)).unref == "function" ? s.unref() : void 0;
          }
          updateSettings(s = {}) {
            if (pe.overwrite(s, this.defaults, this), pe.overwrite(s, s, this.limiterOptions), s.timeout != null)
              return this._startAutoCleanup();
          }
          disconnect(s = !0) {
            var u;
            if (!this.sharedConnection)
              return (u = this.connection) != null ? u.disconnect(s) : void 0;
          }
        }
        return w.prototype.defaults = {
          timeout: 1e3 * 60 * 5,
          connection: null,
          Promise,
          id: "group-key"
        }, w;
      }).call(t);
      var qr = le, qe, je, xe;
      xe = c, je = E, qe = (function() {
        class w {
          constructor(s = {}) {
            this.options = s, xe.load(this.options, this.defaults, this), this.Events = new je(this), this._arr = [], this._resetPromise(), this._lastFlush = Date.now();
          }
          _resetPromise() {
            return this._promise = new this.Promise((s, u) => this._resolve = s);
          }
          _flush() {
            return clearTimeout(this._timeout), this._lastFlush = Date.now(), this._resolve(), this.Events.trigger("batch", this._arr), this._arr = [], this._resetPromise();
          }
          add(s) {
            var u;
            return this._arr.push(s), u = this._promise, this._arr.length === this.maxSize ? this._flush() : this.maxTime != null && this._arr.length === 1 && (this._timeout = setTimeout(() => this._flush(), this.maxTime)), u;
          }
        }
        return w.prototype.defaults = {
          maxTime: null,
          maxSize: null,
          Promise
        }, w;
      }).call(t);
      var jr = qe, xr = () => console.log("You must import the full version of Bottleneck in order to use this feature."), $r = o(U), $e, Be, Te, _e, He, we, Ve, We, ze, be, F, Ne = [].splice;
      we = 10, Be = 5, F = c, Ve = k, _e = q, He = ce, We = xr, Te = E, ze = ue, be = Ee, $e = (function() {
        class w {
          constructor(s = {}, ...u) {
            var p, d;
            this._addToQueue = this._addToQueue.bind(this), this._validateOptions(s, u), F.load(s, this.instanceDefaults, this), this._queues = new Ve(we), this._scheduled = {}, this._states = new ze(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : [])), this._limiter = null, this.Events = new Te(this), this._submitLock = new be("submit", this.Promise), this._registerLock = new be("register", this.Promise), d = F.load(s, this.storeDefaults, {}), this._store = (function() {
              if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null)
                return p = F.load(s, this.redisStoreDefaults, {}), new We(this, d, p);
              if (this.datastore === "local")
                return p = F.load(s, this.localStoreDefaults, {}), new He(this, d, p);
              throw new w.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
            }).call(this), this._queues.on("leftzero", () => {
              var h;
              return (h = this._store.heartbeat) != null && typeof h.ref == "function" ? h.ref() : void 0;
            }), this._queues.on("zero", () => {
              var h;
              return (h = this._store.heartbeat) != null && typeof h.unref == "function" ? h.unref() : void 0;
            });
          }
          _validateOptions(s, u) {
            if (!(s != null && typeof s == "object" && u.length === 0))
              throw new w.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
          }
          ready() {
            return this._store.ready;
          }
          clients() {
            return this._store.clients;
          }
          channel() {
            return `b_${this.id}`;
          }
          channel_client() {
            return `b_${this.id}_${this._store.clientId}`;
          }
          publish(s) {
            return this._store.__publish__(s);
          }
          disconnect(s = !0) {
            return this._store.__disconnect__(s);
          }
          chain(s) {
            return this._limiter = s, this;
          }
          queued(s) {
            return this._queues.queued(s);
          }
          clusterQueued() {
            return this._store.__queued__();
          }
          empty() {
            return this.queued() === 0 && this._submitLock.isEmpty();
          }
          running() {
            return this._store.__running__();
          }
          done() {
            return this._store.__done__();
          }
          jobStatus(s) {
            return this._states.jobStatus(s);
          }
          jobs(s) {
            return this._states.statusJobs(s);
          }
          counts() {
            return this._states.statusCounts();
          }
          _randomIndex() {
            return Math.random().toString(36).slice(2);
          }
          check(s = 1) {
            return this._store.__check__(s);
          }
          _clearGlobalState(s) {
            return this._scheduled[s] != null ? (clearTimeout(this._scheduled[s].expiration), delete this._scheduled[s], !0) : !1;
          }
          async _free(s, u, p, d) {
            var h, _;
            try {
              if ({ running: _ } = await this._store.__free__(s, p.weight), this.Events.trigger("debug", `Freed ${p.id}`, d), _ === 0 && this.empty())
                return this.Events.trigger("idle");
            } catch (y) {
              return h = y, this.Events.trigger("error", h);
            }
          }
          _run(s, u, p) {
            var d, h, _;
            return u.doRun(), d = this._clearGlobalState.bind(this, s), _ = this._run.bind(this, s, u), h = this._free.bind(this, s, u), this._scheduled[s] = {
              timeout: setTimeout(() => u.doExecute(this._limiter, d, _, h), p),
              expiration: u.options.expiration != null ? setTimeout(function() {
                return u.doExpire(d, _, h);
              }, p + u.options.expiration) : void 0,
              job: u
            };
          }
          _drainOne(s) {
            return this._registerLock.schedule(() => {
              var u, p, d, h, _;
              return this.queued() === 0 ? this.Promise.resolve(null) : (_ = this._queues.getFirst(), { options: h, args: u } = d = _.first(), s != null && h.weight > s ? this.Promise.resolve(null) : (this.Events.trigger("debug", `Draining ${h.id}`, { args: u, options: h }), p = this._randomIndex(), this._store.__register__(p, h.weight, h.expiration).then(({ success: y, wait: v, reservoir: P }) => {
                var te;
                return this.Events.trigger("debug", `Drained ${h.id}`, { success: y, args: u, options: h }), y ? (_.shift(), te = this.empty(), te && this.Events.trigger("empty"), P === 0 && this.Events.trigger("depleted", te), this._run(p, d, v), this.Promise.resolve(h.weight)) : this.Promise.resolve(null);
              })));
            });
          }
          _drainAll(s, u = 0) {
            return this._drainOne(s).then((p) => {
              var d;
              return p != null ? (d = s != null ? s - p : s, this._drainAll(d, u + p)) : this.Promise.resolve(u);
            }).catch((p) => this.Events.trigger("error", p));
          }
          _dropAllQueued(s) {
            return this._queues.shiftAll(function(u) {
              return u.doDrop({ message: s });
            });
          }
          stop(s = {}) {
            var u, p;
            return s = F.load(s, this.stopDefaults), p = (d) => {
              var h;
              return h = () => {
                var _;
                return _ = this._states.counts, _[0] + _[1] + _[2] + _[3] === d;
              }, new this.Promise((_, y) => h() ? _() : this.on("done", () => {
                if (h())
                  return this.removeAllListeners("done"), _();
              }));
            }, u = s.dropWaitingJobs ? (this._run = function(d, h) {
              return h.doDrop({
                message: s.dropErrorMessage
              });
            }, this._drainOne = () => this.Promise.resolve(null), this._registerLock.schedule(() => this._submitLock.schedule(() => {
              var d, h, _;
              h = this._scheduled;
              for (d in h)
                _ = h[d], this.jobStatus(_.job.options.id) === "RUNNING" && (clearTimeout(_.timeout), clearTimeout(_.expiration), _.job.doDrop({
                  message: s.dropErrorMessage
                }));
              return this._dropAllQueued(s.dropErrorMessage), p(0);
            }))) : this.schedule({
              priority: we - 1,
              weight: 0
            }, () => p(1)), this._receive = function(d) {
              return d._reject(new w.prototype.BottleneckError(s.enqueueErrorMessage));
            }, this.stop = () => this.Promise.reject(new w.prototype.BottleneckError("stop() has already been called")), u;
          }
          async _addToQueue(s) {
            var u, p, d, h, _, y, v;
            ({ args: u, options: h } = s);
            try {
              ({ reachedHWM: _, blocked: p, strategy: v } = await this._store.__submit__(this.queued(), h.weight));
            } catch (P) {
              return d = P, this.Events.trigger("debug", `Could not queue ${h.id}`, { args: u, options: h, error: d }), s.doDrop({ error: d }), !1;
            }
            return p ? (s.doDrop(), !0) : _ && (y = v === w.prototype.strategy.LEAK ? this._queues.shiftLastFrom(h.priority) : v === w.prototype.strategy.OVERFLOW_PRIORITY ? this._queues.shiftLastFrom(h.priority + 1) : v === w.prototype.strategy.OVERFLOW ? s : void 0, y?.doDrop(), y == null || v === w.prototype.strategy.OVERFLOW) ? (y == null && s.doDrop(), _) : (s.doQueue(_, p), this._queues.push(s), await this._drainAll(), _);
          }
          _receive(s) {
            return this._states.jobStatus(s.options.id) != null ? (s._reject(new w.prototype.BottleneckError(`A job with the same id already exists (id=${s.options.id})`)), !1) : (s.doReceive(), this._submitLock.schedule(this._addToQueue, s));
          }
          submit(...s) {
            var u, p, d, h, _, y, v;
            return typeof s[0] == "function" ? (_ = s, [p, ...s] = _, [u] = Ne.call(s, -1), h = F.load({}, this.jobDefaults)) : (y = s, [h, p, ...s] = y, [u] = Ne.call(s, -1), h = F.load(h, this.jobDefaults)), v = (...P) => new this.Promise(function(te, Hr) {
              return p(...P, function(...Ke) {
                return (Ke[0] != null ? Hr : te)(Ke);
              });
            }), d = new _e(v, s, h, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), d.promise.then(function(P) {
              return typeof u == "function" ? u(...P) : void 0;
            }).catch(function(P) {
              return Array.isArray(P) ? typeof u == "function" ? u(...P) : void 0 : typeof u == "function" ? u(P) : void 0;
            }), this._receive(d);
          }
          schedule(...s) {
            var u, p, d;
            return typeof s[0] == "function" ? ([d, ...s] = s, p = {}) : [p, d, ...s] = s, u = new _e(d, s, p, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise), this._receive(u), u.promise;
          }
          wrap(s) {
            var u, p;
            return u = this.schedule.bind(this), p = function(...d) {
              return u(s.bind(this), ...d);
            }, p.withOptions = function(d, ...h) {
              return u(d, s, ...h);
            }, p;
          }
          async updateSettings(s = {}) {
            return await this._store.__updateSettings__(F.overwrite(s, this.storeDefaults)), F.overwrite(s, this.instanceDefaults, this), this;
          }
          currentReservoir() {
            return this._store.__currentReservoir__();
          }
          incrementReservoir(s = 0) {
            return this._store.__incrementReservoir__(s);
          }
        }
        return w.default = w, w.Events = Te, w.version = w.prototype.version = $r.version, w.strategy = w.prototype.strategy = {
          LEAK: 1,
          OVERFLOW: 2,
          OVERFLOW_PRIORITY: 4,
          BLOCK: 3
        }, w.BottleneckError = w.prototype.BottleneckError = L, w.Group = w.prototype.Group = qr, w.RedisConnection = w.prototype.RedisConnection = A, w.IORedisConnection = w.prototype.IORedisConnection = $, w.Batcher = w.prototype.Batcher = jr, w.prototype.jobDefaults = {
          priority: Be,
          weight: 1,
          expiration: null,
          id: "<no-id>"
        }, w.prototype.storeDefaults = {
          maxConcurrent: null,
          minTime: 0,
          highWater: null,
          strategy: w.prototype.strategy.LEAK,
          penalty: null,
          reservoir: null,
          reservoirRefreshInterval: null,
          reservoirRefreshAmount: null,
          reservoirIncreaseInterval: null,
          reservoirIncreaseAmount: null,
          reservoirIncreaseMaximum: null
        }, w.prototype.localStoreDefaults = {
          Promise,
          timeout: null,
          heartbeatInterval: 250
        }, w.prototype.redisStoreDefaults = {
          Promise,
          timeout: null,
          heartbeatInterval: 5e3,
          clientTimeout: 1e4,
          Redis: null,
          clientOptions: {},
          clusterNodes: null,
          clearDatastore: !1,
          connection: null
        }, w.prototype.instanceDefaults = {
          datastore: "local",
          connection: null,
          id: "<no-id>",
          rejectOnDrop: !0,
          trackDoneStatus: !1,
          Promise
        }, w.prototype.stopDefaults = {
          enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
          dropWaitingJobs: !0,
          dropErrorMessage: "This limiter has been stopped."
        }, w;
      }).call(t);
      var Me = $e, Br = Me;
      return Br;
    }));
  })(ge)), ge.exports;
}
var es = Zt();
const Ar = /* @__PURE__ */ _r(es);
var rs = "0.0.0-development";
async function Sr(e, r, t, o) {
  if (!t.request || !t.request.request)
    throw t;
  if (t.status >= 400 && !e.doNotRetry.includes(t.status)) {
    const i = o.request.retries != null ? o.request.retries : e.retries, n = Math.pow((o.request.retryCount || 0) + 1, 2);
    throw r.retry.retryRequest(t, i, n);
  }
  throw t;
}
async function ts(e, r, t, o) {
  const i = new Ar();
  return i.on("failed", function(n, c) {
    const l = ~~n.request.request.retries, g = ~~n.request.request.retryAfter;
    if (o.request.retryCount = c.retryCount + 1, l > c.retryCount)
      return g * e.retryAfterBaseValue;
  }), i.schedule(
    ss.bind(null, e, r, t),
    o
  );
}
async function ss(e, r, t, o) {
  const i = await t(t, o);
  if (i.data && i.data.errors && i.data.errors.length > 0 && /Something went wrong while executing your query/.test(
    i.data.errors[0].message
  )) {
    const n = new ne(i.data.errors[0].message, 500, {
      request: o,
      response: i
    });
    return Sr(e, r, n, o);
  }
  return i;
}
function Fr(e, r) {
  const t = Object.assign(
    {
      enabled: !0,
      retryAfterBaseValue: 1e3,
      doNotRetry: [400, 401, 403, 404, 410, 422, 451],
      retries: 3
    },
    r.retry
  );
  return t.enabled && (e.hook.error("request", Sr.bind(null, t, e)), e.hook.wrap("request", ts.bind(null, t, e))), {
    retry: {
      retryRequest: (o, i, n) => (o.request.request = Object.assign({}, o.request.request, {
        retries: i,
        retryAfter: n
      }), o)
    }
  };
}
Fr.VERSION = rs;
var os = "0.0.0-development", Oe = () => Promise.resolve();
function is(e, r, t) {
  return e.retryLimiter.schedule(ns, e, r, t);
}
async function ns(e, r, t) {
  const { pathname: o } = new URL(t.url, "http://github.test"), i = as(t.method, o), n = !i && t.method !== "GET" && t.method !== "HEAD", c = t.method === "GET" && o.startsWith("/search/"), l = o.startsWith("/graphql"), f = ~~r.retryCount > 0 ? { priority: 0, weight: 0 } : {};
  e.clustering && (f.expiration = 1e3 * 60), (n || l) && await e.write.key(e.id).schedule(f, Oe), n && e.triggersNotification(o) && await e.notifications.key(e.id).schedule(f, Oe), c && await e.search.key(e.id).schedule(f, Oe);
  const E = (i ? e.auth : e.global).key(e.id).schedule(f, r, t);
  if (l) {
    const m = await E;
    if (m.data.errors != null && m.data.errors.some((T) => T.type === "RATE_LIMITED"))
      throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), {
        response: m,
        data: m.data
      });
  }
  return E;
}
function as(e, r) {
  return e === "PATCH" && // https://docs.github.com/en/rest/apps/apps?apiVersion=2022-11-28#create-a-scoped-access-token
  /^\/applications\/[^/]+\/token\/scoped$/.test(r) || e === "POST" && // https://docs.github.com/en/rest/apps/oauth-applications?apiVersion=2022-11-28#reset-a-token
  (/^\/applications\/[^/]+\/token$/.test(r) || // https://docs.github.com/en/rest/apps/apps?apiVersion=2022-11-28#create-an-installation-access-token-for-an-app
  /^\/app\/installations\/[^/]+\/access_tokens$/.test(r) || // https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
  r === "/login/oauth/access_token");
}
var cs = [
  "/orgs/{org}/invitations",
  "/orgs/{org}/invitations/{invitation_id}",
  "/orgs/{org}/teams/{team_slug}/discussions",
  "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
  "/repos/{owner}/{repo}/collaborators/{username}",
  "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "/repos/{owner}/{repo}/issues",
  "/repos/{owner}/{repo}/issues/{issue_number}/comments",
  "/repos/{owner}/{repo}/issues/{issue_number}/sub_issue",
  "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority",
  "/repos/{owner}/{repo}/pulls",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
  "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
  "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
  "/repos/{owner}/{repo}/releases",
  "/teams/{team_id}/discussions",
  "/teams/{team_id}/discussions/{discussion_number}/comments"
];
function us(e) {
  const t = `^(?:${e.map(
    (o) => o.split("/").map((i) => i.startsWith("{") ? "(?:.+?)" : i).join("/")
  ).map((o) => `(?:${o})`).join("|")})[^/]*$`;
  return new RegExp(t, "i");
}
var cr = us(cs), Cr = cr.test.bind(cr), H = {}, ls = function(e, r) {
  H.global = new e.Group({
    id: "octokit-global",
    maxConcurrent: 10,
    ...r
  }), H.auth = new e.Group({
    id: "octokit-auth",
    maxConcurrent: 1,
    ...r
  }), H.search = new e.Group({
    id: "octokit-search",
    maxConcurrent: 1,
    minTime: 2e3,
    ...r
  }), H.write = new e.Group({
    id: "octokit-write",
    maxConcurrent: 1,
    minTime: 1e3,
    ...r
  }), H.notifications = new e.Group({
    id: "octokit-notifications",
    maxConcurrent: 1,
    minTime: 3e3,
    ...r
  });
};
function De(e, r) {
  const {
    enabled: t = !0,
    Bottleneck: o = Ar,
    id: i = "no-id",
    timeout: n = 1e3 * 60 * 2,
    // Redis TTL: 2 minutes
    connection: c
  } = r.throttle || {};
  if (!t)
    return {};
  const l = { timeout: n };
  typeof c < "u" && (l.connection = c), H.global == null && ls(o, l);
  const g = Object.assign(
    {
      clustering: c != null,
      triggersNotification: Cr,
      fallbackSecondaryRateRetryAfter: 60,
      retryAfterBaseValue: 1e3,
      retryLimiter: new o(),
      id: i,
      ...H
    },
    r.throttle
  );
  if (typeof g.onSecondaryRateLimit != "function" || typeof g.onRateLimit != "function")
    throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
  const f = {}, E = new o.Events(f);
  return f.on("secondary-limit", g.onSecondaryRateLimit), f.on("rate-limit", g.onRateLimit), f.on(
    "error",
    (m) => e.log.warn("Error in throttling-plugin limit handler", m)
  ), g.retryLimiter.on("failed", async function(m, T) {
    const [b, k, R] = T.args, { pathname: L } = new URL(R.url, "http://github.test");
    if (!(L.startsWith("/graphql") && m.status !== 401 || m.status === 403 || m.status === 429))
      return;
    const D = ~~k.retryCount;
    k.retryCount = D, R.request.retryCount = D;
    const { wantRetry: z, retryAfter: I = 0 } = await (async function() {
      if (/\bsecondary rate\b/i.test(m.message)) {
        const S = Number(m.response.headers["retry-after"]) || b.fallbackSecondaryRateRetryAfter;
        return { wantRetry: await E.trigger(
          "secondary-limit",
          S,
          R,
          e,
          D
        ), retryAfter: S };
      }
      if (m.response.headers != null && m.response.headers["x-ratelimit-remaining"] === "0" || (m.response.data?.errors ?? []).some(
        (S) => S.type === "RATE_LIMITED"
      )) {
        const S = new Date(
          ~~m.response.headers["x-ratelimit-reset"] * 1e3
        ).getTime(), q = Math.max(
          // Add one second so we retry _after_ the reset time
          // https://docs.github.com/en/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#exceeding-the-rate-limit
          Math.ceil((S - Date.now()) / 1e3) + 1,
          0
        );
        return { wantRetry: await E.trigger(
          "rate-limit",
          q,
          R,
          e,
          D
        ), retryAfter: q };
      }
      return {};
    })();
    if (z)
      return k.retryCount++, I * b.retryAfterBaseValue;
  }), e.hook.wrap("request", is.bind(null, g)), {};
}
De.VERSION = os;
De.triggersNotification = Cr;
var ps = "0.0.0-development", W = Dt.plugin(
  Rr,
  vr,
  zt,
  Fr,
  De
).defaults({
  userAgent: `octokit.js/${ps}`,
  throttle: {
    onRateLimit: gs,
    onSecondaryRateLimit: ds
  }
});
function gs(e, r, t) {
  if (t.log.warn(
    `Request quota exhausted for request ${r.method} ${r.url}`
  ), r.request.retryCount === 0)
    return t.log.info(`Retrying after ${e} seconds!`), !0;
}
function ds(e, r, t) {
  if (t.log.warn(
    `SecondaryRateLimit detected for request ${r.method} ${r.url}`
  ), r.request.retryCount === 0)
    return t.log.info(`Retrying after ${e} seconds!`), !0;
}
/* v8 ignore next no need to test internals of the throttle plugin -- @preserve */
class ms {
  constructor(r, t, o, i, n) {
    this.commits = [], this.owner = r, this.name = o, this.repo = t, this.sha = i, this.commitProvider = n;
  }
  getCommits() {
    return this.commits;
  }
  async fetchCommits() {
    return this.commits = await this.commitProvider.getAllCommits(this.name), this.commits;
  }
  async addCommit(r, t) {
    await this.commitProvider.commitFiles(r, this);
  }
}
class hs {
  constructor(r, t, o, i = void 0) {
    this.branches = [], this.owner = r, this.repo = t, this.commitProivder = o, this.options = i;
  }
  async fetchBranches() {
    try {
      return this.branches = [], (await new W(this.options).rest.repos.listBranches({
        owner: this.owner,
        repo: this.repo
      })).data.map((t) => {
        this.branches.push(new ms(this.owner, this.repo, t.name, t.commit.sha, this.commitProivder));
      }), this.branches;
    } catch (r) {
      return console.log(r), [];
    }
  }
  getBranches() {
    return this.branches;
  }
  async addBranch(r, t) {
    try {
      const o = new W(this.options), i = await o.rest.git.getRef({
        owner: this.owner,
        repo: this.repo,
        ref: "heads/" + t.name
      }), n = await o.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: "refs/heads/" + r,
        sha: i.data.object.sha
      });
      console.log(n);
      return;
    } catch (o) {
      console.log(o);
    }
  }
  setOptions(r) {
    this.options = r;
  }
}
class fs {
  constructor(r, t, o, i, n) {
    this.files = [], this.name = r, this.fileProvider = n, this.message = t, this.hash = i, this.creation_date = o;
  }
  async fetchFiles() {
    return this.files = await this.fileProvider.getFiles("", this.hash), this.files;
  }
  getFiles() {
    return this.files;
  }
}
var oe = {}, ie = {}, ur;
function Es() {
  if (ur) return ie;
  ur = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.createOrUpdateFiles = void 0;
  function e(g) {
    let f;
    Buffer.isBuffer(g) ? f = g.toString("utf8") : f = g;
    var E = /[^A-Z0-9+\/=]/i;
    const m = f.length;
    if (!m || m % 4 !== 0 || E.test(f))
      return !1;
    const T = f.indexOf("=");
    return T === -1 || T === m - 1 || T === m - 2 && f[m - 1] === "=";
  }
  const r = function(g, f) {
    return new Promise(async (E, m) => {
      try {
        for (const O of ["owner", "repo", "branch"])
          if (!f[O])
            return m(`'${O}' is a required parameter`);
        if (!f.changes || !f.changes.length)
          return m("No changes provided");
        if (f.batchSize || (f.batchSize = 1), typeof f.batchSize != "number")
          return m("batchSize must be a number");
        let { owner: T, repo: b, base: k, branch: R, createBranch: L, committer: j, author: D, changes: z, batchSize: I, forkFromBaseBranch: S } = f, q = !0, G;
        if (G = await c(g, T, b, R), !G || S) {
          if (!L && !G)
            return m(`The branch '${R}' doesn't exist and createBranch is 'false'`);
          if (G || (q = !1), k || (k = (await g.rest.repos.get({
            owner: T,
            repo: b
          })).data.default_branch), G = await c(g, T, b, k), !G)
            return m(`The branch '${k}' doesn't exist`);
        }
        const Q = [];
        for (const O of z) {
          const Y = O.message;
          if (!Y)
            return m("changes[].message is a required parameter");
          const ue = O.files && Object.keys(O.files).length > 0, X = Array.isArray(O.filesToDelete) && O.filesToDelete.length > 0;
          if (!ue && !X)
            return m("either changes[].files or changes[].filesToDelete are required");
          const x = [];
          if (X)
            for (const ee of l(O.filesToDelete, I))
              await Promise.all(ee.map(async (U) => {
                const A = await t(g, T, b, U, G);
                if (!A && !O.ignoreDeletionFailures)
                  return m(`The file ${U} could not be found in the repo`);
                A && x.push({
                  path: U,
                  sha: null,
                  // sha as null implies that the file should be deleted
                  mode: "100644",
                  type: "commit"
                });
              }));
          if (ue)
            for (const ee of l(Object.keys(O.files), I))
              await Promise.all(ee.map(async (U) => {
                const A = O.files[U] || "";
                let $, re, B;
                if (typeof A == "string" || Buffer.isBuffer(A) ? ($ = A, re = "100644", B = "blob") : ($ = A.contents || "", re = A.mode || "100644", B = A.type || "blob"), !$)
                  return m(`No file contents provided for ${U}`);
                const le = await n(g, T, b, $, B);
                x.push({
                  path: U,
                  sha: le,
                  mode: re,
                  type: B
                });
              }));
          if (x.length === 0)
            continue;
          const Ee = await i(g, T, b, x, G), Z = await o(g, T, b, j, D, Y, Ee, G);
          G = Z.sha, Q.push(Z);
        }
        let N = "createRef", ce = "refs/";
        return q && (N = "updateRef", ce = ""), await g.rest.git[N]({
          owner: T,
          repo: b,
          force: !0,
          ref: `${ce}heads/${R}`,
          sha: G
        }), E({ commits: Q });
      } catch (T) {
        return m(T);
      }
    });
  };
  ie.createOrUpdateFiles = r;
  async function t(g, f, E, m, T) {
    try {
      return await g.rest.repos.getContent({
        method: "HEAD",
        owner: f,
        repo: E,
        path: m,
        ref: T
      }), !0;
    } catch {
      return !1;
    }
  }
  async function o(g, f, E, m, T, b, k, R) {
    return (await g.rest.git.createCommit({
      owner: f,
      repo: E,
      message: b,
      committer: m,
      author: T,
      tree: k.sha,
      parents: [R]
    })).data;
  }
  async function i(g, f, E, m, T) {
    return (await g.rest.git.createTree({
      owner: f,
      repo: E,
      tree: m,
      base_tree: T
    })).data;
  }
  async function n(g, f, E, m, T) {
    if (T === "commit")
      return typeof m == "string" ? m : m.toString();
    {
      let b;
      return e(m) ? b = typeof m == "string" ? m : m.toString("base64") : b = Buffer.from(m).toString("base64"), (await g.rest.git.createBlob({
        owner: f,
        repo: E,
        content: b,
        encoding: "base64"
      })).data.sha;
    }
  }
  async function c(g, f, E, m) {
    try {
      return (await g.rest.git.getRef({
        owner: f,
        repo: E,
        ref: `heads/${m}`
      })).data.object.sha;
    } catch {
    }
  }
  const l = (g, f) => g.reduce((E, m, T) => T % f === 0 ? [...E, [m]] : [...E.slice(0, -1), [...E.slice(-1)[0], m]], []);
  return ie;
}
var lr;
function Ts() {
  if (lr) return oe;
  lr = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.CreateOrUpdateFiles = void 0;
  const e = Es(), r = function(t) {
    return {
      createOrUpdateFiles: (o) => (0, e.createOrUpdateFiles)(t, o)
    };
  };
  return oe.CreateOrUpdateFiles = r, oe;
}
var _s = Ts();
const pr = /* @__PURE__ */ _r(_s);
var C = /* @__PURE__ */ ((e) => (e[e.NEW = 0] = "NEW", e[e.MODIFIED = 1] = "MODIFIED", e[e.DELETED = 2] = "DELETED", e[e.UNTOUCHED = 3] = "UNTOUCHED", e[e.UNLOADED = 4] = "UNLOADED", e))(C || {});
class Dr extends Error {
  constructor(r, t) {
    super(r), this.code = t, this.name = "AuthentificationError";
  }
}
class ws {
  constructor(r, t, o, i = void 0) {
    this.fileProvider = o, this.owner = r, this.name = t, this.options = i;
    const n = W.plugin(pr);
    this._oc = new n(this.options);
  }
  async getAllCommits(r) {
    let t = [];
    return (await new W(this.options).rest.repos.listCommits({
      owner: this.owner,
      repo: this.name,
      sha: r
    })).data.map((i) => {
      t.push(
        new fs(
          // listCommits: the git author name lives under commit.commit.author;
          // the top-level author is the GitHub user object, which has a login
          i.commit?.author?.name ?? i.author?.login ?? "unknown",
          i.commit.message,
          i.commit?.author?.date ?? "",
          i.sha,
          this.fileProvider
        )
      );
    }), t;
  }
  async commitFiles(r, t) {
    let o = [];
    const i = function(c) {
      c.forEach((l) => {
        "files" in l && l.files != null ? i(l.files) : o.push(l);
      });
    };
    i(r);
    const n = o.filter(
      (c) => c.file_state === C.DELETED
    );
    console.log("commit");
    try {
      const c = await this._oc.createOrUpdateFiles({
        owner: this.owner,
        repo: this.name,
        branch: t.name,
        createBranch: !1,
        changes: [
          {
            message: "Update Files",
            files: o.reduce((l, g) => {
              if (g.file_state === C.MODIFIED || g.file_state == C.NEW)
                return l[g.path] = g.content, l;
            }, {}),
            filesToDelete: n.map((l) => l.path),
            ignoreDeletionFailures: !0
          }
        ]
      });
      return;
    } catch (c) {
      throw console.log(c.code), c.status == 404 ? new Dr(c.message, 402) : c;
    }
  }
  setOptions(r) {
    this.options = r;
    const t = W.plugin(pr);
    this._oc = new t(this.options);
  }
}
class de {
  constructor(r, t, o) {
    this.files = [], this.fileProvider = o, this.path = r, this.commit = t;
  }
  async fetchFiles() {
    if (!this.commit) throw Error("This Folder istn synced, commit first");
    return this.files = await this.fileProvider.getFiles(this.path, this.commit), this.files;
  }
  getFiles() {
    return this.files;
  }
  addFiles(r) {
    this.files = this.files.concat(r);
  }
}
class gr extends Error {
  // . declare any additional properties or methods .
}
class me {
  constructor(r, t, o, i, n = !1) {
    this.file_state = C.UNLOADED, console.log(o), this.name = r, this.path = t, this.hash = o, this.contentProvider = i, n || (this.file_state = C.NEW);
  }
  async fetchContent() {
    this.hash;
    try {
      return this.content = await this.contentProvider.getContent({ filehash: this.hash }), this.file_state = C.UNTOUCHED, this.content;
    } catch (r) {
      throw console.log(r), new gr("File not get parsed");
    }
  }
  getContent() {
    try {
      const r = atob(this.content), t = new Uint8Array(r.length);
      for (let i = 0; i < r.length; i++)
        t[i] = r.charCodeAt(i);
      const o = new TextDecoder("utf-8").decode(t);
      return JSON.parse(o);
    } catch {
      return {};
    }
  }
  setContent(r) {
    try {
      const t = JSON.stringify(r), o = new TextEncoder().encode(t);
      let i = "";
      o.forEach((c) => i += String.fromCharCode(c));
      const n = btoa(i);
      this.content = n, this.file_state != C.NEW && (this.file_state = C.MODIFIED);
    } catch {
      throw new gr("File not get parsed");
    }
  }
  delete() {
    this.file_state = C.DELETED;
  }
}
class bs {
  constructor(r, t, o, i = void 0) {
    this.owner = r, this.name = t, this.contentProvider = o, this.options = i;
  }
  async getFiles(r, t) {
    let o = [];
    return (await new W(this.options).rest.repos.getContent({
      owner: this.owner,
      ref: t,
      repo: this.name,
      path: r
    })).data.map((n) => {
      n.type == "dir" ? o.push(new de(n.path, t, this)) : n.type == "file" && o.push(new me(n.name, n.path, n.sha, this.contentProvider));
    }), o;
  }
}
class ys {
  constructor(r, t, o = void 0) {
    this.owner = r, this.repo = t, this.options = o;
  }
  async getContent(r) {
    return (await new W(this.options).rest.git.getBlob({
      owner: this.owner,
      repo: this.repo,
      file_sha: r.filehash
    })).data.content;
  }
}
class Se extends Wr {
  constructor() {
    super(...arguments), this.options = {
      auth: null
      //config.repos[0].token
    };
  }
  static {
    this.type = "gitRepositories";
  }
  init(r, t, o = {
    provider: "github",
    owner: ""
  }) {
    switch (super.init(r, t), r.hostname) {
      case "github.com":
        const i = this.uri?.pathname.split("/");
        if (!i || i.length < 2)
          throw new Error("path in github url not completet either owner or repo is missing");
        const n = i[1], c = i.slice(2).join("/");
        console.log("found owner for git repo:" + n), console.log("on repo:" + c), this.contentProvider = new ys(n, c), this.fileProvider = new bs(n, c, this.contentProvider), this.commitProvider = new ws(n, c, this.fileProvider, this.options), this.provider = new hs(n, c, this.commitProvider, this.options), this.provider.fetchBranches().then(async () => {
          this.branch = this.provider?.getBranches()[0];
          const l = this.provider?.getBranches().find((g) => g.name == "main" || g.name == "master");
          l && (this.branch = l), await this.branch?.fetchCommits(), this.commit = await this.branch?.getCommits()[0];
        });
        break;
      default:
        throw new Error("no Branch provider found");
    }
  }
  async auth(r) {
    return !this.options.auth && r && this.provider && (this.options = r, this.provider.setOptions?.(this.options), this.commitProvider?.setOptions?.(this.options)), !0;
  }
  sync() {
    throw new Error("Method not implemented.");
  }
  async create(r) {
    try {
      let t = await this.provider?.getBranches();
      if (!this.branch)
        throw new Error("Main Branch not found");
      let o = new URL(r.uri);
      const i = o.pathname.replace("/", "").split("/");
      let n;
      for (let c = 0; c < i.length; c++)
        if (c == i.length - 1) {
          let l = new me(r.name, i.join("/"), null, this.contentProvider);
          l.setContent(r.data), n ? n.addFiles([l]) : n = l;
        } else if (n) {
          let l = this.createFolder(i.slice(0, c).join("/"));
          n && n.addFiles([l]), n = l;
        }
      await this.branch.addCommit([n], "add File " + o.pathname);
    } catch (t) {
      throw console.log(t), t;
    }
  }
  async delete(r) {
  }
  async findAll() {
    try {
      let r = await this.provider?.getBranches();
      if (!this.branch)
        throw new Error("Branch not found");
      if (!this.commit)
        throw new Error("Commit not found");
      return await this.extractFolder(this.branch, this.commit);
    } catch (r) {
      throw console.log(r), new Error("Resource could not find entities");
    }
  }
  findByFragment(r) {
    return Promise.resolve([]);
  }
  findByName(r) {
    return Promise.resolve([]);
  }
  findByUri(r) {
    return Promise.resolve([]);
  }
  async getEntityByUri(r) {
    try {
      const t = r.pathname.split("/");
      if (t.length < 5)
        throw new Error("cound not find owner branch or commit in the path");
      const o = t[1], i = t[2], n = t[3], c = t.slice(4);
      if (!this.branch)
        throw new Error("Branch not found");
      if (!this.commit)
        throw new Error("Commit not found");
      await this.branch.fetchCommits();
      const g = (await this.branch.getCommits()).find((E) => E.hash == n);
      if (!g)
        throw new Error("hash " + g + " not found in repo " + o + i);
      this.commit = g;
      const f = await this.findInCommit(c, g);
      return await f?.fetchContent(), {
        name: f?.name,
        uri: r,
        data: f?.getContent()
      };
    } catch (t) {
      throw console.log(t), new Error("Resource could not find entities");
    }
  }
  async update(r) {
  }
  async getBranches() {
    return this.provider?.getBranches();
  }
  setBranch(r) {
    this.branch = r, this.branch.fetchCommits();
  }
  getCurrentBranch() {
    return this.branch;
  }
  getCommits() {
    return this.branch?.getCommits();
  }
  setCommit(r) {
    this.commit = r;
  }
  getCurrentCommit() {
    return this.commit;
  }
  createFolder(r) {
    return new de(r, null, this.fileProvider);
  }
  extractFile(r, t, o) {
    const i = new URL(this.uri ?? "");
    return i.pathname = r.owner + "/" + r.sha + "/" + t.hash + "/" + o.path, {
      name: o.path,
      uri: i,
      data: null
    };
  }
  async extractFolder(r, t, o) {
    let i = [], n;
    o ? n = await o.fetchFiles() : n = await t.fetchFiles();
    for (const c of n)
      c instanceof me && i.push(this.extractFile(r, t, c)), c instanceof de && (i = i.concat(await this.extractFolder(r, t, c)));
    return i;
  }
  async findInCommit(r, t, o) {
    let i;
    o ? i = await o.fetchFiles() : i = await t.fetchFiles();
    let n;
    const c = i.find((l) => {
      let g = l.path.split("/");
      return g[g.length - 1] == r[0];
    });
    if (c instanceof de ? n = await this.findInCommit(r.slice(1), t, c) : c instanceof me && (n = c), !n)
      throw new Error("file " + r + " not found in repo ");
    return n;
  }
}
const fe = zr("GitRepository"), Ur = Symbol.for(fe), vs = Se.type;
function Lr({ services: e }) {
  e.register(fe, new Se()), e.getRequired(Vr).registerRepoType(Se.type, Ur);
}
function Ir({ services: e }) {
  e.unregister(fe);
}
const Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AuthentificationError: Dr,
  GIT_REPOSITORY: fe,
  activate: Lr,
  deactivate: Ir,
  identifier: Ur,
  type: vs
}, Symbol.toStringTag, { value: "Module" })), dr = "org.eclipse.daanse.board.app.lib.persistence.git", Gs = "0.0.1-next.1";
async function qs(e) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error(`${dr}: tsm runtime is not initialized`);
  r.register(dr, Ps, Gs, "lib.persistence.git"), await Lr?.(e);
}
async function js(e) {
  await Ir?.(e);
}
export {
  Dr as AuthentificationError,
  fe as GIT_REPOSITORY,
  qs as activate,
  js as deactivate,
  Ur as identifier,
  vs as type
};
