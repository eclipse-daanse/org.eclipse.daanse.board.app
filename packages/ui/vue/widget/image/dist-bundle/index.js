(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".slideshow-container[data-v-0d3caa41]{width:100%;height:100%;overflow:hidden;position:relative}.slideshow-track[data-v-0d3caa41]{width:100%;height:100%;overflow:visible;position:relative;transition:transform .3s ease-in-out}.slideshow-slide[data-v-0d3caa41]{width:100%;height:100%;position:absolute;top:0;left:0}.slideshow-nav[data-v-0d3caa41]{position:absolute;top:50%;width:32px;height:32px;transform:translateY(-50%);z-index:10;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center}.slideshow-nav--prev[data-v-0d3caa41]{left:40px}.slideshow-nav--next[data-v-0d3caa41]{right:40px}.image-settings-container[data-v-e2074a09]{display:flex;flex-direction:row;align-items:flex-end;gap:1rem;padding:.5rem;border-radius:.25rem}.image-settings-remove-button[data-v-e2074a09]{margin-bottom:.25rem}.image-settings-remove-input[data-v-e2074a09]{flex-grow:1}.settings-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:1rem}.image-list-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:.5rem;height:500px;overflow:auto;padding:.5rem;border-radius:.5rem}.loading[data-v-e2074a09]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { PayloadImpl as At, EVENT_REGISTRY_ID as rs } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as is, deactivate as ns, component as as, inject as os } from "@eclipse-daanse/tsm";
import { defineComponent as bt, mergeModels as us, toRefs as cs, useModel as vt, inject as Rt, onMounted as nt, computed as at, ref as Dt, watch as Ge, resolveComponent as Ie, createElementBlock as pe, openBlock as he, withModifiers as ot, normalizeClass as ut, createElementVNode as de, createVNode as le, normalizeStyle as ct, Fragment as Pt, renderList as Ft, createBlock as ls, withCtx as lt, createTextVNode as hs, toDisplayString as gs, unref as Re } from "vue";
import { WIDGET_SERVICE_ID as ps } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: fs } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ds = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
function ne(c) {
  return c && typeof c.eProxyURI == "function" && typeof c.eSetProxyURI == "function";
}
const S = {
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
}, qe = -1, ms = -1;
class Ae {
  constructor(e, t, s, r, i, n = qe, u = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = ms, this.oldValue = r, this.newValue = i, this.position = n, this.wasSetFlag = u;
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
      case S.RESOLVE:
      case S.REMOVING_ADAPTER:
        return !0;
      case S.ADD:
      case S.ADD_MANY:
      case S.REMOVE:
      case S.REMOVE_MANY:
      case S.MOVE:
        return !1;
      case S.SET:
      case S.UNSET:
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
      [S.SET]: "SET",
      [S.UNSET]: "UNSET",
      [S.ADD]: "ADD",
      [S.REMOVE]: "REMOVE",
      [S.ADD_MANY]: "ADD_MANY",
      [S.REMOVE_MANY]: "REMOVE_MANY",
      [S.MOVE]: "MOVE",
      [S.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [S.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const je = /^(?:0|[1-9]\d*)$/, xt = Symbol.for("emfts.indexedList"), Ot = {
  get(c, e, t) {
    if (e === xt)
      return !0;
    if (typeof e == "string" && je.test(e)) {
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
    if (typeof e == "string" && je.test(e)) {
      const r = Number(e), i = c.size();
      if (r < i)
        c.set(r, t);
      else if (r === i)
        c.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${i}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(c, e, t, s);
  },
  has(c, e) {
    return typeof e == "string" && je.test(e) ? Number(e) < c.size() : Reflect.has(c, e);
  }
};
class oe {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, Ot);
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
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), i = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), n = [];
    for (let u = 0; u < i; u++)
      r < this.data.length && n.push(this.removeAt(r));
    for (let u = 0; u < s.length; u++)
      this.addAt(r + u, s[u]);
    return n;
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
    return this.data.reduce((s, r, i) => e(s, r, i, this.data), t);
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
      Array.isArray(s) ? t.push(...s) : s instanceof oe ? t.push(...s.data) : t.push(s);
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
    this.dispatchNotification(S.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(S.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(S.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(S.REMOVE, e[0], null, 0) : this.dispatchNotification(S.REMOVE_MANY, e, null, qe);
  }
  didSet(e, t, s) {
    this.dispatchNotification(S.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(S.MOVE, s, t, e);
  }
  dispatchNotification(e, t, s, r) {
    const i = this.getFeature();
    if (!this.owner || !i || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const u = this.owner.eAdapters();
      if (!u || u.length === 0)
        return;
    } else
      return;
    const n = new Ae(this.owner, e, i, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(n);
  }
}
class Ke extends oe {
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
          const i = r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        }
      }
    }
  }
}
class Es extends Ke {
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
class ys extends oe {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && ne(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function j(c) {
  return c && typeof c.add == "function" && typeof c.size == "function" && typeof c.get == "function";
}
function ae(c) {
  return c[xt] ? c : new Proxy(c, Ot);
}
function wt(c, e) {
  return ae(new Ke(c, e));
}
function Cs(c, e) {
  return ae(new ys(c, e));
}
function Ts(c, e) {
  return ae(new oe(c, e));
}
class Ns extends oe {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(S.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(S.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(S.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(S.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(S.REMOVE_MANY, e, null, qe);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(S.SET, s, t, e);
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
    const i = { getName: () => "contents" }, n = new Ae(this.resource, e, i, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(n);
  }
}
function Ss(c) {
  return ae(new Ns(c));
}
var J;
(function(c) {
  c.INSTANCE = Is();
})(J || (J = {}));
function Mt(c, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && c.set(s, t), Mt(c, t);
  }
}
function _s(c) {
  const e = c.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${c.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function Is() {
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
      c.set(e, t), "getEPackage" in t || Mt(c, t);
    },
    registerPackage(e) {
      this.set(_s(e), e);
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
  constructor(e, t, s, r, i) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = i;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new T(null, null, "", null, null);
    let t = null, s = null, r = null, i = null, n = null, u = 0;
    e.length;
    const l = e.indexOf("#");
    l >= 0 && (n = e.substring(l + 1), e = e.substring(0, l));
    const h = e.indexOf("?");
    h >= 0 && (i = e.substring(h + 1), e = e.substring(0, h));
    const d = e.indexOf(":");
    if (d > 0) {
      let f = !0;
      for (let E = 0; E < d; E++)
        if (e.charAt(E) === "/") {
          f = !1;
          break;
        }
      f && (t = e.substring(0, d), u = d + 1);
    }
    if (e.startsWith("//", u)) {
      const f = u + 2;
      let E = f;
      for (; E < e.length && e.charAt(E) !== "/"; )
        E++;
      s = e.substring(f, E), u = E;
    }
    return u < e.length ? r = e.substring(u) : s !== null && (r = ""), new T(t, s, r, i, n);
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
    const t = this._path.split("/").filter((i) => i.length > 0), s = t.slice(0, Math.max(0, t.length - e));
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
    let t = e._scheme, s = this._authority, r = this._path, i = this._query;
    if (s !== null)
      r = this.removeDotSegments(r || "");
    else if (s = e._authority, !r || r === "") {
      if (this._query !== null) {
        if (r = e._path, r) {
          const n = r.lastIndexOf("/");
          n >= 0 && (r = r.substring(0, n + 1));
        }
      } else
        r = e._path;
      i = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new T(t, s, r, i, this._fragment);
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
    const r = t.split("/"), i = s.split("/");
    let n = 0;
    const u = Math.min(r.length, i.length);
    for (let E = 0; E < u - 1 && r[E] === i[E]; E++)
      n++;
    const l = i.length - n - 1, h = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (l >= 3 || h && l > 0))
      return new T(null, null, t, this._query, this._fragment);
    const d = [];
    for (let E = 0; E < l; E++)
      d.push("..");
    for (let E = n; E < r.length; E++)
      d.push(r[E]);
    let f = d.join("/");
    return f === "" && t.endsWith("/") && (f = "./"), new T(null, null, f, this._query, this._fragment);
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
    for (let i = 0; i < s.length; i++) {
      const n = s[i];
      n === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : n !== "." && !(n === "" && i > 0 && i < s.length - 1) && t.push(n);
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
function As(c) {
  return "unsetTarget" in c && typeof c.unsetTarget == "function";
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
      const i = this.eGet(r);
      if (i)
        if (Array.isArray(i) || j(i))
          for (const n of i)
            e.push(n);
        else
          e.push(i);
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
      let i = r.next();
      for (; !i.done; )
        t.push(i.value), i = r.next();
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
    const i = t.toString(), n = i.indexOf("#");
    if (n > 0) {
      const u = i.substring(0, n), l = i.substring(n + 1);
      let h;
      const d = s.getURI();
      d && !u.includes("://") ? h = d.resolve(T.createURI(u)) : h = T.createURI(u);
      const f = r.getResource(h, !0);
      if (f) {
        const _ = f.getEObject(l);
        if (_)
          return _;
      }
      const E = r.getPackageRegistry(), y = this.resolveFragmentViaPackageRegistry(E, u, l, r);
      if (y)
        return y;
    } else if (n === 0) {
      const u = i.substring(1), l = s.getEObject(u);
      if (l)
        return l;
    } else {
      const u = s.getEObject(i);
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
    const i = e.getEPackage(t);
    if (i) {
      const h = this.resolveFragmentInPackage(i, s);
      if (h)
        return h;
    }
    let n = t;
    const u = n.lastIndexOf("/");
    u >= 0 && (n = n.substring(u + 1));
    const l = n.indexOf(".");
    if (l > 0 && (n = n.substring(0, l)), n)
      for (const h of e.keys()) {
        const d = e.getEPackage(h);
        if (d && d.getName() === n) {
          const f = this.resolveFragmentInPackage(d, s);
          if (f)
            return f;
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
    let i = e;
    for (let l = 0; l < r.length - 1; l++) {
      const h = i.getESubpackages();
      let d = null;
      for (let f = 0; f < h.length; f++)
        if (h.get(f).getName() === r[l]) {
          d = h.get(f);
          break;
        }
      if (!d)
        return null;
      i = d;
    }
    const n = r[r.length - 1];
    return i.getEClassifier(n) ?? null;
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
        const s = new Ae(this, S.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), As(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
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
        const i = this.eGet(r);
        if (i)
          if (Array.isArray(i) || j(i))
            for (const n of i)
              e.push(n);
          else
            e.push(i);
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
      const i = e;
      if (i.isContainment() && (r && typeof r == "object" && "eSetContainer" in r && r.eSetContainer(null, null), t && typeof t == "object" && "eSetContainer" in t))
        if (Array.isArray(t))
          for (const n of t)
            n && "eSetContainer" in n && n.eSetContainer(this, i);
        else
          t.eSetContainer(this, i);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const i = new Ae(this, S.SET, e, r, t);
      this.eNotify(i);
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
        for (const i of s)
          i && "eSetContainer" in i && i.eSetContainer(null, null);
      else typeof s == "object" && "eSetContainer" in s && s.eSetContainer(null, null);
    if (this._eDeliver && this._eAdapters.length > 0) {
      const r = new Ae(this, S.UNSET, e, s, e.getDefaultValue());
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
class kt extends K {
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
      if (!e.isMany() && r && ne(r) && r.eIsProxy()) {
        const i = this.eResolveProxy(r);
        if (i !== r)
          return this.eSettings.set(t, i), i;
      }
      return r;
    }
    if (e.isMany()) {
      let r;
      if ("isContainment" in e) {
        const i = e;
        i.isContainment() ? r = wt(this, i) : r = Cs(this, i);
      } else
        r = Ts(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class bs extends Ke {
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
class vs {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new bs(e, t, this);
    const r = s.getEStructuralFeature("key"), i = s.getEStructuralFeature("value");
    if (!r || !i)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = i, ae(this);
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
    const i = this.entryEClass.getEPackage();
    let n;
    i && i.getEFactoryInstance() ? n = i.getEFactoryInstance().create(this.entryEClass) : n = new kt(this.entryEClass), n.eSet(this.keyFeature, e), n.eSet(this.valueFeature, t), this.delegateList.add(n);
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
function Rs(c, e, t) {
  return new vs(c, e, t);
}
var Pe;
(function(c) {
  c.INSTANCE_FACTORY_REGISTRY = Ds();
})(Pe || (Pe = {}));
function Ds() {
  const c = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const i = s.fileExtension();
      return i && c.has(i) ? c.get(i) : null;
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
class Lt {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = Ss(this);
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
      let i = null, n = 0;
      if (s && (i = this.contents.size() > 0 ? this.contents.get(0) : null, !i || (r[0].startsWith("@") ? i = this.eObjectForURIFragmentSegment(i, r[0]) : i = this.findByNameInContents(i, r[0]), n = 1, !i)))
        return null;
      for (let u = n; u < r.length; u++) {
        const l = r[u], h = parseInt(l, 10);
        if (i === null ? isNaN(h) ? (i = this.findByName(this.contents.toArray(), l), !i && this.contents.size() > 0 && (i = this.findByNameInContents(this.contents.get(0), l))) : i = h < this.contents.size() ? this.contents.get(h) : null : isNaN(h) ? i = this.navigateByNameOrFeature(i, l) : i = i.eContents()[h] || null, !i)
          return null;
      }
      return i;
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
          const i = r.getEStructuralFeature("name");
          if (i && s.eGet(i) === t)
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
    const n = e.eClass().getEStructuralFeature(t);
    if (n) {
      const u = e.eGet(n);
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
    const s = t.substring(1), r = e.eClass(), i = s.charAt(s.length - 1);
    let n, u = -1;
    if (i >= "0" && i <= "9") {
      const d = s.lastIndexOf(".");
      if (d > 0) {
        const f = parseInt(s.substring(d + 1), 10);
        isNaN(f) ? n = s : (n = s.substring(0, d), u = f);
      } else
        n = s;
    } else
      n = s;
    const l = r.getEStructuralFeature(n);
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
      const n = r.eContents().indexOf(s);
      n >= 0 && t.unshift(n), s = r;
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
      const r = s.value, n = r.eClass().getEIDAttribute();
      if (n && r.eGet(n) === e)
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
      const i = e.eGet(r);
      i != null && (r.isMany() && Array.isArray(i) ? s[r.getName()] = i.map((n) => typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n) : s[r.getName()] = typeof i == "object" && "eClass" in i ? this.serializeObject(i) : i);
    }
    return s;
  }
}
function Ps(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
function Fs(c) {
  if (Object.prototype.hasOwnProperty.call(c, "__esModule")) return c;
  var e = c.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(c).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(c, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return c[s];
      }
    });
  }), t;
}
var $e = {};
const xs = {}, Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), ws = /* @__PURE__ */ Fs(Os);
var ht;
function Ms() {
  return ht || (ht = 1, (function(c) {
    (function(e) {
      e.parser = function(o, a) {
        return new s(o, a);
      }, e.SAXParser = s, e.SAXStream = f, e.createStream = h, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
        i(m), m.q = m.c = "", m.bufferCheckPosition = e.MAX_BUFFER_LENGTH, m.encoding = null, m.opt = a || {}, m.opt.lowercase = m.opt.lowercase || m.opt.lowercasetags, m.looseCase = m.opt.lowercase ? "toLowerCase" : "toUpperCase", m.opt.maxEntityCount = m.opt.maxEntityCount || 512, m.opt.maxEntityDepth = m.opt.maxEntityDepth || 4, m.entityCount = m.entityDepth = 0, m.tags = [], m.closed = m.closedRoot = m.sawRoot = !1, m.tag = m.error = null, m.strict = !!o, m.noscript = !!(o || m.opt.noscript), m.state = p.BEGIN, m.strictEntities = m.opt.strictEntities, m.ENTITIES = m.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), m.attribList = [], m.opt.xmlns && (m.ns = Object.create(R)), m.opt.unquotedAttributeValues === void 0 && (m.opt.unquotedAttributeValues = !o), m.trackPosition = m.opt.position !== !1, m.trackPosition && (m.position = m.line = m.column = 0), Te(m, "onready");
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
        for (var a = Math.max(e.MAX_BUFFER_LENGTH, 10), m = 0, g = 0, b = t.length; g < b; g++) {
          var M = o[t[g]].length;
          if (M > a)
            switch (t[g]) {
              case "textNode":
                Ne(o);
                break;
              case "cdata":
                k(o, "oncdata", o.cdata), o.cdata = "";
                break;
              case "script":
                k(o, "onscript", o.script), o.script = "";
                break;
              default:
                ue(o, "Max buffer length exceeded: " + t[g]);
            }
          m = Math.max(m, M);
        }
        var B = e.MAX_BUFFER_LENGTH - m;
        o.bufferCheckPosition = B + o.position;
      }
      function i(o) {
        for (var a = 0, m = t.length; a < m; a++)
          o[t[a]] = "";
      }
      function n(o) {
        Ne(o), o.cdata !== "" && (k(o, "oncdata", o.cdata), o.cdata = ""), o.script !== "" && (k(o, "onscript", o.script), o.script = "");
      }
      s.prototype = {
        end: function() {
          tt(this);
        },
        write: ts,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          n(this);
        }
      };
      var u;
      try {
        u = ws.Stream;
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
        return new f(o, a);
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
      function f(o, a) {
        if (!(this instanceof f))
          return new f(o, a);
        u.apply(this), this._parser = new s(o, a), this.writable = !0, this.readable = !0;
        var m = this;
        this._parser.onend = function() {
          m.emit("end");
        }, this._parser.onerror = function(g) {
          m.emit("error", g), m._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, l.forEach(function(g) {
          Object.defineProperty(m, "on" + g, {
            get: function() {
              return m._parser["on" + g];
            },
            set: function(b) {
              if (!b)
                return m.removeAllListeners(g), m._parser["on" + g] = b, b;
              m.on(g, b);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      f.prototype = Object.create(u.prototype, {
        constructor: {
          value: f
        }
      }), f.prototype._decodeBuffer = function(o, a) {
        if (this._decoderBuffer && (o = Buffer.concat([this._decoderBuffer, o]), this._decoderBuffer = null), !this._decoder) {
          var m = d(o, a);
          if (!m)
            return this._decoderBuffer = o, "";
          this._parser.encoding = m, this._decoder = new TextDecoder(m);
        }
        return this._decoder.decode(o, { stream: !a });
      }, f.prototype.write = function(o) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(o))
          o = this._decodeBuffer(o, !1);
        else if (this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        }
        return this._parser.write(o.toString()), this.emit("data", o), !0;
      }, f.prototype.end = function(o) {
        if (o && o.length && this.write(o), this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        } else if (this._decoder) {
          var m = this._decoder.decode();
          m && (this._parser.write(m), this.emit("data", m));
        }
        return this._parser.end(), !0;
      }, f.prototype.on = function(o, a) {
        var m = this;
        return !m._parser["on" + o] && l.indexOf(o) !== -1 && (m._parser["on" + o] = function() {
          var g = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          g.splice(0, 0, o), m.emit.apply(m, g);
        }), u.prototype.on.call(m, o, a);
      };
      var E = /^\[CDATA\[$/i, y = /^DOCTYPE$/i, _ = "http://www.w3.org/XML/1998/namespace", O = "http://www.w3.org/2000/xmlns/", R = { xml: _, xmlns: O }, A = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, $ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, L = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, X = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function P(o) {
        return o === " " || o === `
` || o === "\r" || o === "	";
      }
      function H(o) {
        return o === '"' || o === "'";
      }
      function Ce(o) {
        return o === ">" || P(o);
      }
      function V(o, a) {
        return o.test(a);
      }
      function ge(o, a) {
        return !V(o, a);
      }
      var p = 0;
      e.STATE = {
        BEGIN: p++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: p++,
        // leading whitespace
        TEXT: p++,
        // general stuff
        TEXT_ENTITY: p++,
        // &amp and such.
        OPEN_WAKA: p++,
        // <
        SGML_DECL: p++,
        // <!BLARG
        SGML_DECL_QUOTED: p++,
        // <!BLARG foo "bar
        DOCTYPE: p++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: p++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: p++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: p++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: p++,
        // <!-
        COMMENT: p++,
        // <!--
        COMMENT_ENDING: p++,
        // <!-- blah -
        COMMENT_ENDED: p++,
        // <!-- blah --
        CDATA: p++,
        // <![CDATA[ something
        CDATA_ENDING: p++,
        // ]
        CDATA_ENDING_2: p++,
        // ]]
        PROC_INST: p++,
        // <?hi
        PROC_INST_BODY: p++,
        // <?hi there
        PROC_INST_ENDING: p++,
        // <?hi "there" ?
        OPEN_TAG: p++,
        // <strong
        OPEN_TAG_SLASH: p++,
        // <strong /
        ATTRIB: p++,
        // <a
        ATTRIB_NAME: p++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: p++,
        // <a foo _
        ATTRIB_VALUE: p++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: p++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: p++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: p++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: p++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: p++,
        // <foo bar=&quot
        CLOSE_TAG: p++,
        // </a
        CLOSE_TAG_SAW_WHITE: p++,
        // </a   >
        SCRIPT: p++,
        // <script> ...
        SCRIPT_ENDING: p++
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
      for (var Je in e.STATE)
        e.STATE[e.STATE[Je]] = Je;
      p = e.STATE;
      function Te(o, a, m) {
        o[a] && o[a](m);
      }
      function Ht(o) {
        var a = o && o.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return a ? a[2] : null;
      }
      function Ze(o) {
        return o ? o.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function Vt(o, a) {
        const m = Ze(o), g = Ze(a);
        return !m || !g ? !0 : g === "utf16" ? m === "utf16le" || m === "utf16be" : m === g;
      }
      function Qt(o, a) {
        if (!(!o.strict || !o.encoding || !a || a.name !== "xml")) {
          var m = Ht(a.body);
          m && !Vt(o.encoding, m) && D(
            o,
            "XML declaration encoding " + m + " does not match detected stream encoding " + o.encoding.toUpperCase()
          );
        }
      }
      function k(o, a, m) {
        o.textNode && Ne(o), Te(o, a, m);
      }
      function Ne(o) {
        o.textNode = et(o.opt, o.textNode), o.textNode && Te(o, "ontext", o.textNode), o.textNode = "";
      }
      function et(o, a) {
        return o.trim && (a = a.trim()), o.normalize && (a = a.replace(/\s+/g, " ")), a;
      }
      function ue(o, a) {
        return Ne(o), o.trackPosition && (a += `
Line: ` + o.line + `
Column: ` + o.column + `
Char: ` + o.c), a = new Error(a), o.error = a, Te(o, "onerror", a), o;
      }
      function tt(o) {
        return o.sawRoot && !o.closedRoot && D(o, "Unclosed root tag"), o.state !== p.BEGIN && o.state !== p.BEGIN_WHITESPACE && o.state !== p.TEXT && ue(o, "Unexpected end"), Ne(o), o.c = "", o.closed = !0, Te(o, "onend"), s.call(o, o.strict, o.opt), o;
      }
      function D(o, a) {
        if (typeof o != "object" || !(o instanceof s))
          throw new Error("bad call to strictFail");
        o.strict && ue(o, a);
      }
      function Jt(o) {
        o.strict || (o.tagName = o.tagName[o.looseCase]());
        var a = o.tags[o.tags.length - 1] || o, m = o.tag = { name: o.tagName, attributes: {} };
        o.opt.xmlns && (m.ns = a.ns), o.attribList.length = 0, k(o, "onopentagstart", m);
      }
      function Me(o, a) {
        var m = o.indexOf(":"), g = m < 0 ? ["", o] : o.split(":"), b = g[0], M = g[1];
        return a && o === "xmlns" && (b = "xmlns", M = ""), { prefix: b, local: M };
      }
      function ke(o) {
        if (o.strict || (o.attribName = o.attribName[o.looseCase]()), o.attribList.indexOf(o.attribName) !== -1 || o.tag.attributes.hasOwnProperty(o.attribName)) {
          o.attribName = o.attribValue = "";
          return;
        }
        if (o.opt.xmlns) {
          var a = Me(o.attribName, !0), m = a.prefix, g = a.local;
          if (m === "xmlns")
            if (g === "xml" && o.attribValue !== _)
              D(
                o,
                "xml: prefix must be bound to " + _ + `
Actual: ` + o.attribValue
              );
            else if (g === "xmlns" && o.attribValue !== O)
              D(
                o,
                "xmlns: prefix must be bound to " + O + `
Actual: ` + o.attribValue
              );
            else {
              var b = o.tag, M = o.tags[o.tags.length - 1] || o;
              b.ns === M.ns && (b.ns = Object.create(M.ns)), b.ns[g] = o.attribValue;
            }
          o.attribList.push([o.attribName, o.attribValue]);
        } else
          o.tag.attributes[o.attribName] = o.attribValue, k(o, "onattribute", {
            name: o.attribName,
            value: o.attribValue
          });
        o.attribName = o.attribValue = "";
      }
      function ce(o, a) {
        if (o.opt.xmlns) {
          var m = o.tag, g = Me(o.tagName);
          m.prefix = g.prefix, m.local = g.local, m.uri = m.ns[g.prefix] || "", m.prefix && !m.uri && (D(
            o,
            "Unbound namespace prefix: " + JSON.stringify(o.tagName)
          ), m.uri = g.prefix);
          var b = o.tags[o.tags.length - 1] || o;
          m.ns && b.ns !== m.ns && Object.keys(m.ns).forEach(function(it) {
            k(o, "onopennamespace", {
              prefix: it,
              uri: m.ns[it]
            });
          });
          for (var M = 0, B = o.attribList.length; M < B; M++) {
            var Y = o.attribList[M], W = Y[0], ee = Y[1], U = Me(W, !0), te = U.prefix, ss = U.local, rt = te === "" ? "" : m.ns[te] || "", Ue = {
              name: W,
              value: ee,
              prefix: te,
              local: ss,
              uri: rt
            };
            te && te !== "xmlns" && !rt && (D(
              o,
              "Unbound namespace prefix: " + JSON.stringify(te)
            ), Ue.uri = te), o.tag.attributes[W] = Ue, k(o, "onattribute", Ue);
          }
          o.attribList.length = 0;
        }
        o.tag.isSelfClosing = !!a, o.sawRoot = !0, o.tags.push(o.tag), k(o, "onopentag", o.tag), a || (!o.noscript && o.tagName.toLowerCase() === "script" ? o.state = p.SCRIPT : o.state = p.TEXT, o.tag = null, o.tagName = ""), o.attribName = o.attribValue = "", o.attribList.length = 0;
      }
      function Le(o) {
        if (!o.tagName) {
          D(o, "Weird empty close tag."), o.textNode += "</>", o.state = p.TEXT;
          return;
        }
        if (o.script) {
          if (o.tagName !== "script") {
            o.script += "</" + o.tagName + ">", o.tagName = "", o.state = p.SCRIPT;
            return;
          }
          k(o, "onscript", o.script), o.script = "";
        }
        var a = o.tags.length, m = o.tagName;
        o.strict || (m = m[o.looseCase]());
        for (var g = m; a--; ) {
          var b = o.tags[a];
          if (b.name !== g)
            D(o, "Unexpected close tag");
          else
            break;
        }
        if (a < 0) {
          D(o, "Unmatched closing tag: " + o.tagName), o.textNode += "</" + o.tagName + ">", o.state = p.TEXT;
          return;
        }
        o.tagName = m;
        for (var M = o.tags.length; M-- > a; ) {
          var B = o.tag = o.tags.pop();
          o.tagName = o.tag.name, k(o, "onclosetag", o.tagName);
          var Y = {};
          for (var W in B.ns)
            Y[W] = B.ns[W];
          var ee = o.tags[o.tags.length - 1] || o;
          o.opt.xmlns && B.ns !== ee.ns && Object.keys(B.ns).forEach(function(U) {
            var te = B.ns[U];
            k(o, "onclosenamespace", { prefix: U, uri: te });
          });
        }
        a === 0 && (o.closedRoot = !0), o.tagName = o.attribValue = o.attribName = "", o.attribList.length = 0, o.state = p.TEXT;
      }
      function Zt(o) {
        var a = o.entity, m = a.toLowerCase(), g, b = "";
        return o.ENTITIES[a] ? o.ENTITIES[a] : o.ENTITIES[m] ? o.ENTITIES[m] : (a = m, a.charAt(0) === "#" && (a.charAt(1) === "x" ? (a = a.slice(2), g = parseInt(a, 16), b = g.toString(16)) : (a = a.slice(1), g = parseInt(a, 10), b = g.toString(10))), a = a.replace(/^0+/, ""), isNaN(g) || b.toLowerCase() !== a || g < 0 || g > 1114111 || !es(g) ? (D(o, "Invalid character entity"), "&" + o.entity + ";") : String.fromCodePoint(g));
      }
      function es(o) {
        return o === 9 || o === 10 || o === 13 || o >= 32 && o <= 55295 || o >= 57344 && o <= 65533 || o >= 65536 && o <= 1114111;
      }
      function st(o, a) {
        a === "<" ? (o.state = p.OPEN_WAKA, o.startTagPosition = o.position) : P(a) || (D(o, "Non-whitespace before first tag."), o.textNode = a, o.state = p.TEXT);
      }
      function Be(o, a) {
        var m = "";
        return a < o.length && (m = o.charAt(a)), m;
      }
      function ts(o) {
        var a = this;
        if (this.error)
          throw this.error;
        if (a.closed)
          return ue(
            a,
            "Cannot write after close. Assign an onready handler."
          );
        if (o === null)
          return tt(a);
        typeof o == "object" && (o = o.toString());
        for (var m = 0, g = ""; g = Be(o, m++), a.c = g, !!g; )
          switch (a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++), a.state) {
            case p.BEGIN:
              if (a.state = p.BEGIN_WHITESPACE, g === "\uFEFF")
                continue;
              st(a, g);
              continue;
            case p.BEGIN_WHITESPACE:
              st(a, g);
              continue;
            case p.TEXT:
              if (a.sawRoot && !a.closedRoot) {
                for (var M = m - 1; g && g !== "<" && g !== "&"; )
                  g = Be(o, m++), g && a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++);
                a.textNode += o.substring(M, m - 1);
              }
              g === "<" && !(a.sawRoot && a.closedRoot && !a.strict) ? (a.state = p.OPEN_WAKA, a.startTagPosition = a.position) : (!P(g) && (!a.sawRoot || a.closedRoot) && D(a, "Text data outside of root node."), g === "&" ? a.state = p.TEXT_ENTITY : a.textNode += g);
              continue;
            case p.SCRIPT:
              g === "<" ? a.state = p.SCRIPT_ENDING : a.script += g;
              continue;
            case p.SCRIPT_ENDING:
              g === "/" ? a.state = p.CLOSE_TAG : (a.script += "<" + g, a.state = p.SCRIPT);
              continue;
            case p.OPEN_WAKA:
              if (g === "!")
                a.state = p.SGML_DECL, a.sgmlDecl = "";
              else if (!P(g)) if (V(A, g))
                a.state = p.OPEN_TAG, a.tagName = g;
              else if (g === "/")
                a.state = p.CLOSE_TAG, a.tagName = "";
              else if (g === "?")
                a.state = p.PROC_INST, a.procInstName = a.procInstBody = "";
              else {
                if (D(a, "Unencoded <"), a.startTagPosition + 1 < a.position) {
                  var b = a.position - a.startTagPosition;
                  g = new Array(b).join(" ") + g;
                }
                a.textNode += "<" + g, a.state = p.TEXT;
              }
              continue;
            case p.SGML_DECL:
              if (a.sgmlDecl + g === "--") {
                a.state = p.COMMENT, a.comment = "", a.sgmlDecl = "";
                continue;
              }
              a.doctype && a.doctype !== !0 && a.sgmlDecl ? (a.state = p.DOCTYPE_DTD, a.doctype += "<!" + a.sgmlDecl + g, a.sgmlDecl = "") : E.test(a.sgmlDecl + g) ? (k(a, "onopencdata"), a.state = p.CDATA, a.sgmlDecl = "", a.cdata = "") : y.test(a.sgmlDecl + g) ? (a.state = p.DOCTYPE, (a.doctype || a.sawRoot) && D(
                a,
                "Inappropriately located doctype declaration"
              ), a.doctype = "", a.sgmlDecl = "") : g === ">" ? (k(a, "onsgmldeclaration", a.sgmlDecl), a.sgmlDecl = "", a.state = p.TEXT) : (H(g) && (a.state = p.SGML_DECL_QUOTED), a.sgmlDecl += g);
              continue;
            case p.SGML_DECL_QUOTED:
              g === a.q && (a.state = p.SGML_DECL, a.q = ""), a.sgmlDecl += g;
              continue;
            case p.DOCTYPE:
              g === ">" ? (a.state = p.TEXT, k(a, "ondoctype", a.doctype), a.doctype = !0) : (a.doctype += g, g === "[" ? a.state = p.DOCTYPE_DTD : H(g) && (a.state = p.DOCTYPE_QUOTED, a.q = g));
              continue;
            case p.DOCTYPE_QUOTED:
              a.doctype += g, g === a.q && (a.q = "", a.state = p.DOCTYPE);
              continue;
            case p.DOCTYPE_DTD:
              g === "]" ? (a.doctype += g, a.state = p.DOCTYPE) : g === "<" ? (a.state = p.OPEN_WAKA, a.startTagPosition = a.position) : H(g) ? (a.doctype += g, a.state = p.DOCTYPE_DTD_QUOTED, a.q = g) : a.doctype += g;
              continue;
            case p.DOCTYPE_DTD_QUOTED:
              a.doctype += g, g === a.q && (a.state = p.DOCTYPE_DTD, a.q = "");
              continue;
            case p.COMMENT:
              g === "-" ? a.state = p.COMMENT_ENDING : a.comment += g;
              continue;
            case p.COMMENT_ENDING:
              g === "-" ? (a.state = p.COMMENT_ENDED, a.comment = et(a.opt, a.comment), a.comment && k(a, "oncomment", a.comment), a.comment = "") : (a.comment += "-" + g, a.state = p.COMMENT);
              continue;
            case p.COMMENT_ENDED:
              g !== ">" ? (D(a, "Malformed comment"), a.comment += "--" + g, a.state = p.COMMENT) : a.doctype && a.doctype !== !0 ? a.state = p.DOCTYPE_DTD : a.state = p.TEXT;
              continue;
            case p.CDATA:
              for (var M = m - 1; g && g !== "]"; )
                g = Be(o, m++), g && a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++);
              a.cdata += o.substring(M, m - 1), g === "]" && (a.state = p.CDATA_ENDING);
              continue;
            case p.CDATA_ENDING:
              g === "]" ? a.state = p.CDATA_ENDING_2 : (a.cdata += "]" + g, a.state = p.CDATA);
              continue;
            case p.CDATA_ENDING_2:
              g === ">" ? (a.cdata && k(a, "oncdata", a.cdata), k(a, "onclosecdata"), a.cdata = "", a.state = p.TEXT) : g === "]" ? a.cdata += "]" : (a.cdata += "]]" + g, a.state = p.CDATA);
              continue;
            case p.PROC_INST:
              g === "?" ? a.state = p.PROC_INST_ENDING : P(g) ? a.state = p.PROC_INST_BODY : a.procInstName += g;
              continue;
            case p.PROC_INST_BODY:
              if (!a.procInstBody && P(g))
                continue;
              g === "?" ? a.state = p.PROC_INST_ENDING : a.procInstBody += g;
              continue;
            case p.PROC_INST_ENDING:
              if (g === ">") {
                const ee = {
                  name: a.procInstName,
                  body: a.procInstBody
                };
                Qt(a, ee), k(a, "onprocessinginstruction", ee), a.procInstName = a.procInstBody = "", a.state = p.TEXT;
              } else
                a.procInstBody += "?" + g, a.state = p.PROC_INST_BODY;
              continue;
            case p.OPEN_TAG:
              V($, g) ? a.tagName += g : (Jt(a), g === ">" ? ce(a) : g === "/" ? a.state = p.OPEN_TAG_SLASH : (P(g) || D(a, "Invalid character in tag name"), a.state = p.ATTRIB));
              continue;
            case p.OPEN_TAG_SLASH:
              g === ">" ? (ce(a, !0), Le(a)) : (D(
                a,
                "Forward-slash in opening tag not followed by >"
              ), a.state = p.ATTRIB);
              continue;
            case p.ATTRIB:
              if (P(g))
                continue;
              g === ">" ? ce(a) : g === "/" ? a.state = p.OPEN_TAG_SLASH : V(A, g) ? (a.attribName = g, a.attribValue = "", a.state = p.ATTRIB_NAME) : D(a, "Invalid attribute name");
              continue;
            case p.ATTRIB_NAME:
              g === "=" ? a.state = p.ATTRIB_VALUE : g === ">" ? (D(a, "Attribute without value"), a.attribValue = a.attribName, ke(a), ce(a)) : P(g) ? a.state = p.ATTRIB_NAME_SAW_WHITE : V($, g) ? a.attribName += g : D(a, "Invalid attribute name");
              continue;
            case p.ATTRIB_NAME_SAW_WHITE:
              if (g === "=")
                a.state = p.ATTRIB_VALUE;
              else {
                if (P(g))
                  continue;
                D(a, "Attribute without value"), a.tag.attributes[a.attribName] = "", a.attribValue = "", k(a, "onattribute", {
                  name: a.attribName,
                  value: ""
                }), a.attribName = "", g === ">" ? ce(a) : V(A, g) ? (a.attribName = g, a.state = p.ATTRIB_NAME) : (D(a, "Invalid attribute name"), a.state = p.ATTRIB);
              }
              continue;
            case p.ATTRIB_VALUE:
              if (P(g))
                continue;
              H(g) ? (a.q = g, a.state = p.ATTRIB_VALUE_QUOTED) : (a.opt.unquotedAttributeValues || ue(a, "Unquoted attribute value"), a.state = p.ATTRIB_VALUE_UNQUOTED, a.attribValue = g);
              continue;
            case p.ATTRIB_VALUE_QUOTED:
              if (g !== a.q) {
                g === "&" ? a.state = p.ATTRIB_VALUE_ENTITY_Q : a.attribValue += g;
                continue;
              }
              ke(a), a.q = "", a.state = p.ATTRIB_VALUE_CLOSED;
              continue;
            case p.ATTRIB_VALUE_CLOSED:
              P(g) ? a.state = p.ATTRIB : g === ">" ? ce(a) : g === "/" ? a.state = p.OPEN_TAG_SLASH : V(A, g) ? (D(a, "No whitespace between attributes"), a.attribName = g, a.attribValue = "", a.state = p.ATTRIB_NAME) : D(a, "Invalid attribute name");
              continue;
            case p.ATTRIB_VALUE_UNQUOTED:
              if (!Ce(g)) {
                g === "&" ? a.state = p.ATTRIB_VALUE_ENTITY_U : a.attribValue += g;
                continue;
              }
              ke(a), g === ">" ? ce(a) : a.state = p.ATTRIB;
              continue;
            case p.CLOSE_TAG:
              if (a.tagName)
                g === ">" ? Le(a) : V($, g) ? a.tagName += g : a.script ? (a.script += "</" + a.tagName + g, a.tagName = "", a.state = p.SCRIPT) : (P(g) || D(a, "Invalid tagname in closing tag"), a.state = p.CLOSE_TAG_SAW_WHITE);
              else {
                if (P(g))
                  continue;
                ge(A, g) ? a.script ? (a.script += "</" + g, a.state = p.SCRIPT) : D(a, "Invalid tagname in closing tag.") : a.tagName = g;
              }
              continue;
            case p.CLOSE_TAG_SAW_WHITE:
              if (P(g))
                continue;
              g === ">" ? Le(a) : D(a, "Invalid characters in closing tag");
              continue;
            case p.TEXT_ENTITY:
            case p.ATTRIB_VALUE_ENTITY_Q:
            case p.ATTRIB_VALUE_ENTITY_U:
              var B, Y;
              switch (a.state) {
                case p.TEXT_ENTITY:
                  B = p.TEXT, Y = "textNode";
                  break;
                case p.ATTRIB_VALUE_ENTITY_Q:
                  B = p.ATTRIB_VALUE_QUOTED, Y = "attribValue";
                  break;
                case p.ATTRIB_VALUE_ENTITY_U:
                  B = p.ATTRIB_VALUE_UNQUOTED, Y = "attribValue";
                  break;
              }
              if (g === ";") {
                var W = Zt(a);
                a.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(W) ? ((a.entityCount += 1) > a.opt.maxEntityCount && ue(
                  a,
                  "Parsed entity count exceeds max entity count"
                ), (a.entityDepth += 1) > a.opt.maxEntityDepth && ue(
                  a,
                  "Parsed entity depth exceeds max entity depth"
                ), a.entity = "", a.state = B, a.write(W), a.entityDepth -= 1) : (a[Y] += W, a.entity = "", a.state = B);
              } else V(a.entity.length ? X : L, g) ? a.entity += g : (D(a, "Invalid character in entity name"), a[Y] += "&" + a.entity + g, a.entity = "", a.state = B);
              continue;
            default:
              throw new Error(a, "Unknown state: " + a.state);
          }
        return a.position >= a.bufferCheckPosition && r(a), a;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var o = String.fromCharCode, a = Math.floor, m = function() {
          var g = 16384, b = [], M, B, Y = -1, W = arguments.length;
          if (!W)
            return "";
          for (var ee = ""; ++Y < W; ) {
            var U = Number(arguments[Y]);
            if (!isFinite(U) || // `NaN`, `+Infinity`, or `-Infinity`
            U < 0 || // not a valid Unicode code point
            U > 1114111 || // not a valid Unicode code point
            a(U) !== U)
              throw RangeError("Invalid code point: " + U);
            U <= 65535 ? b.push(U) : (U -= 65536, M = (U >> 10) + 55296, B = U % 1024 + 56320, b.push(M, B)), (Y + 1 === W || b.length > g) && (ee += o.apply(null, b), b.length = 0);
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
var ks = Ms();
const Ls = /* @__PURE__ */ Ps(ks), gt = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", Bs = 0, Us = 1, He = 2, Gs = 3, js = 4, $s = 0, Xs = 1, be = 2, ft = 3, Ys = 4, Ws = 5, zs = 6;
class pt {
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
    t = Bs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = He;
          break;
        case "mixed":
          t = Gs;
          break;
        case "empty":
          t = Us;
          break;
        case "elementOnly":
          t = js;
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
    t = $s;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Xs;
          break;
        case "element":
          t = be;
          break;
        case "attribute":
          t = ft;
          break;
        case "elementWildcard":
          t = Ys;
          break;
        case "attributeWildcard":
          t = Ws;
          break;
        case "group":
          t = zs;
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
      if (this.getFeatureKind(r) !== be)
        continue;
      const n = this.getName(r) ?? r.getName();
      if (n !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && n === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== ft)
        continue;
      const n = this.getName(r) ?? r.getName();
      if (n !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && n === s)
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
    const s = e.getEAnnotation(gt);
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
    const t = e.getEAnnotation(gt);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const qs = "FEATURE_NAME_MAP", Ks = "EXTENDED_META_DATA", Ye = 1, We = 2, dt = 3, Hs = 4, mt = 5;
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
class Oe {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = J.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new Vs(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = J.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(qs);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, i] of t)
        this.reverseFeatureNameMap.set(i, r);
    }
    const s = e.get(Ks);
    s instanceof pt ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new pt());
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
      const i = this.extendedMetaData.getAttributeFeature(e, t, s);
      if (i)
        return this.computeFeatureKind(i), i;
    }
    let r = e.getEStructuralFeature(s);
    if (!r && this.reverseFeatureNameMap.size > 0) {
      const i = this.reverseFeatureNameMap.get(s);
      i && (r = e.getEStructuralFeature(i));
    }
    return r && this.computeFeatureKind(r), r;
  }
  getFeatureWithElement(e, t, s, r) {
    if (this.extendedMetaData) {
      const i = this.extendedMetaData.getFeature(e, t, s, r);
      if (i)
        return this.computeFeatureKind(i), i;
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? mt;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, We) : this.featuresToKinds.set(e, Ye);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const i = e.getEOpposite();
        !i || typeof i.isTransient != "function" || i.isTransient() || !i.isMany() ? this.featuresToKinds.set(e, dt) : this.featuresToKinds.set(e, Hs);
      } else
        this.featuresToKinds.set(e, dt);
    else
      this.featuresToKinds.set(e, mt);
  }
  setValue(e, t, s, r) {
    if (t.isMany()) {
      let i = e.eGet(t);
      i || (i = [], e.eSet(t, i)), r === -1 ? i.push(s) : r === -2 ? i.unshift(s) : i.splice(r, 0, s);
    } else
      e.eSet(t, s);
    if (s && typeof s == "object") {
      const i = t.getName();
      i === "eClassifiers" && "setEPackage" in s && s.setEPackage(e), i === "eStructuralFeatures" && "setEContainingClass" in s && s.setEContainingClass(e), i === "eOperations" && "setEContainingClass" in s && s.setEContainingClass(e);
    }
  }
  setManyReference(e, t) {
    const s = [], r = e.getObject(), i = e.getFeature(), n = e.getValues(), u = e.getPositions();
    for (let l = 0; l < n.length; l++) {
      const h = n[l], d = u[l];
      try {
        this.setValue(r, i, h, d);
      } catch (f) {
        s.push(f instanceof Error ? f : new Error(String(f)));
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
class Bt {
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
        const i = e.eProxyURI().toString(), n = i.indexOf("#");
        if (n > 0) {
          const u = T.createURI(i.substring(0, n)), l = i.substring(n + 1), h = s.getResource(u, !0);
          if (h) {
            const d = h.getEObject(l);
            if (d)
              return d;
          }
        } else if (n === 0) {
          const u = i.substring(1), l = t.getEObject(u);
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
function ve(c, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return c.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let i = c;
  for (let n = 0; n < s.length - 1; n++) {
    const u = s[n], l = i.getESubpackages();
    i = null;
    for (let h = 0; h < l.length; h++) {
      const d = l.get(h);
      if (d.getName() === u) {
        i = d;
        break;
      }
    }
    if (!i)
      return null;
  }
  return i.getEClassifier(r);
}
const Se = "error", fe = "object", Et = "reference", Xe = "xmiWrapper", yt = "deferredType";
class Qs {
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
const me = "http://www.w3.org/2001/XMLSchema-instance", ze = "http://www.omg.org/XMI", Ct = "xmlns", Js = "type", Zs = "nil", er = "schemaLocation", Tt = "href", tr = "id";
class Ut {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || J.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      const i = s.indexOf(":");
      i !== -1 && (r = s.substring(0, i), t = s.substring(i + 1));
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
    if (r === fe) {
      const i = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && i) {
        const n = this.text.trim();
        if (n.length > 0) {
          const u = this.helper.getExtendedMetaData();
          if (u) {
            const l = i.eClass();
            if (u.getContentKind(l) === He) {
              const h = u.getSimpleContentFeature(l);
              h && this.setFeatureValue(i, h, n);
            }
          }
          this.handleProxy(i, n);
        }
      }
      this.text = null;
    } else if (r === Se)
      this.objects.pop(), this.text = null;
    else if (r === Et)
      this.objects.pop(), this.text = null;
    else if (r === yt)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === Xe)
      this.objects.pop();
    else if (r !== void 0) {
      const i = this.objects.pop() || this.objects[this.objects.length - 1];
      i && r && this.setFeatureValue(i, r, this.text), this.text = null;
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
        if (t.startsWith(Ct)) {
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
    const e = this.attribs.getValueByName(me, er);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], i = t[s + 1];
      this.urisToLocations.set(r, T.createURI(i));
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
    let i = null;
    if (r)
      i = this.createObjectByType(e, r, !0);
    else {
      const n = this.helper.getType(s, t);
      n && (i = this.helper.createObject(s, n));
    }
    i ? (this.processTopObject(i), this.handleObjectAttribs(i)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(me, Js) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, i = t;
    const n = t.indexOf(":");
    n !== -1 && (r = t.substring(0, n), i = t.substring(n + 1));
    const u = this.getFactoryForPrefix(r);
    if (!u)
      return this.error(`Factory not found for type '${t}'`), null;
    const l = this.helper.getType(u, i);
    return l ? this.helper.createObject(u, l) : (this.error(`Type '${i}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? fe : Se);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), i = this.attribs.getURI(t), n = this.attribs.getLocalName(t);
        if (!s.startsWith(Ct) && i !== me) {
          if (i === ze) {
            n === tr && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, n || s, r, i || null);
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
    const i = e.eClass(), n = this.helper.getFeature(i, r ?? null, t);
    n && this.setFeatureValue(e, n, s, -2);
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
      this.objects.push(null), this.types.push(Se), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), i = e && this.helper.getURI(e) || null, n = this.helper.getFeatureWithElement(r, i, t, !0);
    if (n) {
      const u = this.helper.getFeatureKind(n);
      u === Ye || u === We ? (this.objects.push(null), this.types.push(n), this.isNull() || (this.text = "")) : this.createObject(s, n);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(me, Zs) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(Tt) || this.attribs?.getValueByName("", Tt);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(Et);
      return;
    }
    const r = this.getXSIType();
    let i = null;
    if (r)
      i = this.createObjectByType("", r, !1);
    else {
      let n = t.getEType();
      if (n && !("getESuperTypes" in n) && typeof n.eIsProxy == "function" && n.eIsProxy()) {
        const u = n.eProxyURI();
        if (u) {
          const l = u.toString(), h = l.indexOf("#");
          if (h > 0) {
            const d = l.substring(0, h), f = l.substring(h + 1), E = this.packageRegistry.getEPackage(d);
            if (E) {
              const y = ve(E, f);
              y && (n = y, typeof t.setEType == "function" && t.setEType(y));
            }
          }
        }
      }
      if (n && "getESuperTypes" in n) {
        const u = n;
        if (u.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(yt);
          return;
        } else {
          const l = u.getEPackage()?.getEFactoryInstance();
          l && (i = l.create(u));
        }
      }
    }
    i && (this.helper.setValue(e, t, i, -1), this.handleObjectAttribs(i)), this.processObject(i);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(e, t, s) {
    const r = e && this.helper.getURI(e) || null, i = this.helper.getExtendedMetaData();
    if (i && r) {
      const n = s.eClass(), u = i.getElementFeature(n, r, t);
      if (u) {
        const l = this.helper.getFeatureKind(u);
        l === Ye || l === We ? (this.objects.push(null), this.types.push(u), this.isNull() || (this.text = "")) : this.createObject(s, u);
        return;
      }
    }
    if (r) {
      const n = this.packageRegistry.getEPackage(r);
      if (n) {
        const u = n.getEClassifier(t);
        if (u && "getESuperTypes" in u) {
          const l = u, h = s.eClass();
          if (l === h) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(fe);
            return;
          }
          if (h.isSuperTypeOf(l) && !l.isAbstract()) {
            const d = l.getEPackage()?.getEFactoryInstance();
            if (d) {
              const f = d.create(l);
              for (const y of h.getEAllStructuralFeatures()) {
                if (y.isTransient() || y.isDerived())
                  continue;
                const _ = s.eGet(y);
                if (_ != null)
                  try {
                    f.eSet(y, _);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, f);
              const E = this.objects.length - 1;
              this.objects[E] = f, this.handleObjectAttribs(f), this.objects.push(f), this.types.push(fe);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(Se), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
    const i = r.eClass();
    for (const n of i.getEAllStructuralFeatures()) {
      if (!("isContainment" in n))
        continue;
      const u = n;
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
    const i = e && this.helper.getURI(e) || null;
    let n = null;
    if (i) {
      const u = this.packageRegistry.getEPackage(i);
      if (u) {
        const l = u.getEClassifier(t);
        if (l && "getESuperTypes" in l) {
          const h = l;
          if (!h.isAbstract()) {
            const d = h.getEPackage()?.getEFactoryInstance();
            d && (n = d.create(h));
          }
        }
      }
    }
    n ? (this.helper.setValue(s, r, n, -1), this.handleObjectAttribs(n), this.objects[this.objects.length - 1] = n, this.types[this.types.length - 1] = fe, this.objects.push(n), this.types.push(fe)) : (this.objects.push(null), this.types.push(Se), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const n = s.trim().split(/\s+/);
        for (const u of n)
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
            const f = u.eGet(d);
            f?.getEFactoryInstance && (l = f.getEFactoryInstance());
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
    const r = this.resource.getURI(), i = t.indexOf(" ");
    i > 0 && (t = t.substring(i + 1));
    const n = t.indexOf("#");
    if (n > 0) {
      const d = t.substring(0, n), f = t.substring(n + 1);
      if (r && !d.includes("://")) {
        const E = r.toString();
        if (d === E || E.endsWith(d) || E.endsWith("/" + d))
          s = T.createURI(E + "#" + f);
        else {
          const y = T.createURI(d).resolve(r);
          s = T.createURI(y.toString() + "#" + f);
        }
      } else
        s = T.createURI(t);
    } else n === 0 ? r ? s = T.createURI(r.toString() + t) : s = T.createURI(t) : (t.startsWith("/"), r ? s = T.createURI(r.toString() + "#" + t) : s = T.createURI("#" + t));
    const u = e.getEType(), l = u && "getESuperTypes" in u ? u : null, h = new Bt(s, l || void 0);
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
      const r = e.substring(0, s), i = e.substring(s + 1), u = this.resource.getURI()?.toString();
      if (u && (u === r || u.endsWith(r) || u.endsWith("/" + r) || r.endsWith(u)))
        return this.resource.getEObject(i);
      const l = this.packageRegistry.getEPackage(r);
      if (l)
        return this.resolveFragmentInPackage(l, i);
      const h = this.resource.getContents();
      for (let f = 0; f < h.length; f++) {
        const E = h.get(f);
        if (E && typeof E.getNsURI == "function") {
          const y = E;
          if (y.getNsURI() === r)
            return this.resolveFragmentInPackage(y, i);
        }
      }
      const d = this.resource.getResourceSet();
      if (d) {
        const f = T.createURI(r), E = d.getResource(f, !0);
        if (E)
          return E.getEObject(i);
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
    const r = s.split("/"), i = ve(e, s);
    if (i)
      return i;
    if (r.length >= 2) {
      let n = e;
      for (let h = 0; h < r.length - 2; h++) {
        const d = n.getESubpackages();
        let f = null;
        for (let E = 0; E < d.length; E++)
          if (d.get(E).getName() === r[h]) {
            f = d.get(E);
            break;
          }
        if (!f)
          return null;
        n = f;
      }
      const u = r[r.length - 2], l = n.getEClassifier(u);
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
class Gt {
  constructor(e) {
    this.helper = e || new Oe();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), i = this.makeDefaultHandler(e, r), n = Ls.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), u = new Qs();
    n.onprocessinginstruction = (h) => {
      h.name;
    }, n.onopentag = (h) => {
      u.clear();
      const d = h;
      for (const [f, E] of Object.entries(d.attributes)) {
        const y = E, _ = y.prefix ? `${y.prefix}:${y.local}` : y.local;
        if (y.prefix === "xmlns" || y.name === "xmlns") {
          const O = y.prefix === "xmlns" ? y.local : "";
          i.startPrefixMapping(O, y.value);
        }
        u.add(_, y.local, y.uri, y.value);
      }
      i.lineNumber = n.line, i.columnNumber = n.column, i.startElement(d.uri, d.local, d.name, u);
    }, n.onclosetag = (h) => {
      const d = h.indexOf(":"), f = d >= 0 ? h.substring(d + 1) : h;
      i.endElement("", f, h);
    }, n.ontext = (h) => {
      h.trim() && i.characters(h);
    }, n.oncdata = (h) => {
      i.characters(h);
    }, n.onerror = (h) => {
      console.error("XML Parse Error:", h.message), i.error(h.message);
    }, n.write(t).close(), i.endDocument();
    const l = i.getErrors();
    if (l.length > 0 && e.getErrors) {
      const h = e.getErrors();
      for (const d of l) {
        const f = d.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        f ? h.push({
          message: f[3] || d.message,
          line: parseInt(f[1], 10),
          column: parseInt(f[2], 10)
        }) : h.push({ message: d.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new Ut(e, this.helper, t);
  }
}
class sr extends Gt {
  constructor(e) {
    super(e || new rr());
  }
  makeDefaultHandler(e, t) {
    return new ir(e, this.helper, t);
  }
}
class rr extends Oe {
}
class ir extends Ut {
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
function Fe(c) {
  return c != null && typeof c.getELiterals == "function" && typeof c.getEEnumLiteral == "function";
}
class jt {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new Oe(), this.resource = null;
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
      for (const i of r)
        this.saveObject(i, !0);
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(e) {
    const t = /* @__PURE__ */ new Set();
    for (const r of e)
      for (const i of this.collectPackages(r))
        t.add(i);
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${ze}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${me}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const i = r.getNsURI(), n = this.getPrefix(r);
      i && n && !s.has(n) && (this.output.push(` xmlns:${n}="${i}"`), this.declaredNamespaces.set(i, n), s.add(n));
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
    const s = e.eClass(), r = s.getEPackage(), i = r ? this.getPrefix(r) : "", n = s.getName() || "Object", u = i ? `${i}:${n}` : n;
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
    this.output.push(` xmlns:xmi="${ze}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${me}"`);
    const s = /* @__PURE__ */ new Set();
    for (const i of t) {
      const n = i.getNsURI(), u = this.getPrefix(i);
      n && u && !s.has(u) && (this.output.push(` xmlns:${u}="${n}"`), this.declaredNamespaces.set(n, u), s.add(u));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (i) => {
      const n = i.eClass();
      for (const u of n.getEAllStructuralFeatures()) {
        const l = t.getNamespace(u);
        if (l && !this.declaredNamespaces.has(l) && l !== "http://www.w3.org/XML/1998/namespace") {
          const h = this.generatePrefix(l, s);
          h && (this.output.push(` xmlns:${h}="${l}"`), this.declaredNamespaces.set(l, h), s.add(h));
        }
      }
      for (const u of i.eContents())
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
    for (let i = 1; i < 100; i++) {
      const n = `${r}${i}`;
      if (!t.has(n))
        return n;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const n = r.eClass().getEPackage();
      n && t.add(n);
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
          if (s && s.getFeatureKind(r) === be)
            continue;
          const i = r;
          let n = e.eGet(i);
          if (n != null && (n = this.resolveValue(n, e), n != null)) {
            let u = null;
            try {
              u = i.getDefaultValue();
            } catch {
            }
            if (n !== u) {
              const l = this.convertToString(i, n), h = this.getSerializedAttributeName(i, s);
              this.output.push(` ${h}="${this.escapeXml(l)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const i = r;
          if (!i.isContainment()) {
            let n = e.eGet(i);
            if (n != null) {
              const u = this.helper.getSerializedFeatureName(i);
              if (r.isMany()) {
                if (Array.isArray(n) || j(n)) {
                  const l = [];
                  for (const h of n) {
                    const d = this.resolveValue(h, e);
                    if (d == null || typeof d == "string")
                      continue;
                    const f = d.eResource?.();
                    if (f && f === this.resource) {
                      const E = this.getHref(d);
                      E && l.push(E);
                    }
                  }
                  l.length > 0 && this.output.push(` ${u}="${this.escapeXml(l.join(" "))}"`);
                }
              } else if (n = this.resolveValue(n, e), n != null)
                if (typeof n == "string")
                  this.output.push(` ${u}="${this.escapeXml(n)}"`);
                else if (typeof n == "boolean")
                  this.output.push(` ${u}="${n ? "true" : "false"}"`);
                else if (typeof n == "number")
                  this.output.push(` ${u}="${String(n)}"`);
                else {
                  const l = this.getTypePrefixedHref(i, n);
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
    if (ne(e) && e.eIsProxy()) {
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
        const i = s.getURI();
        return i ? `${i.toString()}#${r}` : `#${r}`;
      }
    }
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const r = e.getEContainingClass();
      if (r) {
        const i = r.getEPackage?.(), n = r.getName?.(), u = e.getName?.();
        if (i && n && u) {
          const l = i.getNsURI?.();
          if (l)
            return `${l}#//${n}/${u}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const i = r.getNsURI?.(), n = e.getName?.();
        if (i && n)
          return `${i}#//${n}`;
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
      const i = e.getEContainingClass();
      if (!i)
        return null;
      const n = e.getName?.(), u = i.getName?.();
      if (!n || !u)
        return null;
      t.push(u, n), s = i.getEPackage?.() ?? null;
    } else if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const i = e.getName?.();
      if (!i)
        return null;
      t.push(i), s = e.getEPackage();
    }
    if (!s)
      return null;
    for (; s; ) {
      const i = typeof s.getESuperPackage == "function" ? s.getESuperPackage() : null;
      if (!i)
        break;
      const n = s.getName?.();
      n && t.unshift(n), s = i;
    }
    const r = this.resource.getContents();
    for (const i of r)
      if (i === s)
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
    const i = e.getEType(), n = t.eClass();
    if (i && n && n !== i && "isAbstract" in i && i.isAbstract()) {
      const u = n.getEPackage();
      if (u) {
        const l = this.getPrefix(u), h = n.getName();
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
      for (const i of s) {
        if (i.isTransient() || i.isDerived() || !this.isAttribute(i) || r.getFeatureKind(i) !== be)
          continue;
        const n = e.eGet(i);
        if (n != null)
          return !0;
      }
    for (const i of s)
      if ("isContainment" in i) {
        const n = i;
        if (i.isTransient())
          continue;
        const u = e.eGet(n);
        if (u == null)
          continue;
        if (n.isContainment()) {
          if ((Array.isArray(u) || j(u)) && u.length > 0 || !Array.isArray(u) && !j(u))
            return !0;
        } else if (i.isMany() && (Array.isArray(u) || j(u)) && u.length > 0)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== be)
          continue;
        const n = e.eGet(r);
        if (n == null)
          continue;
        const u = this.getSerializedElementName(r, s), l = r;
        if (r.isMany() && (Array.isArray(n) || j(n))) {
          for (const h of n)
            if (h != null) {
              this.writeIndent();
              const d = this.convertSingleValueToString(l, h);
              this.output.push(`<${u}>${this.escapeXml(d)}</${u}>
`);
            }
        } else {
          this.writeIndent();
          const h = this.convertToString(l, n);
          this.output.push(`<${u}>${this.escapeXml(h)}</${u}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const i = r;
        if (r.isTransient())
          continue;
        const n = e.eGet(i);
        if (n == null)
          continue;
        if (i.isContainment())
          if (Array.isArray(n) || j(n))
            for (const u of n)
              this.writeElement(i, u);
          else
            this.writeElement(i, n);
        else if (r.isMany() && (Array.isArray(n) || j(n)) && n.length > 0)
          for (const u of n) {
            const l = this.resolveValue(u, e);
            if (l == null)
              continue;
            const h = typeof l != "string" ? l.eResource?.() : null;
            if (h && h === this.resource)
              continue;
            const d = typeof l == "string" ? l : this.getHref(l);
            d && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(i)} href="${this.escapeXml(d)}"/>
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
    const i = e.getEType(), n = t.eClass();
    if (i && n && n !== i) {
      const h = n.getEPackage(), d = h ? this.getPrefix(h) : "", f = d ? `${d}:${n.getName()}` : n.getName();
      this.output.push(` xsi:type="${f}"`);
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
    if (ne(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(ne(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const i = s.toString(), n = i.indexOf("#");
          if (n >= 0) {
            const u = i.substring(n + 1);
            let l = this.resource;
            if (n > 0) {
              const h = T.createURI(i.substring(0, n));
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
    if (Array.isArray(t) || j(t)) {
      const r = [];
      for (const i of t)
        i != null && r.push(this.convertSingleValueToString(e, i));
      return r.join(" ");
    }
    if (Fe(e.getEType()))
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
        const i = r.getEFactoryInstance();
        if (i)
          return i.convertToString(s, t);
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
    if (!Fe(e.getEType())) {
      if (typeof t == "string")
        return t;
      if (typeof t == "boolean")
        return t ? "true" : "false";
      if (typeof t == "number")
        return String(t);
    }
    const r = e.getEType();
    if (r && "getEPackage" in r) {
      const i = r.getEPackage();
      if (i) {
        const n = i.getEFactoryInstance();
        if (n)
          return n.convertToString(r, t);
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
    if (t.getContentKind(s) !== He)
      return null;
    const r = t.getSimpleContentFeature(s);
    if (!r)
      return null;
    const i = e.eGet(r);
    return i == null ? null : typeof i == "string" ? i : typeof i == "boolean" ? i ? "true" : "false" : String(i);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(e, t) {
    if (t) {
      const s = t.getNamespace(e), r = t.getName(e) ?? e.getName() ?? "";
      if (s) {
        const i = this.getNamespacePrefix(s);
        if (i)
          return `${i}:${r}`;
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
        const i = this.getNamespacePrefix(s);
        if (i)
          return `${i}:${r}`;
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
class nr extends jt {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class $t extends Lt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new Oe(this);
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
        const i = await s.createInputStream(r), n = await or(i);
        this.loadFromString(n, e);
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
    return new Gt(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new jt(this.xmlHelper);
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
class ar extends $t {
  createXMLLoad() {
    return new sr(this.xmlHelper);
  }
  createXMLSave() {
    return new nr(this.xmlHelper);
  }
}
async function or(c) {
  const e = c.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: i } = await e.read();
    if (r)
      break;
    s += t.decode(i, { stream: !0 });
  }
  return s += t.decode(), s;
}
class ur {
  createResource(e) {
    return new $t(e);
  }
}
class Xt {
  createResource(e) {
    return new ar(e);
  }
}
const ye = Pe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
ye.has("xml") || ye.set("xml", new ur());
ye.has("xmi") || ye.set("xmi", new Xt());
ye.has("ecore") || ye.set("ecore", new Xt());
class cr {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || J.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (i) {
      this.error(`Invalid JSON: ${i instanceof Error ? i.message : String(i)}`);
      return;
    }
    if (Array.isArray(r))
      for (const i of r) {
        const n = this.loadObject(i);
        n && e.getContents().push(n);
      }
    else if (r && typeof r == "object") {
      const i = this.loadObject(r);
      i && e.getContents().push(i);
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
    const n = r.getEFactoryInstance().create(s);
    for (const [u, l] of Object.entries(e)) {
      if (u === "eClass" || l == null)
        continue;
      const h = s.getEStructuralFeature(u);
      if (!h) {
        this.error(`Unknown feature '${u}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(h))
        this.loadAttribute(n, h, l);
      else {
        const d = h;
        d.isContainment() ? this.loadContainment(n, d, l) : this.loadCrossReference(n, d, l);
      }
    }
    return n;
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
    const i = this.packageRegistry.getEPackage(s);
    if (!i)
      return this.error(`Package not found for nsURI: ${s}`), null;
    const n = i.getEClassifier(r);
    return n ? "getESuperTypes" in n ? n : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], i = e.eGet(t);
      if (i && (Array.isArray(i) || j(i)))
        for (const n of r)
          i.push(this.convertAttributeValue(t, n));
      else
        e.eSet(t, r.map((n) => this.convertAttributeValue(t, n)));
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
            const i = r.getEFactoryInstance();
            if (i)
              try {
                return i.createFromString(s, t);
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
      const i = Array.isArray(s) ? s : [s], n = e.eGet(t);
      for (const u of i)
        if (u && typeof u == "object") {
          const l = this.loadObject(u, r);
          l && n && (Array.isArray(n) || j(n)) && n.push(l);
        }
    } else if (s && typeof s == "object" && !Array.isArray(s)) {
      const i = this.loadObject(s, r);
      i && e.eSet(t, i);
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s];
      for (const i of r)
        i && typeof i == "object" && "$ref" in i && this.forwardReferences.push({
          object: e,
          feature: t,
          value: i.$ref
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
      r && (Array.isArray(r) || j(r)) && r.push(s);
    } else
      e.eSet(t, s);
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(e) {
    const t = e.indexOf("#");
    if (t > 0) {
      const s = e.substring(0, t), r = e.substring(t + 1), i = this.resource.getURI();
      if (i && i.toString() === s)
        return this.resource.getEObject(r);
      const n = this.packageRegistry.getEPackage(s);
      if (n)
        return this.resolveFragmentInPackage(n, r);
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
    const r = s.split("/"), i = ve(e, s);
    if (i)
      return i;
    if (r.length >= 2) {
      let n = e;
      for (let h = 0; h < r.length - 2; h++) {
        const d = n.getESubpackages();
        let f = null;
        for (let E = 0; E < d.length; E++)
          if (d.get(E).getName() === r[h]) {
            f = d.get(E);
            break;
          }
        if (!f)
          return null;
        n = f;
      }
      const u = r[r.length - 2], l = n.getEClassifier(u);
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
    const i = e.getEType(), n = i && "getESuperTypes" in i ? i : null, u = new Bt(s, n || void 0);
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
const Nt = "SERIALIZE_TYPE", St = "INDENT", lr = "always", hr = "polymorphic";
class gr {
  constructor() {
    this.serializeType = hr, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(Nt) && (this.serializeType = t.get(Nt)), t.has(St) && (this.indent = t.get(St)));
    const s = e.getContents();
    if (s.size() === 0)
      return "{}";
    if (s.size() === 1) {
      const i = this.saveObject(s.get(0), void 0, !0);
      return JSON.stringify(i, null, this.indent);
    }
    const r = [];
    for (const i of s)
      r.push(this.saveObject(i, void 0, !0));
    return JSON.stringify(r, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(e, t, s = !1) {
    const r = {}, i = e.eClass();
    this.shouldSaveType(e, t, s) && (r.eClass = this.getEClassURI(i));
    for (const n of i.getEAllStructuralFeatures()) {
      if (n.isTransient() || n.isDerived())
        continue;
      const u = e.eGet(n);
      if (u != null)
        if (this.isAttribute(n))
          this.saveAttribute(r, e, n, u);
        else {
          const l = n;
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
      const n = s.getDefaultValue();
      if (r === n)
        return;
    } catch {
    }
    const i = s.getName();
    if (s.isMany()) {
      const n = Array.isArray(r) || j(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      e[i] = n.map((u) => this.convertAttributeValue(s, u));
    } else
      e[i] = this.convertAttributeValue(s, r);
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
        const i = r.getEFactoryInstance();
        if (i)
          return i.convertToString(s, t);
      }
    }
    return String(t);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(e, t, s, r) {
    const i = s.getName();
    if (s.isMany()) {
      const n = Array.isArray(r) || j(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      e[i] = n.map((u) => this.saveContainedChild(u, s));
    } else
      e[i] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (ne(e) && e.eIsProxy()) {
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
    const i = s.getName();
    if (s.isMany()) {
      const n = Array.isArray(r) || j(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      const u = [];
      for (const l of n) {
        const h = this.getHref(l);
        h && u.push({ $ref: h });
      }
      u.length > 0 && (e[i] = u);
    } else {
      const n = this.getHref(r);
      n && (e[i] = { $ref: n });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === lr || s)
      return !0;
    if (t && "isContainment" in t) {
      const i = t.getEType(), n = e.eClass();
      return !!(i && n && i !== n);
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
    if (ne(e) && e.eIsProxy())
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
        const r = s.getEPackage?.(), i = s.getName?.(), n = e.getName?.();
        if (r && i && n) {
          const u = r.getNsURI?.();
          if (u)
            return `${u}#//${i}/${n}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const s = e.getEPackage();
      if (s) {
        const r = s.getNsURI?.(), i = e.getName?.();
        if (r && i)
          return `${r}#//${i}`;
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
class fr extends Lt {
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
    const i = r.getErrors();
    if (i.length > 0) {
      const n = this.getErrors();
      for (const u of i)
        n.push({ message: u.message });
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
    return new cr();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new gr();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class pr {
  createResource(e) {
    return new fr(e);
  }
}
const _t = Pe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
_t.has("json") || _t.set("json", new pr());
class dr {
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
const w = new dr();
class v extends K {
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
      for (const i of r.getESuperTypes())
        t.has(i) || (t.add(i), s(i), e.push(i));
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
      const e = this, t = new Es(this, () => {
        if (w.isRegistered())
          try {
            const s = w.getEClassClass();
            if (s !== e && s instanceof v && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = ae(t);
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
        if (r instanceof v) {
          const i = r.xmlNameToFeature.get(e);
          if (i)
            return i;
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
    return w.getEClassClass();
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
class mr {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (f) => f.toLowerCase() === "true",
      toString: (f) => String(f)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (f) => parseInt(f, 10),
      toString: (f) => String(f)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (f) => {
        const E = parseInt(f, 10);
        return Math.abs(E) > Number.MAX_SAFE_INTEGER ? BigInt(f) : E;
      },
      toString: (f) => String(f)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (f) => parseFloat(f),
      toString: (f) => String(f)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const i = {
      fromString: (f) => f,
      toString: (f) => f ?? ""
    };
    this.registerByClassName("java.lang.String", i), this.registerByClassName("java.lang.Object", i), this.registerByName("EString", i);
    const n = {
      fromString: (f) => f.charAt(0) || "",
      toString: (f) => f ?? ""
    };
    this.registerByClassName("char", n), this.registerByClassName("java.lang.Character", n), this.registerByName("EChar", n), this.registerByName("ECharacterObject", n);
    const u = {
      fromString: (f) => new Date(f),
      toString: (f) => f?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", u), this.registerByName("EDate", u);
    const l = {
      fromString: (f) => f,
      // Keep as string to preserve precision
      toString: (f) => f ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", l), this.registerByClassName("java.math.BigInteger", l), this.registerByName("EBigDecimal", l), this.registerByName("EBigInteger", l);
    const h = {
      fromString: (f) => {
        if (typeof atob == "function") {
          const E = atob(f), y = new Uint8Array(E.length);
          for (let _ = 0; _ < E.length; _++)
            y[_] = E.charCodeAt(_);
          return y;
        }
        return new Uint8Array(Buffer.from(f, "base64"));
      },
      toString: (f) => typeof btoa == "function" ? btoa(String.fromCharCode(...f)) : Buffer.from(f).toString("base64")
    };
    this.registerByClassName("byte[]", h), this.registerByName("EByteArray", h);
    const d = {
      fromString: (f) => f,
      toString: (f) => String(f ?? "")
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
    if (Fe(e)) {
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
    if (Fe(e)) {
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
    const i = t.trim();
    return /^-?\d+$/.test(i) ? e.getEEnumLiteral(Number(i)) : null;
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
const C = new mr();
class we {
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
    return new kt(e);
  }
  createFromString(e, t) {
    return C.createFromString(e, t);
  }
  convertToString(e, t) {
    return C.convertToString(e, t);
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
    return w.getEFactoryClass();
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
class Er extends oe {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && w.isRegistered()) {
      const t = w.getEPackageClass();
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
class yr extends oe {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && w.isRegistered()) {
      const e = w.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof Z && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof Z && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof Z && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof Z && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof Z && (s.eSuperPackage = null), t instanceof Z && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class Z extends K {
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
      const e = new we();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = ae(new Er(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = ae(new yr(this))), this._eSubpackages;
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
          const i = r.getEStructuralFeature?.("name");
          if (i && s.eGet(i) === e)
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
    return w.getEPackageClass();
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
          for (const i of t)
            r.add(i);
        }
        break;
      case "eSubpackages":
        if (Array.isArray(t) || t && typeof t[Symbol.iterator] == "function") {
          const r = this.getESubpackages();
          r.clear();
          for (const i of t)
            r.add(i);
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
class Yt extends K {
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
    if (this.eType && ne(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), i = r.indexOf("#");
        if (i > 0) {
          const n = r.substring(0, i), u = r.substring(i + 1), l = [J.INSTANCE];
          let h = this.eResource()?.getResourceSet();
          if (!h) {
            let d = this.eContainingClass;
            for (; d; ) {
              if (typeof d.eResource == "function") {
                const f = d.eResource();
                if (f) {
                  h = f.getResourceSet();
                  break;
                }
              }
              d = d.getEPackage?.() ?? d.getESuperPackage?.() ?? d.eContainer?.();
            }
          }
          h && l.push(h.getPackageRegistry());
          for (const d of l) {
            const f = d.getEPackage(n);
            if (f) {
              const O = ve(f, u);
              if (O)
                return this.eType = O, this.eType;
            }
            let E = n;
            const y = E.lastIndexOf("/");
            y >= 0 && (E = E.substring(y + 1));
            const _ = E.indexOf(".");
            if (_ > 0 && (E = E.substring(0, _)), E)
              for (const O of d.keys()) {
                const R = d.getEPackage(O);
                if (R && R.getName() === E) {
                  const A = ve(R, u);
                  if (A)
                    return this.eType = A, this.eType;
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
    return w.getEStructuralFeatureClass();
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
class I extends Yt {
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
    return w.getEAttributeClass();
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
class F extends Yt {
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
    return w.getEReferenceClass();
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
class x extends K {
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
    return w.getEDataTypeClass();
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
(() => {
  const c = new x();
  return c.setName("EString"), c.setInstanceClassName("java.lang.String"), c;
})();
(() => {
  const c = new x();
  return c.setName("EInt"), c.setInstanceClassName("int"), c;
})();
(() => {
  const c = new x();
  return c.setName("EBoolean"), c.setInstanceClassName("boolean"), c;
})();
(() => {
  const c = new x();
  return c.setName("EFloat"), c.setInstanceClassName("float"), c;
})();
(() => {
  const c = new x();
  return c.setName("EDouble"), c.setInstanceClassName("double"), c;
})();
(() => {
  const c = new x();
  return c.setName("ELong"), c.setInstanceClassName("long"), c;
})();
(() => {
  const c = new x();
  return c.setName("EDate"), c.setInstanceClassName("java.util.Date"), c;
})();
class Cr extends K {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = w.getEAnnotationClass().getEStructuralFeature("details"), s = w.getEStringToStringMapEntryClass();
      this._detailsMap = Rs(this, t, s);
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
    return w.getEAnnotationClass();
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
          for (const [i, n] of t)
            r.putByKey(i, n);
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
class Wt extends K {
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
    return w.getEEnumLiteralClass();
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
class Tr extends x {
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
    return w.getEEnumClass();
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
            r instanceof Wt && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Nr extends K {
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
      const i = t[r].getEType(), n = s[r].getEType();
      if (i !== n)
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
    return w.getEOperationClass();
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
class Sr extends K {
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
    return w.getEParameterClass();
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
class _r extends K {
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
    return this.eUpperBound ? this.eUpperBound.getERawType() : w.getEObjectClass();
  }
  eClass() {
    return w.getEGenericTypeClass();
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
class Ir extends K {
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
    return w.getETypeParameterClass();
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
const Ar = "ecore.xml.type";
let _e = null;
function br() {
  return _e || (_e = new Rr(), _e.initialize(), J.INSTANCE.set(qt, _e)), _e;
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
class Rr extends Z {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(qt), this.setNsPrefix(Ar);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of vr) {
      const r = new x();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new Dr(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (u) => u.toLowerCase() === "true" || u === "1", toString: (u) => String(u) };
    C.registerByName("Boolean", e), C.registerByName("BooleanObject", e);
    const t = { fromString: (u) => parseInt(u, 10), toString: (u) => String(u) };
    C.registerByName("Int", t), C.registerByName("IntObject", t), C.registerByName("Short", t), C.registerByName("ShortObject", t), C.registerByName("Byte", t), C.registerByName("ByteObject", t), C.registerByName("UnsignedByte", t), C.registerByName("UnsignedByteObject", t), C.registerByName("UnsignedShort", t), C.registerByName("UnsignedShortObject", t), C.registerByName("UnsignedInt", t), C.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (u) => {
        const l = parseInt(u, 10);
        return Math.abs(l) > Number.MAX_SAFE_INTEGER ? BigInt(u) : l;
      },
      toString: (u) => String(u)
    };
    C.registerByName("Long", s), C.registerByName("LongObject", s);
    const r = { fromString: (u) => parseFloat(u), toString: (u) => String(u) };
    C.registerByName("Float", r), C.registerByName("FloatObject", r), C.registerByName("Double", r), C.registerByName("DoubleObject", r);
    const i = { fromString: (u) => u, toString: (u) => u ?? "0" };
    C.registerByName("Decimal", i), C.registerByName("Integer", i), C.registerByName("NonNegativeInteger", i), C.registerByName("NonPositiveInteger", i), C.registerByName("NegativeInteger", i), C.registerByName("PositiveInteger", i), C.registerByName("UnsignedLong", i);
    const n = { fromString: (u) => u, toString: (u) => u ?? "" };
    C.registerByName("String", n), C.registerByName("AnySimpleType", n), C.registerByName("AnyURI", n), C.registerByName("NormalizedString", n), C.registerByName("Token", n), C.registerByName("Name", n), C.registerByName("NCName", n), C.registerByName("Language", n), C.registerByName("ID", n), C.registerByName("IDREF", n), C.registerByName("ENTITY", n), C.registerByName("NMTOKEN", n), C.registerByName("Date", n), C.registerByName("DateTime", n), C.registerByName("Time", n), C.registerByName("Duration", n), C.registerByName("GDay", n), C.registerByName("GMonth", n), C.registerByName("GMonthDay", n), C.registerByName("GYear", n), C.registerByName("GYearMonth", n), C.registerByName("QName", n), C.registerByName("NOTATION", n);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class Dr extends we {
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
const zt = "http://www.eclipse.org/emf/2002/Ecore", Pr = "ecore", qt = "http://www.eclipse.org/emf/2003/XMLType";
let Ee = null;
function ie() {
  return Ee || (Ee = new xr(), Ee.initialize(), Fr(), w.register(ie)), Ee;
}
function Fr() {
  Ee && (J.INSTANCE.set(zt, Ee), br());
}
class xr extends Z {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(zt), this.setNsPrefix(Pr);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Or(this);
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
    this._eBooleanDataType = new x(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new x(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new x(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new x(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new x(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new x(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new x(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new x(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new x(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new x(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new x(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new x(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new x(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new x(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new x(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new v(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new v(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new v(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new v(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new v(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new v(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new v(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new v(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new v(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new v(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new v(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new v(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new v(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new v(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new v(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new v(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new v(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new v(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new v(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new v(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
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
    const i = new I();
    i.setName("upperBound"), i.setEType(this._eIntDataType), i.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(i);
    const n = new I();
    n.setName("instanceClassName"), n.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(n);
    const u = new I();
    u.setName("abstract"), u.setEType(this._eBooleanDataType), u.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(u);
    const l = new I();
    l.setName("interface"), l.setEType(this._eBooleanDataType), l.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(l);
    const h = new I();
    h.setName("nsURI"), h.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(h);
    const d = new I();
    d.setName("nsPrefix"), d.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(d);
    const f = new I();
    f.setName("changeable"), f.setEType(this._eBooleanDataType), f.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(f);
    const E = new I();
    E.setName("volatile"), E.setEType(this._eBooleanDataType), E.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(E);
    const y = new I();
    y.setName("transient"), y.setEType(this._eBooleanDataType), y.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(y);
    const _ = new I();
    _.setName("defaultValueLiteral"), _.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(_);
    const O = new I();
    O.setName("unsettable"), O.setEType(this._eBooleanDataType), O.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(O);
    const R = new I();
    R.setName("derived"), R.setEType(this._eBooleanDataType), R.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(R);
    const A = new I();
    A.setName("iD"), A.setEType(this._eBooleanDataType), A.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(A);
    const $ = new I();
    $.setName("containment"), $.setEType(this._eBooleanDataType), $.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push($);
    const L = new I();
    L.setName("resolveProxies"), L.setEType(this._eBooleanDataType), L.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(L);
    const X = new I();
    X.setName("value"), X.setEType(this._eIntDataType), X.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(X);
    const P = new I();
    P.setName("literal"), P.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(P);
    const H = new I();
    H.setName("source"), H.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(H);
    const Ce = new I();
    Ce.setName("key"), Ce.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Ce);
    const V = new I();
    V.setName("value"), V.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(V);
    const ge = new I();
    ge.setName("serializable"), ge.setEType(this._eBooleanDataType), ge.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(ge);
  }
  createReferences() {
    const e = new F();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new F();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new F();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new F();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const i = new F();
    i.setName("eOperations"), i.setEType(this._eOperationClass), i.setContainment(!0), i.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(i);
    const n = new F();
    n.setName("eClassifiers"), n.setEType(this._eClassifierClass), n.setContainment(!0), n.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(n);
    const u = new F();
    u.setName("eSubpackages"), u.setEType(this._ePackageClass), u.setContainment(!0), u.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(u);
    const l = new F();
    l.setName("eFactoryInstance"), l.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(l);
    const h = new F();
    h.setName("eLiterals"), h.setEType(this._eEnumLiteralClass), h.setContainment(!0), h.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(h);
    const d = new F();
    d.setName("eOpposite"), d.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(d);
    const f = new F();
    f.setName("eParameters"), f.setEType(this._eParameterClass), f.setContainment(!0), f.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(f);
    const E = new F();
    E.setName("details"), E.setEType(this._eStringToStringMapEntryClass), E.setContainment(!0), E.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(E);
    const y = new F();
    y.setName("eGenericType"), y.setEType(this._eGenericTypeClass), y.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(y);
    const _ = new F();
    _.setName("eTypeParameters"), _.setEType(this._eTypeParameterClass), _.setContainment(!0), _.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(_);
    const O = new F();
    O.setName("eGenericSuperTypes"), O.setEType(this._eGenericTypeClass), O.setContainment(!0), O.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(O);
    const R = new F();
    R.setName("eTypeParameters"), R.setEType(this._eTypeParameterClass), R.setContainment(!0), R.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(R);
    const A = new F();
    A.setName("eBounds"), A.setEType(this._eGenericTypeClass), A.setContainment(!0), A.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(A);
    const $ = new F();
    $.setName("eClassifier"), $.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push($);
    const L = new F();
    L.setName("eTypeParameter"), L.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(L);
    const X = new F();
    X.setName("eTypeArguments"), X.setEType(this._eGenericTypeClass), X.setContainment(!0), X.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(X);
    const P = new F();
    P.setName("eUpperBound"), P.setEType(this._eGenericTypeClass), P.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(P);
    const H = new F();
    H.setName("eLowerBound"), H.setEType(this._eGenericTypeClass), H.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(H);
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
class Or extends we {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new v();
      case "EAttribute":
        return new I();
      case "EReference":
        return new F();
      case "EDataType":
        return new x();
      case "EEnum":
        return new Tr();
      case "EEnumLiteral":
        return new Wt();
      case "EAnnotation":
        return new Cr();
      case "EPackage":
        return new Z();
      case "EOperation":
        return new Nr();
      case "EParameter":
        return new Sr();
      case "EGenericType":
        return new _r();
      case "ETypeParameter":
        return new Ir();
      default:
        return super.create(e);
    }
  }
}
ie();
class z extends K {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static URL = 1;
  // Private fields
  _id;
  _url;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.IMAGE_GALLERY_ITEM;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(e) {
    const t = this._id;
    this._id = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.ID,
      merge: () => !1
    });
  }
  get url() {
    return this._url;
  }
  set url(e) {
    const t = this._url;
    this._url = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ID:
        return this.id;
      case z.URL:
        return this.url;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ID:
        this.id = t, super.eSet(e, t);
        break;
      case z.URL:
        this.url = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ID:
        return this._id !== void 0;
      case z.URL:
        return this._url !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ID:
        this._id = void 0;
        return;
      case z.URL:
        this._url = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class q extends K {
  // Feature ID Constants (eLiterals)
  static FIT = 0;
  static DIASHOW_INTERVAL = 1;
  // Private fields
  _fit;
  _diashowInterval;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.GALLERY_SETTINGS;
  }
  // Getters and Setters
  get fit() {
    return this._fit;
  }
  set fit(e) {
    const t = this._fit;
    this._fit = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(q.FIT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => q.FIT,
      merge: () => !1
    });
  }
  get diashowInterval() {
    return this._diashowInterval;
  }
  set diashowInterval(e) {
    const t = this._diashowInterval;
    this._diashowInterval = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(q.DIASHOW_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => q.DIASHOW_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.FIT:
        return this.fit;
      case q.DIASHOW_INTERVAL:
        return this.diashowInterval;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case q.FIT:
        this.fit = t, super.eSet(e, t);
        break;
      case q.DIASHOW_INTERVAL:
        this.diashowInterval = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.FIT:
        return this._fit !== void 0;
      case q.DIASHOW_INTERVAL:
        return this._diashowInterval !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.FIT:
        this._fit = void 0;
        return;
      case q.DIASHOW_INTERVAL:
        this._diashowInterval = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class se extends At {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.IMAGE_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(e) {
    const t = this._imageUrl;
    this._imageUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(se.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.IMAGE_URL:
        return this.imageUrl;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case se.IMAGE_URL:
        this.imageUrl = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.IMAGE_URL:
        return this._imageUrl !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.IMAGE_URL:
        this._imageUrl = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class re extends At {
  // Feature ID Constants (eLiterals)
  static IMAGE_URL = 4;
  // Private fields
  _imageUrl;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.IMAGE_RIGHT_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(e) {
    const t = this._imageUrl;
    this._imageUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(re.IMAGE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => re.IMAGE_URL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case re.IMAGE_URL:
        return this.imageUrl;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case re.IMAGE_URL:
        this.imageUrl = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case re.IMAGE_URL:
        return this._imageUrl !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case re.IMAGE_URL:
        this._imageUrl = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class Ve extends we {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ve()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(N.eINSTANCE);
  }
  /**
   * Create a new ImageSettings instance
   */
  createImageSettings() {
    return new Q();
  }
  /**
   * Create a new ImageGalleryItem instance
   */
  createImageGalleryItem() {
    return new z();
  }
  /**
   * Create a new GallerySettings instance
   */
  createGallerySettings() {
    return new q();
  }
  /**
   * Create a new ImageClickPayload instance
   */
  createImageClickPayload() {
    return new se();
  }
  /**
   * Create a new ImageRightClickPayload instance
   */
  createImageRightClickPayload() {
    return new re();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ImageSettings":
        return this.createImageSettings();
      case "ImageGalleryItem":
        return this.createImageGalleryItem();
      case "GallerySettings":
        return this.createGallerySettings();
      case "ImageClickPayload":
        return this.createImageClickPayload();
      case "ImageRightClickPayload":
        return this.createImageRightClickPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function It(c) {
  const e = J.INSTANCE.getEPackage(c);
  if (!e)
    throw new Error(`EPackage '${c}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ImagesettingsPackage.`);
  return e;
}
class N extends Z {
  static eNAME = "imagesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.image";
  static eNS_PREFIX = "imagesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    IMAGE_SETTINGS: null,
    IMAGE_SETTINGS__IMAGES_SETTINGS: null,
    IMAGE_SETTINGS__IMAGES: null,
    IMAGE_GALLERY_ITEM: null,
    IMAGE_GALLERY_ITEM__ID: null,
    IMAGE_GALLERY_ITEM__URL: null,
    GALLERY_SETTINGS: null,
    GALLERY_SETTINGS__FIT: null,
    GALLERY_SETTINGS__DIASHOW_INTERVAL: null,
    IMAGE_CLICK_PAYLOAD: null,
    IMAGE_CLICK_PAYLOAD__IMAGE_URL: null,
    IMAGE_RIGHT_CLICK_PAYLOAD: null,
    IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL: null
  };
  constructor() {
    super(), this.setName(N.eNAME), this.setNsURI(N.eNS_URI), this.setNsPrefix(N.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    J.INSTANCE.set(N.eNS_URI, this), this.setEFactoryInstance(Ve.eINSTANCE);
    const e = new v();
    e.setName("ImageSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), N.Literals.IMAGE_SETTINGS = e;
    const t = new F();
    t.setContainment(!0), t.setName("imagesSettings"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), N.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS = t;
    const s = new F();
    s.setContainment(!0), s.setName("images"), s.setLowerBound(0), s.setUpperBound(-1), e.getEStructuralFeatures().push(s), N.Literals.IMAGE_SETTINGS__IMAGES = s;
    const r = new v();
    r.setName("ImageGalleryItem"), r.setAbstract(!1), r.setInterface(!1), this.getEClassifiers().push(r), r.setEPackage(this), N.Literals.IMAGE_GALLERY_ITEM = r;
    const i = new I();
    i.setName("id"), i.setLowerBound(0), i.setUpperBound(1), r.getEStructuralFeatures().push(i), N.Literals.IMAGE_GALLERY_ITEM__ID = i;
    const n = new I();
    n.setName("url"), n.setLowerBound(0), n.setUpperBound(1), r.getEStructuralFeatures().push(n), N.Literals.IMAGE_GALLERY_ITEM__URL = n;
    const u = new v();
    u.setName("GallerySettings"), u.setAbstract(!1), u.setInterface(!1), this.getEClassifiers().push(u), u.setEPackage(this), N.Literals.GALLERY_SETTINGS = u;
    const l = new I();
    l.setName("fit"), l.setLowerBound(0), l.setUpperBound(1), u.getEStructuralFeatures().push(l), N.Literals.GALLERY_SETTINGS__FIT = l;
    const h = new I();
    h.setName("diashowInterval"), h.setLowerBound(0), h.setUpperBound(1), u.getEStructuralFeatures().push(h), N.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL = h;
    const d = new v();
    d.setName("ImageClickPayload"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), N.Literals.IMAGE_CLICK_PAYLOAD = d;
    const f = new I();
    f.setName("imageUrl"), f.setLowerBound(0), f.setUpperBound(1), d.getEStructuralFeatures().push(f), N.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL = f;
    const E = new v();
    E.setName("ImageRightClickPayload"), E.setAbstract(!1), E.setInterface(!1), this.getEClassifiers().push(E), E.setEPackage(this), N.Literals.IMAGE_RIGHT_CLICK_PAYLOAD = E;
    const y = new I();
    y.setName("imageUrl"), y.setLowerBound(0), y.setUpperBound(1), E.getEStructuralFeatures().push(y), N.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL = y, N.Literals.IMAGE_CLICK_PAYLOAD.getESuperTypes().push(It("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), N.Literals.IMAGE_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(It("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), N.Literals.IMAGE_SETTINGS__IMAGES_SETTINGS.setEType(N.Literals.GALLERY_SETTINGS), N.Literals.IMAGE_SETTINGS__IMAGES.setEType(N.Literals.IMAGE_GALLERY_ITEM), N.Literals.IMAGE_GALLERY_ITEM__ID.setEType(ie().getEClassifier("EString")), N.Literals.IMAGE_GALLERY_ITEM__URL.setEType(ie().getEClassifier("EString")), N.Literals.GALLERY_SETTINGS__FIT.setEType(ie().getEClassifier("EString")), N.Literals.GALLERY_SETTINGS__DIASHOW_INTERVAL.setEType(ie().getEClassifier("EInt")), N.Literals.IMAGE_CLICK_PAYLOAD__IMAGE_URL.setEType(ie().getEClassifier("EString")), N.Literals.IMAGE_RIGHT_CLICK_PAYLOAD__IMAGE_URL.setEType(ie().getEClassifier("EString"));
  }
}
class Q extends K {
  // Feature ID Constants (eLiterals)
  static IMAGES_SETTINGS = 0;
  static IMAGES = 1;
  // Private fields
  _imagesSettings;
  _images;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.IMAGE_SETTINGS;
  }
  // Getters and Setters
  get imagesSettings() {
    return this._imagesSettings;
  }
  set imagesSettings(e) {
    const t = this._imagesSettings;
    this._imagesSettings = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Q.IMAGES_SETTINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.IMAGES_SETTINGS,
      merge: () => !1
    });
  }
  get images() {
    return this._images || (this._images = wt(this, this.eClass().getEStructuralFeature("images"))), this._images;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.IMAGES_SETTINGS:
        return this.imagesSettings;
      case Q.IMAGES:
        return this.images;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.IMAGES_SETTINGS:
        this.imagesSettings = t, super.eSet(e, t);
        break;
      case Q.IMAGES:
        this.images.clear(), this.images.addAll(t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.IMAGES_SETTINGS:
        return this._imagesSettings !== void 0;
      case Q.IMAGES:
        return this._images !== void 0 && !this._images.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.IMAGES_SETTINGS:
        this._imagesSettings = void 0;
        return;
      case Q.IMAGES:
        this._images && this._images.clear();
        return;
      default:
        super.eUnset(e);
    }
  }
}
const wr = ["src"], Mr = {
  key: 1,
  class: "slideshow-container"
}, kr = { class: "slideshow-nav slideshow-nav--prev" }, Lr = ["src", "onClick", "onContextmenu"], Br = { class: "slideshow-nav slideshow-nav--next" }, Ur = /* @__PURE__ */ bt({
  __name: "ImageWidget",
  props: /* @__PURE__ */ us({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(c) {
    const e = c, { id: t } = cs(e), s = vt(c, "configv"), r = Rt(fs.TINY_EMITTER), i = (R) => {
      t?.value && r.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: t.value,
        payload: { imageUrl: R, widgetId: t.value, timestamp: Date.now() }
      });
    }, n = (R) => {
      t?.value && r.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: t.value,
        payload: { imageUrl: R, widgetId: t.value, timestamp: Date.now() }
      });
    }, u = new Q();
    nt(() => {
      s.value && Object.assign(s.value, { ...u, ...s.value });
    });
    const l = at(() => ({
      none: "",
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down"
    })[s.value.imagesSettings?.fit?.toLowerCase() || "none"] || "");
    let h = null;
    const d = Dt(0), f = () => {
      d.value < s.value.images.length - 1 && d.value++;
    }, E = () => {
      d.value > 0 && d.value--;
    }, y = () => {
      h && clearInterval(h), (s.value.imagesSettings?.diashowInterval ?? 0) > 0 && (h = setInterval(() => {
        if (d.value === s.value.images.length - 1) {
          d.value = 0;
          return;
        }
        f();
      }, (s.value.imagesSettings?.diashowInterval ?? 1) * 1e3));
    };
    nt(() => {
      y();
    }), Ge(() => s.value.imagesSettings?.diashowInterval, y);
    const _ = (R) => R;
    Ge(
      () => s.value.images?.length,
      (R, A) => {
        A > R && d.value >= R && (d.value = R - 1);
      }
    );
    const O = at(() => s.value.images?.length > 0 ? s.value.images.length - 1 : 0);
    return Ge(O, () => {
      d.value = O.value;
    }), (R, A) => {
      const $ = Ie("va-button");
      return s.value.images?.length <= 1 ? (he(), pe("img", {
        key: 0,
        class: ut(["w-full h-full cursor-pointer", l.value]),
        src: _(s.value.images[0]?.url ?? ""),
        onClick: A[0] || (A[0] = (L) => i(s.value.images[0]?.url ?? "")),
        onContextmenu: A[1] || (A[1] = ot((L) => n(s.value.images[0]?.url ?? ""), ["prevent"]))
      }, null, 42, wr)) : (he(), pe("div", Mr, [
        de("div", kr, [
          le($, {
            onClick: A[2] || (A[2] = (L) => E()),
            icon: "chevron_left",
            preset: "plain",
            "text-color": "#ffffff",
            disabled: d.value === 0
          }, null, 8, ["disabled"])
        ]),
        de("div", {
          class: "slideshow-track",
          style: ct({ transform: `translateX(-${100 * d.value}%)` })
        }, [
          (he(!0), pe(Pt, null, Ft(s.value.images, (L, X) => (he(), pe("div", {
            key: L.id,
            class: "slideshow-slide",
            style: ct({ transform: `translateX(${100 * X}%)` })
          }, [
            de("img", {
              class: ut(["w-full h-full cursor-pointer", l.value]),
              src: _(L.url ?? ""),
              onClick: (P) => i(L.url ?? ""),
              onContextmenu: ot((P) => n(L.url ?? ""), ["prevent"])
            }, null, 42, Lr)
          ], 4))), 128))
        ], 4),
        de("div", Br, [
          le($, {
            onClick: A[3] || (A[3] = (L) => f()),
            icon: "chevron_right",
            "text-color": "#ffffff",
            disabled: d.value === s.value.images?.length - 1,
            preset: "plain"
          }, null, 8, ["disabled"])
        ])
      ]));
    };
  }
}), Kt = (c, e) => {
  const t = c.__vccOpts || c;
  for (const [s, r] of e)
    t[s] = r;
  return t;
}, Gr = /* @__PURE__ */ Kt(Ur, [["__scopeId", "data-v-0d3caa41"]]), G = [];
for (let c = 0; c < 256; ++c)
  G.push((c + 256).toString(16).slice(1));
function jr(c, e = 0) {
  return (G[c[e + 0]] + G[c[e + 1]] + G[c[e + 2]] + G[c[e + 3]] + "-" + G[c[e + 4]] + G[c[e + 5]] + "-" + G[c[e + 6]] + G[c[e + 7]] + "-" + G[c[e + 8]] + G[c[e + 9]] + "-" + G[c[e + 10]] + G[c[e + 11]] + G[c[e + 12]] + G[c[e + 13]] + G[c[e + 14]] + G[c[e + 15]]).toLowerCase();
}
const $r = new Uint8Array(16);
function Xr() {
  return crypto.getRandomValues($r);
}
function Yr(c, e, t) {
  return crypto.randomUUID ? crypto.randomUUID() : Wr(c);
}
function Wr(c, e, t) {
  c = c || {};
  const s = c.random ?? c.rng?.() ?? Xr();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, jr(s);
}
const zr = { class: "settings-container" }, qr = { class: "image-list-container" }, Kr = /* @__PURE__ */ bt({
  __name: "ImageWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(c) {
    const e = Rt("i18n"), t = Dt({
      widgetSection: !1,
      storeSection: !1
    }), s = vt(c, "modelValue"), r = () => {
      s.value.images || (s.value.images = []);
      const i = {
        id: Yr(),
        url: "Test"
      };
      s.value.images?.splice(
        s.value.images.length,
        0,
        i
      );
    };
    return (i, n) => {
      const u = Ie("va-button"), l = Ie("va-input"), h = Ie("va-select"), d = Ie("va-collapse");
      return he(), ls(d, {
        modelValue: t.value.widgetSection,
        "onUpdate:modelValue": n[2] || (n[2] = (f) => t.value.widgetSection = f),
        icon: "settings",
        header: "Image widget settings"
      }, {
        default: lt(() => [
          de("div", zr, [
            le(u, { onClick: r }, {
              default: lt(() => [
                hs(gs(Re(e)?.t("image:ImageWidget.addButton")), 1)
              ]),
              _: 1
            }),
            de("div", qr, [
              (he(!0), pe(Pt, null, Ft(s.value.images, (f, E) => (he(), pe("div", {
                key: f.id,
                class: "image-settings-container"
              }, [
                le(l, {
                  modelValue: f.url,
                  "onUpdate:modelValue": (y) => f.url = y,
                  label: Re(e)?.t("image:ImageWidget.imageUrl"),
                  class: "image-settings-remove-input"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                le(u, {
                  onClick: () => s.value.images.splice(E, 1),
                  icon: "clear",
                  class: "image-settings-remove-button"
                }, null, 8, ["onClick"])
              ]))), 128))
            ]),
            le(h, {
              modelValue: s.value.imagesSettings.fit,
              "onUpdate:modelValue": n[0] || (n[0] = (f) => s.value.imagesSettings.fit = f),
              label: Re(e)?.t("image:ImageWidget.imageFit"),
              options: ["none", "contain", "cover", "fill", "scale-down"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"]),
            le(l, {
              modelValue: s.value.imagesSettings.diashowInterval,
              "onUpdate:modelValue": n[1] || (n[1] = (f) => s.value.imagesSettings.diashowInterval = f),
              label: Re(e)?.t("image:ImageWidget.imageDiashowInterval")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Hr = /* @__PURE__ */ Kt(Kr, [["__scopeId", "data-v-e2074a09"]]), Vr = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: se
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: re
  }
];
var Qr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, Qe = (c, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Jr(e, t) : e, i = c.length - 1, n; i >= 0; i--)
    (n = c[i]) && (r = (s ? n(e, t, r) : n(r)) || r);
  return s && r && Qr(e, t, r), r;
}, Zr = (c, e) => (t, s) => e(t, s, c);
const De = "ImageWidget";
let xe = class {
  constructor(c) {
    this.events = c;
  }
  type = De;
  component = Gr;
  settingsComponent = Hr;
  supportedDSTypes = [];
  icon = ds;
  name = "Image";
  register() {
    this.events.registerWidget(De, Vr);
  }
  unregister() {
    this.events.unregisterWidget(De);
  }
};
Qe([
  is()
], xe.prototype, "register", 1);
Qe([
  ns()
], xe.prototype, "unregister", 1);
xe = Qe([
  as({
    service: [ps],
    properties: { "widget.type": De }
  }),
  Zr(0, os(rs))
], xe);
export {
  Gr as ImageWidget,
  xe as ImageWidgetProvider,
  Hr as ImageWidgetSettings
};
