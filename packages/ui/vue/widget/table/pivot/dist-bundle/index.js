(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-ddf7bd40]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-ddf7bd40]{overflow:hidden;padding:16px}.settings-container[data-v-6b0d43bf]{padding:16px}.settings-block[data-v-6b0d43bf]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.settings-block[data-v-6b0d43bf]:last-child{margin-bottom:0}.settings-block h3[data-v-6b0d43bf]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}.hint-text[data-v-6b0d43bf]{margin:0 0 16px;color:var(--va-text-secondary);font-size:13px}.level-header[data-v-6b0d43bf]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600}.level-card[data-v-6b0d43bf]{border:1px solid #ddd;padding:16px;border-radius:4px;margin-bottom:12px;background:#fafafa;display:flex;flex-direction:column;gap:12px}.level-card-header[data-v-6b0d43bf]{display:flex;justify-content:space-between;align-items:center}.empty-state[data-v-6b0d43bf]{padding:20px;text-align:center;color:var(--va-text-secondary);background:#f5f5f5;border-radius:4px}.color-scale-row[data-v-6b0d43bf]{display:flex;gap:12px}.color-scale-row[data-v-6b0d43bf]>*{flex:1}\n";})();
import { PayloadImpl as qe, WidgetActionInterfaceImpl as ns, EVENT_REGISTRY_ID as as, EVENT_ACTIONS_REGISTRY_ID as os } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ls, deactivate as us, component as cs, inject as _t } from "@eclipse-daanse/tsm";
import { defineComponent as Pt, mergeModels as hs, toRefs as gs, inject as ds, useModel as kt, onMounted as fs, computed as de, ref as Ut, watch as Tt, createElementBlock as pe, openBlock as ie, withModifiers as ps, createElementVNode as W, createBlock as Ke, createCommentVNode as Le, unref as he, resolveComponent as Pe, Fragment as je, createVNode as I, withCtx as K, createTextVNode as ke, renderList as it, toDisplayString as nt } from "vue";
import { VariableWrapper as v, useVariableRepository as Es, useDatasourceRepository as ms } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { PivotTable as Cs } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { VariableInput as fe } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as _s } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ys } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ts = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
function be(h) {
  return h && typeof h.eProxyURI == "function" && typeof h.eSetProxyURI == "function";
}
const V = {
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
}, gt = -1, Ns = -1;
class $e {
  constructor(e, t, s, r, i, n = gt, l = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = Ns, this.oldValue = r, this.newValue = i, this.position = n, this.wasSetFlag = l;
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
      case V.RESOLVE:
      case V.REMOVING_ADAPTER:
        return !0;
      case V.ADD:
      case V.ADD_MANY:
      case V.REMOVE:
      case V.REMOVE_MANY:
      case V.MOVE:
        return !1;
      case V.SET:
      case V.UNSET:
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
      [V.SET]: "SET",
      [V.UNSET]: "UNSET",
      [V.ADD]: "ADD",
      [V.REMOVE]: "REMOVE",
      [V.ADD_MANY]: "ADD_MANY",
      [V.REMOVE_MANY]: "REMOVE_MANY",
      [V.MOVE]: "MOVE",
      [V.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [V.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const at = /^(?:0|[1-9]\d*)$/, Mt = Symbol.for("emfts.indexedList"), Vt = {
  get(h, e, t) {
    if (e === Mt)
      return !0;
    if (typeof e == "string" && at.test(e)) {
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
    if (typeof e == "string" && at.test(e)) {
      const r = Number(e), i = h.size();
      if (r < i)
        h.set(r, t);
      else if (r === i)
        h.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${i}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(h, e, t, s);
  },
  has(h, e) {
    return typeof e == "string" && at.test(e) ? Number(e) < h.size() : Reflect.has(h, e);
  }
};
class we {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, Vt);
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
    for (let l = 0; l < i; l++)
      r < this.data.length && n.push(this.removeAt(r));
    for (let l = 0; l < s.length; l++)
      this.addAt(r + l, s[l]);
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
      Array.isArray(s) ? t.push(...s) : s instanceof we ? t.push(...s.data) : t.push(s);
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
    this.dispatchNotification(V.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(V.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(V.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(V.REMOVE, e[0], null, 0) : this.dispatchNotification(V.REMOVE_MANY, e, null, gt);
  }
  didSet(e, t, s) {
    this.dispatchNotification(V.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(V.MOVE, s, t, e);
  }
  dispatchNotification(e, t, s, r) {
    const i = this.getFeature();
    if (!this.owner || !i || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const l = this.owner.eAdapters();
      if (!l || l.length === 0)
        return;
    } else
      return;
    const n = new $e(this.owner, e, i, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(n);
  }
}
class dt extends we {
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
class Ss extends dt {
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
class As extends we {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && be(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function ae(h) {
  return h && typeof h.add == "function" && typeof h.size == "function" && typeof h.get == "function";
}
function ve(h) {
  return h[Mt] ? h : new Proxy(h, Vt);
}
function Be(h, e) {
  return ve(new dt(h, e));
}
function Os(h, e) {
  return ve(new As(h, e));
}
function Is(h, e) {
  return ve(new we(h, e));
}
class Ls extends we {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(V.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(V.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(V.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(V.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(V.REMOVE_MANY, e, null, gt);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(V.SET, s, t, e);
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
      const l = this.resource.eAdapters();
      if (!l || l.length === 0)
        return;
    } else
      return;
    const i = { getName: () => "contents" }, n = new $e(this.resource, e, i, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(n);
  }
}
function Rs(h) {
  return ve(new Ls(h));
}
var _e;
(function(h) {
  h.INSTANCE = bs();
})(_e || (_e = {}));
function Gt(h, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && h.set(s, t), Gt(h, t);
  }
}
function Ds(h) {
  const e = h.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${h.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function bs() {
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
      h.set(e, t), "getEPackage" in t || Gt(h, t);
    },
    registerPackage(e) {
      this.set(Ds(e), e);
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
class U {
  constructor(e, t, s, r, i) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = i;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new U(null, null, "", null, null);
    let t = null, s = null, r = null, i = null, n = null, l = 0;
    e.length;
    const u = e.indexOf("#");
    u >= 0 && (n = e.substring(u + 1), e = e.substring(0, u));
    const c = e.indexOf("?");
    c >= 0 && (i = e.substring(c + 1), e = e.substring(0, c));
    const E = e.indexOf(":");
    if (E > 0) {
      let f = !0;
      for (let N = 0; N < E; N++)
        if (e.charAt(N) === "/") {
          f = !1;
          break;
        }
      f && (t = e.substring(0, E), l = E + 1);
    }
    if (e.startsWith("//", l)) {
      const f = l + 2;
      let N = f;
      for (; N < e.length && e.charAt(N) !== "/"; )
        N++;
      s = e.substring(f, N), l = N;
    }
    return l < e.length ? r = e.substring(l) : s !== null && (r = ""), new U(t, s, r, i, n);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new U("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new U("platform", null, "/resource" + e, null, null);
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
    return new U(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new U(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((i) => i.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new U(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new U(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new U(this._scheme, this._authority, this._path, this._query, null);
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
    return new U(t, s, r, i, this._fragment);
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
      return new U(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new U(null, null, null, null, this._fragment) : new U(null, null, "", this._query, this._fragment);
    const r = t.split("/"), i = s.split("/");
    let n = 0;
    const l = Math.min(r.length, i.length);
    for (let N = 0; N < l - 1 && r[N] === i[N]; N++)
      n++;
    const u = i.length - n - 1, c = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (u >= 3 || c && u > 0))
      return new U(null, null, t, this._query, this._fragment);
    const E = [];
    for (let N = 0; N < u; N++)
      E.push("..");
    for (let N = n; N < r.length; N++)
      E.push(r[N]);
    let f = E.join("/");
    return f === "" && t.endsWith("/") && (f = "./"), new U(null, null, f, this._query, this._fragment);
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
function vs(h) {
  return "unsetTarget" in h && typeof h.unsetTarget == "function";
}
class ge {
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
        if (Array.isArray(i) || ae(i))
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
      const l = i.substring(0, n), u = i.substring(n + 1);
      let c;
      const E = s.getURI();
      E && !l.includes("://") ? c = E.resolve(U.createURI(l)) : c = U.createURI(l);
      const f = r.getResource(c, !0);
      if (f) {
        const x = f.getEObject(u);
        if (x)
          return x;
      }
      const N = r.getPackageRegistry(), O = this.resolveFragmentViaPackageRegistry(N, l, u, r);
      if (O)
        return O;
    } else if (n === 0) {
      const l = i.substring(1), u = s.getEObject(l);
      if (u)
        return u;
    } else {
      const l = s.getEObject(i);
      if (l)
        return l;
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
      const c = this.resolveFragmentInPackage(i, s);
      if (c)
        return c;
    }
    let n = t;
    const l = n.lastIndexOf("/");
    l >= 0 && (n = n.substring(l + 1));
    const u = n.indexOf(".");
    if (u > 0 && (n = n.substring(0, u)), n)
      for (const c of e.keys()) {
        const E = e.getEPackage(c);
        if (E && E.getName() === n) {
          const f = this.resolveFragmentInPackage(E, s);
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
    for (let u = 0; u < r.length - 1; u++) {
      const c = i.getESubpackages();
      let E = null;
      for (let f = 0; f < c.length; f++)
        if (c.get(f).getName() === r[u]) {
          E = c.get(f);
          break;
        }
      if (!E)
        return null;
      i = E;
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
        const s = new $e(this, V.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), vs(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
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
          if (Array.isArray(i) || ae(i))
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
      const i = new $e(this, V.SET, e, r, t);
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
      const r = new $e(this, V.UNSET, e, s, e.getDefaultValue());
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
class Wt extends ge {
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
      if (!e.isMany() && r && be(r) && r.eIsProxy()) {
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
        i.isContainment() ? r = Be(this, i) : r = Os(this, i);
      } else
        r = Is(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class ws extends dt {
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
class Fs {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new ws(e, t, this);
    const r = s.getEStructuralFeature("key"), i = s.getEStructuralFeature("value");
    if (!r || !i)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = i, ve(this);
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
      const l = r.eGet(this.valueFeature);
      return r.eSet(this.valueFeature, t), l;
    }
    const i = this.entryEClass.getEPackage();
    let n;
    i && i.getEFactoryInstance() ? n = i.getEFactoryInstance().create(this.entryEClass) : n = new Wt(this.entryEClass), n.eSet(this.keyFeature, e), n.eSet(this.valueFeature, t), this.delegateList.add(n);
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
function xs(h, e, t) {
  return new Fs(h, e, t);
}
var Qe;
(function(h) {
  h.INSTANCE_FACTORY_REGISTRY = Bs();
})(Qe || (Qe = {}));
function Bs() {
  const h = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const i = s.fileExtension();
      return i && h.has(i) ? h.get(i) : null;
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
class jt {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = Rs(this);
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
      const t = e.split("/"), s = t.length >= 2 && t[0] === "" && t[1] === "", r = t.filter((l) => l.length > 0);
      if (r.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let i = null, n = 0;
      if (s && (i = this.contents.size() > 0 ? this.contents.get(0) : null, !i || (r[0].startsWith("@") ? i = this.eObjectForURIFragmentSegment(i, r[0]) : i = this.findByNameInContents(i, r[0]), n = 1, !i)))
        return null;
      for (let l = n; l < r.length; l++) {
        const u = r[l], c = parseInt(u, 10);
        if (i === null ? isNaN(c) ? (i = this.findByName(this.contents.toArray(), u), !i && this.contents.size() > 0 && (i = this.findByNameInContents(this.contents.get(0), u))) : i = c < this.contents.size() ? this.contents.get(c) : null : isNaN(c) ? i = this.navigateByNameOrFeature(i, u) : i = i.eContents()[c] || null, !i)
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
      const l = e.eGet(n);
      if (l && typeof l == "object" && "eClass" in l)
        return l;
      if (Array.isArray(l) && l.length > 0)
        return l[0];
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
    let n, l = -1;
    if (i >= "0" && i <= "9") {
      const E = s.lastIndexOf(".");
      if (E > 0) {
        const f = parseInt(s.substring(E + 1), 10);
        isNaN(f) ? n = s : (n = s.substring(0, E), l = f);
      } else
        n = s;
    } else
      n = s;
    const u = r.getEStructuralFeature(n);
    if (!u)
      return null;
    const c = e.eGet(u);
    return c == null ? null : l >= 0 ? Array.isArray(c) ? c[l] ?? null : typeof c == "object" && "get" in c && typeof c.get == "function" ? c.get(l) ?? null : null : typeof c == "object" && "eClass" in c ? c : null;
  }
  getURIFragment(e) {
    const t = [];
    let s = e;
    for (; s; ) {
      const r = s.eContainer();
      if (!r) {
        const l = this.contents.indexOf(s);
        l >= 0 && t.unshift(l);
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
function Ps(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
function ks(h) {
  if (Object.prototype.hasOwnProperty.call(h, "__esModule")) return h;
  var e = h.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(h).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(h, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return h[s];
      }
    });
  }), t;
}
var ot = {};
const Us = {}, Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" })), Vs = /* @__PURE__ */ ks(Ms);
var Nt;
function Gs() {
  return Nt || (Nt = 1, (function(h) {
    (function(e) {
      e.parser = function(o, a) {
        return new s(o, a);
      }, e.SAXParser = s, e.SAXStream = f, e.createStream = c, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
        var p = this;
        i(p), p.q = p.c = "", p.bufferCheckPosition = e.MAX_BUFFER_LENGTH, p.encoding = null, p.opt = a || {}, p.opt.lowercase = p.opt.lowercase || p.opt.lowercasetags, p.looseCase = p.opt.lowercase ? "toLowerCase" : "toUpperCase", p.opt.maxEntityCount = p.opt.maxEntityCount || 512, p.opt.maxEntityDepth = p.opt.maxEntityDepth || 4, p.entityCount = p.entityDepth = 0, p.tags = [], p.closed = p.closedRoot = p.sawRoot = !1, p.tag = p.error = null, p.strict = !!o, p.noscript = !!(o || p.opt.noscript), p.state = d.BEGIN, p.strictEntities = p.opt.strictEntities, p.ENTITIES = p.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), p.attribList = [], p.opt.xmlns && (p.ns = Object.create(Y)), p.opt.unquotedAttributeValues === void 0 && (p.opt.unquotedAttributeValues = !o), p.trackPosition = p.opt.position !== !1, p.trackPosition && (p.position = p.line = p.column = 0), P(p, "onready");
      }
      Object.create || (Object.create = function(o) {
        function a() {
        }
        a.prototype = o;
        var p = new a();
        return p;
      }), Object.keys || (Object.keys = function(o) {
        var a = [];
        for (var p in o) o.hasOwnProperty(p) && a.push(p);
        return a;
      });
      function r(o) {
        for (var a = Math.max(e.MAX_BUFFER_LENGTH, 10), p = 0, g = 0, H = t.length; g < H; g++) {
          var Z = o[t[g]].length;
          if (Z > a)
            switch (t[g]) {
              case "textNode":
                Ee(o);
                break;
              case "cdata":
                z(o, "oncdata", o.cdata), o.cdata = "";
                break;
              case "script":
                z(o, "onscript", o.script), o.script = "";
                break;
              default:
                le(o, "Max buffer length exceeded: " + t[g]);
            }
          p = Math.max(p, Z);
        }
        var te = e.MAX_BUFFER_LENGTH - p;
        o.bufferCheckPosition = te + o.position;
      }
      function i(o) {
        for (var a = 0, p = t.length; a < p; a++)
          o[t[a]] = "";
      }
      function n(o) {
        Ee(o), o.cdata !== "" && (z(o, "oncdata", o.cdata), o.cdata = ""), o.script !== "" && (z(o, "onscript", o.script), o.script = "");
      }
      s.prototype = {
        end: function() {
          Re(this);
        },
        write: rs,
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
      var l;
      try {
        l = Vs.Stream;
      } catch {
        l = function() {
        };
      }
      l || (l = function() {
      });
      var u = e.EVENTS.filter(function(o) {
        return o !== "error" && o !== "end";
      });
      function c(o, a) {
        return new f(o, a);
      }
      function E(o, a) {
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
        l.apply(this), this._parser = new s(o, a), this.writable = !0, this.readable = !0;
        var p = this;
        this._parser.onend = function() {
          p.emit("end");
        }, this._parser.onerror = function(g) {
          p.emit("error", g), p._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, u.forEach(function(g) {
          Object.defineProperty(p, "on" + g, {
            get: function() {
              return p._parser["on" + g];
            },
            set: function(H) {
              if (!H)
                return p.removeAllListeners(g), p._parser["on" + g] = H, H;
              p.on(g, H);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      f.prototype = Object.create(l.prototype, {
        constructor: {
          value: f
        }
      }), f.prototype._decodeBuffer = function(o, a) {
        if (this._decoderBuffer && (o = Buffer.concat([this._decoderBuffer, o]), this._decoderBuffer = null), !this._decoder) {
          var p = E(o, a);
          if (!p)
            return this._decoderBuffer = o, "";
          this._parser.encoding = p, this._decoder = new TextDecoder(p);
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
          var p = this._decoder.decode();
          p && (this._parser.write(p), this.emit("data", p));
        }
        return this._parser.end(), !0;
      }, f.prototype.on = function(o, a) {
        var p = this;
        return !p._parser["on" + o] && u.indexOf(o) !== -1 && (p._parser["on" + o] = function() {
          var g = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          g.splice(0, 0, o), p.emit.apply(p, g);
        }), l.prototype.on.call(p, o, a);
      };
      var N = /^\[CDATA\[$/i, O = /^DOCTYPE$/i, x = "http://www.w3.org/XML/1998/namespace", G = "http://www.w3.org/2000/xmlns/", Y = { xml: x, xmlns: G }, R = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, J = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, S = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, C = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function k(o) {
        return o === " " || o === `
` || o === "\r" || o === "	";
      }
      function b(o) {
        return o === '"' || o === "'";
      }
      function X(o) {
        return o === ">" || k(o);
      }
      function F(o, a) {
        return o.test(a);
      }
      function ee(o, a) {
        return !F(o, a);
      }
      var d = 0;
      e.STATE = {
        BEGIN: d++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: d++,
        // leading whitespace
        TEXT: d++,
        // general stuff
        TEXT_ENTITY: d++,
        // &amp and such.
        OPEN_WAKA: d++,
        // <
        SGML_DECL: d++,
        // <!BLARG
        SGML_DECL_QUOTED: d++,
        // <!BLARG foo "bar
        DOCTYPE: d++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: d++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: d++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: d++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: d++,
        // <!-
        COMMENT: d++,
        // <!--
        COMMENT_ENDING: d++,
        // <!-- blah -
        COMMENT_ENDED: d++,
        // <!-- blah --
        CDATA: d++,
        // <![CDATA[ something
        CDATA_ENDING: d++,
        // ]
        CDATA_ENDING_2: d++,
        // ]]
        PROC_INST: d++,
        // <?hi
        PROC_INST_BODY: d++,
        // <?hi there
        PROC_INST_ENDING: d++,
        // <?hi "there" ?
        OPEN_TAG: d++,
        // <strong
        OPEN_TAG_SLASH: d++,
        // <strong /
        ATTRIB: d++,
        // <a
        ATTRIB_NAME: d++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: d++,
        // <a foo _
        ATTRIB_VALUE: d++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: d++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: d++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: d++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: d++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: d++,
        // <foo bar=&quot
        CLOSE_TAG: d++,
        // </a
        CLOSE_TAG_SAW_WHITE: d++,
        // </a   >
        SCRIPT: d++,
        // <script> ...
        SCRIPT_ENDING: d++
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
        var a = e.ENTITIES[o], p = typeof a == "number" ? String.fromCharCode(a) : a;
        e.ENTITIES[o] = p;
      });
      for (var m in e.STATE)
        e.STATE[e.STATE[m]] = m;
      d = e.STATE;
      function P(o, a, p) {
        o[a] && o[a](p);
      }
      function T(o) {
        var a = o && o.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return a ? a[2] : null;
      }
      function D(o) {
        return o ? o.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function Fe(o, a) {
        const p = D(o), g = D(a);
        return !p || !g ? !0 : g === "utf16" ? p === "utf16le" || p === "utf16be" : p === g;
      }
      function xe(o, a) {
        if (!(!o.strict || !o.encoding || !a || a.name !== "xml")) {
          var p = T(a.body);
          p && !Fe(o.encoding, p) && M(
            o,
            "XML declaration encoding " + p + " does not match detected stream encoding " + o.encoding.toUpperCase()
          );
        }
      }
      function z(o, a, p) {
        o.textNode && Ee(o), P(o, a, p);
      }
      function Ee(o) {
        o.textNode = Ne(o.opt, o.textNode), o.textNode && P(o, "ontext", o.textNode), o.textNode = "";
      }
      function Ne(o, a) {
        return o.trim && (a = a.trim()), o.normalize && (a = a.replace(/\s+/g, " ")), a;
      }
      function le(o, a) {
        return Ee(o), o.trackPosition && (a += `
Line: ` + o.line + `
Column: ` + o.column + `
Char: ` + o.c), a = new Error(a), o.error = a, P(o, "onerror", a), o;
      }
      function Re(o) {
        return o.sawRoot && !o.closedRoot && M(o, "Unclosed root tag"), o.state !== d.BEGIN && o.state !== d.BEGIN_WHITESPACE && o.state !== d.TEXT && le(o, "Unexpected end"), Ee(o), o.c = "", o.closed = !0, P(o, "onend"), s.call(o, o.strict, o.opt), o;
      }
      function M(o, a) {
        if (typeof o != "object" || !(o instanceof s))
          throw new Error("bad call to strictFail");
        o.strict && le(o, a);
      }
      function De(o) {
        o.strict || (o.tagName = o.tagName[o.looseCase]());
        var a = o.tags[o.tags.length - 1] || o, p = o.tag = { name: o.tagName, attributes: {} };
        o.opt.xmlns && (p.ns = a.ns), o.attribList.length = 0, z(o, "onopentagstart", p);
      }
      function ye(o, a) {
        var p = o.indexOf(":"), g = p < 0 ? ["", o] : o.split(":"), H = g[0], Z = g[1];
        return a && o === "xmlns" && (H = "xmlns", Z = ""), { prefix: H, local: Z };
      }
      function Se(o) {
        if (o.strict || (o.attribName = o.attribName[o.looseCase]()), o.attribList.indexOf(o.attribName) !== -1 || o.tag.attributes.hasOwnProperty(o.attribName)) {
          o.attribName = o.attribValue = "";
          return;
        }
        if (o.opt.xmlns) {
          var a = ye(o.attribName, !0), p = a.prefix, g = a.local;
          if (p === "xmlns")
            if (g === "xml" && o.attribValue !== x)
              M(
                o,
                "xml: prefix must be bound to " + x + `
Actual: ` + o.attribValue
              );
            else if (g === "xmlns" && o.attribValue !== G)
              M(
                o,
                "xmlns: prefix must be bound to " + G + `
Actual: ` + o.attribValue
              );
            else {
              var H = o.tag, Z = o.tags[o.tags.length - 1] || o;
              H.ns === Z.ns && (H.ns = Object.create(Z.ns)), H.ns[g] = o.attribValue;
            }
          o.attribList.push([o.attribName, o.attribValue]);
        } else
          o.tag.attributes[o.attribName] = o.attribValue, z(o, "onattribute", {
            name: o.attribName,
            value: o.attribValue
          });
        o.attribName = o.attribValue = "";
      }
      function oe(o, a) {
        if (o.opt.xmlns) {
          var p = o.tag, g = ye(o.tagName);
          p.prefix = g.prefix, p.local = g.local, p.uri = p.ns[g.prefix] || "", p.prefix && !p.uri && (M(
            o,
            "Unbound namespace prefix: " + JSON.stringify(o.tagName)
          ), p.uri = g.prefix);
          var H = o.tags[o.tags.length - 1] || o;
          p.ns && H.ns !== p.ns && Object.keys(p.ns).forEach(function(yt) {
            z(o, "onopennamespace", {
              prefix: yt,
              uri: p.ns[yt]
            });
          });
          for (var Z = 0, te = o.attribList.length; Z < te; Z++) {
            var ue = o.attribList[Z], ce = ue[0], Oe = ue[1], re = ye(ce, !0), Ie = re.prefix, is = re.local, Ct = Ie === "" ? "" : p.ns[Ie] || "", rt = {
              name: ce,
              value: Oe,
              prefix: Ie,
              local: is,
              uri: Ct
            };
            Ie && Ie !== "xmlns" && !Ct && (M(
              o,
              "Unbound namespace prefix: " + JSON.stringify(Ie)
            ), rt.uri = Ie), o.tag.attributes[ce] = rt, z(o, "onattribute", rt);
          }
          o.attribList.length = 0;
        }
        o.tag.isSelfClosing = !!a, o.sawRoot = !0, o.tags.push(o.tag), z(o, "onopentag", o.tag), a || (!o.noscript && o.tagName.toLowerCase() === "script" ? o.state = d.SCRIPT : o.state = d.TEXT, o.tag = null, o.tagName = ""), o.attribName = o.attribValue = "", o.attribList.length = 0;
      }
      function Ae(o) {
        if (!o.tagName) {
          M(o, "Weird empty close tag."), o.textNode += "</>", o.state = d.TEXT;
          return;
        }
        if (o.script) {
          if (o.tagName !== "script") {
            o.script += "</" + o.tagName + ">", o.tagName = "", o.state = d.SCRIPT;
            return;
          }
          z(o, "onscript", o.script), o.script = "";
        }
        var a = o.tags.length, p = o.tagName;
        o.strict || (p = p[o.looseCase]());
        for (var g = p; a--; ) {
          var H = o.tags[a];
          if (H.name !== g)
            M(o, "Unexpected close tag");
          else
            break;
        }
        if (a < 0) {
          M(o, "Unmatched closing tag: " + o.tagName), o.textNode += "</" + o.tagName + ">", o.state = d.TEXT;
          return;
        }
        o.tagName = p;
        for (var Z = o.tags.length; Z-- > a; ) {
          var te = o.tag = o.tags.pop();
          o.tagName = o.tag.name, z(o, "onclosetag", o.tagName);
          var ue = {};
          for (var ce in te.ns)
            ue[ce] = te.ns[ce];
          var Oe = o.tags[o.tags.length - 1] || o;
          o.opt.xmlns && te.ns !== Oe.ns && Object.keys(te.ns).forEach(function(re) {
            var Ie = te.ns[re];
            z(o, "onclosenamespace", { prefix: re, uri: Ie });
          });
        }
        a === 0 && (o.closedRoot = !0), o.tagName = o.attribValue = o.attribName = "", o.attribList.length = 0, o.state = d.TEXT;
      }
      function ts(o) {
        var a = o.entity, p = a.toLowerCase(), g, H = "";
        return o.ENTITIES[a] ? o.ENTITIES[a] : o.ENTITIES[p] ? o.ENTITIES[p] : (a = p, a.charAt(0) === "#" && (a.charAt(1) === "x" ? (a = a.slice(2), g = parseInt(a, 16), H = g.toString(16)) : (a = a.slice(1), g = parseInt(a, 10), H = g.toString(10))), a = a.replace(/^0+/, ""), isNaN(g) || H.toLowerCase() !== a || g < 0 || g > 1114111 || !ss(g) ? (M(o, "Invalid character entity"), "&" + o.entity + ";") : String.fromCodePoint(g));
      }
      function ss(o) {
        return o === 9 || o === 10 || o === 13 || o >= 32 && o <= 55295 || o >= 57344 && o <= 65533 || o >= 65536 && o <= 1114111;
      }
      function mt(o, a) {
        a === "<" ? (o.state = d.OPEN_WAKA, o.startTagPosition = o.position) : k(a) || (M(o, "Non-whitespace before first tag."), o.textNode = a, o.state = d.TEXT);
      }
      function st(o, a) {
        var p = "";
        return a < o.length && (p = o.charAt(a)), p;
      }
      function rs(o) {
        var a = this;
        if (this.error)
          throw this.error;
        if (a.closed)
          return le(
            a,
            "Cannot write after close. Assign an onready handler."
          );
        if (o === null)
          return Re(a);
        typeof o == "object" && (o = o.toString());
        for (var p = 0, g = ""; g = st(o, p++), a.c = g, !!g; )
          switch (a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++), a.state) {
            case d.BEGIN:
              if (a.state = d.BEGIN_WHITESPACE, g === "\uFEFF")
                continue;
              mt(a, g);
              continue;
            case d.BEGIN_WHITESPACE:
              mt(a, g);
              continue;
            case d.TEXT:
              if (a.sawRoot && !a.closedRoot) {
                for (var Z = p - 1; g && g !== "<" && g !== "&"; )
                  g = st(o, p++), g && a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++);
                a.textNode += o.substring(Z, p - 1);
              }
              g === "<" && !(a.sawRoot && a.closedRoot && !a.strict) ? (a.state = d.OPEN_WAKA, a.startTagPosition = a.position) : (!k(g) && (!a.sawRoot || a.closedRoot) && M(a, "Text data outside of root node."), g === "&" ? a.state = d.TEXT_ENTITY : a.textNode += g);
              continue;
            case d.SCRIPT:
              g === "<" ? a.state = d.SCRIPT_ENDING : a.script += g;
              continue;
            case d.SCRIPT_ENDING:
              g === "/" ? a.state = d.CLOSE_TAG : (a.script += "<" + g, a.state = d.SCRIPT);
              continue;
            case d.OPEN_WAKA:
              if (g === "!")
                a.state = d.SGML_DECL, a.sgmlDecl = "";
              else if (!k(g)) if (F(R, g))
                a.state = d.OPEN_TAG, a.tagName = g;
              else if (g === "/")
                a.state = d.CLOSE_TAG, a.tagName = "";
              else if (g === "?")
                a.state = d.PROC_INST, a.procInstName = a.procInstBody = "";
              else {
                if (M(a, "Unencoded <"), a.startTagPosition + 1 < a.position) {
                  var H = a.position - a.startTagPosition;
                  g = new Array(H).join(" ") + g;
                }
                a.textNode += "<" + g, a.state = d.TEXT;
              }
              continue;
            case d.SGML_DECL:
              if (a.sgmlDecl + g === "--") {
                a.state = d.COMMENT, a.comment = "", a.sgmlDecl = "";
                continue;
              }
              a.doctype && a.doctype !== !0 && a.sgmlDecl ? (a.state = d.DOCTYPE_DTD, a.doctype += "<!" + a.sgmlDecl + g, a.sgmlDecl = "") : N.test(a.sgmlDecl + g) ? (z(a, "onopencdata"), a.state = d.CDATA, a.sgmlDecl = "", a.cdata = "") : O.test(a.sgmlDecl + g) ? (a.state = d.DOCTYPE, (a.doctype || a.sawRoot) && M(
                a,
                "Inappropriately located doctype declaration"
              ), a.doctype = "", a.sgmlDecl = "") : g === ">" ? (z(a, "onsgmldeclaration", a.sgmlDecl), a.sgmlDecl = "", a.state = d.TEXT) : (b(g) && (a.state = d.SGML_DECL_QUOTED), a.sgmlDecl += g);
              continue;
            case d.SGML_DECL_QUOTED:
              g === a.q && (a.state = d.SGML_DECL, a.q = ""), a.sgmlDecl += g;
              continue;
            case d.DOCTYPE:
              g === ">" ? (a.state = d.TEXT, z(a, "ondoctype", a.doctype), a.doctype = !0) : (a.doctype += g, g === "[" ? a.state = d.DOCTYPE_DTD : b(g) && (a.state = d.DOCTYPE_QUOTED, a.q = g));
              continue;
            case d.DOCTYPE_QUOTED:
              a.doctype += g, g === a.q && (a.q = "", a.state = d.DOCTYPE);
              continue;
            case d.DOCTYPE_DTD:
              g === "]" ? (a.doctype += g, a.state = d.DOCTYPE) : g === "<" ? (a.state = d.OPEN_WAKA, a.startTagPosition = a.position) : b(g) ? (a.doctype += g, a.state = d.DOCTYPE_DTD_QUOTED, a.q = g) : a.doctype += g;
              continue;
            case d.DOCTYPE_DTD_QUOTED:
              a.doctype += g, g === a.q && (a.state = d.DOCTYPE_DTD, a.q = "");
              continue;
            case d.COMMENT:
              g === "-" ? a.state = d.COMMENT_ENDING : a.comment += g;
              continue;
            case d.COMMENT_ENDING:
              g === "-" ? (a.state = d.COMMENT_ENDED, a.comment = Ne(a.opt, a.comment), a.comment && z(a, "oncomment", a.comment), a.comment = "") : (a.comment += "-" + g, a.state = d.COMMENT);
              continue;
            case d.COMMENT_ENDED:
              g !== ">" ? (M(a, "Malformed comment"), a.comment += "--" + g, a.state = d.COMMENT) : a.doctype && a.doctype !== !0 ? a.state = d.DOCTYPE_DTD : a.state = d.TEXT;
              continue;
            case d.CDATA:
              for (var Z = p - 1; g && g !== "]"; )
                g = st(o, p++), g && a.trackPosition && (a.position++, g === `
` ? (a.line++, a.column = 0) : a.column++);
              a.cdata += o.substring(Z, p - 1), g === "]" && (a.state = d.CDATA_ENDING);
              continue;
            case d.CDATA_ENDING:
              g === "]" ? a.state = d.CDATA_ENDING_2 : (a.cdata += "]" + g, a.state = d.CDATA);
              continue;
            case d.CDATA_ENDING_2:
              g === ">" ? (a.cdata && z(a, "oncdata", a.cdata), z(a, "onclosecdata"), a.cdata = "", a.state = d.TEXT) : g === "]" ? a.cdata += "]" : (a.cdata += "]]" + g, a.state = d.CDATA);
              continue;
            case d.PROC_INST:
              g === "?" ? a.state = d.PROC_INST_ENDING : k(g) ? a.state = d.PROC_INST_BODY : a.procInstName += g;
              continue;
            case d.PROC_INST_BODY:
              if (!a.procInstBody && k(g))
                continue;
              g === "?" ? a.state = d.PROC_INST_ENDING : a.procInstBody += g;
              continue;
            case d.PROC_INST_ENDING:
              if (g === ">") {
                const Oe = {
                  name: a.procInstName,
                  body: a.procInstBody
                };
                xe(a, Oe), z(a, "onprocessinginstruction", Oe), a.procInstName = a.procInstBody = "", a.state = d.TEXT;
              } else
                a.procInstBody += "?" + g, a.state = d.PROC_INST_BODY;
              continue;
            case d.OPEN_TAG:
              F(J, g) ? a.tagName += g : (De(a), g === ">" ? oe(a) : g === "/" ? a.state = d.OPEN_TAG_SLASH : (k(g) || M(a, "Invalid character in tag name"), a.state = d.ATTRIB));
              continue;
            case d.OPEN_TAG_SLASH:
              g === ">" ? (oe(a, !0), Ae(a)) : (M(
                a,
                "Forward-slash in opening tag not followed by >"
              ), a.state = d.ATTRIB);
              continue;
            case d.ATTRIB:
              if (k(g))
                continue;
              g === ">" ? oe(a) : g === "/" ? a.state = d.OPEN_TAG_SLASH : F(R, g) ? (a.attribName = g, a.attribValue = "", a.state = d.ATTRIB_NAME) : M(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME:
              g === "=" ? a.state = d.ATTRIB_VALUE : g === ">" ? (M(a, "Attribute without value"), a.attribValue = a.attribName, Se(a), oe(a)) : k(g) ? a.state = d.ATTRIB_NAME_SAW_WHITE : F(J, g) ? a.attribName += g : M(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME_SAW_WHITE:
              if (g === "=")
                a.state = d.ATTRIB_VALUE;
              else {
                if (k(g))
                  continue;
                M(a, "Attribute without value"), a.tag.attributes[a.attribName] = "", a.attribValue = "", z(a, "onattribute", {
                  name: a.attribName,
                  value: ""
                }), a.attribName = "", g === ">" ? oe(a) : F(R, g) ? (a.attribName = g, a.state = d.ATTRIB_NAME) : (M(a, "Invalid attribute name"), a.state = d.ATTRIB);
              }
              continue;
            case d.ATTRIB_VALUE:
              if (k(g))
                continue;
              b(g) ? (a.q = g, a.state = d.ATTRIB_VALUE_QUOTED) : (a.opt.unquotedAttributeValues || le(a, "Unquoted attribute value"), a.state = d.ATTRIB_VALUE_UNQUOTED, a.attribValue = g);
              continue;
            case d.ATTRIB_VALUE_QUOTED:
              if (g !== a.q) {
                g === "&" ? a.state = d.ATTRIB_VALUE_ENTITY_Q : a.attribValue += g;
                continue;
              }
              Se(a), a.q = "", a.state = d.ATTRIB_VALUE_CLOSED;
              continue;
            case d.ATTRIB_VALUE_CLOSED:
              k(g) ? a.state = d.ATTRIB : g === ">" ? oe(a) : g === "/" ? a.state = d.OPEN_TAG_SLASH : F(R, g) ? (M(a, "No whitespace between attributes"), a.attribName = g, a.attribValue = "", a.state = d.ATTRIB_NAME) : M(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_VALUE_UNQUOTED:
              if (!X(g)) {
                g === "&" ? a.state = d.ATTRIB_VALUE_ENTITY_U : a.attribValue += g;
                continue;
              }
              Se(a), g === ">" ? oe(a) : a.state = d.ATTRIB;
              continue;
            case d.CLOSE_TAG:
              if (a.tagName)
                g === ">" ? Ae(a) : F(J, g) ? a.tagName += g : a.script ? (a.script += "</" + a.tagName + g, a.tagName = "", a.state = d.SCRIPT) : (k(g) || M(a, "Invalid tagname in closing tag"), a.state = d.CLOSE_TAG_SAW_WHITE);
              else {
                if (k(g))
                  continue;
                ee(R, g) ? a.script ? (a.script += "</" + g, a.state = d.SCRIPT) : M(a, "Invalid tagname in closing tag.") : a.tagName = g;
              }
              continue;
            case d.CLOSE_TAG_SAW_WHITE:
              if (k(g))
                continue;
              g === ">" ? Ae(a) : M(a, "Invalid characters in closing tag");
              continue;
            case d.TEXT_ENTITY:
            case d.ATTRIB_VALUE_ENTITY_Q:
            case d.ATTRIB_VALUE_ENTITY_U:
              var te, ue;
              switch (a.state) {
                case d.TEXT_ENTITY:
                  te = d.TEXT, ue = "textNode";
                  break;
                case d.ATTRIB_VALUE_ENTITY_Q:
                  te = d.ATTRIB_VALUE_QUOTED, ue = "attribValue";
                  break;
                case d.ATTRIB_VALUE_ENTITY_U:
                  te = d.ATTRIB_VALUE_UNQUOTED, ue = "attribValue";
                  break;
              }
              if (g === ";") {
                var ce = ts(a);
                a.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(ce) ? ((a.entityCount += 1) > a.opt.maxEntityCount && le(
                  a,
                  "Parsed entity count exceeds max entity count"
                ), (a.entityDepth += 1) > a.opt.maxEntityDepth && le(
                  a,
                  "Parsed entity depth exceeds max entity depth"
                ), a.entity = "", a.state = te, a.write(ce), a.entityDepth -= 1) : (a[ue] += ce, a.entity = "", a.state = te);
              } else F(a.entity.length ? C : S, g) ? a.entity += g : (M(a, "Invalid character in entity name"), a[ue] += "&" + a.entity + g, a.entity = "", a.state = te);
              continue;
            default:
              throw new Error(a, "Unknown state: " + a.state);
          }
        return a.position >= a.bufferCheckPosition && r(a), a;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var o = String.fromCharCode, a = Math.floor, p = function() {
          var g = 16384, H = [], Z, te, ue = -1, ce = arguments.length;
          if (!ce)
            return "";
          for (var Oe = ""; ++ue < ce; ) {
            var re = Number(arguments[ue]);
            if (!isFinite(re) || // `NaN`, `+Infinity`, or `-Infinity`
            re < 0 || // not a valid Unicode code point
            re > 1114111 || // not a valid Unicode code point
            a(re) !== re)
              throw RangeError("Invalid code point: " + re);
            re <= 65535 ? H.push(re) : (re -= 65536, Z = (re >> 10) + 55296, te = re % 1024 + 56320, H.push(Z, te)), (ue + 1 === ce || H.length > g) && (Oe += o.apply(null, H), H.length = 0);
          }
          return Oe;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: p,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = p;
      })();
    })(h);
  })(ot)), ot;
}
var Ws = Gs();
const js = /* @__PURE__ */ Ps(Ws), St = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", Hs = 0, Xs = 1, ft = 2, $s = 3, Ys = 4, zs = 0, Ks = 1, Ye = 2, At = 3, qs = 4, Qs = 5, Js = 6;
class Ot {
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
    t = Hs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = ft;
          break;
        case "mixed":
          t = $s;
          break;
        case "empty":
          t = Xs;
          break;
        case "elementOnly":
          t = Ys;
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
    t = zs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Ks;
          break;
        case "element":
          t = Ye;
          break;
        case "attribute":
          t = At;
          break;
        case "elementWildcard":
          t = qs;
          break;
        case "attributeWildcard":
          t = Qs;
          break;
        case "group":
          t = Js;
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
      if (this.getFeatureKind(r) !== Ye)
        continue;
      const n = this.getName(r) ?? r.getName();
      if (n !== s)
        continue;
      const l = this.getNamespace(r);
      if (t && l && l === t || !t && !l || !l && n === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== At)
        continue;
      const n = this.getName(r) ?? r.getName();
      if (n !== s)
        continue;
      const l = this.getNamespace(r);
      if (t && l && l === t || !t && !l || !l && n === s)
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
    const s = e.getEAnnotation(St);
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
    const t = e.getEAnnotation(St);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Zs = "FEATURE_NAME_MAP", er = "EXTENDED_META_DATA", ut = 1, ct = 2, It = 3, tr = 4, Lt = 5;
class sr {
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
class et {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = _e.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new sr(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = _e.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Zs);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, i] of t)
        this.reverseFeatureNameMap.set(i, r);
    }
    const s = e.get(er);
    s instanceof Ot ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new Ot());
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? Lt;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, ct) : this.featuresToKinds.set(e, ut);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const i = e.getEOpposite();
        !i || typeof i.isTransient != "function" || i.isTransient() || !i.isMany() ? this.featuresToKinds.set(e, It) : this.featuresToKinds.set(e, tr);
      } else
        this.featuresToKinds.set(e, It);
    else
      this.featuresToKinds.set(e, Lt);
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
    const s = [], r = e.getObject(), i = e.getFeature(), n = e.getValues(), l = e.getPositions();
    for (let u = 0; u < n.length; u++) {
      const c = n[u], E = l[u];
      try {
        this.setValue(r, i, c, E);
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
class Ht {
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
          const l = U.createURI(i.substring(0, n)), u = i.substring(n + 1), c = s.getResource(l, !0);
          if (c) {
            const E = c.getEObject(u);
            if (E)
              return E;
          }
        } else if (n === 0) {
          const l = i.substring(1), u = t.getEObject(l);
          if (u)
            return u;
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
function ze(h, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return h.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let i = h;
  for (let n = 0; n < s.length - 1; n++) {
    const l = s[n], u = i.getESubpackages();
    i = null;
    for (let c = 0; c < u.length; c++) {
      const E = u.get(c);
      if (E.getName() === l) {
        i = E;
        break;
      }
    }
    if (!i)
      return null;
  }
  return i.getEClassifier(r);
}
const He = "error", Ue = "object", Rt = "reference", lt = "xmiWrapper", Dt = "deferredType";
class rr {
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
const Ve = "http://www.w3.org/2001/XMLSchema-instance", ht = "http://www.omg.org/XMI", bt = "xmlns", ir = "type", nr = "nil", ar = "schemaLocation", vt = "href", or = "id";
class Xt {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || _e.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      this.objects.push(null), this.types.push(lt);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === lt ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === Ue) {
      const i = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && i) {
        const n = this.text.trim();
        if (n.length > 0) {
          const l = this.helper.getExtendedMetaData();
          if (l) {
            const u = i.eClass();
            if (l.getContentKind(u) === ft) {
              const c = l.getSimpleContentFeature(u);
              c && this.setFeatureValue(i, c, n);
            }
          }
          this.handleProxy(i, n);
        }
      }
      this.text = null;
    } else if (r === He)
      this.objects.pop(), this.text = null;
    else if (r === Rt)
      this.objects.pop(), this.text = null;
    else if (r === Dt)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === lt)
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
        if (t.startsWith(bt)) {
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
    const e = this.attribs.getValueByName(Ve, ar);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], i = t[s + 1];
      this.urisToLocations.set(r, U.createURI(i));
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
    return this.attribs ? this.attribs.getValueByName(Ve, ir) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, i = t;
    const n = t.indexOf(":");
    n !== -1 && (r = t.substring(0, n), i = t.substring(n + 1));
    const l = this.getFactoryForPrefix(r);
    if (!l)
      return this.error(`Factory not found for type '${t}'`), null;
    const u = this.helper.getType(l, i);
    return u ? this.helper.createObject(l, u) : (this.error(`Type '${i}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? Ue : He);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), i = this.attribs.getURI(t), n = this.attribs.getLocalName(t);
        if (!s.startsWith(bt) && i !== Ve) {
          if (i === ht) {
            n === or && this.handleId(e, r);
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
      this.objects.push(null), this.types.push(He), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), i = e && this.helper.getURI(e) || null, n = this.helper.getFeatureWithElement(r, i, t, !0);
    if (n) {
      const l = this.helper.getFeatureKind(n);
      l === ut || l === ct ? (this.objects.push(null), this.types.push(n), this.isNull() || (this.text = "")) : this.createObject(s, n);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(Ve, nr) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(vt) || this.attribs?.getValueByName("", vt);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(Rt);
      return;
    }
    const r = this.getXSIType();
    let i = null;
    if (r)
      i = this.createObjectByType("", r, !1);
    else {
      let n = t.getEType();
      if (n && !("getESuperTypes" in n) && typeof n.eIsProxy == "function" && n.eIsProxy()) {
        const l = n.eProxyURI();
        if (l) {
          const u = l.toString(), c = u.indexOf("#");
          if (c > 0) {
            const E = u.substring(0, c), f = u.substring(c + 1), N = this.packageRegistry.getEPackage(E);
            if (N) {
              const O = ze(N, f);
              O && (n = O, typeof t.setEType == "function" && t.setEType(O));
            }
          }
        }
      }
      if (n && "getESuperTypes" in n) {
        const l = n;
        if (l.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(Dt);
          return;
        } else {
          const u = l.getEPackage()?.getEFactoryInstance();
          u && (i = u.create(l));
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
      const n = s.eClass(), l = i.getElementFeature(n, r, t);
      if (l) {
        const u = this.helper.getFeatureKind(l);
        u === ut || u === ct ? (this.objects.push(null), this.types.push(l), this.isNull() || (this.text = "")) : this.createObject(s, l);
        return;
      }
    }
    if (r) {
      const n = this.packageRegistry.getEPackage(r);
      if (n) {
        const l = n.getEClassifier(t);
        if (l && "getESuperTypes" in l) {
          const u = l, c = s.eClass();
          if (u === c) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(Ue);
            return;
          }
          if (c.isSuperTypeOf(u) && !u.isAbstract()) {
            const E = u.getEPackage()?.getEFactoryInstance();
            if (E) {
              const f = E.create(u);
              for (const O of c.getEAllStructuralFeatures()) {
                if (O.isTransient() || O.isDerived())
                  continue;
                const x = s.eGet(O);
                if (x != null)
                  try {
                    f.eSet(O, x);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, f);
              const N = this.objects.length - 1;
              this.objects[N] = f, this.handleObjectAttribs(f), this.objects.push(f), this.types.push(Ue);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(He), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
      const l = n;
      if (l.isContainment()) {
        if (l.isMany()) {
          const u = r.eGet(l);
          if (u) {
            for (let c = u.length - 1; c >= 0; c--)
              if (u[c] === e) {
                u[c] = t;
                return;
              }
          }
        } else if (r.eGet(l) === e) {
          r.eSet(l, t);
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
      const l = this.packageRegistry.getEPackage(i);
      if (l) {
        const u = l.getEClassifier(t);
        if (u && "getESuperTypes" in u) {
          const c = u;
          if (!c.isAbstract()) {
            const E = c.getEPackage()?.getEFactoryInstance();
            E && (n = E.create(c));
          }
        }
      }
    }
    n ? (this.helper.setValue(s, r, n, -1), this.handleObjectAttribs(n), this.objects[this.objects.length - 1] = n, this.types[this.types.length - 1] = Ue, this.objects.push(n), this.types.push(Ue)) : (this.objects.push(null), this.types.push(He), this.error(`Cannot resolve type '${t}' for deferred containment`));
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
        for (const l of n)
          l && this.setValueFromId(e, t, l, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const l = t.getEType();
      let u = null;
      if (l && typeof l.getEPackage == "function")
        u = l.getEPackage()?.getEFactoryInstance() ?? null;
      else if (l && typeof l.eGet == "function" && typeof l.eClass == "function") {
        const c = l.eClass();
        if (c) {
          const E = c.getEStructuralFeature?.("ePackage");
          if (E) {
            const f = l.eGet(E);
            f?.getEFactoryInstance && (u = f.getEFactoryInstance());
          }
        }
      }
      try {
        if (u && l) {
          const c = u.createFromString(l, s);
          this.helper.setValue(e, t, c, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (c) {
        const E = c instanceof Error ? c.message : String(c);
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
    const r = this.resource.getURI(), i = t.indexOf(" ");
    i > 0 && (t = t.substring(i + 1));
    const n = t.indexOf("#");
    if (n > 0) {
      const E = t.substring(0, n), f = t.substring(n + 1);
      if (r && !E.includes("://")) {
        const N = r.toString();
        if (E === N || N.endsWith(E) || N.endsWith("/" + E))
          s = U.createURI(N + "#" + f);
        else {
          const O = U.createURI(E).resolve(r);
          s = U.createURI(O.toString() + "#" + f);
        }
      } else
        s = U.createURI(t);
    } else n === 0 ? r ? s = U.createURI(r.toString() + t) : s = U.createURI(t) : (t.startsWith("/"), r ? s = U.createURI(r.toString() + "#" + t) : s = U.createURI("#" + t));
    const l = e.getEType(), u = l && "getESuperTypes" in l ? l : null, c = new Ht(s, u || void 0);
    return c.eSetResource(this.resource), c;
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
      const r = e.substring(0, s), i = e.substring(s + 1), l = this.resource.getURI()?.toString();
      if (l && (l === r || l.endsWith(r) || l.endsWith("/" + r) || r.endsWith(l)))
        return this.resource.getEObject(i);
      const u = this.packageRegistry.getEPackage(r);
      if (u)
        return this.resolveFragmentInPackage(u, i);
      const c = this.resource.getContents();
      for (let f = 0; f < c.length; f++) {
        const N = c.get(f);
        if (N && typeof N.getNsURI == "function") {
          const O = N;
          if (O.getNsURI() === r)
            return this.resolveFragmentInPackage(O, i);
        }
      }
      const E = this.resource.getResourceSet();
      if (E) {
        const f = U.createURI(r), N = E.getResource(f, !0);
        if (N)
          return N.getEObject(i);
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
    const r = s.split("/"), i = ze(e, s);
    if (i)
      return i;
    if (r.length >= 2) {
      let n = e;
      for (let c = 0; c < r.length - 2; c++) {
        const E = n.getESubpackages();
        let f = null;
        for (let N = 0; N < E.length; N++)
          if (E.get(N).getName() === r[c]) {
            f = E.get(N);
            break;
          }
        if (!f)
          return null;
        n = f;
      }
      const l = r[r.length - 2], u = n.getEClassifier(l);
      if (u && "getEStructuralFeature" in u) {
        const c = u.getEStructuralFeature(r[r.length - 1]);
        if (c)
          return c;
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
class $t {
  constructor(e) {
    this.helper = e || new et();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), i = this.makeDefaultHandler(e, r), n = js.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), l = new rr();
    n.onprocessinginstruction = (c) => {
      c.name;
    }, n.onopentag = (c) => {
      l.clear();
      const E = c;
      for (const [f, N] of Object.entries(E.attributes)) {
        const O = N, x = O.prefix ? `${O.prefix}:${O.local}` : O.local;
        if (O.prefix === "xmlns" || O.name === "xmlns") {
          const G = O.prefix === "xmlns" ? O.local : "";
          i.startPrefixMapping(G, O.value);
        }
        l.add(x, O.local, O.uri, O.value);
      }
      i.lineNumber = n.line, i.columnNumber = n.column, i.startElement(E.uri, E.local, E.name, l);
    }, n.onclosetag = (c) => {
      const E = c.indexOf(":"), f = E >= 0 ? c.substring(E + 1) : c;
      i.endElement("", f, c);
    }, n.ontext = (c) => {
      c.trim() && i.characters(c);
    }, n.oncdata = (c) => {
      i.characters(c);
    }, n.onerror = (c) => {
      console.error("XML Parse Error:", c.message), i.error(c.message);
    }, n.write(t).close(), i.endDocument();
    const u = i.getErrors();
    if (u.length > 0 && e.getErrors) {
      const c = e.getErrors();
      for (const E of u) {
        const f = E.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        f ? c.push({
          message: f[3] || E.message,
          line: parseInt(f[1], 10),
          column: parseInt(f[2], 10)
        }) : c.push({ message: E.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new Xt(e, this.helper, t);
  }
}
class lr extends $t {
  constructor(e) {
    super(e || new ur());
  }
  makeDefaultHandler(e, t) {
    return new cr(e, this.helper, t);
  }
}
class ur extends et {
}
class cr extends Xt {
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
function Je(h) {
  return h != null && typeof h.getELiterals == "function" && typeof h.getEEnumLiteral == "function";
}
class Yt {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new et(), this.resource = null;
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
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${ht}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Ve}"`);
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
    const s = e.eClass(), r = s.getEPackage(), i = r ? this.getPrefix(r) : "", n = s.getName() || "Object", l = i ? `${i}:${n}` : n;
    this.writeIndent(), this.output.push(`<${l}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const u = this.helper.getExtendedMetaData(), c = this.getSimpleContentText(e, u), E = this.hasElementContent(e);
    c !== null ? (this.output.push(`>${this.escapeXml(c)}`), E && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${l}>
`)) : E ? (this.output.push(`>
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent(), this.output.push(`</${l}>
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
    this.output.push(` xmlns:xmi="${ht}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Ve}"`);
    const s = /* @__PURE__ */ new Set();
    for (const i of t) {
      const n = i.getNsURI(), l = this.getPrefix(i);
      n && l && !s.has(l) && (this.output.push(` xmlns:${l}="${n}"`), this.declaredNamespaces.set(n, l), s.add(l));
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
      for (const l of n.getEAllStructuralFeatures()) {
        const u = t.getNamespace(l);
        if (u && !this.declaredNamespaces.has(u) && u !== "http://www.w3.org/XML/1998/namespace") {
          const c = this.generatePrefix(u, s);
          c && (this.output.push(` xmlns:${c}="${u}"`), this.declaredNamespaces.set(u, c), s.add(c));
        }
      }
      for (const l of i.eContents())
        r(l);
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
      for (const l of r.eContents())
        s(l);
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
          if (s && s.getFeatureKind(r) === Ye)
            continue;
          const i = r;
          let n = e.eGet(i);
          if (n != null && (n = this.resolveValue(n, e), n != null)) {
            let l = null;
            try {
              l = i.getDefaultValue();
            } catch {
            }
            if (n !== l) {
              const u = this.convertToString(i, n), c = this.getSerializedAttributeName(i, s);
              this.output.push(` ${c}="${this.escapeXml(u)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const i = r;
          if (!i.isContainment()) {
            let n = e.eGet(i);
            if (n != null) {
              const l = this.helper.getSerializedFeatureName(i);
              if (r.isMany()) {
                if (Array.isArray(n) || ae(n)) {
                  const u = [];
                  for (const c of n) {
                    const E = this.resolveValue(c, e);
                    if (E == null || typeof E == "string")
                      continue;
                    const f = E.eResource?.();
                    if (f && f === this.resource) {
                      const N = this.getHref(E);
                      N && u.push(N);
                    }
                  }
                  u.length > 0 && this.output.push(` ${l}="${this.escapeXml(u.join(" "))}"`);
                }
              } else if (n = this.resolveValue(n, e), n != null)
                if (typeof n == "string")
                  this.output.push(` ${l}="${this.escapeXml(n)}"`);
                else if (typeof n == "boolean")
                  this.output.push(` ${l}="${n ? "true" : "false"}"`);
                else if (typeof n == "number")
                  this.output.push(` ${l}="${String(n)}"`);
                else {
                  const u = this.getTypePrefixedHref(i, n);
                  u && this.output.push(` ${l}="${this.escapeXml(u)}"`);
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
    if (be(e) && e.eIsProxy()) {
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
        const i = r.getEPackage?.(), n = r.getName?.(), l = e.getName?.();
        if (i && n && l) {
          const u = i.getNsURI?.();
          if (u)
            return `${u}#//${n}/${l}`;
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
      const n = e.getName?.(), l = i.getName?.();
      if (!n || !l)
        return null;
      t.push(l, n), s = i.getEPackage?.() ?? null;
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
      const l = n.getEPackage();
      if (l) {
        const u = this.getPrefix(l), c = n.getName();
        if (u && c)
          return `${u}:${c} ${s}`;
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
        if (i.isTransient() || i.isDerived() || !this.isAttribute(i) || r.getFeatureKind(i) !== Ye)
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
        const l = e.eGet(n);
        if (l == null)
          continue;
        if (n.isContainment()) {
          if ((Array.isArray(l) || ae(l)) && l.length > 0 || !Array.isArray(l) && !ae(l))
            return !0;
        } else if (i.isMany() && (Array.isArray(l) || ae(l)) && l.length > 0)
          for (const u of l) {
            const c = u.eResource?.();
            if (!c || c !== this.resource)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== Ye)
          continue;
        const n = e.eGet(r);
        if (n == null)
          continue;
        const l = this.getSerializedElementName(r, s), u = r;
        if (r.isMany() && (Array.isArray(n) || ae(n))) {
          for (const c of n)
            if (c != null) {
              this.writeIndent();
              const E = this.convertSingleValueToString(u, c);
              this.output.push(`<${l}>${this.escapeXml(E)}</${l}>
`);
            }
        } else {
          this.writeIndent();
          const c = this.convertToString(u, n);
          this.output.push(`<${l}>${this.escapeXml(c)}</${l}>
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
          if (Array.isArray(n) || ae(n))
            for (const l of n)
              this.writeElement(i, l);
          else
            this.writeElement(i, n);
        else if (r.isMany() && (Array.isArray(n) || ae(n)) && n.length > 0)
          for (const l of n) {
            const u = this.resolveValue(l, e);
            if (u == null)
              continue;
            const c = typeof u != "string" ? u.eResource?.() : null;
            if (c && c === this.resource)
              continue;
            const E = typeof u == "string" ? u : this.getHref(u);
            E && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(i)} href="${this.escapeXml(E)}"/>
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
      const c = n.getEPackage(), E = c ? this.getPrefix(c) : "", f = E ? `${E}:${n.getName()}` : n.getName();
      this.output.push(` xsi:type="${f}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const l = this.getSimpleContentText(t, s), u = this.hasElementContent(t);
    l !== null ? (this.output.push(`>${this.escapeXml(l)}`), u && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : u ? (this.output.push(`>
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
    if (be(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(be(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const i = s.toString(), n = i.indexOf("#");
          if (n >= 0) {
            const l = i.substring(n + 1);
            let u = this.resource;
            if (n > 0) {
              const c = U.createURI(i.substring(0, n));
              u = r.getResource(c, !0) || this.resource;
            }
            if (u) {
              const c = u.getEObject(l);
              if (c)
                return c;
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
    if (Array.isArray(t) || ae(t)) {
      const r = [];
      for (const i of t)
        i != null && r.push(this.convertSingleValueToString(e, i));
      return r.join(" ");
    }
    if (Je(e.getEType()))
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
    if (!Je(e.getEType())) {
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
    if (t.getContentKind(s) !== ft)
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
class hr extends Yt {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class zt extends jt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new et(this);
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
        const i = await s.createInputStream(r), n = await dr(i);
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
    return new $t(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new Yt(this.xmlHelper);
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
class gr extends zt {
  createXMLLoad() {
    return new lr(this.xmlHelper);
  }
  createXMLSave() {
    return new hr(this.xmlHelper);
  }
}
async function dr(h) {
  const e = h.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: i } = await e.read();
    if (r)
      break;
    s += t.decode(i, { stream: !0 });
  }
  return s += t.decode(), s;
}
class fr {
  createResource(e) {
    return new zt(e);
  }
}
class Kt {
  createResource(e) {
    return new gr(e);
  }
}
const We = Qe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
We.has("xml") || We.set("xml", new fr());
We.has("xmi") || We.set("xmi", new Kt());
We.has("ecore") || We.set("ecore", new Kt());
class pr {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || _e.INSTANCE, this.forwardReferences = [], this.errors = [];
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
    for (const [l, u] of Object.entries(e)) {
      if (l === "eClass" || u == null)
        continue;
      const c = s.getEStructuralFeature(l);
      if (!c) {
        this.error(`Unknown feature '${l}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(c))
        this.loadAttribute(n, c, u);
      else {
        const E = c;
        E.isContainment() ? this.loadContainment(n, E, u) : this.loadCrossReference(n, E, u);
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
      if (i && (Array.isArray(i) || ae(i)))
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
      for (const l of i)
        if (l && typeof l == "object") {
          const u = this.loadObject(l, r);
          u && n && (Array.isArray(n) || ae(n)) && n.push(u);
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
      r && (Array.isArray(r) || ae(r)) && r.push(s);
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
      const l = this.resource.getResourceSet();
      if (l) {
        const u = U.createURI(s), c = l.getResource(u, !0);
        if (c)
          return c.getEObject(r);
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
    const r = s.split("/"), i = ze(e, s);
    if (i)
      return i;
    if (r.length >= 2) {
      let n = e;
      for (let c = 0; c < r.length - 2; c++) {
        const E = n.getESubpackages();
        let f = null;
        for (let N = 0; N < E.length; N++)
          if (E.get(N).getName() === r[c]) {
            f = E.get(N);
            break;
          }
        if (!f)
          return null;
        n = f;
      }
      const l = r[r.length - 2], u = n.getEClassifier(l);
      if (u && "getEStructuralFeature" in u) {
        const c = u.getEStructuralFeature(r[r.length - 1]);
        if (c)
          return c;
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
      s = U.createURI(t);
    else if (r === 0) {
      const u = this.resource.getURI();
      u ? s = U.createURI(u.toString() + t) : s = U.createURI(t);
    } else {
      const u = this.resource.getURI();
      u ? s = U.createURI(u.toString() + "#" + t) : s = U.createURI("#" + t);
    }
    const i = e.getEType(), n = i && "getESuperTypes" in i ? i : null, l = new Ht(s, n || void 0);
    return l.eSetResource(this.resource), l;
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
const wt = "SERIALIZE_TYPE", Ft = "INDENT", Er = "always", mr = "polymorphic";
class Cr {
  constructor() {
    this.serializeType = mr, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(wt) && (this.serializeType = t.get(wt)), t.has(Ft) && (this.indent = t.get(Ft)));
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
      const l = e.eGet(n);
      if (l != null)
        if (this.isAttribute(n))
          this.saveAttribute(r, e, n, l);
        else {
          const u = n;
          u.isContainment() ? this.saveContainment(r, e, u, l) : this.saveCrossReference(r, e, u, l);
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
      const n = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      e[i] = n.map((l) => this.convertAttributeValue(s, l));
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
      const n = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      e[i] = n.map((l) => this.saveContainedChild(l, s));
    } else
      e[i] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (be(e) && e.eIsProxy()) {
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
      const n = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (n.length === 0)
        return;
      const l = [];
      for (const u of n) {
        const c = this.getHref(u);
        c && l.push({ $ref: c });
      }
      l.length > 0 && (e[i] = l);
    } else {
      const n = this.getHref(r);
      n && (e[i] = { $ref: n });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === Er || s)
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
    if (be(e) && e.eIsProxy())
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
          const l = r.getNsURI?.();
          if (l)
            return `${l}#//${i}/${n}`;
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
class yr extends jt {
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
      for (const l of i)
        n.push({ message: l.message });
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
    return new pr();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new Cr();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class _r {
  createResource(e) {
    return new yr(e);
  }
}
const xt = Qe.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
xt.has("json") || xt.set("json", new _r());
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
const Q = new Tr();
class j extends ge {
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
      const e = this, t = new Ss(this, () => {
        if (Q.isRegistered())
          try {
            const s = Q.getEClassClass();
            if (s !== e && s instanceof j && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = ve(t);
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
        if (r instanceof j) {
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
    return Q.getEClassClass();
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
        const N = parseInt(f, 10);
        return Math.abs(N) > Number.MAX_SAFE_INTEGER ? BigInt(f) : N;
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
    const l = {
      fromString: (f) => new Date(f),
      toString: (f) => f?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", l), this.registerByName("EDate", l);
    const u = {
      fromString: (f) => f,
      // Keep as string to preserve precision
      toString: (f) => f ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", u), this.registerByClassName("java.math.BigInteger", u), this.registerByName("EBigDecimal", u), this.registerByName("EBigInteger", u);
    const c = {
      fromString: (f) => {
        if (typeof atob == "function") {
          const N = atob(f), O = new Uint8Array(N.length);
          for (let x = 0; x < N.length; x++)
            O[x] = N.charCodeAt(x);
          return O;
        }
        return new Uint8Array(Buffer.from(f, "base64"));
      },
      toString: (f) => typeof btoa == "function" ? btoa(String.fromCharCode(...f)) : Buffer.from(f).toString("base64")
    };
    this.registerByClassName("byte[]", c), this.registerByName("EByteArray", c);
    const E = {
      fromString: (f) => f,
      toString: (f) => String(f ?? "")
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
    if (Je(e)) {
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
    if (Je(e)) {
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
const L = new Nr();
class tt {
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
    return new Wt(e);
  }
  createFromString(e, t) {
    return L.createFromString(e, t);
  }
  convertToString(e, t) {
    return L.convertToString(e, t);
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
    return Q.getEFactoryClass();
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
class Sr extends we {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && Q.isRegistered()) {
      const t = Q.getEPackageClass();
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
class Ar extends we {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && Q.isRegistered()) {
      const e = Q.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof Te && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof Te && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof Te && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof Te && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof Te && (s.eSuperPackage = null), t instanceof Te && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class Te extends ge {
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
      const e = new tt();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = ve(new Sr(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = ve(new Ar(this))), this._eSubpackages;
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
    return Q.getEPackageClass();
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
class qt extends ge {
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
    if (this.eType && be(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), i = r.indexOf("#");
        if (i > 0) {
          const n = r.substring(0, i), l = r.substring(i + 1), u = [_e.INSTANCE];
          let c = this.eResource()?.getResourceSet();
          if (!c) {
            let E = this.eContainingClass;
            for (; E; ) {
              if (typeof E.eResource == "function") {
                const f = E.eResource();
                if (f) {
                  c = f.getResourceSet();
                  break;
                }
              }
              E = E.getEPackage?.() ?? E.getESuperPackage?.() ?? E.eContainer?.();
            }
          }
          c && u.push(c.getPackageRegistry());
          for (const E of u) {
            const f = E.getEPackage(n);
            if (f) {
              const G = ze(f, l);
              if (G)
                return this.eType = G, this.eType;
            }
            let N = n;
            const O = N.lastIndexOf("/");
            O >= 0 && (N = N.substring(O + 1));
            const x = N.indexOf(".");
            if (x > 0 && (N = N.substring(0, x)), N)
              for (const G of E.keys()) {
                const Y = E.getEPackage(G);
                if (Y && Y.getName() === N) {
                  const R = ze(Y, l);
                  if (R)
                    return this.eType = R, this.eType;
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
    return Q.getEStructuralFeatureClass();
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
class B extends qt {
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
    return Q.getEAttributeClass();
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
class w extends qt {
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
    return Q.getEReferenceClass();
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
class q extends ge {
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
    return Q.getEDataTypeClass();
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
  const h = new q();
  return h.setName("EString"), h.setInstanceClassName("java.lang.String"), h;
})();
(() => {
  const h = new q();
  return h.setName("EInt"), h.setInstanceClassName("int"), h;
})();
(() => {
  const h = new q();
  return h.setName("EBoolean"), h.setInstanceClassName("boolean"), h;
})();
(() => {
  const h = new q();
  return h.setName("EFloat"), h.setInstanceClassName("float"), h;
})();
(() => {
  const h = new q();
  return h.setName("EDouble"), h.setInstanceClassName("double"), h;
})();
(() => {
  const h = new q();
  return h.setName("ELong"), h.setInstanceClassName("long"), h;
})();
(() => {
  const h = new q();
  return h.setName("EDate"), h.setInstanceClassName("java.util.Date"), h;
})();
class Or extends ge {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = Q.getEAnnotationClass().getEStructuralFeature("details"), s = Q.getEStringToStringMapEntryClass();
      this._detailsMap = xs(this, t, s);
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
    return Q.getEAnnotationClass();
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
class Qt extends ge {
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
    return Q.getEEnumLiteralClass();
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
class Ir extends q {
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
    return Q.getEEnumClass();
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
            r instanceof Qt && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Lr extends ge {
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
    return Q.getEOperationClass();
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
class Rr extends ge {
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
    return Q.getEParameterClass();
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
class Dr extends ge {
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
    return this.eUpperBound ? this.eUpperBound.getERawType() : Q.getEObjectClass();
  }
  eClass() {
    return Q.getEGenericTypeClass();
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
class br extends ge {
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
    return Q.getETypeParameterClass();
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
const vr = "ecore.xml.type";
let Xe = null;
function wr() {
  return Xe || (Xe = new xr(), Xe.initialize(), _e.INSTANCE.set(Zt, Xe)), Xe;
}
const Fr = [
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
class xr extends Te {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(Zt), this.setNsPrefix(vr);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of Fr) {
      const r = new q();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new Br(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (l) => l.toLowerCase() === "true" || l === "1", toString: (l) => String(l) };
    L.registerByName("Boolean", e), L.registerByName("BooleanObject", e);
    const t = { fromString: (l) => parseInt(l, 10), toString: (l) => String(l) };
    L.registerByName("Int", t), L.registerByName("IntObject", t), L.registerByName("Short", t), L.registerByName("ShortObject", t), L.registerByName("Byte", t), L.registerByName("ByteObject", t), L.registerByName("UnsignedByte", t), L.registerByName("UnsignedByteObject", t), L.registerByName("UnsignedShort", t), L.registerByName("UnsignedShortObject", t), L.registerByName("UnsignedInt", t), L.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (l) => {
        const u = parseInt(l, 10);
        return Math.abs(u) > Number.MAX_SAFE_INTEGER ? BigInt(l) : u;
      },
      toString: (l) => String(l)
    };
    L.registerByName("Long", s), L.registerByName("LongObject", s);
    const r = { fromString: (l) => parseFloat(l), toString: (l) => String(l) };
    L.registerByName("Float", r), L.registerByName("FloatObject", r), L.registerByName("Double", r), L.registerByName("DoubleObject", r);
    const i = { fromString: (l) => l, toString: (l) => l ?? "0" };
    L.registerByName("Decimal", i), L.registerByName("Integer", i), L.registerByName("NonNegativeInteger", i), L.registerByName("NonPositiveInteger", i), L.registerByName("NegativeInteger", i), L.registerByName("PositiveInteger", i), L.registerByName("UnsignedLong", i);
    const n = { fromString: (l) => l, toString: (l) => l ?? "" };
    L.registerByName("String", n), L.registerByName("AnySimpleType", n), L.registerByName("AnyURI", n), L.registerByName("NormalizedString", n), L.registerByName("Token", n), L.registerByName("Name", n), L.registerByName("NCName", n), L.registerByName("Language", n), L.registerByName("ID", n), L.registerByName("IDREF", n), L.registerByName("ENTITY", n), L.registerByName("NMTOKEN", n), L.registerByName("Date", n), L.registerByName("DateTime", n), L.registerByName("Time", n), L.registerByName("Duration", n), L.registerByName("GDay", n), L.registerByName("GMonth", n), L.registerByName("GMonthDay", n), L.registerByName("GYear", n), L.registerByName("GYearMonth", n), L.registerByName("QName", n), L.registerByName("NOTATION", n);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class Br extends tt {
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
const Jt = "http://www.eclipse.org/emf/2002/Ecore", Pr = "ecore", Zt = "http://www.eclipse.org/emf/2003/XMLType";
let Ge = null;
function ne() {
  return Ge || (Ge = new Ur(), Ge.initialize(), kr(), Q.register(ne)), Ge;
}
function kr() {
  Ge && (_e.INSTANCE.set(Jt, Ge), wr());
}
class Ur extends Te {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(Jt), this.setNsPrefix(Pr);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Mr(this);
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
    this._eBooleanDataType = new q(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new q(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new q(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new q(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new q(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new q(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new q(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new q(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new q(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new q(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new q(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new q(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new q(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new q(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new q(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new j(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new j(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new j(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new j(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new j(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new j(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new j(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new j(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new j(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new j(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new j(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new j(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new j(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new j(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new j(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new j(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new j(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new j(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new j(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new j(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new B();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new B();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new B();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new B();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const i = new B();
    i.setName("upperBound"), i.setEType(this._eIntDataType), i.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(i);
    const n = new B();
    n.setName("instanceClassName"), n.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(n);
    const l = new B();
    l.setName("abstract"), l.setEType(this._eBooleanDataType), l.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(l);
    const u = new B();
    u.setName("interface"), u.setEType(this._eBooleanDataType), u.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(u);
    const c = new B();
    c.setName("nsURI"), c.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(c);
    const E = new B();
    E.setName("nsPrefix"), E.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(E);
    const f = new B();
    f.setName("changeable"), f.setEType(this._eBooleanDataType), f.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(f);
    const N = new B();
    N.setName("volatile"), N.setEType(this._eBooleanDataType), N.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(N);
    const O = new B();
    O.setName("transient"), O.setEType(this._eBooleanDataType), O.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(O);
    const x = new B();
    x.setName("defaultValueLiteral"), x.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(x);
    const G = new B();
    G.setName("unsettable"), G.setEType(this._eBooleanDataType), G.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(G);
    const Y = new B();
    Y.setName("derived"), Y.setEType(this._eBooleanDataType), Y.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(Y);
    const R = new B();
    R.setName("iD"), R.setEType(this._eBooleanDataType), R.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(R);
    const J = new B();
    J.setName("containment"), J.setEType(this._eBooleanDataType), J.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(J);
    const S = new B();
    S.setName("resolveProxies"), S.setEType(this._eBooleanDataType), S.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(S);
    const C = new B();
    C.setName("value"), C.setEType(this._eIntDataType), C.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(C);
    const k = new B();
    k.setName("literal"), k.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(k);
    const b = new B();
    b.setName("source"), b.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(b);
    const X = new B();
    X.setName("key"), X.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(X);
    const F = new B();
    F.setName("value"), F.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(F);
    const ee = new B();
    ee.setName("serializable"), ee.setEType(this._eBooleanDataType), ee.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(ee);
  }
  createReferences() {
    const e = new w();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new w();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new w();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new w();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const i = new w();
    i.setName("eOperations"), i.setEType(this._eOperationClass), i.setContainment(!0), i.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(i);
    const n = new w();
    n.setName("eClassifiers"), n.setEType(this._eClassifierClass), n.setContainment(!0), n.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(n);
    const l = new w();
    l.setName("eSubpackages"), l.setEType(this._ePackageClass), l.setContainment(!0), l.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(l);
    const u = new w();
    u.setName("eFactoryInstance"), u.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(u);
    const c = new w();
    c.setName("eLiterals"), c.setEType(this._eEnumLiteralClass), c.setContainment(!0), c.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(c);
    const E = new w();
    E.setName("eOpposite"), E.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(E);
    const f = new w();
    f.setName("eParameters"), f.setEType(this._eParameterClass), f.setContainment(!0), f.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(f);
    const N = new w();
    N.setName("details"), N.setEType(this._eStringToStringMapEntryClass), N.setContainment(!0), N.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(N);
    const O = new w();
    O.setName("eGenericType"), O.setEType(this._eGenericTypeClass), O.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(O);
    const x = new w();
    x.setName("eTypeParameters"), x.setEType(this._eTypeParameterClass), x.setContainment(!0), x.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(x);
    const G = new w();
    G.setName("eGenericSuperTypes"), G.setEType(this._eGenericTypeClass), G.setContainment(!0), G.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(G);
    const Y = new w();
    Y.setName("eTypeParameters"), Y.setEType(this._eTypeParameterClass), Y.setContainment(!0), Y.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(Y);
    const R = new w();
    R.setName("eBounds"), R.setEType(this._eGenericTypeClass), R.setContainment(!0), R.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(R);
    const J = new w();
    J.setName("eClassifier"), J.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(J);
    const S = new w();
    S.setName("eTypeParameter"), S.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(S);
    const C = new w();
    C.setName("eTypeArguments"), C.setEType(this._eGenericTypeClass), C.setContainment(!0), C.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(C);
    const k = new w();
    k.setName("eUpperBound"), k.setEType(this._eGenericTypeClass), k.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(k);
    const b = new w();
    b.setName("eLowerBound"), b.setEType(this._eGenericTypeClass), b.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(b);
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
class Mr extends tt {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new j();
      case "EAttribute":
        return new B();
      case "EReference":
        return new w();
      case "EDataType":
        return new q();
      case "EEnum":
        return new Ir();
      case "EEnumLiteral":
        return new Qt();
      case "EAnnotation":
        return new Or();
      case "EPackage":
        return new Te();
      case "EOperation":
        return new Lr();
      case "EParameter":
        return new Rr();
      case "EGenericType":
        return new Dr();
      case "ETypeParameter":
        return new br();
      default:
        return super.create(e);
    }
  }
}
ne();
class $ extends ge {
  // Feature ID Constants (eLiterals)
  static LEVEL = 0;
  static BACKGROUND_COLOR = 1;
  static TEXT_COLOR = 2;
  static FONT_WEIGHT = 3;
  // Private fields
  _level;
  _backgroundColor = new v();
  _textColor = new v();
  _fontWeight = 600;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.LEVEL_STYLE;
  }
  // Getters and Setters
  get level() {
    return this._level;
  }
  set level(e) {
    const t = this._level;
    this._level = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.LEVEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.LEVEL,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const t = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(e) {
    const t = this._textColor;
    this._textColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.TEXT_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    const t = this._fontWeight;
    this._fontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.LEVEL:
        return this.level;
      case $.BACKGROUND_COLOR:
        return this.backgroundColor;
      case $.TEXT_COLOR:
        return this.textColor;
      case $.FONT_WEIGHT:
        return this.fontWeight;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case $.LEVEL:
        this.level = t, super.eSet(e, t);
        break;
      case $.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case $.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case $.FONT_WEIGHT:
        this.fontWeight = t, super.eSet(e, t);
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
      case $.LEVEL:
        return this._level !== void 0;
      case $.BACKGROUND_COLOR:
        return this._backgroundColor !== new v();
      case $.TEXT_COLOR:
        return this._textColor !== new v();
      case $.FONT_WEIGHT:
        return this._fontWeight !== 600;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.LEVEL:
        this._level = void 0;
        return;
      case $.BACKGROUND_COLOR:
        this._backgroundColor = new v();
        return;
      case $.TEXT_COLOR:
        this._textColor = new v();
        return;
      case $.FONT_WEIGHT:
        this._fontWeight = 600;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class A extends ge {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static CONDITION_TYPE = 1;
  static PRIORITY = 2;
  static VALUE1 = 3;
  static VALUE2 = 4;
  static BACKGROUND_COLOR = 5;
  static TEXT_COLOR = 6;
  static MIN_COLOR = 7;
  static MAX_COLOR = 8;
  static FONT_WEIGHT = 9;
  // Private fields
  _id;
  _conditionType = "greaterThan";
  _priority;
  _value1 = "0";
  _value2 = "100";
  _backgroundColor = new v();
  _textColor = new v();
  _minColor = new v();
  _maxColor = new v();
  _fontWeight = 400;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.CONDITIONAL_FORMAT;
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
      getFeature: () => this.eClass().getEStructuralFeature(A.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.ID,
      merge: () => !1
    });
  }
  get conditionType() {
    return this._conditionType;
  }
  set conditionType(e) {
    const t = this._conditionType;
    this._conditionType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.CONDITION_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.CONDITION_TYPE,
      merge: () => !1
    });
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.PRIORITY,
      merge: () => !1
    });
  }
  get value1() {
    return this._value1;
  }
  set value1(e) {
    const t = this._value1;
    this._value1 = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.VALUE1),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.VALUE1,
      merge: () => !1
    });
  }
  get value2() {
    return this._value2;
  }
  set value2(e) {
    const t = this._value2;
    this._value2 = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.VALUE2),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.VALUE2,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const t = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(e) {
    const t = this._textColor;
    this._textColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.TEXT_COLOR,
      merge: () => !1
    });
  }
  get minColor() {
    return this._minColor;
  }
  set minColor(e) {
    const t = this._minColor;
    this._minColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.MIN_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MIN_COLOR,
      merge: () => !1
    });
  }
  get maxColor() {
    return this._maxColor;
  }
  set maxColor(e) {
    const t = this._maxColor;
    this._maxColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.MAX_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MAX_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    const t = this._fontWeight;
    this._fontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(A.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case A.ID:
        return this.id;
      case A.CONDITION_TYPE:
        return this.conditionType;
      case A.PRIORITY:
        return this.priority;
      case A.VALUE1:
        return this.value1;
      case A.VALUE2:
        return this.value2;
      case A.BACKGROUND_COLOR:
        return this.backgroundColor;
      case A.TEXT_COLOR:
        return this.textColor;
      case A.MIN_COLOR:
        return this.minColor;
      case A.MAX_COLOR:
        return this.maxColor;
      case A.FONT_WEIGHT:
        return this.fontWeight;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case A.ID:
        this.id = t, super.eSet(e, t);
        break;
      case A.CONDITION_TYPE:
        this.conditionType = t, super.eSet(e, t);
        break;
      case A.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case A.VALUE1:
        this.value1 = t, super.eSet(e, t);
        break;
      case A.VALUE2:
        this.value2 = t, super.eSet(e, t);
        break;
      case A.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case A.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case A.MIN_COLOR:
        this.minColor = t, super.eSet(e, t);
        break;
      case A.MAX_COLOR:
        this.maxColor = t, super.eSet(e, t);
        break;
      case A.FONT_WEIGHT:
        this.fontWeight = t, super.eSet(e, t);
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
      case A.ID:
        return this._id !== void 0;
      case A.CONDITION_TYPE:
        return this._conditionType !== "greaterThan";
      case A.PRIORITY:
        return this._priority !== void 0;
      case A.VALUE1:
        return this._value1 !== "0";
      case A.VALUE2:
        return this._value2 !== "100";
      case A.BACKGROUND_COLOR:
        return this._backgroundColor !== new v();
      case A.TEXT_COLOR:
        return this._textColor !== new v();
      case A.MIN_COLOR:
        return this._minColor !== new v();
      case A.MAX_COLOR:
        return this._maxColor !== new v();
      case A.FONT_WEIGHT:
        return this._fontWeight !== 400;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case A.ID:
        this._id = void 0;
        return;
      case A.CONDITION_TYPE:
        this._conditionType = "greaterThan";
        return;
      case A.PRIORITY:
        this._priority = void 0;
        return;
      case A.VALUE1:
        this._value1 = "0";
        return;
      case A.VALUE2:
        this._value2 = "100";
        return;
      case A.BACKGROUND_COLOR:
        this._backgroundColor = new v();
        return;
      case A.TEXT_COLOR:
        this._textColor = new v();
        return;
      case A.MIN_COLOR:
        this._minColor = new v();
        return;
      case A.MAX_COLOR:
        this._maxColor = new v();
        return;
      case A.FONT_WEIGHT:
        this._fontWeight = 400;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class me extends qe {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.HEADER_EXPANDED_PAYLOAD;
  }
  // Getters and Setters
  get uniqueName() {
    return this._uniqueName;
  }
  set uniqueName(e) {
    const t = this._uniqueName;
    this._uniqueName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(me.UNIQUE_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => me.UNIQUE_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.UNIQUE_NAME:
        return this.uniqueName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case me.UNIQUE_NAME:
        this.uniqueName = t, super.eSet(e, t);
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
      case me.UNIQUE_NAME:
        return this._uniqueName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.UNIQUE_NAME:
        this._uniqueName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class Ce extends qe {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.HEADER_CLICKED_PAYLOAD;
  }
  // Getters and Setters
  get uniqueName() {
    return this._uniqueName;
  }
  set uniqueName(e) {
    const t = this._uniqueName;
    this._uniqueName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ce.UNIQUE_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.UNIQUE_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ce.UNIQUE_NAME:
        return this.uniqueName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Ce.UNIQUE_NAME:
        this.uniqueName = t, super.eSet(e, t);
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
      case Ce.UNIQUE_NAME:
        return this._uniqueName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ce.UNIQUE_NAME:
        this._uniqueName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class pt extends tt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new pt()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(_.eINSTANCE);
  }
  /**
   * Create a new PivotTable instance
   */
  createPivotTable() {
    return new y();
  }
  /**
   * Create a new LevelStyle instance
   */
  createLevelStyle() {
    return new $();
  }
  /**
   * Create a new ConditionalFormat instance
   */
  createConditionalFormat() {
    return new A();
  }
  /**
   * Create a new HeaderExpandedPayload instance
   */
  createHeaderExpandedPayload() {
    return new me();
  }
  /**
   * Create a new HeaderClickedPayload instance
   */
  createHeaderClickedPayload() {
    return new Ce();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "PivotTable":
        return this.createPivotTable();
      case "LevelStyle":
        return this.createLevelStyle();
      case "ConditionalFormat":
        return this.createConditionalFormat();
      case "HeaderExpandedPayload":
        return this.createHeaderExpandedPayload();
      case "HeaderClickedPayload":
        return this.createHeaderClickedPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function se(h) {
  const e = _e.INSTANCE.getEPackage(h);
  if (!e)
    throw new Error(`EPackage '${h}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing PivotTablePackage.`);
  return e;
}
class _ extends Te {
  static eNAME = "PivotTable";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot";
  static eNS_PREFIX = "PivotTable";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new _(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PIVOT_TABLE: null,
    PIVOT_TABLE__ROWS: null,
    PIVOT_TABLE__COLUMNS: null,
    PIVOT_TABLE__CELLS: null,
    PIVOT_TABLE__TABLE_STATE: null,
    PIVOT_TABLE__HEADER_BACKGROUND_COLOR: null,
    PIVOT_TABLE__HEADER_TEXT_COLOR: null,
    PIVOT_TABLE__CELL_BACKGROUND_COLOR: null,
    PIVOT_TABLE__CELL_TEXT_COLOR: null,
    PIVOT_TABLE__BORDER_COLOR: null,
    PIVOT_TABLE__DEFAULT_COLUMN_WIDTH: null,
    PIVOT_TABLE__DEFAULT_ROW_HEIGHT: null,
    PIVOT_TABLE__FONT_SIZE: null,
    PIVOT_TABLE__HEADER_FONT_WEIGHT: null,
    PIVOT_TABLE__CELL_TEXT_ALIGN: null,
    PIVOT_TABLE__SHOW_ROWS_PROPERTIES: null,
    PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES: null,
    PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER: null,
    PIVOT_TABLE__ROW_LEVEL_STYLES: null,
    PIVOT_TABLE__COLUMN_LEVEL_STYLES: null,
    PIVOT_TABLE__CONDITIONAL_FORMATS: null,
    LEVEL_STYLE: null,
    LEVEL_STYLE__LEVEL: null,
    LEVEL_STYLE__BACKGROUND_COLOR: null,
    LEVEL_STYLE__TEXT_COLOR: null,
    LEVEL_STYLE__FONT_WEIGHT: null,
    CONDITIONAL_FORMAT: null,
    CONDITIONAL_FORMAT__ID: null,
    CONDITIONAL_FORMAT__CONDITION_TYPE: null,
    CONDITIONAL_FORMAT__PRIORITY: null,
    CONDITIONAL_FORMAT__VALUE1: null,
    CONDITIONAL_FORMAT__VALUE2: null,
    CONDITIONAL_FORMAT__BACKGROUND_COLOR: null,
    CONDITIONAL_FORMAT__TEXT_COLOR: null,
    CONDITIONAL_FORMAT__MIN_COLOR: null,
    CONDITIONAL_FORMAT__MAX_COLOR: null,
    CONDITIONAL_FORMAT__FONT_WEIGHT: null,
    JAVA_OBJECT: null,
    PIVOT_TABLE_INTERFACE: null,
    HEADER_EXPANDED_PAYLOAD: null,
    HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME: null,
    HEADER_CLICKED_PAYLOAD: null,
    HEADER_CLICKED_PAYLOAD__UNIQUE_NAME: null
  };
  constructor() {
    super(), this.setName(_.eNAME), this.setNsURI(_.eNS_URI), this.setNsPrefix(_.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    _e.INSTANCE.set(_.eNS_URI, this), this.setEFactoryInstance(pt.eINSTANCE);
    const e = new j();
    e.setName("PivotTable"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), _.Literals.PIVOT_TABLE = e;
    const t = new w();
    t.setContainment(!0), t.setName("rows"), t.setLowerBound(1), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), _.Literals.PIVOT_TABLE__ROWS = t;
    const s = new w();
    s.setContainment(!0), s.setName("columns"), s.setLowerBound(1), s.setUpperBound(-1), e.getEStructuralFeatures().push(s), _.Literals.PIVOT_TABLE__COLUMNS = s;
    const r = new w();
    r.setContainment(!0), r.setName("cells"), r.setLowerBound(1), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), _.Literals.PIVOT_TABLE__CELLS = r;
    const i = new B();
    i.setName("tableState"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), _.Literals.PIVOT_TABLE__TABLE_STATE = i;
    const n = new w();
    n.setContainment(!1), n.setName("headerBackgroundColor"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), _.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR = n;
    const l = new w();
    l.setContainment(!1), l.setName("headerTextColor"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), _.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR = l;
    const u = new w();
    u.setContainment(!1), u.setName("cellBackgroundColor"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), _.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR = u;
    const c = new w();
    c.setContainment(!1), c.setName("cellTextColor"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), _.Literals.PIVOT_TABLE__CELL_TEXT_COLOR = c;
    const E = new w();
    E.setContainment(!1), E.setName("borderColor"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), _.Literals.PIVOT_TABLE__BORDER_COLOR = E;
    const f = new w();
    f.setContainment(!1), f.setName("defaultColumnWidth"), f.setLowerBound(0), f.setUpperBound(1), e.getEStructuralFeatures().push(f), _.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH = f;
    const N = new w();
    N.setContainment(!1), N.setName("defaultRowHeight"), N.setLowerBound(0), N.setUpperBound(1), e.getEStructuralFeatures().push(N), _.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT = N;
    const O = new w();
    O.setContainment(!1), O.setName("fontSize"), O.setLowerBound(0), O.setUpperBound(1), e.getEStructuralFeatures().push(O), _.Literals.PIVOT_TABLE__FONT_SIZE = O;
    const x = new w();
    x.setContainment(!1), x.setName("headerFontWeight"), x.setLowerBound(0), x.setUpperBound(1), e.getEStructuralFeatures().push(x), _.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT = x;
    const G = new B();
    G.setName("cellTextAlign"), G.setLowerBound(0), G.setUpperBound(1), e.getEStructuralFeatures().push(G), _.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN = G;
    const Y = new B();
    Y.setName("showRowsProperties"), Y.setLowerBound(0), Y.setUpperBound(1), e.getEStructuralFeatures().push(Y), _.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES = Y;
    const R = new B();
    R.setName("showColumnsProperties"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), _.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES = R;
    const J = new B();
    J.setName("showSingleMeasureHeader"), J.setLowerBound(0), J.setUpperBound(1), e.getEStructuralFeatures().push(J), _.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER = J;
    const S = new w();
    S.setContainment(!0), S.setName("rowLevelStyles"), S.setLowerBound(0), S.setUpperBound(-1), e.getEStructuralFeatures().push(S), _.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES = S;
    const C = new w();
    C.setContainment(!0), C.setName("columnLevelStyles"), C.setLowerBound(0), C.setUpperBound(-1), e.getEStructuralFeatures().push(C), _.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES = C;
    const k = new w();
    k.setContainment(!0), k.setName("conditionalFormats"), k.setLowerBound(0), k.setUpperBound(-1), e.getEStructuralFeatures().push(k), _.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS = k;
    const b = new j();
    b.setName("LevelStyle"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), _.Literals.LEVEL_STYLE = b;
    const X = new B();
    X.setName("level"), X.setLowerBound(0), X.setUpperBound(1), b.getEStructuralFeatures().push(X), _.Literals.LEVEL_STYLE__LEVEL = X;
    const F = new w();
    F.setContainment(!1), F.setName("backgroundColor"), F.setLowerBound(0), F.setUpperBound(1), b.getEStructuralFeatures().push(F), _.Literals.LEVEL_STYLE__BACKGROUND_COLOR = F;
    const ee = new w();
    ee.setContainment(!1), ee.setName("textColor"), ee.setLowerBound(0), ee.setUpperBound(1), b.getEStructuralFeatures().push(ee), _.Literals.LEVEL_STYLE__TEXT_COLOR = ee;
    const d = new B();
    d.setName("fontWeight"), d.setLowerBound(0), d.setUpperBound(1), b.getEStructuralFeatures().push(d), _.Literals.LEVEL_STYLE__FONT_WEIGHT = d;
    const m = new j();
    m.setName("ConditionalFormat"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), _.Literals.CONDITIONAL_FORMAT = m;
    const P = new B();
    P.setName("id"), P.setLowerBound(0), P.setUpperBound(1), m.getEStructuralFeatures().push(P), _.Literals.CONDITIONAL_FORMAT__ID = P;
    const T = new B();
    T.setName("conditionType"), T.setLowerBound(0), T.setUpperBound(1), m.getEStructuralFeatures().push(T), _.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE = T;
    const D = new B();
    D.setName("priority"), D.setLowerBound(0), D.setUpperBound(1), m.getEStructuralFeatures().push(D), _.Literals.CONDITIONAL_FORMAT__PRIORITY = D;
    const Fe = new B();
    Fe.setName("value1"), Fe.setLowerBound(0), Fe.setUpperBound(1), m.getEStructuralFeatures().push(Fe), _.Literals.CONDITIONAL_FORMAT__VALUE1 = Fe;
    const xe = new B();
    xe.setName("value2"), xe.setLowerBound(0), xe.setUpperBound(1), m.getEStructuralFeatures().push(xe), _.Literals.CONDITIONAL_FORMAT__VALUE2 = xe;
    const z = new w();
    z.setContainment(!1), z.setName("backgroundColor"), z.setLowerBound(0), z.setUpperBound(1), m.getEStructuralFeatures().push(z), _.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR = z;
    const Ee = new w();
    Ee.setContainment(!1), Ee.setName("textColor"), Ee.setLowerBound(0), Ee.setUpperBound(1), m.getEStructuralFeatures().push(Ee), _.Literals.CONDITIONAL_FORMAT__TEXT_COLOR = Ee;
    const Ne = new w();
    Ne.setContainment(!1), Ne.setName("minColor"), Ne.setLowerBound(0), Ne.setUpperBound(1), m.getEStructuralFeatures().push(Ne), _.Literals.CONDITIONAL_FORMAT__MIN_COLOR = Ne;
    const le = new w();
    le.setContainment(!1), le.setName("maxColor"), le.setLowerBound(0), le.setUpperBound(1), m.getEStructuralFeatures().push(le), _.Literals.CONDITIONAL_FORMAT__MAX_COLOR = le;
    const Re = new B();
    Re.setName("fontWeight"), Re.setLowerBound(0), Re.setUpperBound(1), m.getEStructuralFeatures().push(Re), _.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT = Re;
    const M = new j();
    M.setName("JavaObject"), M.setAbstract(!0), M.setInterface(!1), this.getEClassifiers().push(M), M.setEPackage(this), _.Literals.JAVA_OBJECT = M;
    const De = new j();
    De.setName("PivotTableInterface"), De.setAbstract(!0), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), _.Literals.PIVOT_TABLE_INTERFACE = De;
    const ye = new j();
    ye.setName("HeaderExpandedPayload"), ye.setAbstract(!1), ye.setInterface(!1), this.getEClassifiers().push(ye), ye.setEPackage(this), _.Literals.HEADER_EXPANDED_PAYLOAD = ye;
    const Se = new B();
    Se.setName("uniqueName"), Se.setLowerBound(0), Se.setUpperBound(1), ye.getEStructuralFeatures().push(Se), _.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME = Se;
    const oe = new j();
    oe.setName("HeaderClickedPayload"), oe.setAbstract(!1), oe.setInterface(!1), this.getEClassifiers().push(oe), oe.setEPackage(this), _.Literals.HEADER_CLICKED_PAYLOAD = oe;
    const Ae = new B();
    Ae.setName("uniqueName"), Ae.setLowerBound(0), Ae.setUpperBound(1), oe.getEStructuralFeatures().push(Ae), _.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME = Ae, _.Literals.PIVOT_TABLE_INTERFACE.getESuperTypes().push(se("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), _.Literals.HEADER_EXPANDED_PAYLOAD.getESuperTypes().push(se("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), _.Literals.HEADER_CLICKED_PAYLOAD.getESuperTypes().push(se("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), _.Literals.PIVOT_TABLE__ROWS.setEType(_.Literals.JAVA_OBJECT), _.Literals.PIVOT_TABLE__COLUMNS.setEType(_.Literals.JAVA_OBJECT), _.Literals.PIVOT_TABLE__CELLS.setEType(_.Literals.JAVA_OBJECT), _.Literals.PIVOT_TABLE__TABLE_STATE.setEType(ne().getEClassifier("EJavaObject")), _.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__CELL_TEXT_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__BORDER_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__FONT_SIZE.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN.setEType(ne().getEClassifier("EString")), _.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES.setEType(ne().getEClassifier("EBoolean")), _.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES.setEType(ne().getEClassifier("EBoolean")), _.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER.setEType(ne().getEClassifier("EBoolean")), _.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES.setEType(_.Literals.LEVEL_STYLE), _.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES.setEType(_.Literals.LEVEL_STYLE), _.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS.setEType(_.Literals.CONDITIONAL_FORMAT), _.Literals.LEVEL_STYLE__LEVEL.setEType(ne().getEClassifier("EDouble")), _.Literals.LEVEL_STYLE__BACKGROUND_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.LEVEL_STYLE__TEXT_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.LEVEL_STYLE__FONT_WEIGHT.setEType(ne().getEClassifier("EDouble")), _.Literals.CONDITIONAL_FORMAT__ID.setEType(ne().getEClassifier("EString")), _.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE.setEType(ne().getEClassifier("EString")), _.Literals.CONDITIONAL_FORMAT__PRIORITY.setEType(ne().getEClassifier("EDouble")), _.Literals.CONDITIONAL_FORMAT__VALUE1.setEType(ne().getEClassifier("EString")), _.Literals.CONDITIONAL_FORMAT__VALUE2.setEType(ne().getEClassifier("EString")), _.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.CONDITIONAL_FORMAT__TEXT_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.CONDITIONAL_FORMAT__MIN_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.CONDITIONAL_FORMAT__MAX_COLOR.setEType(se("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT.setEType(ne().getEClassifier("EDouble")), _.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME.setEType(ne().getEClassifier("EString")), _.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME.setEType(ne().getEClassifier("EString"));
  }
}
class y extends ge {
  // Feature ID Constants (eLiterals)
  static ROWS = 0;
  static COLUMNS = 1;
  static CELLS = 2;
  static TABLE_STATE = 3;
  static HEADER_BACKGROUND_COLOR = 4;
  static HEADER_TEXT_COLOR = 5;
  static CELL_BACKGROUND_COLOR = 6;
  static CELL_TEXT_COLOR = 7;
  static BORDER_COLOR = 8;
  static DEFAULT_COLUMN_WIDTH = 9;
  static DEFAULT_ROW_HEIGHT = 10;
  static FONT_SIZE = 11;
  static HEADER_FONT_WEIGHT = 12;
  static CELL_TEXT_ALIGN = 13;
  static SHOW_ROWS_PROPERTIES = 14;
  static SHOW_COLUMNS_PROPERTIES = 15;
  static SHOW_SINGLE_MEASURE_HEADER = 16;
  static ROW_LEVEL_STYLES = 17;
  static COLUMN_LEVEL_STYLES = 18;
  static CONDITIONAL_FORMATS = 19;
  // Private fields
  _rows;
  _columns;
  _cells;
  _tableState;
  _headerBackgroundColor = new v();
  _headerTextColor = new v();
  _cellBackgroundColor = new v();
  _cellTextColor = new v();
  _borderColor = new v();
  _defaultColumnWidth = new v();
  _defaultRowHeight = new v();
  _fontSize = new v();
  _headerFontWeight = new v();
  _cellTextAlign = "left";
  _showRowsProperties = !1;
  _showColumnsProperties = !1;
  _showSingleMeasureHeader = !1;
  _rowLevelStyles;
  _columnLevelStyles;
  _conditionalFormats;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.PIVOT_TABLE;
  }
  // Getters and Setters
  get rows() {
    return this._rows || (this._rows = Be(this, this.eClass().getEStructuralFeature("rows"))), this._rows;
  }
  get columns() {
    return this._columns || (this._columns = Be(this, this.eClass().getEStructuralFeature("columns"))), this._columns;
  }
  get cells() {
    return this._cells || (this._cells = Be(this, this.eClass().getEStructuralFeature("cells"))), this._cells;
  }
  get tableState() {
    return this._tableState;
  }
  set tableState(e) {
    const t = this._tableState;
    this._tableState = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.TABLE_STATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.TABLE_STATE,
      merge: () => !1
    });
  }
  get headerBackgroundColor() {
    return this._headerBackgroundColor;
  }
  set headerBackgroundColor(e) {
    const t = this._headerBackgroundColor;
    this._headerBackgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.HEADER_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.HEADER_BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get headerTextColor() {
    return this._headerTextColor;
  }
  set headerTextColor(e) {
    const t = this._headerTextColor;
    this._headerTextColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.HEADER_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.HEADER_TEXT_COLOR,
      merge: () => !1
    });
  }
  get cellBackgroundColor() {
    return this._cellBackgroundColor;
  }
  set cellBackgroundColor(e) {
    const t = this._cellBackgroundColor;
    this._cellBackgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.CELL_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.CELL_BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get cellTextColor() {
    return this._cellTextColor;
  }
  set cellTextColor(e) {
    const t = this._cellTextColor;
    this._cellTextColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.CELL_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.CELL_TEXT_COLOR,
      merge: () => !1
    });
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(e) {
    const t = this._borderColor;
    this._borderColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.BORDER_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BORDER_COLOR,
      merge: () => !1
    });
  }
  get defaultColumnWidth() {
    return this._defaultColumnWidth;
  }
  set defaultColumnWidth(e) {
    const t = this._defaultColumnWidth;
    this._defaultColumnWidth = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.DEFAULT_COLUMN_WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.DEFAULT_COLUMN_WIDTH,
      merge: () => !1
    });
  }
  get defaultRowHeight() {
    return this._defaultRowHeight;
  }
  set defaultRowHeight(e) {
    const t = this._defaultRowHeight;
    this._defaultRowHeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.DEFAULT_ROW_HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.DEFAULT_ROW_HEIGHT,
      merge: () => !1
    });
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    const t = this._fontSize;
    this._fontSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.FONT_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.FONT_SIZE,
      merge: () => !1
    });
  }
  get headerFontWeight() {
    return this._headerFontWeight;
  }
  set headerFontWeight(e) {
    const t = this._headerFontWeight;
    this._headerFontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.HEADER_FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.HEADER_FONT_WEIGHT,
      merge: () => !1
    });
  }
  get cellTextAlign() {
    return this._cellTextAlign;
  }
  set cellTextAlign(e) {
    const t = this._cellTextAlign;
    this._cellTextAlign = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.CELL_TEXT_ALIGN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.CELL_TEXT_ALIGN,
      merge: () => !1
    });
  }
  get showRowsProperties() {
    return this._showRowsProperties;
  }
  set showRowsProperties(e) {
    const t = this._showRowsProperties;
    this._showRowsProperties = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_ROWS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_ROWS_PROPERTIES,
      merge: () => !1
    });
  }
  get showColumnsProperties() {
    return this._showColumnsProperties;
  }
  set showColumnsProperties(e) {
    const t = this._showColumnsProperties;
    this._showColumnsProperties = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_COLUMNS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_COLUMNS_PROPERTIES,
      merge: () => !1
    });
  }
  get showSingleMeasureHeader() {
    return this._showSingleMeasureHeader;
  }
  set showSingleMeasureHeader(e) {
    const t = this._showSingleMeasureHeader;
    this._showSingleMeasureHeader = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_SINGLE_MEASURE_HEADER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_SINGLE_MEASURE_HEADER,
      merge: () => !1
    });
  }
  get rowLevelStyles() {
    return this._rowLevelStyles || (this._rowLevelStyles = Be(this, this.eClass().getEStructuralFeature("rowLevelStyles"))), this._rowLevelStyles;
  }
  get columnLevelStyles() {
    return this._columnLevelStyles || (this._columnLevelStyles = Be(this, this.eClass().getEStructuralFeature("columnLevelStyles"))), this._columnLevelStyles;
  }
  get conditionalFormats() {
    return this._conditionalFormats || (this._conditionalFormats = Be(this, this.eClass().getEStructuralFeature("conditionalFormats"))), this._conditionalFormats;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.ROWS:
        return this.rows;
      case y.COLUMNS:
        return this.columns;
      case y.CELLS:
        return this.cells;
      case y.TABLE_STATE:
        return this.tableState;
      case y.HEADER_BACKGROUND_COLOR:
        return this.headerBackgroundColor;
      case y.HEADER_TEXT_COLOR:
        return this.headerTextColor;
      case y.CELL_BACKGROUND_COLOR:
        return this.cellBackgroundColor;
      case y.CELL_TEXT_COLOR:
        return this.cellTextColor;
      case y.BORDER_COLOR:
        return this.borderColor;
      case y.DEFAULT_COLUMN_WIDTH:
        return this.defaultColumnWidth;
      case y.DEFAULT_ROW_HEIGHT:
        return this.defaultRowHeight;
      case y.FONT_SIZE:
        return this.fontSize;
      case y.HEADER_FONT_WEIGHT:
        return this.headerFontWeight;
      case y.CELL_TEXT_ALIGN:
        return this.cellTextAlign;
      case y.SHOW_ROWS_PROPERTIES:
        return this.showRowsProperties;
      case y.SHOW_COLUMNS_PROPERTIES:
        return this.showColumnsProperties;
      case y.SHOW_SINGLE_MEASURE_HEADER:
        return this.showSingleMeasureHeader;
      case y.ROW_LEVEL_STYLES:
        return this.rowLevelStyles;
      case y.COLUMN_LEVEL_STYLES:
        return this.columnLevelStyles;
      case y.CONDITIONAL_FORMATS:
        return this.conditionalFormats;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case y.ROWS:
        this.rows.clear(), this.rows.addAll(t), super.eSet(e, t);
        break;
      case y.COLUMNS:
        this.columns.clear(), this.columns.addAll(t), super.eSet(e, t);
        break;
      case y.CELLS:
        this.cells.clear(), this.cells.addAll(t), super.eSet(e, t);
        break;
      case y.TABLE_STATE:
        this.tableState = t, super.eSet(e, t);
        break;
      case y.HEADER_BACKGROUND_COLOR:
        this.headerBackgroundColor = t, super.eSet(e, t);
        break;
      case y.HEADER_TEXT_COLOR:
        this.headerTextColor = t, super.eSet(e, t);
        break;
      case y.CELL_BACKGROUND_COLOR:
        this.cellBackgroundColor = t, super.eSet(e, t);
        break;
      case y.CELL_TEXT_COLOR:
        this.cellTextColor = t, super.eSet(e, t);
        break;
      case y.BORDER_COLOR:
        this.borderColor = t, super.eSet(e, t);
        break;
      case y.DEFAULT_COLUMN_WIDTH:
        this.defaultColumnWidth = t, super.eSet(e, t);
        break;
      case y.DEFAULT_ROW_HEIGHT:
        this.defaultRowHeight = t, super.eSet(e, t);
        break;
      case y.FONT_SIZE:
        this.fontSize = t, super.eSet(e, t);
        break;
      case y.HEADER_FONT_WEIGHT:
        this.headerFontWeight = t, super.eSet(e, t);
        break;
      case y.CELL_TEXT_ALIGN:
        this.cellTextAlign = t, super.eSet(e, t);
        break;
      case y.SHOW_ROWS_PROPERTIES:
        this.showRowsProperties = t, super.eSet(e, t);
        break;
      case y.SHOW_COLUMNS_PROPERTIES:
        this.showColumnsProperties = t, super.eSet(e, t);
        break;
      case y.SHOW_SINGLE_MEASURE_HEADER:
        this.showSingleMeasureHeader = t, super.eSet(e, t);
        break;
      case y.ROW_LEVEL_STYLES:
        this.rowLevelStyles.clear(), this.rowLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case y.COLUMN_LEVEL_STYLES:
        this.columnLevelStyles.clear(), this.columnLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case y.CONDITIONAL_FORMATS:
        this.conditionalFormats.clear(), this.conditionalFormats.addAll(t), super.eSet(e, t);
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
      case y.ROWS:
        return this._rows !== void 0 && !this._rows.isEmpty();
      case y.COLUMNS:
        return this._columns !== void 0 && !this._columns.isEmpty();
      case y.CELLS:
        return this._cells !== void 0 && !this._cells.isEmpty();
      case y.TABLE_STATE:
        return this._tableState !== void 0;
      case y.HEADER_BACKGROUND_COLOR:
        return this._headerBackgroundColor !== new v();
      case y.HEADER_TEXT_COLOR:
        return this._headerTextColor !== new v();
      case y.CELL_BACKGROUND_COLOR:
        return this._cellBackgroundColor !== new v();
      case y.CELL_TEXT_COLOR:
        return this._cellTextColor !== new v();
      case y.BORDER_COLOR:
        return this._borderColor !== new v();
      case y.DEFAULT_COLUMN_WIDTH:
        return this._defaultColumnWidth !== new v();
      case y.DEFAULT_ROW_HEIGHT:
        return this._defaultRowHeight !== new v();
      case y.FONT_SIZE:
        return this._fontSize !== new v();
      case y.HEADER_FONT_WEIGHT:
        return this._headerFontWeight !== new v();
      case y.CELL_TEXT_ALIGN:
        return this._cellTextAlign !== "left";
      case y.SHOW_ROWS_PROPERTIES:
        return this._showRowsProperties !== !1;
      case y.SHOW_COLUMNS_PROPERTIES:
        return this._showColumnsProperties !== !1;
      case y.SHOW_SINGLE_MEASURE_HEADER:
        return this._showSingleMeasureHeader !== !1;
      case y.ROW_LEVEL_STYLES:
        return this._rowLevelStyles !== void 0 && !this._rowLevelStyles.isEmpty();
      case y.COLUMN_LEVEL_STYLES:
        return this._columnLevelStyles !== void 0 && !this._columnLevelStyles.isEmpty();
      case y.CONDITIONAL_FORMATS:
        return this._conditionalFormats !== void 0 && !this._conditionalFormats.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.ROWS:
        this._rows && this._rows.clear();
        return;
      case y.COLUMNS:
        this._columns && this._columns.clear();
        return;
      case y.CELLS:
        this._cells && this._cells.clear();
        return;
      case y.TABLE_STATE:
        this._tableState = void 0;
        return;
      case y.HEADER_BACKGROUND_COLOR:
        this._headerBackgroundColor = new v();
        return;
      case y.HEADER_TEXT_COLOR:
        this._headerTextColor = new v();
        return;
      case y.CELL_BACKGROUND_COLOR:
        this._cellBackgroundColor = new v();
        return;
      case y.CELL_TEXT_COLOR:
        this._cellTextColor = new v();
        return;
      case y.BORDER_COLOR:
        this._borderColor = new v();
        return;
      case y.DEFAULT_COLUMN_WIDTH:
        this._defaultColumnWidth = new v();
        return;
      case y.DEFAULT_ROW_HEIGHT:
        this._defaultRowHeight = new v();
        return;
      case y.FONT_SIZE:
        this._fontSize = new v();
        return;
      case y.HEADER_FONT_WEIGHT:
        this._headerFontWeight = new v();
        return;
      case y.CELL_TEXT_ALIGN:
        this._cellTextAlign = "left";
        return;
      case y.SHOW_ROWS_PROPERTIES:
        this._showRowsProperties = !1;
        return;
      case y.SHOW_COLUMNS_PROPERTIES:
        this._showColumnsProperties = !1;
        return;
      case y.SHOW_SINGLE_MEASURE_HEADER:
        this._showSingleMeasureHeader = !1;
        return;
      case y.ROW_LEVEL_STYLES:
        this._rowLevelStyles && this._rowLevelStyles.clear();
        return;
      case y.COLUMN_LEVEL_STYLES:
        this._columnLevelStyles && this._columnLevelStyles.clear();
        return;
      case y.CONDITIONAL_FORMATS:
        this._conditionalFormats && this._conditionalFormats.clear();
        return;
      default:
        super.eUnset(e);
    }
  }
}
const Vr = { class: "component" }, Gr = /* @__PURE__ */ Pt({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ hs({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(h) {
    const e = h, { datasourceId: t, id: s } = gs(e), r = ds(ys.TINY_EMITTER), i = () => {
      s?.value && r.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, n = () => {
      s?.value && r.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, l = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, u = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, c = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, E = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, f = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), rowId: T.rowId, colId: T.colId }
      });
    }, N = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), rowId: T.rowId, colId: T.colId }
      });
    }, O = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, x = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, G = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, Y = (T) => {
      s?.value && r.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now(), uniqueName: T }
      });
    }, R = kt(h, "configv"), { wrapParameters: J } = Es(), S = new y();
    fs(() => {
      R.value && Object.assign(R.value, { ...S, ...R.value });
    });
    const C = J({
      headerBackgroundColor: de(() => R.value?.headerBackgroundColor?.value ?? S.headerBackgroundColor),
      headerTextColor: de(() => R.value?.headerTextColor?.value ?? S.headerTextColor),
      cellBackgroundColor: de(() => R.value?.cellBackgroundColor?.value ?? S.cellBackgroundColor),
      cellTextColor: de(() => R.value?.cellTextColor?.value ?? S.cellTextColor),
      borderColor: de(() => R.value?.borderColor?.value ?? S.borderColor),
      defaultColumnWidth: de(() => R.value?.defaultColumnWidth?.value ?? S.defaultColumnWidth),
      defaultRowHeight: de(() => R.value?.defaultRowHeight?.value ?? S.defaultRowHeight),
      fontSize: de(() => R.value?.fontSize?.value ?? S.fontSize),
      headerFontWeight: de(() => R.value?.headerFontWeight?.value ?? S.headerFontWeight),
      jsonArrays: de(() => {
        const T = {
          rowLevelStyles: R.value?.rowLevelStyles?.map((D) => ({
            ...D,
            backgroundColor: D.backgroundColor?.value ?? D.backgroundColor,
            textColor: D.textColor?.value ?? D.textColor
          })),
          columnLevelStyles: R.value?.columnLevelStyles?.map((D) => ({
            ...D,
            backgroundColor: D.backgroundColor?.value ?? D.backgroundColor,
            textColor: D.textColor?.value ?? D.textColor
          })),
          conditionalFormats: R.value?.conditionalFormats?.map((D) => ({
            ...D,
            id: D.id ?? "",
            priority: D.priority ?? 0,
            backgroundColor: D.backgroundColor?.value ?? D.backgroundColor,
            textColor: D.textColor?.value ?? D.textColor,
            minColor: D.minColor?.value ?? D.minColor,
            maxColor: D.maxColor?.value ?? D.maxColor
          }))
        };
        return JSON.stringify(T);
      })
    }), k = de(() => {
      try {
        const T = C.jsonArrays.value, D = JSON.parse(T || "{}");
        return {
          rowLevelStyles: D.rowLevelStyles || S.rowLevelStyles,
          columnLevelStyles: D.columnLevelStyles || S.columnLevelStyles,
          conditionalFormats: D.conditionalFormats || S.conditionalFormats
        };
      } catch {
        return {
          rowLevelStyles: S.rowLevelStyles,
          columnLevelStyles: S.columnLevelStyles,
          conditionalFormats: S.conditionalFormats
        };
      }
    }), b = de(() => ({
      headerBackgroundColor: C.headerBackgroundColor.value,
      headerTextColor: C.headerTextColor.value,
      cellBackgroundColor: C.cellBackgroundColor.value,
      cellTextColor: C.cellTextColor.value,
      borderColor: C.borderColor.value,
      defaultColumnWidth: C.defaultColumnWidth.value,
      defaultRowHeight: C.defaultRowHeight.value,
      fontSize: C.fontSize.value,
      headerFontWeight: C.headerFontWeight.value,
      cellTextAlign: R.value?.cellTextAlign || S.cellTextAlign,
      rowLevelStyles: k.value.rowLevelStyles,
      columnLevelStyles: k.value.columnLevelStyles,
      conditionalFormats: k.value.conditionalFormats
    })), X = de(() => ({
      showRowsProperties: R.value?.showRowsProperties || S.showRowsProperties,
      showColumnsProperties: R.value?.showColumnsProperties || S.showColumnsProperties,
      showSingleMeasureHeader: R.value?.showSingleMeasureHeader ?? S.showSingleMeasureHeader
    })), F = Ut(null), { callEvent: ee, update: d } = ms(t, "PivotTable", F, [], X);
    Tt(t, (T, D) => {
      d(T, D);
    }), Tt(() => X.value, () => {
      d();
    });
    const m = (T) => {
      ee("expand", T, !0), T.area === "rows" ? O(T.value?.UName || T.value?.UNAME) : T.area === "columns" && G(T.value?.UName || T.value?.UNAME);
    }, P = (T) => {
      ee("collapse", T, !0), T.area === "rows" ? x(T.value?.UName || T.value?.UNAME) : T.area === "columns" && Y(T.value?.UName || T.value?.UNAME);
    };
    return (T, D) => (ie(), pe("div", {
      class: "text-container",
      onClick: i,
      onContextmenu: ps(n, ["prevent"])
    }, [
      W("div", Vr, [
        F.value ? (ie(), Ke(he(Cs), {
          "model-value": F.value,
          onOnExpand: m,
          onOnCollapse: P,
          onRow_clicked: l,
          onRow_right_clicked: u,
          onColumn_clicked: c,
          onColumn_right_clicked: E,
          onCell_clicked: f,
          onCell_right_clicked: N,
          key: JSON.stringify(F.value).length,
          rowsExpandedMembers: F.value.tableState.rowsExpandedMembers,
          columnsExpandedMembers: F.value.tableState.columnsExpandedMembers,
          propertiesRows: F.value.propertiesRows,
          propertiesCols: F.value.propertiesCols,
          headerBackgroundColor: b.value.headerBackgroundColor,
          headerTextColor: b.value.headerTextColor,
          cellBackgroundColor: b.value.cellBackgroundColor,
          cellTextColor: b.value.cellTextColor,
          borderColor: b.value.borderColor,
          defaultColumnWidth: b.value.defaultColumnWidth,
          defaultRowHeight: b.value.defaultRowHeight,
          fontSize: b.value.fontSize,
          headerFontWeight: b.value.headerFontWeight,
          cellTextAlign: b.value.cellTextAlign,
          rowLevelStyles: b.value.rowLevelStyles,
          columnLevelStyles: b.value.columnLevelStyles,
          conditionalFormats: b.value.conditionalFormats
        }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : Le("", !0)
      ])
    ], 32));
  }
}), es = (h, e) => {
  const t = h.__vccOpts || h;
  for (const [s, r] of e)
    t[s] = r;
  return t;
}, Wr = /* @__PURE__ */ es(Gr, [["__scopeId", "data-v-ddf7bd40"]]), jr = { class: "settings-container" }, Hr = { class: "settings-container" }, Xr = { class: "settings-block" }, $r = { class: "settings-block" }, Yr = { class: "settings-block" }, zr = { class: "settings-container" }, Kr = { class: "settings-block" }, qr = { class: "settings-container" }, Qr = { class: "settings-block" }, Jr = { class: "settings-container" }, Zr = { class: "level-header" }, ei = { class: "level-card-header" }, ti = {
  key: 0,
  class: "empty-state"
}, si = { class: "settings-container" }, ri = { class: "level-header" }, ii = { class: "level-card-header" }, ni = {
  key: 0,
  class: "empty-state"
}, ai = { class: "settings-container" }, oi = { class: "level-header" }, li = { class: "level-card-header" }, ui = {
  key: 3,
  class: "color-scale-row"
}, ci = {
  key: 0,
  class: "empty-state"
}, hi = /* @__PURE__ */ Pt({
  __name: "PivotTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(h) {
    const e = kt(h, "modelValue"), t = Ut({
      colorsSection: !0,
      dimensionsSection: !1,
      textSection: !1,
      rowLevelsSection: !1,
      columnLevelsSection: !1,
      conditionalFormatSection: !1,
      dataSettings: !1
    }), s = [
      { value: "left", text: "Links" },
      { value: "center", text: "Zentriert" },
      { value: "right", text: "Rechts" }
    ];
    function r(S, C) {
      typeof S?.add == "function" ? S.add(C) : Array.isArray(S) && S.push(C);
    }
    function i(S, C) {
      typeof S?.removeAt == "function" ? S.removeAt(C) : Array.isArray(S) && S.splice(C, 1);
    }
    const n = () => {
      e.value.rowLevelStyles || (e.value.rowLevelStyles = []);
      const S = e.value.rowLevelStyles.length, C = new $();
      C.level = S, r(e.value.rowLevelStyles, C);
    }, l = (S) => {
      i(e.value.rowLevelStyles, S);
    }, u = () => {
      e.value.columnLevelStyles || (e.value.columnLevelStyles = []);
      const S = e.value.columnLevelStyles.length, C = new $();
      C.level = S, r(e.value.columnLevelStyles, C);
    }, c = (S) => {
      i(e.value.columnLevelStyles, S);
    }, E = [
      { value: "greaterThan", text: "Größer als" },
      { value: "lessThan", text: "Kleiner als" },
      { value: "equals", text: "Gleich" },
      { value: "notEquals", text: "Ungleich" },
      { value: "between", text: "Zwischen" },
      { value: "contains", text: "Enthält (Text)" },
      { value: "colorScale", text: "Farbskala (Min→Max)" },
      { value: "topN", text: "Top N Werte" },
      { value: "bottomN", text: "Bottom N Werte" }
    ], f = () => Math.random().toString(36).substring(2, 9), N = () => {
      e.value.conditionalFormats || (e.value.conditionalFormats = []);
      const S = e.value.conditionalFormats.length, C = new A();
      C.id = f(), C.priority = S, r(e.value.conditionalFormats, C);
    }, O = (S) => {
      i(e.value.conditionalFormats, S);
    }, x = (S) => S === "between", G = (S) => S === "colorScale", Y = (S) => S === "contains", R = (S) => S === "topN" || S === "bottomN", J = (S) => S !== "colorScale";
    return (S, C) => {
      const k = Pe("VaCheckbox"), b = Pe("va-collapse"), X = Pe("va-color-input"), F = Pe("va-input"), ee = Pe("va-select"), d = Pe("va-button");
      return ie(), pe(je, null, [
        I(b, {
          modelValue: t.value.dataSettings,
          "onUpdate:modelValue": C[3] || (C[3] = (m) => t.value.dataSettings = m),
          header: "Data settings",
          icon: "palette"
        }, {
          default: K(() => [
            W("div", jr, [
              I(k, {
                modelValue: e.value.showRowsProperties,
                "onUpdate:modelValue": C[0] || (C[0] = (m) => e.value.showRowsProperties = m),
                label: "Show rows properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              I(k, {
                modelValue: e.value.showColumnsProperties,
                "onUpdate:modelValue": C[1] || (C[1] = (m) => e.value.showColumnsProperties = m),
                label: "Show columns properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              I(k, {
                modelValue: e.value.showSingleMeasureHeader,
                "onUpdate:modelValue": C[2] || (C[2] = (m) => e.value.showSingleMeasureHeader = m),
                label: "Show single measure header",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.colorsSection,
          "onUpdate:modelValue": C[9] || (C[9] = (m) => t.value.colorsSection = m),
          header: "Farben",
          icon: "palette"
        }, {
          default: K(() => [
            W("div", Hr, [
              W("div", Xr, [
                C[20] || (C[20] = W("h3", null, "Header", -1)),
                I(he(fe), {
                  modelValue: e.value.headerBackgroundColor,
                  "onUpdate:modelValue": C[4] || (C[4] = (m) => e.value.headerBackgroundColor = m),
                  label: "Header Hintergrund"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(X, {
                      label: "Header Hintergrund",
                      "model-value": m,
                      onInput: P
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                I(he(fe), {
                  modelValue: e.value.headerTextColor,
                  "onUpdate:modelValue": C[5] || (C[5] = (m) => e.value.headerTextColor = m),
                  label: "Header Textfarbe"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(X, {
                      label: "Header Textfarbe",
                      "model-value": m,
                      onInput: P
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              W("div", $r, [
                C[21] || (C[21] = W("h3", null, "Zellen", -1)),
                I(he(fe), {
                  modelValue: e.value.cellBackgroundColor,
                  "onUpdate:modelValue": C[6] || (C[6] = (m) => e.value.cellBackgroundColor = m),
                  label: "Zellen Hintergrund"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(X, {
                      label: "Zellen Hintergrund",
                      "model-value": m,
                      onInput: P
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                I(he(fe), {
                  modelValue: e.value.cellTextColor,
                  "onUpdate:modelValue": C[7] || (C[7] = (m) => e.value.cellTextColor = m),
                  label: "Zellen Textfarbe"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(X, {
                      label: "Zellen Textfarbe",
                      "model-value": m,
                      onInput: P
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              W("div", Yr, [
                C[22] || (C[22] = W("h3", null, "Rahmen", -1)),
                I(he(fe), {
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": C[8] || (C[8] = (m) => e.value.borderColor = m),
                  label: "Rahmenfarbe"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(X, {
                      label: "Rahmenfarbe",
                      "model-value": m,
                      onInput: P
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.dimensionsSection,
          "onUpdate:modelValue": C[12] || (C[12] = (m) => t.value.dimensionsSection = m),
          header: "Dimensionen",
          icon: "straighten"
        }, {
          default: K(() => [
            W("div", zr, [
              W("div", Kr, [
                I(he(fe), {
                  modelValue: e.value.defaultColumnWidth,
                  "onUpdate:modelValue": C[10] || (C[10] = (m) => e.value.defaultColumnWidth = m),
                  label: "Standard Spaltenbreite (px)"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(F, {
                      label: "Standard Spaltenbreite (px)",
                      "model-value": m,
                      "onUpdate:modelValue": P,
                      type: "number",
                      min: 50,
                      max: 500
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                I(he(fe), {
                  modelValue: e.value.defaultRowHeight,
                  "onUpdate:modelValue": C[11] || (C[11] = (m) => e.value.defaultRowHeight = m),
                  label: "Standard Zeilenhöhe (px)"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(F, {
                      label: "Standard Zeilenhöhe (px)",
                      "model-value": m,
                      "onUpdate:modelValue": P,
                      type: "number",
                      min: 20,
                      max: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.textSection,
          "onUpdate:modelValue": C[16] || (C[16] = (m) => t.value.textSection = m),
          header: "Text",
          icon: "text_fields"
        }, {
          default: K(() => [
            W("div", qr, [
              W("div", Qr, [
                I(he(fe), {
                  modelValue: e.value.fontSize,
                  "onUpdate:modelValue": C[13] || (C[13] = (m) => e.value.fontSize = m),
                  label: "Schriftgröße (px)"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(F, {
                      label: "Schriftgröße (px)",
                      "model-value": m,
                      "onUpdate:modelValue": P,
                      type: "number",
                      min: 8,
                      max: 32
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                I(he(fe), {
                  modelValue: e.value.headerFontWeight,
                  "onUpdate:modelValue": C[14] || (C[14] = (m) => e.value.headerFontWeight = m),
                  label: "Header Font-Weight"
                }, {
                  default: K(({ value: m, change: P }) => [
                    I(F, {
                      label: "Header Font-Weight",
                      "model-value": m,
                      "onUpdate:modelValue": P,
                      type: "number",
                      min: 100,
                      max: 900,
                      step: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                I(ee, {
                  label: "Text-Ausrichtung (Zellen)",
                  modelValue: e.value.cellTextAlign,
                  "onUpdate:modelValue": C[15] || (C[15] = (m) => e.value.cellTextAlign = m),
                  options: s,
                  "value-by": "value"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.rowLevelsSection,
          "onUpdate:modelValue": C[17] || (C[17] = (m) => t.value.rowLevelsSection = m),
          header: "Zeilen-Level Styles",
          icon: "table_rows"
        }, {
          default: K(() => [
            W("div", Jr, [
              C[26] || (C[26] = W("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern. ", -1)),
              W("div", Zr, [
                C[24] || (C[24] = W("span", null, "Level-Konfiguration", -1)),
                I(d, {
                  size: "small",
                  onClick: n
                }, {
                  default: K(() => [...C[23] || (C[23] = [
                    ke("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (ie(!0), pe(je, null, it(e.value.rowLevelStyles, (m, P) => (ie(), pe("div", {
                key: `row_level_${P}`,
                class: "level-card"
              }, [
                W("div", ei, [
                  W("strong", null, "Level " + nt(m.level), 1),
                  I(d, {
                    size: "small",
                    color: "danger",
                    onClick: (T) => l(P)
                  }, {
                    default: K(() => [...C[25] || (C[25] = [
                      ke("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                I(F, {
                  label: "Level-Nummer",
                  modelValue: m.level,
                  "onUpdate:modelValue": (T) => m.level = T,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                I(he(fe), {
                  modelValue: m.backgroundColor,
                  "onUpdate:modelValue": (T) => m.backgroundColor = T,
                  label: "Hintergrundfarbe"
                }, {
                  default: K(({ value: T, change: D }) => [
                    I(X, {
                      label: "Hintergrundfarbe",
                      "model-value": T,
                      onInput: D
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                I(he(fe), {
                  modelValue: m.textColor,
                  "onUpdate:modelValue": (T) => m.textColor = T,
                  label: "Textfarbe"
                }, {
                  default: K(({ value: T, change: D }) => [
                    I(X, {
                      label: "Textfarbe",
                      "model-value": T,
                      onInput: D
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                I(F, {
                  label: "Font-Weight",
                  modelValue: m.fontWeight,
                  "onUpdate:modelValue": (T) => m.fontWeight = T,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.rowLevelStyles?.length ? Le("", !0) : (ie(), pe("div", ti, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.columnLevelsSection,
          "onUpdate:modelValue": C[18] || (C[18] = (m) => t.value.columnLevelsSection = m),
          header: "Spalten-Level Styles",
          icon: "view_column"
        }, {
          default: K(() => [
            W("div", si, [
              C[30] || (C[30] = W("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern. ", -1)),
              W("div", ri, [
                C[28] || (C[28] = W("span", null, "Level-Konfiguration", -1)),
                I(d, {
                  size: "small",
                  onClick: u
                }, {
                  default: K(() => [...C[27] || (C[27] = [
                    ke("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (ie(!0), pe(je, null, it(e.value.columnLevelStyles, (m, P) => (ie(), pe("div", {
                key: `col_level_${P}`,
                class: "level-card"
              }, [
                W("div", ii, [
                  W("strong", null, "Level " + nt(m.level), 1),
                  I(d, {
                    size: "small",
                    color: "danger",
                    onClick: (T) => c(P)
                  }, {
                    default: K(() => [...C[29] || (C[29] = [
                      ke("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                I(F, {
                  label: "Level-Nummer",
                  modelValue: m.level,
                  "onUpdate:modelValue": (T) => m.level = T,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                I(he(fe), {
                  modelValue: m.backgroundColor,
                  "onUpdate:modelValue": (T) => m.backgroundColor = T,
                  label: "Hintergrundfarbe"
                }, {
                  default: K(({ value: T, change: D }) => [
                    I(X, {
                      label: "Hintergrundfarbe",
                      "model-value": T,
                      onInput: D
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                I(he(fe), {
                  modelValue: m.textColor,
                  "onUpdate:modelValue": (T) => m.textColor = T,
                  label: "Textfarbe"
                }, {
                  default: K(({ value: T, change: D }) => [
                    I(X, {
                      label: "Textfarbe",
                      "model-value": T,
                      onInput: D
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                I(F, {
                  label: "Font-Weight",
                  modelValue: m.fontWeight,
                  "onUpdate:modelValue": (T) => m.fontWeight = T,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.columnLevelStyles?.length ? Le("", !0) : (ie(), pe("div", ni, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        I(b, {
          modelValue: t.value.conditionalFormatSection,
          "onUpdate:modelValue": C[19] || (C[19] = (m) => t.value.conditionalFormatSection = m),
          header: "Bedingte Formatierung",
          icon: "format_color_fill"
        }, {
          default: K(() => [
            W("div", ai, [
              C[34] || (C[34] = W("p", { class: "hint-text" }, " Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten. ", -1)),
              W("div", oi, [
                C[32] || (C[32] = W("span", null, "Formatierungsregeln", -1)),
                I(d, {
                  size: "small",
                  onClick: N
                }, {
                  default: K(() => [...C[31] || (C[31] = [
                    ke("Regel hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (ie(!0), pe(je, null, it(e.value.conditionalFormats, (m, P) => (ie(), pe("div", {
                key: m.id,
                class: "level-card"
              }, [
                W("div", li, [
                  W("strong", null, "Regel " + nt(P + 1), 1),
                  I(d, {
                    size: "small",
                    color: "danger",
                    onClick: (T) => O(P)
                  }, {
                    default: K(() => [...C[33] || (C[33] = [
                      ke("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                I(ee, {
                  label: "Bedingungstyp",
                  modelValue: m.conditionType,
                  "onUpdate:modelValue": (T) => m.conditionType = T,
                  options: E,
                  "value-by": "value"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                !Y(m.conditionType) && !G(m.conditionType) ? (ie(), Ke(F, {
                  key: 0,
                  label: R(m.conditionType) ? "Anzahl (N)" : "Wert",
                  modelValue: m.value1,
                  "onUpdate:modelValue": (T) => m.value1 = T,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Le("", !0),
                x(m.conditionType) ? (ie(), Ke(F, {
                  key: 1,
                  label: "Bis Wert",
                  modelValue: m.value2,
                  "onUpdate:modelValue": (T) => m.value2 = T,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Le("", !0),
                Y(m.conditionType) ? (ie(), Ke(F, {
                  key: 2,
                  label: "Text",
                  modelValue: m.value1,
                  "onUpdate:modelValue": (T) => m.value1 = T
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Le("", !0),
                G(m.conditionType) ? (ie(), pe("div", ui, [
                  I(X, {
                    label: "Min-Farbe",
                    modelValue: m.minColor,
                    "onUpdate:modelValue": (T) => m.minColor = T
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  I(X, {
                    label: "Max-Farbe",
                    modelValue: m.maxColor,
                    "onUpdate:modelValue": (T) => m.maxColor = T
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : Le("", !0),
                J(m.conditionType) ? (ie(), pe(je, { key: 4 }, [
                  I(X, {
                    label: "Hintergrundfarbe",
                    modelValue: m.backgroundColor,
                    "onUpdate:modelValue": (T) => m.backgroundColor = T
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  I(X, {
                    label: "Textfarbe",
                    modelValue: m.textColor,
                    "onUpdate:modelValue": (T) => m.textColor = T
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  I(F, {
                    label: "Font-Weight",
                    modelValue: m.fontWeight,
                    "onUpdate:modelValue": (T) => m.fontWeight = T,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 100,
                    max: 900,
                    step: 100
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ], 64)) : Le("", !0),
                I(F, {
                  label: "Priorität (niedriger = höher)",
                  modelValue: m.priority,
                  "onUpdate:modelValue": (T) => m.priority = T,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.conditionalFormats?.length ? Le("", !0) : (ie(), pe("div", ci, ' Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), gi = /* @__PURE__ */ es(hi, [["__scopeId", "data-v-6b0d43bf"]]), di = [
  {
    name: "Row Expanded",
    type: "row_expanded",
    description: "Triggered when a row is expanded in the pivot table",
    payloadType: me
  },
  {
    name: "Row Collapsed",
    type: "row_collapsed",
    description: "Triggered when a row is collapsed in the pivot table",
    payloadType: me
  },
  {
    name: "Column Expanded",
    type: "column_expanded",
    description: "Triggered when a column is expanded in the pivot table",
    payloadType: me
  },
  {
    name: "Column Collapsed",
    type: "column_collapsed",
    description: "Triggered when a column is collapsed in the pivot table",
    payloadType: me
  },
  {
    name: "Row Clicked",
    type: "row_clicked",
    description: "Triggered when a row is clicked in the pivot table",
    payloadType: Ce
  },
  {
    name: "Column Clicked",
    type: "column_clicked",
    description: "Triggered when a column is clicked in the pivot table",
    payloadType: Ce
  },
  {
    name: "Row Right Clicked",
    type: "row_right_clicked",
    description: "Triggered when a row is right-clicked in the pivot table",
    payloadType: Ce
  },
  {
    name: "Column Right Clicked",
    type: "column_right_clicked",
    description: "Triggered when a column is right-clicked in the pivot table",
    payloadType: Ce
  },
  {
    name: "Cell Clicked",
    type: "cell_clicked",
    description: "Triggered when a cell is clicked in the pivot table",
    payloadType: qe
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: qe
  }
];
class fi extends ns {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.PIVOT_TABLE_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eGet(e);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    const s = this.eClass().getFeatureID(e);
    super.eSet(e, t);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eIsSet(e);
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    const t = this.eClass().getFeatureID(e);
    super.eUnset(e);
  }
  expandRow(e) {
    throw new Error("expandRow not implemented");
  }
}
var pi = Object.defineProperty, Ei = Object.getOwnPropertyDescriptor, Et = (h, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ei(e, t) : e, i = h.length - 1, n; i >= 0; i--)
    (n = h[i]) && (r = (s ? n(e, t, r) : n(r)) || r);
  return s && r && pi(e, t, r), r;
}, Bt = (h, e) => (t, s) => e(t, s, h);
const Me = "PivotTableWidget";
let Ze = class {
  constructor(h, e) {
    this.events = h, this.actions = e;
  }
  type = Me;
  component = Wr;
  settingsComponent = gi;
  supportedDSTypes = [];
  icon = Ts;
  name = "PivotTable";
  register() {
    this.events.registerWidget(Me, di), this.actions.registerWidgetType(Me, fi, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Me), this.actions.unregisterWidgetType(Me);
  }
};
Et([
  ls()
], Ze.prototype, "register", 1);
Et([
  us()
], Ze.prototype, "unregister", 1);
Ze = Et([
  cs({
    service: [_s],
    properties: { "widget.type": Me }
  }),
  Bt(0, _t(as)),
  Bt(1, _t(os))
], Ze);
export {
  Wr as PivotTableWidget,
  Ze as PivotTableWidgetProvider,
  gi as PivotTableWidgetSettings
};
