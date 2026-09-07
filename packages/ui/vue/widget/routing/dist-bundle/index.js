(function(){var i="ui.vue.widget.routing",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".routing-widget{display:flex;flex-direction:column;height:100%;padding:.75rem;gap:.75rem;overflow-y:auto;font-family:inherit;font-size:.875rem}.routing-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.routing-title{font-weight:600;font-size:1rem;color:#c45e00}.costing-select{padding:.25rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;background:#fff}.waypoints-list{display:flex;flex-direction:column;gap:.5rem}.waypoint-row{display:flex;align-items:flex-start;gap:.5rem}.waypoint-dot{width:12px;height:12px;border-radius:50%;margin-top:1.4rem;flex-shrink:0}.waypoint-input-wrapper{flex:1;position:relative}.waypoint-label{display:block;font-size:.7rem;color:#888;margin-bottom:2px}.waypoint-input{width:100%;padding:.35rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;box-sizing:border-box}.waypoint-input:focus{outline:none;border-color:#c45e00}.suggestions-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:0 0 4px 4px;z-index:100;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.suggestion-item{padding:.4rem .5rem;cursor:pointer;font-size:.75rem;border-bottom:1px solid #f0f0f0}.suggestion-item:hover{background:#fff3e0}.remove-btn{background:none;border:none;color:#999;font-size:1.2rem;cursor:pointer;padding:.2rem;margin-top:1.2rem;line-height:1}.remove-btn:hover{color:#f44336}.routing-actions{display:flex;gap:.5rem;flex-wrap:wrap}.btn-primary{padding:.4rem .75rem;background:#c45e00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.8rem;font-weight:500}.btn-primary:hover{background:#a04e00}.btn-primary:disabled{background:#ccc;cursor:not-allowed}.btn-secondary{padding:.4rem .75rem;background:#fff;color:#555;border:1px solid #ddd;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-secondary:hover{background:#f5f5f5}.btn-clear{padding:.4rem .75rem;background:#fff;color:#f44336;border:1px solid #ffcdd2;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-clear:hover{background:#ffebee}.route-result{border-top:1px solid #e0e0e0;padding-top:.75rem}.result-summary{display:flex;gap:1rem;flex-wrap:wrap}.summary-item{display:flex;flex-direction:column}.summary-value{font-weight:600;font-size:1rem;color:#333}.summary-label{font-size:.7rem;color:#888}.maneuvers-section{margin-top:.75rem}.maneuvers-toggle{background:none;border:none;cursor:pointer;font-size:.8rem;color:#555;padding:.25rem 0;font-weight:500}.maneuvers-toggle:hover{color:#c45e00}.maneuvers-list{margin-top:.5rem;display:flex;flex-direction:column;gap:.25rem}.maneuver-item{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;padding:.3rem 0;border-bottom:1px solid #f5f5f5;font-size:.75rem}.maneuver-instruction{flex:1;color:#333}.maneuver-distance{color:#888;white-space:nowrap}.routing-settings[data-v-79a5860e]{display:flex;flex-direction:column;gap:.75rem;padding:.5rem}\n";})();
import { PayloadImpl as zi, WidgetActionInterfaceImpl as Wm, EVENT_ACTIONS_REGISTRY as $m, EVENT_REGISTRY_ID as jm } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ym, deactivate as Xm, component as qm, inject as zm } from "@eclipse-daanse/tsm";
import { defineComponent as Yo, toRefs as Xo, inject as Mi, ref as Qt, watch as hs, computed as Ui, onMounted as Km, onUnmounted as Hm, createElementBlock as ot, openBlock as lt, createElementVNode as Ce, createCommentVNode as jn, withDirectives as wo, Fragment as ur, renderList as or, toDisplayString as It, vModelSelect as Jm, normalizeStyle as Qm, vModelText as Zm, withModifiers as Vm, resolveComponent as eE, unref as ki, createVNode as tE } from "vue";
import { useRoute as nE } from "vue-router";
import { useDatasourceRepository as sE } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { SET_WAYPOINTS as iE } from "org.eclipse.daanse.board.app.lib.datasource.valhalla";
import { WIDGET_SERVICE_ID as aE } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: rE } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), uE = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='6'%20cy='19'%20r='3'/%3e%3ccircle%20cx='18'%20cy='5'%20r='3'/%3e%3cpath%20d='M12%2019h4.5a3.5%203.5%200%200%200%200-7h-9a3.5%203.5%200%200%201%200-7H12'/%3e%3c/svg%3e";
function ln(y) {
  return y && typeof y.eProxyURI == "function" && typeof y.eSetProxyURI == "function";
}
const le = {
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
}, Ki = -1, oE = -1;
class ds {
  constructor(t, n, i, a, o, c = Ki, d = !0) {
    this.notifier = t, this.eventType = n, this.feature = i, this.featureID = oE, this.oldValue = a, this.newValue = o, this.position = c, this.wasSetFlag = d;
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
      case le.RESOLVE:
      case le.REMOVING_ADAPTER:
        return !0;
      case le.ADD:
      case le.ADD_MANY:
      case le.REMOVE:
      case le.REMOVE_MANY:
      case le.MOVE:
        return !1;
      case le.SET:
      case le.UNSET:
        return this.oldValue === this.newValue ? !0 : this.oldValue === null || this.newValue === null ? !1 : this.oldValue === this.newValue;
      default:
        return !1;
    }
  }
  isReset() {
    if (this.feature) {
      const t = this.feature.getDefaultValue();
      return this.newValue === t;
    }
    return !1;
  }
  getPosition() {
    return this.position;
  }
  merge(t) {
    return !1;
  }
  toString() {
    const t = {
      [le.SET]: "SET",
      [le.UNSET]: "UNSET",
      [le.ADD]: "ADD",
      [le.REMOVE]: "REMOVE",
      [le.ADD_MANY]: "ADD_MANY",
      [le.REMOVE_MANY]: "REMOVE_MANY",
      [le.MOVE]: "MOVE",
      [le.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [le.RESOLVE]: "RESOLVE"
    }, n = this.feature?.getName() || "unknown";
    return `Notification(${t[this.eventType]}, feature=${n}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const Gi = /^(?:0|[1-9]\d*)$/, qo = Symbol.for("emfts.indexedList"), zo = {
  get(y, t, n) {
    if (t === qo)
      return !0;
    if (typeof t == "string" && Gi.test(t)) {
      const i = Number(t), a = y.data;
      return a !== void 0 ? a[i] : i < y.size() ? y.get(i) : void 0;
    }
    return Reflect.get(y, t, n);
  },
  set(y, t, n, i) {
    if (t === "length") {
      const a = typeof n == "number" ? n : parseInt(n, 10);
      if (isNaN(a) || a < 0)
        throw new RangeError(`Invalid list length: ${String(n)}`);
      if (a === 0)
        y.clear();
      else
        for (; y.size() > a; )
          y.removeAt(y.size() - 1);
      return !0;
    }
    if (typeof t == "string" && Gi.test(t)) {
      const a = Number(t), o = y.size();
      if (a < o)
        y.set(a, n);
      else if (a === o)
        y.add(n);
      else
        throw new RangeError(`Index ${a} out of bounds for list of size ${o}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(y, t, n, i);
  },
  has(y, t) {
    return typeof t == "string" && Gi.test(t) ? Number(t) < y.size() : Reflect.has(y, t);
  }
};
class hn {
  constructor(t = null, n = null) {
    return this.data = [], this.owner = t, this.feature = n, new Proxy(this, zo);
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
  push(...t) {
    return t.length === 0 ? this.data.length : (t.length === 1 ? this.add(t[0]) : this.addAll(t), this.data.length);
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
  unshift(...t) {
    return t.length === 0 ? this.data.length : (t.length === 1 ? this.addAt(0, t[0]) : this.addAllAt(0, t), this.data.length);
  }
  /**
   * Array-compatible splice method.
   * Removes elements and/or inserts new elements.
   * Sends appropriate notifications.
   */
  splice(t, n, ...i) {
    const a = t < 0 ? Math.max(this.data.length + t, 0) : Math.min(t, this.data.length), o = n === void 0 ? this.data.length - a : Math.min(Math.max(n, 0), this.data.length - a), c = [];
    for (let d = 0; d < o; d++)
      a < this.data.length && c.push(this.removeAt(a));
    for (let d = 0; d < i.length; d++)
      this.addAt(a + d, i[d]);
    return c;
  }
  /**
   * Array-compatible forEach method.
   */
  forEach(t, n) {
    this.data.forEach((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible map method.
   */
  map(t, n) {
    return this.data.map((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible filter method.
   */
  filter(t, n) {
    return this.data.filter((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible find method.
   */
  find(t, n) {
    return this.data.find((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible findIndex method.
   */
  findIndex(t, n) {
    return this.data.findIndex((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible some method.
   */
  some(t, n) {
    return this.data.some((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible every method.
   */
  every(t, n) {
    return this.data.every((i, a) => t.call(n, i, a, this.data));
  }
  /**
   * Array-compatible reduce method.
   */
  reduce(t, n) {
    return this.data.reduce((i, a, o) => t(i, a, o, this.data), n);
  }
  /**
   * Array-compatible includes method.
   */
  includes(t) {
    return this.contains(t);
  }
  /**
   * Array-compatible slice method. Returns a shallow copy.
   */
  slice(t, n) {
    return this.data.slice(t, n);
  }
  /**
   * Array-compatible concat method. Returns a new array, list is unchanged.
   * Accepts single values, arrays and other ELists as arguments.
   */
  concat(...t) {
    const n = [...this.data];
    for (const i of t)
      Array.isArray(i) ? n.push(...i) : i instanceof hn ? n.push(...i.data) : n.push(i);
    return n;
  }
  /**
   * Array-compatible sort method. Sorts in place and returns the list.
   *
   * The reordering is applied through move(), so each relocated element emits a
   * MOVE notification. This mirrors ECollections.sort() in Java EMF rather than
   * silently rewriting the backing array.
   */
  sort(t) {
    return this.reorderTo([...this.data].sort(t)), this;
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
  reorderTo(t) {
    for (let n = 0; n < t.length; n++) {
      if (this.data[n] === t[n])
        continue;
      const i = this.data.indexOf(t[n], n);
      i > n && this.move(n, i);
    }
  }
  /**
   * Array-compatible join method.
   */
  join(t) {
    return this.data.join(t);
  }
  /**
   * Array-compatible at method. Negative indices count from the end.
   * Implemented directly rather than via Array.prototype.at, which the ES2020
   * target of this project does not provide.
   */
  at(t) {
    const n = t < 0 ? this.data.length + t : t;
    return n >= 0 && n < this.data.length ? this.data[n] : void 0;
  }
  /**
   * Array-compatible lastIndexOf method.
   */
  lastIndexOf(t) {
    return this.data.lastIndexOf(t);
  }
  /**
   * Array-compatible flatMap method.
   */
  flatMap(t, n) {
    return this.data.flatMap((i, a) => t.call(n, i, a, this.data));
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
  contains(t) {
    return this.data.indexOf(t) !== -1;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  get(t) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    return this.data[t];
  }
  set(t, n) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    const i = this.data[t];
    return i === n || (this.data[t] = n, this.didSet(t, n, i)), i;
  }
  add(t) {
    const n = this.data.length;
    return this.data.push(t), this.didAdd(n, t), !0;
  }
  addAt(t, n) {
    if (t < 0 || t > this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    this.data.splice(t, 0, n), this.didAdd(t, n);
  }
  addAll(t) {
    if (t.length === 0)
      return !1;
    const n = this.data.length;
    return this.data.push(...t), this.didAddMany(n, t), !0;
  }
  addAllAt(t, n) {
    if (n.length === 0)
      return !1;
    if (t < 0 || t > this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    return this.data.splice(t, 0, ...n), this.didAddMany(t, n), !0;
  }
  remove(t) {
    const n = this.data.indexOf(t);
    return n === -1 ? !1 : (this.removeAt(n), !0);
  }
  removeAt(t) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    const n = this.data.splice(t, 1)[0];
    return this.didRemove(t, n), n;
  }
  clear() {
    if (this.data.length === 0)
      return;
    const t = [...this.data];
    this.data.length = 0, this.didClear(t);
  }
  move(t, n) {
    if (n < 0 || n >= this.data.length)
      throw new RangeError(`fromIndex ${n} out of bounds for list of size ${this.data.length}`);
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`toIndex ${t} out of bounds for list of size ${this.data.length}`);
    const i = this.data[n];
    return n === t || (this.data.splice(n, 1), this.data.splice(t, 0, i), this.didMove(t, i, n)), i;
  }
  toArray() {
    return [...this.data];
  }
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  // ===== Notification hooks =====
  didAdd(t, n) {
    this.dispatchNotification(le.ADD, null, n, t);
  }
  didAddMany(t, n) {
    this.dispatchNotification(le.ADD_MANY, null, n, t);
  }
  didRemove(t, n) {
    this.dispatchNotification(le.REMOVE, n, null, t);
  }
  didClear(t) {
    t.length === 1 ? this.dispatchNotification(le.REMOVE, t[0], null, 0) : this.dispatchNotification(le.REMOVE_MANY, t, null, Ki);
  }
  didSet(t, n, i) {
    this.dispatchNotification(le.SET, i, n, t);
  }
  didMove(t, n, i) {
    this.dispatchNotification(le.MOVE, i, n, t);
  }
  dispatchNotification(t, n, i, a) {
    const o = this.getFeature();
    if (!this.owner || !o || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const d = this.owner.eAdapters();
      if (!d || d.length === 0)
        return;
    } else
      return;
    const c = new ds(this.owner, t, o, n, i, a);
    "eNotify" in this.owner && this.owner.eNotify(c);
  }
}
class Hi extends hn {
  constructor(t, n) {
    super(t, n);
  }
  didAdd(t, n) {
    this.setContainer(n), super.didAdd(t, n);
  }
  didAddMany(t, n) {
    for (const i of n)
      this.setContainer(i);
    super.didAddMany(t, n);
  }
  didRemove(t, n) {
    this.unsetContainer(n), super.didRemove(t, n);
  }
  didClear(t) {
    for (const n of t)
      this.unsetContainer(n);
    super.didClear(t);
  }
  didSet(t, n, i) {
    this.unsetContainer(i), this.setContainer(n), super.didSet(t, n, i);
  }
  add(t) {
    return this.removeFromOldContainer(t), super.add(t);
  }
  addAt(t, n) {
    this.removeFromOldContainer(n), super.addAt(t, n);
  }
  addAll(t) {
    for (const n of t)
      this.removeFromOldContainer(n);
    return super.addAll(t);
  }
  addAllAt(t, n) {
    for (const i of n)
      this.removeFromOldContainer(i);
    return super.addAllAt(t, n);
  }
  set(t, n) {
    return this.removeFromOldContainer(n), super.set(t, n);
  }
  setContainer(t) {
    const n = this.getFeature();
    t && "eSetContainer" in t && this.owner && t.eSetContainer(this.owner, n);
  }
  unsetContainer(t) {
    t && "eSetContainer" in t && t.eSetContainer(null, null);
  }
  removeFromOldContainer(t) {
    const n = t.eContainer();
    if (n && n !== this.owner) {
      const i = t.eContainmentFeature();
      if (i && i.isMany()) {
        const a = n.eGet(i);
        if (a && "remove" in a)
          a.remove(t);
        else if (Array.isArray(a)) {
          const o = a.indexOf(t);
          o >= 0 && a.splice(o, 1);
        }
      }
    }
  }
}
class lE extends Hi {
  constructor(t, n, i) {
    super(t, null), this.resolvedFeature = void 0, this.featureResolver = n, this.inverseSetter = i;
  }
  getFeature() {
    return this.resolvedFeature === void 0 && (this.resolvedFeature = this.featureResolver()), this.resolvedFeature;
  }
  didAdd(t, n) {
    this.inverseSetter(n, this.owner), super.didAdd(t, n);
  }
  didAddMany(t, n) {
    for (const i of n)
      this.inverseSetter(i, this.owner);
    super.didAddMany(t, n);
  }
  didRemove(t, n) {
    this.inverseSetter(n, null), super.didRemove(t, n);
  }
  didClear(t) {
    for (const n of t)
      this.inverseSetter(n, null);
    super.didClear(t);
  }
  didSet(t, n, i) {
    this.inverseSetter(i, null), this.inverseSetter(n, this.owner), super.didSet(t, n, i);
  }
}
class cE extends hn {
  constructor(t, n) {
    super(t, n);
  }
  get(t) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`Index ${t} out of bounds for list of size ${this.data.length}`);
    let n = this.data[t];
    if (n && ln(n) && n.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
      const i = this.owner.eResolveProxy(n);
      i !== n && (this.data[t] = i, n = i);
    }
    return n;
  }
  [Symbol.iterator]() {
    const t = this;
    let n = 0;
    return {
      next() {
        return n >= t.data.length ? { done: !0, value: void 0 } : { done: !1, value: t.get(n++) };
      }
    };
  }
}
function Qe(y) {
  return y && typeof y.add == "function" && typeof y.size == "function" && typeof y.get == "function";
}
function cn(y) {
  return y[qo] ? y : new Proxy(y, zo);
}
function hE(y, t) {
  return cn(new Hi(y, t));
}
function fE(y, t) {
  return cn(new cE(y, t));
}
function gE(y, t) {
  return cn(new hn(y, t));
}
class pE extends hn {
  constructor(t) {
    super(null, null), this.resource = t;
  }
  didAdd(t, n) {
    this.setResource(n), this.dispatchResourceNotification(le.ADD, null, n, t);
  }
  didAddMany(t, n) {
    for (const i of n)
      this.setResource(i);
    this.dispatchResourceNotification(le.ADD_MANY, null, n, t);
  }
  didRemove(t, n) {
    this.unsetResource(n), this.dispatchResourceNotification(le.REMOVE, n, null, t);
  }
  didClear(t) {
    for (const n of t)
      this.unsetResource(n);
    t.length === 1 ? this.dispatchResourceNotification(le.REMOVE, t[0], null, 0) : t.length > 1 && this.dispatchResourceNotification(le.REMOVE_MANY, t, null, Ki);
  }
  didSet(t, n, i) {
    this.unsetResource(i), this.setResource(n), this.dispatchResourceNotification(le.SET, i, n, t);
  }
  setResource(t) {
    t && "eSetResource" in t && t.eSetResource(this.resource);
  }
  unsetResource(t) {
    t && "eSetResource" in t && t.eSetResource(null);
  }
  /**
   * Dispatch notification to the Resource (which is a Notifier).
   * Uses a synthetic 'contents' feature for the notification.
   */
  dispatchResourceNotification(t, n, i, a) {
    if (!this.resource || "eDeliver" in this.resource && !this.resource.eDeliver())
      return;
    if ("eAdapters" in this.resource) {
      const d = this.resource.eAdapters();
      if (!d || d.length === 0)
        return;
    } else
      return;
    const o = { getName: () => "contents" }, c = new ds(this.resource, t, o, n, i, a);
    "eNotify" in this.resource && this.resource.eNotify(c);
  }
}
function dE(y) {
  return cn(new pE(y));
}
var Pt;
(function(y) {
  y.INSTANCE = EE();
})(Pt || (Pt = {}));
function Ko(y, t) {
  for (const n of t.getESubpackages()) {
    const i = n.getNsURI();
    i && y.set(i, n), Ko(y, n);
  }
}
function mE(y) {
  const t = y.getNsURI();
  if (!t)
    throw new Error(`Cannot register package '${y.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return t;
}
function EE() {
  const y = /* @__PURE__ */ new Map();
  return {
    getEPackage(t) {
      const n = y.get(t);
      return n ? "getEPackage" in n ? n.getEPackage() : n : null;
    },
    getEFactory(t) {
      const n = y.get(t);
      return n ? "getEFactory" in n ? n.getEFactory() : n.getEFactoryInstance() : null;
    },
    get(t) {
      return y.get(t) || null;
    },
    set(t, n) {
      y.set(t, n), "getEPackage" in n || Ko(y, n);
    },
    registerPackage(t) {
      this.set(mE(t), t);
    },
    delete(t) {
      return y.delete(t);
    },
    has(t) {
      return y.has(t);
    },
    keys() {
      return y.keys();
    },
    values() {
      return y.values();
    }
  };
}
class ne {
  constructor(t, n, i, a, o) {
    this._scheme = t, this._authority = n, this._path = i, this._query = a, this._fragment = o;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(t) {
    if (!t)
      return new ne(null, null, "", null, null);
    let n = null, i = null, a = null, o = null, c = null, d = 0;
    t.length;
    const _ = t.indexOf("#");
    _ >= 0 && (c = t.substring(_ + 1), t = t.substring(0, _));
    const T = t.indexOf("?");
    T >= 0 && (o = t.substring(T + 1), t = t.substring(0, T));
    const x = t.indexOf(":");
    if (x > 0) {
      let v = !0;
      for (let R = 0; R < x; R++)
        if (t.charAt(R) === "/") {
          v = !1;
          break;
        }
      v && (n = t.substring(0, x), d = x + 1);
    }
    if (t.startsWith("//", d)) {
      const v = d + 2;
      let R = v;
      for (; R < t.length && t.charAt(R) !== "/"; )
        R++;
      i = t.substring(v, R), d = R;
    }
    return d < t.length ? a = t.substring(d) : i !== null && (a = ""), new ne(n, i, a, o, c);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(t) {
    return new ne("file", null, t, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(t, n = !0) {
    return new ne("platform", null, "/resource" + t, null, null);
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
    let t = this._authority;
    const n = t.indexOf("@");
    n >= 0 && (t = t.substring(n + 1));
    const i = t.lastIndexOf(":");
    return i >= 0 && (t = t.substring(0, i)), t;
  }
  /**
   * Returns the port part of the authority, or null.
   */
  port() {
    if (!this._authority)
      return null;
    let t = this._authority;
    const n = t.indexOf("@");
    n >= 0 && (t = t.substring(n + 1));
    const i = t.lastIndexOf(":");
    return i >= 0 ? t.substring(i + 1) : null;
  }
  /**
   * Returns the userinfo part of the authority, or null.
   */
  userInfo() {
    if (!this._authority)
      return null;
    const t = this._authority.indexOf("@");
    return t >= 0 ? this._authority.substring(0, t) : null;
  }
  /**
   * Returns the file extension, or null.
   */
  fileExtension() {
    if (!this._path)
      return null;
    const t = this._path.lastIndexOf("."), n = this._path.lastIndexOf("/");
    return t > n && t > 0 ? this._path.substring(t + 1) : null;
  }
  /**
   * Returns a new URI with the given fragment.
   */
  appendFragment(t) {
    return new ne(this._scheme, this._authority, this._path, this._query, t);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(t) {
    let n = this._path || "";
    return !n && this._authority && (n = "/"), n && !n.endsWith("/") && (n += "/"), n += t, new ne(this._scheme, this._authority, n, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(t) {
    if (!this._path || t <= 0)
      return this;
    const n = this._path.split("/").filter((o) => o.length > 0), i = n.slice(0, Math.max(0, n.length - t));
    let a = this._path.startsWith("/") ? "/" : "";
    return a += i.join("/"), this._path.endsWith("/") && a.length > 0 && (a += "/"), new ne(this._scheme, this._authority, a, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new ne(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new ne(this._scheme, this._authority, this._path, this._query, null);
  }
  /**
   * Resolves this URI against a base URI (RFC 3986 with EMF modifications).
   */
  resolve(t) {
    if (this._scheme !== null)
      return this;
    let n = t._scheme, i = this._authority, a = this._path, o = this._query;
    if (i !== null)
      a = this.removeDotSegments(a || "");
    else if (i = t._authority, !a || a === "") {
      if (this._query !== null) {
        if (a = t._path, a) {
          const c = a.lastIndexOf("/");
          c >= 0 && (a = a.substring(0, c + 1));
        }
      } else
        a = t._path;
      o = this._query !== null ? this._query : t._query;
    } else
      a.startsWith("/") || (a = this.mergePaths(t._path, a), a = this.removeDotSegments(a));
    return new ne(n, i, a, o, this._fragment);
  }
  /**
   * Deresolves this URI against a base URI.
   */
  deresolve(t) {
    if (this._scheme !== t._scheme)
      return this;
    if (this._authority === null != (t._authority === null))
      return this;
    if (this._authority !== null && t._authority !== null && this._authority !== t._authority)
      return new ne(null, this._authority, this._path, this._query, this._fragment);
    const n = this._path || "", i = t._path || "";
    if (n === i)
      return this._query === t._query ? new ne(null, null, null, null, this._fragment) : new ne(null, null, "", this._query, this._fragment);
    const a = n.split("/"), o = i.split("/");
    let c = 0;
    const d = Math.min(a.length, o.length);
    for (let R = 0; R < d - 1 && a[R] === o[R]; R++)
      c++;
    const _ = o.length - c - 1, T = n.includes("/./") || n.includes("/../") || n.endsWith("/.") || n.endsWith("/..");
    if (n.startsWith("/") && (_ >= 3 || T && _ > 0))
      return new ne(null, null, n, this._query, this._fragment);
    const x = [];
    for (let R = 0; R < _; R++)
      x.push("..");
    for (let R = c; R < a.length; R++)
      x.push(a[R]);
    let v = x.join("/");
    return v === "" && n.endsWith("/") && (v = "./"), new ne(null, null, v, this._query, this._fragment);
  }
  /**
   * Merges a relative path with a base path.
   */
  mergePaths(t, n) {
    if (!t)
      return "/" + n;
    const i = t.lastIndexOf("/");
    return i >= 0 ? t.substring(0, i + 1) + n : n;
  }
  /**
   * Removes dot segments from a path (RFC 3986).
   */
  removeDotSegments(t) {
    const n = [], i = t.split("/"), a = i.length > 0 && (i[i.length - 1] === "." || i[i.length - 1] === "..");
    for (let o = 0; o < i.length; o++) {
      const c = i[o];
      c === ".." ? n.length > 0 && n[n.length - 1] !== "" && n.pop() : c !== "." && !(c === "" && o > 0 && o < i.length - 1) && n.push(c);
    }
    return a && n.length > 0 && n.push(""), n.join("/");
  }
  /**
   * Returns the string representation.
   */
  toString() {
    let t = "";
    return this._scheme && (t += this._scheme + ":"), this._authority && (t += "//" + this._authority), this._path && (t += this._path), this._query && (t += "?" + this._query), this._fragment && (t += "#" + this._fragment), t;
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
function _E(y) {
  return "unsetTarget" in y && typeof y.unsetTarget == "function";
}
class bt {
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
  eSetResource(t) {
    this._eResource = t;
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
  eSetContainer(t, n) {
    this._eContainer = t, this._eContainerFeature = n;
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
    const t = [], i = this.eClass().getEAllContainments();
    for (const a of i) {
      const o = this.eGet(a);
      if (o)
        if (Array.isArray(o) || Qe(o))
          for (const c of o)
            t.push(c);
        else
          t.push(o);
    }
    return t;
  }
  /**
   * Returns an iterator over all contents
   */
  eAllContents() {
    const t = this.eContents(), n = [...t];
    for (const i of t) {
      const a = i.eAllContents();
      let o = a.next();
      for (; !o.done; )
        n.push(o.value), o = a.next();
    }
    return n[Symbol.iterator]();
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
  eSetProxyURI(t) {
    this._eProxyURI = t;
  }
  /**
   * Resolves a proxy to the actual object
   */
  eResolveProxy(t) {
    const n = t.eProxyURI();
    if (!n)
      return t;
    const i = this.eResource();
    if (!i)
      return t;
    const a = i.getResourceSet();
    if (!a)
      return t;
    const o = n.toString(), c = o.indexOf("#");
    if (c > 0) {
      const d = o.substring(0, c), _ = o.substring(c + 1);
      let T;
      const x = i.getURI();
      x && !d.includes("://") ? T = x.resolve(ne.createURI(d)) : T = ne.createURI(d);
      const v = a.getResource(T, !0);
      if (v) {
        const Y = v.getEObject(_);
        if (Y)
          return Y;
      }
      const R = a.getPackageRegistry(), M = this.resolveFragmentViaPackageRegistry(R, d, _, a);
      if (M)
        return M;
    } else if (c === 0) {
      const d = o.substring(1), _ = i.getEObject(d);
      if (_)
        return _;
    } else {
      const d = i.getEObject(o);
      if (d)
        return d;
    }
    return t;
  }
  /**
   * Resolve a fragment via the package registry.
   * When a proxy like foaf.ecore#//Agent can't be resolved through the resource
   * (e.g., because the resource is empty after package registration), try to
   * find the correct package in the registry.
   */
  resolveFragmentViaPackageRegistry(t, n, i, a) {
    const o = t.getEPackage(n);
    if (o) {
      const T = this.resolveFragmentInPackage(o, i);
      if (T)
        return T;
    }
    let c = n;
    const d = c.lastIndexOf("/");
    d >= 0 && (c = c.substring(d + 1));
    const _ = c.indexOf(".");
    if (_ > 0 && (c = c.substring(0, _)), c)
      for (const T of t.keys()) {
        const x = t.getEPackage(T);
        if (x && x.getName() === c) {
          const v = this.resolveFragmentInPackage(x, i);
          if (v)
            return v;
        }
      }
    return null;
  }
  /**
   * Resolve a fragment path (e.g., //Agent or //sub/Agent) within an EPackage.
   */
  resolveFragmentInPackage(t, n) {
    let i = n;
    for (; i.startsWith("/"); )
      i = i.substring(1);
    if (!i)
      return null;
    const a = i.split("/");
    let o = t;
    for (let _ = 0; _ < a.length - 1; _++) {
      const T = o.getESubpackages();
      let x = null;
      for (let v = 0; v < T.length; v++)
        if (T.get(v).getName() === a[_]) {
          x = T.get(v);
          break;
        }
      if (!x)
        return null;
      o = x;
    }
    const c = a[a.length - 1];
    return o.getEClassifier(c) ?? null;
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
  eBasicSetContainer(t, n) {
    this._eContainer = t;
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
  eSetDeliver(t) {
    this._eDeliver = t;
  }
  /**
   * Notifies a change to a feature of this notifier as described by the notification.
   */
  eNotify(t) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const n of this._eAdapters)
        n.notifyChanged(t);
  }
  /**
   * Adds an adapter to this notifier.
   */
  eAdapterAdd(t) {
    this._eAdapters.push(t), t.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   */
  eAdapterRemove(t) {
    const n = this._eAdapters.indexOf(t);
    if (n !== -1) {
      if (this._eDeliver) {
        const i = new ds(this, le.REMOVING_ADAPTER, null, t, null);
        t.notifyChanged(i);
      }
      return this._eAdapters.splice(n, 1), _E(t) ? t.unsetTarget(this) : t.setTarget(null), !0;
    }
    return !1;
  }
  // ===== End Notifier interface =====
  /**
   * Returns all cross references
   */
  eCrossReferences() {
    const t = [], i = this.eClass().getEAllReferences();
    for (const a of i)
      if (!a.isContainment()) {
        const o = this.eGet(a);
        if (o)
          if (Array.isArray(o) || Qe(o))
            for (const c of o)
              t.push(c);
          else
            t.push(o);
      }
    return t;
  }
  /**
   * Reflective get (default implementation)
   */
  eGet(t) {
    const n = t.getName() || "";
    return this.eSettings.get(n);
  }
  /**
   * Reflective set (default implementation)
   */
  eSet(t, n) {
    const i = t.getName() || "", a = this.eSettings.get(i);
    if (this.eSettings.set(i, n), t instanceof Object && "isContainment" in t) {
      const o = t;
      if (o.isContainment() && (a && typeof a == "object" && "eSetContainer" in a && a.eSetContainer(null, null), n && typeof n == "object" && "eSetContainer" in n))
        if (Array.isArray(n))
          for (const c of n)
            c && "eSetContainer" in c && c.eSetContainer(this, o);
        else
          n.eSetContainer(this, o);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const o = new ds(this, le.SET, t, a, n);
      this.eNotify(o);
    }
  }
  /**
   * Reflective isSet
   */
  eIsSet(t) {
    const n = t.getName() || "";
    return this.eSettings.has(n);
  }
  /**
   * Reflective unset
   */
  eUnset(t) {
    const n = t.getName() || "", i = this.eSettings.get(n);
    if (this.eSettings.delete(n), t instanceof Object && "isContainment" in t && t.isContainment() && i)
      if (Array.isArray(i))
        for (const o of i)
          o && "eSetContainer" in o && o.eSetContainer(null, null);
      else typeof i == "object" && "eSetContainer" in i && i.eSetContainer(null, null);
    if (this._eDeliver && this._eAdapters.length > 0) {
      const a = new ds(this, le.UNSET, t, i, t.getDefaultValue());
      this.eNotify(a);
    }
  }
  /**
   * Invoke operation
   */
  eInvoke(t, n) {
    throw new Error(`Operation ${t.getName()} not implemented`);
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
  eFeature(t) {
    return this.eClass().getEStructuralFeature(t);
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
class Ho extends bt {
  constructor(t) {
    super(), this._eClass = t;
  }
  eClass() {
    return this._eClass;
  }
  /**
   * Override eGet to handle dynamic features and proxy resolution.
   * Returns EList for multi-valued features.
   */
  eGet(t) {
    const n = t.getName() || "";
    if (this.eSettings.has(n)) {
      let a = this.eSettings.get(n);
      if (!t.isMany() && a && ln(a) && a.eIsProxy()) {
        const o = this.eResolveProxy(a);
        if (o !== a)
          return this.eSettings.set(n, o), o;
      }
      return a;
    }
    if (t.isMany()) {
      let a;
      if ("isContainment" in t) {
        const o = t;
        o.isContainment() ? a = hE(this, o) : a = fE(this, o);
      } else
        a = gE(this, t);
      return this.eSettings.set(n, a), a;
    }
    const i = t.getDefaultValue();
    return i !== void 0 ? i : null;
  }
}
class yE extends Hi {
  constructor(t, n, i) {
    super(t, n), this.eMap = i;
  }
  didAdd(t, n) {
    super.didAdd(t, n), this.eMap.entryAdded(n);
  }
  didAddMany(t, n) {
    super.didAddMany(t, n);
    for (const i of n)
      this.eMap.entryAdded(i);
  }
  didRemove(t, n) {
    super.didRemove(t, n), this.eMap.entryRemoved(n);
  }
  didClear(t) {
    super.didClear(t), this.eMap.entriesCleared();
  }
  didSet(t, n, i) {
    super.didSet(t, n, i), this.eMap.entryRemoved(i), this.eMap.entryAdded(n);
  }
}
class TE {
  constructor(t, n, i) {
    this.mapIndex = null, this._owner = t, this.entryEClass = i, this.delegateList = new yE(t, n, this);
    const a = i.getEStructuralFeature("key"), o = i.getEStructuralFeature("value");
    if (!a || !o)
      throw new Error(`Entry EClass '${i.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = a, this.valueFeature = o, cn(this);
  }
  /**
   * Rebuild map index from the delegate list contents.
   * Entries may have been added before their key/value were set (e.g. by XMI loader),
   * so we rebuild on every map-method access.
   */
  ensureIndex() {
    this.mapIndex === null && (this.mapIndex = /* @__PURE__ */ new Map()), this.mapIndex.clear();
    for (let t = 0; t < this.delegateList.size(); t++) {
      const n = this.delegateList.get(t), i = n.eGet(this.keyFeature);
      i != null && this.mapIndex.set(i, n);
    }
    return this.mapIndex;
  }
  // ===== Map methods =====
  getByKey(t) {
    const i = this.ensureIndex().get(t);
    if (i)
      return i.eGet(this.valueFeature);
  }
  putByKey(t, n) {
    const a = this.ensureIndex().get(t);
    if (a) {
      const d = a.eGet(this.valueFeature);
      return a.eSet(this.valueFeature, n), d;
    }
    const o = this.entryEClass.getEPackage();
    let c;
    o && o.getEFactoryInstance() ? c = o.getEFactoryInstance().create(this.entryEClass) : c = new Ho(this.entryEClass), c.eSet(this.keyFeature, t), c.eSet(this.valueFeature, n), this.delegateList.add(c);
  }
  removeByKey(t) {
    const i = this.ensureIndex().get(t);
    if (!i)
      return;
    const a = i.eGet(this.valueFeature);
    return this.delegateList.remove(i), a;
  }
  containsKey(t) {
    return this.ensureIndex().has(t);
  }
  containsValue(t) {
    for (const n of this.ensureIndex().values())
      if (n.eGet(this.valueFeature) === t)
        return !0;
    return !1;
  }
  keys() {
    return Array.from(this.ensureIndex().keys());
  }
  mapValues() {
    const t = [];
    for (const n of this.ensureIndex().values())
      t.push(n.eGet(this.valueFeature));
    return t;
  }
  toMap() {
    const t = /* @__PURE__ */ new Map();
    for (const [n, i] of this.ensureIndex())
      t.set(n, i.eGet(this.valueFeature));
    return t;
  }
  // ===== Index management callbacks (called by EMapContainmentEList) =====
  entryAdded(t) {
    this.mapIndex = null;
  }
  entryRemoved(t) {
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
  contains(t) {
    return this.delegateList.contains(t);
  }
  indexOf(t) {
    return this.delegateList.indexOf(t);
  }
  get(t) {
    return this.delegateList.get(t);
  }
  set(t, n) {
    return this.delegateList.set(t, n);
  }
  add(t) {
    return this.delegateList.add(t);
  }
  addAt(t, n) {
    this.delegateList.addAt(t, n);
  }
  addAll(t) {
    return this.delegateList.addAll(t);
  }
  addAllAt(t, n) {
    return this.delegateList.addAllAt(t, n);
  }
  remove(t) {
    return this.delegateList.remove(t);
  }
  removeAt(t) {
    return this.delegateList.removeAt(t);
  }
  clear() {
    this.delegateList.clear();
  }
  move(t, n) {
    return this.delegateList.move(t, n);
  }
  toArray() {
    return this.delegateList.toArray();
  }
  [Symbol.iterator]() {
    return this.delegateList[Symbol.iterator]();
  }
  push(...t) {
    return this.delegateList.push(...t);
  }
  filter(t, n) {
    return this.delegateList.filter(t, n);
  }
  map(t, n) {
    return this.delegateList.map(t, n);
  }
  forEach(t, n) {
    this.delegateList.forEach(t, n);
  }
  find(t, n) {
    return this.delegateList.find(t, n);
  }
  findIndex(t, n) {
    return this.delegateList.findIndex(t, n);
  }
  some(t, n) {
    return this.delegateList.some(t, n);
  }
  every(t, n) {
    return this.delegateList.every(t, n);
  }
  includes(t) {
    return this.delegateList.includes(t);
  }
  slice(t, n) {
    return this.delegateList.slice(t, n);
  }
  concat(...t) {
    return this.delegateList.concat(...t);
  }
  sort(t) {
    return this.delegateList.sort(t), this;
  }
  reverse() {
    return this.delegateList.reverse(), this;
  }
  join(t) {
    return this.delegateList.join(t);
  }
  at(t) {
    return this.delegateList.at(t);
  }
  lastIndexOf(t) {
    return this.delegateList.lastIndexOf(t);
  }
  flatMap(t, n) {
    return this.delegateList.flatMap(t, n);
  }
  toJSON() {
    return this.delegateList.toJSON();
  }
}
function CE(y, t, n) {
  return new TE(y, t, n);
}
var hr;
(function(y) {
  y.INSTANCE_FACTORY_REGISTRY = NE();
})(hr || (hr = {}));
function NE() {
  const y = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return {
    getFactory(i) {
      const a = i.scheme();
      if (a && t.has(a))
        return t.get(a);
      const o = i.fileExtension();
      return o && y.has(o) ? y.get(o) : null;
    },
    getExtensionToFactoryMap() {
      return y;
    },
    getProtocolToFactoryMap() {
      return t;
    },
    getContentTypeToFactoryMap() {
      return n;
    }
  };
}
class Jo {
  constructor(t) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = t || null, this.contents = dE(this);
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
  eSetDeliver(t) {
    this._eDeliver = t;
  }
  /**
   * Notifies all adapters of a change.
   */
  eNotify(t) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const n of this._eAdapters)
        n.notifyChanged(t);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(t) {
    this.resourceSet = t;
  }
  getURI() {
    return this.uri;
  }
  setURI(t) {
    this.uri = t;
  }
  getContents() {
    return this.contents;
  }
  getAllContents() {
    const t = [...this.contents];
    for (const n of this.contents) {
      const i = n.eAllContents();
      let a = i.next();
      for (; !a.done; )
        t.push(a.value), a = i.next();
    }
    return t[Symbol.iterator]();
  }
  getEObject(t) {
    if (t.startsWith("/")) {
      const n = t.split("/"), i = n.length >= 2 && n[0] === "" && n[1] === "", a = n.filter((d) => d.length > 0);
      if (a.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let o = null, c = 0;
      if (i && (o = this.contents.size() > 0 ? this.contents.get(0) : null, !o || (a[0].startsWith("@") ? o = this.eObjectForURIFragmentSegment(o, a[0]) : o = this.findByNameInContents(o, a[0]), c = 1, !o)))
        return null;
      for (let d = c; d < a.length; d++) {
        const _ = a[d], T = parseInt(_, 10);
        if (o === null ? isNaN(T) ? (o = this.findByName(this.contents.toArray(), _), !o && this.contents.size() > 0 && (o = this.findByNameInContents(this.contents.get(0), _))) : o = T < this.contents.size() ? this.contents.get(T) : null : isNaN(T) ? o = this.navigateByNameOrFeature(o, _) : o = o.eContents()[T] || null, !o)
          return null;
      }
      return o;
    }
    return this.getEObjectByID(t);
  }
  /**
   * Find a named element in an object's eContents().
   * This is used for EMF-style fragment navigation like //SortOrder
   * which searches for named elements within a container (e.g., EPackage's eClassifiers).
   */
  findByNameInContents(t, n) {
    const i = t.eContents();
    return this.findByName(i, n);
  }
  /**
   * Find an object by name in a list of objects.
   * Looks for 'name' via:
   * 1. getName() method (for static typed objects)
   * 2. eGet(nameFeature) (for dynamic objects loaded from XMI)
   * 3. Direct name property
   */
  findByName(t, n) {
    for (const i of t) {
      if ("getName" in i && typeof i.getName == "function" && i.getName() === n)
        return i;
      try {
        const a = i.eClass();
        if (a) {
          const o = a.getEStructuralFeature("name");
          if (o && i.eGet(o) === n)
            return i;
        }
      } catch {
      }
      if ("name" in i && i.name === n)
        return i;
    }
    return null;
  }
  /**
   * Navigate from an object to a child by name or feature.
   */
  navigateByNameOrFeature(t, n) {
    if (n.startsWith("@"))
      return this.eObjectForURIFragmentSegment(t, n);
    const i = t.eContents(), a = this.findByName(i, n);
    if (a)
      return a;
    const c = t.eClass().getEStructuralFeature(n);
    if (c) {
      const d = t.eGet(c);
      if (d && typeof d == "object" && "eClass" in d)
        return d;
      if (Array.isArray(d) && d.length > 0)
        return d[0];
    }
    return null;
  }
  /**
   * Resolve a @feature.index URI fragment segment (Java EMF format).
   * Formats:
   * - @featureName.index → eGet(feature)[index] (multi-valued)
   * - @featureName → eGet(feature) (single-valued)
   */
  eObjectForURIFragmentSegment(t, n) {
    const i = n.substring(1), a = t.eClass(), o = i.charAt(i.length - 1);
    let c, d = -1;
    if (o >= "0" && o <= "9") {
      const x = i.lastIndexOf(".");
      if (x > 0) {
        const v = parseInt(i.substring(x + 1), 10);
        isNaN(v) ? c = i : (c = i.substring(0, x), d = v);
      } else
        c = i;
    } else
      c = i;
    const _ = a.getEStructuralFeature(c);
    if (!_)
      return null;
    const T = t.eGet(_);
    return T == null ? null : d >= 0 ? Array.isArray(T) ? T[d] ?? null : typeof T == "object" && "get" in T && typeof T.get == "function" ? T.get(d) ?? null : null : typeof T == "object" && "eClass" in T ? T : null;
  }
  getURIFragment(t) {
    const n = [];
    let i = t;
    for (; i; ) {
      const a = i.eContainer();
      if (!a) {
        const d = this.contents.indexOf(i);
        d >= 0 && n.unshift(d);
        break;
      }
      const c = a.eContents().indexOf(i);
      c >= 0 && n.unshift(c), i = a;
    }
    return "/" + n.join("/");
  }
  async save(t) {
    this.errors = [], this.warnings = [];
    try {
      const n = this.serialize();
      this.modified = !1;
    } catch (n) {
      throw this.errors.push({
        message: n instanceof Error ? n.message : String(n)
      }), n;
    }
  }
  async load(t) {
    this.errors = [], this.warnings = [];
    try {
      this.loaded = !0;
    } catch (n) {
      throw this.errors.push({
        message: n instanceof Error ? n.message : String(n)
      }), n;
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
  setModified(t) {
    this.modified = t;
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
  getEObjectByID(t) {
    const n = this.getAllContents();
    let i = n.next();
    for (; !i.done; ) {
      const a = i.value, c = a.eClass().getEIDAttribute();
      if (c && a.eGet(c) === t)
        return a;
      i = n.next();
    }
    return null;
  }
  /**
   * Simple JSON serialization
   */
  serialize() {
    return {
      uri: this.uri?.toString(),
      contents: this.contents.toArray().map((t) => this.serializeObject(t))
    };
  }
  serializeObject(t) {
    const n = t.eClass(), i = {
      eClass: n.getName()
    };
    for (const a of n.getEAllStructuralFeatures()) {
      if (a.isTransient())
        continue;
      const o = t.eGet(a);
      o != null && (a.isMany() && Array.isArray(o) ? i[a.getName()] = o.map((c) => typeof c == "object" && "eClass" in c ? this.serializeObject(c) : c) : i[a.getName()] = typeof o == "object" && "eClass" in o ? this.serializeObject(o) : o);
    }
    return i;
  }
}
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vE(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
function AE(y) {
  if (Object.prototype.hasOwnProperty.call(y, "__esModule")) return y;
  var t = y.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(y).forEach(function(i) {
    var a = Object.getOwnPropertyDescriptor(y, i);
    Object.defineProperty(n, i, a.get ? a : {
      enumerable: !0,
      get: function() {
        return y[i];
      }
    });
  }), n;
}
var Wi = {};
const SE = {}, IE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SE
}, Symbol.toStringTag, { value: "Module" })), bE = /* @__PURE__ */ AE(IE);
var Do;
function xE() {
  return Do || (Do = 1, (function(y) {
    (function(t) {
      t.parser = function(g, h) {
        return new i(g, h);
      }, t.SAXParser = i, t.SAXStream = v, t.createStream = T, t.MAX_BUFFER_LENGTH = 64 * 1024;
      var n = [
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
      t.EVENTS = [
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
      function i(g, h) {
        if (!(this instanceof i))
          return new i(g, h);
        var I = this;
        o(I), I.q = I.c = "", I.bufferCheckPosition = t.MAX_BUFFER_LENGTH, I.encoding = null, I.opt = h || {}, I.opt.lowercase = I.opt.lowercase || I.opt.lowercasetags, I.looseCase = I.opt.lowercase ? "toLowerCase" : "toUpperCase", I.opt.maxEntityCount = I.opt.maxEntityCount || 512, I.opt.maxEntityDepth = I.opt.maxEntityDepth || 4, I.entityCount = I.entityDepth = 0, I.tags = [], I.closed = I.closedRoot = I.sawRoot = !1, I.tag = I.error = null, I.strict = !!g, I.noscript = !!(g || I.opt.noscript), I.state = S.BEGIN, I.strictEntities = I.opt.strictEntities, I.ENTITIES = I.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), I.attribList = [], I.opt.xmlns && (I.ns = Object.create(z)), I.opt.unquotedAttributeValues === void 0 && (I.opt.unquotedAttributeValues = !g), I.trackPosition = I.opt.position !== !1, I.trackPosition && (I.position = I.line = I.column = 0), Ut(I, "onready");
      }
      Object.create || (Object.create = function(g) {
        function h() {
        }
        h.prototype = g;
        var I = new h();
        return I;
      }), Object.keys || (Object.keys = function(g) {
        var h = [];
        for (var I in g) g.hasOwnProperty(I) && h.push(I);
        return h;
      });
      function a(g) {
        for (var h = Math.max(t.MAX_BUFFER_LENGTH, 10), I = 0, N = 0, Z = n.length; N < Z; N++) {
          var Se = g[n[N]].length;
          if (Se > h)
            switch (n[N]) {
              case "textNode":
                Ye(g);
                break;
              case "cdata":
                fe(g, "oncdata", g.cdata), g.cdata = "";
                break;
              case "script":
                fe(g, "onscript", g.script), g.script = "";
                break;
              default:
                Ze(g, "Max buffer length exceeded: " + n[N]);
            }
          I = Math.max(I, Se);
        }
        var Be = t.MAX_BUFFER_LENGTH - I;
        g.bufferCheckPosition = Be + g.position;
      }
      function o(g) {
        for (var h = 0, I = n.length; h < I; h++)
          g[n[h]] = "";
      }
      function c(g) {
        Ye(g), g.cdata !== "" && (fe(g, "oncdata", g.cdata), g.cdata = ""), g.script !== "" && (fe(g, "onscript", g.script), g.script = "");
      }
      i.prototype = {
        end: function() {
          Ve(this);
        },
        write: bn,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          c(this);
        }
      };
      var d;
      try {
        d = bE.Stream;
      } catch {
        d = function() {
        };
      }
      d || (d = function() {
      });
      var _ = t.EVENTS.filter(function(g) {
        return g !== "error" && g !== "end";
      });
      function T(g, h) {
        return new v(g, h);
      }
      function x(g, h) {
        if (g.length >= 2) {
          if (g[0] === 255 && g[1] === 254)
            return "utf-16le";
          if (g[0] === 254 && g[1] === 255)
            return "utf-16be";
        }
        return g.length >= 3 && g[0] === 239 && g[1] === 187 && g[2] === 191 ? "utf8" : g.length >= 4 ? g[0] === 60 && g[1] === 0 && g[2] === 63 && g[3] === 0 ? "utf-16le" : g[0] === 0 && g[1] === 60 && g[2] === 0 && g[3] === 63 ? "utf-16be" : "utf8" : h ? "utf8" : null;
      }
      function v(g, h) {
        if (!(this instanceof v))
          return new v(g, h);
        d.apply(this), this._parser = new i(g, h), this.writable = !0, this.readable = !0;
        var I = this;
        this._parser.onend = function() {
          I.emit("end");
        }, this._parser.onerror = function(N) {
          I.emit("error", N), I._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, _.forEach(function(N) {
          Object.defineProperty(I, "on" + N, {
            get: function() {
              return I._parser["on" + N];
            },
            set: function(Z) {
              if (!Z)
                return I.removeAllListeners(N), I._parser["on" + N] = Z, Z;
              I.on(N, Z);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      v.prototype = Object.create(d.prototype, {
        constructor: {
          value: v
        }
      }), v.prototype._decodeBuffer = function(g, h) {
        if (this._decoderBuffer && (g = Buffer.concat([this._decoderBuffer, g]), this._decoderBuffer = null), !this._decoder) {
          var I = x(g, h);
          if (!I)
            return this._decoderBuffer = g, "";
          this._parser.encoding = I, this._decoder = new TextDecoder(I);
        }
        return this._decoder.decode(g, { stream: !h });
      }, v.prototype.write = function(g) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(g))
          g = this._decodeBuffer(g, !1);
        else if (this._decoderBuffer) {
          var h = this._decodeBuffer(Buffer.alloc(0), !0);
          h && (this._parser.write(h), this.emit("data", h));
        }
        return this._parser.write(g.toString()), this.emit("data", g), !0;
      }, v.prototype.end = function(g) {
        if (g && g.length && this.write(g), this._decoderBuffer) {
          var h = this._decodeBuffer(Buffer.alloc(0), !0);
          h && (this._parser.write(h), this.emit("data", h));
        } else if (this._decoder) {
          var I = this._decoder.decode();
          I && (this._parser.write(I), this.emit("data", I));
        }
        return this._parser.end(), !0;
      }, v.prototype.on = function(g, h) {
        var I = this;
        return !I._parser["on" + g] && _.indexOf(g) !== -1 && (I._parser["on" + g] = function() {
          var N = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          N.splice(0, 0, g), I.emit.apply(I, N);
        }), d.prototype.on.call(I, g, h);
      };
      var R = /^\[CDATA\[$/i, M = /^DOCTYPE$/i, Y = "http://www.w3.org/XML/1998/namespace", se = "http://www.w3.org/2000/xmlns/", z = { xml: Y, xmlns: se }, ee = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ke = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ae = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Fe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ie(g) {
        return g === " " || g === `
` || g === "\r" || g === "	";
      }
      function De(g) {
        return g === '"' || g === "'";
      }
      function qe(g) {
        return g === ">" || ie(g);
      }
      function Le(g, h) {
        return g.test(h);
      }
      function ht(g, h) {
        return !Le(g, h);
      }
      var S = 0;
      t.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      }, t.XML_ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }), t.ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
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
      }), Object.keys(t.ENTITIES).forEach(function(g) {
        var h = t.ENTITIES[g], I = typeof h == "number" ? String.fromCharCode(h) : h;
        t.ENTITIES[g] = I;
      });
      for (var An in t.STATE)
        t.STATE[t.STATE[An]] = An;
      S = t.STATE;
      function Ut(g, h, I) {
        g[h] && g[h](I);
      }
      function zn(g) {
        var h = g && g.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return h ? h[2] : null;
      }
      function fn(g) {
        return g ? g.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function Sn(g, h) {
        const I = fn(g), N = fn(h);
        return !I || !N ? !0 : N === "utf16" ? I === "utf16le" || I === "utf16be" : I === N;
      }
      function Kn(g, h) {
        if (!(!g.strict || !g.encoding || !h || h.name !== "xml")) {
          var I = zn(h.body);
          I && !Sn(g.encoding, I) && ce(
            g,
            "XML declaration encoding " + I + " does not match detected stream encoding " + g.encoding.toUpperCase()
          );
        }
      }
      function fe(g, h, I) {
        g.textNode && Ye(g), Ut(g, h, I);
      }
      function Ye(g) {
        g.textNode = gn(g.opt, g.textNode), g.textNode && Ut(g, "ontext", g.textNode), g.textNode = "";
      }
      function gn(g, h) {
        return g.trim && (h = h.trim()), g.normalize && (h = h.replace(/\s+/g, " ")), h;
      }
      function Ze(g, h) {
        return Ye(g), g.trackPosition && (h += `
Line: ` + g.line + `
Column: ` + g.column + `
Char: ` + g.c), h = new Error(h), g.error = h, Ut(g, "onerror", h), g;
      }
      function Ve(g) {
        return g.sawRoot && !g.closedRoot && ce(g, "Unclosed root tag"), g.state !== S.BEGIN && g.state !== S.BEGIN_WHITESPACE && g.state !== S.TEXT && Ze(g, "Unexpected end"), Ye(g), g.c = "", g.closed = !0, Ut(g, "onend"), i.call(g, g.strict, g.opt), g;
      }
      function ce(g, h) {
        if (typeof g != "object" || !(g instanceof i))
          throw new Error("bad call to strictFail");
        g.strict && Ze(g, h);
      }
      function Hn(g) {
        g.strict || (g.tagName = g.tagName[g.looseCase]());
        var h = g.tags[g.tags.length - 1] || g, I = g.tag = { name: g.tagName, attributes: {} };
        g.opt.xmlns && (I.ns = h.ns), g.attribList.length = 0, fe(g, "onopentagstart", I);
      }
      function Zt(g, h) {
        var I = g.indexOf(":"), N = I < 0 ? ["", g] : g.split(":"), Z = N[0], Se = N[1];
        return h && g === "xmlns" && (Z = "xmlns", Se = ""), { prefix: Z, local: Se };
      }
      function F(g) {
        if (g.strict || (g.attribName = g.attribName[g.looseCase]()), g.attribList.indexOf(g.attribName) !== -1 || g.tag.attributes.hasOwnProperty(g.attribName)) {
          g.attribName = g.attribValue = "";
          return;
        }
        if (g.opt.xmlns) {
          var h = Zt(g.attribName, !0), I = h.prefix, N = h.local;
          if (I === "xmlns")
            if (N === "xml" && g.attribValue !== Y)
              ce(
                g,
                "xml: prefix must be bound to " + Y + `
Actual: ` + g.attribValue
              );
            else if (N === "xmlns" && g.attribValue !== se)
              ce(
                g,
                "xmlns: prefix must be bound to " + se + `
Actual: ` + g.attribValue
              );
            else {
              var Z = g.tag, Se = g.tags[g.tags.length - 1] || g;
              Z.ns === Se.ns && (Z.ns = Object.create(Se.ns)), Z.ns[N] = g.attribValue;
            }
          g.attribList.push([g.attribName, g.attribValue]);
        } else
          g.tag.attributes[g.attribName] = g.attribValue, fe(g, "onattribute", {
            name: g.attribName,
            value: g.attribValue
          });
        g.attribName = g.attribValue = "";
      }
      function L(g, h) {
        if (g.opt.xmlns) {
          var I = g.tag, N = Zt(g.tagName);
          I.prefix = N.prefix, I.local = N.local, I.uri = I.ns[N.prefix] || "", I.prefix && !I.uri && (ce(
            g,
            "Unbound namespace prefix: " + JSON.stringify(g.tagName)
          ), I.uri = N.prefix);
          var Z = g.tags[g.tags.length - 1] || g;
          I.ns && Z.ns !== I.ns && Object.keys(I.ns).forEach(function(Wt) {
            fe(g, "onopennamespace", {
              prefix: Wt,
              uri: I.ns[Wt]
            });
          });
          for (var Se = 0, Be = g.attribList.length; Se < Be; Se++) {
            var Ge = g.attribList[Se], ye = Ge[0], et = Ge[1], Re = Zt(ye, !0), xt = Re.prefix, pn = Re.local, _s = xt === "" ? "" : I.ns[xt] || "", Gt = {
              name: ye,
              value: et,
              prefix: xt,
              local: pn,
              uri: _s
            };
            xt && xt !== "xmlns" && !_s && (ce(
              g,
              "Unbound namespace prefix: " + JSON.stringify(xt)
            ), Gt.uri = xt), g.tag.attributes[ye] = Gt, fe(g, "onattribute", Gt);
          }
          g.attribList.length = 0;
        }
        g.tag.isSelfClosing = !!h, g.sawRoot = !0, g.tags.push(g.tag), fe(g, "onopentag", g.tag), h || (!g.noscript && g.tagName.toLowerCase() === "script" ? g.state = S.SCRIPT : g.state = S.TEXT, g.tag = null, g.tagName = ""), g.attribName = g.attribValue = "", g.attribList.length = 0;
      }
      function X(g) {
        if (!g.tagName) {
          ce(g, "Weird empty close tag."), g.textNode += "</>", g.state = S.TEXT;
          return;
        }
        if (g.script) {
          if (g.tagName !== "script") {
            g.script += "</" + g.tagName + ">", g.tagName = "", g.state = S.SCRIPT;
            return;
          }
          fe(g, "onscript", g.script), g.script = "";
        }
        var h = g.tags.length, I = g.tagName;
        g.strict || (I = I[g.looseCase]());
        for (var N = I; h--; ) {
          var Z = g.tags[h];
          if (Z.name !== N)
            ce(g, "Unexpected close tag");
          else
            break;
        }
        if (h < 0) {
          ce(g, "Unmatched closing tag: " + g.tagName), g.textNode += "</" + g.tagName + ">", g.state = S.TEXT;
          return;
        }
        g.tagName = I;
        for (var Se = g.tags.length; Se-- > h; ) {
          var Be = g.tag = g.tags.pop();
          g.tagName = g.tag.name, fe(g, "onclosetag", g.tagName);
          var Ge = {};
          for (var ye in Be.ns)
            Ge[ye] = Be.ns[ye];
          var et = g.tags[g.tags.length - 1] || g;
          g.opt.xmlns && Be.ns !== et.ns && Object.keys(Be.ns).forEach(function(Re) {
            var xt = Be.ns[Re];
            fe(g, "onclosenamespace", { prefix: Re, uri: xt });
          });
        }
        h === 0 && (g.closedRoot = !0), g.tagName = g.attribValue = g.attribName = "", g.attribList.length = 0, g.state = S.TEXT;
      }
      function ge(g) {
        var h = g.entity, I = h.toLowerCase(), N, Z = "";
        return g.ENTITIES[h] ? g.ENTITIES[h] : g.ENTITIES[I] ? g.ENTITIES[I] : (h = I, h.charAt(0) === "#" && (h.charAt(1) === "x" ? (h = h.slice(2), N = parseInt(h, 16), Z = N.toString(16)) : (h = h.slice(1), N = parseInt(h, 10), Z = N.toString(10))), h = h.replace(/^0+/, ""), isNaN(N) || Z.toLowerCase() !== h || N < 0 || N > 1114111 || !Oe(N) ? (ce(g, "Invalid character entity"), "&" + g.entity + ";") : String.fromCodePoint(N));
      }
      function Oe(g) {
        return g === 9 || g === 10 || g === 13 || g >= 32 && g <= 55295 || g >= 57344 && g <= 65533 || g >= 65536 && g <= 1114111;
      }
      function In(g, h) {
        h === "<" ? (g.state = S.OPEN_WAKA, g.startTagPosition = g.position) : ie(h) || (ce(g, "Non-whitespace before first tag."), g.textNode = h, g.state = S.TEXT);
      }
      function kt(g, h) {
        var I = "";
        return h < g.length && (I = g.charAt(h)), I;
      }
      function bn(g) {
        var h = this;
        if (this.error)
          throw this.error;
        if (h.closed)
          return Ze(
            h,
            "Cannot write after close. Assign an onready handler."
          );
        if (g === null)
          return Ve(h);
        typeof g == "object" && (g = g.toString());
        for (var I = 0, N = ""; N = kt(g, I++), h.c = N, !!N; )
          switch (h.trackPosition && (h.position++, N === `
` ? (h.line++, h.column = 0) : h.column++), h.state) {
            case S.BEGIN:
              if (h.state = S.BEGIN_WHITESPACE, N === "\uFEFF")
                continue;
              In(h, N);
              continue;
            case S.BEGIN_WHITESPACE:
              In(h, N);
              continue;
            case S.TEXT:
              if (h.sawRoot && !h.closedRoot) {
                for (var Se = I - 1; N && N !== "<" && N !== "&"; )
                  N = kt(g, I++), N && h.trackPosition && (h.position++, N === `
` ? (h.line++, h.column = 0) : h.column++);
                h.textNode += g.substring(Se, I - 1);
              }
              N === "<" && !(h.sawRoot && h.closedRoot && !h.strict) ? (h.state = S.OPEN_WAKA, h.startTagPosition = h.position) : (!ie(N) && (!h.sawRoot || h.closedRoot) && ce(h, "Text data outside of root node."), N === "&" ? h.state = S.TEXT_ENTITY : h.textNode += N);
              continue;
            case S.SCRIPT:
              N === "<" ? h.state = S.SCRIPT_ENDING : h.script += N;
              continue;
            case S.SCRIPT_ENDING:
              N === "/" ? h.state = S.CLOSE_TAG : (h.script += "<" + N, h.state = S.SCRIPT);
              continue;
            case S.OPEN_WAKA:
              if (N === "!")
                h.state = S.SGML_DECL, h.sgmlDecl = "";
              else if (!ie(N)) if (Le(ee, N))
                h.state = S.OPEN_TAG, h.tagName = N;
              else if (N === "/")
                h.state = S.CLOSE_TAG, h.tagName = "";
              else if (N === "?")
                h.state = S.PROC_INST, h.procInstName = h.procInstBody = "";
              else {
                if (ce(h, "Unencoded <"), h.startTagPosition + 1 < h.position) {
                  var Z = h.position - h.startTagPosition;
                  N = new Array(Z).join(" ") + N;
                }
                h.textNode += "<" + N, h.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (h.sgmlDecl + N === "--") {
                h.state = S.COMMENT, h.comment = "", h.sgmlDecl = "";
                continue;
              }
              h.doctype && h.doctype !== !0 && h.sgmlDecl ? (h.state = S.DOCTYPE_DTD, h.doctype += "<!" + h.sgmlDecl + N, h.sgmlDecl = "") : R.test(h.sgmlDecl + N) ? (fe(h, "onopencdata"), h.state = S.CDATA, h.sgmlDecl = "", h.cdata = "") : M.test(h.sgmlDecl + N) ? (h.state = S.DOCTYPE, (h.doctype || h.sawRoot) && ce(
                h,
                "Inappropriately located doctype declaration"
              ), h.doctype = "", h.sgmlDecl = "") : N === ">" ? (fe(h, "onsgmldeclaration", h.sgmlDecl), h.sgmlDecl = "", h.state = S.TEXT) : (De(N) && (h.state = S.SGML_DECL_QUOTED), h.sgmlDecl += N);
              continue;
            case S.SGML_DECL_QUOTED:
              N === h.q && (h.state = S.SGML_DECL, h.q = ""), h.sgmlDecl += N;
              continue;
            case S.DOCTYPE:
              N === ">" ? (h.state = S.TEXT, fe(h, "ondoctype", h.doctype), h.doctype = !0) : (h.doctype += N, N === "[" ? h.state = S.DOCTYPE_DTD : De(N) && (h.state = S.DOCTYPE_QUOTED, h.q = N));
              continue;
            case S.DOCTYPE_QUOTED:
              h.doctype += N, N === h.q && (h.q = "", h.state = S.DOCTYPE);
              continue;
            case S.DOCTYPE_DTD:
              N === "]" ? (h.doctype += N, h.state = S.DOCTYPE) : N === "<" ? (h.state = S.OPEN_WAKA, h.startTagPosition = h.position) : De(N) ? (h.doctype += N, h.state = S.DOCTYPE_DTD_QUOTED, h.q = N) : h.doctype += N;
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              h.doctype += N, N === h.q && (h.state = S.DOCTYPE_DTD, h.q = "");
              continue;
            case S.COMMENT:
              N === "-" ? h.state = S.COMMENT_ENDING : h.comment += N;
              continue;
            case S.COMMENT_ENDING:
              N === "-" ? (h.state = S.COMMENT_ENDED, h.comment = gn(h.opt, h.comment), h.comment && fe(h, "oncomment", h.comment), h.comment = "") : (h.comment += "-" + N, h.state = S.COMMENT);
              continue;
            case S.COMMENT_ENDED:
              N !== ">" ? (ce(h, "Malformed comment"), h.comment += "--" + N, h.state = S.COMMENT) : h.doctype && h.doctype !== !0 ? h.state = S.DOCTYPE_DTD : h.state = S.TEXT;
              continue;
            case S.CDATA:
              for (var Se = I - 1; N && N !== "]"; )
                N = kt(g, I++), N && h.trackPosition && (h.position++, N === `
` ? (h.line++, h.column = 0) : h.column++);
              h.cdata += g.substring(Se, I - 1), N === "]" && (h.state = S.CDATA_ENDING);
              continue;
            case S.CDATA_ENDING:
              N === "]" ? h.state = S.CDATA_ENDING_2 : (h.cdata += "]" + N, h.state = S.CDATA);
              continue;
            case S.CDATA_ENDING_2:
              N === ">" ? (h.cdata && fe(h, "oncdata", h.cdata), fe(h, "onclosecdata"), h.cdata = "", h.state = S.TEXT) : N === "]" ? h.cdata += "]" : (h.cdata += "]]" + N, h.state = S.CDATA);
              continue;
            case S.PROC_INST:
              N === "?" ? h.state = S.PROC_INST_ENDING : ie(N) ? h.state = S.PROC_INST_BODY : h.procInstName += N;
              continue;
            case S.PROC_INST_BODY:
              if (!h.procInstBody && ie(N))
                continue;
              N === "?" ? h.state = S.PROC_INST_ENDING : h.procInstBody += N;
              continue;
            case S.PROC_INST_ENDING:
              if (N === ">") {
                const et = {
                  name: h.procInstName,
                  body: h.procInstBody
                };
                Kn(h, et), fe(h, "onprocessinginstruction", et), h.procInstName = h.procInstBody = "", h.state = S.TEXT;
              } else
                h.procInstBody += "?" + N, h.state = S.PROC_INST_BODY;
              continue;
            case S.OPEN_TAG:
              Le(ke, N) ? h.tagName += N : (Hn(h), N === ">" ? L(h) : N === "/" ? h.state = S.OPEN_TAG_SLASH : (ie(N) || ce(h, "Invalid character in tag name"), h.state = S.ATTRIB));
              continue;
            case S.OPEN_TAG_SLASH:
              N === ">" ? (L(h, !0), X(h)) : (ce(
                h,
                "Forward-slash in opening tag not followed by >"
              ), h.state = S.ATTRIB);
              continue;
            case S.ATTRIB:
              if (ie(N))
                continue;
              N === ">" ? L(h) : N === "/" ? h.state = S.OPEN_TAG_SLASH : Le(ee, N) ? (h.attribName = N, h.attribValue = "", h.state = S.ATTRIB_NAME) : ce(h, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME:
              N === "=" ? h.state = S.ATTRIB_VALUE : N === ">" ? (ce(h, "Attribute without value"), h.attribValue = h.attribName, F(h), L(h)) : ie(N) ? h.state = S.ATTRIB_NAME_SAW_WHITE : Le(ke, N) ? h.attribName += N : ce(h, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (N === "=")
                h.state = S.ATTRIB_VALUE;
              else {
                if (ie(N))
                  continue;
                ce(h, "Attribute without value"), h.tag.attributes[h.attribName] = "", h.attribValue = "", fe(h, "onattribute", {
                  name: h.attribName,
                  value: ""
                }), h.attribName = "", N === ">" ? L(h) : Le(ee, N) ? (h.attribName = N, h.state = S.ATTRIB_NAME) : (ce(h, "Invalid attribute name"), h.state = S.ATTRIB);
              }
              continue;
            case S.ATTRIB_VALUE:
              if (ie(N))
                continue;
              De(N) ? (h.q = N, h.state = S.ATTRIB_VALUE_QUOTED) : (h.opt.unquotedAttributeValues || Ze(h, "Unquoted attribute value"), h.state = S.ATTRIB_VALUE_UNQUOTED, h.attribValue = N);
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (N !== h.q) {
                N === "&" ? h.state = S.ATTRIB_VALUE_ENTITY_Q : h.attribValue += N;
                continue;
              }
              F(h), h.q = "", h.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              ie(N) ? h.state = S.ATTRIB : N === ">" ? L(h) : N === "/" ? h.state = S.OPEN_TAG_SLASH : Le(ee, N) ? (ce(h, "No whitespace between attributes"), h.attribName = N, h.attribValue = "", h.state = S.ATTRIB_NAME) : ce(h, "Invalid attribute name");
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!qe(N)) {
                N === "&" ? h.state = S.ATTRIB_VALUE_ENTITY_U : h.attribValue += N;
                continue;
              }
              F(h), N === ">" ? L(h) : h.state = S.ATTRIB;
              continue;
            case S.CLOSE_TAG:
              if (h.tagName)
                N === ">" ? X(h) : Le(ke, N) ? h.tagName += N : h.script ? (h.script += "</" + h.tagName + N, h.tagName = "", h.state = S.SCRIPT) : (ie(N) || ce(h, "Invalid tagname in closing tag"), h.state = S.CLOSE_TAG_SAW_WHITE);
              else {
                if (ie(N))
                  continue;
                ht(ee, N) ? h.script ? (h.script += "</" + N, h.state = S.SCRIPT) : ce(h, "Invalid tagname in closing tag.") : h.tagName = N;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (ie(N))
                continue;
              N === ">" ? X(h) : ce(h, "Invalid characters in closing tag");
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var Be, Ge;
              switch (h.state) {
                case S.TEXT_ENTITY:
                  Be = S.TEXT, Ge = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  Be = S.ATTRIB_VALUE_QUOTED, Ge = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  Be = S.ATTRIB_VALUE_UNQUOTED, Ge = "attribValue";
                  break;
              }
              if (N === ";") {
                var ye = ge(h);
                h.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(ye) ? ((h.entityCount += 1) > h.opt.maxEntityCount && Ze(
                  h,
                  "Parsed entity count exceeds max entity count"
                ), (h.entityDepth += 1) > h.opt.maxEntityDepth && Ze(
                  h,
                  "Parsed entity depth exceeds max entity depth"
                ), h.entity = "", h.state = Be, h.write(ye), h.entityDepth -= 1) : (h[Ge] += ye, h.entity = "", h.state = Be);
              } else Le(h.entity.length ? Fe : Ae, N) ? h.entity += N : (ce(h, "Invalid character in entity name"), h[Ge] += "&" + h.entity + N, h.entity = "", h.state = Be);
              continue;
            default:
              throw new Error(h, "Unknown state: " + h.state);
          }
        return h.position >= h.bufferCheckPosition && a(h), h;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var g = String.fromCharCode, h = Math.floor, I = function() {
          var N = 16384, Z = [], Se, Be, Ge = -1, ye = arguments.length;
          if (!ye)
            return "";
          for (var et = ""; ++Ge < ye; ) {
            var Re = Number(arguments[Ge]);
            if (!isFinite(Re) || // `NaN`, `+Infinity`, or `-Infinity`
            Re < 0 || // not a valid Unicode code point
            Re > 1114111 || // not a valid Unicode code point
            h(Re) !== Re)
              throw RangeError("Invalid code point: " + Re);
            Re <= 65535 ? Z.push(Re) : (Re -= 65536, Se = (Re >> 10) + 55296, Be = Re % 1024 + 56320, Z.push(Se, Be)), (Ge + 1 === ye || Z.length > N) && (et += g.apply(null, Z), Z.length = 0);
          }
          return et;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: I,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = I;
      })();
    })(y);
  })(Wi)), Wi;
}
var wE = xE();
const DE = /* @__PURE__ */ vE(wE), Oo = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", OE = 0, RE = 1, Ji = 2, PE = 3, FE = 4, LE = 0, BE = 1, ms = 2, Ro = 3, ME = 4, UE = 5, kE = 6;
class Po {
  constructor() {
    this.contentKindCache = /* @__PURE__ */ new Map(), this.featureKindCache = /* @__PURE__ */ new Map(), this.nameCache = /* @__PURE__ */ new Map(), this.namespaceCache = /* @__PURE__ */ new Map(), this.simpleContentFeatureCache = /* @__PURE__ */ new Map();
  }
  /**
   * Get the content kind for a class (class-level annotation).
   */
  getContentKind(t) {
    let n = this.contentKindCache.get(t);
    if (n !== void 0)
      return n;
    n = OE;
    const i = this.getAnnotationDetail(t, "kind");
    if (i)
      switch (i) {
        case "simple":
          n = Ji;
          break;
        case "mixed":
          n = PE;
          break;
        case "empty":
          n = RE;
          break;
        case "elementOnly":
          n = FE;
          break;
      }
    return this.contentKindCache.set(t, n), n;
  }
  /**
   * Get the feature kind (element, attribute, simple, etc.)
   */
  getFeatureKind(t) {
    let n = this.featureKindCache.get(t);
    if (n !== void 0)
      return n;
    n = LE;
    const i = this.getAnnotationDetail(t, "kind");
    if (i)
      switch (i) {
        case "simple":
          n = BE;
          break;
        case "element":
          n = ms;
          break;
        case "attribute":
          n = Ro;
          break;
        case "elementWildcard":
          n = ME;
          break;
        case "attributeWildcard":
          n = UE;
          break;
        case "group":
          n = kE;
          break;
      }
    return this.featureKindCache.set(t, n), n;
  }
  /**
   * Get the XML name for a feature from its EMD annotation.
   * Returns null if no annotation is present.
   */
  getName(t) {
    if (this.nameCache.has(t))
      return this.nameCache.get(t);
    const n = this.getAnnotationDetail(t, "name") ?? null;
    return this.nameCache.set(t, n), n;
  }
  /**
   * Get the namespace URI for a feature from its EMD annotation.
   * Resolves special values:
   * - `##targetNamespace` → owning EPackage's nsURI
   * - `##local` → null (no namespace)
   */
  getNamespace(t) {
    if (this.namespaceCache.has(t))
      return this.namespaceCache.get(t);
    let i = this.getAnnotationDetail(t, "namespace") ?? null;
    if (i === "##targetNamespace") {
      if (i = t.getEContainingClass?.()?.getEPackage?.()?.getNsURI?.() ?? null, i === null)
        return null;
    } else i === "##local" && (i = null);
    return this.namespaceCache.set(t, i), i;
  }
  /**
   * Find the feature that represents simple text content (name=":0", kind="simple").
   */
  getSimpleContentFeature(t) {
    if (this.simpleContentFeatureCache.has(t))
      return this.simpleContentFeatureCache.get(t);
    let n = null;
    for (const i of t.getEAllStructuralFeatures())
      if (this.getName(i) === ":0") {
        n = i;
        break;
      }
    return this.simpleContentFeatureCache.set(t, n), n;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "element".
   */
  getElementFeature(t, n, i) {
    for (const a of t.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(a) !== ms)
        continue;
      const c = this.getName(a) ?? a.getName();
      if (c !== i)
        continue;
      const d = this.getNamespace(a);
      if (n && d && d === n || !n && !d || !d && c === i)
        return a;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(t, n, i) {
    for (const a of t.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(a) !== Ro)
        continue;
      const c = this.getName(a) ?? a.getName();
      if (c !== i)
        continue;
      const d = this.getNamespace(a);
      if (n && d && d === n || !n && !d || !d && c === i)
        return a;
    }
    return null;
  }
  /**
   * Find any feature by EMD namespace and name (element or attribute).
   */
  getFeature(t, n, i, a) {
    return a ? this.getElementFeature(t, n, i) : this.getAttributeFeature(t, n, i);
  }
  /**
   * Read a detail value from the ExtendedMetaData annotation on a model element.
   */
  getAnnotationDetail(t, n) {
    if (!t || typeof t.getEAnnotation != "function")
      return;
    const i = t.getEAnnotation(Oo);
    if (!i)
      return;
    const a = i.getDetails();
    if (!(!a || typeof a.getByKey != "function"))
      return a.getByKey(n);
  }
  /**
   * Read the ExtendedMetaData annotation details as a Map.
   */
  getAnnotation(t) {
    if (!t || typeof t.getEAnnotation != "function")
      return null;
    const n = t.getEAnnotation(Oo);
    if (!n)
      return null;
    const i = n.getDetails();
    return i && typeof i.getByKey == "function" ? i.toMap() : null;
  }
}
const GE = "FEATURE_NAME_MAP", WE = "EXTENDED_META_DATA", Yi = 1, Xi = 2, Fo = 3, $E = 4, Lo = 5;
class jE {
  constructor() {
    this.contexts = [], this.currentContext = /* @__PURE__ */ new Map();
  }
  pushContext() {
    this.contexts.push(new Map(this.currentContext));
  }
  popContext() {
    const t = this.contexts.pop(), n = /* @__PURE__ */ new Map();
    if (t) {
      for (const [i, a] of this.currentContext)
        (!t.has(i) || t.get(i) !== a) && n.set(i, a);
      this.currentContext = t;
    }
    return n;
  }
  declarePrefix(t, n) {
    this.currentContext.set(t, n);
  }
  getURI(t) {
    return this.currentContext.get(t) ?? null;
  }
  getPrefix(t) {
    for (const [n, i] of this.currentContext)
      if (i === t)
        return n;
    return null;
  }
}
class pr {
  constructor(t) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = Pt.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new jE(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, t && this.setResource(t);
  }
  setResource(t) {
    if (this.resource = t, this.xmlResource = t && "getID" in t ? t : null, t) {
      this.resourceURI = t.getURI();
      const n = t.getResourceSet();
      n ? this.packageRegistry = n.getPackageRegistry() : this.packageRegistry = Pt.INSTANCE;
    }
  }
  setOptions(t) {
    const n = t.get(GE);
    if (n) {
      this.featureNameMap = new Map(n), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [a, o] of n)
        this.reverseFeatureNameMap.set(o, a);
    }
    const i = t.get(WE);
    i instanceof Po ? this.extendedMetaData = i : i === !0 && (this.extendedMetaData = new Po());
  }
  getExtendedMetaData() {
    return this.extendedMetaData;
  }
  setNoNamespacePackage(t) {
    this.noNamespacePackage = t;
  }
  getNoNamespacePackage() {
    return this.noNamespacePackage;
  }
  getResource() {
    return this.resource;
  }
  getName(t) {
    return t.getName() || "";
  }
  getQName(t) {
    const n = t.getEPackage();
    if (n) {
      const i = this.getPrefixForPackage(n);
      if (i && i.length > 0)
        return i + ":" + t.getName();
    }
    return t.getName() || "";
  }
  getPrefix(t) {
    if (t === null)
      return null;
    const n = this.urisToPrefixes.get(t);
    return n && n.length > 0 ? n[0] : null;
  }
  getPrefixForPackage(t) {
    let n = this.packages.get(t);
    if (n === void 0) {
      const i = t.getNsURI();
      if (i) {
        const a = this.getPrefix(i);
        n = a !== null ? a : t.getNsPrefix() || "";
      } else
        n = t.getNsPrefix() || "";
      this.packages.set(t, n || "");
    }
    return n || null;
  }
  getNamespaceURI(t) {
    return this.prefixesToURIs.get(t) ?? null;
  }
  getURI(t) {
    return this.namespaceSupport.getURI(t);
  }
  addPrefix(t, n) {
    this.namespaceSupport.declarePrefix(t, n), this.prefixesToURIs.set(t, n);
    let i = this.urisToPrefixes.get(n);
    i || (i = [], this.urisToPrefixes.set(n, i)), i.includes(t) || i.push(t), this.allPrefixToURI.push(t, n);
  }
  pushContext() {
    this.namespaceSupport.pushContext();
  }
  popContext() {
    this.namespaceSupport.popContext();
  }
  popContextWithFactories(t) {
    const n = this.namespaceSupport.popContext();
    for (const [i] of n)
      t.delete(i);
  }
  recordPrefixToURIMapping() {
  }
  getPrefixToNamespaceMap() {
    return new Map(this.prefixesToURIs);
  }
  createObject(t, n) {
    return n && "getESuperTypes" in n ? t.create(n) : null;
  }
  getType(t, n) {
    const i = t.getEPackage();
    return i ? i.getEClassifier(n) : null;
  }
  getFeature(t, n, i) {
    if (this.extendedMetaData) {
      const o = this.extendedMetaData.getAttributeFeature(t, n, i);
      if (o)
        return this.computeFeatureKind(o), o;
    }
    let a = t.getEStructuralFeature(i);
    if (!a && this.reverseFeatureNameMap.size > 0) {
      const o = this.reverseFeatureNameMap.get(i);
      o && (a = t.getEStructuralFeature(o));
    }
    return a && this.computeFeatureKind(a), a;
  }
  getFeatureWithElement(t, n, i, a) {
    if (this.extendedMetaData) {
      const o = this.extendedMetaData.getFeature(t, n, i, a);
      if (o)
        return this.computeFeatureKind(o), o;
    }
    return this.getFeature(t, n, i);
  }
  getSerializedFeatureName(t) {
    if (this.extendedMetaData) {
      const i = this.extendedMetaData.getName(t);
      if (i && !i.startsWith(":"))
        return i;
    }
    const n = t.getName() || "";
    if (this.featureNameMap.size > 0) {
      const i = this.featureNameMap.get(n);
      if (i !== void 0)
        return i;
    }
    return n;
  }
  getFeatureKind(t) {
    let n = this.featuresToKinds.get(t);
    return n === void 0 && (this.computeFeatureKind(t), n = this.featuresToKinds.get(t)), n ?? Lo;
  }
  computeFeatureKind(t) {
    const n = t.getEType();
    if (!("isContainment" in t && typeof t.isContainment == "function") && (!n || !("getESuperTypes" in n)))
      t.isMany() ? this.featuresToKinds.set(t, Xi) : this.featuresToKinds.set(t, Yi);
    else if (t.isMany())
      if ("getEOpposite" in t && typeof t.getEOpposite == "function") {
        const o = t.getEOpposite();
        !o || typeof o.isTransient != "function" || o.isTransient() || !o.isMany() ? this.featuresToKinds.set(t, Fo) : this.featuresToKinds.set(t, $E);
      } else
        this.featuresToKinds.set(t, Fo);
    else
      this.featuresToKinds.set(t, Lo);
  }
  setValue(t, n, i, a) {
    if (n.isMany()) {
      let o = t.eGet(n);
      o || (o = [], t.eSet(n, o)), a === -1 ? o.push(i) : a === -2 ? o.unshift(i) : o.splice(a, 0, i);
    } else
      t.eSet(n, i);
    if (i && typeof i == "object") {
      const o = n.getName();
      o === "eClassifiers" && "setEPackage" in i && i.setEPackage(t), o === "eStructuralFeatures" && "setEContainingClass" in i && i.setEContainingClass(t), o === "eOperations" && "setEContainingClass" in i && i.setEContainingClass(t);
    }
  }
  setManyReference(t, n) {
    const i = [], a = t.getObject(), o = t.getFeature(), c = t.getValues(), d = t.getPositions();
    for (let _ = 0; _ < c.length; _++) {
      const T = c[_], x = d[_];
      try {
        this.setValue(a, o, T, x);
      } catch (v) {
        i.push(v instanceof Error ? v : new Error(String(v)));
      }
    }
    return i;
  }
  deresolve(t) {
    return this.resourceURI && !t.isRelative() ? t.deresolve(this.resourceURI) : t;
  }
  resolve(t, n) {
    return t.resolve(n);
  }
  getID(t) {
    return this.xmlResource ? this.xmlResource.getID(t) : null;
  }
  convertToString(t, n, i) {
    return t.convertToString(n, i);
  }
}
class Qo {
  constructor(t, n) {
    this._proxyURI = null, this._eClass = null, this._resource = null, this._proxyURI = t, this._eClass = n || null;
  }
  // --- Proxy-specific methods ---
  eProxyURI() {
    return this._proxyURI;
  }
  eSetProxyURI(t) {
    this._proxyURI = t;
  }
  eIsProxy() {
    return this._proxyURI !== null;
  }
  eResolveProxy(t) {
    const n = this._resource || this.eResource();
    if (n) {
      const i = n.getResourceSet();
      if (i && t.eProxyURI()) {
        const o = t.eProxyURI().toString(), c = o.indexOf("#");
        if (c > 0) {
          const d = ne.createURI(o.substring(0, c)), _ = o.substring(c + 1), T = i.getResource(d, !0);
          if (T) {
            const x = T.getEObject(_);
            if (x)
              return x;
          }
        } else if (c === 0) {
          const d = o.substring(1), _ = n.getEObject(d);
          if (_)
            return _;
        }
      }
    }
    return t;
  }
  // --- InternalEObject methods ---
  eInternalResource() {
    return this._resource;
  }
  eSetResource(t) {
    this._resource = t;
  }
  eInternalContainer() {
    return null;
  }
  eBasicSetContainer(t, n) {
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
  eGet(t) {
    throw new Error(`Cannot get feature '${t.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eSet(t, n) {
    throw new Error(`Cannot set feature '${t.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eIsSet(t) {
    return !1;
  }
  eUnset(t) {
    throw new Error(`Cannot unset feature '${t.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eInvoke(t, n) {
    throw new Error(`Cannot invoke operation '${t.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  toString() {
    return `EProxy(${this._proxyURI?.toString() || "null"})`;
  }
}
function Es(y, t) {
  let n = t;
  for (; n.startsWith("/"); )
    n = n.substring(1);
  if (!n)
    return null;
  const i = n.split("/");
  if (i.length === 1)
    return y.getEClassifier(i[0]);
  const a = i[i.length - 1];
  let o = y;
  for (let c = 0; c < i.length - 1; c++) {
    const d = i[c], _ = o.getESubpackages();
    o = null;
    for (let T = 0; T < _.length; T++) {
      const x = _.get(T);
      if (x.getName() === d) {
        o = x;
        break;
      }
    }
    if (!o)
      return null;
  }
  return o.getEClassifier(a);
}
const fs = "error", $n = "object", Bo = "reference", $i = "xmiWrapper", Mo = "deferredType";
class YE {
  constructor() {
    this.attrs = [];
  }
  add(t, n, i, a) {
    this.attrs.push({ qName: t, localName: n, uri: i, value: a });
  }
  clear() {
    this.attrs = [];
  }
  getLength() {
    return this.attrs.length;
  }
  getQName(t) {
    return this.attrs[t]?.qName || "";
  }
  getValue(t) {
    return this.attrs[t]?.value || "";
  }
  getLocalName(t) {
    return this.attrs[t]?.localName || "";
  }
  getURI(t) {
    return this.attrs[t]?.uri || "";
  }
  getValueByQName(t) {
    return this.attrs.find((i) => i.qName === t)?.value ?? null;
  }
  getValueByName(t, n) {
    return this.attrs.find((a) => a.uri === t && a.localName === n)?.value ?? null;
  }
}
const Yn = "http://www.w3.org/2001/XMLSchema-instance", qi = "http://www.omg.org/XMI", Uo = "xmlns", XE = "type", qE = "nil", zE = "schemaLocation", ko = "href", KE = "id";
class Zo {
  constructor(t, n, i) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = t, this.helper = n, this.packageRegistry = t.getResourceSet()?.getPackageRegistry() || Pt.INSTANCE, this.extent = t.getContents(), i && this.processOptions(i);
  }
  processOptions(t) {
    this.helper.setOptions(t);
  }
  /**
   * Set attributes for current element
   */
  setAttributes(t) {
    this.attribs = t;
  }
  /**
   * Handle start of element
   */
  startElement(t, n, i, a) {
    this.setAttributes(a), this.startElementInternal(t, n, i);
  }
  startElementInternal(t, n, i) {
    this.needsPushContext && this.helper.pushContext(), this.needsPushContext = !0, this.elements.push(i);
    let a = "";
    if (this.useNewMethods)
      this.isRoot && this.handleSchemaLocation(), a = this.helper.getPrefix(t.length === 0 ? null : t) || "";
    else {
      this.handleNamespaceAttribs();
      const o = i.indexOf(":");
      o !== -1 && (a = i.substring(0, o), n = i.substring(o + 1));
    }
    this.processElement(i, a, n);
  }
  processElement(t, n, i) {
    if (this.isRoot && (this.isRoot = !1, this.recordHeaderInformation()), n === "xmi" && i === "XMI") {
      this.objects.push(null), this.types.push($i);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === $i ? this.createTopObject(n, i) : this.handleFeature(n, i);
  }
  /**
   * Handle end of element
   */
  endElement(t, n, i) {
    this.elements.pop();
    const a = this.types.pop();
    if (a === $n) {
      const o = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && o) {
        const c = this.text.trim();
        if (c.length > 0) {
          const d = this.helper.getExtendedMetaData();
          if (d) {
            const _ = o.eClass();
            if (d.getContentKind(_) === Ji) {
              const T = d.getSimpleContentFeature(_);
              T && this.setFeatureValue(o, T, c);
            }
          }
          this.handleProxy(o, c);
        }
      }
      this.text = null;
    } else if (a === fs)
      this.objects.pop(), this.text = null;
    else if (a === Bo)
      this.objects.pop(), this.text = null;
    else if (a === Mo)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (a === $i)
      this.objects.pop();
    else if (a !== void 0) {
      const o = this.objects.pop() || this.objects[this.objects.length - 1];
      o && a && this.setFeatureValue(o, a, this.text), this.text = null;
    }
    this.helper.popContextWithFactories(this.prefixesToFactories);
  }
  /**
   * Handle character data
   */
  characters(t) {
    this.text === null ? this.text = t : this.text += t;
  }
  /**
   * Handle start of prefix mapping
   */
  startPrefixMapping(t, n) {
    this.isNamespaceAware = !0, this.needsPushContext && (this.helper.pushContext(), this.needsPushContext = !1), this.helper.addPrefix(t, n), this.prefixesToFactories.delete(t);
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
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const n = this.attribs.getQName(t);
        if (n.startsWith(Uo)) {
          const i = n.length > 5 ? n.substring(6) : "", a = this.attribs.getValue(t);
          this.startPrefixMapping(i, a);
        }
      }
  }
  /**
   * Handle schema location
   */
  handleSchemaLocation() {
    if (!this.attribs)
      return;
    const t = this.attribs.getValueByName(Yn, zE);
    t && this.handleXSISchemaLocation(t);
  }
  handleXSISchemaLocation(t) {
    const n = t.trim().split(/\s+/);
    for (let i = 0; i + 1 < n.length; i += 2) {
      const a = n[i], o = n[i + 1];
      this.urisToLocations.set(a, ne.createURI(o));
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
  createTopObject(t, n) {
    const i = this.getFactoryForPrefix(t);
    if (!i) {
      this.error(`Package not found for prefix '${t}'`), this.processObject(null);
      return;
    }
    const a = this.getXSIType();
    let o = null;
    if (a)
      o = this.createObjectByType(t, a, !0);
    else {
      const c = this.helper.getType(i, n);
      c && (o = this.helper.createObject(i, c));
    }
    o ? (this.processTopObject(o), this.handleObjectAttribs(o)) : (this.error(`Cannot create object for '${n}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(Yn, XE) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(t, n, i) {
    let a = t, o = n;
    const c = n.indexOf(":");
    c !== -1 && (a = n.substring(0, c), o = n.substring(c + 1));
    const d = this.getFactoryForPrefix(a);
    if (!d)
      return this.error(`Factory not found for type '${n}'`), null;
    const _ = this.helper.getType(d, o);
    return _ ? this.helper.createObject(d, _) : (this.error(`Type '${o}' not found`), null);
  }
  /**
   * Process top-level object
   */
  processTopObject(t) {
    t && (this.deferredExtent !== null ? this.deferredExtent.push(t) : this.extent.push(t)), this.processObject(t);
  }
  /**
   * Push object onto stack
   */
  processObject(t) {
    this.objects.push(t), this.types.push(t ? $n : fs);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(t) {
    if (this.attribs)
      for (let n = 0; n < this.attribs.getLength(); n++) {
        const i = this.attribs.getQName(n), a = this.attribs.getValue(n), o = this.attribs.getURI(n), c = this.attribs.getLocalName(n);
        if (!i.startsWith(Uo) && o !== Yn) {
          if (o === qi) {
            c === KE && this.handleId(t, a);
            continue;
          }
          this.setAttribValue(t, c || i, a, o || null);
        }
      }
  }
  /**
   * Handle ID attribute
   */
  handleId(t, n) {
  }
  /**
   * Set attribute value on object
   */
  setAttribValue(t, n, i, a) {
    const o = t.eClass(), c = this.helper.getFeature(o, a ?? null, n);
    c && this.setFeatureValue(t, c, i, -2);
  }
  /**
   * Handle feature (nested element)
   */
  handleFeature(t, n) {
    const i = this.objects[this.objects.length - 1];
    if (!i) {
      if (this.deferredParent && this.deferredFeature) {
        this.handleDeferredType(t, n);
        return;
      }
      this.objects.push(null), this.types.push(fs), this.error(`Feature '${n}' has no parent object`);
      return;
    }
    const a = i.eClass(), o = t && this.helper.getURI(t) || null, c = this.helper.getFeatureWithElement(a, o, n, !0);
    if (c) {
      const d = this.helper.getFeatureKind(c);
      d === Yi || d === Xi ? (this.objects.push(null), this.types.push(c), this.isNull() || (this.text = "")) : this.createObject(i, c);
    } else
      this.handleUnknownFeature(t, n, i);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(Yn, qE) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(t, n) {
    const i = this.attribs?.getValueByQName(ko) || this.attribs?.getValueByName("", ko);
    if (i) {
      this.setValueFromId(t, n, i, -1), this.objects.push(null), this.types.push(Bo);
      return;
    }
    const a = this.getXSIType();
    let o = null;
    if (a)
      o = this.createObjectByType("", a, !1);
    else {
      let c = n.getEType();
      if (c && !("getESuperTypes" in c) && typeof c.eIsProxy == "function" && c.eIsProxy()) {
        const d = c.eProxyURI();
        if (d) {
          const _ = d.toString(), T = _.indexOf("#");
          if (T > 0) {
            const x = _.substring(0, T), v = _.substring(T + 1), R = this.packageRegistry.getEPackage(x);
            if (R) {
              const M = Es(R, v);
              M && (c = M, typeof n.setEType == "function" && n.setEType(M));
            }
          }
        }
      }
      if (c && "getESuperTypes" in c) {
        const d = c;
        if (d.isAbstract()) {
          this.deferredParent = t, this.deferredFeature = n, this.objects.push(null), this.types.push(Mo);
          return;
        } else {
          const _ = d.getEPackage()?.getEFactoryInstance();
          _ && (o = _.create(d));
        }
      }
    }
    o && (this.helper.setValue(t, n, o, -1), this.handleObjectAttribs(o)), this.processObject(o);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(t, n, i) {
    const a = t && this.helper.getURI(t) || null, o = this.helper.getExtendedMetaData();
    if (o && a) {
      const c = i.eClass(), d = o.getElementFeature(c, a, n);
      if (d) {
        const _ = this.helper.getFeatureKind(d);
        _ === Yi || _ === Xi ? (this.objects.push(null), this.types.push(d), this.isNull() || (this.text = "")) : this.createObject(i, d);
        return;
      }
    }
    if (a) {
      const c = this.packageRegistry.getEPackage(a);
      if (c) {
        const d = c.getEClassifier(n);
        if (d && "getESuperTypes" in d) {
          const _ = d, T = i.eClass();
          if (_ === T) {
            this.handleObjectAttribs(i), this.objects.push(i), this.types.push($n);
            return;
          }
          if (T.isSuperTypeOf(_) && !_.isAbstract()) {
            const x = _.getEPackage()?.getEFactoryInstance();
            if (x) {
              const v = x.create(_);
              for (const M of T.getEAllStructuralFeatures()) {
                if (M.isTransient() || M.isDerived())
                  continue;
                const Y = i.eGet(M);
                if (Y != null)
                  try {
                    v.eSet(M, Y);
                  } catch {
                  }
              }
              this.replaceInParentContainment(i, v);
              const R = this.objects.length - 1;
              this.objects[R] = v, this.handleObjectAttribs(v), this.objects.push(v), this.types.push($n);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(fs), this.error(`Unknown feature '${n}' for type '${i.eClass().getName()}'`);
  }
  /**
   * Replace an object in the grandparent's containment reference.
   */
  replaceInParentContainment(t, n) {
    const i = this.objects.length - 1;
    if (i < 1)
      return;
    const a = this.objects[i - 1];
    if (!a)
      return;
    const o = a.eClass();
    for (const c of o.getEAllStructuralFeatures()) {
      if (!("isContainment" in c))
        continue;
      const d = c;
      if (d.isContainment()) {
        if (d.isMany()) {
          const _ = a.eGet(d);
          if (_) {
            for (let T = _.length - 1; T >= 0; T--)
              if (_[T] === t) {
                _[T] = n;
                return;
              }
          }
        } else if (a.eGet(d) === t) {
          a.eSet(d, n);
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
  handleDeferredType(t, n) {
    const i = this.deferredParent, a = this.deferredFeature;
    this.deferredParent = null, this.deferredFeature = null;
    const o = t && this.helper.getURI(t) || null;
    let c = null;
    if (o) {
      const d = this.packageRegistry.getEPackage(o);
      if (d) {
        const _ = d.getEClassifier(n);
        if (_ && "getESuperTypes" in _) {
          const T = _;
          if (!T.isAbstract()) {
            const x = T.getEPackage()?.getEFactoryInstance();
            x && (c = x.create(T));
          }
        }
      }
    }
    c ? (this.helper.setValue(i, a, c, -1), this.handleObjectAttribs(c), this.objects[this.objects.length - 1] = c, this.types[this.types.length - 1] = $n, this.objects.push(c), this.types.push($n)) : (this.objects.push(null), this.types.push(fs), this.error(`Cannot resolve type '${n}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(t, n, i, a = -1) {
    if (i == null)
      return;
    if ("isContainment" in n)
      if (n.isMany()) {
        const c = i.trim().split(/\s+/);
        for (const d of c)
          d && this.setValueFromId(t, n, d, -1);
      } else
        this.setValueFromId(t, n, i, a);
    else {
      const d = n.getEType();
      let _ = null;
      if (d && typeof d.getEPackage == "function")
        _ = d.getEPackage()?.getEFactoryInstance() ?? null;
      else if (d && typeof d.eGet == "function" && typeof d.eClass == "function") {
        const T = d.eClass();
        if (T) {
          const x = T.getEStructuralFeature?.("ePackage");
          if (x) {
            const v = d.eGet(x);
            v?.getEFactoryInstance && (_ = v.getEFactoryInstance());
          }
        }
      }
      try {
        if (_ && d) {
          const T = _.createFromString(d, i);
          this.helper.setValue(t, n, T, a);
        } else
          this.helper.setValue(t, n, i, a);
      } catch (T) {
        const x = T instanceof Error ? T.message : String(T);
        this.error(`Invalid value for feature '${n.getName()}': ${x}`);
      }
    }
  }
  /**
   * Set reference value from ID
   */
  setValueFromId(t, n, i, a = -1) {
    this.forwardSingleReferences.push({
      object: t,
      feature: n,
      value: i,
      position: a,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber
    });
  }
  /**
   * Handle forward references
   */
  handleForwardReferences() {
    for (const t of this.forwardSingleReferences) {
      const n = this.resolveReference(t.value);
      if (n)
        this.helper.setValue(t.object, t.feature, n, t.position);
      else {
        console.warn(`[XMLHandler] Forward ref UNRESOLVED: '${t.value}' on feature '${t.feature?.getName?.()}'`);
        const i = this.createProxy(t.feature, t.value);
        i ? this.helper.setValue(t.object, t.feature, i, t.position) : this.error(`Unresolved reference '${t.value}'`);
      }
    }
    this.forwardSingleReferences = [];
  }
  /**
   * Creates a proxy for an unresolved reference.
   * The proxy will be resolved when accessed.
   */
  createProxy(t, n) {
    let i;
    const a = this.resource.getURI(), o = n.indexOf(" ");
    o > 0 && (n = n.substring(o + 1));
    const c = n.indexOf("#");
    if (c > 0) {
      const x = n.substring(0, c), v = n.substring(c + 1);
      if (a && !x.includes("://")) {
        const R = a.toString();
        if (x === R || R.endsWith(x) || R.endsWith("/" + x))
          i = ne.createURI(R + "#" + v);
        else {
          const M = ne.createURI(x).resolve(a);
          i = ne.createURI(M.toString() + "#" + v);
        }
      } else
        i = ne.createURI(n);
    } else c === 0 ? a ? i = ne.createURI(a.toString() + n) : i = ne.createURI(n) : (n.startsWith("/"), a ? i = ne.createURI(a.toString() + "#" + n) : i = ne.createURI("#" + n));
    const d = t.getEType(), _ = d && "getESuperTypes" in d ? d : null, T = new Qo(i, _ || void 0);
    return T.eSetResource(this.resource), T;
  }
  /**
   * Resolve a reference string.
   * Supports:
   * - Fragment references: #//EString or //EString
   * - External URIs: http://www.eclipse.org/emf/2002/Ecore#//EString
   * - Typed references: ecore:EClass audiogram.ecore#//HIMSAAudiometricStandardType
   * - Local IDs: someId
   */
  resolveReference(t) {
    const n = t.indexOf(" ");
    n > 0 && (t = t.substring(n + 1));
    const i = t.indexOf("#");
    if (i > 0) {
      const a = t.substring(0, i), o = t.substring(i + 1), d = this.resource.getURI()?.toString();
      if (d && (d === a || d.endsWith(a) || d.endsWith("/" + a) || a.endsWith(d)))
        return this.resource.getEObject(o);
      const _ = this.packageRegistry.getEPackage(a);
      if (_)
        return this.resolveFragmentInPackage(_, o);
      const T = this.resource.getContents();
      for (let v = 0; v < T.length; v++) {
        const R = T.get(v);
        if (R && typeof R.getNsURI == "function") {
          const M = R;
          if (M.getNsURI() === a)
            return this.resolveFragmentInPackage(M, o);
        }
      }
      const x = this.resource.getResourceSet();
      if (x) {
        const v = ne.createURI(a), R = x.getResource(v, !0);
        if (R)
          return R.getEObject(o);
      }
      return null;
    }
    return t.startsWith("#") ? this.resource.getEObject(t.substring(1)) : t.startsWith("/") ? this.resource.getEObject(t) : this.resource.getEObject(t);
  }
  /**
   * Resolve a fragment path within an EPackage.
   * Handles paths like //EString, //EClass, etc.
   */
  resolveFragmentInPackage(t, n) {
    let i = n;
    for (; i.startsWith("/"); )
      i = i.substring(1);
    if (!i)
      return t;
    const a = i.split("/"), o = Es(t, i);
    if (o)
      return o;
    if (a.length >= 2) {
      let c = t;
      for (let T = 0; T < a.length - 2; T++) {
        const x = c.getESubpackages();
        let v = null;
        for (let R = 0; R < x.length; R++)
          if (x.get(R).getName() === a[T]) {
            v = x.get(R);
            break;
          }
        if (!v)
          return null;
        c = v;
      }
      const d = a[a.length - 2], _ = c.getEClassifier(d);
      if (_ && "getEStructuralFeature" in _) {
        const T = _.getEStructuralFeature(a[a.length - 1]);
        if (T)
          return T;
      }
    }
    return null;
  }
  /**
   * Handle proxy reference
   */
  handleProxy(t, n) {
  }
  /**
   * Get factory for prefix
   */
  getFactoryForPrefix(t) {
    let n = this.prefixesToFactories.get(t);
    if (n)
      return n;
    const i = this.helper.getURI(t);
    if (i) {
      const a = this.packageRegistry.getEPackage(i);
      if (a && (n = a.getEFactoryInstance(), n))
        return this.prefixesToFactories.set(t, n), n;
    }
    return null;
  }
  /**
   * Report error
   */
  error(t) {
    const n = new Error(`[Line ${this.lineNumber}, Col ${this.columnNumber}] ${t}`);
    this.errors.push(n), console.error(n.message);
  }
  /**
   * Get errors
   */
  getErrors() {
    return this.errors;
  }
}
class Vo {
  constructor(t) {
    this.helper = t || new pr();
  }
  /**
   * Load resource from string
   */
  load(t, n, i) {
    const a = i || /* @__PURE__ */ new Map(), o = this.makeDefaultHandler(t, a), c = DE.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), d = new YE();
    c.onprocessinginstruction = (T) => {
      T.name;
    }, c.onopentag = (T) => {
      d.clear();
      const x = T;
      for (const [v, R] of Object.entries(x.attributes)) {
        const M = R, Y = M.prefix ? `${M.prefix}:${M.local}` : M.local;
        if (M.prefix === "xmlns" || M.name === "xmlns") {
          const se = M.prefix === "xmlns" ? M.local : "";
          o.startPrefixMapping(se, M.value);
        }
        d.add(Y, M.local, M.uri, M.value);
      }
      o.lineNumber = c.line, o.columnNumber = c.column, o.startElement(x.uri, x.local, x.name, d);
    }, c.onclosetag = (T) => {
      const x = T.indexOf(":"), v = x >= 0 ? T.substring(x + 1) : T;
      o.endElement("", v, T);
    }, c.ontext = (T) => {
      T.trim() && o.characters(T);
    }, c.oncdata = (T) => {
      o.characters(T);
    }, c.onerror = (T) => {
      console.error("XML Parse Error:", T.message), o.error(T.message);
    }, c.write(n).close(), o.endDocument();
    const _ = o.getErrors();
    if (_.length > 0 && t.getErrors) {
      const T = t.getErrors();
      for (const x of _) {
        const v = x.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        v ? T.push({
          message: v[3] || x.message,
          line: parseInt(v[1], 10),
          column: parseInt(v[2], 10)
        }) : T.push({ message: x.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(t, n) {
    return new Zo(t, this.helper, n);
  }
}
class HE extends Vo {
  constructor(t) {
    super(t || new JE());
  }
  makeDefaultHandler(t, n) {
    return new QE(t, this.helper, n);
  }
}
class JE extends pr {
}
class QE extends Zo {
  constructor(t, n, i) {
    super(t, n, i), this.xmiVersion = "2.0";
  }
  recordHeaderInformation() {
    if (this.attribs) {
      const t = this.attribs.getValueByQName("xmi:version");
      t && (this.xmiVersion = t);
    }
  }
  getXSIType() {
    let t = super.getXSIType();
    return !t && this.attribs && (t = this.attribs.getValueByQName("xmi:type")), t;
  }
  handleId(t, n) {
    this.resource && "setID" in this.resource && this.resource.setID(t, n);
  }
}
function fr(y) {
  return y != null && typeof y.getELiterals == "function" && typeof y.getEEnumLiteral == "function";
}
class el {
  constructor(t) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = t || new pr(), this.resource = null;
  }
  /**
   * Save resource to string
   */
  save(t, n) {
    return this.saveObjects(t, t.getContents(), n);
  }
  /**
   * Save a specific set of objects using the given resource for reference resolution.
   */
  saveObjects(t, n, i) {
    this.resource = t, this.output = [], this.declaredNamespaces.clear(), this.indent = 0, i && this.helper.setOptions(i), this.output.push(`<?xml version="1.0" encoding="UTF-8"?>
`);
    const a = Array.isArray(n) ? n : [...n];
    if (a.length > 1)
      this.saveMultipleRoots(a);
    else
      for (const o of a)
        this.saveObject(o, !0);
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(t) {
    const n = /* @__PURE__ */ new Set();
    for (const a of t)
      for (const o of this.collectPackages(a))
        n.add(o);
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${qi}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Yn}"`);
    const i = /* @__PURE__ */ new Set();
    for (const a of n) {
      const o = a.getNsURI(), c = this.getPrefix(a);
      o && c && !i.has(c) && (this.output.push(` xmlns:${c}="${o}"`), this.declaredNamespaces.set(o, c), i.add(c));
    }
    this.output.push(`>
`), this.indent++;
    for (const a of t)
      this.saveObject(a, !1);
    this.indent--, this.output.push(`</xmi:XMI>
`);
  }
  /**
   * Save a single object
   */
  saveObject(t, n) {
    const i = t.eClass(), a = i.getEPackage(), o = a ? this.getPrefix(a) : "", c = i.getName() || "Object", d = o ? `${o}:${c}` : c;
    this.writeIndent(), this.output.push(`<${d}`), n && this.writeNamespaces(t), n || this.writeTypeAttribute(t), this.saveID(t), this.writeAttributes(t);
    const _ = this.helper.getExtendedMetaData(), T = this.getSimpleContentText(t, _), x = this.hasElementContent(t);
    T !== null ? (this.output.push(`>${this.escapeXml(T)}`), x && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${d}>
`)) : x ? (this.output.push(`>
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent(), this.output.push(`</${d}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Write xmi:id attribute if the resource tracks an ID for this object
   */
  saveID(t) {
    const n = this.helper.getID(t);
    n && this.output.push(` ${this.idAttributeName}="${this.escapeXml(n)}"`);
  }
  /**
   * Write namespace declarations
   */
  writeNamespaces(t) {
    const n = this.collectPackages(t);
    this.output.push(` xmlns:xmi="${qi}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Yn}"`);
    const i = /* @__PURE__ */ new Set();
    for (const o of n) {
      const c = o.getNsURI(), d = this.getPrefix(o);
      c && d && !i.has(d) && (this.output.push(` xmlns:${d}="${c}"`), this.declaredNamespaces.set(c, d), i.add(d));
    }
    const a = this.helper.getExtendedMetaData();
    a && this.collectEMDNamespaces(t, a, i);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(t, n, i) {
    const a = (o) => {
      const c = o.eClass();
      for (const d of c.getEAllStructuralFeatures()) {
        const _ = n.getNamespace(d);
        if (_ && !this.declaredNamespaces.has(_) && _ !== "http://www.w3.org/XML/1998/namespace") {
          const T = this.generatePrefix(_, i);
          T && (this.output.push(` xmlns:${T}="${_}"`), this.declaredNamespaces.set(_, T), i.add(T));
        }
      }
      for (const d of o.eContents())
        a(d);
    };
    a(t);
  }
  /**
   * Generate a namespace prefix for a URI.
   */
  generatePrefix(t, n) {
    const i = t.lastIndexOf("/");
    let a = i >= 0 ? t.substring(i + 1) : t;
    if (a = a.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(), a || (a = "ns"), a.length > 10 && (a = a.substring(0, 10)), !n.has(a))
      return a;
    for (let o = 1; o < 100; o++) {
      const c = `${a}${o}`;
      if (!n.has(c))
        return c;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(t) {
    const n = /* @__PURE__ */ new Set(), i = (a) => {
      const c = a.eClass().getEPackage();
      c && n.add(c);
      for (const d of a.eContents())
        i(d);
    };
    return i(t), n;
  }
  /**
   * Get prefix for package
   */
  getPrefix(t) {
    return t.getNsPrefix() || t.getName() || "ns";
  }
  /**
   * Write xsi:type attribute if needed
   */
  writeTypeAttribute(t) {
  }
  /**
   * Write attribute values and non-containment references
   */
  writeAttributes(t) {
    const n = t.eClass(), i = this.helper.getExtendedMetaData();
    for (const a of n.getEAllStructuralFeatures())
      if (!(a.isTransient() || a.isDerived()) && !(i && i.getName(a) === ":0")) {
        if (this.isAttribute(a)) {
          if (i && i.getFeatureKind(a) === ms)
            continue;
          const o = a;
          let c = t.eGet(o);
          if (c != null && (c = this.resolveValue(c, t), c != null)) {
            let d = null;
            try {
              d = o.getDefaultValue();
            } catch {
            }
            if (c !== d) {
              const _ = this.convertToString(o, c), T = this.getSerializedAttributeName(o, i);
              this.output.push(` ${T}="${this.escapeXml(_)}"`);
            }
          }
        } else if ("isContainment" in a) {
          const o = a;
          if (!o.isContainment()) {
            let c = t.eGet(o);
            if (c != null) {
              const d = this.helper.getSerializedFeatureName(o);
              if (a.isMany()) {
                if (Array.isArray(c) || Qe(c)) {
                  const _ = [];
                  for (const T of c) {
                    const x = this.resolveValue(T, t);
                    if (x == null || typeof x == "string")
                      continue;
                    const v = x.eResource?.();
                    if (v && v === this.resource) {
                      const R = this.getHref(x);
                      R && _.push(R);
                    }
                  }
                  _.length > 0 && this.output.push(` ${d}="${this.escapeXml(_.join(" "))}"`);
                }
              } else if (c = this.resolveValue(c, t), c != null)
                if (typeof c == "string")
                  this.output.push(` ${d}="${this.escapeXml(c)}"`);
                else if (typeof c == "boolean")
                  this.output.push(` ${d}="${c ? "true" : "false"}"`);
                else if (typeof c == "number")
                  this.output.push(` ${d}="${String(c)}"`);
                else {
                  const _ = this.getTypePrefixedHref(o, c);
                  _ && this.output.push(` ${d}="${this.escapeXml(_)}"`);
                }
            }
          }
        }
      }
  }
  /**
   * Get href for cross-reference
   */
  getHref(t) {
    if (ln(t) && t.eIsProxy()) {
      const a = t.eProxyURI();
      return a ? this.helper.deresolve(a).toString() : null;
    }
    const n = this.getIntraResourceFragment(t);
    if (n)
      return n;
    const i = t.eResource?.();
    if (i) {
      const a = i.getURIFragment(t);
      if (a) {
        if (i === this.resource)
          return a;
        const o = i.getURI();
        return o ? `${o.toString()}#${a}` : `#${a}`;
      }
    }
    if ("getEContainingClass" in t && typeof t.getEContainingClass == "function") {
      const a = t.getEContainingClass();
      if (a) {
        const o = a.getEPackage?.(), c = a.getName?.(), d = t.getName?.();
        if (o && c && d) {
          const _ = o.getNsURI?.();
          if (_)
            return `${_}#//${c}/${d}`;
        }
      }
    }
    if ("getEPackage" in t && typeof t.getEPackage == "function") {
      const a = t.getEPackage();
      if (a) {
        const o = a.getNsURI?.(), c = t.getName?.();
        if (o && c)
          return `${o}#//${c}`;
      }
    }
    if ("getName" in t) {
      const a = t.getName?.();
      if (a)
        return `//${a}`;
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
  getIntraResourceFragment(t) {
    if (!this.resource)
      return null;
    const n = [];
    let i = null;
    if ("getEContainingClass" in t && typeof t.getEContainingClass == "function") {
      const o = t.getEContainingClass();
      if (!o)
        return null;
      const c = t.getName?.(), d = o.getName?.();
      if (!c || !d)
        return null;
      n.push(d, c), i = o.getEPackage?.() ?? null;
    } else if ("getEPackage" in t && typeof t.getEPackage == "function") {
      const o = t.getName?.();
      if (!o)
        return null;
      n.push(o), i = t.getEPackage();
    }
    if (!i)
      return null;
    for (; i; ) {
      const o = typeof i.getESuperPackage == "function" ? i.getESuperPackage() : null;
      if (!o)
        break;
      const c = i.getName?.();
      c && n.unshift(c), i = o;
    }
    const a = this.resource.getContents();
    for (const o of a)
      if (o === i)
        return "#//" + n.join("/");
    return null;
  }
  /**
   * Get href with type prefix for cross-document references when the declared
   * type is abstract and differs from the actual type.
   * Java EMF format: "prefix:TypeName URI#fragment"
   */
  getTypePrefixedHref(t, n) {
    const i = this.getHref(n);
    if (!i)
      return null;
    const a = n.eResource?.();
    if (a && a === this.resource || i.startsWith("/") || i.startsWith("#"))
      return i;
    const o = t.getEType(), c = n.eClass();
    if (o && c && c !== o && "isAbstract" in o && o.isAbstract()) {
      const d = c.getEPackage();
      if (d) {
        const _ = this.getPrefix(d), T = c.getName();
        if (_ && T)
          return `${_}:${T} ${i}`;
      }
    }
    return i;
  }
  /**
   * Check if feature is an attribute (not a reference)
   */
  isAttribute(t) {
    return !("isContainment" in t);
  }
  /**
   * Check if object has element content (containments, multi-valued non-containment refs, or EMD element features)
   */
  hasElementContent(t) {
    const i = t.eClass().getEAllStructuralFeatures(), a = this.helper.getExtendedMetaData();
    if (a)
      for (const o of i) {
        if (o.isTransient() || o.isDerived() || !this.isAttribute(o) || a.getFeatureKind(o) !== ms)
          continue;
        const c = t.eGet(o);
        if (c != null)
          return !0;
      }
    for (const o of i)
      if ("isContainment" in o) {
        const c = o;
        if (o.isTransient())
          continue;
        const d = t.eGet(c);
        if (d == null)
          continue;
        if (c.isContainment()) {
          if ((Array.isArray(d) || Qe(d)) && d.length > 0 || !Array.isArray(d) && !Qe(d))
            return !0;
        } else if (o.isMany() && (Array.isArray(d) || Qe(d)) && d.length > 0)
          for (const _ of d) {
            const T = _.eResource?.();
            if (!T || T !== this.resource)
              return !0;
          }
      }
    return !1;
  }
  /**
   * Write element content (containments and multi-valued non-containment references)
   */
  writeElements(t) {
    const n = t.eClass(), i = this.helper.getExtendedMetaData();
    if (i)
      for (const a of n.getEAllStructuralFeatures()) {
        if (a.isTransient() || a.isDerived() || !this.isAttribute(a) || i.getFeatureKind(a) !== ms)
          continue;
        const c = t.eGet(a);
        if (c == null)
          continue;
        const d = this.getSerializedElementName(a, i), _ = a;
        if (a.isMany() && (Array.isArray(c) || Qe(c))) {
          for (const T of c)
            if (T != null) {
              this.writeIndent();
              const x = this.convertSingleValueToString(_, T);
              this.output.push(`<${d}>${this.escapeXml(x)}</${d}>
`);
            }
        } else {
          this.writeIndent();
          const T = this.convertToString(_, c);
          this.output.push(`<${d}>${this.escapeXml(T)}</${d}>
`);
        }
      }
    for (const a of n.getEAllStructuralFeatures())
      if ("isContainment" in a) {
        const o = a;
        if (a.isTransient())
          continue;
        const c = t.eGet(o);
        if (c == null)
          continue;
        if (o.isContainment())
          if (Array.isArray(c) || Qe(c))
            for (const d of c)
              this.writeElement(o, d);
          else
            this.writeElement(o, c);
        else if (a.isMany() && (Array.isArray(c) || Qe(c)) && c.length > 0)
          for (const d of c) {
            const _ = this.resolveValue(d, t);
            if (_ == null)
              continue;
            const T = typeof _ != "string" ? _.eResource?.() : null;
            if (T && T === this.resource)
              continue;
            const x = typeof _ == "string" ? _ : this.getHref(_);
            x && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(o)} href="${this.escapeXml(x)}"/>
`));
          }
      }
  }
  /**
   * Write a single element
   */
  writeElement(t, n) {
    const i = this.helper.getExtendedMetaData(), a = this.getSerializedElementName(t, i) || "element";
    this.writeIndent(), this.output.push(`<${a}`);
    const o = t.getEType(), c = n.eClass();
    if (o && c && c !== o) {
      const T = c.getEPackage(), x = T ? this.getPrefix(T) : "", v = x ? `${x}:${c.getName()}` : c.getName();
      this.output.push(` xsi:type="${v}"`);
    }
    this.saveID(n), this.writeAttributes(n);
    const d = this.getSimpleContentText(n, i), _ = this.hasElementContent(n);
    d !== null ? (this.output.push(`>${this.escapeXml(d)}`), _ && (this.output.push(`
`), this.indent++, this.writeElements(n), this.indent--, this.writeIndent()), this.output.push(`</${a}>
`)) : _ ? (this.output.push(`>
`), this.indent++, this.writeElements(n), this.indent--, this.writeIndent(), this.output.push(`</${a}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Resolve a value if it's a proxy.
   * Returns the resolved value or the original value if not a proxy or cannot be resolved.
   */
  resolveValue(t, n) {
    if (t == null)
      return t;
    if (ln(t) && t.eIsProxy()) {
      if ("eResolveProxy" in n && typeof n.eResolveProxy == "function") {
        const a = n.eResolveProxy(t);
        if (a !== t && !(ln(a) && a.eIsProxy()))
          return a;
      }
      const i = t.eProxyURI();
      if (i && this.resource) {
        const a = this.resource.getResourceSet();
        if (a) {
          const o = i.toString(), c = o.indexOf("#");
          if (c >= 0) {
            const d = o.substring(c + 1);
            let _ = this.resource;
            if (c > 0) {
              const T = ne.createURI(o.substring(0, c));
              _ = a.getResource(T, !0) || this.resource;
            }
            if (_) {
              const T = _.getEObject(d);
              if (T)
                return T;
            }
          }
        }
      }
      return i?.toString() || null;
    }
    return t;
  }
  /**
   * Convert value to string
   */
  convertToString(t, n) {
    if (n == null)
      return "";
    if (Array.isArray(n) || Qe(n)) {
      const a = [];
      for (const o of n)
        o != null && a.push(this.convertSingleValueToString(t, o));
      return a.join(" ");
    }
    if (fr(t.getEType()))
      return this.convertSingleValueToString(t, n);
    if (typeof n == "string")
      return n;
    if (typeof n == "boolean")
      return n ? "true" : "false";
    if (typeof n == "number")
      return String(n);
    if (n && typeof n == "object" && "eClass" in n)
      return "getName" in n && typeof n.getName == "function" && n.getName() || "";
    const i = t.getEType();
    if (i && "getEPackage" in i) {
      const a = i.getEPackage();
      if (a) {
        const o = a.getEFactoryInstance();
        if (o)
          return o.convertToString(i, n);
      }
    }
    return String(n);
  }
  /**
   * Convert a single value to string (helper for arrays)
   */
  convertSingleValueToString(t, n) {
    if (n == null)
      return "";
    if (!fr(t.getEType())) {
      if (typeof n == "string")
        return n;
      if (typeof n == "boolean")
        return n ? "true" : "false";
      if (typeof n == "number")
        return String(n);
    }
    const a = t.getEType();
    if (a && "getEPackage" in a) {
      const o = a.getEPackage();
      if (o) {
        const c = o.getEFactoryInstance();
        if (c)
          return c.convertToString(a, n);
      }
    }
    return String(n);
  }
  /**
   * Get the text content for a simple-content class, or null if not applicable.
   */
  getSimpleContentText(t, n) {
    if (!n)
      return null;
    const i = t.eClass();
    if (n.getContentKind(i) !== Ji)
      return null;
    const a = n.getSimpleContentFeature(i);
    if (!a)
      return null;
    const o = t.eGet(a);
    return o == null ? null : typeof o == "string" ? o : typeof o == "boolean" ? o ? "true" : "false" : String(o);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(t, n) {
    if (n) {
      const i = n.getNamespace(t), a = n.getName(t) ?? t.getName() ?? "";
      if (i) {
        const o = this.getNamespacePrefix(i);
        if (o)
          return `${o}:${a}`;
      }
      if (a && !a.startsWith(":"))
        return a;
    }
    return this.helper.getSerializedFeatureName(t);
  }
  /**
   * Get the serialized element name, including namespace prefix if EMD specifies one.
   */
  getSerializedElementName(t, n) {
    if (n) {
      const i = n.getNamespace(t), a = n.getName(t) ?? t.getName() ?? "";
      if (i) {
        const o = this.getNamespacePrefix(i);
        if (o)
          return `${o}:${a}`;
      }
      if (a && !a.startsWith(":"))
        return a;
    }
    return this.helper.getSerializedFeatureName(t);
  }
  /**
   * Get or create a namespace prefix for the given URI.
   */
  getNamespacePrefix(t) {
    const n = this.declaredNamespaces.get(t);
    return n || (t === "http://www.w3.org/XML/1998/namespace" ? "xml" : null);
  }
  /**
   * Escape XML special characters
   */
  escapeXml(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /**
   * Write indentation
   */
  writeIndent() {
    for (let t = 0; t < this.indent; t++)
      this.output.push(this.indentString);
  }
}
class ZE extends el {
  constructor(t) {
    super(t), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(t) {
    super.writeNamespaces(t);
  }
}
class tl extends Jo {
  constructor(t) {
    super(t), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new pr(this);
  }
  /**
   * Get EObject by ID
   */
  getEObject(t) {
    const n = this.idToEObjectMap.get(t);
    return n || super.getEObject(t);
  }
  /**
   * Get URI fragment for an object
   */
  getURIFragment(t) {
    const n = this.eObjectToIDMap.get(t);
    return n || super.getURIFragment(t);
  }
  /**
   * Set ID for an object
   */
  setID(t, n) {
    n && (this.idToEObjectMap.set(n, t), this.eObjectToIDMap.set(t, n));
  }
  /**
   * Get ID for an object
   */
  getID(t) {
    return this.eObjectToIDMap.get(t) ?? null;
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
  async load(t) {
    const i = this.getResourceSet()?.getURIConverter(), a = this.getURI();
    if (i && a)
      try {
        const o = await i.createInputStream(a), c = await e_(o);
        this.loadFromString(c, t);
      } catch {
        this.loaded = !0;
      }
    else
      this.loaded = !0;
  }
  /**
   * Load from XML string
   */
  loadFromString(t, n) {
    this.clearIdMaps();
    const i = n || /* @__PURE__ */ new Map();
    this.createXMLLoad().load(this, t, i), this.loaded = !0;
  }
  /**
   * Create the XML loader
   */
  createXMLLoad() {
    return new Vo(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new el(this.xmlHelper);
  }
  /**
   * Save to XML string
   */
  saveToString(t) {
    const n = t || /* @__PURE__ */ new Map();
    return this.createXMLSave().save(this, n);
  }
  /**
   * Save a subset of objects to XML string.
   * Uses this resource's context (IDs, reference resolution) but only
   * serializes the given objects as root elements.
   */
  saveContents(t, n) {
    const i = n || /* @__PURE__ */ new Map();
    return this.createXMLSave().saveObjects(this, t, i);
  }
  /**
   * Unload resource
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class VE extends tl {
  createXMLLoad() {
    return new HE(this.xmlHelper);
  }
  createXMLSave() {
    return new ZE(this.xmlHelper);
  }
}
async function e_(y) {
  const t = y.getReader(), n = new TextDecoder();
  let i = "";
  for (; ; ) {
    const { done: a, value: o } = await t.read();
    if (a)
      break;
    i += n.decode(o, { stream: !0 });
  }
  return i += n.decode(), i;
}
class t_ {
  createResource(t) {
    return new tl(t);
  }
}
class nl {
  createResource(t) {
    return new VE(t);
  }
}
const qn = hr.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
qn.has("xml") || qn.set("xml", new t_());
qn.has("xmi") || qn.set("xmi", new nl());
qn.has("ecore") || qn.set("ecore", new nl());
class n_ {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(t, n, i) {
    this.resource = t, this.packageRegistry = t.getResourceSet()?.getPackageRegistry() || Pt.INSTANCE, this.forwardReferences = [], this.errors = [];
    let a;
    try {
      a = JSON.parse(n);
    } catch (o) {
      this.error(`Invalid JSON: ${o instanceof Error ? o.message : String(o)}`);
      return;
    }
    if (Array.isArray(a))
      for (const o of a) {
        const c = this.loadObject(o);
        c && t.getContents().push(c);
      }
    else if (a && typeof a == "object") {
      const o = this.loadObject(a);
      o && t.getContents().push(o);
    }
    this.handleForwardReferences();
  }
  /**
   * Load a single JSON object into an EObject.
   */
  loadObject(t, n) {
    const i = this.resolveEClass(t, n);
    if (!i)
      return this.error(`Cannot determine type for object: ${JSON.stringify(t).substring(0, 100)}`), null;
    const a = i.getEPackage();
    if (!a)
      return this.error(`No package for class '${i.getName()}'`), null;
    const c = a.getEFactoryInstance().create(i);
    for (const [d, _] of Object.entries(t)) {
      if (d === "eClass" || _ == null)
        continue;
      const T = i.getEStructuralFeature(d);
      if (!T) {
        this.error(`Unknown feature '${d}' for type '${i.getName()}'`);
        continue;
      }
      if (this.isAttribute(T))
        this.loadAttribute(c, T, _);
      else {
        const x = T;
        x.isContainment() ? this.loadContainment(c, x, _) : this.loadCrossReference(c, x, _);
      }
    }
    return c;
  }
  /**
   * Resolve the EClass for a JSON object.
   * Uses `eClass` property if present, otherwise falls back to expectedType.
   */
  resolveEClass(t, n) {
    const i = t.eClass;
    return i ? this.resolveType(i) : n || null;
  }
  /**
   * Resolve an eClass type URI (`nsURI#//ClassName`) to an EClass.
   */
  resolveType(t) {
    const n = t.indexOf("#");
    if (n < 0)
      return this.error(`Invalid eClass URI (no '#'): ${t}`), null;
    const i = t.substring(0, n);
    let a = t.substring(n + 1);
    for (; a.startsWith("/"); )
      a = a.substring(1);
    const o = this.packageRegistry.getEPackage(i);
    if (!o)
      return this.error(`Package not found for nsURI: ${i}`), null;
    const c = o.getEClassifier(a);
    return c ? "getESuperTypes" in c ? c : (this.error(`'${a}' is not an EClass`), null) : (this.error(`Classifier '${a}' not found in package '${i}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(t, n, i) {
    if (n.isMany()) {
      const a = Array.isArray(i) ? i : [i], o = t.eGet(n);
      if (o && (Array.isArray(o) || Qe(o)))
        for (const c of a)
          o.push(this.convertAttributeValue(n, c));
      else
        t.eSet(n, a.map((c) => this.convertAttributeValue(n, c)));
    } else
      t.eSet(n, this.convertAttributeValue(n, i));
  }
  /**
   * Convert a JSON value to the appropriate attribute type using EFactory.createFromString.
   */
  convertAttributeValue(t, n) {
    if (n == null)
      return null;
    if (typeof n == "string" || typeof n == "number" || typeof n == "boolean") {
      if (typeof n == "string") {
        const i = t.getEType();
        if (i && "getEPackage" in i) {
          const a = i.getEPackage();
          if (a) {
            const o = a.getEFactoryInstance();
            if (o)
              try {
                return o.createFromString(i, n);
              } catch {
              }
          }
        }
      }
      return n;
    }
    return n;
  }
  /**
   * Load a containment reference value (nested objects).
   */
  loadContainment(t, n, i) {
    const a = n.getEType() && "getESuperTypes" in n.getEType() ? n.getEType() : void 0;
    if (n.isMany()) {
      const o = Array.isArray(i) ? i : [i], c = t.eGet(n);
      for (const d of o)
        if (d && typeof d == "object") {
          const _ = this.loadObject(d, a);
          _ && c && (Array.isArray(c) || Qe(c)) && c.push(_);
        }
    } else if (i && typeof i == "object" && !Array.isArray(i)) {
      const o = this.loadObject(i, a);
      o && t.eSet(n, o);
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(t, n, i) {
    if (n.isMany()) {
      const a = Array.isArray(i) ? i : [i];
      for (const o of a)
        o && typeof o == "object" && "$ref" in o && this.forwardReferences.push({
          object: t,
          feature: n,
          value: o.$ref
        });
    } else
      i && typeof i == "object" && "$ref" in i && this.forwardReferences.push({
        object: t,
        feature: n,
        value: i.$ref
      });
  }
  /**
   * Resolve all forward references collected during loading.
   */
  handleForwardReferences() {
    for (const t of this.forwardReferences) {
      const n = this.resolveReference(t.value);
      if (n)
        this.setReferenceValue(t.object, t.feature, n);
      else {
        const i = this.createProxy(t.feature, t.value);
        i ? this.setReferenceValue(t.object, t.feature, i) : this.error(`Unresolved reference: ${t.value}`);
      }
    }
    this.forwardReferences = [];
  }
  /**
   * Set a reference value on an object (handles single and multi-valued).
   */
  setReferenceValue(t, n, i) {
    if (n.isMany()) {
      const a = t.eGet(n);
      a && (Array.isArray(a) || Qe(a)) && a.push(i);
    } else
      t.eSet(n, i);
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(t) {
    const n = t.indexOf("#");
    if (n > 0) {
      const i = t.substring(0, n), a = t.substring(n + 1), o = this.resource.getURI();
      if (o && o.toString() === i)
        return this.resource.getEObject(a);
      const c = this.packageRegistry.getEPackage(i);
      if (c)
        return this.resolveFragmentInPackage(c, a);
      const d = this.resource.getResourceSet();
      if (d) {
        const _ = ne.createURI(i), T = d.getResource(_, !0);
        if (T)
          return T.getEObject(a);
      }
      return null;
    }
    return t.startsWith("#") ? this.resource.getEObject(t.substring(1)) : t.startsWith("/") ? this.resource.getEObject(t) : this.resource.getEObject(t);
  }
  /**
   * Resolve a fragment path within an EPackage.
   */
  resolveFragmentInPackage(t, n) {
    let i = n;
    for (; i.startsWith("/"); )
      i = i.substring(1);
    if (!i)
      return t;
    const a = i.split("/"), o = Es(t, i);
    if (o)
      return o;
    if (a.length >= 2) {
      let c = t;
      for (let T = 0; T < a.length - 2; T++) {
        const x = c.getESubpackages();
        let v = null;
        for (let R = 0; R < x.length; R++)
          if (x.get(R).getName() === a[T]) {
            v = x.get(R);
            break;
          }
        if (!v)
          return null;
        c = v;
      }
      const d = a[a.length - 2], _ = c.getEClassifier(d);
      if (_ && "getEStructuralFeature" in _) {
        const T = _.getEStructuralFeature(a[a.length - 1]);
        if (T)
          return T;
      }
    }
    return null;
  }
  /**
   * Create a proxy for an unresolved reference.
   */
  createProxy(t, n) {
    let i;
    const a = n.indexOf("#");
    if (a > 0)
      i = ne.createURI(n);
    else if (a === 0) {
      const _ = this.resource.getURI();
      _ ? i = ne.createURI(_.toString() + n) : i = ne.createURI(n);
    } else {
      const _ = this.resource.getURI();
      _ ? i = ne.createURI(_.toString() + "#" + n) : i = ne.createURI("#" + n);
    }
    const o = t.getEType(), c = o && "getESuperTypes" in o ? o : null, d = new Qo(i, c || void 0);
    return d.eSetResource(this.resource), d;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(t) {
    return !("isContainment" in t);
  }
  /**
   * Report an error.
   */
  error(t) {
    this.errors.push(new Error(t));
  }
  /**
   * Get accumulated errors.
   */
  getErrors() {
    return this.errors;
  }
}
const Go = "SERIALIZE_TYPE", Wo = "INDENT", s_ = "always", r_ = "polymorphic";
class i_ {
  constructor() {
    this.serializeType = r_, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(t, n) {
    this.resource = t, n && (n.has(Go) && (this.serializeType = n.get(Go)), n.has(Wo) && (this.indent = n.get(Wo)));
    const i = t.getContents();
    if (i.size() === 0)
      return "{}";
    if (i.size() === 1) {
      const o = this.saveObject(i.get(0), void 0, !0);
      return JSON.stringify(o, null, this.indent);
    }
    const a = [];
    for (const o of i)
      a.push(this.saveObject(o, void 0, !0));
    return JSON.stringify(a, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(t, n, i = !1) {
    const a = {}, o = t.eClass();
    this.shouldSaveType(t, n, i) && (a.eClass = this.getEClassURI(o));
    for (const c of o.getEAllStructuralFeatures()) {
      if (c.isTransient() || c.isDerived())
        continue;
      const d = t.eGet(c);
      if (d != null)
        if (this.isAttribute(c))
          this.saveAttribute(a, t, c, d);
        else {
          const _ = c;
          _.isContainment() ? this.saveContainment(a, t, _, d) : this.saveCrossReference(a, t, _, d);
        }
    }
    return a;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(t, n, i, a) {
    try {
      const c = i.getDefaultValue();
      if (a === c)
        return;
    } catch {
    }
    const o = i.getName();
    if (i.isMany()) {
      const c = Array.isArray(a) || Qe(a) ? [...a] : [a];
      if (c.length === 0)
        return;
      t[o] = c.map((d) => this.convertAttributeValue(i, d));
    } else
      t[o] = this.convertAttributeValue(i, a);
  }
  /**
   * Convert a single attribute value to a JSON-compatible value.
   */
  convertAttributeValue(t, n) {
    if (n == null)
      return null;
    if (typeof n == "string" || typeof n == "number" || typeof n == "boolean")
      return n;
    const i = t.getEType();
    if (i && "getEPackage" in i) {
      const a = i.getEPackage();
      if (a) {
        const o = a.getEFactoryInstance();
        if (o)
          return o.convertToString(i, n);
      }
    }
    return String(n);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(t, n, i, a) {
    const o = i.getName();
    if (i.isMany()) {
      const c = Array.isArray(a) || Qe(a) ? [...a] : [a];
      if (c.length === 0)
        return;
      t[o] = c.map((d) => this.saveContainedChild(d, i));
    } else
      t[o] = this.saveContainedChild(a, i);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(t, n) {
    if (ln(t) && t.eIsProxy()) {
      const i = t.eProxyURI()?.toString();
      if (i)
        return { $ref: i };
    }
    return this.saveObject(t, n);
  }
  /**
   * Serialize a cross-reference (non-containment) as `{ "$ref": "uri#fragment" }`.
   */
  saveCrossReference(t, n, i, a) {
    const o = i.getName();
    if (i.isMany()) {
      const c = Array.isArray(a) || Qe(a) ? [...a] : [a];
      if (c.length === 0)
        return;
      const d = [];
      for (const _ of c) {
        const T = this.getHref(_);
        T && d.push({ $ref: T });
      }
      d.length > 0 && (t[o] = d);
    } else {
      const c = this.getHref(a);
      c && (t[o] = { $ref: c });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(t, n, i = !1) {
    if (this.serializeType === s_ || i)
      return !0;
    if (n && "isContainment" in n) {
      const o = n.getEType(), c = t.eClass();
      return !!(o && c && o !== c);
    }
    return !1;
  }
  /**
   * Get the emfjson-style type URI for an EClass: `nsURI#//ClassName`
   */
  getEClassURI(t) {
    const i = t.getEPackage()?.getNsURI(), a = t.getName();
    return i && a ? `${i}#//${a}` : a || "Unknown";
  }
  /**
   * Get href for a cross-referenced object.
   * Reuses the pattern from XMLSave.getHref().
   */
  getHref(t) {
    if (ln(t) && t.eIsProxy())
      return t.eProxyURI()?.toString() || null;
    const n = t.eResource?.();
    if (n) {
      const i = n.getURIFragment(t), a = n.getURI();
      if (a && i)
        return `${a.toString()}#${i}`;
      if (i)
        return `#${i}`;
    }
    if ("getEContainingClass" in t && typeof t.getEContainingClass == "function") {
      const i = t.getEContainingClass();
      if (i) {
        const a = i.getEPackage?.(), o = i.getName?.(), c = t.getName?.();
        if (a && o && c) {
          const d = a.getNsURI?.();
          if (d)
            return `${d}#//${o}/${c}`;
        }
      }
    }
    if ("getEPackage" in t && typeof t.getEPackage == "function") {
      const i = t.getEPackage();
      if (i) {
        const a = i.getNsURI?.(), o = t.getName?.();
        if (a && o)
          return `${a}#//${o}`;
      }
    }
    if ("getName" in t) {
      const i = t.getName?.();
      if (i)
        return `//${i}`;
    }
    return null;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(t) {
    return !("isContainment" in t);
  }
}
class a_ extends Jo {
  constructor(t) {
    super(t), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get EObject by ID or path fragment.
   */
  getEObject(t) {
    const n = this.idToEObjectMap.get(t);
    return n || super.getEObject(t);
  }
  /**
   * Get URI fragment for an object.
   */
  getURIFragment(t) {
    const n = this.eObjectToIDMap.get(t);
    return n || super.getURIFragment(t);
  }
  /**
   * Set ID for an object.
   */
  setID(t, n) {
    n && (this.idToEObjectMap.set(n, t), this.eObjectToIDMap.set(t, n));
  }
  /**
   * Get ID for an object.
   */
  getID(t) {
    return this.eObjectToIDMap.get(t) ?? null;
  }
  clearIdMaps() {
    this.idToEObjectMap.clear(), this.eObjectToIDMap.clear();
  }
  /**
   * Load from a JSON string.
   */
  loadFromString(t, n) {
    this.clearIdMaps();
    const i = n || /* @__PURE__ */ new Map(), a = this.createJSONLoad();
    a.load(this, t, i);
    const o = a.getErrors();
    if (o.length > 0) {
      const c = this.getErrors();
      for (const d of o)
        c.push({ message: d.message });
    }
    this.loaded = !0;
  }
  /**
   * Save to a JSON string.
   */
  saveToString(t) {
    const n = t || /* @__PURE__ */ new Map();
    return this.createJSONSave().save(this, n);
  }
  /**
   * Create the JSON loader.
   */
  createJSONLoad() {
    return new n_();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new i_();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class u_ {
  createResource(t) {
    return new a_(t);
  }
}
const $o = hr.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
$o.has("json") || $o.set("json", new u_());
class o_ {
  constructor() {
    this._getEcorePackage = null;
  }
  /**
   * Register the getEcorePackage function
   */
  register(t) {
    this._getEcorePackage = t;
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
const be = new o_();
class Ee extends bt {
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
  setName(t) {
    this._name = t;
  }
  isAbstract() {
    return this.abstract_;
  }
  setAbstract(t) {
    this.abstract_ = t;
  }
  isInterface() {
    return this.interface_;
  }
  setInterface(t) {
    this.interface_ = t;
  }
  getESuperTypes() {
    return this.eSuperTypes;
  }
  getEAllSuperTypes() {
    const t = [], n = /* @__PURE__ */ new Set(), i = (a) => {
      for (const o of a.getESuperTypes())
        n.has(o) || (n.add(o), i(o), t.push(o));
    };
    return i(this), t;
  }
  getEIDAttribute() {
    for (const t of this.getEAllAttributes())
      if (t.isID())
        return t;
    return null;
  }
  getEStructuralFeatures() {
    if (this._eStructuralFeatures === null) {
      const t = this, n = new lE(this, () => {
        if (be.isRegistered())
          try {
            const i = be.getEClassClass();
            if (i !== t && i instanceof Ee && i._eStructuralFeatures !== null)
              return i.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (i, a) => {
        "setEContainingClass" in i && i.setEContainingClass(a), a && "setFeatureID" in i && i.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = cn(n);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    const t = [];
    for (const n of this.getEAllSuperTypes())
      t.push(...n.getEStructuralFeatures());
    return t.push(...this.getEStructuralFeatures()), t;
  }
  getEAttributes() {
    return this.getEStructuralFeatures().filter((t) => this.isAttribute(t));
  }
  getEAllAttributes() {
    return this.getEAllStructuralFeatures().filter((t) => this.isAttribute(t));
  }
  getEReferences() {
    return this.getEStructuralFeatures().filter((t) => this.isReference(t));
  }
  getEAllReferences() {
    return this.getEAllStructuralFeatures().filter((t) => this.isReference(t));
  }
  getEAllContainments() {
    return this.getEAllReferences().filter((t) => t.isContainment());
  }
  getEOperations() {
    return this.eOperations;
  }
  getEAllOperations() {
    const t = [...this.eOperations];
    for (const n of this.getEAllSuperTypes())
      t.push(...n.getEOperations());
    return t;
  }
  getEStructuralFeature(t) {
    if (typeof t == "string") {
      const n = this.getEAllStructuralFeatures().find((a) => a.getName() === t);
      if (n)
        return n;
      const i = this.xmlNameToFeature.get(t);
      if (i)
        return i;
      for (const a of this.getEAllSuperTypes())
        if (a instanceof Ee) {
          const o = a.xmlNameToFeature.get(t);
          if (o)
            return o;
        }
      return null;
    } else
      return this.getEAllStructuralFeatures()[t] || null;
  }
  /**
   * Register an XML serialization name for a feature (from ExtendedMetaData annotations)
   */
  registerXmlName(t, n) {
    this.xmlNameToFeature.set(t, n);
  }
  isSuperTypeOf(t) {
    return t.getEAllSuperTypes().includes(this);
  }
  getFeatureCount() {
    return this.getEAllStructuralFeatures().length;
  }
  getFeatureID(t) {
    return this.getEAllStructuralFeatures().indexOf(t);
  }
  getEOperation(t) {
    return this.getEAllOperations()[t] || null;
  }
  getOperationCount() {
    return this.getEAllOperations().length;
  }
  getOperationID(t) {
    return this.getEAllOperations().indexOf(t);
  }
  // EClassifier methods
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(t) {
    this.instanceClassName = t;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(t) {
    this.instanceClass = t;
  }
  getDefaultValue() {
    return null;
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(t) {
    this.instanceClassName = t;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(t) {
    this.ePackage = t;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(t) {
    if (!t || typeof t != "object" || !("eClass" in t))
      return !1;
    const n = t.eClass();
    return n === this || this.isSuperTypeOf(n);
  }
  getClassifierID() {
    return this.ePackage ? this.ePackage.getEClassifiers().indexOf(this) : -1;
  }
  // Helpers
  isAttribute(t) {
    return "getEAttributeType" in t;
  }
  isReference(t) {
    return "getEReferenceType" in t;
  }
  /**
   * Add feature to this class.
   * Uses the EList's add() method which automatically:
   * - Sets the container (eSetContainer)
   * - Sets the inverse reference (eContainingClass)
   * - Fires notifications for adapters
   * - Assigns a featureID
   */
  addFeature(t) {
    this.getEStructuralFeatures().add(t);
  }
  /**
   * Add operation to this class
   */
  addOperation(t) {
    this.eOperations.push(t);
  }
  /**
   * Add super type
   */
  addSuperType(t) {
    this.eSuperTypes.push(t);
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEClassClass();
  }
  /**
   * Override eGet to handle class-specific features
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle class-specific features
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this._name = n, super.eSet(t, n);
        break;
      case "abstract":
        this.abstract_ = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "interface":
        this.interface_ = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "eSuperTypes":
        Array.isArray(n) && (this.eSuperTypes = n), super.eSet(t, n);
        break;
      case "eStructuralFeatures":
        const a = this.getEStructuralFeatures();
        a.clear(), Array.isArray(n) ? a.addAll(n) : n && typeof n[Symbol.iterator] == "function" && a.addAll([...n]);
        break;
      case "eOperations":
        Array.isArray(n) && (this.eOperations = n), super.eSet(t, n);
        break;
      case "eTypeParameters":
        Array.isArray(n) && (this.eTypeParameters = n), super.eSet(t, n);
        break;
      case "eGenericSuperTypes":
        Array.isArray(n) && (this.eGenericSuperTypes = n), super.eSet(t, n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n), super.eSet(t, n);
        break;
      case "instanceClassName":
        this.instanceClassName = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class l_ {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const t = {
      fromString: (v) => v.toLowerCase() === "true",
      toString: (v) => String(v)
    };
    this.registerByClassName("boolean", t), this.registerByClassName("java.lang.Boolean", t), this.registerByName("EBoolean", t), this.registerByName("EBooleanObject", t);
    const n = {
      fromString: (v) => parseInt(v, 10),
      toString: (v) => String(v)
    };
    this.registerByClassName("int", n), this.registerByClassName("java.lang.Integer", n), this.registerByClassName("short", n), this.registerByClassName("java.lang.Short", n), this.registerByClassName("byte", n), this.registerByClassName("java.lang.Byte", n), this.registerByName("EInt", n), this.registerByName("EIntegerObject", n), this.registerByName("EShort", n), this.registerByName("EShortObject", n), this.registerByName("EByte", n), this.registerByName("EByteObject", n);
    const i = {
      fromString: (v) => {
        const R = parseInt(v, 10);
        return Math.abs(R) > Number.MAX_SAFE_INTEGER ? BigInt(v) : R;
      },
      toString: (v) => String(v)
    };
    this.registerByClassName("long", i), this.registerByClassName("java.lang.Long", i), this.registerByName("ELong", i), this.registerByName("ELongObject", i);
    const a = {
      fromString: (v) => parseFloat(v),
      toString: (v) => String(v)
    };
    this.registerByClassName("float", a), this.registerByClassName("java.lang.Float", a), this.registerByClassName("double", a), this.registerByClassName("java.lang.Double", a), this.registerByName("EFloat", a), this.registerByName("EFloatObject", a), this.registerByName("EDouble", a), this.registerByName("EDoubleObject", a);
    const o = {
      fromString: (v) => v,
      toString: (v) => v ?? ""
    };
    this.registerByClassName("java.lang.String", o), this.registerByClassName("java.lang.Object", o), this.registerByName("EString", o);
    const c = {
      fromString: (v) => v.charAt(0) || "",
      toString: (v) => v ?? ""
    };
    this.registerByClassName("char", c), this.registerByClassName("java.lang.Character", c), this.registerByName("EChar", c), this.registerByName("ECharacterObject", c);
    const d = {
      fromString: (v) => new Date(v),
      toString: (v) => v?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", d), this.registerByName("EDate", d);
    const _ = {
      fromString: (v) => v,
      // Keep as string to preserve precision
      toString: (v) => v ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", _), this.registerByClassName("java.math.BigInteger", _), this.registerByName("EBigDecimal", _), this.registerByName("EBigInteger", _);
    const T = {
      fromString: (v) => {
        if (typeof atob == "function") {
          const R = atob(v), M = new Uint8Array(R.length);
          for (let Y = 0; Y < R.length; Y++)
            M[Y] = R.charCodeAt(Y);
          return M;
        }
        return new Uint8Array(Buffer.from(v, "base64"));
      },
      toString: (v) => typeof btoa == "function" ? btoa(String.fromCharCode(...v)) : Buffer.from(v).toString("base64")
    };
    this.registerByClassName("byte[]", T), this.registerByName("EByteArray", T);
    const x = {
      fromString: (v) => v,
      toString: (v) => String(v ?? "")
    };
    this.registerByName("EFeatureMapEntry", x);
  }
  /**
   * Register a converter by instanceClassName
   */
  registerByClassName(t, n) {
    this.convertersByClassName.set(t, n);
  }
  /**
   * Register a converter by DataType name
   */
  registerByName(t, n) {
    this.convertersByName.set(t, n);
  }
  /**
   * Get converter for a DataType
   */
  getConverter(t) {
    const n = t.getInstanceClassName();
    if (n) {
      const a = this.convertersByClassName.get(n);
      if (a)
        return a;
    }
    const i = t.getName();
    if (i) {
      const a = this.convertersByName.get(i);
      if (a)
        return a;
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
  createFromString(t, n) {
    if (fr(t)) {
      if (n == null)
        return null;
      const a = this.resolveEEnumLiteral(t, n);
      if (!a)
        throw new Error(`The value '${n}' is not a valid enumerator of '${t.getName()}'`);
      return a.getInstance() ?? a;
    }
    const i = this.getConverter(t);
    return i ? i.fromString(n) : n;
  }
  /**
   * Convert a value to a string literal using the DataType's converter.
   *
   * For an EEnum the literal string is written, not the name - Java EMF
   * serializes enum values via EEnumLiteralImpl.toString(), which is getLiteral().
   */
  convertToString(t, n) {
    if (n == null)
      return "";
    if (fr(t)) {
      const a = this.findEEnumLiteral(t, n);
      if (a)
        return a.getLiteral() ?? "";
    }
    const i = this.getConverter(t);
    return i ? i.toString(n) : String(n);
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
  resolveEEnumLiteral(t, n) {
    const i = t.getEEnumLiteralByLiteral(n);
    if (i)
      return i;
    const a = t.getEEnumLiteral(n);
    if (a)
      return a;
    const o = n.trim();
    return /^-?\d+$/.test(o) ? t.getEEnumLiteral(Number(o)) : null;
  }
  /**
   * Resolve an enum value to its EEnumLiteral. Accepts the literal itself as
   * well as the `instance` a generated enum carries.
   */
  findEEnumLiteral(t, n) {
    if (n && typeof n == "object" && typeof n.getLiteral == "function")
      return n;
    for (const i of t.getELiterals())
      if (i.getInstance() === n)
        return i;
    return null;
  }
  /**
   * Check if a converter is registered for a DataType
   */
  hasConverter(t) {
    return this.getConverter(t) !== null;
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
const G = new l_();
class dr {
  constructor() {
    this.ePackage = null, this.creators = /* @__PURE__ */ new Map();
  }
  getEPackage() {
    if (!this.ePackage)
      throw new Error("EPackage not set on factory");
    return this.ePackage;
  }
  setEPackage(t) {
    this.ePackage = t, t && typeof t.setEFactoryInstance == "function" && t.setEFactoryInstance(this);
  }
  create(t) {
    const n = this.creators.get(t);
    return n ? n() : this.createDynamic(t);
  }
  /**
   * Create a dynamic EObject instance
   */
  createDynamic(t) {
    if (t.isAbstract())
      throw new Error(`Cannot instantiate abstract class: ${t.getName()}`);
    if (t.isInterface())
      throw new Error(`Cannot instantiate interface: ${t.getName()}`);
    return new Ho(t);
  }
  createFromString(t, n) {
    return G.createFromString(t, n);
  }
  convertToString(t, n) {
    return G.convertToString(t, n);
  }
  /**
   * Register a creator function for a specific EClass
   */
  registerCreator(t, n) {
    this.creators.set(t, n);
  }
  // EModelElement methods
  getEAnnotations() {
    return [];
  }
  getEAnnotation(t) {
    return null;
  }
  // EObject methods
  eClass() {
    return be.getEFactoryClass();
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
  eGet(t) {
    return null;
  }
  eSet(t, n) {
  }
  eIsSet(t) {
    return !1;
  }
  eUnset(t) {
  }
  eInvoke(t, n) {
    return null;
  }
}
class c_ extends hn {
  constructor(t) {
    super(t, null), this.pkg = t;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && be.isRegistered()) {
      const n = be.getEPackageClass();
      this.feature = n.getEStructuralFeature("eClassifiers");
    }
    return this.feature;
  }
  didAdd(t, n) {
    "setEPackage" in n && typeof n.setEPackage == "function" && n.setEPackage(this.pkg), super.didAdd(t, n);
  }
  didAddMany(t, n) {
    for (const i of n)
      "setEPackage" in i && typeof i.setEPackage == "function" && i.setEPackage(this.pkg);
    super.didAddMany(t, n);
  }
  didRemove(t, n) {
    "setEPackage" in n && typeof n.setEPackage == "function" && n.setEPackage(null), super.didRemove(t, n);
  }
  didClear(t) {
    for (const n of t)
      "setEPackage" in n && typeof n.setEPackage == "function" && n.setEPackage(null);
    super.didClear(t);
  }
  didSet(t, n, i) {
    "setEPackage" in i && typeof i.setEPackage == "function" && i.setEPackage(null), "setEPackage" in n && typeof n.setEPackage == "function" && n.setEPackage(this.pkg), super.didSet(t, n, i);
  }
}
class h_ extends hn {
  constructor(t) {
    super(t, null), this.pkg = t;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && be.isRegistered()) {
      const t = be.getEPackageClass();
      this.feature = t.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(t, n) {
    n instanceof Mt && (n.eSuperPackage = this.pkg), super.didAdd(t, n);
  }
  didAddMany(t, n) {
    for (const i of n)
      i instanceof Mt && (i.eSuperPackage = this.pkg);
    super.didAddMany(t, n);
  }
  didRemove(t, n) {
    n instanceof Mt && (n.eSuperPackage = null), super.didRemove(t, n);
  }
  didClear(t) {
    for (const n of t)
      n instanceof Mt && (n.eSuperPackage = null);
    super.didClear(t);
  }
  didSet(t, n, i) {
    i instanceof Mt && (i.eSuperPackage = null), n instanceof Mt && (n.eSuperPackage = this.pkg), super.didSet(t, n, i);
  }
}
class Mt extends bt {
  /**
   * Constructor
   */
  constructor(t, n) {
    super(), this.name = null, this.nsURI = null, this.nsPrefix = null, this.eFactoryInstance = null, this._eClassifiers = null, this._eSubpackages = null, this.eSuperPackage = null, t && (this.nsURI = t), n && (this.eFactoryInstance = n);
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  getNsURI() {
    return this.nsURI;
  }
  setNsURI(t) {
    this.nsURI = t;
  }
  getNsPrefix() {
    return this.nsPrefix;
  }
  setNsPrefix(t) {
    this.nsPrefix = t;
  }
  getEFactoryInstance() {
    if (!this.eFactoryInstance) {
      const t = new dr();
      t.setEPackage(this), this.eFactoryInstance = t;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(t) {
    this.eFactoryInstance = t;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = cn(new c_(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = cn(new h_(this))), this._eSubpackages;
  }
  getESuperPackage() {
    return this.eSuperPackage;
  }
  getEClassifier(t) {
    const n = this.getEClassifiers();
    for (const i of n)
      if (typeof i.getName == "function") {
        if (i.getName() === t)
          return i;
      } else if (typeof i.eGet == "function" && typeof i.eClass == "function") {
        const a = i.eClass();
        if (a) {
          const o = a.getEStructuralFeature?.("name");
          if (o && i.eGet(o) === t)
            return i;
        }
      }
    return null;
  }
  /**
   * Add classifier to this package
   */
  addClassifier(t) {
    this.getEClassifiers().add(t);
  }
  /**
   * Add subpackage
   */
  addSubpackage(t) {
    this.getESubpackages().add(t);
  }
  // EObject methods
  getEAnnotations() {
    return [];
  }
  getEAnnotation(t) {
    return null;
  }
  eClass() {
    return be.getEPackageClass();
  }
  /**
   * Override eGet to handle package-specific features
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle package-specific features
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n, super.eSet(t, n);
        break;
      case "nsURI":
        this.nsURI = n, super.eSet(t, n);
        break;
      case "nsPrefix":
        this.nsPrefix = n, super.eSet(t, n);
        break;
      case "eClassifiers":
        if (Array.isArray(n) || n && typeof n[Symbol.iterator] == "function") {
          const a = this.getEClassifiers();
          a.clear();
          for (const o of n)
            a.add(o);
        }
        break;
      case "eSubpackages":
        if (Array.isArray(n) || n && typeof n[Symbol.iterator] == "function") {
          const a = this.getESubpackages();
          a.clear();
          for (const o of n)
            a.add(o);
        }
        break;
      case "eSuperPackage":
        this.eSuperPackage = n, super.eSet(t, n);
        break;
      case "eFactoryInstance":
        this.eFactoryInstance = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class sl extends bt {
  constructor() {
    super(...arguments), this.name = null, this.changeable = !0, this.volatile = !1, this.transient = !1, this.defaultValueLiteral = null, this.unsettable = !1, this.derived = !1, this.eType = null, this.eGenericType = null, this.eContainingClass = null, this.lowerBound = 0, this.upperBound = 1, this.featureID = -1, this.eAnnotations = [];
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  isChangeable() {
    return this.changeable;
  }
  setChangeable(t) {
    this.changeable = t;
  }
  isVolatile() {
    return this.volatile;
  }
  setVolatile(t) {
    this.volatile = t;
  }
  isTransient() {
    return this.transient;
  }
  setTransient(t) {
    this.transient = t;
  }
  getDefaultValueLiteral() {
    return this.defaultValueLiteral;
  }
  setDefaultValueLiteral(t) {
    this.defaultValueLiteral = t;
  }
  isUnsettable() {
    return this.unsettable;
  }
  setUnsettable(t) {
    this.unsettable = t;
  }
  isDerived() {
    return this.derived;
  }
  setDerived(t) {
    this.derived = t;
  }
  getEType() {
    if (this.eType && ln(this.eType) && this.eType.eIsProxy()) {
      const t = this.eType, n = t.eProxyURI();
      if (n) {
        const i = this.eResolveProxy(t);
        if (i !== t)
          return this.eType = i, this.eType;
        const a = n.toString(), o = a.indexOf("#");
        if (o > 0) {
          const c = a.substring(0, o), d = a.substring(o + 1), _ = [Pt.INSTANCE];
          let T = this.eResource()?.getResourceSet();
          if (!T) {
            let x = this.eContainingClass;
            for (; x; ) {
              if (typeof x.eResource == "function") {
                const v = x.eResource();
                if (v) {
                  T = v.getResourceSet();
                  break;
                }
              }
              x = x.getEPackage?.() ?? x.getESuperPackage?.() ?? x.eContainer?.();
            }
          }
          T && _.push(T.getPackageRegistry());
          for (const x of _) {
            const v = x.getEPackage(c);
            if (v) {
              const se = Es(v, d);
              if (se)
                return this.eType = se, this.eType;
            }
            let R = c;
            const M = R.lastIndexOf("/");
            M >= 0 && (R = R.substring(M + 1));
            const Y = R.indexOf(".");
            if (Y > 0 && (R = R.substring(0, Y)), R)
              for (const se of x.keys()) {
                const z = x.getEPackage(se);
                if (z && z.getName() === R) {
                  const ee = Es(z, d);
                  if (ee)
                    return this.eType = ee, this.eType;
                }
              }
          }
        }
      }
    }
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  setEType(t) {
    this.eType = t;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(t) {
    this.eGenericType = t;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(t) {
    this.eContainingClass = t;
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
  setLowerBound(t) {
    this.lowerBound = t;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(t) {
    this.upperBound = t;
  }
  getFeatureID() {
    return this.featureID;
  }
  setFeatureID(t) {
    this.featureID = t;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEStructuralFeatureClass();
  }
  /**
   * Override eGet to handle feature-specific properties
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle feature-specific properties
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n, super.eSet(t, n);
        break;
      case "changeable":
        this.changeable = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "volatile":
        this.volatile = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "transient":
        this.transient = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "defaultValueLiteral":
        this.defaultValueLiteral = n, super.eSet(t, n);
        break;
      case "unsettable":
        this.unsettable = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "derived":
        this.derived = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "eType":
        this.eType = n, super.eSet(t, n);
        break;
      case "eGenericType":
        this.eGenericType = n, super.eSet(t, n);
        break;
      case "lowerBound":
        this.lowerBound = typeof n == "number" ? n : parseInt(n, 10), super.eSet(t, n);
        break;
      case "upperBound":
        this.upperBound = typeof n == "number" ? n : parseInt(n, 10), super.eSet(t, n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n), super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class te extends sl {
  constructor() {
    super(...arguments), this.id = !1;
  }
  isID() {
    return this.id;
  }
  setID(t) {
    this.id = t;
  }
  getEAttributeType() {
    const t = this.getEType();
    return !t || !("isSerializable" in t) ? null : t;
  }
  getDefaultValue() {
    const t = this.getDefaultValueLiteral(), n = this.getEAttributeType();
    if (!n)
      return null;
    if (t === null)
      return n.getDefaultValue();
    const i = n.getEPackage()?.getEFactoryInstance();
    return i ? i.createFromString(n, t) : t;
  }
  eClass() {
    return be.getEAttributeClass();
  }
  /**
   * Override eGet to handle attribute-specific features
   */
  eGet(t) {
    switch (t.getName()) {
      case "iD":
        return this.id;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle attribute-specific features
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "iD":
        this.id = n === !0 || n === "true", super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class we extends sl {
  constructor() {
    super(...arguments), this.containment = !1, this.resolveProxies = !0, this.eOpposite = null, this.eKeys = [];
  }
  isContainment() {
    return this.containment;
  }
  setContainment(t) {
    this.containment = t;
  }
  isContainer() {
    return this.eOpposite ? this.eOpposite.isContainment() : !1;
  }
  isResolveProxies() {
    return this.resolveProxies;
  }
  setResolveProxies(t) {
    this.resolveProxies = t;
  }
  getEOpposite() {
    return this.eOpposite;
  }
  setEOpposite(t) {
    this.eOpposite !== t && (this.eOpposite && this.eOpposite.getEOpposite() === this && (this.eOpposite.eOpposite = null), this.eOpposite = t, t && t.getEOpposite() !== this && t.setEOpposite(this));
  }
  getEReferenceType() {
    const t = this.getEType();
    if (!t)
      throw new Error("Reference type not set");
    if (!("getEStructuralFeatures" in t))
      throw new Error("Reference type must be EClass");
    return t;
  }
  getEKeys() {
    return this.eKeys;
  }
  addEKey(t) {
    this.eKeys.push(t);
  }
  getDefaultValue() {
    return null;
  }
  eClass() {
    return be.getEReferenceClass();
  }
  /**
   * Override eGet to handle reference-specific features
   */
  eGet(t) {
    switch (t.getName()) {
      case "containment":
        return this.containment;
      case "resolveProxies":
        return this.resolveProxies;
      case "eOpposite":
        return this.eOpposite;
      case "eKeys":
        return this.eKeys;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle reference-specific features
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "containment":
        this.containment = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "resolveProxies":
        this.resolveProxies = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "eOpposite":
        this.eOpposite = n, super.eSet(t, n);
        break;
      case "eKeys":
        Array.isArray(n) && (this.eKeys = n), super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class ve extends bt {
  constructor() {
    super(...arguments), this.name = null, this.instanceClassName = null, this.instanceClass = null, this.ePackage = null, this.serializable = !0, this.eAnnotations = [], this.eTypeParameters = [];
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(t) {
    this.instanceClassName = t;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(t) {
    this.instanceClass = t;
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
  setInstanceTypeName(t) {
    this.instanceClassName = t;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(t) {
    this.ePackage = t;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(t) {
    const n = typeof t;
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return n === "boolean";
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
        return n === "number";
      case "java.lang.String":
        return n === "string";
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
  setSerializable(t) {
    this.serializable = t;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEDataTypeClass();
  }
  /**
   * Override eGet to handle datatype-specific features
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  /**
   * Override eSet to handle datatype-specific features
   */
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n, super.eSet(t, n);
        break;
      case "instanceClassName":
        this.instanceClassName = n, super.eSet(t, n);
        break;
      case "serializable":
        this.serializable = n === !0 || n === "true", super.eSet(t, n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n), super.eSet(t, n);
        break;
      case "eTypeParameters":
        Array.isArray(n) && (this.eTypeParameters = n), super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
(() => {
  const y = new ve();
  return y.setName("EString"), y.setInstanceClassName("java.lang.String"), y;
})();
(() => {
  const y = new ve();
  return y.setName("EInt"), y.setInstanceClassName("int"), y;
})();
(() => {
  const y = new ve();
  return y.setName("EBoolean"), y.setInstanceClassName("boolean"), y;
})();
(() => {
  const y = new ve();
  return y.setName("EFloat"), y.setInstanceClassName("float"), y;
})();
(() => {
  const y = new ve();
  return y.setName("EDouble"), y.setInstanceClassName("double"), y;
})();
(() => {
  const y = new ve();
  return y.setName("ELong"), y.setInstanceClassName("long"), y;
})();
(() => {
  const y = new ve();
  return y.setName("EDate"), y.setInstanceClassName("java.util.Date"), y;
})();
class f_ extends bt {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const n = be.getEAnnotationClass().getEStructuralFeature("details"), i = be.getEStringToStringMapEntryClass();
      this._detailsMap = CE(this, n, i);
    }
    return this._detailsMap;
  }
  getSource() {
    return this.source;
  }
  setSource(t) {
    this.source = t;
  }
  getDetails() {
    return this.getOrCreateDetailsMap();
  }
  getEModelElement() {
    return this.eModelElement;
  }
  setEModelElement(t) {
    this.eModelElement = t;
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
  getEAnnotation(t) {
    return null;
  }
  eClass() {
    return be.getEAnnotationClass();
  }
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "source":
        this.source = n, super.eSet(t, n);
        break;
      case "details":
        if (n instanceof Map) {
          const a = this.getOrCreateDetailsMap();
          a.clear();
          for (const [o, c] of n)
            a.putByKey(o, c);
        }
        super.eSet(t, n);
        break;
      case "eModelElement":
        this.eModelElement = n, super.eSet(t, n);
        break;
      case "contents":
        Array.isArray(n) && (this.contents = n), super.eSet(t, n);
        break;
      case "references":
        Array.isArray(n) && (this.references = n), super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class rl extends bt {
  constructor() {
    super(...arguments), this._name = null, this._value = 0, this.instance = null, this.literal = null, this.eEnum = null, this.eAnnotations = [];
  }
  getName() {
    return this._name;
  }
  setName(t) {
    this._name = t;
  }
  getValue() {
    return this._value;
  }
  setValue(t) {
    this._value = t;
  }
  getInstance() {
    return this.instance;
  }
  setInstance(t) {
    this.instance = t;
  }
  /**
   * Returns the literal string, falling back to the name when no explicit
   * literal is set. In .ecore files the `literal` attribute is usually
   * omitted, so without this fallback lookups by literal would never match.
   */
  getLiteral() {
    return this.literal ?? this._name;
  }
  setLiteral(t) {
    this.literal = t;
  }
  getEEnum() {
    return this.eEnum;
  }
  setEEnum(t) {
    this.eEnum = t;
  }
  // EModelElement methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEEnumLiteralClass();
  }
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this._name = n, super.eSet(t, n);
        break;
      case "value":
        this._value = typeof n == "number" ? n : parseInt(n, 10), super.eSet(t, n);
        break;
      case "instance":
        this.instance = n, super.eSet(t, n);
        break;
      case "literal":
        this.literal = n, super.eSet(t, n);
        break;
      case "eEnum":
        this.eEnum = n, super.eSet(t, n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n), super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class g_ extends ve {
  constructor() {
    super(...arguments), this.eLiterals = [];
  }
  getELiterals() {
    return this.eLiterals;
  }
  /**
   * Returns the literal with the given name or ordinal value.
   */
  getEEnumLiteral(t) {
    return typeof t == "string" ? this.eLiterals.find((n) => n.getName() === t) || null : this.eLiterals.find((n) => n.getValue() === t) || null;
  }
  /**
   * Returns the literal with the given literal string.
   */
  getEEnumLiteralByLiteral(t) {
    return this.eLiterals.find((n) => n.getLiteral() === t) || null;
  }
  /**
   * Add a literal to this enum.
   */
  addLiteral(t) {
    t.setEEnum(this), this.eLiterals.push(t);
  }
  eClass() {
    return be.getEEnumClass();
  }
  eGet(t) {
    switch (t.getName()) {
      case "eLiterals":
        return this.eLiterals;
      default:
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "eLiterals":
        if (Array.isArray(n)) {
          this.eLiterals = n;
          for (const a of this.eLiterals)
            a instanceof rl && a.setEEnum(this);
        }
        super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
}
class p_ extends bt {
  constructor() {
    super(...arguments), this.name = null, this.eContainingClass = null, this.eType = null, this.eParameters = [], this.eExceptions = [], this.eAnnotations = [], this.eGenericType = null, this.eTypeParameters = [], this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(t) {
    this.eContainingClass = t;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(t) {
    this.eGenericType = t;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  setEType(t) {
    this.eType = t;
  }
  getEParameters() {
    return this.eParameters;
  }
  addParameter(t) {
    this.eParameters.push(t);
  }
  getEExceptions() {
    return this.eExceptions;
  }
  addException(t) {
    this.eExceptions.push(t);
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
  setLowerBound(t) {
    this.lowerBound = t;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(t) {
    this.upperBound = t;
  }
  getOperationID() {
    return this.eContainingClass ? this.eContainingClass.getOperationID(this) : -1;
  }
  isOverrideOf(t) {
    if (this.name !== t.getName())
      return !1;
    const n = this.eParameters, i = t.getEParameters();
    if (n.length !== i.length)
      return !1;
    for (let a = 0; a < n.length; a++) {
      const o = n[a].getEType(), c = i[a].getEType();
      if (o !== c)
        return !1;
    }
    return !this.eContainingClass || !t.getEContainingClass() ? !1 : this.eContainingClass.getEAllSuperTypes().includes(t.getEContainingClass());
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(t) {
    this.ordered = t;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(t) {
    this.unique = t;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEOperationClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n;
        break;
      case "eType":
        this.eType = n;
        break;
      case "eGenericType":
        this.eGenericType = n;
        break;
      case "eTypeParameters":
        Array.isArray(n) && (this.eTypeParameters = n);
        break;
      case "eParameters":
        Array.isArray(n) && (this.eParameters = n);
        break;
      case "eExceptions":
        Array.isArray(n) && (this.eExceptions = n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n);
        break;
      case "ordered":
        this.ordered = n === !0 || n === "true";
        break;
      case "unique":
        this.unique = n === !0 || n === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(n);
        break;
      case "upperBound":
        this.upperBound = Number(n);
        break;
    }
    super.eSet(t, n);
  }
}
class d_ extends bt {
  constructor() {
    super(...arguments), this.name = null, this.eType = null, this.eOperation = null, this.eAnnotations = [], this.eGenericType = null, this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(t) {
    this.eGenericType = t;
  }
  setEType(t) {
    this.eType = t;
  }
  getEOperation() {
    return this.eOperation;
  }
  setEOperation(t) {
    this.eOperation = t;
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(t) {
    this.ordered = t;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(t) {
    this.unique = t;
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
  setLowerBound(t) {
    this.lowerBound = t;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(t) {
    this.upperBound = t;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getEParameterClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n;
        break;
      case "eType":
        this.eType = n;
        break;
      case "eGenericType":
        this.eGenericType = n;
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n);
        break;
      case "ordered":
        this.ordered = n === !0 || n === "true";
        break;
      case "unique":
        this.unique = n === !0 || n === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(n);
        break;
      case "upperBound":
        this.upperBound = Number(n);
        break;
    }
    super.eSet(t, n);
  }
}
class m_ extends bt {
  constructor() {
    super(...arguments), this.eClassifier = null, this.eTypeParameter = null, this.eTypeArguments = [], this.eUpperBound = null, this.eLowerBound = null;
  }
  getEClassifier() {
    return this.eClassifier;
  }
  setEClassifier(t) {
    this.eClassifier = t;
  }
  getETypeParameter() {
    return this.eTypeParameter;
  }
  setETypeParameter(t) {
    this.eTypeParameter = t;
  }
  getETypeArguments() {
    return this.eTypeArguments;
  }
  getEUpperBound() {
    return this.eUpperBound;
  }
  setEUpperBound(t) {
    this.eUpperBound = t;
  }
  getELowerBound() {
    return this.eLowerBound;
  }
  setELowerBound(t) {
    this.eLowerBound = t;
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
      const t = this.eTypeParameter.getEBounds();
      if (t.length > 0)
        return t[0].getERawType();
    }
    return this.eUpperBound ? this.eUpperBound.getERawType() : be.getEObjectClass();
  }
  eClass() {
    return be.getEGenericTypeClass();
  }
  eGet(t) {
    switch (t.getName()) {
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
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "eClassifier":
        this.eClassifier = n;
        break;
      case "eTypeParameter":
        this.eTypeParameter = n;
        break;
      case "eTypeArguments":
        Array.isArray(n) && (this.eTypeArguments = n);
        break;
      case "eUpperBound":
        this.eUpperBound = n;
        break;
      case "eLowerBound":
        this.eLowerBound = n;
        break;
    }
    super.eSet(t, n);
  }
}
class E_ extends bt {
  constructor() {
    super(...arguments), this.name = null, this.eBounds = [], this.eAnnotations = [];
  }
  getName() {
    return this.name;
  }
  setName(t) {
    this.name = t;
  }
  getEBounds() {
    return this.eBounds;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(t) {
    return this.eAnnotations.find((n) => n.getSource() === t) || null;
  }
  eClass() {
    return be.getETypeParameterClass();
  }
  eGet(t) {
    switch (t.getName()) {
      case "name":
        return this.name;
      case "eBounds":
        return this.eBounds;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(t);
    }
  }
  eSet(t, n) {
    switch (t.getName()) {
      case "name":
        this.name = n;
        break;
      case "eBounds":
        Array.isArray(n) && (this.eBounds = n);
        break;
      case "eAnnotations":
        Array.isArray(n) && (this.eAnnotations = n);
        break;
    }
    super.eSet(t, n);
  }
}
const __ = "ecore.xml.type";
let gs = null;
function y_() {
  return gs || (gs = new C_(), gs.initialize(), Pt.INSTANCE.set(al, gs)), gs;
}
const T_ = [
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
class C_ extends Mt {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(al), this.setNsPrefix(__);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [n, i] of T_) {
      const a = new ve();
      a.setName(n), a.setInstanceClassName(i), this.getEClassifiers().push(a), this._dataTypes.set(n, a);
    }
    for (const n of this.getEClassifiers())
      "setEPackage" in n && n.setEPackage(this);
    const t = new N_(this);
    this.setEFactoryInstance(t), this.registerConverters();
  }
  registerConverters() {
    const t = { fromString: (d) => d.toLowerCase() === "true" || d === "1", toString: (d) => String(d) };
    G.registerByName("Boolean", t), G.registerByName("BooleanObject", t);
    const n = { fromString: (d) => parseInt(d, 10), toString: (d) => String(d) };
    G.registerByName("Int", n), G.registerByName("IntObject", n), G.registerByName("Short", n), G.registerByName("ShortObject", n), G.registerByName("Byte", n), G.registerByName("ByteObject", n), G.registerByName("UnsignedByte", n), G.registerByName("UnsignedByteObject", n), G.registerByName("UnsignedShort", n), G.registerByName("UnsignedShortObject", n), G.registerByName("UnsignedInt", n), G.registerByName("UnsignedIntObject", n);
    const i = {
      fromString: (d) => {
        const _ = parseInt(d, 10);
        return Math.abs(_) > Number.MAX_SAFE_INTEGER ? BigInt(d) : _;
      },
      toString: (d) => String(d)
    };
    G.registerByName("Long", i), G.registerByName("LongObject", i);
    const a = { fromString: (d) => parseFloat(d), toString: (d) => String(d) };
    G.registerByName("Float", a), G.registerByName("FloatObject", a), G.registerByName("Double", a), G.registerByName("DoubleObject", a);
    const o = { fromString: (d) => d, toString: (d) => d ?? "0" };
    G.registerByName("Decimal", o), G.registerByName("Integer", o), G.registerByName("NonNegativeInteger", o), G.registerByName("NonPositiveInteger", o), G.registerByName("NegativeInteger", o), G.registerByName("PositiveInteger", o), G.registerByName("UnsignedLong", o);
    const c = { fromString: (d) => d, toString: (d) => d ?? "" };
    G.registerByName("String", c), G.registerByName("AnySimpleType", c), G.registerByName("AnyURI", c), G.registerByName("NormalizedString", c), G.registerByName("Token", c), G.registerByName("Name", c), G.registerByName("NCName", c), G.registerByName("Language", c), G.registerByName("ID", c), G.registerByName("IDREF", c), G.registerByName("ENTITY", c), G.registerByName("NMTOKEN", c), G.registerByName("Date", c), G.registerByName("DateTime", c), G.registerByName("Time", c), G.registerByName("Duration", c), G.registerByName("GDay", c), G.registerByName("GMonth", c), G.registerByName("GMonthDay", c), G.registerByName("GYear", c), G.registerByName("GYearMonth", c), G.registerByName("QName", c), G.registerByName("NOTATION", c);
  }
  getDataType(t) {
    return this._dataTypes.get(t) ?? null;
  }
}
class N_ extends dr {
  constructor(t) {
    super(), this._ePackage = t;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(t) {
    return super.create(t);
  }
}
const il = "http://www.eclipse.org/emf/2002/Ecore", v_ = "ecore", al = "http://www.eclipse.org/emf/2003/XMLType";
let Xn = null;
function ct() {
  return Xn || (Xn = new S_(), Xn.initialize(), A_(), be.register(ct)), Xn;
}
function A_() {
  Xn && (Pt.INSTANCE.set(il, Xn), y_());
}
class S_ extends Mt {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(il), this.setNsPrefix(v_);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const t = new I_(this);
    this.setEFactoryInstance(t);
  }
  /**
   * Set the ePackage reference on all classifiers
   */
  initializeClassifierPackages() {
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
  }
  createDataTypes() {
    this._eBooleanDataType = new ve(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new ve(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new ve(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new ve(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new ve(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new ve(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new ve(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new ve(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new ve(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new ve(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new ve(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new ve(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new ve(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new ve(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new ve(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new Ee(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new Ee(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new Ee(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new Ee(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new Ee(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new Ee(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new Ee(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new Ee(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new Ee(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new Ee(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new Ee(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new Ee(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new Ee(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new Ee(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new Ee(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new Ee(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new Ee(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new Ee(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new Ee(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new Ee(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const t = new te();
    t.setName("name"), t.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(t);
    const n = new te();
    n.setName("ordered"), n.setEType(this._eBooleanDataType), n.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const i = new te();
    i.setName("unique"), i.setEType(this._eBooleanDataType), i.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(i);
    const a = new te();
    a.setName("lowerBound"), a.setEType(this._eIntDataType), a.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(a);
    const o = new te();
    o.setName("upperBound"), o.setEType(this._eIntDataType), o.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(o);
    const c = new te();
    c.setName("instanceClassName"), c.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(c);
    const d = new te();
    d.setName("abstract"), d.setEType(this._eBooleanDataType), d.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(d);
    const _ = new te();
    _.setName("interface"), _.setEType(this._eBooleanDataType), _.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(_);
    const T = new te();
    T.setName("nsURI"), T.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(T);
    const x = new te();
    x.setName("nsPrefix"), x.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(x);
    const v = new te();
    v.setName("changeable"), v.setEType(this._eBooleanDataType), v.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(v);
    const R = new te();
    R.setName("volatile"), R.setEType(this._eBooleanDataType), R.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(R);
    const M = new te();
    M.setName("transient"), M.setEType(this._eBooleanDataType), M.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(M);
    const Y = new te();
    Y.setName("defaultValueLiteral"), Y.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(Y);
    const se = new te();
    se.setName("unsettable"), se.setEType(this._eBooleanDataType), se.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(se);
    const z = new te();
    z.setName("derived"), z.setEType(this._eBooleanDataType), z.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(z);
    const ee = new te();
    ee.setName("iD"), ee.setEType(this._eBooleanDataType), ee.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(ee);
    const ke = new te();
    ke.setName("containment"), ke.setEType(this._eBooleanDataType), ke.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(ke);
    const Ae = new te();
    Ae.setName("resolveProxies"), Ae.setEType(this._eBooleanDataType), Ae.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(Ae);
    const Fe = new te();
    Fe.setName("value"), Fe.setEType(this._eIntDataType), Fe.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(Fe);
    const ie = new te();
    ie.setName("literal"), ie.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(ie);
    const De = new te();
    De.setName("source"), De.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(De);
    const qe = new te();
    qe.setName("key"), qe.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(qe);
    const Le = new te();
    Le.setName("value"), Le.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Le);
    const ht = new te();
    ht.setName("serializable"), ht.setEType(this._eBooleanDataType), ht.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(ht);
  }
  createReferences() {
    const t = new we();
    t.setName("eAnnotations"), t.setEType(this._eAnnotationClass), t.setContainment(!0), t.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(t);
    const n = new we();
    n.setName("eType"), n.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const i = new we();
    i.setName("eSuperTypes"), i.setEType(this._eClassClass), i.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(i);
    const a = new we();
    a.setName("eStructuralFeatures"), a.setEType(this._eStructuralFeatureClass), a.setContainment(!0), a.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(a);
    const o = new we();
    o.setName("eOperations"), o.setEType(this._eOperationClass), o.setContainment(!0), o.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(o);
    const c = new we();
    c.setName("eClassifiers"), c.setEType(this._eClassifierClass), c.setContainment(!0), c.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(c);
    const d = new we();
    d.setName("eSubpackages"), d.setEType(this._ePackageClass), d.setContainment(!0), d.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(d);
    const _ = new we();
    _.setName("eFactoryInstance"), _.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(_);
    const T = new we();
    T.setName("eLiterals"), T.setEType(this._eEnumLiteralClass), T.setContainment(!0), T.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(T);
    const x = new we();
    x.setName("eOpposite"), x.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(x);
    const v = new we();
    v.setName("eParameters"), v.setEType(this._eParameterClass), v.setContainment(!0), v.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(v);
    const R = new we();
    R.setName("details"), R.setEType(this._eStringToStringMapEntryClass), R.setContainment(!0), R.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(R);
    const M = new we();
    M.setName("eGenericType"), M.setEType(this._eGenericTypeClass), M.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(M);
    const Y = new we();
    Y.setName("eTypeParameters"), Y.setEType(this._eTypeParameterClass), Y.setContainment(!0), Y.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(Y);
    const se = new we();
    se.setName("eGenericSuperTypes"), se.setEType(this._eGenericTypeClass), se.setContainment(!0), se.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(se);
    const z = new we();
    z.setName("eTypeParameters"), z.setEType(this._eTypeParameterClass), z.setContainment(!0), z.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(z);
    const ee = new we();
    ee.setName("eBounds"), ee.setEType(this._eGenericTypeClass), ee.setContainment(!0), ee.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(ee);
    const ke = new we();
    ke.setName("eClassifier"), ke.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(ke);
    const Ae = new we();
    Ae.setName("eTypeParameter"), Ae.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(Ae);
    const Fe = new we();
    Fe.setName("eTypeArguments"), Fe.setEType(this._eGenericTypeClass), Fe.setContainment(!0), Fe.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(Fe);
    const ie = new we();
    ie.setName("eUpperBound"), ie.setEType(this._eGenericTypeClass), ie.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(ie);
    const De = new we();
    De.setName("eLowerBound"), De.setEType(this._eGenericTypeClass), De.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(De);
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
class I_ extends dr {
  constructor(t) {
    super(), this._ePackage = t;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(t) {
    switch (t.getName()) {
      case "EClass":
        return new Ee();
      case "EAttribute":
        return new te();
      case "EReference":
        return new we();
      case "EDataType":
        return new ve();
      case "EEnum":
        return new g_();
      case "EEnumLiteral":
        return new rl();
      case "EAnnotation":
        return new f_();
      case "EPackage":
        return new Mt();
      case "EOperation":
        return new p_();
      case "EParameter":
        return new d_();
      case "EGenericType":
        return new m_();
      case "ETypeParameter":
        return new E_();
      default:
        return super.create(t);
    }
  }
}
ct();
class We extends bt {
  // Feature ID Constants (eLiterals)
  static DEFAULT_COSTING = 0;
  static COSTING = 1;
  static WAYPOINTS = 2;
  // Private fields
  _defaultCosting = "auto";
  _costing = "auto";
  _waypoints;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return H.Literals.ROUTING_WIDGET_SETTINGS;
  }
  // Getters and Setters
  get defaultCosting() {
    return this._defaultCosting;
  }
  set defaultCosting(t) {
    const n = this._defaultCosting;
    this._defaultCosting = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(We.DEFAULT_COSTING),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.DEFAULT_COSTING,
      merge: () => !1
    });
  }
  get costing() {
    return this._costing;
  }
  set costing(t) {
    const n = this._costing;
    this._costing = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(We.COSTING),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.COSTING,
      merge: () => !1
    });
  }
  get waypoints() {
    return this._waypoints;
  }
  set waypoints(t) {
    const n = this._waypoints;
    this._waypoints = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(We.WAYPOINTS),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.WAYPOINTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case We.DEFAULT_COSTING:
        return this.defaultCosting;
      case We.COSTING:
        return this.costing;
      case We.WAYPOINTS:
        return this.waypoints;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, n) {
    switch (this.eClass().getFeatureID(t)) {
      case We.DEFAULT_COSTING:
        this.defaultCosting = n, super.eSet(t, n);
        break;
      case We.COSTING:
        this.costing = n, super.eSet(t, n);
        break;
      case We.WAYPOINTS:
        this.waypoints = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case We.DEFAULT_COSTING:
        return this._defaultCosting !== "auto";
      case We.COSTING:
        return this._costing !== "auto";
      case We.WAYPOINTS:
        return this._waypoints !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case We.DEFAULT_COSTING:
        this._defaultCosting = "auto";
        return;
      case We.COSTING:
        this._costing = "auto";
        return;
      case We.WAYPOINTS:
        this._waypoints = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
}
class oe extends zi {
  // Feature ID Constants (eLiterals)
  static GEOJSON = 4;
  static DISTANCE_KM = 5;
  static DURATION_MIN = 6;
  static WAYPOINTS = 7;
  static COSTING = 8;
  // Private fields
  _geojson;
  _distance_km;
  _duration_min;
  _waypoints;
  _costing;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return H.Literals.ROUTE_CALCULATED_PAYLOAD;
  }
  // Getters and Setters
  get geojson() {
    return this._geojson;
  }
  set geojson(t) {
    const n = this._geojson;
    this._geojson = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.GEOJSON),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.GEOJSON,
      merge: () => !1
    });
  }
  get distance_km() {
    return this._distance_km;
  }
  set distance_km(t) {
    const n = this._distance_km;
    this._distance_km = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.DISTANCE_KM),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.DISTANCE_KM,
      merge: () => !1
    });
  }
  get duration_min() {
    return this._duration_min;
  }
  set duration_min(t) {
    const n = this._duration_min;
    this._duration_min = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.DURATION_MIN),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.DURATION_MIN,
      merge: () => !1
    });
  }
  get waypoints() {
    return this._waypoints;
  }
  set waypoints(t) {
    const n = this._waypoints;
    this._waypoints = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.WAYPOINTS),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.WAYPOINTS,
      merge: () => !1
    });
  }
  get costing() {
    return this._costing;
  }
  set costing(t) {
    const n = this._costing;
    this._costing = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.COSTING),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.COSTING,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case oe.GEOJSON:
        return this.geojson;
      case oe.DISTANCE_KM:
        return this.distance_km;
      case oe.DURATION_MIN:
        return this.duration_min;
      case oe.WAYPOINTS:
        return this.waypoints;
      case oe.COSTING:
        return this.costing;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, n) {
    switch (this.eClass().getFeatureID(t)) {
      case oe.GEOJSON:
        this.geojson = n, super.eSet(t, n);
        break;
      case oe.DISTANCE_KM:
        this.distance_km = n, super.eSet(t, n);
        break;
      case oe.DURATION_MIN:
        this.duration_min = n, super.eSet(t, n);
        break;
      case oe.WAYPOINTS:
        this.waypoints = n, super.eSet(t, n);
        break;
      case oe.COSTING:
        this.costing = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case oe.GEOJSON:
        return this._geojson !== void 0;
      case oe.DISTANCE_KM:
        return this._distance_km !== void 0;
      case oe.DURATION_MIN:
        return this._duration_min !== void 0;
      case oe.WAYPOINTS:
        return this._waypoints !== void 0;
      case oe.COSTING:
        return this._costing !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case oe.GEOJSON:
        this._geojson = void 0;
        return;
      case oe.DISTANCE_KM:
        this._distance_km = void 0;
        return;
      case oe.DURATION_MIN:
        this._duration_min = void 0;
        return;
      case oe.WAYPOINTS:
        this._waypoints = void 0;
        return;
      case oe.COSTING:
        this._costing = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
}
class de extends zi {
  // Feature ID Constants (eLiterals)
  static LAT = 4;
  static LON = 5;
  static NAME = 6;
  static INDEX = 7;
  // Private fields
  _lat;
  _lon;
  _name;
  _index;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return H.Literals.WAYPOINT_PAYLOAD;
  }
  // Getters and Setters
  get lat() {
    return this._lat;
  }
  set lat(t) {
    const n = this._lat;
    this._lat = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.LAT),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.LAT,
      merge: () => !1
    });
  }
  get lon() {
    return this._lon;
  }
  set lon(t) {
    const n = this._lon;
    this._lon = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.LON),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.LON,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    const n = this._name;
    this._name = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.NAME),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.NAME,
      merge: () => !1
    });
  }
  get index() {
    return this._index;
  }
  set index(t) {
    const n = this._index;
    this._index = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.INDEX),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.INDEX,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case de.LAT:
        return this.lat;
      case de.LON:
        return this.lon;
      case de.NAME:
        return this.name;
      case de.INDEX:
        return this.index;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, n) {
    switch (this.eClass().getFeatureID(t)) {
      case de.LAT:
        this.lat = n, super.eSet(t, n);
        break;
      case de.LON:
        this.lon = n, super.eSet(t, n);
        break;
      case de.NAME:
        this.name = n, super.eSet(t, n);
        break;
      case de.INDEX:
        this.index = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case de.LAT:
        return this._lat !== void 0;
      case de.LON:
        return this._lon !== void 0;
      case de.NAME:
        return this._name !== void 0;
      case de.INDEX:
        return this._index !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case de.LAT:
        this._lat = void 0;
        return;
      case de.LON:
        this._lon = void 0;
        return;
      case de.NAME:
        this._name = void 0;
        return;
      case de.INDEX:
        this._index = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
}
class Qi extends dr {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Qi()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(H.eINSTANCE);
  }
  /**
   * Create a new RoutingWidgetSettings instance
   */
  createRoutingWidgetSettings() {
    return new We();
  }
  /**
   * Create a new RouteCalculatedPayload instance
   */
  createRouteCalculatedPayload() {
    return new oe();
  }
  /**
   * Create a new WaypointPayload instance
   */
  createWaypointPayload() {
    return new de();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "RoutingWidgetSettings":
        return this.createRoutingWidgetSettings();
      case "RouteCalculatedPayload":
        return this.createRouteCalculatedPayload();
      case "WaypointPayload":
        return this.createWaypointPayload();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
function ji(y) {
  const t = Pt.INSTANCE.getEPackage(y);
  if (!t)
    throw new Error(`EPackage '${y}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RoutingSettingsPackage.`);
  return t;
}
class H extends Mt {
  static eNAME = "RoutingSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.routing";
  static eNS_PREFIX = "RoutingSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new H(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    ROUTING_WIDGET_INTERFACE: null,
    ROUTING_WIDGET_SETTINGS: null,
    ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING: null,
    ROUTING_WIDGET_SETTINGS__COSTING: null,
    ROUTING_WIDGET_SETTINGS__WAYPOINTS: null,
    ROUTE_CALCULATED_PAYLOAD: null,
    ROUTE_CALCULATED_PAYLOAD__GEOJSON: null,
    ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM: null,
    ROUTE_CALCULATED_PAYLOAD__DURATION_MIN: null,
    ROUTE_CALCULATED_PAYLOAD__WAYPOINTS: null,
    ROUTE_CALCULATED_PAYLOAD__COSTING: null,
    WAYPOINT_PAYLOAD: null,
    WAYPOINT_PAYLOAD__LAT: null,
    WAYPOINT_PAYLOAD__LON: null,
    WAYPOINT_PAYLOAD__NAME: null,
    WAYPOINT_PAYLOAD__INDEX: null
  };
  constructor() {
    super(), this.setName(H.eNAME), this.setNsURI(H.eNS_URI), this.setNsPrefix(H.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Pt.INSTANCE.set(H.eNS_URI, this), this.setEFactoryInstance(Qi.eINSTANCE);
    const t = new Ee();
    t.setName("RoutingWidgetInterface"), t.setAbstract(!0), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), H.Literals.ROUTING_WIDGET_INTERFACE = t;
    const n = new Ee();
    n.setName("RoutingWidgetSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), H.Literals.ROUTING_WIDGET_SETTINGS = n;
    const i = new te();
    i.setName("defaultCosting"), i.setLowerBound(0), i.setUpperBound(1), n.getEStructuralFeatures().push(i), H.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING = i;
    const a = new te();
    a.setName("costing"), a.setLowerBound(0), a.setUpperBound(1), n.getEStructuralFeatures().push(a), H.Literals.ROUTING_WIDGET_SETTINGS__COSTING = a;
    const o = new te();
    o.setName("waypoints"), o.setLowerBound(0), o.setUpperBound(1), n.getEStructuralFeatures().push(o), H.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS = o;
    const c = new Ee();
    c.setName("RouteCalculatedPayload"), c.setAbstract(!1), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), H.Literals.ROUTE_CALCULATED_PAYLOAD = c;
    const d = new te();
    d.setName("geojson"), d.setLowerBound(0), d.setUpperBound(1), c.getEStructuralFeatures().push(d), H.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON = d;
    const _ = new te();
    _.setName("distance_km"), _.setLowerBound(0), _.setUpperBound(1), c.getEStructuralFeatures().push(_), H.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM = _;
    const T = new te();
    T.setName("duration_min"), T.setLowerBound(0), T.setUpperBound(1), c.getEStructuralFeatures().push(T), H.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN = T;
    const x = new te();
    x.setName("waypoints"), x.setLowerBound(0), x.setUpperBound(1), c.getEStructuralFeatures().push(x), H.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS = x;
    const v = new te();
    v.setName("costing"), v.setLowerBound(0), v.setUpperBound(1), c.getEStructuralFeatures().push(v), H.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING = v;
    const R = new Ee();
    R.setName("WaypointPayload"), R.setAbstract(!1), R.setInterface(!1), this.getEClassifiers().push(R), R.setEPackage(this), H.Literals.WAYPOINT_PAYLOAD = R;
    const M = new te();
    M.setName("lat"), M.setLowerBound(0), M.setUpperBound(1), R.getEStructuralFeatures().push(M), H.Literals.WAYPOINT_PAYLOAD__LAT = M;
    const Y = new te();
    Y.setName("lon"), Y.setLowerBound(0), Y.setUpperBound(1), R.getEStructuralFeatures().push(Y), H.Literals.WAYPOINT_PAYLOAD__LON = Y;
    const se = new te();
    se.setName("name"), se.setLowerBound(0), se.setUpperBound(1), R.getEStructuralFeatures().push(se), H.Literals.WAYPOINT_PAYLOAD__NAME = se;
    const z = new te();
    z.setName("index"), z.setLowerBound(0), z.setUpperBound(1), R.getEStructuralFeatures().push(z), H.Literals.WAYPOINT_PAYLOAD__INDEX = z, H.Literals.ROUTING_WIDGET_INTERFACE.getESuperTypes().push(ji("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), H.Literals.ROUTE_CALCULATED_PAYLOAD.getESuperTypes().push(ji("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), H.Literals.WAYPOINT_PAYLOAD.getESuperTypes().push(ji("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), H.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING.setEType(ct().getEClassifier("EString")), H.Literals.ROUTING_WIDGET_SETTINGS__COSTING.setEType(ct().getEClassifier("EString")), H.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS.setEType(ct().getEClassifier("EJavaObject")), H.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON.setEType(ct().getEClassifier("EJavaObject")), H.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM.setEType(ct().getEClassifier("EDouble")), H.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN.setEType(ct().getEClassifier("EDouble")), H.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS.setEType(ct().getEClassifier("EJavaObject")), H.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING.setEType(ct().getEClassifier("EString")), H.Literals.WAYPOINT_PAYLOAD__LAT.setEType(ct().getEClassifier("EDouble")), H.Literals.WAYPOINT_PAYLOAD__LON.setEType(ct().getEClassifier("EDouble")), H.Literals.WAYPOINT_PAYLOAD__NAME.setEType(ct().getEClassifier("EString")), H.Literals.WAYPOINT_PAYLOAD__INDEX.setEType(ct().getEClassifier("EInt"));
  }
}
class b_ extends Wm {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return H.Literals.ROUTING_WIDGET_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    const n = this.eClass().getFeatureID(t);
    return super.eGet(t);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, n) {
    const i = this.eClass().getFeatureID(t);
    super.eSet(t, n);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    const n = this.eClass().getFeatureID(t);
    return super.eIsSet(t);
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    const n = this.eClass().getFeatureID(t);
    super.eUnset(t);
  }
  addWaypoint(t, n, i) {
    throw new Error("addWaypoint not implemented");
  }
  removeWaypoint(t) {
    throw new Error("removeWaypoint not implemented");
  }
  clearWaypoints() {
    throw new Error("clearWaypoints not implemented");
  }
  setCosting(t) {
    throw new Error("setCosting not implemented");
  }
  calculateRoute() {
    throw new Error("calculateRoute not implemented");
  }
}
var ps = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var x_ = ps.exports, jo;
function w_() {
  return jo || (jo = 1, (function(y, t) {
    (function() {
      var n, i = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", d = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", T = 500, x = "__lodash_placeholder__", v = 1, R = 2, M = 4, Y = 1, se = 2, z = 1, ee = 2, ke = 4, Ae = 8, Fe = 16, ie = 32, De = 64, qe = 128, Le = 256, ht = 512, S = 30, An = "...", Ut = 800, zn = 16, fn = 1, Sn = 2, Kn = 3, fe = 1 / 0, Ye = 9007199254740991, gn = 17976931348623157e292, Ze = NaN, Ve = 4294967295, ce = Ve - 1, Hn = Ve >>> 1, Zt = [
        ["ary", qe],
        ["bind", z],
        ["bindKey", ee],
        ["curry", Ae],
        ["curryRight", Fe],
        ["flip", ht],
        ["partial", ie],
        ["partialRight", De],
        ["rearg", Le]
      ], F = "[object Arguments]", L = "[object Array]", X = "[object AsyncFunction]", ge = "[object Boolean]", Oe = "[object Date]", In = "[object DOMException]", kt = "[object Error]", bn = "[object Function]", g = "[object GeneratorFunction]", h = "[object Map]", I = "[object Number]", N = "[object Null]", Z = "[object Object]", Se = "[object Promise]", Be = "[object Proxy]", Ge = "[object RegExp]", ye = "[object Set]", et = "[object String]", Re = "[object Symbol]", xt = "[object Undefined]", pn = "[object WeakMap]", _s = "[object WeakSet]", Gt = "[object ArrayBuffer]", Wt = "[object DataView]", mr = "[object Float32Array]", Er = "[object Float64Array]", _r = "[object Int8Array]", yr = "[object Int16Array]", Tr = "[object Int32Array]", Cr = "[object Uint8Array]", Nr = "[object Uint8ClampedArray]", vr = "[object Uint16Array]", Ar = "[object Uint32Array]", ul = /\b__p \+= '';/g, ol = /\b(__p \+=) '' \+/g, ll = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Vi = /&(?:amp|lt|gt|quot|#39);/g, ea = /[&<>"']/g, cl = RegExp(Vi.source), hl = RegExp(ea.source), fl = /<%-([\s\S]+?)%>/g, gl = /<%([\s\S]+?)%>/g, ta = /<%=([\s\S]+?)%>/g, pl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dl = /^\w*$/, ml = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sr = /[\\^$.*+?()[\]{}|]/g, El = RegExp(Sr.source), Ir = /^\s+/, _l = /\s/, yl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Tl = /\{\n\/\* \[wrapped with (.+)\] \*/, Cl = /,? & /, Nl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vl = /[()=,{}\[\]\/\s]/, Al = /\\(\\)?/g, Sl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, na = /\w*$/, Il = /^[-+]0x[0-9a-f]+$/i, bl = /^0b[01]+$/i, xl = /^\[object .+?Constructor\]$/, wl = /^0o[0-7]+$/i, Dl = /^(?:0|[1-9]\d*)$/, Ol = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ys = /($^)/, Rl = /['\n\r\u2028\u2029\\]/g, Ts = "\\ud800-\\udfff", Pl = "\\u0300-\\u036f", Fl = "\\ufe20-\\ufe2f", Ll = "\\u20d0-\\u20ff", sa = Pl + Fl + Ll, ra = "\\u2700-\\u27bf", ia = "a-z\\xdf-\\xf6\\xf8-\\xff", Bl = "\\xac\\xb1\\xd7\\xf7", Ml = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ul = "\\u2000-\\u206f", kl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", aa = "A-Z\\xc0-\\xd6\\xd8-\\xde", ua = "\\ufe0e\\ufe0f", oa = Bl + Ml + Ul + kl, br = "['’]", Gl = "[" + Ts + "]", la = "[" + oa + "]", Cs = "[" + sa + "]", ca = "\\d+", Wl = "[" + ra + "]", ha = "[" + ia + "]", fa = "[^" + Ts + oa + ca + ra + ia + aa + "]", xr = "\\ud83c[\\udffb-\\udfff]", $l = "(?:" + Cs + "|" + xr + ")", ga = "[^" + Ts + "]", wr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Dr = "[\\ud800-\\udbff][\\udc00-\\udfff]", xn = "[" + aa + "]", pa = "\\u200d", da = "(?:" + ha + "|" + fa + ")", jl = "(?:" + xn + "|" + fa + ")", ma = "(?:" + br + "(?:d|ll|m|re|s|t|ve))?", Ea = "(?:" + br + "(?:D|LL|M|RE|S|T|VE))?", _a = $l + "?", ya = "[" + ua + "]?", Yl = "(?:" + pa + "(?:" + [ga, wr, Dr].join("|") + ")" + ya + _a + ")*", Xl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ql = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ta = ya + _a + Yl, zl = "(?:" + [Wl, wr, Dr].join("|") + ")" + Ta, Kl = "(?:" + [ga + Cs + "?", Cs, wr, Dr, Gl].join("|") + ")", Hl = RegExp(br, "g"), Jl = RegExp(Cs, "g"), Or = RegExp(xr + "(?=" + xr + ")|" + Kl + Ta, "g"), Ql = RegExp([
        xn + "?" + ha + "+" + ma + "(?=" + [la, xn, "$"].join("|") + ")",
        jl + "+" + Ea + "(?=" + [la, xn + da, "$"].join("|") + ")",
        xn + "?" + da + "+" + ma,
        xn + "+" + Ea,
        ql,
        Xl,
        ca,
        zl
      ].join("|"), "g"), Zl = RegExp("[" + pa + Ts + sa + ua + "]"), Vl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ec = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], tc = -1, Ne = {};
      Ne[mr] = Ne[Er] = Ne[_r] = Ne[yr] = Ne[Tr] = Ne[Cr] = Ne[Nr] = Ne[vr] = Ne[Ar] = !0, Ne[F] = Ne[L] = Ne[Gt] = Ne[ge] = Ne[Wt] = Ne[Oe] = Ne[kt] = Ne[bn] = Ne[h] = Ne[I] = Ne[Z] = Ne[Ge] = Ne[ye] = Ne[et] = Ne[pn] = !1;
      var Te = {};
      Te[F] = Te[L] = Te[Gt] = Te[Wt] = Te[ge] = Te[Oe] = Te[mr] = Te[Er] = Te[_r] = Te[yr] = Te[Tr] = Te[h] = Te[I] = Te[Z] = Te[Ge] = Te[ye] = Te[et] = Te[Re] = Te[Cr] = Te[Nr] = Te[vr] = Te[Ar] = !0, Te[kt] = Te[bn] = Te[pn] = !1;
      var nc = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, sc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, rc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, ic = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, ac = parseFloat, uc = parseInt, Ca = typeof lr == "object" && lr && lr.Object === Object && lr, oc = typeof self == "object" && self && self.Object === Object && self, ze = Ca || oc || Function("return this")(), Rr = t && !t.nodeType && t, dn = Rr && !0 && y && !y.nodeType && y, Na = dn && dn.exports === Rr, Pr = Na && Ca.process, _t = (function() {
        try {
          var C = dn && dn.require && dn.require("util").types;
          return C || Pr && Pr.binding && Pr.binding("util");
        } catch {
        }
      })(), va = _t && _t.isArrayBuffer, Aa = _t && _t.isDate, Sa = _t && _t.isMap, Ia = _t && _t.isRegExp, ba = _t && _t.isSet, xa = _t && _t.isTypedArray;
      function ft(C, w, b) {
        switch (b.length) {
          case 0:
            return C.call(w);
          case 1:
            return C.call(w, b[0]);
          case 2:
            return C.call(w, b[0], b[1]);
          case 3:
            return C.call(w, b[0], b[1], b[2]);
        }
        return C.apply(w, b);
      }
      function lc(C, w, b, U) {
        for (var q = -1, he = C == null ? 0 : C.length; ++q < he; ) {
          var $e = C[q];
          w(U, $e, b($e), C);
        }
        return U;
      }
      function yt(C, w) {
        for (var b = -1, U = C == null ? 0 : C.length; ++b < U && w(C[b], b, C) !== !1; )
          ;
        return C;
      }
      function cc(C, w) {
        for (var b = C == null ? 0 : C.length; b-- && w(C[b], b, C) !== !1; )
          ;
        return C;
      }
      function wa(C, w) {
        for (var b = -1, U = C == null ? 0 : C.length; ++b < U; )
          if (!w(C[b], b, C))
            return !1;
        return !0;
      }
      function Vt(C, w) {
        for (var b = -1, U = C == null ? 0 : C.length, q = 0, he = []; ++b < U; ) {
          var $e = C[b];
          w($e, b, C) && (he[q++] = $e);
        }
        return he;
      }
      function Ns(C, w) {
        var b = C == null ? 0 : C.length;
        return !!b && wn(C, w, 0) > -1;
      }
      function Fr(C, w, b) {
        for (var U = -1, q = C == null ? 0 : C.length; ++U < q; )
          if (b(w, C[U]))
            return !0;
        return !1;
      }
      function Ie(C, w) {
        for (var b = -1, U = C == null ? 0 : C.length, q = Array(U); ++b < U; )
          q[b] = w(C[b], b, C);
        return q;
      }
      function en(C, w) {
        for (var b = -1, U = w.length, q = C.length; ++b < U; )
          C[q + b] = w[b];
        return C;
      }
      function Lr(C, w, b, U) {
        var q = -1, he = C == null ? 0 : C.length;
        for (U && he && (b = C[++q]); ++q < he; )
          b = w(b, C[q], q, C);
        return b;
      }
      function hc(C, w, b, U) {
        var q = C == null ? 0 : C.length;
        for (U && q && (b = C[--q]); q--; )
          b = w(b, C[q], q, C);
        return b;
      }
      function Br(C, w) {
        for (var b = -1, U = C == null ? 0 : C.length; ++b < U; )
          if (w(C[b], b, C))
            return !0;
        return !1;
      }
      var fc = Mr("length");
      function gc(C) {
        return C.split("");
      }
      function pc(C) {
        return C.match(Nl) || [];
      }
      function Da(C, w, b) {
        var U;
        return b(C, function(q, he, $e) {
          if (w(q, he, $e))
            return U = he, !1;
        }), U;
      }
      function vs(C, w, b, U) {
        for (var q = C.length, he = b + (U ? 1 : -1); U ? he-- : ++he < q; )
          if (w(C[he], he, C))
            return he;
        return -1;
      }
      function wn(C, w, b) {
        return w === w ? Ic(C, w, b) : vs(C, Oa, b);
      }
      function dc(C, w, b, U) {
        for (var q = b - 1, he = C.length; ++q < he; )
          if (U(C[q], w))
            return q;
        return -1;
      }
      function Oa(C) {
        return C !== C;
      }
      function Ra(C, w) {
        var b = C == null ? 0 : C.length;
        return b ? kr(C, w) / b : Ze;
      }
      function Mr(C) {
        return function(w) {
          return w == null ? n : w[C];
        };
      }
      function Ur(C) {
        return function(w) {
          return C == null ? n : C[w];
        };
      }
      function Pa(C, w, b, U, q) {
        return q(C, function(he, $e, _e) {
          b = U ? (U = !1, he) : w(b, he, $e, _e);
        }), b;
      }
      function mc(C, w) {
        var b = C.length;
        for (C.sort(w); b--; )
          C[b] = C[b].value;
        return C;
      }
      function kr(C, w) {
        for (var b, U = -1, q = C.length; ++U < q; ) {
          var he = w(C[U]);
          he !== n && (b = b === n ? he : b + he);
        }
        return b;
      }
      function Gr(C, w) {
        for (var b = -1, U = Array(C); ++b < C; )
          U[b] = w(b);
        return U;
      }
      function Ec(C, w) {
        return Ie(w, function(b) {
          return [b, C[b]];
        });
      }
      function Fa(C) {
        return C && C.slice(0, Ua(C) + 1).replace(Ir, "");
      }
      function gt(C) {
        return function(w) {
          return C(w);
        };
      }
      function Wr(C, w) {
        return Ie(w, function(b) {
          return C[b];
        });
      }
      function Jn(C, w) {
        return C.has(w);
      }
      function La(C, w) {
        for (var b = -1, U = C.length; ++b < U && wn(w, C[b], 0) > -1; )
          ;
        return b;
      }
      function Ba(C, w) {
        for (var b = C.length; b-- && wn(w, C[b], 0) > -1; )
          ;
        return b;
      }
      function _c(C, w) {
        for (var b = C.length, U = 0; b--; )
          C[b] === w && ++U;
        return U;
      }
      var yc = Ur(nc), Tc = Ur(sc);
      function Cc(C) {
        return "\\" + ic[C];
      }
      function Nc(C, w) {
        return C == null ? n : C[w];
      }
      function Dn(C) {
        return Zl.test(C);
      }
      function vc(C) {
        return Vl.test(C);
      }
      function Ac(C) {
        for (var w, b = []; !(w = C.next()).done; )
          b.push(w.value);
        return b;
      }
      function $r(C) {
        var w = -1, b = Array(C.size);
        return C.forEach(function(U, q) {
          b[++w] = [q, U];
        }), b;
      }
      function Ma(C, w) {
        return function(b) {
          return C(w(b));
        };
      }
      function tn(C, w) {
        for (var b = -1, U = C.length, q = 0, he = []; ++b < U; ) {
          var $e = C[b];
          ($e === w || $e === x) && (C[b] = x, he[q++] = b);
        }
        return he;
      }
      function As(C) {
        var w = -1, b = Array(C.size);
        return C.forEach(function(U) {
          b[++w] = U;
        }), b;
      }
      function Sc(C) {
        var w = -1, b = Array(C.size);
        return C.forEach(function(U) {
          b[++w] = [U, U];
        }), b;
      }
      function Ic(C, w, b) {
        for (var U = b - 1, q = C.length; ++U < q; )
          if (C[U] === w)
            return U;
        return -1;
      }
      function bc(C, w, b) {
        for (var U = b + 1; U--; )
          if (C[U] === w)
            return U;
        return U;
      }
      function On(C) {
        return Dn(C) ? wc(C) : fc(C);
      }
      function wt(C) {
        return Dn(C) ? Dc(C) : gc(C);
      }
      function Ua(C) {
        for (var w = C.length; w-- && _l.test(C.charAt(w)); )
          ;
        return w;
      }
      var xc = Ur(rc);
      function wc(C) {
        for (var w = Or.lastIndex = 0; Or.test(C); )
          ++w;
        return w;
      }
      function Dc(C) {
        return C.match(Or) || [];
      }
      function Oc(C) {
        return C.match(Ql) || [];
      }
      var Rc = (function C(w) {
        w = w == null ? ze : Rn.defaults(ze.Object(), w, Rn.pick(ze, ec));
        var b = w.Array, U = w.Date, q = w.Error, he = w.Function, $e = w.Math, _e = w.Object, jr = w.RegExp, Pc = w.String, Tt = w.TypeError, Ss = b.prototype, Fc = he.prototype, Pn = _e.prototype, Is = w["__core-js_shared__"], bs = Fc.toString, me = Pn.hasOwnProperty, Lc = 0, ka = (function() {
          var e = /[^.]+$/.exec(Is && Is.keys && Is.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), xs = Pn.toString, Bc = bs.call(_e), Mc = ze._, Uc = jr(
          "^" + bs.call(me).replace(Sr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ws = Na ? w.Buffer : n, nn = w.Symbol, Ds = w.Uint8Array, Ga = ws ? ws.allocUnsafe : n, Os = Ma(_e.getPrototypeOf, _e), Wa = _e.create, $a = Pn.propertyIsEnumerable, Rs = Ss.splice, ja = nn ? nn.isConcatSpreadable : n, Qn = nn ? nn.iterator : n, mn = nn ? nn.toStringTag : n, Ps = (function() {
          try {
            var e = Cn(_e, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), kc = w.clearTimeout !== ze.clearTimeout && w.clearTimeout, Gc = U && U.now !== ze.Date.now && U.now, Wc = w.setTimeout !== ze.setTimeout && w.setTimeout, Fs = $e.ceil, Ls = $e.floor, Yr = _e.getOwnPropertySymbols, $c = ws ? ws.isBuffer : n, Ya = w.isFinite, jc = Ss.join, Yc = Ma(_e.keys, _e), je = $e.max, He = $e.min, Xc = U.now, qc = w.parseInt, Xa = $e.random, zc = Ss.reverse, Xr = Cn(w, "DataView"), Zn = Cn(w, "Map"), qr = Cn(w, "Promise"), Fn = Cn(w, "Set"), Vn = Cn(w, "WeakMap"), es = Cn(_e, "create"), Bs = Vn && new Vn(), Ln = {}, Kc = Nn(Xr), Hc = Nn(Zn), Jc = Nn(qr), Qc = Nn(Fn), Zc = Nn(Vn), Ms = nn ? nn.prototype : n, ts = Ms ? Ms.valueOf : n, qa = Ms ? Ms.toString : n;
        function f(e) {
          if (Pe(e) && !K(e) && !(e instanceof ae)) {
            if (e instanceof Ct)
              return e;
            if (me.call(e, "__wrapped__"))
              return zu(e);
          }
          return new Ct(e);
        }
        var Bn = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(s) {
            if (!xe(s))
              return {};
            if (Wa)
              return Wa(s);
            e.prototype = s;
            var r = new e();
            return e.prototype = n, r;
          };
        })();
        function Us() {
        }
        function Ct(e, s) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
        }
        f.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: fl,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: gl,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ta,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: f
          }
        }, f.prototype = Us.prototype, f.prototype.constructor = f, Ct.prototype = Bn(Us.prototype), Ct.prototype.constructor = Ct;
        function ae(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ve, this.__views__ = [];
        }
        function Vc() {
          var e = new ae(this.__wrapped__);
          return e.__actions__ = rt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = rt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = rt(this.__views__), e;
        }
        function eh() {
          if (this.__filtered__) {
            var e = new ae(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function th() {
          var e = this.__wrapped__.value(), s = this.__dir__, r = K(e), u = s < 0, l = r ? e.length : 0, p = pf(0, l, this.__views__), m = p.start, E = p.end, A = E - m, D = u ? E : m - 1, O = this.__iteratees__, P = O.length, B = 0, k = He(A, this.__takeCount__);
          if (!r || !u && l == A && k == A)
            return mu(e, this.__actions__);
          var $ = [];
          e:
            for (; A-- && B < k; ) {
              D += s;
              for (var Q = -1, j = e[D]; ++Q < P; ) {
                var re = O[Q], ue = re.iteratee, mt = re.type, st = ue(j);
                if (mt == Sn)
                  j = st;
                else if (!st) {
                  if (mt == fn)
                    continue e;
                  break e;
                }
              }
              $[B++] = j;
            }
          return $;
        }
        ae.prototype = Bn(Us.prototype), ae.prototype.constructor = ae;
        function En(e) {
          var s = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++s < r; ) {
            var u = e[s];
            this.set(u[0], u[1]);
          }
        }
        function nh() {
          this.__data__ = es ? es(null) : {}, this.size = 0;
        }
        function sh(e) {
          var s = this.has(e) && delete this.__data__[e];
          return this.size -= s ? 1 : 0, s;
        }
        function rh(e) {
          var s = this.__data__;
          if (es) {
            var r = s[e];
            return r === _ ? n : r;
          }
          return me.call(s, e) ? s[e] : n;
        }
        function ih(e) {
          var s = this.__data__;
          return es ? s[e] !== n : me.call(s, e);
        }
        function ah(e, s) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1, r[e] = es && s === n ? _ : s, this;
        }
        En.prototype.clear = nh, En.prototype.delete = sh, En.prototype.get = rh, En.prototype.has = ih, En.prototype.set = ah;
        function $t(e) {
          var s = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++s < r; ) {
            var u = e[s];
            this.set(u[0], u[1]);
          }
        }
        function uh() {
          this.__data__ = [], this.size = 0;
        }
        function oh(e) {
          var s = this.__data__, r = ks(s, e);
          if (r < 0)
            return !1;
          var u = s.length - 1;
          return r == u ? s.pop() : Rs.call(s, r, 1), --this.size, !0;
        }
        function lh(e) {
          var s = this.__data__, r = ks(s, e);
          return r < 0 ? n : s[r][1];
        }
        function ch(e) {
          return ks(this.__data__, e) > -1;
        }
        function hh(e, s) {
          var r = this.__data__, u = ks(r, e);
          return u < 0 ? (++this.size, r.push([e, s])) : r[u][1] = s, this;
        }
        $t.prototype.clear = uh, $t.prototype.delete = oh, $t.prototype.get = lh, $t.prototype.has = ch, $t.prototype.set = hh;
        function jt(e) {
          var s = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++s < r; ) {
            var u = e[s];
            this.set(u[0], u[1]);
          }
        }
        function fh() {
          this.size = 0, this.__data__ = {
            hash: new En(),
            map: new (Zn || $t)(),
            string: new En()
          };
        }
        function gh(e) {
          var s = Qs(this, e).delete(e);
          return this.size -= s ? 1 : 0, s;
        }
        function ph(e) {
          return Qs(this, e).get(e);
        }
        function dh(e) {
          return Qs(this, e).has(e);
        }
        function mh(e, s) {
          var r = Qs(this, e), u = r.size;
          return r.set(e, s), this.size += r.size == u ? 0 : 1, this;
        }
        jt.prototype.clear = fh, jt.prototype.delete = gh, jt.prototype.get = ph, jt.prototype.has = dh, jt.prototype.set = mh;
        function _n(e) {
          var s = -1, r = e == null ? 0 : e.length;
          for (this.__data__ = new jt(); ++s < r; )
            this.add(e[s]);
        }
        function Eh(e) {
          return this.__data__.set(e, _), this;
        }
        function _h(e) {
          return this.__data__.has(e);
        }
        _n.prototype.add = _n.prototype.push = Eh, _n.prototype.has = _h;
        function Dt(e) {
          var s = this.__data__ = new $t(e);
          this.size = s.size;
        }
        function yh() {
          this.__data__ = new $t(), this.size = 0;
        }
        function Th(e) {
          var s = this.__data__, r = s.delete(e);
          return this.size = s.size, r;
        }
        function Ch(e) {
          return this.__data__.get(e);
        }
        function Nh(e) {
          return this.__data__.has(e);
        }
        function vh(e, s) {
          var r = this.__data__;
          if (r instanceof $t) {
            var u = r.__data__;
            if (!Zn || u.length < a - 1)
              return u.push([e, s]), this.size = ++r.size, this;
            r = this.__data__ = new jt(u);
          }
          return r.set(e, s), this.size = r.size, this;
        }
        Dt.prototype.clear = yh, Dt.prototype.delete = Th, Dt.prototype.get = Ch, Dt.prototype.has = Nh, Dt.prototype.set = vh;
        function za(e, s) {
          var r = K(e), u = !r && vn(e), l = !r && !u && on(e), p = !r && !u && !l && Gn(e), m = r || u || l || p, E = m ? Gr(e.length, Pc) : [], A = E.length;
          for (var D in e)
            (s || me.call(e, D)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
            (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            l && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            p && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
            zt(D, A))) && E.push(D);
          return E;
        }
        function Ka(e) {
          var s = e.length;
          return s ? e[si(0, s - 1)] : n;
        }
        function Ah(e, s) {
          return Zs(rt(e), yn(s, 0, e.length));
        }
        function Sh(e) {
          return Zs(rt(e));
        }
        function zr(e, s, r) {
          (r !== n && !Ot(e[s], r) || r === n && !(s in e)) && Yt(e, s, r);
        }
        function ns(e, s, r) {
          var u = e[s];
          (!(me.call(e, s) && Ot(u, r)) || r === n && !(s in e)) && Yt(e, s, r);
        }
        function ks(e, s) {
          for (var r = e.length; r--; )
            if (Ot(e[r][0], s))
              return r;
          return -1;
        }
        function Ih(e, s, r, u) {
          return sn(e, function(l, p, m) {
            s(u, l, r(l), m);
          }), u;
        }
        function Ha(e, s) {
          return e && Lt(s, Xe(s), e);
        }
        function bh(e, s) {
          return e && Lt(s, at(s), e);
        }
        function Yt(e, s, r) {
          s == "__proto__" && Ps ? Ps(e, s, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
          }) : e[s] = r;
        }
        function Kr(e, s) {
          for (var r = -1, u = s.length, l = b(u), p = e == null; ++r < u; )
            l[r] = p ? n : xi(e, s[r]);
          return l;
        }
        function yn(e, s, r) {
          return e === e && (r !== n && (e = e <= r ? e : r), s !== n && (e = e >= s ? e : s)), e;
        }
        function Nt(e, s, r, u, l, p) {
          var m, E = s & v, A = s & R, D = s & M;
          if (r && (m = l ? r(e, u, l, p) : r(e)), m !== n)
            return m;
          if (!xe(e))
            return e;
          var O = K(e);
          if (O) {
            if (m = mf(e), !E)
              return rt(e, m);
          } else {
            var P = Je(e), B = P == bn || P == g;
            if (on(e))
              return yu(e, E);
            if (P == Z || P == F || B && !l) {
              if (m = A || B ? {} : Uu(e), !E)
                return A ? rf(e, bh(m, e)) : sf(e, Ha(m, e));
            } else {
              if (!Te[P])
                return l ? e : {};
              m = Ef(e, P, E);
            }
          }
          p || (p = new Dt());
          var k = p.get(e);
          if (k)
            return k;
          p.set(e, m), go(e) ? e.forEach(function(j) {
            m.add(Nt(j, s, r, j, e, p));
          }) : ho(e) && e.forEach(function(j, re) {
            m.set(re, Nt(j, s, r, re, e, p));
          });
          var $ = D ? A ? pi : gi : A ? at : Xe, Q = O ? n : $(e);
          return yt(Q || e, function(j, re) {
            Q && (re = j, j = e[re]), ns(m, re, Nt(j, s, r, re, e, p));
          }), m;
        }
        function xh(e) {
          var s = Xe(e);
          return function(r) {
            return Ja(r, e, s);
          };
        }
        function Ja(e, s, r) {
          var u = r.length;
          if (e == null)
            return !u;
          for (e = _e(e); u--; ) {
            var l = r[u], p = s[l], m = e[l];
            if (m === n && !(l in e) || !p(m))
              return !1;
          }
          return !0;
        }
        function Qa(e, s, r) {
          if (typeof e != "function")
            throw new Tt(c);
          return ls(function() {
            e.apply(n, r);
          }, s);
        }
        function ss(e, s, r, u) {
          var l = -1, p = Ns, m = !0, E = e.length, A = [], D = s.length;
          if (!E)
            return A;
          r && (s = Ie(s, gt(r))), u ? (p = Fr, m = !1) : s.length >= a && (p = Jn, m = !1, s = new _n(s));
          e:
            for (; ++l < E; ) {
              var O = e[l], P = r == null ? O : r(O);
              if (O = u || O !== 0 ? O : 0, m && P === P) {
                for (var B = D; B--; )
                  if (s[B] === P)
                    continue e;
                A.push(O);
              } else p(s, P, u) || A.push(O);
            }
          return A;
        }
        var sn = Au(Ft), Za = Au(Jr, !0);
        function wh(e, s) {
          var r = !0;
          return sn(e, function(u, l, p) {
            return r = !!s(u, l, p), r;
          }), r;
        }
        function Gs(e, s, r) {
          for (var u = -1, l = e.length; ++u < l; ) {
            var p = e[u], m = s(p);
            if (m != null && (E === n ? m === m && !dt(m) : r(m, E)))
              var E = m, A = p;
          }
          return A;
        }
        function Dh(e, s, r, u) {
          var l = e.length;
          for (r = J(r), r < 0 && (r = -r > l ? 0 : l + r), u = u === n || u > l ? l : J(u), u < 0 && (u += l), u = r > u ? 0 : mo(u); r < u; )
            e[r++] = s;
          return e;
        }
        function Va(e, s) {
          var r = [];
          return sn(e, function(u, l, p) {
            s(u, l, p) && r.push(u);
          }), r;
        }
        function Ke(e, s, r, u, l) {
          var p = -1, m = e.length;
          for (r || (r = yf), l || (l = []); ++p < m; ) {
            var E = e[p];
            s > 0 && r(E) ? s > 1 ? Ke(E, s - 1, r, u, l) : en(l, E) : u || (l[l.length] = E);
          }
          return l;
        }
        var Hr = Su(), eu = Su(!0);
        function Ft(e, s) {
          return e && Hr(e, s, Xe);
        }
        function Jr(e, s) {
          return e && eu(e, s, Xe);
        }
        function Ws(e, s) {
          return Vt(s, function(r) {
            return Kt(e[r]);
          });
        }
        function Tn(e, s) {
          s = an(s, e);
          for (var r = 0, u = s.length; e != null && r < u; )
            e = e[Bt(s[r++])];
          return r && r == u ? e : n;
        }
        function tu(e, s, r) {
          var u = s(e);
          return K(e) ? u : en(u, r(e));
        }
        function tt(e) {
          return e == null ? e === n ? xt : N : mn && mn in _e(e) ? gf(e) : If(e);
        }
        function Qr(e, s) {
          return e > s;
        }
        function Oh(e, s) {
          return e != null && me.call(e, s);
        }
        function Rh(e, s) {
          return e != null && s in _e(e);
        }
        function Ph(e, s, r) {
          return e >= He(s, r) && e < je(s, r);
        }
        function Zr(e, s, r) {
          for (var u = r ? Fr : Ns, l = e[0].length, p = e.length, m = p, E = b(p), A = 1 / 0, D = []; m--; ) {
            var O = e[m];
            m && s && (O = Ie(O, gt(s))), A = He(O.length, A), E[m] = !r && (s || l >= 120 && O.length >= 120) ? new _n(m && O) : n;
          }
          O = e[0];
          var P = -1, B = E[0];
          e:
            for (; ++P < l && D.length < A; ) {
              var k = O[P], $ = s ? s(k) : k;
              if (k = r || k !== 0 ? k : 0, !(B ? Jn(B, $) : u(D, $, r))) {
                for (m = p; --m; ) {
                  var Q = E[m];
                  if (!(Q ? Jn(Q, $) : u(e[m], $, r)))
                    continue e;
                }
                B && B.push($), D.push(k);
              }
            }
          return D;
        }
        function Fh(e, s, r, u) {
          return Ft(e, function(l, p, m) {
            s(u, r(l), p, m);
          }), u;
        }
        function rs(e, s, r) {
          s = an(s, e), e = $u(e, s);
          var u = e == null ? e : e[Bt(At(s))];
          return u == null ? n : ft(u, e, r);
        }
        function nu(e) {
          return Pe(e) && tt(e) == F;
        }
        function Lh(e) {
          return Pe(e) && tt(e) == Gt;
        }
        function Bh(e) {
          return Pe(e) && tt(e) == Oe;
        }
        function is(e, s, r, u, l) {
          return e === s ? !0 : e == null || s == null || !Pe(e) && !Pe(s) ? e !== e && s !== s : Mh(e, s, r, u, is, l);
        }
        function Mh(e, s, r, u, l, p) {
          var m = K(e), E = K(s), A = m ? L : Je(e), D = E ? L : Je(s);
          A = A == F ? Z : A, D = D == F ? Z : D;
          var O = A == Z, P = D == Z, B = A == D;
          if (B && on(e)) {
            if (!on(s))
              return !1;
            m = !0, O = !1;
          }
          if (B && !O)
            return p || (p = new Dt()), m || Gn(e) ? Lu(e, s, r, u, l, p) : hf(e, s, A, r, u, l, p);
          if (!(r & Y)) {
            var k = O && me.call(e, "__wrapped__"), $ = P && me.call(s, "__wrapped__");
            if (k || $) {
              var Q = k ? e.value() : e, j = $ ? s.value() : s;
              return p || (p = new Dt()), l(Q, j, r, u, p);
            }
          }
          return B ? (p || (p = new Dt()), ff(e, s, r, u, l, p)) : !1;
        }
        function Uh(e) {
          return Pe(e) && Je(e) == h;
        }
        function Vr(e, s, r, u) {
          var l = r.length, p = l, m = !u;
          if (e == null)
            return !p;
          for (e = _e(e); l--; ) {
            var E = r[l];
            if (m && E[2] ? E[1] !== e[E[0]] : !(E[0] in e))
              return !1;
          }
          for (; ++l < p; ) {
            E = r[l];
            var A = E[0], D = e[A], O = E[1];
            if (m && E[2]) {
              if (D === n && !(A in e))
                return !1;
            } else {
              var P = new Dt();
              if (u)
                var B = u(D, O, A, e, s, P);
              if (!(B === n ? is(O, D, Y | se, u, P) : B))
                return !1;
            }
          }
          return !0;
        }
        function su(e) {
          if (!xe(e) || Cf(e))
            return !1;
          var s = Kt(e) ? Uc : xl;
          return s.test(Nn(e));
        }
        function kh(e) {
          return Pe(e) && tt(e) == Ge;
        }
        function Gh(e) {
          return Pe(e) && Je(e) == ye;
        }
        function Wh(e) {
          return Pe(e) && rr(e.length) && !!Ne[tt(e)];
        }
        function ru(e) {
          return typeof e == "function" ? e : e == null ? ut : typeof e == "object" ? K(e) ? uu(e[0], e[1]) : au(e) : bo(e);
        }
        function ei(e) {
          if (!os(e))
            return Yc(e);
          var s = [];
          for (var r in _e(e))
            me.call(e, r) && r != "constructor" && s.push(r);
          return s;
        }
        function $h(e) {
          if (!xe(e))
            return Sf(e);
          var s = os(e), r = [];
          for (var u in e)
            u == "constructor" && (s || !me.call(e, u)) || r.push(u);
          return r;
        }
        function ti(e, s) {
          return e < s;
        }
        function iu(e, s) {
          var r = -1, u = it(e) ? b(e.length) : [];
          return sn(e, function(l, p, m) {
            u[++r] = s(l, p, m);
          }), u;
        }
        function au(e) {
          var s = mi(e);
          return s.length == 1 && s[0][2] ? Gu(s[0][0], s[0][1]) : function(r) {
            return r === e || Vr(r, e, s);
          };
        }
        function uu(e, s) {
          return _i(e) && ku(s) ? Gu(Bt(e), s) : function(r) {
            var u = xi(r, e);
            return u === n && u === s ? wi(r, e) : is(s, u, Y | se);
          };
        }
        function $s(e, s, r, u, l) {
          e !== s && Hr(s, function(p, m) {
            if (l || (l = new Dt()), xe(p))
              jh(e, s, m, r, $s, u, l);
            else {
              var E = u ? u(Ti(e, m), p, m + "", e, s, l) : n;
              E === n && (E = p), zr(e, m, E);
            }
          }, at);
        }
        function jh(e, s, r, u, l, p, m) {
          var E = Ti(e, r), A = Ti(s, r), D = m.get(A);
          if (D) {
            zr(e, r, D);
            return;
          }
          var O = p ? p(E, A, r + "", e, s, m) : n, P = O === n;
          if (P) {
            var B = K(A), k = !B && on(A), $ = !B && !k && Gn(A);
            O = A, B || k || $ ? K(E) ? O = E : Me(E) ? O = rt(E) : k ? (P = !1, O = yu(A, !0)) : $ ? (P = !1, O = Tu(A, !0)) : O = [] : cs(A) || vn(A) ? (O = E, vn(E) ? O = Eo(E) : (!xe(E) || Kt(E)) && (O = Uu(A))) : P = !1;
          }
          P && (m.set(A, O), l(O, A, u, p, m), m.delete(A)), zr(e, r, O);
        }
        function ou(e, s) {
          var r = e.length;
          if (r)
            return s += s < 0 ? r : 0, zt(s, r) ? e[s] : n;
        }
        function lu(e, s, r) {
          s.length ? s = Ie(s, function(p) {
            return K(p) ? function(m) {
              return Tn(m, p.length === 1 ? p[0] : p);
            } : p;
          }) : s = [ut];
          var u = -1;
          s = Ie(s, gt(W()));
          var l = iu(e, function(p, m, E) {
            var A = Ie(s, function(D) {
              return D(p);
            });
            return { criteria: A, index: ++u, value: p };
          });
          return mc(l, function(p, m) {
            return nf(p, m, r);
          });
        }
        function Yh(e, s) {
          return cu(e, s, function(r, u) {
            return wi(e, u);
          });
        }
        function cu(e, s, r) {
          for (var u = -1, l = s.length, p = {}; ++u < l; ) {
            var m = s[u], E = Tn(e, m);
            r(E, m) && as(p, an(m, e), E);
          }
          return p;
        }
        function Xh(e) {
          return function(s) {
            return Tn(s, e);
          };
        }
        function ni(e, s, r, u) {
          var l = u ? dc : wn, p = -1, m = s.length, E = e;
          for (e === s && (s = rt(s)), r && (E = Ie(e, gt(r))); ++p < m; )
            for (var A = 0, D = s[p], O = r ? r(D) : D; (A = l(E, O, A, u)) > -1; )
              E !== e && Rs.call(E, A, 1), Rs.call(e, A, 1);
          return e;
        }
        function hu(e, s) {
          for (var r = e ? s.length : 0, u = r - 1; r--; ) {
            var l = s[r];
            if (r == u || l !== p) {
              var p = l;
              zt(l) ? Rs.call(e, l, 1) : ai(e, l);
            }
          }
          return e;
        }
        function si(e, s) {
          return e + Ls(Xa() * (s - e + 1));
        }
        function qh(e, s, r, u) {
          for (var l = -1, p = je(Fs((s - e) / (r || 1)), 0), m = b(p); p--; )
            m[u ? p : ++l] = e, e += r;
          return m;
        }
        function ri(e, s) {
          var r = "";
          if (!e || s < 1 || s > Ye)
            return r;
          do
            s % 2 && (r += e), s = Ls(s / 2), s && (e += e);
          while (s);
          return r;
        }
        function V(e, s) {
          return Ci(Wu(e, s, ut), e + "");
        }
        function zh(e) {
          return Ka(Wn(e));
        }
        function Kh(e, s) {
          var r = Wn(e);
          return Zs(r, yn(s, 0, r.length));
        }
        function as(e, s, r, u) {
          if (!xe(e))
            return e;
          s = an(s, e);
          for (var l = -1, p = s.length, m = p - 1, E = e; E != null && ++l < p; ) {
            var A = Bt(s[l]), D = r;
            if (A === "__proto__" || A === "constructor" || A === "prototype")
              return e;
            if (l != m) {
              var O = E[A];
              D = u ? u(O, A, E) : n, D === n && (D = xe(O) ? O : zt(s[l + 1]) ? [] : {});
            }
            ns(E, A, D), E = E[A];
          }
          return e;
        }
        var fu = Bs ? function(e, s) {
          return Bs.set(e, s), e;
        } : ut, Hh = Ps ? function(e, s) {
          return Ps(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Oi(s),
            writable: !0
          });
        } : ut;
        function Jh(e) {
          return Zs(Wn(e));
        }
        function vt(e, s, r) {
          var u = -1, l = e.length;
          s < 0 && (s = -s > l ? 0 : l + s), r = r > l ? l : r, r < 0 && (r += l), l = s > r ? 0 : r - s >>> 0, s >>>= 0;
          for (var p = b(l); ++u < l; )
            p[u] = e[u + s];
          return p;
        }
        function Qh(e, s) {
          var r;
          return sn(e, function(u, l, p) {
            return r = s(u, l, p), !r;
          }), !!r;
        }
        function js(e, s, r) {
          var u = 0, l = e == null ? u : e.length;
          if (typeof s == "number" && s === s && l <= Hn) {
            for (; u < l; ) {
              var p = u + l >>> 1, m = e[p];
              m !== null && !dt(m) && (r ? m <= s : m < s) ? u = p + 1 : l = p;
            }
            return l;
          }
          return ii(e, s, ut, r);
        }
        function ii(e, s, r, u) {
          var l = 0, p = e == null ? 0 : e.length;
          if (p === 0)
            return 0;
          s = r(s);
          for (var m = s !== s, E = s === null, A = dt(s), D = s === n; l < p; ) {
            var O = Ls((l + p) / 2), P = r(e[O]), B = P !== n, k = P === null, $ = P === P, Q = dt(P);
            if (m)
              var j = u || $;
            else D ? j = $ && (u || B) : E ? j = $ && B && (u || !k) : A ? j = $ && B && !k && (u || !Q) : k || Q ? j = !1 : j = u ? P <= s : P < s;
            j ? l = O + 1 : p = O;
          }
          return He(p, ce);
        }
        function gu(e, s) {
          for (var r = -1, u = e.length, l = 0, p = []; ++r < u; ) {
            var m = e[r], E = s ? s(m) : m;
            if (!r || !Ot(E, A)) {
              var A = E;
              p[l++] = m === 0 ? 0 : m;
            }
          }
          return p;
        }
        function pu(e) {
          return typeof e == "number" ? e : dt(e) ? Ze : +e;
        }
        function pt(e) {
          if (typeof e == "string")
            return e;
          if (K(e))
            return Ie(e, pt) + "";
          if (dt(e))
            return qa ? qa.call(e) : "";
          var s = e + "";
          return s == "0" && 1 / e == -fe ? "-0" : s;
        }
        function rn(e, s, r) {
          var u = -1, l = Ns, p = e.length, m = !0, E = [], A = E;
          if (r)
            m = !1, l = Fr;
          else if (p >= a) {
            var D = s ? null : lf(e);
            if (D)
              return As(D);
            m = !1, l = Jn, A = new _n();
          } else
            A = s ? [] : E;
          e:
            for (; ++u < p; ) {
              var O = e[u], P = s ? s(O) : O;
              if (O = r || O !== 0 ? O : 0, m && P === P) {
                for (var B = A.length; B--; )
                  if (A[B] === P)
                    continue e;
                s && A.push(P), E.push(O);
              } else l(A, P, r) || (A !== E && A.push(P), E.push(O));
            }
          return E;
        }
        function ai(e, s) {
          return s = an(s, e), e = $u(e, s), e == null || delete e[Bt(At(s))];
        }
        function du(e, s, r, u) {
          return as(e, s, r(Tn(e, s)), u);
        }
        function Ys(e, s, r, u) {
          for (var l = e.length, p = u ? l : -1; (u ? p-- : ++p < l) && s(e[p], p, e); )
            ;
          return r ? vt(e, u ? 0 : p, u ? p + 1 : l) : vt(e, u ? p + 1 : 0, u ? l : p);
        }
        function mu(e, s) {
          var r = e;
          return r instanceof ae && (r = r.value()), Lr(s, function(u, l) {
            return l.func.apply(l.thisArg, en([u], l.args));
          }, r);
        }
        function ui(e, s, r) {
          var u = e.length;
          if (u < 2)
            return u ? rn(e[0]) : [];
          for (var l = -1, p = b(u); ++l < u; )
            for (var m = e[l], E = -1; ++E < u; )
              E != l && (p[l] = ss(p[l] || m, e[E], s, r));
          return rn(Ke(p, 1), s, r);
        }
        function Eu(e, s, r) {
          for (var u = -1, l = e.length, p = s.length, m = {}; ++u < l; ) {
            var E = u < p ? s[u] : n;
            r(m, e[u], E);
          }
          return m;
        }
        function oi(e) {
          return Me(e) ? e : [];
        }
        function li(e) {
          return typeof e == "function" ? e : ut;
        }
        function an(e, s) {
          return K(e) ? e : _i(e, s) ? [e] : qu(pe(e));
        }
        var Zh = V;
        function un(e, s, r) {
          var u = e.length;
          return r = r === n ? u : r, !s && r >= u ? e : vt(e, s, r);
        }
        var _u = kc || function(e) {
          return ze.clearTimeout(e);
        };
        function yu(e, s) {
          if (s)
            return e.slice();
          var r = e.length, u = Ga ? Ga(r) : new e.constructor(r);
          return e.copy(u), u;
        }
        function ci(e) {
          var s = new e.constructor(e.byteLength);
          return new Ds(s).set(new Ds(e)), s;
        }
        function Vh(e, s) {
          var r = s ? ci(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.byteLength);
        }
        function ef(e) {
          var s = new e.constructor(e.source, na.exec(e));
          return s.lastIndex = e.lastIndex, s;
        }
        function tf(e) {
          return ts ? _e(ts.call(e)) : {};
        }
        function Tu(e, s) {
          var r = s ? ci(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.length);
        }
        function Cu(e, s) {
          if (e !== s) {
            var r = e !== n, u = e === null, l = e === e, p = dt(e), m = s !== n, E = s === null, A = s === s, D = dt(s);
            if (!E && !D && !p && e > s || p && m && A && !E && !D || u && m && A || !r && A || !l)
              return 1;
            if (!u && !p && !D && e < s || D && r && l && !u && !p || E && r && l || !m && l || !A)
              return -1;
          }
          return 0;
        }
        function nf(e, s, r) {
          for (var u = -1, l = e.criteria, p = s.criteria, m = l.length, E = r.length; ++u < m; ) {
            var A = Cu(l[u], p[u]);
            if (A) {
              if (u >= E)
                return A;
              var D = r[u];
              return A * (D == "desc" ? -1 : 1);
            }
          }
          return e.index - s.index;
        }
        function Nu(e, s, r, u) {
          for (var l = -1, p = e.length, m = r.length, E = -1, A = s.length, D = je(p - m, 0), O = b(A + D), P = !u; ++E < A; )
            O[E] = s[E];
          for (; ++l < m; )
            (P || l < p) && (O[r[l]] = e[l]);
          for (; D--; )
            O[E++] = e[l++];
          return O;
        }
        function vu(e, s, r, u) {
          for (var l = -1, p = e.length, m = -1, E = r.length, A = -1, D = s.length, O = je(p - E, 0), P = b(O + D), B = !u; ++l < O; )
            P[l] = e[l];
          for (var k = l; ++A < D; )
            P[k + A] = s[A];
          for (; ++m < E; )
            (B || l < p) && (P[k + r[m]] = e[l++]);
          return P;
        }
        function rt(e, s) {
          var r = -1, u = e.length;
          for (s || (s = b(u)); ++r < u; )
            s[r] = e[r];
          return s;
        }
        function Lt(e, s, r, u) {
          var l = !r;
          r || (r = {});
          for (var p = -1, m = s.length; ++p < m; ) {
            var E = s[p], A = u ? u(r[E], e[E], E, r, e) : n;
            A === n && (A = e[E]), l ? Yt(r, E, A) : ns(r, E, A);
          }
          return r;
        }
        function sf(e, s) {
          return Lt(e, Ei(e), s);
        }
        function rf(e, s) {
          return Lt(e, Bu(e), s);
        }
        function Xs(e, s) {
          return function(r, u) {
            var l = K(r) ? lc : Ih, p = s ? s() : {};
            return l(r, e, W(u, 2), p);
          };
        }
        function Mn(e) {
          return V(function(s, r) {
            var u = -1, l = r.length, p = l > 1 ? r[l - 1] : n, m = l > 2 ? r[2] : n;
            for (p = e.length > 3 && typeof p == "function" ? (l--, p) : n, m && nt(r[0], r[1], m) && (p = l < 3 ? n : p, l = 1), s = _e(s); ++u < l; ) {
              var E = r[u];
              E && e(s, E, u, p);
            }
            return s;
          });
        }
        function Au(e, s) {
          return function(r, u) {
            if (r == null)
              return r;
            if (!it(r))
              return e(r, u);
            for (var l = r.length, p = s ? l : -1, m = _e(r); (s ? p-- : ++p < l) && u(m[p], p, m) !== !1; )
              ;
            return r;
          };
        }
        function Su(e) {
          return function(s, r, u) {
            for (var l = -1, p = _e(s), m = u(s), E = m.length; E--; ) {
              var A = m[e ? E : ++l];
              if (r(p[A], A, p) === !1)
                break;
            }
            return s;
          };
        }
        function af(e, s, r) {
          var u = s & z, l = us(e);
          function p() {
            var m = this && this !== ze && this instanceof p ? l : e;
            return m.apply(u ? r : this, arguments);
          }
          return p;
        }
        function Iu(e) {
          return function(s) {
            s = pe(s);
            var r = Dn(s) ? wt(s) : n, u = r ? r[0] : s.charAt(0), l = r ? un(r, 1).join("") : s.slice(1);
            return u[e]() + l;
          };
        }
        function Un(e) {
          return function(s) {
            return Lr(So(Ao(s).replace(Hl, "")), e, "");
          };
        }
        function us(e) {
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return new e();
              case 1:
                return new e(s[0]);
              case 2:
                return new e(s[0], s[1]);
              case 3:
                return new e(s[0], s[1], s[2]);
              case 4:
                return new e(s[0], s[1], s[2], s[3]);
              case 5:
                return new e(s[0], s[1], s[2], s[3], s[4]);
              case 6:
                return new e(s[0], s[1], s[2], s[3], s[4], s[5]);
              case 7:
                return new e(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
            }
            var r = Bn(e.prototype), u = e.apply(r, s);
            return xe(u) ? u : r;
          };
        }
        function uf(e, s, r) {
          var u = us(e);
          function l() {
            for (var p = arguments.length, m = b(p), E = p, A = kn(l); E--; )
              m[E] = arguments[E];
            var D = p < 3 && m[0] !== A && m[p - 1] !== A ? [] : tn(m, A);
            if (p -= D.length, p < r)
              return Ou(
                e,
                s,
                qs,
                l.placeholder,
                n,
                m,
                D,
                n,
                n,
                r - p
              );
            var O = this && this !== ze && this instanceof l ? u : e;
            return ft(O, this, m);
          }
          return l;
        }
        function bu(e) {
          return function(s, r, u) {
            var l = _e(s);
            if (!it(s)) {
              var p = W(r, 3);
              s = Xe(s), r = function(E) {
                return p(l[E], E, l);
              };
            }
            var m = e(s, r, u);
            return m > -1 ? l[p ? s[m] : m] : n;
          };
        }
        function xu(e) {
          return qt(function(s) {
            var r = s.length, u = r, l = Ct.prototype.thru;
            for (e && s.reverse(); u--; ) {
              var p = s[u];
              if (typeof p != "function")
                throw new Tt(c);
              if (l && !m && Js(p) == "wrapper")
                var m = new Ct([], !0);
            }
            for (u = m ? u : r; ++u < r; ) {
              p = s[u];
              var E = Js(p), A = E == "wrapper" ? di(p) : n;
              A && yi(A[0]) && A[1] == (qe | Ae | ie | Le) && !A[4].length && A[9] == 1 ? m = m[Js(A[0])].apply(m, A[3]) : m = p.length == 1 && yi(p) ? m[E]() : m.thru(p);
            }
            return function() {
              var D = arguments, O = D[0];
              if (m && D.length == 1 && K(O))
                return m.plant(O).value();
              for (var P = 0, B = r ? s[P].apply(this, D) : O; ++P < r; )
                B = s[P].call(this, B);
              return B;
            };
          });
        }
        function qs(e, s, r, u, l, p, m, E, A, D) {
          var O = s & qe, P = s & z, B = s & ee, k = s & (Ae | Fe), $ = s & ht, Q = B ? n : us(e);
          function j() {
            for (var re = arguments.length, ue = b(re), mt = re; mt--; )
              ue[mt] = arguments[mt];
            if (k)
              var st = kn(j), Et = _c(ue, st);
            if (u && (ue = Nu(ue, u, l, k)), p && (ue = vu(ue, p, m, k)), re -= Et, k && re < D) {
              var Ue = tn(ue, st);
              return Ou(
                e,
                s,
                qs,
                j.placeholder,
                r,
                ue,
                Ue,
                E,
                A,
                D - re
              );
            }
            var Rt = P ? r : this, Jt = B ? Rt[e] : e;
            return re = ue.length, E ? ue = bf(ue, E) : $ && re > 1 && ue.reverse(), O && A < re && (ue.length = A), this && this !== ze && this instanceof j && (Jt = Q || us(Jt)), Jt.apply(Rt, ue);
          }
          return j;
        }
        function wu(e, s) {
          return function(r, u) {
            return Fh(r, e, s(u), {});
          };
        }
        function zs(e, s) {
          return function(r, u) {
            var l;
            if (r === n && u === n)
              return s;
            if (r !== n && (l = r), u !== n) {
              if (l === n)
                return u;
              typeof r == "string" || typeof u == "string" ? (r = pt(r), u = pt(u)) : (r = pu(r), u = pu(u)), l = e(r, u);
            }
            return l;
          };
        }
        function hi(e) {
          return qt(function(s) {
            return s = Ie(s, gt(W())), V(function(r) {
              var u = this;
              return e(s, function(l) {
                return ft(l, u, r);
              });
            });
          });
        }
        function Ks(e, s) {
          s = s === n ? " " : pt(s);
          var r = s.length;
          if (r < 2)
            return r ? ri(s, e) : s;
          var u = ri(s, Fs(e / On(s)));
          return Dn(s) ? un(wt(u), 0, e).join("") : u.slice(0, e);
        }
        function of(e, s, r, u) {
          var l = s & z, p = us(e);
          function m() {
            for (var E = -1, A = arguments.length, D = -1, O = u.length, P = b(O + A), B = this && this !== ze && this instanceof m ? p : e; ++D < O; )
              P[D] = u[D];
            for (; A--; )
              P[D++] = arguments[++E];
            return ft(B, l ? r : this, P);
          }
          return m;
        }
        function Du(e) {
          return function(s, r, u) {
            return u && typeof u != "number" && nt(s, r, u) && (r = u = n), s = Ht(s), r === n ? (r = s, s = 0) : r = Ht(r), u = u === n ? s < r ? 1 : -1 : Ht(u), qh(s, r, u, e);
          };
        }
        function Hs(e) {
          return function(s, r) {
            return typeof s == "string" && typeof r == "string" || (s = St(s), r = St(r)), e(s, r);
          };
        }
        function Ou(e, s, r, u, l, p, m, E, A, D) {
          var O = s & Ae, P = O ? m : n, B = O ? n : m, k = O ? p : n, $ = O ? n : p;
          s |= O ? ie : De, s &= ~(O ? De : ie), s & ke || (s &= -4);
          var Q = [
            e,
            s,
            l,
            k,
            P,
            $,
            B,
            E,
            A,
            D
          ], j = r.apply(n, Q);
          return yi(e) && ju(j, Q), j.placeholder = u, Yu(j, e, s);
        }
        function fi(e) {
          var s = $e[e];
          return function(r, u) {
            if (r = St(r), u = u == null ? 0 : He(J(u), 292), u && Ya(r)) {
              var l = (pe(r) + "e").split("e"), p = s(l[0] + "e" + (+l[1] + u));
              return l = (pe(p) + "e").split("e"), +(l[0] + "e" + (+l[1] - u));
            }
            return s(r);
          };
        }
        var lf = Fn && 1 / As(new Fn([, -0]))[1] == fe ? function(e) {
          return new Fn(e);
        } : Fi;
        function Ru(e) {
          return function(s) {
            var r = Je(s);
            return r == h ? $r(s) : r == ye ? Sc(s) : Ec(s, e(s));
          };
        }
        function Xt(e, s, r, u, l, p, m, E) {
          var A = s & ee;
          if (!A && typeof e != "function")
            throw new Tt(c);
          var D = u ? u.length : 0;
          if (D || (s &= -97, u = l = n), m = m === n ? m : je(J(m), 0), E = E === n ? E : J(E), D -= l ? l.length : 0, s & De) {
            var O = u, P = l;
            u = l = n;
          }
          var B = A ? n : di(e), k = [
            e,
            s,
            r,
            u,
            l,
            O,
            P,
            p,
            m,
            E
          ];
          if (B && Af(k, B), e = k[0], s = k[1], r = k[2], u = k[3], l = k[4], E = k[9] = k[9] === n ? A ? 0 : e.length : je(k[9] - D, 0), !E && s & (Ae | Fe) && (s &= -25), !s || s == z)
            var $ = af(e, s, r);
          else s == Ae || s == Fe ? $ = uf(e, s, E) : (s == ie || s == (z | ie)) && !l.length ? $ = of(e, s, r, u) : $ = qs.apply(n, k);
          var Q = B ? fu : ju;
          return Yu(Q($, k), e, s);
        }
        function Pu(e, s, r, u) {
          return e === n || Ot(e, Pn[r]) && !me.call(u, r) ? s : e;
        }
        function Fu(e, s, r, u, l, p) {
          return xe(e) && xe(s) && (p.set(s, e), $s(e, s, n, Fu, p), p.delete(s)), e;
        }
        function cf(e) {
          return cs(e) ? n : e;
        }
        function Lu(e, s, r, u, l, p) {
          var m = r & Y, E = e.length, A = s.length;
          if (E != A && !(m && A > E))
            return !1;
          var D = p.get(e), O = p.get(s);
          if (D && O)
            return D == s && O == e;
          var P = -1, B = !0, k = r & se ? new _n() : n;
          for (p.set(e, s), p.set(s, e); ++P < E; ) {
            var $ = e[P], Q = s[P];
            if (u)
              var j = m ? u(Q, $, P, s, e, p) : u($, Q, P, e, s, p);
            if (j !== n) {
              if (j)
                continue;
              B = !1;
              break;
            }
            if (k) {
              if (!Br(s, function(re, ue) {
                if (!Jn(k, ue) && ($ === re || l($, re, r, u, p)))
                  return k.push(ue);
              })) {
                B = !1;
                break;
              }
            } else if (!($ === Q || l($, Q, r, u, p))) {
              B = !1;
              break;
            }
          }
          return p.delete(e), p.delete(s), B;
        }
        function hf(e, s, r, u, l, p, m) {
          switch (r) {
            case Wt:
              if (e.byteLength != s.byteLength || e.byteOffset != s.byteOffset)
                return !1;
              e = e.buffer, s = s.buffer;
            case Gt:
              return !(e.byteLength != s.byteLength || !p(new Ds(e), new Ds(s)));
            case ge:
            case Oe:
            case I:
              return Ot(+e, +s);
            case kt:
              return e.name == s.name && e.message == s.message;
            case Ge:
            case et:
              return e == s + "";
            case h:
              var E = $r;
            case ye:
              var A = u & Y;
              if (E || (E = As), e.size != s.size && !A)
                return !1;
              var D = m.get(e);
              if (D)
                return D == s;
              u |= se, m.set(e, s);
              var O = Lu(E(e), E(s), u, l, p, m);
              return m.delete(e), O;
            case Re:
              if (ts)
                return ts.call(e) == ts.call(s);
          }
          return !1;
        }
        function ff(e, s, r, u, l, p) {
          var m = r & Y, E = gi(e), A = E.length, D = gi(s), O = D.length;
          if (A != O && !m)
            return !1;
          for (var P = A; P--; ) {
            var B = E[P];
            if (!(m ? B in s : me.call(s, B)))
              return !1;
          }
          var k = p.get(e), $ = p.get(s);
          if (k && $)
            return k == s && $ == e;
          var Q = !0;
          p.set(e, s), p.set(s, e);
          for (var j = m; ++P < A; ) {
            B = E[P];
            var re = e[B], ue = s[B];
            if (u)
              var mt = m ? u(ue, re, B, s, e, p) : u(re, ue, B, e, s, p);
            if (!(mt === n ? re === ue || l(re, ue, r, u, p) : mt)) {
              Q = !1;
              break;
            }
            j || (j = B == "constructor");
          }
          if (Q && !j) {
            var st = e.constructor, Et = s.constructor;
            st != Et && "constructor" in e && "constructor" in s && !(typeof st == "function" && st instanceof st && typeof Et == "function" && Et instanceof Et) && (Q = !1);
          }
          return p.delete(e), p.delete(s), Q;
        }
        function qt(e) {
          return Ci(Wu(e, n, Ju), e + "");
        }
        function gi(e) {
          return tu(e, Xe, Ei);
        }
        function pi(e) {
          return tu(e, at, Bu);
        }
        var di = Bs ? function(e) {
          return Bs.get(e);
        } : Fi;
        function Js(e) {
          for (var s = e.name + "", r = Ln[s], u = me.call(Ln, s) ? r.length : 0; u--; ) {
            var l = r[u], p = l.func;
            if (p == null || p == e)
              return l.name;
          }
          return s;
        }
        function kn(e) {
          var s = me.call(f, "placeholder") ? f : e;
          return s.placeholder;
        }
        function W() {
          var e = f.iteratee || Ri;
          return e = e === Ri ? ru : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function Qs(e, s) {
          var r = e.__data__;
          return Tf(s) ? r[typeof s == "string" ? "string" : "hash"] : r.map;
        }
        function mi(e) {
          for (var s = Xe(e), r = s.length; r--; ) {
            var u = s[r], l = e[u];
            s[r] = [u, l, ku(l)];
          }
          return s;
        }
        function Cn(e, s) {
          var r = Nc(e, s);
          return su(r) ? r : n;
        }
        function gf(e) {
          var s = me.call(e, mn), r = e[mn];
          try {
            e[mn] = n;
            var u = !0;
          } catch {
          }
          var l = xs.call(e);
          return u && (s ? e[mn] = r : delete e[mn]), l;
        }
        var Ei = Yr ? function(e) {
          return e == null ? [] : (e = _e(e), Vt(Yr(e), function(s) {
            return $a.call(e, s);
          }));
        } : Li, Bu = Yr ? function(e) {
          for (var s = []; e; )
            en(s, Ei(e)), e = Os(e);
          return s;
        } : Li, Je = tt;
        (Xr && Je(new Xr(new ArrayBuffer(1))) != Wt || Zn && Je(new Zn()) != h || qr && Je(qr.resolve()) != Se || Fn && Je(new Fn()) != ye || Vn && Je(new Vn()) != pn) && (Je = function(e) {
          var s = tt(e), r = s == Z ? e.constructor : n, u = r ? Nn(r) : "";
          if (u)
            switch (u) {
              case Kc:
                return Wt;
              case Hc:
                return h;
              case Jc:
                return Se;
              case Qc:
                return ye;
              case Zc:
                return pn;
            }
          return s;
        });
        function pf(e, s, r) {
          for (var u = -1, l = r.length; ++u < l; ) {
            var p = r[u], m = p.size;
            switch (p.type) {
              case "drop":
                e += m;
                break;
              case "dropRight":
                s -= m;
                break;
              case "take":
                s = He(s, e + m);
                break;
              case "takeRight":
                e = je(e, s - m);
                break;
            }
          }
          return { start: e, end: s };
        }
        function df(e) {
          var s = e.match(Tl);
          return s ? s[1].split(Cl) : [];
        }
        function Mu(e, s, r) {
          s = an(s, e);
          for (var u = -1, l = s.length, p = !1; ++u < l; ) {
            var m = Bt(s[u]);
            if (!(p = e != null && r(e, m)))
              break;
            e = e[m];
          }
          return p || ++u != l ? p : (l = e == null ? 0 : e.length, !!l && rr(l) && zt(m, l) && (K(e) || vn(e)));
        }
        function mf(e) {
          var s = e.length, r = new e.constructor(s);
          return s && typeof e[0] == "string" && me.call(e, "index") && (r.index = e.index, r.input = e.input), r;
        }
        function Uu(e) {
          return typeof e.constructor == "function" && !os(e) ? Bn(Os(e)) : {};
        }
        function Ef(e, s, r) {
          var u = e.constructor;
          switch (s) {
            case Gt:
              return ci(e);
            case ge:
            case Oe:
              return new u(+e);
            case Wt:
              return Vh(e, r);
            case mr:
            case Er:
            case _r:
            case yr:
            case Tr:
            case Cr:
            case Nr:
            case vr:
            case Ar:
              return Tu(e, r);
            case h:
              return new u();
            case I:
            case et:
              return new u(e);
            case Ge:
              return ef(e);
            case ye:
              return new u();
            case Re:
              return tf(e);
          }
        }
        function _f(e, s) {
          var r = s.length;
          if (!r)
            return e;
          var u = r - 1;
          return s[u] = (r > 1 ? "& " : "") + s[u], s = s.join(r > 2 ? ", " : " "), e.replace(yl, `{
/* [wrapped with ` + s + `] */
`);
        }
        function yf(e) {
          return K(e) || vn(e) || !!(ja && e && e[ja]);
        }
        function zt(e, s) {
          var r = typeof e;
          return s = s ?? Ye, !!s && (r == "number" || r != "symbol" && Dl.test(e)) && e > -1 && e % 1 == 0 && e < s;
        }
        function nt(e, s, r) {
          if (!xe(r))
            return !1;
          var u = typeof s;
          return (u == "number" ? it(r) && zt(s, r.length) : u == "string" && s in r) ? Ot(r[s], e) : !1;
        }
        function _i(e, s) {
          if (K(e))
            return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || dt(e) ? !0 : dl.test(e) || !pl.test(e) || s != null && e in _e(s);
        }
        function Tf(e) {
          var s = typeof e;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
        }
        function yi(e) {
          var s = Js(e), r = f[s];
          if (typeof r != "function" || !(s in ae.prototype))
            return !1;
          if (e === r)
            return !0;
          var u = di(r);
          return !!u && e === u[0];
        }
        function Cf(e) {
          return !!ka && ka in e;
        }
        var Nf = Is ? Kt : Bi;
        function os(e) {
          var s = e && e.constructor, r = typeof s == "function" && s.prototype || Pn;
          return e === r;
        }
        function ku(e) {
          return e === e && !xe(e);
        }
        function Gu(e, s) {
          return function(r) {
            return r == null ? !1 : r[e] === s && (s !== n || e in _e(r));
          };
        }
        function vf(e) {
          var s = nr(e, function(u) {
            return r.size === T && r.clear(), u;
          }), r = s.cache;
          return s;
        }
        function Af(e, s) {
          var r = e[1], u = s[1], l = r | u, p = l < (z | ee | qe), m = u == qe && r == Ae || u == qe && r == Le && e[7].length <= s[8] || u == (qe | Le) && s[7].length <= s[8] && r == Ae;
          if (!(p || m))
            return e;
          u & z && (e[2] = s[2], l |= r & z ? 0 : ke);
          var E = s[3];
          if (E) {
            var A = e[3];
            e[3] = A ? Nu(A, E, s[4]) : E, e[4] = A ? tn(e[3], x) : s[4];
          }
          return E = s[5], E && (A = e[5], e[5] = A ? vu(A, E, s[6]) : E, e[6] = A ? tn(e[5], x) : s[6]), E = s[7], E && (e[7] = E), u & qe && (e[8] = e[8] == null ? s[8] : He(e[8], s[8])), e[9] == null && (e[9] = s[9]), e[0] = s[0], e[1] = l, e;
        }
        function Sf(e) {
          var s = [];
          if (e != null)
            for (var r in _e(e))
              s.push(r);
          return s;
        }
        function If(e) {
          return xs.call(e);
        }
        function Wu(e, s, r) {
          return s = je(s === n ? e.length - 1 : s, 0), function() {
            for (var u = arguments, l = -1, p = je(u.length - s, 0), m = b(p); ++l < p; )
              m[l] = u[s + l];
            l = -1;
            for (var E = b(s + 1); ++l < s; )
              E[l] = u[l];
            return E[s] = r(m), ft(e, this, E);
          };
        }
        function $u(e, s) {
          return s.length < 2 ? e : Tn(e, vt(s, 0, -1));
        }
        function bf(e, s) {
          for (var r = e.length, u = He(s.length, r), l = rt(e); u--; ) {
            var p = s[u];
            e[u] = zt(p, r) ? l[p] : n;
          }
          return e;
        }
        function Ti(e, s) {
          if (!(s === "constructor" && typeof e[s] == "function") && s != "__proto__")
            return e[s];
        }
        var ju = Xu(fu), ls = Wc || function(e, s) {
          return ze.setTimeout(e, s);
        }, Ci = Xu(Hh);
        function Yu(e, s, r) {
          var u = s + "";
          return Ci(e, _f(u, xf(df(u), r)));
        }
        function Xu(e) {
          var s = 0, r = 0;
          return function() {
            var u = Xc(), l = zn - (u - r);
            if (r = u, l > 0) {
              if (++s >= Ut)
                return arguments[0];
            } else
              s = 0;
            return e.apply(n, arguments);
          };
        }
        function Zs(e, s) {
          var r = -1, u = e.length, l = u - 1;
          for (s = s === n ? u : s; ++r < s; ) {
            var p = si(r, l), m = e[p];
            e[p] = e[r], e[r] = m;
          }
          return e.length = s, e;
        }
        var qu = vf(function(e) {
          var s = [];
          return e.charCodeAt(0) === 46 && s.push(""), e.replace(ml, function(r, u, l, p) {
            s.push(l ? p.replace(Al, "$1") : u || r);
          }), s;
        });
        function Bt(e) {
          if (typeof e == "string" || dt(e))
            return e;
          var s = e + "";
          return s == "0" && 1 / e == -fe ? "-0" : s;
        }
        function Nn(e) {
          if (e != null) {
            try {
              return bs.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function xf(e, s) {
          return yt(Zt, function(r) {
            var u = "_." + r[0];
            s & r[1] && !Ns(e, u) && e.push(u);
          }), e.sort();
        }
        function zu(e) {
          if (e instanceof ae)
            return e.clone();
          var s = new Ct(e.__wrapped__, e.__chain__);
          return s.__actions__ = rt(e.__actions__), s.__index__ = e.__index__, s.__values__ = e.__values__, s;
        }
        function wf(e, s, r) {
          (r ? nt(e, s, r) : s === n) ? s = 1 : s = je(J(s), 0);
          var u = e == null ? 0 : e.length;
          if (!u || s < 1)
            return [];
          for (var l = 0, p = 0, m = b(Fs(u / s)); l < u; )
            m[p++] = vt(e, l, l += s);
          return m;
        }
        function Df(e) {
          for (var s = -1, r = e == null ? 0 : e.length, u = 0, l = []; ++s < r; ) {
            var p = e[s];
            p && (l[u++] = p);
          }
          return l;
        }
        function Of() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var s = b(e - 1), r = arguments[0], u = e; u--; )
            s[u - 1] = arguments[u];
          return en(K(r) ? rt(r) : [r], Ke(s, 1));
        }
        var Rf = V(function(e, s) {
          return Me(e) ? ss(e, Ke(s, 1, Me, !0)) : [];
        }), Pf = V(function(e, s) {
          var r = At(s);
          return Me(r) && (r = n), Me(e) ? ss(e, Ke(s, 1, Me, !0), W(r, 2)) : [];
        }), Ff = V(function(e, s) {
          var r = At(s);
          return Me(r) && (r = n), Me(e) ? ss(e, Ke(s, 1, Me, !0), n, r) : [];
        });
        function Lf(e, s, r) {
          var u = e == null ? 0 : e.length;
          return u ? (s = r || s === n ? 1 : J(s), vt(e, s < 0 ? 0 : s, u)) : [];
        }
        function Bf(e, s, r) {
          var u = e == null ? 0 : e.length;
          return u ? (s = r || s === n ? 1 : J(s), s = u - s, vt(e, 0, s < 0 ? 0 : s)) : [];
        }
        function Mf(e, s) {
          return e && e.length ? Ys(e, W(s, 3), !0, !0) : [];
        }
        function Uf(e, s) {
          return e && e.length ? Ys(e, W(s, 3), !0) : [];
        }
        function kf(e, s, r, u) {
          var l = e == null ? 0 : e.length;
          return l ? (r && typeof r != "number" && nt(e, s, r) && (r = 0, u = l), Dh(e, s, r, u)) : [];
        }
        function Ku(e, s, r) {
          var u = e == null ? 0 : e.length;
          if (!u)
            return -1;
          var l = r == null ? 0 : J(r);
          return l < 0 && (l = je(u + l, 0)), vs(e, W(s, 3), l);
        }
        function Hu(e, s, r) {
          var u = e == null ? 0 : e.length;
          if (!u)
            return -1;
          var l = u - 1;
          return r !== n && (l = J(r), l = r < 0 ? je(u + l, 0) : He(l, u - 1)), vs(e, W(s, 3), l, !0);
        }
        function Ju(e) {
          var s = e == null ? 0 : e.length;
          return s ? Ke(e, 1) : [];
        }
        function Gf(e) {
          var s = e == null ? 0 : e.length;
          return s ? Ke(e, fe) : [];
        }
        function Wf(e, s) {
          var r = e == null ? 0 : e.length;
          return r ? (s = s === n ? 1 : J(s), Ke(e, s)) : [];
        }
        function $f(e) {
          for (var s = -1, r = e == null ? 0 : e.length, u = {}; ++s < r; ) {
            var l = e[s];
            u[l[0]] = l[1];
          }
          return u;
        }
        function Qu(e) {
          return e && e.length ? e[0] : n;
        }
        function jf(e, s, r) {
          var u = e == null ? 0 : e.length;
          if (!u)
            return -1;
          var l = r == null ? 0 : J(r);
          return l < 0 && (l = je(u + l, 0)), wn(e, s, l);
        }
        function Yf(e) {
          var s = e == null ? 0 : e.length;
          return s ? vt(e, 0, -1) : [];
        }
        var Xf = V(function(e) {
          var s = Ie(e, oi);
          return s.length && s[0] === e[0] ? Zr(s) : [];
        }), qf = V(function(e) {
          var s = At(e), r = Ie(e, oi);
          return s === At(r) ? s = n : r.pop(), r.length && r[0] === e[0] ? Zr(r, W(s, 2)) : [];
        }), zf = V(function(e) {
          var s = At(e), r = Ie(e, oi);
          return s = typeof s == "function" ? s : n, s && r.pop(), r.length && r[0] === e[0] ? Zr(r, n, s) : [];
        });
        function Kf(e, s) {
          return e == null ? "" : jc.call(e, s);
        }
        function At(e) {
          var s = e == null ? 0 : e.length;
          return s ? e[s - 1] : n;
        }
        function Hf(e, s, r) {
          var u = e == null ? 0 : e.length;
          if (!u)
            return -1;
          var l = u;
          return r !== n && (l = J(r), l = l < 0 ? je(u + l, 0) : He(l, u - 1)), s === s ? bc(e, s, l) : vs(e, Oa, l, !0);
        }
        function Jf(e, s) {
          return e && e.length ? ou(e, J(s)) : n;
        }
        var Qf = V(Zu);
        function Zu(e, s) {
          return e && e.length && s && s.length ? ni(e, s) : e;
        }
        function Zf(e, s, r) {
          return e && e.length && s && s.length ? ni(e, s, W(r, 2)) : e;
        }
        function Vf(e, s, r) {
          return e && e.length && s && s.length ? ni(e, s, n, r) : e;
        }
        var eg = qt(function(e, s) {
          var r = e == null ? 0 : e.length, u = Kr(e, s);
          return hu(e, Ie(s, function(l) {
            return zt(l, r) ? +l : l;
          }).sort(Cu)), u;
        });
        function tg(e, s) {
          var r = [];
          if (!(e && e.length))
            return r;
          var u = -1, l = [], p = e.length;
          for (s = W(s, 3); ++u < p; ) {
            var m = e[u];
            s(m, u, e) && (r.push(m), l.push(u));
          }
          return hu(e, l), r;
        }
        function Ni(e) {
          return e == null ? e : zc.call(e);
        }
        function ng(e, s, r) {
          var u = e == null ? 0 : e.length;
          return u ? (r && typeof r != "number" && nt(e, s, r) ? (s = 0, r = u) : (s = s == null ? 0 : J(s), r = r === n ? u : J(r)), vt(e, s, r)) : [];
        }
        function sg(e, s) {
          return js(e, s);
        }
        function rg(e, s, r) {
          return ii(e, s, W(r, 2));
        }
        function ig(e, s) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var u = js(e, s);
            if (u < r && Ot(e[u], s))
              return u;
          }
          return -1;
        }
        function ag(e, s) {
          return js(e, s, !0);
        }
        function ug(e, s, r) {
          return ii(e, s, W(r, 2), !0);
        }
        function og(e, s) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var u = js(e, s, !0) - 1;
            if (Ot(e[u], s))
              return u;
          }
          return -1;
        }
        function lg(e) {
          return e && e.length ? gu(e) : [];
        }
        function cg(e, s) {
          return e && e.length ? gu(e, W(s, 2)) : [];
        }
        function hg(e) {
          var s = e == null ? 0 : e.length;
          return s ? vt(e, 1, s) : [];
        }
        function fg(e, s, r) {
          return e && e.length ? (s = r || s === n ? 1 : J(s), vt(e, 0, s < 0 ? 0 : s)) : [];
        }
        function gg(e, s, r) {
          var u = e == null ? 0 : e.length;
          return u ? (s = r || s === n ? 1 : J(s), s = u - s, vt(e, s < 0 ? 0 : s, u)) : [];
        }
        function pg(e, s) {
          return e && e.length ? Ys(e, W(s, 3), !1, !0) : [];
        }
        function dg(e, s) {
          return e && e.length ? Ys(e, W(s, 3)) : [];
        }
        var mg = V(function(e) {
          return rn(Ke(e, 1, Me, !0));
        }), Eg = V(function(e) {
          var s = At(e);
          return Me(s) && (s = n), rn(Ke(e, 1, Me, !0), W(s, 2));
        }), _g = V(function(e) {
          var s = At(e);
          return s = typeof s == "function" ? s : n, rn(Ke(e, 1, Me, !0), n, s);
        });
        function yg(e) {
          return e && e.length ? rn(e) : [];
        }
        function Tg(e, s) {
          return e && e.length ? rn(e, W(s, 2)) : [];
        }
        function Cg(e, s) {
          return s = typeof s == "function" ? s : n, e && e.length ? rn(e, n, s) : [];
        }
        function vi(e) {
          if (!(e && e.length))
            return [];
          var s = 0;
          return e = Vt(e, function(r) {
            if (Me(r))
              return s = je(r.length, s), !0;
          }), Gr(s, function(r) {
            return Ie(e, Mr(r));
          });
        }
        function Vu(e, s) {
          if (!(e && e.length))
            return [];
          var r = vi(e);
          return s == null ? r : Ie(r, function(u) {
            return ft(s, n, u);
          });
        }
        var Ng = V(function(e, s) {
          return Me(e) ? ss(e, s) : [];
        }), vg = V(function(e) {
          return ui(Vt(e, Me));
        }), Ag = V(function(e) {
          var s = At(e);
          return Me(s) && (s = n), ui(Vt(e, Me), W(s, 2));
        }), Sg = V(function(e) {
          var s = At(e);
          return s = typeof s == "function" ? s : n, ui(Vt(e, Me), n, s);
        }), Ig = V(vi);
        function bg(e, s) {
          return Eu(e || [], s || [], ns);
        }
        function xg(e, s) {
          return Eu(e || [], s || [], as);
        }
        var wg = V(function(e) {
          var s = e.length, r = s > 1 ? e[s - 1] : n;
          return r = typeof r == "function" ? (e.pop(), r) : n, Vu(e, r);
        });
        function eo(e) {
          var s = f(e);
          return s.__chain__ = !0, s;
        }
        function Dg(e, s) {
          return s(e), e;
        }
        function Vs(e, s) {
          return s(e);
        }
        var Og = qt(function(e) {
          var s = e.length, r = s ? e[0] : 0, u = this.__wrapped__, l = function(p) {
            return Kr(p, e);
          };
          return s > 1 || this.__actions__.length || !(u instanceof ae) || !zt(r) ? this.thru(l) : (u = u.slice(r, +r + (s ? 1 : 0)), u.__actions__.push({
            func: Vs,
            args: [l],
            thisArg: n
          }), new Ct(u, this.__chain__).thru(function(p) {
            return s && !p.length && p.push(n), p;
          }));
        });
        function Rg() {
          return eo(this);
        }
        function Pg() {
          return new Ct(this.value(), this.__chain__);
        }
        function Fg() {
          this.__values__ === n && (this.__values__ = po(this.value()));
          var e = this.__index__ >= this.__values__.length, s = e ? n : this.__values__[this.__index__++];
          return { done: e, value: s };
        }
        function Lg() {
          return this;
        }
        function Bg(e) {
          for (var s, r = this; r instanceof Us; ) {
            var u = zu(r);
            u.__index__ = 0, u.__values__ = n, s ? l.__wrapped__ = u : s = u;
            var l = u;
            r = r.__wrapped__;
          }
          return l.__wrapped__ = e, s;
        }
        function Mg() {
          var e = this.__wrapped__;
          if (e instanceof ae) {
            var s = e;
            return this.__actions__.length && (s = new ae(this)), s = s.reverse(), s.__actions__.push({
              func: Vs,
              args: [Ni],
              thisArg: n
            }), new Ct(s, this.__chain__);
          }
          return this.thru(Ni);
        }
        function Ug() {
          return mu(this.__wrapped__, this.__actions__);
        }
        var kg = Xs(function(e, s, r) {
          me.call(e, r) ? ++e[r] : Yt(e, r, 1);
        });
        function Gg(e, s, r) {
          var u = K(e) ? wa : wh;
          return r && nt(e, s, r) && (s = n), u(e, W(s, 3));
        }
        function Wg(e, s) {
          var r = K(e) ? Vt : Va;
          return r(e, W(s, 3));
        }
        var $g = bu(Ku), jg = bu(Hu);
        function Yg(e, s) {
          return Ke(er(e, s), 1);
        }
        function Xg(e, s) {
          return Ke(er(e, s), fe);
        }
        function qg(e, s, r) {
          return r = r === n ? 1 : J(r), Ke(er(e, s), r);
        }
        function to(e, s) {
          var r = K(e) ? yt : sn;
          return r(e, W(s, 3));
        }
        function no(e, s) {
          var r = K(e) ? cc : Za;
          return r(e, W(s, 3));
        }
        var zg = Xs(function(e, s, r) {
          me.call(e, r) ? e[r].push(s) : Yt(e, r, [s]);
        });
        function Kg(e, s, r, u) {
          e = it(e) ? e : Wn(e), r = r && !u ? J(r) : 0;
          var l = e.length;
          return r < 0 && (r = je(l + r, 0)), ir(e) ? r <= l && e.indexOf(s, r) > -1 : !!l && wn(e, s, r) > -1;
        }
        var Hg = V(function(e, s, r) {
          var u = -1, l = typeof s == "function", p = it(e) ? b(e.length) : [];
          return sn(e, function(m) {
            p[++u] = l ? ft(s, m, r) : rs(m, s, r);
          }), p;
        }), Jg = Xs(function(e, s, r) {
          Yt(e, r, s);
        });
        function er(e, s) {
          var r = K(e) ? Ie : iu;
          return r(e, W(s, 3));
        }
        function Qg(e, s, r, u) {
          return e == null ? [] : (K(s) || (s = s == null ? [] : [s]), r = u ? n : r, K(r) || (r = r == null ? [] : [r]), lu(e, s, r));
        }
        var Zg = Xs(function(e, s, r) {
          e[r ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function Vg(e, s, r) {
          var u = K(e) ? Lr : Pa, l = arguments.length < 3;
          return u(e, W(s, 4), r, l, sn);
        }
        function ep(e, s, r) {
          var u = K(e) ? hc : Pa, l = arguments.length < 3;
          return u(e, W(s, 4), r, l, Za);
        }
        function tp(e, s) {
          var r = K(e) ? Vt : Va;
          return r(e, sr(W(s, 3)));
        }
        function np(e) {
          var s = K(e) ? Ka : zh;
          return s(e);
        }
        function sp(e, s, r) {
          (r ? nt(e, s, r) : s === n) ? s = 1 : s = J(s);
          var u = K(e) ? Ah : Kh;
          return u(e, s);
        }
        function rp(e) {
          var s = K(e) ? Sh : Jh;
          return s(e);
        }
        function ip(e) {
          if (e == null)
            return 0;
          if (it(e))
            return ir(e) ? On(e) : e.length;
          var s = Je(e);
          return s == h || s == ye ? e.size : ei(e).length;
        }
        function ap(e, s, r) {
          var u = K(e) ? Br : Qh;
          return r && nt(e, s, r) && (s = n), u(e, W(s, 3));
        }
        var up = V(function(e, s) {
          if (e == null)
            return [];
          var r = s.length;
          return r > 1 && nt(e, s[0], s[1]) ? s = [] : r > 2 && nt(s[0], s[1], s[2]) && (s = [s[0]]), lu(e, Ke(s, 1), []);
        }), tr = Gc || function() {
          return ze.Date.now();
        };
        function op(e, s) {
          if (typeof s != "function")
            throw new Tt(c);
          return e = J(e), function() {
            if (--e < 1)
              return s.apply(this, arguments);
          };
        }
        function so(e, s, r) {
          return s = r ? n : s, s = e && s == null ? e.length : s, Xt(e, qe, n, n, n, n, s);
        }
        function ro(e, s) {
          var r;
          if (typeof s != "function")
            throw new Tt(c);
          return e = J(e), function() {
            return --e > 0 && (r = s.apply(this, arguments)), e <= 1 && (s = n), r;
          };
        }
        var Ai = V(function(e, s, r) {
          var u = z;
          if (r.length) {
            var l = tn(r, kn(Ai));
            u |= ie;
          }
          return Xt(e, u, s, r, l);
        }), io = V(function(e, s, r) {
          var u = z | ee;
          if (r.length) {
            var l = tn(r, kn(io));
            u |= ie;
          }
          return Xt(s, u, e, r, l);
        });
        function ao(e, s, r) {
          s = r ? n : s;
          var u = Xt(e, Ae, n, n, n, n, n, s);
          return u.placeholder = ao.placeholder, u;
        }
        function uo(e, s, r) {
          s = r ? n : s;
          var u = Xt(e, Fe, n, n, n, n, n, s);
          return u.placeholder = uo.placeholder, u;
        }
        function oo(e, s, r) {
          var u, l, p, m, E, A, D = 0, O = !1, P = !1, B = !0;
          if (typeof e != "function")
            throw new Tt(c);
          s = St(s) || 0, xe(r) && (O = !!r.leading, P = "maxWait" in r, p = P ? je(St(r.maxWait) || 0, s) : p, B = "trailing" in r ? !!r.trailing : B);
          function k(Ue) {
            var Rt = u, Jt = l;
            return u = l = n, D = Ue, m = e.apply(Jt, Rt), m;
          }
          function $(Ue) {
            return D = Ue, E = ls(re, s), O ? k(Ue) : m;
          }
          function Q(Ue) {
            var Rt = Ue - A, Jt = Ue - D, xo = s - Rt;
            return P ? He(xo, p - Jt) : xo;
          }
          function j(Ue) {
            var Rt = Ue - A, Jt = Ue - D;
            return A === n || Rt >= s || Rt < 0 || P && Jt >= p;
          }
          function re() {
            var Ue = tr();
            if (j(Ue))
              return ue(Ue);
            E = ls(re, Q(Ue));
          }
          function ue(Ue) {
            return E = n, B && u ? k(Ue) : (u = l = n, m);
          }
          function mt() {
            E !== n && _u(E), D = 0, u = A = l = E = n;
          }
          function st() {
            return E === n ? m : ue(tr());
          }
          function Et() {
            var Ue = tr(), Rt = j(Ue);
            if (u = arguments, l = this, A = Ue, Rt) {
              if (E === n)
                return $(A);
              if (P)
                return _u(E), E = ls(re, s), k(A);
            }
            return E === n && (E = ls(re, s)), m;
          }
          return Et.cancel = mt, Et.flush = st, Et;
        }
        var lp = V(function(e, s) {
          return Qa(e, 1, s);
        }), cp = V(function(e, s, r) {
          return Qa(e, St(s) || 0, r);
        });
        function hp(e) {
          return Xt(e, ht);
        }
        function nr(e, s) {
          if (typeof e != "function" || s != null && typeof s != "function")
            throw new Tt(c);
          var r = function() {
            var u = arguments, l = s ? s.apply(this, u) : u[0], p = r.cache;
            if (p.has(l))
              return p.get(l);
            var m = e.apply(this, u);
            return r.cache = p.set(l, m) || p, m;
          };
          return r.cache = new (nr.Cache || jt)(), r;
        }
        nr.Cache = jt;
        function sr(e) {
          if (typeof e != "function")
            throw new Tt(c);
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, s[0]);
              case 2:
                return !e.call(this, s[0], s[1]);
              case 3:
                return !e.call(this, s[0], s[1], s[2]);
            }
            return !e.apply(this, s);
          };
        }
        function fp(e) {
          return ro(2, e);
        }
        var gp = Zh(function(e, s) {
          s = s.length == 1 && K(s[0]) ? Ie(s[0], gt(W())) : Ie(Ke(s, 1), gt(W()));
          var r = s.length;
          return V(function(u) {
            for (var l = -1, p = He(u.length, r); ++l < p; )
              u[l] = s[l].call(this, u[l]);
            return ft(e, this, u);
          });
        }), Si = V(function(e, s) {
          var r = tn(s, kn(Si));
          return Xt(e, ie, n, s, r);
        }), lo = V(function(e, s) {
          var r = tn(s, kn(lo));
          return Xt(e, De, n, s, r);
        }), pp = qt(function(e, s) {
          return Xt(e, Le, n, n, n, s);
        });
        function dp(e, s) {
          if (typeof e != "function")
            throw new Tt(c);
          return s = s === n ? s : J(s), V(e, s);
        }
        function mp(e, s) {
          if (typeof e != "function")
            throw new Tt(c);
          return s = s == null ? 0 : je(J(s), 0), V(function(r) {
            var u = r[s], l = un(r, 0, s);
            return u && en(l, u), ft(e, this, l);
          });
        }
        function Ep(e, s, r) {
          var u = !0, l = !0;
          if (typeof e != "function")
            throw new Tt(c);
          return xe(r) && (u = "leading" in r ? !!r.leading : u, l = "trailing" in r ? !!r.trailing : l), oo(e, s, {
            leading: u,
            maxWait: s,
            trailing: l
          });
        }
        function _p(e) {
          return so(e, 1);
        }
        function yp(e, s) {
          return Si(li(s), e);
        }
        function Tp() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return K(e) ? e : [e];
        }
        function Cp(e) {
          return Nt(e, M);
        }
        function Np(e, s) {
          return s = typeof s == "function" ? s : n, Nt(e, M, s);
        }
        function vp(e) {
          return Nt(e, v | M);
        }
        function Ap(e, s) {
          return s = typeof s == "function" ? s : n, Nt(e, v | M, s);
        }
        function Sp(e, s) {
          return s == null || Ja(e, s, Xe(s));
        }
        function Ot(e, s) {
          return e === s || e !== e && s !== s;
        }
        var Ip = Hs(Qr), bp = Hs(function(e, s) {
          return e >= s;
        }), vn = nu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? nu : function(e) {
          return Pe(e) && me.call(e, "callee") && !$a.call(e, "callee");
        }, K = b.isArray, xp = va ? gt(va) : Lh;
        function it(e) {
          return e != null && rr(e.length) && !Kt(e);
        }
        function Me(e) {
          return Pe(e) && it(e);
        }
        function wp(e) {
          return e === !0 || e === !1 || Pe(e) && tt(e) == ge;
        }
        var on = $c || Bi, Dp = Aa ? gt(Aa) : Bh;
        function Op(e) {
          return Pe(e) && e.nodeType === 1 && !cs(e);
        }
        function Rp(e) {
          if (e == null)
            return !0;
          if (it(e) && (K(e) || typeof e == "string" || typeof e.splice == "function" || on(e) || Gn(e) || vn(e)))
            return !e.length;
          var s = Je(e);
          if (s == h || s == ye)
            return !e.size;
          if (os(e))
            return !ei(e).length;
          for (var r in e)
            if (me.call(e, r))
              return !1;
          return !0;
        }
        function Pp(e, s) {
          return is(e, s);
        }
        function Fp(e, s, r) {
          r = typeof r == "function" ? r : n;
          var u = r ? r(e, s) : n;
          return u === n ? is(e, s, n, r) : !!u;
        }
        function Ii(e) {
          if (!Pe(e))
            return !1;
          var s = tt(e);
          return s == kt || s == In || typeof e.message == "string" && typeof e.name == "string" && !cs(e);
        }
        function Lp(e) {
          return typeof e == "number" && Ya(e);
        }
        function Kt(e) {
          if (!xe(e))
            return !1;
          var s = tt(e);
          return s == bn || s == g || s == X || s == Be;
        }
        function co(e) {
          return typeof e == "number" && e == J(e);
        }
        function rr(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ye;
        }
        function xe(e) {
          var s = typeof e;
          return e != null && (s == "object" || s == "function");
        }
        function Pe(e) {
          return e != null && typeof e == "object";
        }
        var ho = Sa ? gt(Sa) : Uh;
        function Bp(e, s) {
          return e === s || Vr(e, s, mi(s));
        }
        function Mp(e, s, r) {
          return r = typeof r == "function" ? r : n, Vr(e, s, mi(s), r);
        }
        function Up(e) {
          return fo(e) && e != +e;
        }
        function kp(e) {
          if (Nf(e))
            throw new q(o);
          return su(e);
        }
        function Gp(e) {
          return e === null;
        }
        function Wp(e) {
          return e == null;
        }
        function fo(e) {
          return typeof e == "number" || Pe(e) && tt(e) == I;
        }
        function cs(e) {
          if (!Pe(e) || tt(e) != Z)
            return !1;
          var s = Os(e);
          if (s === null)
            return !0;
          var r = me.call(s, "constructor") && s.constructor;
          return typeof r == "function" && r instanceof r && bs.call(r) == Bc;
        }
        var bi = Ia ? gt(Ia) : kh;
        function $p(e) {
          return co(e) && e >= -Ye && e <= Ye;
        }
        var go = ba ? gt(ba) : Gh;
        function ir(e) {
          return typeof e == "string" || !K(e) && Pe(e) && tt(e) == et;
        }
        function dt(e) {
          return typeof e == "symbol" || Pe(e) && tt(e) == Re;
        }
        var Gn = xa ? gt(xa) : Wh;
        function jp(e) {
          return e === n;
        }
        function Yp(e) {
          return Pe(e) && Je(e) == pn;
        }
        function Xp(e) {
          return Pe(e) && tt(e) == _s;
        }
        var qp = Hs(ti), zp = Hs(function(e, s) {
          return e <= s;
        });
        function po(e) {
          if (!e)
            return [];
          if (it(e))
            return ir(e) ? wt(e) : rt(e);
          if (Qn && e[Qn])
            return Ac(e[Qn]());
          var s = Je(e), r = s == h ? $r : s == ye ? As : Wn;
          return r(e);
        }
        function Ht(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = St(e), e === fe || e === -fe) {
            var s = e < 0 ? -1 : 1;
            return s * gn;
          }
          return e === e ? e : 0;
        }
        function J(e) {
          var s = Ht(e), r = s % 1;
          return s === s ? r ? s - r : s : 0;
        }
        function mo(e) {
          return e ? yn(J(e), 0, Ve) : 0;
        }
        function St(e) {
          if (typeof e == "number")
            return e;
          if (dt(e))
            return Ze;
          if (xe(e)) {
            var s = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = xe(s) ? s + "" : s;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Fa(e);
          var r = bl.test(e);
          return r || wl.test(e) ? uc(e.slice(2), r ? 2 : 8) : Il.test(e) ? Ze : +e;
        }
        function Eo(e) {
          return Lt(e, at(e));
        }
        function Kp(e) {
          return e ? yn(J(e), -Ye, Ye) : e === 0 ? e : 0;
        }
        function pe(e) {
          return e == null ? "" : pt(e);
        }
        var Hp = Mn(function(e, s) {
          if (os(s) || it(s)) {
            Lt(s, Xe(s), e);
            return;
          }
          for (var r in s)
            me.call(s, r) && ns(e, r, s[r]);
        }), _o = Mn(function(e, s) {
          Lt(s, at(s), e);
        }), ar = Mn(function(e, s, r, u) {
          Lt(s, at(s), e, u);
        }), Jp = Mn(function(e, s, r, u) {
          Lt(s, Xe(s), e, u);
        }), Qp = qt(Kr);
        function Zp(e, s) {
          var r = Bn(e);
          return s == null ? r : Ha(r, s);
        }
        var Vp = V(function(e, s) {
          e = _e(e);
          var r = -1, u = s.length, l = u > 2 ? s[2] : n;
          for (l && nt(s[0], s[1], l) && (u = 1); ++r < u; )
            for (var p = s[r], m = at(p), E = -1, A = m.length; ++E < A; ) {
              var D = m[E], O = e[D];
              (O === n || Ot(O, Pn[D]) && !me.call(e, D)) && (e[D] = p[D]);
            }
          return e;
        }), ed = V(function(e) {
          return e.push(n, Fu), ft(yo, n, e);
        });
        function td(e, s) {
          return Da(e, W(s, 3), Ft);
        }
        function nd(e, s) {
          return Da(e, W(s, 3), Jr);
        }
        function sd(e, s) {
          return e == null ? e : Hr(e, W(s, 3), at);
        }
        function rd(e, s) {
          return e == null ? e : eu(e, W(s, 3), at);
        }
        function id(e, s) {
          return e && Ft(e, W(s, 3));
        }
        function ad(e, s) {
          return e && Jr(e, W(s, 3));
        }
        function ud(e) {
          return e == null ? [] : Ws(e, Xe(e));
        }
        function od(e) {
          return e == null ? [] : Ws(e, at(e));
        }
        function xi(e, s, r) {
          var u = e == null ? n : Tn(e, s);
          return u === n ? r : u;
        }
        function ld(e, s) {
          return e != null && Mu(e, s, Oh);
        }
        function wi(e, s) {
          return e != null && Mu(e, s, Rh);
        }
        var cd = wu(function(e, s, r) {
          s != null && typeof s.toString != "function" && (s = xs.call(s)), e[s] = r;
        }, Oi(ut)), hd = wu(function(e, s, r) {
          s != null && typeof s.toString != "function" && (s = xs.call(s)), me.call(e, s) ? e[s].push(r) : e[s] = [r];
        }, W), fd = V(rs);
        function Xe(e) {
          return it(e) ? za(e) : ei(e);
        }
        function at(e) {
          return it(e) ? za(e, !0) : $h(e);
        }
        function gd(e, s) {
          var r = {};
          return s = W(s, 3), Ft(e, function(u, l, p) {
            Yt(r, s(u, l, p), u);
          }), r;
        }
        function pd(e, s) {
          var r = {};
          return s = W(s, 3), Ft(e, function(u, l, p) {
            Yt(r, l, s(u, l, p));
          }), r;
        }
        var dd = Mn(function(e, s, r) {
          $s(e, s, r);
        }), yo = Mn(function(e, s, r, u) {
          $s(e, s, r, u);
        }), md = qt(function(e, s) {
          var r = {};
          if (e == null)
            return r;
          var u = !1;
          s = Ie(s, function(p) {
            return p = an(p, e), u || (u = p.length > 1), p;
          }), Lt(e, pi(e), r), u && (r = Nt(r, v | R | M, cf));
          for (var l = s.length; l--; )
            ai(r, s[l]);
          return r;
        });
        function Ed(e, s) {
          return To(e, sr(W(s)));
        }
        var _d = qt(function(e, s) {
          return e == null ? {} : Yh(e, s);
        });
        function To(e, s) {
          if (e == null)
            return {};
          var r = Ie(pi(e), function(u) {
            return [u];
          });
          return s = W(s), cu(e, r, function(u, l) {
            return s(u, l[0]);
          });
        }
        function yd(e, s, r) {
          s = an(s, e);
          var u = -1, l = s.length;
          for (l || (l = 1, e = n); ++u < l; ) {
            var p = e == null ? n : e[Bt(s[u])];
            p === n && (u = l, p = r), e = Kt(p) ? p.call(e) : p;
          }
          return e;
        }
        function Td(e, s, r) {
          return e == null ? e : as(e, s, r);
        }
        function Cd(e, s, r, u) {
          return u = typeof u == "function" ? u : n, e == null ? e : as(e, s, r, u);
        }
        var Co = Ru(Xe), No = Ru(at);
        function Nd(e, s, r) {
          var u = K(e), l = u || on(e) || Gn(e);
          if (s = W(s, 4), r == null) {
            var p = e && e.constructor;
            l ? r = u ? new p() : [] : xe(e) ? r = Kt(p) ? Bn(Os(e)) : {} : r = {};
          }
          return (l ? yt : Ft)(e, function(m, E, A) {
            return s(r, m, E, A);
          }), r;
        }
        function vd(e, s) {
          return e == null ? !0 : ai(e, s);
        }
        function Ad(e, s, r) {
          return e == null ? e : du(e, s, li(r));
        }
        function Sd(e, s, r, u) {
          return u = typeof u == "function" ? u : n, e == null ? e : du(e, s, li(r), u);
        }
        function Wn(e) {
          return e == null ? [] : Wr(e, Xe(e));
        }
        function Id(e) {
          return e == null ? [] : Wr(e, at(e));
        }
        function bd(e, s, r) {
          return r === n && (r = s, s = n), r !== n && (r = St(r), r = r === r ? r : 0), s !== n && (s = St(s), s = s === s ? s : 0), yn(St(e), s, r);
        }
        function xd(e, s, r) {
          return s = Ht(s), r === n ? (r = s, s = 0) : r = Ht(r), e = St(e), Ph(e, s, r);
        }
        function wd(e, s, r) {
          if (r && typeof r != "boolean" && nt(e, s, r) && (s = r = n), r === n && (typeof s == "boolean" ? (r = s, s = n) : typeof e == "boolean" && (r = e, e = n)), e === n && s === n ? (e = 0, s = 1) : (e = Ht(e), s === n ? (s = e, e = 0) : s = Ht(s)), e > s) {
            var u = e;
            e = s, s = u;
          }
          if (r || e % 1 || s % 1) {
            var l = Xa();
            return He(e + l * (s - e + ac("1e-" + ((l + "").length - 1))), s);
          }
          return si(e, s);
        }
        var Dd = Un(function(e, s, r) {
          return s = s.toLowerCase(), e + (r ? vo(s) : s);
        });
        function vo(e) {
          return Di(pe(e).toLowerCase());
        }
        function Ao(e) {
          return e = pe(e), e && e.replace(Ol, yc).replace(Jl, "");
        }
        function Od(e, s, r) {
          e = pe(e), s = pt(s);
          var u = e.length;
          r = r === n ? u : yn(J(r), 0, u);
          var l = r;
          return r -= s.length, r >= 0 && e.slice(r, l) == s;
        }
        function Rd(e) {
          return e = pe(e), e && hl.test(e) ? e.replace(ea, Tc) : e;
        }
        function Pd(e) {
          return e = pe(e), e && El.test(e) ? e.replace(Sr, "\\$&") : e;
        }
        var Fd = Un(function(e, s, r) {
          return e + (r ? "-" : "") + s.toLowerCase();
        }), Ld = Un(function(e, s, r) {
          return e + (r ? " " : "") + s.toLowerCase();
        }), Bd = Iu("toLowerCase");
        function Md(e, s, r) {
          e = pe(e), s = J(s);
          var u = s ? On(e) : 0;
          if (!s || u >= s)
            return e;
          var l = (s - u) / 2;
          return Ks(Ls(l), r) + e + Ks(Fs(l), r);
        }
        function Ud(e, s, r) {
          e = pe(e), s = J(s);
          var u = s ? On(e) : 0;
          return s && u < s ? e + Ks(s - u, r) : e;
        }
        function kd(e, s, r) {
          e = pe(e), s = J(s);
          var u = s ? On(e) : 0;
          return s && u < s ? Ks(s - u, r) + e : e;
        }
        function Gd(e, s, r) {
          return r || s == null ? s = 0 : s && (s = +s), qc(pe(e).replace(Ir, ""), s || 0);
        }
        function Wd(e, s, r) {
          return (r ? nt(e, s, r) : s === n) ? s = 1 : s = J(s), ri(pe(e), s);
        }
        function $d() {
          var e = arguments, s = pe(e[0]);
          return e.length < 3 ? s : s.replace(e[1], e[2]);
        }
        var jd = Un(function(e, s, r) {
          return e + (r ? "_" : "") + s.toLowerCase();
        });
        function Yd(e, s, r) {
          return r && typeof r != "number" && nt(e, s, r) && (s = r = n), r = r === n ? Ve : r >>> 0, r ? (e = pe(e), e && (typeof s == "string" || s != null && !bi(s)) && (s = pt(s), !s && Dn(e)) ? un(wt(e), 0, r) : e.split(s, r)) : [];
        }
        var Xd = Un(function(e, s, r) {
          return e + (r ? " " : "") + Di(s);
        });
        function qd(e, s, r) {
          return e = pe(e), r = r == null ? 0 : yn(J(r), 0, e.length), s = pt(s), e.slice(r, r + s.length) == s;
        }
        function zd(e, s, r) {
          var u = f.templateSettings;
          r && nt(e, s, r) && (s = n), e = pe(e), s = ar({}, s, u, Pu);
          var l = ar({}, s.imports, u.imports, Pu), p = Xe(l), m = Wr(l, p), E, A, D = 0, O = s.interpolate || ys, P = "__p += '", B = jr(
            (s.escape || ys).source + "|" + O.source + "|" + (O === ta ? Sl : ys).source + "|" + (s.evaluate || ys).source + "|$",
            "g"
          ), k = "//# sourceURL=" + (me.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tc + "]") + `
`;
          e.replace(B, function(j, re, ue, mt, st, Et) {
            return ue || (ue = mt), P += e.slice(D, Et).replace(Rl, Cc), re && (E = !0, P += `' +
__e(` + re + `) +
'`), st && (A = !0, P += `';
` + st + `;
__p += '`), ue && (P += `' +
((__t = (` + ue + `)) == null ? '' : __t) +
'`), D = Et + j.length, j;
          }), P += `';
`;
          var $ = me.call(s, "variable") && s.variable;
          if (!$)
            P = `with (obj) {
` + P + `
}
`;
          else if (vl.test($))
            throw new q(d);
          P = (A ? P.replace(ul, "") : P).replace(ol, "$1").replace(ll, "$1;"), P = "function(" + ($ || "obj") + `) {
` + ($ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (E ? ", __e = _.escape" : "") + (A ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var Q = Io(function() {
            return he(p, k + "return " + P).apply(n, m);
          });
          if (Q.source = P, Ii(Q))
            throw Q;
          return Q;
        }
        function Kd(e) {
          return pe(e).toLowerCase();
        }
        function Hd(e) {
          return pe(e).toUpperCase();
        }
        function Jd(e, s, r) {
          if (e = pe(e), e && (r || s === n))
            return Fa(e);
          if (!e || !(s = pt(s)))
            return e;
          var u = wt(e), l = wt(s), p = La(u, l), m = Ba(u, l) + 1;
          return un(u, p, m).join("");
        }
        function Qd(e, s, r) {
          if (e = pe(e), e && (r || s === n))
            return e.slice(0, Ua(e) + 1);
          if (!e || !(s = pt(s)))
            return e;
          var u = wt(e), l = Ba(u, wt(s)) + 1;
          return un(u, 0, l).join("");
        }
        function Zd(e, s, r) {
          if (e = pe(e), e && (r || s === n))
            return e.replace(Ir, "");
          if (!e || !(s = pt(s)))
            return e;
          var u = wt(e), l = La(u, wt(s));
          return un(u, l).join("");
        }
        function Vd(e, s) {
          var r = S, u = An;
          if (xe(s)) {
            var l = "separator" in s ? s.separator : l;
            r = "length" in s ? J(s.length) : r, u = "omission" in s ? pt(s.omission) : u;
          }
          e = pe(e);
          var p = e.length;
          if (Dn(e)) {
            var m = wt(e);
            p = m.length;
          }
          if (r >= p)
            return e;
          var E = r - On(u);
          if (E < 1)
            return u;
          var A = m ? un(m, 0, E).join("") : e.slice(0, E);
          if (l === n)
            return A + u;
          if (m && (E += A.length - E), bi(l)) {
            if (e.slice(E).search(l)) {
              var D, O = A;
              for (l.global || (l = jr(l.source, pe(na.exec(l)) + "g")), l.lastIndex = 0; D = l.exec(O); )
                var P = D.index;
              A = A.slice(0, P === n ? E : P);
            }
          } else if (e.indexOf(pt(l), E) != E) {
            var B = A.lastIndexOf(l);
            B > -1 && (A = A.slice(0, B));
          }
          return A + u;
        }
        function em(e) {
          return e = pe(e), e && cl.test(e) ? e.replace(Vi, xc) : e;
        }
        var tm = Un(function(e, s, r) {
          return e + (r ? " " : "") + s.toUpperCase();
        }), Di = Iu("toUpperCase");
        function So(e, s, r) {
          return e = pe(e), s = r ? n : s, s === n ? vc(e) ? Oc(e) : pc(e) : e.match(s) || [];
        }
        var Io = V(function(e, s) {
          try {
            return ft(e, n, s);
          } catch (r) {
            return Ii(r) ? r : new q(r);
          }
        }), nm = qt(function(e, s) {
          return yt(s, function(r) {
            r = Bt(r), Yt(e, r, Ai(e[r], e));
          }), e;
        });
        function sm(e) {
          var s = e == null ? 0 : e.length, r = W();
          return e = s ? Ie(e, function(u) {
            if (typeof u[1] != "function")
              throw new Tt(c);
            return [r(u[0]), u[1]];
          }) : [], V(function(u) {
            for (var l = -1; ++l < s; ) {
              var p = e[l];
              if (ft(p[0], this, u))
                return ft(p[1], this, u);
            }
          });
        }
        function rm(e) {
          return xh(Nt(e, v));
        }
        function Oi(e) {
          return function() {
            return e;
          };
        }
        function im(e, s) {
          return e == null || e !== e ? s : e;
        }
        var am = xu(), um = xu(!0);
        function ut(e) {
          return e;
        }
        function Ri(e) {
          return ru(typeof e == "function" ? e : Nt(e, v));
        }
        function om(e) {
          return au(Nt(e, v));
        }
        function lm(e, s) {
          return uu(e, Nt(s, v));
        }
        var cm = V(function(e, s) {
          return function(r) {
            return rs(r, e, s);
          };
        }), hm = V(function(e, s) {
          return function(r) {
            return rs(e, r, s);
          };
        });
        function Pi(e, s, r) {
          var u = Xe(s), l = Ws(s, u);
          r == null && !(xe(s) && (l.length || !u.length)) && (r = s, s = e, e = this, l = Ws(s, Xe(s)));
          var p = !(xe(r) && "chain" in r) || !!r.chain, m = Kt(e);
          return yt(l, function(E) {
            var A = s[E];
            e[E] = A, m && (e.prototype[E] = function() {
              var D = this.__chain__;
              if (p || D) {
                var O = e(this.__wrapped__), P = O.__actions__ = rt(this.__actions__);
                return P.push({ func: A, args: arguments, thisArg: e }), O.__chain__ = D, O;
              }
              return A.apply(e, en([this.value()], arguments));
            });
          }), e;
        }
        function fm() {
          return ze._ === this && (ze._ = Mc), this;
        }
        function Fi() {
        }
        function gm(e) {
          return e = J(e), V(function(s) {
            return ou(s, e);
          });
        }
        var pm = hi(Ie), dm = hi(wa), mm = hi(Br);
        function bo(e) {
          return _i(e) ? Mr(Bt(e)) : Xh(e);
        }
        function Em(e) {
          return function(s) {
            return e == null ? n : Tn(e, s);
          };
        }
        var _m = Du(), ym = Du(!0);
        function Li() {
          return [];
        }
        function Bi() {
          return !1;
        }
        function Tm() {
          return {};
        }
        function Cm() {
          return "";
        }
        function Nm() {
          return !0;
        }
        function vm(e, s) {
          if (e = J(e), e < 1 || e > Ye)
            return [];
          var r = Ve, u = He(e, Ve);
          s = W(s), e -= Ve;
          for (var l = Gr(u, s); ++r < e; )
            s(r);
          return l;
        }
        function Am(e) {
          return K(e) ? Ie(e, Bt) : dt(e) ? [e] : rt(qu(pe(e)));
        }
        function Sm(e) {
          var s = ++Lc;
          return pe(e) + s;
        }
        var Im = zs(function(e, s) {
          return e + s;
        }, 0), bm = fi("ceil"), xm = zs(function(e, s) {
          return e / s;
        }, 1), wm = fi("floor");
        function Dm(e) {
          return e && e.length ? Gs(e, ut, Qr) : n;
        }
        function Om(e, s) {
          return e && e.length ? Gs(e, W(s, 2), Qr) : n;
        }
        function Rm(e) {
          return Ra(e, ut);
        }
        function Pm(e, s) {
          return Ra(e, W(s, 2));
        }
        function Fm(e) {
          return e && e.length ? Gs(e, ut, ti) : n;
        }
        function Lm(e, s) {
          return e && e.length ? Gs(e, W(s, 2), ti) : n;
        }
        var Bm = zs(function(e, s) {
          return e * s;
        }, 1), Mm = fi("round"), Um = zs(function(e, s) {
          return e - s;
        }, 0);
        function km(e) {
          return e && e.length ? kr(e, ut) : 0;
        }
        function Gm(e, s) {
          return e && e.length ? kr(e, W(s, 2)) : 0;
        }
        return f.after = op, f.ary = so, f.assign = Hp, f.assignIn = _o, f.assignInWith = ar, f.assignWith = Jp, f.at = Qp, f.before = ro, f.bind = Ai, f.bindAll = nm, f.bindKey = io, f.castArray = Tp, f.chain = eo, f.chunk = wf, f.compact = Df, f.concat = Of, f.cond = sm, f.conforms = rm, f.constant = Oi, f.countBy = kg, f.create = Zp, f.curry = ao, f.curryRight = uo, f.debounce = oo, f.defaults = Vp, f.defaultsDeep = ed, f.defer = lp, f.delay = cp, f.difference = Rf, f.differenceBy = Pf, f.differenceWith = Ff, f.drop = Lf, f.dropRight = Bf, f.dropRightWhile = Mf, f.dropWhile = Uf, f.fill = kf, f.filter = Wg, f.flatMap = Yg, f.flatMapDeep = Xg, f.flatMapDepth = qg, f.flatten = Ju, f.flattenDeep = Gf, f.flattenDepth = Wf, f.flip = hp, f.flow = am, f.flowRight = um, f.fromPairs = $f, f.functions = ud, f.functionsIn = od, f.groupBy = zg, f.initial = Yf, f.intersection = Xf, f.intersectionBy = qf, f.intersectionWith = zf, f.invert = cd, f.invertBy = hd, f.invokeMap = Hg, f.iteratee = Ri, f.keyBy = Jg, f.keys = Xe, f.keysIn = at, f.map = er, f.mapKeys = gd, f.mapValues = pd, f.matches = om, f.matchesProperty = lm, f.memoize = nr, f.merge = dd, f.mergeWith = yo, f.method = cm, f.methodOf = hm, f.mixin = Pi, f.negate = sr, f.nthArg = gm, f.omit = md, f.omitBy = Ed, f.once = fp, f.orderBy = Qg, f.over = pm, f.overArgs = gp, f.overEvery = dm, f.overSome = mm, f.partial = Si, f.partialRight = lo, f.partition = Zg, f.pick = _d, f.pickBy = To, f.property = bo, f.propertyOf = Em, f.pull = Qf, f.pullAll = Zu, f.pullAllBy = Zf, f.pullAllWith = Vf, f.pullAt = eg, f.range = _m, f.rangeRight = ym, f.rearg = pp, f.reject = tp, f.remove = tg, f.rest = dp, f.reverse = Ni, f.sampleSize = sp, f.set = Td, f.setWith = Cd, f.shuffle = rp, f.slice = ng, f.sortBy = up, f.sortedUniq = lg, f.sortedUniqBy = cg, f.split = Yd, f.spread = mp, f.tail = hg, f.take = fg, f.takeRight = gg, f.takeRightWhile = pg, f.takeWhile = dg, f.tap = Dg, f.throttle = Ep, f.thru = Vs, f.toArray = po, f.toPairs = Co, f.toPairsIn = No, f.toPath = Am, f.toPlainObject = Eo, f.transform = Nd, f.unary = _p, f.union = mg, f.unionBy = Eg, f.unionWith = _g, f.uniq = yg, f.uniqBy = Tg, f.uniqWith = Cg, f.unset = vd, f.unzip = vi, f.unzipWith = Vu, f.update = Ad, f.updateWith = Sd, f.values = Wn, f.valuesIn = Id, f.without = Ng, f.words = So, f.wrap = yp, f.xor = vg, f.xorBy = Ag, f.xorWith = Sg, f.zip = Ig, f.zipObject = bg, f.zipObjectDeep = xg, f.zipWith = wg, f.entries = Co, f.entriesIn = No, f.extend = _o, f.extendWith = ar, Pi(f, f), f.add = Im, f.attempt = Io, f.camelCase = Dd, f.capitalize = vo, f.ceil = bm, f.clamp = bd, f.clone = Cp, f.cloneDeep = vp, f.cloneDeepWith = Ap, f.cloneWith = Np, f.conformsTo = Sp, f.deburr = Ao, f.defaultTo = im, f.divide = xm, f.endsWith = Od, f.eq = Ot, f.escape = Rd, f.escapeRegExp = Pd, f.every = Gg, f.find = $g, f.findIndex = Ku, f.findKey = td, f.findLast = jg, f.findLastIndex = Hu, f.findLastKey = nd, f.floor = wm, f.forEach = to, f.forEachRight = no, f.forIn = sd, f.forInRight = rd, f.forOwn = id, f.forOwnRight = ad, f.get = xi, f.gt = Ip, f.gte = bp, f.has = ld, f.hasIn = wi, f.head = Qu, f.identity = ut, f.includes = Kg, f.indexOf = jf, f.inRange = xd, f.invoke = fd, f.isArguments = vn, f.isArray = K, f.isArrayBuffer = xp, f.isArrayLike = it, f.isArrayLikeObject = Me, f.isBoolean = wp, f.isBuffer = on, f.isDate = Dp, f.isElement = Op, f.isEmpty = Rp, f.isEqual = Pp, f.isEqualWith = Fp, f.isError = Ii, f.isFinite = Lp, f.isFunction = Kt, f.isInteger = co, f.isLength = rr, f.isMap = ho, f.isMatch = Bp, f.isMatchWith = Mp, f.isNaN = Up, f.isNative = kp, f.isNil = Wp, f.isNull = Gp, f.isNumber = fo, f.isObject = xe, f.isObjectLike = Pe, f.isPlainObject = cs, f.isRegExp = bi, f.isSafeInteger = $p, f.isSet = go, f.isString = ir, f.isSymbol = dt, f.isTypedArray = Gn, f.isUndefined = jp, f.isWeakMap = Yp, f.isWeakSet = Xp, f.join = Kf, f.kebabCase = Fd, f.last = At, f.lastIndexOf = Hf, f.lowerCase = Ld, f.lowerFirst = Bd, f.lt = qp, f.lte = zp, f.max = Dm, f.maxBy = Om, f.mean = Rm, f.meanBy = Pm, f.min = Fm, f.minBy = Lm, f.stubArray = Li, f.stubFalse = Bi, f.stubObject = Tm, f.stubString = Cm, f.stubTrue = Nm, f.multiply = Bm, f.nth = Jf, f.noConflict = fm, f.noop = Fi, f.now = tr, f.pad = Md, f.padEnd = Ud, f.padStart = kd, f.parseInt = Gd, f.random = wd, f.reduce = Vg, f.reduceRight = ep, f.repeat = Wd, f.replace = $d, f.result = yd, f.round = Mm, f.runInContext = C, f.sample = np, f.size = ip, f.snakeCase = jd, f.some = ap, f.sortedIndex = sg, f.sortedIndexBy = rg, f.sortedIndexOf = ig, f.sortedLastIndex = ag, f.sortedLastIndexBy = ug, f.sortedLastIndexOf = og, f.startCase = Xd, f.startsWith = qd, f.subtract = Um, f.sum = km, f.sumBy = Gm, f.template = zd, f.times = vm, f.toFinite = Ht, f.toInteger = J, f.toLength = mo, f.toLower = Kd, f.toNumber = St, f.toSafeInteger = Kp, f.toString = pe, f.toUpper = Hd, f.trim = Jd, f.trimEnd = Qd, f.trimStart = Zd, f.truncate = Vd, f.unescape = em, f.uniqueId = Sm, f.upperCase = tm, f.upperFirst = Di, f.each = to, f.eachRight = no, f.first = Qu, Pi(f, (function() {
          var e = {};
          return Ft(f, function(s, r) {
            me.call(f.prototype, r) || (e[r] = s);
          }), e;
        })(), { chain: !1 }), f.VERSION = i, yt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          f[e].placeholder = f;
        }), yt(["drop", "take"], function(e, s) {
          ae.prototype[e] = function(r) {
            r = r === n ? 1 : je(J(r), 0);
            var u = this.__filtered__ && !s ? new ae(this) : this.clone();
            return u.__filtered__ ? u.__takeCount__ = He(r, u.__takeCount__) : u.__views__.push({
              size: He(r, Ve),
              type: e + (u.__dir__ < 0 ? "Right" : "")
            }), u;
          }, ae.prototype[e + "Right"] = function(r) {
            return this.reverse()[e](r).reverse();
          };
        }), yt(["filter", "map", "takeWhile"], function(e, s) {
          var r = s + 1, u = r == fn || r == Kn;
          ae.prototype[e] = function(l) {
            var p = this.clone();
            return p.__iteratees__.push({
              iteratee: W(l, 3),
              type: r
            }), p.__filtered__ = p.__filtered__ || u, p;
          };
        }), yt(["head", "last"], function(e, s) {
          var r = "take" + (s ? "Right" : "");
          ae.prototype[e] = function() {
            return this[r](1).value()[0];
          };
        }), yt(["initial", "tail"], function(e, s) {
          var r = "drop" + (s ? "" : "Right");
          ae.prototype[e] = function() {
            return this.__filtered__ ? new ae(this) : this[r](1);
          };
        }), ae.prototype.compact = function() {
          return this.filter(ut);
        }, ae.prototype.find = function(e) {
          return this.filter(e).head();
        }, ae.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, ae.prototype.invokeMap = V(function(e, s) {
          return typeof e == "function" ? new ae(this) : this.map(function(r) {
            return rs(r, e, s);
          });
        }), ae.prototype.reject = function(e) {
          return this.filter(sr(W(e)));
        }, ae.prototype.slice = function(e, s) {
          e = J(e);
          var r = this;
          return r.__filtered__ && (e > 0 || s < 0) ? new ae(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), s !== n && (s = J(s), r = s < 0 ? r.dropRight(-s) : r.take(s - e)), r);
        }, ae.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, ae.prototype.toArray = function() {
          return this.take(Ve);
        }, Ft(ae.prototype, function(e, s) {
          var r = /^(?:filter|find|map|reject)|While$/.test(s), u = /^(?:head|last)$/.test(s), l = f[u ? "take" + (s == "last" ? "Right" : "") : s], p = u || /^find/.test(s);
          l && (f.prototype[s] = function() {
            var m = this.__wrapped__, E = u ? [1] : arguments, A = m instanceof ae, D = E[0], O = A || K(m), P = function(re) {
              var ue = l.apply(f, en([re], E));
              return u && B ? ue[0] : ue;
            };
            O && r && typeof D == "function" && D.length != 1 && (A = O = !1);
            var B = this.__chain__, k = !!this.__actions__.length, $ = p && !B, Q = A && !k;
            if (!p && O) {
              m = Q ? m : new ae(this);
              var j = e.apply(m, E);
              return j.__actions__.push({ func: Vs, args: [P], thisArg: n }), new Ct(j, B);
            }
            return $ && Q ? e.apply(this, E) : (j = this.thru(P), $ ? u ? j.value()[0] : j.value() : j);
          });
        }), yt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var s = Ss[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
          f.prototype[e] = function() {
            var l = arguments;
            if (u && !this.__chain__) {
              var p = this.value();
              return s.apply(K(p) ? p : [], l);
            }
            return this[r](function(m) {
              return s.apply(K(m) ? m : [], l);
            });
          };
        }), Ft(ae.prototype, function(e, s) {
          var r = f[s];
          if (r) {
            var u = r.name + "";
            me.call(Ln, u) || (Ln[u] = []), Ln[u].push({ name: s, func: r });
          }
        }), Ln[qs(n, ee).name] = [{
          name: "wrapper",
          func: n
        }], ae.prototype.clone = Vc, ae.prototype.reverse = eh, ae.prototype.value = th, f.prototype.at = Og, f.prototype.chain = Rg, f.prototype.commit = Pg, f.prototype.next = Fg, f.prototype.plant = Bg, f.prototype.reverse = Mg, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = Ug, f.prototype.first = f.prototype.head, Qn && (f.prototype[Qn] = Lg), f;
      }), Rn = Rc();
      dn ? ((dn.exports = Rn)._ = Rn, Rr._ = Rn) : ze._ = Rn;
    }).call(x_);
  })(ps, ps.exports)), ps.exports;
}
var D_ = w_();
const O_ = { class: "routing-widget" }, R_ = { class: "routing-header" }, P_ = ["value"], F_ = { class: "waypoints-list" }, L_ = { class: "waypoint-input-wrapper" }, B_ = { class: "waypoint-label" }, M_ = ["onUpdate:modelValue", "onInput", "onFocus"], U_ = {
  key: 0,
  class: "suggestions-dropdown"
}, k_ = ["onMousedown"], G_ = ["onClick"], W_ = { class: "routing-actions" }, $_ = ["disabled"], j_ = {
  key: 0,
  class: "route-result"
}, Y_ = { class: "result-summary" }, X_ = { class: "summary-item" }, q_ = { class: "summary-value" }, z_ = { class: "summary-item" }, K_ = { class: "summary-value" }, H_ = { class: "summary-item" }, J_ = { class: "summary-value" }, Q_ = { class: "maneuvers-section" }, Z_ = {
  key: 0,
  class: "maneuvers-list"
}, V_ = { class: "maneuver-instruction" }, ey = { class: "maneuver-distance" }, ty = /* @__PURE__ */ Yo({
  __name: "RoutingWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(y, { expose: t }) {
    const n = y, { datasourceId: i, config: a, id: o } = Xo(n), c = Mi(rE.TINY_EMITTER), d = Mi($m), T = nE().params.pageid || "", x = a.value?.waypoints, v = Qt(
      Array.isArray(x) ? [...x] : []
    ), R = Qt(
      a.value?.costing || a.value?.defaultCosting || "auto"
    ), M = Qt(null), Y = Qt(!1), se = Qt(!1), z = Qt(
      Array.isArray(x) && x.length > 0 ? x.map((F) => F.name || `${F.lat.toFixed(4)}, ${F.lon.toFixed(4)}`) : ["", ""]
    ), ee = Qt(
      Array.isArray(x) && x.length > 0 ? x.map(() => []) : [[], []]
    ), ke = Qt(-1);
    function Ae() {
      if (!a.value) return;
      const F = v.value.filter((L) => L.lat !== 0 || L.lon !== 0);
      a.value.waypoints = F.length > 0 ? [...F] : void 0, a.value.costing = R.value;
    }
    hs(v, Ae, { deep: !0 }), hs(R, Ae);
    const Fe = Qt(null), { update: ie } = sE(
      i,
      "object",
      Fe
    );
    hs(i, (F, L) => {
      ie(F, L);
    }), hs(Fe, (F) => {
      F && (M.value = F);
    });
    const De = [
      { text: "Auto", value: "auto", icon: "🚗" },
      { text: "Fahrrad", value: "bicycle", icon: "🚲" },
      { text: "Zu Fuß", value: "pedestrian", icon: "🚶" },
      { text: "LKW", value: "truck", icon: "🚛" },
      { text: "Bus", value: "bus", icon: "🚌" },
      { text: "Roller", value: "motor_scooter", icon: "🛵" },
      { text: "Motorrad", value: "motorcycle", icon: "🏍️" }
    ], qe = Ui(() => {
      const F = De.find((L) => L.value === R.value);
      return F ? `${F.icon} ${F.text}` : R.value;
    }), Le = Ui(() => {
      if (!M.value) return "";
      const F = M.value.summary.duration_min;
      if (F < 60) return `${F} min`;
      const L = Math.floor(F / 60), X = F % 60;
      return X > 0 ? `${L} h ${X} min` : `${L} h`;
    }), ht = Ui(() => M.value?.legs ? M.value.legs.flatMap(
      (F, L) => F.maneuvers.map((X) => ({ ...X, legIndex: L }))
    ) : []);
    async function S(F, L) {
      if (!F || F.length < 3) {
        ee.value[L] = [];
        return;
      }
      try {
        const X = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
          q: F,
          format: "json",
          limit: "5",
          addressdetails: "1"
        }), ge = await fetch(X, {
          headers: { "User-Agent": "DaanseBoard/1.0" }
        });
        ee.value[L] = await ge.json();
      } catch {
        ee.value[L] = [];
      }
    }
    const An = D_.debounce(S, 400);
    function Ut(F) {
      ke.value = F, An(z.value[F], F);
    }
    function zn(F, L) {
      const X = {
        lat: parseFloat(L.lat),
        lon: parseFloat(L.lon),
        name: L.display_name?.split(",")[0] || ""
      };
      z.value[F] = X.name || L.display_name, ee.value[F] = [], ke.value = -1, F < v.value.length ? v.value[F] = X : v.value.push(X), Ze(X, F);
    }
    function fn() {
      const F = v.value.length > 0 ? v.value.length - 1 : v.value.length;
      v.value.splice(F, 0, {
        lat: 0,
        lon: 0,
        name: ""
      }), z.value.splice(F, 0, ""), ee.value.splice(F, 0, []);
    }
    function Sn(F) {
      const L = v.value.splice(F, 1)[0];
      z.value.splice(F, 1), ee.value.splice(F, 1), L && Ve(L, F);
    }
    function Kn(F) {
      return F === 0 ? "Start" : F === v.value.length - 1 && v.value.length > 1 ? "Ziel" : `Halt ${F}`;
    }
    function fe(F) {
      return F === 0 ? "#4caf50" : F === v.value.length - 1 && v.value.length > 1 ? "#f44336" : "#2196f3";
    }
    async function Ye() {
      const F = v.value.filter(
        (L) => L.lat !== 0 || L.lon !== 0
      );
      if (!(F.length < 2)) {
        Y.value = !0;
        try {
          const {
            DatasourceRepository: L,
            identifier: X
          } = await import("org.eclipse.daanse.board.app.lib.repository.datasource"), Oe = Mi(X).getDatasource(i.value);
          Oe && typeof Oe.callEvent == "function" && await Oe.callEvent(iE, {
            waypoints: F,
            costing: R.value
          });
        } catch (L) {
          console.warn("Route calculation failed:", L);
        } finally {
          Y.value = !1;
        }
      }
    }
    function gn() {
      v.value = [], z.value = ["", ""], ee.value = [[], []], M.value = null, Ae(), o?.value && c.emit("widget:RoutingWidget:route_cleared", {
        type: "widget:RoutingWidget:route_cleared",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }
    function Ze(F, L) {
      if (!o?.value) return;
      const X = new de();
      X.lat = F.lat, X.lon = F.lon, X.name = F.name ?? "", X.index = L, c.emit("widget:RoutingWidget:waypoint_added", {
        type: "widget:RoutingWidget:waypoint_added",
        widgetId: o.value,
        payload: X,
        timestamp: Date.now()
      });
    }
    function Ve(F, L) {
      if (!o?.value) return;
      const X = new de();
      X.lat = F.lat, X.lon = F.lon, X.name = F.name ?? "", X.index = L, c.emit("widget:RoutingWidget:waypoint_removed", {
        type: "widget:RoutingWidget:waypoint_removed",
        widgetId: o.value,
        payload: X,
        timestamp: Date.now()
      });
    }
    function ce(F) {
      if (!o?.value) return;
      const L = new oe();
      L.geojson = F.geojson, L.distance_km = F.summary.distance_km, L.duration_min = F.summary.duration_min, L.waypoints = F.waypoints, L.costing = R.value, c.emit("widget:RoutingWidget:route_calculated", {
        type: "widget:RoutingWidget:route_calculated",
        widgetId: o.value,
        payload: L,
        timestamp: Date.now()
      });
    }
    hs(M, (F) => {
      F && ce(F);
    });
    class Hn extends b_ {
      addWaypoint(L, X, ge) {
        const Oe = { lat: L, lon: X, name: ge };
        v.value.push(Oe), z.value.push(ge || `${L.toFixed(4)}, ${X.toFixed(4)}`), ee.value.push([]), Ze(Oe, v.value.length - 1);
      }
      removeWaypoint(L) {
        Sn(L);
      }
      clearWaypoints() {
        gn();
      }
      setCosting(L) {
        R.value = L;
      }
      calculateRoute() {
        Ye();
      }
    }
    const Zt = new Hn();
    return t(Zt), Km(() => {
      o?.value && d.registerInstance(
        o.value,
        Zt,
        "RoutingWidget",
        T
      ), v.value.filter((L) => L.lat !== 0 || L.lon !== 0).length >= 2 && Ye();
    }), Hm(() => {
      o?.value && d.unregisterInstance(o.value);
    }), (F, L) => (lt(), ot("div", O_, [
      Ce("div", R_, [
        L[2] || (L[2] = Ce("span", { class: "routing-title" }, "Routing", -1)),
        wo(Ce("select", {
          "onUpdate:modelValue": L[0] || (L[0] = (X) => R.value = X),
          class: "costing-select"
        }, [
          (lt(), ot(ur, null, or(De, (X) => Ce("option", {
            key: X.value,
            value: X.value
          }, It(X.icon) + " " + It(X.text), 9, P_)), 64))
        ], 512), [
          [Jm, R.value]
        ])
      ]),
      Ce("div", F_, [
        (lt(!0), ot(ur, null, or(Math.max(2, v.value.length), (X, ge) => (lt(), ot("div", {
          key: ge,
          class: "waypoint-row"
        }, [
          Ce("div", {
            class: "waypoint-dot",
            style: Qm({ backgroundColor: fe(ge) })
          }, null, 4),
          Ce("div", L_, [
            Ce("label", B_, It(Kn(ge)), 1),
            wo(Ce("input", {
              "onUpdate:modelValue": (Oe) => z.value[ge] = Oe,
              class: "waypoint-input",
              placeholder: "Adresse eingeben...",
              onInput: (Oe) => Ut(ge),
              onFocus: (Oe) => ke.value = ge
            }, null, 40, M_), [
              [Zm, z.value[ge]]
            ]),
            ke.value === ge && ee.value[ge] && ee.value[ge].length > 0 ? (lt(), ot("div", U_, [
              (lt(!0), ot(ur, null, or(ee.value[ge], (Oe, In) => (lt(), ot("div", {
                key: In,
                class: "suggestion-item",
                onMousedown: Vm((kt) => zn(ge, Oe), ["prevent"])
              }, It(Oe.display_name), 41, k_))), 128))
            ])) : jn("", !0)
          ]),
          ge >= 2 ? (lt(), ot("button", {
            key: 0,
            class: "remove-btn",
            title: "Entfernen",
            onClick: (Oe) => Sn(ge)
          }, " × ", 8, G_)) : jn("", !0)
        ]))), 128))
      ]),
      Ce("div", W_, [
        Ce("button", {
          class: "btn-secondary",
          onClick: fn
        }, " + Zwischenhalt "),
        Ce("button", {
          class: "btn-primary",
          disabled: Y.value,
          onClick: Ye
        }, It(Y.value ? "Berechne..." : "Route berechnen"), 9, $_),
        M.value || v.value.length > 0 ? (lt(), ot("button", {
          key: 0,
          class: "btn-clear",
          onClick: gn
        }, " Löschen ")) : jn("", !0)
      ]),
      M.value ? (lt(), ot("div", j_, [
        Ce("div", Y_, [
          Ce("div", X_, [
            Ce("span", q_, It(M.value.summary.distance_km.toFixed(1)) + " km ", 1),
            L[3] || (L[3] = Ce("span", { class: "summary-label" }, "Distanz", -1))
          ]),
          Ce("div", z_, [
            Ce("span", K_, It(Le.value), 1),
            L[4] || (L[4] = Ce("span", { class: "summary-label" }, "Dauer", -1))
          ]),
          Ce("div", H_, [
            Ce("span", J_, It(qe.value), 1),
            L[5] || (L[5] = Ce("span", { class: "summary-label" }, "Verkehrsart", -1))
          ])
        ]),
        Ce("div", Q_, [
          Ce("button", {
            class: "maneuvers-toggle",
            onClick: L[1] || (L[1] = (X) => se.value = !se.value)
          }, It(se.value ? "▾" : "▸") + " Manöver (" + It(ht.value.length) + ") ", 1),
          se.value ? (lt(), ot("div", Z_, [
            (lt(!0), ot(ur, null, or(ht.value, (X, ge) => (lt(), ot("div", {
              key: ge,
              class: "maneuver-item"
            }, [
              Ce("span", V_, It(X.instruction), 1),
              Ce("span", ey, It(X.length.toFixed(1)) + " km ", 1)
            ]))), 128))
          ])) : jn("", !0)
        ])
      ])) : jn("", !0)
    ]));
  }
}), ny = {
  key: 0,
  class: "routing-settings"
}, sy = /* @__PURE__ */ Yo({
  __name: "RoutingWidgetSettings",
  props: {
    widgetSettings: {}
  },
  setup(y) {
    const t = y, { widgetSettings: n } = Xo(t), i = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Zu Fuß", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Roller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ];
    return n.value && !n.value.defaultCosting && (n.value.defaultCosting = "auto"), (a, o) => {
      const c = eE("VaSelect");
      return ki(n) ? (lt(), ot("div", ny, [
        tE(c, {
          modelValue: ki(n).defaultCosting,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => ki(n).defaultCosting = d),
          label: "Default Verkehrsart",
          options: i,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"])
      ])) : jn("", !0);
    };
  }
}), ry = (y, t) => {
  const n = y.__vccOpts || y;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, iy = /* @__PURE__ */ ry(sy, [["__scopeId", "data-v-79a5860e"]]), ay = [
  {
    name: "Route Calculated",
    type: "route_calculated",
    description: "Triggered when a route has been calculated",
    payloadType: oe
  },
  {
    name: "Waypoint Added",
    type: "waypoint_added",
    description: "Triggered when a waypoint is added",
    payloadType: de
  },
  {
    name: "Waypoint Removed",
    type: "waypoint_removed",
    description: "Triggered when a waypoint is removed",
    payloadType: de
  },
  {
    name: "Route Cleared",
    type: "route_cleared",
    description: "Triggered when all waypoints and the route are cleared",
    payloadType: zi
  }
];
var uy = Object.defineProperty, oy = Object.getOwnPropertyDescriptor, Zi = (y, t, n, i) => {
  for (var a = i > 1 ? void 0 : i ? oy(t, n) : t, o = y.length - 1, c; o >= 0; o--)
    (c = y[o]) && (a = (i ? c(t, n, a) : c(a)) || a);
  return i && a && uy(t, n, a), a;
}, ly = (y, t) => (n, i) => t(n, i, y);
const cr = "RoutingWidget";
let gr = class {
  constructor(y) {
    this.events = y;
  }
  type = cr;
  component = ty;
  settingsComponent = iy;
  supportedDSTypes = ["valhalla"];
  icon = uE;
  name = "Routing";
  register() {
    this.events.registerWidget(cr, ay);
  }
  unregister() {
    this.events.unregisterWidget(cr);
  }
};
Zi([
  Ym()
], gr.prototype, "register", 1);
Zi([
  Xm()
], gr.prototype, "unregister", 1);
gr = Zi([
  qm({
    service: [aE],
    properties: { "widget.type": cr }
  }),
  ly(0, zm(jm))
], gr);
export {
  ty as RoutingWidget,
  gr as RoutingWidgetProvider,
  iy as RoutingWidgetSettings
};
