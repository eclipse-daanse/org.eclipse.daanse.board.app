import { g as Ms, a as Us } from "./_commonjsHelpers-MdHo5S7N.js";
function L(c) {
  return c && typeof c.eProxyURI == "function" && typeof c.eSetProxyURI == "function";
}
const N = {
  /** A feature has been set */
  SET: 1,
  /** A feature has been unset */
  UNSET: 2,
  /** A value has been added to a list */
  ADD: 3,
  /** A value has been removed from a list */
  REMOVE: 4,
  /** Multiple values have been added to a list */
  ADD_MANY: 5,
  /** Multiple values have been removed from a list */
  REMOVE_MANY: 6,
  /** A value has been moved within a list */
  MOVE: 7,
  /** An adapter is being removed */
  REMOVING_ADAPTER: 8,
  /** A proxy has been resolved */
  RESOLVE: 9
}, Pe = -1, It = -1;
class oe {
  constructor(e, t, s, r, n, i = Pe, u = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = It, this.oldValue = r, this.newValue = n, this.position = i, this.wasSetFlag = u;
  }
  getNotifier() {
    return this.notifier;
  }
  getEventType() {
    return this.eventType;
  }
  getFeature() {
    return this.feature;
  }
  getFeatureID() {
    return this.featureID;
  }
  getOldValue() {
    return this.oldValue;
  }
  getNewValue() {
    return this.newValue;
  }
  wasSet() {
    return this.wasSetFlag;
  }
  isTouch() {
    switch (this.eventType) {
      case N.RESOLVE:
      case N.REMOVING_ADAPTER:
        return !0;
      case N.ADD:
      case N.ADD_MANY:
      case N.REMOVE:
      case N.REMOVE_MANY:
      case N.MOVE:
        return !1;
      case N.SET:
      case N.UNSET:
        return this.oldValue === this.newValue ? !0 : this.oldValue === null || this.newValue === null ? !1 : this.oldValue === this.newValue;
      default:
        return !1;
    }
  }
  isReset() {
    if (this.feature) {
      const e = this.feature.getDefaultValue();
      return this.newValue === e;
    }
    return !1;
  }
  getPosition() {
    return this.position;
  }
  merge(e) {
    return !1;
  }
  toString() {
    const e = {
      [N.SET]: "SET",
      [N.UNSET]: "UNSET",
      [N.ADD]: "ADD",
      [N.REMOVE]: "REMOVE",
      [N.ADD_MANY]: "ADD_MANY",
      [N.REMOVE_MANY]: "REMOVE_MANY",
      [N.MOVE]: "MOVE",
      [N.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [N.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const Ge = /^(?:0|[1-9]\d*)$/, bt = Symbol.for("emfts.indexedList"), Rt = {
  get(c, e, t) {
    if (e === bt)
      return !0;
    if (typeof e == "string" && Ge.test(e)) {
      const s = Number(e), r = c.data;
      return r !== void 0 ? r[s] : s < c.size() ? c.get(s) : void 0;
    }
    return Reflect.get(c, e, t);
  },
  set(c, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        c.clear();
      else
        for (; c.size() > r; )
          c.removeAt(c.size() - 1);
      return !0;
    }
    if (typeof e == "string" && Ge.test(e)) {
      const r = Number(e), n = c.size();
      if (r < n)
        c.set(r, t);
      else if (r === n)
        c.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${n}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(c, e, t, s);
  },
  has(c, e) {
    return typeof e == "string" && Ge.test(e) ? Number(e) < c.size() : Reflect.has(c, e);
  }
};
class Z {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, Rt);
  }
  // ===== Array-compatible properties and methods =====
  /**
   * Array-compatible length property.
   */
  get length() {
    return this.data.length;
  }
  /**
   * Array-compatible push method. Adds elements to the end of the list.
   * Sends ADD or ADD_MANY notification.
   */
  push(...e) {
    return e.length === 0 ? this.data.length : (e.length === 1 ? this.add(e[0]) : this.addAll(e), this.data.length);
  }
  /**
   * Array-compatible pop method. Removes and returns the last element.
   * Sends REMOVE notification.
   */
  pop() {
    if (this.data.length !== 0)
      return this.removeAt(this.data.length - 1);
  }
  /**
   * Array-compatible shift method. Removes and returns the first element.
   * Sends REMOVE notification.
   */
  shift() {
    if (this.data.length !== 0)
      return this.removeAt(0);
  }
  /**
   * Array-compatible unshift method. Adds elements to the beginning of the list.
   * Sends ADD or ADD_MANY notification.
   */
  unshift(...e) {
    return e.length === 0 ? this.data.length : (e.length === 1 ? this.addAt(0, e[0]) : this.addAllAt(0, e), this.data.length);
  }
  /**
   * Array-compatible splice method.
   * Removes elements and/or inserts new elements.
   * Sends appropriate notifications.
   */
  splice(e, t, ...s) {
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), n = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), i = [];
    for (let u = 0; u < n; u++)
      r < this.data.length && i.push(this.removeAt(r));
    for (let u = 0; u < s.length; u++)
      this.addAt(r + u, s[u]);
    return i;
  }
  /**
   * Array-compatible forEach method.
   */
  forEach(e, t) {
    this.data.forEach((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible map method.
   */
  map(e, t) {
    return this.data.map((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible filter method.
   */
  filter(e, t) {
    return this.data.filter((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible find method.
   */
  find(e, t) {
    return this.data.find((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible findIndex method.
   */
  findIndex(e, t) {
    return this.data.findIndex((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible some method.
   */
  some(e, t) {
    return this.data.some((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible every method.
   */
  every(e, t) {
    return this.data.every((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible reduce method.
   */
  reduce(e, t) {
    return this.data.reduce((s, r, n) => e(s, r, n, this.data), t);
  }
  /**
   * Array-compatible includes method.
   */
  includes(e) {
    return this.contains(e);
  }
  /**
   * Array-compatible slice method. Returns a shallow copy.
   */
  slice(e, t) {
    return this.data.slice(e, t);
  }
  /**
   * Array-compatible concat method. Returns a new array, list is unchanged.
   * Accepts single values, arrays and other ELists as arguments.
   */
  concat(...e) {
    const t = [...this.data];
    for (const s of e)
      Array.isArray(s) ? t.push(...s) : s instanceof Z ? t.push(...s.data) : t.push(s);
    return t;
  }
  /**
   * Array-compatible sort method. Sorts in place and returns the list.
   *
   * The reordering is applied through move(), so each relocated element emits a
   * MOVE notification. This mirrors ECollections.sort() in Java EMF rather than
   * silently rewriting the backing array.
   */
  sort(e) {
    return this.reorderTo([...this.data].sort(e)), this;
  }
  /**
   * Array-compatible reverse method. Reverses in place and returns the list.
   * Emits MOVE notifications, see {@link sort}.
   */
  reverse() {
    return this.reorderTo([...this.data].reverse()), this;
  }
  /**
   * Rearranges the list to match the given order using move(), so that every
   * relocation is observable. The order must be a permutation of the list.
   */
  reorderTo(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.data[t] === e[t])
        continue;
      const s = this.data.indexOf(e[t], t);
      s > t && this.move(t, s);
    }
  }
  /**
   * Array-compatible join method.
   */
  join(e) {
    return this.data.join(e);
  }
  /**
   * Array-compatible at method. Negative indices count from the end.
   * Implemented directly rather than via Array.prototype.at, which the ES2020
   * target of this project does not provide.
   */
  at(e) {
    const t = e < 0 ? this.data.length + e : e;
    return t >= 0 && t < this.data.length ? this.data[t] : void 0;
  }
  /**
   * Array-compatible lastIndexOf method.
   */
  lastIndexOf(e) {
    return this.data.lastIndexOf(e);
  }
  /**
   * Array-compatible flatMap method.
   */
  flatMap(e, t) {
    return this.data.flatMap((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Makes JSON.stringify(list) produce a plain array. Without this the internal
   * fields would be serialized, and `owner` would drag the whole model along.
   */
  toJSON() {
    return [...this.data];
  }
  // ===== End Array-compatible methods =====
  getOwner() {
    return this.owner;
  }
  getFeature() {
    return this.feature;
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  contains(e) {
    return this.data.indexOf(e) !== -1;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    return this.data[e];
  }
  set(e, t) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    const s = this.data[e];
    return s === t || (this.data[e] = t, this.didSet(e, t, s)), s;
  }
  add(e) {
    const t = this.data.length;
    return this.data.push(e), this.didAdd(t, e), !0;
  }
  addAt(e, t) {
    if (e < 0 || e > this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    this.data.splice(e, 0, t), this.didAdd(e, t);
  }
  addAll(e) {
    if (e.length === 0)
      return !1;
    const t = this.data.length;
    return this.data.push(...e), this.didAddMany(t, e), !0;
  }
  addAllAt(e, t) {
    if (t.length === 0)
      return !1;
    if (e < 0 || e > this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    return this.data.splice(e, 0, ...t), this.didAddMany(e, t), !0;
  }
  remove(e) {
    const t = this.data.indexOf(e);
    return t === -1 ? !1 : (this.removeAt(t), !0);
  }
  removeAt(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    const t = this.data.splice(e, 1)[0];
    return this.didRemove(e, t), t;
  }
  clear() {
    if (this.data.length === 0)
      return;
    const e = [...this.data];
    this.data.length = 0, this.didClear(e);
  }
  move(e, t) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`fromIndex ${t} out of bounds for list of size ${this.data.length}`);
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`toIndex ${e} out of bounds for list of size ${this.data.length}`);
    const s = this.data[t];
    return t === e || (this.data.splice(t, 1), this.data.splice(e, 0, s), this.didMove(e, s, t)), s;
  }
  toArray() {
    return [...this.data];
  }
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  // ===== Notification hooks =====
  didAdd(e, t) {
    this.dispatchNotification(N.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(N.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(N.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(N.REMOVE, e[0], null, 0) : this.dispatchNotification(N.REMOVE_MANY, e, null, Pe);
  }
  didSet(e, t, s) {
    this.dispatchNotification(N.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(N.MOVE, s, t, e);
  }
  dispatchNotification(e, t, s, r) {
    const n = this.getFeature();
    if (!this.owner || !n || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const u = this.owner.eAdapters();
      if (!u || u.length === 0)
        return;
    } else
      return;
    const i = new oe(this.owner, e, n, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(i);
  }
}
class Se extends Z {
  constructor(e, t) {
    super(e, t);
  }
  didAdd(e, t) {
    this.setContainer(t), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setContainer(s);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    this.unsetContainer(t), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      this.unsetContainer(t);
    super.didClear(e);
  }
  didSet(e, t, s) {
    this.unsetContainer(s), this.setContainer(t), super.didSet(e, t, s);
  }
  add(e) {
    return this.removeFromOldContainer(e), super.add(e);
  }
  addAt(e, t) {
    this.removeFromOldContainer(t), super.addAt(e, t);
  }
  addAll(e) {
    for (const t of e)
      this.removeFromOldContainer(t);
    return super.addAll(e);
  }
  addAllAt(e, t) {
    for (const s of t)
      this.removeFromOldContainer(s);
    return super.addAllAt(e, t);
  }
  set(e, t) {
    return this.removeFromOldContainer(t), super.set(e, t);
  }
  setContainer(e) {
    const t = this.getFeature();
    e && "eSetContainer" in e && this.owner && e.eSetContainer(this.owner, t);
  }
  unsetContainer(e) {
    e && "eSetContainer" in e && e.eSetContainer(null, null);
  }
  removeFromOldContainer(e) {
    const t = e.eContainer();
    if (t && t !== this.owner) {
      const s = e.eContainmentFeature();
      if (s && s.isMany()) {
        const r = t.eGet(s);
        if (r && "remove" in r)
          r.remove(e);
        else if (Array.isArray(r)) {
          const n = r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        }
      }
    }
  }
}
class Pt extends Se {
  constructor(e, t, s) {
    super(e, t), this.inverseSetter = s;
  }
  didAdd(e, t) {
    this.inverseSetter(t, this.owner), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.inverseSetter(s, this.owner);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    this.inverseSetter(t, null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      this.inverseSetter(t, null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    this.inverseSetter(s, null), this.inverseSetter(t, this.owner), super.didSet(e, t, s);
  }
}
function Ls(c, e, t) {
  return V(new Pt(c, e, t));
}
class vt extends Se {
  constructor(e, t, s) {
    super(e, null), this.resolvedFeature = void 0, this.featureResolver = t, this.inverseSetter = s;
  }
  getFeature() {
    return this.resolvedFeature === void 0 && (this.resolvedFeature = this.featureResolver()), this.resolvedFeature;
  }
  didAdd(e, t) {
    this.inverseSetter(t, this.owner), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.inverseSetter(s, this.owner);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    this.inverseSetter(t, null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      this.inverseSetter(t, null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    this.inverseSetter(s, null), this.inverseSetter(t, this.owner), super.didSet(e, t, s);
  }
}
class xt extends Z {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && L(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
      const s = this.owner.eResolveProxy(t);
      s !== t && (this.data[e] = s, t = s);
    }
    return t;
  }
  [Symbol.iterator]() {
    const e = this;
    let t = 0;
    return {
      next() {
        return t >= e.data.length ? { done: !0, value: void 0 } : { done: !1, value: e.get(t++) };
      }
    };
  }
}
function M(c) {
  return c && typeof c.add == "function" && typeof c.size == "function" && typeof c.get == "function";
}
function V(c) {
  return c[bt] ? c : new Proxy(c, Rt);
}
function Dt(c, e) {
  return V(new Se(c, e));
}
function Ft(c, e) {
  return V(new xt(c, e));
}
function kt(c, e) {
  return V(new Z(c, e));
}
class Ot extends Z {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(N.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(N.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(N.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(N.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(N.REMOVE_MANY, e, null, Pe);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(N.SET, s, t, e);
  }
  setResource(e) {
    e && "eSetResource" in e && e.eSetResource(this.resource);
  }
  unsetResource(e) {
    e && "eSetResource" in e && e.eSetResource(null);
  }
  /**
   * Dispatch notification to the Resource (which is a Notifier).
   * Uses a synthetic 'contents' feature for the notification.
   */
  dispatchResourceNotification(e, t, s, r) {
    if (!this.resource || "eDeliver" in this.resource && !this.resource.eDeliver())
      return;
    if ("eAdapters" in this.resource) {
      const u = this.resource.eAdapters();
      if (!u || u.length === 0)
        return;
    } else
      return;
    const n = { getName: () => "contents" }, i = new oe(this.resource, e, n, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(i);
  }
}
function wt(c) {
  return V(new Ot(c));
}
var X;
(function(c) {
  c.INSTANCE = js();
})(X || (X = {}));
function ve(c, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && c.set(s, t), ve(c, t);
  }
}
function xe(c) {
  const e = c.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${c.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function js() {
  const c = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = c.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = c.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return c.get(e) || null;
    },
    set(e, t) {
      c.set(e, t), "getEPackage" in t || ve(c, t);
    },
    registerPackage(e) {
      this.set(xe(e), e);
    },
    delete(e) {
      return c.delete(e);
    },
    has(e) {
      return c.has(e);
    },
    keys() {
      return c.keys();
    },
    values() {
      return c.values();
    }
  };
}
class T {
  constructor(e, t, s, r, n) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = n;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new T(null, null, "", null, null);
    let t = null, s = null, r = null, n = null, i = null, u = 0;
    e.length;
    const l = e.indexOf("#");
    l >= 0 && (i = e.substring(l + 1), e = e.substring(0, l));
    const h = e.indexOf("?");
    h >= 0 && (n = e.substring(h + 1), e = e.substring(0, h));
    const d = e.indexOf(":");
    if (d > 0) {
      let p = !0;
      for (let E = 0; E < d; E++)
        if (e.charAt(E) === "/") {
          p = !1;
          break;
        }
      p && (t = e.substring(0, d), u = d + 1);
    }
    if (e.startsWith("//", u)) {
      const p = u + 2;
      let E = p;
      for (; E < e.length && e.charAt(E) !== "/"; )
        E++;
      s = e.substring(p, E), u = E;
    }
    return u < e.length ? r = e.substring(u) : s !== null && (r = ""), new T(t, s, r, n, i);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new T("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new T("platform", null, "/resource" + e, null, null);
  }
  /**
   * Returns the scheme, or null.
   */
  scheme() {
    return this._scheme;
  }
  /**
   * Returns the authority, or null.
   */
  authority() {
    return this._authority;
  }
  /**
   * Returns the path, or null.
   */
  path() {
    return this._path;
  }
  /**
   * Returns the query, or null.
   */
  query() {
    return this._query;
  }
  /**
   * Returns the fragment, or null.
   */
  fragment() {
    return this._fragment;
  }
  /**
   * Returns the host part of the authority, or null.
   */
  host() {
    if (!this._authority)
      return null;
    let e = this._authority;
    const t = e.indexOf("@");
    t >= 0 && (e = e.substring(t + 1));
    const s = e.lastIndexOf(":");
    return s >= 0 && (e = e.substring(0, s)), e;
  }
  /**
   * Returns the port part of the authority, or null.
   */
  port() {
    if (!this._authority)
      return null;
    let e = this._authority;
    const t = e.indexOf("@");
    t >= 0 && (e = e.substring(t + 1));
    const s = e.lastIndexOf(":");
    return s >= 0 ? e.substring(s + 1) : null;
  }
  /**
   * Returns the userinfo part of the authority, or null.
   */
  userInfo() {
    if (!this._authority)
      return null;
    const e = this._authority.indexOf("@");
    return e >= 0 ? this._authority.substring(0, e) : null;
  }
  /**
   * Returns the file extension, or null.
   */
  fileExtension() {
    if (!this._path)
      return null;
    const e = this._path.lastIndexOf("."), t = this._path.lastIndexOf("/");
    return e > t && e > 0 ? this._path.substring(e + 1) : null;
  }
  /**
   * Returns a new URI with the given fragment.
   */
  appendFragment(e) {
    return new T(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new T(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((n) => n.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new T(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new T(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new T(this._scheme, this._authority, this._path, this._query, null);
  }
  /**
   * Resolves this URI against a base URI (RFC 3986 with EMF modifications).
   */
  resolve(e) {
    if (this._scheme !== null)
      return this;
    let t = e._scheme, s = this._authority, r = this._path, n = this._query;
    if (s !== null)
      r = this.removeDotSegments(r || "");
    else if (s = e._authority, !r || r === "") {
      if (this._query !== null) {
        if (r = e._path, r) {
          const i = r.lastIndexOf("/");
          i >= 0 && (r = r.substring(0, i + 1));
        }
      } else
        r = e._path;
      n = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new T(t, s, r, n, this._fragment);
  }
  /**
   * Deresolves this URI against a base URI.
   */
  deresolve(e) {
    if (this._scheme !== e._scheme)
      return this;
    if (this._authority === null != (e._authority === null))
      return this;
    if (this._authority !== null && e._authority !== null && this._authority !== e._authority)
      return new T(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new T(null, null, null, null, this._fragment) : new T(null, null, "", this._query, this._fragment);
    const r = t.split("/"), n = s.split("/");
    let i = 0;
    const u = Math.min(r.length, n.length);
    for (let E = 0; E < u - 1 && r[E] === n[E]; E++)
      i++;
    const l = n.length - i - 1, h = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (l >= 3 || h && l > 0))
      return new T(null, null, t, this._query, this._fragment);
    const d = [];
    for (let E = 0; E < l; E++)
      d.push("..");
    for (let E = i; E < r.length; E++)
      d.push(r[E]);
    let p = d.join("/");
    return p === "" && t.endsWith("/") && (p = "./"), new T(null, null, p, this._query, this._fragment);
  }
  /**
   * Merges a relative path with a base path.
   */
  mergePaths(e, t) {
    if (!e)
      return "/" + t;
    const s = e.lastIndexOf("/");
    return s >= 0 ? e.substring(0, s + 1) + t : t;
  }
  /**
   * Removes dot segments from a path (RFC 3986).
   */
  removeDotSegments(e) {
    const t = [], s = e.split("/"), r = s.length > 0 && (s[s.length - 1] === "." || s[s.length - 1] === "..");
    for (let n = 0; n < s.length; n++) {
      const i = s[n];
      i === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : i !== "." && !(i === "" && n > 0 && n < s.length - 1) && t.push(i);
    }
    return r && t.length > 0 && t.push(""), t.join("/");
  }
  /**
   * Returns the string representation.
   */
  toString() {
    let e = "";
    return this._scheme && (e += this._scheme + ":"), this._authority && (e += "//" + this._authority), this._path && (e += this._path), this._query && (e += "?" + this._query), this._fragment && (e += "#" + this._fragment), e;
  }
  /**
   * Returns whether this URI is hierarchical.
   */
  isHierarchical() {
    return this._authority !== null || this._path !== null && this._path.startsWith("/");
  }
  /**
   * Returns whether this URI is a file URI.
   */
  isFile() {
    return this._scheme === "file";
  }
  /**
   * Returns whether this URI is a platform resource URI.
   */
  isPlatformResource() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/resource");
  }
  /**
   * Returns whether this URI is a platform plugin URI.
   */
  isPlatformPlugin() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/plugin");
  }
  /**
   * Returns whether this URI is an archive URI.
   */
  isArchive() {
    return this._scheme === "archive" || this._scheme === "jar" || this._scheme === "zip";
  }
  /**
   * Returns whether this URI is relative (no scheme).
   */
  isRelative() {
    return this._scheme === null;
  }
}
function tt(c) {
  return "unsetTarget" in c && typeof c.unsetTarget == "function";
}
class Bt {
  constructor() {
    this.target = null;
  }
  getTarget() {
    return this.target;
  }
  setTarget(e) {
    this.target = e;
  }
  isAdapterForType(e) {
    return !1;
  }
}
class K {
  constructor() {
    this._eResource = null, this._eContainer = null, this._eContainerFeature = null, this._eProxyURI = null, this._eAdapters = [], this._eDeliver = !0, this.eSettings = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the containing resource
   */
  eResource() {
    return this._eContainer ? this._eContainer.eResource() : this._eResource;
  }
  /**
   * Sets the resource (internal use)
   */
  eSetResource(e) {
    this._eResource = e;
  }
  /**
   * Returns the containing object
   */
  eContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container (internal use)
   */
  eSetContainer(e, t) {
    this._eContainer = e, this._eContainerFeature = t;
  }
  /**
   * Returns the containing feature
   */
  eContainingFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns the containment feature
   */
  eContainmentFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns all direct contents
   */
  eContents() {
    const e = [], s = this.eClass().getEAllContainments();
    for (const r of s) {
      const n = this.eGet(r);
      if (n)
        if (Array.isArray(n) || M(n))
          for (const i of n)
            e.push(i);
        else
          e.push(n);
    }
    return e;
  }
  /**
   * Returns an iterator over all contents
   */
  eAllContents() {
    const e = this.eContents(), t = [...e];
    for (const s of e) {
      const r = s.eAllContents();
      let n = r.next();
      for (; !n.done; )
        t.push(n.value), n = r.next();
    }
    return t[Symbol.iterator]();
  }
  /**
   * Returns whether this object is a proxy
   */
  eIsProxy() {
    return this._eProxyURI !== null;
  }
  /**
   * Returns the proxy URI if this object is a proxy
   */
  eProxyURI() {
    return this._eProxyURI;
  }
  /**
   * Sets the proxy URI
   */
  eSetProxyURI(e) {
    this._eProxyURI = e;
  }
  /**
   * Resolves a proxy to the actual object
   */
  eResolveProxy(e) {
    const t = e.eProxyURI();
    if (!t)
      return e;
    const s = this.eResource();
    if (!s)
      return e;
    const r = s.getResourceSet();
    if (!r)
      return e;
    const n = t.toString(), i = n.indexOf("#");
    if (i > 0) {
      const u = n.substring(0, i), l = n.substring(i + 1);
      let h;
      const d = s.getURI();
      d && !u.includes("://") ? h = d.resolve(T.createURI(u)) : h = T.createURI(u);
      const p = r.getResource(h, !0);
      if (p) {
        const S = p.getEObject(l);
        if (S)
          return S;
      }
      const E = r.getPackageRegistry(), C = this.resolveFragmentViaPackageRegistry(E, u, l, r);
      if (C)
        return C;
    } else if (i === 0) {
      const u = n.substring(1), l = s.getEObject(u);
      if (l)
        return l;
    } else {
      const u = s.getEObject(n);
      if (u)
        return u;
    }
    return e;
  }
  /**
   * Resolve a fragment via the package registry.
   * When a proxy like foaf.ecore#//Agent can't be resolved through the resource
   * (e.g., because the resource is empty after package registration), try to
   * find the correct package in the registry.
   */
  resolveFragmentViaPackageRegistry(e, t, s, r) {
    const n = e.getEPackage(t);
    if (n) {
      const h = this.resolveFragmentInPackage(n, s);
      if (h)
        return h;
    }
    let i = t;
    const u = i.lastIndexOf("/");
    u >= 0 && (i = i.substring(u + 1));
    const l = i.indexOf(".");
    if (l > 0 && (i = i.substring(0, l)), i)
      for (const h of e.keys()) {
        const d = e.getEPackage(h);
        if (d && d.getName() === i) {
          const p = this.resolveFragmentInPackage(d, s);
          if (p)
            return p;
        }
      }
    return null;
  }
  /**
   * Resolve a fragment path (e.g., //Agent or //sub/Agent) within an EPackage.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return null;
    const r = s.split("/");
    let n = e;
    for (let l = 0; l < r.length - 1; l++) {
      const h = n.getESubpackages();
      let d = null;
      for (let p = 0; p < h.length; p++)
        if (h.get(p).getName() === r[l]) {
          d = h.get(p);
          break;
        }
      if (!d)
        return null;
      n = d;
    }
    const i = r[r.length - 1];
    return n.getEClassifier(i) ?? null;
  }
  /**
   * Returns the internal resource (bypassing container navigation)
   */
  eInternalResource() {
    return this._eResource;
  }
  /**
   * Returns the internal container
   */
  eInternalContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container without notification
   */
  eBasicSetContainer(e, t) {
    this._eContainer = e;
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns list of the adapters associated with this notifier.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this notifier will deliver notifications to the adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this notifier will deliver notifications to the adapters.
   */
  eSetDeliver(e) {
    this._eDeliver = e;
  }
  /**
   * Notifies a change to a feature of this notifier as described by the notification.
   */
  eNotify(e) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const t of this._eAdapters)
        t.notifyChanged(e);
  }
  /**
   * Adds an adapter to this notifier.
   */
  eAdapterAdd(e) {
    this._eAdapters.push(e), e.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   */
  eAdapterRemove(e) {
    const t = this._eAdapters.indexOf(e);
    if (t !== -1) {
      if (this._eDeliver) {
        const s = new oe(this, N.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), tt(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
    }
    return !1;
  }
  // ===== End Notifier interface =====
  /**
   * Returns all cross references
   */
  eCrossReferences() {
    const e = [], s = this.eClass().getEAllReferences();
    for (const r of s)
      if (!r.isContainment()) {
        const n = this.eGet(r);
        if (n)
          if (Array.isArray(n) || M(n))
            for (const i of n)
              e.push(i);
          else
            e.push(n);
      }
    return e;
  }
  /**
   * Reflective get (default implementation)
   */
  eGet(e) {
    const t = e.getName() || "";
    return this.eSettings.get(t);
  }
  /**
   * Reflective set (default implementation)
   */
  eSet(e, t) {
    const s = e.getName() || "", r = this.eSettings.get(s);
    if (this.eSettings.set(s, t), e instanceof Object && "isContainment" in e) {
      const n = e;
      if (n.isContainment() && (r && typeof r == "object" && "eSetContainer" in r && r.eSetContainer(null, null), t && typeof t == "object" && "eSetContainer" in t))
        if (Array.isArray(t))
          for (const i of t)
            i && "eSetContainer" in i && i.eSetContainer(this, n);
        else
          t.eSetContainer(this, n);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const n = new oe(this, N.SET, e, r, t);
      this.eNotify(n);
    }
  }
  /**
   * Reflective isSet
   */
  eIsSet(e) {
    const t = e.getName() || "";
    return this.eSettings.has(t);
  }
  /**
   * Reflective unset
   */
  eUnset(e) {
    const t = e.getName() || "", s = this.eSettings.get(t);
    if (this.eSettings.delete(t), e instanceof Object && "isContainment" in e && e.isContainment() && s)
      if (Array.isArray(s))
        for (const n of s)
          n && "eSetContainer" in n && n.eSetContainer(null, null);
      else typeof s == "object" && "eSetContainer" in s && s.eSetContainer(null, null);
    if (this._eDeliver && this._eAdapters.length > 0) {
      const r = new oe(this, N.UNSET, e, s, e.getDefaultValue());
      this.eNotify(r);
    }
  }
  /**
   * Invoke operation
   */
  eInvoke(e, t) {
    throw new Error(`Operation ${e.getName()} not implemented`);
  }
  /**
   * Get direct class (for generated code)
   */
  eStaticClass() {
    return this.eClass();
  }
  /**
   * Get feature by ID
   */
  eFeature(e) {
    return this.eClass().getEStructuralFeature(e);
  }
  /**
   * String representation
   */
  toString() {
    return `${this.eClass()?.getName() || "UnknownClass"}@${this.hashCode()}`;
  }
  /**
   * Simple hash code
   */
  hashCode() {
    return Math.random().toString(36).substring(7);
  }
}
class st extends K {
  constructor(e) {
    super(), this._eClass = e;
  }
  eClass() {
    return this._eClass;
  }
  /**
   * Override eGet to handle dynamic features and proxy resolution.
   * Returns EList for multi-valued features.
   */
  eGet(e) {
    const t = e.getName() || "";
    if (this.eSettings.has(t)) {
      let r = this.eSettings.get(t);
      if (!e.isMany() && r && L(r) && r.eIsProxy()) {
        const n = this.eResolveProxy(r);
        if (n !== r)
          return this.eSettings.set(t, n), n;
      }
      return r;
    }
    if (e.isMany()) {
      let r;
      if ("isContainment" in e) {
        const n = e;
        n.isContainment() ? r = Dt(this, n) : r = Ft(this, n);
      } else
        r = kt(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class Gs extends Se {
  constructor(e, t, s) {
    super(e, t), this.eMap = s;
  }
  didAdd(e, t) {
    super.didAdd(e, t), this.eMap.entryAdded(t);
  }
  didAddMany(e, t) {
    super.didAddMany(e, t);
    for (const s of t)
      this.eMap.entryAdded(s);
  }
  didRemove(e, t) {
    super.didRemove(e, t), this.eMap.entryRemoved(t);
  }
  didClear(e) {
    super.didClear(e), this.eMap.entriesCleared();
  }
  didSet(e, t, s) {
    super.didSet(e, t, s), this.eMap.entryRemoved(s), this.eMap.entryAdded(t);
  }
}
class Mt {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new Gs(e, t, this);
    const r = s.getEStructuralFeature("key"), n = s.getEStructuralFeature("value");
    if (!r || !n)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = n, V(this);
  }
  /**
   * Rebuild map index from the delegate list contents.
   * Entries may have been added before their key/value were set (e.g. by XMI loader),
   * so we rebuild on every map-method access.
   */
  ensureIndex() {
    this.mapIndex === null && (this.mapIndex = /* @__PURE__ */ new Map()), this.mapIndex.clear();
    for (let e = 0; e < this.delegateList.size(); e++) {
      const t = this.delegateList.get(e), s = t.eGet(this.keyFeature);
      s != null && this.mapIndex.set(s, t);
    }
    return this.mapIndex;
  }
  // ===== Map methods =====
  getByKey(e) {
    const s = this.ensureIndex().get(e);
    if (s)
      return s.eGet(this.valueFeature);
  }
  putByKey(e, t) {
    const r = this.ensureIndex().get(e);
    if (r) {
      const u = r.eGet(this.valueFeature);
      return r.eSet(this.valueFeature, t), u;
    }
    const n = this.entryEClass.getEPackage();
    let i;
    n && n.getEFactoryInstance() ? i = n.getEFactoryInstance().create(this.entryEClass) : i = new st(this.entryEClass), i.eSet(this.keyFeature, e), i.eSet(this.valueFeature, t), this.delegateList.add(i);
  }
  removeByKey(e) {
    const s = this.ensureIndex().get(e);
    if (!s)
      return;
    const r = s.eGet(this.valueFeature);
    return this.delegateList.remove(s), r;
  }
  containsKey(e) {
    return this.ensureIndex().has(e);
  }
  containsValue(e) {
    for (const t of this.ensureIndex().values())
      if (t.eGet(this.valueFeature) === e)
        return !0;
    return !1;
  }
  keys() {
    return Array.from(this.ensureIndex().keys());
  }
  mapValues() {
    const e = [];
    for (const t of this.ensureIndex().values())
      e.push(t.eGet(this.valueFeature));
    return e;
  }
  toMap() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, s] of this.ensureIndex())
      e.set(t, s.eGet(this.valueFeature));
    return e;
  }
  // ===== Index management callbacks (called by EMapContainmentEList) =====
  entryAdded(e) {
    this.mapIndex = null;
  }
  entryRemoved(e) {
    this.mapIndex = null;
  }
  entriesCleared() {
    this.mapIndex = null;
  }
  // ===== EList delegation =====
  size() {
    return this.delegateList.size();
  }
  get length() {
    return this.delegateList.length;
  }
  isEmpty() {
    return this.delegateList.isEmpty();
  }
  contains(e) {
    return this.delegateList.contains(e);
  }
  indexOf(e) {
    return this.delegateList.indexOf(e);
  }
  get(e) {
    return this.delegateList.get(e);
  }
  set(e, t) {
    return this.delegateList.set(e, t);
  }
  add(e) {
    return this.delegateList.add(e);
  }
  addAt(e, t) {
    this.delegateList.addAt(e, t);
  }
  addAll(e) {
    return this.delegateList.addAll(e);
  }
  addAllAt(e, t) {
    return this.delegateList.addAllAt(e, t);
  }
  remove(e) {
    return this.delegateList.remove(e);
  }
  removeAt(e) {
    return this.delegateList.removeAt(e);
  }
  clear() {
    this.delegateList.clear();
  }
  move(e, t) {
    return this.delegateList.move(e, t);
  }
  toArray() {
    return this.delegateList.toArray();
  }
  [Symbol.iterator]() {
    return this.delegateList[Symbol.iterator]();
  }
  push(...e) {
    return this.delegateList.push(...e);
  }
  filter(e, t) {
    return this.delegateList.filter(e, t);
  }
  map(e, t) {
    return this.delegateList.map(e, t);
  }
  forEach(e, t) {
    this.delegateList.forEach(e, t);
  }
  find(e, t) {
    return this.delegateList.find(e, t);
  }
  findIndex(e, t) {
    return this.delegateList.findIndex(e, t);
  }
  some(e, t) {
    return this.delegateList.some(e, t);
  }
  every(e, t) {
    return this.delegateList.every(e, t);
  }
  includes(e) {
    return this.delegateList.includes(e);
  }
  slice(e, t) {
    return this.delegateList.slice(e, t);
  }
  concat(...e) {
    return this.delegateList.concat(...e);
  }
  sort(e) {
    return this.delegateList.sort(e), this;
  }
  reverse() {
    return this.delegateList.reverse(), this;
  }
  join(e) {
    return this.delegateList.join(e);
  }
  at(e) {
    return this.delegateList.at(e);
  }
  lastIndexOf(e) {
    return this.delegateList.lastIndexOf(e);
  }
  flatMap(e, t) {
    return this.delegateList.flatMap(e, t);
  }
  toJSON() {
    return this.delegateList.toJSON();
  }
}
function Ut(c, e, t) {
  return new Mt(c, e, t);
}
function $s(c) {
  return !!c && typeof c.getByKey == "function" && typeof c.putByKey == "function" && typeof c.size == "function" && typeof c.add == "function";
}
var fe;
(function(c) {
  c.INSTANCE_FACTORY_REGISTRY = Xs();
})(fe || (fe = {}));
function Xs() {
  const c = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const n = s.fileExtension();
      return n && c.has(n) ? c.get(n) : null;
    },
    getExtensionToFactoryMap() {
      return c;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class De {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = wt(this);
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns the list of adapters associated with this resource.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this resource will deliver notifications to adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this resource will deliver notifications to adapters.
   */
  eSetDeliver(e) {
    this._eDeliver = e;
  }
  /**
   * Notifies all adapters of a change.
   */
  eNotify(e) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const t of this._eAdapters)
        t.notifyChanged(e);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(e) {
    this.resourceSet = e;
  }
  getURI() {
    return this.uri;
  }
  setURI(e) {
    this.uri = e;
  }
  getContents() {
    return this.contents;
  }
  getAllContents() {
    const e = [...this.contents];
    for (const t of this.contents) {
      const s = t.eAllContents();
      let r = s.next();
      for (; !r.done; )
        e.push(r.value), r = s.next();
    }
    return e[Symbol.iterator]();
  }
  getEObject(e) {
    if (e.startsWith("/")) {
      const t = e.split("/"), s = t.length >= 2 && t[0] === "" && t[1] === "", r = t.filter((u) => u.length > 0);
      if (r.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let n = null, i = 0;
      if (s && (n = this.contents.size() > 0 ? this.contents.get(0) : null, !n || (r[0].startsWith("@") ? n = this.eObjectForURIFragmentSegment(n, r[0]) : n = this.findByNameInContents(n, r[0]), i = 1, !n)))
        return null;
      for (let u = i; u < r.length; u++) {
        const l = r[u], h = parseInt(l, 10);
        if (n === null ? isNaN(h) ? (n = this.findByName(this.contents.toArray(), l), !n && this.contents.size() > 0 && (n = this.findByNameInContents(this.contents.get(0), l))) : n = h < this.contents.size() ? this.contents.get(h) : null : isNaN(h) ? n = this.navigateByNameOrFeature(n, l) : n = n.eContents()[h] || null, !n)
          return null;
      }
      return n;
    }
    return this.getEObjectByID(e);
  }
  /**
   * Find a named element in an object's eContents().
   * This is used for EMF-style fragment navigation like //SortOrder
   * which searches for named elements within a container (e.g., EPackage's eClassifiers).
   */
  findByNameInContents(e, t) {
    const s = e.eContents();
    return this.findByName(s, t);
  }
  /**
   * Find an object by name in a list of objects.
   * Looks for 'name' via:
   * 1. getName() method (for static typed objects)
   * 2. eGet(nameFeature) (for dynamic objects loaded from XMI)
   * 3. Direct name property
   */
  findByName(e, t) {
    for (const s of e) {
      if ("getName" in s && typeof s.getName == "function" && s.getName() === t)
        return s;
      try {
        const r = s.eClass();
        if (r) {
          const n = r.getEStructuralFeature("name");
          if (n && s.eGet(n) === t)
            return s;
        }
      } catch {
      }
      if ("name" in s && s.name === t)
        return s;
    }
    return null;
  }
  /**
   * Navigate from an object to a child by name or feature.
   */
  navigateByNameOrFeature(e, t) {
    if (t.startsWith("@"))
      return this.eObjectForURIFragmentSegment(e, t);
    const s = e.eContents(), r = this.findByName(s, t);
    if (r)
      return r;
    const i = e.eClass().getEStructuralFeature(t);
    if (i) {
      const u = e.eGet(i);
      if (u && typeof u == "object" && "eClass" in u)
        return u;
      if (Array.isArray(u) && u.length > 0)
        return u[0];
    }
    return null;
  }
  /**
   * Resolve a @feature.index URI fragment segment (Java EMF format).
   * Formats:
   * - @featureName.index → eGet(feature)[index] (multi-valued)
   * - @featureName → eGet(feature) (single-valued)
   */
  eObjectForURIFragmentSegment(e, t) {
    const s = t.substring(1), r = e.eClass(), n = s.charAt(s.length - 1);
    let i, u = -1;
    if (n >= "0" && n <= "9") {
      const d = s.lastIndexOf(".");
      if (d > 0) {
        const p = parseInt(s.substring(d + 1), 10);
        isNaN(p) ? i = s : (i = s.substring(0, d), u = p);
      } else
        i = s;
    } else
      i = s;
    const l = r.getEStructuralFeature(i);
    if (!l)
      return null;
    const h = e.eGet(l);
    return h == null ? null : u >= 0 ? Array.isArray(h) ? h[u] ?? null : typeof h == "object" && "get" in h && typeof h.get == "function" ? h.get(u) ?? null : null : typeof h == "object" && "eClass" in h ? h : null;
  }
  getURIFragment(e) {
    const t = [];
    let s = e;
    for (; s; ) {
      const r = s.eContainer();
      if (!r) {
        const u = this.contents.indexOf(s);
        u >= 0 && t.unshift(u);
        break;
      }
      const i = r.eContents().indexOf(s);
      i >= 0 && t.unshift(i), s = r;
    }
    return "/" + t.join("/");
  }
  async save(e) {
    this.errors = [], this.warnings = [];
    try {
      const t = this.serialize();
      this.modified = !1;
    } catch (t) {
      throw this.errors.push({
        message: t instanceof Error ? t.message : String(t)
      }), t;
    }
  }
  async load(e) {
    this.errors = [], this.warnings = [];
    try {
      this.loaded = !0;
    } catch (t) {
      throw this.errors.push({
        message: t instanceof Error ? t.message : String(t)
      }), t;
    }
  }
  isLoaded() {
    return this.loaded;
  }
  unload() {
    this.contents.clear(), this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [];
  }
  isModified() {
    return this.modified;
  }
  setModified(e) {
    this.modified = e;
  }
  getErrors() {
    return this.errors;
  }
  getWarnings() {
    return this.warnings;
  }
  /**
   * Helper to find object by ID attribute
   */
  getEObjectByID(e) {
    const t = this.getAllContents();
    let s = t.next();
    for (; !s.done; ) {
      const r = s.value, i = r.eClass().getEIDAttribute();
      if (i && r.eGet(i) === e)
        return r;
      s = t.next();
    }
    return null;
  }
  /**
   * Simple JSON serialization
   */
  serialize() {
    return {
      uri: this.uri?.toString(),
      contents: this.contents.toArray().map((e) => this.serializeObject(e))
    };
  }
  serializeObject(e) {
    const t = e.eClass(), s = {
      eClass: t.getName()
    };
    for (const r of t.getEAllStructuralFeatures()) {
      if (r.isTransient())
        continue;
      const n = e.eGet(r);
      n != null && (r.isMany() && Array.isArray(n) ? s[r.getName()] = n.map((i) => typeof i == "object" && "eClass" in i ? this.serializeObject(i) : i) : s[r.getName()] = typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n);
    }
    return s;
  }
}
var $e = {};
const Ws = {}, zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ws
}, Symbol.toStringTag, { value: "Module" })), qs = /* @__PURE__ */ Ms(zs);
var Nt;
function Ys() {
  return Nt || (Nt = 1, (function(c) {
    (function(e) {
      e.parser = function(o, a) {
        return new s(o, a);
      }, e.SAXParser = s, e.SAXStream = p, e.createStream = h, e.MAX_BUFFER_LENGTH = 64 * 1024;
      var t = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      e.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function s(o, a) {
        if (!(this instanceof s))
          return new s(o, a);
        var m = this;
        n(m), m.q = m.c = "", m.bufferCheckPosition = e.MAX_BUFFER_LENGTH, m.encoding = null, m.opt = a || {}, m.opt.lowercase = m.opt.lowercase || m.opt.lowercasetags, m.looseCase = m.opt.lowercase ? "toLowerCase" : "toUpperCase", m.opt.maxEntityCount = m.opt.maxEntityCount || 512, m.opt.maxEntityDepth = m.opt.maxEntityDepth || 4, m.entityCount = m.entityDepth = 0, m.tags = [], m.closed = m.closedRoot = m.sawRoot = !1, m.tag = m.error = null, m.strict = !!o, m.noscript = !!(o || m.opt.noscript), m.state = g.BEGIN, m.strictEntities = m.opt.strictEntities, m.ENTITIES = m.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), m.attribList = [], m.opt.xmlns && (m.ns = Object.create(U)), m.opt.unquotedAttributeValues === void 0 && (m.opt.unquotedAttributeValues = !o), m.trackPosition = m.opt.position !== !1, m.trackPosition && (m.position = m.line = m.column = 0), Ee(m, "onready");
      }
      Object.create || (Object.create = function(o) {
        function a() {
        }
        a.prototype = o;
        var m = new a();
        return m;
      }), Object.keys || (Object.keys = function(o) {
        var a = [];
        for (var m in o) o.hasOwnProperty(m) && a.push(m);
        return a;
      });
      function r(o) {
        for (var a = Math.max(e.MAX_BUFFER_LENGTH, 10), m = 0, f = 0, _ = t.length; f < _; f++) {
          var F = o[t[f]].length;
          if (F > a)
            switch (t[f]) {
              case "textNode":
                ye(o);
                break;
              case "cdata":
                k(o, "oncdata", o.cdata), o.cdata = "";
                break;
              case "script":
                k(o, "onscript", o.script), o.script = "";
                break;
              default:
                re(o, "Max buffer length exceeded: " + t[f]);
            }
          m = Math.max(m, F);
        }
        var w = e.MAX_BUFFER_LENGTH - m;
        o.bufferCheckPosition = w + o.position;
      }
      function n(o) {
        for (var a = 0, m = t.length; a < m; a++)
          o[t[a]] = "";
      }
      function i(o) {
        ye(o), o.cdata !== "" && (k(o, "oncdata", o.cdata), o.cdata = ""), o.script !== "" && (k(o, "onscript", o.script), o.script = "");
      }
      s.prototype = {
        end: function() {
          Et(this);
        },
        write: ws,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          i(this);
        }
      };
      var u;
      try {
        u = qs.Stream;
      } catch {
        u = function() {
        };
      }
      u || (u = function() {
      });
      var l = e.EVENTS.filter(function(o) {
        return o !== "error" && o !== "end";
      });
      function h(o, a) {
        return new p(o, a);
      }
      function d(o, a) {
        if (o.length >= 2) {
          if (o[0] === 255 && o[1] === 254)
            return "utf-16le";
          if (o[0] === 254 && o[1] === 255)
            return "utf-16be";
        }
        return o.length >= 3 && o[0] === 239 && o[1] === 187 && o[2] === 191 ? "utf8" : o.length >= 4 ? o[0] === 60 && o[1] === 0 && o[2] === 63 && o[3] === 0 ? "utf-16le" : o[0] === 0 && o[1] === 60 && o[2] === 0 && o[3] === 63 ? "utf-16be" : "utf8" : a ? "utf8" : null;
      }
      function p(o, a) {
        if (!(this instanceof p))
          return new p(o, a);
        u.apply(this), this._parser = new s(o, a), this.writable = !0, this.readable = !0;
        var m = this;
        this._parser.onend = function() {
          m.emit("end");
        }, this._parser.onerror = function(f) {
          m.emit("error", f), m._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, l.forEach(function(f) {
          Object.defineProperty(m, "on" + f, {
            get: function() {
              return m._parser["on" + f];
            },
            set: function(_) {
              if (!_)
                return m.removeAllListeners(f), m._parser["on" + f] = _, _;
              m.on(f, _);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      p.prototype = Object.create(u.prototype, {
        constructor: {
          value: p
        }
      }), p.prototype._decodeBuffer = function(o, a) {
        if (this._decoderBuffer && (o = Buffer.concat([this._decoderBuffer, o]), this._decoderBuffer = null), !this._decoder) {
          var m = d(o, a);
          if (!m)
            return this._decoderBuffer = o, "";
          this._parser.encoding = m, this._decoder = new TextDecoder(m);
        }
        return this._decoder.decode(o, { stream: !a });
      }, p.prototype.write = function(o) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(o))
          o = this._decodeBuffer(o, !1);
        else if (this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        }
        return this._parser.write(o.toString()), this.emit("data", o), !0;
      }, p.prototype.end = function(o) {
        if (o && o.length && this.write(o), this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        } else if (this._decoder) {
          var m = this._decoder.decode();
          m && (this._parser.write(m), this.emit("data", m));
        }
        return this._parser.end(), !0;
      }, p.prototype.on = function(o, a) {
        var m = this;
        return !m._parser["on" + o] && l.indexOf(o) !== -1 && (m._parser["on" + o] = function() {
          var f = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          f.splice(0, 0, o), m.emit.apply(m, f);
        }), u.prototype.on.call(m, o, a);
      };
      var E = /^\[CDATA\[$/i, C = /^DOCTYPE$/i, S = "http://www.w3.org/XML/1998/namespace", D = "http://www.w3.org/2000/xmlns/", U = { xml: S, xmlns: D }, O = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, q = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Q = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function v(o) {
        return o === " " || o === `
` || o === "\r" || o === "	";
      }
      function W(o) {
        return o === '"' || o === "'";
      }
      function me(o) {
        return o === ">" || v(o);
      }
      function z(o, a) {
        return o.test(a);
      }
      function ue(o, a) {
        return !z(o, a);
      }
      var g = 0;
      e.STATE = {
        BEGIN: g++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: g++,
        // leading whitespace
        TEXT: g++,
        // general stuff
        TEXT_ENTITY: g++,
        // &amp and such.
        OPEN_WAKA: g++,
        // <
        SGML_DECL: g++,
        // <!BLARG
        SGML_DECL_QUOTED: g++,
        // <!BLARG foo "bar
        DOCTYPE: g++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: g++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: g++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: g++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: g++,
        // <!-
        COMMENT: g++,
        // <!--
        COMMENT_ENDING: g++,
        // <!-- blah -
        COMMENT_ENDED: g++,
        // <!-- blah --
        CDATA: g++,
        // <![CDATA[ something
        CDATA_ENDING: g++,
        // ]
        CDATA_ENDING_2: g++,
        // ]]
        PROC_INST: g++,
        // <?hi
        PROC_INST_BODY: g++,
        // <?hi there
        PROC_INST_ENDING: g++,
        // <?hi "there" ?
        OPEN_TAG: g++,
        // <strong
        OPEN_TAG_SLASH: g++,
        // <strong /
        ATTRIB: g++,
        // <a
        ATTRIB_NAME: g++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: g++,
        // <a foo _
        ATTRIB_VALUE: g++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: g++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: g++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: g++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: g++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: g++,
        // <foo bar=&quot
        CLOSE_TAG: g++,
        // </a
        CLOSE_TAG_SAW_WHITE: g++,
        // </a   >
        SCRIPT: g++,
        // <script> ...
        SCRIPT_ENDING: g++
        // <script> ... <
      }, e.XML_ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }), e.ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }), Object.keys(e.ENTITIES).forEach(function(o) {
        var a = e.ENTITIES[o], m = typeof a == "number" ? String.fromCharCode(a) : a;
        e.ENTITIES[o] = m;
      });
      for (var pt in e.STATE)
        e.STATE[e.STATE[pt]] = pt;
      g = e.STATE;
      function Ee(o, a, m) {
        o[a] && o[a](m);
      }
      function vs(o) {
        var a = o && o.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return a ? a[2] : null;
      }
      function dt(o) {
        return o ? o.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function xs(o, a) {
        const m = dt(o), f = dt(a);
        return !m || !f ? !0 : f === "utf16" ? m === "utf16le" || m === "utf16be" : m === f;
      }
      function Ds(o, a) {
        if (!(!o.strict || !o.encoding || !a || a.name !== "xml")) {
          var m = vs(a.body);
          m && !xs(o.encoding, m) && A(
            o,
            "XML declaration encoding " + m + " does not match detected stream encoding " + o.encoding.toUpperCase()
          );
        }
      }
      function k(o, a, m) {
        o.textNode && ye(o), Ee(o, a, m);
      }
      function ye(o) {
        o.textNode = mt(o.opt, o.textNode), o.textNode && Ee(o, "ontext", o.textNode), o.textNode = "";
      }
      function mt(o, a) {
        return o.trim && (a = a.trim()), o.normalize && (a = a.replace(/\s+/g, " ")), a;
      }
      function re(o, a) {
        return ye(o), o.trackPosition && (a += `
Line: ` + o.line + `
Column: ` + o.column + `
Char: ` + o.c), a = new Error(a), o.error = a, Ee(o, "onerror", a), o;
      }
      function Et(o) {
        return o.sawRoot && !o.closedRoot && A(o, "Unclosed root tag"), o.state !== g.BEGIN && o.state !== g.BEGIN_WHITESPACE && o.state !== g.TEXT && re(o, "Unexpected end"), ye(o), o.c = "", o.closed = !0, Ee(o, "onend"), s.call(o, o.strict, o.opt), o;
      }
      function A(o, a) {
        if (typeof o != "object" || !(o instanceof s))
          throw new Error("bad call to strictFail");
        o.strict && re(o, a);
      }
      function Fs(o) {
        o.strict || (o.tagName = o.tagName[o.looseCase]());
        var a = o.tags[o.tags.length - 1] || o, m = o.tag = { name: o.tagName, attributes: {} };
        o.opt.xmlns && (m.ns = a.ns), o.attribList.length = 0, k(o, "onopentagstart", m);
      }
      function Be(o, a) {
        var m = o.indexOf(":"), f = m < 0 ? ["", o] : o.split(":"), _ = f[0], F = f[1];
        return a && o === "xmlns" && (_ = "xmlns", F = ""), { prefix: _, local: F };
      }
      function Me(o) {
        if (o.strict || (o.attribName = o.attribName[o.looseCase]()), o.attribList.indexOf(o.attribName) !== -1 || o.tag.attributes.hasOwnProperty(o.attribName)) {
          o.attribName = o.attribValue = "";
          return;
        }
        if (o.opt.xmlns) {
          var a = Be(o.attribName, !0), m = a.prefix, f = a.local;
          if (m === "xmlns")
            if (f === "xml" && o.attribValue !== S)
              A(
                o,
                "xml: prefix must be bound to " + S + `
Actual: ` + o.attribValue
              );
            else if (f === "xmlns" && o.attribValue !== D)
              A(
                o,
                "xmlns: prefix must be bound to " + D + `
Actual: ` + o.attribValue
              );
            else {
              var _ = o.tag, F = o.tags[o.tags.length - 1] || o;
              _.ns === F.ns && (_.ns = Object.create(F.ns)), _.ns[f] = o.attribValue;
            }
          o.attribList.push([o.attribName, o.attribValue]);
        } else
          o.tag.attributes[o.attribName] = o.attribValue, k(o, "onattribute", {
            name: o.attribName,
            value: o.attribValue
          });
        o.attribName = o.attribValue = "";
      }
      function ne(o, a) {
        if (o.opt.xmlns) {
          var m = o.tag, f = Be(o.tagName);
          m.prefix = f.prefix, m.local = f.local, m.uri = m.ns[f.prefix] || "", m.prefix && !m.uri && (A(
            o,
            "Unbound namespace prefix: " + JSON.stringify(o.tagName)
          ), m.uri = f.prefix);
          var _ = o.tags[o.tags.length - 1] || o;
          m.ns && _.ns !== m.ns && Object.keys(m.ns).forEach(function(Tt) {
            k(o, "onopennamespace", {
              prefix: Tt,
              uri: m.ns[Tt]
            });
          });
          for (var F = 0, w = o.attribList.length; F < w; F++) {
            var j = o.attribList[F], G = j[0], ee = j[1], B = Be(G, !0), te = B.prefix, Bs = B.local, Ct = te === "" ? "" : m.ns[te] || "", je = {
              name: G,
              value: ee,
              prefix: te,
              local: Bs,
              uri: Ct
            };
            te && te !== "xmlns" && !Ct && (A(
              o,
              "Unbound namespace prefix: " + JSON.stringify(te)
            ), je.uri = te), o.tag.attributes[G] = je, k(o, "onattribute", je);
          }
          o.attribList.length = 0;
        }
        o.tag.isSelfClosing = !!a, o.sawRoot = !0, o.tags.push(o.tag), k(o, "onopentag", o.tag), a || (!o.noscript && o.tagName.toLowerCase() === "script" ? o.state = g.SCRIPT : o.state = g.TEXT, o.tag = null, o.tagName = ""), o.attribName = o.attribValue = "", o.attribList.length = 0;
      }
      function Ue(o) {
        if (!o.tagName) {
          A(o, "Weird empty close tag."), o.textNode += "</>", o.state = g.TEXT;
          return;
        }
        if (o.script) {
          if (o.tagName !== "script") {
            o.script += "</" + o.tagName + ">", o.tagName = "", o.state = g.SCRIPT;
            return;
          }
          k(o, "onscript", o.script), o.script = "";
        }
        var a = o.tags.length, m = o.tagName;
        o.strict || (m = m[o.looseCase]());
        for (var f = m; a--; ) {
          var _ = o.tags[a];
          if (_.name !== f)
            A(o, "Unexpected close tag");
          else
            break;
        }
        if (a < 0) {
          A(o, "Unmatched closing tag: " + o.tagName), o.textNode += "</" + o.tagName + ">", o.state = g.TEXT;
          return;
        }
        o.tagName = m;
        for (var F = o.tags.length; F-- > a; ) {
          var w = o.tag = o.tags.pop();
          o.tagName = o.tag.name, k(o, "onclosetag", o.tagName);
          var j = {};
          for (var G in w.ns)
            j[G] = w.ns[G];
          var ee = o.tags[o.tags.length - 1] || o;
          o.opt.xmlns && w.ns !== ee.ns && Object.keys(w.ns).forEach(function(B) {
            var te = w.ns[B];
            k(o, "onclosenamespace", { prefix: B, uri: te });
          });
        }
        a === 0 && (o.closedRoot = !0), o.tagName = o.attribValue = o.attribName = "", o.attribList.length = 0, o.state = g.TEXT;
      }
      function ks(o) {
        var a = o.entity, m = a.toLowerCase(), f, _ = "";
        return o.ENTITIES[a] ? o.ENTITIES[a] : o.ENTITIES[m] ? o.ENTITIES[m] : (a = m, a.charAt(0) === "#" && (a.charAt(1) === "x" ? (a = a.slice(2), f = parseInt(a, 16), _ = f.toString(16)) : (a = a.slice(1), f = parseInt(a, 10), _ = f.toString(10))), a = a.replace(/^0+/, ""), isNaN(f) || _.toLowerCase() !== a || f < 0 || f > 1114111 || !Os(f) ? (A(o, "Invalid character entity"), "&" + o.entity + ";") : String.fromCodePoint(f));
      }
      function Os(o) {
        return o === 9 || o === 10 || o === 13 || o >= 32 && o <= 55295 || o >= 57344 && o <= 65533 || o >= 65536 && o <= 1114111;
      }
      function yt(o, a) {
        a === "<" ? (o.state = g.OPEN_WAKA, o.startTagPosition = o.position) : v(a) || (A(o, "Non-whitespace before first tag."), o.textNode = a, o.state = g.TEXT);
      }
      function Le(o, a) {
        var m = "";
        return a < o.length && (m = o.charAt(a)), m;
      }
      function ws(o) {
        var a = this;
        if (this.error)
          throw this.error;
        if (a.closed)
          return re(
            a,
            "Cannot write after close. Assign an onready handler."
          );
        if (o === null)
          return Et(a);
        typeof o == "object" && (o = o.toString());
        for (var m = 0, f = ""; f = Le(o, m++), a.c = f, !!f; )
          switch (a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++), a.state) {
            case g.BEGIN:
              if (a.state = g.BEGIN_WHITESPACE, f === "\uFEFF")
                continue;
              yt(a, f);
              continue;
            case g.BEGIN_WHITESPACE:
              yt(a, f);
              continue;
            case g.TEXT:
              if (a.sawRoot && !a.closedRoot) {
                for (var F = m - 1; f && f !== "<" && f !== "&"; )
                  f = Le(o, m++), f && a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++);
                a.textNode += o.substring(F, m - 1);
              }
              f === "<" && !(a.sawRoot && a.closedRoot && !a.strict) ? (a.state = g.OPEN_WAKA, a.startTagPosition = a.position) : (!v(f) && (!a.sawRoot || a.closedRoot) && A(a, "Text data outside of root node."), f === "&" ? a.state = g.TEXT_ENTITY : a.textNode += f);
              continue;
            case g.SCRIPT:
              f === "<" ? a.state = g.SCRIPT_ENDING : a.script += f;
              continue;
            case g.SCRIPT_ENDING:
              f === "/" ? a.state = g.CLOSE_TAG : (a.script += "<" + f, a.state = g.SCRIPT);
              continue;
            case g.OPEN_WAKA:
              if (f === "!")
                a.state = g.SGML_DECL, a.sgmlDecl = "";
              else if (!v(f)) if (z(O, f))
                a.state = g.OPEN_TAG, a.tagName = f;
              else if (f === "/")
                a.state = g.CLOSE_TAG, a.tagName = "";
              else if (f === "?")
                a.state = g.PROC_INST, a.procInstName = a.procInstBody = "";
              else {
                if (A(a, "Unencoded <"), a.startTagPosition + 1 < a.position) {
                  var _ = a.position - a.startTagPosition;
                  f = new Array(_).join(" ") + f;
                }
                a.textNode += "<" + f, a.state = g.TEXT;
              }
              continue;
            case g.SGML_DECL:
              if (a.sgmlDecl + f === "--") {
                a.state = g.COMMENT, a.comment = "", a.sgmlDecl = "";
                continue;
              }
              a.doctype && a.doctype !== !0 && a.sgmlDecl ? (a.state = g.DOCTYPE_DTD, a.doctype += "<!" + a.sgmlDecl + f, a.sgmlDecl = "") : E.test(a.sgmlDecl + f) ? (k(a, "onopencdata"), a.state = g.CDATA, a.sgmlDecl = "", a.cdata = "") : C.test(a.sgmlDecl + f) ? (a.state = g.DOCTYPE, (a.doctype || a.sawRoot) && A(
                a,
                "Inappropriately located doctype declaration"
              ), a.doctype = "", a.sgmlDecl = "") : f === ">" ? (k(a, "onsgmldeclaration", a.sgmlDecl), a.sgmlDecl = "", a.state = g.TEXT) : (W(f) && (a.state = g.SGML_DECL_QUOTED), a.sgmlDecl += f);
              continue;
            case g.SGML_DECL_QUOTED:
              f === a.q && (a.state = g.SGML_DECL, a.q = ""), a.sgmlDecl += f;
              continue;
            case g.DOCTYPE:
              f === ">" ? (a.state = g.TEXT, k(a, "ondoctype", a.doctype), a.doctype = !0) : (a.doctype += f, f === "[" ? a.state = g.DOCTYPE_DTD : W(f) && (a.state = g.DOCTYPE_QUOTED, a.q = f));
              continue;
            case g.DOCTYPE_QUOTED:
              a.doctype += f, f === a.q && (a.q = "", a.state = g.DOCTYPE);
              continue;
            case g.DOCTYPE_DTD:
              f === "]" ? (a.doctype += f, a.state = g.DOCTYPE) : f === "<" ? (a.state = g.OPEN_WAKA, a.startTagPosition = a.position) : W(f) ? (a.doctype += f, a.state = g.DOCTYPE_DTD_QUOTED, a.q = f) : a.doctype += f;
              continue;
            case g.DOCTYPE_DTD_QUOTED:
              a.doctype += f, f === a.q && (a.state = g.DOCTYPE_DTD, a.q = "");
              continue;
            case g.COMMENT:
              f === "-" ? a.state = g.COMMENT_ENDING : a.comment += f;
              continue;
            case g.COMMENT_ENDING:
              f === "-" ? (a.state = g.COMMENT_ENDED, a.comment = mt(a.opt, a.comment), a.comment && k(a, "oncomment", a.comment), a.comment = "") : (a.comment += "-" + f, a.state = g.COMMENT);
              continue;
            case g.COMMENT_ENDED:
              f !== ">" ? (A(a, "Malformed comment"), a.comment += "--" + f, a.state = g.COMMENT) : a.doctype && a.doctype !== !0 ? a.state = g.DOCTYPE_DTD : a.state = g.TEXT;
              continue;
            case g.CDATA:
              for (var F = m - 1; f && f !== "]"; )
                f = Le(o, m++), f && a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++);
              a.cdata += o.substring(F, m - 1), f === "]" && (a.state = g.CDATA_ENDING);
              continue;
            case g.CDATA_ENDING:
              f === "]" ? a.state = g.CDATA_ENDING_2 : (a.cdata += "]" + f, a.state = g.CDATA);
              continue;
            case g.CDATA_ENDING_2:
              f === ">" ? (a.cdata && k(a, "oncdata", a.cdata), k(a, "onclosecdata"), a.cdata = "", a.state = g.TEXT) : f === "]" ? a.cdata += "]" : (a.cdata += "]]" + f, a.state = g.CDATA);
              continue;
            case g.PROC_INST:
              f === "?" ? a.state = g.PROC_INST_ENDING : v(f) ? a.state = g.PROC_INST_BODY : a.procInstName += f;
              continue;
            case g.PROC_INST_BODY:
              if (!a.procInstBody && v(f))
                continue;
              f === "?" ? a.state = g.PROC_INST_ENDING : a.procInstBody += f;
              continue;
            case g.PROC_INST_ENDING:
              if (f === ">") {
                const ee = {
                  name: a.procInstName,
                  body: a.procInstBody
                };
                Ds(a, ee), k(a, "onprocessinginstruction", ee), a.procInstName = a.procInstBody = "", a.state = g.TEXT;
              } else
                a.procInstBody += "?" + f, a.state = g.PROC_INST_BODY;
              continue;
            case g.OPEN_TAG:
              z(q, f) ? a.tagName += f : (Fs(a), f === ">" ? ne(a) : f === "/" ? a.state = g.OPEN_TAG_SLASH : (v(f) || A(a, "Invalid character in tag name"), a.state = g.ATTRIB));
              continue;
            case g.OPEN_TAG_SLASH:
              f === ">" ? (ne(a, !0), Ue(a)) : (A(
                a,
                "Forward-slash in opening tag not followed by >"
              ), a.state = g.ATTRIB);
              continue;
            case g.ATTRIB:
              if (v(f))
                continue;
              f === ">" ? ne(a) : f === "/" ? a.state = g.OPEN_TAG_SLASH : z(O, f) ? (a.attribName = f, a.attribValue = "", a.state = g.ATTRIB_NAME) : A(a, "Invalid attribute name");
              continue;
            case g.ATTRIB_NAME:
              f === "=" ? a.state = g.ATTRIB_VALUE : f === ">" ? (A(a, "Attribute without value"), a.attribValue = a.attribName, Me(a), ne(a)) : v(f) ? a.state = g.ATTRIB_NAME_SAW_WHITE : z(q, f) ? a.attribName += f : A(a, "Invalid attribute name");
              continue;
            case g.ATTRIB_NAME_SAW_WHITE:
              if (f === "=")
                a.state = g.ATTRIB_VALUE;
              else {
                if (v(f))
                  continue;
                A(a, "Attribute without value"), a.tag.attributes[a.attribName] = "", a.attribValue = "", k(a, "onattribute", {
                  name: a.attribName,
                  value: ""
                }), a.attribName = "", f === ">" ? ne(a) : z(O, f) ? (a.attribName = f, a.state = g.ATTRIB_NAME) : (A(a, "Invalid attribute name"), a.state = g.ATTRIB);
              }
              continue;
            case g.ATTRIB_VALUE:
              if (v(f))
                continue;
              W(f) ? (a.q = f, a.state = g.ATTRIB_VALUE_QUOTED) : (a.opt.unquotedAttributeValues || re(a, "Unquoted attribute value"), a.state = g.ATTRIB_VALUE_UNQUOTED, a.attribValue = f);
              continue;
            case g.ATTRIB_VALUE_QUOTED:
              if (f !== a.q) {
                f === "&" ? a.state = g.ATTRIB_VALUE_ENTITY_Q : a.attribValue += f;
                continue;
              }
              Me(a), a.q = "", a.state = g.ATTRIB_VALUE_CLOSED;
              continue;
            case g.ATTRIB_VALUE_CLOSED:
              v(f) ? a.state = g.ATTRIB : f === ">" ? ne(a) : f === "/" ? a.state = g.OPEN_TAG_SLASH : z(O, f) ? (A(a, "No whitespace between attributes"), a.attribName = f, a.attribValue = "", a.state = g.ATTRIB_NAME) : A(a, "Invalid attribute name");
              continue;
            case g.ATTRIB_VALUE_UNQUOTED:
              if (!me(f)) {
                f === "&" ? a.state = g.ATTRIB_VALUE_ENTITY_U : a.attribValue += f;
                continue;
              }
              Me(a), f === ">" ? ne(a) : a.state = g.ATTRIB;
              continue;
            case g.CLOSE_TAG:
              if (a.tagName)
                f === ">" ? Ue(a) : z(q, f) ? a.tagName += f : a.script ? (a.script += "</" + a.tagName + f, a.tagName = "", a.state = g.SCRIPT) : (v(f) || A(a, "Invalid tagname in closing tag"), a.state = g.CLOSE_TAG_SAW_WHITE);
              else {
                if (v(f))
                  continue;
                ue(O, f) ? a.script ? (a.script += "</" + f, a.state = g.SCRIPT) : A(a, "Invalid tagname in closing tag.") : a.tagName = f;
              }
              continue;
            case g.CLOSE_TAG_SAW_WHITE:
              if (v(f))
                continue;
              f === ">" ? Ue(a) : A(a, "Invalid characters in closing tag");
              continue;
            case g.TEXT_ENTITY:
            case g.ATTRIB_VALUE_ENTITY_Q:
            case g.ATTRIB_VALUE_ENTITY_U:
              var w, j;
              switch (a.state) {
                case g.TEXT_ENTITY:
                  w = g.TEXT, j = "textNode";
                  break;
                case g.ATTRIB_VALUE_ENTITY_Q:
                  w = g.ATTRIB_VALUE_QUOTED, j = "attribValue";
                  break;
                case g.ATTRIB_VALUE_ENTITY_U:
                  w = g.ATTRIB_VALUE_UNQUOTED, j = "attribValue";
                  break;
              }
              if (f === ";") {
                var G = ks(a);
                a.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(G) ? ((a.entityCount += 1) > a.opt.maxEntityCount && re(
                  a,
                  "Parsed entity count exceeds max entity count"
                ), (a.entityDepth += 1) > a.opt.maxEntityDepth && re(
                  a,
                  "Parsed entity depth exceeds max entity depth"
                ), a.entity = "", a.state = w, a.write(G), a.entityDepth -= 1) : (a[j] += G, a.entity = "", a.state = w);
              } else z(a.entity.length ? Y : Q, f) ? a.entity += f : (A(a, "Invalid character in entity name"), a[j] += "&" + a.entity + f, a.entity = "", a.state = w);
              continue;
            default:
              throw new Error(a, "Unknown state: " + a.state);
          }
        return a.position >= a.bufferCheckPosition && r(a), a;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var o = String.fromCharCode, a = Math.floor, m = function() {
          var f = 16384, _ = [], F, w, j = -1, G = arguments.length;
          if (!G)
            return "";
          for (var ee = ""; ++j < G; ) {
            var B = Number(arguments[j]);
            if (!isFinite(B) || // `NaN`, `+Infinity`, or `-Infinity`
            B < 0 || // not a valid Unicode code point
            B > 1114111 || // not a valid Unicode code point
            a(B) !== B)
              throw RangeError("Invalid code point: " + B);
            B <= 65535 ? _.push(B) : (B -= 65536, F = (B >> 10) + 55296, w = B % 1024 + 56320, _.push(F, w)), (j + 1 === G || _.length > f) && (ee += o.apply(null, _), _.length = 0);
          }
          return ee;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: m,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = m;
      })();
    })(c);
  })($e)), $e;
}
var Ks = Ys();
const Hs = /* @__PURE__ */ Us(Ks), We = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", Lt = 0, jt = 1, Fe = 2, Gt = 3, $t = 4, Xt = 0, Wt = 1, he = 2, ze = 3, zt = 4, qt = 5, Yt = 6;
class qe {
  constructor() {
    this.contentKindCache = /* @__PURE__ */ new Map(), this.featureKindCache = /* @__PURE__ */ new Map(), this.nameCache = /* @__PURE__ */ new Map(), this.namespaceCache = /* @__PURE__ */ new Map(), this.simpleContentFeatureCache = /* @__PURE__ */ new Map();
  }
  /**
   * Get the content kind for a class (class-level annotation).
   */
  getContentKind(e) {
    let t = this.contentKindCache.get(e);
    if (t !== void 0)
      return t;
    t = Lt;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Fe;
          break;
        case "mixed":
          t = Gt;
          break;
        case "empty":
          t = jt;
          break;
        case "elementOnly":
          t = $t;
          break;
      }
    return this.contentKindCache.set(e, t), t;
  }
  /**
   * Get the feature kind (element, attribute, simple, etc.)
   */
  getFeatureKind(e) {
    let t = this.featureKindCache.get(e);
    if (t !== void 0)
      return t;
    t = Xt;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Wt;
          break;
        case "element":
          t = he;
          break;
        case "attribute":
          t = ze;
          break;
        case "elementWildcard":
          t = zt;
          break;
        case "attributeWildcard":
          t = qt;
          break;
        case "group":
          t = Yt;
          break;
      }
    return this.featureKindCache.set(e, t), t;
  }
  /**
   * Get the XML name for a feature from its EMD annotation.
   * Returns null if no annotation is present.
   */
  getName(e) {
    if (this.nameCache.has(e))
      return this.nameCache.get(e);
    const t = this.getAnnotationDetail(e, "name") ?? null;
    return this.nameCache.set(e, t), t;
  }
  /**
   * Get the namespace URI for a feature from its EMD annotation.
   * Resolves special values:
   * - `##targetNamespace` → owning EPackage's nsURI
   * - `##local` → null (no namespace)
   */
  getNamespace(e) {
    if (this.namespaceCache.has(e))
      return this.namespaceCache.get(e);
    let s = this.getAnnotationDetail(e, "namespace") ?? null;
    if (s === "##targetNamespace") {
      if (s = e.getEContainingClass?.()?.getEPackage?.()?.getNsURI?.() ?? null, s === null)
        return null;
    } else s === "##local" && (s = null);
    return this.namespaceCache.set(e, s), s;
  }
  /**
   * Find the feature that represents simple text content (name=":0", kind="simple").
   */
  getSimpleContentFeature(e) {
    if (this.simpleContentFeatureCache.has(e))
      return this.simpleContentFeatureCache.get(e);
    let t = null;
    for (const s of e.getEAllStructuralFeatures())
      if (this.getName(s) === ":0") {
        t = s;
        break;
      }
    return this.simpleContentFeatureCache.set(e, t), t;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "element".
   */
  getElementFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== he)
        continue;
      const i = this.getName(r) ?? r.getName();
      if (i !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && i === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== ze)
        continue;
      const i = this.getName(r) ?? r.getName();
      if (i !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && i === s)
        return r;
    }
    return null;
  }
  /**
   * Find any feature by EMD namespace and name (element or attribute).
   */
  getFeature(e, t, s, r) {
    return r ? this.getElementFeature(e, t, s) : this.getAttributeFeature(e, t, s);
  }
  /**
   * Read a detail value from the ExtendedMetaData annotation on a model element.
   */
  getAnnotationDetail(e, t) {
    if (!e || typeof e.getEAnnotation != "function")
      return;
    const s = e.getEAnnotation(We);
    if (!s)
      return;
    const r = s.getDetails();
    if (!(!r || typeof r.getByKey != "function"))
      return r.getByKey(t);
  }
  /**
   * Read the ExtendedMetaData annotation details as a Map.
   */
  getAnnotation(e) {
    if (!e || typeof e.getEAnnotation != "function")
      return null;
    const t = e.getEAnnotation(We);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Kt = "FEATURE_NAME_MAP", Ht = "EXTENDED_META_DATA", Ae = 1, Ie = 2, Ye = 3, Vt = 4, Ke = 5;
class Vs {
  constructor() {
    this.contexts = [], this.currentContext = /* @__PURE__ */ new Map();
  }
  pushContext() {
    this.contexts.push(new Map(this.currentContext));
  }
  popContext() {
    const e = this.contexts.pop(), t = /* @__PURE__ */ new Map();
    if (e) {
      for (const [s, r] of this.currentContext)
        (!e.has(s) || e.get(s) !== r) && t.set(s, r);
      this.currentContext = e;
    }
    return t;
  }
  declarePrefix(e, t) {
    this.currentContext.set(e, t);
  }
  getURI(e) {
    return this.currentContext.get(e) ?? null;
  }
  getPrefix(e) {
    for (const [t, s] of this.currentContext)
      if (s === e)
        return t;
    return null;
  }
}
class _e {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = X.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new Vs(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = X.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Kt);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, n] of t)
        this.reverseFeatureNameMap.set(n, r);
    }
    const s = e.get(Ht);
    s instanceof qe ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new qe());
  }
  getExtendedMetaData() {
    return this.extendedMetaData;
  }
  setNoNamespacePackage(e) {
    this.noNamespacePackage = e;
  }
  getNoNamespacePackage() {
    return this.noNamespacePackage;
  }
  getResource() {
    return this.resource;
  }
  getName(e) {
    return e.getName() || "";
  }
  getQName(e) {
    const t = e.getEPackage();
    if (t) {
      const s = this.getPrefixForPackage(t);
      if (s && s.length > 0)
        return s + ":" + e.getName();
    }
    return e.getName() || "";
  }
  getPrefix(e) {
    if (e === null)
      return null;
    const t = this.urisToPrefixes.get(e);
    return t && t.length > 0 ? t[0] : null;
  }
  getPrefixForPackage(e) {
    let t = this.packages.get(e);
    if (t === void 0) {
      const s = e.getNsURI();
      if (s) {
        const r = this.getPrefix(s);
        t = r !== null ? r : e.getNsPrefix() || "";
      } else
        t = e.getNsPrefix() || "";
      this.packages.set(e, t || "");
    }
    return t || null;
  }
  getNamespaceURI(e) {
    return this.prefixesToURIs.get(e) ?? null;
  }
  getURI(e) {
    return this.namespaceSupport.getURI(e);
  }
  addPrefix(e, t) {
    this.namespaceSupport.declarePrefix(e, t), this.prefixesToURIs.set(e, t);
    let s = this.urisToPrefixes.get(t);
    s || (s = [], this.urisToPrefixes.set(t, s)), s.includes(e) || s.push(e), this.allPrefixToURI.push(e, t);
  }
  pushContext() {
    this.namespaceSupport.pushContext();
  }
  popContext() {
    this.namespaceSupport.popContext();
  }
  popContextWithFactories(e) {
    const t = this.namespaceSupport.popContext();
    for (const [s] of t)
      e.delete(s);
  }
  recordPrefixToURIMapping() {
  }
  getPrefixToNamespaceMap() {
    return new Map(this.prefixesToURIs);
  }
  createObject(e, t) {
    return t && "getESuperTypes" in t ? e.create(t) : null;
  }
  getType(e, t) {
    const s = e.getEPackage();
    return s ? s.getEClassifier(t) : null;
  }
  getFeature(e, t, s) {
    if (this.extendedMetaData) {
      const n = this.extendedMetaData.getAttributeFeature(e, t, s);
      if (n)
        return this.computeFeatureKind(n), n;
    }
    let r = e.getEStructuralFeature(s);
    if (!r && this.reverseFeatureNameMap.size > 0) {
      const n = this.reverseFeatureNameMap.get(s);
      n && (r = e.getEStructuralFeature(n));
    }
    return r && this.computeFeatureKind(r), r;
  }
  getFeatureWithElement(e, t, s, r) {
    if (this.extendedMetaData) {
      const n = this.extendedMetaData.getFeature(e, t, s, r);
      if (n)
        return this.computeFeatureKind(n), n;
    }
    return this.getFeature(e, t, s);
  }
  getSerializedFeatureName(e) {
    if (this.extendedMetaData) {
      const s = this.extendedMetaData.getName(e);
      if (s && !s.startsWith(":"))
        return s;
    }
    const t = e.getName() || "";
    if (this.featureNameMap.size > 0) {
      const s = this.featureNameMap.get(t);
      if (s !== void 0)
        return s;
    }
    return t;
  }
  getFeatureKind(e) {
    let t = this.featuresToKinds.get(e);
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? Ke;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Ie) : this.featuresToKinds.set(e, Ae);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const n = e.getEOpposite();
        !n || typeof n.isTransient != "function" || n.isTransient() || !n.isMany() ? this.featuresToKinds.set(e, Ye) : this.featuresToKinds.set(e, Vt);
      } else
        this.featuresToKinds.set(e, Ye);
    else
      this.featuresToKinds.set(e, Ke);
  }
  setValue(e, t, s, r) {
    if (t.isMany()) {
      let n = e.eGet(t);
      n || (n = [], e.eSet(t, n)), r === -1 ? n.push(s) : r === -2 ? n.unshift(s) : n.splice(r, 0, s);
    } else
      e.eSet(t, s);
    if (s && typeof s == "object") {
      const n = t.getName();
      n === "eClassifiers" && "setEPackage" in s && s.setEPackage(e), n === "eStructuralFeatures" && "setEContainingClass" in s && s.setEContainingClass(e), n === "eOperations" && "setEContainingClass" in s && s.setEContainingClass(e);
    }
  }
  setManyReference(e, t) {
    const s = [], r = e.getObject(), n = e.getFeature(), i = e.getValues(), u = e.getPositions();
    for (let l = 0; l < i.length; l++) {
      const h = i[l], d = u[l];
      try {
        this.setValue(r, n, h, d);
      } catch (p) {
        s.push(p instanceof Error ? p : new Error(String(p)));
      }
    }
    return s;
  }
  deresolve(e) {
    return this.resourceURI && !e.isRelative() ? e.deresolve(this.resourceURI) : e;
  }
  resolve(e, t) {
    return e.resolve(t);
  }
  getID(e) {
    return this.xmlResource ? this.xmlResource.getID(e) : null;
  }
  convertToString(e, t, s) {
    return e.convertToString(t, s);
  }
}
class rt {
  constructor(e, t) {
    this._proxyURI = null, this._eClass = null, this._resource = null, this._proxyURI = e, this._eClass = t || null;
  }
  // --- Proxy-specific methods ---
  eProxyURI() {
    return this._proxyURI;
  }
  eSetProxyURI(e) {
    this._proxyURI = e;
  }
  eIsProxy() {
    return this._proxyURI !== null;
  }
  eResolveProxy(e) {
    const t = this._resource || this.eResource();
    if (t) {
      const s = t.getResourceSet();
      if (s && e.eProxyURI()) {
        const n = e.eProxyURI().toString(), i = n.indexOf("#");
        if (i > 0) {
          const u = T.createURI(n.substring(0, i)), l = n.substring(i + 1), h = s.getResource(u, !0);
          if (h) {
            const d = h.getEObject(l);
            if (d)
              return d;
          }
        } else if (i === 0) {
          const u = n.substring(1), l = t.getEObject(u);
          if (l)
            return l;
        }
      }
    }
    return e;
  }
  // --- InternalEObject methods ---
  eInternalResource() {
    return this._resource;
  }
  eSetResource(e) {
    this._resource = e;
  }
  eInternalContainer() {
    return null;
  }
  eBasicSetContainer(e, t) {
  }
  // --- EObject interface (minimal implementation) ---
  eClass() {
    if (this._eClass)
      return this._eClass;
    throw new Error("Proxy has no EClass - must be resolved first");
  }
  eResource() {
    return this._resource;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eCrossReferences() {
    return [];
  }
  eGet(e) {
    throw new Error(`Cannot get feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eSet(e, t) {
    throw new Error(`Cannot set feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eIsSet(e) {
    return !1;
  }
  eUnset(e) {
    throw new Error(`Cannot unset feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eInvoke(e, t) {
    throw new Error(`Cannot invoke operation '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  toString() {
    return `EProxy(${this._proxyURI?.toString() || "null"})`;
  }
}
function ge(c, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return c.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let n = c;
  for (let i = 0; i < s.length - 1; i++) {
    const u = s[i], l = n.getESubpackages();
    n = null;
    for (let h = 0; h < l.length; h++) {
      const d = l.get(h);
      if (d.getName() === u) {
        n = d;
        break;
      }
    }
    if (!n)
      return null;
  }
  return n.getEClassifier(r);
}
const ce = "error", ie = "object", Qs = "unknownFeature", St = "reference", Xe = "xmiWrapper", _t = "deferredType";
class Qt {
  constructor() {
    this.attrs = [];
  }
  add(e, t, s, r) {
    this.attrs.push({ qName: e, localName: t, uri: s, value: r });
  }
  clear() {
    this.attrs = [];
  }
  getLength() {
    return this.attrs.length;
  }
  getQName(e) {
    return this.attrs[e]?.qName || "";
  }
  getValue(e) {
    return this.attrs[e]?.value || "";
  }
  getLocalName(e) {
    return this.attrs[e]?.localName || "";
  }
  getURI(e) {
    return this.attrs[e]?.uri || "";
  }
  getValueByQName(e) {
    return this.attrs.find((s) => s.qName === e)?.value ?? null;
  }
  getValueByName(e, t) {
    return this.attrs.find((r) => r.uri === e && r.localName === t)?.value ?? null;
  }
}
const ae = "http://www.w3.org/2001/XMLSchema-instance", be = "http://www.omg.org/XMI", He = "xmlns", Js = "xsi", Zs = "xmi", Jt = "type", Zt = "nil", es = "schemaLocation", Ve = "href", ts = "id";
class nt {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || X.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
  }
  processOptions(e) {
    this.helper.setOptions(e);
  }
  /**
   * Set attributes for current element
   */
  setAttributes(e) {
    this.attribs = e;
  }
  /**
   * Handle start of element
   */
  startElement(e, t, s, r) {
    this.setAttributes(r), this.startElementInternal(e, t, s);
  }
  startElementInternal(e, t, s) {
    this.needsPushContext && this.helper.pushContext(), this.needsPushContext = !0, this.elements.push(s);
    let r = "";
    if (this.useNewMethods)
      this.isRoot && this.handleSchemaLocation(), r = this.helper.getPrefix(e.length === 0 ? null : e) || "";
    else {
      this.handleNamespaceAttribs();
      const n = s.indexOf(":");
      n !== -1 && (r = s.substring(0, n), t = s.substring(n + 1));
    }
    this.processElement(s, r, t);
  }
  processElement(e, t, s) {
    if (this.isRoot && (this.isRoot = !1, this.recordHeaderInformation()), t === "xmi" && s === "XMI") {
      this.objects.push(null), this.types.push(Xe);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === Xe ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === ie) {
      const n = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && n) {
        const i = this.text.trim();
        if (i.length > 0) {
          const u = this.helper.getExtendedMetaData();
          if (u) {
            const l = n.eClass();
            if (u.getContentKind(l) === Fe) {
              const h = u.getSimpleContentFeature(l);
              h && this.setFeatureValue(n, h, i);
            }
          }
          this.handleProxy(n, i);
        }
      }
      this.text = null;
    } else if (r === ce)
      this.objects.pop(), this.text = null;
    else if (r === St)
      this.objects.pop(), this.text = null;
    else if (r === _t)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === Xe)
      this.objects.pop();
    else if (r !== void 0) {
      const n = this.objects.pop() || this.objects[this.objects.length - 1];
      n && r && this.setFeatureValue(n, r, this.text), this.text = null;
    }
    this.helper.popContextWithFactories(this.prefixesToFactories);
  }
  /**
   * Handle character data
   */
  characters(e) {
    this.text === null ? this.text = e : this.text += e;
  }
  /**
   * Handle start of prefix mapping
   */
  startPrefixMapping(e, t) {
    this.isNamespaceAware = !0, this.needsPushContext && (this.helper.pushContext(), this.needsPushContext = !1), this.helper.addPrefix(e, t), this.prefixesToFactories.delete(e);
  }
  /**
   * Handle end of document
   */
  endDocument() {
    this.deferredExtent !== null && this.extent.push(...this.deferredExtent), this.helper.recordPrefixToURIMapping(), this.helper.popContext(), this.handleForwardReferences();
  }
  /**
   * Handle namespace attributes
   */
  handleNamespaceAttribs() {
    if (this.attribs)
      for (let e = 0; e < this.attribs.getLength(); e++) {
        const t = this.attribs.getQName(e);
        if (t.startsWith(He)) {
          const s = t.length > 5 ? t.substring(6) : "", r = this.attribs.getValue(e);
          this.startPrefixMapping(s, r);
        }
      }
  }
  /**
   * Handle schema location
   */
  handleSchemaLocation() {
    if (!this.attribs)
      return;
    const e = this.attribs.getValueByName(ae, es);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], n = t[s + 1];
      this.urisToLocations.set(r, T.createURI(n));
    }
  }
  /**
   * Record header information
   */
  recordHeaderInformation() {
  }
  /**
   * Create top-level object
   */
  createTopObject(e, t) {
    const s = this.getFactoryForPrefix(e);
    if (!s) {
      this.error(`Package not found for prefix '${e}'`), this.processObject(null);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType(e, r, !0);
    else {
      const i = this.helper.getType(s, t);
      i && (n = this.helper.createObject(s, i));
    }
    n ? (this.processTopObject(n), this.handleObjectAttribs(n)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(ae, Jt) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, n = t;
    const i = t.indexOf(":");
    i !== -1 && (r = t.substring(0, i), n = t.substring(i + 1));
    const u = this.getFactoryForPrefix(r);
    if (!u)
      return this.error(`Factory not found for type '${t}'`), null;
    const l = this.helper.getType(u, n);
    return l ? this.helper.createObject(u, l) : (this.error(`Type '${n}' not found`), null);
  }
  /**
   * Process top-level object
   */
  processTopObject(e) {
    e && (this.deferredExtent !== null ? this.deferredExtent.push(e) : this.extent.push(e)), this.processObject(e);
  }
  /**
   * Push object onto stack
   */
  processObject(e) {
    this.objects.push(e), this.types.push(e ? ie : ce);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), n = this.attribs.getURI(t), i = this.attribs.getLocalName(t);
        if (!s.startsWith(He) && n !== ae) {
          if (n === be) {
            i === ts && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, i || s, r, n || null);
        }
      }
  }
  /**
   * Handle ID attribute
   */
  handleId(e, t) {
  }
  /**
   * Set attribute value on object
   */
  setAttribValue(e, t, s, r) {
    const n = e.eClass(), i = this.helper.getFeature(n, r ?? null, t);
    i && this.setFeatureValue(e, i, s, -2);
  }
  /**
   * Handle feature (nested element)
   */
  handleFeature(e, t) {
    const s = this.objects[this.objects.length - 1];
    if (!s) {
      if (this.deferredParent && this.deferredFeature) {
        this.handleDeferredType(e, t);
        return;
      }
      this.objects.push(null), this.types.push(ce), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), n = e && this.helper.getURI(e) || null, i = this.helper.getFeatureWithElement(r, n, t, !0);
    if (i) {
      const u = this.helper.getFeatureKind(i);
      u === Ae || u === Ie ? (this.objects.push(null), this.types.push(i), this.isNull() || (this.text = "")) : this.createObject(s, i);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(ae, Zt) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(Ve) || this.attribs?.getValueByName("", Ve);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(St);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType("", r, !1);
    else {
      let i = t.getEType();
      if (i && !("getESuperTypes" in i) && typeof i.eIsProxy == "function" && i.eIsProxy()) {
        const u = i.eProxyURI();
        if (u) {
          const l = u.toString(), h = l.indexOf("#");
          if (h > 0) {
            const d = l.substring(0, h), p = l.substring(h + 1), E = this.packageRegistry.getEPackage(d);
            if (E) {
              const C = ge(E, p);
              C && (i = C, typeof t.setEType == "function" && t.setEType(C));
            }
          }
        }
      }
      if (i && "getESuperTypes" in i) {
        const u = i;
        if (u.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(_t);
          return;
        } else {
          const l = u.getEPackage()?.getEFactoryInstance();
          l && (n = l.create(u));
        }
      }
    }
    n && (this.helper.setValue(e, t, n, -1), this.handleObjectAttribs(n)), this.processObject(n);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(e, t, s) {
    const r = e && this.helper.getURI(e) || null, n = this.helper.getExtendedMetaData();
    if (n && r) {
      const i = s.eClass(), u = n.getElementFeature(i, r, t);
      if (u) {
        const l = this.helper.getFeatureKind(u);
        l === Ae || l === Ie ? (this.objects.push(null), this.types.push(u), this.isNull() || (this.text = "")) : this.createObject(s, u);
        return;
      }
    }
    if (r) {
      const i = this.packageRegistry.getEPackage(r);
      if (i) {
        const u = i.getEClassifier(t);
        if (u && "getESuperTypes" in u) {
          const l = u, h = s.eClass();
          if (l === h) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(ie);
            return;
          }
          if (h.isSuperTypeOf(l) && !l.isAbstract()) {
            const d = l.getEPackage()?.getEFactoryInstance();
            if (d) {
              const p = d.create(l);
              for (const C of h.getEAllStructuralFeatures()) {
                if (C.isTransient() || C.isDerived())
                  continue;
                const S = s.eGet(C);
                if (S != null)
                  try {
                    p.eSet(C, S);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, p);
              const E = this.objects.length - 1;
              this.objects[E] = p, this.handleObjectAttribs(p), this.objects.push(p), this.types.push(ie);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(ce), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
  }
  /**
   * Replace an object in the grandparent's containment reference.
   */
  replaceInParentContainment(e, t) {
    const s = this.objects.length - 1;
    if (s < 1)
      return;
    const r = this.objects[s - 1];
    if (!r)
      return;
    const n = r.eClass();
    for (const i of n.getEAllStructuralFeatures()) {
      if (!("isContainment" in i))
        continue;
      const u = i;
      if (u.isContainment()) {
        if (u.isMany()) {
          const l = r.eGet(u);
          if (l) {
            for (let h = l.length - 1; h >= 0; h--)
              if (l[h] === e) {
                l[h] = t;
                return;
              }
          }
        } else if (r.eGet(u) === e) {
          r.eSet(u, t);
          return;
        }
      }
    }
  }
  /**
   * Handle deferred type resolution (RDF/XML wrapping pattern).
   * When a containment feature has an abstract type, the inner element
   * specifies the concrete type to instantiate.
   */
  handleDeferredType(e, t) {
    const s = this.deferredParent, r = this.deferredFeature;
    this.deferredParent = null, this.deferredFeature = null;
    const n = e && this.helper.getURI(e) || null;
    let i = null;
    if (n) {
      const u = this.packageRegistry.getEPackage(n);
      if (u) {
        const l = u.getEClassifier(t);
        if (l && "getESuperTypes" in l) {
          const h = l;
          if (!h.isAbstract()) {
            const d = h.getEPackage()?.getEFactoryInstance();
            d && (i = d.create(h));
          }
        }
      }
    }
    i ? (this.helper.setValue(s, r, i, -1), this.handleObjectAttribs(i), this.objects[this.objects.length - 1] = i, this.types[this.types.length - 1] = ie, this.objects.push(i), this.types.push(ie)) : (this.objects.push(null), this.types.push(ce), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const i = s.trim().split(/\s+/);
        for (const u of i)
          u && this.setValueFromId(e, t, u, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const u = t.getEType();
      let l = null;
      if (u && typeof u.getEPackage == "function")
        l = u.getEPackage()?.getEFactoryInstance() ?? null;
      else if (u && typeof u.eGet == "function" && typeof u.eClass == "function") {
        const h = u.eClass();
        if (h) {
          const d = h.getEStructuralFeature?.("ePackage");
          if (d) {
            const p = u.eGet(d);
            p?.getEFactoryInstance && (l = p.getEFactoryInstance());
          }
        }
      }
      try {
        if (l && u) {
          const h = l.createFromString(u, s);
          this.helper.setValue(e, t, h, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (h) {
        const d = h instanceof Error ? h.message : String(h);
        this.error(`Invalid value for feature '${t.getName()}': ${d}`);
      }
    }
  }
  /**
   * Set reference value from ID
   */
  setValueFromId(e, t, s, r = -1) {
    this.forwardSingleReferences.push({
      object: e,
      feature: t,
      value: s,
      position: r,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber
    });
  }
  /**
   * Handle forward references
   */
  handleForwardReferences() {
    for (const e of this.forwardSingleReferences) {
      const t = this.resolveReference(e.value);
      if (t)
        this.helper.setValue(e.object, e.feature, t, e.position);
      else {
        console.warn(`[XMLHandler] Forward ref UNRESOLVED: '${e.value}' on feature '${e.feature?.getName?.()}'`);
        const s = this.createProxy(e.feature, e.value);
        s ? this.helper.setValue(e.object, e.feature, s, e.position) : this.error(`Unresolved reference '${e.value}'`);
      }
    }
    this.forwardSingleReferences = [];
  }
  /**
   * Creates a proxy for an unresolved reference.
   * The proxy will be resolved when accessed.
   */
  createProxy(e, t) {
    let s;
    const r = this.resource.getURI(), n = t.indexOf(" ");
    n > 0 && (t = t.substring(n + 1));
    const i = t.indexOf("#");
    if (i > 0) {
      const d = t.substring(0, i), p = t.substring(i + 1);
      if (r && !d.includes("://")) {
        const E = r.toString();
        if (d === E || E.endsWith(d) || E.endsWith("/" + d))
          s = T.createURI(E + "#" + p);
        else {
          const C = T.createURI(d).resolve(r);
          s = T.createURI(C.toString() + "#" + p);
        }
      } else
        s = T.createURI(t);
    } else i === 0 ? r ? s = T.createURI(r.toString() + t) : s = T.createURI(t) : (t.startsWith("/"), r ? s = T.createURI(r.toString() + "#" + t) : s = T.createURI("#" + t));
    const u = e.getEType(), l = u && "getESuperTypes" in u ? u : null, h = new rt(s, l || void 0);
    return h.eSetResource(this.resource), h;
  }
  /**
   * Resolve a reference string.
   * Supports:
   * - Fragment references: #//EString or //EString
   * - External URIs: http://www.eclipse.org/emf/2002/Ecore#//EString
   * - Typed references: ecore:EClass audiogram.ecore#//HIMSAAudiometricStandardType
   * - Local IDs: someId
   */
  resolveReference(e) {
    const t = e.indexOf(" ");
    t > 0 && (e = e.substring(t + 1));
    const s = e.indexOf("#");
    if (s > 0) {
      const r = e.substring(0, s), n = e.substring(s + 1), u = this.resource.getURI()?.toString();
      if (u && (u === r || u.endsWith(r) || u.endsWith("/" + r) || r.endsWith(u)))
        return this.resource.getEObject(n);
      const l = this.packageRegistry.getEPackage(r);
      if (l)
        return this.resolveFragmentInPackage(l, n);
      const h = this.resource.getContents();
      for (let p = 0; p < h.length; p++) {
        const E = h.get(p);
        if (E && typeof E.getNsURI == "function") {
          const C = E;
          if (C.getNsURI() === r)
            return this.resolveFragmentInPackage(C, n);
        }
      }
      const d = this.resource.getResourceSet();
      if (d) {
        const p = T.createURI(r), E = d.getResource(p, !0);
        if (E)
          return E.getEObject(n);
      }
      return null;
    }
    return e.startsWith("#") ? this.resource.getEObject(e.substring(1)) : e.startsWith("/") ? this.resource.getEObject(e) : this.resource.getEObject(e);
  }
  /**
   * Resolve a fragment path within an EPackage.
   * Handles paths like //EString, //EClass, etc.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return e;
    const r = s.split("/"), n = ge(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let i = e;
      for (let h = 0; h < r.length - 2; h++) {
        const d = i.getESubpackages();
        let p = null;
        for (let E = 0; E < d.length; E++)
          if (d.get(E).getName() === r[h]) {
            p = d.get(E);
            break;
          }
        if (!p)
          return null;
        i = p;
      }
      const u = r[r.length - 2], l = i.getEClassifier(u);
      if (l && "getEStructuralFeature" in l) {
        const h = l.getEStructuralFeature(r[r.length - 1]);
        if (h)
          return h;
      }
    }
    return null;
  }
  /**
   * Handle proxy reference
   */
  handleProxy(e, t) {
  }
  /**
   * Get factory for prefix
   */
  getFactoryForPrefix(e) {
    let t = this.prefixesToFactories.get(e);
    if (t)
      return t;
    const s = this.helper.getURI(e);
    if (s) {
      const r = this.packageRegistry.getEPackage(s);
      if (r && (t = r.getEFactoryInstance(), t))
        return this.prefixesToFactories.set(e, t), t;
    }
    return null;
  }
  /**
   * Report error
   */
  error(e) {
    const t = new Error(`[Line ${this.lineNumber}, Col ${this.columnNumber}] ${e}`);
    this.errors.push(t), console.error(t.message);
  }
  /**
   * Get errors
   */
  getErrors() {
    return this.errors;
  }
}
class it {
  constructor(e) {
    this.helper = e || new _e();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), n = this.makeDefaultHandler(e, r), i = Hs.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), u = new Qt();
    i.onprocessinginstruction = (h) => {
      h.name;
    }, i.onopentag = (h) => {
      u.clear();
      const d = h;
      for (const [p, E] of Object.entries(d.attributes)) {
        const C = E, S = C.prefix ? `${C.prefix}:${C.local}` : C.local;
        if (C.prefix === "xmlns" || C.name === "xmlns") {
          const D = C.prefix === "xmlns" ? C.local : "";
          n.startPrefixMapping(D, C.value);
        }
        u.add(S, C.local, C.uri, C.value);
      }
      n.lineNumber = i.line, n.columnNumber = i.column, n.startElement(d.uri, d.local, d.name, u);
    }, i.onclosetag = (h) => {
      const d = h.indexOf(":"), p = d >= 0 ? h.substring(d + 1) : h;
      n.endElement("", p, h);
    }, i.ontext = (h) => {
      h.trim() && n.characters(h);
    }, i.oncdata = (h) => {
      n.characters(h);
    }, i.onerror = (h) => {
      console.error("XML Parse Error:", h.message), n.error(h.message);
    }, i.write(t).close(), n.endDocument();
    const l = n.getErrors();
    if (l.length > 0 && e.getErrors) {
      const h = e.getErrors();
      for (const d of l) {
        const p = d.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        p ? h.push({
          message: p[3] || d.message,
          line: parseInt(p[1], 10),
          column: parseInt(p[2], 10)
        }) : h.push({ message: d.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new nt(e, this.helper, t);
  }
}
class ss extends it {
  constructor(e) {
    super(e || new rs());
  }
  makeDefaultHandler(e, t) {
    return new ns(e, this.helper, t);
  }
}
class rs extends _e {
}
class ns extends nt {
  constructor(e, t, s) {
    super(e, t, s), this.xmiVersion = "2.0";
  }
  recordHeaderInformation() {
    if (this.attribs) {
      const e = this.attribs.getValueByQName("xmi:version");
      e && (this.xmiVersion = e);
    }
  }
  getXSIType() {
    let e = super.getXSIType();
    return !e && this.attribs && (e = this.attribs.getValueByQName("xmi:type")), e;
  }
  handleId(e, t) {
    this.resource && "setID" in this.resource && this.resource.setID(e, t);
  }
}
function er(c) {
  return c !== null && typeof c == "object" && typeof c.eClass == "function" && typeof c.eGet == "function" && typeof c.eSet == "function";
}
function is(c) {
  return c != null && typeof c.getESuperTypes == "function" && typeof c.getEAllStructuralFeatures == "function";
}
function tr(c) {
  return c != null && !is(c) && typeof c.isSerializable == "function";
}
function Te(c) {
  return c != null && typeof c.getELiterals == "function" && typeof c.getEEnumLiteral == "function";
}
function sr(c) {
  return c != null && typeof c.isID == "function" && typeof c.getEAttributeType == "function";
}
function rr(c) {
  return c != null && typeof c.isContainment == "function" && typeof c.getEOpposite == "function";
}
function nr(c) {
  return c !== null && typeof c == "object" && typeof c.getNsURI == "function" && typeof c.getNsPrefix == "function" && typeof c.getEClassifiers == "function";
}
function ir(c) {
  return c !== null && typeof c == "object" && typeof c.create == "function" && typeof c.createFromString == "function" && typeof c.convertToString == "function";
}
function ar(c) {
  return c !== null && typeof c == "object" && typeof c.getEContainingClass == "function" && typeof c.getEParameters == "function";
}
function or(c) {
  return c !== null && typeof c == "object" && typeof c.getEOperation == "function";
}
function ur(c) {
  return c !== null && typeof c == "object" && typeof c.getSource == "function" && typeof c.getDetails == "function";
}
function cr(c) {
  return c !== null && typeof c == "object" && typeof c.getEContainingClass == "function" && typeof c.isTransient == "function" && typeof c.isVolatile == "function";
}
function lr(c) {
  return c !== null && typeof c == "object" && typeof c.getEPackage == "function" && typeof c.getInstanceClass == "function";
}
function at(c, e) {
  if (!c)
    return !1;
  const t = c.eClass();
  return t === e ? !0 : t.getEAllSuperTypes().includes(e);
}
function hr(c, e) {
  return at(c, e) ? c : null;
}
function fr(c, e) {
  const t = [];
  for (const s of c)
    at(s, e) && t.push(s);
  return t;
}
class ot {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new _e(), this.resource = null;
  }
  /**
   * Save resource to string
   */
  save(e, t) {
    return this.saveObjects(e, e.getContents(), t);
  }
  /**
   * Save a specific set of objects using the given resource for reference resolution.
   */
  saveObjects(e, t, s) {
    this.resource = e, this.output = [], this.declaredNamespaces.clear(), this.indent = 0, s && this.helper.setOptions(s), this.output.push(`<?xml version="1.0" encoding="UTF-8"?>
`);
    const r = Array.isArray(t) ? t : [...t];
    if (r.length > 1)
      this.saveMultipleRoots(r);
    else
      for (const n of r)
        this.saveObject(n, !0);
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(e) {
    const t = /* @__PURE__ */ new Set();
    for (const r of e)
      for (const n of this.collectPackages(r))
        t.add(n);
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${be}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ae}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const n = r.getNsURI(), i = this.getPrefix(r);
      n && i && !s.has(i) && (this.output.push(` xmlns:${i}="${n}"`), this.declaredNamespaces.set(n, i), s.add(i));
    }
    this.output.push(`>
`), this.indent++;
    for (const r of e)
      this.saveObject(r, !1);
    this.indent--, this.output.push(`</xmi:XMI>
`);
  }
  /**
   * Save a single object
   */
  saveObject(e, t) {
    const s = e.eClass(), r = s.getEPackage(), n = r ? this.getPrefix(r) : "", i = s.getName() || "Object", u = n ? `${n}:${i}` : i;
    this.writeIndent(), this.output.push(`<${u}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const l = this.helper.getExtendedMetaData(), h = this.getSimpleContentText(e, l), d = this.hasElementContent(e);
    h !== null ? (this.output.push(`>${this.escapeXml(h)}`), d && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${u}>
`)) : d ? (this.output.push(`>
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent(), this.output.push(`</${u}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Write xmi:id attribute if the resource tracks an ID for this object
   */
  saveID(e) {
    const t = this.helper.getID(e);
    t && this.output.push(` ${this.idAttributeName}="${this.escapeXml(t)}"`);
  }
  /**
   * Write namespace declarations
   */
  writeNamespaces(e) {
    const t = this.collectPackages(e);
    this.output.push(` xmlns:xmi="${be}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ae}"`);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const i = n.getNsURI(), u = this.getPrefix(n);
      i && u && !s.has(u) && (this.output.push(` xmlns:${u}="${i}"`), this.declaredNamespaces.set(i, u), s.add(u));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (n) => {
      const i = n.eClass();
      for (const u of i.getEAllStructuralFeatures()) {
        const l = t.getNamespace(u);
        if (l && !this.declaredNamespaces.has(l) && l !== "http://www.w3.org/XML/1998/namespace") {
          const h = this.generatePrefix(l, s);
          h && (this.output.push(` xmlns:${h}="${l}"`), this.declaredNamespaces.set(l, h), s.add(h));
        }
      }
      for (const u of n.eContents())
        r(u);
    };
    r(e);
  }
  /**
   * Generate a namespace prefix for a URI.
   */
  generatePrefix(e, t) {
    const s = e.lastIndexOf("/");
    let r = s >= 0 ? e.substring(s + 1) : e;
    if (r = r.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(), r || (r = "ns"), r.length > 10 && (r = r.substring(0, 10)), !t.has(r))
      return r;
    for (let n = 1; n < 100; n++) {
      const i = `${r}${n}`;
      if (!t.has(i))
        return i;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const i = r.eClass().getEPackage();
      i && t.add(i);
      for (const u of r.eContents())
        s(u);
    };
    return s(e), t;
  }
  /**
   * Get prefix for package
   */
  getPrefix(e) {
    return e.getNsPrefix() || e.getName() || "ns";
  }
  /**
   * Write xsi:type attribute if needed
   */
  writeTypeAttribute(e) {
  }
  /**
   * Write attribute values and non-containment references
   */
  writeAttributes(e) {
    const t = e.eClass(), s = this.helper.getExtendedMetaData();
    for (const r of t.getEAllStructuralFeatures())
      if (!(r.isTransient() || r.isDerived()) && !(s && s.getName(r) === ":0")) {
        if (this.isAttribute(r)) {
          if (s && s.getFeatureKind(r) === he)
            continue;
          const n = r;
          let i = e.eGet(n);
          if (i != null && (i = this.resolveValue(i, e), i != null)) {
            let u = null;
            try {
              u = n.getDefaultValue();
            } catch {
            }
            if (i !== u) {
              const l = this.convertToString(n, i), h = this.getSerializedAttributeName(n, s);
              this.output.push(` ${h}="${this.escapeXml(l)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const n = r;
          if (!n.isContainment()) {
            let i = e.eGet(n);
            if (i != null) {
              const u = this.helper.getSerializedFeatureName(n);
              if (r.isMany()) {
                if (Array.isArray(i) || M(i)) {
                  const l = [];
                  for (const h of i) {
                    const d = this.resolveValue(h, e);
                    if (d == null || typeof d == "string")
                      continue;
                    const p = d.eResource?.();
                    if (p && p === this.resource) {
                      const E = this.getHref(d);
                      E && l.push(E);
                    }
                  }
                  l.length > 0 && this.output.push(` ${u}="${this.escapeXml(l.join(" "))}"`);
                }
              } else if (i = this.resolveValue(i, e), i != null)
                if (typeof i == "string")
                  this.output.push(` ${u}="${this.escapeXml(i)}"`);
                else if (typeof i == "boolean")
                  this.output.push(` ${u}="${i ? "true" : "false"}"`);
                else if (typeof i == "number")
                  this.output.push(` ${u}="${String(i)}"`);
                else {
                  const l = this.getTypePrefixedHref(n, i);
                  l && this.output.push(` ${u}="${this.escapeXml(l)}"`);
                }
            }
          }
        }
      }
  }
  /**
   * Get href for cross-reference
   */
  getHref(e) {
    if (L(e) && e.eIsProxy()) {
      const r = e.eProxyURI();
      return r ? this.helper.deresolve(r).toString() : null;
    }
    const t = this.getIntraResourceFragment(e);
    if (t)
      return t;
    const s = e.eResource?.();
    if (s) {
      const r = s.getURIFragment(e);
      if (r) {
        if (s === this.resource)
          return r;
        const n = s.getURI();
        return n ? `${n.toString()}#${r}` : `#${r}`;
      }
    }
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const r = e.getEContainingClass();
      if (r) {
        const n = r.getEPackage?.(), i = r.getName?.(), u = e.getName?.();
        if (n && i && u) {
          const l = n.getNsURI?.();
          if (l)
            return `${l}#//${i}/${u}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const n = r.getNsURI?.(), i = e.getName?.();
        if (n && i)
          return `${n}#//${i}`;
      }
    }
    if ("getName" in e) {
      const r = e.getName?.();
      if (r)
        return `//${r}`;
    }
    return null;
  }
  /**
   * For Ecore objects (EClassifier, EStructuralFeature) that lack eResource()
   * because the eContainer chain is not set, walk up the Ecore-specific
   * hierarchy (ePackage/eSuperPackage) to find the root package. If that root
   * is in this.resource, build a hierarchical fragment path like
   * "//service/base/Service" or "//service/base/Service/id".
   */
  getIntraResourceFragment(e) {
    if (!this.resource)
      return null;
    const t = [];
    let s = null;
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const n = e.getEContainingClass();
      if (!n)
        return null;
      const i = e.getName?.(), u = n.getName?.();
      if (!i || !u)
        return null;
      t.push(u, i), s = n.getEPackage?.() ?? null;
    } else if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const n = e.getName?.();
      if (!n)
        return null;
      t.push(n), s = e.getEPackage();
    }
    if (!s)
      return null;
    for (; s; ) {
      const n = typeof s.getESuperPackage == "function" ? s.getESuperPackage() : null;
      if (!n)
        break;
      const i = s.getName?.();
      i && t.unshift(i), s = n;
    }
    const r = this.resource.getContents();
    for (const n of r)
      if (n === s)
        return "#//" + t.join("/");
    return null;
  }
  /**
   * Get href with type prefix for cross-document references when the declared
   * type is abstract and differs from the actual type.
   * Java EMF format: "prefix:TypeName URI#fragment"
   */
  getTypePrefixedHref(e, t) {
    const s = this.getHref(t);
    if (!s)
      return null;
    const r = t.eResource?.();
    if (r && r === this.resource || s.startsWith("/") || s.startsWith("#"))
      return s;
    const n = e.getEType(), i = t.eClass();
    if (n && i && i !== n && "isAbstract" in n && n.isAbstract()) {
      const u = i.getEPackage();
      if (u) {
        const l = this.getPrefix(u), h = i.getName();
        if (l && h)
          return `${l}:${h} ${s}`;
      }
    }
    return s;
  }
  /**
   * Check if feature is an attribute (not a reference)
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
  /**
   * Check if object has element content (containments, multi-valued non-containment refs, or EMD element features)
   */
  hasElementContent(e) {
    const s = e.eClass().getEAllStructuralFeatures(), r = this.helper.getExtendedMetaData();
    if (r)
      for (const n of s) {
        if (n.isTransient() || n.isDerived() || !this.isAttribute(n) || r.getFeatureKind(n) !== he)
          continue;
        const i = e.eGet(n);
        if (i != null)
          return !0;
      }
    for (const n of s)
      if ("isContainment" in n) {
        const i = n;
        if (n.isTransient())
          continue;
        const u = e.eGet(i);
        if (u == null)
          continue;
        if (i.isContainment()) {
          if ((Array.isArray(u) || M(u)) && u.length > 0 || !Array.isArray(u) && !M(u))
            return !0;
        } else if (n.isMany() && (Array.isArray(u) || M(u)) && u.length > 0)
          for (const l of u) {
            const h = l.eResource?.();
            if (!h || h !== this.resource)
              return !0;
          }
      }
    return !1;
  }
  /**
   * Write element content (containments and multi-valued non-containment references)
   */
  writeElements(e) {
    const t = e.eClass(), s = this.helper.getExtendedMetaData();
    if (s)
      for (const r of t.getEAllStructuralFeatures()) {
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== he)
          continue;
        const i = e.eGet(r);
        if (i == null)
          continue;
        const u = this.getSerializedElementName(r, s), l = r;
        if (r.isMany() && (Array.isArray(i) || M(i))) {
          for (const h of i)
            if (h != null) {
              this.writeIndent();
              const d = this.convertSingleValueToString(l, h);
              this.output.push(`<${u}>${this.escapeXml(d)}</${u}>
`);
            }
        } else {
          this.writeIndent();
          const h = this.convertToString(l, i);
          this.output.push(`<${u}>${this.escapeXml(h)}</${u}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const n = r;
        if (r.isTransient())
          continue;
        const i = e.eGet(n);
        if (i == null)
          continue;
        if (n.isContainment())
          if (Array.isArray(i) || M(i))
            for (const u of i)
              this.writeElement(n, u);
          else
            this.writeElement(n, i);
        else if (r.isMany() && (Array.isArray(i) || M(i)) && i.length > 0)
          for (const u of i) {
            const l = this.resolveValue(u, e);
            if (l == null)
              continue;
            const h = typeof l != "string" ? l.eResource?.() : null;
            if (h && h === this.resource)
              continue;
            const d = typeof l == "string" ? l : this.getHref(l);
            d && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(n)} href="${this.escapeXml(d)}"/>
`));
          }
      }
  }
  /**
   * Write a single element
   */
  writeElement(e, t) {
    const s = this.helper.getExtendedMetaData(), r = this.getSerializedElementName(e, s) || "element";
    this.writeIndent(), this.output.push(`<${r}`);
    const n = e.getEType(), i = t.eClass();
    if (n && i && i !== n) {
      const h = i.getEPackage(), d = h ? this.getPrefix(h) : "", p = d ? `${d}:${i.getName()}` : i.getName();
      this.output.push(` xsi:type="${p}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const u = this.getSimpleContentText(t, s), l = this.hasElementContent(t);
    u !== null ? (this.output.push(`>${this.escapeXml(u)}`), l && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : l ? (this.output.push(`>
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent(), this.output.push(`</${r}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Resolve a value if it's a proxy.
   * Returns the resolved value or the original value if not a proxy or cannot be resolved.
   */
  resolveValue(e, t) {
    if (e == null)
      return e;
    if (L(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(L(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const n = s.toString(), i = n.indexOf("#");
          if (i >= 0) {
            const u = n.substring(i + 1);
            let l = this.resource;
            if (i > 0) {
              const h = T.createURI(n.substring(0, i));
              l = r.getResource(h, !0) || this.resource;
            }
            if (l) {
              const h = l.getEObject(u);
              if (h)
                return h;
            }
          }
        }
      }
      return s?.toString() || null;
    }
    return e;
  }
  /**
   * Convert value to string
   */
  convertToString(e, t) {
    if (t == null)
      return "";
    if (Array.isArray(t) || M(t)) {
      const r = [];
      for (const n of t)
        n != null && r.push(this.convertSingleValueToString(e, n));
      return r.join(" ");
    }
    if (Te(e.getEType()))
      return this.convertSingleValueToString(e, t);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number")
      return String(t);
    if (t && typeof t == "object" && "eClass" in t)
      return "getName" in t && typeof t.getName == "function" && t.getName() || "";
    const s = e.getEType();
    if (s && "getEPackage" in s) {
      const r = s.getEPackage();
      if (r) {
        const n = r.getEFactoryInstance();
        if (n)
          return n.convertToString(s, t);
      }
    }
    return String(t);
  }
  /**
   * Convert a single value to string (helper for arrays)
   */
  convertSingleValueToString(e, t) {
    if (t == null)
      return "";
    if (!Te(e.getEType())) {
      if (typeof t == "string")
        return t;
      if (typeof t == "boolean")
        return t ? "true" : "false";
      if (typeof t == "number")
        return String(t);
    }
    const r = e.getEType();
    if (r && "getEPackage" in r) {
      const n = r.getEPackage();
      if (n) {
        const i = n.getEFactoryInstance();
        if (i)
          return i.convertToString(r, t);
      }
    }
    return String(t);
  }
  /**
   * Get the text content for a simple-content class, or null if not applicable.
   */
  getSimpleContentText(e, t) {
    if (!t)
      return null;
    const s = e.eClass();
    if (t.getContentKind(s) !== Fe)
      return null;
    const r = t.getSimpleContentFeature(s);
    if (!r)
      return null;
    const n = e.eGet(r);
    return n == null ? null : typeof n == "string" ? n : typeof n == "boolean" ? n ? "true" : "false" : String(n);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(e, t) {
    if (t) {
      const s = t.getNamespace(e), r = t.getName(e) ?? e.getName() ?? "";
      if (s) {
        const n = this.getNamespacePrefix(s);
        if (n)
          return `${n}:${r}`;
      }
      if (r && !r.startsWith(":"))
        return r;
    }
    return this.helper.getSerializedFeatureName(e);
  }
  /**
   * Get the serialized element name, including namespace prefix if EMD specifies one.
   */
  getSerializedElementName(e, t) {
    if (t) {
      const s = t.getNamespace(e), r = t.getName(e) ?? e.getName() ?? "";
      if (s) {
        const n = this.getNamespacePrefix(s);
        if (n)
          return `${n}:${r}`;
      }
      if (r && !r.startsWith(":"))
        return r;
    }
    return this.helper.getSerializedFeatureName(e);
  }
  /**
   * Get or create a namespace prefix for the given URI.
   */
  getNamespacePrefix(e) {
    const t = this.declaredNamespaces.get(e);
    return t || (e === "http://www.w3.org/XML/1998/namespace" ? "xml" : null);
  }
  /**
   * Escape XML special characters
   */
  escapeXml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /**
   * Write indentation
   */
  writeIndent() {
    for (let e = 0; e < this.indent; e++)
      this.output.push(this.indentString);
  }
}
class as extends ot {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
const gr = "DEFER_ATTACHMENT", pr = "DEFER_IDREF_RESOLUTION", dr = "USE_DEPRECATED_METHODS", mr = "RECORD_UNKNOWN_FEATURE";
class ut extends De {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new _e(this);
  }
  /**
   * Get EObject by ID
   */
  getEObject(e) {
    const t = this.idToEObjectMap.get(e);
    return t || super.getEObject(e);
  }
  /**
   * Get URI fragment for an object
   */
  getURIFragment(e) {
    const t = this.eObjectToIDMap.get(e);
    return t || super.getURIFragment(e);
  }
  /**
   * Set ID for an object
   */
  setID(e, t) {
    t && (this.idToEObjectMap.set(t, e), this.eObjectToIDMap.set(e, t));
  }
  /**
   * Get ID for an object
   */
  getID(e) {
    return this.eObjectToIDMap.get(e) ?? null;
  }
  /**
   * Clear ID maps
   */
  clearIdMaps() {
    this.idToEObjectMap.clear(), this.eObjectToIDMap.clear();
  }
  /**
   * Load resource using URIConverter if available, otherwise no-op.
   * For direct string loading, use loadFromString().
   */
  async load(e) {
    const s = this.getResourceSet()?.getURIConverter(), r = this.getURI();
    if (s && r)
      try {
        const n = await s.createInputStream(r), i = await Er(n);
        this.loadFromString(i, e);
      } catch {
        this.loaded = !0;
      }
    else
      this.loaded = !0;
  }
  /**
   * Load from XML string
   */
  loadFromString(e, t) {
    this.clearIdMaps();
    const s = t || /* @__PURE__ */ new Map();
    this.createXMLLoad().load(this, e, s), this.loaded = !0;
  }
  /**
   * Create the XML loader
   */
  createXMLLoad() {
    return new it(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new ot(this.xmlHelper);
  }
  /**
   * Save to XML string
   */
  saveToString(e) {
    const t = e || /* @__PURE__ */ new Map();
    return this.createXMLSave().save(this, t);
  }
  /**
   * Save a subset of objects to XML string.
   * Uses this resource's context (IDs, reference resolution) but only
   * serializes the given objects as root elements.
   */
  saveContents(e, t) {
    const s = t || /* @__PURE__ */ new Map();
    return this.createXMLSave().saveObjects(this, e, s);
  }
  /**
   * Unload resource
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class os extends ut {
  createXMLLoad() {
    return new ss(this.xmlHelper);
  }
  createXMLSave() {
    return new as(this.xmlHelper);
  }
}
async function Er(c) {
  const e = c.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: n } = await e.read();
    if (r)
      break;
    s += t.decode(n, { stream: !0 });
  }
  return s += t.decode(), s;
}
class us {
  createResource(e) {
    return new ut(e);
  }
}
class Ne {
  createResource(e) {
    return new os(e);
  }
}
const pe = fe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
pe.has("xml") || pe.set("xml", new us());
pe.has("xmi") || pe.set("xmi", new Ne());
pe.has("ecore") || pe.set("ecore", new Ne());
class cs {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || X.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (n) {
      this.error(`Invalid JSON: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    if (Array.isArray(r))
      for (const n of r) {
        const i = this.loadObject(n);
        i && e.getContents().push(i);
      }
    else if (r && typeof r == "object") {
      const n = this.loadObject(r);
      n && e.getContents().push(n);
    }
    this.handleForwardReferences();
  }
  /**
   * Load a single JSON object into an EObject.
   */
  loadObject(e, t) {
    const s = this.resolveEClass(e, t);
    if (!s)
      return this.error(`Cannot determine type for object: ${JSON.stringify(e).substring(0, 100)}`), null;
    const r = s.getEPackage();
    if (!r)
      return this.error(`No package for class '${s.getName()}'`), null;
    const i = r.getEFactoryInstance().create(s);
    for (const [u, l] of Object.entries(e)) {
      if (u === "eClass" || l == null)
        continue;
      const h = s.getEStructuralFeature(u);
      if (!h) {
        this.error(`Unknown feature '${u}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(h))
        this.loadAttribute(i, h, l);
      else {
        const d = h;
        d.isContainment() ? this.loadContainment(i, d, l) : this.loadCrossReference(i, d, l);
      }
    }
    return i;
  }
  /**
   * Resolve the EClass for a JSON object.
   * Uses `eClass` property if present, otherwise falls back to expectedType.
   */
  resolveEClass(e, t) {
    const s = e.eClass;
    return s ? this.resolveType(s) : t || null;
  }
  /**
   * Resolve an eClass type URI (`nsURI#//ClassName`) to an EClass.
   */
  resolveType(e) {
    const t = e.indexOf("#");
    if (t < 0)
      return this.error(`Invalid eClass URI (no '#'): ${e}`), null;
    const s = e.substring(0, t);
    let r = e.substring(t + 1);
    for (; r.startsWith("/"); )
      r = r.substring(1);
    const n = this.packageRegistry.getEPackage(s);
    if (!n)
      return this.error(`Package not found for nsURI: ${s}`), null;
    const i = n.getEClassifier(r);
    return i ? "getESuperTypes" in i ? i : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], n = e.eGet(t);
      if (n && (Array.isArray(n) || M(n)))
        for (const i of r)
          n.push(this.convertAttributeValue(t, i));
      else
        e.eSet(t, r.map((i) => this.convertAttributeValue(t, i)));
    } else
      e.eSet(t, this.convertAttributeValue(t, s));
  }
  /**
   * Convert a JSON value to the appropriate attribute type using EFactory.createFromString.
   */
  convertAttributeValue(e, t) {
    if (t == null)
      return null;
    if (typeof t == "string" || typeof t == "number" || typeof t == "boolean") {
      if (typeof t == "string") {
        const s = e.getEType();
        if (s && "getEPackage" in s) {
          const r = s.getEPackage();
          if (r) {
            const n = r.getEFactoryInstance();
            if (n)
              try {
                return n.createFromString(s, t);
              } catch {
              }
          }
        }
      }
      return t;
    }
    return t;
  }
  /**
   * Load a containment reference value (nested objects).
   */
  loadContainment(e, t, s) {
    const r = t.getEType() && "getESuperTypes" in t.getEType() ? t.getEType() : void 0;
    if (t.isMany()) {
      const n = Array.isArray(s) ? s : [s], i = e.eGet(t);
      for (const u of n)
        if (u && typeof u == "object") {
          const l = this.loadObject(u, r);
          l && i && (Array.isArray(i) || M(i)) && i.push(l);
        }
    } else if (s && typeof s == "object" && !Array.isArray(s)) {
      const n = this.loadObject(s, r);
      n && e.eSet(t, n);
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s];
      for (const n of r)
        n && typeof n == "object" && "$ref" in n && this.forwardReferences.push({
          object: e,
          feature: t,
          value: n.$ref
        });
    } else
      s && typeof s == "object" && "$ref" in s && this.forwardReferences.push({
        object: e,
        feature: t,
        value: s.$ref
      });
  }
  /**
   * Resolve all forward references collected during loading.
   */
  handleForwardReferences() {
    for (const e of this.forwardReferences) {
      const t = this.resolveReference(e.value);
      if (t)
        this.setReferenceValue(e.object, e.feature, t);
      else {
        const s = this.createProxy(e.feature, e.value);
        s ? this.setReferenceValue(e.object, e.feature, s) : this.error(`Unresolved reference: ${e.value}`);
      }
    }
    this.forwardReferences = [];
  }
  /**
   * Set a reference value on an object (handles single and multi-valued).
   */
  setReferenceValue(e, t, s) {
    if (t.isMany()) {
      const r = e.eGet(t);
      r && (Array.isArray(r) || M(r)) && r.push(s);
    } else
      e.eSet(t, s);
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(e) {
    const t = e.indexOf("#");
    if (t > 0) {
      const s = e.substring(0, t), r = e.substring(t + 1), n = this.resource.getURI();
      if (n && n.toString() === s)
        return this.resource.getEObject(r);
      const i = this.packageRegistry.getEPackage(s);
      if (i)
        return this.resolveFragmentInPackage(i, r);
      const u = this.resource.getResourceSet();
      if (u) {
        const l = T.createURI(s), h = u.getResource(l, !0);
        if (h)
          return h.getEObject(r);
      }
      return null;
    }
    return e.startsWith("#") ? this.resource.getEObject(e.substring(1)) : e.startsWith("/") ? this.resource.getEObject(e) : this.resource.getEObject(e);
  }
  /**
   * Resolve a fragment path within an EPackage.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return e;
    const r = s.split("/"), n = ge(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let i = e;
      for (let h = 0; h < r.length - 2; h++) {
        const d = i.getESubpackages();
        let p = null;
        for (let E = 0; E < d.length; E++)
          if (d.get(E).getName() === r[h]) {
            p = d.get(E);
            break;
          }
        if (!p)
          return null;
        i = p;
      }
      const u = r[r.length - 2], l = i.getEClassifier(u);
      if (l && "getEStructuralFeature" in l) {
        const h = l.getEStructuralFeature(r[r.length - 1]);
        if (h)
          return h;
      }
    }
    return null;
  }
  /**
   * Create a proxy for an unresolved reference.
   */
  createProxy(e, t) {
    let s;
    const r = t.indexOf("#");
    if (r > 0)
      s = T.createURI(t);
    else if (r === 0) {
      const l = this.resource.getURI();
      l ? s = T.createURI(l.toString() + t) : s = T.createURI(t);
    } else {
      const l = this.resource.getURI();
      l ? s = T.createURI(l.toString() + "#" + t) : s = T.createURI("#" + t);
    }
    const n = e.getEType(), i = n && "getESuperTypes" in n ? n : null, u = new rt(s, i || void 0);
    return u.eSetResource(this.resource), u;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
  /**
   * Report an error.
   */
  error(e) {
    this.errors.push(new Error(e));
  }
  /**
   * Get accumulated errors.
   */
  getErrors() {
    return this.errors;
  }
}
const Qe = "SERIALIZE_TYPE", Je = "INDENT", ls = "always", hs = "polymorphic";
class fs {
  constructor() {
    this.serializeType = hs, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(Qe) && (this.serializeType = t.get(Qe)), t.has(Je) && (this.indent = t.get(Je)));
    const s = e.getContents();
    if (s.size() === 0)
      return "{}";
    if (s.size() === 1) {
      const n = this.saveObject(s.get(0), void 0, !0);
      return JSON.stringify(n, null, this.indent);
    }
    const r = [];
    for (const n of s)
      r.push(this.saveObject(n, void 0, !0));
    return JSON.stringify(r, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(e, t, s = !1) {
    const r = {}, n = e.eClass();
    this.shouldSaveType(e, t, s) && (r.eClass = this.getEClassURI(n));
    for (const i of n.getEAllStructuralFeatures()) {
      if (i.isTransient() || i.isDerived())
        continue;
      const u = e.eGet(i);
      if (u != null)
        if (this.isAttribute(i))
          this.saveAttribute(r, e, i, u);
        else {
          const l = i;
          l.isContainment() ? this.saveContainment(r, e, l, u) : this.saveCrossReference(r, e, l, u);
        }
    }
    return r;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(e, t, s, r) {
    try {
      const i = s.getDefaultValue();
      if (r === i)
        return;
    } catch {
    }
    const n = s.getName();
    if (s.isMany()) {
      const i = Array.isArray(r) || M(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      e[n] = i.map((u) => this.convertAttributeValue(s, u));
    } else
      e[n] = this.convertAttributeValue(s, r);
  }
  /**
   * Convert a single attribute value to a JSON-compatible value.
   */
  convertAttributeValue(e, t) {
    if (t == null)
      return null;
    if (typeof t == "string" || typeof t == "number" || typeof t == "boolean")
      return t;
    const s = e.getEType();
    if (s && "getEPackage" in s) {
      const r = s.getEPackage();
      if (r) {
        const n = r.getEFactoryInstance();
        if (n)
          return n.convertToString(s, t);
      }
    }
    return String(t);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(e, t, s, r) {
    const n = s.getName();
    if (s.isMany()) {
      const i = Array.isArray(r) || M(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      e[n] = i.map((u) => this.saveContainedChild(u, s));
    } else
      e[n] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (L(e) && e.eIsProxy()) {
      const s = e.eProxyURI()?.toString();
      if (s)
        return { $ref: s };
    }
    return this.saveObject(e, t);
  }
  /**
   * Serialize a cross-reference (non-containment) as `{ "$ref": "uri#fragment" }`.
   */
  saveCrossReference(e, t, s, r) {
    const n = s.getName();
    if (s.isMany()) {
      const i = Array.isArray(r) || M(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      const u = [];
      for (const l of i) {
        const h = this.getHref(l);
        h && u.push({ $ref: h });
      }
      u.length > 0 && (e[n] = u);
    } else {
      const i = this.getHref(r);
      i && (e[n] = { $ref: i });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === ls || s)
      return !0;
    if (t && "isContainment" in t) {
      const n = t.getEType(), i = e.eClass();
      return !!(n && i && n !== i);
    }
    return !1;
  }
  /**
   * Get the emfjson-style type URI for an EClass: `nsURI#//ClassName`
   */
  getEClassURI(e) {
    const s = e.getEPackage()?.getNsURI(), r = e.getName();
    return s && r ? `${s}#//${r}` : r || "Unknown";
  }
  /**
   * Get href for a cross-referenced object.
   * Reuses the pattern from XMLSave.getHref().
   */
  getHref(e) {
    if (L(e) && e.eIsProxy())
      return e.eProxyURI()?.toString() || null;
    const t = e.eResource?.();
    if (t) {
      const s = t.getURIFragment(e), r = t.getURI();
      if (r && s)
        return `${r.toString()}#${s}`;
      if (s)
        return `#${s}`;
    }
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const s = e.getEContainingClass();
      if (s) {
        const r = s.getEPackage?.(), n = s.getName?.(), i = e.getName?.();
        if (r && n && i) {
          const u = r.getNsURI?.();
          if (u)
            return `${u}#//${n}/${i}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const s = e.getEPackage();
      if (s) {
        const r = s.getNsURI?.(), n = e.getName?.();
        if (r && n)
          return `${r}#//${n}`;
      }
    }
    if ("getName" in e) {
      const s = e.getName?.();
      if (s)
        return `//${s}`;
    }
    return null;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
}
class gs extends De {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get EObject by ID or path fragment.
   */
  getEObject(e) {
    const t = this.idToEObjectMap.get(e);
    return t || super.getEObject(e);
  }
  /**
   * Get URI fragment for an object.
   */
  getURIFragment(e) {
    const t = this.eObjectToIDMap.get(e);
    return t || super.getURIFragment(e);
  }
  /**
   * Set ID for an object.
   */
  setID(e, t) {
    t && (this.idToEObjectMap.set(t, e), this.eObjectToIDMap.set(e, t));
  }
  /**
   * Get ID for an object.
   */
  getID(e) {
    return this.eObjectToIDMap.get(e) ?? null;
  }
  clearIdMaps() {
    this.idToEObjectMap.clear(), this.eObjectToIDMap.clear();
  }
  /**
   * Load from a JSON string.
   */
  loadFromString(e, t) {
    this.clearIdMaps();
    const s = t || /* @__PURE__ */ new Map(), r = this.createJSONLoad();
    r.load(this, e, s);
    const n = r.getErrors();
    if (n.length > 0) {
      const i = this.getErrors();
      for (const u of n)
        i.push({ message: u.message });
    }
    this.loaded = !0;
  }
  /**
   * Save to a JSON string.
   */
  saveToString(e) {
    const t = e || /* @__PURE__ */ new Map();
    return this.createJSONSave().save(this, t);
  }
  /**
   * Create the JSON loader.
   */
  createJSONLoad() {
    return new cs();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new fs();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class ps {
  createResource(e) {
    return new gs(e);
  }
}
const At = fe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
At.has("json") || At.set("json", new ps());
class $ {
  /**
   * Resolves the given proxy in the context of the given object.
   * If the proxy cannot be resolved, returns the proxy itself.
   *
   * @param proxy the proxy to resolve
   * @param context the context object (used to get resource set)
   * @returns the resolved object, or the proxy if it cannot be resolved
   */
  static resolve(e, t) {
    if (!e || !L(e) || !e.eIsProxy())
      return e;
    if (L(t))
      return t.eResolveProxy(e);
    if (!e.eProxyURI())
      return e;
    const r = t.eResource?.();
    return r ? $.resolveWithResource(e, r) : e;
  }
  /**
   * Resolves the given proxy using the given resource.
   */
  static resolveWithResource(e, t) {
    if (!L(e) || !e.eIsProxy() || !e.eProxyURI())
      return e;
    const r = t.getResourceSet();
    return r ? $.resolveWithResourceSet(e, r, t.getURI() ?? void 0) : e;
  }
  /**
   * Resolves the given proxy using the given resource set.
   *
   * @param proxy the proxy to resolve
   * @param resourceSet the resource set to use for resolution
   * @param baseURI optional base URI for resolving relative references
   */
  static resolveWithResourceSet(e, t, s) {
    if (!L(e) || !e.eIsProxy())
      return e;
    const r = e.eProxyURI();
    if (!r)
      return e;
    const n = r.toString(), i = n.indexOf("#");
    if (i > 0) {
      const u = n.substring(0, i), l = n.substring(i + 1);
      let h;
      s && !u.includes("://") ? h = s.resolve(T.createURI(u)) : h = T.createURI(u);
      const d = t.getResource(h, !0);
      if (d) {
        const p = d.getEObject(l);
        if (p)
          return p;
      }
    } else if (i === 0) {
      const u = n.substring(1);
      for (const l of t.getResources()) {
        const h = l.getEObject(u);
        if (h)
          return h;
      }
    }
    return e;
  }
  /**
   * Resolves all proxies in the given resource.
   */
  static resolveAll(e) {
    const t = e.getContents();
    for (const s of t)
      $.resolveAllInObject(s);
  }
  /**
   * Resolves all proxies in the given resource set.
   */
  static resolveAllInResourceSet(e) {
    for (const t of e.getResources())
      $.resolveAll(t);
  }
  /**
   * Resolves all proxies in the given object and its contents.
   */
  static resolveAllInObject(e) {
    const t = e.eClass();
    for (const s of t.getEAllReferences()) {
      const r = e.eGet(s);
      if (r) {
        if (Array.isArray(r))
          for (let n = 0; n < r.length; n++) {
            const i = r[n];
            if (i && L(i) && i.eIsProxy()) {
              const u = $.resolve(i, e);
              u !== i && (r[n] = u);
            }
          }
        else if (L(r) && r.eIsProxy()) {
          const n = $.resolve(r, e);
          n !== r && e.eSet(s, n);
        }
      }
    }
    for (const s of e.eContents())
      $.resolveAllInObject(s);
  }
  /**
   * Creates a new instance of the given EClass.
   */
  static create(e) {
    const t = e.getEPackage();
    if (t) {
      const s = t.getEFactoryInstance();
      if (s)
        return s.create(e);
    }
    throw new Error(`Cannot create instance of ${e.getName()} - no factory available`);
  }
  /**
   * Returns the URI for the given object.
   */
  static getURI(e) {
    const t = e.eResource?.();
    if (!t)
      return null;
    const s = t.getURI(), r = t.getURIFragment(e);
    return s && r ? T.createURI(`${s.toString()}#${r}`) : s;
  }
  /**
   * Returns the root container of the given object.
   */
  static getRootContainer(e) {
    let t = e, s = t.eContainer?.();
    for (; s; )
      t = s, s = t.eContainer?.();
    return t;
  }
  /**
   * Returns true if the given object is an ancestor of the other object.
   */
  static isAncestor(e, t) {
    let s = t.eContainer?.();
    for (; s; ) {
      if (s === e)
        return !0;
      s = s.eContainer?.();
    }
    return !1;
  }
  /**
   * Copies the given object.
   * Note: This is a shallow copy that only copies attribute values.
   */
  static copy(e) {
    const t = e.eClass(), s = $.create(t);
    for (const r of t.getEAllAttributes())
      if (!r.isDerived() && !r.isTransient()) {
        const n = e.eGet(r);
        n != null && s.eSet(r, n);
      }
    return s;
  }
  /**
   * Returns all objects of the given type in the resource.
   */
  static getAllContents(e, t) {
    const s = [];
    for (const r of e.getContents()) {
      $.isInstance(r, t) && s.push(r);
      for (const n of r.eAllContents())
        $.isInstance(n, t) && s.push(n);
    }
    return s;
  }
  /**
   * Returns true if the object is an instance of the given type.
   */
  static isInstance(e, t) {
    const s = e.eClass();
    return s === t || $.isSuperTypeOf(t, s);
  }
  /**
   * Returns true if superType is a supertype of subType.
   */
  static isSuperTypeOf(e, t) {
    const s = t.getESuperTypes();
    for (const r of s)
      if (r === e || $.isSuperTypeOf(e, r))
        return !0;
    return !1;
  }
}
class de {
  constructor(e, t, s, r = []) {
    this.children = [], this.severity = e, this.source = t, this.message = s, this.data = r;
  }
  getSeverity() {
    return this.severity;
  }
  getMessage() {
    return this.message;
  }
  getSource() {
    return this.source;
  }
  getChildren() {
    return this.children;
  }
  getData() {
    return this.data;
  }
  add(e) {
    this.children.push(e), e.getSeverity() > this.severity && (this.severity = e.getSeverity());
  }
}
de.OK_INSTANCE = new de(0, "", "OK");
class Re {
  constructor() {
    this.validators = /* @__PURE__ */ new Map();
  }
  getValidator(e) {
    return this.validators.get(e) ?? null;
  }
  setValidator(e, t) {
    this.validators.set(e, t);
  }
}
Re.INSTANCE = new Re();
class Ze {
  constructor(e) {
    this.registry = e ?? Re.INSTANCE;
  }
  validate(e) {
    const t = new de(0, "org.eclipse.emf.ecore", `Diagnosis of ${this.getObjectLabel(e)}`, [e]);
    return this.doValidate(e, t), this.validateContents(e, t), t;
  }
  doValidate(e, t) {
    const r = e.eClass()?.getEPackage();
    if (!r)
      return;
    const n = r.getNsURI();
    if (!n)
      return;
    const i = this.registry.getValidator(n);
    i && i.validate(e, t);
  }
  validateContents(e, t) {
    for (const s of e.eContents()) {
      const r = this.validate(s);
      r.getSeverity() !== 0 && t.add(r);
    }
  }
  getObjectLabel(e) {
    const s = e.eClass?.()?.getName() ?? "EObject";
    if ("getName" in e && typeof e.getName == "function") {
      const r = e.getName();
      if (r)
        return `${s} '${r}'`;
    }
    return s;
  }
}
Ze.INSTANCE = new Ze();
class yr {
  constructor() {
    this._eAdapters = [], this._eDeliver = !0;
  }
  eAdapters() {
    return this._eAdapters;
  }
  eDeliver() {
    return this._eDeliver;
  }
  eSetDeliver(e) {
    this._eDeliver = e;
  }
  eNotify(e) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const t of this._eAdapters)
        t.notifyChanged(e);
  }
  /**
   * Adds an adapter to this notifier.
   * The adapter's setTarget will be called.
   */
  eAdapterAdd(e) {
    this._eAdapters.push(e), e.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   * The adapter will be notified via REMOVING_ADAPTER event.
   */
  eAdapterRemove(e) {
    const t = this._eAdapters.indexOf(e);
    if (t !== -1) {
      if (this._eDeliver) {
        const s = new oe(this, N.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), tt(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
    }
    return !1;
  }
}
class Cr extends Bt {
  constructor() {
    super(...arguments), this.iterating = !1;
  }
  /**
   * Returns whether the process of attaching this adapter should be done recursively or iteratively.
   * The default is to return true for recursion.
   */
  useRecursion() {
    return !0;
  }
  /**
   * Returns whether proxies should be resolved during traversal.
   */
  resolve() {
    return !0;
  }
  /**
   * Handles a notification by calling selfAdapt.
   */
  notifyChanged(e) {
    this.selfAdapt(e);
  }
  /**
   * Handles a notification by calling handleContainment for any containment-based notification.
   */
  selfAdapt(e) {
    const t = e.getNotifier();
    if (this.isResourceSet(t)) {
      const s = e.getFeature();
      s && s.getName?.() === "resources" && this.handleContainment(e);
    } else if (this.isResource(t)) {
      const s = e.getFeature();
      s && s.getName?.() === "contents" && this.handleContainment(e);
    } else if (this.isEObject(t)) {
      const s = e.getFeature();
      s && this.isEReference(s) && s.isContainment() && this.handleContainment(e);
    }
  }
  /**
   * Handles a containment change by adding and removing the adapter as appropriate.
   */
  handleContainment(e) {
    switch (e.getEventType()) {
      case N.RESOLVE: {
        const t = e.getOldValue();
        if (t && this.hasAdapter(t)) {
          this.removeAdapter(t);
          const s = e.getNewValue();
          s && this.addAdapter(s);
        }
        break;
      }
      case N.UNSET: {
        const t = e.getOldValue();
        if (t !== !0 && t !== !1) {
          t != null && this.removeAdapterWithChecks(t, !1, !0);
          const s = e.getNewValue();
          s != null && this.addAdapter(s);
        }
        break;
      }
      case N.SET: {
        const t = e.getOldValue();
        t != null && this.removeAdapterWithChecks(t, !1, !0);
        const s = e.getNewValue();
        s != null && this.addAdapter(s);
        break;
      }
      case N.ADD: {
        const t = e.getNewValue();
        t != null && this.addAdapter(t);
        break;
      }
      case N.ADD_MANY: {
        const t = e.getNewValue();
        if (t)
          for (const s of t)
            this.addAdapter(s);
        break;
      }
      case N.REMOVE: {
        const t = e.getOldValue();
        if (t != null) {
          const s = this.isResource(e.getNotifier()), r = e.getFeature() != null;
          this.removeAdapterWithChecks(t, s, r);
        }
        break;
      }
      case N.REMOVE_MANY: {
        const t = this.isResource(e.getNotifier()), s = e.getFeature() != null, r = e.getOldValue();
        if (r)
          for (const n of r)
            this.removeAdapterWithChecks(n, t, s);
        break;
      }
    }
  }
  /**
   * Handles installation of the adapter by adding the adapter to each of the directly contained objects.
   */
  setTarget(e) {
    if (e === null) {
      this.target = null;
      return;
    }
    this.isEObject(e) ? this.setTargetEObject(e) : this.isResource(e) ? this.setTargetResource(e) : this.isResourceSet(e) ? this.setTargetResourceSet(e) : this.basicSetTarget(e);
  }
  /**
   * Actually sets the target by calling super.
   */
  basicSetTarget(e) {
    this.target = e;
  }
  /**
   * Handles installation of the adapter on an EObject.
   */
  setTargetEObject(e) {
    if (this.basicSetTarget(e), this.useRecursion()) {
      const t = e.eContents();
      for (const s of t)
        this.addAdapter(s);
    } else this.iterating || (this.iterating = !0, this.addAdapterToAllContents(e), this.iterating = !1);
  }
  /**
   * Handles installation of the adapter on a Resource.
   */
  setTargetResource(e) {
    this.basicSetTarget(e);
    const t = e.getContents();
    for (const s of t)
      this.addAdapter(s);
  }
  /**
   * Handles installation of the adapter on a ResourceSet.
   */
  setTargetResourceSet(e) {
    this.basicSetTarget(e);
    const t = e.getResources();
    for (const s of t)
      this.addAdapter(s);
  }
  /**
   * Handles undoing the installation of the adapter.
   */
  unsetTarget(e) {
    this.isEObject(e) ? this.unsetTargetEObject(e) : this.isResource(e) ? this.unsetTargetResource(e) : this.isResourceSet(e) ? this.unsetTargetResourceSet(e) : this.basicUnsetTarget(e);
  }
  /**
   * Actually unsets the target.
   */
  basicUnsetTarget(e) {
    this.target === e && (this.target = null);
  }
  /**
   * Handles undoing the installation of the adapter from an EObject.
   */
  unsetTargetEObject(e) {
    if (this.basicUnsetTarget(e), this.useRecursion()) {
      const t = e.eContents();
      for (const s of t)
        this.removeAdapterWithChecks(s, !1, !0);
    } else this.iterating || (this.iterating = !0, this.removeAdapterFromAllContents(e), this.iterating = !1);
  }
  /**
   * Handles undoing the installation of the adapter from a Resource.
   */
  unsetTargetResource(e) {
    this.basicUnsetTarget(e);
    const t = e.getContents();
    for (const s of t)
      this.removeAdapterWithChecks(s, !0, !1);
  }
  /**
   * Handles undoing the installation of the adapter from a ResourceSet.
   */
  unsetTargetResourceSet(e) {
    this.basicUnsetTarget(e);
    const t = e.getResources();
    for (const s of t)
      this.removeAdapterWithChecks(s, !1, !1);
  }
  /**
   * Adds this adapter to the notifier if not already present.
   */
  addAdapter(e) {
    const t = e.eAdapters();
    t.includes(this) || (t.push(this), this.isEObject(e) && this.setTargetEObject(e));
  }
  /**
   * Removes this adapter from the notifier with optional container/resource checks.
   */
  removeAdapterWithChecks(e, t, s) {
    if ((t || s) && this.isEObject(e)) {
      const r = e;
      if (s) {
        const n = r.eResource();
        if (n && this.hasAdapter(n))
          return;
      }
      if (t) {
        const n = r.eContainer();
        if (n && this.hasAdapter(n))
          return;
      }
    }
    this.removeAdapter(e);
  }
  /**
   * Removes this adapter from the notifier.
   */
  removeAdapter(e) {
    const t = e.eAdapters(), s = t.indexOf(this);
    s !== -1 && t.splice(s, 1);
  }
  /**
   * Checks if this adapter is attached to the notifier.
   */
  hasAdapter(e) {
    return e.eAdapters().includes(this);
  }
  /**
   * Recursively adds this adapter to all contents of an EObject.
   */
  addAdapterToAllContents(e) {
    const t = [e];
    for (; t.length > 0; ) {
      const r = t.pop().eContents();
      for (const n of r)
        this.hasAdapter(n) || (this.addAdapter(n), t.push(n));
    }
  }
  /**
   * Recursively removes this adapter from all contents of an EObject.
   */
  removeAdapterFromAllContents(e) {
    const t = [e];
    for (; t.length > 0; ) {
      const r = t.pop().eContents();
      for (const n of r)
        this.removeAdapterWithChecks(n, !1, !0), t.push(n);
    }
  }
  // Type guard helpers
  isEObject(e) {
    return e && typeof e.eClass == "function" && typeof e.eContents == "function";
  }
  isResource(e) {
    return e && typeof e.getContents == "function" && typeof e.getURI == "function";
  }
  isResourceSet(e) {
    return e && typeof e.getResources == "function" && typeof e.createResource == "function";
  }
  isEReference(e) {
    return e && typeof e.isContainment == "function";
  }
}
class Tr {
  constructor() {
    this._getEcorePackage = null;
  }
  /**
   * Register the getEcorePackage function
   */
  register(e) {
    this._getEcorePackage = e;
  }
  /**
   * Get the EClass for EObject
   */
  getEObjectClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEObjectClass();
  }
  /**
   * Get the EClass for EClass
   */
  getEClassClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEClassClass();
  }
  /**
   * Get the EClass for EPackage
   */
  getEPackageClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEPackageClass();
  }
  /**
   * Get the EClass for EFactory
   */
  getEFactoryClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEFactoryClass();
  }
  /**
   * Get the EClass for EAttribute
   */
  getEAttributeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEAttributeClass();
  }
  /**
   * Get the EClass for EReference
   */
  getEReferenceClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEReferenceClass();
  }
  /**
   * Get the EClass for EStructuralFeature
   */
  getEStructuralFeatureClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEStructuralFeatureClass();
  }
  /**
   * Get the EClass for EDataType
   */
  getEDataTypeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEDataTypeClass();
  }
  /**
   * Get the EClass for EOperation
   */
  getEOperationClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEOperationClass();
  }
  /**
   * Get the EClass for EParameter
   */
  getEParameterClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEParameterClass();
  }
  /**
   * Get the EClass for EGenericType
   */
  getEGenericTypeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEGenericTypeClass();
  }
  /**
   * Get the EClass for ETypeParameter
   */
  getETypeParameterClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getETypeParameterClass();
  }
  /**
   * Get the EClass for EAnnotation
   */
  getEAnnotationClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEAnnotationClass();
  }
  /**
   * Get the EClass for EStringToStringMapEntry
   */
  getEStringToStringMapEntryClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEStringToStringMapEntryClass();
  }
  /**
   * Get the EClass for EEnum
   */
  getEEnumClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEEnumClass();
  }
  /**
   * Get the EClass for EEnumLiteral
   */
  getEEnumLiteralClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEEnumLiteralClass();
  }
  /**
   * Check if registry is initialized
   */
  isRegistered() {
    return this._getEcorePackage !== null;
  }
}
const x = new Tr();
class b extends K {
  constructor() {
    super(...arguments), this._name = null, this.abstract_ = !1, this.interface_ = !1, this.eSuperTypes = [], this._eStructuralFeatures = null, this.eOperations = [], this.ePackage = null, this.instanceClassName = null, this.instanceClass = null, this.featureID = 0, this.eTypeParameters = [], this.eGenericSuperTypes = [], this.eAnnotations = [], this.xmlNameToFeature = /* @__PURE__ */ new Map();
  }
  // Public getter for PrimeVue compatibility (optionLabel="name")
  get name() {
    return this._name;
  }
  getName() {
    return this._name;
  }
  setName(e) {
    this._name = e;
  }
  isAbstract() {
    return this.abstract_;
  }
  setAbstract(e) {
    this.abstract_ = e;
  }
  isInterface() {
    return this.interface_;
  }
  setInterface(e) {
    this.interface_ = e;
  }
  getESuperTypes() {
    return this.eSuperTypes;
  }
  getEAllSuperTypes() {
    const e = [], t = /* @__PURE__ */ new Set(), s = (r) => {
      for (const n of r.getESuperTypes())
        t.has(n) || (t.add(n), s(n), e.push(n));
    };
    return s(this), e;
  }
  getEIDAttribute() {
    for (const e of this.getEAllAttributes())
      if (e.isID())
        return e;
    return null;
  }
  getEStructuralFeatures() {
    if (this._eStructuralFeatures === null) {
      const e = this, t = new vt(this, () => {
        if (x.isRegistered())
          try {
            const s = x.getEClassClass();
            if (s !== e && s instanceof b && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = V(t);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    const e = [];
    for (const t of this.getEAllSuperTypes())
      e.push(...t.getEStructuralFeatures());
    return e.push(...this.getEStructuralFeatures()), e;
  }
  getEAttributes() {
    return this.getEStructuralFeatures().filter((e) => this.isAttribute(e));
  }
  getEAllAttributes() {
    return this.getEAllStructuralFeatures().filter((e) => this.isAttribute(e));
  }
  getEReferences() {
    return this.getEStructuralFeatures().filter((e) => this.isReference(e));
  }
  getEAllReferences() {
    return this.getEAllStructuralFeatures().filter((e) => this.isReference(e));
  }
  getEAllContainments() {
    return this.getEAllReferences().filter((e) => e.isContainment());
  }
  getEOperations() {
    return this.eOperations;
  }
  getEAllOperations() {
    const e = [...this.eOperations];
    for (const t of this.getEAllSuperTypes())
      e.push(...t.getEOperations());
    return e;
  }
  getEStructuralFeature(e) {
    if (typeof e == "string") {
      const t = this.getEAllStructuralFeatures().find((r) => r.getName() === e);
      if (t)
        return t;
      const s = this.xmlNameToFeature.get(e);
      if (s)
        return s;
      for (const r of this.getEAllSuperTypes())
        if (r instanceof b) {
          const n = r.xmlNameToFeature.get(e);
          if (n)
            return n;
        }
      return null;
    } else
      return this.getEAllStructuralFeatures()[e] || null;
  }
  /**
   * Register an XML serialization name for a feature (from ExtendedMetaData annotations)
   */
  registerXmlName(e, t) {
    this.xmlNameToFeature.set(e, t);
  }
  isSuperTypeOf(e) {
    return e.getEAllSuperTypes().includes(this);
  }
  getFeatureCount() {
    return this.getEAllStructuralFeatures().length;
  }
  getFeatureID(e) {
    return this.getEAllStructuralFeatures().indexOf(e);
  }
  getEOperation(e) {
    return this.getEAllOperations()[e] || null;
  }
  getOperationCount() {
    return this.getEAllOperations().length;
  }
  getOperationID(e) {
    return this.getEAllOperations().indexOf(e);
  }
  // EClassifier methods
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(e) {
    this.instanceClassName = e;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(e) {
    this.instanceClass = e;
  }
  getDefaultValue() {
    return null;
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(e) {
    this.instanceClassName = e;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(e) {
    if (!e || typeof e != "object" || !("eClass" in e))
      return !1;
    const t = e.eClass();
    return t === this || this.isSuperTypeOf(t);
  }
  getClassifierID() {
    return this.ePackage ? this.ePackage.getEClassifiers().indexOf(this) : -1;
  }
  // Helpers
  isAttribute(e) {
    return "getEAttributeType" in e;
  }
  isReference(e) {
    return "getEReferenceType" in e;
  }
  /**
   * Add feature to this class.
   * Uses the EList's add() method which automatically:
   * - Sets the container (eSetContainer)
   * - Sets the inverse reference (eContainingClass)
   * - Fires notifications for adapters
   * - Assigns a featureID
   */
  addFeature(e) {
    this.getEStructuralFeatures().add(e);
  }
  /**
   * Add operation to this class
   */
  addOperation(e) {
    this.eOperations.push(e);
  }
  /**
   * Add super type
   */
  addSuperType(e) {
    this.eSuperTypes.push(e);
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEClassClass();
  }
  /**
   * Override eGet to handle class-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "abstract":
        return this.abstract_;
      case "interface":
        return this.interface_;
      case "eSuperTypes":
        return this.eSuperTypes;
      case "eStructuralFeatures":
        return this.getEStructuralFeatures();
      case "eOperations":
        return this.eOperations;
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eGenericSuperTypes":
        return this.eGenericSuperTypes;
      case "eAnnotations":
        return this.eAnnotations;
      case "instanceClassName":
        return this.instanceClassName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle class-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this._name = t, super.eSet(e, t);
        break;
      case "abstract":
        this.abstract_ = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "interface":
        this.interface_ = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eSuperTypes":
        Array.isArray(t) && (this.eSuperTypes = t), super.eSet(e, t);
        break;
      case "eStructuralFeatures":
        const r = this.getEStructuralFeatures();
        r.clear(), Array.isArray(t) ? r.addAll(t) : t && typeof t[Symbol.iterator] == "function" && r.addAll([...t]);
        break;
      case "eOperations":
        Array.isArray(t) && (this.eOperations = t), super.eSet(e, t);
        break;
      case "eTypeParameters":
        Array.isArray(t) && (this.eTypeParameters = t), super.eSet(e, t);
        break;
      case "eGenericSuperTypes":
        Array.isArray(t) && (this.eGenericSuperTypes = t), super.eSet(e, t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t), super.eSet(e, t);
        break;
      case "instanceClassName":
        this.instanceClassName = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Nr {
  constructor(e) {
    this.eClass = new b(), this.eClass.setName(e);
  }
  abstract(e = !0) {
    return this.eClass.setAbstract(e), this;
  }
  interface(e = !0) {
    return this.eClass.setInterface(e), this;
  }
  superType(e) {
    return this.eClass.addSuperType(e), this;
  }
  feature(e) {
    return this.eClass.addFeature(e), this;
  }
  operation(e) {
    return this.eClass.addOperation(e), this;
  }
  build() {
    return this.eClass;
  }
}
class Sr {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (p) => p.toLowerCase() === "true",
      toString: (p) => String(p)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (p) => parseInt(p, 10),
      toString: (p) => String(p)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (p) => {
        const E = parseInt(p, 10);
        return Math.abs(E) > Number.MAX_SAFE_INTEGER ? BigInt(p) : E;
      },
      toString: (p) => String(p)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (p) => parseFloat(p),
      toString: (p) => String(p)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const n = {
      fromString: (p) => p,
      toString: (p) => p ?? ""
    };
    this.registerByClassName("java.lang.String", n), this.registerByClassName("java.lang.Object", n), this.registerByName("EString", n);
    const i = {
      fromString: (p) => p.charAt(0) || "",
      toString: (p) => p ?? ""
    };
    this.registerByClassName("char", i), this.registerByClassName("java.lang.Character", i), this.registerByName("EChar", i), this.registerByName("ECharacterObject", i);
    const u = {
      fromString: (p) => new Date(p),
      toString: (p) => p?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", u), this.registerByName("EDate", u);
    const l = {
      fromString: (p) => p,
      // Keep as string to preserve precision
      toString: (p) => p ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", l), this.registerByClassName("java.math.BigInteger", l), this.registerByName("EBigDecimal", l), this.registerByName("EBigInteger", l);
    const h = {
      fromString: (p) => {
        if (typeof atob == "function") {
          const E = atob(p), C = new Uint8Array(E.length);
          for (let S = 0; S < E.length; S++)
            C[S] = E.charCodeAt(S);
          return C;
        }
        return new Uint8Array(Buffer.from(p, "base64"));
      },
      toString: (p) => typeof btoa == "function" ? btoa(String.fromCharCode(...p)) : Buffer.from(p).toString("base64")
    };
    this.registerByClassName("byte[]", h), this.registerByName("EByteArray", h);
    const d = {
      fromString: (p) => p,
      toString: (p) => String(p ?? "")
    };
    this.registerByName("EFeatureMapEntry", d);
  }
  /**
   * Register a converter by instanceClassName
   */
  registerByClassName(e, t) {
    this.convertersByClassName.set(e, t);
  }
  /**
   * Register a converter by DataType name
   */
  registerByName(e, t) {
    this.convertersByName.set(e, t);
  }
  /**
   * Get converter for a DataType
   */
  getConverter(e) {
    const t = e.getInstanceClassName();
    if (t) {
      const r = this.convertersByClassName.get(t);
      if (r)
        return r;
    }
    const s = e.getName();
    if (s) {
      const r = this.convertersByName.get(s);
      if (r)
        return r;
    }
    return null;
  }
  /**
   * Convert a string literal to a value using the DataType's converter.
   *
   * For an EEnum the string is resolved to the matching EEnumLiteral, and an
   * invalid value throws - same as EFactoryImpl.createFromString in Java EMF.
   * The XMI loader turns that throw into a resource error, so a single bad
   * attribute does not abort the document (see XMLHandler.setFeatureValue).
   */
  createFromString(e, t) {
    if (Te(e)) {
      if (t == null)
        return null;
      const r = this.resolveEEnumLiteral(e, t);
      if (!r)
        throw new Error(`The value '${t}' is not a valid enumerator of '${e.getName()}'`);
      return r.getInstance() ?? r;
    }
    const s = this.getConverter(e);
    return s ? s.fromString(t) : t;
  }
  /**
   * Convert a value to a string literal using the DataType's converter.
   *
   * For an EEnum the literal string is written, not the name - Java EMF
   * serializes enum values via EEnumLiteralImpl.toString(), which is getLiteral().
   */
  convertToString(e, t) {
    if (t == null)
      return "";
    if (Te(e)) {
      const r = this.findEEnumLiteral(e, t);
      if (r)
        return r.getLiteral() ?? "";
    }
    const s = this.getConverter(e);
    return s ? s.toString(t) : String(t);
  }
  /**
   * Resolve a serialized enum value to its EEnumLiteral.
   *
   * Java EMF only ever looks up by literal. We additionally accept the name
   * and the ordinal, because both are unambiguous and both occur in files
   * written by non-conforming serializers - rejecting them would make those
   * models unloadable for no gain. Saving always writes the literal back, so
   * a load/save cycle normalizes the file.
   */
  resolveEEnumLiteral(e, t) {
    const s = e.getEEnumLiteralByLiteral(t);
    if (s)
      return s;
    const r = e.getEEnumLiteral(t);
    if (r)
      return r;
    const n = t.trim();
    return /^-?\d+$/.test(n) ? e.getEEnumLiteral(Number(n)) : null;
  }
  /**
   * Resolve an enum value to its EEnumLiteral. Accepts the literal itself as
   * well as the `instance` a generated enum carries.
   */
  findEEnumLiteral(e, t) {
    if (t && typeof t == "object" && typeof t.getLiteral == "function")
      return t;
    for (const s of e.getELiterals())
      if (s.getInstance() === t)
        return s;
    return null;
  }
  /**
   * Check if a converter is registered for a DataType
   */
  hasConverter(e) {
    return this.getConverter(e) !== null;
  }
  /**
   * Get all registered classNames
   */
  getRegisteredClassNames() {
    return Array.from(this.convertersByClassName.keys());
  }
  /**
   * Get all registered names
   */
  getRegisteredNames() {
    return Array.from(this.convertersByName.keys());
  }
}
const y = new Sr();
class ke {
  constructor() {
    this.ePackage = null, this.creators = /* @__PURE__ */ new Map();
  }
  getEPackage() {
    if (!this.ePackage)
      throw new Error("EPackage not set on factory");
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e, e && typeof e.setEFactoryInstance == "function" && e.setEFactoryInstance(this);
  }
  create(e) {
    const t = this.creators.get(e);
    return t ? t() : this.createDynamic(e);
  }
  /**
   * Create a dynamic EObject instance
   */
  createDynamic(e) {
    if (e.isAbstract())
      throw new Error(`Cannot instantiate abstract class: ${e.getName()}`);
    if (e.isInterface())
      throw new Error(`Cannot instantiate interface: ${e.getName()}`);
    return new st(e);
  }
  createFromString(e, t) {
    return y.createFromString(e, t);
  }
  convertToString(e, t) {
    return y.convertToString(e, t);
  }
  /**
   * Register a creator function for a specific EClass
   */
  registerCreator(e, t) {
    this.creators.set(e, t);
  }
  // EModelElement methods
  getEAnnotations() {
    return [];
  }
  getEAnnotation(e) {
    return null;
  }
  // EObject methods
  eClass() {
    return x.getEFactoryClass();
  }
  eResource() {
    return null;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eIsProxy() {
    return !1;
  }
  eCrossReferences() {
    return [];
  }
  eGet(e) {
    return null;
  }
  eSet(e, t) {
  }
  eIsSet(e) {
    return !1;
  }
  eUnset(e) {
  }
  eInvoke(e, t) {
    return null;
  }
}
class _r extends Z {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && x.isRegistered()) {
      const t = x.getEPackageClass();
      this.feature = t.getEStructuralFeature("eClassifiers");
    }
    return this.feature;
  }
  didAdd(e, t) {
    "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      "setEPackage" in s && typeof s.setEPackage == "function" && s.setEPackage(this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    "setEPackage" in s && typeof s.setEPackage == "function" && s.setEPackage(null), "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(this.pkg), super.didSet(e, t, s);
  }
}
class Ar extends Z {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && x.isRegistered()) {
      const e = x.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof H && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof H && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof H && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof H && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof H && (s.eSuperPackage = null), t instanceof H && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class H extends K {
  /**
   * Constructor
   */
  constructor(e, t) {
    super(), this.name = null, this.nsURI = null, this.nsPrefix = null, this.eFactoryInstance = null, this._eClassifiers = null, this._eSubpackages = null, this.eSuperPackage = null, e && (this.nsURI = e), t && (this.eFactoryInstance = t);
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getNsURI() {
    return this.nsURI;
  }
  setNsURI(e) {
    this.nsURI = e;
  }
  getNsPrefix() {
    return this.nsPrefix;
  }
  setNsPrefix(e) {
    this.nsPrefix = e;
  }
  getEFactoryInstance() {
    if (!this.eFactoryInstance) {
      const e = new ke();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = V(new _r(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = V(new Ar(this))), this._eSubpackages;
  }
  getESuperPackage() {
    return this.eSuperPackage;
  }
  getEClassifier(e) {
    const t = this.getEClassifiers();
    for (const s of t)
      if (typeof s.getName == "function") {
        if (s.getName() === e)
          return s;
      } else if (typeof s.eGet == "function" && typeof s.eClass == "function") {
        const r = s.eClass();
        if (r) {
          const n = r.getEStructuralFeature?.("name");
          if (n && s.eGet(n) === e)
            return s;
        }
      }
    return null;
  }
  /**
   * Add classifier to this package
   */
  addClassifier(e) {
    this.getEClassifiers().add(e);
  }
  /**
   * Add subpackage
   */
  addSubpackage(e) {
    this.getESubpackages().add(e);
  }
  // EObject methods
  getEAnnotations() {
    return [];
  }
  getEAnnotation(e) {
    return null;
  }
  eClass() {
    return x.getEPackageClass();
  }
  /**
   * Override eGet to handle package-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "nsURI":
        return this.nsURI;
      case "nsPrefix":
        return this.nsPrefix;
      case "eClassifiers":
        return this.getEClassifiers();
      case "eSubpackages":
        return this.getESubpackages();
      case "eSuperPackage":
        return this.eSuperPackage;
      case "eFactoryInstance":
        return this.eFactoryInstance;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle package-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "nsURI":
        this.nsURI = t, super.eSet(e, t);
        break;
      case "nsPrefix":
        this.nsPrefix = t, super.eSet(e, t);
        break;
      case "eClassifiers":
        if (Array.isArray(t) || t && typeof t[Symbol.iterator] == "function") {
          const r = this.getEClassifiers();
          r.clear();
          for (const n of t)
            r.add(n);
        }
        break;
      case "eSubpackages":
        if (Array.isArray(t) || t && typeof t[Symbol.iterator] == "function") {
          const r = this.getESubpackages();
          r.clear();
          for (const n of t)
            r.add(n);
        }
        break;
      case "eSuperPackage":
        this.eSuperPackage = t, super.eSet(e, t);
        break;
      case "eFactoryInstance":
        this.eFactoryInstance = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class ct extends H {
  static create(e) {
    const t = new ct(e.nsURI, e.factory);
    return t.setName(e.name), t.setNsPrefix(e.nsPrefix), t;
  }
  /**
   * Builder-style API for adding classifiers
   */
  withClassifier(e) {
    return this.addClassifier(e), this;
  }
}
class lt extends K {
  constructor() {
    super(...arguments), this.name = null, this.changeable = !0, this.volatile = !1, this.transient = !1, this.defaultValueLiteral = null, this.unsettable = !1, this.derived = !1, this.eType = null, this.eGenericType = null, this.eContainingClass = null, this.lowerBound = 0, this.upperBound = 1, this.featureID = -1, this.eAnnotations = [];
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  isChangeable() {
    return this.changeable;
  }
  setChangeable(e) {
    this.changeable = e;
  }
  isVolatile() {
    return this.volatile;
  }
  setVolatile(e) {
    this.volatile = e;
  }
  isTransient() {
    return this.transient;
  }
  setTransient(e) {
    this.transient = e;
  }
  getDefaultValueLiteral() {
    return this.defaultValueLiteral;
  }
  setDefaultValueLiteral(e) {
    this.defaultValueLiteral = e;
  }
  isUnsettable() {
    return this.unsettable;
  }
  setUnsettable(e) {
    this.unsettable = e;
  }
  isDerived() {
    return this.derived;
  }
  setDerived(e) {
    this.derived = e;
  }
  getEType() {
    if (this.eType && L(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), n = r.indexOf("#");
        if (n > 0) {
          const i = r.substring(0, n), u = r.substring(n + 1), l = [X.INSTANCE];
          let h = this.eResource()?.getResourceSet();
          if (!h) {
            let d = this.eContainingClass;
            for (; d; ) {
              if (typeof d.eResource == "function") {
                const p = d.eResource();
                if (p) {
                  h = p.getResourceSet();
                  break;
                }
              }
              d = d.getEPackage?.() ?? d.getESuperPackage?.() ?? d.eContainer?.();
            }
          }
          h && l.push(h.getPackageRegistry());
          for (const d of l) {
            const p = d.getEPackage(i);
            if (p) {
              const D = ge(p, u);
              if (D)
                return this.eType = D, this.eType;
            }
            let E = i;
            const C = E.lastIndexOf("/");
            C >= 0 && (E = E.substring(C + 1));
            const S = E.indexOf(".");
            if (S > 0 && (E = E.substring(0, S)), E)
              for (const D of d.keys()) {
                const U = d.getEPackage(D);
                if (U && U.getName() === E) {
                  const O = ge(U, u);
                  if (O)
                    return this.eType = O, this.eType;
                }
              }
          }
        }
      }
    }
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  setEType(e) {
    this.eType = e;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(e) {
    this.eContainingClass = e;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getFeatureID() {
    return this.featureID;
  }
  setFeatureID(e) {
    this.featureID = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEStructuralFeatureClass();
  }
  /**
   * Override eGet to handle feature-specific properties
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "changeable":
        return this.changeable;
      case "volatile":
        return this.volatile;
      case "transient":
        return this.transient;
      case "defaultValueLiteral":
        return this.defaultValueLiteral;
      case "unsettable":
        return this.unsettable;
      case "derived":
        return this.derived;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle feature-specific properties
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "changeable":
        this.changeable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "volatile":
        this.volatile = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "transient":
        this.transient = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "defaultValueLiteral":
        this.defaultValueLiteral = t, super.eSet(e, t);
        break;
      case "unsettable":
        this.unsettable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "derived":
        this.derived = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eType":
        this.eType = t, super.eSet(e, t);
        break;
      case "eGenericType":
        this.eGenericType = t, super.eSet(e, t);
        break;
      case "lowerBound":
        this.lowerBound = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "upperBound":
        this.upperBound = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class I extends lt {
  constructor() {
    super(...arguments), this.id = !1;
  }
  isID() {
    return this.id;
  }
  setID(e) {
    this.id = e;
  }
  getEAttributeType() {
    const e = this.getEType();
    return !e || !("isSerializable" in e) ? null : e;
  }
  getDefaultValue() {
    const e = this.getDefaultValueLiteral(), t = this.getEAttributeType();
    if (!t)
      return null;
    if (e === null)
      return t.getDefaultValue();
    const s = t.getEPackage()?.getEFactoryInstance();
    return s ? s.createFromString(t, e) : e;
  }
  eClass() {
    return x.getEAttributeClass();
  }
  /**
   * Override eGet to handle attribute-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "iD":
        return this.id;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle attribute-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "iD":
        this.id = t === !0 || t === "true", super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Ir {
  constructor(e, t) {
    this.attr = new I(), this.attr.setName(e), this.attr.setEType(t);
  }
  id(e = !0) {
    return this.attr.setID(e), this;
  }
  required(e = !0) {
    return this.attr.setLowerBound(e ? 1 : 0), this;
  }
  many(e = !0) {
    return this.attr.setUpperBound(e ? -1 : 1), this;
  }
  changeable(e = !0) {
    return this.attr.setChangeable(e), this;
  }
  transient(e = !0) {
    return this.attr.setTransient(e), this;
  }
  derived(e = !0) {
    return this.attr.setDerived(e), this;
  }
  defaultValue(e) {
    return this.attr.setDefaultValueLiteral(e), this;
  }
  build() {
    return this.attr;
  }
}
class P extends lt {
  constructor() {
    super(...arguments), this.containment = !1, this.resolveProxies = !0, this.eOpposite = null, this.eKeys = [];
  }
  isContainment() {
    return this.containment;
  }
  setContainment(e) {
    this.containment = e;
  }
  isContainer() {
    return this.eOpposite ? this.eOpposite.isContainment() : !1;
  }
  isResolveProxies() {
    return this.resolveProxies;
  }
  setResolveProxies(e) {
    this.resolveProxies = e;
  }
  getEOpposite() {
    return this.eOpposite;
  }
  setEOpposite(e) {
    this.eOpposite !== e && (this.eOpposite && this.eOpposite.getEOpposite() === this && (this.eOpposite.eOpposite = null), this.eOpposite = e, e && e.getEOpposite() !== this && e.setEOpposite(this));
  }
  getEReferenceType() {
    const e = this.getEType();
    if (!e)
      throw new Error("Reference type not set");
    if (!("getEStructuralFeatures" in e))
      throw new Error("Reference type must be EClass");
    return e;
  }
  getEKeys() {
    return this.eKeys;
  }
  addEKey(e) {
    this.eKeys.push(e);
  }
  getDefaultValue() {
    return null;
  }
  eClass() {
    return x.getEReferenceClass();
  }
  /**
   * Override eGet to handle reference-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "containment":
        return this.containment;
      case "resolveProxies":
        return this.resolveProxies;
      case "eOpposite":
        return this.eOpposite;
      case "eKeys":
        return this.eKeys;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle reference-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "containment":
        this.containment = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "resolveProxies":
        this.resolveProxies = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eOpposite":
        this.eOpposite = t, super.eSet(e, t);
        break;
      case "eKeys":
        Array.isArray(t) && (this.eKeys = t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class br {
  constructor(e, t) {
    this.ref = new P(), this.ref.setName(e), this.ref.setEType(t);
  }
  containment(e = !0) {
    return this.ref.setContainment(e), this;
  }
  required(e = !0) {
    return this.ref.setLowerBound(e ? 1 : 0), this;
  }
  many(e = !0) {
    return this.ref.setUpperBound(e ? -1 : 1), this;
  }
  changeable(e = !0) {
    return this.ref.setChangeable(e), this;
  }
  resolveProxies(e = !0) {
    return this.ref.setResolveProxies(e), this;
  }
  opposite(e) {
    return this.ref.setEOpposite(e), this;
  }
  key(e) {
    return this.ref.addEKey(e), this;
  }
  build() {
    return this.ref;
  }
}
class R extends K {
  constructor() {
    super(...arguments), this.name = null, this.instanceClassName = null, this.instanceClass = null, this.ePackage = null, this.serializable = !0, this.eAnnotations = [], this.eTypeParameters = [];
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(e) {
    this.instanceClassName = e;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(e) {
    this.instanceClass = e;
  }
  getDefaultValue() {
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return !1;
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
        return 0;
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return 0;
      case "java.lang.String":
        return null;
      default:
        return null;
    }
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(e) {
    this.instanceClassName = e;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(e) {
    const t = typeof e;
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return t === "boolean";
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return t === "number";
      case "java.lang.String":
        return t === "string";
      default:
        return !1;
    }
  }
  getClassifierID() {
    return this.ePackage ? this.ePackage.getEClassifiers().indexOf(this) : -1;
  }
  isSerializable() {
    return this.serializable;
  }
  setSerializable(e) {
    this.serializable = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEDataTypeClass();
  }
  /**
   * Override eGet to handle datatype-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "instanceClassName":
        return this.instanceClassName;
      case "serializable":
        return this.serializable;
      case "eAnnotations":
        return this.eAnnotations;
      case "eTypeParameters":
        return this.eTypeParameters;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle datatype-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "instanceClassName":
        this.instanceClassName = t, super.eSet(e, t);
        break;
      case "serializable":
        this.serializable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t), super.eSet(e, t);
        break;
      case "eTypeParameters":
        Array.isArray(t) && (this.eTypeParameters = t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class se {
}
se.EString = (() => {
  const c = new R();
  return c.setName("EString"), c.setInstanceClassName("java.lang.String"), c;
})();
se.EInt = (() => {
  const c = new R();
  return c.setName("EInt"), c.setInstanceClassName("int"), c;
})();
se.EBoolean = (() => {
  const c = new R();
  return c.setName("EBoolean"), c.setInstanceClassName("boolean"), c;
})();
se.EFloat = (() => {
  const c = new R();
  return c.setName("EFloat"), c.setInstanceClassName("float"), c;
})();
se.EDouble = (() => {
  const c = new R();
  return c.setName("EDouble"), c.setInstanceClassName("double"), c;
})();
se.ELong = (() => {
  const c = new R();
  return c.setName("ELong"), c.setInstanceClassName("long"), c;
})();
se.EDate = (() => {
  const c = new R();
  return c.setName("EDate"), c.setInstanceClassName("java.util.Date"), c;
})();
class ds {
  constructor(e, t) {
    this.resources = [], this.packageRegistry = e || this.createDefaultPackageRegistry(), this.resourceFactoryRegistry = t || fe.INSTANCE_FACTORY_REGISTRY, this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(e, t) {
    const s = this.resources.find((i) => {
      const u = i.getURI();
      return u && u.toString() === e.toString();
    });
    if (s)
      return s;
    const r = this.delegatedGetResource(e, t);
    if (r)
      return r;
    if (!t)
      return null;
    const n = this.createResource(e);
    return n && n.load().catch((i) => {
      console.error(`Failed to load resource ${e}:`, i);
    }), n;
  }
  /**
   * Returns a resolved resource available outside of the resource set.
   * Looks up the URI in the package registry.
   * This is called by getResource when the URI cannot be resolved
   * based on the existing contents of the resource set.
   */
  delegatedGetResource(e, t) {
    const s = e.toString(), r = this.packageRegistry.getEPackage(s);
    if (r) {
      if ("eResource" in r && typeof r.eResource == "function") {
        const n = r.eResource();
        if (n)
          return n;
      }
      return this.createSyntheticResourceForPackage(r, e);
    }
    return null;
  }
  /**
   * Creates a synthetic resource for a package that doesn't have one.
   * This allows resolving fragment references like //EString within the package.
   */
  createSyntheticResourceForPackage(e, t) {
    const s = this.resources.find((n) => "_syntheticPackage" in n ? n._syntheticPackage === e : !1);
    if (s)
      return s;
    const r = new Rr(t, e);
    return r.setResourceSet(this), this.resources.push(r), r;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(e, t) {
    const s = this.resources.find((i) => {
      const u = i.getURI();
      return u && u.toString() === e.toString();
    });
    if (s)
      return s;
    const r = this.delegatedGetResource(e, t);
    if (r)
      return r;
    if (!t)
      return null;
    const n = this.createResource(e);
    return n && await n.load(), n;
  }
  createResource(e) {
    const t = this.resourceFactoryRegistry.getFactory(e);
    let s;
    return t ? s = t.createResource(e) : s = new De(e), "setResourceSet" in s && s.setResourceSet(this), this.resources.push(s), s;
  }
  getEObject(e, t) {
    const s = e.fragment();
    if (!s)
      return null;
    const r = T.createURI(e.toString().split("#")[0]), n = this.getResource(r, t);
    return n ? n.getEObject(s) : null;
  }
  getPackageRegistry() {
    return this.packageRegistry;
  }
  setPackageRegistry(e) {
    this.packageRegistry = e;
  }
  getResourceFactoryRegistry() {
    return this.resourceFactoryRegistry;
  }
  setResourceFactoryRegistry(e) {
    this.resourceFactoryRegistry = e;
  }
  getURIConverter() {
    return this.uriConverter;
  }
  setURIConverter(e) {
    this.uriConverter = e;
  }
  /**
   * Iteratively resolves proxy references by loading packages via getResourceAsync.
   * Loops until no more progress is made or maxDepth is reached.
   */
  async resolveProxiesAsync(e = -1) {
    let t = 0, s = !0, r = 0;
    for (; s && !(e >= 0 && r >= e); ) {
      s = !1;
      const n = this.collectUnresolvedNsURIs();
      if (n.size === 0)
        break;
      for (const i of n)
        try {
          const u = T.createURI(i);
          (await this.getResourceAsync(u, !0))?.isLoaded() && (t++, s = !0);
        } catch (u) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${i}:`, u);
        }
      r++;
    }
    return t;
  }
  /**
   * Collects nsURIs from unresolved proxy references across all resources.
   */
  collectUnresolvedNsURIs() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.resources)
      for (const s of t.getContents())
        this.collectProxyURIs(s, e);
    return e;
  }
  /**
   * Recursively walks EObject tree and collects nsURIs from proxy references.
   */
  collectProxyURIs(e, t) {
    const s = e.eClass();
    if (s) {
      for (const r of s.getEAllReferences())
        try {
          const n = e.eGet(r);
          if (!n)
            continue;
          if (r.isMany() && Array.isArray(n))
            for (const i of n)
              this.checkProxy(i, t);
          else typeof n == "object" && "eClass" in n && this.checkProxy(n, t);
        } catch {
        }
      for (const r of e.eContents())
        this.collectProxyURIs(r, t);
    }
  }
  /**
   * Checks if an EObject is a proxy and extracts the nsURI.
   */
  checkProxy(e, t) {
    if (typeof e.eIsProxy == "function" && e.eIsProxy()) {
      const s = e.eProxyURI?.();
      if (s) {
        const n = (typeof s == "string" ? s : s.toString()).split("#")[0];
        n && !this.packageRegistry.has(n) && t.add(n);
      }
    }
  }
  /**
   * Create default package registry that delegates to global EPackageRegistry.INSTANCE
   */
  createDefaultPackageRegistry() {
    const e = /* @__PURE__ */ new Map();
    function t(s) {
      for (const r of s.getESubpackages()) {
        const n = r.getNsURI();
        n && e.set(n, r), t(r);
      }
    }
    return {
      getEPackage(s) {
        const r = e.get(s);
        return r ? "getEPackage" in r ? r.getEPackage() : r : X.INSTANCE.getEPackage(s);
      },
      getEFactory(s) {
        const r = this.getEPackage(s);
        return r ? r.getEFactoryInstance() : null;
      },
      get(s) {
        return e.get(s) || X.INSTANCE.get(s);
      },
      set(s, r) {
        e.set(s, r), r && !("getEPackage" in r) && typeof r.getESubpackages == "function" && t(r);
      },
      registerPackage(s) {
        this.set(xe(s), s);
      },
      delete(s) {
        return e.delete(s);
      },
      has(s) {
        return e.has(s) || X.INSTANCE.has(s);
      },
      keys() {
        return e.keys();
      },
      values() {
        return e.values();
      }
    };
  }
  /**
   * Create default URI converter
   */
  createDefaultURIConverter() {
    const e = /* @__PURE__ */ new Map();
    return {
      normalize(t) {
        for (const [s, r] of e.entries()) {
          const n = s.toString(), i = t.toString();
          if (i.startsWith(n)) {
            const u = i.substring(n.length);
            return T.createURI(r.toString() + u);
          }
        }
        return t;
      },
      async createInputStream(t) {
        throw new Error("createInputStream not implemented");
      },
      async createOutputStream(t) {
        throw new Error("createOutputStream not implemented");
      },
      async exists(t) {
        return !1;
      },
      async delete(t) {
        throw new Error("delete not implemented");
      },
      getURIMap() {
        return e;
      }
    };
  }
}
class Rr {
  constructor(e, t) {
    this.resourceSet = null, this.uri = e, this._syntheticPackage = t;
    const s = new Z(null, null);
    s.add(t), this._contents = V(s);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(e) {
    this.resourceSet = e;
  }
  getURI() {
    return this.uri;
  }
  setURI(e) {
    e && (this.uri = e);
  }
  getContents() {
    return this._contents;
  }
  getAllContents() {
    return this._contents.toArray()[Symbol.iterator]();
  }
  getEObject(e) {
    let t = e;
    for (; t.startsWith("/"); )
      t = t.substring(1);
    if (!t)
      return this._syntheticPackage;
    const s = t.split("/"), r = ge(this._syntheticPackage, t);
    if (r)
      return r;
    if (s.length >= 2) {
      let n = this._syntheticPackage;
      for (let l = 0; l < s.length - 2; l++) {
        const h = n.getESubpackages();
        let d = null;
        for (let p = 0; p < h.length; p++)
          if (h.get(p).getName() === s[l]) {
            d = h.get(p);
            break;
          }
        if (!d)
          return null;
        n = d;
      }
      const i = s[s.length - 2], u = n.getEClassifier(i);
      if (u && "getEStructuralFeature" in u) {
        const l = u.getEStructuralFeature(s[s.length - 1]);
        if (l)
          return l;
      }
    }
    return null;
  }
  getURIFragment(e) {
    if (e === this._syntheticPackage)
      return "/";
    for (const t of this._syntheticPackage.getEClassifiers())
      if (t === e)
        return "//" + t.getName();
    return "";
  }
  async save(e) {
  }
  async load(e) {
  }
  isLoaded() {
    return !0;
  }
  unload() {
  }
  isModified() {
    return !1;
  }
  setModified(e) {
  }
  getErrors() {
    return [];
  }
  getWarnings() {
    return [];
  }
}
class ms extends K {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = x.getEAnnotationClass().getEStructuralFeature("details"), s = x.getEStringToStringMapEntryClass();
      this._detailsMap = Ut(this, t, s);
    }
    return this._detailsMap;
  }
  getSource() {
    return this.source;
  }
  setSource(e) {
    this.source = e;
  }
  getDetails() {
    return this.getOrCreateDetailsMap();
  }
  getEModelElement() {
    return this.eModelElement;
  }
  setEModelElement(e) {
    this.eModelElement = e;
  }
  getContents() {
    return this.contents;
  }
  getReferences() {
    return this.references;
  }
  // EModelElement methods
  getEAnnotations() {
    return [];
  }
  getEAnnotation(e) {
    return null;
  }
  eClass() {
    return x.getEAnnotationClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "source":
        return this.source;
      case "details":
        return this.getOrCreateDetailsMap();
      case "eModelElement":
        return this.eModelElement;
      case "contents":
        return this.contents;
      case "references":
        return this.references;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "source":
        this.source = t, super.eSet(e, t);
        break;
      case "details":
        if (t instanceof Map) {
          const r = this.getOrCreateDetailsMap();
          r.clear();
          for (const [n, i] of t)
            r.putByKey(n, i);
        }
        super.eSet(e, t);
        break;
      case "eModelElement":
        this.eModelElement = t, super.eSet(e, t);
        break;
      case "contents":
        Array.isArray(t) && (this.contents = t), super.eSet(e, t);
        break;
      case "references":
        Array.isArray(t) && (this.references = t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class ht extends K {
  constructor() {
    super(...arguments), this._name = null, this._value = 0, this.instance = null, this.literal = null, this.eEnum = null, this.eAnnotations = [];
  }
  getName() {
    return this._name;
  }
  setName(e) {
    this._name = e;
  }
  getValue() {
    return this._value;
  }
  setValue(e) {
    this._value = e;
  }
  getInstance() {
    return this.instance;
  }
  setInstance(e) {
    this.instance = e;
  }
  /**
   * Returns the literal string, falling back to the name when no explicit
   * literal is set. In .ecore files the `literal` attribute is usually
   * omitted, so without this fallback lookups by literal would never match.
   */
  getLiteral() {
    return this.literal ?? this._name;
  }
  setLiteral(e) {
    this.literal = e;
  }
  getEEnum() {
    return this.eEnum;
  }
  setEEnum(e) {
    this.eEnum = e;
  }
  // EModelElement methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEEnumLiteralClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this._name;
      case "value":
        return this._value;
      case "instance":
        return this.instance;
      case "literal":
        return this.literal;
      case "eEnum":
        return this.eEnum;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this._name = t, super.eSet(e, t);
        break;
      case "value":
        this._value = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "instance":
        this.instance = t, super.eSet(e, t);
        break;
      case "literal":
        this.literal = t, super.eSet(e, t);
        break;
      case "eEnum":
        this.eEnum = t, super.eSet(e, t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Es extends R {
  constructor() {
    super(...arguments), this.eLiterals = [];
  }
  getELiterals() {
    return this.eLiterals;
  }
  /**
   * Returns the literal with the given name or ordinal value.
   */
  getEEnumLiteral(e) {
    return typeof e == "string" ? this.eLiterals.find((t) => t.getName() === e) || null : this.eLiterals.find((t) => t.getValue() === e) || null;
  }
  /**
   * Returns the literal with the given literal string.
   */
  getEEnumLiteralByLiteral(e) {
    return this.eLiterals.find((t) => t.getLiteral() === e) || null;
  }
  /**
   * Add a literal to this enum.
   */
  addLiteral(e) {
    e.setEEnum(this), this.eLiterals.push(e);
  }
  eClass() {
    return x.getEEnumClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "eLiterals":
        return this.eLiterals;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "eLiterals":
        if (Array.isArray(t)) {
          this.eLiterals = t;
          for (const r of this.eLiterals)
            r instanceof ht && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class ft extends K {
  constructor() {
    super(...arguments), this.name = null, this.eContainingClass = null, this.eType = null, this.eParameters = [], this.eExceptions = [], this.eAnnotations = [], this.eGenericType = null, this.eTypeParameters = [], this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(e) {
    this.eContainingClass = e;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  setEType(e) {
    this.eType = e;
  }
  getEParameters() {
    return this.eParameters;
  }
  addParameter(e) {
    this.eParameters.push(e);
  }
  getEExceptions() {
    return this.eExceptions;
  }
  addException(e) {
    this.eExceptions.push(e);
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getOperationID() {
    return this.eContainingClass ? this.eContainingClass.getOperationID(this) : -1;
  }
  isOverrideOf(e) {
    if (this.name !== e.getName())
      return !1;
    const t = this.eParameters, s = e.getEParameters();
    if (t.length !== s.length)
      return !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r].getEType(), i = s[r].getEType();
      if (n !== i)
        return !1;
    }
    return !this.eContainingClass || !e.getEContainingClass() ? !1 : this.eContainingClass.getEAllSuperTypes().includes(e.getEContainingClass());
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(e) {
    this.ordered = e;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(e) {
    this.unique = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEOperationClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eParameters":
        return this.eParameters;
      case "eExceptions":
        return this.eExceptions;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eType":
        this.eType = t;
        break;
      case "eGenericType":
        this.eGenericType = t;
        break;
      case "eTypeParameters":
        Array.isArray(t) && (this.eTypeParameters = t);
        break;
      case "eParameters":
        Array.isArray(t) && (this.eParameters = t);
        break;
      case "eExceptions":
        Array.isArray(t) && (this.eExceptions = t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t);
        break;
      case "ordered":
        this.ordered = t === !0 || t === "true";
        break;
      case "unique":
        this.unique = t === !0 || t === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(t);
        break;
      case "upperBound":
        this.upperBound = Number(t);
        break;
    }
    super.eSet(e, t);
  }
}
class Pr {
  constructor(e, t) {
    this.op = new ft(), this.op.setName(e), t && this.op.setEType(t);
  }
  parameter(e) {
    return this.op.addParameter(e), this;
  }
  exception(e) {
    return this.op.addException(e), this;
  }
  required(e = !0) {
    return this.op.setLowerBound(e ? 1 : 0), this;
  }
  many(e = !0) {
    return this.op.setUpperBound(e ? -1 : 1), this;
  }
  build() {
    return this.op;
  }
}
class ys extends K {
  constructor() {
    super(...arguments), this.name = null, this.eType = null, this.eOperation = null, this.eAnnotations = [], this.eGenericType = null, this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  setEType(e) {
    this.eType = e;
  }
  getEOperation() {
    return this.eOperation;
  }
  setEOperation(e) {
    this.eOperation = e;
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(e) {
    this.ordered = e;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(e) {
    this.unique = e;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getEParameterClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eType":
        this.eType = t;
        break;
      case "eGenericType":
        this.eGenericType = t;
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t);
        break;
      case "ordered":
        this.ordered = t === !0 || t === "true";
        break;
      case "unique":
        this.unique = t === !0 || t === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(t);
        break;
      case "upperBound":
        this.upperBound = Number(t);
        break;
    }
    super.eSet(e, t);
  }
}
class Cs extends K {
  constructor() {
    super(...arguments), this.eClassifier = null, this.eTypeParameter = null, this.eTypeArguments = [], this.eUpperBound = null, this.eLowerBound = null;
  }
  getEClassifier() {
    return this.eClassifier;
  }
  setEClassifier(e) {
    this.eClassifier = e;
  }
  getETypeParameter() {
    return this.eTypeParameter;
  }
  setETypeParameter(e) {
    this.eTypeParameter = e;
  }
  getETypeArguments() {
    return this.eTypeArguments;
  }
  getEUpperBound() {
    return this.eUpperBound;
  }
  setEUpperBound(e) {
    this.eUpperBound = e;
  }
  getELowerBound() {
    return this.eLowerBound;
  }
  setELowerBound(e) {
    this.eLowerBound = e;
  }
  /**
   * The erasure of this generic type. For a classifier reference that is the
   * classifier itself; for a type parameter it is the erasure of its first
   * bound, mirroring Java EMF's EGenericTypeImpl.getERawType().
   */
  getERawType() {
    if (this.eClassifier)
      return this.eClassifier;
    if (this.eTypeParameter) {
      const e = this.eTypeParameter.getEBounds();
      if (e.length > 0)
        return e[0].getERawType();
    }
    return this.eUpperBound ? this.eUpperBound.getERawType() : x.getEObjectClass();
  }
  eClass() {
    return x.getEGenericTypeClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "eClassifier":
        return this.eClassifier;
      case "eTypeParameter":
        return this.eTypeParameter;
      case "eTypeArguments":
        return this.eTypeArguments;
      case "eUpperBound":
        return this.eUpperBound;
      case "eLowerBound":
        return this.eLowerBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "eClassifier":
        this.eClassifier = t;
        break;
      case "eTypeParameter":
        this.eTypeParameter = t;
        break;
      case "eTypeArguments":
        Array.isArray(t) && (this.eTypeArguments = t);
        break;
      case "eUpperBound":
        this.eUpperBound = t;
        break;
      case "eLowerBound":
        this.eLowerBound = t;
        break;
    }
    super.eSet(e, t);
  }
}
class Ts extends K {
  constructor() {
    super(...arguments), this.name = null, this.eBounds = [], this.eAnnotations = [];
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEBounds() {
    return this.eBounds;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return x.getETypeParameterClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eBounds":
        return this.eBounds;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eBounds":
        Array.isArray(t) && (this.eBounds = t);
        break;
      case "eAnnotations":
        Array.isArray(t) && (this.eAnnotations = t);
        break;
    }
    super.eSet(e, t);
  }
}
const Ns = "ecore.xml.type";
let Ce = null;
function Ss() {
  return Ce || (Ce = new _s(), Ce.initialize(), X.INSTANCE.set(gt, Ce)), Ce;
}
const vr = [
  // Commonly used
  ["AnySimpleType", "java.lang.Object"],
  ["AnyURI", "java.lang.String"],
  ["Base64Binary", "byte[]"],
  ["Boolean", "boolean"],
  ["BooleanObject", "java.lang.Boolean"],
  ["Byte", "byte"],
  ["ByteObject", "java.lang.Byte"],
  ["Date", "javax.xml.datatype.XMLGregorianCalendar"],
  ["DateTime", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Decimal", "java.math.BigDecimal"],
  ["Double", "double"],
  ["DoubleObject", "java.lang.Double"],
  ["Duration", "javax.xml.datatype.Duration"],
  ["ENTITIES", "java.util.List"],
  ["ENTITIESBase", "java.util.List"],
  ["ENTITY", "java.lang.String"],
  ["Float", "float"],
  ["FloatObject", "java.lang.Float"],
  ["GDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonthDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYear", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYearMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["HexBinary", "byte[]"],
  ["ID", "java.lang.String"],
  ["IDREF", "java.lang.String"],
  ["IDREFS", "java.util.List"],
  ["IDREFSBase", "java.util.List"],
  ["Int", "int"],
  ["Integer", "java.math.BigInteger"],
  ["IntObject", "java.lang.Integer"],
  ["Language", "java.lang.String"],
  ["Long", "long"],
  ["LongObject", "java.lang.Long"],
  ["Name", "java.lang.String"],
  ["NCName", "java.lang.String"],
  ["NegativeInteger", "java.math.BigInteger"],
  ["NMTOKEN", "java.lang.String"],
  ["NMTOKENS", "java.util.List"],
  ["NMTOKENSBase", "java.util.List"],
  ["NonNegativeInteger", "java.math.BigInteger"],
  ["NonPositiveInteger", "java.math.BigInteger"],
  ["NormalizedString", "java.lang.String"],
  ["NOTATION", "javax.xml.namespace.QName"],
  ["PositiveInteger", "java.math.BigInteger"],
  ["QName", "javax.xml.namespace.QName"],
  ["Short", "short"],
  ["ShortObject", "java.lang.Short"],
  ["String", "java.lang.String"],
  ["Time", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Token", "java.lang.String"],
  ["UnsignedByte", "short"],
  ["UnsignedByteObject", "java.lang.Short"],
  ["UnsignedInt", "long"],
  ["UnsignedIntObject", "java.lang.Long"],
  ["UnsignedLong", "java.math.BigInteger"],
  ["UnsignedShort", "int"],
  ["UnsignedShortObject", "java.lang.Integer"]
];
class _s extends H {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(gt), this.setNsPrefix(Ns);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of vr) {
      const r = new R();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new xr(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (u) => u.toLowerCase() === "true" || u === "1", toString: (u) => String(u) };
    y.registerByName("Boolean", e), y.registerByName("BooleanObject", e);
    const t = { fromString: (u) => parseInt(u, 10), toString: (u) => String(u) };
    y.registerByName("Int", t), y.registerByName("IntObject", t), y.registerByName("Short", t), y.registerByName("ShortObject", t), y.registerByName("Byte", t), y.registerByName("ByteObject", t), y.registerByName("UnsignedByte", t), y.registerByName("UnsignedByteObject", t), y.registerByName("UnsignedShort", t), y.registerByName("UnsignedShortObject", t), y.registerByName("UnsignedInt", t), y.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (u) => {
        const l = parseInt(u, 10);
        return Math.abs(l) > Number.MAX_SAFE_INTEGER ? BigInt(u) : l;
      },
      toString: (u) => String(u)
    };
    y.registerByName("Long", s), y.registerByName("LongObject", s);
    const r = { fromString: (u) => parseFloat(u), toString: (u) => String(u) };
    y.registerByName("Float", r), y.registerByName("FloatObject", r), y.registerByName("Double", r), y.registerByName("DoubleObject", r);
    const n = { fromString: (u) => u, toString: (u) => u ?? "0" };
    y.registerByName("Decimal", n), y.registerByName("Integer", n), y.registerByName("NonNegativeInteger", n), y.registerByName("NonPositiveInteger", n), y.registerByName("NegativeInteger", n), y.registerByName("PositiveInteger", n), y.registerByName("UnsignedLong", n);
    const i = { fromString: (u) => u, toString: (u) => u ?? "" };
    y.registerByName("String", i), y.registerByName("AnySimpleType", i), y.registerByName("AnyURI", i), y.registerByName("NormalizedString", i), y.registerByName("Token", i), y.registerByName("Name", i), y.registerByName("NCName", i), y.registerByName("Language", i), y.registerByName("ID", i), y.registerByName("IDREF", i), y.registerByName("ENTITY", i), y.registerByName("NMTOKEN", i), y.registerByName("Date", i), y.registerByName("DateTime", i), y.registerByName("Time", i), y.registerByName("Duration", i), y.registerByName("GDay", i), y.registerByName("GMonth", i), y.registerByName("GMonthDay", i), y.registerByName("GYear", i), y.registerByName("GYearMonth", i), y.registerByName("QName", i), y.registerByName("NOTATION", i);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class xr extends ke {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    return super.create(e);
  }
}
const Oe = "http://www.eclipse.org/emf/2002/Ecore", As = "ecore", gt = "http://www.eclipse.org/emf/2003/XMLType";
let le = null;
function we() {
  return le || (le = new bs(), le.initialize(), Is(), x.register(we)), le;
}
function Is() {
  le && (X.INSTANCE.set(Oe, le), Ss());
}
class bs extends H {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(Oe), this.setNsPrefix(As);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Rs(this);
    this.setEFactoryInstance(e);
  }
  /**
   * Set the ePackage reference on all classifiers
   */
  initializeClassifierPackages() {
    for (const e of this.getEClassifiers())
      "setEPackage" in e && e.setEPackage(this);
  }
  createDataTypes() {
    this._eBooleanDataType = new R(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new R(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new R(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new R(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new R(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new R(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new R(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new R(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new R(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new R(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new R(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new R(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new R(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new R(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new R(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new b(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new b(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new b(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new b(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new b(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new b(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new b(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new b(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new b(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new b(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new b(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new b(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new b(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new b(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new b(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new b(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new b(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new b(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new b(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new b(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new I();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new I();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new I();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new I();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const n = new I();
    n.setName("upperBound"), n.setEType(this._eIntDataType), n.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const i = new I();
    i.setName("instanceClassName"), i.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(i);
    const u = new I();
    u.setName("abstract"), u.setEType(this._eBooleanDataType), u.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(u);
    const l = new I();
    l.setName("interface"), l.setEType(this._eBooleanDataType), l.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(l);
    const h = new I();
    h.setName("nsURI"), h.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(h);
    const d = new I();
    d.setName("nsPrefix"), d.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(d);
    const p = new I();
    p.setName("changeable"), p.setEType(this._eBooleanDataType), p.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(p);
    const E = new I();
    E.setName("volatile"), E.setEType(this._eBooleanDataType), E.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(E);
    const C = new I();
    C.setName("transient"), C.setEType(this._eBooleanDataType), C.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(C);
    const S = new I();
    S.setName("defaultValueLiteral"), S.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(S);
    const D = new I();
    D.setName("unsettable"), D.setEType(this._eBooleanDataType), D.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(D);
    const U = new I();
    U.setName("derived"), U.setEType(this._eBooleanDataType), U.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(U);
    const O = new I();
    O.setName("iD"), O.setEType(this._eBooleanDataType), O.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(O);
    const q = new I();
    q.setName("containment"), q.setEType(this._eBooleanDataType), q.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(q);
    const Q = new I();
    Q.setName("resolveProxies"), Q.setEType(this._eBooleanDataType), Q.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(Q);
    const Y = new I();
    Y.setName("value"), Y.setEType(this._eIntDataType), Y.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(Y);
    const v = new I();
    v.setName("literal"), v.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(v);
    const W = new I();
    W.setName("source"), W.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(W);
    const me = new I();
    me.setName("key"), me.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(me);
    const z = new I();
    z.setName("value"), z.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(z);
    const ue = new I();
    ue.setName("serializable"), ue.setEType(this._eBooleanDataType), ue.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(ue);
  }
  createReferences() {
    const e = new P();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new P();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new P();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new P();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const n = new P();
    n.setName("eOperations"), n.setEType(this._eOperationClass), n.setContainment(!0), n.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(n);
    const i = new P();
    i.setName("eClassifiers"), i.setEType(this._eClassifierClass), i.setContainment(!0), i.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(i);
    const u = new P();
    u.setName("eSubpackages"), u.setEType(this._ePackageClass), u.setContainment(!0), u.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(u);
    const l = new P();
    l.setName("eFactoryInstance"), l.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(l);
    const h = new P();
    h.setName("eLiterals"), h.setEType(this._eEnumLiteralClass), h.setContainment(!0), h.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(h);
    const d = new P();
    d.setName("eOpposite"), d.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(d);
    const p = new P();
    p.setName("eParameters"), p.setEType(this._eParameterClass), p.setContainment(!0), p.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(p);
    const E = new P();
    E.setName("details"), E.setEType(this._eStringToStringMapEntryClass), E.setContainment(!0), E.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(E);
    const C = new P();
    C.setName("eGenericType"), C.setEType(this._eGenericTypeClass), C.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(C);
    const S = new P();
    S.setName("eTypeParameters"), S.setEType(this._eTypeParameterClass), S.setContainment(!0), S.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(S);
    const D = new P();
    D.setName("eGenericSuperTypes"), D.setEType(this._eGenericTypeClass), D.setContainment(!0), D.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(D);
    const U = new P();
    U.setName("eTypeParameters"), U.setEType(this._eTypeParameterClass), U.setContainment(!0), U.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(U);
    const O = new P();
    O.setName("eBounds"), O.setEType(this._eGenericTypeClass), O.setContainment(!0), O.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(O);
    const q = new P();
    q.setName("eClassifier"), q.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(q);
    const Q = new P();
    Q.setName("eTypeParameter"), Q.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(Q);
    const Y = new P();
    Y.setName("eTypeArguments"), Y.setEType(this._eGenericTypeClass), Y.setContainment(!0), Y.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(Y);
    const v = new P();
    v.setName("eUpperBound"), v.setEType(this._eGenericTypeClass), v.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(v);
    const W = new P();
    W.setName("eLowerBound"), W.setEType(this._eGenericTypeClass), W.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(W);
  }
  // Getters for EClasses
  getEObjectClass() {
    return this._eObjectClass;
  }
  getEModelElementClass() {
    return this._eModelElementClass;
  }
  getENamedElementClass() {
    return this._eNamedElementClass;
  }
  getEClassifierClass() {
    return this._eClassifierClass;
  }
  getEClassClass() {
    return this._eClassClass;
  }
  getEDataTypeClass() {
    return this._eDataTypeClass;
  }
  getEEnumClass() {
    return this._eEnumClass;
  }
  getEEnumLiteralClass() {
    return this._eEnumLiteralClass;
  }
  getEPackageClass() {
    return this._ePackageClass;
  }
  getEFactoryClass() {
    return this._eFactoryClass;
  }
  getEStructuralFeatureClass() {
    return this._eStructuralFeatureClass;
  }
  getEAttributeClass() {
    return this._eAttributeClass;
  }
  getEReferenceClass() {
    return this._eReferenceClass;
  }
  getEOperationClass() {
    return this._eOperationClass;
  }
  getEParameterClass() {
    return this._eParameterClass;
  }
  getEAnnotationClass() {
    return this._eAnnotationClass;
  }
  getEGenericTypeClass() {
    return this._eGenericTypeClass;
  }
  getETypeParameterClass() {
    return this._eTypeParameterClass;
  }
  getEStringToStringMapEntryClass() {
    return this._eStringToStringMapEntryClass;
  }
  // Getters for EDataTypes
  getEBoolean() {
    return this._eBooleanDataType;
  }
  getEInt() {
    return this._eIntDataType;
  }
  getEString() {
    return this._eStringDataType;
  }
  getEDouble() {
    return this._eDoubleDataType;
  }
  getEFloat() {
    return this._eFloatDataType;
  }
  getELong() {
    return this._eLongDataType;
  }
  getEDate() {
    return this._eDateDataType;
  }
  getEShort() {
    return this._eShortDataType;
  }
  getEByte() {
    return this._eByteDataType;
  }
  getEChar() {
    return this._eCharDataType;
  }
  getEBigInteger() {
    return this._eBigIntegerDataType;
  }
  getEBigDecimal() {
    return this._eBigDecimalDataType;
  }
  getEJavaObject() {
    return this._eJavaObjectDataType;
  }
}
class Rs extends ke {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new b();
      case "EAttribute":
        return new I();
      case "EReference":
        return new P();
      case "EDataType":
        return new R();
      case "EEnum":
        return new Es();
      case "EEnumLiteral":
        return new ht();
      case "EAnnotation":
        return new ms();
      case "EPackage":
        return new H();
      case "EOperation":
        return new ft();
      case "EParameter":
        return new ys();
      case "EGenericType":
        return new Cs();
      case "ETypeParameter":
        return new Ts();
      default:
        return super.create(e);
    }
  }
}
const Ps = "org.eclipse.emf.ecore";
function J(c, e, t) {
  c.add(new de(4, Ps, e, t));
}
function Dr(c, e, t) {
  c.add(new de(2, Ps, e, t));
}
class et {
  validate(e, t) {
    const s = e.eClass();
    if (!s)
      return !0;
    switch (s.getName()) {
      case "EClass":
        return this.validateEClass(e, t);
      case "EPackage":
        return this.validateEPackage(e, t);
      case "EReference":
        return this.validateEReference(e, t);
      case "EAttribute":
        return this.validateEStructuralFeature(e, t);
      default:
        return !0;
    }
  }
  validateEClass(e, t) {
    const s = e;
    let r = !0;
    const n = /* @__PURE__ */ new Map();
    for (const i of s.getEStructuralFeatures()) {
      const u = i.getName?.();
      u && (n.get(u) ? (J(t, `The feature '${u}' is not unique in class '${s.getName()}'`, [e]), r = !1) : n.set(u, i));
    }
    return this.hasCircularSuperTypes(s) && (J(t, `The class '${s.getName()}' has a circular inheritance hierarchy`, [e]), r = !1), r;
  }
  hasCircularSuperTypes(e) {
    const t = /* @__PURE__ */ new Set(), s = [...e.getESuperTypes()];
    for (; s.length > 0; ) {
      const r = s.pop();
      if (r === e)
        return !0;
      t.has(r) || (t.add(r), s.push(...r.getESuperTypes()));
    }
    return !1;
  }
  validateEPackage(e, t) {
    const s = e;
    let r = !0;
    const n = s.getNsURI();
    (!n || n.trim().length === 0) && (J(t, `The nsURI of package '${s.getName()}' must not be empty`, [e]), r = !1);
    const i = s.getNsPrefix();
    i != null && i.includes(":") && (J(t, `The nsPrefix '${i}' of package '${s.getName()}' must not contain ':'`, [e]), r = !1);
    const u = /* @__PURE__ */ new Set();
    for (const h of s.getEClassifiers()) {
      const d = h.getName?.();
      d && (u.has(d) ? (J(t, `The classifier name '${d}' is not unique in package '${s.getName()}'`, [e]), r = !1) : u.add(d));
    }
    const l = /* @__PURE__ */ new Set();
    for (const h of s.getESubpackages()) {
      const d = h.getName?.();
      d && (l.has(d) ? (J(t, `The subpackage name '${d}' is not unique in package '${s.getName()}'`, [e]), r = !1) : l.add(d));
    }
    return r;
  }
  validateEReference(e, t) {
    const s = e;
    let r = this.validateEStructuralFeature(e, t);
    const n = s.getEOpposite?.();
    if (n) {
      s.isContainment?.() && n.isContainment?.() && (J(t, `The opposite of a containment reference '${s.getName()}' must not be a containment reference`, [e]), r = !1);
      const i = n.getEOpposite?.();
      i && i !== s && (J(t, `The opposite of reference '${s.getName()}' does not point back to this reference`, [e]), r = !1);
    }
    return r;
  }
  validateEStructuralFeature(e, t) {
    const s = e;
    let r = !0;
    const n = s.getLowerBound(), i = s.getUpperBound();
    return i !== -1 && i !== -2 && n > i && (J(t, `The lower bound ${n} of feature '${s.getName()}' must not exceed the upper bound ${i}`, [e]), r = !1), n < 0 && (J(t, `The lower bound ${n} of feature '${s.getName()}' must not be negative`, [e]), r = !1), s.getEType() || Dr(t, `The feature '${s.getName()}' has no type set`, [e]), r;
  }
}
et.INSTANCE = new et();
we();
class Fr extends ds {
  constructor() {
    super(), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new Ne()), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Ne()), this.getPackageRegistry().set(Oe, we());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(e) {
    return super.createResource(e);
  }
}
function kr() {
  const c = /* @__PURE__ */ new Map();
  return {
    getEPackage(t) {
      const s = c.get(t);
      return s ? "getEPackage" in s ? s.getEPackage() : s : null;
    },
    getEFactory(t) {
      const s = this.getEPackage(t);
      return s ? s.getEFactoryInstance() : null;
    },
    get(t) {
      return c.get(t) || null;
    },
    set(t, s) {
      c.set(t, s), s && !("getEPackage" in s) && typeof s.getESubpackages == "function" && ve(c, s);
    },
    delete(t) {
      return c.delete(t);
    },
    has(t) {
      return c.has(t);
    },
    keys() {
      return c.keys();
    },
    values() {
      return c.values();
    },
    /**
     * Register a package by its nsURI
     */
    registerPackage(t) {
      this.set(xe(t), t);
    }
  };
}
function Or() {
  return X.INSTANCE;
}
const Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ATTRIBUTE_FEATURE: ze,
  ATTRIBUTE_WILDCARD_FEATURE: qt,
  AdapterImpl: Bt,
  AttributesImpl: Qt,
  BasicDiagnostic: de,
  BasicEAnnotation: ms,
  BasicEAttribute: I,
  BasicEClass: b,
  BasicEDataType: R,
  BasicEEnum: Es,
  BasicEEnumLiteral: ht,
  BasicEFactory: ke,
  BasicEGenericType: Cs,
  BasicEList: Z,
  BasicEMap: Mt,
  BasicEObject: K,
  BasicEOperation: ft,
  BasicEPackage: H,
  BasicEParameter: ys,
  BasicEReference: P,
  BasicEStructuralFeature: lt,
  BasicETypeParameter: Ts,
  BasicNotifier: yr,
  BasicResource: De,
  BasicResourceSet: ds,
  DATATYPE_IS_MANY: Ie,
  DATATYPE_SINGLE: Ae,
  Diagnostician: Ze,
  DynamicEObject: st,
  EAttributeBuilder: Ir,
  ECORE_NS_PREFIX: As,
  ECORE_NS_URI: Oe,
  EClassBuilder: Nr,
  EContentAdapter: Cr,
  ELEMENT_FEATURE: he,
  ELEMENT_ONLY_CONTENT: $t,
  ELEMENT_WILDCARD_FEATURE: zt,
  EMD_ANNOTATION_URI: We,
  EMPTY_CONTENT: jt,
  EObjectContainmentEList: Se,
  EObjectContainmentWithInverseEList: Pt,
  EObjectContainmentWithInverseEListLazy: vt,
  EObjectEList: xt,
  EOperationBuilder: Pr,
  get EPackageRegistry() {
    return X;
  },
  EProxyImpl: rt,
  ERROR_TYPE: ce,
  EReferenceBuilder: br,
  EResourceSetImpl: Fr,
  EValidatorRegistry: Re,
  EcoreDataTypes: se,
  EcoreFactory: Rs,
  EcorePackageImpl: bs,
  EcoreUtil: $,
  EcoreValidator: et,
  ExtendedMetaData: qe,
  GROUP_FEATURE: Yt,
  HREF_ATTRIB: Ve,
  ID_ATTRIB: ts,
  IS_MANY_ADD: Ye,
  IS_MANY_MOVE: Vt,
  JSONLoad: cs,
  JSONResource: gs,
  JSONResourceFactory: ps,
  JSONSave: fs,
  MIXED_CONTENT: Gt,
  NIL_ATTRIB: Zt,
  NO_FEATURE_ID: It,
  NO_INDEX: Pe,
  NotificationImpl: oe,
  NotificationType: N,
  OBJECT_TYPE: ie,
  OPTION_DEFER_ATTACHMENT: gr,
  OPTION_DEFER_IDREF_RESOLUTION: pr,
  OPTION_EXTENDED_META_DATA: Ht,
  OPTION_FEATURE_NAME_MAP: Kt,
  OPTION_INDENT: Je,
  OPTION_RECORD_UNKNOWN_FEATURE: mr,
  OPTION_SERIALIZE_TYPE: Qe,
  OPTION_USE_DEPRECATED_METHODS: dr,
  OTHER: Ke,
  get Resource() {
    return fe;
  },
  ResourceContentsEList: Ot,
  SCHEMA_LOCATION_ATTRIB: es,
  SERIALIZE_TYPE_ALWAYS: ls,
  SERIALIZE_TYPE_POLYMORPHIC: hs,
  SIMPLE_CONTENT: Fe,
  SIMPLE_FEATURE: Wt,
  SimpleEPackage: ct,
  TYPE_ATTRIB: Jt,
  UNKNOWN_FEATURE_TYPE: Qs,
  UNSPECIFIED_CONTENT: Lt,
  UNSPECIFIED_FEATURE: Xt,
  URI: T,
  XMIHandler: ns,
  XMIHelperImpl: rs,
  XMILoad: ss,
  XMIResource: os,
  XMIResourceFactory: Ne,
  XMISave: as,
  XMI_NS: Zs,
  XMI_URI: be,
  XMLHandler: nt,
  XMLHelperImpl: _e,
  XMLLoad: it,
  XMLResource: ut,
  XMLResourceFactory: us,
  XMLSave: ot,
  XMLTypePackageImpl: _s,
  XML_NS: He,
  XML_TYPE_NS_PREFIX: Ns,
  XML_TYPE_NS_URI: gt,
  XSI_NS: Js,
  XSI_URI: ae,
  asInstanceOf: hr,
  createBasicEList: kt,
  createContainmentEList: Dt,
  createContainmentWithInverseEList: Ls,
  createEMap: Ut,
  createEObjectEList: Ft,
  createIndexedProxy: V,
  createPackageRegistry: kr,
  createResourceContentsEList: wt,
  dataTypeRegistry: y,
  filterByType: fr,
  getEcorePackage: we,
  getPackageRegistry: Or,
  getXMLTypePackage: Ss,
  isAdapterInternal: tt,
  isEAnnotation: ur,
  isEAttribute: sr,
  isEClass: is,
  isEClassifier: lr,
  isEDataType: tr,
  isEEnum: Te,
  isEFactory: ir,
  isEList: M,
  isEMap: $s,
  isEObject: er,
  isEOperation: ar,
  isEPackage: nr,
  isEParameter: or,
  isEReference: rr,
  isEStructuralFeature: cr,
  isInstanceOf: at,
  isInternalEObject: L,
  registerEcorePackage: Is,
  registerSubpackages: ve,
  requireNsURI: xe
}, Symbol.toStringTag, { value: "Module" }));
export {
  ze as ATTRIBUTE_FEATURE,
  qt as ATTRIBUTE_WILDCARD_FEATURE,
  Bt as AdapterImpl,
  Qt as AttributesImpl,
  de as BasicDiagnostic,
  ms as BasicEAnnotation,
  I as BasicEAttribute,
  b as BasicEClass,
  R as BasicEDataType,
  Es as BasicEEnum,
  ht as BasicEEnumLiteral,
  ke as BasicEFactory,
  Cs as BasicEGenericType,
  Z as BasicEList,
  Mt as BasicEMap,
  K as BasicEObject,
  ft as BasicEOperation,
  H as BasicEPackage,
  ys as BasicEParameter,
  P as BasicEReference,
  lt as BasicEStructuralFeature,
  Ts as BasicETypeParameter,
  yr as BasicNotifier,
  De as BasicResource,
  ds as BasicResourceSet,
  Ie as DATATYPE_IS_MANY,
  Ae as DATATYPE_SINGLE,
  Ze as Diagnostician,
  st as DynamicEObject,
  Ir as EAttributeBuilder,
  As as ECORE_NS_PREFIX,
  Oe as ECORE_NS_URI,
  Nr as EClassBuilder,
  Cr as EContentAdapter,
  he as ELEMENT_FEATURE,
  $t as ELEMENT_ONLY_CONTENT,
  zt as ELEMENT_WILDCARD_FEATURE,
  We as EMD_ANNOTATION_URI,
  jt as EMPTY_CONTENT,
  Se as EObjectContainmentEList,
  Pt as EObjectContainmentWithInverseEList,
  vt as EObjectContainmentWithInverseEListLazy,
  xt as EObjectEList,
  Pr as EOperationBuilder,
  X as EPackageRegistry,
  rt as EProxyImpl,
  ce as ERROR_TYPE,
  br as EReferenceBuilder,
  Fr as EResourceSetImpl,
  Re as EValidatorRegistry,
  se as EcoreDataTypes,
  Rs as EcoreFactory,
  bs as EcorePackageImpl,
  $ as EcoreUtil,
  et as EcoreValidator,
  qe as ExtendedMetaData,
  Yt as GROUP_FEATURE,
  Ve as HREF_ATTRIB,
  ts as ID_ATTRIB,
  Ye as IS_MANY_ADD,
  Vt as IS_MANY_MOVE,
  cs as JSONLoad,
  gs as JSONResource,
  ps as JSONResourceFactory,
  fs as JSONSave,
  Gt as MIXED_CONTENT,
  Zt as NIL_ATTRIB,
  It as NO_FEATURE_ID,
  Pe as NO_INDEX,
  oe as NotificationImpl,
  N as NotificationType,
  ie as OBJECT_TYPE,
  gr as OPTION_DEFER_ATTACHMENT,
  pr as OPTION_DEFER_IDREF_RESOLUTION,
  Ht as OPTION_EXTENDED_META_DATA,
  Kt as OPTION_FEATURE_NAME_MAP,
  Je as OPTION_INDENT,
  mr as OPTION_RECORD_UNKNOWN_FEATURE,
  Qe as OPTION_SERIALIZE_TYPE,
  dr as OPTION_USE_DEPRECATED_METHODS,
  Ke as OTHER,
  fe as Resource,
  Ot as ResourceContentsEList,
  es as SCHEMA_LOCATION_ATTRIB,
  ls as SERIALIZE_TYPE_ALWAYS,
  hs as SERIALIZE_TYPE_POLYMORPHIC,
  Fe as SIMPLE_CONTENT,
  Wt as SIMPLE_FEATURE,
  ct as SimpleEPackage,
  Jt as TYPE_ATTRIB,
  Qs as UNKNOWN_FEATURE_TYPE,
  Lt as UNSPECIFIED_CONTENT,
  Xt as UNSPECIFIED_FEATURE,
  T as URI,
  ns as XMIHandler,
  rs as XMIHelperImpl,
  ss as XMILoad,
  os as XMIResource,
  Ne as XMIResourceFactory,
  as as XMISave,
  Zs as XMI_NS,
  be as XMI_URI,
  nt as XMLHandler,
  _e as XMLHelperImpl,
  it as XMLLoad,
  ut as XMLResource,
  us as XMLResourceFactory,
  ot as XMLSave,
  _s as XMLTypePackageImpl,
  He as XML_NS,
  Ns as XML_TYPE_NS_PREFIX,
  gt as XML_TYPE_NS_URI,
  Js as XSI_NS,
  ae as XSI_URI,
  hr as asInstanceOf,
  kt as createBasicEList,
  Dt as createContainmentEList,
  Ls as createContainmentWithInverseEList,
  Ut as createEMap,
  Ft as createEObjectEList,
  V as createIndexedProxy,
  kr as createPackageRegistry,
  wt as createResourceContentsEList,
  y as dataTypeRegistry,
  Br as default,
  fr as filterByType,
  we as getEcorePackage,
  Or as getPackageRegistry,
  Ss as getXMLTypePackage,
  tt as isAdapterInternal,
  ur as isEAnnotation,
  sr as isEAttribute,
  is as isEClass,
  lr as isEClassifier,
  tr as isEDataType,
  Te as isEEnum,
  ir as isEFactory,
  M as isEList,
  $s as isEMap,
  er as isEObject,
  ar as isEOperation,
  nr as isEPackage,
  or as isEParameter,
  rr as isEReference,
  cr as isEStructuralFeature,
  at as isInstanceOf,
  L as isInternalEObject,
  Is as registerEcorePackage,
  ve as registerSubpackages,
  xe as requireNsURI
};
