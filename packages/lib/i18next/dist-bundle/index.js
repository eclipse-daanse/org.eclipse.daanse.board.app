import { injectAll as Te, component as Ie } from "@eclipse-daanse/tsm";
const { serviceId: Le } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), d = (r) => typeof r == "string", K = () => {
  let r, e;
  const t = new Promise((s, i) => {
    r = s, e = i;
  });
  return t.resolve = r, t.reject = e, t;
}, ae = (r) => r == null ? "" : "" + r, De = (r, e, t) => {
  r.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Ae = /###/g, oe = (r) => r && r.indexOf("###") > -1 ? r.replace(Ae, ".") : r, le = (r) => !r || d(r), V = (r, e, t) => {
  const s = d(e) ? e.split(".") : e;
  let i = 0;
  for (; i < s.length - 1; ) {
    if (le(r)) return {};
    const n = oe(s[i]);
    !r[n] && t && (r[n] = new t()), Object.prototype.hasOwnProperty.call(r, n) ? r = r[n] : r = {}, ++i;
  }
  return le(r) ? {} : {
    obj: r,
    k: oe(s[i])
  };
}, ue = (r, e, t) => {
  const {
    obj: s,
    k: i
  } = V(r, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let n = e[e.length - 1], a = e.slice(0, e.length - 1), o = V(r, a, Object);
  for (; o.obj === void 0 && a.length; )
    n = `${a[a.length - 1]}.${n}`, a = a.slice(0, a.length - 1), o = V(r, a, Object), o?.obj && typeof o.obj[`${o.k}.${n}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${n}`] = t;
}, Ke = (r, e, t, s) => {
  const {
    obj: i,
    k: n
  } = V(r, e, Object);
  i[n] = i[n] || [], i[n].push(t);
}, B = (r, e) => {
  const {
    obj: t,
    k: s
  } = V(r, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Ve = (r, e, t) => {
  const s = B(r, t);
  return s !== void 0 ? s : B(e, t);
}, ve = (r, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in r ? d(r[s]) || r[s] instanceof String || d(e[s]) || e[s] instanceof String ? t && (r[s] = e[s]) : ve(r[s], e[s], t) : r[s] = e[s]);
  return r;
}, I = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Ue = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Me = (r) => d(r) ? r.replace(/[&<>"'\/]/g, (e) => Ue[e]) : r;
class He {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const _e = [" ", ",", "?", "!", ";"], Be = new He(20), ze = (r, e, t) => {
  e = e || "", t = t || "";
  const s = _e.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (s.length === 0) return !0;
  const i = Be.getRegExp(`(${s.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let n = !i.test(r);
  if (!n) {
    const a = r.indexOf(t);
    a > 0 && !i.test(r.substring(0, a)) && (n = !0);
  }
  return n;
}, q = (r, e, t = ".") => {
  if (!r) return;
  if (r[e])
    return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0;
  const s = e.split(t);
  let i = r;
  for (let n = 0; n < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, o = "";
    for (let l = n; l < s.length; ++l)
      if (l !== n && (o += t), o += s[l], a = i[o], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < s.length - 1)
          continue;
        n += l - n + 1;
        break;
      }
    i = a;
  }
  return i;
}, M = (r) => r?.replace("_", "-"), Je = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    console?.[r]?.apply?.(console, e);
  }
};
class z {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Je, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, i) {
    return i && !this.debug ? null : (d(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new z(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new z(this.logger, e);
  }
}
var $ = new z();
class G {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, n]) => {
      for (let a = 0; a < n; a++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, n]) => {
      for (let a = 0; a < n; a++)
        i.apply(i, [e, ...t]);
    });
  }
}
class fe extends G {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, i = {}) {
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], s && (Array.isArray(s) ? o.push(...s) : d(s) && n ? o.push(...s.split(n)) : o.push(s)));
    const l = B(this.data, o);
    return !l && !t && !s && e.indexOf(".") > -1 && (e = o[0], t = o[1], s = o.slice(2).join(".")), l || !a || !d(s) ? l : q(this.data?.[e]?.[t], s, n);
  }
  addResource(e, t, s, i, n = {
    silent: !1
  }) {
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = [e, t];
    s && (o = o.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (o = e.split("."), i = t, t = o[1]), this.addNamespaces(t), ue(this.data, o, i), n.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = {
    silent: !1
  }) {
    for (const n in s)
      (d(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, n, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let o = [e, t];
    e.indexOf(".") > -1 && (o = e.split("."), i = s, s = t, t = o[1]), this.addNamespaces(t);
    let l = B(this.data, o) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? ve(l, s, n) : l = {
      ...l,
      ...s
    }, ue(this.data, o, l), a.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var we = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, s, i) {
    return r.forEach((n) => {
      e = this.processors[n]?.process(e, t, s, i) ?? e;
    }), e;
  }
};
const Re = Symbol("i18next/PATH_KEY");
function Ye() {
  const r = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (s, i) => (t?.revoke?.(), i === Re ? r : (r.push(i), t = Proxy.revocable(s, e), t.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function ee(r, e) {
  const {
    [Re]: t
  } = r(Ye());
  return t.join(e?.keySeparator ?? ".");
}
const ce = {}, Z = (r) => !d(r) && typeof r != "boolean" && typeof r != "number";
class J extends G {
  constructor(e, t = {}) {
    super(), De(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = $.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const i = this.resolve(e, s);
    if (i?.res === void 0) return !1;
    const n = Z(i.res);
    return !(s.returnObjects === !1 && n);
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !ze(e, s, i);
    if (a && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: d(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(u[0]) > -1) && (n = u.shift()), e = u.join(i);
    }
    return {
      key: e,
      namespaces: d(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = ee(e, {
      ...this.options,
      ...i
    })), Array.isArray(e) || (e = [String(e)]);
    const n = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], i), u = l[l.length - 1];
    let c = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const f = i.lng || this.language, p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (f?.toLowerCase() === "cimode")
      return p ? n ? {
        res: `${u}${c}${o}`,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${c}${o}` : n ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : o;
    const g = this.resolve(e, i);
    let h = g?.res;
    const x = g?.usedKey || o, S = g?.exactUsedKey || o, L = ["[object Number]", "[object Function]", "[object RegExp]"], y = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, j = !this.i18nFormat || this.i18nFormat.handleAsObject, O = i.count !== void 0 && !d(i.count), N = J.hasDefaultValue(i), k = O ? this.pluralResolver.getSuffix(f, i.count, i) : "", T = i.ordinal && O ? this.pluralResolver.getSuffix(f, i.count, {
      ordinal: !1
    }) : "", se = O && !i.ordinal && i.count === 0, E = se && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${k}`] || i[`defaultValue${T}`] || i.defaultValue;
    let w = h;
    j && !h && N && (w = E);
    const Fe = Z(w), ke = Object.prototype.toString.apply(w);
    if (j && w && Fe && L.indexOf(ke) < 0 && !(d(y) && Array.isArray(w))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(x, w, {
          ...i,
          ns: l
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return n ? (g.res = R, g.usedParams = this.getUsedParamsDetails(i), g) : R;
      }
      if (a) {
        const R = Array.isArray(w), v = R ? [] : {}, ie = R ? S : x;
        for (const C in w)
          if (Object.prototype.hasOwnProperty.call(w, C)) {
            const P = `${ie}${a}${C}`;
            N && !h ? v[C] = this.translate(P, {
              ...i,
              defaultValue: Z(E) ? E[C] : void 0,
              joinArrays: !1,
              ns: l
            }) : v[C] = this.translate(P, {
              ...i,
              joinArrays: !1,
              ns: l
            }), v[C] === P && (v[C] = w[C]);
          }
        h = v;
      }
    } else if (j && d(y) && Array.isArray(h))
      h = h.join(y), h && (h = this.extendTranslation(h, e, i, s));
    else {
      let R = !1, v = !1;
      !this.isValidLookup(h) && N && (R = !0, h = E), this.isValidLookup(h) || (v = !0, h = o);
      const C = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && v ? void 0 : h, P = N && E !== h && this.options.updateMissing;
      if (v || R || P) {
        if (this.logger.log(P ? "updateKey" : "missingKey", f, u, o, P ? E : h), a) {
          const b = this.resolve(o, {
            ...i,
            keySeparator: !1
          });
          b && b.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let D = [];
        const H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && H && H[0])
          for (let b = 0; b < H.length; b++)
            D.push(H[b]);
        else this.options.saveMissingTo === "all" ? D = this.languageUtils.toResolveHierarchy(i.lng || this.language) : D.push(i.lng || this.language);
        const ne = (b, F, A) => {
          const re = N && A !== h ? A : C;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(b, u, F, re, P, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(b, u, F, re, P, i), this.emit("missingKey", b, u, F, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? D.forEach((b) => {
          const F = this.pluralResolver.getSuffixes(b, i);
          se && i[`defaultValue${this.options.pluralSeparator}zero`] && F.indexOf(`${this.options.pluralSeparator}zero`) < 0 && F.push(`${this.options.pluralSeparator}zero`), F.forEach((A) => {
            ne([b], o + A, i[`defaultValue${A}`] || E);
          });
        }) : ne(D, o, E));
      }
      h = this.extendTranslation(h, e, i, g, s), v && h === o && this.options.appendNamespaceToMissingKey && (h = `${u}${c}${o}`), (v || R) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${o}` : o, R ? h : void 0, i));
    }
    return n ? (g.res = h, g.usedParams = this.getUsedParamsDetails(i), g) : h;
  }
  extendTranslation(e, t, s, i, n) {
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const l = d(e) && (s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const f = e.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let c = s.replace && !d(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (c = {
        ...this.options.interpolation.defaultVariables,
        ...c
      }), e = this.interpolator.interpolate(e, c, s.lng || this.language || i.usedLng, s), l) {
        const f = e.match(this.interpolator.nestingRegexp), p = f && f.length;
        u < p && (s.nest = !1);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...f) => n?.[0] === f[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : this.translate(...f, t), s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, o = d(a) ? [a] : a;
    return e != null && o?.length && s.applyPostProcessor !== !1 && (e = we.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, n, a, o;
    return d(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      i = c;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const p = t.count !== void 0 && !d(t.count), g = p && !t.ordinal && t.count === 0, h = t.context !== void 0 && (d(t.context) || typeof t.context == "number") && t.context !== "", x = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((S) => {
        this.isValidLookup(s) || (o = S, !ce[`${x[0]}-${S}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (ce[`${x[0]}-${S}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((L) => {
          if (this.isValidLookup(s)) return;
          a = L;
          const y = [c];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(y, c, L, S, t);
          else {
            let O;
            p && (O = this.pluralResolver.getSuffix(L, t.count, t));
            const N = `${this.options.pluralSeparator}zero`, k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (t.ordinal && O.indexOf(k) === 0 && y.push(c + O.replace(k, this.options.pluralSeparator)), y.push(c + O), g && y.push(c + N)), h) {
              const T = `${c}${this.options.contextSeparator || "_"}${t.context}`;
              y.push(T), p && (t.ordinal && O.indexOf(k) === 0 && y.push(T + O.replace(k, this.options.pluralSeparator)), y.push(T + O), g && y.push(T + N));
            }
          }
          let j;
          for (; j = y.pop(); )
            this.isValidLookup(s) || (n = j, s = this.getResource(L, S, j, t));
        }));
      });
    }), {
      res: s,
      usedKey: i,
      exactUsedKey: n,
      usedLng: a,
      usedNS: o
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, i = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !d(e.replace);
    let i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !s) {
      i = {
        ...i
      };
      for (const n of t)
        delete i[n];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class he {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = $.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = M(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = M(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (d(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const i = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((a) => {
        if (a === n) return a;
        if (!(a.indexOf("-") < 0 && n.indexOf("-") < 0) && (a.indexOf("-") > 0 && n.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === n || a.indexOf(n) === 0 && n.length > 1))
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), d(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), i = [], n = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return d(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : d(e) && n(this.formatLanguageCode(e)), s.forEach((a) => {
      i.indexOf(a) < 0 && n(this.formatLanguageCode(a));
    }), i;
  }
}
const de = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ge = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ge {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = $.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = M(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: i
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let a;
    try {
      a = new Intl.PluralRules(s, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ge;
      if (!e.match(/-|_/)) return ge;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(l, t);
    }
    return this.pluralRulesCache[n] = a, a;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, n) => de[i] - de[n]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const pe = (r, e, t, s = ".", i = !0) => {
  let n = Ve(r, e, t);
  return !n && i && d(t) && (n = q(r, t, s), n === void 0 && (n = q(e, t, s))), n;
}, X = (r) => r.replace(/\$/g, "$$$$");
class We {
  constructor(e = {}) {
    this.logger = $.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: n,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: p,
      nestingPrefixEscaped: g,
      nestingSuffix: h,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: S,
      maxReplaces: L,
      alwaysFormat: y
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Me, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = n ? I(n) : a || "{{", this.suffix = o ? I(o) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = p ? I(p) : g || I("$t("), this.nestingSuffix = h ? I(h) : x || I(")"), this.nestingOptionsSeparator = S || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t?.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    let n, a, o;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const L = pe(t, l, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, s, {
          ...i,
          ...t,
          interpolationkey: g
        }) : L;
      }
      const h = g.split(this.formatSeparator), x = h.shift().trim(), S = h.join(this.formatSeparator).trim();
      return this.format(pe(t, l, x, this.options.keySeparator, this.options.ignoreJSONStructure), S, s, {
        ...i,
        ...t,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const c = i?.missingInterpolationHandler || this.options.missingInterpolationHandler, f = i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => X(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? X(this.escape(g)) : X(g)
    }].forEach((g) => {
      for (o = 0; n = g.regex.exec(e); ) {
        const h = n[1].trim();
        if (a = u(h), a === void 0)
          if (typeof c == "function") {
            const S = c(e, n, i);
            a = d(S) ? S : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, h))
            a = "";
          else if (f) {
            a = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), a = "";
        else !d(a) && !this.useRawValueToEscape && (a = ae(a));
        const x = g.safeValue(a);
        if (e = e.replace(n[0], x), f ? (g.regex.lastIndex += a.length, g.regex.lastIndex -= n[0].length) : g.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, n, a;
    const o = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let p = `{${f[1]}`;
      l = f[0], p = this.interpolate(p, a);
      const g = p.match(/'/g), h = p.match(/"/g);
      ((g?.length ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        a = JSON.parse(p), u && (a = {
          ...u,
          ...a
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, x), `${l}${c}${p}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let l = [];
      a = {
        ...s
      }, a = a.replace && !d(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const u = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (u !== -1 && (l = i[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), i[1] = i[1].slice(0, u)), n = t(o.call(this, i[1].trim(), a), a), n && i[0] === e && !d(n)) return n;
      d(n) || (n = ae(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), l.length && (n = l.reduce((c, f) => this.format(c, f, s.lng, {
        ...s,
        interpolationkey: i[1].trim()
      }), n.trim())), e = e.replace(i[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Qe = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.indexOf("(") > -1) {
    const s = r.split("(");
    e = s[0].toLowerCase().trim();
    const i = s[1].substring(0, s[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((a) => {
      if (a) {
        const [o, ...l] = a.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = o.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, me = (r) => {
  const e = {};
  return (t, s, i) => {
    let n = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (n = {
      ...n,
      [i.interpolationkey]: void 0
    });
    const a = s + JSON.stringify(n);
    let o = e[a];
    return o || (o = r(M(s), i), e[a] = o), o(t);
  };
}, Ze = (r) => (e, t, s) => r(M(t), s)(e);
class Xe {
  constructor(e = {}) {
    this.logger = $.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? me : Ze;
    this.formats = {
      number: s((i, n) => {
        const a = new Intl.NumberFormat(i, {
          ...n
        });
        return (o) => a.format(o);
      }),
      currency: s((i, n) => {
        const a = new Intl.NumberFormat(i, {
          ...n,
          style: "currency"
        });
        return (o) => a.format(o);
      }),
      datetime: s((i, n) => {
        const a = new Intl.DateTimeFormat(i, {
          ...n
        });
        return (o) => a.format(o);
      }),
      relativetime: s((i, n) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...n
        });
        return (o) => a.format(o, n.range || "day");
      }),
      list: s((i, n) => {
        const a = new Intl.ListFormat(i, {
          ...n
        });
        return (o) => a.format(o);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = me(t);
  }
  format(e, t, s, i = {}) {
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((o) => o.indexOf(")") > -1)) {
      const o = n.findIndex((l) => l.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, o)].join(this.formatSeparator);
    }
    return n.reduce((o, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = Qe(l);
      if (this.formats[u]) {
        let f = o;
        try {
          const p = i?.formatParams?.[i.interpolationkey] || {}, g = p.locale || p.lng || i.locale || i.lng || s;
          f = this.formats[u](o, g, {
            ...c,
            ...i,
            ...p
          });
        } catch (p) {
          this.logger.warn(p);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return o;
    }, e);
  }
}
const qe = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class et extends G {
  constructor(e, t, s, i = {}) {
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = $.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const n = {}, a = {}, o = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((f) => {
        const p = `${u}|${f}`;
        !s.reload && this.store.hasResourceBundle(u, f) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? a[p] === void 0 && (a[p] = !0) : (this.state[p] = 1, c = !1, a[p] === void 0 && (a[p] = !0), n[p] === void 0 && (n[p] = !0), l[f] === void 0 && (l[f] = !0)));
      }), c || (o[u] = !0);
    }), (Object.keys(n).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), n = i[0], a = i[1];
    t && this.emit("failedLoading", n, a, t), !t && s && this.store.addResourceBundle(n, a, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      Ke(l.loaded, [n], a), qe(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        o[u] || (o[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((f) => {
          o[u][f] === void 0 && (o[u][f] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, s, i = 0, n = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: n,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const o = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, n * 2, a);
        }, n);
        return;
      }
      a(u, c);
    }, l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => o(null, c)).catch(o) : o(null, u);
      } catch (u) {
        o(u);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    d(e) && (e = this.languageUtils.toResolveHierarchy(e)), d(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, i);
    if (!n.toLoad.length)
      return n.pending.length || i(), null;
    n.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e, t = "") {
    const s = e.split("|"), i = s[0], n = s[1];
    this.read(i, n, "read", void 0, void 0, (a, o) => {
      a && this.logger.warn(`${t}loading namespace ${n} for language ${i} failed`, a), !a && o && this.logger.log(`${t}loaded namespace ${n} for language ${i}`, o), this.loaded(e, a, o);
    });
  }
  saveMissing(e, t, s, i, n, a = {}, o = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend?.create) {
        const l = {
          ...a,
          isUpdate: n
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, s, i, l) : c = u(e, t, s, i), c && typeof c.then == "function" ? c.then((f) => o(null, f)).catch(o) : o(null, c);
          } catch (c) {
            o(c);
          }
        else
          u(e, t, s, i, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
const xe = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (r) => {
    let e = {};
    if (typeof r[1] == "object" && (e = r[1]), d(r[1]) && (e.defaultValue = r[1]), d(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const t = r[3] || r[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (r) => r,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), ye = (r) => (d(r.ns) && (r.ns = [r.ns]), d(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), d(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs?.indexOf?.("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate), r), _ = () => {
}, tt = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class U extends G {
  constructor(e = {}, t) {
    if (super(), this.options = ye(e), this.services = {}, this.logger = $, this.modules = {
      external: []
    }, tt(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (d(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = xe();
    this.options = {
      ...s,
      ...this.options,
      ...ye(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? $.init(i(this.modules.logger), this.options) : $.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Xe;
      const c = new he(this.options);
      this.store = new fe(this.options.resources, this.options);
      const f = this.services;
      f.logger = $, f.resourceStore = this.store, f.languageUtils = c, f.pluralResolver = new Ge(c, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = i(u), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new We(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new et(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new J(this.services, this.options), this.translator.on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = _), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const o = K(), l = () => {
      const u = (c, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(f), t(c, f);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), o;
  }
  loadResources(e, t = _) {
    let s = t;
    const i = d(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const n = [], a = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((u) => {
          u !== "cimode" && n.indexOf(u) < 0 && n.push(u);
        });
      };
      i ? a(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => a(l)), this.options.preload?.forEach?.((o) => a(o)), this.services.backendConnector.load(n, this.options.ns, (o) => {
        !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(o);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = K();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = _), this.services.backendConnector.reload(e, t, (n) => {
      i.resolve(), s(n);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && we.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = K();
    this.emit("languageChanging", e);
    const i = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, n = (o, l) => {
      l ? this.isLanguageChangingTo === e && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, s.resolve((...u) => this.t(...u)), t && t(o, (...u) => this.t(...u));
    }, a = (o) => {
      !e && !o && this.services.languageDetector && (o = []);
      const l = d(o) ? o : o && o[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(d(o) ? [o] : o);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector?.cacheUserLanguage?.(u)), this.loadResources(u, (c) => {
        n(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, t, s) {
    const i = (n, a, ...o) => {
      let l;
      typeof a != "object" ? l = this.options.overloadTranslationOptionHandler([n, a].concat(o)) : l = {
        ...a
      }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const u = this.options.keySeparator || ".";
      let c;
      return l.keyPrefix && Array.isArray(n) ? c = n.map((f) => (typeof f == "function" && (f = ee(f, {
        ...this.options,
        ...a
      })), `${l.keyPrefix}${u}${f}`)) : (typeof n == "function" && (n = ee(n, {
        ...this.options,
        ...a
      })), c = l.keyPrefix ? `${l.keyPrefix}${u}${n}` : n), this.t(c, l);
    };
    return d(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const a = (o, l) => {
      const u = this.services.backendConnector.state[`${o}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!i || a(n, e)));
  }
  loadNamespaces(e, t) {
    const s = K();
    return this.options.ns ? (d(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = K();
    d(e) && (e = [e]);
    const i = this.options.preload || [], n = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return n.length ? (this.options.preload = i.concat(n), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const i = new Intl.Locale(e);
      if (i && i.getTextInfo) {
        const n = i.getTextInfo();
        if (n && n.direction) return n.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services?.languageUtils || new he(xe());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const s = new U(e, t);
    return s.createInstance = U.createInstance, s;
  }
  cloneInstance(e = {}, t = _) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new U(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((o) => {
      n[o] = this[o];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const o = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, l[u] = Object.keys(l[u]).reduce((c, f) => (c[f] = {
        ...l[u][f]
      }, c), l[u]), l), {});
      n.store = new fe(o, i), n.services.resourceStore = n.store;
    }
    return n.translator = new J(n.services, i), n.translator.on("*", (o, ...l) => {
      n.emit(o, ...l);
    }), n.init(i, t), n.translator.options = i, n.translator.backendConnector.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, n;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const m = U.createInstance();
m.createInstance;
m.dir;
m.init;
m.loadResources;
m.reloadResources;
m.use;
m.changeLanguage;
m.getFixedT;
m.t;
m.exists;
m.setDefaultNamespace;
m.hasLoadedNamespace;
m.loadNamespaces;
m.loadLanguages;
var st = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Ce = (r, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? it(e, t) : e, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (i = (s ? a(e, t, i) : a(i)) || i);
  return s && i && st(e, t, i), i;
};
const $e = Le("Translations");
function Pe({ namespace: r, resources: e }) {
  for (const [t, s] of Object.entries(e))
    m.addResourceBundle(t, r, s, !0, !0);
}
function Ne({ namespace: r, resources: e }) {
  for (const t of Object.keys(e))
    m.removeResourceBundle(t, r);
}
let Y = class {
  constructor() {
    this.held = [];
  }
  set translations(r) {
    const e = this.held.filter((s) => !r.includes(s));
    for (const s of e) Ne(s);
    const t = new Set(e.map((s) => s.namespace));
    for (const s of r)
      (!this.held.includes(s) || t.has(s.namespace)) && Pe(s);
    this.held = r;
  }
  get translations() {
    return this.held;
  }
};
Ce([
  Te($e)
], Y.prototype, "translations", 1);
Y = Ce([
  Ie({ immediate: !0 })
], Y);
const W = Le("I18next"), nt = Symbol.for(W), rt = "daanse.board.language", Q = "en", Se = "common";
function at() {
  try {
    const e = globalThis.localStorage?.getItem(rt);
    if (e) return e;
  } catch {
  }
  const r = globalThis.navigator?.language;
  return r ? r.split("-")[0].toLowerCase() : Q;
}
const be = /* @__PURE__ */ new Set();
function ot(r, e, t) {
  if (!m.hasResourceBundle(Q, e)) return;
  const s = `${r.join(",")}|${e}:${t}`;
  be.has(s) || (be.add(s), console.warn(`[i18n] no text for ${e}:${t} in ${r.join(", ")}`));
}
function lt() {
  const r = globalThis.location?.hostname;
  return r === "localhost" || r === "127.0.0.1";
}
function te(r) {
  globalThis.document?.documentElement && (globalThis.document.documentElement.lang = r);
}
function Ee({ services: r }) {
  const e = lt();
  m.init({
    lng: at(),
    fallbackLng: Q,
    load: "languageOnly",
    defaultNS: Se,
    ns: [Se],
    resources: {},
    /* Texts land in Vue templates, which escape on their own. */
    interpolation: { escapeValue: !1 },
    /* An empty text is a gap, not a translation. */
    returnEmptyString: !1,
    saveMissing: e,
    missingKeyHandler: e ? ot : void 0
  }), te(m.language), m.on("languageChanged", te), r.register(W, m);
}
function ut(r, e) {
  return m.t(r, e);
}
function ft() {
  return m.resolvedLanguage ?? m.language ?? Q;
}
function je({ services: r }) {
  m.off("languageChanged", te), r.unregister(W);
}
const ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18NEXT: W,
  TRANSLATIONS: $e,
  get TranslationTracker() {
    return Y;
  },
  activate: Ee,
  addTranslations: Pe,
  currentLanguage: ft,
  deactivate: je,
  removeTranslations: Ne,
  symbolForI18n: nt,
  translate: ut
}, Symbol.toStringTag, { value: "Module" })), Oe = "org.eclipse.daanse.board.app.lib.i18next", ht = "0.0.1-next.1";
async function gt(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Oe}: tsm runtime is not initialized`);
  e.register(Oe, ct, ht, "lib.i18next"), await Ee?.(r);
}
async function pt(r) {
  await je?.(r);
}
export {
  W as I18NEXT,
  $e as TRANSLATIONS,
  Y as TranslationTracker,
  gt as activate,
  Pe as addTranslations,
  ft as currentLanguage,
  pt as deactivate,
  Ne as removeTranslations,
  nt as symbolForI18n,
  ut as translate
};
