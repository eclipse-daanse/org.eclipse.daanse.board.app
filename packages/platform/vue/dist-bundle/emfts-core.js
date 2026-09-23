import { g as rr, a as nr } from "./_commonjsHelpers-MdHo5S7N.js";
function ie(h) {
  return h && typeof h.eProxyURI == "function" && typeof h.eSetProxyURI == "function";
}
const v = {
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
}, st = -1, Jt = -1;
class Re {
  constructor(e, t, s, r, n, u = st, o = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = Jt, this.oldValue = r, this.newValue = n, this.position = u, this.wasSetFlag = o;
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
      case v.RESOLVE:
      case v.REMOVING_ADAPTER:
        return !0;
      case v.ADD:
      case v.ADD_MANY:
      case v.REMOVE:
      case v.REMOVE_MANY:
      case v.MOVE:
        return !1;
      case v.SET:
      case v.UNSET:
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
      [v.SET]: "SET",
      [v.UNSET]: "UNSET",
      [v.ADD]: "ADD",
      [v.REMOVE]: "REMOVE",
      [v.ADD_MANY]: "ADD_MANY",
      [v.REMOVE_MANY]: "REMOVE_MANY",
      [v.MOVE]: "MOVE",
      [v.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [v.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const gt = /^(?:0|[1-9]\d*)$/, Qt = Symbol.for("emfts.indexedList"), Zt = {
  get(h, e, t) {
    if (e === Qt)
      return !0;
    if (typeof e == "string" && gt.test(e)) {
      const s = Number(e), r = h.data;
      return r !== void 0 ? r[s] : s < h.size() ? h.get(s) : void 0;
    }
    return Reflect.get(h, e, t);
  },
  set(h, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        h.clear();
      else
        for (; h.size() > r; )
          h.removeAt(h.size() - 1);
      return !0;
    }
    if (typeof e == "string" && gt.test(e)) {
      const r = Number(e), n = h.size();
      if (r < n)
        h.set(r, t);
      else if (r === n)
        h.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${n}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(h, e, t, s);
  },
  has(h, e) {
    return typeof e == "string" && gt.test(e) ? Number(e) < h.size() : Reflect.has(h, e);
  }
};
class de {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, Zt);
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
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), n = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), u = [];
    for (let o = 0; o < n; o++)
      r < this.data.length && u.push(this.removeAt(r));
    for (let o = 0; o < s.length; o++)
      this.addAt(r + o, s[o]);
    return u;
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
      Array.isArray(s) ? t.push(...s) : s instanceof de ? t.push(...s.data) : t.push(s);
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
    this.dispatchNotification(v.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(v.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(v.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(v.REMOVE, e[0], null, 0) : this.dispatchNotification(v.REMOVE_MANY, e, null, st);
  }
  didSet(e, t, s) {
    this.dispatchNotification(v.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(v.MOVE, s, t, e);
  }
  dispatchNotification(e, t, s, r) {
    const n = this.getFeature();
    if (!this.owner || !n || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const o = this.owner.eAdapters();
      if (!o || o.length === 0)
        return;
    } else
      return;
    const u = new Re(this.owner, e, n, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(u);
  }
}
class qe extends de {
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
class es extends qe {
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
function ir(h, e, t) {
  return ge(new es(h, e, t));
}
class ts extends qe {
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
class ss extends de {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && ie(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function se(h) {
  return h && typeof h.add == "function" && typeof h.size == "function" && typeof h.get == "function";
}
function ge(h) {
  return h[Qt] ? h : new Proxy(h, Zt);
}
function rs(h, e) {
  return ge(new qe(h, e));
}
function ns(h, e) {
  return ge(new ss(h, e));
}
function is(h, e) {
  return ge(new de(h, e));
}
class as extends de {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(v.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(v.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(v.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(v.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(v.REMOVE_MANY, e, null, st);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(v.SET, s, t, e);
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
      const o = this.resource.eAdapters();
      if (!o || o.length === 0)
        return;
    } else
      return;
    const n = { getName: () => "contents" }, u = new Re(this.resource, e, n, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(u);
  }
}
function os(h) {
  return ge(new as(h));
}
var oe;
(function(h) {
  h.INSTANCE = ar();
})(oe || (oe = {}));
function rt(h, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && h.set(s, t), rt(h, t);
  }
}
function nt(h) {
  const e = h.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${h.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function ar() {
  const h = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = h.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = h.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return h.get(e) || null;
    },
    set(e, t) {
      h.set(e, t), "getEPackage" in t || rt(h, t);
    },
    registerPackage(e) {
      this.set(nt(e), e);
    },
    delete(e) {
      return h.delete(e);
    },
    has(e) {
      return h.has(e);
    },
    keys() {
      return h.keys();
    },
    values() {
      return h.values();
    }
  };
}
class D {
  constructor(e, t, s, r, n) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = n;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new D(null, null, "", null, null);
    let t = null, s = null, r = null, n = null, u = null, o = 0;
    e.length;
    const p = e.indexOf("#");
    p >= 0 && (u = e.substring(p + 1), e = e.substring(0, p));
    const d = e.indexOf("?");
    d >= 0 && (n = e.substring(d + 1), e = e.substring(0, d));
    const E = e.indexOf(":");
    if (E > 0) {
      let T = !0;
      for (let R = 0; R < E; R++)
        if (e.charAt(R) === "/") {
          T = !1;
          break;
        }
      T && (t = e.substring(0, E), o = E + 1);
    }
    if (e.startsWith("//", o)) {
      const T = o + 2;
      let R = T;
      for (; R < e.length && e.charAt(R) !== "/"; )
        R++;
      s = e.substring(T, R), o = R;
    }
    return o < e.length ? r = e.substring(o) : s !== null && (r = ""), new D(t, s, r, n, u);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new D("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new D("platform", null, "/resource" + e, null, null);
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
    return new D(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new D(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((n) => n.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new D(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new D(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new D(this._scheme, this._authority, this._path, this._query, null);
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
          const u = r.lastIndexOf("/");
          u >= 0 && (r = r.substring(0, u + 1));
        }
      } else
        r = e._path;
      n = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new D(t, s, r, n, this._fragment);
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
      return new D(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new D(null, null, null, null, this._fragment) : new D(null, null, "", this._query, this._fragment);
    const r = t.split("/"), n = s.split("/");
    let u = 0;
    const o = Math.min(r.length, n.length);
    for (let R = 0; R < o - 1 && r[R] === n[R]; R++)
      u++;
    const p = n.length - u - 1, d = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (p >= 3 || d && p > 0))
      return new D(null, null, t, this._query, this._fragment);
    const E = [];
    for (let R = 0; R < p; R++)
      E.push("..");
    for (let R = u; R < r.length; R++)
      E.push(r[R]);
    let T = E.join("/");
    return T === "" && t.endsWith("/") && (T = "./"), new D(null, null, T, this._query, this._fragment);
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
      const u = s[n];
      u === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : u !== "." && !(u === "" && n > 0 && n < s.length - 1) && t.push(u);
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
function wt(h) {
  return "unsetTarget" in h && typeof h.unsetTarget == "function";
}
class us {
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
class le {
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
        if (Array.isArray(n) || se(n))
          for (const u of n)
            e.push(u);
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
    const n = t.toString(), u = n.indexOf("#");
    if (u > 0) {
      const o = n.substring(0, u), p = n.substring(u + 1);
      let d;
      const E = s.getURI();
      E && !o.includes("://") ? d = E.resolve(D.createURI(o)) : d = D.createURI(o);
      const T = r.getResource(d, !0);
      if (T) {
        const b = T.getEObject(p);
        if (b)
          return b;
      }
      const R = r.getPackageRegistry(), _ = this.resolveFragmentViaPackageRegistry(R, o, p, r);
      if (_)
        return _;
    } else if (u === 0) {
      const o = n.substring(1), p = s.getEObject(o);
      if (p)
        return p;
    } else {
      const o = s.getEObject(n);
      if (o)
        return o;
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
      const d = this.resolveFragmentInPackage(n, s);
      if (d)
        return d;
    }
    let u = t;
    const o = u.lastIndexOf("/");
    o >= 0 && (u = u.substring(o + 1));
    const p = u.indexOf(".");
    if (p > 0 && (u = u.substring(0, p)), u)
      for (const d of e.keys()) {
        const E = e.getEPackage(d);
        if (E && E.getName() === u) {
          const T = this.resolveFragmentInPackage(E, s);
          if (T)
            return T;
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
    for (let p = 0; p < r.length - 1; p++) {
      const d = n.getESubpackages();
      let E = null;
      for (let T = 0; T < d.length; T++)
        if (d.get(T).getName() === r[p]) {
          E = d.get(T);
          break;
        }
      if (!E)
        return null;
      n = E;
    }
    const u = r[r.length - 1];
    return n.getEClassifier(u) ?? null;
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
        const s = new Re(this, v.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), wt(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
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
          if (Array.isArray(n) || se(n))
            for (const u of n)
              e.push(u);
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
          for (const u of t)
            u && "eSetContainer" in u && u.eSetContainer(this, n);
        else
          t.eSetContainer(this, n);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const n = new Re(this, v.SET, e, r, t);
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
      const r = new Re(this, v.UNSET, e, s, e.getDefaultValue());
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
class Ft extends le {
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
      if (!e.isMany() && r && ie(r) && r.eIsProxy()) {
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
        n.isContainment() ? r = rs(this, n) : r = ns(this, n);
      } else
        r = is(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class or extends qe {
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
class cs {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new or(e, t, this);
    const r = s.getEStructuralFeature("key"), n = s.getEStructuralFeature("value");
    if (!r || !n)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = n, ge(this);
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
      const o = r.eGet(this.valueFeature);
      return r.eSet(this.valueFeature, t), o;
    }
    const n = this.entryEClass.getEPackage();
    let u;
    n && n.getEFactoryInstance() ? u = n.getEFactoryInstance().create(this.entryEClass) : u = new Ft(this.entryEClass), u.eSet(this.keyFeature, e), u.eSet(this.valueFeature, t), this.delegateList.add(u);
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
function ls(h, e, t) {
  return new cs(h, e, t);
}
function ur(h) {
  return !!h && typeof h.getByKey == "function" && typeof h.putByKey == "function" && typeof h.size == "function" && typeof h.add == "function";
}
var Pe;
(function(h) {
  h.INSTANCE_FACTORY_REGISTRY = cr();
})(Pe || (Pe = {}));
function cr() {
  const h = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const n = s.fileExtension();
      return n && h.has(n) ? h.get(n) : null;
    },
    getExtensionToFactoryMap() {
      return h;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class it {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = os(this);
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
      const t = e.split("/"), s = t.length >= 2 && t[0] === "" && t[1] === "", r = t.filter((o) => o.length > 0);
      if (r.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let n = null, u = 0;
      if (s && (n = this.contents.size() > 0 ? this.contents.get(0) : null, !n || (r[0].startsWith("@") ? n = this.eObjectForURIFragmentSegment(n, r[0]) : n = this.findByNameInContents(n, r[0]), u = 1, !n)))
        return null;
      for (let o = u; o < r.length; o++) {
        const p = r[o], d = parseInt(p, 10);
        if (n === null ? isNaN(d) ? (n = this.findByName(this.contents.toArray(), p), !n && this.contents.size() > 0 && (n = this.findByNameInContents(this.contents.get(0), p))) : n = d < this.contents.size() ? this.contents.get(d) : null : isNaN(d) ? n = this.navigateByNameOrFeature(n, p) : n = n.eContents()[d] || null, !n)
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
    const u = e.eClass().getEStructuralFeature(t);
    if (u) {
      const o = e.eGet(u);
      if (o && typeof o == "object" && "eClass" in o)
        return o;
      if (Array.isArray(o) && o.length > 0)
        return o[0];
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
    let u, o = -1;
    if (n >= "0" && n <= "9") {
      const E = s.lastIndexOf(".");
      if (E > 0) {
        const T = parseInt(s.substring(E + 1), 10);
        isNaN(T) ? u = s : (u = s.substring(0, E), o = T);
      } else
        u = s;
    } else
      u = s;
    const p = r.getEStructuralFeature(u);
    if (!p)
      return null;
    const d = e.eGet(p);
    return d == null ? null : o >= 0 ? Array.isArray(d) ? d[o] ?? null : typeof d == "object" && "get" in d && typeof d.get == "function" ? d.get(o) ?? null : null : typeof d == "object" && "eClass" in d ? d : null;
  }
  getURIFragment(e) {
    const t = [];
    let s = e;
    for (; s; ) {
      const r = s.eContainer();
      if (!r) {
        const o = this.contents.indexOf(s);
        o >= 0 && t.unshift(o);
        break;
      }
      const u = r.eContents().indexOf(s);
      u >= 0 && t.unshift(u), s = r;
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
      const r = s.value, u = r.eClass().getEIDAttribute();
      if (u && r.eGet(u) === e)
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
      n != null && (r.isMany() && Array.isArray(n) ? s[r.getName()] = n.map((u) => typeof u == "object" && "eClass" in u ? this.serializeObject(u) : u) : s[r.getName()] = typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n);
    }
    return s;
  }
}
var pt = {};
const lr = {}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" })), fr = /* @__PURE__ */ rr(hr);
var dt = {}, Ve = { exports: {} }, mt = {}, je = {}, $t;
function gr() {
  if ($t) return je;
  $t = 1, je.byteLength = o, je.toByteArray = d, je.fromByteArray = R;
  for (var h = [], e = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, n = s.length; r < n; ++r)
    h[r] = s[r], e[s.charCodeAt(r)] = r;
  e[45] = 62, e[95] = 63;
  function u(_) {
    var b = _.length;
    if (b % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var B = _.indexOf("=");
    B === -1 && (B = b);
    var O = B === b ? 0 : 4 - B % 4;
    return [B, O];
  }
  function o(_) {
    var b = u(_), B = b[0], O = b[1];
    return (B + O) * 3 / 4 - O;
  }
  function p(_, b, B) {
    return (b + B) * 3 / 4 - B;
  }
  function d(_) {
    var b, B = u(_), O = B[0], S = B[1], x = new t(p(_, O, S)), w = 0, k = S > 0 ? O - 4 : O, F;
    for (F = 0; F < k; F += 4)
      b = e[_.charCodeAt(F)] << 18 | e[_.charCodeAt(F + 1)] << 12 | e[_.charCodeAt(F + 2)] << 6 | e[_.charCodeAt(F + 3)], x[w++] = b >> 16 & 255, x[w++] = b >> 8 & 255, x[w++] = b & 255;
    return S === 2 && (b = e[_.charCodeAt(F)] << 2 | e[_.charCodeAt(F + 1)] >> 4, x[w++] = b & 255), S === 1 && (b = e[_.charCodeAt(F)] << 10 | e[_.charCodeAt(F + 1)] << 4 | e[_.charCodeAt(F + 2)] >> 2, x[w++] = b >> 8 & 255, x[w++] = b & 255), x;
  }
  function E(_) {
    return h[_ >> 18 & 63] + h[_ >> 12 & 63] + h[_ >> 6 & 63] + h[_ & 63];
  }
  function T(_, b, B) {
    for (var O, S = [], x = b; x < B; x += 3)
      O = (_[x] << 16 & 16711680) + (_[x + 1] << 8 & 65280) + (_[x + 2] & 255), S.push(E(O));
    return S.join("");
  }
  function R(_) {
    for (var b, B = _.length, O = B % 3, S = [], x = 16383, w = 0, k = B - O; w < k; w += x)
      S.push(T(_, w, w + x > k ? k : w + x));
    return O === 1 ? (b = _[B - 1], S.push(
      h[b >> 2] + h[b << 4 & 63] + "=="
    )) : O === 2 && (b = (_[B - 2] << 8) + _[B - 1], S.push(
      h[b >> 10] + h[b >> 4 & 63] + h[b << 2 & 63] + "="
    )), S.join("");
  }
  return je;
}
var Je = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Xt;
function pr() {
  return Xt || (Xt = 1, Je.read = function(h, e, t, s, r) {
    var n, u, o = r * 8 - s - 1, p = (1 << o) - 1, d = p >> 1, E = -7, T = t ? r - 1 : 0, R = t ? -1 : 1, _ = h[e + T];
    for (T += R, n = _ & (1 << -E) - 1, _ >>= -E, E += o; E > 0; n = n * 256 + h[e + T], T += R, E -= 8)
      ;
    for (u = n & (1 << -E) - 1, n >>= -E, E += s; E > 0; u = u * 256 + h[e + T], T += R, E -= 8)
      ;
    if (n === 0)
      n = 1 - d;
    else {
      if (n === p)
        return u ? NaN : (_ ? -1 : 1) * (1 / 0);
      u = u + Math.pow(2, s), n = n - d;
    }
    return (_ ? -1 : 1) * u * Math.pow(2, n - s);
  }, Je.write = function(h, e, t, s, r, n) {
    var u, o, p, d = n * 8 - r - 1, E = (1 << d) - 1, T = E >> 1, R = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, _ = s ? 0 : n - 1, b = s ? 1 : -1, B = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, u = E) : (u = Math.floor(Math.log(e) / Math.LN2), e * (p = Math.pow(2, -u)) < 1 && (u--, p *= 2), u + T >= 1 ? e += R / p : e += R * Math.pow(2, 1 - T), e * p >= 2 && (u++, p /= 2), u + T >= E ? (o = 0, u = E) : u + T >= 1 ? (o = (e * p - 1) * Math.pow(2, r), u = u + T) : (o = e * Math.pow(2, T - 1) * Math.pow(2, r), u = 0)); r >= 8; h[t + _] = o & 255, _ += b, o /= 256, r -= 8)
      ;
    for (u = u << r | o, d += r; d > 0; h[t + _] = u & 255, _ += b, u /= 256, d -= 8)
      ;
    h[t + _ - b] |= B * 128;
  }), Je;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var qt;
function dr() {
  return qt || (qt = 1, (function(h) {
    const e = gr(), t = pr(), s = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    h.Buffer = o, h.SlowBuffer = x, h.INSPECT_MAX_BYTES = 50;
    const r = 2147483647;
    h.kMaxLength = r, o.TYPED_ARRAY_SUPPORT = n(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function n() {
      try {
        const l = new Uint8Array(1), i = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(l, i), l.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(o.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.byteOffset;
      }
    });
    function u(l) {
      if (l > r)
        throw new RangeError('The value "' + l + '" is invalid for option "size"');
      const i = new Uint8Array(l);
      return Object.setPrototypeOf(i, o.prototype), i;
    }
    function o(l, i, a) {
      if (typeof l == "number") {
        if (typeof i == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return T(l);
      }
      return p(l, i, a);
    }
    o.poolSize = 8192;
    function p(l, i, a) {
      if (typeof l == "string")
        return R(l, i);
      if (ArrayBuffer.isView(l))
        return b(l);
      if (l == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
        );
      if (ce(l, ArrayBuffer) || l && ce(l.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ce(l, SharedArrayBuffer) || l && ce(l.buffer, SharedArrayBuffer)))
        return B(l, i, a);
      if (typeof l == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const g = l.valueOf && l.valueOf();
      if (g != null && g !== l)
        return o.from(g, i, a);
      const m = O(l);
      if (m) return m;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof l[Symbol.toPrimitive] == "function")
        return o.from(l[Symbol.toPrimitive]("string"), i, a);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
      );
    }
    o.from = function(l, i, a) {
      return p(l, i, a);
    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
    function d(l) {
      if (typeof l != "number")
        throw new TypeError('"size" argument must be of type number');
      if (l < 0)
        throw new RangeError('The value "' + l + '" is invalid for option "size"');
    }
    function E(l, i, a) {
      return d(l), l <= 0 ? u(l) : i !== void 0 ? typeof a == "string" ? u(l).fill(i, a) : u(l).fill(i) : u(l);
    }
    o.alloc = function(l, i, a) {
      return E(l, i, a);
    };
    function T(l) {
      return d(l), u(l < 0 ? 0 : S(l) | 0);
    }
    o.allocUnsafe = function(l) {
      return T(l);
    }, o.allocUnsafeSlow = function(l) {
      return T(l);
    };
    function R(l, i) {
      if ((typeof i != "string" || i === "") && (i = "utf8"), !o.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      const a = w(l, i) | 0;
      let g = u(a);
      const m = g.write(l, i);
      return m !== a && (g = g.slice(0, m)), g;
    }
    function _(l) {
      const i = l.length < 0 ? 0 : S(l.length) | 0, a = u(i);
      for (let g = 0; g < i; g += 1)
        a[g] = l[g] & 255;
      return a;
    }
    function b(l) {
      if (ce(l, Uint8Array)) {
        const i = new Uint8Array(l);
        return B(i.buffer, i.byteOffset, i.byteLength);
      }
      return _(l);
    }
    function B(l, i, a) {
      if (i < 0 || l.byteLength < i)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (l.byteLength < i + (a || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let g;
      return i === void 0 && a === void 0 ? g = new Uint8Array(l) : a === void 0 ? g = new Uint8Array(l, i) : g = new Uint8Array(l, i, a), Object.setPrototypeOf(g, o.prototype), g;
    }
    function O(l) {
      if (o.isBuffer(l)) {
        const i = S(l.length) | 0, a = u(i);
        return a.length === 0 || l.copy(a, 0, 0, i), a;
      }
      if (l.length !== void 0)
        return typeof l.length != "number" || ft(l.length) ? u(0) : _(l);
      if (l.type === "Buffer" && Array.isArray(l.data))
        return _(l.data);
    }
    function S(l) {
      if (l >= r)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
      return l | 0;
    }
    function x(l) {
      return +l != l && (l = 0), o.alloc(+l);
    }
    o.isBuffer = function(i) {
      return i != null && i._isBuffer === !0 && i !== o.prototype;
    }, o.compare = function(i, a) {
      if (ce(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), ce(a, Uint8Array) && (a = o.from(a, a.offset, a.byteLength)), !o.isBuffer(i) || !o.isBuffer(a))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (i === a) return 0;
      let g = i.length, m = a.length;
      for (let N = 0, A = Math.min(g, m); N < A; ++N)
        if (i[N] !== a[N]) {
          g = i[N], m = a[N];
          break;
        }
      return g < m ? -1 : m < g ? 1 : 0;
    }, o.isEncoding = function(i) {
      switch (String(i).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, o.concat = function(i, a) {
      if (!Array.isArray(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (i.length === 0)
        return o.alloc(0);
      let g;
      if (a === void 0)
        for (a = 0, g = 0; g < i.length; ++g)
          a += i[g].length;
      const m = o.allocUnsafe(a);
      let N = 0;
      for (g = 0; g < i.length; ++g) {
        let A = i[g];
        if (ce(A, Uint8Array))
          N + A.length > m.length ? (o.isBuffer(A) || (A = o.from(A)), A.copy(m, N)) : Uint8Array.prototype.set.call(
            m,
            A,
            N
          );
        else if (o.isBuffer(A))
          A.copy(m, N);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        N += A.length;
      }
      return m;
    };
    function w(l, i) {
      if (o.isBuffer(l))
        return l.length;
      if (ArrayBuffer.isView(l) || ce(l, ArrayBuffer))
        return l.byteLength;
      if (typeof l != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l
        );
      const a = l.length, g = arguments.length > 2 && arguments[2] === !0;
      if (!g && a === 0) return 0;
      let m = !1;
      for (; ; )
        switch (i) {
          case "ascii":
          case "latin1":
          case "binary":
            return a;
          case "utf8":
          case "utf-8":
            return Z(l).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return a * 2;
          case "hex":
            return a >>> 1;
          case "base64":
            return Le(l).length;
          default:
            if (m)
              return g ? -1 : Z(l).length;
            i = ("" + i).toLowerCase(), m = !0;
        }
    }
    o.byteLength = w;
    function k(l, i, a) {
      let g = !1;
      if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, i >>>= 0, a <= i))
        return "";
      for (l || (l = "utf8"); ; )
        switch (l) {
          case "hex":
            return Oe(this, i, a);
          case "utf8":
          case "utf-8":
            return ve(this, i, a);
          case "ascii":
            return L(this, i, a);
          case "latin1":
          case "binary":
            return lt(this, i, a);
          case "base64":
            return Ie(this, i, a);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ue(this, i, a);
          default:
            if (g) throw new TypeError("Unknown encoding: " + l);
            l = (l + "").toLowerCase(), g = !0;
        }
    }
    o.prototype._isBuffer = !0;
    function F(l, i, a) {
      const g = l[i];
      l[i] = l[a], l[a] = g;
    }
    o.prototype.swap16 = function() {
      const i = this.length;
      if (i % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let a = 0; a < i; a += 2)
        F(this, a, a + 1);
      return this;
    }, o.prototype.swap32 = function() {
      const i = this.length;
      if (i % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let a = 0; a < i; a += 4)
        F(this, a, a + 3), F(this, a + 1, a + 2);
      return this;
    }, o.prototype.swap64 = function() {
      const i = this.length;
      if (i % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let a = 0; a < i; a += 8)
        F(this, a, a + 7), F(this, a + 1, a + 6), F(this, a + 2, a + 5), F(this, a + 3, a + 4);
      return this;
    }, o.prototype.toString = function() {
      const i = this.length;
      return i === 0 ? "" : arguments.length === 0 ? ve(this, 0, i) : k.apply(this, arguments);
    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(i) {
      if (!o.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
      return this === i ? !0 : o.compare(this, i) === 0;
    }, o.prototype.inspect = function() {
      let i = "";
      const a = h.INSPECT_MAX_BYTES;
      return i = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (i += " ... "), "<Buffer " + i + ">";
    }, s && (o.prototype[s] = o.prototype.inspect), o.prototype.compare = function(i, a, g, m, N) {
      if (ce(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), !o.isBuffer(i))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i
        );
      if (a === void 0 && (a = 0), g === void 0 && (g = i ? i.length : 0), m === void 0 && (m = 0), N === void 0 && (N = this.length), a < 0 || g > i.length || m < 0 || N > this.length)
        throw new RangeError("out of range index");
      if (m >= N && a >= g)
        return 0;
      if (m >= N)
        return -1;
      if (a >= g)
        return 1;
      if (a >>>= 0, g >>>= 0, m >>>= 0, N >>>= 0, this === i) return 0;
      let A = N - m, U = g - a;
      const J = Math.min(A, U), K = this.slice(m, N), Q = i.slice(a, g);
      for (let G = 0; G < J; ++G)
        if (K[G] !== Q[G]) {
          A = K[G], U = Q[G];
          break;
        }
      return A < U ? -1 : U < A ? 1 : 0;
    };
    function ue(l, i, a, g, m) {
      if (l.length === 0) return -1;
      if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, ft(a) && (a = m ? 0 : l.length - 1), a < 0 && (a = l.length + a), a >= l.length) {
        if (m) return -1;
        a = l.length - 1;
      } else if (a < 0)
        if (m) a = 0;
        else return -1;
      if (typeof i == "string" && (i = o.from(i, g)), o.isBuffer(i))
        return i.length === 0 ? -1 : re(l, i, a, g, m);
      if (typeof i == "number")
        return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? m ? Uint8Array.prototype.indexOf.call(l, i, a) : Uint8Array.prototype.lastIndexOf.call(l, i, a) : re(l, [i], a, g, m);
      throw new TypeError("val must be string, number or Buffer");
    }
    function re(l, i, a, g, m) {
      let N = 1, A = l.length, U = i.length;
      if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
        if (l.length < 2 || i.length < 2)
          return -1;
        N = 2, A /= 2, U /= 2, a /= 2;
      }
      function J(Q, G) {
        return N === 1 ? Q[G] : Q.readUInt16BE(G * N);
      }
      let K;
      if (m) {
        let Q = -1;
        for (K = a; K < A; K++)
          if (J(l, K) === J(i, Q === -1 ? 0 : K - Q)) {
            if (Q === -1 && (Q = K), K - Q + 1 === U) return Q * N;
          } else
            Q !== -1 && (K -= K - Q), Q = -1;
      } else
        for (a + U > A && (a = A - U), K = a; K >= 0; K--) {
          let Q = !0;
          for (let G = 0; G < U; G++)
            if (J(l, K + G) !== J(i, G)) {
              Q = !1;
              break;
            }
          if (Q) return K;
        }
      return -1;
    }
    o.prototype.includes = function(i, a, g) {
      return this.indexOf(i, a, g) !== -1;
    }, o.prototype.indexOf = function(i, a, g) {
      return ue(this, i, a, g, !0);
    }, o.prototype.lastIndexOf = function(i, a, g) {
      return ue(this, i, a, g, !1);
    };
    function Ne(l, i, a, g) {
      a = Number(a) || 0;
      const m = l.length - a;
      g ? (g = Number(g), g > m && (g = m)) : g = m;
      const N = i.length;
      g > N / 2 && (g = N / 2);
      let A;
      for (A = 0; A < g; ++A) {
        const U = parseInt(i.substr(A * 2, 2), 16);
        if (ft(U)) return A;
        l[a + A] = U;
      }
      return A;
    }
    function C(l, i, a, g) {
      return Ee(Z(i, l.length - a), l, a, g);
    }
    function Ye(l, i, a, g) {
      return Ee(he(i), l, a, g);
    }
    function Se(l, i, a, g) {
      return Ee(Le(i), l, a, g);
    }
    function V(l, i, a, g) {
      return Ee(ht(i, l.length - a), l, a, g);
    }
    o.prototype.write = function(i, a, g, m) {
      if (a === void 0)
        m = "utf8", g = this.length, a = 0;
      else if (g === void 0 && typeof a == "string")
        m = a, g = this.length, a = 0;
      else if (isFinite(a))
        a = a >>> 0, isFinite(g) ? (g = g >>> 0, m === void 0 && (m = "utf8")) : (m = g, g = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const N = this.length - a;
      if ((g === void 0 || g > N) && (g = N), i.length > 0 && (g < 0 || a < 0) || a > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      m || (m = "utf8");
      let A = !1;
      for (; ; )
        switch (m) {
          case "hex":
            return Ne(this, i, a, g);
          case "utf8":
          case "utf-8":
            return C(this, i, a, g);
          case "ascii":
          case "latin1":
          case "binary":
            return Ye(this, i, a, g);
          case "base64":
            return Se(this, i, a, g);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return V(this, i, a, g);
          default:
            if (A) throw new TypeError("Unknown encoding: " + m);
            m = ("" + m).toLowerCase(), A = !0;
        }
    }, o.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Ie(l, i, a) {
      return i === 0 && a === l.length ? e.fromByteArray(l) : e.fromByteArray(l.slice(i, a));
    }
    function ve(l, i, a) {
      a = Math.min(l.length, a);
      const g = [];
      let m = i;
      for (; m < a; ) {
        const N = l[m];
        let A = null, U = N > 239 ? 4 : N > 223 ? 3 : N > 191 ? 2 : 1;
        if (m + U <= a) {
          let J, K, Q, G;
          switch (U) {
            case 1:
              N < 128 && (A = N);
              break;
            case 2:
              J = l[m + 1], (J & 192) === 128 && (G = (N & 31) << 6 | J & 63, G > 127 && (A = G));
              break;
            case 3:
              J = l[m + 1], K = l[m + 2], (J & 192) === 128 && (K & 192) === 128 && (G = (N & 15) << 12 | (J & 63) << 6 | K & 63, G > 2047 && (G < 55296 || G > 57343) && (A = G));
              break;
            case 4:
              J = l[m + 1], K = l[m + 2], Q = l[m + 3], (J & 192) === 128 && (K & 192) === 128 && (Q & 192) === 128 && (G = (N & 15) << 18 | (J & 63) << 12 | (K & 63) << 6 | Q & 63, G > 65535 && G < 1114112 && (A = G));
          }
        }
        A === null ? (A = 65533, U = 1) : A > 65535 && (A -= 65536, g.push(A >>> 10 & 1023 | 55296), A = 56320 | A & 1023), g.push(A), m += U;
      }
      return ze(g);
    }
    const me = 4096;
    function ze(l) {
      const i = l.length;
      if (i <= me)
        return String.fromCharCode.apply(String, l);
      let a = "", g = 0;
      for (; g < i; )
        a += String.fromCharCode.apply(
          String,
          l.slice(g, g += me)
        );
      return a;
    }
    function L(l, i, a) {
      let g = "";
      a = Math.min(l.length, a);
      for (let m = i; m < a; ++m)
        g += String.fromCharCode(l[m] & 127);
      return g;
    }
    function lt(l, i, a) {
      let g = "";
      a = Math.min(l.length, a);
      for (let m = i; m < a; ++m)
        g += String.fromCharCode(l[m]);
      return g;
    }
    function Oe(l, i, a) {
      const g = l.length;
      (!i || i < 0) && (i = 0), (!a || a < 0 || a > g) && (a = g);
      let m = "";
      for (let N = i; N < a; ++N)
        m += tr[l[N]];
      return m;
    }
    function Ue(l, i, a) {
      const g = l.slice(i, a);
      let m = "";
      for (let N = 0; N < g.length - 1; N += 2)
        m += String.fromCharCode(g[N] + g[N + 1] * 256);
      return m;
    }
    o.prototype.slice = function(i, a) {
      const g = this.length;
      i = ~~i, a = a === void 0 ? g : ~~a, i < 0 ? (i += g, i < 0 && (i = 0)) : i > g && (i = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < i && (a = i);
      const m = this.subarray(i, a);
      return Object.setPrototypeOf(m, o.prototype), m;
    };
    function $(l, i, a) {
      if (l % 1 !== 0 || l < 0) throw new RangeError("offset is not uint");
      if (l + i > a) throw new RangeError("Trying to access beyond buffer length");
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(i, a, g) {
      i = i >>> 0, a = a >>> 0, g || $(i, a, this.length);
      let m = this[i], N = 1, A = 0;
      for (; ++A < a && (N *= 256); )
        m += this[i + A] * N;
      return m;
    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(i, a, g) {
      i = i >>> 0, a = a >>> 0, g || $(i, a, this.length);
      let m = this[i + --a], N = 1;
      for (; a > 0 && (N *= 256); )
        m += this[i + --a] * N;
      return m;
    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(i, a) {
      return i = i >>> 0, a || $(i, 1, this.length), this[i];
    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(i, a) {
      return i = i >>> 0, a || $(i, 2, this.length), this[i] | this[i + 1] << 8;
    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(i, a) {
      return i = i >>> 0, a || $(i, 2, this.length), this[i] << 8 | this[i + 1];
    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
    }, o.prototype.readBigUInt64LE = Ce(function(i) {
      i = i >>> 0, X(i, "offset");
      const a = this[i], g = this[i + 7];
      (a === void 0 || g === void 0) && ee(i, this.length - 8);
      const m = a + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, N = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + g * 2 ** 24;
      return BigInt(m) + (BigInt(N) << BigInt(32));
    }), o.prototype.readBigUInt64BE = Ce(function(i) {
      i = i >>> 0, X(i, "offset");
      const a = this[i], g = this[i + 7];
      (a === void 0 || g === void 0) && ee(i, this.length - 8);
      const m = a * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], N = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + g;
      return (BigInt(m) << BigInt(32)) + BigInt(N);
    }), o.prototype.readIntLE = function(i, a, g) {
      i = i >>> 0, a = a >>> 0, g || $(i, a, this.length);
      let m = this[i], N = 1, A = 0;
      for (; ++A < a && (N *= 256); )
        m += this[i + A] * N;
      return N *= 128, m >= N && (m -= Math.pow(2, 8 * a)), m;
    }, o.prototype.readIntBE = function(i, a, g) {
      i = i >>> 0, a = a >>> 0, g || $(i, a, this.length);
      let m = a, N = 1, A = this[i + --m];
      for (; m > 0 && (N *= 256); )
        A += this[i + --m] * N;
      return N *= 128, A >= N && (A -= Math.pow(2, 8 * a)), A;
    }, o.prototype.readInt8 = function(i, a) {
      return i = i >>> 0, a || $(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
    }, o.prototype.readInt16LE = function(i, a) {
      i = i >>> 0, a || $(i, 2, this.length);
      const g = this[i] | this[i + 1] << 8;
      return g & 32768 ? g | 4294901760 : g;
    }, o.prototype.readInt16BE = function(i, a) {
      i = i >>> 0, a || $(i, 2, this.length);
      const g = this[i + 1] | this[i] << 8;
      return g & 32768 ? g | 4294901760 : g;
    }, o.prototype.readInt32LE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
    }, o.prototype.readInt32BE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
    }, o.prototype.readBigInt64LE = Ce(function(i) {
      i = i >>> 0, X(i, "offset");
      const a = this[i], g = this[i + 7];
      (a === void 0 || g === void 0) && ee(i, this.length - 8);
      const m = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (g << 24);
      return (BigInt(m) << BigInt(32)) + BigInt(a + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
    }), o.prototype.readBigInt64BE = Ce(function(i) {
      i = i >>> 0, X(i, "offset");
      const a = this[i], g = this[i + 7];
      (a === void 0 || g === void 0) && ee(i, this.length - 8);
      const m = (a << 24) + // Overflow
      this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
      return (BigInt(m) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + g);
    }), o.prototype.readFloatLE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), t.read(this, i, !0, 23, 4);
    }, o.prototype.readFloatBE = function(i, a) {
      return i = i >>> 0, a || $(i, 4, this.length), t.read(this, i, !1, 23, 4);
    }, o.prototype.readDoubleLE = function(i, a) {
      return i = i >>> 0, a || $(i, 8, this.length), t.read(this, i, !0, 52, 8);
    }, o.prototype.readDoubleBE = function(i, a) {
      return i = i >>> 0, a || $(i, 8, this.length), t.read(this, i, !1, 52, 8);
    };
    function te(l, i, a, g, m, N) {
      if (!o.isBuffer(l)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (i > m || i < N) throw new RangeError('"value" argument is out of bounds');
      if (a + g > l.length) throw new RangeError("Index out of range");
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(i, a, g, m) {
      if (i = +i, a = a >>> 0, g = g >>> 0, !m) {
        const U = Math.pow(2, 8 * g) - 1;
        te(this, i, a, g, U, 0);
      }
      let N = 1, A = 0;
      for (this[a] = i & 255; ++A < g && (N *= 256); )
        this[a + A] = i / N & 255;
      return a + g;
    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(i, a, g, m) {
      if (i = +i, a = a >>> 0, g = g >>> 0, !m) {
        const U = Math.pow(2, 8 * g) - 1;
        te(this, i, a, g, U, 0);
      }
      let N = g - 1, A = 1;
      for (this[a + N] = i & 255; --N >= 0 && (A *= 256); )
        this[a + N] = i / A & 255;
      return a + g;
    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 1, 255, 0), this[a] = i & 255, a + 1;
    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 2, 65535, 0), this[a] = i & 255, this[a + 1] = i >>> 8, a + 2;
    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 2, 65535, 0), this[a] = i >>> 8, this[a + 1] = i & 255, a + 2;
    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 4, 4294967295, 0), this[a + 3] = i >>> 24, this[a + 2] = i >>> 16, this[a + 1] = i >>> 8, this[a] = i & 255, a + 4;
    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 4, 4294967295, 0), this[a] = i >>> 24, this[a + 1] = i >>> 16, this[a + 2] = i >>> 8, this[a + 3] = i & 255, a + 4;
    };
    function Ke(l, i, a, g, m) {
      z(i, g, m, l, a, 7);
      let N = Number(i & BigInt(4294967295));
      l[a++] = N, N = N >> 8, l[a++] = N, N = N >> 8, l[a++] = N, N = N >> 8, l[a++] = N;
      let A = Number(i >> BigInt(32) & BigInt(4294967295));
      return l[a++] = A, A = A >> 8, l[a++] = A, A = A >> 8, l[a++] = A, A = A >> 8, l[a++] = A, a;
    }
    function Me(l, i, a, g, m) {
      z(i, g, m, l, a, 7);
      let N = Number(i & BigInt(4294967295));
      l[a + 7] = N, N = N >> 8, l[a + 6] = N, N = N >> 8, l[a + 5] = N, N = N >> 8, l[a + 4] = N;
      let A = Number(i >> BigInt(32) & BigInt(4294967295));
      return l[a + 3] = A, A = A >> 8, l[a + 2] = A, A = A >> 8, l[a + 1] = A, A = A >> 8, l[a] = A, a + 8;
    }
    o.prototype.writeBigUInt64LE = Ce(function(i, a = 0) {
      return Ke(this, i, a, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeBigUInt64BE = Ce(function(i, a = 0) {
      return Me(this, i, a, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeIntLE = function(i, a, g, m) {
      if (i = +i, a = a >>> 0, !m) {
        const J = Math.pow(2, 8 * g - 1);
        te(this, i, a, g, J - 1, -J);
      }
      let N = 0, A = 1, U = 0;
      for (this[a] = i & 255; ++N < g && (A *= 256); )
        i < 0 && U === 0 && this[a + N - 1] !== 0 && (U = 1), this[a + N] = (i / A >> 0) - U & 255;
      return a + g;
    }, o.prototype.writeIntBE = function(i, a, g, m) {
      if (i = +i, a = a >>> 0, !m) {
        const J = Math.pow(2, 8 * g - 1);
        te(this, i, a, g, J - 1, -J);
      }
      let N = g - 1, A = 1, U = 0;
      for (this[a + N] = i & 255; --N >= 0 && (A *= 256); )
        i < 0 && U === 0 && this[a + N + 1] !== 0 && (U = 1), this[a + N] = (i / A >> 0) - U & 255;
      return a + g;
    }, o.prototype.writeInt8 = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[a] = i & 255, a + 1;
    }, o.prototype.writeInt16LE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 2, 32767, -32768), this[a] = i & 255, this[a + 1] = i >>> 8, a + 2;
    }, o.prototype.writeInt16BE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 2, 32767, -32768), this[a] = i >>> 8, this[a + 1] = i & 255, a + 2;
    }, o.prototype.writeInt32LE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 4, 2147483647, -2147483648), this[a] = i & 255, this[a + 1] = i >>> 8, this[a + 2] = i >>> 16, this[a + 3] = i >>> 24, a + 4;
    }, o.prototype.writeInt32BE = function(i, a, g) {
      return i = +i, a = a >>> 0, g || te(this, i, a, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[a] = i >>> 24, this[a + 1] = i >>> 16, this[a + 2] = i >>> 8, this[a + 3] = i & 255, a + 4;
    }, o.prototype.writeBigInt64LE = Ce(function(i, a = 0) {
      return Ke(this, i, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), o.prototype.writeBigInt64BE = Ce(function(i, a = 0) {
      return Me(this, i, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function xe(l, i, a, g, m, N) {
      if (a + g > l.length) throw new RangeError("Index out of range");
      if (a < 0) throw new RangeError("Index out of range");
    }
    function He(l, i, a, g, m) {
      return i = +i, a = a >>> 0, m || xe(l, i, a, 4), t.write(l, i, a, g, 23, 4), a + 4;
    }
    o.prototype.writeFloatLE = function(i, a, g) {
      return He(this, i, a, !0, g);
    }, o.prototype.writeFloatBE = function(i, a, g) {
      return He(this, i, a, !1, g);
    };
    function f(l, i, a, g, m) {
      return i = +i, a = a >>> 0, m || xe(l, i, a, 8), t.write(l, i, a, g, 52, 8), a + 8;
    }
    o.prototype.writeDoubleLE = function(i, a, g) {
      return f(this, i, a, !0, g);
    }, o.prototype.writeDoubleBE = function(i, a, g) {
      return f(this, i, a, !1, g);
    }, o.prototype.copy = function(i, a, g, m) {
      if (!o.isBuffer(i)) throw new TypeError("argument should be a Buffer");
      if (g || (g = 0), !m && m !== 0 && (m = this.length), a >= i.length && (a = i.length), a || (a = 0), m > 0 && m < g && (m = g), m === g || i.length === 0 || this.length === 0) return 0;
      if (a < 0)
        throw new RangeError("targetStart out of bounds");
      if (g < 0 || g >= this.length) throw new RangeError("Index out of range");
      if (m < 0) throw new RangeError("sourceEnd out of bounds");
      m > this.length && (m = this.length), i.length - a < m - g && (m = i.length - a + g);
      const N = m - g;
      return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, m) : Uint8Array.prototype.set.call(
        i,
        this.subarray(g, m),
        a
      ), N;
    }, o.prototype.fill = function(i, a, g, m) {
      if (typeof i == "string") {
        if (typeof a == "string" ? (m = a, a = 0, g = this.length) : typeof g == "string" && (m = g, g = this.length), m !== void 0 && typeof m != "string")
          throw new TypeError("encoding must be a string");
        if (typeof m == "string" && !o.isEncoding(m))
          throw new TypeError("Unknown encoding: " + m);
        if (i.length === 1) {
          const A = i.charCodeAt(0);
          (m === "utf8" && A < 128 || m === "latin1") && (i = A);
        }
      } else typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
      if (a < 0 || this.length < a || this.length < g)
        throw new RangeError("Out of range index");
      if (g <= a)
        return this;
      a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, i || (i = 0);
      let N;
      if (typeof i == "number")
        for (N = a; N < g; ++N)
          this[N] = i;
      else {
        const A = o.isBuffer(i) ? i : o.from(i, m), U = A.length;
        if (U === 0)
          throw new TypeError('The value "' + i + '" is invalid for argument "value"');
        for (N = 0; N < g - a; ++N)
          this[N + a] = A[N % U];
      }
      return this;
    };
    const c = {};
    function I(l, i, a) {
      c[l] = class extends a {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: i.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${l}]`, this.stack, delete this.name;
        }
        get code() {
          return l;
        }
        set code(m) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: m,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${l}]: ${this.message}`;
        }
      };
    }
    I(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(l) {
        return l ? `${l} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), I(
      "ERR_INVALID_ARG_TYPE",
      function(l, i) {
        return `The "${l}" argument must be of type number. Received type ${typeof i}`;
      },
      TypeError
    ), I(
      "ERR_OUT_OF_RANGE",
      function(l, i, a) {
        let g = `The value of "${l}" is out of range.`, m = a;
        return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? m = y(String(a)) : typeof a == "bigint" && (m = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (m = y(m)), m += "n"), g += ` It must be ${i}. Received ${m}`, g;
      },
      RangeError
    );
    function y(l) {
      let i = "", a = l.length;
      const g = l[0] === "-" ? 1 : 0;
      for (; a >= g + 4; a -= 3)
        i = `_${l.slice(a - 3, a)}${i}`;
      return `${l.slice(0, a)}${i}`;
    }
    function M(l, i, a) {
      X(i, "offset"), (l[i] === void 0 || l[i + a] === void 0) && ee(i, l.length - (a + 1));
    }
    function z(l, i, a, g, m, N) {
      if (l > a || l < i) {
        const A = typeof i == "bigint" ? "n" : "";
        let U;
        throw i === 0 || i === BigInt(0) ? U = `>= 0${A} and < 2${A} ** ${(N + 1) * 8}${A}` : U = `>= -(2${A} ** ${(N + 1) * 8 - 1}${A}) and < 2 ** ${(N + 1) * 8 - 1}${A}`, new c.ERR_OUT_OF_RANGE("value", U, l);
      }
      M(g, m, N);
    }
    function X(l, i) {
      if (typeof l != "number")
        throw new c.ERR_INVALID_ARG_TYPE(i, "number", l);
    }
    function ee(l, i, a) {
      throw Math.floor(l) !== l ? (X(l, a), new c.ERR_OUT_OF_RANGE("offset", "an integer", l)) : i < 0 ? new c.ERR_BUFFER_OUT_OF_BOUNDS() : new c.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${i}`,
        l
      );
    }
    const ne = /[^+/0-9A-Za-z-_]/g;
    function ye(l) {
      if (l = l.split("=")[0], l = l.trim().replace(ne, ""), l.length < 2) return "";
      for (; l.length % 4 !== 0; )
        l = l + "=";
      return l;
    }
    function Z(l, i) {
      i = i || 1 / 0;
      let a;
      const g = l.length;
      let m = null;
      const N = [];
      for (let A = 0; A < g; ++A) {
        if (a = l.charCodeAt(A), a > 55295 && a < 57344) {
          if (!m) {
            if (a > 56319) {
              (i -= 3) > -1 && N.push(239, 191, 189);
              continue;
            } else if (A + 1 === g) {
              (i -= 3) > -1 && N.push(239, 191, 189);
              continue;
            }
            m = a;
            continue;
          }
          if (a < 56320) {
            (i -= 3) > -1 && N.push(239, 191, 189), m = a;
            continue;
          }
          a = (m - 55296 << 10 | a - 56320) + 65536;
        } else m && (i -= 3) > -1 && N.push(239, 191, 189);
        if (m = null, a < 128) {
          if ((i -= 1) < 0) break;
          N.push(a);
        } else if (a < 2048) {
          if ((i -= 2) < 0) break;
          N.push(
            a >> 6 | 192,
            a & 63 | 128
          );
        } else if (a < 65536) {
          if ((i -= 3) < 0) break;
          N.push(
            a >> 12 | 224,
            a >> 6 & 63 | 128,
            a & 63 | 128
          );
        } else if (a < 1114112) {
          if ((i -= 4) < 0) break;
          N.push(
            a >> 18 | 240,
            a >> 12 & 63 | 128,
            a >> 6 & 63 | 128,
            a & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return N;
    }
    function he(l) {
      const i = [];
      for (let a = 0; a < l.length; ++a)
        i.push(l.charCodeAt(a) & 255);
      return i;
    }
    function ht(l, i) {
      let a, g, m;
      const N = [];
      for (let A = 0; A < l.length && !((i -= 2) < 0); ++A)
        a = l.charCodeAt(A), g = a >> 8, m = a % 256, N.push(m), N.push(g);
      return N;
    }
    function Le(l) {
      return e.toByteArray(ye(l));
    }
    function Ee(l, i, a, g) {
      let m;
      for (m = 0; m < g && !(m + a >= i.length || m >= l.length); ++m)
        i[m + a] = l[m];
      return m;
    }
    function ce(l, i) {
      return l instanceof i || l != null && l.constructor != null && l.constructor.name != null && l.constructor.name === i.name;
    }
    function ft(l) {
      return l !== l;
    }
    const tr = (function() {
      const l = "0123456789abcdef", i = new Array(256);
      for (let a = 0; a < 16; ++a) {
        const g = a * 16;
        for (let m = 0; m < 16; ++m)
          i[g + m] = l[a] + l[m];
      }
      return i;
    })();
    function Ce(l) {
      return typeof BigInt > "u" ? sr : l;
    }
    function sr() {
      throw new Error("BigInt not supported");
    }
  })(mt)), mt;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Wt;
function mr() {
  return Wt || (Wt = 1, (function(h, e) {
    var t = dr(), s = t.Buffer;
    function r(u, o) {
      for (var p in u)
        o[p] = u[p];
    }
    s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? h.exports = t : (r(t, e), e.Buffer = n);
    function n(u, o, p) {
      return s(u, o, p);
    }
    n.prototype = Object.create(s.prototype), r(s, n), n.from = function(u, o, p) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return s(u, o, p);
    }, n.alloc = function(u, o, p) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var d = s(u);
      return o !== void 0 ? typeof p == "string" ? d.fill(o, p) : d.fill(o) : d.fill(0), d;
    }, n.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return s(u);
    }, n.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return t.SlowBuffer(u);
    };
  })(Ve, Ve.exports)), Ve.exports;
}
var Yt;
function yr() {
  if (Yt) return dt;
  Yt = 1;
  var h = mr().Buffer, e = h.isEncoding || function(S) {
    switch (S = "" + S, S && S.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function t(S) {
    if (!S) return "utf8";
    for (var x; ; )
      switch (S) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return S;
        default:
          if (x) return;
          S = ("" + S).toLowerCase(), x = !0;
      }
  }
  function s(S) {
    var x = t(S);
    if (typeof x != "string" && (h.isEncoding === e || !e(S))) throw new Error("Unknown encoding: " + S);
    return x || S;
  }
  dt.StringDecoder = r;
  function r(S) {
    this.encoding = s(S);
    var x;
    switch (this.encoding) {
      case "utf16le":
        this.text = T, this.end = R, x = 4;
        break;
      case "utf8":
        this.fillLast = p, x = 4;
        break;
      case "base64":
        this.text = _, this.end = b, x = 3;
        break;
      default:
        this.write = B, this.end = O;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = h.allocUnsafe(x);
  }
  r.prototype.write = function(S) {
    if (S.length === 0) return "";
    var x, w;
    if (this.lastNeed) {
      if (x = this.fillLast(S), x === void 0) return "";
      w = this.lastNeed, this.lastNeed = 0;
    } else
      w = 0;
    return w < S.length ? x ? x + this.text(S, w) : this.text(S, w) : x || "";
  }, r.prototype.end = E, r.prototype.text = d, r.prototype.fillLast = function(S) {
    if (this.lastNeed <= S.length)
      return S.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    S.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, S.length), this.lastNeed -= S.length;
  };
  function n(S) {
    return S <= 127 ? 0 : S >> 5 === 6 ? 2 : S >> 4 === 14 ? 3 : S >> 3 === 30 ? 4 : S >> 6 === 2 ? -1 : -2;
  }
  function u(S, x, w) {
    var k = x.length - 1;
    if (k < w) return 0;
    var F = n(x[k]);
    return F >= 0 ? (F > 0 && (S.lastNeed = F - 1), F) : --k < w || F === -2 ? 0 : (F = n(x[k]), F >= 0 ? (F > 0 && (S.lastNeed = F - 2), F) : --k < w || F === -2 ? 0 : (F = n(x[k]), F >= 0 ? (F > 0 && (F === 2 ? F = 0 : S.lastNeed = F - 3), F) : 0));
  }
  function o(S, x, w) {
    if ((x[0] & 192) !== 128)
      return S.lastNeed = 0, "�";
    if (S.lastNeed > 1 && x.length > 1) {
      if ((x[1] & 192) !== 128)
        return S.lastNeed = 1, "�";
      if (S.lastNeed > 2 && x.length > 2 && (x[2] & 192) !== 128)
        return S.lastNeed = 2, "�";
    }
  }
  function p(S) {
    var x = this.lastTotal - this.lastNeed, w = o(this, S);
    if (w !== void 0) return w;
    if (this.lastNeed <= S.length)
      return S.copy(this.lastChar, x, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    S.copy(this.lastChar, x, 0, S.length), this.lastNeed -= S.length;
  }
  function d(S, x) {
    var w = u(this, S, x);
    if (!this.lastNeed) return S.toString("utf8", x);
    this.lastTotal = w;
    var k = S.length - (w - this.lastNeed);
    return S.copy(this.lastChar, 0, k), S.toString("utf8", x, k);
  }
  function E(S) {
    var x = S && S.length ? this.write(S) : "";
    return this.lastNeed ? x + "�" : x;
  }
  function T(S, x) {
    if ((S.length - x) % 2 === 0) {
      var w = S.toString("utf16le", x);
      if (w) {
        var k = w.charCodeAt(w.length - 1);
        if (k >= 55296 && k <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = S[S.length - 2], this.lastChar[1] = S[S.length - 1], w.slice(0, -1);
      }
      return w;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = S[S.length - 1], S.toString("utf16le", x, S.length - 1);
  }
  function R(S) {
    var x = S && S.length ? this.write(S) : "";
    if (this.lastNeed) {
      var w = this.lastTotal - this.lastNeed;
      return x + this.lastChar.toString("utf16le", 0, w);
    }
    return x;
  }
  function _(S, x) {
    var w = (S.length - x) % 3;
    return w === 0 ? S.toString("base64", x) : (this.lastNeed = 3 - w, this.lastTotal = 3, w === 1 ? this.lastChar[0] = S[S.length - 1] : (this.lastChar[0] = S[S.length - 2], this.lastChar[1] = S[S.length - 1]), S.toString("base64", x, S.length - w));
  }
  function b(S) {
    var x = S && S.length ? this.write(S) : "";
    return this.lastNeed ? x + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : x;
  }
  function B(S) {
    return S.toString(this.encoding);
  }
  function O(S) {
    return S && S.length ? this.write(S) : "";
  }
  return dt;
}
var zt;
function Er() {
  return zt || (zt = 1, (function(h) {
    (function(e) {
      e.parser = function(f, c) {
        return new s(f, c);
      }, e.SAXParser = s, e.SAXStream = E, e.createStream = d, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function s(f, c) {
        if (!(this instanceof s))
          return new s(f, c);
        var I = this;
        n(I), I.q = I.c = "", I.bufferCheckPosition = e.MAX_BUFFER_LENGTH, I.opt = c || {}, I.opt.lowercase = I.opt.lowercase || I.opt.lowercasetags, I.looseCase = I.opt.lowercase ? "toLowerCase" : "toUpperCase", I.tags = [], I.closed = I.closedRoot = I.sawRoot = !1, I.tag = I.error = null, I.strict = !!f, I.noscript = !!(f || I.opt.noscript), I.state = C.BEGIN, I.strictEntities = I.opt.strictEntities, I.ENTITIES = I.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), I.attribList = [], I.opt.xmlns && (I.ns = Object.create(B)), I.opt.unquotedAttributeValues === void 0 && (I.opt.unquotedAttributeValues = !f), I.trackPosition = I.opt.position !== !1, I.trackPosition && (I.position = I.line = I.column = 0), Se(I, "onready");
      }
      Object.create || (Object.create = function(f) {
        function c() {
        }
        c.prototype = f;
        var I = new c();
        return I;
      }), Object.keys || (Object.keys = function(f) {
        var c = [];
        for (var I in f) f.hasOwnProperty(I) && c.push(I);
        return c;
      });
      function r(f) {
        for (var c = Math.max(e.MAX_BUFFER_LENGTH, 10), I = 0, y = 0, M = t.length; y < M; y++) {
          var z = f[t[y]].length;
          if (z > c)
            switch (t[y]) {
              case "textNode":
                Ie(f);
                break;
              case "cdata":
                V(f, "oncdata", f.cdata), f.cdata = "";
                break;
              case "script":
                V(f, "onscript", f.script), f.script = "";
                break;
              default:
                me(f, "Max buffer length exceeded: " + t[y]);
            }
          I = Math.max(I, z);
        }
        var X = e.MAX_BUFFER_LENGTH - I;
        f.bufferCheckPosition = X + f.position;
      }
      function n(f) {
        for (var c = 0, I = t.length; c < I; c++)
          f[t[c]] = "";
      }
      function u(f) {
        Ie(f), f.cdata !== "" && (V(f, "oncdata", f.cdata), f.cdata = ""), f.script !== "" && (V(f, "onscript", f.script), f.script = "");
      }
      s.prototype = {
        end: function() {
          ze(this);
        },
        write: He,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          u(this);
        }
      };
      var o;
      try {
        o = fr.Stream;
      } catch {
        o = function() {
        };
      }
      o || (o = function() {
      });
      var p = e.EVENTS.filter(function(f) {
        return f !== "error" && f !== "end";
      });
      function d(f, c) {
        return new E(f, c);
      }
      function E(f, c) {
        if (!(this instanceof E))
          return new E(f, c);
        o.apply(this), this._parser = new s(f, c), this.writable = !0, this.readable = !0;
        var I = this;
        this._parser.onend = function() {
          I.emit("end");
        }, this._parser.onerror = function(y) {
          I.emit("error", y), I._parser.error = null;
        }, this._decoder = null, p.forEach(function(y) {
          Object.defineProperty(I, "on" + y, {
            get: function() {
              return I._parser["on" + y];
            },
            set: function(M) {
              if (!M)
                return I.removeAllListeners(y), I._parser["on" + y] = M, M;
              I.on(y, M);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      E.prototype = Object.create(o.prototype, {
        constructor: {
          value: E
        }
      }), E.prototype.write = function(f) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(f)) {
          if (!this._decoder) {
            var c = yr().StringDecoder;
            this._decoder = new c("utf8");
          }
          f = this._decoder.write(f);
        }
        return this._parser.write(f.toString()), this.emit("data", f), !0;
      }, E.prototype.end = function(f) {
        return f && f.length && this.write(f), this._parser.end(), !0;
      }, E.prototype.on = function(f, c) {
        var I = this;
        return !I._parser["on" + f] && p.indexOf(f) !== -1 && (I._parser["on" + f] = function() {
          var y = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          y.splice(0, 0, f), I.emit.apply(I, y);
        }), o.prototype.on.call(I, f, c);
      };
      var T = "[CDATA[", R = "DOCTYPE", _ = "http://www.w3.org/XML/1998/namespace", b = "http://www.w3.org/2000/xmlns/", B = { xml: _, xmlns: b }, O = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, x = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function k(f) {
        return f === " " || f === `
` || f === "\r" || f === "	";
      }
      function F(f) {
        return f === '"' || f === "'";
      }
      function ue(f) {
        return f === ">" || k(f);
      }
      function re(f, c) {
        return f.test(c);
      }
      function Ne(f, c) {
        return !re(f, c);
      }
      var C = 0;
      e.STATE = {
        BEGIN: C++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: C++,
        // leading whitespace
        TEXT: C++,
        // general stuff
        TEXT_ENTITY: C++,
        // &amp and such.
        OPEN_WAKA: C++,
        // <
        SGML_DECL: C++,
        // <!BLARG
        SGML_DECL_QUOTED: C++,
        // <!BLARG foo "bar
        DOCTYPE: C++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: C++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: C++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: C++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: C++,
        // <!-
        COMMENT: C++,
        // <!--
        COMMENT_ENDING: C++,
        // <!-- blah -
        COMMENT_ENDED: C++,
        // <!-- blah --
        CDATA: C++,
        // <![CDATA[ something
        CDATA_ENDING: C++,
        // ]
        CDATA_ENDING_2: C++,
        // ]]
        PROC_INST: C++,
        // <?hi
        PROC_INST_BODY: C++,
        // <?hi there
        PROC_INST_ENDING: C++,
        // <?hi "there" ?
        OPEN_TAG: C++,
        // <strong
        OPEN_TAG_SLASH: C++,
        // <strong /
        ATTRIB: C++,
        // <a
        ATTRIB_NAME: C++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: C++,
        // <a foo _
        ATTRIB_VALUE: C++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: C++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: C++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: C++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: C++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: C++,
        // <foo bar=&quot
        CLOSE_TAG: C++,
        // </a
        CLOSE_TAG_SAW_WHITE: C++,
        // </a   >
        SCRIPT: C++,
        // <script> ...
        SCRIPT_ENDING: C++
        // <script> ... <
      }, e.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, e.ENTITIES = {
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
      }, Object.keys(e.ENTITIES).forEach(function(f) {
        var c = e.ENTITIES[f], I = typeof c == "number" ? String.fromCharCode(c) : c;
        e.ENTITIES[f] = I;
      });
      for (var Ye in e.STATE)
        e.STATE[e.STATE[Ye]] = Ye;
      C = e.STATE;
      function Se(f, c, I) {
        f[c] && f[c](I);
      }
      function V(f, c, I) {
        f.textNode && Ie(f), Se(f, c, I);
      }
      function Ie(f) {
        f.textNode = ve(f.opt, f.textNode), f.textNode && Se(f, "ontext", f.textNode), f.textNode = "";
      }
      function ve(f, c) {
        return f.trim && (c = c.trim()), f.normalize && (c = c.replace(/\s+/g, " ")), c;
      }
      function me(f, c) {
        return Ie(f), f.trackPosition && (c += `
Line: ` + f.line + `
Column: ` + f.column + `
Char: ` + f.c), c = new Error(c), f.error = c, Se(f, "onerror", c), f;
      }
      function ze(f) {
        return f.sawRoot && !f.closedRoot && L(f, "Unclosed root tag"), f.state !== C.BEGIN && f.state !== C.BEGIN_WHITESPACE && f.state !== C.TEXT && me(f, "Unexpected end"), Ie(f), f.c = "", f.closed = !0, Se(f, "onend"), s.call(f, f.strict, f.opt), f;
      }
      function L(f, c) {
        if (typeof f != "object" || !(f instanceof s))
          throw new Error("bad call to strictFail");
        f.strict && me(f, c);
      }
      function lt(f) {
        f.strict || (f.tagName = f.tagName[f.looseCase]());
        var c = f.tags[f.tags.length - 1] || f, I = f.tag = { name: f.tagName, attributes: {} };
        f.opt.xmlns && (I.ns = c.ns), f.attribList.length = 0, V(f, "onopentagstart", I);
      }
      function Oe(f, c) {
        var I = f.indexOf(":"), y = I < 0 ? ["", f] : f.split(":"), M = y[0], z = y[1];
        return c && f === "xmlns" && (M = "xmlns", z = ""), { prefix: M, local: z };
      }
      function Ue(f) {
        if (f.strict || (f.attribName = f.attribName[f.looseCase]()), f.attribList.indexOf(f.attribName) !== -1 || f.tag.attributes.hasOwnProperty(f.attribName)) {
          f.attribName = f.attribValue = "";
          return;
        }
        if (f.opt.xmlns) {
          var c = Oe(f.attribName, !0), I = c.prefix, y = c.local;
          if (I === "xmlns")
            if (y === "xml" && f.attribValue !== _)
              L(
                f,
                "xml: prefix must be bound to " + _ + `
Actual: ` + f.attribValue
              );
            else if (y === "xmlns" && f.attribValue !== b)
              L(
                f,
                "xmlns: prefix must be bound to " + b + `
Actual: ` + f.attribValue
              );
            else {
              var M = f.tag, z = f.tags[f.tags.length - 1] || f;
              M.ns === z.ns && (M.ns = Object.create(z.ns)), M.ns[y] = f.attribValue;
            }
          f.attribList.push([f.attribName, f.attribValue]);
        } else
          f.tag.attributes[f.attribName] = f.attribValue, V(f, "onattribute", {
            name: f.attribName,
            value: f.attribValue
          });
        f.attribName = f.attribValue = "";
      }
      function $(f, c) {
        if (f.opt.xmlns) {
          var I = f.tag, y = Oe(f.tagName);
          I.prefix = y.prefix, I.local = y.local, I.uri = I.ns[y.prefix] || "", I.prefix && !I.uri && (L(
            f,
            "Unbound namespace prefix: " + JSON.stringify(f.tagName)
          ), I.uri = y.prefix);
          var M = f.tags[f.tags.length - 1] || f;
          I.ns && M.ns !== I.ns && Object.keys(I.ns).forEach(function(ce) {
            V(f, "onopennamespace", {
              prefix: ce,
              uri: I.ns[ce]
            });
          });
          for (var z = 0, X = f.attribList.length; z < X; z++) {
            var ee = f.attribList[z], ne = ee[0], ye = ee[1], Z = Oe(ne, !0), he = Z.prefix, ht = Z.local, Le = he === "" ? "" : I.ns[he] || "", Ee = {
              name: ne,
              value: ye,
              prefix: he,
              local: ht,
              uri: Le
            };
            he && he !== "xmlns" && !Le && (L(
              f,
              "Unbound namespace prefix: " + JSON.stringify(he)
            ), Ee.uri = he), f.tag.attributes[ne] = Ee, V(f, "onattribute", Ee);
          }
          f.attribList.length = 0;
        }
        f.tag.isSelfClosing = !!c, f.sawRoot = !0, f.tags.push(f.tag), V(f, "onopentag", f.tag), c || (!f.noscript && f.tagName.toLowerCase() === "script" ? f.state = C.SCRIPT : f.state = C.TEXT, f.tag = null, f.tagName = ""), f.attribName = f.attribValue = "", f.attribList.length = 0;
      }
      function te(f) {
        if (!f.tagName) {
          L(f, "Weird empty close tag."), f.textNode += "</>", f.state = C.TEXT;
          return;
        }
        if (f.script) {
          if (f.tagName !== "script") {
            f.script += "</" + f.tagName + ">", f.tagName = "", f.state = C.SCRIPT;
            return;
          }
          V(f, "onscript", f.script), f.script = "";
        }
        var c = f.tags.length, I = f.tagName;
        f.strict || (I = I[f.looseCase]());
        for (var y = I; c--; ) {
          var M = f.tags[c];
          if (M.name !== y)
            L(f, "Unexpected close tag");
          else
            break;
        }
        if (c < 0) {
          L(f, "Unmatched closing tag: " + f.tagName), f.textNode += "</" + f.tagName + ">", f.state = C.TEXT;
          return;
        }
        f.tagName = I;
        for (var z = f.tags.length; z-- > c; ) {
          var X = f.tag = f.tags.pop();
          f.tagName = f.tag.name, V(f, "onclosetag", f.tagName);
          var ee = {};
          for (var ne in X.ns)
            ee[ne] = X.ns[ne];
          var ye = f.tags[f.tags.length - 1] || f;
          f.opt.xmlns && X.ns !== ye.ns && Object.keys(X.ns).forEach(function(Z) {
            var he = X.ns[Z];
            V(f, "onclosenamespace", { prefix: Z, uri: he });
          });
        }
        c === 0 && (f.closedRoot = !0), f.tagName = f.attribValue = f.attribName = "", f.attribList.length = 0, f.state = C.TEXT;
      }
      function Ke(f) {
        var c = f.entity, I = c.toLowerCase(), y, M = "";
        return f.ENTITIES[c] ? f.ENTITIES[c] : f.ENTITIES[I] ? f.ENTITIES[I] : (c = I, c.charAt(0) === "#" && (c.charAt(1) === "x" ? (c = c.slice(2), y = parseInt(c, 16), M = y.toString(16)) : (c = c.slice(1), y = parseInt(c, 10), M = y.toString(10))), c = c.replace(/^0+/, ""), isNaN(y) || M.toLowerCase() !== c || y < 0 || y > 1114111 ? (L(f, "Invalid character entity"), "&" + f.entity + ";") : String.fromCodePoint(y));
      }
      function Me(f, c) {
        c === "<" ? (f.state = C.OPEN_WAKA, f.startTagPosition = f.position) : k(c) || (L(f, "Non-whitespace before first tag."), f.textNode = c, f.state = C.TEXT);
      }
      function xe(f, c) {
        var I = "";
        return c < f.length && (I = f.charAt(c)), I;
      }
      function He(f) {
        var c = this;
        if (this.error)
          throw this.error;
        if (c.closed)
          return me(
            c,
            "Cannot write after close. Assign an onready handler."
          );
        if (f === null)
          return ze(c);
        typeof f == "object" && (f = f.toString());
        for (var I = 0, y = ""; y = xe(f, I++), c.c = y, !!y; )
          switch (c.trackPosition && (c.position++, y === `
` ? (c.line++, c.column = 0) : c.column++), c.state) {
            case C.BEGIN:
              if (c.state = C.BEGIN_WHITESPACE, y === "\uFEFF")
                continue;
              Me(c, y);
              continue;
            case C.BEGIN_WHITESPACE:
              Me(c, y);
              continue;
            case C.TEXT:
              if (c.sawRoot && !c.closedRoot) {
                for (var z = I - 1; y && y !== "<" && y !== "&"; )
                  y = xe(f, I++), y && c.trackPosition && (c.position++, y === `
` ? (c.line++, c.column = 0) : c.column++);
                c.textNode += f.substring(z, I - 1);
              }
              y === "<" && !(c.sawRoot && c.closedRoot && !c.strict) ? (c.state = C.OPEN_WAKA, c.startTagPosition = c.position) : (!k(y) && (!c.sawRoot || c.closedRoot) && L(c, "Text data outside of root node."), y === "&" ? c.state = C.TEXT_ENTITY : c.textNode += y);
              continue;
            case C.SCRIPT:
              y === "<" ? c.state = C.SCRIPT_ENDING : c.script += y;
              continue;
            case C.SCRIPT_ENDING:
              y === "/" ? c.state = C.CLOSE_TAG : (c.script += "<" + y, c.state = C.SCRIPT);
              continue;
            case C.OPEN_WAKA:
              if (y === "!")
                c.state = C.SGML_DECL, c.sgmlDecl = "";
              else if (!k(y)) if (re(O, y))
                c.state = C.OPEN_TAG, c.tagName = y;
              else if (y === "/")
                c.state = C.CLOSE_TAG, c.tagName = "";
              else if (y === "?")
                c.state = C.PROC_INST, c.procInstName = c.procInstBody = "";
              else {
                if (L(c, "Unencoded <"), c.startTagPosition + 1 < c.position) {
                  var M = c.position - c.startTagPosition;
                  y = new Array(M).join(" ") + y;
                }
                c.textNode += "<" + y, c.state = C.TEXT;
              }
              continue;
            case C.SGML_DECL:
              if (c.sgmlDecl + y === "--") {
                c.state = C.COMMENT, c.comment = "", c.sgmlDecl = "";
                continue;
              }
              c.doctype && c.doctype !== !0 && c.sgmlDecl ? (c.state = C.DOCTYPE_DTD, c.doctype += "<!" + c.sgmlDecl + y, c.sgmlDecl = "") : (c.sgmlDecl + y).toUpperCase() === T ? (V(c, "onopencdata"), c.state = C.CDATA, c.sgmlDecl = "", c.cdata = "") : (c.sgmlDecl + y).toUpperCase() === R ? (c.state = C.DOCTYPE, (c.doctype || c.sawRoot) && L(
                c,
                "Inappropriately located doctype declaration"
              ), c.doctype = "", c.sgmlDecl = "") : y === ">" ? (V(c, "onsgmldeclaration", c.sgmlDecl), c.sgmlDecl = "", c.state = C.TEXT) : (F(y) && (c.state = C.SGML_DECL_QUOTED), c.sgmlDecl += y);
              continue;
            case C.SGML_DECL_QUOTED:
              y === c.q && (c.state = C.SGML_DECL, c.q = ""), c.sgmlDecl += y;
              continue;
            case C.DOCTYPE:
              y === ">" ? (c.state = C.TEXT, V(c, "ondoctype", c.doctype), c.doctype = !0) : (c.doctype += y, y === "[" ? c.state = C.DOCTYPE_DTD : F(y) && (c.state = C.DOCTYPE_QUOTED, c.q = y));
              continue;
            case C.DOCTYPE_QUOTED:
              c.doctype += y, y === c.q && (c.q = "", c.state = C.DOCTYPE);
              continue;
            case C.DOCTYPE_DTD:
              y === "]" ? (c.doctype += y, c.state = C.DOCTYPE) : y === "<" ? (c.state = C.OPEN_WAKA, c.startTagPosition = c.position) : F(y) ? (c.doctype += y, c.state = C.DOCTYPE_DTD_QUOTED, c.q = y) : c.doctype += y;
              continue;
            case C.DOCTYPE_DTD_QUOTED:
              c.doctype += y, y === c.q && (c.state = C.DOCTYPE_DTD, c.q = "");
              continue;
            case C.COMMENT:
              y === "-" ? c.state = C.COMMENT_ENDING : c.comment += y;
              continue;
            case C.COMMENT_ENDING:
              y === "-" ? (c.state = C.COMMENT_ENDED, c.comment = ve(c.opt, c.comment), c.comment && V(c, "oncomment", c.comment), c.comment = "") : (c.comment += "-" + y, c.state = C.COMMENT);
              continue;
            case C.COMMENT_ENDED:
              y !== ">" ? (L(c, "Malformed comment"), c.comment += "--" + y, c.state = C.COMMENT) : c.doctype && c.doctype !== !0 ? c.state = C.DOCTYPE_DTD : c.state = C.TEXT;
              continue;
            case C.CDATA:
              for (var z = I - 1; y && y !== "]"; )
                y = xe(f, I++), y && c.trackPosition && (c.position++, y === `
` ? (c.line++, c.column = 0) : c.column++);
              c.cdata += f.substring(z, I - 1), y === "]" && (c.state = C.CDATA_ENDING);
              continue;
            case C.CDATA_ENDING:
              y === "]" ? c.state = C.CDATA_ENDING_2 : (c.cdata += "]" + y, c.state = C.CDATA);
              continue;
            case C.CDATA_ENDING_2:
              y === ">" ? (c.cdata && V(c, "oncdata", c.cdata), V(c, "onclosecdata"), c.cdata = "", c.state = C.TEXT) : y === "]" ? c.cdata += "]" : (c.cdata += "]]" + y, c.state = C.CDATA);
              continue;
            case C.PROC_INST:
              y === "?" ? c.state = C.PROC_INST_ENDING : k(y) ? c.state = C.PROC_INST_BODY : c.procInstName += y;
              continue;
            case C.PROC_INST_BODY:
              if (!c.procInstBody && k(y))
                continue;
              y === "?" ? c.state = C.PROC_INST_ENDING : c.procInstBody += y;
              continue;
            case C.PROC_INST_ENDING:
              y === ">" ? (V(c, "onprocessinginstruction", {
                name: c.procInstName,
                body: c.procInstBody
              }), c.procInstName = c.procInstBody = "", c.state = C.TEXT) : (c.procInstBody += "?" + y, c.state = C.PROC_INST_BODY);
              continue;
            case C.OPEN_TAG:
              re(S, y) ? c.tagName += y : (lt(c), y === ">" ? $(c) : y === "/" ? c.state = C.OPEN_TAG_SLASH : (k(y) || L(c, "Invalid character in tag name"), c.state = C.ATTRIB));
              continue;
            case C.OPEN_TAG_SLASH:
              y === ">" ? ($(c, !0), te(c)) : (L(
                c,
                "Forward-slash in opening tag not followed by >"
              ), c.state = C.ATTRIB);
              continue;
            case C.ATTRIB:
              if (k(y))
                continue;
              y === ">" ? $(c) : y === "/" ? c.state = C.OPEN_TAG_SLASH : re(O, y) ? (c.attribName = y, c.attribValue = "", c.state = C.ATTRIB_NAME) : L(c, "Invalid attribute name");
              continue;
            case C.ATTRIB_NAME:
              y === "=" ? c.state = C.ATTRIB_VALUE : y === ">" ? (L(c, "Attribute without value"), c.attribValue = c.attribName, Ue(c), $(c)) : k(y) ? c.state = C.ATTRIB_NAME_SAW_WHITE : re(S, y) ? c.attribName += y : L(c, "Invalid attribute name");
              continue;
            case C.ATTRIB_NAME_SAW_WHITE:
              if (y === "=")
                c.state = C.ATTRIB_VALUE;
              else {
                if (k(y))
                  continue;
                L(c, "Attribute without value"), c.tag.attributes[c.attribName] = "", c.attribValue = "", V(c, "onattribute", {
                  name: c.attribName,
                  value: ""
                }), c.attribName = "", y === ">" ? $(c) : re(O, y) ? (c.attribName = y, c.state = C.ATTRIB_NAME) : (L(c, "Invalid attribute name"), c.state = C.ATTRIB);
              }
              continue;
            case C.ATTRIB_VALUE:
              if (k(y))
                continue;
              F(y) ? (c.q = y, c.state = C.ATTRIB_VALUE_QUOTED) : (c.opt.unquotedAttributeValues || me(c, "Unquoted attribute value"), c.state = C.ATTRIB_VALUE_UNQUOTED, c.attribValue = y);
              continue;
            case C.ATTRIB_VALUE_QUOTED:
              if (y !== c.q) {
                y === "&" ? c.state = C.ATTRIB_VALUE_ENTITY_Q : c.attribValue += y;
                continue;
              }
              Ue(c), c.q = "", c.state = C.ATTRIB_VALUE_CLOSED;
              continue;
            case C.ATTRIB_VALUE_CLOSED:
              k(y) ? c.state = C.ATTRIB : y === ">" ? $(c) : y === "/" ? c.state = C.OPEN_TAG_SLASH : re(O, y) ? (L(c, "No whitespace between attributes"), c.attribName = y, c.attribValue = "", c.state = C.ATTRIB_NAME) : L(c, "Invalid attribute name");
              continue;
            case C.ATTRIB_VALUE_UNQUOTED:
              if (!ue(y)) {
                y === "&" ? c.state = C.ATTRIB_VALUE_ENTITY_U : c.attribValue += y;
                continue;
              }
              Ue(c), y === ">" ? $(c) : c.state = C.ATTRIB;
              continue;
            case C.CLOSE_TAG:
              if (c.tagName)
                y === ">" ? te(c) : re(S, y) ? c.tagName += y : c.script ? (c.script += "</" + c.tagName, c.tagName = "", c.state = C.SCRIPT) : (k(y) || L(c, "Invalid tagname in closing tag"), c.state = C.CLOSE_TAG_SAW_WHITE);
              else {
                if (k(y))
                  continue;
                Ne(O, y) ? c.script ? (c.script += "</" + y, c.state = C.SCRIPT) : L(c, "Invalid tagname in closing tag.") : c.tagName = y;
              }
              continue;
            case C.CLOSE_TAG_SAW_WHITE:
              if (k(y))
                continue;
              y === ">" ? te(c) : L(c, "Invalid characters in closing tag");
              continue;
            case C.TEXT_ENTITY:
            case C.ATTRIB_VALUE_ENTITY_Q:
            case C.ATTRIB_VALUE_ENTITY_U:
              var X, ee;
              switch (c.state) {
                case C.TEXT_ENTITY:
                  X = C.TEXT, ee = "textNode";
                  break;
                case C.ATTRIB_VALUE_ENTITY_Q:
                  X = C.ATTRIB_VALUE_QUOTED, ee = "attribValue";
                  break;
                case C.ATTRIB_VALUE_ENTITY_U:
                  X = C.ATTRIB_VALUE_UNQUOTED, ee = "attribValue";
                  break;
              }
              if (y === ";") {
                var ne = Ke(c);
                c.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(ne) ? (c.entity = "", c.state = X, c.write(ne)) : (c[ee] += ne, c.entity = "", c.state = X);
              } else re(c.entity.length ? w : x, y) ? c.entity += y : (L(c, "Invalid character in entity name"), c[ee] += "&" + c.entity + y, c.entity = "", c.state = X);
              continue;
            default:
              throw new Error(c, "Unknown state: " + c.state);
          }
        return c.position >= c.bufferCheckPosition && r(c), c;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var f = String.fromCharCode, c = Math.floor, I = function() {
          var y = 16384, M = [], z, X, ee = -1, ne = arguments.length;
          if (!ne)
            return "";
          for (var ye = ""; ++ee < ne; ) {
            var Z = Number(arguments[ee]);
            if (!isFinite(Z) || // `NaN`, `+Infinity`, or `-Infinity`
            Z < 0 || // not a valid Unicode code point
            Z > 1114111 || // not a valid Unicode code point
            c(Z) !== Z)
              throw RangeError("Invalid code point: " + Z);
            Z <= 65535 ? M.push(Z) : (Z -= 65536, z = (Z >> 10) + 55296, X = Z % 1024 + 56320, M.push(z, X)), (ee + 1 === ne || M.length > y) && (ye += f.apply(null, M), M.length = 0);
          }
          return ye;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: I,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = I;
      })();
    })(h);
  })(pt)), pt;
}
var Cr = Er();
const Tr = /* @__PURE__ */ nr(Cr), Et = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", hs = 0, fs = 1, at = 2, gs = 3, ps = 4, ds = 0, ms = 1, Fe = 2, Ct = 3, ys = 4, Es = 5, Cs = 6;
class Tt {
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
    t = hs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = at;
          break;
        case "mixed":
          t = gs;
          break;
        case "empty":
          t = fs;
          break;
        case "elementOnly":
          t = ps;
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
    t = ds;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = ms;
          break;
        case "element":
          t = Fe;
          break;
        case "attribute":
          t = Ct;
          break;
        case "elementWildcard":
          t = ys;
          break;
        case "attributeWildcard":
          t = Es;
          break;
        case "group":
          t = Cs;
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
      if (this.getFeatureKind(r) !== Fe)
        continue;
      const u = this.getName(r) ?? r.getName();
      if (u !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && u === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== Ct)
        continue;
      const u = this.getName(r) ?? r.getName();
      if (u !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && u === s)
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
    const s = e.getEAnnotation(Et);
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
    const t = e.getEAnnotation(Et);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Ts = "FEATURE_NAME_MAP", Ns = "EXTENDED_META_DATA", Qe = 1, Ze = 2, Nt = 3, Ss = 4, St = 5;
class Nr {
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
class We {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = oe.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new Nr(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = oe.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Ts);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, n] of t)
        this.reverseFeatureNameMap.set(n, r);
    }
    const s = e.get(Ns);
    s instanceof Tt ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new Tt());
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? St;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Ze) : this.featuresToKinds.set(e, Qe);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const n = e.getEOpposite();
        !n || typeof n.isTransient != "function" || n.isTransient() || !n.isMany() ? this.featuresToKinds.set(e, Nt) : this.featuresToKinds.set(e, Ss);
      } else
        this.featuresToKinds.set(e, Nt);
    else
      this.featuresToKinds.set(e, St);
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
    const s = [], r = e.getObject(), n = e.getFeature(), u = e.getValues(), o = e.getPositions();
    for (let p = 0; p < u.length; p++) {
      const d = u[p], E = o[p];
      try {
        this.setValue(r, n, d, E);
      } catch (T) {
        s.push(T instanceof Error ? T : new Error(String(T)));
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
class Pt {
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
        const n = e.eProxyURI().toString(), u = n.indexOf("#");
        if (u > 0) {
          const o = D.createURI(n.substring(0, u)), p = n.substring(u + 1), d = s.getResource(o, !0);
          if (d) {
            const E = d.getEObject(p);
            if (E)
              return E;
          }
        } else if (u === 0) {
          const o = n.substring(1), p = t.getEObject(o);
          if (p)
            return p;
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
function Be(h, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return h.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let n = h;
  for (let u = 0; u < s.length - 1; u++) {
    const o = s[u], p = n.getESubpackages();
    n = null;
    for (let d = 0; d < p.length; d++) {
      const E = p.get(d);
      if (E.getName() === o) {
        n = E;
        break;
      }
    }
    if (!n)
      return null;
  }
  return n.getEClassifier(r);
}
const be = "error", Ae = "object", Sr = "unknownFeature", Kt = "reference", yt = "xmiWrapper", Ht = "deferredType";
class Is {
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
const _e = "http://www.w3.org/2001/XMLSchema-instance", et = "http://www.omg.org/XMI", It = "xmlns", Ir = "xsi", Ar = "xmi", As = "type", _s = "nil", Rs = "schemaLocation", At = "href", xs = "id";
class Bt {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || oe.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      this.objects.push(null), this.types.push(yt);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === yt ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === Ae) {
      const n = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && n) {
        const u = this.text.trim();
        if (u.length > 0) {
          const o = this.helper.getExtendedMetaData();
          if (o) {
            const p = n.eClass();
            if (o.getContentKind(p) === at) {
              const d = o.getSimpleContentFeature(p);
              d && this.setFeatureValue(n, d, u);
            }
          }
          this.handleProxy(n, u);
        }
      }
      this.text = null;
    } else if (r === be)
      this.objects.pop(), this.text = null;
    else if (r === Kt)
      this.objects.pop(), this.text = null;
    else if (r === Ht)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === yt)
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
        if (t.startsWith(It)) {
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
    const e = this.attribs.getValueByName(_e, Rs);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], n = t[s + 1];
      this.urisToLocations.set(r, D.createURI(n));
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
      const u = this.helper.getType(s, t);
      u && (n = this.helper.createObject(s, u));
    }
    n ? (this.processTopObject(n), this.handleObjectAttribs(n)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(_e, As) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, n = t;
    const u = t.indexOf(":");
    u !== -1 && (r = t.substring(0, u), n = t.substring(u + 1));
    const o = this.getFactoryForPrefix(r);
    if (!o)
      return this.error(`Factory not found for type '${t}'`), null;
    const p = this.helper.getType(o, n);
    return p ? this.helper.createObject(o, p) : (this.error(`Type '${n}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? Ae : be);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), n = this.attribs.getURI(t), u = this.attribs.getLocalName(t);
        if (!s.startsWith(It) && n !== _e) {
          if (n === et) {
            u === xs && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, u || s, r, n || null);
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
    const n = e.eClass(), u = this.helper.getFeature(n, r ?? null, t);
    u && this.setFeatureValue(e, u, s, -2);
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
      this.objects.push(null), this.types.push(be), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), n = e && this.helper.getURI(e) || null, u = this.helper.getFeatureWithElement(r, n, t, !0);
    if (u) {
      const o = this.helper.getFeatureKind(u);
      o === Qe || o === Ze ? (this.objects.push(null), this.types.push(u), this.isNull() || (this.text = "")) : this.createObject(s, u);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(_e, _s) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(At) || this.attribs?.getValueByName("", At);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(Kt);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType("", r, !1);
    else {
      let u = t.getEType();
      if (u && !("getESuperTypes" in u) && typeof u.eIsProxy == "function" && u.eIsProxy()) {
        const o = u.eProxyURI();
        if (o) {
          const p = o.toString(), d = p.indexOf("#");
          if (d > 0) {
            const E = p.substring(0, d), T = p.substring(d + 1), R = this.packageRegistry.getEPackage(E);
            if (R) {
              const _ = Be(R, T);
              _ && (u = _, typeof t.setEType == "function" && t.setEType(_));
            }
          }
        }
      }
      if (u && "getESuperTypes" in u) {
        const o = u;
        if (o.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(Ht);
          return;
        } else {
          const p = o.getEPackage()?.getEFactoryInstance();
          p && (n = p.create(o));
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
      const u = s.eClass(), o = n.getElementFeature(u, r, t);
      if (o) {
        const p = this.helper.getFeatureKind(o);
        p === Qe || p === Ze ? (this.objects.push(null), this.types.push(o), this.isNull() || (this.text = "")) : this.createObject(s, o);
        return;
      }
    }
    if (r) {
      const u = this.packageRegistry.getEPackage(r);
      if (u) {
        const o = u.getEClassifier(t);
        if (o && "getESuperTypes" in o) {
          const p = o, d = s.eClass();
          if (p === d) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(Ae);
            return;
          }
          if (d.isSuperTypeOf(p) && !p.isAbstract()) {
            const E = p.getEPackage()?.getEFactoryInstance();
            if (E) {
              const T = E.create(p);
              for (const _ of d.getEAllStructuralFeatures()) {
                if (_.isTransient() || _.isDerived())
                  continue;
                const b = s.eGet(_);
                if (b != null)
                  try {
                    T.eSet(_, b);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, T);
              const R = this.objects.length - 1;
              this.objects[R] = T, this.handleObjectAttribs(T), this.objects.push(T), this.types.push(Ae);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(be), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
    for (const u of n.getEAllStructuralFeatures()) {
      if (!("isContainment" in u))
        continue;
      const o = u;
      if (o.isContainment()) {
        if (o.isMany()) {
          const p = r.eGet(o);
          if (p) {
            for (let d = p.length - 1; d >= 0; d--)
              if (p[d] === e) {
                p[d] = t;
                return;
              }
          }
        } else if (r.eGet(o) === e) {
          r.eSet(o, t);
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
    let u = null;
    if (n) {
      const o = this.packageRegistry.getEPackage(n);
      if (o) {
        const p = o.getEClassifier(t);
        if (p && "getESuperTypes" in p) {
          const d = p;
          if (!d.isAbstract()) {
            const E = d.getEPackage()?.getEFactoryInstance();
            E && (u = E.create(d));
          }
        }
      }
    }
    u ? (this.helper.setValue(s, r, u, -1), this.handleObjectAttribs(u), this.objects[this.objects.length - 1] = u, this.types[this.types.length - 1] = Ae, this.objects.push(u), this.types.push(Ae)) : (this.objects.push(null), this.types.push(be), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const u = s.trim().split(/\s+/);
        for (const o of u)
          o && this.setValueFromId(e, t, o, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const o = t.getEType();
      let p = null;
      if (o && typeof o.getEPackage == "function")
        p = o.getEPackage()?.getEFactoryInstance() ?? null;
      else if (o && typeof o.eGet == "function" && typeof o.eClass == "function") {
        const d = o.eClass();
        if (d) {
          const E = d.getEStructuralFeature?.("ePackage");
          if (E) {
            const T = o.eGet(E);
            T?.getEFactoryInstance && (p = T.getEFactoryInstance());
          }
        }
      }
      try {
        if (p && o) {
          const d = p.createFromString(o, s);
          this.helper.setValue(e, t, d, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (d) {
        const E = d instanceof Error ? d.message : String(d);
        this.error(`Invalid value for feature '${t.getName()}': ${E}`);
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
    const u = t.indexOf("#");
    if (u > 0) {
      const E = t.substring(0, u), T = t.substring(u + 1);
      if (r && !E.includes("://")) {
        const R = r.toString();
        if (E === R || R.endsWith(E) || R.endsWith("/" + E))
          s = D.createURI(R + "#" + T);
        else {
          const _ = D.createURI(E).resolve(r);
          s = D.createURI(_.toString() + "#" + T);
        }
      } else
        s = D.createURI(t);
    } else u === 0 ? r ? s = D.createURI(r.toString() + t) : s = D.createURI(t) : (t.startsWith("/"), r ? s = D.createURI(r.toString() + "#" + t) : s = D.createURI("#" + t));
    const o = e.getEType(), p = o && "getESuperTypes" in o ? o : null, d = new Pt(s, p || void 0);
    return d.eSetResource(this.resource), d;
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
      const r = e.substring(0, s), n = e.substring(s + 1), o = this.resource.getURI()?.toString();
      if (o && (o === r || o.endsWith(r) || o.endsWith("/" + r) || r.endsWith(o)))
        return this.resource.getEObject(n);
      const p = this.packageRegistry.getEPackage(r);
      if (p)
        return this.resolveFragmentInPackage(p, n);
      const d = this.resource.getContents();
      for (let T = 0; T < d.length; T++) {
        const R = d.get(T);
        if (R && typeof R.getNsURI == "function") {
          const _ = R;
          if (_.getNsURI() === r)
            return this.resolveFragmentInPackage(_, n);
        }
      }
      const E = this.resource.getResourceSet();
      if (E) {
        const T = D.createURI(r), R = E.getResource(T, !0);
        if (R)
          return R.getEObject(n);
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
    const r = s.split("/"), n = Be(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let u = e;
      for (let d = 0; d < r.length - 2; d++) {
        const E = u.getESubpackages();
        let T = null;
        for (let R = 0; R < E.length; R++)
          if (E.get(R).getName() === r[d]) {
            T = E.get(R);
            break;
          }
        if (!T)
          return null;
        u = T;
      }
      const o = r[r.length - 2], p = u.getEClassifier(o);
      if (p && "getEStructuralFeature" in p) {
        const d = p.getEStructuralFeature(r[r.length - 1]);
        if (d)
          return d;
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
class kt {
  constructor(e) {
    this.helper = e || new We();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), n = this.makeDefaultHandler(e, r), u = Tr.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), o = new Is();
    u.onprocessinginstruction = (d) => {
      d.name;
    }, u.onopentag = (d) => {
      o.clear();
      const E = d;
      for (const [T, R] of Object.entries(E.attributes)) {
        const _ = R, b = _.prefix ? `${_.prefix}:${_.local}` : _.local;
        if (_.prefix === "xmlns" || _.name === "xmlns") {
          const B = _.prefix === "xmlns" ? _.local : "";
          n.startPrefixMapping(B, _.value);
        }
        o.add(b, _.local, _.uri, _.value);
      }
      n.lineNumber = u.line, n.columnNumber = u.column, n.startElement(E.uri, E.local, E.name, o);
    }, u.onclosetag = (d) => {
      const E = d.indexOf(":"), T = E >= 0 ? d.substring(E + 1) : d;
      n.endElement("", T, d);
    }, u.ontext = (d) => {
      d.trim() && n.characters(d);
    }, u.oncdata = (d) => {
      n.characters(d);
    }, u.onerror = (d) => {
      console.error("XML Parse Error:", d.message), n.error(d.message);
    }, u.write(t).close(), n.endDocument();
    const p = n.getErrors();
    if (p.length > 0 && e.getErrors) {
      const d = e.getErrors();
      for (const E of p) {
        const T = E.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        T ? d.push({
          message: T[3] || E.message,
          line: parseInt(T[1], 10),
          column: parseInt(T[2], 10)
        }) : d.push({ message: E.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new Bt(e, this.helper, t);
  }
}
class bs extends kt {
  constructor(e) {
    super(e || new ws());
  }
  makeDefaultHandler(e, t) {
    return new Fs(e, this.helper, t);
  }
}
class ws extends We {
}
class Fs extends Bt {
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
function _r(h) {
  return h !== null && typeof h == "object" && typeof h.eClass == "function" && typeof h.eGet == "function" && typeof h.eSet == "function";
}
function Ps(h) {
  return h != null && typeof h.getESuperTypes == "function" && typeof h.getEAllStructuralFeatures == "function";
}
function Rr(h) {
  return h != null && !Ps(h) && typeof h.isSerializable == "function";
}
function $e(h) {
  return h != null && typeof h.getELiterals == "function" && typeof h.getEEnumLiteral == "function";
}
function xr(h) {
  return h != null && typeof h.isID == "function" && typeof h.getEAttributeType == "function";
}
function br(h) {
  return h != null && typeof h.isContainment == "function" && typeof h.getEOpposite == "function";
}
function wr(h) {
  return h !== null && typeof h == "object" && typeof h.getNsURI == "function" && typeof h.getNsPrefix == "function" && typeof h.getEClassifiers == "function";
}
function Fr(h) {
  return h !== null && typeof h == "object" && typeof h.create == "function" && typeof h.createFromString == "function" && typeof h.convertToString == "function";
}
function Pr(h) {
  return h !== null && typeof h == "object" && typeof h.getEContainingClass == "function" && typeof h.getEParameters == "function";
}
function Br(h) {
  return h !== null && typeof h == "object" && typeof h.getEOperation == "function";
}
function kr(h) {
  return h !== null && typeof h == "object" && typeof h.getSource == "function" && typeof h.getDetails == "function";
}
function Dr(h) {
  return h !== null && typeof h == "object" && typeof h.getEContainingClass == "function" && typeof h.isTransient == "function" && typeof h.isVolatile == "function";
}
function vr(h) {
  return h !== null && typeof h == "object" && typeof h.getEPackage == "function" && typeof h.getInstanceClass == "function";
}
function Dt(h, e) {
  if (!h)
    return !1;
  const t = h.eClass();
  return t === e ? !0 : t.getEAllSuperTypes().includes(e);
}
function Or(h, e) {
  return Dt(h, e) ? h : null;
}
function Ur(h, e) {
  const t = [];
  for (const s of h)
    Dt(s, e) && t.push(s);
  return t;
}
class vt {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new We(), this.resource = null;
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
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${et}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${_e}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const n = r.getNsURI(), u = this.getPrefix(r);
      n && u && !s.has(u) && (this.output.push(` xmlns:${u}="${n}"`), this.declaredNamespaces.set(n, u), s.add(u));
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
    const s = e.eClass(), r = s.getEPackage(), n = r ? this.getPrefix(r) : "", u = s.getName() || "Object", o = n ? `${n}:${u}` : u;
    this.writeIndent(), this.output.push(`<${o}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const p = this.helper.getExtendedMetaData(), d = this.getSimpleContentText(e, p), E = this.hasElementContent(e);
    d !== null ? (this.output.push(`>${this.escapeXml(d)}`), E && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${o}>
`)) : E ? (this.output.push(`>
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent(), this.output.push(`</${o}>
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
    this.output.push(` xmlns:xmi="${et}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${_e}"`);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const u = n.getNsURI(), o = this.getPrefix(n);
      u && o && !s.has(o) && (this.output.push(` xmlns:${o}="${u}"`), this.declaredNamespaces.set(u, o), s.add(o));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (n) => {
      const u = n.eClass();
      for (const o of u.getEAllStructuralFeatures()) {
        const p = t.getNamespace(o);
        if (p && !this.declaredNamespaces.has(p) && p !== "http://www.w3.org/XML/1998/namespace") {
          const d = this.generatePrefix(p, s);
          d && (this.output.push(` xmlns:${d}="${p}"`), this.declaredNamespaces.set(p, d), s.add(d));
        }
      }
      for (const o of n.eContents())
        r(o);
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
      const u = `${r}${n}`;
      if (!t.has(u))
        return u;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const u = r.eClass().getEPackage();
      u && t.add(u);
      for (const o of r.eContents())
        s(o);
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
          if (s && s.getFeatureKind(r) === Fe)
            continue;
          const n = r;
          let u = e.eGet(n);
          if (u != null && (u = this.resolveValue(u, e), u != null)) {
            let o = null;
            try {
              o = n.getDefaultValue();
            } catch {
            }
            if (u !== o) {
              const p = this.convertToString(n, u), d = this.getSerializedAttributeName(n, s);
              this.output.push(` ${d}="${this.escapeXml(p)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const n = r;
          if (!n.isContainment()) {
            let u = e.eGet(n);
            if (u != null) {
              const o = this.helper.getSerializedFeatureName(n);
              if (r.isMany()) {
                if (Array.isArray(u) || se(u)) {
                  const p = [];
                  for (const d of u) {
                    const E = this.resolveValue(d, e);
                    if (E == null || typeof E == "string")
                      continue;
                    const T = E.eResource?.();
                    if (T && T === this.resource) {
                      const R = this.getHref(E);
                      R && p.push(R);
                    }
                  }
                  p.length > 0 && this.output.push(` ${o}="${this.escapeXml(p.join(" "))}"`);
                }
              } else if (u = this.resolveValue(u, e), u != null)
                if (typeof u == "string")
                  this.output.push(` ${o}="${this.escapeXml(u)}"`);
                else if (typeof u == "boolean")
                  this.output.push(` ${o}="${u ? "true" : "false"}"`);
                else if (typeof u == "number")
                  this.output.push(` ${o}="${String(u)}"`);
                else {
                  const p = this.getTypePrefixedHref(n, u);
                  p && this.output.push(` ${o}="${this.escapeXml(p)}"`);
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
    if (ie(e) && e.eIsProxy()) {
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
        const n = r.getEPackage?.(), u = r.getName?.(), o = e.getName?.();
        if (n && u && o) {
          const p = n.getNsURI?.();
          if (p)
            return `${p}#//${u}/${o}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const n = r.getNsURI?.(), u = e.getName?.();
        if (n && u)
          return `${n}#//${u}`;
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
      const u = e.getName?.(), o = n.getName?.();
      if (!u || !o)
        return null;
      t.push(o, u), s = n.getEPackage?.() ?? null;
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
      const u = s.getName?.();
      u && t.unshift(u), s = n;
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
    const n = e.getEType(), u = t.eClass();
    if (n && u && u !== n && "isAbstract" in n && n.isAbstract()) {
      const o = u.getEPackage();
      if (o) {
        const p = this.getPrefix(o), d = u.getName();
        if (p && d)
          return `${p}:${d} ${s}`;
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
        if (n.isTransient() || n.isDerived() || !this.isAttribute(n) || r.getFeatureKind(n) !== Fe)
          continue;
        const u = e.eGet(n);
        if (u != null)
          return !0;
      }
    for (const n of s)
      if ("isContainment" in n) {
        const u = n;
        if (n.isTransient())
          continue;
        const o = e.eGet(u);
        if (o == null)
          continue;
        if (u.isContainment()) {
          if ((Array.isArray(o) || se(o)) && o.length > 0 || !Array.isArray(o) && !se(o))
            return !0;
        } else if (n.isMany() && (Array.isArray(o) || se(o)) && o.length > 0)
          for (const p of o) {
            const d = p.eResource?.();
            if (!d || d !== this.resource)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== Fe)
          continue;
        const u = e.eGet(r);
        if (u == null)
          continue;
        const o = this.getSerializedElementName(r, s), p = r;
        if (r.isMany() && (Array.isArray(u) || se(u))) {
          for (const d of u)
            if (d != null) {
              this.writeIndent();
              const E = this.convertSingleValueToString(p, d);
              this.output.push(`<${o}>${this.escapeXml(E)}</${o}>
`);
            }
        } else {
          this.writeIndent();
          const d = this.convertToString(p, u);
          this.output.push(`<${o}>${this.escapeXml(d)}</${o}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const n = r;
        if (r.isTransient())
          continue;
        const u = e.eGet(n);
        if (u == null)
          continue;
        if (n.isContainment())
          if (Array.isArray(u) || se(u))
            for (const o of u)
              this.writeElement(n, o);
          else
            this.writeElement(n, u);
        else if (r.isMany() && (Array.isArray(u) || se(u)) && u.length > 0)
          for (const o of u) {
            const p = this.resolveValue(o, e);
            if (p == null)
              continue;
            const d = typeof p != "string" ? p.eResource?.() : null;
            if (d && d === this.resource)
              continue;
            const E = typeof p == "string" ? p : this.getHref(p);
            E && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(n)} href="${this.escapeXml(E)}"/>
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
    const n = e.getEType(), u = t.eClass();
    if (n && u && u !== n) {
      const d = u.getEPackage(), E = d ? this.getPrefix(d) : "", T = E ? `${E}:${u.getName()}` : u.getName();
      this.output.push(` xsi:type="${T}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const o = this.getSimpleContentText(t, s), p = this.hasElementContent(t);
    o !== null ? (this.output.push(`>${this.escapeXml(o)}`), p && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : p ? (this.output.push(`>
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
    if (ie(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(ie(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const n = s.toString(), u = n.indexOf("#");
          if (u >= 0) {
            const o = n.substring(u + 1);
            let p = this.resource;
            if (u > 0) {
              const d = D.createURI(n.substring(0, u));
              p = r.getResource(d, !0) || this.resource;
            }
            if (p) {
              const d = p.getEObject(o);
              if (d)
                return d;
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
    if (Array.isArray(t) || se(t)) {
      const r = [];
      for (const n of t)
        n != null && r.push(this.convertSingleValueToString(e, n));
      return r.join(" ");
    }
    if ($e(e.getEType()))
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
    if (!$e(e.getEType())) {
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
        const u = n.getEFactoryInstance();
        if (u)
          return u.convertToString(r, t);
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
    if (t.getContentKind(s) !== at)
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
class Bs extends vt {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
const Mr = "DEFER_ATTACHMENT", Lr = "DEFER_IDREF_RESOLUTION", jr = "USE_DEPRECATED_METHODS", Gr = "RECORD_UNKNOWN_FEATURE";
class Ot extends it {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new We(this);
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
        const n = await s.createInputStream(r), u = await $r(n);
        this.loadFromString(u, e);
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
    return new kt(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new vt(this.xmlHelper);
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
class ks extends Ot {
  createXMLLoad() {
    return new bs(this.xmlHelper);
  }
  createXMLSave() {
    return new Bs(this.xmlHelper);
  }
}
async function $r(h) {
  const e = h.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: n } = await e.read();
    if (r)
      break;
    s += t.decode(n, { stream: !0 });
  }
  return s += t.decode(), s;
}
class Ds {
  createResource(e) {
    return new Ot(e);
  }
}
class Xe {
  createResource(e) {
    return new ks(e);
  }
}
const ke = Pe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
ke.has("xml") || ke.set("xml", new Ds());
ke.has("xmi") || ke.set("xmi", new Xe());
ke.has("ecore") || ke.set("ecore", new Xe());
class vs {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || oe.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (n) {
      this.error(`Invalid JSON: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    if (Array.isArray(r))
      for (const n of r) {
        const u = this.loadObject(n);
        u && e.getContents().push(u);
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
    const u = r.getEFactoryInstance().create(s);
    for (const [o, p] of Object.entries(e)) {
      if (o === "eClass" || p == null)
        continue;
      const d = s.getEStructuralFeature(o);
      if (!d) {
        this.error(`Unknown feature '${o}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(d))
        this.loadAttribute(u, d, p);
      else {
        const E = d;
        E.isContainment() ? this.loadContainment(u, E, p) : this.loadCrossReference(u, E, p);
      }
    }
    return u;
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
    const u = n.getEClassifier(r);
    return u ? "getESuperTypes" in u ? u : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], n = e.eGet(t);
      if (n && (Array.isArray(n) || se(n)))
        for (const u of r)
          n.push(this.convertAttributeValue(t, u));
      else
        e.eSet(t, r.map((u) => this.convertAttributeValue(t, u)));
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
      const n = Array.isArray(s) ? s : [s], u = e.eGet(t);
      for (const o of n)
        if (o && typeof o == "object") {
          const p = this.loadObject(o, r);
          p && u && (Array.isArray(u) || se(u)) && u.push(p);
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
      r && (Array.isArray(r) || se(r)) && r.push(s);
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
      const u = this.packageRegistry.getEPackage(s);
      if (u)
        return this.resolveFragmentInPackage(u, r);
      const o = this.resource.getResourceSet();
      if (o) {
        const p = D.createURI(s), d = o.getResource(p, !0);
        if (d)
          return d.getEObject(r);
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
    const r = s.split("/"), n = Be(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let u = e;
      for (let d = 0; d < r.length - 2; d++) {
        const E = u.getESubpackages();
        let T = null;
        for (let R = 0; R < E.length; R++)
          if (E.get(R).getName() === r[d]) {
            T = E.get(R);
            break;
          }
        if (!T)
          return null;
        u = T;
      }
      const o = r[r.length - 2], p = u.getEClassifier(o);
      if (p && "getEStructuralFeature" in p) {
        const d = p.getEStructuralFeature(r[r.length - 1]);
        if (d)
          return d;
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
      s = D.createURI(t);
    else if (r === 0) {
      const p = this.resource.getURI();
      p ? s = D.createURI(p.toString() + t) : s = D.createURI(t);
    } else {
      const p = this.resource.getURI();
      p ? s = D.createURI(p.toString() + "#" + t) : s = D.createURI("#" + t);
    }
    const n = e.getEType(), u = n && "getESuperTypes" in n ? n : null, o = new Pt(s, u || void 0);
    return o.eSetResource(this.resource), o;
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
const _t = "SERIALIZE_TYPE", Rt = "INDENT", Os = "always", Us = "polymorphic";
class Ms {
  constructor() {
    this.serializeType = Us, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(_t) && (this.serializeType = t.get(_t)), t.has(Rt) && (this.indent = t.get(Rt)));
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
    for (const u of n.getEAllStructuralFeatures()) {
      if (u.isTransient() || u.isDerived())
        continue;
      const o = e.eGet(u);
      if (o != null)
        if (this.isAttribute(u))
          this.saveAttribute(r, e, u, o);
        else {
          const p = u;
          p.isContainment() ? this.saveContainment(r, e, p, o) : this.saveCrossReference(r, e, p, o);
        }
    }
    return r;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(e, t, s, r) {
    try {
      const u = s.getDefaultValue();
      if (r === u)
        return;
    } catch {
    }
    const n = s.getName();
    if (s.isMany()) {
      const u = Array.isArray(r) || se(r) ? [...r] : [r];
      if (u.length === 0)
        return;
      e[n] = u.map((o) => this.convertAttributeValue(s, o));
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
      const u = Array.isArray(r) || se(r) ? [...r] : [r];
      if (u.length === 0)
        return;
      e[n] = u.map((o) => this.saveContainedChild(o, s));
    } else
      e[n] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (ie(e) && e.eIsProxy()) {
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
      const u = Array.isArray(r) || se(r) ? [...r] : [r];
      if (u.length === 0)
        return;
      const o = [];
      for (const p of u) {
        const d = this.getHref(p);
        d && o.push({ $ref: d });
      }
      o.length > 0 && (e[n] = o);
    } else {
      const u = this.getHref(r);
      u && (e[n] = { $ref: u });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === Os || s)
      return !0;
    if (t && "isContainment" in t) {
      const n = t.getEType(), u = e.eClass();
      return !!(n && u && n !== u);
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
    if (ie(e) && e.eIsProxy())
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
        const r = s.getEPackage?.(), n = s.getName?.(), u = e.getName?.();
        if (r && n && u) {
          const o = r.getNsURI?.();
          if (o)
            return `${o}#//${n}/${u}`;
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
class Ls extends it {
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
      const u = this.getErrors();
      for (const o of n)
        u.push({ message: o.message });
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
    return new vs();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new Ms();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class js {
  createResource(e) {
    return new Ls(e);
  }
}
const Vt = Pe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
Vt.has("json") || Vt.set("json", new js());
class ae {
  /**
   * Resolves the given proxy in the context of the given object.
   * If the proxy cannot be resolved, returns the proxy itself.
   *
   * @param proxy the proxy to resolve
   * @param context the context object (used to get resource set)
   * @returns the resolved object, or the proxy if it cannot be resolved
   */
  static resolve(e, t) {
    if (!e || !ie(e) || !e.eIsProxy())
      return e;
    if (ie(t))
      return t.eResolveProxy(e);
    if (!e.eProxyURI())
      return e;
    const r = t.eResource?.();
    return r ? ae.resolveWithResource(e, r) : e;
  }
  /**
   * Resolves the given proxy using the given resource.
   */
  static resolveWithResource(e, t) {
    if (!ie(e) || !e.eIsProxy() || !e.eProxyURI())
      return e;
    const r = t.getResourceSet();
    return r ? ae.resolveWithResourceSet(e, r, t.getURI() ?? void 0) : e;
  }
  /**
   * Resolves the given proxy using the given resource set.
   *
   * @param proxy the proxy to resolve
   * @param resourceSet the resource set to use for resolution
   * @param baseURI optional base URI for resolving relative references
   */
  static resolveWithResourceSet(e, t, s) {
    if (!ie(e) || !e.eIsProxy())
      return e;
    const r = e.eProxyURI();
    if (!r)
      return e;
    const n = r.toString(), u = n.indexOf("#");
    if (u > 0) {
      const o = n.substring(0, u), p = n.substring(u + 1);
      let d;
      s && !o.includes("://") ? d = s.resolve(D.createURI(o)) : d = D.createURI(o);
      const E = t.getResource(d, !0);
      if (E) {
        const T = E.getEObject(p);
        if (T)
          return T;
      }
    } else if (u === 0) {
      const o = n.substring(1);
      for (const p of t.getResources()) {
        const d = p.getEObject(o);
        if (d)
          return d;
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
      ae.resolveAllInObject(s);
  }
  /**
   * Resolves all proxies in the given resource set.
   */
  static resolveAllInResourceSet(e) {
    for (const t of e.getResources())
      ae.resolveAll(t);
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
            const u = r[n];
            if (u && ie(u) && u.eIsProxy()) {
              const o = ae.resolve(u, e);
              o !== u && (r[n] = o);
            }
          }
        else if (ie(r) && r.eIsProxy()) {
          const n = ae.resolve(r, e);
          n !== r && e.eSet(s, n);
        }
      }
    }
    for (const s of e.eContents())
      ae.resolveAllInObject(s);
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
    return s && r ? D.createURI(`${s.toString()}#${r}`) : s;
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
    const t = e.eClass(), s = ae.create(t);
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
      ae.isInstance(r, t) && s.push(r);
      for (const n of r.eAllContents())
        ae.isInstance(n, t) && s.push(n);
    }
    return s;
  }
  /**
   * Returns true if the object is an instance of the given type.
   */
  static isInstance(e, t) {
    const s = e.eClass();
    return s === t || ae.isSuperTypeOf(t, s);
  }
  /**
   * Returns true if superType is a supertype of subType.
   */
  static isSuperTypeOf(e, t) {
    const s = t.getESuperTypes();
    for (const r of s)
      if (r === e || ae.isSuperTypeOf(e, r))
        return !0;
    return !1;
  }
}
class De {
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
De.OK_INSTANCE = new De(0, "", "OK");
class tt {
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
tt.INSTANCE = new tt();
class xt {
  constructor(e) {
    this.registry = e ?? tt.INSTANCE;
  }
  validate(e) {
    const t = new De(0, "org.eclipse.emf.ecore", `Diagnosis of ${this.getObjectLabel(e)}`, [e]);
    return this.doValidate(e, t), this.validateContents(e, t), t;
  }
  doValidate(e, t) {
    const r = e.eClass()?.getEPackage();
    if (!r)
      return;
    const n = r.getNsURI();
    if (!n)
      return;
    const u = this.registry.getValidator(n);
    u && u.validate(e, t);
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
xt.INSTANCE = new xt();
class Xr {
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
        const s = new Re(this, v.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), wt(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
    }
    return !1;
  }
}
class qr extends us {
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
      case v.RESOLVE: {
        const t = e.getOldValue();
        if (t && this.hasAdapter(t)) {
          this.removeAdapter(t);
          const s = e.getNewValue();
          s && this.addAdapter(s);
        }
        break;
      }
      case v.UNSET: {
        const t = e.getOldValue();
        if (t !== !0 && t !== !1) {
          t != null && this.removeAdapterWithChecks(t, !1, !0);
          const s = e.getNewValue();
          s != null && this.addAdapter(s);
        }
        break;
      }
      case v.SET: {
        const t = e.getOldValue();
        t != null && this.removeAdapterWithChecks(t, !1, !0);
        const s = e.getNewValue();
        s != null && this.addAdapter(s);
        break;
      }
      case v.ADD: {
        const t = e.getNewValue();
        t != null && this.addAdapter(t);
        break;
      }
      case v.ADD_MANY: {
        const t = e.getNewValue();
        if (t)
          for (const s of t)
            this.addAdapter(s);
        break;
      }
      case v.REMOVE: {
        const t = e.getOldValue();
        if (t != null) {
          const s = this.isResource(e.getNotifier()), r = e.getFeature() != null;
          this.removeAdapterWithChecks(t, s, r);
        }
        break;
      }
      case v.REMOVE_MANY: {
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
class Wr {
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
const H = new Wr();
class q extends le {
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
      const e = this, t = new ts(this, () => {
        if (H.isRegistered())
          try {
            const s = H.getEClassClass();
            if (s !== e && s instanceof q && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = ge(t);
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
        if (r instanceof q) {
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
    return H.getEClassClass();
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
class Yr {
  constructor(e) {
    this.eClass = new q(), this.eClass.setName(e);
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
class zr {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (T) => T.toLowerCase() === "true",
      toString: (T) => String(T)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (T) => parseInt(T, 10),
      toString: (T) => String(T)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (T) => {
        const R = parseInt(T, 10);
        return Math.abs(R) > Number.MAX_SAFE_INTEGER ? BigInt(T) : R;
      },
      toString: (T) => String(T)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (T) => parseFloat(T),
      toString: (T) => String(T)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const n = {
      fromString: (T) => T,
      toString: (T) => T ?? ""
    };
    this.registerByClassName("java.lang.String", n), this.registerByClassName("java.lang.Object", n), this.registerByName("EString", n);
    const u = {
      fromString: (T) => T.charAt(0) || "",
      toString: (T) => T ?? ""
    };
    this.registerByClassName("char", u), this.registerByClassName("java.lang.Character", u), this.registerByName("EChar", u), this.registerByName("ECharacterObject", u);
    const o = {
      fromString: (T) => new Date(T),
      toString: (T) => T?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", o), this.registerByName("EDate", o);
    const p = {
      fromString: (T) => T,
      // Keep as string to preserve precision
      toString: (T) => T ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", p), this.registerByClassName("java.math.BigInteger", p), this.registerByName("EBigDecimal", p), this.registerByName("EBigInteger", p);
    const d = {
      fromString: (T) => {
        if (typeof atob == "function") {
          const R = atob(T), _ = new Uint8Array(R.length);
          for (let b = 0; b < R.length; b++)
            _[b] = R.charCodeAt(b);
          return _;
        }
        return new Uint8Array(Buffer.from(T, "base64"));
      },
      toString: (T) => typeof btoa == "function" ? btoa(String.fromCharCode(...T)) : Buffer.from(T).toString("base64")
    };
    this.registerByClassName("byte[]", d), this.registerByName("EByteArray", d);
    const E = {
      fromString: (T) => T,
      toString: (T) => String(T ?? "")
    };
    this.registerByName("EFeatureMapEntry", E);
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
    if ($e(e)) {
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
    if ($e(e)) {
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
const P = new zr();
class ot {
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
    return new Ft(e);
  }
  createFromString(e, t) {
    return P.createFromString(e, t);
  }
  convertToString(e, t) {
    return P.convertToString(e, t);
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
    return H.getEFactoryClass();
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
class Kr extends de {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && H.isRegistered()) {
      const t = H.getEPackageClass();
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
class Hr extends de {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && H.isRegistered()) {
      const e = H.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof fe && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof fe && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof fe && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof fe && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof fe && (s.eSuperPackage = null), t instanceof fe && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class fe extends le {
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
      const e = new ot();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = ge(new Kr(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = ge(new Hr(this))), this._eSubpackages;
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
    return H.getEPackageClass();
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
class Ut extends fe {
  static create(e) {
    const t = new Ut(e.nsURI, e.factory);
    return t.setName(e.name), t.setNsPrefix(e.nsPrefix), t;
  }
  /**
   * Builder-style API for adding classifiers
   */
  withClassifier(e) {
    return this.addClassifier(e), this;
  }
}
class Mt extends le {
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
    if (this.eType && ie(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), n = r.indexOf("#");
        if (n > 0) {
          const u = r.substring(0, n), o = r.substring(n + 1), p = [oe.INSTANCE];
          let d = this.eResource()?.getResourceSet();
          if (!d) {
            let E = this.eContainingClass;
            for (; E; ) {
              if (typeof E.eResource == "function") {
                const T = E.eResource();
                if (T) {
                  d = T.getResourceSet();
                  break;
                }
              }
              E = E.getEPackage?.() ?? E.getESuperPackage?.() ?? E.eContainer?.();
            }
          }
          d && p.push(d.getPackageRegistry());
          for (const E of p) {
            const T = E.getEPackage(u);
            if (T) {
              const B = Be(T, o);
              if (B)
                return this.eType = B, this.eType;
            }
            let R = u;
            const _ = R.lastIndexOf("/");
            _ >= 0 && (R = R.substring(_ + 1));
            const b = R.indexOf(".");
            if (b > 0 && (R = R.substring(0, b)), R)
              for (const B of E.keys()) {
                const O = E.getEPackage(B);
                if (O && O.getName() === R) {
                  const S = Be(O, o);
                  if (S)
                    return this.eType = S, this.eType;
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
    return H.getEStructuralFeatureClass();
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
class j extends Mt {
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
    return H.getEAttributeClass();
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
class Vr {
  constructor(e, t) {
    this.attr = new j(), this.attr.setName(e), this.attr.setEType(t);
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
class Y extends Mt {
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
    return H.getEReferenceClass();
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
class Jr {
  constructor(e, t) {
    this.ref = new Y(), this.ref.setName(e), this.ref.setEType(t);
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
class W extends le {
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
    return H.getEDataTypeClass();
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
class Te {
}
Te.EString = (() => {
  const h = new W();
  return h.setName("EString"), h.setInstanceClassName("java.lang.String"), h;
})();
Te.EInt = (() => {
  const h = new W();
  return h.setName("EInt"), h.setInstanceClassName("int"), h;
})();
Te.EBoolean = (() => {
  const h = new W();
  return h.setName("EBoolean"), h.setInstanceClassName("boolean"), h;
})();
Te.EFloat = (() => {
  const h = new W();
  return h.setName("EFloat"), h.setInstanceClassName("float"), h;
})();
Te.EDouble = (() => {
  const h = new W();
  return h.setName("EDouble"), h.setInstanceClassName("double"), h;
})();
Te.ELong = (() => {
  const h = new W();
  return h.setName("ELong"), h.setInstanceClassName("long"), h;
})();
Te.EDate = (() => {
  const h = new W();
  return h.setName("EDate"), h.setInstanceClassName("java.util.Date"), h;
})();
class Gs {
  constructor(e, t) {
    this.resources = [], this.packageRegistry = e || this.createDefaultPackageRegistry(), this.resourceFactoryRegistry = t || Pe.INSTANCE_FACTORY_REGISTRY, this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(e, t) {
    const s = this.resources.find((u) => {
      const o = u.getURI();
      return o && o.toString() === e.toString();
    });
    if (s)
      return s;
    const r = this.delegatedGetResource(e, t);
    if (r)
      return r;
    if (!t)
      return null;
    const n = this.createResource(e);
    return n && n.load().catch((u) => {
      console.error(`Failed to load resource ${e}:`, u);
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
    const r = new Qr(t, e);
    return r.setResourceSet(this), this.resources.push(r), r;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(e, t) {
    const s = this.resources.find((u) => {
      const o = u.getURI();
      return o && o.toString() === e.toString();
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
    return t ? s = t.createResource(e) : s = new it(e), "setResourceSet" in s && s.setResourceSet(this), this.resources.push(s), s;
  }
  getEObject(e, t) {
    const s = e.fragment();
    if (!s)
      return null;
    const r = D.createURI(e.toString().split("#")[0]), n = this.getResource(r, t);
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
      for (const u of n)
        try {
          const o = D.createURI(u);
          (await this.getResourceAsync(o, !0))?.isLoaded() && (t++, s = !0);
        } catch (o) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${u}:`, o);
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
            for (const u of n)
              this.checkProxy(u, t);
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
        return r ? "getEPackage" in r ? r.getEPackage() : r : oe.INSTANCE.getEPackage(s);
      },
      getEFactory(s) {
        const r = this.getEPackage(s);
        return r ? r.getEFactoryInstance() : null;
      },
      get(s) {
        return e.get(s) || oe.INSTANCE.get(s);
      },
      set(s, r) {
        e.set(s, r), r && !("getEPackage" in r) && typeof r.getESubpackages == "function" && t(r);
      },
      registerPackage(s) {
        this.set(nt(s), s);
      },
      delete(s) {
        return e.delete(s);
      },
      has(s) {
        return e.has(s) || oe.INSTANCE.has(s);
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
          const n = s.toString(), u = t.toString();
          if (u.startsWith(n)) {
            const o = u.substring(n.length);
            return D.createURI(r.toString() + o);
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
class Qr {
  constructor(e, t) {
    this.resourceSet = null, this.uri = e, this._syntheticPackage = t;
    const s = new de(null, null);
    s.add(t), this._contents = ge(s);
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
    const s = t.split("/"), r = Be(this._syntheticPackage, t);
    if (r)
      return r;
    if (s.length >= 2) {
      let n = this._syntheticPackage;
      for (let p = 0; p < s.length - 2; p++) {
        const d = n.getESubpackages();
        let E = null;
        for (let T = 0; T < d.length; T++)
          if (d.get(T).getName() === s[p]) {
            E = d.get(T);
            break;
          }
        if (!E)
          return null;
        n = E;
      }
      const u = s[s.length - 2], o = n.getEClassifier(u);
      if (o && "getEStructuralFeature" in o) {
        const p = o.getEStructuralFeature(s[s.length - 1]);
        if (p)
          return p;
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
class $s extends le {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = H.getEAnnotationClass().getEStructuralFeature("details"), s = H.getEStringToStringMapEntryClass();
      this._detailsMap = ls(this, t, s);
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
    return H.getEAnnotationClass();
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
          for (const [n, u] of t)
            r.putByKey(n, u);
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
class Lt extends le {
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
    return H.getEEnumLiteralClass();
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
class Xs extends W {
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
    return H.getEEnumClass();
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
            r instanceof Lt && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class jt extends le {
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
      const n = t[r].getEType(), u = s[r].getEType();
      if (n !== u)
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
    return H.getEOperationClass();
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
class Zr {
  constructor(e, t) {
    this.op = new jt(), this.op.setName(e), t && this.op.setEType(t);
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
class qs extends le {
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
    return H.getEParameterClass();
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
class Ws extends le {
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
    return this.eUpperBound ? this.eUpperBound.getERawType() : H.getEObjectClass();
  }
  eClass() {
    return H.getEGenericTypeClass();
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
class Ys extends le {
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
    return H.getETypeParameterClass();
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
const zs = "ecore.xml.type";
let Ge = null;
function Ks() {
  return Ge || (Ge = new Hs(), Ge.initialize(), oe.INSTANCE.set(Gt, Ge)), Ge;
}
const en = [
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
class Hs extends fe {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(Gt), this.setNsPrefix(zs);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of en) {
      const r = new W();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new tn(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (o) => o.toLowerCase() === "true" || o === "1", toString: (o) => String(o) };
    P.registerByName("Boolean", e), P.registerByName("BooleanObject", e);
    const t = { fromString: (o) => parseInt(o, 10), toString: (o) => String(o) };
    P.registerByName("Int", t), P.registerByName("IntObject", t), P.registerByName("Short", t), P.registerByName("ShortObject", t), P.registerByName("Byte", t), P.registerByName("ByteObject", t), P.registerByName("UnsignedByte", t), P.registerByName("UnsignedByteObject", t), P.registerByName("UnsignedShort", t), P.registerByName("UnsignedShortObject", t), P.registerByName("UnsignedInt", t), P.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (o) => {
        const p = parseInt(o, 10);
        return Math.abs(p) > Number.MAX_SAFE_INTEGER ? BigInt(o) : p;
      },
      toString: (o) => String(o)
    };
    P.registerByName("Long", s), P.registerByName("LongObject", s);
    const r = { fromString: (o) => parseFloat(o), toString: (o) => String(o) };
    P.registerByName("Float", r), P.registerByName("FloatObject", r), P.registerByName("Double", r), P.registerByName("DoubleObject", r);
    const n = { fromString: (o) => o, toString: (o) => o ?? "0" };
    P.registerByName("Decimal", n), P.registerByName("Integer", n), P.registerByName("NonNegativeInteger", n), P.registerByName("NonPositiveInteger", n), P.registerByName("NegativeInteger", n), P.registerByName("PositiveInteger", n), P.registerByName("UnsignedLong", n);
    const u = { fromString: (o) => o, toString: (o) => o ?? "" };
    P.registerByName("String", u), P.registerByName("AnySimpleType", u), P.registerByName("AnyURI", u), P.registerByName("NormalizedString", u), P.registerByName("Token", u), P.registerByName("Name", u), P.registerByName("NCName", u), P.registerByName("Language", u), P.registerByName("ID", u), P.registerByName("IDREF", u), P.registerByName("ENTITY", u), P.registerByName("NMTOKEN", u), P.registerByName("Date", u), P.registerByName("DateTime", u), P.registerByName("Time", u), P.registerByName("Duration", u), P.registerByName("GDay", u), P.registerByName("GMonth", u), P.registerByName("GMonthDay", u), P.registerByName("GYear", u), P.registerByName("GYearMonth", u), P.registerByName("QName", u), P.registerByName("NOTATION", u);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class tn extends ot {
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
const ut = "http://www.eclipse.org/emf/2002/Ecore", Vs = "ecore", Gt = "http://www.eclipse.org/emf/2003/XMLType";
let we = null;
function ct() {
  return we || (we = new Qs(), we.initialize(), Js(), H.register(ct)), we;
}
function Js() {
  we && (oe.INSTANCE.set(ut, we), Ks());
}
class Qs extends fe {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(ut), this.setNsPrefix(Vs);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Zs(this);
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
    this._eBooleanDataType = new W(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new W(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new W(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new W(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new W(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new W(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new W(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new W(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new W(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new W(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new W(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new W(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new W(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new W(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new W(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new q(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new q(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new q(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new q(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new q(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new q(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new q(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new q(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new q(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new q(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new q(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new q(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new q(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new q(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new q(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new q(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new q(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new q(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new q(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new q(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new j();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new j();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new j();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new j();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const n = new j();
    n.setName("upperBound"), n.setEType(this._eIntDataType), n.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const u = new j();
    u.setName("instanceClassName"), u.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(u);
    const o = new j();
    o.setName("abstract"), o.setEType(this._eBooleanDataType), o.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(o);
    const p = new j();
    p.setName("interface"), p.setEType(this._eBooleanDataType), p.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(p);
    const d = new j();
    d.setName("nsURI"), d.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(d);
    const E = new j();
    E.setName("nsPrefix"), E.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(E);
    const T = new j();
    T.setName("changeable"), T.setEType(this._eBooleanDataType), T.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(T);
    const R = new j();
    R.setName("volatile"), R.setEType(this._eBooleanDataType), R.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(R);
    const _ = new j();
    _.setName("transient"), _.setEType(this._eBooleanDataType), _.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(_);
    const b = new j();
    b.setName("defaultValueLiteral"), b.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(b);
    const B = new j();
    B.setName("unsettable"), B.setEType(this._eBooleanDataType), B.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(B);
    const O = new j();
    O.setName("derived"), O.setEType(this._eBooleanDataType), O.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(O);
    const S = new j();
    S.setName("iD"), S.setEType(this._eBooleanDataType), S.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(S);
    const x = new j();
    x.setName("containment"), x.setEType(this._eBooleanDataType), x.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(x);
    const w = new j();
    w.setName("resolveProxies"), w.setEType(this._eBooleanDataType), w.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(w);
    const k = new j();
    k.setName("value"), k.setEType(this._eIntDataType), k.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(k);
    const F = new j();
    F.setName("literal"), F.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(F);
    const ue = new j();
    ue.setName("source"), ue.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(ue);
    const re = new j();
    re.setName("key"), re.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(re);
    const Ne = new j();
    Ne.setName("value"), Ne.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Ne);
    const C = new j();
    C.setName("serializable"), C.setEType(this._eBooleanDataType), C.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(C);
  }
  createReferences() {
    const e = new Y();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new Y();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new Y();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new Y();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const n = new Y();
    n.setName("eOperations"), n.setEType(this._eOperationClass), n.setContainment(!0), n.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(n);
    const u = new Y();
    u.setName("eClassifiers"), u.setEType(this._eClassifierClass), u.setContainment(!0), u.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(u);
    const o = new Y();
    o.setName("eSubpackages"), o.setEType(this._ePackageClass), o.setContainment(!0), o.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(o);
    const p = new Y();
    p.setName("eFactoryInstance"), p.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(p);
    const d = new Y();
    d.setName("eLiterals"), d.setEType(this._eEnumLiteralClass), d.setContainment(!0), d.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(d);
    const E = new Y();
    E.setName("eOpposite"), E.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(E);
    const T = new Y();
    T.setName("eParameters"), T.setEType(this._eParameterClass), T.setContainment(!0), T.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(T);
    const R = new Y();
    R.setName("details"), R.setEType(this._eStringToStringMapEntryClass), R.setContainment(!0), R.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(R);
    const _ = new Y();
    _.setName("eGenericType"), _.setEType(this._eGenericTypeClass), _.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(_);
    const b = new Y();
    b.setName("eTypeParameters"), b.setEType(this._eTypeParameterClass), b.setContainment(!0), b.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(b);
    const B = new Y();
    B.setName("eGenericSuperTypes"), B.setEType(this._eGenericTypeClass), B.setContainment(!0), B.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(B);
    const O = new Y();
    O.setName("eTypeParameters"), O.setEType(this._eTypeParameterClass), O.setContainment(!0), O.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(O);
    const S = new Y();
    S.setName("eBounds"), S.setEType(this._eGenericTypeClass), S.setContainment(!0), S.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(S);
    const x = new Y();
    x.setName("eClassifier"), x.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(x);
    const w = new Y();
    w.setName("eTypeParameter"), w.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(w);
    const k = new Y();
    k.setName("eTypeArguments"), k.setEType(this._eGenericTypeClass), k.setContainment(!0), k.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(k);
    const F = new Y();
    F.setName("eUpperBound"), F.setEType(this._eGenericTypeClass), F.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(F);
    const ue = new Y();
    ue.setName("eLowerBound"), ue.setEType(this._eGenericTypeClass), ue.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(ue);
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
class Zs extends ot {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new q();
      case "EAttribute":
        return new j();
      case "EReference":
        return new Y();
      case "EDataType":
        return new W();
      case "EEnum":
        return new Xs();
      case "EEnumLiteral":
        return new Lt();
      case "EAnnotation":
        return new $s();
      case "EPackage":
        return new fe();
      case "EOperation":
        return new jt();
      case "EParameter":
        return new qs();
      case "EGenericType":
        return new Ws();
      case "ETypeParameter":
        return new Ys();
      default:
        return super.create(e);
    }
  }
}
const er = "org.eclipse.emf.ecore";
function pe(h, e, t) {
  h.add(new De(4, er, e, t));
}
function sn(h, e, t) {
  h.add(new De(2, er, e, t));
}
class bt {
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
    for (const u of s.getEStructuralFeatures()) {
      const o = u.getName?.();
      o && (n.get(o) ? (pe(t, `The feature '${o}' is not unique in class '${s.getName()}'`, [e]), r = !1) : n.set(o, u));
    }
    return this.hasCircularSuperTypes(s) && (pe(t, `The class '${s.getName()}' has a circular inheritance hierarchy`, [e]), r = !1), r;
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
    (!n || n.trim().length === 0) && (pe(t, `The nsURI of package '${s.getName()}' must not be empty`, [e]), r = !1);
    const u = s.getNsPrefix();
    u != null && u.includes(":") && (pe(t, `The nsPrefix '${u}' of package '${s.getName()}' must not contain ':'`, [e]), r = !1);
    const o = /* @__PURE__ */ new Set();
    for (const d of s.getEClassifiers()) {
      const E = d.getName?.();
      E && (o.has(E) ? (pe(t, `The classifier name '${E}' is not unique in package '${s.getName()}'`, [e]), r = !1) : o.add(E));
    }
    const p = /* @__PURE__ */ new Set();
    for (const d of s.getESubpackages()) {
      const E = d.getName?.();
      E && (p.has(E) ? (pe(t, `The subpackage name '${E}' is not unique in package '${s.getName()}'`, [e]), r = !1) : p.add(E));
    }
    return r;
  }
  validateEReference(e, t) {
    const s = e;
    let r = this.validateEStructuralFeature(e, t);
    const n = s.getEOpposite?.();
    if (n) {
      s.isContainment?.() && n.isContainment?.() && (pe(t, `The opposite of a containment reference '${s.getName()}' must not be a containment reference`, [e]), r = !1);
      const u = n.getEOpposite?.();
      u && u !== s && (pe(t, `The opposite of reference '${s.getName()}' does not point back to this reference`, [e]), r = !1);
    }
    return r;
  }
  validateEStructuralFeature(e, t) {
    const s = e;
    let r = !0;
    const n = s.getLowerBound(), u = s.getUpperBound();
    return u !== -1 && u !== -2 && n > u && (pe(t, `The lower bound ${n} of feature '${s.getName()}' must not exceed the upper bound ${u}`, [e]), r = !1), n < 0 && (pe(t, `The lower bound ${n} of feature '${s.getName()}' must not be negative`, [e]), r = !1), s.getEType() || sn(t, `The feature '${s.getName()}' has no type set`, [e]), r;
  }
}
bt.INSTANCE = new bt();
ct();
class rn extends Gs {
  constructor() {
    super(), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new Xe()), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Xe()), this.getPackageRegistry().set(ut, ct());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(e) {
    return super.createResource(e);
  }
}
function nn() {
  const h = /* @__PURE__ */ new Map();
  return {
    getEPackage(t) {
      const s = h.get(t);
      return s ? "getEPackage" in s ? s.getEPackage() : s : null;
    },
    getEFactory(t) {
      const s = this.getEPackage(t);
      return s ? s.getEFactoryInstance() : null;
    },
    get(t) {
      return h.get(t) || null;
    },
    set(t, s) {
      h.set(t, s), s && !("getEPackage" in s) && typeof s.getESubpackages == "function" && rt(h, s);
    },
    delete(t) {
      return h.delete(t);
    },
    has(t) {
      return h.has(t);
    },
    keys() {
      return h.keys();
    },
    values() {
      return h.values();
    },
    /**
     * Register a package by its nsURI
     */
    registerPackage(t) {
      this.set(nt(t), t);
    }
  };
}
function an() {
  return oe.INSTANCE;
}
const cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ATTRIBUTE_FEATURE: Ct,
  ATTRIBUTE_WILDCARD_FEATURE: Es,
  AdapterImpl: us,
  AttributesImpl: Is,
  BasicDiagnostic: De,
  BasicEAnnotation: $s,
  BasicEAttribute: j,
  BasicEClass: q,
  BasicEDataType: W,
  BasicEEnum: Xs,
  BasicEEnumLiteral: Lt,
  BasicEFactory: ot,
  BasicEGenericType: Ws,
  BasicEList: de,
  BasicEMap: cs,
  BasicEObject: le,
  BasicEOperation: jt,
  BasicEPackage: fe,
  BasicEParameter: qs,
  BasicEReference: Y,
  BasicEStructuralFeature: Mt,
  BasicETypeParameter: Ys,
  BasicNotifier: Xr,
  BasicResource: it,
  BasicResourceSet: Gs,
  DATATYPE_IS_MANY: Ze,
  DATATYPE_SINGLE: Qe,
  Diagnostician: xt,
  DynamicEObject: Ft,
  EAttributeBuilder: Vr,
  ECORE_NS_PREFIX: Vs,
  ECORE_NS_URI: ut,
  EClassBuilder: Yr,
  EContentAdapter: qr,
  ELEMENT_FEATURE: Fe,
  ELEMENT_ONLY_CONTENT: ps,
  ELEMENT_WILDCARD_FEATURE: ys,
  EMD_ANNOTATION_URI: Et,
  EMPTY_CONTENT: fs,
  EObjectContainmentEList: qe,
  EObjectContainmentWithInverseEList: es,
  EObjectContainmentWithInverseEListLazy: ts,
  EObjectEList: ss,
  EOperationBuilder: Zr,
  get EPackageRegistry() {
    return oe;
  },
  EProxyImpl: Pt,
  ERROR_TYPE: be,
  EReferenceBuilder: Jr,
  EResourceSetImpl: rn,
  EValidatorRegistry: tt,
  EcoreDataTypes: Te,
  EcoreFactory: Zs,
  EcorePackageImpl: Qs,
  EcoreUtil: ae,
  EcoreValidator: bt,
  ExtendedMetaData: Tt,
  GROUP_FEATURE: Cs,
  HREF_ATTRIB: At,
  ID_ATTRIB: xs,
  IS_MANY_ADD: Nt,
  IS_MANY_MOVE: Ss,
  JSONLoad: vs,
  JSONResource: Ls,
  JSONResourceFactory: js,
  JSONSave: Ms,
  MIXED_CONTENT: gs,
  NIL_ATTRIB: _s,
  NO_FEATURE_ID: Jt,
  NO_INDEX: st,
  NotificationImpl: Re,
  NotificationType: v,
  OBJECT_TYPE: Ae,
  OPTION_DEFER_ATTACHMENT: Mr,
  OPTION_DEFER_IDREF_RESOLUTION: Lr,
  OPTION_EXTENDED_META_DATA: Ns,
  OPTION_FEATURE_NAME_MAP: Ts,
  OPTION_INDENT: Rt,
  OPTION_RECORD_UNKNOWN_FEATURE: Gr,
  OPTION_SERIALIZE_TYPE: _t,
  OPTION_USE_DEPRECATED_METHODS: jr,
  OTHER: St,
  get Resource() {
    return Pe;
  },
  ResourceContentsEList: as,
  SCHEMA_LOCATION_ATTRIB: Rs,
  SERIALIZE_TYPE_ALWAYS: Os,
  SERIALIZE_TYPE_POLYMORPHIC: Us,
  SIMPLE_CONTENT: at,
  SIMPLE_FEATURE: ms,
  SimpleEPackage: Ut,
  TYPE_ATTRIB: As,
  UNKNOWN_FEATURE_TYPE: Sr,
  UNSPECIFIED_CONTENT: hs,
  UNSPECIFIED_FEATURE: ds,
  URI: D,
  XMIHandler: Fs,
  XMIHelperImpl: ws,
  XMILoad: bs,
  XMIResource: ks,
  XMIResourceFactory: Xe,
  XMISave: Bs,
  XMI_NS: Ar,
  XMI_URI: et,
  XMLHandler: Bt,
  XMLHelperImpl: We,
  XMLLoad: kt,
  XMLResource: Ot,
  XMLResourceFactory: Ds,
  XMLSave: vt,
  XMLTypePackageImpl: Hs,
  XML_NS: It,
  XML_TYPE_NS_PREFIX: zs,
  XML_TYPE_NS_URI: Gt,
  XSI_NS: Ir,
  XSI_URI: _e,
  asInstanceOf: Or,
  createBasicEList: is,
  createContainmentEList: rs,
  createContainmentWithInverseEList: ir,
  createEMap: ls,
  createEObjectEList: ns,
  createIndexedProxy: ge,
  createPackageRegistry: nn,
  createResourceContentsEList: os,
  dataTypeRegistry: P,
  filterByType: Ur,
  getEcorePackage: ct,
  getPackageRegistry: an,
  getXMLTypePackage: Ks,
  isAdapterInternal: wt,
  isEAnnotation: kr,
  isEAttribute: xr,
  isEClass: Ps,
  isEClassifier: vr,
  isEDataType: Rr,
  isEEnum: $e,
  isEFactory: Fr,
  isEList: se,
  isEMap: ur,
  isEObject: _r,
  isEOperation: Pr,
  isEPackage: wr,
  isEParameter: Br,
  isEReference: br,
  isEStructuralFeature: Dr,
  isInstanceOf: Dt,
  isInternalEObject: ie,
  registerEcorePackage: Js,
  registerSubpackages: rt,
  requireNsURI: nt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ct as ATTRIBUTE_FEATURE,
  Es as ATTRIBUTE_WILDCARD_FEATURE,
  us as AdapterImpl,
  Is as AttributesImpl,
  De as BasicDiagnostic,
  $s as BasicEAnnotation,
  j as BasicEAttribute,
  q as BasicEClass,
  W as BasicEDataType,
  Xs as BasicEEnum,
  Lt as BasicEEnumLiteral,
  ot as BasicEFactory,
  Ws as BasicEGenericType,
  de as BasicEList,
  cs as BasicEMap,
  le as BasicEObject,
  jt as BasicEOperation,
  fe as BasicEPackage,
  qs as BasicEParameter,
  Y as BasicEReference,
  Mt as BasicEStructuralFeature,
  Ys as BasicETypeParameter,
  Xr as BasicNotifier,
  it as BasicResource,
  Gs as BasicResourceSet,
  Ze as DATATYPE_IS_MANY,
  Qe as DATATYPE_SINGLE,
  xt as Diagnostician,
  Ft as DynamicEObject,
  Vr as EAttributeBuilder,
  Vs as ECORE_NS_PREFIX,
  ut as ECORE_NS_URI,
  Yr as EClassBuilder,
  qr as EContentAdapter,
  Fe as ELEMENT_FEATURE,
  ps as ELEMENT_ONLY_CONTENT,
  ys as ELEMENT_WILDCARD_FEATURE,
  Et as EMD_ANNOTATION_URI,
  fs as EMPTY_CONTENT,
  qe as EObjectContainmentEList,
  es as EObjectContainmentWithInverseEList,
  ts as EObjectContainmentWithInverseEListLazy,
  ss as EObjectEList,
  Zr as EOperationBuilder,
  oe as EPackageRegistry,
  Pt as EProxyImpl,
  be as ERROR_TYPE,
  Jr as EReferenceBuilder,
  rn as EResourceSetImpl,
  tt as EValidatorRegistry,
  Te as EcoreDataTypes,
  Zs as EcoreFactory,
  Qs as EcorePackageImpl,
  ae as EcoreUtil,
  bt as EcoreValidator,
  Tt as ExtendedMetaData,
  Cs as GROUP_FEATURE,
  At as HREF_ATTRIB,
  xs as ID_ATTRIB,
  Nt as IS_MANY_ADD,
  Ss as IS_MANY_MOVE,
  vs as JSONLoad,
  Ls as JSONResource,
  js as JSONResourceFactory,
  Ms as JSONSave,
  gs as MIXED_CONTENT,
  _s as NIL_ATTRIB,
  Jt as NO_FEATURE_ID,
  st as NO_INDEX,
  Re as NotificationImpl,
  v as NotificationType,
  Ae as OBJECT_TYPE,
  Mr as OPTION_DEFER_ATTACHMENT,
  Lr as OPTION_DEFER_IDREF_RESOLUTION,
  Ns as OPTION_EXTENDED_META_DATA,
  Ts as OPTION_FEATURE_NAME_MAP,
  Rt as OPTION_INDENT,
  Gr as OPTION_RECORD_UNKNOWN_FEATURE,
  _t as OPTION_SERIALIZE_TYPE,
  jr as OPTION_USE_DEPRECATED_METHODS,
  St as OTHER,
  Pe as Resource,
  as as ResourceContentsEList,
  Rs as SCHEMA_LOCATION_ATTRIB,
  Os as SERIALIZE_TYPE_ALWAYS,
  Us as SERIALIZE_TYPE_POLYMORPHIC,
  at as SIMPLE_CONTENT,
  ms as SIMPLE_FEATURE,
  Ut as SimpleEPackage,
  As as TYPE_ATTRIB,
  Sr as UNKNOWN_FEATURE_TYPE,
  hs as UNSPECIFIED_CONTENT,
  ds as UNSPECIFIED_FEATURE,
  D as URI,
  Fs as XMIHandler,
  ws as XMIHelperImpl,
  bs as XMILoad,
  ks as XMIResource,
  Xe as XMIResourceFactory,
  Bs as XMISave,
  Ar as XMI_NS,
  et as XMI_URI,
  Bt as XMLHandler,
  We as XMLHelperImpl,
  kt as XMLLoad,
  Ot as XMLResource,
  Ds as XMLResourceFactory,
  vt as XMLSave,
  Hs as XMLTypePackageImpl,
  It as XML_NS,
  zs as XML_TYPE_NS_PREFIX,
  Gt as XML_TYPE_NS_URI,
  Ir as XSI_NS,
  _e as XSI_URI,
  Or as asInstanceOf,
  is as createBasicEList,
  rs as createContainmentEList,
  ir as createContainmentWithInverseEList,
  ls as createEMap,
  ns as createEObjectEList,
  ge as createIndexedProxy,
  nn as createPackageRegistry,
  os as createResourceContentsEList,
  P as dataTypeRegistry,
  cn as default,
  Ur as filterByType,
  ct as getEcorePackage,
  an as getPackageRegistry,
  Ks as getXMLTypePackage,
  wt as isAdapterInternal,
  kr as isEAnnotation,
  xr as isEAttribute,
  Ps as isEClass,
  vr as isEClassifier,
  Rr as isEDataType,
  $e as isEEnum,
  Fr as isEFactory,
  se as isEList,
  ur as isEMap,
  _r as isEObject,
  Pr as isEOperation,
  wr as isEPackage,
  Br as isEParameter,
  br as isEReference,
  Dr as isEStructuralFeature,
  Dt as isInstanceOf,
  ie as isInternalEObject,
  Js as registerEcorePackage,
  rt as registerSubpackages,
  nt as requireNsURI
};
